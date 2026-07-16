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

const focusAreas = [
  {
    num: '01',
    label: 'AI AUTOMATION',
    title: 'AI-Powered Automation',
    points: [
      'Deploy custom LLMs and autonomous workflow agents trained on your database.',
      'Implement RAG pipelines for secure, instant private document search.',
      'Achieve 24/7 task execution at machine speed to eliminate manual labor.'
    ],
    accentColor: '#00f0ff',
    accentClass: 'text-glow-cyan',
    borderAccent: 'group-hover/row:border-glow-cyan/35',
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Brain-circuit hybrid */}
        <circle cx="80" cy="80" r="70" stroke="#00f0ff" strokeWidth="1" strokeDasharray="6 4" opacity="0.2" />
        <circle cx="80" cy="80" r="50" stroke="#00f0ff" strokeWidth="1.5" opacity="0.12" />
        {/* CPU chip body */}
        <rect x="52" y="52" width="56" height="56" rx="8" fill="#0b132b" stroke="#00f0ff" strokeWidth="2.5" />
        <rect x="62" y="62" width="36" height="36" rx="4" fill="#00f0ff" opacity="0.08" />
        {/* Grid pattern inside chip */}
        <line x1="71" y1="62" x2="71" y2="98" stroke="#00f0ff" strokeWidth="0.8" opacity="0.4" />
        <line x1="80" y1="62" x2="80" y2="98" stroke="#00f0ff" strokeWidth="0.8" opacity="0.4" />
        <line x1="89" y1="62" x2="89" y2="98" stroke="#00f0ff" strokeWidth="0.8" opacity="0.4" />
        <line x1="62" y1="71" x2="98" y2="71" stroke="#00f0ff" strokeWidth="0.8" opacity="0.4" />
        <line x1="62" y1="80" x2="98" y2="80" stroke="#00f0ff" strokeWidth="0.8" opacity="0.4" />
        <line x1="62" y1="89" x2="98" y2="89" stroke="#00f0ff" strokeWidth="0.8" opacity="0.4" />
        {/* Center pulsing core */}
        <circle cx="80" cy="80" r="8" fill="#00f0ff" opacity="0.9" className="animate-pulse" />
        <circle cx="80" cy="80" r="14" stroke="#00f0ff" strokeWidth="1.5" opacity="0.4" className="animate-ping" style={{ transformOrigin: '80px 80px', animationDuration: '2s' }} />
        {/* Pins top/bottom/left/right */}
        {[56, 68, 80, 92, 104].map((pos) => (
          <g key={pos}>
            <rect x={pos - 2} y="38" width="4" height="14" rx="2" fill="#00f0ff" opacity="0.7" />
            <rect x={pos - 2} y="108" width="4" height="14" rx="2" fill="#00f0ff" opacity="0.7" />
            <rect x="38" y={pos - 2} width="14" height="4" rx="2" fill="#00f0ff" opacity="0.7" />
            <rect x="108" y={pos - 2} width="14" height="4" rx="2" fill="#00f0ff" opacity="0.7" />
          </g>
        ))}
        {/* Signal waves */}
        <path d="M130 60 Q140 65 130 70 Q120 75 130 80" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" className="animate-pulse" />
        <path d="M135 55 Q148 65 135 75" stroke="#ff4500" strokeWidth="1" strokeLinecap="round" opacity="0.4" className="animate-pulse" />
      </svg>
    ),
  },
  {
    num: '02',
    label: 'PROCESS OPS',
    title: 'Business Process Optimization',
    points: [
      'Map end-to-end workflows to identify and remove operational bottlenecks.',
      'Automate invoice extraction, database logging, and data entry pipelines.',
      'Eliminate human errors and reduce overhead costs by up to 80%.'
    ],
    accentColor: '#ff4500',
    accentClass: 'text-glow-solar',
    borderAccent: 'group-hover/row:border-glow-solar/35',
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer ambient */}
        <circle cx="80" cy="80" r="72" stroke="#ff4500" strokeWidth="1" strokeDasharray="4 6" opacity="0.15" />
        {/* Large gear */}
        <g style={{ animation: 'spin 10s linear infinite', transformOrigin: '57px 57px' }}>
          <circle cx="57" cy="57" r="22" stroke="#ff4500" strokeWidth="3" fill="#0b132b" />
          <circle cx="57" cy="57" r="8" stroke="#ff4500" strokeWidth="2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
            <rect key={d} x="55" y="28" width="4" height="8" rx="2" fill="#ff4500" style={{ transform: `rotate(${d}deg)`, transformOrigin: '57px 57px' }} />
          ))}
        </g>
        {/* Small gear counter-rotating */}
        <g style={{ animation: 'spin 6s linear infinite reverse', transformOrigin: '103px 103px' }}>
          <circle cx="103" cy="103" r="16" stroke="#00f0ff" strokeWidth="2.5" fill="#0b132b" />
          <circle cx="103" cy="103" r="6" stroke="#00f0ff" strokeWidth="1.5" />
          {[0, 60, 120, 180, 240, 300].map((d) => (
            <rect key={d} x="101.5" y="82" width="3" height="6" rx="1.5" fill="#00f0ff" style={{ transform: `rotate(${d}deg)`, transformOrigin: '103px 103px' }} />
          ))}
        </g>
        {/* Medium gear */}
        <g style={{ animation: 'spin 8s linear infinite', transformOrigin: '103px 60px' }}>
          <circle cx="103" cy="60" r="18" stroke="#ffcc00" strokeWidth="2.5" fill="#0b132b" />
          <circle cx="103" cy="60" r="7" stroke="#ffcc00" strokeWidth="1.5" />
          {[0, 51, 102, 154, 205, 256, 307].map((d) => (
            <rect key={d} x="101.5" y="38" width="3" height="6" rx="1.5" fill="#ffcc00" style={{ transform: `rotate(${d}deg)`, transformOrigin: '103px 60px' }} />
          ))}
        </g>
        {/* Connecting dots */}
        <circle cx="80" cy="80" r="4" fill="#ff4500" className="animate-ping" style={{ transformOrigin: '80px 80px', animationDuration: '1.5s' }} />
        <circle cx="80" cy="80" r="3" fill="#ff4500" />
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </svg>
    ),
  },
  {
    num: '03',
    label: 'LEAD GEN',
    title: 'Lead Generation Systems',
    points: [
      'Scrape and verify ultra-targeted business contact databases.',
      'Deploy multi-channel cold outreach with smart booking routers.',
      'Build a continuous pipeline of sales-ready closing opportunities.'
    ],
    accentColor: '#ffcc00',
    accentClass: 'text-glow-gold',
    borderAccent: 'group-hover/row:border-glow-gold/35',
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Radar rings */}
        <circle cx="80" cy="80" r="65" stroke="#ffcc00" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
        <circle cx="80" cy="80" r="50" stroke="#ffcc00" strokeWidth="1.5" opacity="0.2" />
        <circle cx="80" cy="80" r="35" stroke="#ffcc00" strokeWidth="2" opacity="0.3" />
        <circle cx="80" cy="80" r="20" stroke="#ffcc00" strokeWidth="2.5" opacity="0.5" fill="#ffcc00" fillOpacity="0.05" />
        {/* Pulsing outer ring */}
        <circle cx="80" cy="80" r="60" stroke="#ffcc00" strokeWidth="2" className="animate-ping" opacity="0.2" style={{ transformOrigin: '80px 80px', animationDuration: '3s' }} />
        {/* Center dot */}
        <circle cx="80" cy="80" r="6" fill="#ff4500" />
        <circle cx="80" cy="80" r="10" stroke="#ff4500" strokeWidth="1.5" opacity="0.5" className="animate-ping" style={{ transformOrigin: '80px 80px', animationDuration: '1.5s' }} />
        {/* Crosshairs */}
        <line x1="80" y1="10" x2="80" y2="150" stroke="#ffcc00" strokeWidth="1" opacity="0.2" />
        <line x1="10" y1="80" x2="150" y2="80" stroke="#ffcc00" strokeWidth="1" opacity="0.2" />
        {/* Targets */}
        <circle cx="38" cy="42" r="5" fill="#00f0ff" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
        <circle cx="125" cy="55" r="4" fill="#ffcc00" className="animate-bounce" style={{ animationDelay: '0.5s' }} />
        <circle cx="115" cy="118" r="6" fill="#ff4500" className="animate-bounce" style={{ animationDelay: '0.8s' }} />
        {/* Lines to center */}
        <line x1="38" y1="42" x2="80" y2="80" stroke="#00f0ff" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
        <line x1="125" y1="55" x2="80" y2="80" stroke="#ffcc00" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
        <line x1="115" y1="118" x2="80" y2="80" stroke="#ff4500" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    num: '04',
    label: 'ENGAGEMENT',
    title: 'Customer Engagement',
    points: [
      'Integrate 24/7 self-service AI agents to clear support queues.',
      'Fine-tune support models using historical tickets and product documentation.',
      'Escalate complex edge cases automatically to human agents.'
    ],
    accentColor: '#00f0ff',
    accentClass: 'text-glow-cyan',
    borderAccent: 'group-hover/row:border-glow-cyan/35',
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Chat bubbles stacked */}
        {/* Main bubble */}
        <rect x="20" y="30" width="100" height="60" rx="16" fill="#0b132b" stroke="#00f0ff" strokeWidth="2.5" />
        <polygon points="36,90 20,110 56,90" fill="#0b132b" stroke="#00f0ff" strokeWidth="2" strokeLinejoin="round" />
        {/* Typing dots inside main bubble */}
        <circle cx="50" cy="60" r="5" fill="#00f0ff" className="animate-bounce" style={{ animationDelay: '0s', animationDuration: '0.9s' }} />
        <circle cx="70" cy="60" r="5" fill="#00f0ff" className="animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '0.9s' }} />
        <circle cx="90" cy="60" r="5" fill="#00f0ff" className="animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '0.9s' }} />
        {/* Reply bubble */}
        <rect x="45" y="100" width="96" height="48" rx="14" fill="#0b132b" stroke="#ffcc00" strokeWidth="2" />
        <polygon points="124,100 141,84 104,100" fill="#0b132b" stroke="#ffcc00" strokeWidth="2" strokeLinejoin="round" />
        {/* Text lines in reply */}
        <rect x="58" y="113" width="68" height="4" rx="2" fill="#ffcc00" opacity="0.5" />
        <rect x="58" y="123" width="50" height="4" rx="2" fill="#ffcc00" opacity="0.3" />
        {/* Status dot */}
        <circle cx="130" cy="145" r="5" fill="#00f0ff" className="animate-pulse" />
        <circle cx="142" cy="145" r="5" fill="#00f0ff" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      </svg>
    ),
  },
  {
    num: '05',
    label: 'INTELLIGENCE',
    title: 'Data-Driven Business Intelligence',
    points: [
      'Unify messy spreadsheets and database tables into real-time metrics.',
      'Surface predictive cohorts, retention anomalies, and revenue trends.',
      'Enable leadership queries via intuitive natural language dashboards.'
    ],
    accentColor: '#ff4500',
    accentClass: 'text-glow-solar',
    borderAccent: 'group-hover/row:border-glow-solar/35',
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Axes */}
        <path d="M20 20V140H140" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        {/* Grid */}
        {[50, 80, 110].map((x) => (
          <line key={x} x1={x} y1="20" x2={x} y2="140" stroke="#ffffff" strokeWidth="0.5" opacity="0.06" />
        ))}
        {[50, 80, 110].map((y) => (
          <line key={y} x1="20" y1={y} x2="140" y2={y} stroke="#ffffff" strokeWidth="0.5" opacity="0.06" />
        ))}
        {/* Bars */}
        <rect x="30" y="100" width="18" height="40" rx="3" fill="#00f0ff" className="animate-pulse" style={{ animationDelay: '0s' }} />
        <rect x="60" y="75" width="18" height="65" rx="3" fill="#ff4500" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <rect x="90" y="50" width="18" height="90" rx="3" fill="#ffcc00" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <rect x="120" y="28" width="18" height="112" rx="3" fill="#00f0ff" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        {/* Trend line */}
        <path d="M39 105 L69 78 L99 52 L129 31" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        {/* Highlight dot on latest point */}
        <circle cx="129" cy="31" r="6" fill="#ffffff" stroke="#ffcc00" strokeWidth="2" />
        <circle cx="129" cy="31" r="10" stroke="#ffcc00" strokeWidth="1.5" className="animate-ping" style={{ transformOrigin: '129px 31px' }} />
      </svg>
    ),
  },
  {
    num: '06',
    label: 'ENGINEERING',
    title: 'Custom AI Development',
    points: [
      'Build performant, secure web and mobile applications from scratch.',
      'Integrate complex custom APIs and high-availability cloud setups.',
      'Engage as an engineering partner building long-term scalable tech.'
    ],
    accentColor: '#ffcc00',
    accentClass: 'text-glow-gold',
    borderAccent: 'group-hover/row:border-glow-gold/35',
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer grid squares */}
        <rect x="20" y="20" width="120" height="120" rx="8" stroke="#ffcc00" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.2" />
        {/* Code brackets */}
        <path d="M45 55 L25 80 L45 105" stroke="#ffcc00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M115 55 L135 80 L115 105" stroke="#ffcc00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Slash */}
        <line x1="90" y1="48" x2="70" y2="112" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" />
        {/* Pulsing center diamond */}
        <rect x="72" y="72" width="16" height="16" rx="3" fill="#ffcc00" opacity="0.9" className="animate-pulse" style={{ transform: 'rotate(45deg)', transformOrigin: '80px 80px' }} />
        {/* Corner nodes */}
        {[[35, 35], [125, 35], [35, 125], [125, 125]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#ffcc00" opacity="0.6" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
        {/* Connection lines to center */}
        {[[35, 35], [125, 35], [35, 125], [125, 125]].map(([cx, cy], i) => (
          <line key={i} x1={cx} y1={cy} x2="80" y2="80" stroke="#ffcc00" strokeWidth="0.8" opacity="0.2" />
        ))}
      </svg>
    ),
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-intro',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-intro', start: 'top 80%' }
        }
      );
      gsap.fromTo('.focus-row',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, stagger: 0.18, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.focus-section', start: 'top 75%' }
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
        {/* Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-glow-solar/5 blur-[80px] md:blur-[100px] rounded-full group-hover:bg-glow-solar/10 transition-colors duration-1000 pointer-events-none" />

        {/* 1. Centered Intro Header */}
        <div className="about-intro relative z-10 flex flex-col gap-12 lg:gap-16 mb-24">
          <div className="text-center flex flex-col items-center gap-4">
            <span className="text-sm md:text-base uppercase tracking-[0.3em] font-black bg-glow-solar/15 text-glow-solar px-6 py-2.5 rounded-full border border-glow-solar/35 inline-block shadow-[0_0_15px_rgba(255,69,0,0.25)]">
              About NewGenX
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-glow tracking-tighter leading-none">
              Scaling Businesses With Intelligence.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex justify-center relative group/art">
              <div className="absolute inset-0 bg-gradient-to-tr from-glow-cyan/5 to-glow-solar/5 blur-2xl rounded-full opacity-60 pointer-events-none" />
              <div className="relative border border-white/10 rounded-[2.5rem] p-6 bg-background/60 backdrop-blur-xl max-w-[450px] w-full shadow-2xl pop-hover transition-all duration-500 overflow-hidden">
                <HumanAiCollaboration className="w-full h-auto" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-left flex flex-col items-start gap-6">
              <p className="text-xl md:text-2xl text-white/95 font-light leading-relaxed">
                At NewGenX, we don't just build software. We build intelligent systems that increase efficiency, reduce costs, improve customer experiences, and create measurable business growth.
              </p>
              <div className="w-full h-px bg-gradient-to-r from-white/15 to-transparent my-2" />
              <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
                We believe technology should solve business problems—not create new ones. Our mission is simple: <strong className="text-glow-gold font-bold">Deliver measurable business outcomes through AI and automation.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* 2. Focus Section Header */}
        <div className="text-center mb-14 relative z-10">
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Our Focus Areas
          </h3>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            We architect end-to-end growth frameworks and product architectures that drive direct bottom-line impact.
          </p>
        </div>

        {/* 3. Focus Rows — paragraph style */}
        <div className="focus-section flex flex-col gap-6 relative z-10">
          {focusAreas.map((area, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`focus-row group/row bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-white/35 rounded-[2rem] p-6 md:p-10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 transition-all duration-500 relative overflow-hidden ${area.borderAccent}`}
              >
                {/* Top accent strip on hover */}
                <div className="absolute top-0 left-0 h-[2px] w-0 group-hover/row:w-full transition-all duration-700 rounded-full" style={{ backgroundColor: area.accentColor, boxShadow: `0 0 12px ${area.accentColor}` }} />

                {/* SVG illustration — mid size */}
                <div className="w-28 h-28 md:w-40 md:h-40 shrink-0 opacity-85 group-hover/row:opacity-100 group-hover/row:scale-105 transition-all duration-500">
                  {area.svg}
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0 w-full text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-white/55">{area.label}</span>
                    <span className="text-[9px] font-mono text-white/40">// {area.num}</span>
                  </div>
                  <h4 className={`text-xl md:text-2xl lg:text-3xl font-black tracking-tight mb-4 transition-colors duration-300 ${area.accentClass}`}>
                    {area.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {area.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-white/95 text-base md:text-lg font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: area.accentColor }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
