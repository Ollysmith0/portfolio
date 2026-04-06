import { useEffect, useState } from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-[rgba(5,5,7,0.85)] shadow-lg backdrop-blur-xl' : '',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold tracking-[0.08em] text-[var(--color-text)]">
            Olly<span className="text-[var(--color-accent)]">/</span>Smith
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--color-muted)] md:block">
            .store
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-sm text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
            >
              {label}
            </a>
          ))}
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-text)] md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={['block h-px w-5 bg-current transition-transform duration-300', menuOpen ? 'translate-y-[7px] rotate-45' : ''].join(' ')} />
            <span className={['block h-px w-5 bg-current transition-opacity duration-300', menuOpen ? 'opacity-0' : ''].join(' ')} />
            <span className={['block h-px w-5 bg-current transition-transform duration-300', menuOpen ? '-translate-y-[7px] -rotate-45' : ''].join(' ')} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="mx-5 mb-3 rounded-2xl border border-[var(--color-line)] bg-[rgba(10,10,12,0.95)] p-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {label}
              </a>
            ))}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-full bg-[#25D366] px-5 py-3 text-center text-sm font-medium text-white"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
