import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/releases', label: 'Releases' },
  { to: '/artists', label: 'Artists' },
  { to: '/events', label: 'Events' },
  { to: '/mixes', label: 'Mixes' },
  { to: '/submissions', label: 'Submissions' }
];

const Navbar = forwardRef(function Navbar(_, ref) {
  const controls = useAnimationControls();
  const glistenTimeout = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useImperativeHandle(ref, () => ({
    triggerGlisten: () => {
      window.clearTimeout(glistenTimeout.current);
      controls.start({ x: ['-120%', '120%'] });
      glistenTimeout.current = setTimeout(() => controls.stop(), 600);
    }
  }));

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 px-4 pt-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white/90 px-6 py-3 text-slate-900 shadow-[0_15px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <div className="relative flex items-center gap-4 pr-6">
            <motion.img
              src="/logo.svg"
              alt="Bliss Sound Records"
              className="h-14 w-auto drop-shadow-[0_10px_25px_rgba(15,23,42,0.25)]"
              onHoverStart={() => setIsLogoHovered(true)}
              onHoverEnd={() => setIsLogoHovered(false)}
              animate={{
                filter: isLogoHovered ? 'grayscale(0) saturate(1.4)' : 'brightness(0) contrast(1.2)',
                transition: { duration: 0.6, ease: 'easeInOut' }
              }}
            />
            <motion.span
              className="pointer-events-none absolute inset-y-1 left-0 w-16 rounded-full bg-gradient-to-r from-bsr-lilac/60 via-bsr-blue/50 to-bsr-orange/50 blur"
              initial={{ opacity: 0, x: '-120%' }}
              animate={controls}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </div>
          <div className="hidden lg:flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em]">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  clsx('px-3 py-1 border-b-2 transition-colors text-slate-500', {
                    'border-slate-900 text-slate-900': isActive,
                    'border-transparent hover:border-slate-400 hover:text-slate-800': !isActive
                  })
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            className="lg:hidden rounded-full border border-slate-300 px-5 py-2 uppercase text-xs tracking-[0.3em] text-slate-700"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
          >
            Menu
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 mobile-modal-overlay text-slate-900 flex flex-col items-center justify-center gap-6 backdrop-blur-2xl bg-white/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="text-2xl uppercase tracking-[0.4em]"
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              className="mt-6 px-6 py-3 rounded-full border border-slate-300 uppercase text-xs tracking-[0.3em] text-slate-700"
              onClick={closeMenu}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;
