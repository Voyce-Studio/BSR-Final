import React from 'react';
import SEO from '../components/meta/SEO';

const perks = ['Guestlist priority for BSR pop-ups', 'First access to mix and release drops', 'Label toolkit and artwork memos'];

export default function Newsletter() {
  const [submitted, setSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  return (
    <>
      <SEO title="Subscribe — Bliss Sound Records" description="Join the Bliss Sound Records newsletter." path="/newsletter" />
      <section className="text-white">
        <div className="container space-y-8 py-20">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Newsletter</p>
            <h1 className="text-4xl font-semibold">Join the BSR TRIBE TODAY.</h1>
            <p className="text-sm text-white/70">Monthly signal dispatch with premieres, guestlist drops, toolkit updates, and field notes from our roster.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <ul className="space-y-3 text-sm text-white/70">
              {perks.map((perk) => (
                <li key={perk} className="rounded-3xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-xl">
                  {perk}
                </li>
              ))}
            </ul>
            {submitted ? (
              <div className="rounded-[32px] border border-white/15 bg-black/40 p-6 text-center text-white/80 backdrop-blur-xl" aria-live="polite">
                {status || "You're confirmed. See you in the next issue."}
              </div>
            ) : (
              <form
                className="space-y-4 rounded-[32px] border border-white/20 bg-black/35 p-6 backdrop-blur-xl"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!email.trim()) return;
                  setIsSubmitting(true);
                  setStatus(null);
                  try {
                    const body = new FormData();
                    body.append('email', email.trim());
                    const response = await fetch('/server/newsletter.php', { method: 'POST', body });
                    const json = await response.json();
                    if (!response.ok || !json.ok) throw new Error(json.error || 'Unable to subscribe');
                    setSubmitted(true);
                    setStatus("You're confirmed. See you in the next issue.");
                    setEmail('');
                  } catch (error) {
                    setStatus('Something went wrong. Email hello@blisssoundrecords.com.');
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <input
                  className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                  placeholder="you@email.com"
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full border border-white px-6 py-3 text-xs uppercase tracking-[0.4em] transition hover:bg-white hover:text-black disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending…' : 'Join tribe'}
                </button>
                {status && (
                  <p className="text-sm text-white/70" aria-live="polite">
                    {status}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
