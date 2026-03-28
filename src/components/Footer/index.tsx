import githubIcon from '@/assets/github-icon.svg';
import linkedinIcon from '@/assets/linkedin-icon.webp';
import facebookIcon from '@/assets/facebook-icon.png';
import { SOCIAL_LINKS } from '@/constants';

const SOCIAL_ITEMS = [
  { label: 'GitHub', url: SOCIAL_LINKS.github, icon: githubIcon },
  { label: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: linkedinIcon },
  { label: 'Facebook', url: SOCIAL_LINKS.facebook, icon: facebookIcon },
] as const;

export default function Footer() {
  return (
    <footer className="relative z-10 px-5 pb-10 md:px-10 md:pb-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="section-panel rounded-[2.6rem] border border-[var(--color-line)] p-6 md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="section-kicker">Contact</span>
              <h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-[-0.05em] text-[var(--color-text)] md:text-6xl">
                Need a portfolio, launch site, or product surface that hits harder?
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
                I work across design-sensitive front-end builds, interactive marketing pages, and component systems that need both speed and polish.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-semibold text-[#09090c] transition-transform duration-200 hover:-translate-y-0.5"
              >
                {SOCIAL_LINKS.email}
              </a>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Open for selected freelance and product work
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-[2rem] border border-[var(--color-line)] bg-[rgba(245,239,230,0.03)] px-5 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-[-0.04em] text-[var(--color-text)]">Olly/Smith</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              &copy; {new Date().getFullYear()} Olly Smith. Crafted with motion and code.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {SOCIAL_ITEMS.map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex items-center gap-3 rounded-full border border-[rgba(245,239,230,0.12)] bg-[rgba(245,239,230,0.04)] px-4 py-2.5 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <img src={icon} alt={label} className="h-4 w-4 object-contain opacity-70 transition-opacity group-hover:opacity-100" />
                <span className="text-sm text-[var(--color-muted)] group-hover:text-[var(--color-text)]">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
