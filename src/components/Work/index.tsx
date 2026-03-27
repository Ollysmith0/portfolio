import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CODE_PROJECTS, DESIGN_PROJECTS, TEMPLATE_PROJECTS } from '@/constants';

const SECTION_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Project = {
  title: string;
  image: string;
  url: string;
  tags?: readonly string[];
  description?: string;
};

function ProjectCard({ title, image, url, tags, description }: Project) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={CARD_VARIANTS}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl bg-[#161616] border border-[#2A2A2A] hover:border-[#6EE7B7]/40 transition-all duration-300 flex flex-col"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="p-2 rounded-full bg-[#6EE7B7] flex items-center justify-center">
            <ExternalLink size={14} className="text-[#0F0F0F]" />
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-[#F9FAFB] group-hover:text-[#6EE7B7] transition-colors duration-200">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">{description}</p>
        )}
        {tags && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded border border-[#2A2A2A] text-[#6B7280]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
}

function SectionHeader({ label, title, accent }: { label: string; title: string; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-3"
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs text-[#6EE7B7] uppercase tracking-widest">
        <span className="w-8 h-px bg-[#6EE7B7]" />
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title} <span className="text-[#6EE7B7]">{accent}</span>
      </h2>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section className="py-24 px-8 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-12">
          <SectionHeader label="Code work" title="Code" accent="Projects" />
          <motion.div
            variants={SECTION_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {CODE_PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          <SectionHeader label="Design work" title="UI/UX" accent="Design" />
          <motion.div
            variants={SECTION_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {DESIGN_PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          <SectionHeader label="Templates" title="Template" accent="Projects" />
          <motion.div
            variants={SECTION_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {TEMPLATE_PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
