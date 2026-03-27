import { motion } from 'framer-motion';
import React from 'react';
import { Monitor, Server, PenTool, LayoutGrid } from 'lucide-react';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiGit, SiFigma,
  SiMysql, SiFirebase, SiSass, SiJest, SiMocha, SiCypress,
  SiWordpress, SiShopify, SiWebflow, SiGraphql, SiPhp,
} from '@icons-pack/react-simple-icons';
import type { ComponentType } from 'react';
import { SKILL_CATEGORIES, TECH_STACK } from '@/constants';

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

const SECTION_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skill() {
  return (
    <section className='py-24 px-8 md:px-12'>
      <div className='max-w-6xl mx-auto flex flex-col gap-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col gap-3'
        >
          <span className='inline-flex items-center gap-2 font-mono text-xs text-[#6EE7B7] uppercase tracking-widest'>
            <span className='w-8 h-px bg-[#6EE7B7]' />
            What I do
          </span>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
            My skills &amp; <span className='text-[#6EE7B7]'>expertise</span>
          </h2>
          <p className='text-[#6B7280] text-base max-w-xl leading-relaxed'>
            From crafting pixel-perfect UIs to building APIs and designing systems — here's what I bring to the table.
          </p>
        </motion.div>

        <motion.div
          variants={SECTION_VARIANTS}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid sm:grid-cols-2 gap-6'
        >
          {SKILL_CATEGORIES.map(({ title, years, description, tags, icon, accent }) => {
            const Icon = CATEGORY_ICONS[icon];
            return (
              <motion.div
                key={title}
                variants={CARD_VARIANTS}
                whileHover={{ y: -4 }}
                className='relative bg-[#161616] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col gap-5 hover:border-[#6EE7B7]/30 transition-all duration-300 overflow-hidden'
              >
                {/* Top accent bar */}
                <div
                  className='absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl'
                  style={{ backgroundColor: accent }}
                />

                {/* Header row */}
                <div className='flex items-start justify-between gap-3 pt-1'>
                  <div
                    className='flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center'
                    style={{ backgroundColor: `${accent}18` }}
                  >
                    {Icon && <Icon size={20} className='opacity-90' style={{ color: accent }} />}
                  </div>
                  <span
                    className='text-xs font-mono font-semibold px-2.5 py-1 rounded-full'
                    style={{ backgroundColor: `${accent}18`, color: accent }}
                  >
                    {years}yr{years > 1 ? 's' : ''}
                  </span>
                </div>

                <div className='flex flex-col gap-2'>
                  <h3 className='font-semibold text-lg text-[#F9FAFB] leading-tight'>{title}</h3>
                  <p className='text-sm text-[#6B7280] leading-relaxed'>{description}</p>
                </div>

                {/* Divider */}
                <div className='h-px bg-[#2A2A2A]' />

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2.5 py-1 text-xs rounded-lg border border-[#2A2A2A] text-[#D1D5DB] font-mono bg-[#1C1C1C]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col gap-8'
        >
          <div className='flex flex-col gap-2'>
            <h3 className='text-2xl font-bold text-[#F9FAFB]'>Languages &amp; tools</h3>
            <p className='text-sm text-[#6B7280]'>Technologies I work with on a daily basis.</p>
          </div>
          <motion.div
            variants={SECTION_VARIANTS}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3'
          >
            {TECH_STACK.map(({ name }) => {
              const Icon = TECH_ICONS[name];
              return (
                <motion.div
                  key={name}
                  variants={CARD_VARIANTS}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className='flex flex-col items-center gap-2 p-3 rounded-xl bg-[#161616] border border-[#2A2A2A] hover:border-[#6EE7B7]/40 transition-all duration-200 cursor-default group'
                  title={name}
                >
                  {Icon ? <Icon size={22} color='currentColor' /> : null}
                  <span className='text-[10px] font-mono text-[#6B7280] group-hover:text-[#D1D5DB] transition-colors text-center leading-tight'>
                    {name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


