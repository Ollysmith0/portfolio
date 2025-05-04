import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import PropertyGuruVN from '@/assets/propertyguruvn.png';

const testimonials = [
  {
    image: PropertyGuruVN,
    comment: 'This is an amazing product! Highly recommend it.',
    stars: 5,
    date: '2023-10-01',
  },
  {
    image: PropertyGuruVN,
    comment: 'Great experience overall, but there is room for improvement.',
    stars: 4,
    date: '2023-09-15',
  },
  {
    image: PropertyGuruVN,
    comment: 'Absolutely loved it! Will use it again.',
    stars: 5,
    date: '2023-08-20',
  },
  {
    image: PropertyGuruVN,
    comment: 'Good product, worth the price.',
    stars: 4,
    date: '2023-07-10',
  },
  {
    image: PropertyGuruVN,
    comment: 'Fantastic! Exceeded my expectations.',
    stars: 5,
    date: '2023-06-05',
  },
  {
    image: PropertyGuruVN,
    comment: 'It was okay, but I expected more.',
    stars: 3,
    date: '2023-05-25',
  },
];

const Testimonial = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="p-8 overflow-hidden">
      <h3 className="text-2xl font-extrabold text-blue-200 text-center mb-6">
        Testimonials
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
              className="w-1/5 bg-gray-800 text-white p-4 rounded-lg shadow-md flex-shrink-0"
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
