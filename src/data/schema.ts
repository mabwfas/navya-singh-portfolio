/* ────────────────────────────────────────────────────────────
   Portfolio Factory — Data Schema
   Separates PERSONAL identity from NICHE-specific career data.
   ──────────────────────────────────────────────────────────── */

// ─── Layer 1: Person (identity, contact, education) ─────────

export interface PersonProfile {
  name: string;
  initials: string;
  email: string;
  phone: string;
  location: string;
  photo: string;           // filename in /public (e.g. "shreyansh.jpg")
  links: {
    github?: string;
    linkedin?: string;
    fiverr?: string;
    youtube?: string;
    website?: string;
    twitter?: string;
  };
  education: Education[];
  certifications: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  details: string;
}

// ─── Layer 2: Niche (career-specific content) ───────────────

export interface NicheConfig {
  nicheId: string;          // e.g. "dev", "shopify", "flutter"
  nicheLabel: string;       // e.g. "Full-Stack Developer"
  title: string;            // Hero title
  tagline: string;          // Hero tagline
  bio: string;              // About section bio
  badge: string;            // Hero badge text
  stats: Stat[];
  skills: Skill[];
  techStack: Record<string, string[]>;
  experience: Experience[];
  projects: Project[];
  testimonials: Testimonial[];
  fiverrReviews: FiverrReview[];
  fiverrStats: FiverrStats;
  awards: Award[];
  youtube: YouTubeConfig;
  processSteps: ProcessStep[];
  pricingPlans: PricingPlan[];
  caseStudy: CaseStudy;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  client: string;
  role: string;
  tech: string[];
  description: string;
  metric: string;
  color: string;
  span: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FiverrReview {
  username: string;
  country: string;
  flag: string;
  rating: number;
  quote: string;
  price: string;
  duration: string;
  repeat?: boolean;
}

export interface FiverrStats {
  rating: string;
  reviews: string;
  responseTime: string;
  level: string;
}

export interface Award {
  title: string;
  detail: string;
}

export interface YouTubeConfig {
  channel: string;
  handle: string;
  subscribers: string;
  videos: string;
  url: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface CaseStudy {
  project: string;
  client: string;
  role: string;
  problem: string;
  solution: string;
  challenges: string[];
  results: { label: string; value: string }[];
}

// ─── Layer 3: Deployment (where + how to deploy) ────────────

export interface Deployment {
  id: string;               // e.g. "shreyansh-singh-dev"
  profileRef: string;        // filename: "shreyansh-singh"
  nicheRef: string;          // filename: "dev"
  subdomain: string;         // Vercel subdomain
  url: string;               // full URL
  status: 'deployed' | 'draft' | 'building';
  lastDeployed?: string;     // ISO date
  vercelProjectId?: string;
}

export interface DeploymentRegistry {
  owner: string;
  deployments: Deployment[];
}
