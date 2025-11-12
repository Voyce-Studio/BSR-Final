import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouteTransition from './components/RouteTransition';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollbarStyles from './components/ScrollbarStyles';
import AppShell from './components/AppShell';
import NeonWaveBackground from './components/NeonWaveBackground';
import SiteChrome from './components/SiteChrome';

export default function App() {
  const navRef = useRef(null);

  return (
    <HelmetProvider>
      <ScrollbarStyles />
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-[#f3f4f6] text-slate-900 scrollbar-minimal">
        <NeonWaveBackground className="pointer-events-none absolute inset-0 opacity-60" />
        <SiteChrome>
          <Navbar ref={navRef} />
          <ErrorBoundary>
            <AppShell className="pb-20">
              <RouteTransition onTransition={() => navRef.current?.triggerGlisten?.()}>
                <React.Suspense fallback={<div className="container py-20">Loading…</div>}>
                  <Outlet />
                </React.Suspense>
              </RouteTransition>
            </AppShell>
          </ErrorBoundary>
          <Footer />
        </SiteChrome>
      </div>
    </HelmetProvider>
  );
}
