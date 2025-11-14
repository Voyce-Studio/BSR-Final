import React, { useMemo } from 'react';

export default function SpotifyEmbed({ url, height = 152 }) {
  const src = useMemo(() => {
    try {
      const parsed = new URL(url);
      const parts = parsed.pathname.split('/').filter(Boolean);
      const type = parts[0];
      const id = parts[1];
      if (!type || !id) return '';
      return `https://open.spotify.com/embed/${type}/${id}`;
    } catch {
      return '';
    }
  }, [url]);

  if (!src) return null;

  return (
    <iframe
      style={{ borderRadius: 12, width: '100%' }}
      src={src}
      width="100%"
      height={height}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Player"
    />
  );
}
