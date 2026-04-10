import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { ALL_POSTS } from '@/content/blog';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CATEGORY_COLORS: Record<string, string> = {
  'case-study': 'text-[#8df6cf] border-[rgba(141,246,207,0.3)]',
  tutorial: 'text-[#87a7ff] border-[rgba(135,167,255,0.3)]',
  tips: 'text-[var(--color-accent)] border-[rgba(255,122,47,0.25)]',
  news: 'text-[var(--color-muted)] border-[var(--color-line)]',
};

export default function BlogIndex() {
  useSEO({
    title: 'Blog | Olly Smith — Web Development & E-Commerce',
    description:
      'Case studies, tutorials, and tips on building Shopify stores, WordPress sites, and custom web projects.',
    ogUrl: 'https://ollysmith.store/blog',
    canonical: 'https://ollysmith.store/blog',
  });

  return (
    <div className="site-shell">
      <Header />
      <main className="relative z-10 px-5 pt-28 pb-20 md:px-10 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-3xl">

          {/* ── Masthead ─────────────────────────────── */}
          <div className="border-b border-[var(--color-line)] pb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Writing
            </p>
            <h1 className="mt-3 font-display text-[3rem] leading-[1.0] tracking-[-0.04em] text-[var(--color-text)] md:text-[4.5rem]">
              Articles &<br />
              <span className="text-[var(--color-accent)]">case studies.</span>
            </h1>
            <p className="mt-4 max-w-lg text-[17px] leading-[1.75] text-[var(--color-muted)]">
              Real projects, honest lessons, and practical guides on web development and e-commerce.
            </p>
          </div>

          {/* ── Post list ────────────────────────────── */}
          <div className="divide-y divide-[var(--color-line)]">
            {ALL_POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex items-start gap-6 py-9"
              >
                {/* Left: text */}
                <div className="flex flex-1 flex-col gap-3 min-w-0">
                  {/* Category pill */}
                  <span
                    className={`inline-flex w-fit rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] capitalize ${CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS.news}`}
                  >
                    {post.category.replace('-', ' ')}
                  </span>

                  {/* Title */}
                  <h2 className="font-display text-[1.35rem] leading-[1.15] tracking-[-0.03em] text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)] md:text-[1.55rem]">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="line-clamp-2 text-[15px] leading-[1.7] text-[var(--color-muted)]">
                    {post.description}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center gap-4">
                    <time
                      dateTime={post.date}
                      className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-muted)]"
                    >
                      <Calendar size={11} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-muted)]">
                      <Clock size={11} />
                      {post.readTime} min read
                    </span>
                  </div>
                </div>

                {/* Right: thumbnail */}
                {post.image && (
                  <div className="hidden shrink-0 overflow-hidden rounded-xl border border-[var(--color-line)] sm:block">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="h-[110px] w-[165px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>

          {ALL_POSTS.length === 0 && (
            <p className="mt-16 text-center font-mono text-sm text-[var(--color-muted)]">
              First posts coming soon.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
