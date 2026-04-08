import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'How long does it take to build a Shopify or WordPress store?',
    a: 'Delivery time depends on the plan: Starter (1-page site) is delivered in 24 hours, Business Store in 3 days, and Premium with custom features in 7 days. All timelines are guaranteed.',
  },
  {
    q: 'What is included in the price?',
    a: 'Every plan includes design, development, mobile responsiveness, and basic SEO setup. Business and Premium plans include payment gateway integration, product setup, and multiple rounds of revisions. No hidden fees.',
  },
  {
    q: 'Do I need to provide anything to get started?',
    a: 'Just your logo (or we can design one), brand colors, product list, and any content you want on the site. We handle all the technical setup — hosting, domain connection, payment integration.',
  },
  {
    q: 'Which platform should I choose — Shopify or WordPress?',
    a: 'Shopify is best for pure e-commerce: it\'s fast, reliable, and built for selling. WordPress (WooCommerce) is better if you need a blog, more content flexibility, or lower transaction fees. We\'ll recommend the best fit after a quick chat.',
  },
  {
    q: 'Can you work with my existing domain?',
    a: 'Yes. We connect your store to any existing domain (GoDaddy, Namecheap, Cloudflare, etc.). If you don\'t have a domain yet, we can help you choose and register one.',
  },
  {
    q: 'What payment gateways do you support?',
    a: 'We set up Stripe, PayPal, Shopify Payments, and most regional gateways. If you need a specific payment provider for your country, just let us know and we\'ll check compatibility.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Premium plan includes 30 days of priority support post-launch. For all plans, we\'re available on WhatsApp for urgent issues. Long-term maintenance packages are available on request.',
  },
  {
    q: 'Can you redesign my existing store?',
    a: 'Yes. We can redesign and migrate your existing Shopify, WordPress, or any other platform. Send us a link to your current site and we\'ll give you a custom quote within 24 hours.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-line)]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-[var(--color-text)]">{q}</span>
        <span className="mt-0.5 flex-shrink-0 text-[var(--color-accent)]">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      {open && (
        <p className="pb-5 text-sm leading-7 text-[var(--color-muted)]">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  return (
    <section id="faq" className="px-5 py-20 md:px-10 md:py-28">
      {/* JSON-LD FAQ Schema for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: a,
              },
            })),
          }),
        }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4">
          <span className="section-kicker">FAQ</span>
          <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--color-text)] md:text-6xl">
            Frequently asked
            <span className="block text-[var(--color-accent)]">questions.</span>
          </h2>
          <p className="max-w-xl text-base leading-8 text-[var(--color-muted)]">
            Everything you need to know before starting your project.
          </p>
        </div>

        <div className="mt-12 grid gap-0 md:grid-cols-2 md:gap-x-16">
          <div>
            {left.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <div>
            {right.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
