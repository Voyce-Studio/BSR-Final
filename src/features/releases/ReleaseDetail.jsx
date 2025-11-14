import React from 'react';
import SpotifyEmbed from '../../components/primitives/SpotifyEmbed';
import FrostCard from '../../components/primitives/FrostCard';

export default function ReleaseDetail({ release }) {
  if (!release) return null;
  return (
    <FrostCard className="space-y-4">
      <h2 className="text-3xl font-semibold">{release.title}</h2>
      <p>{release.artists}</p>
      <SpotifyEmbed url="https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX" />
    </FrostCard>
  );
}
