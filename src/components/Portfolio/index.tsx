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
    <section id="portfolio" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">Work</span>
            <h2
              className="mt-4 font-display leading-[0.92] tracking-[-0.03em] text-[#eeeeee]"
              style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)' }}
            >
              Selected
              <br />
              projects.
            </h2>
          </div>

          {/* Text-only filter tabs — no pill borders */}
          <div className="flex flex-wrap items-center gap-6">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => { setFilter(f); setShowAll(false); }}
                className="font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200"
                style={{
                  color: filter === f
                    ? '#eeeeee'
                    : 'rgba(238,238,238,0.3)',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Full-bleed image grid */}
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
                className="group relative block aspect-[4/3] overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{ background: 'rgba(10,10,10,0.72)' }}
                >
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.22em] translate-y-3 transition-transform duration-300 group-hover:translate-y-0"
                    style={{ color: 'rgba(238,238,238,0.5)' }}
                  >
                    {item.category}
                  </p>
                  <h3
                    className="mt-1 font-display text-2xl leading-tight tracking-[-0.02em] text-[#eeeeee] translate-y-3 transition-transform duration-300 group-hover:translate-y-0"
                    style={{ transitionDelay: '30ms' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load more — minimal text button */}
        {filtered.length > INITIAL_COUNT && (
          <div className="mt-12 flex justify-center border-t pt-10" style={{ borderColor: 'rgba(238,238,238,0.08)' }}>
            <button
              onClick={() => setShowAll((v) => !v)}
              className="font-mono text-[11px] uppercase tracking-[0.25em] transition-colors duration-200"
              style={{ color: 'rgba(238,238,238,0.4)' }}
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
