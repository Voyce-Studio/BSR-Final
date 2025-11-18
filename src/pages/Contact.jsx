import React, { useState } from 'react';
import SEO from '../components/meta/SEO';
import hostVideo from '../assets/webm/background.webm';

const initialState = { name: '', email: '', topic: '', message: '' };

const contactLanes = [
  { title: 'Press & media', email: 'press@blisssoundrecords.com', sla: 'Replies within 2 business days' },
  { title: 'Sync & licensing', email: 'sync@blisssoundrecords.com', sla: 'Custom stems & clearances within 72h' },
  { title: 'Partnerships & residencies', email: 'partners@blisssoundrecords.com', sla: 'Dedicated producer follow-up' }
];

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      const body = new FormData();
      Object.entries(form).forEach(([key, value]) => body.append(key, value));
      const response = await fetch('/server/contact.php', { method: 'POST', body });
      if (!response.ok) throw new Error('Unable to send message');
      setStatus('Thanks for reaching out — we received your note.');
      setForm(initialState);
    } catch (error) {
      setStatus('Something went wrong. Email hello@blisssoundrecords.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Bliss Sound Records — Press, Sync, Partnerships"
        description="Reach the Bliss Sound Records team for press, sync, residencies, or immersive collaborations."
        path="/contact"
        keywords={['contact Bliss Sound Records', 'press request', 'music label sync', 'electronic residencies']}
      />
      <section className="border-b border-white/10 text-white">
        <div className="container space-y-4 py-16">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Contact desk</p>
          <h1 className="text-4xl font-semibold">Let&apos;s build the next collaboration</h1>
          <p className="text-base text-white/70">
            Press, sync, immersive residencies, and technology partners are handled directly by the Bliss Sound core team.
            Demos should still arrive through the <a href="/submissions" className="underline">submissions intake</a>.
          </p>
        </div>
      </section>

      <section className="container space-y-10 py-16 text-white">
        <div className="grid gap-4 md:grid-cols-3">
          {contactLanes.map((lane) => (
            <article key={lane.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">{lane.title}</p>
              <a href={`mailto:${lane.email}`} className="mt-2 block text-lg font-semibold text-white hover:underline">
                {lane.email}
              </a>
              <p className="text-xs text-white/60">{lane.sla}</p>
            </article>
          ))}
        </div>

        <section id="host-bsr" className="relative overflow-hidden rounded-[40px] border border-white/15">
          <video
            src={hostVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="relative space-y-4 p-8 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Host BSR</p>
            <h2 className="text-3xl font-semibold">Request a takeover</h2>
            <p className="max-w-2xl text-sm text-white/75">
              Share your venue specs, technical routing, and preferred dates. We&apos;ll reply with availability and touring context.
            </p>
            <a href="#contact-form" className="inline-flex rounded-full border border-white px-6 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-white hover:text-black">
              Skip to form
            </a>
          </div>
        </section>

        <div className="rounded-[36px] border border-white/15 bg-black/50 p-8 backdrop-blur-2xl" id="contact-form">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Message form</p>
            <h2 className="text-3xl font-semibold">Send a secure note</h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
              Topic
              <input
                type="text"
                name="topic"
                value={form.topic}
                onChange={handleChange}
                placeholder="Press, sync, tour, etc."
                className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
              />
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full border border-white px-6 py-3 text-xs uppercase tracking-[0.35em] transition hover:bg-white hover:text-black disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
          </form>
          {status && (
            <p className="mt-4 text-sm text-white/70" aria-live="polite">
              {status}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
