import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/meta/SEO';
import CelestialHero from '../components/sections/CelestialHero';
import galleryOne from '../assets/images/arty-backgrounds/BSR 1.png';
import galleryTwo from '../assets/images/arty-backgrounds/BSR 2.png';
import MissBlissLogo from '../components/icons/MissBlissLogo';
import MissSpaceLogo from '../components/icons/MissSpaceLogo';
import heroVideo from '../assets/webm/background.webm';

const focusArtists = [
  {
    name: 'Miss Bliss',
    accent: 'from-[#fbd3ff]/40 via-[#ff8ef3]/30 to-transparent',
    gradient: 'rgba(255,142,243,0.4)',
    track: 'Te Quero',
    note: 'Velvet bloom',
    Logo: MissBlissLogo
  },
  {
    name: 'Miss Space',
    accent: 'from-[#b1f8ff]/40 via-[#5cb8ff]/30 to-transparent',
    gradient: 'rgba(92,184,255,0.35)',
    track: 'Drowning in the Dark',
    note: 'Chrome hush',
    Logo: MissSpaceLogo
  }
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
          title="Bliss Sound Records — Blooming House & Textured Techno"
          description="Experience the full-height bliss strip, animated gradients, and current Miss Bliss + Miss Space transmissions with contact & submissions anchors."
        />
      <main className="space-y-24">
        <CelestialHero />
        <section className="container space-y-10 text-white">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Signal update</p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight">Current orbit — Miss Bliss & Miss Space</h2>
              <span className="text-[0.65rem] uppercase tracking-[0.5em] text-white/50">New textures uploading soon</span>
            </div>
            <p className="max-w-3xl text-base text-white/70">
              We stripped away extra UI to let typography and motion carry the story. Photography drops in next.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2" role="list">
            {focusArtists.map((artist, index) => {
              const LogoComponent = artist.Logo;
              return (
                <motion.article
                  key={artist.name}
                  role="listitem"
                  className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/5 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
                  transition={{ duration: 0.9, delay: index * 0.08, ease: [0.65, 0.05, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${artist.gradient}, transparent 70%)`
                    }}
                    animate={{ opacity: [0.2, 0.55, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${artist.accent} opacity-40`}
                    style={{ mixBlendMode: 'screen' }}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <LogoComponent className="h-16 w-auto" />
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.5em] text-white/70">BSR orbit</p>
                      <h3 className="text-3xl font-light tracking-tight">{artist.name}</h3>
                    </div>
                    <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-white/70">
                      <span>{artist.track}</span>
                      <span>{artist.note}</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
        <section className="container space-y-10 text-white">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Discography</p>
            <h2 className="text-3xl font-semibold">Essential transmissions</h2>
            <p className="text-base text-white/70">
              Two-track echo. Swap the 3000×3000 placeholders inside{' '}
              <code className="rounded bg-white/10 px-1 text-white">/public/artwork</code> when final art is ready.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {discography.map((entry) => (
              <article
                key={entry.catalog}
                className="flex flex-col gap-5 rounded-[24px] border border-white/15 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="w-full overflow-hidden rounded-[20px] border border-white/10 sm:w-40">
                    <img src={entry.artwork} alt={`${entry.title} artwork`} className="h-40 w-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.4em] text-white/60">
                      <span>{entry.catalog}</span>
                      <span>{entry.mood}</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/60">{entry.artist}</p>
                      <h3 className="text-xl font-semibold">{entry.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/70">{entry.copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="relative overflow-hidden border-y border-white/10">
          <div className="absolute inset-0 aurora-gradient opacity-40" />
          <div className="container relative grid gap-10 py-20 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-4 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Studio strip</p>
              <h2 className="text-3xl font-semibold">Bloom loop — label reel</h2>
              <p className="text-base text-white/70">
                A looping capture of the Bliss Sound gradient field. Scales cleanly on retina + mobile, crops elegantly on small screens.
              </p>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">WebM · 21:9 · seamless</p>
            </div>
            <div className="rounded-[36px] border border-white/15 bg-black/60 p-4 shadow-[0_30px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <div className="aspect-[21/9] w-full overflow-hidden rounded-[28px] border border-white/10">
                <video
                  src={heroVideo}
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container space-y-6 pb-8 text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Visual diary</p>
            <h2 className="text-3xl font-semibold">After-hours stills</h2>
          </div>
          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
            {galleryShots.map((shot, index) => (
              <figure
                key={`${shot.caption}-${index}`}
                className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 ${shot.span}`}
              >
                <img src={shot.src} alt={shot.caption} className="h-full w-full object-cover" />
                <figcaption className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-sm uppercase tracking-[0.3em] text-white/80">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section id="contact" className="relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-bsr-blue/50 via-bsr-lilac/40 to-bsr-orange/40 opacity-60" />
          <div className="absolute inset-0 mix-blend-screen opacity-30" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%)' }} />
          <div className="container relative grid gap-10 py-20 text-white lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Contact</p>
              <h2 className="text-4xl font-semibold">Let&apos;s craft the next bloom</h2>
              <p className="text-base text-white/75">
                Bliss Sound Records is open for submissions, press requests, and immersive collaborations. Drop us a note—page transitions now glide into the inbox just as smoothly.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@blisssoundrecords.com"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.4em] transition hover:border-white hover:bg-white/10"
                >
                  Email the label
                </a>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.4em] transition hover:border-white hover:bg-white/10"
                >
                  Contact form
                </Link>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: 'Submissions', detail: 'demos@blisssoundrecords.com' },
                { title: 'Press / Sync', detail: 'press@blisssoundrecords.com' },
                { title: 'Residencies', detail: 'partners@blisssoundrecords.com' },
                { title: 'Signals', detail: '+1 (917) 555-0142' }
              ].map((item) => (
                <div key={item.title} className="rounded-[24px] border border-white/15 bg-black/40 p-5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/60">{item.title}</p>
                  <p className="mt-2 text-base font-semibold">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
