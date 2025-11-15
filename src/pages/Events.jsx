import React, { useState } from 'react';
import SEO from '../components/meta/SEO';
import EventsList from '../features/events/EventsList';
import { eventList, socials } from '../utils/constants';
import heroVideo from '../assets/webm/background.webm';

export default function Events() {
  const [form, setForm] = useState({ name: '', email: '', city: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder submit hook; integrate with backend later.
    setForm({ name: '', email: '', city: '', message: '' });
  };

  return (
    <>
      <SEO
        title="BSR Events — Club culture, reimagined"
        description="Immersive Bliss Sound Records events, pop-ups, and listening rooms. RSVP early and follow Instagram for live updates."
        path="/events"
        keywords={['BSR events', 'techno pop up', 'listening room', 'Bliss Sound Instagram']}
      />
      <section className="relative overflow-hidden border-b border-white/10 text-white">
        <video
          src={heroVideo}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="container relative space-y-4 py-24">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Happenings</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Events &amp; activations</h1>
          <p className="max-w-3xl text-base text-white/75">
            Residencies, pop-up listening rooms, and touring showcases are staged quarterly. Upcoming stops below—tap RSVP where available, subscribe for Goa updates, or apply to our invite-only artist circles.
          </p>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="container space-y-10 py-16">
          <EventsList events={eventList} />
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Stay informed</p>
              <h3 className="mt-2 text-2xl font-semibold">Subscribe to the Bloom Signal</h3>
              <p className="text-sm text-white/70">A monthly dispatch with new venue reveals, ticket drops, and behind-the-scenes stories. Zero spam.</p>
              <a
                href="/newsletter"
                className="mt-4 inline-flex rounded-full border border-white px-5 py-2 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
              >
                Join newsletter
              </a>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Live updates</p>
              <h3 className="mt-2 text-2xl font-semibold">Follow @blisssoundrecords</h3>
              <p className="text-sm text-white/70">BTS studio clips, day-of set times, and real-time ticket links drop on Instagram first.</p>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-white px-5 py-2 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
              >
                Open Instagram
              </a>
            </article>
          </div>
          <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-1 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <video
              src={heroVideo}
              className="absolute inset-0 h-full w-full rounded-[32px] object-cover opacity-20"
              autoPlay
              muted
              loop
              playsInline
            />
            <form onSubmit={handleSubmit} className="relative space-y-4 rounded-[32px] bg-black/80 p-6 backdrop-blur-xl">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">Host BSR</p>
                <h3 className="text-2xl font-semibold">Request a takeover</h3>
                <p className="text-sm text-white/70">Tell us about your venue or festival and we&apos;ll respond with availability + routing.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {['name', 'email', 'city'].map((field) => (
                  <label key={field} className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {field}
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required={field !== 'city'}
                      className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-white focus:outline-none"
                    />
                  </label>
                ))}
              </div>
              <label className="text-xs uppercase tracking-[0.3em] text-white/60">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-white focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="rounded-full border border-white px-6 py-3 text-xs uppercase tracking-[0.4em] transition hover:bg-white hover:text-black"
              >
                Send request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
