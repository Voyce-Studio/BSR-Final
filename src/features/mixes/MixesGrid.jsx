import React from 'react';
import MixCard from './MixCard';

export default function MixesGrid({ mixes }) {
  return (
    <div className="grid gap-6">
      {mixes.map((mix) => (
        <MixCard key={mix.title} mix={mix} />
      ))}
    </div>
  );
}
