import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[rgba(4,5,13,0.82)] backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : '',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-accent-dark)] to-[var(--color-accent)]">
            <span className="font-display text-sm font-bold text-white">O</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-[var(--color-text)]">
            Olly<span className="text-[var(--color-accent)]">.</span>dev
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-4 py-2 text-sm text-[var(--color-muted-2)] transition-colors duration-200 hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_20px_var(--color-accent-glow)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--color-accent-glow)] md:block"
          >
            Get in Touch
          </a>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-line)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] md:hidden"
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
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mb-3 rounded-2xl border border-[var(--color-line)] bg-[rgba(7,10,20,0.96)] p-4 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[var(--color-muted-2)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] py-3 text-center text-sm font-semibold text-white"
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

