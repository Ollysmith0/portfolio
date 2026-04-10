import type { BlogPost } from '@/content/schema';

// ================================================================
// BLOG POST TEMPLATE — Copy this file to create a new post
// ================================================================
// File naming: use the same name as the slug
// e.g., slug: "how-i-built-shopify-store" → file: how-i-built-shopify-store.ts
//
// STEPS TO WRITE A NEW POST:
// 1. Copy this file, rename it to your-post-slug.ts
// 2. Fill in all the fields below
// 3. Add it to src/content/blog/index.ts
// 4. Add a featured image to /public/blog/your-slug.png
// ================================================================

export const templatePost: BlogPost = {
  // ─── Metadata ──────────────────────────────────────────────
  slug: 'your-post-slug-here',

  title: 'Your Blog Post Title Here (Keep It Descriptive, ~60 chars)',

  // Between 120-155 characters. Should summarize the post value + keyword.
  description:
    'One sentence summary of what this post is about. Include your main keyword. Keep it between 120 and 155 characters for best SEO.',

  // Add your image to /public/blog/your-slug.png (1200x630 recommended)
  image: '/blog/your-slug.png',
  imageAlt: 'Describe what is visible in the image for accessibility',

  date: '2026-04-08', // YYYY-MM-DD format

  readTime: 5, // Estimated reading time in minutes

  // 'tutorial' | 'case-study' | 'tips' | 'news'
  category: 'case-study',

  // Comma-separated keywords for SEO
  keywords: 'keyword one, keyword two, keyword three',

  // ─── Content Blocks ────────────────────────────────────────
  // Build your post by stacking blocks in order.
  // Available types: paragraph, heading, list, numbered-list,
  //                  image, callout, divider
  blocks: [
    {
      type: 'paragraph',
      text: 'Opening paragraph — Hook the reader. What problem are you solving? Why should they read this?',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Section Heading (H2)',
    },
    {
      type: 'paragraph',
      text: 'Write your content here. Be specific and practical. Real details are more valuable than general advice.',
    },
    {
      type: 'list',
      items: [
        'First bullet point',
        'Second bullet point',
        'Third bullet point',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Another Section',
    },
    {
      type: 'paragraph',
      text: 'More content here.',
    },
    {
      type: 'callout',
      text: '💡 Use a callout box to highlight an important tip or key takeaway.',
    },
    {
      type: 'image',
      src: '/blog/your-screenshot.png',
      alt: 'Describe what is in this screenshot',
      caption: 'Optional caption text shown below the image.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Results / Conclusion',
    },
    {
      type: 'paragraph',
      text: 'Wrap up with the results, what you learned, or what the reader should do next.',
    },
    {
      type: 'callout',
      text: 'Need a website like this? → Contact me at ollysmith0@gmail.com or via WhatsApp.',
    },
  ],
};
