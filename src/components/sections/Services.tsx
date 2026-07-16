import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Large, expressive SVG illustrations ─────────────────────────────────────

function EngineeringSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Monitor frame */}
      <rect x="20" y="20" width="160" height="108" rx="10" fill="#0b1a2e" stroke="#00f0ff" strokeWidth="2" />
      <rect x="20" y="20" width="160" height="28" rx="10" fill="#00f0ff" fillOpacity="0.07" />
      {/* Traffic light dots */}
      <circle cx="38" cy="34" r="5" fill="#ff4500" />
      <circle cx="54" cy="34" r="5" fill="#ffcc00" />
      <circle cx="70" cy="34" r="5" fill="#00f0ff" opacity="0.6" />
      {/* Code lines */}
      <path d="M48 70 L36 82 L48 94" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90 70 L102 82 L90 94" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="76" y1="62" x2="62" y2="102" stroke="#ffcc00" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right panel – stacked bars suggesting file tree */}
      <rect x="118" y="60" width="44" height="5" rx="2.5" fill="#00f0ff" opacity="0.5" />
      <rect x="124" y="70" width="32" height="5" rx="2.5" fill="#00f0ff" opacity="0.35" />
      <rect x="118" y="80" width="50" height="5" rx="2.5" fill="#00f0ff" opacity="0.5" />
      <rect x="124" y="90" width="38" height="5" rx="2.5" fill="#00f0ff" opacity="0.35" />
      <rect x="118" y="100" width="28" height="5" rx="2.5" fill="#ffcc00" opacity="0.6" className="animate-pulse" />
      {/* Stand */}
      <rect x="88" y="128" width="24" height="6" rx="3" fill="#00f0ff" opacity="0.3" />
      <rect x="96" y="124" width="8" height="8" rx="2" fill="#00f0ff" opacity="0.2" />
      {/* Blinking cursor */}
      <rect x="62" y="78" width="3" height="10" rx="1" fill="#00f0ff" className="animate-pulse" />
    </svg>
  );
}

function AISvg() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Central brain shape via circle network */}
      <circle cx="100" cy="80" r="30" fill="#ff4500" fillOpacity="0.06" stroke="#ff4500" strokeWidth="2.5" />
      <circle cx="100" cy="80" r="12" fill="#ff4500" opacity="0.85" className="animate-pulse" />
      {/* Surrounding nodes */}
      {[
        [100, 32], [148, 56], [148, 104], [100, 128], [52, 104], [52, 56],
        [130, 36], [162, 80], [130, 124], [70, 124], [38, 80], [70, 36],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <line x1={cx} y1={cy} x2="100" y2="80" stroke="#ff4500" strokeWidth="0.8" opacity="0.25" strokeDasharray="3 2" />
          <circle cx={cx} cy={cy} r={i < 6 ? 5 : 3} fill="#ff4500" opacity={i < 6 ? 0.7 : 0.4}
            className="animate-pulse" style={{ animationDelay: `${i * 0.12}s` }} />
        </g>
      ))}
      {/* Orbit ring */}
      <circle cx="100" cy="80" r="52" stroke="#ff4500" strokeWidth="1" strokeDasharray="5 4" opacity="0.15"
        className="animate-spin" style={{ transformOrigin: '100px 80px', animationDuration: '18s' }} />
      {/* Data packets moving */}
      <circle cx="100" cy="28" r="4" fill="#ffcc00" className="animate-ping" style={{ transformOrigin: '100px 28px', animationDuration: '2s' }} />
      <circle cx="150" cy="56" r="3" fill="#00f0ff" className="animate-ping" style={{ transformOrigin: '150px 56px', animationDuration: '2.5s', animationDelay: '0.5s' }} />
    </svg>
  );
}

function DataSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Axes */}
      <path d="M30 20V140H180" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      {/* Subtle grid */}
      {[60, 90, 120, 150].map(x => (
        <line key={x} x1={x} y1="20" x2={x} y2="140" stroke="white" strokeWidth="0.5" opacity="0.05" />
      ))}
      {[50, 80, 110].map(y => (
        <line key={y} x1="30" y1={y} x2="180" y2={y} stroke="white" strokeWidth="0.5" opacity="0.05" />
      ))}
      {/* Bars with glow */}
      <rect x="45" y="90" width="22" height="50" rx="4" fill="#00f0ff" opacity="0.5" className="animate-pulse" style={{ animationDelay: '0s' }} />
      <rect x="80" y="65" width="22" height="75" rx="4" fill="#ff4500" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <rect x="115" y="38" width="22" height="102" rx="4" fill="#ffcc00" opacity="0.7" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      <rect x="150" y="22" width="22" height="118" rx="4" fill="#00f0ff" opacity="0.85" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      {/* Trend line */}
      <path d="M56 88 L91 62 L126 36 L161 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* End dot */}
      <circle cx="161" cy="20" r="6" fill="white" stroke="#ffcc00" strokeWidth="2" />
      <circle cx="161" cy="20" r="11" stroke="#ffcc00" strokeWidth="1.5" className="animate-ping" style={{ transformOrigin: '161px 20px' }} />
    </svg>
  );
}

function GrowthSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Radial background */}
      <circle cx="100" cy="80" r="65" stroke="#ffcc00" strokeWidth="1" strokeDasharray="4 5" opacity="0.12" />
      <circle cx="100" cy="80" r="45" stroke="#ffcc00" strokeWidth="1" opacity="0.08" />
      {/* Big arrow */}
      <path d="M40 130 L160 30" stroke="#ffcc00" strokeWidth="3" strokeLinecap="round" />
      <path d="M118 30 L160 30 L160 72" stroke="#ffcc00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dots along the arrow */}
      {[[55, 115], [80, 90], [110, 60], [145, 38]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="7" fill="#ffcc00" opacity="0.9" />
          <circle cx={cx} cy={cy} r="12" stroke="#ffcc00" strokeWidth="1.5" opacity="0.3" className="animate-ping"
            style={{ transformOrigin: `${cx}px ${cy}px`, animationDelay: `${i * 0.25}s`, animationDuration: '2s' }} />
        </g>
      ))}
      {/* Labels */}
      <rect x="30" y="135" width="32" height="5" rx="2.5" fill="#ffcc00" opacity="0.3" />
      <rect x="85" y="100" width="20" height="5" rx="2.5" fill="#ffcc00" opacity="0.4" />
      <rect x="130" y="48" width="28" height="5" rx="2.5" fill="#ffcc00" opacity="0.6" />
    </svg>
  );
}

function TalentSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Central person */}
      <circle cx="100" cy="52" r="22" stroke="#00f0ff" strokeWidth="2.5" fill="#00f0ff" fillOpacity="0.07" />
      <circle cx="100" cy="52" r="9" fill="#00f0ff" opacity="0.7" className="animate-pulse" />
      <path d="M62 130C62 112 78 102 100 102C122 102 138 112 138 130" stroke="#00f0ff" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left person */}
      <circle cx="44" cy="64" r="14" stroke="#00f0ff" strokeWidth="1.5" fill="#00f0ff" fillOpacity="0.04" opacity="0.7" />
      <path d="M22 120C22 110 32 105 44 105C56 105 66 110 66 120" stroke="#00f0ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Right person */}
      <circle cx="156" cy="64" r="14" stroke="#00f0ff" strokeWidth="1.5" fill="#00f0ff" fillOpacity="0.04" opacity="0.7" />
      <path d="M134 120C134 110 144 105 156 105C168 105 178 110 178 120" stroke="#00f0ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Verified badge */}
      <circle cx="122" cy="36" r="14" fill="#0b1a2e" stroke="#ffcc00" strokeWidth="2.5" />
      <path d="M115 36 L120 41 L130 29" stroke="#ffcc00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Connection arcs between people */}
      <path d="M58 72 Q80 58 100 62" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      <path d="M142 72 Q120 58 100 62" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
    </svg>
  );
}

function PlacementSVG() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Office building silhouette */}
      <rect x="60" y="40" width="80" height="100" rx="6" fill="#ff4500" fillOpacity="0.06" stroke="#ff4500" strokeWidth="2" />
      {/* Windows grid */}
      {[55, 75, 95, 115].map(y =>
        [74, 94, 114, 134].map(x => (
          <rect key={`${x}-${y}`} x={x} y={y} width="10" height="10" rx="2"
            fill="#ff4500" opacity="0.35" className="animate-pulse"
            style={{ animationDelay: `${(x + y) * 0.01}s` }} />
        ))
      )}
      {/* Door */}
      <rect x="90" y="118" width="20" height="22" rx="3" fill="#ff4500" opacity="0.4" />
      <circle cx="107" cy="129" r="1.5" fill="white" opacity="0.6" />
      {/* People at entrance */}
      <circle cx="76" cy="148" r="7" fill="#ff4500" opacity="0.6" />
      <circle cx="100" cy="145" r="8" fill="#ff4500" opacity="0.8" className="animate-pulse" />
      <circle cx="124" cy="148" r="7" fill="#ff4500" opacity="0.6" />
      {/* Flag/logo on top */}
      <line x1="100" y1="40" x2="100" y2="22" stroke="#ff4500" strokeWidth="2" />
      <path d="M100 22 L120 28 L100 34 Z" fill="#ff4500" opacity="0.7" />
    </svg>
  );
}

const services = [
  {
    title: 'Engineering & Dev',
    label: 'Full Stack · APIs · Mobile',
    icon: EngineeringSVG,
    accentColor: '#00f0ff',
    accentClass: 'text-glow-cyan',
    topBar: 'bg-glow-cyan',
    borderHover: 'hover:border-glow-cyan/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]',
  },
  {
    title: 'AI & Automation',
    label: 'LLMs · Agents · Pipelines',
    icon: AISvg,
    accentColor: '#ff4500',
    accentClass: 'text-glow-solar',
    topBar: 'bg-glow-solar',
    borderHover: 'hover:border-glow-solar/40 hover:shadow-[0_0_40px_rgba(255,69,0,0.1)]',
  },
  {
    title: 'Data & Analytics',
    label: 'BI · Dashboards · Insights',
    icon: DataSVG,
    accentColor: '#00f0ff',
    accentClass: 'text-glow-cyan',
    topBar: 'bg-glow-cyan',
    borderHover: 'hover:border-glow-cyan/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]',
  },
  {
    title: 'Growth Engineering',
    label: 'Lead Gen · Outreach · Scale',
    icon: GrowthSVG,
    accentColor: '#ffcc00',
    accentClass: 'text-glow-gold',
    topBar: 'bg-glow-gold',
    borderHover: 'hover:border-glow-gold/40 hover:shadow-[0_0_40px_rgba(255,204,0,0.1)]',
  },
  {
    title: 'Tech Talent',
    label: 'Pre-vetted Engineers',
    icon: TalentSVG,
    accentColor: '#00f0ff',
    accentClass: 'text-glow-cyan',
    topBar: 'bg-glow-cyan',
    borderHover: 'hover:border-glow-cyan/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]',
  },
  {
    title: 'Non-Tech Placements',
    label: 'Management · Ops · Sales',
    icon: PlacementSVG,
    accentColor: '#ff4500',
    accentClass: 'text-glow-solar',
    topBar: 'bg-glow-solar',
    borderHover: 'hover:border-glow-solar/40 hover:shadow-[0_0_40px_rgba(255,69,0,0.1)]',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills-header', start: 'top 85%' },
        }
      );
      gsap.fromTo('.service-card',
        { opacity: 0, y: 50, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1,
          stagger: 0.08,
          duration: 0.9,
          ease: 'back.out(1.3)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 72%' },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 px-6 md:px-12 flex flex-col items-center overflow-hidden"
    >
      {/* Ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-glow-cyan/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">

        {/* Header */}
        <div className="skills-header text-center mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-black bg-glow-cyan/10 text-glow-cyan px-5 py-2.5 rounded-full border border-glow-cyan/20 inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-glow-cyan animate-pulse inline-block" />
            What We Do Best
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter text-glow leading-none">
            Skills & Expertise
          </h2>
        </div>

        {/* Cards — SVG dominant, minimal text */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`service-card group relative bg-white/[0.04] border border-white/12 rounded-[1.75rem] overflow-hidden flex flex-col transition-all duration-500 ${service.borderHover} cursor-default`}
              >
                {/* Expanding top accent bar */}
                <div
                  className={`absolute top-0 left-0 h-[3px] w-8 group-hover:w-full transition-all duration-500 ${service.topBar}`}
                  style={{ boxShadow: `0 0 12px ${service.accentColor}` }}
                />

                {/* Inner glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 70% 20%, ${service.accentColor}0d, transparent 70%)` }}
                />

                {/* SVG — takes majority of card */}
                <div className="w-full px-6 pt-8 pb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full max-w-[180px] aspect-[5/4]">
                    <Icon />
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-6 h-px bg-white/8 group-hover:bg-white/15 transition-colors duration-500" />

                {/* Minimal text */}
                <div className="px-6 py-4 flex flex-col gap-1">
                  <h3 className={`text-base md:text-lg font-black tracking-tight leading-tight ${service.accentClass}`}>
                    {service.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/50 font-bold uppercase tracking-widest">
                    {service.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
