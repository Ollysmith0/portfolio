import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  author?: string;
  type?: 'website' | 'article' | 'page';
}

const DEFAULT_SEO: SEOConfig = {
  title: 'Olly Smith Store | Premium Web & E-Commerce Solutions',
  description:
    'Premium web development & e-commerce solutions. I build conversion-optimized WordPress, Shopify, and custom stores with payment integration. 50+ stores built with 98% client satisfaction.',
  keywords:
    'web development, e-commerce, Shopify store, WordPress, web design, portfolio, landing page, React developer',
  ogTitle: 'Olly Smith Store | Premium Web & E-Commerce Solutions',
  ogDescription:
    'Beautiful stores that sell themselves. WordPress, Shopify, or fully custom — I build conversion-optimized stores with payment integration.',
  ogImage: 'https://ollysmith.store/og-image.png',
  ogUrl: 'https://ollysmith.store/',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Olly Smith Store | Premium Web & E-Commerce Solutions',
  twitterDescription:
    'Beautiful stores that sell themselves. I build conversion-optimized WordPress, Shopify, & custom stores.',
  twitterImage: 'https://ollysmith.store/og-image.png',
  canonical: 'https://ollysmith.store/',
  author: 'Olly Smith',
  type: 'website',
};

/**
 * useSEO Hook - Manages dynamic meta tags for pages
 * @param config SEO configuration for the current page
 * @example
 * useSEO({
 *   title: 'Blog Post | Olly Smith',
 *   description: 'My latest blog post about web development...',
 *   canonical: 'https://ollysmith.store/blog/post-slug'
 * })
 */
export function useSEO(config: SEOConfig = {}) {
  const merged = { ...DEFAULT_SEO, ...config };

  useEffect(() => {
    // Update page title in document
    document.title = merged.title || DEFAULT_SEO.title!;
  }, [merged.title]);

  return (
    <Helmet>
      <title>{merged.title}</title>
      <meta name="description" content={merged.description} />
      <meta name="keywords" content={merged.keywords} />
      <meta name="author" content={merged.author} />

      {/* OpenGraph */}
      <meta property="og:type" content={merged.type} />
      <meta property="og:title" content={merged.ogTitle} />
      <meta property="og:description" content={merged.ogDescription} />
      <meta property="og:image" content={merged.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={merged.ogUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={merged.twitterCard} />
      <meta name="twitter:title" content={merged.twitterTitle} />
      <meta name="twitter:description" content={merged.twitterDescription} />
      <meta name="twitter:image" content={merged.twitterImage} />

      {/* Canonical */}
      <link rel="canonical" href={merged.canonical} />
    </Helmet>
  );
}
