import React from 'react';
import FrostCard from '../../components/FrostCard';
import clsx from 'clsx';

export default function ArtistCard({ artist, onSelect, isActive }) {
  return (
    <button type="button" className="w-full text-left" onClick={() => onSelect?.(artist)}>
      <FrostCard
        className={clsx('w-full hover:-translate-y-1 transition-transform', {
          'ring-2 ring-bsr-blue': isActive
        })}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-black/60">{artist.style}</p>
        <h3 className="text-2xl font-semibold mt-2">{artist.name}</h3>
      </FrostCard>
    </button>
  );
}
