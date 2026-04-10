// Registry of all published blog posts
// Add new posts here after creating them in /src/content/blog/
// Posts are shown in the order listed — put newest first

import { kroonBeveragePost } from './kroon-beverage-group-website-case-study';
import type { BlogPost } from '@/content/schema';

export const ALL_POSTS: BlogPost[] = [
  kroonBeveragePost,
  // Add more posts here as you write them:
  // seaboxCaseStudy,
  // shopifyVsWordpressPost,
  // howToBuildShopifyStorePost,
];

// Helper: get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
}

// Helper: get posts by category
export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return ALL_POSTS.filter((post) => post.category === category);
}
