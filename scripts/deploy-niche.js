#!/usr/bin/env node
/* ────────────────────────────────────────────────────────────
   Portfolio Factory — Niche Deploy Script

   Usage:
     node scripts/deploy-niche.js <niche>
     node scripts/deploy-niche.js shopify
     node scripts/deploy-niche.js --all

   Prerequisites:
     - Run build-niche.js first to create dist-{niche}/
     - Vercel CLI installed globally: npm i -g vercel
     - Logged in to Vercel: vercel login
   ──────────────────────────────────────────────────────────── */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const args = process.argv.slice(2);

if (args.length < 1) {
  console.log(`
  Portfolio Factory — Deploy Script

  Usage:
    node scripts/deploy-niche.js <niche>        Deploy single niche
    node scripts/deploy-niche.js --all          Deploy all built niches
    node scripts/deploy-niche.js --status       Show deployment status
  `);
  process.exit(1);
}

// ─── Load registry ──────────────────────────────────────────
const registryPath = join(ROOT, 'src/data/registry.json');
function loadRegistry() {
  if (!existsSync(registryPath)) {
    return { owner: 'unknown', deployments: [] };
  }
  return JSON.parse(readFileSync(registryPath, 'utf-8'));
}

function saveRegistry(registry) {
  writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf-8');
}

// ─── Status command ─────────────────────────────────────────
if (args[0] === '--status') {
  const reg = loadRegistry();
  console.log(`\n  Deployment Registry (${reg.owner})`);
  console.log(`  ${'─'.repeat(60)}`);

  if (reg.deployments.length === 0) {
    console.log('  No deployments yet. Run build-niche.js first.');
  } else {
    reg.deployments.forEach(d => {
      const status = d.status === 'deployed' ? '\x1b[32m●\x1b[0m' : '\x1b[33m○\x1b[0m';
      console.log(`  ${status} ${d.id.padEnd(30)} ${d.url}`);
      console.log(`    ${d.nicheLabel} | Last: ${d.lastBuilt || d.lastDeployed || 'never'}`);
    });
  }
  console.log();
  process.exit(0);
}

// ─── Deploy function ────────────────────────────────────────
function deployNiche(niche) {
  const distDir = join(ROOT, `dist-${niche}`);

  if (!existsSync(distDir)) {
    console.error(`  dist-${niche}/ not found. Run build-niche.js first.`);
    return false;
  }

  const registry = loadRegistry();
  const deployment = registry.deployments.find(d => d.nicheRef === niche);

  if (!deployment) {
    console.error(`  No registry entry for "${niche}". Run build-niche.js first.`);
    return false;
  }

  console.log(`\n  Deploying: ${deployment.id}`);
  console.log(`  Target:    ${deployment.url}`);
  console.log(`  ${'─'.repeat(50)}`);

  try {
    // Deploy to Vercel
    console.log('  Pushing to Vercel...');
    const output = execSync(
      `npx vercel --prod --yes "${distDir}"`,
      { cwd: ROOT, encoding: 'utf-8', timeout: 120000 }
    ).trim();

    console.log(`  Deployed: ${output}`);

    // Set alias
    console.log(`  Setting alias: ${deployment.subdomain}.vercel.app`);
    try {
      execSync(
        `npx vercel alias "${output}" "${deployment.subdomain}.vercel.app"`,
        { cwd: ROOT, encoding: 'utf-8', timeout: 30000 }
      );
      console.log(`  Alias set successfully`);
    } catch {
      console.log(`  Alias may already exist or need manual setup`);
    }

    // Update registry
    deployment.status = 'deployed';
    deployment.lastDeployed = new Date().toISOString();
    deployment.vercelUrl = output;
    saveRegistry(registry);

    console.log(`  Deploy complete!`);
    return true;
  } catch (err) {
    console.error(`  Deploy failed: ${err.message}`);
    return false;
  }
}

// ─── Execute ────────────────────────────────────────────────
if (args[0] === '--all') {
  const registry = loadRegistry();
  const niches = registry.deployments.map(d => d.nicheRef);

  if (niches.length === 0) {
    console.log('  No builds found. Run build-niche.js first.');
    process.exit(1);
  }

  console.log(`\n  Deploying ALL ${niches.length} niches...`);

  let success = 0;
  for (const n of niches) {
    if (deployNiche(n)) success++;
  }

  console.log(`\n  Done! ${success}/${niches.length} deployed successfully.`);
} else {
  deployNiche(args[0]);
}
