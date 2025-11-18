import React from 'react';

export default function MixCard({ mix, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex items-center gap-4 rounded-3xl border px-3 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
        isActive ? 'border-white text-white' : 'border-white/15 text-white/70'
      }`}
      aria-pressed={isActive}
      style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.35)' }}
    >
      <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/20 bg-white/10">
        {mix.artwork ? (
          <img src={mix.artwork} alt={`${mix.title} artwork`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[0.55rem] uppercase tracking-[0.3em] text-white/50">BSR</div>
        )}
      </div>
      <div className="flex flex-1 items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">{mix.curator}</p>
          <h3 className="text-lg font-semibold">{mix.title}</h3>
          {mix.artist && <p className="text-xs uppercase tracking-[0.3em] text-white/50">{mix.artist}</p>}
          {mix.description && <p className="text-sm text-white/60">{mix.description}</p>}
        </div>
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/60">{mix.platform}</span>
      </div>
    </button>
  );
}
