import React from 'react';

export default function MixCard({ mix, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`rounded-3xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-bsr-blue ${
        isActive ? 'border-black bg-black text-white' : 'border-black/10 bg-white/70 text-black'
      }`}
      aria-pressed={isActive}
    >
      <p className={`text-xs uppercase tracking-[0.3em] ${isActive ? 'text-white/70' : 'text-black/60'}`}>{mix.curator}</p>
      <div className="mt-2 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{mix.title}</h3>
          {mix.artist && <p className={`text-xs uppercase tracking-[0.3em] ${isActive ? 'text-white/60' : 'text-black/40'}`}>{mix.artist}</p>}
          {mix.description && <p className={`text-sm ${isActive ? 'text-white/80' : 'text-black/60'}`}>{mix.description}</p>}
        </div>
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">{mix.platform}</span>
      </div>
    </button>
  );
}
