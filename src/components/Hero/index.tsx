import { motion } from 'framer-motion';
import avatar from '@/assets/avatar.jpg';
import { SOCIAL_LINKS } from '@/constants';

const TECH_STACK = ['React Native', 'TypeScript', 'n8n', 'Next.js', 'Framer Motion'] as const;

const METRICS = [
  { value: '50+', label: 'Projects delivered', color: 'var(--color-accent)' },
  { value: '20+', label: 'Automations built', color: 'var(--color-n8n)' },
  { value: '98%', label: 'Client satisfaction', color: 'var(--color-emerald)' },
] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-14 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
        {/* Left — content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-7"
        >
          <motion.span variants={fadeUp} className="section-kicker">
            Full-Stack Developer & Automation Expert
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.6rem,7.5vw,5.8rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-[var(--color-text)]"
          >
            I build apps
            <br />
            <span className="gradient-text">that work</span>
            <span className="block">& automations</span>
            <span className="block text-[var(--color-muted-2)]">that save hours.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-lg text-base leading-[1.85] text-[var(--color-muted-2)]">
            React Native apps, polished web experiences, and n8n automation workflows
            that connect all your tools — built for businesses that want to move faster.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              className="rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_var(--color-accent-glow)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_36px_var(--color-accent-glow)]"
            >
              View My Work
            </a>
            <a
              href="#automation"
              className="rounded-full border border-[rgba(249,115,22,0.4)] bg-[rgba(249,115,22,0.08)] px-7 py-3.5 text-sm font-semibold text-[var(--color-n8n)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-n8n)] hover:bg-[rgba(249,115,22,0.14)]"
            >
              Explore Automation ↓
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-line-strong)] px-7 py-3.5 text-sm font-medium text-[var(--color-muted-2)] transition-all duration-200 hover:border-[var(--color-line-strong)] hover:text-[var(--color-text)]"
            >
              WhatsApp
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-3">
            {METRICS.map(({ value, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="section-panel rounded-2xl px-5 py-4"
              >
                <p className="font-display text-3xl font-extrabold tracking-[-0.04em]" style={{ color }}>
                  {value}
                </p>
                <p className="mt-1 text-xs text-[var(--color-muted)]">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stack badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs text-[var(--color-muted)]">Stack:</span>
            {TECH_STACK.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.07 }}
                className="rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — avatar card */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="show"
          className="flex justify-center xl:justify-end"
        >
          <div className="relative w-full max-w-[28rem]">
            {/* Glow blob */}
            <motion.div
              className="absolute inset-[-12%] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle,rgba(99,102,241,0.2) 0%,transparent 70%)' }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="section-panel relative overflow-hidden rounded-3xl p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={avatar}
                  alt="Olly Smith"
                  className="h-full w-full object-cover object-[center_18%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-[rgba(4,5,13,0.75)]" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-5 bottom-5 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(4,5,13,0.8)] p-4 backdrop-blur-lg"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-[var(--color-emerald)]"
                    style={{ boxShadow: '0 0 8px var(--color-emerald)' }}
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--color-emerald)]">
                    Available for projects
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                  Apps · Automation · Web
                </p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-5 py-2 text-xs font-semibold text-white"
                >
                  Start a Project →
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
