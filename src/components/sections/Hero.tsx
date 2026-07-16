import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { OrbitalRings } from '../ui/VectorHUD';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-text',
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)', delay: 2.7 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-20"
    >
      <div className="absolute right-[-10%] md:right-10 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none opacity-40 mix-blend-screen hidden lg:block">
        <OrbitalRings />
      </div>

      <div className="hero-text z-10 flex flex-col items-start mt-10 md:mt-20 pointer-events-auto max-w-6xl w-full glass-card p-6 md:p-12 lg:p-20 relative text-left border border-white/10 group">
        {/* Ambient Glow inside card */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-glow-cyan/5 blur-[80px] md:blur-[100px] rounded-full group-hover:bg-glow-cyan/10 transition-colors duration-1000 pointer-events-none" />

        <h1 className="text-[clamp(2.2rem,8vw,7.5rem)] leading-[1.2] font-black tracking-tighter mb-8 transition-all duration-700 hover:tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative z-10 break-words flex flex-wrap w-full py-2">
          <span className="text-glow block mb-2 w-full">Build. Develop. Scale Fast.</span>
        </h1>
        <p className="text-lg md:text-3xl lg:text-4xl text-high-contrast max-w-3xl leading-relaxed mb-10 relative z-10">
          We help visionary brands scale by architecting high-impact <span className="text-glow-solar font-black">Growth Systems</span> & cutting-edge <span className="text-glow-cyan font-black">Tech Products</span>.
        </p>
        <div className="flex gap-4 md:gap-6 relative z-10">
          <div className="h-px w-12 md:w-24 bg-gradient-to-r from-glow-cyan to-transparent self-center opacity-50" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-white font-bold opacity-80">Available for Global Projects</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-glow-cyan to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-white rotate-90">Scroll</span>
      </div>
    </section>
  );
}
