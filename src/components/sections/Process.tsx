import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const experiences = [
  { 
    num: '2023 - Present', 
    title: 'Full Stack & Mobile App Architect', 
    desc: 'Engineering scalable web and Flutter mobile applications with robust backend infrastructure. Delivering high-performance solutions optimized for user retention and business metrics.' 
  },
  { 
    num: '2022 - 2023', 
    title: 'Growth Engineer & Tech Strategist', 
    desc: 'Designed and deployed automated B2B lead generation pipelines. Integrated scalable scraping and targeting systems that directly driven quantifiable customer acquisition and revenue.' 
  },
  { 
    num: '2021 - 2022', 
    title: 'Data & Automation Specialist', 
    desc: 'Built interconnected automation architectures via n8n and Make.com. Designed comprehensive analytics dashboards to monitor KPIs, streamlining real-world business operations.' 
  },
  { 
    num: 'Current Focus', 
    title: 'Talent Placement & Mentorship', 
    desc: 'Connecting enterprises with pre-vetted Tech and Non-Tech talent. Providing rigorous, specialized paid training programs for candidates targeting highly-competitive profile roles.' 
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.process-step');
      
      gsap.fromTo(items,
        { opacity: 0, scale: 0.8, x: -80 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
      
      gsap.fromTo('.process-line',
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-20 lg:py-32 px-6 md:px-24 flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full glass-card p-8 md:p-16 lg:p-20 border border-white/15 relative group">
        {/* Ambient Glow inside card */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-glow-gold/10 blur-[100px] rounded-full group-hover:bg-glow-gold/20 transition-colors duration-1000 pointer-events-none" />
        
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black mb-16 md:mb-20 tracking-tighter text-glow text-center md:text-left relative z-10 leading-none">
          Projects & Work
        </h2>
        
        <div className="relative pl-10 md:pl-20 border-l border-white/10 ml-2 md:ml-0 relative z-10">
          <div className="process-line absolute top-0 left-0 w-[2px] bg-gradient-to-b from-glow-cyan via-glow-gold to-glow-solar origin-top" />
          
          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="process-step relative group cursor-default">
                {/* Timeline Dot */}
                <div className="absolute w-5 h-5 rounded-full bg-background border-[3px] border-white/30 -left-[49.5px] md:-left-[89.5px] top-12 group-hover:border-glow-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 z-10" />
                
                {/* Timeline Content Item */}
                <div className="bg-white/[0.06] border border-white/10 p-8 md:p-12 rounded-[2rem] pop-hover glow-border transition-all duration-300 relative overflow-hidden group/item">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="text-xs font-black uppercase tracking-[0.3em] text-glow-cyan mb-6 opacity-100 flex items-center gap-4">
                      <span className="h-px w-12 bg-glow-cyan/50" />
                      {exp.num}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-white group-hover:text-glow-solar transition-colors duration-300 leading-none">
                      {exp.title}
                    </h3>
                    <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
