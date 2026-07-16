import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Globe2 } from 'lucide-react';

const deliveries = [
  {
    title: 'IBA - International Boxing Association',
    desc: 'Official global platform for the International Boxing Association, serving millions of fans and athletes worldwide.',
    link: 'https://www.iba.sport/',
    type: 'Global Confederation'
  },
  {
    title: 'Boxing Federation of India',
    desc: 'The national governing body for Olympic Boxing in India, managing elite athletes and national tournaments.',
    link: 'https://boxingfederation.in/',
    type: 'National Federation'
  },
  {
    title: 'We Founder Circle',
    desc: 'A global community of successful founders & strategic angels leveraging tech to invest in early-stage startups.',
    link: 'https://wefoundercircle.com/',
    type: 'Investment Network'
  },
  {
    title: 'Elive Networks - Dynamic Platform',
    desc: 'Specialized web application featuring social integration and dynamic content management for the Elive network community.',
    link: 'https://gkwsca.web.app/',
    type: 'Digital Network'
  }
];

export default function Deliveries() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.delivery-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
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
    <section ref={containerRef} className="relative w-full py-20 lg:py-32 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full glass-card p-8 md:p-16 lg:p-20 border border-white/15 relative group">
        {/* Ambient Glow inside card */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-cyan/5 blur-[120px] rounded-full group-hover:bg-glow-cyan/10 transition-colors duration-1000 pointer-events-none" />
        
        <div className="flex flex-col items-center mb-20 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-8 text-glow tracking-tighter leading-none">
            Proven Impact.
          </h2>
          <p className="text-xl md:text-3xl text-white font-light max-w-3xl leading-relaxed">
            A selection of global platforms and high-performance systems engineering for industry-leading organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
          {deliveries.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const accentClass = isEven ? 'text-glow-cyan' : 'text-glow-solar';
            const bgAccentClass = isEven ? 'bg-glow-cyan/10' : 'bg-glow-solar/10';
            const borderAccentClass = isEven ? 'border-white/5 group-hover:border-glow-cyan/30' : 'border-white/5 group-hover:border-glow-solar/30';

            return (
              <a 
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`delivery-card group bg-white/[0.07] p-10 md:p-12 flex flex-col gap-8 pop-hover grow-border relative overflow-hidden rounded-[2rem] border ${borderAccentClass}`}
              >
                <div className="flex justify-between items-start relative z-10">
                  <div className={`p-4 rounded-2xl ${bgAccentClass} ${accentClass} border border-white/10 shadow-inner`}>
                    <Globe2 size={28} />
                  </div>
                  <div className={`text-white group-hover:${accentClass} transition-colors duration-300`}>
                    <ExternalLink size={24} />
                  </div>
                </div>

                <div className="relative z-10">
                  <span className={`text-[10px] uppercase tracking-[0.4em] font-black mb-4 block opacity-100 ${accentClass}`}>
                    {item.type}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6 group-hover:text-white transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative background glow */}
                <div className={`absolute -bottom-24 -right-24 w-64 h-64 blur-[100px] rounded-full transition-colors duration-700 ${isEven ? 'bg-glow-cyan/5 group-hover:bg-glow-cyan/10' : 'bg-glow-solar/5 group-hover:bg-glow-solar/10'}`} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
