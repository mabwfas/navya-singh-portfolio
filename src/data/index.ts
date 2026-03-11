export const profile = {
  name: 'Shreyansh Singh',
  initials: 'SS',
  title: 'Senior Mobile App Developer & Cross-Platform Architect',
  tagline: 'Crafting apps that users love — from concept to App Store',
  bio: `Elite mobile developer with 5+ years building high-performance iOS, Android, and cross-platform applications for India's top tech companies and global startups. Expert in Flutter, React Native, Swift, and Kotlin with 90+ apps shipped collectively serving 50M+ users. Built payment, e-commerce, and fintech apps processing ₹15,000 Cr+ in transactions.`,
  email: 'realshreyanshsingh@gmail.com',
  phone: '+91 88277 41992',
  location: 'Lucknow, UP, India',
};

export const stats = [
  { value: '5+', label: 'Years Exp.' },
  { value: '90+', label: 'Apps Shipped' },
  { value: '50M+', label: 'Users Served' },
  { value: '100%', label: '5-Star Rating' },
];

export const skills = [
  { name: 'Flutter / Dart', level: 98, category: 'frontend' },
  { name: 'React Native / JS', level: 97, category: 'frontend' },
  { name: 'Swift / SwiftUI', level: 96, category: 'frontend' },
  { name: 'Kotlin / Jetpack', level: 95, category: 'backend' },
  { name: 'App Architecture', level: 97, category: 'backend' },
];

export const techStack = {
  frontend: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'SwiftUI', 'Jetpack Compose'],
  backend: ['Firebase', 'Node.js', 'Supabase', 'AWS Amplify', 'GraphQL'],
  tools: ['Fastlane', 'Codemagic', 'Figma', 'Xcode', 'Android Studio', 'RevenueCat'],
};

export const experience = [
  {
    role: 'Freelance Mobile App Developer & Architect',
    company: 'Self-Employed',
    type: 'Freelance / Contract',
    location: 'Remote, India',
    period: 'Jan 2024 — Present',
    highlights: [
      'Deliver end-to-end mobile development for 12+ clients across fintech, health, and e-commerce verticals',
      'Architected and shipped 8 production apps with Flutter and React Native for iOS & Android',
      'Built cross-platform SDKs adopted by 3 enterprise clients for payment integration',
      'Provide mobile architecture consulting for startup engineering teams of 5-15 engineers',
    ],
  },
  {
    role: 'Lead Mobile App Developer',
    company: 'Flipkart (Walmart Inc.)',
    type: 'Full-time',
    location: 'Bengaluru, India',
    period: 'Apr 2022 — Dec 2023',
    highlights: [
      "Led the mobile checkout redesign increasing conversion rate by 18% across Flipkart's 200M+ user base",
      'Architected offline-first cart sync engine reducing order failures by 35% in low-connectivity zones',
      'Built Flutter-based seller app used by 500K+ merchants for real-time inventory management',
      'Mentored team of 6 mobile developers and established code review standards across mobile org',
    ],
  },
  {
    role: 'Senior Mobile App Developer',
    company: 'Razorpay',
    type: 'Full-time',
    location: 'Bengaluru, India',
    period: 'Sep 2020 — Mar 2022',
    highlights: [
      'Implemented UPI deep-link integration, biometric auth, and real-time settlement tracking',
      'Reduced app ANR rate by 76% through systematic memory leak detection',
      'Led mobile SDK development powering payment flows in 50,000+ partner apps',
      'Built React Native merchant dashboard app with real-time transaction analytics',
    ],
  },
  {
    role: 'Junior Mobile App Developer',
    company: 'Paytm (One97 Communications)',
    type: 'Full-time',
    location: 'Noida, India',
    period: 'Aug 2019 — Aug 2020',
    highlights: [
      "Core team member during Paytm's hypergrowth phase — built features serving 100M+ users",
      'Developed QR code scanner and merchant payment flow processing 5M+ daily UPI transactions',
      'Built the Paytm Postpaid module generating ₹200 Cr+ in monthly disbursals',
      'Optimized app for 2G/3G networks and low-RAM devices (1GB)',
    ],
  },
];

export const projects = [
  {
    title: 'NidhiPay',
    subtitle: 'AI-Powered UPI & Banking App',
    client: 'KisanCredit (YC W23)',
    role: 'Sole Developer & Architect',
    tech: ['Flutter', 'Dart', 'Firebase', 'Razorpay SDK', 'ML Kit'],
    description: 'Full-featured fintech super-app built for the Indian market with UPI payments, AI-driven expense categorization, and biometric security. Handles ₹800 Cr+ monthly transaction volume with 99.97% uptime. Features include bill splitting, recurring payments, investment portfolio tracking, and a custom fraud detection engine that reduced chargebacks by 43%. Built the entire payment orchestration layer from scratch, integrating with NPCI, RBI-compliant KYC, and 12 major Indian banks. Rated 4.9 stars on Google Play with 600K+ organic downloads.',
    metric: '628K Downloads',
    color: '#6366f1',
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'VitalSync',
    subtitle: 'Cross-Platform Health & Fitness Tracker',
    client: 'HealthifyMe',
    role: 'Lead React Native Developer',
    tech: ['React Native', 'HealthKit', 'Google Fit', 'Node.js', 'MongoDB'],
    description: 'Comprehensive health and wellness platform that syncs with Apple HealthKit, Google Fit, and 15+ wearable devices including Fitbit, Garmin, and Samsung Galaxy Watch. Features AI-powered workout recommendations, meal planning with barcode scanning, sleep analysis, and mental wellness tracking. Custom charting engine renders real-time biometric data with 60fps animations. Supports offline mode with background sync for uninterrupted tracking.',
    metric: '1.52M Active Users',
    color: '#10b981',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'LiveKart',
    subtitle: 'Live Commerce & Video Shopping Platform',
    client: 'Meesho',
    role: 'Lead Flutter Developer',
    tech: ['Flutter', 'WebRTC', 'Agora SDK', 'Firebase', 'Stripe'],
    description: "India's fastest-growing live commerce platform enabling sellers to broadcast live video shopping sessions with real-time purchasing. Features include low-latency streaming (<300ms), in-stream checkout, AI-powered product recognition, and seller analytics dashboard. Built custom adaptive bitrate streaming engine optimized for Indian network conditions. Handles 50K+ concurrent viewers per stream with instant buy-now functionality.",
    metric: '₹50 Cr+ GMV',
    color: '#f59e0b',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'StyleBazaar',
    subtitle: 'AI Fashion Discovery & Shopping App',
    client: 'Zarqa Retail Group (Dubai)',
    role: 'Sole Developer',
    tech: ['Kotlin', 'Jetpack Compose', 'TensorFlow Lite', 'Room DB', 'Retrofit'],
    description: 'AI-powered fashion discovery app using computer vision to analyze user style preferences and recommend outfits. Features virtual try-on using ARCore, style profile generation, wardrobe management with outfit suggestions, and social sharing. Custom ML model trained on 500K+ Indian fashion images for culturally relevant recommendations. Integrated with 200+ D2C brands for seamless in-app purchasing.',
    metric: '340K Downloads',
    color: '#ec4899',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'DabbaRun',
    subtitle: 'Hyperlocal Food Delivery Platform',
    client: 'Personal Project',
    role: 'Solo Developer & Architect',
    tech: ['Flutter', 'Google Maps SDK', 'Firebase', 'Razorpay', 'Node.js'],
    description: 'Hyperlocal food delivery platform connecting home chefs with customers in tier-2 and tier-3 Indian cities. Features real-time order tracking with live map, dynamic delivery routing algorithm reducing delivery time by 22%, subscription meal plans, and multi-language support in 8 Indian languages. Built custom geofencing engine for accurate delivery zone management.',
    metric: '89K Monthly Orders',
    color: '#8b5cf6',
    span: 'col-span-2 row-span-1',
  },
];

export const education = [
  {
    degree: 'B.Tech Computer Science & Engineering',
    school: 'Jaypee University of Engineering and Technology (JUET), Guna',
    year: '2019',
    details: 'Smart India Hackathon Winner | Google Summer of Code (2x) | CGPA: 9.2/10',
  },
  {
    degree: 'Senior Secondary (XII) — Science',
    school: 'City Montessori School (CMS), Lucknow',
    year: '2015',
    details: 'ICSE Board | Physics, Chemistry, Mathematics & Computer Science',
  },
  {
    degree: 'Secondary (X)',
    school: 'City Montessori School (CMS), Lucknow',
    year: '2013',
    details: 'ICSE Board | School topper in Computer Science',
  },
];

export const awards = [
  { title: 'Google Play App of the Day', detail: 'NidhiPay featured by Google Play India for 3 consecutive weeks (2024)' },
  { title: 'Flipkart Tech Excellence Award', detail: 'For mobile checkout redesign increasing conversion by 18%' },
  { title: 'Smart India Hackathon Winner', detail: 'Built accessible healthcare app for rural India — national finalist (2018)' },
  { title: 'React Native EU Conference Speaker', detail: '"Offline-First Architecture for Emerging Markets" — Wroclaw (2023)' },
];

export const certifications = [
  'Google Associate Android Developer — 2023',
  'AWS Certified Solutions Architect — Associate, 2022',
  'Meta React Native Specialization — Coursera, 2021',
  'Apple Certified iOS Developer, 2020',
];

export const testimonials = [
  {
    quote: "Shreyansh and the DMH team did an outstanding job setting up my Shopify store! Communication was great throughout the entire process.",
    author: 'simonejenkin200',
    role: 'Fiverr Client · United States',
  },
  {
    quote: "Very professional and gives attention to details. The final work exceeded my expectations!",
    author: 'kidboss',
    role: 'Fiverr Client · United States',
  },
  {
    quote: "I had a great experience working with Shreyansh on the development and restructuring of my store. Would definitely recommend!",
    author: 'ydeko4471',
    role: 'Fiverr Client · Bulgaria',
  },
  {
    quote: "Built out everything we were looking to accomplish. Great communication and delivered on time!",
    author: 'ginok708',
    role: 'Fiverr Client · United States',
  },
];

export const fiverrStats = {
  rating: '5.0',
  reviews: '50+',
  responseTime: '1 hour',
  level: 'Top Rated',
};

export const fiverrReviews = [
  { username: 'simonejenkin200', country: 'US', flag: '🇺🇸', rating: 5, quote: 'Shreyansh and the DMH team did an outstanding job setting up my Shopify store! Communication was great throughout the entire process.', price: '$400–600', duration: '10 days' },
  { username: 'ydeko4471', country: 'BG', flag: '🇧🇬', rating: 5, quote: 'I had a great experience working with Shreyansh on the development and restructuring of my Shopify store. Would definitely recommend!', price: '$2,000–3,000', duration: '3 weeks' },
  { username: 'kidboss', country: 'US', flag: '🇺🇸', rating: 5, quote: 'Very professional and gives attention to details. The final work exceeded my expectations!', price: '$600–800', duration: '2 weeks' },
  { username: 'onpointproduct', country: 'US', flag: '🇺🇸', rating: 5, quote: 'I PICKED THE RIGHT WEB DESIGNER! Highly recommended for anyone looking for quality work.', price: '$1,500–2,000', duration: '6 weeks' },
  { username: 'martinmt19', country: 'PL', flag: '🇵🇱', rating: 5, quote: 'Fully functional Shopify store with mobile-first design. Repeat client — always delivers!', price: '$800–1,000', duration: '3 weeks', repeat: true },
  { username: 'anandhprasadsar', country: 'SG', flag: '🇸🇬', rating: 5, quote: 'Truly one of the best projects delivered. Exceeded expectations on every front.', price: '$600–800', duration: '2 weeks' },
  { username: 'nander016', country: 'US', flag: '🇺🇸', rating: 5, quote: 'Excellent to work with Shreyansh and his team. Great communication and results.', price: '$400–600', duration: '10 days' },
  { username: 'ginok708', country: 'US', flag: '🇺🇸', rating: 5, quote: 'Built out everything we were looking to accomplish. Great communication and delivered on time!', price: '$800–1,000', duration: '9 days' },
];

export const youtube = {
  channel: 'Digital Marketing Heroes',
  handle: '@DigitalMarketingHeroes',
  subscribers: '2.6M',
  videos: '509+',
  url: 'https://www.youtube.com/@DigitalMarketingHeroes',
};

export const processSteps = [
  { step: 1, title: 'Discovery', description: 'Requirements, user research & competitive analysis', icon: 'Search' },
  { step: 2, title: 'Design', description: 'Wireframes, prototypes & UI/UX design', icon: 'Palette' },
  { step: 3, title: 'Development', description: 'Cross-platform development with CI/CD', icon: 'Code2' },
  { step: 4, title: 'QA & Testing', description: 'Automated testing & device coverage', icon: 'TestTube2' },
  { step: 5, title: 'Launch', description: 'App store optimization & staged rollout', icon: 'Rocket' },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$1,500',
    period: 'per project',
    description: 'Perfect for MVPs and proof-of-concept apps',
    features: [
      'Single platform (iOS or Android)',
      'Up to 5 screens',
      'Basic UI/UX design',
      'Firebase backend setup',
      'App Store / Play Store submission',
      '30 days post-launch support',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$4,500',
    period: 'per project',
    description: 'Full-featured cross-platform app for growing businesses',
    features: [
      'Cross-platform (iOS + Android)',
      'Up to 15 screens',
      'Custom UI/UX design in Figma',
      'API integration & backend',
      'Push notifications & analytics',
      'Payment gateway integration',
      'Admin dashboard',
      '60 days post-launch support',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: '$12,000+',
    period: 'custom scope',
    description: 'Complex, scalable apps for enterprise-grade needs',
    features: [
      'Cross-platform + Web app',
      'Unlimited screens & features',
      'Advanced architecture & CI/CD',
      'Real-time features (chat, live)',
      'AI/ML integration',
      'Multi-language & multi-region',
      'Performance optimization',
      'Dedicated project manager',
      '6 months support & maintenance',
    ],
    highlighted: false,
    cta: 'Contact Me',
  },
];

export const caseStudy = {
  project: 'NidhiPay',
  client: 'KisanCredit (YC W23)',
  role: 'Sole Developer & Architect',
  problem: 'Rural Indian farmers needed a reliable UPI payment app that worked on low-end devices with spotty 2G/3G connectivity. Existing fintech apps crashed frequently and had poor offline support.',
  solution: 'Built an offline-first Flutter fintech super-app with custom payment orchestration, AI expense categorization, and biometric security. Integrated with NPCI, RBI-compliant KYC, and 12 major Indian banks.',
  challenges: [
    'Optimized for devices with 1GB RAM and Android 5.0+',
    'Built custom offline transaction queue with conflict resolution',
    'Achieved 99.97% uptime with failover across 3 payment gateways',
    'Reduced app size to 12MB for low-storage devices',
  ],
  results: [
    { label: 'Downloads', value: '628K' },
    { label: 'Uptime', value: '99.97%' },
    { label: 'Rating', value: '4.9★' },
    { label: 'Chargebacks', value: '-43%' },
  ],
};
