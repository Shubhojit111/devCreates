export const services = [
  {
    id: 'websites',
    num: '01',
    title: 'Business Websites',
    hero: 'A website that sells while you sleep.',
    short: 'Marketing sites that rank & convert',
    desc: 'Fast, SEO-ready websites for local and growing businesses — clear offer, proof, and enquiry flow built in. Designed, built and launched in weeks, not months.',
    price: 'from ₹14,999',
    timeline: '2–3 weeks',
    deliverables: ['SEO-ready Next.js website', 'Copy polish & enquiry setup', 'Google Business + analytics launch'],
    gallery: ['creamy', 'techzuno', 'fight-club'],
  },
  {
    id: 'portfolio',
    num: '02',
    title: 'Portfolio Websites',
    hero: 'Your work, presented like it matters.',
    short: 'Galleries & resumes for creators',
    desc: 'Sharp one-pagers for designers, developers, photographers and freelancers — your best work up front, your story tight, and a contact path that gets replies.',
    price: 'from ₹9,999',
    timeline: '1–2 weeks',
    deliverables: ['One-page gallery site', 'About + resume download', 'Contact flow & social links'],
    gallery: ['wearit', 'visit-india', 'creamy'],
  },
  {
    id: 'saas',
    num: '03',
    title: 'SaaS Product Development',
    hero: 'From idea to product customers pay for.',
    short: 'Dashboards, auth, billing & APIs',
    desc: 'End-to-end SaaS builds — product UI, secure auth, dashboards, REST APIs and database. Scalable Next.js + Node architecture you can grow on.',
    price: 'from ₹59,999',
    timeline: '4–8 weeks',
    deliverables: ['Product UI & dashboard', 'Auth, roles & database', 'APIs, billing hookup & launch support'],
    gallery: ['hostzuno', 'wati', 'techzuno'],
  },
  {
    id: 'ecommerce',
    num: '04',
    title: 'E-commerce & Bookings',
    hero: 'A store that never closes.',
    short: 'Stores, payments & reservations',
    desc: 'High-converting stores and booking flows — product catalog, payments, WhatsApp enquiries and order management that owners actually enjoy using.',
    price: 'from ₹29,999',
    timeline: '3–5 weeks',
    deliverables: ['Store / booking experience', 'Payments & WhatsApp orders', 'Offers, coupons & owner dashboard'],
    gallery: ['dune', 'wearit', 'creamy'],
  },
  {
    id: 'care',
    num: '05',
    title: 'Care, SEO & Growth',
    hero: 'Stay fast. Stay found. Stay updated.',
    short: 'Updates, speed & local ranking',
    desc: 'Monthly care for businesses that want to keep ranking and converting — content updates, speed fixes, local SEO and small feature drops.',
    price: 'from ₹4,999/mo',
    timeline: 'ongoing',
    deliverables: ['Updates & backups', 'Speed + local SEO tuning', 'Monthly report & priority support'],
    gallery: ['fight-club', 'visit-india', 'hostzuno'],
  },
];

// Real builds from portfolio-shubhojit.vercel.app with true screenshots
// stored locally in public/covers/real-*.png.
//
// HOW TO ADD A PROJECT:
// { id, name, tagline, category, stack: [], image, liveUrl, year, result }
// - id: unique anchor, e.g. 'dune-store'
// - image: local path under public/, e.g. '/covers/real-dune.png'
// - liveUrl: full https URL or null if private (card links to contact instead)
// - result: one-line business outcome for credibility
// Pricing lives only in the `pricing` menu below — never per project.
export const projects = [
  {
    id: 'hostzuno',
    name: 'Hostzuno Platform',
    tagline: 'Web-hosting SaaS with plans, auth & client dashboards',
    category: 'SaaS Product · Hosting Platform',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'GSAP'],
    image: '/covers/real-hostzuno.png',
    liveUrl: null,
    year: '2025',
    result: 'Full hosting flow — plans, checkout UI & client area',
  },
  {
    id: 'dune',
    name: 'Dune Store',
    tagline: 'E-commerce store with catalog, cart & secure orders',
    category: 'E-commerce · Clothing & Lifestyle',
    stack: ['Next.js', 'Express', 'MongoDB', 'JWT Auth'],
    image: '/covers/real-dune.png',
    liveUrl: null,
    year: '2026',
    result: 'Complete shop — catalog, cart, secure checkout',
  },
  {
    id: 'creamy',
    name: 'Creamy',
    tagline: 'Premium ice-cream brand site & ordering experience',
    category: 'Business Website · Food Brand',
    stack: ['Next.js', 'Framer Motion', 'Tailwind'],
    image: '/covers/real-creamy.png',
    liveUrl: 'https://creamy-five.vercel.app/',
    year: '2025',
    result: 'Brand-first menu & enquiry flow that lifts footfall',
  },
  {
    id: 'wearit',
    name: 'Wearit',
    tagline: 'Fashion storefront with lookbook & enquiries',
    category: 'E-commerce · Fashion',
    stack: ['Next.js', 'Framer Motion', 'Tailwind'],
    image: '/covers/real-wearit.png',
    liveUrl: null,
    year: '2025',
    result: 'Lookbook + WhatsApp ordering tuned for mobile buyers',
  },
  {
    id: 'techzuno',
    name: 'Techzuno Agency',
    tagline: 'Agency marketing site with services & lead flow',
    category: 'Business Website · Agency',
    stack: ['Next.js', 'MERN', 'GSAP', 'Tailwind'],
    image: '/covers/real-techzuno.png',
    liveUrl: null,
    year: '2025',
    result: 'Services, work & contact system that books calls',
  },
  {
    id: 'fight-club',
    name: 'Fight Club Fitness',
    tagline: 'Gym site with programs, trainers & trial bookings',
    category: 'Business Website · Fitness',
    stack: ['Next.js', 'TypeScript', 'Framer Motion'],
    image: '/covers/real-fightclub.png',
    liveUrl: null,
    year: '2025',
    result: 'Trial-class funnel built for admissions',
  },
  {
    id: 'visit-india',
    name: 'Visit India',
    tagline: 'Tourism showcase with packages & enquiries',
    category: 'Business Website · Travel',
    stack: ['Next.js', 'MERN', 'GSAP'],
    image: '/covers/real-india.png',
    liveUrl: null,
    year: '2024',
    result: 'Package explorer + enquiry flow for tour operators',
  },
  {
    id: 'wati',
    name: 'Wati-style SaaS Homepage',
    tagline: 'SaaS marketing page with interactive product story',
    category: 'SaaS Website · Product Marketing',
    stack: ['Next.js', 'Framer Motion', 'GSAP'],
    image: '/covers/real-wati.png',
    liveUrl: null,
    year: '2024',
    result: 'Product storytelling that explains value in 30 seconds',
  },
];

// Simple starting-price menu shown on Work + Services pages.
// Edit these when your rates change — components read from here.
export const pricing = [
  {
    name: 'Portfolio Site',
    price: '₹9,999',
    unit: 'starting',
    blurb: 'For freelancers & creators who need their work to speak.',
    features: ['One-page gallery site', 'About + resume download', 'Contact flow & social links', 'Launch in 1–2 weeks'],
    cta: 'Showcase my work',
    featured: false,
  },
  {
    name: 'Launch Website',
    price: '₹14,999',
    unit: 'starting',
    blurb: 'For local & service businesses that need enquiries fast.',
    features: ['5–8 page SEO website', 'WhatsApp + call enquiry setup', 'Google Business & maps SEO', 'Launch in 2–3 weeks'],
    cta: 'Start my website',
    featured: false,
  },
  {
    name: 'Store / Bookings',
    price: '₹29,999',
    unit: 'starting',
    blurb: 'For shops, cafés, salons & clinics that sell or book online.',
    features: ['Catalog or booking flow', 'UPI / payments + WhatsApp orders', 'Coupons, reviews & owner panel', 'Launch in 3–5 weeks'],
    cta: 'Start my store',
    featured: true,
  },
  {
    name: 'SaaS Build',
    price: '₹59,999+',
    unit: 'scoped',
    blurb: 'For founders who need dashboards, auth & billing done right.',
    features: ['Product UI + dashboard', 'Auth, roles, database & APIs', 'Billing hookup & security pass', 'Scoped in a free call'],
    cta: 'Scope my SaaS',
    featured: false,
  },
];

export const marqueePhrases = [
  'Websites that bring enquiries',
  'SaaS products built to scale',
  'E-commerce that sells daily',
  'SEO that ranks locally',
];

export const faqs = [
  {
    q: 'What does dev.creates actually build?',
    a: 'Business websites and SaaS products. Marketing sites that rank and convert, online stores and booking systems, and full SaaS apps with auth, dashboards, APIs and billing — all built on Next.js + Node for speed and scale.',
  },
  {
    q: 'How much does a website or SaaS build cost?',
    a: 'Portfolio sites start at ₹9,999, business websites at ₹14,999, stores and booking systems at ₹29,999, and custom SaaS builds at ₹59,999+. Every quote is fixed after a free discovery call — no hourly surprises.',
  },
  {
    q: 'How long does it take?',
    a: 'A business website ships in 2–3 weeks, a store or booking flow in 3–5 weeks, and a SaaS MVP in 4–8 weeks. You get a launch date in writing before we start.',
  },
  {
    q: 'Will my site rank on Google?',
    a: 'Yes — every build ships SEO-ready: semantic HTML, meta titles, sitemap, fast Core Web Vitals, and local SEO (Google Business, maps, reviews wiring) for businesses that serve an area.',
  },
  {
    q: 'Do you use templates or custom code?',
    a: 'Custom Next.js builds, no bloated page builders. That means faster loads, cleaner SEO, and a site you fully own. We reuse proven enquiry, checkout and auth patterns so you launch faster without looking templated.',
  },
  {
    q: 'What happens after launch?',
    a: 'Care plans from ₹4,999/mo cover updates, backups, speed and SEO tuning plus priority feature drops. You own the code and domain from day one — staying with us is optional, not a lock-in.',
  },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Work', href: '/work/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

// What every build includes, whatever the package — shown on Services.
export const buildPromises = [
  {
    title: 'Watch it take shape live',
    desc: 'A staging link from week one — you see real pages on your phone, not screenshots in a slide deck.',
  },
  {
    title: 'Launch checklist, done for you',
    desc: 'Domain, SSL, sitemap, analytics, Maps and Business Profile wired up before go-live. Nothing left as homework.',
  },
  {
    title: 'Yours from day one',
    desc: 'Code, domain and accounts registered in your name. Plain-language notes so small updates never need us.',
  },
  {
    title: '30-day fix window',
    desc: 'Anything we shipped that misbehaves in the first month gets fixed free. Then optional care keeps you ranking.',
  },
];

// The road to dev.creates — from the founder's own shipped work.
export const milestones = [
  {
    year: '2024',
    title: 'Learning the craft in production',
    desc: 'Frontend engineering on live client work — performant layouts, motion and design-to-code discipline.',
  },
  {
    year: '2025',
    title: 'Full-stack client products',
    desc: 'Marketplaces, auth flows and dashboards shipped end to end — 30+ projects across shops, platforms and brand sites.',
  },
  {
    year: '2026',
    title: 'dev.creates opens its doors',
    desc: 'One fixed-scope agency for business websites, stores and SaaS — same build quality, now with quotes up front.',
  },
];
