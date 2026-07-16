import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function OrbitalRings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweensRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create animations and store references
      const t1 = gsap.to('.ring-outer', { rotation: 360, duration: 25, repeat: -1, ease: 'linear', transformOrigin: '50% 50%' });
      const t2 = gsap.to('.ring-inner', { rotation: -360, duration: 15, repeat: -1, ease: 'linear', transformOrigin: '50% 50%' });
      const t3 = gsap.to('.pulse-circle', { scale: 1.1, opacity: 0.3, duration: 2, yoyo: true, repeat: -1, ease: 'power1.inOut', transformOrigin: '50% 50%' });
      
      tweensRef.current = [t1, t2, t3];

      // Global Parallax Slowing Effect
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        // Calculate mouse position relative to center of screen
        const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 40;

        // Apply slight magnetic hovering effect (parallax)
        gsap.to(containerRef.current, {
          x: xPos,
          y: yPos,
          duration: 1.5,
          ease: 'power3.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    // Slowing Effect perfectly triggered on hover
    gsap.to(tweensRef.current, { timeScale: 0.2, duration: 1.5, ease: 'power2.out' });
    gsap.to(containerRef.current, { scale: 1.05, duration: 1, ease: 'power3.out' });
  };

  const handleMouseLeave = () => {
    // Return to normal speed
    gsap.to(tweensRef.current, { timeScale: 1, duration: 1.5, ease: 'power2.out' });
    gsap.to(containerRef.current, { scale: 1, duration: 1, ease: 'power3.out' });
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full cursor-crosshair pointer-events-auto transition-opacity"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 filter drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
        <circle className="pulse-circle" cx="100" cy="100" r="40" fill="#00f0ff" opacity="0.1" />
        <circle className="ring-inner" cx="100" cy="100" r="50" fill="none" stroke="#b026ff" strokeWidth="1.5" strokeDasharray="10 20 60 10" />
        <circle className="ring-outer" cx="100" cy="100" r="85" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="40 50" />
        <circle className="ring-outer" cx="100" cy="100" r="70" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 12" opacity="0.5" />
        <circle cx="100" cy="100" r="2" fill="#fff" />
        <path d="M 100 -10 L 100 20 M 100 180 L 100 210 M -10 100 L 20 100 M 180 100 L 210 100" stroke="#fff" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
}

export function TechGrid() {
  return (
    <svg className="absolute inset-0 w-full h-[150%] opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00f0ff" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

export function AbstractNodes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.node-link', { strokeDashoffset: 0, duration: 4, repeat: -1, ease: 'power1.inOut', yoyo: true });
      gsap.to('.node-point', { y: -15, duration: 2.5, repeat: -1, ease: 'sine.inOut', yoyo: true, stagger: 0.3 });

      // Subtle parallax for nodes too
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const xPos = (e.clientX / window.innerWidth - 0.5) * -30;
        const yPos = (e.clientY / window.innerHeight - 0.5) * -30;
        gsap.to(containerRef.current, { x: xPos, y: yPos, duration: 2, ease: 'power3.out' });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full pointer-events-none">
      <svg viewBox="0 0 300 300" className="w-full h-full opacity-60 filter drop-shadow-[0_0_10px_rgba(176,38,255,0.4)]">
        <path className="node-link" d="M 30 270 L 150 150 L 250 200 L 290 30" fill="none" stroke="#00f0ff" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" />
        <circle className="node-point" cx="30" cy="270" r="8" fill="#b026ff" />
        <circle className="node-point" cx="150" cy="150" r="10" fill="#fff" />
        <circle className="node-point" cx="250" cy="200" r="6" fill="#00f0ff" />
        <circle className="node-point" cx="290" cy="30" r="8" fill="#b026ff" />
        
        {/* Decorative scanning rings around nodes */}
        <circle className="node-point" cx="150" cy="150" r="20" fill="none" stroke="#00f0ff" strokeWidth="0.5" strokeDasharray="2 4" />
      </svg>
    </div>
  );
}
