import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * CelestialHero spotlights current roster energy + featured tracks.
 */
export default function CelestialHero({
  label = 'UPLIFTING DANCEFLOORS AROUND THE WORLD.',
  headline = 'Blooming House & Textured Techno',
  subheadline = 'Record Label',
  body = 'Bliss Sound Records hosts melodic techno & jazz textures—soft light, deep resonance.'
}) {
  return (
    <section className="relative isolate -mt-24 flex min-h-screen items-center overflow-hidden bg-black text-white sm:-mt-28">
      <motion.div
        className="absolute inset-0 aurora-gradient"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(circle at 15% 25%, rgba(255,255,255,0.2), transparent 45%), radial-gradient(circle at 85% 15%, rgba(91,112,255,0.35), transparent 55%), radial-gradient(circle at 60% 75%, rgba(255,122,179,0.25), transparent 60%)',
          filter: 'blur(40px)'
        }}
        animate={{ opacity: [0.5, 0.9, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black" />
      <div className="container relative z-10 pb-20 pt-32 sm:pb-24 sm:pt-40">
        <div className="space-y-7 text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.65em] text-white/70">{label}</p>
          <h1 className="text-4xl font-semibold uppercase tracking-tight sm:text-6xl lg:text-7xl">{headline}</h1>
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">{subheadline}</p>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-white/85 sm:text-xl">{body}</p>
          <p className="text-base text-white/80">
            Bliss Sound Records is home to melodic techno & uplifting house music.
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white">Club rituals &amp; dance music</p>
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
