import React from 'react';
import SectionFrame from '../components/SectionFrame';
import ReleasesGrid from '../features/releases/ReleasesGrid';
import SEO from '../components/SEO';
import { featuredReleases } from '../utils/constants';

export default function Releases() {
  return (
    <>
      <SEO
        title="BSR Releases — Melodic Techno, Hard Techno, Afro-House, Deep House"
        description="Filter through curated Bliss Sound Records releases across formats."
        path="/releases"
      />
      <SectionFrame>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Catalog</p>
            <h1 className="text-4xl font-semibold">Latest drops</h1>
          </div>
          <ReleasesGrid releases={featuredReleases} />
        </div>
      </SectionFrame>
    </>
  );
}
