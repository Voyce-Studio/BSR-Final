import React from 'react';
import { Youtube, Apple } from 'lucide-react';
import SectionFrame from '../components/SectionFrame';
import SEO from '../components/SEO';
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
      <SectionFrame tone="halo">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Catalogue</p>
            <h1 className="text-4xl font-semibold text-slate-900">BSR Release Index</h1>
            <p className="text-sm text-slate-600">
              Internal IDs paired with duration notes and DSP jumps. Replace the placeholder links per release when the masters are live.
            </p>
          </div>
          <div className="overflow-auto rounded-3xl border border-slate-200 bg-white">
            <table className="min-w-full border-collapse text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.3em] text-slate-500">
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
                  <tr key={entry.catalogId} className="border-t border-slate-100 hover:bg-slate-50/70 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">{entry.catalogId}</td>
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
                              <span key={`${entry.catalogId}-${key}`} className="text-slate-300">
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
                              className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-900 hover:text-slate-900"
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
        </div>
      </SectionFrame>
    </>
  );
}
