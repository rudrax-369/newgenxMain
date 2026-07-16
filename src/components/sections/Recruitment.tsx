import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Recruitment() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.recruit-wrapper',
        { opacity: 0, scale: 0.8, y: 80 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-20 lg:py-32 px-6 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full recruit-wrapper">
        <div className="glass-card p-6 md:p-16 lg:p-24 relative overflow-hidden flex flex-col items-center border border-glow-cyan/20">
          {/* Ambient Lighting Backgrounds inside the Card */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glow-cyan/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glow-solar/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="text-center mb-10 md:mb-16 relative z-10 w-full">
            <h2 className="text-[clamp(2.5rem,8vw,7.5rem)] font-black mb-6 text-glow tracking-tighter leading-none">
              We're Hiring.
            </h2>
            <p className="text-lg md:text-3xl lg:text-4xl text-white font-light max-w-4xl mx-auto leading-relaxed">
              Recruitment & Profile Training perfectly tailored to your ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10 w-full">
            
            {/* Non Paid Option */}
            <div className="group bg-background/40 border border-white/10 rounded-[2rem] p-6 md:p-14 flex flex-col items-start gap-6 md:gap-8 pop-hover glow-border relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-glow-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 p-4 md:p-6 rounded-2xl glass transition-all duration-500 group-hover:text-glow-cyan bg-glow-cyan/5 shadow-inner">
                <Briefcase size={32} className="md:w-14 md:h-14 opacity-100" />
              </div>
              <div className="relative z-10 w-full">
                <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-4 md:mb-6 group-hover:text-glow-cyan transition-colors duration-300">Standard Application</h3>
                <div className="inline-block px-4 py-2 md:px-6 md:py-3 border border-white/20 bg-white/5 rounded-xl text-xl md:text-3xl font-black text-white tracking-widest mb-6 md:mb-8">
                  FREE
                </div>
                <p className="text-base md:text-xl text-white leading-relaxed font-light">
                  Apply for any of our available roles. If your existing skills and portfolio match our engineering standards, you proceed directly to our placement pipeline.
                </p>
              </div>
            </div>

            {/* Paid Option */}
            <div className="group bg-background/40 border border-white/10 rounded-[2rem] p-6 md:p-14 flex flex-col items-start gap-6 md:gap-8 pop-hover hover:border-glow-solar/50 glow-border relative overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-glow-solar/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 p-4 md:p-6 rounded-2xl glass transition-all duration-500 group-hover:text-glow-solar bg-glow-solar/5 shadow-inner">
                <GraduationCap size={32} className="md:w-14 md:h-14 opacity-100" />
              </div>
              <div className="relative z-10 w-full">
                <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-4 md:mb-6 text-glow-solar">Priority Training</h3>
                <div className="flex w-full sm:inline-flex items-baseline justify-center sm:justify-start px-6 py-3 border border-glow-solar/40 bg-glow-solar/10 rounded-xl text-xl md:text-3xl font-black text-glow-solar tracking-widest mb-6 shadow-[0_0_40px_rgba(255,69,0,0.3)]">
                  ₹15,000 <span className="text-xs md:text-base text-white font-medium ml-2 uppercase tracking-wide">/ Total</span>
                </div>
                <p className="text-base md:text-xl text-high-contrast leading-relaxed mb-8">
                  Aiming for a <span className="text-glow-solar font-black">specific profile</span>? We will personally train you on the required skills specifically tailored to <span className="text-glow-cyan font-black">guarantee</span> you clear the position. 
                </p>

                <div className="w-full p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] flex flex-col gap-4 md:gap-6 relative overflow-hidden transition-all duration-500 group-hover:bg-white/[0.08]">
                  <div className="absolute top-0 left-0 w-1 h-full bg-glow-solar shadow-[0_0_15px_rgba(255,69,0,0.6)]"></div>
                  <h4 className="font-black tracking-[0.2em] text-white uppercase text-xs md:text-sm">Flexible Payment Plans :</h4>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-glow-cyan shadow-[0_0_10px_#00f0ff] shrink-0"></div>
                    <p className="text-white font-light leading-relaxed text-base md:text-lg">
                      <strong className="text-white tracking-wide font-black">Standard:</strong> ₹15,000 paid upfront once training begins.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-glow-gold shadow-[0_0_10px_#ffcc00] shrink-0"></div>
                    <p className="text-white font-light leading-relaxed text-base md:text-lg">
                      <strong className="text-white tracking-wide font-black">Split Approach:</strong> 
                      ₹7,500 upfront after offer letter, and the remaining 50% paid only after your first salary!
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
