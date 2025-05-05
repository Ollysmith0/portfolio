import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import PropertyGuruVN from '@/assets/propertyguruvn.png';
import PlanetTota from '@/assets/planettota.png';
import MoneyForwardVN from '@/assets/cloudfixedasset.png';

const testimonials = [
  {
    image: PropertyGuruVN,
    comment: 'This is an amazing product! Highly recommend it.',
    stars: 5,
    date: '2025-02-01',
  },
  {
    image: PropertyGuruVN,
    comment: 'Great experience overall, but there is room for improvement.',
    stars: 4,
    date: '2025-03-15',
  },
  {
    image: PlanetTota,
    comment: 'Absolutely satisfied! Will use it again.',
    stars: 5,
    date: '2023-01-20',
  },
  {
    image: PlanetTota,
    comment: 'Good teamwork, will tend to work with him next time.',
    stars: 4,
    date: '2023-09-10',
  },
  {
    image: MoneyForwardVN,
    comment: 'Fantastic! Exceeded my expectations.',
    stars: 5,
    date: '2021-09-05',
  },
  {
    image: MoneyForwardVN,
    comment: 'It was okay, but I expected more.',
    stars: 3,
    date: '2021-02-25',
  },
];

const Testimonial = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="p-8 overflow-hidden">
      <h3 className="text-2xl font-extrabold text-blue-200 mb-6">
        Feedback from My Clients and Team
      </h3>
      <div className="relative w-full">
        <motion.div
          className="flex gap-4"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-1/5 bg-gray-800 text-white p-4 rounded-lg shadow-md flex-shrink-0 flex flex-col"
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt="Reviewer"
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <p className="text-sm text-gray-300 text-center mb-2">
                  {testimonial.comment}
                </p>
              </div>
              <div className="mt-auto flex flex-col items-center">
                <div className="flex mb-2">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-400">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
