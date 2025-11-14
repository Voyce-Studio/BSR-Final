import React, { useRef } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import RouteTransition from './components/transitions/RouteTransition';
import ErrorBoundary from './components/layout/ErrorBoundary';
import ScrollbarStyles from './components/layout/ScrollbarStyles';
import AppShell from './components/layout/AppShell';
import NeonWaveBackground from './components/visuals/NeonWaveBackground';
import SiteChrome from './components/layout/SiteChrome';

export default function App() {
  const navRef = useRef(null);

  return (
    <HelmetProvider>
      <ScrollbarStyles />
      <div className="relative min-h-screen overflow-hidden bg-black text-white scrollbar-minimal">
        <NeonWaveBackground className="pointer-events-none absolute inset-0 opacity-20" />
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
