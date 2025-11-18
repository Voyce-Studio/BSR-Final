import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/meta/SEO';
import { artistList } from '../utils/constants';

const SPOTLIGHT_COPY = {
  'miss-bliss': {
    release: 'BSR001 · Te Quiero',
    headline: 'Miss Bliss — Te Quiero',
    blurb:
      'Te Quiero captures Miss Bliss’s sensual, story-driven melodic techno: tactile percussion, cinematic swells, and a whispered invitation to stay on the floor.'
  },
  'miss-space': {
    release: 'BSR002 · Drowning in the Dark',
    headline: 'Miss Space — Drowning in the Dark',
    blurb:
      'Drowning in the Dark channels inner transformation. Miss Space’s modular tides pull you under just long enough to surface recharged and sharper than before.'
  }
};

export default function Artists() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeResidents = React.useMemo(() => artistList.filter((artist) => artist.status === 'Resident'), []);
  const incomingArtists = React.useMemo(() => artistList.filter((artist) => artist.status !== 'Resident'), []);

  const derivedSlug = React.useMemo(() => {
    const focusParam = searchParams.get('focus');
    if (focusParam && artistList.some((artist) => artist.slug === focusParam)) return focusParam;
    return activeResidents[0]?.slug ?? artistList[0]?.slug;
  }, [searchParams, activeResidents]);

  const [activeSlug, setActiveSlug] = React.useState(derivedSlug);

  React.useEffect(() => {
    setActiveSlug(derivedSlug);
  }, [derivedSlug]);

  const handleSelect = (slug) => {
    setActiveSlug(slug);
    const next = new URLSearchParams(searchParams);
    next.set('focus', slug);
    setSearchParams(next, { replace: true });
  };

  const spotlightArtists = React.useMemo(
    () =>
      activeResidents
        .filter((artist) => SPOTLIGHT_COPY[artist.slug])
        .map((artist) => ({ ...artist, ...SPOTLIGHT_COPY[artist.slug] })),
    [activeResidents]
  );

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
            Soft light portraits, direct press downloads, and release focus markers for every Bliss Sound artist.
          </p>
        </div>
      </section>

      <section className="container space-y-12 py-16 text-white">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Spotlight</p>
          <h2 className="text-2xl font-semibold">Upcoming releases</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {spotlightArtists.map((artist, index) => (
              <motion.article
                key={artist.slug}
                className="rounded-[32px] border border-white/15 bg-white/5 p-6 backdrop-blur-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">{artist.release}</p>
                <h3 className="text-xl font-semibold text-white">{artist.headline}</h3>
                <p className="mt-3 text-sm text-white/75">{artist.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em]">
                  <a href="/releases" className="rounded-full border border-white px-4 py-2 text-white transition hover:bg-white hover:text-black">
                    Releases
                  </a>
                  {artist.pressKit && (
                    <a
                      href={artist.pressKit}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/30 px-4 py-2 text-white/80 transition hover:border-white"
                    >
                      Press kit
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
            <p>Active roster</p>
            <span>Miss Bliss · Miss Space</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {activeResidents.map((artist, index) => {
              const isActive = activeSlug === artist.slug;
              return (
                <motion.button
                  key={artist.slug}
                  type="button"
                  onClick={() => handleSelect(artist.slug)}
                  className={clsx(
                    'relative overflow-hidden rounded-[36px] border border-white/20 bg-black/40 p-6 text-left backdrop-blur-2xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70',
                    isActive ? 'border-white' : 'hover:border-white/40'
                  )}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.35 }}
                  aria-pressed={isActive}
                >
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[30px] border border-white/20 bg-white/5">
                      {artist.image ? (
                        <img src={artist.image} alt={`${artist.name} portrait`} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.3em] text-white/50">Portrait pending</div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-[0.55rem] uppercase tracking-[0.35em] text-white/60">{artist.status}</p>
                      <h3 className="text-2xl font-semibold">{artist.name}</h3>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60">{artist.focus}</p>
                    </div>
                  </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key={`${artist.slug}-details`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 pt-4 text-sm text-white/75"
                    >
                      {artist.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 text-[0.55rem] uppercase tracking-[0.3em] text-white/60">
                          {artist.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/20 px-3 py-1">
                              {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-3 text-[0.55rem] uppercase tracking-[0.35em] text-white/70">
                          {artist.focus && <span className="rounded-full border border-white/20 px-3 py-1">{artist.focus}</span>}
                          <span className="rounded-full border border-white/20 px-3 py-1">Resident</span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em]">
                        {artist.pressKit &&
                          (artist.slug === 'tyss' ? (
                            <button
                              type="button"
                              disabled
                              title="Press kit coming soon"
                              className="inline-flex cursor-not-allowed rounded-full border border-white/30 px-4 py-2 text-white/50"
                            >
                              Press kit
                            </button>
                          ) : (
                            <a
                              href={artist.pressKit}
                              target="_blank"
                              rel="noreferrer"
                              download
                              className="inline-flex rounded-full border border-white px-4 py-2 text-white transition hover:bg-white hover:text-black"
                            >
                              Press kit
                            </a>
                          ))}
                        {artist.spotify ? (
                          <a
                            href={artist.spotify}
                            target="_blank"
                            rel="noreferrer"
                              className="inline-flex rounded-full border border-white/40 px-4 py-2 text-white/80 transition hover:border-white"
                            >
                              Listen
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
        </div>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
            <p>Incoming bloom</p>
            <span>Press kits ready · audio soon</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {incomingArtists.map((artist, index) => (
              <motion.article
                key={artist.slug}
                className="rounded-[28px] border border-white/10 bg-white/5 p-5 text-sm text-white/70 backdrop-blur-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/15 bg-black/40">
                    {artist.image ? (
                      <img src={artist.image} alt={`${artist.name} portrait`} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[0.55rem] uppercase tracking-[0.3em] text-white/50">Pending</div>
                    )}
                  </div>
                  <div>
                    <p className="text-[0.55rem] uppercase tracking-[0.35em] text-white/60">{artist.status}</p>
                    <h3 className="text-lg font-semibold text-white">{artist.name}</h3>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-[0.55rem] uppercase tracking-[0.35em] text-white/60">
                  {artist.focus && <span className="rounded-full border border-white/15 px-3 py-1">{artist.focus}</span>}
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em]">
                  {artist.pressKit ? (
                    artist.slug === 'tyss' ? (
                      <button
                        type="button"
                        disabled
                        title="Press kit coming soon"
                        className="rounded-full border border-white/20 px-4 py-2 text-white/50"
                      >
                        Press kit
                      </button>
                    ) : (
                      <a
                        href={artist.pressKit}
                        target="_blank"
                        rel="noreferrer"
                        download
                        className="rounded-full border border-white/30 px-4 py-2 text-white transition hover:border-white"
                      >
                        Press kit
                      </a>
                    )
                  ) : (
                    <span className="rounded-full border border-white/15 px-4 py-2 text-white/50">Press kit pending</span>
                  )}
                  <span className="rounded-full border border-white/15 px-4 py-2 text-white/50">Audio coming soon</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
