import React from 'react';
import SectionFrame from '../components/primitives/SectionFrame';
import SEO from '../components/meta/SEO';
import FrostCard from '../components/primitives/FrostCard';

export default function Newsletter() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <>
      <SEO title="Subscribe — Bliss Sound Records" description="Join the Bliss Sound Records newsletter." path="/newsletter" />
      <SectionFrame>
        <FrostCard className="space-y-4">
          <h1 className="text-4xl font-semibold">Newsletter</h1>
          <p>Monthly letters with premieres, press moments, and studio stories.</p>
          {submitted ? (
            <p className="text-bsr-blue">You&apos;re confirmed. See you in the next issue.</p>
          ) : (
            <form
              className="flex flex-wrap gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input className="px-4 py-3 rounded-2xl border border-black/10 flex-1 min-w-[240px]" placeholder="you@email.com" />
              <button type="submit" className="px-5 py-3 rounded-full bg-bsr-orange text-white uppercase text-xs tracking-[0.3em]">
                Join
              </button>
            </form>
          )}
        </FrostCard>
      </SectionFrame>
    </>
  );
}
