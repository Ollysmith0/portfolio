import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Zap } from 'lucide-react';
import { N8N_WORKFLOWS, type N8nWorkflow } from '@/constants';

const STATS = [
  { value: '20+', label: 'Workflows deployed' },
  { value: '100+', label: 'Hours saved per week' },
  { value: '8', label: 'SMB clients automated' },
  { value: '$0', label: 'Per workflow hosting cost' },
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function WorkflowCard({ w, index }: { w: N8nWorkflow; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition-colors duration-300 hover:border-[rgba(255,255,255,0.14)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <span
          className="rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em]"
          style={{
            color: w.categoryColor,
            backgroundColor: `${w.categoryColor}18`,
            border: `1px solid ${w.categoryColor}30`,
          }}
        >
          {w.category}
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(249,115,22,0.12)] transition-transform duration-300 group-hover:scale-110">
          <Zap size={13} style={{ color: 'var(--color-n8n)' }} />
        </div>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="font-display text-base font-bold leading-tight text-[var(--color-text)]">
          {w.title}
        </h3>
        <p className="mt-2 text-sm leading-[1.75] text-[var(--color-muted-2)]">
          {w.description}
        </p>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5">
        {w.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-muted)]"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Result metric */}
      <div
        className="rounded-xl p-3"
        style={{ backgroundColor: `${w.categoryColor}0d`, border: `1px solid ${w.categoryColor}20` }}
      >
        <p className="mb-0.5 text-[10px] text-[var(--color-muted)]">{w.result}</p>
        <p className="font-display text-xl font-extrabold" style={{ color: w.categoryColor }}>
          {w.resultValue}
        </p>
      </div>

      {/* Links */}
      <div className="mt-auto flex items-center gap-4 pt-1">
        <a
          href="#contact"
          className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] transition-all duration-200 hover:gap-2.5 hover:text-[var(--color-text)]"
        >
          Discuss This
          <ArrowRight size={12} />
        </a>
        <a
          href={w.templateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-1 text-[10px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-muted-2)]"
        >
          n8n template
          <ExternalLink size={10} />
        </a>
      </div>
    </motion.div>
  );
}

export default function N8nAutomation() {
  return (
    <section id="automation" className="relative px-5 py-20 md:px-10 md:py-28">
      {/* Distinct background tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(249,115,22,0.04)] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-kicker" style={{ color: 'var(--color-n8n)', opacity: 1 }}>
              n8n Automation Expert
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,4.2rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-[var(--color-text)]">
              Automate the boring work.
              <span className="block gradient-text-warm">Keep the humans for strategy.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-[1.85] text-[var(--color-muted-2)]">
              I design, build, and deploy n8n automation workflows that connect all your business tools —
              CRM, email, e-commerce, HR, and finance — eliminating the manual work that slows your team down.
              Every workflow below was built and deployed for a real SMB client.
            </p>
          </div>

          <a
            href="https://n8n.io/workflows/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 self-start rounded-full border border-[rgba(249,115,22,0.4)] bg-[rgba(249,115,22,0.08)] px-6 py-3 text-sm font-semibold text-[var(--color-n8n)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-n8n)] hover:shadow-[0_8px_24px_var(--color-n8n-glow)] lg:self-auto"
          >
            <Zap size={15} />
            Browse n8n Templates
          </a>
        </motion.div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 text-center"
            >
              <p className="font-display text-3xl font-extrabold tracking-[-0.04em] text-[var(--color-n8n)]">
                {value}
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Workflow grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {N8N_WORKFLOWS.map((w, i) => (
            <WorkflowCard key={w.id} w={w} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-[rgba(249,115,22,0.2)] bg-[rgba(249,115,22,0.06)] p-8 text-center md:p-12"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(249,115,22,0.15)]"
          >
            <Zap size={22} style={{ color: 'var(--color-n8n)' }} />
          </motion.div>
          <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em] text-[var(--color-text)] md:text-3xl">
            Ready to reclaim your team's time?
          </h3>
          <p className="max-w-lg text-sm leading-[1.8] text-[var(--color-muted-2)]">
            Book a free 30-minute automation audit. I'll map out which repetitive tasks in your business
            can be eliminated with n8n — with a realistic time-saved estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-[#ea580c] to-[var(--color-n8n)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_var(--color-n8n-glow)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_36px_var(--color-n8n-glow)]"
            >
              Book Free Automation Audit
            </a>
            <a
              href="https://n8n.io/workflows/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-line-strong)] px-7 py-3.5 text-sm font-medium text-[var(--color-muted-2)] transition-all duration-200 hover:border-[rgba(249,115,22,0.4)] hover:text-[var(--color-n8n)]"
            >
              Explore n8n Workflows ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

