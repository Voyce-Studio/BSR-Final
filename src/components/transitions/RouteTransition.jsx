import React, { useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

export default function RouteTransition({ onTransition }) {
  const location = useLocation();
  const outlet = useOutlet();

  const variants = {
    initial: { opacity: 0, y: 24, filter: 'blur(18px)' },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.3, ease: [0.65, 0.05, 0.36, 1] }
    },
    exit: {
      opacity: 0,
      y: -18,
      filter: 'blur(16px)',
      transition: { duration: 1.1, ease: [0.65, 0.05, 0.36, 1] }
    }
  };

  const scrollToAnchor = useCallback(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.hash, location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={(definition) => {
          if (definition !== 'animate') return;
          scrollToAnchor();
          onTransition?.();
        }}
      >
        <div className="relative">
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'linear-gradient(160deg, rgba(255,255,255,0.08), rgba(168,133,243,0.1), rgba(15,138,131,0.12))',
              mixBlendMode: 'screen',
              filter: 'blur(40px)'
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], opacity: [0.2, 0.45, 0.25] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
          />
          <div className="relative z-10">
            <React.Suspense fallback={<div className="container py-20">Loading…</div>}>
              {outlet}
            </React.Suspense>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
