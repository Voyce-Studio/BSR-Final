import React, { useRef } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import RouteTransition from './components/transitions/RouteTransition';
import ErrorBoundary from './components/layout/ErrorBoundary';
import ScrollbarStyles from './components/layout/ScrollbarStyles';
import AppShell from './components/layout/AppShell';
import SiteChrome from './components/layout/SiteChrome';
import VantaBackground from './components/visuals/VantaBackground';

export default function App() {
  const navRef = useRef(null);

  return (
    <HelmetProvider>
      <ScrollbarStyles />
      <div className="relative min-h-screen overflow-hidden bg-black text-white scrollbar-minimal">
        <VantaBackground className="absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-[#050111]" aria-hidden />
        <SiteChrome className="text-white">
          <Navbar ref={navRef} />
          <ErrorBoundary>
            <AppShell className="pb-20">
              <RouteTransition onTransition={() => navRef.current?.triggerGlisten?.()} />
            </AppShell>
          </ErrorBoundary>
          <Footer />
        </SiteChrome>
      </div>
    </HelmetProvider>
  );
}
