import { motion } from 'framer-motion';
import { Smartphone, Globe, Zap, Layers } from 'lucide-react';

const SERVICES = [
  {
    icon: Smartphone,
    title: 'React Native\nDevelopment',
    description:
      'Cross-platform iOS & Android apps from a single codebase — production-ready, smooth, and built to scale with TypeScript, Redux/Zustand, and REST/GraphQL.',
    accent: '#818cf8',
    tags: ['iOS', 'Android', 'TypeScript'],
  },
  {
    icon: Globe,
    title: 'Web &\nFront-End',
    description:
      'From animated landing pages to full SaaS dashboards — React, Next.js, Framer Motion, and Tailwind CSS. Pixel-perfect and performance-optimized.',
    accent: '#22d3ee',
    tags: ['React', 'Next.js', 'Framer Motion'],
  },
  {
    icon: Zap,
    title: 'n8n Business\nAutomation',
    description:
      'Connect your CRM, email, e-commerce, and HR tools with intelligent workflows that eliminate manual work. 20+ live automations deployed for SMBs.',
    accent: '#f97316',
    tags: ['n8n', 'Zapier', 'API Integration'],
    highlight: true,
  },
  {
    icon: Layers,
    title: 'UI/UX &\nAnimation',
    description:
      'Figma to code, motion design, micro-interactions and scroll-driven animations that make interfaces feel alive. Dark mode, accessibility, and brand-ready.',
    accent: '#c084fc',
    tags: ['Figma', 'GSAP', 'Lottie'],
  },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="section-kicker">What I Do</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[0.93] tracking-[-0.03em] text-[var(--color-text)]">
              Four specialties,
              <br />
              <span className="gradient-text">one partner.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-[1.8] text-[var(--color-muted-2)] md:text-right">
            From shipping a mobile app to automating your entire business pipeline — I cover the full stack.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description, accent, tags, highlight }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={[
                'group relative flex flex-col gap-5 rounded-3xl p-6 transition-colors duration-300 md:p-7',
                highlight
                  ? 'border border-[rgba(249,115,22,0.3)] bg-[rgba(249,115,22,0.06)] shadow-[0_0_40px_rgba(249,115,22,0.1)]'
                  : 'section-panel hover:border-[rgba(255,255,255,0.14)]',
              ].join(' ')}
            >
              {highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-[rgba(249,115,22,0.15)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-n8n)]">
                  New
                </span>
              )}
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${accent}18` }}
              >
                <Icon size={20} style={{ color: accent }} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="whitespace-pre-line font-display text-xl font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-text)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-[var(--color-muted-2)]">
                  {description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={highlight ? '#automation' : '#contact'}
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2.5"
                style={{ color: accent }}
              >
                {highlight ? 'See Case Studies →' : 'Get Started →'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

