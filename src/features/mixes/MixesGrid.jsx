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

  const cycle = (direction) => {
    setActiveIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return mixes.length - 1;
      if (next >= mixes.length) return 0;
      return next;
    });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[320px,minmax(0,1fr)]">
      <div className="space-y-3 max-h-[520px] overflow-y-auto pr-2" role="tablist" aria-label="Mix playlist">
        {mixes.map((mix, index) => (
          <MixCard
            key={mix.title}
            mix={mix}
            isActive={index === activeIndex}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
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
        <MixEmbed url={activeMix.url} title={activeMix.title} />
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
          <a href={activeMix.url} target="_blank" rel="noreferrer" className="underline">
            Open on {activeMix.platform}
          </a>
          {activeMix.length && <span>{activeMix.length}</span>}
          {activeMix.mood && <span>{activeMix.mood}</span>}
        </div>
      </div>
    </div>
  );
}
