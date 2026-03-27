import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";

const FADE_DOWN = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      variants={FADE_DOWN}
      initial="hidden"
      animate="visible"
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-mono text-sm font-medium tracking-widest uppercase">
          <span className="text-[#6EE7B7]">Olly</span>
          <span className="text-[#F9FAFB]">smith</span>
          <span className="text-[#6EE7B7] ml-0.5">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = location.pathname === href;
            return (
              <Link
                key={href}
                to={href}
                className={[
                  "text-sm font-medium transition-colors duration-200 relative group",
                  isActive ? "text-[#6EE7B7]" : "text-[#D1D5DB] hover:text-white",
                ].join(" ")}
              >
                {label}
                <span
                  className={[
                    "absolute -bottom-0.5 left-0 h-px bg-[#6EE7B7] transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full",
                  ].join(" ")}
                />
              </Link>
            );
          })}
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-[#6EE7B7] text-[#6EE7B7] hover:bg-[#6EE7B7] hover:text-[#0F0F0F] transition-all duration-200"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={[
              "block w-5 h-px bg-[#F9FAFB] transition-all duration-300 origin-center",
              menuOpen ? "rotate-45 translate-y-[7px]" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 h-px bg-[#F9FAFB] transition-all duration-300",
              menuOpen ? "opacity-0" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 h-px bg-[#F9FAFB] transition-all duration-300 origin-center",
              menuOpen ? "-rotate-45 -translate-y-[7px]" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#161616] border-t border-[#2A2A2A] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={[
                    "text-sm font-medium transition-colors",
                    location.pathname === href
                      ? "text-[#6EE7B7]"
                      : "text-[#D1D5DB]",
                  ].join(" ")}
                >
                  {label}
                </Link>
              ))}
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="self-start text-sm font-medium px-4 py-1.5 rounded-full border border-[#6EE7B7] text-[#6EE7B7]"
              >
                Hire me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
