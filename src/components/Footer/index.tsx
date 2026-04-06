import githubIcon from '@/assets/github-icon.svg';
import linkedinIcon from '@/assets/linkedin-icon.webp';
import facebookIcon from '@/assets/facebook-icon.png';
import { SOCIAL_LINKS, NAV_LINKS } from '@/constants';

const SOCIAL_ITEMS = [
  { label: 'GitHub', url: SOCIAL_LINKS.github, icon: githubIcon },
  { label: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: linkedinIcon },
  { label: 'Facebook', url: SOCIAL_LINKS.facebook, icon: facebookIcon },
] as const;

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-line)] px-5 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-[-0.04em] text-[var(--color-text)]">
              Olly<span className="text-[var(--color-accent)]">/</span>Smith
              <span className="ml-1 font-mono text-xs text-[var(--color-muted)]">.store</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-[var(--color-muted)]">
              Premium e-commerce stores, portfolios, and custom web solutions. Built to convert.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">Quick Links</p>
            <nav className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <a key={href} href={href} className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">Connect</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-sm text-[var(--color-accent)] transition-colors hover:text-[var(--color-text)]"
              >
                {SOCIAL_LINKS.email}
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#25D366] transition-colors hover:text-[var(--color-text)]"
              >
                WhatsApp Us
              </a>
              <div className="mt-2 flex gap-3">
                {SOCIAL_ITEMS.map(({ label, url, icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] transition-colors hover:border-[var(--color-accent)]"
                  >
                    <img src={icon} alt={label} className="h-4 w-4 object-contain opacity-70" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-line)] pt-6 text-center">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {new Date().getFullYear()} Olly Smith. All rights reserved. Building beautiful stores that sell.
          </p>
        </div>
      </div>
    </footer>
  );
}
