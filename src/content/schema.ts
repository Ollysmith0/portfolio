// Content schema for blog posts
// Each post lives in /src/content/blog/<slug>.ts

// ── Content Blocks ────────────────────────────────────────
// These are the building blocks for writing a blog post.
// Mix and match blocks to compose your content.

export type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'numbered-list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'callout'; text: string }  // highlighted box
  | { type: 'divider' }

// ── Blog Post ─────────────────────────────────────────────
export interface BlogPost {
  /** URL slug — must be unique, lowercase, hyphen-separated */
  slug: string;

  /** Page title (also shown as H1) */
  title: string;

  /** SEO meta description — keep between 120-155 characters */
  description: string;

  /** Featured image path from /public/blog/ folder */
  image: string;

  /** Alt text for featured image (describe what's in the image) */
  imageAlt: string;

  /** Publish date in ISO format: YYYY-MM-DD */
  date: string;

  /** Estimated reading time in minutes */
  readTime: number;

  /** Article category */
  category: 'tutorial' | 'case-study' | 'tips' | 'news';

  /** Keywords for SEO meta tag (comma-separated) */
  keywords: string;

  /** Array of content blocks that make up the post */
  blocks: Block[];
}
