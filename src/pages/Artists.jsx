import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import SEO from '../components/meta/SEO';
import { artistList } from '../utils/constants';

export default function Artists() {
  const [activeSlug, setActiveSlug] = React.useState(artistList[0]?.slug);

  return (
    <>
      <SEO
        title="BSR Artists — Miss Bliss, Miss Space & more coming soon"
        description="Discover the Bliss Sound Records roster—Miss Bliss, Miss Space, and the incoming bloom of residents."
        path="/artists"
      />

      <section className="border-b border-white/10">
        <div className="container space-y-4 py-16 text-white">
          <p className="text-[0.6rem] uppercase tracking-[0.5em] text-white/70">Roster</p>
          <h1 className="text-3xl font-semibold">Resident index</h1>
          <p className="max-w-2xl text-sm text-white/65">
            Minimal snapshots for each artist. Select a profile to reveal press-ready info.
          </p>
        </div>
      </section>

      <section className="container space-y-8 py-16 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
          <p>Active lineup</p>
          <span>Press-ready</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {artistList.map((artist, index) => {
            const isActive = activeSlug === artist.slug;
            return (
              <motion.button
                key={artist.slug}
                type="button"
                onClick={() => setActiveSlug(artist.slug)}
                layout
                className={clsx(
                  'relative overflow-hidden rounded-[32px] border border-white/20 bg-black/30 p-6 text-center transition backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
                  isActive ? 'border-white' : 'hover:border-white/40'
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                aria-pressed={isActive}
              >
                <motion.div layout className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border border-white/20 bg-white/5">
                  {artist.image ? (
                    <img src={artist.image} alt={`${artist.name} portrait`} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.35em] text-white/50">
                      Portrait pending
                    </div>
                  )}
                </motion.div>
                <div className="space-y-2 pt-4">
                  <p className="text-[0.55rem] uppercase tracking-[0.35em] text-white/60">{artist.status}</p>
                  <h3 className="text-xl font-semibold">{artist.name}</h3>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">{artist.style}</p>
                </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="details"
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3 pt-4 text-sm text-white/75"
                    >
                      <p>{artist.summary}</p>
                      {artist.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 text-[0.55rem] uppercase tracking-[0.3em] text-white/60">
                          {artist.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap justify-center gap-3 text-[0.55rem] uppercase tracking-[0.35em] text-white/70">
                        {artist.focus && <span className="rounded-full border border-white/20 px-3 py-1">{artist.focus}</span>}
                        <span className="rounded-full border border-white/20 px-3 py-1">{artist.status}</span>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.35em]">
                        {artist.pressKit && (
                          <a
                            href={artist.pressKit}
                            target="_blank"
                            rel="noreferrer"
                            download
                            className="inline-flex rounded-full border border-white px-4 py-2 text-white transition hover:bg-white hover:text-black"
                          >
                            Press kit
                          </a>
                        )}
                        {artist.spotify ? (
                          <a
                            href={artist.spotify}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-full border border-white/40 px-4 py-2 text-white/80 transition hover:border-white"
                          >
                            Spotify
                          </a>
                        ) : (
                          <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-white/50">Audio pending</span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </section>
    </>
  );
}
