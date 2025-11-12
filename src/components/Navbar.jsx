import React, { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import logoMark from '../assets/images/logo.svg';

const links = [
  { to: '/releases', label: 'Releases' },
  { to: '/artists', label: 'Artists' },
  { to: '/events', label: 'Events' },
  { to: '/mixes', label: 'Mixes' },
  { to: '/submissions', label: 'Submissions' },
  { to: '/contact', label: 'Contact' }
];

const colorCycles = [
  ['rgba(255,201,255,0.35)', 'rgba(120,149,255,0.25)'],
  ['rgba(255,180,120,0.35)', 'rgba(255,99,146,0.3)'],
  ['rgba(120,255,220,0.35)', 'rgba(76,110,255,0.25)'],
  ['rgba(255,255,255,0.35)', 'rgba(176,133,255,0.35)']
];

const Navbar = forwardRef(function Navbar(_, ref) {
  const controls = useAnimationControls();
  const glistenTimeout = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [gradientOrigin, setGradientOrigin] = useState({ x: 50, y: 50 });
  const [cycleIndex, setCycleIndex] = useState(0);

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

  useEffect(() => {
    if (!isNavHovered) return;
    const id = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % colorCycles.length);
    }, 1300);
    return () => clearInterval(id);
  }, [isNavHovered]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGradientOrigin({ x, y });
  };
  const gradientColors = colorCycles[cycleIndex];

  return (
    <>
      <header className="sticky top-0 z-40 px-4 pt-4">
        <nav
          className={clsx(
            'relative mx-auto flex max-w-5xl items-center justify-between gap-6 overflow-hidden rounded-2xl border px-6 py-3 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500',
            isNavHovered ? 'border-white/15 bg-slate-950/75 text-white' : 'border-white/10 bg-slate-900/50 text-white/90'
          )}
          onMouseEnter={() => setIsNavHovered(true)}
          onMouseLeave={() => setIsNavHovered(false)}
          onMouseMove={handleNavMouseMove}
        >
          <span
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: isNavHovered ? 1 : 0,
              background: `radial-gradient(circle at ${gradientOrigin.x}% ${gradientOrigin.y}%, ${gradientColors[0]}, transparent 60%), radial-gradient(circle at ${gradientOrigin.x}% ${gradientOrigin.y}%, ${gradientColors[1]}, transparent 75%)`
            }}
          />
          <Link to="/" className="relative flex items-center gap-4 pr-6" aria-label="Bliss Sound Records home">
            <motion.img
              src={logoMark}
              alt="Bliss Sound Records"
              className="h-14 w-auto drop-shadow-[0_10px_25px_rgba(15,23,42,0.25)]"
              onHoverStart={() => setIsLogoHovered(true)}
              onHoverEnd={() => setIsLogoHovered(false)}
              initial={{ filter: 'grayscale(1) invert(1) brightness(1.3)' }}
              animate={
                isLogoHovered
                  ? { filter: 'brightness(0) contrast(1.3)' }
                  : { filter: 'grayscale(1) invert(1) brightness(1.3)' }
              }
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            />
            <motion.span
              className="pointer-events-none absolute inset-y-1 left-0 w-16 rounded-full bg-gradient-to-r from-bsr-lilac/60 via-bsr-blue/50 to-bsr-orange/50 blur"
              initial={{ opacity: 0, x: '-120%' }}
              animate={controls}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </Link>
          <div className="hidden lg:flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em]">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  clsx(
                    'px-3 py-1 border-b-2 transition-colors',
                    isNavHovered ? 'text-white/70' : 'text-white/60',
                    {
                      [isNavHovered ? 'border-white text-white' : 'border-white/70 text-white']: isActive,
                      [isNavHovered ? 'border-transparent hover:border-white/50 hover:text-white' : 'border-transparent hover:border-white/40 hover:text-white']: !isActive
                    }
                  )
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <button
            type="button"
            className={clsx(
              'lg:hidden rounded-full border px-5 py-2 uppercase text-xs tracking-[0.3em] transition-colors',
              isNavHovered ? 'border-white text-white' : 'border-slate-300 text-slate-700'
            )}
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
