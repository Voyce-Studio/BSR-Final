import React from 'react';
import SEO from '../components/SEO';
import CelestialHero from '../components/CelestialHero';
import galleryOne from '../assets/images/arty-backgrounds/BSR 1.png';
import galleryTwo from '../assets/images/arty-backgrounds/BSR 2.png';

const comingArtists = [
  { name: 'Miss Bliss', hue: 'from-[#fbd3ff] to-[#ff8ef3]', track: 'Te Quero', note: 'velvet bloom' },
  { name: 'Miss Space', hue: 'from-[#b1f8ff] to-[#5cb8ff]', track: 'Drowning in the Dark', note: 'chrome hush' }
];

const discography = [
  {
    catalog: 'BSR010',
    title: 'Te Quero',
    artist: 'Miss Bliss',
    mood: 'warm shimmer',
    artwork: '/artwork/miss-bliss/te-quero.png',
    copy: 'Arps breathing in slow motion, low-end velvet, tiny vocal sparks.'
  },
  {
    catalog: 'BSR011',
    title: 'Drowning in the Dark',
    artist: 'Miss Space',
    mood: 'blue midnight',
    artwork: '/artwork/miss-space/drowning-in-the-dark.png',
    copy: 'Glass pads, heavy air, drums dipped in neon water.'
  }
];

const galleryShots = [
  { src: galleryOne, caption: 'Club bloom', span: 'md:row-span-2' },
  { src: galleryTwo, caption: 'Archive still', span: '' },
  { src: galleryOne, caption: 'Analog halo', span: '' },
  { src: galleryTwo, caption: 'After-hours bloom', span: 'md:col-span-2' }
];

export default function Home() {
  return (
    <>
        <SEO
          title="Bliss Sound Records — Miss Bliss + Miss Space"
          description="Miss Bliss and Miss Space share two new melodic techno transmissions built on texture and feeling."
        />
      <main className="space-y-24">
        <CelestialHero />
        <section className="container space-y-10 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.5em] text-slate-500">
            <span>texture over talk · angelic bloom — coming soon</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {comingArtists.map((artist) => (
              <div
                key={artist.name}
                className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              >
                <div
                  className={`absolute inset-0 opacity-30 bg-gradient-to-br ${artist.hue} blur-3xl`}
                  style={{ mixBlendMode: 'screen' }}
                />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <p className="text-[0.55rem] uppercase tracking-[0.7em] text-slate-500">bsr orbit</p>
                  <h2 className="text-3xl font-light tracking-tight text-slate-900">{artist.name}</h2>
                  <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.5em] text-slate-600">
                    <span>{artist.track}</span>
                    <span>{artist.note}</span>
                  </div>
                </div>
                <div className={`absolute -inset-x-6 bottom-0 h-32 bg-gradient-to-r ${artist.hue} opacity-50 blur-3xl`} />
              </div>
            ))}
          </div>
        </section>
        <section className="container space-y-10 pb-20">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Discography</p>
            <h2 className="text-3xl font-semibold text-slate-900">Essential transmissions</h2>
            <p className="text-base text-slate-600">Two-track echo. Swap the 3000×3000 placeholders inside <code className="rounded bg-slate-100 px-1">/public/artwork</code> when final art is ready.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {discography.map((entry) => (
              <article
                key={entry.catalog}
                className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              >
                <div className="w-full overflow-hidden rounded-3xl">
                  <img src={entry.artwork} alt={`${entry.title} artwork`} className="h-56 w-full object-cover" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-500">
                    <span>{entry.catalog}</span>
                    <span>{entry.mood}</span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-slate-500">{entry.artist}</p>
                    <h3 className="text-2xl font-semibold text-slate-900">{entry.title}</h3>
                  </div>
                  <p className="text-slate-600">{entry.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="container space-y-6 pb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Visual diary</p>
            <h2 className="text-3xl font-semibold text-slate-900">After-hours stills</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 auto-rows-[220px]">
            {galleryShots.map((shot, index) => (
              <figure
                key={`${shot.caption}-${index}`}
                className={`relative overflow-hidden rounded-[32px] border border-slate-200 bg-black/5 ${shot.span}`}
              >
                <img src={shot.src} alt={shot.caption} className="h-full w-full object-cover" />
                <figcaption className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-sm uppercase tracking-[0.3em] text-white/80">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
