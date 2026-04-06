import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

const FEATURED = TESTIMONIALS[0];

const STATS = [
  { value: '50+', label: 'stores and sites built' },
  { value: '98%', label: 'client satisfaction rate' },
  { value: '5 minutes', label: 'average response time' },
] as const;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'fill-[var(--color-accent)] text-[var(--color-accent)]' : 'text-[rgba(245,239,230,0.12)]'}
        />
      ))}
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="section-panel rounded-3xl border border-[var(--color-line)] p-6 md:p-8">
            <span className="section-kicker">Client Reviews</span>
            <p className="mt-6 font-display text-3xl leading-[1.05] tracking-[-0.04em] text-[var(--color-text)] md:text-5xl">
              &ldquo;{FEATURED.text}&rdquo;
            </p>

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={FEATURED.avatar}
                  alt={FEATURED.name}
                  className="h-12 w-12 rounded-full border border-[rgba(245,239,230,0.12)] object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">{FEATURED.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">{FEATURED.role}</p>
                </div>
              </div>
              <StarRating count={FEATURED.rating} />
            </div>
          </div>

          <div className="grid gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="section-panel rounded-2xl border border-[var(--color-line)] px-6 py-5">
                <p className="font-display text-4xl tracking-[-0.06em] text-[var(--color-accent)]">{stat.value}</p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.slice(1).map((t) => (
            <div
              key={t.name}
              className="section-panel rounded-2xl border border-[var(--color-line)] p-5"
            >
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full border border-[rgba(245,239,230,0.12)] object-cover" />
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">{t.role}</p>
                </div>
              </div>
              <StarRating count={t.rating} />
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
