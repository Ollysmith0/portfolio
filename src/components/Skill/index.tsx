import { motion } from 'framer-motion';
import profilePic from '@/assets/profile.jpeg';

const SKILLS = [
  { category: 'Mobile', items: 'React Native · Expo · iOS · Android' },
  { category: 'Front-End', items: 'React · TypeScript · Framer Motion · Vite' },
  { category: 'State & API', items: 'Redux · Zustand · REST · GraphQL · Firebase' },
  { category: 'Tooling',   items: 'Git · Figma · Xcode · Android Studio · Fastlane' },
  { category: 'Focus',     items: 'Animation · Performance · App Store Delivery' },
] as const;

const STATS = [
  { number: '40+', label: 'Apps delivered' },
  { number: '3+',  label: 'Years experience'  },
  { number: '100%', label: 'Client satisfaction' },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Skill() {
  return (
    <section id="about" className="border-t" style={{ borderColor: 'rgba(238,238,238,0.08)' }}>
      <div className="grid md:grid-cols-2">

        {/* ── Left: portrait ── */}
        <motion.div
          className="relative hidden md:block overflow-hidden"
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ minHeight: '540px' }}
        >
          <img
            src={profilePic}
            alt="Olly Smith"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          {/* Right divider */}
          <div
            className="absolute top-0 right-0 bottom-0 w-px"
            style={{ background: 'rgba(238,238,238,0.08)' }}
          />
        </motion.div>

        {/* ── Right: content ── */}
        <div className="flex flex-col justify-between px-8 py-16 md:px-12 md:py-20">
          <div>
            <span className="section-kicker">About</span>

            <h2
              className="mt-6 font-display leading-[0.92] tracking-[-0.03em] text-[#eeeeee]"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
            >
              Building<br />
              for mobile<br />
              <span style={{ color: 'rgba(238,238,238,0.28)' }}>since 2022.</span>
            </h2>

            <p
              className="mt-8 max-w-sm text-sm leading-[2] font-light"
              style={{ color: 'rgba(238,238,238,0.45)' }}
            >
              I'm a React Native developer based in Ho Chi Minh City, Vietnam.
              I work under the brand <em className="not-italic text-[rgba(238,238,238,0.7)]">Olly Smith</em> and
              specialise in cross-platform mobile apps — from MVP to App Store — with a
              strong eye for animation, performance, and clean architecture.
            </p>
          </div>

          {/* Stats row */}
          <div
            className="mt-12 grid grid-cols-3 gap-0 border-t pt-8"
            style={{ borderColor: 'rgba(238,238,238,0.08)' }}
          >
            {STATS.map(({ number, label }) => (
              <div key={label} className="flex flex-col gap-2 pr-6">
                <span
                  className="font-display text-4xl font-bold tracking-[-0.04em] text-[#eeeeee]"
                >
                  {number}
                </span>
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.22em] leading-[1.6]"
                  style={{ color: 'rgba(238,238,238,0.35)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Skills list */}
          <div
            className="mt-10 flex flex-col gap-0 border-t"
            style={{ borderColor: 'rgba(238,238,238,0.08)' }}
          >
            {SKILLS.map(({ category, items }) => (
              <div
                key={category}
                className="flex items-start gap-6 border-b py-4"
                style={{ borderColor: 'rgba(238,238,238,0.06)' }}
              >
                <span
                  className="w-24 shrink-0 font-mono text-[9px] uppercase tracking-[0.22em] pt-0.5"
                  style={{ color: 'rgba(238,238,238,0.3)' }}
                >
                  {category}
                </span>
                <span
                  className="text-[13px] leading-[1.8] font-light"
                  style={{ color: 'rgba(238,238,238,0.6)' }}
                >
                  {items}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
