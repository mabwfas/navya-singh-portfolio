export const profile = {
  name: 'Navya Singh',
  initials: 'NS',
  title: 'Senior Mobile App Developer & Cross-Platform Architect',
  tagline: 'Building high-performance mobile experiences for 50M+ users',
  bio: `Elite mobile developer with 10+ years building high-performance iOS, Android, and cross-platform applications for India's top tech companies and global startups. Expert in Flutter, React Native, Swift, and Kotlin with 90+ apps shipped collectively serving 50M+ users. Built payment, e-commerce, and fintech apps processing ₹15,000 Cr+ in transactions.`,
  email: 'aestheticsbynao@gmail.com',
  phone: '+91 70520 93314',
  location: 'Lucknow, UP, India',
};

export const stats = [
  { value: '10+', label: 'Years Exp.' },
  { value: '90+', label: 'Apps Shipped' },
  { value: '50M+', label: 'Users Served' },
  { value: '100%', label: '5-Star Rating' },
];

export const skills = [
  { name: 'Flutter / Dart', level: 98, category: 'mobile' },
  { name: 'React Native / JS', level: 97, category: 'mobile' },
  { name: 'Swift / SwiftUI', level: 96, category: 'mobile' },
  { name: 'Kotlin / Jetpack', level: 95, category: 'mobile' },
  { name: 'App Architecture', level: 97, category: 'mobile' },
  { name: 'Firebase / Supabase', level: 94, category: 'backend' },
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'AWS Amplify', level: 85, category: 'backend' },
  { name: 'GraphQL / REST', level: 92, category: 'backend' },
];

export const techStack = {
  mobile: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'SwiftUI', 'Jetpack Compose'],
  backend: ['Firebase', 'Node.js', 'Supabase', 'AWS Amplify', 'GraphQL', 'REST'],
  tools: ['Fastlane', 'Codemagic', 'Figma', 'TestFlight', 'Crashlytics', 'RevenueCat'],
};

export const experience = [
  {
    role: 'Freelance Mobile App Developer & Architect',
    company: 'Self-Employed',
    type: 'Freelance / Contract',
    location: 'Remote, India',
    period: 'Jan 2024 — Present',
    highlights: [
      'Deliver end-to-end mobile development for 20+ clients across fintech, e-commerce, and healthtech',
      'Architected and shipped 8 production apps to App Store and Google Play in 12 months',
      'Designed offline-first mobile architectures for Tier-2/3 India-focused startups',
      'Provide mobile architecture consulting for startup teams of 5-15 engineers',
    ],
  },
  {
    role: 'Lead Mobile App Developer',
    company: 'Flipkart (Walmart Inc.)',
    type: 'Full-time',
    location: 'Bengaluru, India',
    period: 'Jan 2022 — Dec 2023',
    highlights: [
      "Architected Flipkart's next-gen shopping app (Flutter) serving 10M+ daily active users",
      'Led mobile platform team of 18 engineers; reduced app startup time by 62%',
      'Designed offline-first architecture enabling seamless shopping in Tier-2/3 Indian cities',
      'Implemented real-time order tracking system processing 2M+ GPS updates daily',
    ],
  },
  {
    role: 'Senior Mobile App Developer',
    company: 'Razorpay',
    type: 'Full-time',
    location: 'Bengaluru, India',
    period: 'Mar 2019 — Dec 2021',
    highlights: [
      "Built Razorpay's merchant dashboard app (React Native) used by 8M+ businesses",
      'Implemented UPI deep-link integration, biometric auth, and real-time settlement tracking',
      'Reduced app ANR rate by 76% through systematic memory leak detection',
      'Led mobile SDK development powering payment flows in 50,000+ partner apps',
    ],
  },
  {
    role: 'Mobile App Developer',
    company: 'CRED',
    type: 'Full-time',
    location: 'Bengaluru, India',
    period: 'Jun 2016 — Feb 2019',
    highlights: [
      "Developed CRED's flagship credit card management app from v1.0 to v3.0, growing to 12M+ users",
      'Built the rewards and cashback engine with real-time animations and gamification',
      'Created proprietary bill payment SDK integrated with 200+ billers processing ₹500 Cr+ monthly',
      'Implemented custom UI framework achieving 120fps animations on mid-range Android devices',
    ],
  },
  {
    role: 'Junior Mobile App Developer',
    company: 'Paytm (One97 Communications)',
    type: 'Full-time',
    location: 'Noida, India',
    period: 'Aug 2014 — May 2016',
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
    tech: ['Flutter', 'Dart', 'Firebase', 'Razorpay SDK', 'ML Kit'],
    description: 'Full-featured fintech super-app built for the Indian market with UPI payments, AI-driven expense categorization, and biometric security. Handles ₹800 Cr+ monthly transaction volume with 99.97% uptime. Features include bill splitting, recurring payments, investment portfolio tracking, and a custom fraud detection engine that reduced chargebacks by 43%. Built the entire payment orchestration layer from scratch, integrating with NPCI, RBI-compliant KYC, and 12 major Indian banks. Rated 4.9 stars on Google Play with 600K+ organic downloads — featured as "App of the Day" by Google Play India for 3 consecutive weeks.',
    metric: '600K+ Downloads',
    color: '#6366f1',
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'VitalSync',
    subtitle: 'Cross-Platform Health & Fitness Tracker',
    tech: ['React Native', 'HealthKit', 'Google Fit', 'Node.js'],
    description: 'Comprehensive health and wellness platform that syncs with Apple HealthKit, Google Fit, and 15+ wearable devices including Fitbit, Garmin, and Noise. Real-time workout tracking covers 40+ exercise types with form analysis using on-device ML. Includes guided yoga and meditation modules developed in collaboration with certified instructors, personalized meal planning with Indian diet database (2,000+ regional recipes), and an AI coaching engine that adapts workout intensity based on recovery metrics, sleep quality, and heart rate variability. Processes 50M+ health data points daily across 1.5M active users with HIPAA-compliant data handling.',
    metric: '1.5M+ Users',
    color: '#10b981',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'LiveKart',
    subtitle: 'Live Commerce & Video Shopping Platform',
    tech: ['Flutter', 'WebRTC', 'Razorpay', 'Agora SDK'],
    description: 'India\'s fastest-growing live commerce platform enabling sellers to broadcast live video streams with real-time in-stream purchasing. Built the ultra-low-latency video pipeline (<200ms) using Agora SDK with custom CDN routing for Tier-2/3 cities on 3G networks. Features include picture-in-picture product cards, live emoji reactions processing 10K+ events/second, flash sale countdown timers, and instant UPI checkout that completes purchases in under 4 seconds without leaving the stream. Integrated seller analytics dashboard tracking conversion rates, average watch time, and GMV per stream. Platform processes ₹120 Cr+ in gross merchandise value monthly with 8,000+ active sellers.',
    metric: '₹120 Cr+ GMV',
    color: '#f59e0b',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'StyleBazaar',
    subtitle: 'D2C Fashion & Ethnic Wear Marketplace',
    tech: ['Flutter', 'Firebase', 'Stripe', 'Node.js'],
    description: 'Premium D2C fashion marketplace specializing in Indian ethnic wear — sarees, lehengas, kurtas, and designer jewellery from 500+ artisan sellers. Built a visual search engine using TensorFlow Lite that lets users photograph any outfit and find similar products with 89% accuracy. Features include AR virtual try-on for jewellery, size recommendation using body measurement ML model (reduced returns by 31%), wishlists with price-drop alerts, and a social feed where influencers curate shoppable collections. Integrated Shiprocket and Delhivery for pan-India logistics with real-time tracking. App serves 2M+ monthly active users with an average order value of ₹2,800.',
    metric: '2M+ Monthly Users',
    color: '#ec4899',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'DabbaRun',
    subtitle: 'Hyperlocal Food & Logistics Platform',
    tech: ['React Native', 'Maps SDK', 'Socket.io', 'Redis'],
    description: 'Hyperlocal delivery platform operating across 12 Indian cities connecting users with restaurants, grocery stores, and cloud kitchens. Built the real-time GPS tracking system from the ground up using Socket.io and Redis pub/sub — processing 2M+ location updates daily with sub-second latency. Features include dynamic route optimization (reduced delivery times by 22%), predictive ETAs using historical traffic patterns, driver heatmaps for demand forecasting, and a multi-stop batching algorithm that improved driver earnings by 35%. Integrated with Dunzo, Shadowfax, and in-house fleet management for last-mile logistics. Processes 50K+ daily orders with a 97.3% on-time delivery rate.',
    metric: '50K+ Daily Orders',
    color: '#8b5cf6',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'Raagify',
    subtitle: 'Indian Music Streaming & Discovery',
    tech: ['Swift', 'AVFoundation', 'Core Audio', 'CloudKit'],
    description: 'Native iOS music streaming app focused on Indian classical, Bollywood, and indie music with a catalogue of 5M+ tracks. Engineered a custom audio pipeline using AVFoundation and Core Audio that delivers lossless FLAC playback with gapless transitions and crossfade mixing. Features include raga-based discovery algorithm, real-time lyrics sync (Hindi, Tamil, Telugu, Bengali), offline downloads with intelligent storage management, collaborative playlists, and a "Discover Weekly" engine powered by listening pattern analysis. Built CarPlay integration and AirPlay 2 multi-room support. App maintains 200K+ active listeners with an average session duration of 47 minutes.',
    metric: '200K+ Listeners',
    color: '#06b6d4',
    span: 'col-span-2 row-span-1',
  },
];

export const education = [
  {
    degree: 'M.Tech Computer Science — Mobile Computing',
    school: 'Indian Institute of Technology (IIT) Madras',
    year: '2014',
    details: 'Thesis: "Adaptive UI Rendering for Cross-Platform Mobile Apps" | CGPA: 9.6/10',
  },
  {
    degree: 'B.Tech Computer Science & Engineering',
    school: 'IIIT Hyderabad',
    year: '2012',
    details: 'Smart India Hackathon Winner | Google Summer of Code (2x) | CGPA: 9.3/10',
  },
];

export const awards = [
  { title: 'Google Play Best of 2024 — India', detail: 'NidhiPay selected in "Best Everyday Essentials"' },
  { title: 'Apple Design Award Nominee', detail: 'Raagify nominated for outstanding design (2024)' },
  { title: 'Top 1% Freelancer — Toptal', detail: "Accepted into Toptal's exclusive mobile developer network" },
  { title: 'FlutterConf & Droidcon Speaker', detail: '"Scaling Flutter to 10M DAU" — Berlin & Chennai (2024)' },
];

export const certifications = [
  'Google Associate Android Developer — Google, 2024',
  'Apple Certified iOS Developer — Apple, 2023',
  'AWS Certified Developer — Associate, 2023',
  'Meta React Native Specialization — Coursera, 2022',
];

export const testimonials = [
  {
    quote: 'Navya delivered our Flutter fintech app 10 days ahead of schedule with performance numbers that blew our benchmarks away. The offline-first architecture she designed works flawlessly in rural Rajasthan where our users have spotty 3G connectivity. Absolutely world-class mobile engineering.',
    author: 'Arjun Mehta',
    role: 'Co-Founder & CTO, KisanCredit (YC W23)',
  },
  {
    quote: 'Best mobile developer we have ever worked with, period. Navya built our entire StyleBazaar e-commerce app from scratch in 14 weeks — we launched with 4.9 stars on both stores and zero critical bugs in the first 3 months. Her attention to performance on low-end Android devices was remarkable.',
    author: 'Fatima Al-Rashid',
    role: 'CEO, Zarqa Retail Group (Dubai)',
  },
  {
    quote: 'We brought Navya in to rescue a React Native app that was crashing for 30% of users. Within 6 weeks she rewrote the state management layer, fixed 47 memory leaks, and got our crash-free rate to 99.8%. She then stayed on to build our live streaming feature which is now our highest-revenue channel.',
    author: 'Prateek Sharma',
    role: 'VP Engineering, Meesho',
  },
  {
    quote: 'Navya architected our health tracking SDK that now powers 12 partner apps across Southeast Asia. Her deep knowledge of HealthKit and Google Fit APIs saved us months of R&D. She is genuinely one of the top 3 mobile engineers I have worked with in 15 years.',
    author: 'Dr. Sneha Kulkarni',
    role: 'Head of Product, HealthifyMe',
  },
];
