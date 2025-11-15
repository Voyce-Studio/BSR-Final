import React, { useState } from 'react';
import SectionFrame from '../components/primitives/SectionFrame';
import SEO from '../components/meta/SEO';
import FrostCard from '../components/primitives/FrostCard';

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
      <SectionFrame>
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Contact Desk</p>
            <h1 className="text-4xl font-semibold">Let&apos;s build the next collaboration</h1>
            <p className="text-base text-black/70">
              Press, sync, immersive residencies, and technology partners are all handled by our core team. Demos should still arrive through the{' '}
              <a className="underline" href="/submissions">
                submission intake
              </a>
              .
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {contactLanes.map((lane) => (
              <article key={lane.title} className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">{lane.title}</p>
                <a href={`mailto:${lane.email}`} className="mt-2 block text-lg font-semibold text-black hover:underline">
                  {lane.email}
                </a>
                <p className="text-xs text-black/60">{lane.sla}</p>
              </article>
            ))}
          </div>
          <FrostCard className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-black/60">Message form</p>
              <h2 className="text-3xl font-semibold">Send a secure note</h2>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-black/60">
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="rounded-2xl border border-black/10 px-4 py-3 text-sm focus:border-black/40 focus:outline-none"
                  aria-label="Full name"
                />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-black/60">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="rounded-2xl border border-black/10 px-4 py-3 text-sm focus:border-black/40 focus:outline-none"
                  aria-label="Email address"
                />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-black/60">
                Topic
                <input
                  type="text"
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  placeholder="Press, sync, tour, etc."
                  className="rounded-2xl border border-black/10 px-4 py-3 text-sm focus:border-black/40 focus:outline-none"
                />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.3em] text-black/60">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="rounded-2xl border border-black/10 px-4 py-3 text-sm focus:border-black/40 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full border border-black px-6 py-3 text-xs uppercase tracking-[0.3em] transition hover:bg-black hover:text-white disabled:opacity-50"
              >
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
            {status && (
              <p className="text-sm text-black/60" aria-live="polite">
                {status}
              </p>
            )}
          </FrostCard>
        </div>
      </SectionFrame>
    </>
  );
}
