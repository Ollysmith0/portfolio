import propertyguruvn from "@/assets/propertyguruvn.png";
import cloudfixedasset from "@/assets/cloudfixedasset.png";
import planettota from "@/assets/planettota.png";
import patientpop from "@/assets/patientpop.png";
import velocitySaas from "@/assets/template-velocity-saas.png";
import alexPortfolio from "@/assets/template-alex-portfolio.png";
import auroraBlog from "@/assets/template-aurora-blog.png";
import nexusCorporate from "@/assets/template-nexus-corporate.png";
import noirFashion from "@/assets/template-noir-fashion.png";
import bloomBeauty from "@/assets/template-bloom-beauty.png";
import kroonBeverage from "@/assets/kroon-beverage.png";
import seaboxContainer from "@/assets/seabox-container.png";
import zenAgency from "@/assets/template-zen-agency.png";
import echoStartup from "@/assets/template-echo-startup.png";
import luxeJewelry from "@/assets/template-luxe-jewelry.png";
import freshfoodMarket from "@/assets/template-freshfood-market.png";
import motionStudio from "@/assets/template-motion-studio.png";
import kineticLanding from "@/assets/template-kinetic-landing.png";
// New Shopify templates
import spPetshop from "@/assets/template-sp-petshop.png";
import spTechgear from "@/assets/template-sp-techgear.png";
import spCoffeeroast from "@/assets/template-sp-coffeeroast.png";
import spFitnessfuel from "@/assets/template-sp-fitnessfuel.png";
import spCandle from "@/assets/template-sp-candle.png";
// New Portfolio templates
import pfArchitect from "@/assets/template-pf-architect.png";
import pfLawfirm from "@/assets/template-pf-lawfirm.png";
import pfPhotofolio from "@/assets/template-pf-photofolio.png";
import pfDevcard from "@/assets/template-pf-devcard.png";
import pfConsultpro from "@/assets/template-pf-consultpro.png";
// New WordPress templates
import wpFlavourrest from "@/assets/template-wp-flavourrest.png";
import wpYogastudio from "@/assets/template-wp-yogastudio.png";
import wpTravelblog from "@/assets/template-wp-travelblog.png";
import wpRealestate from "@/assets/template-wp-realestate.png";
import wpDentalcare from "@/assets/template-wp-dentalcare.png";
// New Framer templates
import fmHorizon from "@/assets/template-fm-horizon.png";
import fmPulse from "@/assets/template-fm-pulse.png";
import fmOrbit from "@/assets/template-fm-orbit.png";
import fmNeonlab from "@/assets/template-fm-neonlab.png";
import fmGlitch from "@/assets/template-fm-glitch.png";
// Landing page templates
import lpLuminary from "@/assets/template-lp-luminary.png";
import lpSolstice from "@/assets/template-lp-solstice.png";
import lpForge from "@/assets/template-lp-forge.png";
import lpAura from "@/assets/template-lp-aura.png";
import lpApex from "@/assets/template-lp-apex.png";
// Mobile app templates (React Native demos)
import rnFinpulse from "@/assets/template-rn-finpulse.png";
import rnFittrack from "@/assets/template-rn-fittrack.png";
import rnNomad from "@/assets/template-rn-nomad.png";
import rnAster from "@/assets/template-rn-aster.png";
import rnMedpulse from "@/assets/template-rn-medpulse.png";
import rnNoirshop from "@/assets/template-rn-noirshop.png";
import rnNestify from "@/assets/template-rn-nestify.png";

const MOBILE_DEMO_BASE_URL = `${import.meta.env.BASE_URL}mobile-demo.html?app=`;

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/Ollysmith0",
  linkedin: "https://www.linkedin.com/in/huynh-tu-66422a195/",
  youtube: "https://www.youtube.com/@OllyAnimation",
  facebook: "https://www.facebook.com/tu.huynh.399",
  email: "ollysmith0@gmail.com",
  whatsapp: "https://wa.me/84788393079",
} as const;

// ── Services ──────────────────────────────────────────────
export type Service = {
  title: string;
  description: string;
  features: readonly string[];
  icon: "wordpress" | "landing" | "b2b" | "custom";
  accent: string;
};

export const SERVICES: Service[] = [
  {
    title: "React Native App Development",
    description:
      "Full-featured cross-platform mobile apps for iOS and Android from a single codebase — production-ready, smooth, and built to scale.",
    features: [
      "iOS & Android from one codebase",
      "React Native + TypeScript",
      "Custom UI components",
      "State management (Redux / Zustand)",
      "REST & GraphQL integration",
      "App Store / Play Store submission",
    ],
    icon: "custom",
    accent: "#61DAFB",
  },
  {
    title: "Mobile UI/UX Implementation",
    description:
      "Pixel-perfect translation of Figma designs into buttery-smooth native mobile screens with micro-interactions and fluid animations.",
    features: [
      "Figma to React Native",
      "Framer Motion animations",
      "Gesture handling",
      "Responsive layouts",
      "Dark/light theme support",
      "Accessibility-ready",
    ],
    icon: "landing",
    accent: "#ff7a2f",
  },
  {
    title: "App Architecture & Consulting",
    description:
      "Technical leadership for mobile teams — codebase audits, architecture design, and performance optimization for existing RN projects.",
    features: [
      "Codebase reviews",
      "Performance profiling",
      "Navigation architecture",
      "CI/CD pipeline setup",
      "Expo or bare workflow",
      "Team onboarding",
    ],
    icon: "b2b",
    accent: "#8df6cf",
  },
  {
    title: "Framer Motion & Web",
    description:
      "Interactive web experiences, animated landing pages, and portfolio sites built with React and Framer Motion.",
    features: [
      "React / TypeScript / Vite",
      "Framer Motion animations",
      "Responsive design",
      "Performance-optimized",
      "SEO-friendly structure",
      "Source-code handoff",
    ],
    icon: "wordpress",
    accent: "#c8b6ff",
  },
];

// ── Pricing ──────────────────────────────────────────────
export type PricingPlan = {
  id: string;
  title: string;
  price: string;
  description: string;
  features: readonly string[];
  popular?: boolean;
  spotsLeft?: number;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "mvp",
    title: "MVP App",
    price: "From $1,200",
    description: "A focused MVP for one platform — perfect for validating your idea fast.",
    features: [
      "3–5 core screens",
      "React Native (iOS + Android)",
      "1 API integration",
      "Basic navigation flow",
      "Loading & error states",
      "Source code handoff",
    ],
  },
  {
    id: "full-app",
    title: "Full App",
    price: "From $3,500",
    description: "A production-ready app with authentication, API, and a polished UI.",
    features: [
      "Complete screen set",
      "Auth (email / OAuth / biometric)",
      "REST or GraphQL integration",
      "Push notifications",
      "2 revision rounds",
      "App Store submission support",
    ],
    popular: true,
  },
  {
    id: "custom-scope",
    title: "Custom Scope",
    price: "Custom quote",
    description: "For complex apps, existing codebase work, or long-term project collaboration.",
    features: [
      "Scope review before start",
      "Architecture recommendation",
      "Custom integrations",
      "CI/CD & deployment pipeline",
      "Priority communication",
      "Retainer or fixed-price",
    ],
  },
];

// ── Portfolio ──────────────────────────────────────────────
export type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: readonly string[];
  category: "mobile" | "shopify" | "portfolio" | "wordpress" | "framer" | "landing";
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ── Mobile Apps (React Native) ──
  {
    title: "FinPulse",
    description: "Personal finance & investment tracker with dark UI, real-time charts, and card management.",
    image: rnFinpulse,
    url: `${MOBILE_DEMO_BASE_URL}finpulse`,
    tags: ["React Native", "Fintech", "Charts"],
    category: "mobile",
  },
  {
    title: "FitTrack Pro",
    description: "Fitness & workout tracker with streak system, animated progress bars, and exercise logging.",
    image: rnFittrack,
    url: `${MOBILE_DEMO_BASE_URL}fittrack`,
    tags: ["React Native", "Health", "Fitness"],
    category: "mobile",
  },
  {
    title: "Nomad Travel",
    description: "Premium travel booking app with destination discovery, hotel detail, and trip itinerary.",
    image: rnNomad,
    url: `${MOBILE_DEMO_BASE_URL}nomad`,
    tags: ["React Native", "Travel", "Booking"],
    category: "mobile",
  },
  {
    title: "Aster Social",
    description: "Dating & social platform with swipe card UI, match feed, and real-time messaging.",
    image: rnAster,
    url: `${MOBILE_DEMO_BASE_URL}aster`,
    tags: ["React Native", "Social", "Dating"],
    category: "mobile",
  },
  {
    title: "MedPulse",
    description: "Telemedicine & health dashboard with vitals monitoring, doctor search, and appointment booking.",
    image: rnMedpulse,
    url: `${MOBILE_DEMO_BASE_URL}medpulse`,
    tags: ["React Native", "Healthcare", "MedTech"],
    category: "mobile",
  },
  {
    title: "Noir Shop",
    description: "Luxury fashion e-commerce with editorial product grid, detail view, and cart checkout.",
    image: rnNoirshop,
    url: `${MOBILE_DEMO_BASE_URL}noirshop`,
    tags: ["React Native", "E-Commerce", "Luxury"],
    category: "mobile",
  },
  {
    title: "Nestify",
    description: "Real estate app with property search, detail view, virtual tour, and interactive map.",
    image: rnNestify,
    url: `${MOBILE_DEMO_BASE_URL}nestify`,
    tags: ["React Native", "PropTech", "Real Estate"],
    category: "mobile",
  },
  {
    title: "Velocity SaaS",
    description: "SaaS landing page template with modern design system.",
    image: velocitySaas,
    url: "https://1-saas-landing.vercel.app/",
    tags: ["React", "Landing Page"],
    category: "framer",
  },
  {
    title: "Alex Portfolio",
    description: "Creative portfolio template with bold typography.",
    image: alexPortfolio,
    url: "https://saas-portfolio-2.vercel.app/",
    tags: ["React", "Portfolio"],
    category: "framer",
  },
  {
    title: "Aurora Blog",
    description: "Minimal blog template with clean reading experience.",
    image: auroraBlog,
    url: "https://aurora-blog-teal.vercel.app/",
    tags: ["React", "Blog"],
    category: "wordpress",
  },
  {
    title: "Nexus Corporate",
    description: "Corporate website template with professional layout.",
    image: nexusCorporate,
    url: "https://nexus-corporate-one.vercel.app/",
    tags: ["React", "Corporate"],
    category: "shopify",
  },
  {
    title: "Noir Fashion",
    description: "Fashion e-commerce template with editorial design.",
    image: noirFashion,
    url: "https://noir-fashion-tan.vercel.app/",
    tags: ["React", "Fashion", "E-Commerce"],
    category: "shopify",
  },
  {
    title: "Bloom Beauty",
    description: "Beauty store template with pastel aesthetics.",
    image: bloomBeauty,
    url: "https://bloom-beauty-sand.vercel.app/",
    tags: ["React", "Beauty", "E-Commerce"],
    category: "wordpress",
  },
  {
    title: "Kroon Beverage Group",
    description: "Corporate website for a premium beverage distribution company.",
    image: kroonBeverage,
    url: "https://kroonbeveragegroup.com/",
    tags: ["WordPress", "Corporate", "Beverage"],
    category: "wordpress",
  },
  {
    title: "Seabox Container",
    description: "Professional website for container and logistics services.",
    image: seaboxContainer,
    url: "https://seaboxcontainer.com/",
    tags: ["WordPress", "Logistics", "Business"],
    category: "wordpress",
  },
  {
    title: "Zen Agency",
    description: "Digital design studio with bold lime accents and modern layout.",
    image: zenAgency,
    url: "https://zen-agency.vercel.app/",
    tags: ["React", "Agency", "Landing Page"],
    category: "portfolio",
  },
  {
    title: "Echo Startup",
    description: "SaaS startup landing with gradient aesthetics and dashboard preview.",
    image: echoStartup,
    url: "https://echo-startup.vercel.app/",
    tags: ["React", "SaaS", "Startup"],
    category: "portfolio",
  },
  {
    title: "LUXE Jewelry",
    description: "Luxury jewelry e-commerce with elegant serif typography.",
    image: luxeJewelry,
    url: "https://luxe-jewelry-omega.vercel.app/",
    tags: ["Shopify", "Luxury", "E-Commerce"],
    category: "shopify",
  },
  {
    title: "FreshFood Market",
    description: "Organic grocery delivery store with fresh green palette.",
    image: freshfoodMarket,
    url: "https://freshfood-market.vercel.app/",
    tags: ["Shopify", "Food", "E-Commerce"],
    category: "shopify",
  },
  {
    title: "Motion Studio",
    description: "Creative animation agency with dynamic scrolling reel.",
    image: motionStudio,
    url: "https://motion-studio-lac.vercel.app/",
    tags: ["Framer", "Animation", "Creative"],
    category: "framer",
  },
  {
    title: "Kinetic Portfolio",
    description: "Interactive design portfolio with bold typography and green accent.",
    image: kineticLanding,
    url: "https://kinetic-landing-delta.vercel.app/",
    tags: ["Framer", "Portfolio", "Interactive"],
    category: "framer",
  },
  // ── New Shopify ──
  {
    title: "PawShop Pet Store",
    description: "Warm pet store with playful design and product collections.",
    image: spPetshop,
    url: "https://sp-petshop.vercel.app/",
    tags: ["Shopify", "Pet Store", "E-Commerce"],
    category: "shopify",
  },
  {
    title: "TechGear Electronics",
    description: "Sleek electronics store with dark theme and blue accents.",
    image: spTechgear,
    url: "https://sp-techgear.vercel.app/",
    tags: ["Shopify", "Electronics", "E-Commerce"],
    category: "shopify",
  },
  {
    title: "Roast & Co Coffee",
    description: "Premium coffee e-commerce with rich brown palette.",
    image: spCoffeeroast,
    url: "https://sp-coffeeroast.vercel.app/",
    tags: ["Shopify", "Coffee", "E-Commerce"],
    category: "shopify",
  },
  {
    title: "FitFuel Nutrition",
    description: "Sports nutrition store with energetic green design.",
    image: spFitnessfuel,
    url: "https://sp-fitnessfuel.vercel.app/",
    tags: ["Shopify", "Fitness", "E-Commerce"],
    category: "shopify",
  },
  {
    title: "Lumière Candles",
    description: "Elegant candle store with cream tones and serif typography.",
    image: spCandle,
    url: "https://sp-candle.vercel.app/",
    tags: ["Shopify", "Candles", "E-Commerce"],
    category: "shopify",
  },
  // ── New Portfolio ──
  {
    title: "Arc Studio Architecture",
    description: "Minimal architecture portfolio with clean grid layout.",
    image: pfArchitect,
    url: "https://pf-architect.vercel.app/",
    tags: ["Portfolio", "Architecture", "Minimal"],
    category: "portfolio",
  },
  {
    title: "Sterling & Co Law",
    description: "Professional law firm website with dark and gold design.",
    image: pfLawfirm,
    url: "https://pf-lawfirm.vercel.app/",
    tags: ["Portfolio", "Law Firm", "Corporate"],
    category: "portfolio",
  },
  {
    title: "LENS Photography",
    description: "Bold photography portfolio with full-bleed visuals.",
    image: pfPhotofolio,
    url: "https://pf-photofolio.vercel.app/",
    tags: ["Portfolio", "Photography", "Creative"],
    category: "portfolio",
  },
  {
    title: "DevCard Developer",
    description: "GitHub-inspired developer portfolio with monospace aesthetic.",
    image: pfDevcard,
    url: "https://pf-devcard.vercel.app/",
    tags: ["Portfolio", "Developer", "Dark"],
    category: "portfolio",
  },
  {
    title: "ConsultPro Business",
    description: "Professional consulting website with light blue palette.",
    image: pfConsultpro,
    url: "https://pf-consultpro.vercel.app/",
    tags: ["Portfolio", "Consulting", "Business"],
    category: "portfolio",
  },
  // ── New WordPress ──
  {
    title: "Flavour Restaurant",
    description: "Dark restaurant site with warm gold tones and elegant menu.",
    image: wpFlavourrest,
    url: "https://wp-flavourrest.vercel.app/",
    tags: ["WordPress", "Restaurant", "Food"],
    category: "wordpress",
  },
  {
    title: "Namaste Yoga Studio",
    description: "Serene wellness studio with earthy tones and soft design.",
    image: wpYogastudio,
    url: "https://wp-yogastudio.vercel.app/",
    tags: ["WordPress", "Wellness", "Yoga"],
    category: "wordpress",
  },
  {
    title: "Wanderlust Travel Blog",
    description: "Travel blog with dark theme and golden adventure accents.",
    image: wpTravelblog,
    url: "https://wp-travelblog.vercel.app/",
    tags: ["WordPress", "Travel", "Blog"],
    category: "wordpress",
  },
  {
    title: "Prestige Realty",
    description: "Luxury real estate site with dark design and gold accents.",
    image: wpRealestate,
    url: "https://wp-realestate.vercel.app/",
    tags: ["WordPress", "Real Estate", "Luxury"],
    category: "wordpress",
  },
  {
    title: "BrightSmile Dental",
    description: "Modern dental clinic with light blue professional design.",
    image: wpDentalcare,
    url: "https://wp-dentalcare.vercel.app/",
    tags: ["WordPress", "Dental", "Healthcare"],
    category: "wordpress",
  },
  // ── New Framer ──
  {
    title: "Flux Studio Agency",
    description: "Dark agency site with headline slide-up reveal, animated gradient orbs, and scroll-driven parallax.",
    image: fmHorizon,
    url: "https://3-flux-agency.vercel.app/",
    tags: ["Framer", "Agency", "Gradient"],
    category: "framer",
  },
  {
    title: "Nova SaaS Platform",
    description: "Midnight-navy SaaS landing with floating particles, animated bar chart dashboard, live count-up metrics, and cyan glow accents.",
    image: fmPulse,
    url: "https://6-nova-saas.vercel.app/",
    tags: ["Framer", "SaaS", "Cyan"],
    category: "framer",
  },
  {
    title: "Prism Studio",
    description: "Luxury photography studio with warm amber palette, gold grain texture, scroll-driven count-up stats, and headline clip reveal.",
    image: fmOrbit,
    url: "https://5-prism-studio.vercel.app/",
    tags: ["Framer", "Photography", "Amber"],
    category: "framer",
  },
  {
    title: "Void.dev Portfolio",
    description: "Terminal-style dev portfolio with live typing animation, scanning line, and neon green aesthetic.",
    image: fmNeonlab,
    url: "https://4-void-dev.vercel.app/",
    tags: ["Framer", "Developer", "Neon"],
    category: "framer",
  },
  {
    title: "Glitch Creative Dev",
    description: "Experimental developer portfolio with glitch effects and noise.",
    image: fmGlitch,
    url: "https://fm-glitch.vercel.app/",
    tags: ["Framer", "Creative", "Experimental"],
    category: "framer",
  },
  // ── Landing Page Templates ──
  {
    title: "Luminary — SaaS Analytics",
    description: "AI-powered analytics platform landing page with live dashboard mockup, dark navy theme, electric indigo/violet gradients, and Space Grotesk typography.",
    image: lpLuminary,
    url: "https://ollysmith0.github.io/portfolio/luminary/",
    tags: ["Landing Page", "SaaS", "Analytics", "Dark UI"],
    category: "landing",
  },
  {
    title: "Solstice — Luxury Real Estate",
    description: "Premium real estate landing page with Cormorant Garamond serif typography, gold accents, warm ivory palette, and full-bleed property gallery.",
    image: lpSolstice,
    url: "https://ollysmith0.github.io/portfolio/solstice/",
    tags: ["Landing Page", "Real Estate", "Luxury", "Serif"],
    category: "landing",
  },
  {
    title: "Forge — Developer Tools CLI",
    description: "Developer infrastructure platform landing page with pure black terminal aesthetic, JetBrains Mono typography, syntax-highlighted code blocks, and green/amber accents.",
    image: lpForge,
    url: "https://ollysmith0.github.io/portfolio/forge/",
    tags: ["Landing Page", "Developer Tools", "Terminal", "CLI"],
    category: "landing",
  },
  {
    title: "Aura — Wellness App",
    description: "Mindfulness app landing page with soft lavender/sage gradient palette, DM Serif Display typography, organic shapes, and a detailed phone UI mockup.",
    image: lpAura,
    url: "https://ollysmith0.github.io/portfolio/aura/",
    tags: ["Landing Page", "Wellness", "App", "Pastel"],
    category: "landing",
  },
  {
    title: "Apex — Fintech Trading",
    description: "Next-gen fintech trading platform landing page with dark charcoal theme, real-time chart UI mockup, Syne font, teal accents, and order book visualization.",
    image: lpApex,
    url: "https://ollysmith0.github.io/portfolio/apex/",
    tags: ["Landing Page", "Fintech", "Trading", "Dark UI"],
    category: "landing",
  },
];

// ── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Product Manager @ Proptech",
    avatar: propertyguruvn,
    rating: 5,
    text: "Olly built our property search app from Figma to App Store in 6 weeks. The animations and performance are outstanding — clients love it.",
    date: "Nov 2024",
  },
  {
    name: "Marcus Lee",
    role: "CTO @ PlanetTota",
    avatar: planettota,
    rating: 5,
    text: "A highly skilled React Native engineer who understands both design and architecture. He refactored our entire navigation and it's night and day.",
    date: "Sep 2024",
  },
  {
    name: "Yuki Tanaka",
    role: "Lead Designer @ MoneyForward",
    avatar: cloudfixedasset,
    rating: 5,
    text: "Olly bridged the gap between design and development flawlessly. Every micro-interaction in our finance app came out exactly as designed.",
    date: "Aug 2024",
  },
  {
    name: "Emily Carter",
    role: "CEO @ PatientPop",
    avatar: patientpop,
    rating: 4,
    text: "Reliable, skilled, and communicates clearly. The patient portal app Olly built is clean, fast, and our users love the onboarding flow.",
    date: "Jun 2024",
  },
  {
    name: "David Kim",
    role: "Freelance Collaborator",
    avatar: propertyguruvn,
    rating: 5,
    text: "We brought Olly in to speed up our React Native sprint. He's proactive, asks the right questions, and always delivers on time.",
    date: "Mar 2024",
  },
  {
    name: "Priya Sharma",
    role: "UX Lead @ Startup",
    avatar: planettota,
    rating: 5,
    text: "The Framer Motion interactions he added to our app demo were stunning. His understanding of mobile UX patterns is top-notch.",
    date: "Jan 2024",
  },
] as const;
