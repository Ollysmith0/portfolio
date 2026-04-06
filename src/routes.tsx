import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

/**
 * Route configuration for future expansion
 * Currently set up for homepage with prepared paths for:
 * - /blog - blog index and individual posts
 * - /portfolio/:slug - individual portfolio items
 * - /services/:slug - service detail pages
 */

// Lazy-loaded pages (code splitting)
const Home = lazy(() => import('@/Pages/Home'));
const BlogIndex = lazy(() => import('@/Pages/Blog/Index'));
const BlogPost = lazy(() => import('@/Pages/Blog/Post'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  // Blog routes (for Phase 3.3 implementation)
  {
    path: '/blog',
    element: <BlogIndex />,
  },
  {
    path: '/blog/:slug',
    element: <BlogPost />,
  },
];

// Future route templates (for reference)
export const FUTURE_ROUTES = {
  portfolio: '/portfolio/:slug',
  services: '/services/:slug',
  contact: '/contact',
  privacyPolicy: '/privacy',
  termsOfService: '/terms',
} as const;
