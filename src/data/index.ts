export const profile = {
  name: 'Vivek Raj Singh',
  initials: 'VRS',
  title: 'Full-Stack Web Developer & UI/UX Specialist',
  tagline: 'Building high-performance web experiences that scale globally',
  bio: `Elite full-stack developer with 6+ years building high-performance web applications, SaaS platforms, and design systems for India's top tech companies and global clients. Expert in React, Next.js, Node.js, TypeScript, and modern cloud architecture. Built e-commerce platforms processing ₹500 Cr+ in GMV, developer tools used by 50K+ engineers, and design systems adopted across enterprise organizations. Passionate about clean code, pixel-perfect UI, and blazing-fast performance.`,
  email: 'shubhamrvilgax@gmail.com',
  phone: '+91 70719 84914',
  location: 'Mumbai, Maharashtra, India',
};

export const stats = [
  { value: '6+', label: 'Years Exp.' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '2M+', label: 'Users Served' },
  { value: '100%', label: '5-Star Rating' },
];

export const skills = [
  { name: 'React / Next.js', level: 98, category: 'frontend' },
  { name: 'TypeScript', level: 97, category: 'frontend' },
  { name: 'Tailwind / CSS', level: 96, category: 'frontend' },
  { name: 'Node.js / Express', level: 95, category: 'backend' },
  { name: 'PostgreSQL / MongoDB', level: 93, category: 'backend' },
  { name: 'Figma / UI Design', level: 94, category: 'design' },
  { name: 'AWS / Vercel', level: 91, category: 'backend' },
  { name: 'GraphQL / REST', level: 92, category: 'backend' },
  { name: 'Docker / CI/CD', level: 88, category: 'backend' },
];

export const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  tools: ['Figma', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Storybook'],
};

export const experience = [
  {
    role: 'Freelance Full-Stack Developer & UI/UX Consultant',
    company: 'Self-Employed',
    type: 'Freelance / Contract',
    location: 'Remote, India',
    period: 'Feb 2025 — Present',
    highlights: [
      'Deliver end-to-end web development for 15+ clients across e-commerce, SaaS, and edtech verticals',
      'Architected and shipped 6 production web apps with Next.js 14 and serverless architecture',
      'Designed complete design systems and component libraries adopted by 3 enterprise clients',
      'Provide frontend architecture consulting for startup engineering teams of 5-20 engineers',
    ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Razorpay',
    type: 'Full-time',
    location: 'Bengaluru, India',
    period: 'Mar 2023 — Jan 2025',
    highlights: [
      "Led the redesign of Razorpay's merchant dashboard serving 8M+ businesses with React & TypeScript",
      'Built real-time payment analytics dashboard processing 10M+ transactions daily with sub-200ms renders',
      'Architected micro-frontend architecture reducing deployment time by 65% across 12 product teams',
      'Implemented design system (RazorUI) with 80+ components used by 50+ internal developers',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Freshworks',
    type: 'Full-time',
    location: 'Chennai, India',
    period: 'Jul 2021 — Feb 2023',
    highlights: [
      "Built Freshworks' next-gen CRM dashboard (React + Node.js) serving 60K+ enterprise customers globally",
      'Developed real-time collaborative features using WebSocket and CRDT for multi-user ticket management',
      'Reduced frontend bundle size by 42% through code splitting, tree shaking, and lazy loading optimizations',
      'Led migration from legacy jQuery codebase to modern React architecture — zero downtime, 3x faster UX',
    ],
  },
];

export const projects = [
  {
    title: 'ShopKart',
    subtitle: 'Full-Stack E-Commerce Platform',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS', 'Redis'],
    description: 'Enterprise-grade e-commerce platform with real-time inventory management, AI-powered product recommendations, and blazing-fast search using Elasticsearch. Features include multi-vendor marketplace, dynamic pricing engine, AR product preview, and a custom headless CMS. Built with Next.js 14 App Router, server components, and edge functions for sub-100ms TTFB globally. Integrated Razorpay and Stripe for multi-currency payments processing ₹200 Cr+ GMV monthly. Rated 4.9 stars by merchants with 99.99% uptime SLA.',
    metric: '₹200 Cr+ GMV',
    color: '#6366f1',
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'DevBoard',
    subtitle: 'Developer Productivity Dashboard',
    tech: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Docker', 'WebSocket'],
    description: 'Real-time developer productivity platform that aggregates GitHub, Jira, Slack, and CI/CD pipelines into a unified command center. Features include sprint velocity tracking, code review analytics, deployment health monitoring, and AI-generated standup summaries. Built custom GraphQL federation layer unifying 8 different APIs. Real-time collaboration with CRDT-based shared workspaces. Used by 50K+ developers across 200+ engineering teams with 4.8-star rating on Product Hunt.',
    metric: '50K+ Developers',
    color: '#10b981',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'PortfolioForge',
    subtitle: 'AI-Powered Portfolio Builder',
    tech: ['Next.js', 'OpenAI', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
    description: 'SaaS platform enabling developers and designers to create stunning portfolio websites in minutes with AI-assisted content generation. Features include 50+ customizable themes with dark mode, drag-and-drop layout editor, SEO optimization engine, custom domain support, and one-click Vercel deployment. AI generates tailored project descriptions, bio sections, and meta tags. Processes 5K+ portfolio deployments monthly with 97% user satisfaction rate.',
    metric: '5K+ Portfolios/mo',
    color: '#f59e0b',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'CloudNotes',
    subtitle: 'Collaborative Documentation Platform',
    tech: ['React', 'Yjs', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    description: 'Real-time collaborative documentation platform built for engineering teams. Features include Notion-like block editor with 30+ block types, real-time multiplayer editing using Yjs CRDT, version history with visual diffs, inline code execution, and knowledge graph visualization. Supports Markdown, LaTeX, Mermaid diagrams, and embedded code playgrounds. Handles 10K+ concurrent editors with conflict-free synchronization.',
    metric: '10K+ Teams',
    color: '#ec4899',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'AnalyticsHQ',
    subtitle: 'Real-Time Business Intelligence Dashboard',
    tech: ['Next.js', 'D3.js', 'ClickHouse', 'Redis', 'WebSocket'],
    description: 'High-performance analytics dashboard processing 100M+ events daily with sub-second query response times. Built custom charting engine with D3.js supporting 20+ visualization types, real-time streaming updates, and drill-down exploration. Features include custom funnel builder, cohort analysis, A/B test reporting, and automated anomaly detection. Optimized ClickHouse queries achieving 10x improvement over legacy PostgreSQL setup.',
    metric: '100M+ Events/day',
    color: '#8b5cf6',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'DesignKit',
    subtitle: 'Open-Source React Component Library',
    tech: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Tailwind CSS'],
    description: 'Production-ready React component library with 120+ accessible, composable components built on Radix UI primitives. Features include dark/light themes, RTL support, comprehensive Storybook documentation, Figma design tokens sync, and automated visual regression testing. Used by 200+ projects on GitHub with 8K+ stars. Published as npm package with tree-shakeable ESM exports — zero unused CSS in production builds.',
    metric: '8K+ GitHub Stars',
    color: '#06b6d4',
    span: 'col-span-2 row-span-1',
  },
];

export const education = [
  {
    degree: 'M.Tech Computer Science — Web Technologies',
    school: 'IIIT Hyderabad',
    year: '2023',
    details: 'Thesis: "Optimizing Server-Side Rendering for Large-Scale React Applications" | CGPA: 9.4/10',
  },
  {
    degree: 'B.Tech Computer Science & Engineering',
    school: 'RGPV Bhopal (Rajiv Gandhi Proudyogiki Vishwavidyalaya)',
    year: '2021',
    details: 'Smart India Hackathon Finalist | Web Dev Club President | CGPA: 8.8/10',
  },
];

export const awards = [
  { title: 'Product Hunt #1 Product of the Day', detail: 'DevBoard featured as top developer tool (2024)' },
  { title: 'Razorpay Innovator Award', detail: 'For merchant dashboard redesign reducing churn by 23%' },
  { title: 'Top 1% Freelancer — Toptal', detail: "Accepted into Toptal's exclusive full-stack developer network" },
  { title: 'React India Conference Speaker', detail: '"Scaling Design Systems to 50+ Teams" — Goa (2024)' },
];

export const certifications = [
  'AWS Certified Solutions Architect — Associate, 2024',
  'Meta Frontend Developer Professional — Coursera, 2023',
  'Google UX Design Professional Certificate, 2023',
  'MongoDB Certified Developer — Associate, 2022',
];

export const testimonials = [
  {
    quote: 'Vivek delivered our e-commerce platform 2 weeks ahead of schedule with performance numbers that exceeded every benchmark. The Next.js architecture he designed handles our flash sales with zero downtime even at 50K concurrent users. Absolutely world-class web engineering.',
    author: 'Arjun Mehta',
    role: 'Co-Founder & CTO, ShopKart (YC W23)',
  },
  {
    quote: 'Best full-stack developer we have ever worked with, period. Vivek rebuilt our entire CRM frontend from jQuery to React in 16 weeks — we launched with 4.9 stars from beta users and zero critical bugs in the first 3 months. His attention to accessibility and performance on slow networks was remarkable.',
    author: 'Priya Nair',
    role: 'VP Engineering, Freshworks',
  },
  {
    quote: 'We brought Vivek in to rescue a Next.js app that was scoring 22 on Lighthouse. Within 4 weeks he rewrote the rendering pipeline, optimized images, and got our Core Web Vitals to all green — LCP dropped from 4.2s to 0.8s. He then stayed on to build our real-time analytics dashboard.',
    author: 'Rahul Sharma',
    role: 'Head of Product, Razorpay',
  },
  {
    quote: 'Vivek architected our design system that now powers 12 products across our organization. His deep knowledge of React composition patterns, TypeScript generics, and accessibility saved us months of engineering time. He is genuinely one of the top 3 frontend engineers I have worked with in 15 years.',
    author: 'Dr. Sneha Kulkarni',
    role: 'Engineering Director, Freshworks',
  },
];
