import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useVantaFog from '../../hooks/useVantaFog';
import { VANTA_FOG_PRESET, VANTA_INTERACTIONS, HERO_CENTER_GLOW } from '../../config/vantaControls';

const VINYL_SVG = '/BSR-VINYL-SVG.svg';
const VINYL_GIF = '/BSR-VINYL-GIF.gif';
export default function CelestialHero({
  label = 'UPLIFTING DANCEFLOORS AROUND THE WORLD.',
  headline = 'BLISS SOUND RECORDS',
  subheadline = 'Record Label'
}) {
  const heroFogOptions = React.useMemo(
    () => ({
      ...VANTA_FOG_PRESET,
      highlightColor: 0xffdefa,
      midtoneColor: 0x7ccfff,
      lowlightColor: 0x050012,
      speed: 1.35
    }),
    []
  );
  const heroFogInteractions = React.useMemo(
    () => ({
      ...VANTA_INTERACTIONS,
      scrollRange: [0.78, 1.12],
      centerBias: 1.2
    }),
    []
  );
  const heroRef = useVantaFog(heroFogOptions, heroFogInteractions);
  const colorCycle = HERO_CENTER_GLOW.colors;

  return (
    <section ref={heroRef} className="relative isolate -mt-24 flex min-h-screen items-center overflow-hidden bg-black text-white sm:-mt-28">
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${colorCycle[0]}, transparent 60%)`,
          filter: `blur(${HERO_CENTER_GLOW.blur}px)`
        }}
        animate={{
          background: colorCycle.map((color) => `radial-gradient(circle at 50% 40%, ${color}, transparent 62%)`)
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      <div className="container relative z-10 pb-20 pt-32 sm:pb-24 sm:pt-40">
        <div className="space-y-7 text-center">
          <motion.figure
            className="relative mx-auto flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <img
              src={VINYL_GIF}
              alt="BSR vinyl texture halo"
              className="absolute inset-3 h-auto w-auto select-none object-contain opacity-60 blur-[2px] mix-blend-screen"
              loading="lazy"
            />
            <motion.img
              src={VINYL_SVG}
              alt="Bliss Sound Records vinyl emblem"
              className="relative z-10 h-full w-full select-none object-contain"
              style={{ filter: 'drop-shadow(0 0 18px rgba(245,208,255,0.45)) drop-shadow(0 0 32px rgba(124,201,255,0.3))' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
          </motion.figure>
          <p className="text-[0.65rem] uppercase tracking-[0.65em] text-white/70">{label}</p>
          <h1 className="text-4xl font-light uppercase tracking-[0.45em] sm:text-6xl lg:text-[4.5rem]">{headline}</h1>
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">{subheadline}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white">Focused dance rituals worldwide</p>
          <div className="mt-12 grid gap-4 text-sm uppercase tracking-[0.2em] text-white/80 sm:grid-cols-3">
            {[
              { label: 'Stream Discography', verb: 'Listen', copy: 'From Te Quero to Drowning In The Dark', to: '/releases' },
              { label: 'Explore Catalogue', verb: 'Immerse', copy: 'All IDs + DSP jumps', to: '/catalogue' },
              { label: 'Send Your Sound', verb: 'Coalesce', copy: 'Soft light, deep resonance only', to: '/submissions' }
            ].map((action) => (
              <Link
                key={action.label}
                to={action.to}
                className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-white/5 px-6 py-5 text-left shadow-[0_20px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl transition hover:-translate-y-1"
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-60" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 60%)' }} />
                <div className="relative space-y-2">
                  <p className="text-[0.55rem] uppercase tracking-[0.5em] text-white/60">{action.verb}</p>
                  <h3 className="text-lg font-semibold tracking-[0.2em] text-white">{action.label}</h3>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">{action.copy}</p>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.span
                      className="block h-full w-1/2 rounded-full bg-gradient-to-r from-bsr-lilac via-bsr-blue to-bsr-orange"
                      animate={{ x: ['-10%', '80%', '-10%'], scaleX: [1, 1.1, 1] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
