import React from 'react';
import FrostCard from '../../components/FrostCard';

export default function EventsList({ events }) {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <FrostCard key={event.name} className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">{event.status}</p>
            <h3 className="text-xl font-semibold">{event.name}</h3>
          </div>
          <p className="text-sm">{event.date}</p>
        </FrostCard>
      ))}
    </div>
  );
}
