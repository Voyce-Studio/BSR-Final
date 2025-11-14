import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import SEO from '../components/meta/SEO';
import SpotifyEmbed from '../components/primitives/SpotifyEmbed';
import { artistList } from '../utils/constants';
import MissBlissLogo from '../components/icons/MissBlissLogo';
import MissSpaceLogo from '../components/icons/MissSpaceLogo';

const logoMap = {
  'miss-bliss': MissBlissLogo,
  'miss-space': MissSpaceLogo
};

export default function Artists() {
  const [selected, setSelected] = React.useState(artistList[0]);

  return (
    <>
      <SEO
        title="BSR Artists — Miss Bliss, Miss Space & more coming soon"
        description="Discover the Bliss Sound Records roster—Miss Bliss, Miss Space, and the incoming bloom of residents."
        path="/artists"
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 aurora-gradient opacity-30" />
        <div className="container relative space-y-6 py-20 text-white lg:space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Roster</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Miss Bliss, Miss Space & the next bloom</h1>
          <p className="max-w-3xl text-lg text-white/75">
            Strips replace cards so the gradient signature leads. Tap an artist to reveal their current focus, sonic palette, and
            embedded listen.
          </p>
        </div>
      </section>

      <section className="container space-y-8 py-16 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Resident strips</p>
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-white/50">Tap to spotlight</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {artistList.map((artist, index) => {
            const isActive = selected.slug === artist.slug;
            const Logo = logoMap[artist.slug];
            return (
              <motion.button
                key={artist.slug}
                type="button"
                onClick={() => setSelected(artist)}
                className={clsx(
                  'group relative overflow-hidden rounded-[28px] border bg-white/5 p-6 text-left shadow-[0_25px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition',
                  isActive ? 'border-white/70' : 'border-white/15 hover:border-white/40'
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.65, 0.05, 0.36, 1] }}
                viewport={{ once: true, amount: 0.4 }}
                aria-pressed={isActive}
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${artist.palette?.glow ?? 'rgba(255,255,255,0.15)'}, transparent 70%)`,
                    mixBlendMode: 'screen'
                  }}
                />
                <div className="relative flex h-full flex-col gap-6">
                  <div className="h-16">
                    {Logo ? (
                      <Logo className="h-full w-auto" />
                    ) : (
                      <div className="flex h-full items-center text-2xl uppercase tracking-[0.6em] text-white/60">BSR</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/70">{artist.status}</p>
                    <h3 className="text-2xl font-semibold">{artist.name}</h3>
                    <p className="text-sm uppercase tracking-[0.4em] text-white/60">{artist.style}</p>
                  </div>
                  <p className="text-sm text-white/75">{artist.summary}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `linear-gradient(120deg, rgba(0,0,0,0.8), ${selected.palette?.glow ?? 'rgba(255,255,255,0.1)'})`
          }}
        />
        <div className="container relative grid gap-10 py-20 text-white lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Spotlight</p>
            <h2 className="text-4xl font-semibold">{selected.name}</h2>
            <p className="text-base text-white/80">{selected.summary}</p>
            <div className="flex flex-wrap gap-4 text-[0.65rem] uppercase tracking-[0.4em] text-white/70">
              <span className="rounded-full border border-white/30 px-4 py-2">{selected.style}</span>
              <span className="rounded-full border border-white/30 px-4 py-2">{selected.focus}</span>
              <span className="rounded-full border border-white/30 px-4 py-2">{selected.status}</span>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/15 bg-black/40 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Listen</p>
            <div className="mt-4">
              <SpotifyEmbed url={selected.spotify} height={190} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
