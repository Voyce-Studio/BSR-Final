import React from 'react';
import SectionFrame from '../components/SectionFrame';
import SEO from '../components/SEO';

export default function LegalTerms() {
  return (
    <>
      <SEO title="Terms — Bliss Sound Records" description="Usage terms for visiting Bliss Sound Records online." path="/legal/terms" />
      <SectionFrame>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">Terms of Use</h1>
          <p>
            By accessing this site you agree not to scrape content, republish art without consent, or misuse submission endpoints. We may update these terms as our label evolves.
          </p>
        </div>
      </SectionFrame>
    </>
  );
}
