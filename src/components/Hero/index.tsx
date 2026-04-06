import avatar from '@/assets/avatar.jpg';
import { SOCIAL_LINKS } from '@/constants';

const TRUST_BADGES = ['WordPress', 'Shopify', 'React', 'Next.js', 'Tailwind'] as const;

const METRICS = [
  { value: '50+', label: 'stores built' },
  { value: '98%', label: 'client satisfaction' },
  { value: '5 minutes', label: 'response time' },
] as const;

export default function Hero() {
  return (
    <section id="hero" className="relative px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
        <div className="flex flex-col gap-7">
          <span className="section-kicker">Premium Web & E-Commerce Solutions</span>

          <h1 className="font-display text-[clamp(2.8rem,8vw,6.4rem)] leading-[0.92] tracking-[-0.04em] text-[var(--color-text)]">
            Beautiful stores
            <br />
            that sell
            <span className="block bg-[linear-gradient(120deg,var(--color-accent)_0%,#ffd7a8_55%,var(--color-accent-alt)_100%)] bg-clip-text text-transparent">
              themselves.
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)]">
            WordPress, Shopify, or fully custom — I build conversion-optimized stores and portfolios with payment integration that sends orders straight to your inbox.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,122,47,0.35)]"
            >
              View Pricing
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-[var(--color-line)] bg-[rgba(245,239,230,0.04)] px-7 py-3.5 text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              See Portfolio
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {METRICS.map(({ value, label }) => (
              <div key={label} className="section-panel rounded-2xl border border-[var(--color-line)] px-5 py-4">
                <p className="font-display text-3xl tracking-[-0.06em] text-[var(--color-text)]">{value}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-[var(--color-muted)]">Built with:</span>
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[var(--color-line)] bg-[rgba(245,239,230,0.04)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center xl:justify-end">
          <div className="relative w-full max-w-[30rem]">
            <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(255,122,47,0.12)_0%,transparent_70%)] blur-3xl" />

            <div className="section-panel relative overflow-hidden rounded-3xl border border-[var(--color-line)] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={avatar} alt="Olly Smith" className="h-full w-full object-cover object-[center_18%]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(5,5,7,0.7)_100%)]" />
              </div>

              <div className="section-panel absolute inset-x-5 bottom-5 rounded-2xl border border-[rgba(245,239,230,0.12)] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent-alt)]">Services</p>
                <p className="mt-1.5 text-base font-medium text-[var(--color-text)]">WordPress · Shopify · Portfolio · Landing Page · Custom Stores</p>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="mt-3 inline-block rounded-full bg-[var(--color-accent)] px-5 py-2 text-xs font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Start Your Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
