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

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
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
  icon: "wordpress" | "shopify" | "portfolio" | "custom";
  accent: string;
};

export const SERVICES: Service[] = [
  {
    title: "WordPress Store",
    description:
      "Full WooCommerce store with custom theme, product catalog, cart, checkout, and payment gateway.",
    features: [
      "WooCommerce setup",
      "Custom theme design",
      "Payment gateway (Stripe/PayPal)",
      "SEO optimized",
      "Responsive design",
      "Product import",
    ],
    icon: "wordpress",
    accent: "#21759b",
  },
  {
    title: "Shopify Store",
    description:
      "Premium Shopify store with custom theme, product management, and conversion-optimized checkout.",
    features: [
      "Custom Shopify theme",
      "Product setup & variants",
      "Shopify Payments",
      "Inventory management",
      "Mobile optimized",
      "App integrations",
    ],
    icon: "shopify",
    accent: "#96bf48",
  },
  {
    title: "Portfolio Website",
    description:
      "Stunning portfolio with contact form, project showcase, and professional branding that converts visitors.",
    features: [
      "Custom design",
      "Contact form to email",
      "Project showcase",
      "Fast performance",
      "Analytics setup",
      "Domain & hosting help",
    ],
    icon: "portfolio",
    accent: "#ff7a2f",
  },
  {
    title: "Custom Solution",
    description:
      "Bespoke web application or store built to your exact specs. React, Next.js, or any modern stack.",
    features: [
      "Custom architecture",
      "API integrations",
      "Admin dashboard",
      "Scalable infrastructure",
      "Ongoing support",
      "Full source code",
    ],
    icon: "custom",
    accent: "#8df6cf",
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
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    title: "Starter",
    price: "$150",
    description: "Perfect for a simple portfolio or landing page.",
    features: [
      "1-page design",
      "Contact form",
      "Mobile responsive",
      "Basic SEO",
      "1 round of revisions",
      "Delivery in 24 hours",
    ],
  },
  {
    id: "business",
    title: "Business Store",
    price: "$450",
    description: "Full e-commerce store ready to sell.",
    features: [
      "Up to 50 products",
      "Payment gateway setup",
      "Custom theme design",
      "SEO & analytics",
      "3 rounds of revisions",
      "Delivery in 3 days",
    ],
    popular: true,
  },
  {
    id: "premium",
    title: "Premium",
    price: "$1,000",
    description: "Enterprise-grade store with all bells and whistles.",
    features: [
      "Unlimited products",
      "Custom features & APIs",
      "Multi-language support",
      "Advanced analytics",
      "Priority support 30 days",
      "Delivery in 7 days",
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
  category: "shopify" | "portfolio" | "wordpress" | "framer";
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
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
    title: "Horizon Design Agency",
    description: "Bold agency with gradient purple-blue and smooth motion.",
    image: fmHorizon,
    url: "https://fm-horizon.vercel.app/",
    tags: ["Framer", "Agency", "Gradient"],
    category: "framer",
  },
  {
    title: "Pulse Analytics",
    description: "SaaS dashboard with green accent and live metrics preview.",
    image: fmPulse,
    url: "https://fm-pulse.vercel.app/",
    tags: ["Framer", "SaaS", "Dashboard"],
    category: "framer",
  },
  {
    title: "Orbit Creative Studio",
    description: "Immersive studio with spinning orbit animation and marquee.",
    image: fmOrbit,
    url: "https://fm-orbit.vercel.app/",
    tags: ["Framer", "Creative", "Motion"],
    category: "framer",
  },
  {
    title: "NeonLab Digital Lab",
    description: "Hacker-style digital lab with neon green terminal aesthetic.",
    image: fmNeonlab,
    url: "https://fm-neonlab.vercel.app/",
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
];

// ── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Product Manager @ Proptech",
    avatar: propertyguruvn,
    rating: 5,
    text: "Olly delivered outstanding work on our real-estate platform. His attention to detail and ability to translate designs into pixel-perfect code is remarkable.",
    date: "Nov 2024",
  },
  {
    name: "Marcus Lee",
    role: "CTO @ PlanetTota",
    avatar: planettota,
    rating: 5,
    text: "A highly skilled engineer who understands both design and code. The NFT marketplace he built exceeded all our expectations.",
    date: "Sep 2024",
  },
  {
    name: "Yuki Tanaka",
    role: "Lead Designer @ MoneyForward",
    avatar: cloudfixedasset,
    rating: 5,
    text: "Olly bridged the gap between design and development flawlessly. Our cloud asset management UI has never looked better.",
    date: "Aug 2024",
  },
  {
    name: "Emily Carter",
    role: "CEO @ PatientPop",
    avatar: patientpop,
    rating: 4,
    text: "Reliable, skilled, and communicates clearly. The patient portal Olly built is clean, fast, and our users love it.",
    date: "Jun 2024",
  },
  {
    name: "David Kim",
    role: "Freelance Collaborator",
    avatar: propertyguruvn,
    rating: 5,
    text: "Working with Olly was a great experience. He's proactive, asks the right questions, and always delivers on time.",
    date: "Mar 2024",
  },
  {
    name: "Priya Sharma",
    role: "UX Lead @ Startup",
    avatar: planettota,
    rating: 5,
    text: "The Figma prototypes he turned into reality were stunning. His understanding of design systems is top-notch.",
    date: "Jan 2024",
  },
] as const;
