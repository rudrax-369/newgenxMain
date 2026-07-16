import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';

import Process from './components/sections/Process';
import Deliveries from './components/sections/Deliveries';
import Contact from './components/sections/Contact';
import BackedBy from './components/sections/BackedBy';

// Lazy load heavy components for better initial load performance
const Scene = lazy(() => import('./three/Scene'));
const HiringSolutions = lazy(() => import('./components/sections/HiringSolutions'));
const ValueWeDeliver = lazy(() => import('./components/sections/ValueWeDeliver'));

gsap.registerPlugin(ScrollTrigger);

// The Vite base path — must match vite.config.ts `base`
const BASE = '/newgenxMain';

// Strips the base prefix so we get a clean route like '/', '/hiring-solutions' etc.
function getRoute(): string {
  const raw = window.location.pathname;
  const stripped = raw.startsWith(BASE) ? raw.slice(BASE.length) : raw;
  // Normalise: '/newgenx/' → '/', '/newgenx' → '/'
  return stripped === '' ? '/' : stripped;
}

// Lenis options tuned for a premium, buttery-smooth scroll feel
const LENIS_OPTIONS = {
  lerp: 0.1,
  smoothWheel: true,
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

function App() {
  const [loading, setLoading] = useState(true);
  const [currentRoute, setCurrentRoute] = useState(getRoute());

  // Detect touch device once — no re-render needed
  const isTouch = useMemo(() =>
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0),
  []);

  useEffect(() => {
    const handleLocationChange = () => {
      const route = getRoute();
      setCurrentRoute(route);

      // If we returned to home and have a pending scroll target, execute it
      if (route === '/') {
        setTimeout(() => {
          const target = sessionStorage.getItem('scrollTarget');
          if (target) {
            sessionStorage.removeItem('scrollTarget');
            const element = document.getElementById(target.replace('#', ''));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 150);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const isHome         = currentRoute === '/';
  const isHiring       = currentRoute === '/hiring-solutions';
  const isValueDeliver = currentRoute === '/value-we-deliver';

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      {!loading && (
        <>
          {/* Custom cursor is meaningless on touch devices */}
          {!isTouch && <Cursor />}
          <Navbar currentRoute={currentRoute} />
        </>
      )}

      <div className="relative w-full min-h-screen bg-background text-white selection:bg-glow-purple">
        {/* Fixed 3D Canvas Background - Lazy loaded */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={<div className="w-full h-full bg-background" />}>
            <Scene />
          </Suspense>
        </div>

        {/* Scrollable Content */}
        <ReactLenis root options={LENIS_OPTIONS}>
          <main className="relative z-10 w-full overflow-x-hidden overflow-y-visible">
            {/* Home page sections — Hero, About, Services, Projects, Deliveries */}
            {isHome && (
              <>
                <Hero />
                <BackedBy />
                <div id="about"><About /></div>

                <div id="projects"><Process /></div>
                <div id="deliveries"><Deliveries /></div>
              </>
            )}

            {/* Subpage: Hiring Solutions - Lazy loaded */}
            {isHiring && (
              <Suspense fallback={
                <div className="min-h-screen w-full flex items-center justify-center bg-transparent">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-glow-cyan" />
                </div>
              }>
                <HiringSolutions />
              </Suspense>
            )}

            {/* Subpage: Value We Deliver - Lazy loaded */}
            {isValueDeliver && (
              <Suspense fallback={
                <div className="min-h-screen w-full flex items-center justify-center bg-transparent">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-glow-solar" />
                </div>
              }>
                <ValueWeDeliver />
              </Suspense>
            )}

            {/* Footer / Contact — always present on every page */}
            <div id="contact"><Contact /></div>
          </main>
        </ReactLenis>
      </div>
    </>
  );
}

export default App;
