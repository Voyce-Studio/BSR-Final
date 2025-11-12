import React from 'react';
import FrostCard from '../../components/FrostCard';
import { Link } from 'react-router-dom';

export default function SubmissionSuccess() {
  return (
    <FrostCard className="text-center space-y-4">
      <p className="text-xs uppercase tracking-[0.3em] text-bsr-blue">Submission received</p>
      <h2 className="text-3xl font-semibold">Give us a little time to float through it.</h2>
      <p>We will reach out if it fits the Bliss Sound wave.</p>
      <Link to="/" className="inline-flex px-5 py-3 rounded-full border border-black/20 hover:border-bsr-blue/60">
        Back home
      </Link>
    </FrostCard>
  );
}
