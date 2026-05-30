import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

const FEATURED = TESTIMONIALS[0];

const STATS = [
  { value: '50+', label: 'projects delivered', color: 'var(--color-accent)' },
  { value: '98%', label: 'satisfaction rate', color: 'var(--color-emerald)' },
  { value: '5 min', label: 'avg. response time', color: 'var(--color-cyan)' },
] as const;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < count ? 'fill-[var(--color-accent)] text-[var(--color-accent)]' : 'text-[var(--color-line-strong)]'}
        />
      ))}
    </div>
  );
}

export default function Testimonial() {
  return (
    <section id="about" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <span className="section-kicker">Client Reviews</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[0.93] tracking-[-0.03em] text-[var(--color-text)]">
            What clients
            <span className="gradient-text"> say.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          {/* Featured quote */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="section-panel flex flex-col gap-5 rounded-3xl p-6 md:p-8"
          >
            <StarRating count={FEATURED.rating} />
            <p className="font-display text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-[var(--color-text)] md:text-4xl">
              &ldquo;{FEATURED.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img
                src={FEATURED.avatar}
                alt={FEATURED.name}
                className="h-12 w-12 rounded-full border border-[var(--color-line-strong)] object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">{FEATURED.name}</p>
                <p className="text-xs text-[var(--color-muted)]">{FEATURED.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="section-panel flex items-center gap-4 rounded-2xl px-6 py-5"
              >
                <p
                  className="min-w-[5rem] font-display text-4xl font-extrabold tracking-[-0.05em]"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--color-muted-2)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.slice(1).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-panel flex flex-col gap-3 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full border border-[var(--color-line)] object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">{t.role}</p>
                </div>
              </div>
              <StarRating count={t.rating} />
              <p className="text-sm leading-[1.75] text-[var(--color-muted-2)]">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
