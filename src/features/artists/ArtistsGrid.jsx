import React from 'react';
import ArtistCard from './ArtistCard';
import FrostCard from '../../components/primitives/FrostCard';

export default function ArtistsGrid({ artists, active, onSelect }) {
  return (
    <div className="grid md:grid-cols-[2fr,1fr] gap-8">
      <div className="grid sm:grid-cols-2 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.slug} artist={artist} onSelect={onSelect} isActive={active?.slug === artist.slug} />
        ))}
      </div>
      {active && (
        <FrostCard className="h-full flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em]">Spotlight</p>
          <h3 className="text-3xl font-semibold">{active.name}</h3>
          <p className="text-sm text-black/70">
            {active.name} bends {active.style.toLowerCase()} into angelic crescendos and rave catharsis.
          </p>
        </FrostCard>
      )}
    </div>
  );
}
