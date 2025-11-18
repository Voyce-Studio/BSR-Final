import React, { useMemo, useState } from 'react';
import MixesGrid from '../features/mixes/MixesGrid';
import SEO from '../components/meta/SEO';
import { mixList } from '../utils/constants';

const filterTypes = [
  { key: 'genres', label: 'Genres' },
  { key: 'vibes', label: 'Vibes' },
  { key: 'artists', label: 'Artists' }
];

export default function Mixes() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ genres: [], vibes: [], artists: [] });

  const options = useMemo(() => {
    const genreSet = new Set();
    const vibeSet = new Set();
    const artistSet = new Set();
    mixList.forEach((mix) => {
      mix.genres?.forEach((genre) => genreSet.add(genre));
      mix.vibes?.forEach((vibe) => vibeSet.add(vibe));
      if (mix.artist) artistSet.add(mix.artist);
    });
    return {
      genres: Array.from(genreSet),
      vibes: Array.from(vibeSet),
      artists: Array.from(artistSet)
    };
  }, []);

  const filteredMixes = useMemo(() => {
    const search = query.trim().toLowerCase();
    return mixList.filter((mix) => {
      const matchesText =
        !search ||
        mix.title.toLowerCase().includes(search) ||
        mix.curator.toLowerCase().includes(search) ||
        mix.artist?.toLowerCase().includes(search) ||
        mix.description?.toLowerCase().includes(search);

      const matchesGenres =
        filters.genres.length === 0 || filters.genres.every((genre) => mix.genres?.includes(genre));
      const matchesVibes =
        filters.vibes.length === 0 || filters.vibes.every((vibe) => mix.vibes?.includes(vibe));
      const matchesArtists =
        filters.artists.length === 0 || filters.artists.includes(mix.artist);

      return matchesText && matchesGenres && matchesVibes && matchesArtists;
    });
  }, [filters, query]);

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const current = prev[type];
      return {
        ...prev,
        [type]: current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
      };
    });
  };

  const clearFilters = () => {
    setFilters({ genres: [], vibes: [], artists: [] });
    setQuery('');
  };

  return (
    <>
      <SEO
        title="BSR Mixes — Curated sets & radio"
        description="Cycle through Bliss Sound Records mixes and radio archives across Spotify and YouTube."
        path="/mixes"
        keywords={['BSR mixes', 'techno mixes', 'YouTube DJ sets', 'Spotify playlist Bliss Sound']}
      />
      <section className="text-white">
        <div className="container space-y-8 py-16">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Signals</p>
            <h1 className="text-4xl font-semibold">BSR Mix Archive</h1>
            <p className="text-base text-white/70">
              Mixes now highlight Bliss Sound artists—filter by genre, vibe, or resident to find the perfect session.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[300px,1fr]">
            <aside className="space-y-6 rounded-[28px] border border-white/15 bg-black/30 p-5 backdrop-blur-xl">
              <div className="space-y-2">
                <label htmlFor="mix-search" className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Search
                </label>
                <input
                  id="mix-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Artist, curator, venue..."
                  className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
                />
              </div>
              {filterTypes.map(({ key, label }) => (
                <div key={key} className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {options[key].map((value) => {
                      const active = filters[key].includes(value);
                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() => toggleFilter(key, value)}
                          className={`rounded-full px-4 py-1 text-xs uppercase tracking-[0.3em] transition ${
                            active ? 'bg-white text-black' : 'border border-white/30 text-white/70'
                          }`}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={clearFilters}
                className="w-full rounded-full border border-white px-4 py-2 text-xs uppercase tracking-[0.4em] transition hover:bg-white hover:text-black"
              >
                Reset filters
              </button>
            </aside>
            <MixesGrid mixes={filteredMixes} />
          </div>
        </div>
      </section>
    </>
  );
}
