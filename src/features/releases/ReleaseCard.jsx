import React from 'react';
import ImageSurface from '../../components/primitives/ImageSurface';

export default function ReleaseCard({ track }) {
  return (
    <div className="flex flex-col gap-6 rounded-[36px] border border-white/15 bg-white/5 p-6 text-white shadow-[0_35px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:flex-row lg:items-start">
      <div className="w-full max-w-xs">
        <ImageSurface
          src={track.artwork}
          alt={`${track.title} artwork`}
          label={`${track.artist}`}
          className="aspect-square"
        />
      </div>
      <div className="flex-1 space-y-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">{track.release}</p>
          <h3 className="text-2xl font-semibold">{track.title}</h3>
          <p className="text-sm text-white/70">{track.artist}</p>
          {track.description && <p className="mt-2 text-sm text-white/70">{track.description}</p>}
        </div>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
          {track.genre && <span className="rounded-full border border-white/20 px-3 py-1">{track.genre}</span>}
          {track.vibe && <span className="rounded-full border border-white/20 px-3 py-1">{track.vibe}</span>}
          {track.length && <span className="rounded-full border border-white/20 px-3 py-1">{track.length}</span>}
        </div>
        <div className="flex flex-wrap gap-2 text-[0.55rem] uppercase tracking-[0.35em] text-white/70">
          {['Apple Music', 'Spotify', 'YouTube'].map((platform) => (
            <span key={`${track.id}-${platform}`} className="rounded-full border border-white/30 px-3 py-1 bg-white/5">
              {platform}: Coming soon
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
