import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/meta/SEO';

const VINYL = '/BSR-VINYL-SVG.svg';

export default function NotFound() {
  const navigate = useNavigate();
  const [accelerating, setAccelerating] = React.useState(false);

  const handleClick = () => {
    if (accelerating) return;
    setAccelerating(true);
    setTimeout(() => navigate('/'), 1100);
  };

  return (
    <>
      <SEO title="Not Found — Bliss Sound Records" description="This route dissolved into the noise." path="/404" />
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center text-white">
        <motion.img
          src={VINYL}
          alt="Bliss Sound Records vinyl emblem"
          className="h-[320px] w-[320px] sm:h-[480px] sm:w-[480px] lg:h-[640px] lg:w-[640px]"
          style={{ cursor: 'pointer', transformStyle: 'preserve-3d' }}
          animate={
            accelerating
              ? { rotateZ: 720, scale: 1.1, opacity: 0 }
              : { rotateY: [0, 180, 0, -180, 0], rotateZ: [0, 5, -5, 0] }
          }
          transition={
            accelerating
              ? { duration: 1.1, ease: 'easeInOut' }
              : { duration: 12, ease: 'easeInOut', repeat: Infinity }
          }
          onClick={handleClick}
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.35em]">Route dissolved</h1>
          <p className="text-sm text-white/70">Tap the vinyl to accelerate back to the homepage.</p>
        </div>
        <Link to="/" className="rounded-full border border-white px-6 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-white hover:text-black">
          Or return manually
        </Link>
      </div>
    </>
  );
}
