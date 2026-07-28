import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  duration: string;
  type: string;
  location: string;
  description: string;
  url: string;
  tech: string[];
  accent: string;
  current?: boolean;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'PropertyGuru Group',
    role: 'Frontend Developer',
    period: 'Oct 2023 – Present',
    duration: '2 yrs 10 mos',
    type: 'Full-time · Hybrid',
    location: 'Ho Chi Minh City',
    description:
      'Building and maintaining frontend systems for Southeast Asia\'s leading property portal. Working on responsiveness, performance, and feature delivery across a large-scale React codebase.',
    url: 'https://www.propertyguru.com.vn/',
    tech: ['React', 'TypeScript', 'Next.js', 'Performance'],
    accent: '#10b981',
    current: true,
  },
  {
    company: 'Tota',
    role: 'Frontend Developer',
    period: 'Jan 2023 – Jun 2023',
    duration: '6 mos',
    type: 'Freelance · Hybrid',
    location: 'Ho Chi Minh City',
    description:
      'Joined a 15-person team to build the Tota metaverse website — NFT minting, cryptocurrency transfers, and character model browsing features using the Web3 stack.',
    url: 'https://planettota.com/',
    tech: ['React', 'Next.js', 'React Query', 'WagmiJS', 'Web3', 'NestJS', 'AWS'],
    accent: '#818cf8',
  },
  {
    company: 'EPAM Anywhere',
    role: 'Software Engineer',
    period: 'Apr 2022 – Nov 2022',
    duration: '8 mos',
    type: 'Full-time · Remote',
    location: 'Ho Chi Minh City',
    description:
      'Refactored and maintained internal platform pages for EPAM Anywhere within a 50-person distributed engineering team focused on code quality and performance.',
    url: 'https://anywhere.epam.com/en',
    tech: ['React', 'TypeScript', 'Babel', 'Webpack', 'Styled Components'],
    accent: '#22d3ee',
  },
  {
    company: 'Money Forward, Inc.',
    role: 'Frontend Developer',
    period: 'Jan 2021 – Jan 2022',
    duration: '1 yr 1 mo',
    type: 'Full-time · On-site',
    location: 'Ho Chi Minh City',
    description:
      'Built fixed asset management SaaS for Japanese SMEs supporting both Japanese GAAP and IFRS double standards. Product reached top 2 volume in its domain. TDD, atomic design, and full AWS/Docker infrastructure with a team of 11.',
    url: 'https://biz.moneyforward.com/fixed-assets/',
    tech: ['React', 'TypeScript', 'Redux Saga', 'Jest', 'Docker', 'AWS', 'Ant Design', 'Circle CI'],
    accent: '#f97316',
  },
  {
    company: 'FPT Software',
    role: 'Frontend Developer',
    period: 'Nov 2019 – Feb 2021',
    duration: '1 yr 4 mos',
    type: 'Full-time · On-site',
    location: 'Ho Chi Minh City',
    description:
      'Two projects: PatientPop — a doctor-patient booking platform (React + Electron, team of 8) — and AEM development building Adobe Experience Manager website templates for enterprise clients.',
    url: 'https://www.patientpop.com/',
    tech: ['React', 'Redux', 'AEM', 'React Electron', 'C#', 'SCSS', 'Jenkins'],
    accent: '#c084fc',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="section-kicker">Career</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[0.93] tracking-[-0.03em] text-[var(--color-text)]">
              Work
              <span className="gradient-text"> Experience.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-[1.8] text-[var(--color-muted-2)] md:text-right">
            5+ years building at scale — from Japanese fintech to Southeast Asia's largest property portal.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical connector line */}
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-line-strong)] to-transparent opacity-25 md:block" />

          <div className="flex flex-col gap-5">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:pl-10"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-[1.6rem] hidden h-[15px] w-[15px] -translate-y-1/2 rounded-full border-2 bg-[var(--color-bg)] md:block"
                  style={{ borderColor: exp.accent, boxShadow: `0 0 10px ${exp.accent}55` }}
                />

                {/* Card */}
                <div className="section-panel group rounded-2xl p-5 transition-colors duration-300 hover:border-[rgba(255,255,255,0.12)] md:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    {/* Left: role + company */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-[var(--color-text)]">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span
                            className="rounded-full px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em]"
                            style={{
                              background: `${exp.accent}18`,
                              color: exp.accent,
                              border: `1px solid ${exp.accent}40`,
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-75"
                          style={{ color: exp.accent }}
                        >
                          {exp.company}
                          <ExternalLink size={11} />
                        </a>
                        <span className="text-xs text-[var(--color-muted)]">{exp.type}</span>
                        <span className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
                          <MapPin size={10} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Right: period */}
                    <div className="flex-shrink-0 sm:text-right">
                      <p className="font-mono text-xs text-[var(--color-muted-2)]">{exp.period}</p>
                      <p className="mt-0.5 font-mono text-[10px] text-[var(--color-muted)]">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-[1.8] text-[var(--color-muted-2)]">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-2)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
