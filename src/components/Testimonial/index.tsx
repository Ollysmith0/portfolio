import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';
import { useRef } from 'react';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const DUPLICATED = [...TESTIMONIALS, ...TESTIMONIALS];
const FEATURED = TESTIMONIALS[0];

const STATS = [
  { value: '10+', label: 'shipped projects and launches' },
  { value: '5 yrs', label: 'hands-on front-end delivery' },
  { value: 'UI + Code', label: 'design-aware implementation' },
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
  const sectionRef = useRef<HTMLElement>(null);

  useGsapReveal(sectionRef, { selector: '[data-testimonial-reveal]', y: 44, stagger: 0.1 });

  return (
    <section ref={sectionRef} className="overflow-hidden px-5 pb-24 md:px-10 md:pb-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div data-testimonial-reveal className="section-panel rounded-[2.6rem] border border-[var(--color-line)] p-6 md:p-8">
            <span className="section-kicker">Selected feedback</span>
            <p className="mt-8 font-display text-4xl leading-[1.02] tracking-[-0.05em] text-[var(--color-text)] md:text-6xl">
              “{FEATURED.text}”
            </p>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={FEATURED.avatar}
                  alt={FEATURED.name}
                  className="h-14 w-14 rounded-full border border-[rgba(245,239,230,0.12)] object-cover"
                />
                <div>
                  <p className="text-base font-medium text-[var(--color-text)]">{FEATURED.name}</p>
                  <p className="text-sm text-[var(--color-muted)]">{FEATURED.role}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <StarRating count={FEATURED.rating} />
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">{FEATURED.date}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                data-testimonial-reveal
                className="section-panel rounded-[2rem] border border-[var(--color-line)] px-6 py-6"
              >
                <p className="font-display text-4xl tracking-[-0.06em] text-[var(--color-accent)] md:text-5xl">{stat.value}</p>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-testimonial-reveal className="flex items-end justify-between gap-4">
          <div>
            <span className="section-kicker">More voices</span>
            <h3 className="mt-4 font-display text-3xl tracking-[-0.05em] text-[var(--color-text)] md:text-4xl">
              Trusted by clients who care about polish.
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-[var(--color-bg)] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none" />
          <motion.div
            className="flex gap-5"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            {DUPLICATED.map((t, i) => (
              <div
                key={i}
                className="section-panel flex w-[20rem] flex-shrink-0 flex-col gap-4 rounded-[1.8rem] border border-[var(--color-line)] p-5"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full border border-[rgba(245,239,230,0.12)] object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">{t.name}</p>
                    <p className="text-xs text-[var(--color-muted)]">{t.role}</p>
                  </div>
                </div>
                <StarRating count={t.rating} />
                <p className="text-sm leading-7 text-[var(--color-muted)] line-clamp-3">"{t.text}"</p>
                <p className="mt-auto font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">{t.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
