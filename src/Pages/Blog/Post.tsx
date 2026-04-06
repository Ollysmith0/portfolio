import { useParams } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

/**
 * Individual Blog Post Page
 * Renders a single blog post by slug
 */
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  // In a real implementation, fetch blog post by slug
  // For now, show placeholder with SEO setup example
  useSEO({
    title: `Blog Post | Olly Smith Store`,
    description: `Read this article about web development and e-commerce solutions.`,
    ogUrl: `https://ollysmith.store/blog/${slug}`,
    canonical: `https://ollysmith.store/blog/${slug}`,
    type: 'article',
  });

  return (
    <div className="site-shell">
      <main className="relative z-10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-display text-4xl tracking-[-0.04em] text-[var(--color-text)]">
            Blog Post: {slug}
          </h1>
          <p className="mt-4 text-[var(--color-muted)]">
            This blog post page is ready for content. Set up your blog post in{' '}
            <code className="rounded bg-[rgba(245,239,230,0.1)] px-2 py-1 font-mono text-sm">
              /src/content/blog/
            </code>
          </p>

          <div className="mt-12 text-sm text-[var(--color-muted)]">
            <p>
              1. Create a blog post file in <code>/src/content/blog/</code> following the schema
              defined in <code>src/content/schema.ts</code>
            </p>
            <p className="mt-2">
              2. Import and render the post content using the BlogPost schema interface
            </p>
            <p className="mt-2">3. Use useSEO() hook to set dynamic meta tags from post data</p>
          </div>
        </div>
      </main>
    </div>
  );
}
