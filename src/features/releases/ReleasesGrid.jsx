import React from 'react';
import ReleaseCard from './ReleaseCard';

export default function ReleasesGrid({ releases }) {
  if (!releases?.length) {
    return <p className="text-sm text-black/60">No drops yet. Check back soon.</p>;
  }

  return (
    <div className="space-y-6">
      {releases.map((track) => (
        <ReleaseCard key={track.id} track={track} />
      ))}
    </div>
  );
}
