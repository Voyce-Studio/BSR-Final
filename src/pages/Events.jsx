import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/meta/SEO';
import EventsList from '../features/events/EventsList';
import { eventList, socials } from '../utils/constants';

export default function Events() {
  return (
    <>
      <SEO
        title="BSR Events — Club culture, reimagined"
        description="Immersive Bliss Sound Records events, pop-ups, and listening rooms. RSVP early and follow Instagram for live updates."
        path="/events"
        keywords={['BSR events', 'techno pop up', 'listening room', 'Bliss Sound Instagram']}
      />
      <section className="border-b border-white/10 text-white">
        <div className="container space-y-4 py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Happenings</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Events &amp; activations</h1>
          <p className="max-w-3xl text-sm text-white/70">
            The fog field hosts our seaside rituals, Artist Circle demo gatherings, and label takeovers. Every page shares the same VANTA motion so each announcement feels continuous.
          </p>
        </div>
      </section>

      <section className="text-white">
        <div className="container space-y-10 py-16">
          <EventsList events={eventList} />
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/15 bg-black/30 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Stay informed</p>
              <h3 className="mt-2 text-2xl font-semibold">Subscribe to the Bloom Signal</h3>
              <p className="text-sm text-white/70">Lineup confirmations, RSVP links, and site-specific art drops arrive via the newsletter first.</p>
              <a
                href="/newsletter"
                className="mt-4 inline-flex rounded-full border border-white px-5 py-2 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
              >
                Join newsletter
              </a>
            </article>
            <article className="rounded-3xl border border-white/15 bg-black/30 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Live updates</p>
              <h3 className="mt-2 text-2xl font-semibold">Follow the broadcast</h3>
              <p className="text-sm text-white/70">Studio clips, day-of set times, and flash RSVP windows hit Instagram and YouTube before anywhere else.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em]">
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white px-5 py-2 transition hover:bg-white hover:text-black"
                >
                  Instagram
                </a>
                <a
                  href={socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-white/50 px-5 py-2 transition hover:border-white"
                >
                  YouTube
                </a>
              </div>
            </article>
            <article className="rounded-3xl border border-white/15 bg-black/30 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Host BSR</p>
              <h3 className="mt-2 text-2xl font-semibold">Request a takeover</h3>
              <p className="text-sm text-white/70">
                Bring the Bliss Sound roster to your room. We&apos;ve moved the request strip to Contact so you can share specs, tech, and routing details quickly.
              </p>
              <Link
                to="/contact#host-bsr"
                className="mt-4 inline-flex rounded-full border border-white px-5 py-2 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
              >
                Open contact anchor
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
