import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '@/constants';

const FILTERS = ['all', 'mobile', 'framer', 'shopify', 'portfolio', 'wordpress', 'landing'] as const;
type Filter = (typeof FILTERS)[number];

const INITIAL_COUNT = 6;

export default function Portfolio() {
  const [filter, setFilter]   = useState<Filter>('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p) => p.category === filter);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="portfolio" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="section-kicker">Selected Work</span>
            <h2
              className="mt-4 font-display font-extrabold leading-[0.92] tracking-[-0.03em] text-[var(--color-text)]"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4.8rem)' }}
            >
              Projects
              <span className="gradient-text"> I'm proud of.</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => { setFilter(f); setShowAll(false); }}
                className={[
                  'rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-200',
                  filter === f
                    ? 'bg-[var(--color-surface-hover)] text-[var(--color-text)] border border-[var(--color-line-strong)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-muted-2)]',
                ].join(' ')}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid gap-2 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.a
                key={item.title}
                layout
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(to top, rgba(4,5,13,0.9) 0%, rgba(4,5,13,0.5) 60%, transparent 100%)' }}
                >
                  <p
                    className="translate-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-y-0"
                  >
                    {item.category}
                  </p>
                  <h3
                    className="mt-1 translate-y-2 font-display text-xl font-bold leading-tight tracking-[-0.02em] text-[var(--color-text)] transition-transform duration-300 group-hover:translate-y-0"
                    style={{ transitionDelay: '30ms' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load more */}
        {filtered.length > INITIAL_COUNT && (
          <div className="mt-12 flex justify-center border-t border-[var(--color-line)] pt-10">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border border-[var(--color-line-strong)] px-7 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted-2)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {showAll
                ? '↑ Show less'
                : `↓ View ${filtered.length - INITIAL_COUNT} more`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
