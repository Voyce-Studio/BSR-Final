import React from 'react';
import SectionFrame from '../components/primitives/SectionFrame';
import SEO from '../components/meta/SEO';

export default function LegalPrivacy() {
  return (
    <>
      <SEO title="Privacy — Bliss Sound Records" description="We collect only what you submit via our forms." path="/legal/privacy" />
      <SectionFrame>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">Privacy Policy</h1>
          <p>
            We collect only what you submit via our forms. We use this information for professional label operations only and do not distribute it. We store demo uploads securely and purge expired data quarterly.
          </p>
        </div>
      </SectionFrame>
    </>
  );
}
