import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingCart, X, Smartphone, Globe, Zap } from 'lucide-react';
import { PRICING_PLANS, SOCIAL_LINKS, type PricingPlan } from '@/constants';

type Category = 'mobile' | 'web' | 'n8n';
type CartItem = PricingPlan & { quantity: number };

const TABS: { id: Category; label: string; icon: typeof Smartphone; accent: string }[] = [
  { id: 'mobile', label: 'Mobile App',      icon: Smartphone, accent: 'var(--color-accent)' },
  { id: 'web',    label: 'Web & Front-End', icon: Globe,      accent: 'var(--color-cyan)'   },
  { id: 'n8n',    label: 'n8n Automation',  icon: Zap,        accent: 'var(--color-n8n)'    },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Category>('mobile');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const visiblePlans = PRICING_PLANS.filter((p) => p.category === activeTab);
  const activeAccent = TABS.find((t) => t.id === activeTab)!.accent;

  const addToCart = (plan: PricingPlan) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === plan.id);
      if (existing) {
        return prev.map((item) => (item.id === plan.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { ...plan, quantity: 1 }];
    });
    setShowCart(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const sendOrder = () => {
    const orderDetails = cart
      .map((item) => `${item.title} (x${item.quantity}) - ${item.price}`)
      .join('%0A');
    const subject = encodeURIComponent('New Order from ollysmith.store');
    const body = `Hi Olly,%0A%0AI'd like to order:%0A%0A${orderDetails}%0A%0APlease send me the payment details.%0A%0AThanks!`;
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
    setOrderSent(true);
    setTimeout(() => setOrderSent(false), 4000);
  };

  const sendViaWhatsApp = () => {
    const orderDetails = cart
      .map((item) => `• ${item.title} (x${item.quantity}) - ${item.price}`)
      .join('\n');
    const message = encodeURIComponent(
      `Hi Olly! I'd like to order:\n\n${orderDetails}\n\nPlease send me the payment details. Thanks!`
    );
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 text-center"
        >
          <span className="section-kicker mx-auto">Pricing Plans</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[0.93] tracking-[-0.03em] text-[var(--color-text)]">
            Simple, transparent
            <span className="block gradient-text">pricing.</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-[1.8] text-[var(--color-muted-2)]">
            Pick the service and package that fits you. Add to cart and send directly via email or WhatsApp.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-1.5">
            {TABS.map(({ id, label, icon: Icon, accent }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={[
                  'relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-200',
                  activeTab === id ? 'text-white' : 'text-[var(--color-muted-2)] hover:text-[var(--color-text)]',
                ].join(' ')}
              >
                {activeTab === id && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: accent, opacity: 0.18 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                {activeTab === id && (
                  <motion.span
                    layoutId="tab-border"
                    className="absolute inset-0 rounded-xl border"
                    style={{ borderColor: accent }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <Icon size={14} className="relative" style={{ color: activeTab === id ? accent : undefined }} />
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plans grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {visiblePlans.map((plan) => (
              <div
                key={plan.id}
                className={[
                  'section-panel relative flex flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-8',
                  plan.popular ? '' : 'border border-[var(--color-line)]',
                ].join(' ')}
                style={plan.popular ? { border: `1px solid ${activeAccent}55`, boxShadow: `0 0 40px ${activeAccent}18` } : {}}
              >
                {plan.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: activeAccent }}
                  >
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-text)]">
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-[var(--color-muted-2)]">{plan.description}</p>

                <p className="mt-6 font-display text-4xl font-extrabold tracking-[-0.05em] text-[var(--color-text)]">
                  {plan.price}
                  <span className="ml-2 text-sm font-normal tracking-normal text-[var(--color-muted)]">/project</span>
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                      <Check size={15} className="mt-0.5 shrink-0" style={{ color: activeAccent }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.popular ? (
                  <button
                    onClick={() => addToCart(plan)}
                    className="mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(135deg, ${activeAccent}bb, ${activeAccent})` }}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(plan)}
                    className="mt-8 flex items-center justify-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface-hover)] px-6 py-3.5 text-sm font-semibold text-[var(--color-text)] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Floating Cart Button */}
        {totalItems > 0 && (
          <button
            onClick={() => setShowCart(!showCart)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_var(--color-accent-glow)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <ShoppingCart size={18} />
            Cart ({totalItems})
          </button>
        )}

        {/* Cart Drawer */}
        {showCart && cart.length > 0 && (
          <div className="fixed inset-0 z-50 flex items-end justify-end bg-[rgba(0,0,0,0.5)]" onClick={() => setShowCart(false)}>
            <div
              className="h-full w-full max-w-md overflow-y-auto border-l border-[var(--color-line)] bg-[var(--color-bg)] p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-[var(--color-text)]">Your Order</h3>
                <button onClick={() => setShowCart(false)} className="text-[var(--color-muted)] hover:text-[var(--color-text)]">
                  <X size={24} />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between rounded-2xl border border-[var(--color-line)] p-4">
                    <div>
                      <p className="font-medium text-[var(--color-text)]">{item.title}</p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {item.price} × {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[var(--color-muted)] transition-colors hover:text-red-400"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={sendOrder}
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_var(--color-accent-glow)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {orderSent ? '✓ Opening Email...' : 'Send Order via Email'}
                </button>
                <button
                  onClick={sendViaWhatsApp}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Send Order via WhatsApp
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-[var(--color-muted)]">
                After sending, I'll reply with payment details within 24 hours.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


