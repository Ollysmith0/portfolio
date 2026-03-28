import { RefObject, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  selector: string;
  start?: string;
  duration?: number;
  stagger?: number;
  y?: number;
  scale?: number;
};

export function useGsapReveal(
  containerRef: RefObject<HTMLElement | null>,
  {
    selector,
    start = 'top 78%',
    duration = 1,
    stagger = 0.12,
    y = 40,
    scale = 0.96,
  }: RevealOptions,
) {
  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const context = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);

      if (!targets.length) {
        return;
      }

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y, scale },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
        },
      );
    }, container);

    return () => context.revert();
  }, [containerRef, duration, scale, selector, stagger, start, y]);
}