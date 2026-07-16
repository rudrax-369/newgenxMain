import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Inline SVGs for each skill card ─────────────────────────────────────────

function EngineeringIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="8" y="16" width="48" height="36" rx="6" stroke="#00f0ff" strokeWidth="2" fill="#00f0ff" fillOpacity="0.04" />
      <path d="M8 24h48" stroke="#00f0ff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="14" cy="20" r="2" fill="#ff4500" />
      <circle cx="21" cy="20" r="2" fill="#ffcc00" />
      <circle cx="28" cy="20" r="2" fill="#00f0ff" opacity="0.6" />
      {/* Code brackets */}
      <path d="M20 34 L14 40 L20 46" stroke="#00f0ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 34 L50 40 L44 46" stroke="#00f0ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="36" y1="31" x2="28" y2="49" stroke="#ffcc00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Brain/neural network */}
      <circle cx="32" cy="32" r="14" stroke="#ff4500" strokeWidth="2" fill="#ff4500" fillOpacity="0.06" />
      <circle cx="32" cy="32" r="6" fill="#ff4500" opacity="0.8" className="animate-pulse" />
      {/* Node connections */}
      {[[12, 12], [52, 12], [12, 52], [52, 52], [6, 32], [58, 32]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4" fill="#ff4500" opacity="0.6" className="animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
          <line x1={cx} y1={cy} x2="32" y2="32" stroke="#ff4500" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
        </g>
      ))}
      {/* Outer ring */}
      <circle cx="32" cy="32" r="24" stroke="#ff4500" strokeWidth="1" strokeDasharray="4 3" opacity="0.2" className="animate-spin" style={{ transformOrigin: '32px 32px', animationDuration: '20s' }} />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Chart axes */}
      <path d="M10 10V54H54" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Bars */}
      <rect x="14" y="36" width="8" height="18" rx="2" fill="#00f0ff" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0s' }} />
      <rect x="26" y="26" width="8" height="28" rx="2" fill="#ff4500" opacity="0.7" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <rect x="38" y="16" width="8" height="38" rx="2" fill="#ffcc00" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      {/* Trend line */}
      <path d="M18 34 L30 23 L42 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="42" cy="13" r="4" fill="white" stroke="#ffcc00" strokeWidth="1.5" />
      <circle cx="42" cy="13" r="7" stroke="#ffcc00" strokeWidth="1" className="animate-ping" style={{ transformOrigin: '42px 13px' }} />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Arrow pointing up-right */}
      <path d="M10 52 L52 12" stroke="#ffcc00" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M34 12 L52 12 L52 30" stroke="#ffcc00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Pulsing dots along trend */}
      {[[16, 46], [28, 34], [40, 22], [52, 12]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5" fill="#ffcc00" opacity="0.85" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
        </g>
      ))}
      {/* Rings */}
      <circle cx="52" cy="12" r="10" stroke="#ffcc00" strokeWidth="1.5" opacity="0.3" className="animate-ping" style={{ transformOrigin: '52px 12px', animationDuration: '2s' }} />
      {/* Background grid */}
      {[20, 32, 44].map((v) => (
        <g key={v}>
          <line x1={v} y1="10" x2={v} y2="54" stroke="white" strokeWidth="0.5" opacity="0.06" />
          <line x1="10" y1={v} x2="54" y2={v} stroke="white" strokeWidth="0.5" opacity="0.06" />
        </g>
      ))}
    </svg>
  );
}

function TalentIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Main person */}
      <circle cx="32" cy="18" r="10" stroke="#00f0ff" strokeWidth="2" fill="#00f0ff" fillOpacity="0.08" />
      <circle cx="32" cy="18" r="4" fill="#00f0ff" opacity="0.6" />
      <path d="M14 52C14 43 22 38 32 38C42 38 50 43 50 52" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
      {/* Checkmark badge */}
      <circle cx="48" cy="20" r="8" fill="#0b132b" stroke="#ffcc00" strokeWidth="2" />
      <path d="M44 20 L47 23 L52 17" stroke="#ffcc00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Side figures */}
      <circle cx="14" cy="26" r="6" stroke="#00f0ff" strokeWidth="1.5" opacity="0.4" fill="none" />
      <circle cx="50" cy="26" r="6" stroke="#00f0ff" strokeWidth="1.5" opacity="0.4" fill="none" />
    </svg>
  );
}

function PlacementIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Group of people */}
      {[16, 32, 48].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy="20" r="7" stroke="#ff4500" strokeWidth="2" fill="#ff4500" fillOpacity="0.07" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          <circle cx={cx} cy="20" r="3" fill="#ff4500" opacity="0.6" />
        </g>
      ))}
      <path d="M6 52C6 44 12 40 16 40" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M58 52C58 44 52 40 48 40" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M16 52C16 44 22 40 32 40C42 40 48 44 48 52" stroke="#ff4500" strokeWidth="2.5" strokeLinecap="round" />
      {/* Connection lines between people */}
      <line x1="23" y1="20" x2="25" y2="20" stroke="#ff4500" strokeWidth="1.5" opacity="0.4" strokeDasharray="2 1" />
      <line x1="39" y1="20" x2="41" y2="20" stroke="#ff4500" strokeWidth="1.5" opacity="0.4" strokeDasharray="2 1" />
    </svg>
  );
}

const services = [
  {
    title: 'Engineering & Development',
    subtitle: 'Full Stack · APIs · Mobile',
    icon: EngineeringIcon,
    accentColor: '#00f0ff',
    accentClass: 'text-glow-cyan',
    borderHover: 'hover:border-glow-cyan/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]',
    topBar: 'bg-glow-cyan',
    tags: ['React', 'Node.js', 'Python', 'Swift', 'PostgreSQL'],
    desc: 'Scalable full stack development, robust APIs, database design, and high-performance web & mobile applications engineered for growth from day one.',
  },
  {
    title: 'AI & Automation Systems',
    subtitle: 'LLMs · Agents · Pipelines',
    icon: AIIcon,
    accentColor: '#ff4500',
    accentClass: 'text-glow-solar',
    borderHover: 'hover:border-glow-solar/40 hover:shadow-[0_0_40px_rgba(255,69,0,0.1)]',
    topBar: 'bg-glow-solar',
    tags: ['GPT-4', 'LangChain', 'n8n', 'Make.com', 'RAG'],
    desc: 'Integrating AI workflows — LLMs, autonomous GPT agents, and automation pipelines — to eliminate manual work and unlock machine-speed operations.',
  },
  {
    title: 'Data & Analytics',
    subtitle: 'BI · Dashboards · Insights',
    icon: DataIcon,
    accentColor: '#00f0ff',
    accentClass: 'text-glow-cyan',
    borderHover: 'hover:border-glow-cyan/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]',
    topBar: 'bg-glow-cyan',
    tags: ['Tableau', 'SQL', 'BigQuery', 'Power BI', 'Python'],
    desc: 'Actionable business intelligence, Tableau dashboards, funnel analytics, and data-driven decision-making pipelines built on your real data.',
  },
  {
    title: 'Growth Engineering',
    subtitle: 'Lead Gen · Outreach · Scale',
    icon: GrowthIcon,
    accentColor: '#ffcc00',
    accentClass: 'text-glow-gold',
    borderHover: 'hover:border-glow-gold/40 hover:shadow-[0_0_40px_rgba(255,204,0,0.1)]',
    topBar: 'bg-glow-gold',
    tags: ['Apollo', 'Instantly', 'Clay', 'Zapier', 'CRM'],
    desc: 'Lead generation systems, automated cold outreach pipelines, conversion optimisation, and end-to-end growth scaling that compounds over time.',
  },
  {
    title: 'Tech Talent Sourcing',
    subtitle: 'Engineers · Developers · Specialists',
    icon: TalentIcon,
    accentColor: '#00f0ff',
    accentClass: 'text-glow-cyan',
    borderHover: 'hover:border-glow-cyan/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]',
    topBar: 'bg-glow-cyan',
    tags: ['Pre-vetted', 'Remote', 'Full-time', 'Contract', 'Global'],
    desc: 'Connecting you with pre-vetted, high-quality engineers, developers, and tech specialists perfectly matched to your stack and culture.',
  },
  {
    title: 'Non-Tech Placements',
    subtitle: 'Management · Marketing · Ops',
    icon: PlacementIcon,
    accentColor: '#ff4500',
    accentClass: 'text-glow-solar',
    borderHover: 'hover:border-glow-solar/40 hover:shadow-[0_0_40px_rgba(255,69,0,0.1)]',
    topBar: 'bg-glow-solar',
    tags: ['Sales', 'HR', 'Finance', 'Marketing', 'Operations'],
    desc: 'Scaling your enterprise with skilled professionals across management, marketing, sales, and core operational roles that drive real business momentum.',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header fade
      gsap.fromTo('.skills-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills-header', start: 'top 85%' }
        }
      );
      // Cards stagger
      gsap.fromTo('.service-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 72%',
          }
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
      {/* Section ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-glow-cyan/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">

        {/* Header */}
        <div className="skills-header text-center mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-black bg-glow-cyan/10 text-glow-cyan px-5 py-2.5 rounded-full border border-glow-cyan/20 inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-glow-cyan animate-pulse inline-block" />
            What We Do Best
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter text-glow leading-none mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-white/65 font-light max-w-2xl mx-auto">
            Six core pillars that power every engagement — from custom software to talent that scales your team.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`service-card group relative bg-white/[0.05] border border-white/15 rounded-[1.75rem] p-7 md:p-8 flex flex-col gap-5 overflow-hidden transition-all duration-500 ${service.borderHover} cursor-default`}
              >
                {/* Top accent bar — expands on hover */}
                <div className={`absolute top-0 left-0 h-[3px] w-8 group-hover:w-full transition-all duration-600 rounded-b-sm ${service.topBar} opacity-80 group-hover:opacity-100`}
                  style={{ boxShadow: `0 0 10px ${service.accentColor}` }}
                />

                {/* Inner ambient glow */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle, ${service.accentColor}18, transparent)` }}
                />

                {/* Top row: icon + number */}
                <div className="flex items-start justify-between">
                  {/* SVG Icon box */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-white/10 bg-white/5 p-3 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 shrink-0"
                    style={{ boxShadow: `inset 0 0 20px ${service.accentColor}10` }}>
                    <Icon />
                  </div>
                  {/* Index number */}
                  <span className="text-5xl font-black text-white/[0.06] group-hover:text-white/[0.10] transition-colors duration-500 leading-none select-none">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title + subtitle */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50 mb-1.5 group-hover:text-white/70 transition-colors duration-300">
                    {service.subtitle}
                  </p>
                  <h3 className={`text-xl md:text-2xl font-black tracking-tight leading-snug transition-colors duration-300 ${service.accentClass}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed flex-1">
                  {service.desc}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 group-hover:bg-white/20 transition-colors duration-500" />

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 text-white/60 group-hover:text-white/90 group-hover:border-white/25 transition-all duration-300"
                      style={{ transitionDelay: `${ti * 30}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-14">
          <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-bold">
            Every engagement is custom-built for your business — not templated.
          </p>
        </div>

      </div>
    </section>
  );
}
