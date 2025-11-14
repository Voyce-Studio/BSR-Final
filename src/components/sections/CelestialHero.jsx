import React from 'react';
import { motion } from 'framer-motion';
const signalPhrases = [
  { label: 'Miss Bliss', detail: 'Te Quero · warm shimmer' },
  { label: 'Miss Space', detail: 'Drowning in the Dark · chrome tide' },
  { label: 'Texture 03', detail: 'Angelic Bloom · coming soon' }
];

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
        <div className="max-w-3xl space-y-7">
          <p className="text-[0.65rem] uppercase tracking-[0.65em] text-white/70">{label}</p>
          <h1 className="text-4xl font-semibold uppercase tracking-tight sm:text-6xl">{headline}</h1>
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">{subheadline}</p>
          <p className="text-lg leading-relaxed text-white/85 sm:text-xl">{body}</p>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Bliss Sound Records hosts melodic techno & jazz textures for late-night bloom.
          </p>
          <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.5em] text-white/70">
            <span>Texture over talk</span>
            <span>Angelic bloom</span>
            <span>Club rituals</span>
          </div>
          <div className="mt-10 space-y-4 text-sm uppercase tracking-[0.2em] text-white/80">
            <span className="text-xs text-white/60">CURRENT SIGNAL</span>
            <div className="grid gap-3 sm:grid-cols-3">
              {signalPhrases.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-full border border-white/30 bg-white/5 px-4 py-3 text-[0.65rem] tracking-[0.4em] text-white/70"
                >
                  <div className="text-[0.5rem] uppercase tracking-[0.5em] text-white/60">{signal.label}</div>
                  <div className="text-white/80">{signal.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
