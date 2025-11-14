import React from 'react';
import SectionFrame from '../components/primitives/SectionFrame';
import SubmissionForm from '../features/submissions/SubmissionForm';
import SEO from '../components/meta/SEO';

export default function Submissions() {
  return (
    <>
      <SEO title="Submit Your Demo — Bliss Sound Records" description="Send melodic techno, hard techno, afro-house, or deep house demos to BSR." path="/submissions" />
      <SectionFrame>
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Submissions</p>
            <h1 className="text-4xl font-semibold">Demo intake</h1>
            <p className="text-sm text-black/70">We curate positive, uplifting techno & house. Share your WAV or streaming links.</p>
          </div>
          <SubmissionForm />
        </div>
      </SectionFrame>
    </>
  );
}
