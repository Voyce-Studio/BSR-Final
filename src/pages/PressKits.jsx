import React from 'react';
import SectionFrame from '../components/SectionFrame';
import SEO from '../components/SEO';
import FrostCard from '../components/FrostCard';

const assets = [
  { name: 'Logo SVG', href: '/assets/icons/bsr-logo.svg' },
  { name: 'Brand one-pager (PDF)', href: '/assets/press/bsr-onepager.pdf' },
  { name: 'Photography Pack', href: '/assets/press/bsr-press.zip' }
];

export default function PressKits() {
  return (
    <>
      <SEO title="Press & Brand Assets — BSR" description="Downloadable Bliss Sound logos, one-pagers, and brand files." path="/press-kits" />
      <SectionFrame>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">Press Kits</h1>
          <div className="grid gap-4">
            {assets.map((asset) => (
              <FrostCard key={asset.name} className="flex items-center justify-between">
                <p>{asset.name}</p>
                <a className="px-4 py-2 rounded-full border border-black/10" href={asset.href} download>
                  Download
                </a>
              </FrostCard>
            ))}
          </div>
        </div>
      </SectionFrame>
    </>
  );
}
