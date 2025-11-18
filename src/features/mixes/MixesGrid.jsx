import React from 'react';
import MixCard from './MixCard';
import SpotifyEmbed from '../../components/primitives/SpotifyEmbed';

const YOUTUBE_DOMAINS = ['youtube.com', 'youtu.be'];

const getYouTubeEmbedUrl = (url) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }
    if (parsed.searchParams.get('v')) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get('v')}`;
    }
    if (parsed.pathname.startsWith('/embed/')) {
      return `https://www.youtube.com${parsed.pathname}`;
    }
  } catch {
    return null;
  }
  return null;
};

function MixEmbed({ url, title }) {
  if (YOUTUBE_DOMAINS.some((domain) => url.includes(domain))) {
    const embedUrl = getYouTubeEmbedUrl(url);
    if (!embedUrl) return null;
    return (
      <div className="aspect-video w-full overflow-hidden rounded-3xl border border-white/15 bg-black">
        <iframe
          src={embedUrl}
          title={`${title} — YouTube mix`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }
  return <SpotifyEmbed url={url} />;
}

export default function MixesGrid({ mixes }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!mixes?.length) {
      setActiveIndex(0);
      return;
    }
    if (activeIndex > mixes.length - 1) {
      setActiveIndex(0);
    }
  }, [mixes?.length, activeIndex]);

  if (!mixes?.length) {
    return (
      <div className="rounded-[32px] border border-white/10 bg-black/45 p-6 text-sm text-white/70">
        No mixes match the filters yet. Clear selections to show every archive entry.
      </div>
    );
  }

  const activeMix = mixes[Math.min(activeIndex, mixes.length - 1)];
  const hasEmbed = Boolean(activeMix?.url);

  const cycle = (direction) => {
    setActiveIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return mixes.length - 1;
      if (next >= mixes.length) return 0;
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
        <span>Mix cards — swipe horizontally</span>
        <span>
          {activeIndex + 1}/{mixes.length}
        </span>
      </div>
      <div className="overflow-x-auto pb-4" role="tablist" aria-label="Mix playlist">
        <div className="flex min-w-max gap-4">
          {mixes.map((mix, index) => (
            <MixCard
              key={mix.title}
              mix={mix}
              isActive={index === activeIndex}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="space-y-4 rounded-[32px] border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{activeMix.curator}</p>
            <h2 className="text-2xl font-semibold text-white">{activeMix.title}</h2>
            {activeMix.description && <p className="text-sm text-white/70">{activeMix.description}</p>}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous mix"
              className="rounded-full border border-white/30 p-2 text-white"
              onClick={() => cycle(-1)}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next mix"
              className="rounded-full border border-white/30 p-2 text-white"
              onClick={() => cycle(1)}
            >
              ›
            </button>
          </div>
        </div>
        {hasEmbed ? (
          <MixEmbed url={activeMix.url} title={activeMix.title} />
        ) : (
          <div className="flex min-h-[240px] items-center justify-center rounded-[32px] border border-white/10 bg-black/30 text-center text-sm uppercase tracking-[0.35em] text-white/60">
            Mix coming soon
          </div>
        )}
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
          {hasEmbed ? (
            <a href={activeMix.url} target="_blank" rel="noreferrer" className="underline">
              Open on {activeMix.platform}
            </a>
          ) : (
            <span>Streaming links coming soon</span>
          )}
          {activeMix.length && hasEmbed && <span>{activeMix.length}</span>}
          {activeMix.mood && <span>{activeMix.mood}</span>}
        </div>
      </div>
    </div>
  );
}
