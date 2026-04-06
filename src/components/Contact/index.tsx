import { useState, type FormEvent } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New Inquiry from ${form.name} - ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const sendViaWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Olly! I'm ${form.name}.\n\nService: ${form.service}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <span className="section-kicker">Get in Touch</span>
            <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--color-text)] md:text-5xl">
              Ready to launch
              <span className="block text-[var(--color-accent)]">your store?</span>
            </h2>
            <p className="max-w-md text-base leading-8 text-[var(--color-muted)]">
              Fill out the form or reach out directly. We typically respond within 24 hours with a detailed quote.
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-line)] p-4 transition-colors hover:border-[var(--color-accent)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(255,122,47,0.15)]">
                  <Mail size={18} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">Email Us</p>
                  <p className="text-xs text-[var(--color-muted)]">{SOCIAL_LINKS.email}</p>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-line)] p-4 transition-colors hover:border-[#25D366]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(37,211,102,0.15)]">
                  <MessageCircle size={18} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">WhatsApp</p>
                  <p className="text-xs text-[var(--color-muted)]">Quick response, anytime</p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="section-panel flex flex-col gap-5 rounded-3xl border border-[var(--color-line)] p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-[var(--color-line)] bg-[rgba(245,239,230,0.04)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-[var(--color-line)] bg-[rgba(245,239,230,0.04)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                Service Needed
              </label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-xl border border-[var(--color-line)] bg-[rgba(245,239,230,0.04)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
              >
                <option value="">Select a service...</option>
                <option value="WordPress Store">WordPress Store</option>
                <option value="Shopify Store">Shopify Store</option>
                <option value="Portfolio Website">Portfolio Website</option>
                <option value="Custom Solution">Custom Solution</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-[var(--color-line)] bg-[rgba(245,239,230,0.04)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,122,47,0.35)]"
              >
                <Send size={16} />
                {sent ? 'Opening Email...' : 'Send via Email'}
              </button>
              <button
                type="button"
                onClick={sendViaWhatsApp}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
