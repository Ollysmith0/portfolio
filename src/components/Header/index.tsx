import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants';

const HEADER_VARIANTS = {
  hidden: { opacity: 0, y: -18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      variants={HEADER_VARIANTS}
      initial="hidden"
      animate="visible"
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-5 md:px-10">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-[var(--color-line)] bg-[rgba(5,5,7,0.45)] px-3 py-2 backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-3 pr-2">
            <span className="font-display text-xl font-semibold tracking-[0.08em] text-[var(--color-text)]">
              Olly<span className="text-[var(--color-accent)]">/</span>Smith
            </span>
          </Link>
          <span className="hidden h-5 w-px bg-[var(--color-line)] md:block" />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--color-muted)] md:block">
            Motion-led Frontend
          </span>
        </div>

        <div
          className={[
            'pointer-events-auto hidden items-center gap-2 rounded-full border px-3 py-3 md:flex',
            scrolled
              ? 'border-[rgba(245,239,230,0.18)] bg-[rgba(8,8,10,0.68)] shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl'
              : 'border-[var(--color-line)] bg-[rgba(8,8,10,0.44)] backdrop-blur-lg',
          ].join(' ')}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = location.pathname === href;

            return (
              <Link
                key={href}
                to={href}
                className={[
                  'rounded-full px-4 py-2 text-sm transition-colors duration-200',
                  isActive
                    ? 'bg-[rgba(255,122,47,0.14)] text-[var(--color-text)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)]',
                ].join(' ')}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={[
                      'h-1.5 w-1.5 rounded-full transition-colors',
                      isActive ? 'bg-[var(--color-accent)]' : 'bg-[rgba(245,239,230,0.22)]',
                    ].join(' ')}
                  />
                  {label}
                </span>
              </Link>
            );
          })}

          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="rounded-full bg-[var(--color-text)] px-5 py-2 text-sm font-medium text-[#09090c] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Let&apos;s build
          </a>
        </div>

        <button
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line)] bg-[rgba(8,8,10,0.58)] text-[var(--color-text)] backdrop-blur-lg md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={[
                'block h-px w-5 bg-current transition-transform duration-300',
                menuOpen ? 'translate-y-[7px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px w-5 bg-current transition-opacity duration-300',
                menuOpen ? 'opacity-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px w-5 bg-current transition-transform duration-300',
                menuOpen ? '-translate-y-[7px] -rotate-45' : '',
              ].join(' ')}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mx-5 mt-3 rounded-[2rem] border border-[var(--color-line)] bg-[rgba(10,10,12,0.9)] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = location.pathname === href;

                return (
                  <Link
                    key={href}
                    to={href}
                    className={[
                      'rounded-2xl border px-4 py-3 text-sm transition-colors',
                      isActive
                        ? 'border-[rgba(255,122,47,0.28)] bg-[rgba(255,122,47,0.1)] text-[var(--color-text)]'
                        : 'border-[var(--color-line)] text-[var(--color-muted)]',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                );
              })}

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="mt-2 rounded-full bg-[var(--color-text)] px-5 py-3 text-center text-sm font-medium text-[#09090c]"
              >
                Let&apos;s build
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
