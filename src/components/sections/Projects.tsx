import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const projects = [
  { title: 'Project Nexus', num: '01' },
  { title: 'Aura Protocol', num: '02' },
  { title: 'Cybernetic UI', num: '03' },
  { title: 'Gravity Engine', num: '04' },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.project-card');
      
      // Only run horizontal scroll on desktop
      if (window.innerWidth > 1024) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: true,
            snap: 1 / (sections.length - 1),
            end: () => '+=' + scrollWrapperRef.current?.offsetWidth,
          }
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full lg:h-screen overflow-hidden lg:overflow-visible bg-background/50 backdrop-blur-sm py-20 lg:py-0">
      <div className="absolute top-12 left-6 md:left-24 z-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-white">Featured Work</h2>
      </div>
      
      <div ref={scrollWrapperRef} className="h-full flex flex-col lg:flex-nowrap lg:flex-row items-center justify-center gap-12 lg:gap-0 lg:pt-20 px-6 md:px-24">
        {projects.map((proj, i) => {
          const isEven = i % 2 === 0;
          const accentClass = isEven ? 'group-hover:text-glow-cyan' : 'group-hover:text-glow-solar';
          const bgGlow = isEven ? 'from-glow-cyan/50' : 'from-glow-solar/50';
          const underlineClass = isEven ? 'bg-glow-cyan' : 'bg-glow-solar';

          return (
            <div key={i} className="project-card w-full lg:w-[50vw] h-[50vh] lg:h-[60vh] shrink-0 lg:mr-24 relative group cursor-pointer perspective-[1000px]">
              <div className="w-full h-full glass-card border-none bg-gradient-to-br from-white/10 to-transparent overflow-hidden relative transition-all duration-700 transform-style-3d lg:group-hover:rotate-y-12 lg:group-hover:scale-[1.05] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                {/* Abstract decorative background */}
                <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${bgGlow} via-background to-background scale-150 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-40 mix-blend-screen`} />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-between z-10 translate-z-[50px]">
                  <span className={`text-6xl font-black text-white transition-all duration-500 ${isEven ? 'group-hover:text-glow-cyan' : 'group-hover:text-glow-solar'}`}>
                    {proj.num}
                  </span>
                  
                  <div>
                    <h3 className={`text-4xl md:text-6xl font-black mb-6 transition-all duration-300 ${accentClass}`}>
                      {proj.title}
                    </h3>
                    <div className={`h-[2px] w-0 ${underlineClass} group-hover:w-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(0,240,255,0.3)]`} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
