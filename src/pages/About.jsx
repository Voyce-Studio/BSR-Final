import React from 'react';
import SectionFrame from '../components/primitives/SectionFrame';
import SEO from '../components/meta/SEO';
import FrostCard from '../components/primitives/FrostCard';

export default function About() {
  return (
    <>
      <SEO title="About Bliss Sound Records" description="Learn about Bliss Sound Records and its angelic techno ethos." path="/about" />
      <SectionFrame>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold">Soft light, heavy drums.</h1>
          <FrostCard>
            <p>
              Bliss Sound Records is a boutique imprint rooted in melodic techno, hard techno, afro-house, and deep house.
              We craft curated releases, immersive experiences, and sonic pilgrimages for hopeful ravers.
            </p>
          </FrostCard>
        </div>
      </SectionFrame>
    </>
  );
}
