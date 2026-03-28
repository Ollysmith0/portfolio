import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { CODE_PROJECTS, DESIGN_PROJECTS, TEMPLATE_PROJECTS } from '@/constants';
import { useGsapReveal } from '@/hooks/useGsapReveal';

type Project = {
  title: string;
  image: string;
  url: string;
  tags?: readonly string[];
  description?: string;
};

type ProjectCardProps = Project & {
  index: number;
  featured?: boolean;
};

const PROJECT_GROUPS = [
  {
    label: 'Code work',
    title: 'Products built for real traffic and real teams.',
    description:
      'Production-facing interfaces where reliability, performance, and polish have to exist at the same time.',
    items: CODE_PROJECTS,
  },
  {
    label: 'Design work',
    title: 'Figma concepts with strong visual tension.',
    description:
      'Explorations focused on clarity, product storytelling, and interaction-ready UI structure.',
    items: DESIGN_PROJECTS,
  },
  {
    label: 'Templates',
    title: 'Reusable systems for fast experiments.',
    description:
      'Launch-ready website directions that can be remixed into a new brand or product quickly.',
    items: TEMPLATE_PROJECTS,
  },
] as const;

function ProjectCard({ title, image, url, tags, description, index, featured = false }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-work-reveal
      className={[
        'group relative overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[rgba(245,239,230,0.04)] transition-transform duration-300 hover:-translate-y-1',
        featured ? 'min-h-[28rem] md:col-span-2' : 'min-h-[22rem]',
      ].join(' ')}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,7,0.05)_0%,rgba(5,5,7,0.42)_50%,rgba(5,5,7,0.94)_100%)]" />
      </div>

      <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-full border border-[rgba(245,239,230,0.16)] bg-[rgba(5,5,7,0.34)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
            {String(index + 1).padStart(2, '0')}
          </div>
          <span className="flex items-center gap-2 rounded-full bg-[rgba(245,239,230,0.08)] px-3 py-1 text-xs text-[var(--color-text)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Open
            <ExternalLink size={14} />
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="space-y-3">
            <h3 className="font-display text-3xl leading-none tracking-[-0.05em] text-[var(--color-text)] md:text-4xl">
              {title}
            </h3>
            {description ? (
              <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)] md:text-base">{description}</p>
            ) : null}
          </div>

          {tags ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(245,239,230,0.16)] bg-[rgba(5,5,7,0.26)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
}

function ProjectSection({
  label,
  title,
  description,
  items,
}: {
  label: string;
  title: string;
  description: string;
  items: readonly Project[];
}) {
  return (
    <div className="grid gap-8 xl:grid-cols-[0.38fr_0.62fr] xl:items-start">
      <div data-work-reveal className="xl:sticky xl:top-28 xl:self-start">
        <span className="section-kicker">{label}</span>
        <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-[-0.05em] text-[var(--color-text)] md:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-[var(--color-muted)] md:text-base">
          {description}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {items.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} featured={index === 0} />
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGsapReveal(sectionRef, { selector: '[data-work-reveal]', y: 56, stagger: 0.1 });

  return (
    <section ref={sectionRef} className="px-5 pb-24 md:px-10 md:pb-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <div data-work-reveal className="flex flex-col gap-5">
          <span className="section-kicker">Selected Work</span>
          <h1 className="font-display text-5xl leading-[0.92] tracking-[-0.05em] text-[var(--color-text)] md:text-7xl">
            Interfaces that carry
            <span className="block text-[var(--color-accent)]">story and structure.</span>
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
            A mix of production products, design explorations, and reusable launch systems shaped around clarity, velocity, and visual recall.
          </p>
        </div>

        {PROJECT_GROUPS.map((group) => (
          <ProjectSection key={group.label} {...group} />
        ))}
      </div>
    </section>
  );
}
