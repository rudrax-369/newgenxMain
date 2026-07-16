import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Bot, 
  Zap, 
  BarChart3, 
  Users2, 
  Wrench, 
  ArrowUpRight,
  Activity,
  Check
} from 'lucide-react';

function SupportRobot({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="url(#botGlow)" opacity="0.15" />
      <rect x="97" y="25" width="6" height="20" rx="3" fill="#00f0ff" className="animate-pulse" />
      <circle cx="100" cy="22" r="8" fill="#00f0ff" className="animate-ping" style={{ transformOrigin: '100px 22px', animationDuration: '2s' }} />
      <circle cx="100" cy="22" r="6" fill="#00f0ff" />
      <rect x="50" y="45" width="100" height="85" rx="24" fill="#0b132b" stroke="#00f0ff" strokeWidth="4" />
      <rect x="62" y="57" width="76" height="52" rx="12" fill="#1c2541" stroke="#3a86c8" strokeWidth="2" />
      <path d="M44 85C44 55 55 45 100 45C145 45 156 55 156 85" stroke="#ff4500" strokeWidth="4" strokeLinecap="round" />
      <rect x="42" y="80" width="10" height="26" rx="5" fill="#ff4500" />
      <rect x="148" y="80" width="10" height="26" rx="5" fill="#ff4500" />
      <path d="M148 95C135 115 115 120 105 120" stroke="#ff4500" strokeWidth="3" strokeLinecap="round" />
      <circle cx="105" cy="120" r="5" fill="#ffcc00" />
      <circle cx="85" cy="83" r="10" fill="#00f0ff" className="animate-pulse" />
      <circle cx="85" cy="83" r="4" fill="#ffffff" />
      <circle cx="115" cy="83" r="10" fill="#00f0ff" className="animate-pulse" />
      <circle cx="115" cy="83" r="4" fill="#ffffff" />
      <path d="M85 100H115" stroke="#00f0ff" strokeWidth="3" strokeLinecap="round" />
      <path d="M90 97V103" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M95 95V105" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 97V103" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M105 95V105" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M110 97V103" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="72" cy="94" r="5" fill="#ff4500" opacity="0.4" />
      <circle cx="128" cy="94" r="5" fill="#ff4500" opacity="0.4" />
      <rect x="85" y="130" width="30" height="15" rx="5" fill="#1c2541" stroke="#00f0ff" strokeWidth="2" />
      <path d="M60 145C80 145 75 165 100 165C125 165 120 145 140 145C155 145 165 155 165 170V180H35V170C35 155 45 145 60 145Z" fill="#0b132b" stroke="#00f0ff" strokeWidth="3" />
      <circle cx="100" cy="160" r="10" fill="#1c2541" stroke="#ffcc00" strokeWidth="2" />
      <path d="M97 160L103 160" stroke="#ffcc00" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 157V163" stroke="#ffcc00" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <radialGradient id="botGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function GearsAnimation({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="url(#gearGlow)" opacity="0.15" />
      <g className="origin-[100px_100px]" style={{ animation: 'spin 12s linear infinite' }}>
        <circle cx="100" cy="100" r="40" stroke="#ff4500" strokeWidth="8" fill="none" />
        <circle cx="100" cy="100" r="20" stroke="#ff4500" strokeWidth="4" fill="none" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <rect
            key={deg}
            x="94"
            y="52"
            width="12"
            height="16"
            rx="2"
            fill="#ff4500"
            style={{ transform: `rotate(${deg}deg)`, transformOrigin: '100px 100px' }}
          />
        ))}
      </g>
      <g className="origin-[150px_140px]" style={{ animation: 'spin-reverse 8s linear infinite' }}>
        <circle cx="150" cy="140" r="24" stroke="#00f0ff" strokeWidth="6" fill="none" />
        <circle cx="150" cy="140" r="10" stroke="#00f0ff" strokeWidth="3" fill="none" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect
            key={deg}
            x="146"
            y="110"
            width="8"
            height="12"
            rx="1.5"
            fill="#00f0ff"
            style={{ transform: `rotate(${deg}deg)`, transformOrigin: '150px 140px' }}
          />
        ))}
      </g>
      <defs>
        <radialGradient id="gearGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4500" />
          <stop offset="100%" stopColor="#ff4500" stopOpacity="0" />
        </radialGradient>
      </defs>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </svg>
  );
}

function GraphAnimation({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="url(#graphGlow)" opacity="0.15" />
      <path d="M40 50H160M40 90H160M40 130H160" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="2" />
      <path d="M70 40V160M110 40V160M150 40V160" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="2" />
      <path d="M40 40V160H160" stroke="#ffcc00" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.3" />
      <rect x="55" y="110" width="18" height="50" rx="4" fill="#00f0ff" className="animate-pulse" style={{ transformOrigin: '55px 160px' }} />
      <rect x="85" y="80" width="18" height="80" rx="4" fill="#ffcc00" className="animate-pulse" style={{ transformOrigin: '85px 160px', animationDelay: '0.2s' }} />
      <rect x="115" y="60" width="18" height="100" rx="4" fill="#ff4500" className="animate-pulse" style={{ transformOrigin: '115px 160px', animationDelay: '0.4s' }} />
      <rect x="145" y="40" width="18" height="120" rx="4" fill="#00f0ff" className="animate-pulse" style={{ transformOrigin: '145px 160px', animationDelay: '0.6s' }} />
      <path d="M40 140L64 120L94 90L124 100L154 50" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="64" cy="120" r="5" fill="#ffffff" stroke="#ff4500" strokeWidth="2" />
      <circle cx="94" cy="90" r="5" fill="#ffffff" stroke="#ff4500" strokeWidth="2" />
      <circle cx="124" cy="100" r="5" fill="#ffffff" stroke="#ff4500" strokeWidth="2" />
      <circle cx="154" cy="50" r="6" fill="#ffffff" stroke="#00f0ff" strokeWidth="3" className="animate-ping" style={{ transformOrigin: '154px 50px' }} />
      <circle cx="154" cy="50" r="5" fill="#ffffff" stroke="#00f0ff" strokeWidth="2" />
      <defs>
        <radialGradient id="graphGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffcc00" />
          <stop offset="100%" stopColor="#ffcc00" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function FunnelAnimation({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="url(#funnelGlow)" opacity="0.15" />
      <path d="M50 50H150L120 110V150L80 150V110L50 50Z" fill="#0b132b" stroke="#00f0ff" strokeWidth="4" strokeLinejoin="round" />
      <path d="M62 70H138" stroke="#00f0ff" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M78 100H122" stroke="#00f0ff" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="70" cy="30" r="6" fill="#ff4500" className="animate-bounce" style={{ animationDelay: '0.1s' }} />
      <circle cx="100" cy="20" r="8" fill="#ffcc00" className="animate-bounce" style={{ animationDelay: '0.3s' }} />
      <circle cx="130" cy="30" r="6" fill="#00f0ff" className="animate-bounce" style={{ animationDelay: '0.5s' }} />
      <circle cx="100" cy="60" r="5" fill="#ff4500" opacity="0.8" />
      <circle cx="85" cy="80" r="4" fill="#ffcc00" opacity="0.8" />
      <circle cx="115" cy="80" r="4" fill="#00f0ff" opacity="0.8" />
      <circle cx="100" cy="100" r="5" fill="#00f0ff" opacity="0.9" />
      <g style={{ animation: 'drip 2s infinite' }}>
        <circle cx="100" cy="130" r="6" fill="#ffcc00" />
        <path d="M100 120V136" stroke="#ffcc00" strokeWidth="2" />
      </g>
      <circle cx="100" cy="165" r="10" fill="#00f0ff" opacity="0.2" className="animate-ping" style={{ transformOrigin: '100px 165px' }} />
      <circle cx="100" cy="165" r="5" fill="#00f0ff" />
      <defs>
        <radialGradient id="funnelGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <style>{`
        @keyframes drip {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
      `}</style>
    </svg>
  );
}

function NeuralNetAnimation({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="url(#netGlow)" opacity="0.15" />
      <line x1="50" y1="100" x2="100" y2="50" stroke="#ff4500" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="50" y1="100" x2="100" y2="100" stroke="#00f0ff" strokeWidth="2" />
      <line x1="50" y1="100" x2="100" y2="150" stroke="#ffcc00" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="100" y1="50" x2="150" y2="70" stroke="#ffcc00" strokeWidth="2" />
      <line x1="100" y1="100" x2="150" y2="70" stroke="#00f0ff" strokeWidth="2" />
      <line x1="100" y1="100" x2="150" y2="130" stroke="#ff4500" strokeWidth="2" />
      <line x1="100" y1="150" x2="150" y2="130" stroke="#ffcc00" strokeWidth="2" strokeDasharray="5,5" />
      <circle cx="50" cy="100" r="10" fill="#0b132b" stroke="#00f0ff" strokeWidth="3" />
      <circle cx="50" cy="100" r="4" fill="#00f0ff" className="animate-ping" style={{ transformOrigin: '50px 100px' }} />
      <circle cx="100" cy="50" r="10" fill="#0b132b" stroke="#ff4500" strokeWidth="3" />
      <circle cx="100" cy="100" r="14" fill="#0b132b" stroke="#00f0ff" strokeWidth="4" />
      <circle cx="100" cy="100" r="6" fill="#ffcc00" className="animate-pulse" />
      <circle cx="100" cy="150" r="10" fill="#0b132b" stroke="#ffcc00" strokeWidth="3" />
      <circle cx="150" cy="70" r="12" fill="#0b132b" stroke="#00f0ff" strokeWidth="3" />
      <circle cx="150" cy="70" r="4" fill="#ffffff" />
      <circle cx="150" cy="130" r="12" fill="#0b132b" stroke="#ff4500" strokeWidth="3" />
      <circle cx="150" cy="130" r="4" fill="#ffffff" />
      <defs>
        <radialGradient id="netGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4500" />
          <stop offset="100%" stopColor="#ff4500" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

const pillars = [
  {
    id: 'customer-support',
    title: 'AI Customer Support Agents',
    desc: 'Deploy custom LLM-powered support agents that read your company knowledge base, solve complex customer issues, and handle ticket escalations entirely autonomously.',
    metric: '99.2% Accuracy',
    metricDesc: 'Customer satisfaction rate matching human agents.',
    icon: Bot,
    glowColor: 'group-hover:text-glow-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] border-glow-cyan/20 bg-glow-cyan/5',
    colorClass: 'text-glow-cyan',
    highlights: ['24/7 autonomous resolution', 'Multilingual support (100+ languages)', 'CRM & ticketing system integrations']
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    desc: 'Eliminate manual data entries, document scanning, and recurring backend tasks with advanced automation pipelines built in n8n and Make.com.',
    metric: '18k+ Hours Saved',
    metricDesc: 'Saved per client annually on repetitive tasks.',
    icon: Zap,
    glowColor: 'group-hover:text-glow-solar group-hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] border-glow-solar/20 bg-glow-solar/5',
    colorClass: 'text-glow-solar',
    highlights: ['Automatic lead/data syncing', 'PDF & invoice parsing AI pipelines', 'Real-time database sync hooks']
  },
  {
    id: 'business-intelligence',
    title: 'AI Business Intelligence',
    desc: 'Turn raw tracking data and database entries into active forecasts and executive summaries. Query your business data in plain English.',
    metric: '10x Faster Insights',
    metricDesc: 'Instant NLP query results vs manual SQL audits.',
    icon: BarChart3,
    glowColor: 'group-hover:text-glow-gold group-hover:shadow-[0_0_25px_rgba(255,204,0,0.4)] border-glow-gold/20 bg-glow-gold/5',
    colorClass: 'text-glow-gold',
    highlights: ['Natural language data querying', 'Predictive cohort churn models', 'Automated executive summaries']
  },
  {
    id: 'lead-generation',
    title: 'AI Lead Gen & Qualification',
    desc: 'Automate outbound prospecting. Auto-scrape websites, write highly personalized messages based on LinkedIn updates, and qualify replies via AI.',
    metric: '4.8x Pipe Increase',
    metricDesc: 'Increase in meeting bookings within 90 days.',
    icon: Users2,
    glowColor: 'group-hover:text-glow-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] border-glow-cyan/20 bg-glow-cyan/5',
    colorClass: 'text-glow-cyan',
    highlights: ['Dynamic hyper-personalized sequences', 'Autonomous reply sentiment classification', 'Instant calendar booking routers']
  },
  {
    id: 'custom-solutions',
    title: 'Custom AI Solutions',
    desc: 'Tailored machine learning models, RAG (Retrieval-Augmented Generation) setups, and proprietary LLM fine-tuning tailored to your private data sets.',
    metric: '75% Cost Reduction',
    metricDesc: 'Reduction in traditional manual analysis costs.',
    icon: Wrench,
    glowColor: 'group-hover:text-glow-solar group-hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] border-glow-solar/20 bg-glow-solar/5',
    colorClass: 'text-glow-solar',
    highlights: ['Secure, private vector infrastructure', 'Fine-tuned custom domain-specific LLMs', 'Optimized token-consumption designs']
  }
];

export default function ValueWeDeliver() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo('.value-header-text',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      );

      // Section/Card reveal
      gsap.fromTo('.pillar-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pillars-container',
            start: 'top 75%'
          }
        }
      );

      // ROI Stats Counters Animation
      const stats = gsap.utils.toArray('.roi-val');
      stats.forEach((stat: any) => {
        const targetVal = parseFloat(stat.getAttribute('data-target') || '0');
        const isInt = stat.getAttribute('data-integer') === 'true';
        const suffix = stat.getAttribute('data-suffix') || '';
        
        const counter = { val: 0 };
        
        gsap.to(counter, {
          val: targetVal,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          onUpdate: () => {
            if (isInt) {
              stat.innerText = Math.floor(counter.val).toLocaleString() + suffix;
            } else {
              stat.innerText = counter.val.toFixed(1) + suffix;
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = '/newgenx/free_pdf.pdf';
    link.setAttribute('download', 'AI_Growth_Blueprint_NewGenX.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={containerRef} className="relative w-full text-white bg-transparent">
      
      {/* 1. Header Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="value-header-text lg:w-1/2 text-left flex flex-col items-start">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black bg-glow-solar/15 text-glow-solar px-4 py-2 rounded-full border border-glow-solar/20 mb-6 inline-block">
            Enterprise Grade Consulting
          </span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 text-glow tracking-tighter leading-none">
            AI Solutions <br className="hidden sm:inline" />
            That Work <span className="text-glow underline decoration-glow-cyan/50 underline-offset-[12px]">While You Sleep</span>.
          </h2>
          <p className="text-lg md:text-2xl text-white/80 font-light max-w-xl leading-relaxed mt-6">
            Autonomous growth machinery and intelligent process scaling built directly into your company’s workflow.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center w-full relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-glow-solar/10 to-glow-gold/10 blur-2xl rounded-[2.5rem] opacity-75 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative border border-white/10 rounded-[2.5rem] p-4 bg-background/50 backdrop-blur-xl max-w-[500px] w-full overflow-hidden shadow-2xl pop-hover">
            <img 
              src="/newgenx/value_hero.png" 
              alt="Value We Deliver Vector Illustration" 
              className="w-full h-auto rounded-[2rem] object-cover mix-blend-lighten md:mix-blend-normal opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </section>

      {/* 2. Pillars Section */}
      <section className="py-16 px-6 md:px-24 max-w-7xl mx-auto pillars-container">
        <div className="flex flex-col gap-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={pillar.id}
                className="pillar-card group glass-card p-8 md:p-16 border border-white/15 relative overflow-hidden flex flex-col lg:flex-row gap-10 items-stretch transition-all duration-500 hover:border-white/25"
              >
                {/* Visual Ambient Light inside the Card */}
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none transition-colors duration-1000 ${
                  isEven ? 'bg-glow-cyan/5 group-hover:bg-glow-cyan/10' : 'bg-glow-solar/5 group-hover:bg-glow-solar/10'
                }`} />

                {/* Left Block - Title & Description */}
                <div className="flex-1 flex flex-col justify-between gap-6 relative z-10">
                  <div>
                    <div className={`p-5 rounded-2xl w-fit mb-8 border ${pillar.glowColor} transition-all duration-500 group-hover:scale-110`}>
                      <Icon size={36} />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-5 text-white group-hover:text-glow-gold transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-white/85 leading-relaxed font-light mb-8">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {pillar.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <Check size={20} className={`${pillar.colorClass} shrink-0`} />
                        <span className="text-white/90 text-base md:text-lg font-medium">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Block - Business Impact Metrics */}
                <div className="lg:w-[400px] bg-background/80 border border-white/10 rounded-3xl p-10 flex flex-col justify-center items-center text-center relative z-10 backdrop-blur-sm shrink-0">
                  <div className="absolute top-4 left-4 flex gap-1.5 items-center">
                    <Activity size={14} className={pillar.colorClass} />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/50">Real Impact</span>
                  </div>
                  
                  {pillar.id === 'customer-support' && (
                    <div className="w-28 h-28 mb-6">
                      <SupportRobot />
                    </div>
                  )}
                  {pillar.id === 'process-automation' && (
                    <div className="w-28 h-28 mb-6">
                      <GearsAnimation />
                    </div>
                  )}
                  {pillar.id === 'business-intelligence' && (
                    <div className="w-28 h-28 mb-6">
                      <GraphAnimation />
                    </div>
                  )}
                  {pillar.id === 'lead-generation' && (
                    <div className="w-28 h-28 mb-6">
                      <FunnelAnimation />
                    </div>
                  )}
                  {pillar.id === 'custom-solutions' && (
                    <div className="w-28 h-28 mb-6">
                      <NeuralNetAnimation />
                    </div>
                  )}

                  <span className={`text-5xl md:text-6xl font-black mb-4 tracking-tighter ${pillar.colorClass}`}>
                    {pillar.metric}
                  </span>
                  <p className="text-white/85 text-base md:text-lg leading-relaxed font-light px-4">
                    {pillar.metricDesc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ROI Statistics Section */}
      <section className="py-24 px-6 md:px-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-glow-gold/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-glow tracking-tighter">
              Hard Data. Unlocked Growth.
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              We focus strictly on engineering metrics that increase pipelines, automate support backlogs, and lower costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Stat 1 */}
            <div className="bg-background/85 border border-white/12 p-10 rounded-3xl text-center flex flex-col items-center gap-5 pop-hover glow-border backdrop-blur-md">
              <span className="roi-val text-5xl md:text-6xl font-black text-glow-cyan tracking-tighter" data-target="99.2" data-suffix="%">
                0%
              </span>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">Accuracy Rate</h4>
                <p className="text-white/70 text-sm md:text-base font-light">Fine-tuned context-aware customer support agents resolving customer intents.</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-background/85 border border-white/12 p-10 rounded-3xl text-center flex flex-col items-center gap-5 pop-hover glow-border backdrop-blur-md">
              <span className="roi-val text-5xl md:text-6xl font-black text-glow-solar tracking-tighter" data-target="18000" data-integer="true" data-suffix="+">
                0
              </span>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">Hours Saved Yearly</h4>
                <p className="text-white/70 text-sm md:text-base font-light">Repetitive backend data entries, operations, and logs automated.</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-background/85 border border-white/12 p-10 rounded-3xl text-center flex flex-col items-center gap-5 pop-hover glow-border backdrop-blur-md">
              <span className="roi-val text-5xl md:text-6xl font-black text-glow-gold tracking-tighter" data-target="4.8" data-suffix="x">
                0x
              </span>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">Pipeline Increase</h4>
                <p className="text-white/70 text-sm md:text-base font-light">Meeting booking frequency scaling with autonomous cold outbound outreach.</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-background/85 border border-white/12 p-10 rounded-3xl text-center flex flex-col items-center gap-5 pop-hover glow-border backdrop-blur-md">
              <span className="roi-val text-5xl md:text-6xl font-black text-glow-cyan tracking-tighter" data-target="75" data-integer="true" data-suffix="%">
                0%
              </span>
              <div>
                <h4 className="font-bold text-white text-lg mb-2">Operational Savings</h4>
                <p className="text-white/70 text-sm md:text-base font-light">Saved across teams by replacing boring processes with AI agents.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Download Blueprint CTA Section */}
      <section className="py-24 px-6 md:px-24 text-center max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-glow-cyan/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="glass-card p-12 md:p-20 border border-glow-solar/20 relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 text-glow tracking-tighter leading-tight">
            Deploy AI Growth Machinery.
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed mb-10">
            Download our complete architectural map detailing step-by-step how to automate operations and drive sales using custom LLMs and database pipelines.
          </p>
          
          <button
            onClick={handleDirectDownload}
            className="px-10 py-5 bg-glow-solar border border-glow-solar rounded-2xl text-sm uppercase tracking-widest font-black text-background hover:bg-transparent hover:text-glow-solar hover:shadow-[0_0_30px_rgba(255,69,0,0.4)] transition-all duration-500 flex items-center gap-3"
          >
            Download AI Growth Blueprint <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
}
