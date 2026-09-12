/* ------------------------------------------------------------------ */
/*  Central content for the HanzaLabs site (from the Figma design).    */
/* ------------------------------------------------------------------ */

export const site = {
  name: "HanzaLabs",
  logo: "HanzaLabs®",
  tagline: "Visionary Designer, Artist & Father",
  email: "hello@hanzalabs.studio",
};

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Studio", href: "/studio" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const megaMenu: { title: string; links: NavLink[] }[] = [
  {
    title: "Page",
    links: [
      { label: "Home", href: "/" },
      { label: "Studio", href: "/studio" },
      { label: "Work", href: "/work" },
      { label: "Blog", href: "#" },
      { label: "Pricing", href: "/pricing" },
      { label: "Career", href: "#" },
    ],
  },
  {
    title: "Inner Page",
    links: [
      { label: "Work Single", href: "#" },
      { label: "Blog Single", href: "#" },
      { label: "Pricing Single", href: "/pricing-single" },
      { label: "Career Single", href: "#" },
    ],
  },
  {
    title: "Utility",
    links: [
      { label: "Style Guide", href: "#" },
      { label: "License", href: "#" },
      { label: "Change Log", href: "#" },
      { label: "Password Protect", href: "#" },
      { label: "404", href: "/404-preview" },
    ],
  },
];

export const socials: NavLink[] = [
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "Medium", href: "https://medium.com" },
  { label: "Linkedin", href: "https://linkedin.com" },
];

export const partners = [
  "Northwind",
  "Lumine",
  "Vertex",
  "Aeon",
  "Quanta",
  "Pulse",
  "Orbit",
  "Stackly",
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "solarra",
    name: "Solarra",
    description:
      "A sleek and functional redesign focused on product storytelling.",
    tags: ["#WebDesign", "#UIUX", "#ProductNarrative"],
    image: "/images/work-1.jpg",
    year: "2025",
    services: ["Web Design", "UI/UX", "Art Direction"],
  },
  {
    slug: "auralink",
    name: "Auralink®",
    description:
      "A sleek and functional redesign focused on product storytelling.",
    tags: ["#WebDesign", "#UIUX", "#ModernWeb"],
    image: "/images/work-2.jpg",
    year: "2025",
    services: ["Web Design", "Branding", "Motion"],
  },
  {
    slug: "lumena",
    name: "Lumena®",
    description:
      "A sleek and functional redesign focused on product storytelling.",
    tags: ["#Design", "#UIUX", "#ModernWeb"],
    image: "/images/work-3.jpg",
    year: "2024",
    services: ["Product Design", "Design System"],
  },
  {
    slug: "flowpeaks",
    name: "Flowpeaks",
    description:
      "A sleek and functional redesign focused on product storytelling.",
    tags: ["#WebDesign", "#UIUX", "#ProductDesign"],
    image: "/images/work-4.jpg",
    year: "2024",
    services: ["Web Design", "SaaS", "UI/UX"],
  },
  {
    slug: "hanza",
    name: "Hanza",
    description:
      "A sleek and functional redesign focused on product storytelling.",
    tags: ["#WebDesign", "#UIUX", "#ModernWeb"],
    image: "/images/work-5.jpg",
    year: "2023",
    services: ["Brand Identity", "Web Design"],
  },
];

export const workProjects: Project[] = [
  {
    slug: "lumina-art",
    name: "Lumina Art",
    description:
      "A full identity and website redesign for an art studio, emphasizing design.",
    tags: ["#WebDesign", "#UIUX", "#ProductNarrative"],
    image: "/images/work-1.jpg",
    year: "2025",
    services: ["Identity", "Web Design"],
  },
  {
    slug: "echo-wave",
    name: "Echo Wave",
    description:
      "Designed a fintech platform dashboard with clear data visualization.",
    tags: ["#WebDesign", "#UIUX", "#SaaS"],
    image: "/images/work-2.jpg",
    year: "2025",
    services: ["SaaS", "UI/UX"],
  },
  {
    slug: "glimmer",
    name: "Glimmer",
    description: "Developed a corporate website with modern aesthetics design.",
    tags: ["#WebDesign", "#UIUX", "#ModernWeb"],
    image: "/images/work-3.jpg",
    year: "2024",
    services: ["Web Design", "Branding"],
  },
  {
    slug: "flux-creative",
    name: "Flux Creative",
    description: "Product discovery, and visually striking product pages.",
    tags: ["#WebDesign", "#UIUX", "#ProductDesign"],
    image: "/images/work-4.jpg",
    year: "2024",
    services: ["Product Design", "UI/UX"],
  },
  {
    slug: "cosmart-app",
    name: "Cosmart App",
    description: "Built a dynamic, interactive portfolio site with smooth scrolling.",
    tags: ["#WebDesign", "#UIUX", "#Interaction"],
    image: "/images/work-5.jpg",
    year: "2023",
    services: ["Web Design", "Motion"],
  },
];

export type Service = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
};

export const services: Service[] = [
  {
    title: "Website Design",
    description:
      "We design modern, responsive, and conversion-driven websites that reflect your brand's identity and deliver measurable impact. From structure to motion, every pixel is strategic. We build experiences that don't just look good but perform — sites that inspire trust, engage audiences, and turn traffic into tangible results. Built to scale with your growth.",
    tags: ["#WebDesign", "#UIUX", "#ModernWeb"],
    images: ["/images/service-1.jpg", "/images/service-2.jpg"],
  },
  {
    title: "SaaS Design",
    description:
      "End-to-end product design for SaaS platforms — dashboards, onboarding flows, and design systems that make complex tools feel effortless and keep users coming back.",
    tags: ["#SaaS", "#UIUX", "#DesignSystem"],
    images: ["/images/service-1.jpg", "/images/service-2.jpg"],
  },
  {
    title: "UI/UX Design",
    description:
      "Research-led interface design that balances beauty and usability. We map journeys, prototype fast, and validate with real users to reduce friction at every step.",
    tags: ["#UIUX", "#Research", "#Prototyping"],
    images: ["/images/service-1.jpg", "/images/service-2.jpg"],
  },
  {
    title: "Product Design",
    description:
      "From zero to one and beyond — we shape products with clear positioning, thoughtful information architecture, and interfaces engineered to convert and retain.",
    tags: ["#Product", "#Strategy", "#UIUX"],
    images: ["/images/service-1.jpg", "/images/service-2.jpg"],
  },
  {
    title: "Interaction Design",
    description:
      "Motion with meaning. We craft micro-interactions, transitions, and scroll experiences that guide attention and give your product a memorable, premium feel.",
    tags: ["#Motion", "#Interaction", "#WebGL"],
    images: ["/images/service-1.jpg", "/images/service-2.jpg"],
  },
  {
    title: "Visual Branding",
    description:
      "Distinctive identity systems — logos, type, color, and guidelines — that make ambitious brands unmistakable across every touchpoint.",
    tags: ["#Branding", "#Identity", "#ArtDirection"],
    images: ["/images/service-1.jpg", "/images/service-2.jpg"],
  },
  {
    title: "Ads Design",
    description:
      "High-performing creative for paid campaigns — static and motion ad sets built to stop the scroll and drive measurable clicks.",
    tags: ["#Ads", "#Creative", "#Performance"],
    images: ["/images/service-1.jpg", "/images/service-2.jpg"],
  },
];

export const aboutValues = [
  {
    title: "Scale Globally",
    body: "",
  },
  {
    title: "Inspire Trust",
    body: "Craft meaningful experiences that connect emotionally and build lasting brand credibility. Design flexible systems that adapt and grow with evolving markets.",
  },
  {
    title: "Shape the Future",
    body: "",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Incredible results. Clean design, real impact. Our conversion jumped.",
    name: "Wilson Kenter",
    role: "Marketing Director",
  },
  {
    quote: "The launch changed everything. Our traffic soared overnight.",
    name: "Madelyn Dorwart",
    role: "Marketing Director",
  },
  {
    quote: "They built for scale, not vanity. Strong impact.",
    name: "Carter Westervelt",
    role: "COO",
  },
];

export const stats = [
  { value: "48%", label: "Increase in conversions." },
  { value: "3.8×", label: "User growth." },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What type of projects do you specialize in?",
    a: "I focus on Website & Product Design, SaaS UI/UX, and Brand Identity. My approach blends strategy, design systems, and minimal aesthetics to create experiences that drive growth and build trust.",
  },
  {
    q: "Do you work with startups or only established brands?",
    a: "Both. I partner with early-stage startups finding their voice and with established brands ready to level up — tailoring scope and pace to where you are.",
  },
  {
    q: "Do you only work with Webflow?",
    a: "No. Webflow is one tool in the kit. Depending on your needs I also deliver in Next.js, Framer, or hand-off ready design systems for your engineers.",
  },
  {
    q: "How long does a typical project take?",
    a: "A focused landing page runs 2–3 weeks; a full site or product design engagement typically spans 4–8 weeks depending on scope and rounds of feedback.",
  },
  {
    q: "Can you customize this template for me?",
    a: "Absolutely. Every build starts from your brand and goals — layout, type, color, and motion are all tailored, never one-size-fits-all.",
  },
  {
    q: "What's included in your design packages?",
    a: "Strategy, wireframes, high-fidelity UI, a reusable design system, prototype, and a smooth developer hand-off — plus motion direction where it counts.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — I collaborate with teams worldwide across time zones, with clear async communication and regular check-ins.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "seamless-user-journeys",
    title: "The art of building seamless user journeys",
    tags: ["#DesignStrategy", "#UIUX"],
    date: "October 14, 2025",
    image: "/images/blog-1.jpg",
  },
  {
    slug: "concept-to-launch",
    title: "From concept to launch — A designer's Playbook",
    tags: ["#DesignStrategy", "#UIUX"],
    date: "October 14, 2025",
    image: "/images/blog-2.jpg",
  },
  {
    slug: "strategic-design-elevates-brands",
    title: "How strategic design elevates brands.",
    tags: ["#DesignStrategy", "#UIUX"],
    date: "October 14, 2025",
    image: "/images/blog-3.jpg",
  },
  {
    slug: "simplicity-that-sells",
    title: "Simplicity that sells — power of minimal Design",
    tags: ["#DesignStrategy", "#UIUX"],
    date: "October 14, 2025",
    image: "/images/blog-4.jpg",
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  featured: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "standard",
    name: "Standard",
    price: "$2,400",
    period: "/ month",
    description: "Designed to help ambitious brands launch faster.",
    featured: false,
    features: [
      "Custom website design & strategy",
      "Premium UI/UX experience",
      "Up to 6 unique pages",
      "Responsive across all devices",
      "2 rounds of revisions",
      "Developer-ready hand-off",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$4,800",
    period: "/ month",
    description: "Designed to help ambitious brands launch faster.",
    featured: true,
    features: [
      "Everything in Standard",
      "Dedicated design manager",
      "Unlimited pages & components",
      "Design system & brand guidelines",
      "Motion & interaction design",
      "Lifetime update support",
    ],
  },
];

export type TeamMember = { name: string; role: string; image: string };

export const team: TeamMember[] = [
  { name: "Alex Monroe", role: "Creative Director", image: "/images/team-1.jpg" },
  { name: "Sophia Lin", role: "Art Director", image: "/images/team-2.jpg" },
  { name: "Ethan Cole", role: "Lead Designer", image: "/images/team-3.jpg" },
  { name: "Mia Torres", role: "UX/UI Designer", image: "/images/team-4.jpg" },
  { name: "Liam Brooks", role: "Brand Strategist", image: "/images/team-5.jpg" },
  { name: "Olivia Reed", role: "Front-End Developer", image: "/images/team-6.jpg" },
  { name: "Ayan Choudhury", role: "Back-End Developer", image: "/images/team-7.jpg" },
  { name: "Nisha Roy", role: "Content & Copy Lead", image: "/images/team-8.jpg" },
  { name: "James Li", role: "Project Manager", image: "/images/team-9.jpg" },
];

export const studioStats = [
  { value: 45, suffix: "+", label: "Projects Designed" },
  { value: 12, suffix: "+", label: "Awards Design" },
  { value: 30, suffix: "+", label: "Happy Clients" },
];

export type Award = { n: string; title: string; year: string; image: string };

export const awards: Award[] = [
  { n: "01", title: "Form & Function Laureate", year: "2025", image: "/images/work-1.jpg" },
  { n: "02", title: "Paperplane Studio Award", year: "2024", image: "/images/work-2.jpg" },
  { n: "03", title: "Signal & Noise Trophy", year: "2024", image: "/images/work-3.jpg" },
  { n: "04", title: "Prism Interaction Award", year: "2023", image: "/images/work-4.jpg" },
  { n: "05", title: "Elemental Design Medal", year: "2023", image: "/images/work-5.jpg" },
];

export const studioValues = [
  {
    title: "Excellence",
    body: "Perfection fades, but progress endures. We evolve through experimentation, learn through challenge, and refine our creative craft with authenticity, patience, and precision.",
  },
  {
    title: "Curiosity",
    body: "Every question is a doorway. We stay endlessly curious — exploring new tools, ideas, and perspectives to keep our work alive and relevant.",
  },
  {
    title: "Craft",
    body: "Details are everything. We obsess over type, spacing, and motion so each experience feels considered, intentional, and unmistakably premium.",
  },
  {
    title: "Impact",
    body: "Design is strategy in motion. We measure success not by applause but by the real, lasting impact we create for the brands we partner with.",
  },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Pages",
    links: [
      { label: "Studio", href: "/studio" },
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "#" },
      { label: "Career", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Inner Pages",
    links: [
      { label: "Work Single", href: "#" },
      { label: "Pricing Single", href: "/pricing-single" },
      { label: "Career Single", href: "#" },
      { label: "Blog Single", href: "#" },
      { label: "404", href: "/404-preview" },
    ],
  },
  {
    title: "Utility",
    links: [
      { label: "License", href: "#" },
      { label: "Change Log", href: "#" },
      { label: "Style Guide", href: "#" },
      { label: "Password", href: "#" },
    ],
  },
];
