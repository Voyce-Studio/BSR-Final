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
    <div className="space-y-6">
      {events.map((event) => (
        <article
          key={event.name}
          className="flex flex-col gap-6 rounded-[36px] border border-white/10 bg-black/65 p-6 text-white backdrop-blur-2xl md:flex-row"
        >
          <div className="relative h-44 w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/5 md:w-64">
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(circle at 50% 20%, ${event.previewTone || '#ffffff'}, transparent 70%)` }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.4em] text-white/70 backdrop-blur-sm">
              {event.previewLabel || 'Preview coming soon'}
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-4">
            <div className="space-y-2">
              <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/50">{event.status}</p>
              <h3 className="text-2xl font-semibold tracking-[0.2em]">{event.name}</h3>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">{event.date}</p>
              <p className="text-sm text-white/70">{event.summary}</p>
            </div>
            <div>
              {event.ticketsUrl ? (
                <a
                  href={event.ticketsUrl}
                  className="inline-flex items-center justify-center rounded-full border border-white px-5 py-2 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-black"
                >
                  {event.ctaLabel || 'RSVP'}
                </a>
              ) : (
                <span className="inline-flex rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/60">
                  {event.ctaLabel || 'Coming soon'}
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
