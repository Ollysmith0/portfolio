import { ShoppingCart, Palette, Code } from 'lucide-react';
import { SERVICES, type Service } from '@/constants';

const ICONS = {
  wordpress: ShoppingCart,
  shopify: ShoppingCart,
  portfolio: Palette,
  custom: Code,
} as const;

function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];

  return (
    <div className="section-panel group rounded-3xl border border-[var(--color-line)] p-6 transition-all duration-300 hover:border-[rgba(255,122,47,0.3)] md:p-8">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{ backgroundColor: `${service.accent}20` }}
      >
        <Icon size={22} style={{ color: service.accent }} />
      </div>

      <h3 className="mt-5 font-display text-2xl tracking-[-0.03em] text-[var(--color-text)]">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>

      <ul className="mt-5 grid gap-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#pricing"
        className="mt-6 inline-block rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        Get Started →
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4">
          <span className="section-kicker">What We Build</span>
          <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--color-text)] md:text-6xl">
            Everything you need
            <span className="block text-[var(--color-accent)]">to sell online.</span>
          </h2>
          <p className="max-w-xl text-base leading-8 text-[var(--color-muted)]">
            From WordPress & Shopify stores to custom portfolios — every project includes payment integration, mobile optimization, and conversion-focused design.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
