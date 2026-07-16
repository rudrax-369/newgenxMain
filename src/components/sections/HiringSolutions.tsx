import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Search, 
  BookOpen, 
  Code, 
  UserCheck, 
  Rocket,
  ShieldCheck,
  Zap,
  Globe2,
  MessageSquare
} from 'lucide-react';

const timelineSteps = [
  {
    step: '01',
    title: 'Profile & Resume Audit',
    desc: 'We review your GitHub, project history, and experience against target hiring partner standards to uncover gaps.',
    icon: Search,
    color: 'text-glow-cyan border-glow-cyan/20'
  },
  {
    step: '02',
    title: 'Custom Skill Mapping',
    desc: 'Recruitment-aligned roadmap designed to quickly teach you the exact tech stack needed for guaranteed clearance.',
    icon: BookOpen,
    color: 'text-glow-solar border-glow-solar/20'
  },
  {
    step: '03',
    title: 'Build & Deploy Sprint',
    desc: 'High-intensity building of production-ready enterprise architectures, simulating real startup sprints.',
    icon: Code,
    color: 'text-glow-gold border-glow-gold/20'
  },
  {
    step: '04',
    title: 'Elite Mock Panels',
    desc: '1-on-1 mock interviews led by tech leaders to bulletproof your technical delivery and systems communication.',
    icon: UserCheck,
    color: 'text-glow-cyan border-glow-cyan/20'
  },
  {
    step: '05',
    title: 'Direct Hiring Placement',
    desc: 'Immediate routing to our exclusive corporate partner pipeline, bypassing generic job portals.',
    icon: Rocket,
    color: 'text-glow-solar border-glow-solar/20'
  }
];

const industries = [
  { name: 'AI & SaaS Platforms', icon: Sparkles, desc: 'Conversational LLMs, workflow agents, vector storage, and integrations.' },
  { name: 'Fintech & Payments', icon: ShieldCheck, desc: 'Secure transaction pipelines, digital ledger engines, and banking APIs.' },
  { name: 'E-Commerce Scale', icon: Zap, desc: 'High-traffic storefronts, global inventory, and recommendation logic.' },
  { name: 'Web3 & Blockchain', icon: Globe2, desc: 'Decentralized contracts, crypto-rail integrations, and identity systems.' },
  { name: 'Edtech & Media', icon: BookOpen, desc: 'Streaming infrastructure, learning analytics, and real-time screens.' },
  { name: 'Enterprise Operations', icon: Briefcase, desc: 'Automated CRM flows, data warehousing, and organizational analytics.' }
];

export default function HiringSolutions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline items entry
      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 75%'
          }
        }
      );

      // Industry cards stagger
      gsap.fromTo('.industry-card',
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.industry-grid',
            start: 'top 80%'
          }
        }
      );

      // Subpage header animation
      gsap.fromTo('.hiring-header-text',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full text-white bg-transparent">
      
      {/* 1. Header Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="hiring-header-text lg:w-1/2 text-left flex flex-col items-start">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black bg-glow-cyan/10 text-glow-cyan px-4 py-2 rounded-full border border-glow-cyan/20 mb-6 inline-block">
            Architecting Elite Careers
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-glow tracking-tighter leading-none">
            Tailored <br className="hidden sm:inline"/> Hiring Solutions.
          </h2>
          <p className="text-lg md:text-2xl text-white font-light max-w-xl leading-relaxed mt-4">
            Connect directly with high-performance positions, or undergo specialized training to guarantee placement.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center w-full relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-glow-cyan/10 to-glow-solar/10 blur-2xl rounded-[2.5rem] opacity-75 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative border border-white/10 rounded-[2.5rem] p-4 bg-background/50 backdrop-blur-xl max-w-[500px] w-full overflow-hidden shadow-2xl pop-hover">
            <img 
              src="/newgenxMain/hiring_hero.png" 
              alt="Hiring Solutions Vector Illustration" 
              className="w-full h-auto rounded-[2rem] object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-500 max-h-[350px] md:max-h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Premium Hiring Cards Section (Migrated and Enhanced) */}
      <section className="py-16 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Free Standard Application Card */}
          <div className="group bg-background/96 border border-white/20 rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between gap-10 pop-hover glow-border relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-glow-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-5 rounded-2xl bg-glow-cyan/5 text-glow-cyan border border-white/10 shadow-inner">
                  <Briefcase size={36} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50 border border-white/10 px-4 py-1.5 rounded-full">
                  Direct Intake
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4 group-hover:text-glow-cyan transition-colors duration-300">
                Standard Application
              </h3>
              
              <div className="inline-block px-6 py-2.5 border border-white/20 bg-white/12 rounded-xl text-2xl md:text-3xl font-black text-white tracking-widest mb-8">
                FREE
              </div>
              
              <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light mb-10">
                Apply for open roles in our network. If your existing skills and portfolio match our engineering standards, you enter our direct placement pool.
              </p>

              <ul className="space-y-4 text-base md:text-lg font-light text-white">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-glow-cyan shrink-0" />
                  <span>Resume & GitHub evaluation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-glow-cyan shrink-0" />
                  <span>Standard coding assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-glow-cyan shrink-0" />
                  <span>Direct matching with active roles</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://wa.me/917303686363?text=Hi%2C%20I%20want%20to%20apply%20for%20the%20Standard%20Application%20at%20NewGenX."
              target="_blank"
              rel="noreferrer"
              className="relative z-10 w-full text-center py-5 border border-white/20 rounded-2xl text-xs uppercase tracking-[0.2em] font-black text-white hover:bg-white hover:text-background hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              Apply via WhatsApp <MessageSquare size={16} />
            </a>
          </div>

          {/* Paid Priority Training Card */}
          <div className="group bg-background/96 border border-glow-solar/60 rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between gap-10 pop-hover hover:border-glow-solar/80 glow-border relative overflow-hidden backdrop-blur-md shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-glow-solar/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-5 rounded-2xl bg-glow-solar/10 text-glow-solar border border-glow-solar/20 shadow-inner">
                  <GraduationCap size={36} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-glow-solar bg-glow-solar/5 border border-glow-solar/20 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,69,0,0.2)]">
                  Guaranteed Path
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-glow-solar">
                Priority Training
              </h3>
              
              <div className="flex items-baseline justify-start px-6 py-2.5 border border-glow-solar/30 bg-glow-solar/10 rounded-xl text-2xl md:text-3xl font-black text-glow-solar tracking-widest mb-8 w-fit shadow-[0_0_30px_rgba(255,69,0,0.15)]">
                ₹15,000 <span className="text-xs text-white/60 font-medium ml-2 uppercase tracking-wide">/ Total</span>
              </div>
              
              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8">
                Targeting a <span className="text-glow-solar font-black">specific role</span>? Get 1-on-1 training and portfolio alignment built to guarantee clearance.
              </p>

              {/* Flexible payment sub-card */}
              <div className="w-full p-6 bg-white/[0.12] border border-white/25 rounded-[1.5rem] flex flex-col gap-4 relative overflow-hidden mb-6">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-glow-solar shadow-[0_0_15px_rgba(255,69,0,0.6)]" />
                <h4 className="font-black tracking-[0.2em] text-white uppercase text-xs">Flexible Payment Plans:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-glow-cyan shadow-[0_0_8px_#00f0ff] shrink-0" />
                    <p className="text-white/80 text-sm leading-relaxed">
                      <strong className="text-white font-bold">Standard:</strong> Full payment once training begins.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-glow-gold shadow-[0_0_8px_#ffcc00] shrink-0" />
                    <p className="text-white/95 text-sm leading-relaxed">
                      <strong className="text-white font-bold">Split Approach:</strong> ₹7,500 upfront, and 50% paid only after your first salary!
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-base md:text-lg font-light text-white">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-glow-solar shrink-0" />
                  <span>Guaranteed clearing or complete refund</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-glow-solar shrink-0" />
                  <span>1-on-1 industry mentorship & code reviews</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-glow-solar shrink-0" />
                  <span>Real enterprise-grade portfolio builds</span>
                </li>
              </ul>
            </div>

            <a 
              href="https://wa.me/917303686363?text=Hi%2C%20I%20want%20to%20enroll%20in%20the%20Priority%20Training%20program%20at%20NewGenX."
              target="_blank"
              rel="noreferrer"
              className="relative z-10 w-full text-center py-5 bg-glow-solar border border-glow-solar rounded-2xl text-xs uppercase tracking-[0.2em] font-black text-background hover:bg-transparent hover:text-glow-solar hover:shadow-[0_0_25px_rgba(255,69,0,0.3)] transition-all duration-500 flex items-center justify-center gap-2"
            >
              Get Started Now <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* 3. Hiring Process Timeline Section */}
      <section className="py-24 px-6 md:px-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-cyan/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-glow tracking-tighter">
              The Placement Journey
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Our step-by-step engineering placement pipeline designed to take you from applicant to hired professional.
            </p>
          </div>

          <div className="timeline-container relative pl-6 md:pl-24 border-l border-white/10 ml-0 md:ml-12 space-y-16">
            {/* GSAP driven connecting line */}
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-glow-cyan via-glow-gold to-glow-solar" />

            {timelineSteps.map((step, idx) => {
               const Icon = step.icon;
               return (
                 <div key={idx} className="timeline-item relative group">
                   {/* Glowing Node Dot */}
                   <div className="absolute w-5 h-5 rounded-full bg-background border-[3px] border-white/30 -left-[34px] md:-left-[106px] top-6 group-hover:border-glow-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 z-10" />
                  
                  {/* Timeline Card */}
                  <div className="bg-white/[0.12] border border-white/20 p-8 rounded-[2rem] pop-hover glow-border transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className={`p-4 rounded-2xl bg-white/5 border ${step.color} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-glow-cyan font-black text-xs uppercase tracking-widest">{step.step}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 text-white group-hover:text-glow-gold transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/95 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Industries Served Section */}
      <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-glow tracking-tighter">
            Target Industries
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            We source and train talents for high-growth sectors looking for elite engineering standards.
          </p>
        </div>

        <div className="industry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className="industry-card group bg-white/[0.12] border border-white/20 p-8 flex flex-col items-start gap-6 pop-hover glow-border rounded-3xl transition-all duration-300"
              >
                <div className={`p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 ${
                  isEven ? 'group-hover:text-glow-cyan group-hover:border-glow-cyan/30' : 'group-hover:text-glow-solar group-hover:border-glow-solar/30'
                }`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-glow-gold transition-colors duration-300">
                  {ind.name}
                </h3>
                <p className="text-white/90 text-base leading-relaxed font-light">
                  {ind.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Strong CTA Section */}
      <section className="py-24 px-6 md:px-24 text-center max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-glow-solar/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="glass-card bg-white/[0.08] p-12 md:p-20 border border-white/20 relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 text-glow tracking-tighter leading-tight">
            Clear Your Target <br /> Role Today.
          </h2>
          <p className="text-lg md:text-xl text-white/95 font-light max-w-2xl leading-relaxed mb-10">
            Let us align your training directly with engineering metrics to bypass typical application queues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
            <a 
              href="#contact" 
              onClick={handleCTAClick}
              className="flex-1 px-8 py-5 border border-glow-cyan/50 text-glow-cyan rounded-2xl text-xs uppercase tracking-widest font-black hover:bg-glow-cyan hover:text-background hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-500"
            >
              Send Application Inquiry
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
