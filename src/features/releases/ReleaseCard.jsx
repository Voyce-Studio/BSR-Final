import React from 'react';
import FrostCard from '../../components/primitives/FrostCard';
import ImageSurface from '../../components/primitives/ImageSurface';

export default function ReleaseCard({ release }) {
  return (
    <FrostCard className="flex flex-col gap-3 hover:-translate-y-1 transition-transform">
      <ImageSurface
        src={release.cover}
        alt={release.title}
        label={`Release art → ${release.cover}`}
        className="aspect-square"
      />
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-black/60">{release.date}</p>
        <h3 className="text-xl font-semibold">{release.title}</h3>
        <p className="text-sm text-black/70">{release.artists}</p>
      </div>
      <div className="flex gap-2 flex-wrap text-xs uppercase tracking-[0.2em]">
        {release.formats.map((format) => (
          <span key={format} className="px-2 py-1 border border-black/10 rounded-full">{format}</span>
        ))}
      </div>
    </FrostCard>
  );
}
