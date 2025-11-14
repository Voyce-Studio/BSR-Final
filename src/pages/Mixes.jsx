import React from 'react';
import SectionFrame from '../components/primitives/SectionFrame';
import MixesGrid from '../features/mixes/MixesGrid';
import SEO from '../components/meta/SEO';
import { mixList } from '../utils/constants';

export default function Mixes() {
  return (
    <>
      <SEO title="BSR Mixes — Curated sets & radio" description="Curated Bliss Sound mixes and resident radio transmissions." path="/mixes" />
      <SectionFrame>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Signals</p>
            <h1 className="text-4xl font-semibold">BSR Mixes</h1>
            <p className="text-sm text-black/60">
              Drop either Spotify playlist URLs or YouTube links inside <code className="rounded bg-black/5 px-1">mixList</code>; the player swaps automatically.
            </p>
          </div>
          <MixesGrid mixes={mixList} />
        </div>
      </SectionFrame>
    </>
  );
}
