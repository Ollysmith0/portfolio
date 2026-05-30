import { useState, type FormEvent } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

const inputClass =
  'w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]';

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
        <div className="grid gap-10 xl:grid-cols-[1fr_1.3fr]">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="section-kicker">Get in Touch</span>
              <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[0.93] tracking-[-0.03em] text-[var(--color-text)]">
                Let's build
                <span className="gradient-text"> something great.</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-[1.8] text-[var(--color-muted-2)]">
                Fill out the form or reach out directly. I typically respond within a few hours with a detailed proposal.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-line)] p-4 transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(129,140,248,0.12)]">
                  <Mail size={17} style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">Email</p>
                  <p className="text-xs text-[var(--color-muted)]">{SOCIAL_LINKS.email}</p>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-line)] p-4 transition-all hover:border-[#25D366] hover:bg-[var(--color-surface)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(37,211,102,0.12)]">
                  <MessageCircle size={17} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">WhatsApp</p>
                  <p className="text-xs text-[var(--color-muted)]">Quick replies, any time</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="section-panel flex flex-col gap-5 rounded-3xl p-6 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Service Needed
              </label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputClass}
              >
                <option value="">Select a service…</option>
                <option value="React Native App">React Native App</option>
                <option value="Web Development">Web Development</option>
                <option value="n8n Automation">n8n Automation</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project…"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_var(--color-accent-glow)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_var(--color-accent-glow)]"
              >
                <Send size={15} />
                {sent ? 'Opening Email…' : 'Send via Email'}
              </button>
              <button
                type="button"
                onClick={sendViaWhatsApp}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle size={15} />
                WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

