import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

const DUPLICATED = [...TESTIMONIALS, ...TESTIMONIALS];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-[#FBBF24] fill-[#FBBF24]' : 'text-[#2A2A2A]'}
        />
      ))}
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="py-20 px-8 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-[#6EE7B7] uppercase tracking-widest">
            <span className="w-8 h-px bg-[#6EE7B7]" />
            Social proof
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What clients <span className="text-[#6EE7B7]">say</span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-5"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            {DUPLICATED.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 bg-[#161616] border border-[#2A2A2A] rounded-2xl p-5 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#2A2A2A]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#F9FAFB]">{t.name}</p>
                    <p className="text-xs text-[#6B7280]">{t.role}</p>
                  </div>
                </div>
                <StarRating count={t.rating} />
                <p className="text-sm text-[#D1D5DB] leading-relaxed line-clamp-3">"{t.text}"</p>
                <p className="text-xs text-[#6B7280] font-mono mt-auto">{t.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
