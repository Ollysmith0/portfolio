import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CinematicBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    const grid = gridRef.current;

    if (!container || !spotlight || !grid) {
      return;
    }

    const context = gsap.context(() => {
      gsap.to('[data-backdrop-blob="primary"]', {
        xPercent: 10,
        yPercent: -12,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('[data-backdrop-blob="secondary"]', {
        xPercent: -14,
        yPercent: 16,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('[data-backdrop-blob="tertiary"]', {
        xPercent: 8,
        yPercent: 12,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('[data-backdrop-orbit]', {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      });

      if (!window.matchMedia('(pointer: fine)').matches) {
        return;
      }

      const moveSpotlightX = gsap.quickTo(spotlight, 'x', {
        duration: 0.6,
        ease: 'power3.out',
      });
      const moveSpotlightY = gsap.quickTo(spotlight, 'y', {
        duration: 0.6,
        ease: 'power3.out',
      });
      const rotateGridX = gsap.quickTo(grid, 'rotationX', {
        duration: 0.8,
        ease: 'power3.out',
      });
      const rotateGridY = gsap.quickTo(grid, 'rotationY', {
        duration: 0.8,
        ease: 'power3.out',
      });

      const handlePointerMove = (event: PointerEvent) => {
        const offsetX = event.clientX - window.innerWidth / 2;
        const offsetY = event.clientY - window.innerHeight / 2;

        moveSpotlightX(offsetX * 0.08);
        moveSpotlightY(offsetY * 0.08);
        rotateGridX(offsetY * -0.008);
        rotateGridY(offsetX * 0.008);
      };

      window.addEventListener('pointermove', handlePointerMove, { passive: true });

      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
      };
    }, container);

    return () => context.revert();
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#211712_0%,#09090c_42%,#050507_100%)]" />
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <div
          data-backdrop-blob="primary"
          className="absolute left-[-12%] top-[8%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,#ff7a2f_0%,rgba(255,122,47,0)_68%)] blur-3xl"
        />
        <div
          data-backdrop-blob="secondary"
          className="absolute right-[-10%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,#8df6cf_0%,rgba(141,246,207,0)_70%)] blur-3xl"
        />
        <div
          data-backdrop-blob="tertiary"
          className="absolute bottom-[-10%] left-[24%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,#87a7ff_0%,rgba(135,167,255,0)_72%)] blur-3xl"
        />
      </div>

      <div ref={spotlightRef} className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,239,230,0.16)_0%,rgba(245,239,230,0)_70%)] blur-3xl" />

      <div ref={gridRef} className="absolute inset-[-12%] perspective-[1600px] opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,239,230,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(245,239,230,0.06)_1px,transparent_1px)] bg-[size:clamp(3rem,6vw,5rem)_clamp(3rem,6vw,5rem)] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_78%)]" />
      </div>

      <div data-backdrop-orbit className="absolute left-1/2 top-1/2 h-[72vw] w-[72vw] max-h-[58rem] max-w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(245,239,230,0.08)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,7,0)_0%,rgba(5,5,7,0.4)_55%,rgba(5,5,7,0.9)_100%)]" />
      <div className="noise-overlay absolute inset-0 opacity-20" />
    </div>
  );
}