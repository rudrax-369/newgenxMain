import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const ctx = gsap.context(() => {
      window.addEventListener('mousemove', (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0,
        });
        gsap.to(followerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // Magnetic + Hover effects
      const iteractives = document.querySelectorAll('button, a, input, textarea');
      iteractives.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          gsap.to(followerRef.current, {
            scale: 2,
            backgroundColor: 'rgba(0, 240, 255, 0.2)',
            duration: 0.3,
          });
          gsap.to(cursorRef.current, {
            opacity: 0,
            duration: 0.1,
          });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(followerRef.current, {
            scale: 1,
            backgroundColor: 'transparent',
            duration: 0.3,
          });
          gsap.to(cursorRef.current, {
            opacity: 1,
            duration: 0.1,
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-glow-cyan rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-screen shadow-[0_0_10px_#00f0ff]"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-glow-purple rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 backdrop-blur-[2px]"
      />
    </>
  );
}
