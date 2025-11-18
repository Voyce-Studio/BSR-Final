import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/meta/SEO';
import CelestialHero from '../components/sections/CelestialHero';
import galleryOne from '../assets/images/arty-backgrounds/BSR 1.png';
import galleryTwo from '../assets/images/arty-backgrounds/BSR 2.png';
import { artistList } from '../utils/constants';

const discography = [
  {
    catalog: 'BSR001',
    title: 'Te Quiero',
    artist: 'Miss Bliss',
    releaseDate: 'Dec 12, 2024 · tentative',
    artwork: '/artwork/miss-bliss/BSR001 - Te Quero - Miss Bliss - Promotional Artwork.png',
    description:
      '“Te Quiero” is Miss Bliss’s love letter to the dance floor—sensual, cinematic, and hypnotic. It channels her story-driven melodic techno across warm, seductive percussion lines.',
    genre: 'Melodic Techno',
    vibe: 'Cinematic Pulse',
    url: 'https://open.spotify.com/track/0placeholder'
  },
  {
    catalog: 'BSR002',
    title: 'Drowning in the Dark',
    artist: 'Miss Space',
    releaseDate: 'Dec 19, 2024 · tentative',
    artwork: '/artwork/miss-space/BSR002 - Drowning in the Dark - Miss Space - Promotional Artwork.png',
    description:
      '“Drowning in the Dark” scores inner transformation—descending into shadow only to surface anew. Miss Space sculpts modular pulses into a portal for rebirth.',
    genre: 'Melodic Techno',
    vibe: 'Portal Current',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];

const galleryShots = [
  { src: galleryOne, caption: 'Brand kit', span: 'md:row-span-2' },
  { src: galleryTwo, caption: 'Roster press kits', span: '' },
  { src: galleryOne, caption: 'After-hours', span: '' },
  { src: galleryTwo, caption: 'Label toolkit', span: 'md:col-span-2' }
];

export default function Home() {
  const roster = React.useMemo(
    () => ({
      active: artistList.filter((artist) => artist.status === 'Resident'),
      incoming: artistList.filter((artist) => artist.status !== 'Resident')
    }),
    []
  );

  return (
    <>
        <SEO
          title="Bliss Sound Records — Resident orbit & melodic techno drops"
          description="Experience the full-height bliss strip, animated gradients, and current Miss Bliss + Miss Space transmissions with contact & submissions anchors."
          keywords={['Bliss Sound Records', 'textured techno', 'Miss Bliss', 'Miss Space', 'melodic techno label']}
          structuredData={[
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Bliss Sound Records',
              url: 'https://www.blisssoundrecords.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.blisssoundrecords.com/?s={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'MusicGroup',
              name: 'Bliss Sound Records',
              genre: ['Electronic', 'Techno', 'House']
            }
          ]}
        />
      <main className="space-y-24">
        <CelestialHero />
        <section className="container space-y-10 text-white">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Signal update</p>
            <h2 className="text-3xl font-semibold tracking-tight">Orbit</h2>
            <p className="max-w-3xl text-base text-white/70">
              Our growing artist roster bends melodic techno into bright, emotional curves—Miss Bliss, Miss Space, and new residents landing soon.
            </p>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex flex-wrap items-end justify-between gap-4 text-xs uppercase tracking-[0.4em] text-white/60">
                <p>Active residents</p>
                <Link to="/artists" className="text-white hover:underline">
                  Resident index
                </Link>
              </div>
              <div className="flex flex-wrap gap-6">
                {roster.active.map((artist) => {
                  const portrait = artist.orbitPortrait || artist.image;
                  return (
                    <motion.div key={artist.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <Link
                        to={`/artists?focus=${artist.slug}`}
                        className="group relative flex flex-col items-center gap-3"
                        aria-label={`Open ${artist.name} profile`}
                      >
                        <span
                          className="absolute inset-0 translate-y-4 scale-110 rounded-full blur-3xl opacity-60 transition group-hover:opacity-90"
                          style={{ background: artist.palette.glow }}
                        />
                        <span className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/25 bg-white/5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition group-hover:border-white">
                          {portrait ? (
                            <img src={portrait} alt={`${artist.name} orbit portrait`} className="h-full w-full object-cover" />
                          ) : (
                            <span className="text-xs uppercase tracking-[0.3em] text-white/60">{artist.name}</span>
                          )}
                        </span>
                        <div className="text-center">
                          <p className="text-sm font-semibold tracking-[0.3em]">{artist.name}</p>
                          <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/60">Resident</p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Incoming orbit</p>
              <div className="flex flex-wrap gap-4">
                {roster.incoming.map((artist) => {
                  const portrait = artist.orbitPortrait || artist.image;
                  return (
                    <motion.div
                      key={artist.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex w-36 flex-col items-center gap-2 rounded-[28px] border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl"
                    >
                      <div className="h-20 w-20 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                        {portrait ? (
                          <img src={portrait} alt={`${artist.name} orbit portrait`} className="h-full w-full object-cover" />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.3em] text-white/50">Soon</div>
                        )}
                      </div>
                      <p className="text-sm font-semibold tracking-[0.3em]">{artist.name}</p>
                      <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/50">{artist.status}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden border-y border-white/10">
          <div className="absolute inset-0 aurora-gradient opacity-40" />
          <div className="container relative space-y-10 py-20">
            <div className="space-y-3 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Upcoming releases</p>
              <h2 className="text-3xl font-semibold">Dec 12 + Dec 19</h2>
              <p className="text-sm text-white/70">Only two drops close the year. Dates are tentative—assets stay ready.</p>
            </div>
            <div className="space-y-8">
              {discography.map((entry, index) => (
                <motion.article
                  key={entry.catalog}
                  className="flex flex-col gap-6 rounded-[32px] border border-white/20 bg-white/5 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:flex-row"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <div className="w-full max-w-sm overflow-hidden rounded-[28px] border border-white/10">
                    <img src={entry.artwork} alt={`${entry.title} artwork`} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-4 text-white">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-[0.65rem] uppercase tracking-[0.4em] text-white/60">
                      <span>{entry.catalog}</span>
                      <span>{entry.artist}</span>
                    </div>
                    {entry.releaseDate && (
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60">{entry.releaseDate}</p>
                    )}
                    <div>
                      <h3 className="text-2xl font-semibold">{entry.title}</h3>
                      <p className="mt-2 text-base text-white/80">{entry.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[0.55rem] uppercase tracking-[0.35em] text-white/60">
                      {['Apple Music', 'Spotify', 'YouTube'].map((platform) => (
                        <span key={`${entry.catalog}-${platform}`} className="rounded-full border border-white/20 px-3 py-1">
                          {platform}: Coming Soon
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.4em]">
                      <span className="rounded-full border border-white/30 px-4 py-1 text-white/80">{entry.genre}</span>
                      <span className="rounded-full border border-white/30 px-4 py-1 text-white/80">{entry.vibe}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em]">
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white px-6 py-2 text-white transition hover:bg-white/20"
                      >
                        Listen
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        <section className="container space-y-6 pb-8 text-white">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Visual diary</p>
            <h2 className="text-3xl font-semibold">Label toolkit</h2>
            <p className="text-base text-white/70">
              We provide BSR&apos;s logo, brand kit, and roster press packs to aligned organizers. Scroll through the capsules—each card lifts with a gentle parallax as you hover.
            </p>
          </div>
          <Link to="/visual-diary" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/70 hover:text-white">
            View the full toolkit →
          </Link>
          <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
            {galleryShots.map((shot, index) => (
              <motion.figure
                key={`${shot.caption}-${index}`}
                className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_25px_50px_rgba(0,0,0,0.35)] ${shot.span}`}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <motion.img
                  src={shot.src}
                  alt={shot.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <figcaption className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-sm uppercase tracking-[0.3em] text-white/80">
                  {shot.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
        <section id="contact" className="relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-bsr-blue/50 via-bsr-lilac/40 to-bsr-orange/40 opacity-60" />
          <div className="absolute inset-0 mix-blend-screen opacity-30" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%)' }} />
          <div className="container relative grid gap-10 py-20 text-white lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Connect with us</p>
              <h2 className="text-4xl font-semibold">Let&apos;s build the next bloom</h2>
              <p className="text-base text-white/75">
                Whether you&apos;re submitting demos, planning a festival slot, or looking for press assets, we respond quickly and keep the workflow personal.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/submissions"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.4em] transition hover:border-white hover:bg-white/10"
                >
                  Submit demo
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.4em] transition hover:border-white hover:bg-white/10"
                >
                  Contact label
                </Link>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: 'Submissions', detail: 'demos@blisssoundrecords.com' },
                { title: 'Press / Sync', detail: 'press@blisssoundrecords.com' },
                { title: 'Residencies', detail: 'partners@blisssoundrecords.com' },
                { title: 'Signals', detail: '+1 (917) 555-0189' }
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
