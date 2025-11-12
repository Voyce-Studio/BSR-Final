import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function RouteTransition({ children, onTransition }) {
  const location = useLocation();

  const variants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 1.01, transition: { duration: 0.25, ease: 'easeIn' } }
  };

  return (
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
  );
}
