import React from 'react';

export default function EventsList({ events }) {
  if (!events?.length) {
    return (
      <div className="rounded-[32px] border border-white/10 bg-black/70 p-8 text-sm text-white/70">
        New takeovers are being planned. Subscribe to the newsletter for the first notice.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={event.name}
          className="flex flex-wrap items-center justify-between gap-4 rounded-[32px] border border-white/10 bg-black/70 p-6 text-white backdrop-blur-2xl"
        >
          <div className="max-w-xl space-y-2">
            <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/50">{event.status}</p>
            <h3 className="text-2xl font-semibold tracking-[0.2em]">{event.name}</h3>
            <p className="text-sm text-white/65">{event.summary}</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">{event.date}</p>
            {event.ticketsUrl ? (
              <a
                href={event.ticketsUrl}
                className="mt-3 inline-flex items-center justify-center rounded-full border border-white px-4 py-1 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-black"
              >
                {event.ctaLabel || 'RSVP'}
              </a>
            ) : (
              <span className="mt-3 inline-flex rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/50">
                {event.ctaLabel || 'Coming soon'}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
