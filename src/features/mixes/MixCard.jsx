import React from 'react';
import FrostCard from '../../components/FrostCard';
import SpotifyEmbed from '../../components/SpotifyEmbed';

const YOUTUBE_DOMAINS = ['youtube.com', 'youtu.be'];

function getYouTubeEmbedUrl(url) {
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
  } catch (err) {
    return null;
  }
  return null;
}

function MixEmbed({ url }) {
  if (YOUTUBE_DOMAINS.some((domain) => url.includes(domain))) {
    const embedUrl = getYouTubeEmbedUrl(url);
    if (!embedUrl) return null;
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-black/5">
        <iframe
          src={embedUrl}
          title="YouTube mix"
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

export default function MixCard({ mix }) {
  return (
    <FrostCard className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">{mix.curator}</p>
          <h3 className="text-xl font-semibold">{mix.title}</h3>
        </div>
      </div>
      <MixEmbed url={mix.url} />
    </FrostCard>
  );
}
