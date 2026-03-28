import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import avatar from '@/assets/avatar.jpg';
import { SOCIAL_LINKS, TYPING_TEXT } from '@/constants';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const BADGE_LIST = ['React', 'TypeScript', 'GSAP', 'Design Systems', 'Launch Sites'] as const;

const METRICS = [
  { value: '5+', label: 'years building interfaces' },
  { value: '10+', label: 'launches delivered end-to-end' },
  { value: 'UI x Code', label: 'bridging design and engineering' },
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const typedText = useTypingEffect(TYPING_TEXT, 28);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline
        .fromTo(
          '[data-hero-reveal]',
          { autoAlpha: 0, y: 42 },
          { autoAlpha: 1, y: 0, duration: 1.05, stagger: 0.11 },
        )
        .fromTo(
          '[data-hero-visual]',
          { autoAlpha: 0, scale: 0.92, rotate: -4 },
          { autoAlpha: 1, scale: 1, rotate: 0, duration: 1.1 },
          0.16,
        );

      gsap.to('[data-hero-orbit]', {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      });

      gsap.to('[data-hero-chip]', {
        yPercent: -14,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.22,
        ease: 'sine.inOut',
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className='relative px-5 pb-18 pt-28 md:px-10 md:pb-24 md:pt-36'>
      <div className='mx-auto grid max-w-7xl gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-center'>
        <div className='flex flex-col gap-8'>
          <span data-hero-reveal className='section-kicker'>Motion-led Portfolio</span>

          <div data-hero-reveal className='flex max-w-4xl flex-col gap-5'>
            <p className='font-mono text-[11px] uppercase tracking-[0.34em] text-[var(--color-muted)]'>
              Olly Smith / Front-End Engineer / UI Systems
            </p>
            <h1 className='font-display text-[clamp(3.6rem,11vw,8.6rem)] leading-[0.9] tracking-[-0.05em] text-[var(--color-text)]'>
              Designing interfaces
              <br />
              that feel
              <span className='block bg-[linear-gradient(120deg,var(--color-accent)_0%,#ffd7a8_55%,var(--color-accent-alt)_100%)] bg-clip-text text-transparent'>
                unreleased.
              </span>
            </h1>
          </div>

          <p data-hero-reveal className='max-w-2xl text-lg leading-8 text-[var(--color-muted)] md:text-xl'>
            I build launch-ready experiences with bold contrast, controlled motion, and a systems mindset so products feel memorable before they feel familiar.
          </p>

          <div data-hero-reveal className='flex flex-wrap items-center gap-3'>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className='rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-semibold text-[#09090c] transition-transform duration-200 hover:-translate-y-0.5'
            >
              Start a project
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full border border-[var(--color-line)] bg-[rgba(245,239,230,0.04)] px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
            >
              See GitHub
            </a>
          </div>

          <div data-hero-reveal className='grid gap-3 sm:grid-cols-3'>
            {METRICS.map(({ value, label }) => (
              <div
                key={label}
                className='section-panel rounded-[1.6rem] border border-[var(--color-line)] px-5 py-5'
              >
                <p className='font-display text-3xl tracking-[-0.06em] text-[var(--color-text)]'>{value}</p>
                <p className='mt-2 text-sm leading-6 text-[var(--color-muted)]'>{label}</p>
              </div>
            ))}
          </div>

          <div data-hero-reveal className='section-panel max-w-2xl rounded-[2rem] border border-[var(--color-line)] p-5'>
            <p className='font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent-alt)]'>
              Live intro
            </p>
            <p className='mt-3 min-h-[86px] text-sm leading-7 text-[var(--color-muted)] md:text-base'>
              {typedText}
              <span className='ml-1 text-[var(--color-accent)]'>|</span>
            </p>
          </div>

          <div data-hero-reveal className='flex flex-wrap gap-2'>
            {BADGE_LIST.map((badge) => (
              <span
                key={badge}
                className='rounded-full border border-[var(--color-line)] bg-[rgba(245,239,230,0.04)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]'
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className='flex justify-center xl:justify-end'>
          <div data-hero-visual className='relative w-full max-w-[34rem]'>
            <div
              data-hero-orbit
              className='absolute inset-[-6%] rounded-[34%] border border-dashed border-[rgba(245,239,230,0.14)]'
            />
            <div className='absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(255,122,47,0.16)_0%,rgba(255,122,47,0)_70%)] blur-3xl' />

            <div className='section-panel relative overflow-hidden rounded-[2.8rem] border border-[var(--color-line)] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.36)]'>
              <div className='relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-[rgba(245,239,230,0.08)]'>
                <img
                  src={avatar}
                  alt='Olly Smith'
                  className='h-full w-full object-cover object-[center_18%]'
                />
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,7,0)_20%,rgba(5,5,7,0.08)_55%,rgba(5,5,7,0.68)_100%)]' />
              </div>

              <div className='section-panel absolute inset-x-6 bottom-6 rounded-[1.6rem] border border-[rgba(245,239,230,0.12)] p-4'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <p className='font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent-alt)]'>
                      Current focus
                    </p>
                    <p className='mt-2 text-lg font-medium text-[var(--color-text)]'>
                      Launch sites, design systems, interactive product stories
                    </p>
                  </div>
                  <span className='rounded-full border border-[rgba(245,239,230,0.16)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)]'>
                    Available
                  </span>
                </div>
              </div>
            </div>

            <div
              data-hero-chip
              className='section-panel absolute -left-3 top-[16%] rounded-[1.25rem] border border-[rgba(245,239,230,0.12)] px-4 py-3 md:-left-12'
            >
              <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]'>
                Stack
              </p>
              <p className='mt-2 text-sm text-[var(--color-text)]'>React / TypeScript / GSAP</p>
            </div>

            <div
              data-hero-chip
              className='section-panel absolute -right-2 top-[12%] rounded-[1.25rem] border border-[rgba(245,239,230,0.12)] px-4 py-3 md:-right-10'
            >
              <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]'>
                Delivery
              </p>
              <p className='mt-2 text-sm text-[var(--color-text)]'>UI concept to polished build</p>
            </div>

            <div
              data-hero-chip
              className='section-panel absolute bottom-[12%] -left-1 rounded-[1.25rem] border border-[rgba(245,239,230,0.12)] px-4 py-3 md:-left-8'
            >
              <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]'>
                Signature
              </p>
              <p className='mt-2 text-sm text-[var(--color-text)]'>Editorial layouts with clean motion tension</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto mt-12 max-w-7xl'>
        <div className='section-panel overflow-hidden rounded-full border border-[var(--color-line)] px-5 py-4'>
          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]'>
            {BADGE_LIST.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
