/**
 * Dynamic Sitemap Generator
 * Generates sitemap.xml with all routes and content
 * 
 * Usage:
 * 1. Run during build: `npm run build:sitemap` (requires adding to package.json)
 * 2. Or fetch routes dynamically and generate at runtime
 */

export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Generate sitemap URLs from routes
 * Can be extended to include blog posts from /src/content/blog/
 */
export function generateSitemapUrls(): SitemapUrl[] {
  const baseUrl = 'https://ollysmith.store';
  const today = new Date().toISOString().split('T')[0];

  const urls: SitemapUrl[] = [
    {
      url: baseUrl,
      lastmod: today,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
    },
    // Blog posts would be added here dynamically
    // Example:
    // {
    //   url: `${baseUrl}/blog/how-to-build-shopify-store`,
    //   lastmod: '2026-04-01',
    //   changefreq: 'monthly',
    //   priority: 0.7,
    // }
  ];

  return urls;
}

/**
 * Format URLs to XML sitemap
 */
export function formatSitemapXML(urls: SitemapUrl[]): string {
  const urlsXML = urls
    .map(
      (url) => `
  <url>
    <loc>${escapeXML(url.url)}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority !== undefined ? `<priority>${url.priority}</priority>` : ''}
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXML}
</urlset>`;
}

/**
 * Escape special XML characters
 */
function escapeXML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Example usage in a build script or API route:
 * 
 * const urls = generateSitemapUrls();
 * const xml = formatSitemapXML(urls);
 * // Write to public/sitemap.xml
 * 
 * OR for dynamic generation at runtime:
 * 
 * // In an API route or middleware
 * app.get('/sitemap.xml', (req, res) => {
 *   const urls = generateSitemapUrls();
 *   const xml = formatSitemapXML(urls);
 *   res.type('application/xml').send(xml);
 * });
 */
