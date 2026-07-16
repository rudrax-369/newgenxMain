import { useEffect, useRef } from 'react';
import { Code2, Bot, LineChart, TrendingUp, UserCheck, Users } from 'lucide-react';
import gsap from 'gsap';

const services = [
  { 
    title: 'Engineering & Development', 
    icon: Code2, 
    color: 'group-hover:text-glow-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]',
    desc: 'Scalable Full Stack Development, robust APIs, database design, and high-performance Web & Mobile applications.'
  },
  { 
    title: 'AI & Automation Systems', 
    icon: Bot, 
    color: 'group-hover:text-glow-solar group-hover:shadow-[0_0_20px_rgba(255,69,0,0.3)]',
    desc: 'Integrating AI workflows (LLMs, GPT) and automation pipelines using n8n & Make.com to eliminate manual work.'
  },
  { 
    title: 'Data & Analytics', 
    icon: LineChart, 
    color: 'group-hover:text-glow-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]',
    desc: 'Actionable business intelligence, Tableau dashboards, funnel analytics, and data-driven decision making.'
  },
  { 
    title: 'Growth Engineering', 
    icon: TrendingUp, 
    color: 'group-hover:text-glow-solar group-hover:shadow-[0_0_20px_rgba(255,69,0,0.3)]',
    desc: 'Lead generation systems, automated outreach pipelines, conversion optimization, and end-to-end growth scaling.'
  },
  { 
    title: 'Tech Talent Sourcing', 
    icon: UserCheck, 
    color: 'group-hover:text-glow-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]',
    desc: 'Connecting you with pre-vetted, high-quality engineers, developers, and tech specialists perfectly matched to your stack.'
  },
  { 
    title: 'Non-Tech Placements', 
    icon: Users, 
    color: 'group-hover:text-glow-solar group-hover:shadow-[0_0_20px_rgba(255,69,0,0.3)]',
    desc: 'Scaling your enterprise with skilled professionals across management, marketing, sales, and core operational roles.'
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { opacity: 0, scale: 0.85, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-20 lg:py-32 px-6 md:px-24 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full glass-card p-8 md:p-16 lg:p-20 border border-white/15 relative group">
        {/* Ambient Glow inside card */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-glow-cyan/5 blur-[100px] rounded-full group-hover:bg-glow-cyan/10 transition-colors duration-1000 pointer-events-none" />
        
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black mb-16 text-center tracking-tighter text-glow relative z-10 leading-none">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                className="service-card group bg-white/[0.07] border border-white/12 p-6 md:p-8 flex flex-col items-start gap-6 pop-hover glow-border rounded-3xl transition-all duration-300"
              >
                <div className={`p-4 rounded-xl glass transition-all duration-500 group-hover:scale-110 ${service.color}`}>
                  <Icon size={32} className="opacity-100" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-wide group-hover:text-glow-cyan transition-colors duration-300">{service.title}</h3>
                <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
