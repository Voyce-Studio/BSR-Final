import React from 'react';
import clsx from 'clsx';

export default function MixCard({ mix, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={clsx(
        'flex w-64 shrink-0 flex-col gap-3 rounded-[28px] border px-4 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
        isActive ? 'border-white bg-white/10 text-white shadow-[0_20px_45px_rgba(0,0,0,0.4)]' : 'border-white/15 bg-black/30 text-white/80 hover:border-white/40'
      )}
      aria-pressed={isActive}
    >
      <div className="h-36 w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5">
        {mix.artwork ? (
          <img src={mix.artwork} alt={`${mix.title} artwork`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[0.55rem] uppercase tracking-[0.3em] text-white/50">BSR</div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-[0.55rem] uppercase tracking-[0.3em] text-white/60">{mix.curator}</p>
        <h3 className="text-lg font-semibold text-white">{mix.title}</h3>
        {mix.artist && <p className="text-xs uppercase tracking-[0.3em] text-white/50">{mix.artist}</p>}
        <p className="text-[0.55rem] uppercase tracking-[0.3em] text-white/50">{mix.platform}</p>
        {mix.comingSoon && <p className="text-[0.55rem] uppercase tracking-[0.3em] text-white/40">Mix coming soon</p>}
      </div>
    </button>
  );
}
