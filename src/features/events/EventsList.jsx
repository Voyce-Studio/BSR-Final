import React from 'react';
import FrostCard from '../../components/primitives/FrostCard';

export default function EventsList({ events }) {
  if (!events?.length) {
    return (
      <FrostCard>
        <p className="text-sm text-black/70">New takeovers are being plotted—subscribe to the newsletter for first wave announcements.</p>
      </FrostCard>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <FrostCard key={event.name} className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">{event.status}</p>
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p className="text-sm text-black/60">{event.summary}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">{event.date}</p>
            {event.ticketsUrl ? (
              <a
                href={event.ticketsUrl}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-black px-4 py-1 text-xs uppercase tracking-[0.3em]"
              >
                {event.ctaLabel || 'RSVP'}
              </a>
            ) : (
              <span className="mt-2 inline-flex rounded-full border border-dashed border-black/30 px-4 py-1 text-xs uppercase tracking-[0.3em] text-black/50">
                {event.ctaLabel || 'Coming soon'}
              </span>
            )}
          </div>
        </FrostCard>
      ))}
    </div>
  );
}
