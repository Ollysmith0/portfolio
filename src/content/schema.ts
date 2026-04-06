// Content schema definition for blog posts and pages
// Use this structure when creating new blog posts in /src/content/blog/

export interface BlogPost {
  /** URL-friendly slug (e.g., "how-to-build-shopify-store") */
  slug: string;
  
  /** Display title */
  title: string;
  
  /** SEO meta description (155-160 chars) */
  description: string;
  
  /** Featured image URL */
  image: string;
  
  /** Alt text for featured image */
  imageAlt: string;
  
  /** Publication date (ISO format: YYYY-MM-DD) */
  date: string;
  
  /** Author name */
  author: string;
  
  /** Estimated read time in minutes */
  readTime: number;
  
  /** Blog post content (markdown or HTML string) */
  content: string;
  
  /** SEO keywords (comma-separated) */
  keywords: string;
  
  /** Article category */
  category: 'tutorial' | 'case-study' | 'tips' | 'news';
  
  /** Related post slugs for internal linking */
  relatedPosts?: string[];
}

/**
 * Example blog post structure:
 * 
 * import { BlogPost } from '@/content/schema';
 * 
 * export const examplePost: BlogPost = {
 *   slug: 'how-to-build-shopify-store',
 *   title: 'How to Build a High-Converting Shopify Store',
 *   description: 'Complete guide to building a Shopify store with custom theme design, product setup, and conversion optimization.',
 *   image: '/blog/shopify-store.png',
 *   imageAlt: 'Screenshot of custom Shopify store dashboard',
 *   date: '2026-04-01',
 *   author: 'Olly Smith',
 *   readTime: 8,
 *   content: '...',
 *   keywords: 'Shopify, e-commerce, web design, custom theme',
 *   category: 'tutorial',
 *   relatedPosts: ['wordpress-vs-shopify', 'ecommerce-seo-tips']
 * }
 */
