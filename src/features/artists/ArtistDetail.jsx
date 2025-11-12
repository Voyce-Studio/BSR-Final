import React from 'react';
import SpotifyEmbed from '../../components/SpotifyEmbed';
import FrostCard from '../../components/FrostCard';

export default function ArtistDetail({ artist }) {
  if (!artist) return null;
  return (
    <FrostCard className="space-y-4">
      <h2 className="text-3xl font-semibold">{artist.name}</h2>
      <p>{artist.name} navigates {artist.style.toLowerCase()} with warmth and kinetic percussion.</p>
      <SpotifyEmbed url="https://open.spotify.com/playlist/37i9dQZF1DX1MUPbVkm5U3" />
    </FrostCard>
  );
}
