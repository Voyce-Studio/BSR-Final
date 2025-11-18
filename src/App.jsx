import React, { useMemo, useRef } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import RouteTransition from './components/transitions/RouteTransition';
import ErrorBoundary from './components/layout/ErrorBoundary';
import ScrollbarStyles from './components/layout/ScrollbarStyles';
import AppShell from './components/layout/AppShell';
import SiteChrome from './components/layout/SiteChrome';
import VantaBackground from './components/visuals/VantaBackground';

const paletteSequence = [
  {
    match: (path) => path === '/',
    vanta: { highlightColor: 0xfad6ff, midtoneColor: 0x7cc9ff, lowlightColor: 0x040112 },
    overlay: 'radial-gradient(circle at 45% 30%, rgba(250,214,255,0.25), transparent 65%)'
  },
  {
    match: (path) => path.startsWith('/artists'),
    vanta: { highlightColor: 0xf5d0ff, midtoneColor: 0x8cc8ff, lowlightColor: 0x030015 },
    overlay: 'radial-gradient(circle at 40% 25%, rgba(245,208,255,0.32), transparent 65%)'
  },
  {
    match: (path) => path.startsWith('/releases') || path.startsWith('/catalogue'),
    vanta: { highlightColor: 0xffc89f, midtoneColor: 0xff9ddb, lowlightColor: 0x020005 },
    overlay: 'radial-gradient(circle at 60% 20%, rgba(255,200,159,0.32), transparent 68%)'
  },
  {
    match: (path) => path.startsWith('/events') || path.startsWith('/contact'),
    vanta: { highlightColor: 0xc6f4ff, midtoneColor: 0x6ac5ff, lowlightColor: 0x01000f },
    overlay: 'radial-gradient(circle at 30% 30%, rgba(198,244,255,0.28), transparent 65%)'
  },
  {
    match: () => true,
    vanta: { highlightColor: 0xfad6ff, midtoneColor: 0x7cc9ff, lowlightColor: 0x040112 },
    overlay: 'radial-gradient(circle at 50% 30%, rgba(122,200,255,0.2), transparent 65%)'
  }
];

export default function App() {
  const navRef = useRef(null);
  const location = useLocation();
  const palette = useMemo(() => paletteSequence.find((item) => item.match(location.pathname)) ?? paletteSequence.at(-1), [location.pathname]);

  const hideChrome = location.pathname === '/404';

  return (
    <HelmetProvider>
      <ScrollbarStyles />
      <div className="relative min-h-screen overflow-hidden bg-black text-white scrollbar-minimal">
        <VantaBackground className="absolute inset-0" options={palette.vanta} interactions={{ respondToScroll: true, oscillateSpeed: true }} />
        <AnimatePresence mode="wait">
          <motion.div
            key={palette.overlay}
            className="pointer-events-none absolute inset-0"
            style={{ background: palette.overlay }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            aria-hidden
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#050111]" aria-hidden />
        <SiteChrome className="text-white">
          {!hideChrome && <Navbar ref={navRef} />}
          <ErrorBoundary>
            <AppShell className="pb-20">
              <RouteTransition onTransition={() => navRef.current?.triggerGlisten?.()} />
            </AppShell>
          </ErrorBoundary>
          {!hideChrome && <Footer />}
        </SiteChrome>
      </div>
    </HelmetProvider>
  );
}
