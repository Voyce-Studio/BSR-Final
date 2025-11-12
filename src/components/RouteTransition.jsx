import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function RouteTransition({ children, onTransition }) {
  const location = useLocation();

  const variants = {
    initial: { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)', filter: 'url(#noiseFilter)' },
    animate: {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      filter: 'none',
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
      opacity: 0,
      clipPath: 'inset(0% 0% 100% 0%)',
      filter: 'url(#noiseFilter)',
      transition: { duration: 0.4, ease: [0.55, 0, 0.45, 1] }
    }
  };

  return (
    <>
      <svg width="0" height="0" aria-hidden focusable="false">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="1 0 1 0" />
          </feComponentTransfer>
        </filter>
      </svg>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationComplete={() => onTransition?.()}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
