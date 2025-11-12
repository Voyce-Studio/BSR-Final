import React from 'react';

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
  label = 'tactile melodic techno',
  headline = 'miss bliss + miss space',
  subheadline = 'Less chatter, more feeling.',
  body = 'Think satin basslines, angelic noise, soft pressure guiding the room.',
  tracks = defaultTracks
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 py-20 text-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute inset-x-4 bottom-12 h-40 rounded-[32px] border border-slate-100" />
      </div>

      <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6">
          <p className="text-[0.65rem] uppercase tracking-[0.65em] text-slate-500">{label}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight uppercase">{headline}</h1>
          <p className="text-base uppercase tracking-[0.3em] text-slate-600">{subheadline}</p>
          <p className="max-w-2xl text-lg text-slate-700">{body}</p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.5em] text-slate-500">
            <span>texture over talk</span>
            <span>angelic pressure</span>
          </div>
        </div>

        <div className="space-y-4">
          {tracks.map((track) => (
            <div
              key={track.track}
              className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
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
              <div className="relative space-y-3">
                <p className="text-[0.55rem] uppercase tracking-[0.6em] text-slate-500">current texture</p>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.45em] text-slate-500">{track.artist}</p>
                    <p className="text-2xl font-light text-slate-900">{track.track}</p>
                  </div>
                  <span className="rounded-full border border-slate-300 px-3 py-1 text-[0.6rem] uppercase tracking-[0.4em] text-slate-600">
                    {track.mood}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{track.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
