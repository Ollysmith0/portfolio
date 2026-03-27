import { motion } from 'framer-motion';
import avatar from '@/assets/avatar.jpg';
import { SOCIAL_LINKS, TYPING_TEXT } from '@/constants';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const CONTAINER_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const BADGE_LIST = ['React', 'TypeScript', 'Next.js', 'Figma', 'Node.js'] as const;

export default function Hero() {
  const typedText = useTypingEffect(TYPING_TEXT, 28);

  return (
    <section className='min-h-screen flex items-center pt-16 px-8 md:px-12'>
      <div className='max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-24'>
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial='hidden'
          animate='visible'
          className='flex flex-col gap-6'
        >
          <motion.span
            variants={ITEM_VARIANTS}
            className='inline-flex items-center gap-2 font-mono text-xs text-[#6EE7B7] uppercase tracking-widest'
          >
            <span className='w-8 h-px bg-[#6EE7B7]' />
            Available for hire
          </motion.span>

          <motion.h1
            variants={ITEM_VARIANTS}
            className='text-5xl md:text-6xl font-bold leading-tight tracking-tight'
          >
            Hello, I&apos;m{' '}
            <span className='text-[#6EE7B7]'>Olly</span>
            <br />
            <span className='text-[#F9FAFB]'>Front-End</span>
            <br />
            <span className='text-[#6B7280]'>Engineer.</span>
          </motion.h1>

          <motion.p
            variants={ITEM_VARIANTS}
            className='text-[#D1D5DB] text-base leading-relaxed max-w-md font-mono min-h-[80px]'
          >
            {typedText}
            <span className='animate-[cursorBlink_1s_step-end_infinite] ml-0.5 text-[#6EE7B7]'>
              |
            </span>
          </motion.p>

          <motion.div variants={ITEM_VARIANTS} className='flex flex-wrap gap-2'>
            {BADGE_LIST.map((badge) => (
              <span
                key={badge}
                className='px-3 py-1 text-xs font-mono rounded-full border border-[#2A2A2A] text-[#D1D5DB] bg-[#161616]'
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={ITEM_VARIANTS} className='flex items-center gap-5 pt-2'>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className='px-6 py-3 rounded-full bg-[#6EE7B7] text-[#0F0F0F] text-sm font-semibold hover:bg-[#10B981] transition-colors duration-200'
            >
              Get in touch
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 rounded-full border border-[#2A2A2A] text-[#D1D5DB] text-sm font-medium hover:border-[#6EE7B7] hover:text-[#6EE7B7] transition-all duration-200'
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className='flex justify-center items-center py-10 px-16'
        >
          <div className='relative w-80 h-80 md:w-[420px] md:h-[420px]'>
            <div className='absolute inset-0 rounded-full border border-[#6EE7B7]/20 scale-110' />
            <div className='absolute inset-0 rounded-full border border-[#6EE7B7]/10 scale-125' />
            <div className='absolute inset-0 rounded-full bg-[#6EE7B7]/5 blur-3xl scale-150' />

            <div className='relative w-full h-full rounded-full overflow-hidden border-2 border-[#2A2A2A]'>
              <img
                src={avatar}
                alt='Olly Smith'
                className='w-full h-full object-cover object-[center_15%]'
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className='absolute bottom-6 -right-16 bg-[#161616] border border-[#2A2A2A] rounded-xl px-4 py-2.5 shadow-xl whitespace-nowrap'
            >
              <p className='text-xs text-[#6B7280] font-mono'>Experience</p>
              <p className='text-sm font-semibold text-[#6EE7B7]'>5+ Years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className='absolute top-6 -left-16 bg-[#161616] border border-[#2A2A2A] rounded-xl px-4 py-2.5 shadow-xl whitespace-nowrap'
            >
              <p className='text-xs text-[#6B7280] font-mono'>Projects</p>
              <p className='text-sm font-semibold text-[#6EE7B7]'>10+ Done</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
