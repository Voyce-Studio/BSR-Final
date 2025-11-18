import React from 'react';
import { Youtube, Apple } from 'lucide-react';
import SEO from '../components/meta/SEO';
import { catalogueEntries } from '../utils/constants';
import SpotifyGlyph from '../components/icons/SpotifyGlyph';

const iconConfig = [
  { key: 'spotify', Icon: SpotifyGlyph, label: 'Spotify' },
  { key: 'youtube', Icon: Youtube, label: 'YouTube' },
  { key: 'apple', Icon: Apple, label: 'Apple Music' }
];

export default function Catalogue() {
  return (
    <>
      <SEO title="BSR Catalogue — IDs & Streaming Links" description="Lookup Bliss Sound catalogue IDs with quick jumps to all DSPs." path="/catalogue" />
      <section className="border-b border-white/10 text-white">
        <div className="container space-y-2 py-16">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Catalogue</p>
          <h1 className="text-4xl font-semibold">BSR Release Index</h1>
          <p className="text-sm text-white/70">
            Internal IDs paired with durations and DSP jumps. Update <code>catalogueEntries</code> inside <code>src/utils/constants.js</code> whenever a new ID is minted.
          </p>
        </div>
      </section>
      <section className="container py-12 text-white">
        <div className="overflow-auto rounded-3xl border border-white/15 bg-black/50 backdrop-blur-2xl">
          <table className="min-w-full border-collapse text-left text-sm text-white/80">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-white/60">
              <tr>
                <th className="px-6 py-4">Catalogue ID</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Artist</th>
                <th className="px-6 py-4">Featuring</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4 text-center">Links</th>
              </tr>
            </thead>
            <tbody>
              {catalogueEntries.map((entry) => (
                <tr key={entry.catalogId} className="border-t border-white/10">
                  <td className="px-6 py-4 font-semibold text-white">{entry.catalogId}</td>
                  <td className="px-6 py-4">{entry.title}</td>
                  <td className="px-6 py-4">{entry.artist}</td>
                  <td className="px-6 py-4">{entry.featuring || '—'}</td>
                  <td className="px-6 py-4 tabular-nums">{entry.duration}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      {iconConfig.map(({ key, Icon, label }) => {
                        const href = entry.links?.[key];
                        if (!href) {
                          return (
                            <span key={`${entry.catalogId}-${key}`} className="text-white/30">
                              <Icon size={18} aria-hidden />
                            </span>
                          );
                        }
                        return (
                          <a
                            key={`${entry.catalogId}-${key}`}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${entry.title} on ${label}`}
                            className="rounded-full border border-white/20 p-2 text-white/80 transition hover:border-white hover:text-white"
                          >
                            <Icon size={18} />
                          </a>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
