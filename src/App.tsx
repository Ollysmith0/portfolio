import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Code, Briefcase, MessageCircle } from 'lucide-react';
import Skill from '@/components/Skill';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Footer from '@/components/Footer';
import Testimonial from '@/components/Testimonial';
import helloWorldImg from '@/assets/hello-world.jpg';
import codeIsFunImg from '@/assets/code-is-fun.jpg';
import testimonialImg from '@/assets/testimonial.jpg';
import drinkTeaAndCodeImg from '@/assets/drink-tea-and-code.jpg';

const sections = [
  {
    id: 'Hero',
    label: 'Hero',
    icon: <User size={16} />,
    component: <Hero />,
    bgImg: helloWorldImg,
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: <Code size={16} />,
    component: <Skill />,
    bgImg: codeIsFunImg,
  },
  {
    id: 'work',
    label: 'Projects',
    icon: <Briefcase size={16} />,
    component: <Work />,
    bgImg: drinkTeaAndCodeImg,
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    icon: <MessageCircle size={16} />,
    component: <Testimonial />,
    bgImg: testimonialImg,
  },
];

export default function Portfolio() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="bg-[#1e1e1e] text-white font-sans overflow-y-auto max-h-screen relative">
      {/* Timeline Nav as bottom floating bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#2b2b2b] px-6 py-3 rounded-full shadow-lg flex space-x-6 backdrop-blur">
        {sections.map((s, index) => (
          <motion.button
            key={s.id}
            onClick={() => scrollToSection(s.id)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex items-center gap-1 text-sm hover:text-green-400 cursor-pointer transition-colors duration-200 ${
              activeSection === s.id
                ? 'text-green-400 font-semibold'
                : 'text-white'
            }`}
          >
            {s.icon} {s.label}
          </motion.button>
        ))}
      </div>

      {/* Section wrapper with framer animation */}
      {sections.map(({ id, label, bgImg }, i) => (
        <motion.section
          key={id}
          ref={(el) => (sectionRefs.current[id] = el)}
          id={id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`p-8 md:p-20 h-screen relative flex items-center justify-center ${
            i % 2 === 0
              ? 'bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] animate-gradient-move'
              : 'bg-gradient-to-r from-[#0f0f1f] via-[#0a0a14] to-[#0f0f1f] animate-gradient-move'
          }`}
        >
          <div className="max-w-2xl mx-auto">{sections[i].component}</div>
        </motion.section>
      ))}

      <Footer />
    </main>
  );
}
