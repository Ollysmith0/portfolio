import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { ArrowLeft, Clock, Calendar, Copy, Check } from 'lucide-react';
import { getPostBySlug } from '@/content/blog';
import type { Block } from '@/content/schema';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SOCIAL_LINKS } from '@/constants';

// ── Reading Progress Bar ────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-[var(--color-line)]">
      <div
        className="h-full bg-[var(--color-accent)] transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Copy Link Button ────────────────────────────────────
function CopyLink() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      title="Copy link"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
    </button>
  );
}

// ── Block renderer ──────────────────────────────────────
function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-[17px] leading-[1.85] text-[rgba(245,239,230,0.82)]">
          {block.text}
        </p>
      );

    case 'heading':
      return block.level === 2 ? (
        <h2 className="pt-4 font-display text-[1.6rem] leading-[1.15] tracking-[-0.03em] text-[var(--color-text)]">
          {block.text}
        </h2>
      ) : (
        <h3 className="pt-2 font-display text-xl leading-[1.2] tracking-[-0.02em] text-[var(--color-text)]">
          {block.text}
        </h3>
      );

    case 'list':
      return (
        <ul className="flex flex-col gap-3 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[17px] leading-[1.75] text-[rgba(245,239,230,0.82)]">
              <span className="mt-[0.6em] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-accent)]" />
              {item}
            </li>
          ))}
        </ul>
      );

    case 'numbered-list':
      return (
        <ol className="flex flex-col gap-3 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-[17px] leading-[1.75] text-[rgba(245,239,230,0.82)]">
              <span className="mt-[0.18em] shrink-0 font-mono text-sm font-medium text-[var(--color-accent)]">
                {String(i + 1).padStart(2, '0')}.
              </span>
              {item}
            </li>
          ))}
        </ol>
      );

    case 'image':
      return (
        <figure className="-mx-4 md:-mx-12 lg:-mx-24">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)]">
            <img src={block.src} alt={block.alt} loading="lazy" className="w-full object-cover" />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center font-mono text-xs text-[var(--color-muted)]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'callout':
      return (
        <div className="rounded-2xl border-l-[3px] border-[var(--color-accent)] bg-[rgba(255,122,47,0.07)] px-5 py-4">
          <p className="text-[15px] leading-[1.75] text-[var(--color-text)]">{block.text}</p>
        </div>
      );

    case 'divider':
      return (
        <div className="flex items-center justify-center gap-3 py-4">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[5px] w-[5px] rounded-full bg-[var(--color-line)]" />
          ))}
        </div>
      );

    default:
      return null;
  }
}

// ── Page ───────────────────────────────────────────────
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? '');
  const contentRef = useRef<HTMLDivElement>(null);

  if (!post) return <Navigate to="/blog" replace />;

  useSEO({
    title: `${post.title} | Olly Smith`,
    description: post.description,
    keywords: post.keywords,
    ogTitle: post.title,
    ogDescription: post.description,
    ogImage: `https://ollysmith.store${post.image}`,
    ogUrl: `https://ollysmith.store/blog/${post.slug}`,
    twitterTitle: post.title,
    twitterDescription: post.description,
    twitterImage: `https://ollysmith.store${post.image}`,
    canonical: `https://ollysmith.store/blog/${post.slug}`,
    type: 'article',
  });

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="site-shell">
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            image: `https://ollysmith.store${post.image}`,
            datePublished: post.date,
            author: { '@type': 'Person', name: 'Olly Smith', url: 'https://ollysmith.store' },
            publisher: { '@type': 'Organization', name: 'Olly Smith Store', url: 'https://ollysmith.store' },
          }),
        }}
      />

      <ReadingProgress />
      <Header />

      <main className="relative z-10">
        {/* ── Hero zone ───────────────────────────── */}
        <div className="px-5 pt-28 pb-0 md:px-10 md:pt-36">
          <div className="mx-auto max-w-3xl">

            {/* Back */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <ArrowLeft size={13} /> All posts
            </Link>

            {/* Category + meta */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[rgba(141,246,207,0.3)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8df6cf] capitalize">
                {post.category.replace('-', ' ')}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)]">
                <Clock size={11} /> {post.readTime} min read
              </span>
              <time dateTime={post.date} className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)]">
                <Calendar size={11} /> {formattedDate}
              </time>
            </div>

            {/* Title */}
            <h1 className="mt-5 font-display text-[2.2rem] leading-[1.08] tracking-[-0.04em] text-[var(--color-text)] md:text-[3rem] lg:text-[3.5rem]">
              {post.title}
            </h1>

            {/* Deck / description */}
            <p className="mt-5 text-xl leading-[1.7] text-[var(--color-muted)]">
              {post.description}
            </p>

            {/* Author strip */}
            <div className="mt-8 flex items-center justify-between border-y border-[var(--color-line)] py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] font-display text-sm font-bold text-white">
                  O
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">Olly Smith</p>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>
              <CopyLink />
            </div>
          </div>
        </div>

        {/* ── Full-width featured image ─────────────── */}
        {post.image && (
          <div className="mt-10 px-5 md:px-10">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[var(--color-line)]">
              <img
                src={post.image}
                alt={post.imageAlt}
                loading="eager"
                className="w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* ── Article body ────────────────────────── */}
        <div ref={contentRef} className="px-5 pt-12 pb-20 md:px-10 md:pb-28">
          <div className="mx-auto max-w-3xl">

            {/* Content blocks — generous vertical rhythm */}
            <div className="flex flex-col gap-7">
              {post.blocks.map((block, i) => (
                <RenderBlock key={i} block={block} />
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
              {post.keywords.split(',').map((kw) => (
                <span
                  key={kw}
                  className="rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]"
                >
                  {kw.trim()}
                </span>
              ))}
            </div>

            {/* Author CTA card */}
            <div className="mt-14 rounded-3xl border border-[var(--color-line)] bg-[rgba(245,239,230,0.03)] p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] font-display text-lg font-bold text-white">
                  O
                </div>
                <div>
                  <p className="font-display text-lg tracking-[-0.02em] text-[var(--color-text)]">
                    Olly Smith
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--color-muted)]">
                    Web developer & e-commerce specialist. WordPress, Shopify, and custom builds.
                  </p>
                </div>
              </div>
              <p className="mt-5 font-display text-xl tracking-[-0.03em] text-[var(--color-text)]">
                Need something built like this?
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Email me
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  WhatsApp
                </a>
                <Link
                  to="/blog"
                  className="rounded-full border border-[var(--color-line)] px-6 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  More posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
