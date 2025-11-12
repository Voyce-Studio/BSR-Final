import React from 'react';
import SectionFrame from '../components/SectionFrame';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Not Found — Bliss Sound Records" description="This route dissolved into the noise." path="/404" />
      <SectionFrame>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold">Route dissolved.</h1>
          <p>The content you&apos;re after isn&apos;t framed yet.</p>
          <Link to="/" className="inline-flex px-4 py-2 rounded-full border border-black/10">
            Return home
          </Link>
        </div>
      </SectionFrame>
    </>
  );
}
