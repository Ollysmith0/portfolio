import { useState } from 'react';
import { Check, ShoppingCart, X } from 'lucide-react';
import { PRICING_PLANS, SOCIAL_LINKS, type PricingPlan } from '@/constants';

type CartItem = PricingPlan & { quantity: number };

export default function Pricing() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

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
        <div className="flex flex-col gap-4 text-center">
          <span className="section-kicker mx-auto">Pricing Plans</span>
          <h2 className="font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--color-text)] md:text-6xl">
            Simple, transparent
            <span className="block text-[var(--color-accent)]">pricing.</span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-8 text-[var(--color-muted)]">
            Pick the package that fits you. Add to cart and send the order directly via email or WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={[
                'section-panel relative flex flex-col rounded-3xl border p-6 transition-all duration-300 md:p-8',
                plan.popular
                  ? 'border-[var(--color-accent)] shadow-[0_0_40px_rgba(255,122,47,0.15)]'
                  : 'border-[var(--color-line)]',
              ].join(' ')}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-accent)] px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-2xl tracking-[-0.03em] text-[var(--color-text)]">{plan.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{plan.description}</p>

              <p className="mt-6 font-display text-5xl tracking-[-0.06em] text-[var(--color-text)]">
                {plan.price}
                <span className="ml-2 text-base font-normal tracking-normal text-[var(--color-muted)]">/project</span>
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                    <Check size={16} className="text-[var(--color-accent)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => addToCart(plan)}
                className={[
                  'mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5',
                  plan.popular
                    ? 'bg-[var(--color-accent)] text-white hover:shadow-[0_8px_30px_rgba(255,122,47,0.35)]'
                    : 'bg-[var(--color-text)] text-[#09090c]',
                ].join(' ')}
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Floating Cart Button */}
        {totalItems > 0 && (
          <button
            onClick={() => setShowCart(!showCart)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(255,122,47,0.4)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <ShoppingCart size={18} />
            Cart ({totalItems})
          </button>
        )}

        {/* Cart Drawer */}
        {showCart && cart.length > 0 && (
          <div className="fixed inset-0 z-50 flex items-end justify-end bg-[rgba(0,0,0,0.5)]" onClick={() => setShowCart(false)}>
            <div
              className="h-full w-full max-w-md border-l border-[var(--color-line)] bg-[var(--color-bg)] p-6"
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
                  className="flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
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
                After sending, we'll reply with payment details within 24 hours.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
