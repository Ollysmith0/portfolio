import { useRef } from 'react';
import { Monitor, Server, PenTool, LayoutGrid } from 'lucide-react';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiGit, SiFigma,
  SiMysql, SiFirebase, SiSass, SiJest, SiMocha, SiCypress,
  SiWordpress, SiShopify, SiWebflow, SiGraphql, SiPhp,
} from '@icons-pack/react-simple-icons';
import type { ComponentType } from 'react';
import { SKILL_CATEGORIES, TECH_STACK } from '@/constants';
import { useGsapReveal } from '@/hooks/useGsapReveal';

type IconProps = { size?: number; color?: string };

const TECH_ICONS: Record<string, ComponentType<IconProps>> = {
  HTML5: SiHtml5, CSS3: SiCss3, JavaScript: SiJavascript, TypeScript: SiTypescript,
  React: SiReact, 'Next.js': SiNextdotjs, 'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs, Git: SiGit, Figma: SiFigma,
  MySQL: SiMysql, Firebase: SiFirebase, Scss: SiSass, Jest: SiJest, Mocha: SiMocha, Cypress: SiCypress,
  WordPress: SiWordpress, Shopify: SiShopify, Webflow: SiWebflow,
  'React Native': SiReact, GraphQL: SiGraphql, PHP: SiPhp,
};

type LucideIconProps = { size?: number; className?: string; style?: React.CSSProperties };

const CATEGORY_ICONS: Record<string, ComponentType<LucideIconProps>> = {
  monitor: Monitor,
  server: Server,
  'pen-tool': PenTool,
  layout: LayoutGrid,
};

const PRINCIPLES = [
  'Build visual systems that can scale across launch pages and product surfaces.',
  'Use motion as hierarchy, not decoration, so interaction feels intentional.',
  'Translate design decisions into maintainable components and predictable UI logic.',
] as const;

export default function Skill() {
  const sectionRef = useRef<HTMLElement>(null);

  useGsapReveal(sectionRef, { selector: '[data-skill-reveal]', y: 52, stagger: 0.08 });

  return (
    <section ref={sectionRef} className='px-5 pb-24 md:px-10 md:pb-28'>
      <div className='mx-auto flex max-w-7xl flex-col gap-16'>
        <div className='grid gap-10 xl:grid-cols-[0.9fr_1.1fr]'>
          <div className='xl:sticky xl:top-28 xl:self-start'>
            <div data-skill-reveal className='flex flex-col gap-5'>
              <span className='section-kicker'>Capabilities</span>
              <h2 className='font-display text-5xl leading-[0.92] tracking-[-0.05em] text-[var(--color-text)] md:text-7xl'>
                Systems, motion,
                <span className='block text-[var(--color-accent)]'>and interface craft.</span>
              </h2>
              <p className='max-w-xl text-base leading-8 text-[var(--color-muted)] md:text-lg'>
                From pixel-precise front-end execution to design translation and technical handoff, I work where UI clarity and product momentum need to meet.
              </p>
            </div>

            <div data-skill-reveal className='mt-8 grid gap-4'>
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={principle}
                  className='section-panel rounded-[1.6rem] border border-[var(--color-line)] px-5 py-4'
                >
                  <p className='font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent-alt)]'>
                    0{index + 1}
                  </p>
                  <p className='mt-3 text-sm leading-7 text-[var(--color-muted)]'>{principle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='grid gap-5 md:grid-cols-2'>
            {SKILL_CATEGORIES.map(({ title, years, description, tags, icon, accent }, index) => {
              const Icon = CATEGORY_ICONS[icon];

              return (
                <article
                  key={title}
                  data-skill-reveal
                  className='section-panel relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] px-6 py-6'
                >
                  <div
                    className='absolute inset-x-0 top-0 h-px opacity-90'
                    style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                  />
                  <div className='flex items-start justify-between gap-4'>
                    <div
                      className='flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(245,239,230,0.08)]'
                      style={{ backgroundColor: `${accent}1a` }}
                    >
                      {Icon ? <Icon size={22} style={{ color: accent }} /> : null}
                    </div>
                    <div className='text-right'>
                      <p className='font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]'>
                        0{index + 1}
                      </p>
                      <p className='mt-2 text-sm text-[var(--color-text)]'>{years}+ years</p>
                    </div>
                  </div>

                  <div className='mt-10'>
                    <h3 className='font-display text-3xl tracking-[-0.04em] text-[var(--color-text)]'>{title}</h3>
                    <p className='mt-4 text-sm leading-7 text-[var(--color-muted)]'>{description}</p>
                  </div>

                  <div className='mt-8 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-full border border-[rgba(245,239,230,0.12)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div data-skill-reveal className='section-panel rounded-[2.4rem] border border-[var(--color-line)] px-5 py-6 md:px-7 md:py-8'>
          <div className='flex flex-col gap-3 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='section-kicker'>Toolbox</p>
              <h3 className='mt-4 font-display text-3xl tracking-[-0.04em] text-[var(--color-text)] md:text-4xl'>
                Languages and tools I reach for daily.
              </h3>
            </div>
            <p className='max-w-lg text-sm leading-7 text-[var(--color-muted)]'>
              Production-oriented front-end stack with enough backend and design fluency to move fast across ambiguous product work.
            </p>
          </div>

          <div className='mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
            {TECH_STACK.map(({ name }) => {
              const Icon = TECH_ICONS[name];

              return (
                <div
                  key={name}
                  data-skill-reveal
                  className='group rounded-[1.4rem] border border-[rgba(245,239,230,0.12)] bg-[rgba(245,239,230,0.03)] p-4 transition-transform duration-200 hover:-translate-y-1'
                  title={name}
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-[var(--color-text)]'>
                      {Icon ? <Icon size={18} color='currentColor' /> : null}
                    </span>
                    <span className='font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--color-muted)]'>
                      stack
                    </span>
                  </div>
                  <span className='mt-4 block text-sm leading-5 text-[var(--color-text)]'>
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


