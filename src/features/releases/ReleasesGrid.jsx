import React from 'react';
import ReleaseCard from './ReleaseCard';

export default function ReleasesGrid({ releases }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {releases.map((release) => (
        <ReleaseCard key={release.id} release={release} />
      ))}
    </div>
  );
}
