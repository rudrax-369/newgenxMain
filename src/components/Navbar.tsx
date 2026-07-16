import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigate } from '../utils/router';

export default function Navbar({ currentRoute }: { currentRoute: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hiring', href: '/hiring-solutions' },
    { name: 'Value We Deliver', href: '/value-we-deliver' },
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        sessionStorage.setItem('scrollTarget', href);
        navigate('/');
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || isOpen
            ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-white">
          <a 
            href="/" 
            className="flex items-center gap-2 group" 
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
          >
            <span className="text-xl md:text-2xl font-black uppercase tracking-[0.3em] transition-all duration-300 group-hover:tracking-[0.4em]">
              NewGen<span className="text-glow-cyan">X</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                  currentRoute === link.href
                    ? 'text-glow-cyan font-bold'
                    : 'text-white hover:text-glow-cyan'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick('#contact', e)}
              className="px-6 py-2.5 border border-glow-solar/30 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white hover:bg-glow-solar hover:border-glow-solar hover:text-background hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-500"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-glow-cyan transition-colors touch-manipulation"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-background/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-20px]'
      }`}>
        <div className="h-full flex flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, idx) => {
            const isEven = idx % 2 === 0;
            const accentClass = isEven ? 'hover:text-glow-cyan' : 'hover:text-glow-solar';
            const isActive = currentRoute === link.href;
            return (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
                className={`text-2xl font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive ? 'text-glow-cyan scale-110' : 'text-white'
                } hover:scale-110 ${accentClass}`}
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href="#contact"
            onClick={(e) => handleLinkClick('#contact', e)}
            className="mt-8 px-10 py-4 border border-glow-solar/50 rounded-full text-sm uppercase tracking-widest text-glow-solar hover:bg-glow-solar hover:text-background transition-all duration-500 shadow-[0_0_20px_rgba(255,69,0,0.2)]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}
