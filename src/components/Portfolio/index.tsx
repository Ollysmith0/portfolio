import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/constants';

const FILTERS = ['all', 'shopify', 'portfolio', 'wordpress', 'framer'] as const;
type Filter = (typeof FILTERS)[number];

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'all' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4">
          <span className="section-kicker">Portfolio</span>
          <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--color-text)] md:text-6xl">
            Stores & sites
            <span className="block text-[var(--color-accent)]">that deliver results.</span>
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={[
                'rounded-full px-5 py-2 text-sm font-medium capitalize transition-all duration-200',
                filter === f
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'border border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]',
              ].join(' ')}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[rgba(245,239,230,0.03)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(5,5,7,0.85)_100%)]" />

                <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-[rgba(5,5,7,0.6)] px-3 py-1.5 text-xs text-[var(--color-text)] opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  View <ExternalLink size={12} />
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl tracking-[-0.03em] text-[var(--color-text)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
