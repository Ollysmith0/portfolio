import propertyguruvn from "@/assets/propertyguruvn.png";
import cloudfixedasset from "@/assets/cloudfixedasset.png";
import planettota from "@/assets/planettota.png";
import patientpop from "@/assets/patientpop.png";
import ecommerceMobile from "@/assets/e-commerce-mobile.png";
import financeApp from "@/assets/finance-app.png";
import webFinance from "@/assets/web-finance.png";
import velocitySaas from "@/assets/template-velocity-saas.png";
import alexPortfolio from "@/assets/template-alex-portfolio.png";
import auroraBlog from "@/assets/template-aurora-blog.png";
import nexusCorporate from "@/assets/template-nexus-corporate.png";
import noirFashion from "@/assets/template-noir-fashion.png";
import bloomBeauty from "@/assets/template-bloom-beauty.png";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skill" },
  { label: "Projects", href: "/projects" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/Ollysmith0",
  linkedin: "https://www.linkedin.com/in/huynh-tu-66422a195/",
  youtube: "https://www.youtube.com/@OllyAnimation",
  facebook: "https://www.facebook.com/tu.huynh.399",
  email: "ollysmith0@gmail.com",
} as const;

export const TYPING_TEXT =
  "I'm a passionate Front-End Engineer, dedicated to crafting stunning, user-friendly interfaces. Always eager to learn and grow, I'm seeking exciting projects and talented teams to collaborate with. Let's connect!";

export const SKILL_CATEGORIES = [
  {
    title: "Front-End",
    years: 5,
    icon: "monitor",
    accent: "#6EE7B7",
    description:
      "Building performant, accessible, and beautiful UIs with React and modern CSS.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Back-End",
    years: 1,
    icon: "server",
    accent: "#60A5FA",
    description:
      "REST APIs and server-side logic using Node.js, Express, and Firebase.",
    tags: ["Node.js", "Express", "Firebase", "MySQL", "GraphQL"],
  },
  {
    title: "UI / UX Design",
    years: 1,
    icon: "pen-tool",
    accent: "#F472B6",
    description:
      "Designing clean, user-centered interfaces and prototypes in Figma.",
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "CMS & E-Commerce",
    years: 3,
    icon: "layout",
    accent: "#FBBF24",
    description:
      "Building and customizing sites with WordPress, Shopify, and Webflow.",
    tags: ["WordPress", "Shopify", "Webflow", "PHP", "Liquid"],
  },
] as const;

export const TECH_STACK = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },
  { name: "Git" },
  { name: "Figma" },
  { name: "MySQL" },
  { name: "Firebase" },
  { name: "Scss" },
  { name: "Jest" },
  { name: "Mocha" },
  { name: "Cypress" },
  { name: "WordPress" },
  { name: "Shopify" },
  { name: "Webflow" },
  { name: "React Native" },
  { name: "GraphQL" },
  { name: "PHP" },
] as const;

export const CODE_PROJECTS = [
  {
    title: "Proptech Project",
    description:
      "Full-stack real-estate listing platform with advanced search and filtering.",
    image: propertyguruvn,
    url: "https://www.batdongsan.com.vn",
    tags: ["React", "Node.js", "MySQL"],
  },
  {
    title: "Block Chain Project",
    description:
      "NFT marketplace with wallet integration and smart contract interactions.",
    image: planettota,
    url: "https://www.planettota.com",
    tags: ["React", "Web3", "Solidity"],
  },
  {
    title: "Cloud Fixed Asset",
    description:
      "Enterprise SaaS for managing fixed assets across cloud infrastructure.",
    image: cloudfixedasset,
    url: "https://moneyforward.com",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    title: "Patient Pop",
    description:
      "Healthcare patient management and appointment booking application.",
    image: patientpop,
    url: "https://patientpop.com",
    tags: ["React", "Next.js", "Node.js"],
  },
] as const;

export const DESIGN_PROJECTS = [
  {
    title: "Mobile E-Commerce",
    description: "Clean mobile-first shopping experience with modern UI patterns.",
    image: ecommerceMobile,
    url: "https://www.figma.com/design/7t7T2OqCpetLdhX8mAJrzb/stock?node-id=148-3&t=bwcV07kSoekh4Y4e-1",
    tags: ["Figma", "Mobile", "E-Commerce"],
  },
  {
    title: "Financial Management",
    description:
      "Personal finance tracking app with intuitive data visualization.",
    image: financeApp,
    url: "https://www.figma.com/design/ftc3dHBiZHX8w66p2Eix5h/Katus?node-id=93-73&t=qCQvzZs5xqLKDCtd-1",
    tags: ["Figma", "Mobile", "Finance"],
  },
  {
    title: "Web Finance Course",
    description: "Educational platform for finance courses with engaging UX.",
    image: webFinance,
    url: "https://www.figma.com/design/NROYCKXVVNcsrxKfs1juxA/Katus-ecommerce-team-library?node-id=1-8&t=8xittfCS9fDdm7wn-1",
    tags: ["Figma", "Web", "Education"],
  },
] as const;

export const TEMPLATE_PROJECTS = [
  {
    title: "Velocity SaaS",
    image: velocitySaas,
    url: "https://1-saas-landing.vercel.app/",
  },
  {
    title: "Alex Portfolio",
    image: alexPortfolio,
    url: "https://saas-portfolio-2.vercel.app/",
  },
  {
    title: "Aurora Blog",
    image: auroraBlog,
    url: "https://aurora-blog-teal.vercel.app/",
  },
  {
    title: "Nexus Corporate",
    image: nexusCorporate,
    url: "https://nexus-corporate-one.vercel.app/",
  },
  {
    title: "Noir Fashion",
    image: noirFashion,
    url: "https://noir-fashion-tan.vercel.app/",
  },
  {
    title: "Bloom Beauty",
    image: bloomBeauty,
    url: "https://bloom-beauty-sand.vercel.app/",
  },
] as const;

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
