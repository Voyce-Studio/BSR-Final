import React from 'react';
import { Link } from 'react-router-dom';
import ReleasesGrid from '../features/releases/ReleasesGrid';
import SEO from '../components/meta/SEO';
import { latestDrops } from '../utils/constants';

export default function Releases() {
  return (
    <>
      <SEO
        title="BSR Releases — Melodic Techno, Hard Techno, Afro-House, Deep House"
        description="Filter through curated Bliss Sound Records releases across formats."
        path="/releases"
      />
      <section className="border-b border-white/10 text-white">
        <div className="container space-y-4 py-16">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Release index</p>
          <h1 className="text-4xl font-semibold">Latest drops</h1>
          <p className="max-w-2xl text-sm text-white/70">
            Only two releases leave the vault this season—Dec 12 and Dec 19—so every card below carries streaming context, focus notes, and the coming-soon DSP tags.
          </p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em]">
            <Link to="/catalogue" className="rounded-full border border-white/40 px-5 py-2 text-white/80 transition hover:border-white">
              Open catalogue
            </Link>
            <Link to="/visual-diary" className="rounded-full border border-white/20 px-5 py-2 text-white/60 transition hover:border-white/60">
              Toolkit assets
            </Link>
          </div>
        </div>
      </section>
      <section className="container py-12 text-white">
        <ReleasesGrid releases={latestDrops} />
      </section>
    </>
  );
}
