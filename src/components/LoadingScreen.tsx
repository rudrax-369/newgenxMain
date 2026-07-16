import { useEffect, useState } from 'react';
import gsap from 'gsap';

const FANCY_PHRASES = [
  "Bending Gravity...",
  "Structuring Data Pipelines...",
  "Calibrating Neural Link...",
  "Compiling Growth Matrix...",
  "Initializing NewGenX Protocol..."
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % FANCY_PHRASES.length);
    }, 450);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.loading-screen', {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          onComplete,
        });
      },
    });

    tl.to(
      { p: 0 },
      {
        p: 100,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: function () {
          setProgress(Math.round(this.targets()[0].p));
        },
      }
    );

    return () => {
      tl.kill();
      clearInterval(phraseInterval);
    };
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background text-white">
      <div className="text-6xl md:text-8xl font-bold tracking-tighter text-white" style={{textShadow: '0 0 30px rgba(0,240,255,0.7), 0 0 60px rgba(0,240,255,0.3)'}}>
        {progress}%
      </div>
      
      <div className="mt-6 w-72 md:w-96 h-[2px] bg-white/10 overflow-hidden relative rounded-full">
        <div 
          className="absolute top-0 left-0 h-full bg-glow-cyan shadow-[0_0_15px_#00f0ff]"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-8 text-xs md:text-sm uppercase tracking-[0.2em] text-white min-h-[20px] font-mono text-center">
        {FANCY_PHRASES[phraseIndex]}
      </div>
    </div>
  );
}
