import { useSEO } from '@/hooks/useSEO';

/**
 * Blog Index Page
 * Lists all blog posts (to be implemented)
 */
export default function BlogIndex() {
  useSEO({
    title: 'Blog | Olly Smith - Web Development & E-commerce Tips',
    description:
      'Articles about building conversion-optimized stores, web design, and e-commerce solutions.',
    ogUrl: 'https://ollysmith.store/blog',
    canonical: 'https://ollysmith.store/blog',
  });

  return (
    <div className="site-shell">
      <main className="relative z-10 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-5xl tracking-[-0.04em] text-[var(--color-text)]">
            Blog
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            Coming soon: Articles about web development, e-commerce, and web design.
          </p>

          <div className="mt-12">
            <p className="text-center text-[var(--color-muted)]">
              Check back soon for in-depth guides, case studies, and tips for building successful online stores.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
