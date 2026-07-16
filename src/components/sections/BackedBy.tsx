import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BackedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.backedby-card',
        { opacity: 0, scale: 0.92, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.3,
          ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.backedby-card', start: 'top 80%' }
        }
      );
      gsap.fromTo('.backedby-inner > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.12, duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.backedby-card', start: 'top 75%' }
        }
      );
      gsap.to('.badge-glow', {
        boxShadow: '0 0 60px rgba(255,107,53,0.5), 0 0 100px rgba(255,107,53,0.2)',
        repeat: -1, yoyo: true, duration: 2, ease: 'power1.inOut',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 lg:py-28 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff6b35]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">

        {/* Section label */}
        <div className="flex justify-center mb-10">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-black bg-[#ff6b35]/10 text-[#ff6b35] px-5 py-2.5 rounded-full border border-[#ff6b35]/30 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse inline-block" />
            Institutional Backing
          </span>
        </div>

        {/* Main interactive card */}
        <a
          href="https://wefoundercircle.com/"
          target="_blank"
          rel="noreferrer"
          className="backedby-card group block glass-card bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-[#ff6b35]/40 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_0_80px_rgba(255,107,53,0.15)] cursor-pointer"
        >
          {/* Gradient top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#ff6b35] via-[#ff9357] to-[#ff6b35]" />

          {/* Ambient inner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6b35]/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#ff6b35]/10 transition-colors duration-1000" />

          <div className="backedby-inner p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

            {/* LEFT: WFC logo image + No.1 badge */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col items-center gap-6">
              {/* Official WFC Logo image */}
              <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-3xl overflow-hidden border border-white/20 bg-white/[0.12] backdrop-blur-md flex items-center justify-center p-5 group-hover:border-[#ff6b35]/30 transition-colors duration-500">
                <img
                  src="/newgenxMain/wfc_logo.png"
                  alt="We Founder Circle Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* No.1 badge below logo */}
              <div className="badge-glow flex items-baseline gap-1 border-2 border-[#ff6b35]/50 rounded-2xl px-7 py-3 bg-[#ff6b35]/10 backdrop-blur-sm">
                <span className="text-white/70 text-sm font-black uppercase tracking-widest">No.</span>
                <span className="text-6xl md:text-7xl font-black text-[#ff6b35] leading-none">1</span>
              </div>
            </div>

            {/* RIGHT: Text content */}
            <div className="flex-1 flex flex-col gap-7 text-center lg:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40 font-black mb-3">Backed By</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3 group-hover:text-[#ff6b35] transition-colors duration-500">
                  We Founder Circle
                </h2>
                <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[#ff6b35] font-bold">
                  India's #1 Angel Investment Network · Inc42 Recognized
                </p>
              </div>

              {/* WFC tagline */}
              <p className="text-base md:text-xl text-white/80 font-light leading-relaxed">
                Building a <strong className="text-white font-bold">Global Community</strong> of <span className="text-[#ff6b35] font-bold">Founders</span> and{' '}
                <span className="text-[#ff6b35] font-bold">Strategic Investors</span> — fueling the next generation of high-growth startups with capital, connections, and conviction.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />

              {/* Stats grid — 4 columns matching WFC screenshot */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { val: '25,000+', label: 'Angel Investors' },
                  { val: '80+',     label: 'Countries' },
                  { val: '120+',    label: 'Funded Portfolio' },
                  { val: '6,000+', label: 'Startups Evaluated' },
                ].map((stat, i) => (
                  <div key={i} className="border border-white/20 rounded-2xl p-4 md:p-5 flex flex-col items-center gap-1.5 group-hover:border-[#ff6b35]/25 transition-colors duration-500 bg-white/[0.08]">
                    <span className="text-2xl md:text-3xl font-black text-[#ff6b35]">{stat.val}</span>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/55 font-bold text-center leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[#ff6b35]/70 text-xs uppercase tracking-widest font-black group-hover:text-[#ff6b35] transition-colors duration-300 justify-center lg:justify-start pt-1">
                <span>Visit wefoundercircle.com</span>
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="currentColor">
                  <path d="M3 3h8v2H6.4l7.3 7.3-1.4 1.4L5 6.4V10H3V3z" />
                </svg>
              </div>
            </div>

          </div>
        </a>
      </div>
    </section>
  );
}
