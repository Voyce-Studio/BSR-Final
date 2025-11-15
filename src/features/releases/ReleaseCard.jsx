import React from 'react';
import FrostCard from '../../components/primitives/FrostCard';
import ImageSurface from '../../components/primitives/ImageSurface';
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

function TrackPlayer({ url, title }) {
  if (YOUTUBE_DOMAINS.some((domain) => url.includes(domain))) {
    const embed = getYouTubeEmbedUrl(url);
    if (!embed) return null;
    return (
      <div className="aspect-video w-full overflow-hidden rounded-3xl border border-black/10 bg-black">
        <iframe
          src={embed}
          title={`${title} — YouTube`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }
  return <SpotifyEmbed url={url} />;
}

export default function ReleaseCard({ track }) {
  return (
    <FrostCard className="flex flex-col gap-6 lg:flex-row lg:items-start">
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
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">{track.release}</p>
          <h3 className="text-2xl font-semibold">{track.title}</h3>
          <p className="text-sm text-black/70">{track.artist}</p>
          {track.description && <p className="mt-2 text-sm text-black/70">{track.description}</p>}
        </div>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-black/60">
          {track.genre && <span className="rounded-full border border-black/10 px-3 py-1">{track.genre}</span>}
          {track.vibe && <span className="rounded-full border border-black/10 px-3 py-1">{track.vibe}</span>}
          {track.length && <span className="rounded-full border border-black/10 px-3 py-1">{track.length}</span>}
          <a
            href={track.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black px-3 py-1 text-black hover:bg-black hover:text-white transition"
          >
            Open {track.platform}
          </a>
        </div>
        <TrackPlayer url={track.url} title={track.title} />
      </div>
    </FrostCard>
  );
}
