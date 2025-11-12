import React from 'react';
import SectionFrame from '../components/SectionFrame';
import SEO from '../components/SEO';
import FrostCard from '../components/FrostCard';
import { Link } from 'react-router-dom';

export default function Collaborate() {
  return (
    <>
      <SEO title="Collaborate with BSR — Industry & Partners" description="Start a collaboration with Bliss Sound Records." path="/collaborate" />
      <SectionFrame>
        <FrostCard className="space-y-4">
          <h1 className="text-4xl font-semibold">Collaborate</h1>
          <p>We partner on art direction, label showcases, immersive rooms, and bespoke releases. We don&apos;t take booking requests.</p>
          <Link to="/contact" className="inline-flex px-5 py-3 rounded-full border border-black/10">
            Contact team
          </Link>
        </FrostCard>
      </SectionFrame>
    </>
  );
}
