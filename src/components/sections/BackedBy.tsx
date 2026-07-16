import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Decorative laurel wreath SVG — left side
function LaurelLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 150 C20 140 5 100 10 60 C15 30 30 10 50 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9" />
      {/* Leaf pairs */}
      {[
        { x: 48, y: 18, rot: -40 },
        { x: 38, y: 40, rot: -50 },
        { x: 28, y: 62, rot: -55 },
        { x: 20, y: 84, rot: -60 },
        { x: 18, y: 106, rot: -65 },
        { x: 25, y: 128, rot: -50 },
        { x: 38, y: 145, rot: -30 },
      ].map((leaf, i) => (
        <ellipse
          key={i}
          cx={leaf.x}
          cy={leaf.y}
          rx="10"
          ry="5"
          fill="currentColor"
          opacity="0.85"
          style={{ transform: `rotate(${leaf.rot}deg)`, transformOrigin: `${leaf.x}px ${leaf.y}px` }}
        />
      ))}
    </svg>
  );
}

// Decorative laurel wreath SVG — right side (mirrored)
function LaurelRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
      <path d="M60 150 C20 140 5 100 10 60 C15 30 30 10 50 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9" />
      {[
        { x: 48, y: 18, rot: -40 },
        { x: 38, y: 40, rot: -50 },
        { x: 28, y: 62, rot: -55 },
        { x: 20, y: 84, rot: -60 },
        { x: 18, y: 106, rot: -65 },
        { x: 25, y: 128, rot: -50 },
        { x: 38, y: 145, rot: -30 },
      ].map((leaf, i) => (
        <ellipse
          key={i}
          cx={leaf.x}
          cy={leaf.y}
          rx="10"
          ry="5"
          fill="currentColor"
          opacity="0.85"
          style={{ transform: `rotate(${leaf.rot}deg)`, transformOrigin: `${leaf.x}px ${leaf.y}px` }}
        />
      ))}
    </svg>
  );
}

// WFC Triangle Logo SVG (matches their brand mark)
function WFCLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,5 95,90 5,90" fill="none" stroke="#ff6b35" strokeWidth="4" />
      <polygon points="50,25 80,80 20,80" fill="#ff6b35" opacity="0.3" />
      <text x="50" y="68" textAnchor="middle" fontSize="20" fontWeight="900" fill="#ff6b35" fontFamily="Inter, sans-serif">WFC</text>
    </svg>
  );
}

export default function BackedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade + scale up the whole card
      gsap.fromTo('.backedby-card',
        { opacity: 0, scale: 0.9, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.3,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.backedby-card',
            start: 'top 80%',
          }
        }
      );

      // Stagger the inner content blocks
      gsap.fromTo('.backedby-inner > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.backedby-card',
            start: 'top 75%',
          }
        }
      );

      // Pulsing glow on the badge number
      gsap.to('.badge-pulse', {
        boxShadow: '0 0 60px rgba(255,107,53,0.5), 0 0 100px rgba(255,107,53,0.2)',
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'power1.inOut',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 px-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Section ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff6b35]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10">
        {/* Label badge */}
        <div className="flex justify-center mb-10">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-black bg-[#ff6b35]/10 text-[#ff6b35] px-5 py-2.5 rounded-full border border-[#ff6b35]/30 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse inline-block" />
            Institutional Partnership
          </span>
        </div>

        {/* Main glowing card */}
        <a
          href="https://wefoundercircle.com/"
          target="_blank"
          rel="noreferrer"
          className="backedby-card group block glass-card border border-white/10 hover:border-[#ff6b35]/35 rounded-[2.5rem] p-8 md:p-14 lg:p-16 relative overflow-hidden transition-all duration-700 hover:shadow-[0_0_60px_rgba(255,107,53,0.15)] cursor-pointer"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]" />
          
          {/* Top right ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#ff6b35]/10 transition-colors duration-1000" />

          <div className="backedby-inner flex flex-col items-center gap-8 relative z-10">

            {/* Top row: "Backed By" label */}
            <p className="text-sm md:text-base uppercase tracking-[0.4em] font-black text-white/50 text-center">
              Backed By
            </p>

            {/* Central laurel + badge block */}
            <div className="flex items-center justify-center gap-4 md:gap-8 w-full">
              {/* Left Laurel */}
              <LaurelLeft className="w-10 h-20 md:w-16 md:h-32 text-[#ff6b35] shrink-0" />

              {/* Center: No.1 Badge + Logo + Name */}
              <div className="flex flex-col items-center gap-4">
                {/* No.1 indicator */}
                <div className="badge-pulse flex items-baseline gap-1 border-2 border-[#ff6b35]/60 rounded-2xl px-5 py-3 bg-[#ff6b35]/10 backdrop-blur-sm">
                  <span className="text-white/80 text-sm md:text-base font-black uppercase tracking-widest">No.</span>
                  <span className="text-5xl md:text-7xl font-black text-[#ff6b35] leading-none">1</span>
                </div>

                {/* WFC Logo + Brand Name */}
                <div className="flex items-center gap-3 md:gap-4">
                  <WFCLogo className="w-10 h-10 md:w-14 md:h-14 shrink-0" />
                  <div className="text-left">
                    <p className="text-lg md:text-2xl font-black text-white tracking-tight leading-tight">We Founder Circle</p>
                    <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-[0.2em] font-bold">Angel Investment Network</p>
                  </div>
                </div>
              </div>

              {/* Right Laurel */}
              <LaurelRight className="w-10 h-20 md:w-16 md:h-32 text-[#ff6b35] shrink-0" />
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />

            {/* Description */}
            <div className="text-center max-w-2xl">
              <p className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3 group-hover:text-[#ff6b35] transition-colors duration-500">
                India's #1 Angel Investor Network
              </p>
              <p className="text-base md:text-lg text-white/65 font-light leading-relaxed">
                NewGenX is proudly backed by <strong className="text-white font-bold">We Founder Circle</strong> — India's leading angel investment network
                of 5,000+ strategic investors fueling the next generation of high-growth startups, as recognized by <span className="text-[#ff6b35]">Inc42</span>.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-2">
              {[
                { val: '5,000+', label: 'Angel Investors' },
                { val: '#1', label: 'in India (Inc42)' },
                { val: '₹100Cr+', label: 'Capital Deployed' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="text-2xl md:text-3xl font-black text-[#ff6b35]">{stat.val}</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA hint */}
            <div className="flex items-center gap-2 text-[#ff6b35]/70 text-xs uppercase tracking-widest font-black group-hover:text-[#ff6b35] transition-colors duration-300">
              <span>Visit We Founder Circle</span>
              <svg viewBox="0 0 16 16" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="currentColor">
                <path d="M3 3h8v2H6.4l7.3 7.3-1.4 1.4L5 6.4V10H3V3z" />
              </svg>
            </div>

          </div>
        </a>
      </div>
    </section>
  );
}
