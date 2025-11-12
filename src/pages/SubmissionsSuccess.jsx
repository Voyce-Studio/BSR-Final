import React from 'react';
import SectionFrame from '../components/SectionFrame';
import SubmissionSuccess from '../features/submissions/SubmissionSuccess';
import SEO from '../components/SEO';

export default function SubmissionsSuccess() {
  return (
    <>
      <SEO title="Demo Received — Bliss Sound Records" description="Your submission reached Bliss Sound." path="/submissions/success" />
      <SectionFrame>
        <SubmissionSuccess />
      </SectionFrame>
    </>
  );
}
