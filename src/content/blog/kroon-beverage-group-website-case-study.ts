import type { BlogPost } from '@/content/schema';

export const kroonBeveragePost: BlogPost = {
  slug: 'kroon-beverage-group-website-case-study',

  title: 'How I Built a Global Wholesale Beverage Catalog for Kroon Beverage Group',

  description:
    'A case study on building a WooCommerce wholesale catalog for a Netherlands-based distributor serving 50+ countries — custom WordPress theme, 250+ products, and a full order inquiry system.',

  image: '/blog/kroon-beverage-case-study.png',
  imageAlt: 'Screenshot of Kroon Beverage Group website homepage',

  date: '2026-04-10',

  readTime: 6,

  category: 'case-study',

  keywords:
    'WordPress WooCommerce wholesale website, beverage distributor website, custom WordPress theme, B2B product catalog, web design case study',

  blocks: [
    {
      type: 'paragraph',
      text: 'Kroon Beverage Group is a premium wholesale distributor headquartered in Elst, Netherlands. They supply retailers, restaurants, hotels, and distributors worldwide with over 250 products across 13 categories — beer, spirits, champagne, energy drinks, soft drinks, and more. When they approached me, they had one clear goal: a professional online presence that would let international buyers browse their catalog and place wholesale inquiries 24/7.',
    },
    {
      type: 'callout',
      text: '🔗 Live site: kroonbeveragegroup.com — Global wholesale distributor, 250+ products, 50+ countries served.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'The Challenge',
    },
    {
      type: 'paragraph',
      text: 'Before the new site, Kroon had no digital presence that matched the scale of their operation. Potential buyers in Europe, Asia, and the Middle East had no way to verify the company\'s legitimacy or browse their catalog without making a direct call. In the B2B wholesale world, this was a significant barrier — buyers want to qualify a supplier before they ever pick up the phone.',
    },
    {
      type: 'list',
      items: [
        'No product catalog online — buyers had to request a PDF by email',
        'No way to differentiate from smaller, less-established competitors',
        'International buyers in different timezones couldn\'t place inquiries outside business hours',
        'No trust signals: no address, no contact info, no social proof on the web',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'What I Built',
    },
    {
      type: 'paragraph',
      text: 'I chose WordPress with WooCommerce as the foundation — not for online payments, but because WooCommerce\'s product system is perfect for a large wholesale catalog. It gives the client full control to add, edit, and categorize products without touching any code. I built a completely custom theme from scratch (no page builder) to guarantee performance and keep the design tight to the brand.',
    },
    {
      type: 'numbered-list',
      items: [
        'Custom WordPress theme built from scratch — no Elementor, no page builder bloat',
        'WooCommerce catalog with 250+ products across 13 categories (Beer, Champagne, Vodka, Whiskey, Energy Drinks, Soft Drinks, and more)',
        'Per-product order inquiry system: each product has an "Order Now" button that pre-fills a contact form with the product name',
        'Hero section with global reach stats: 250+ products, 50+ countries, 24/7 support',
        'Fully responsive layout optimized for tablet and mobile buyers',
        'WhatsApp contact button for direct wholesale inquiry',
        'SEO setup: meta tags, sitemap, structured data for each product',
      ],
    },
    {
      type: 'image',
      src: '/blog/kroon-beverage-case-study.png',
      alt: 'Kroon Beverage Group website homepage with hero banner and product categories',
      caption: 'The homepage hero communicates scale immediately: 250+ products, 50+ countries, 13 categories.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Tech Stack',
    },
    {
      type: 'list',
      items: [
        'Platform: WordPress + WooCommerce (catalog mode, no checkout)',
        'Theme: 100% custom — built in PHP, HTML, CSS, vanilla JS',
        'Product management: WooCommerce default product post type + custom categories',
        'Contact & inquiry: WPForms with product pre-fill via URL parameters',
        'Performance: WP Rocket for caching, WebP images, lazy loading',
        'SEO: Yoast SEO, custom meta per product, XML sitemap',
        'Hosting: SiteGround (Netherlands server for EU low-latency)',
      ],
    },

    {
      type: 'heading',
      level: 2,
      text: 'Timeline & Process',
    },
    {
      type: 'paragraph',
      text: 'The project ran from brief to launch in 5 days. Day 1: discovery call, brand guidelines review, and homepage wireframe. Day 2: theme development — header, hero, footer, category grid. Day 3: WooCommerce integration and product template. Day 4: bulk product import (250+ products), contact forms, and mobile QA. Day 5: final client review, SEO setup, and DNS cutover. The client approved with zero revision requests on the design.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'Results',
    },
    {
      type: 'paragraph',
      text: 'Within two weeks of launch, Kroon reported that several inbound wholesale inquiries came through the "Order Now" form — buyers who found the site via Google search. The company now has a credible online presence to share with potential partners at trade shows and via email. The product catalog is actively maintained by their team using the WordPress dashboard.',
    },
    {
      type: 'callout',
      text: '📈 Key outcome: A static PDF catalog became a live, searchable, 250-product online catalog that qualifies buyers automatically — no sales call needed to get started.',
    },

    {
      type: 'heading',
      level: 2,
      text: 'What I Learned',
    },
    {
      type: 'paragraph',
      text: 'For B2B and wholesale businesses, the most important design principle is trust at first glance. Buyers evaluating a new supplier spend less than 10 seconds deciding if a company looks legitimate. That means: a real address, real contact info, real product photos, and a clean professional layout. Nothing fancy — just credible. I also learned that the "Order Now → pre-filled contact form" pattern works better than a traditional shopping cart for wholesale, because it keeps the conversation human while still capturing buyer intent precisely.',
    },

    { type: 'divider' },

    {
      type: 'callout',
      text: 'Building a B2B product catalog or wholesale website? I can have it live in under a week. Email ollysmith0@gmail.com or message on WhatsApp for a free quote.',
    },
  ],
};
