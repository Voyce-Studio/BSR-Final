import React, { useState } from 'react';
import SectionFrame from '../components/SectionFrame';
import SEO from '../components/SEO';
import FrostCard from '../components/FrostCard';

const initialState = { name: '', email: '', topic: '', message: '' };

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
      <SEO title="Contact Bliss Sound Records" description="Reach the Bliss Sound team for press, syncs, or collaborations." path="/contact" />
      <SectionFrame>
        <FrostCard className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Contact Desk</p>
            <h1 className="text-4xl font-semibold">Contact</h1>
          </div>
          <p>
            Ping us for press, sync, tour, or partnership requests. Demos still route through{' '}
            <code className="rounded bg-black/5 px-1">/server/submit_demo.php</code>.
          </p>
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
              className="rounded-full border border-black px-6 py-3 text-xs uppercase tracking-[0.3em] disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
          </form>
          {status && <p className="text-sm text-black/60">{status}</p>}
        </FrostCard>
      </SectionFrame>
    </>
  );
}
