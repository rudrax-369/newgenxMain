import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TechGrid, AbstractNodes } from '../ui/VectorHUD';

gsap.registerPlugin(ScrollTrigger);

function HumanAiCollaboration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background ambient circular glow */}
      <circle cx="200" cy="150" r="120" fill="url(#collabGlow)" opacity="0.15" />
      
      {/* Grid lines in background */}
      <path d="M50 150H350M200 50V250" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="2" />
      
      {/* --- CUTE HUMANOID ROBOT (Right Side) --- */}
      <g transform="translate(40, 0)">
        {/* Hovering shadow */}
        <ellipse cx="240" cy="240" rx="30" ry="8" fill="#000000" opacity="0.4" className="animate-pulse" />
        
        <g className="animate-bounce" style={{ animationDuration: '4s', transformOrigin: '240px 140px' }}>
          {/* Antenna */}
          <rect x="237" y="55" width="6" height="15" rx="3" fill="#ff4500" />
          <circle cx="240" cy="50" r="6" fill="#ff4500" />

          {/* Robot Head */}
          <rect x="200" y="70" width="80" height="70" rx="20" fill="#0b132b" stroke="#00f0ff" strokeWidth="3" />
          {/* Screen Face */}
          <rect x="210" y="80" width="60" height="42" rx="10" fill="#1c2541" stroke="#3a86c8" strokeWidth="1.5" />
          {/* Eyes (Cute glowing arcs) */}
          <path d="M220 98C222 96 226 96 228 98" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" />
          <path d="M252 98C254 96 258 96 260 98" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" />
          {/* Smile */}
          <path d="M234 112C236 115 244 115 246 112" stroke="#00f0ff" strokeWidth="2.5" strokeLinecap="round" />
          {/* Cheeks */}
          <circle cx="218" cy="106" r="3" fill="#ff4500" opacity="0.5" />
          <circle cx="262" cy="106" r="3" fill="#ff4500" opacity="0.5" />

          {/* Robot Body */}
          <rect x="210" y="146" width="60" height="65" rx="15" fill="#0b132b" stroke="#00f0ff" strokeWidth="3" />
          {/* Chest Light (pulsing) */}
          <circle cx="240" cy="175" r="12" fill="#1c2541" stroke="#ffcc00" strokeWidth="2" />
          <polygon points="240,168 245,178 235,178" fill="#ffcc00" />

          {/* Robot Left Arm (Waving) */}
          <g transform="translate(195, 145) rotate(-35)">
            <rect x="0" y="0" width="10" height="45" rx="5" fill="#0b132b" stroke="#00f0ff" strokeWidth="2.5" />
            <circle cx="5" cy="40" r="6" fill="#ff4500" />
          </g>

          {/* Robot Right Arm (Pointing to data) */}
          <g transform="translate(265, 155) rotate(50)">
            <rect x="0" y="0" width="10" height="45" rx="5" fill="#0b132b" stroke="#00f0ff" strokeWidth="2.5" />
            <circle cx="5" cy="40" r="6" fill="#00f0ff" />
          </g>
        </g>
      </g>

      {/* --- CUTE HUMAN DEVELOPER (Left Side) --- */}
      <g transform="translate(-30, 0)">
        {/* Floating desk/chair shadow */}
        <ellipse cx="150" cy="245" rx="40" ry="6" fill="#000000" opacity="0.3" />

        {/* Chair Back */}
        <rect x="115" y="160" width="12" height="60" rx="6" fill="#1c2541" stroke="#ff4500" strokeWidth="2" />
        
        {/* Human Head */}
        <circle cx="150" cy="95" r="22" fill="#ffcc99" />
        {/* Cute Cartoon Hair (Brown/Techy) */}
        <path d="M128 92C128 72 145 68 158 72C170 75 174 88 172 98C165 92 155 92 145 95C135 98 132 94 128 92Z" fill="#5c3d2e" />
        <path d="M128 92C128 85 135 80 145 82" stroke="#5c3d2e" strokeWidth="3" strokeLinecap="round" />
        {/* Cute Glasses */}
        <rect x="142" y="90" width="12" height="8" rx="2" fill="none" stroke="#1c2541" strokeWidth="2" />
        <rect x="156" y="90" width="12" height="8" rx="2" fill="none" stroke="#1c2541" strokeWidth="2" />
        <line x1="154" y1="94" x2="156" y2="94" stroke="#1c2541" strokeWidth="2" />
        {/* Friendly face expression */}
        <path d="M148 108C150 110 154 110 156 108" stroke="#1c2541" strokeWidth="2" strokeLinecap="round" />

        {/* Human Torso */}
        <path d="M130 125C130 125 135 120 150 120C165 120 170 125 170 125L175 190H125L130 125Z" fill="#ff4500" />
        
        {/* Human Arms & Laptop */}
        <rect x="135" y="145" width="35" height="10" rx="3" fill="#ffcc99" />
        {/* Glowing holographic laptop screen */}
        <polygon points="120,135 155,115 150,145 115,150" fill="#00f0ff" opacity="0.3" className="animate-pulse" />
        <path d="M110 155L145 150L135 170H100L110 155Z" fill="#0b132b" stroke="#00f0ff" strokeWidth="2" />
        <line x1="110" y1="155" x2="135" y2="130" stroke="#00f0ff" strokeWidth="3.5" className="animate-pulse" />
      </g>

      {/* --- DATA CONNECTIONS & HOLOGRAPHIC FLOW (Center) --- */}
      <g>
        {/* Glowing Data Lines between Human and Robot */}
        <path d="M170 140Q200 110 230 145" stroke="#ffcc00" strokeWidth="2" strokeDasharray="6,6" className="animate-pulse" />
        <path d="M175 160Q205 180 235 160" stroke="#00f0ff" strokeWidth="2" />
        
        {/* Floating Icons/Elements */}
        {/* Coding symbol (glowing) */}
        <g transform="translate(190, 80)" className="animate-bounce" style={{ animationDuration: '3s' }}>
          <circle cx="10" cy="10" r="12" fill="#0b132b" stroke="#ffcc00" strokeWidth="1.5" />
          <path d="M6 7L3 10L6 13M14 7L17 10L14 13" stroke="#ffcc00" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        {/* Gear symbol (glowing) */}
        <g transform="translate(185, 175)" className="animate-bounce" style={{ animationDuration: '5s' }}>
          <circle cx="10" cy="10" r="10" fill="#0b132b" stroke="#00f0ff" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="4" fill="#00f0ff" />
        </g>
      </g>

      <defs>
        <radialGradient id="collabGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="14" width="28" height="24" rx="6" fill="#0b132b" stroke="#00f0ff" strokeWidth="2" />
      <circle cx="18" cy="24" r="2.5" fill="#00f0ff" className="animate-pulse" />
      <circle cx="30" cy="24" r="2.5" fill="#00f0ff" className="animate-pulse" />
      <path d="M20 30h8" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
      <rect x="23" y="6" width="2" height="8" fill="#ff4500" />
      <circle cx="24" cy="4" r="3" fill="#ff4500" className="animate-ping" style={{ transformOrigin: '24px 4px', animationDuration: '1.5s' }} />
      <circle cx="24" cy="4" r="2" fill="#ff4500" />
    </svg>
  );
}

function OptimizationIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
      <g className="origin-[20px_20px]" style={{ animation: 'spin-slow 8s linear infinite' }}>
        <circle cx="20" cy="20" r="10" stroke="#ff4500" strokeWidth="2" fill="#0b132b" />
        <circle cx="20" cy="20" r="4" stroke="#ff4500" strokeWidth="1.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect key={deg} x="18.5" y="6" width="3" height="5" rx="1" fill="#ff4500" style={{ transform: `rotate(${deg}deg)`, transformOrigin: '20px 20px' }} />
        ))}
      </g>
      <g className="origin-[32px_30px]" style={{ animation: 'spin-reverse-slow 6s linear infinite' }}>
        <circle cx="32" cy="30" r="7" stroke="#00f0ff" strokeWidth="2" fill="#0b132b" />
        <circle cx="32" cy="30" r="2.5" stroke="#00f0ff" strokeWidth="1" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <rect key={deg} x="31" y="20.5" width="2" height="3.5" rx="0.5" fill="#00f0ff" style={{ transform: `rotate(${deg}deg)`, transformOrigin: '32px 30px' }} />
        ))}
      </g>
    </svg>
  );
}

function LeadGenIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="#ffcc00" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.4" />
      <circle cx="24" cy="24" r="12" stroke="#ffcc00" strokeWidth="2" fill="#0b132b" />
      <circle cx="24" cy="24" r="5" fill="#ff4500" />
      <circle cx="24" cy="24" r="16" stroke="#ffcc00" strokeWidth="2" className="animate-ping" style={{ transformOrigin: '24px 24px', animationDuration: '2.5s' }} />
      <path d="M24 2v6M24 40v6M2 24h6M40 24h6" stroke="#ffcc00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EngagementIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 34V12C8 9.79 9.79 8 12 8H36C38.21 8 40 9.79 40 12V28C40 30.21 38.21 32 36 32H16L8 38Z" fill="#0b132b" stroke="#00f0ff" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="17" cy="20" r="2.5" fill="#00f0ff" className="animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '0.8s' }} />
      <circle cx="24" cy="20" r="2.5" fill="#00f0ff" className="animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '0.8s' }} />
      <circle cx="31" cy="20" r="2.5" fill="#00f0ff" className="animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '0.8s' }} />
    </svg>
  );
}

function DataBIIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6V42H42" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
      <rect x="10" y="24" width="6" height="12" rx="1.5" fill="#ff4500" className="animate-pulse" style={{ transformOrigin: '13px 36px' }} />
      <rect x="20" y="16" width="6" height="20" rx="1.5" fill="#00f0ff" className="animate-pulse" style={{ transformOrigin: '23px 36px', animationDelay: '0.2s' }} />
      <rect x="30" y="10" width="6" height="26" rx="1.5" fill="#ffcc00" className="animate-pulse" style={{ transformOrigin: '33px 36px', animationDelay: '0.4s' }} />
      <path d="M13 22L23 15L33 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="33" cy="8" r="3" fill="#ffffff" stroke="#ffcc00" strokeWidth="1" className="animate-ping" style={{ transformOrigin: '33px 8px' }} />
      <circle cx="33" cy="8" r="2" fill="#ffffff" />
    </svg>
  );
}

function DevelopmentIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="24" height="24" rx="4" fill="#0b132b" stroke="#ffcc00" strokeWidth="2" />
      <rect x="18" y="18" width="12" height="12" rx="2" fill="#ffcc00" className="animate-pulse" />
      {[0, 8, 16].map((offset) => (
        <g key={offset}>
          <line x1={16 + offset} y1="4" x2={16 + offset} y2="12" stroke="#ffcc00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" className="animate-pulse" />
          <line x1={16 + offset} y1="36" x2={16 + offset} y2="44" stroke="#ffcc00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" className="animate-pulse" />
          <line x1="4" y1={16 + offset} x2="12" y2={16 + offset} stroke="#ffcc00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" className="animate-pulse" />
          <line x1="36" y1={16 + offset} x2="44" y2={16 + offset} stroke="#ffcc00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" className="animate-pulse" />
        </g>
      ))}
    </svg>
  );
}

const focusAreas = [
  {
    num: '01',
    label: 'AUTOMATION',
    title: 'AI-Powered Automation',
    desc: 'Deploy custom LLMs, autonomous workflow agents, and RAG systems tailored to your company private databases.',
    icon: AutomationIcon,
    themeColor: 'cyan',
    glowColor: 'bg-glow-cyan/5 group-hover/card:bg-glow-cyan/10',
    topBarColor: 'bg-glow-cyan shadow-[0_0_10px_#00f0ff]',
    borderHover: 'group-hover/card:border-glow-cyan/35 group-hover/card:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
    iconBorder: 'border-glow-cyan/20 text-glow-cyan bg-glow-cyan/5'
  },
  {
    num: '02',
    label: 'OPTIMIZATION',
    title: 'Process Optimization',
    desc: 'Eliminate repetitive data entries, invoice extraction, and logging using secure automation backend pipelines.',
    icon: OptimizationIcon,
    themeColor: 'solar',
    glowColor: 'bg-glow-solar/5 group-hover/card:bg-glow-solar/10',
    topBarColor: 'bg-glow-solar shadow-[0_0_10px_#ff4500]',
    borderHover: 'group-hover/card:border-glow-solar/35 group-hover/card:shadow-[0_0_30px_rgba(255,69,0,0.15)]',
    iconBorder: 'border-glow-solar/20 text-glow-solar bg-glow-solar/5'
  },
  {
    num: '03',
    label: 'LEAD GEN',
    title: 'Lead Generation Systems',
    desc: 'Automate cold outreach, lead scoring, scraping, and instant calendar booking routers for sales growth.',
    icon: LeadGenIcon,
    themeColor: 'gold',
    glowColor: 'bg-glow-gold/5 group-hover/card:bg-glow-gold/10',
    topBarColor: 'bg-glow-gold shadow-[0_0_10px_#ffcc00]',
    borderHover: 'group-hover/card:border-glow-gold/35 group-hover/card:shadow-[0_0_30px_rgba(255,204,0,0.15)]',
    iconBorder: 'border-glow-gold/20 text-glow-gold bg-glow-gold/5'
  },
  {
    num: '04',
    label: 'ENGAGEMENT',
    title: 'Customer Engagement',
    desc: 'Integrate 24/7 conversational support agents reading structured knowledge bases to clear ticket backlogs.',
    icon: EngagementIcon,
    themeColor: 'cyan',
    glowColor: 'bg-glow-cyan/5 group-hover/card:bg-glow-cyan/10',
    topBarColor: 'bg-glow-cyan shadow-[0_0_10px_#00f0ff]',
    borderHover: 'group-hover/card:border-glow-cyan/35 group-hover/card:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
    iconBorder: 'border-glow-cyan/20 text-glow-cyan bg-glow-cyan/5'
  },
  {
    num: '05',
    label: 'DATA BI',
    title: 'Data-Driven BI',
    desc: 'Turn messy database records into predictive cohorts and plain English queryable dashboards.',
    icon: DataBIIcon,
    themeColor: 'solar',
    glowColor: 'bg-glow-solar/5 group-hover/card:bg-glow-solar/10',
    topBarColor: 'bg-glow-solar shadow-[0_0_10px_#ff4500]',
    borderHover: 'group-hover/card:border-glow-solar/35 group-hover/card:shadow-[0_0_30px_rgba(255,69,0,0.15)]',
    iconBorder: 'border-glow-solar/20 text-glow-solar bg-glow-solar/5'
  },
  {
    num: '06',
    label: 'BUILD',
    title: 'Custom AI Development',
    desc: 'Software and web/mobile engineering architected from scratch for high performance and horizontal scaling.',
    icon: DevelopmentIcon,
    themeColor: 'gold',
    glowColor: 'bg-glow-gold/5 group-hover/card:bg-glow-gold/10',
    topBarColor: 'bg-glow-gold shadow-[0_0_10px_#ffcc00]',
    borderHover: 'group-hover/card:border-glow-gold/35 group-hover/card:shadow-[0_0_30px_rgba(255,204,0,0.15)]',
    iconBorder: 'border-glow-gold/20 text-glow-gold bg-glow-gold/5'
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro section fade-in
      gsap.fromTo('.about-intro',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-intro',
            start: 'top 80%',
          }
        }
      );

      // Grid cards stagger slide-up
      const cards = gsap.utils.toArray('.focus-card');
      gsap.fromTo(cards,
        { opacity: 0, scale: 0.95, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.focus-grid',
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-20 lg:py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
      <TechGrid />
      <div className="absolute left-0 bottom-10 w-[400px] h-[400px] pointer-events-none opacity-30 mix-blend-screen">
        <AbstractNodes />
      </div>

      <div className="max-w-7xl w-full relative z-10 glass-card p-8 md:p-16 lg:p-24 border border-white/15 group">
        {/* Ambient Glow inside card */}
        <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-glow-solar/5 blur-[80px] md:blur-[100px] rounded-full group-hover:bg-glow-solar/10 transition-colors duration-1000 pointer-events-none" />

        {/* 1. Centered Header & Split Details */}
        <div className="about-intro relative z-10 flex flex-col gap-12 lg:gap-16 mb-24">
          
          {/* Centered Heading */}
          <div className="text-center flex flex-col items-center gap-4">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black bg-glow-solar/10 text-glow-solar px-4 py-2 rounded-full border border-glow-solar/20 inline-block">
              About NewGenX
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-glow tracking-tighter leading-none">
              Scaling Businesses With Intelligence.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column: Team/Holographic Vector Cartoon Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center relative group/art">
              <div className="absolute inset-0 bg-gradient-to-tr from-glow-cyan/5 to-glow-solar/5 blur-2xl rounded-full opacity-60 pointer-events-none" />
              <div className="relative border border-white/10 rounded-[2.5rem] p-6 bg-background/60 backdrop-blur-xl max-w-[450px] w-full shadow-2xl pop-hover transition-all duration-500 overflow-hidden">
                <HumanAiCollaboration className="w-full h-auto" />
              </div>
            </div>

            {/* Right Column: Agency Details & Philosophy */}
            <div className="w-full lg:w-1/2 text-left flex flex-col items-start gap-6">
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                At NewGenX, we don't just build software. We build intelligent systems that increase efficiency, reduce costs, improve customer experiences, and create measurable business growth.
              </p>
              <div className="w-full h-px bg-gradient-to-r from-white/15 to-transparent my-2" />
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                We believe technology should solve business problems—not create new ones. Our mission is simple: <strong className="text-glow-gold font-bold">Deliver measurable business outcomes through AI and automation.</strong>
              </p>
            </div>
          </div>

        </div>

        {/* 2. Focused Specialities Header */}
        <div className="text-center mb-16 relative z-10">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Our Focus Areas
          </h3>
          <p className="text-lg text-white/50 font-light max-w-2xl mx-auto">
            We architect end-to-end growth frameworks and product architectures that drive direct bottom-line impact.
          </p>
        </div>

        {/* 3. Focus Cards Grid */}
        <div className="focus-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div 
                key={idx} 
                className={`focus-card group/card bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-10 flex flex-col items-start gap-8 rounded-[2.2rem] transition-all duration-500 relative overflow-hidden ${area.borderHover}`}
              >
                {/* Horizontal Top Accent Strip */}
                <div className={`absolute top-0 left-0 h-1 w-12 ${area.topBarColor} group-hover/card:w-full transition-all duration-700`} />

                {/* Visual Ambient Light inside the Card */}
                <div className={`absolute top-0 right-0 w-40 h-40 blur-[80px] rounded-full pointer-events-none transition-colors duration-1000 ${area.glowColor}`} />

                {/* Index & Technical label */}
                <div className="flex justify-between items-center w-full relative z-10">
                  <span className="text-[10px] tracking-[0.25em] font-black text-white/40 uppercase">
                    {area.label}
                  </span>
                  <span className="text-xs font-mono font-bold text-white/20">
                    // {area.num}
                  </span>
                </div>

                {/* Glowing Micro-Animated Icon Container */}
                <div className={`p-4 rounded-2xl border ${area.iconBorder} group-hover/card:scale-110 group-hover/card:border-white/25 transition-all duration-500 shadow-inner`}>
                  <Icon />
                </div>

                {/* Title & Description */}
                <div className="relative z-10">
                  <h4 className="text-2xl font-black tracking-tight text-white mb-4 group-hover/card:text-glow-gold transition-colors duration-300 leading-snug">
                    {area.title}
                  </h4>
                  <p className="text-white/75 text-base md:text-lg font-light leading-relaxed">
                    {area.desc}
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
