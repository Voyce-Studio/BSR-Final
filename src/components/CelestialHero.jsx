import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/webm/background.webm';

const defaultTracks = [
  {
    artist: 'Miss Bliss',
    track: 'Te Quero',
    mood: 'Warm shimmer',
    summary: 'Velvet pulse, analog haze, whispers circling the kick.'
  },
  {
    artist: 'Miss Space',
    track: 'Drowning in the Dark',
    mood: 'Chrome tide',
    summary: 'Glass pads sinking into sub-bass halos.'
  }
];

/**
 * CelestialHero spotlights current roster energy + featured tracks.
 */
export default function CelestialHero({
  label = 'UPLIFTING DANCEFLOORS AROUND THE WORLD.',
  headline = 'Blooming House & Textured Techno',
  subheadline = 'Record Label',
  body = 'Bliss Sound Records hosts melodic techno & jazz textures—soft light, deep resonance.',
  tracks = defaultTracks
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.18), transparent 50%), radial-gradient(circle at 80% 0%, rgba(123,97,255,0.20), transparent 55%), radial-gradient(circle at 50% 80%, rgba(255,122,179,0.25), transparent 60%)'
        }}
        animate={{ backgroundPosition: ['0% 0%', '50% 30%', '0% 0%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/85 to-black" />

      <div className="container relative grid gap-12 py-20 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
        <div className="space-y-6">
          <p className="text-[0.65rem] uppercase tracking-[0.65em] text-white/70">{label}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight uppercase">{headline}</h1>
          <p className="text-base uppercase tracking-[0.3em] text-white/80">{subheadline}</p>
          <p className="max-w-2xl text-lg text-white/85">{body}</p>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Bliss Sound Records hosts melodic techno & jazz textures for late-night bloom.
          </p>
          <div className="text-xs uppercase tracking-[0.5em] text-white/70">
            texture over talk · angelic bloom — coming soon
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/15 bg-white/5 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <video
              src={heroVideo}
              className="h-48 w-full rounded-3xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          {tracks.map((track) => (
            <div
              key={track.track}
              className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            >
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  background:
                    track.artist === 'Miss Bliss'
                      ? 'radial-gradient(circle at 30% 20%, rgba(255,158,243,0.25), transparent 60%)'
                      : 'radial-gradient(circle at 70% 30%, rgba(91,112,255,0.2), transparent 65%)'
                }}
              />
              <div className="relative space-y-3 text-white">
                <p className="text-[0.55rem] uppercase tracking-[0.6em] text-white/60">current texture</p>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.45em] text-white/60">{track.artist}</p>
                    <p className="text-2xl font-light text-white">{track.track}</p>
                  </div>
                  <span className="rounded-full border border-white/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.4em] text-white/80">
                    {track.mood}
                  </span>
                </div>
                <p className="text-sm text-white/70">{track.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
