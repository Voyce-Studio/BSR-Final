import React from 'react';
import SectionFrame from '../components/SectionFrame';
import SEO from '../components/SEO';
import FrostCard from '../components/FrostCard';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Bliss Sound Records" description="Reach the Bliss Sound team for press, syncs, or collaborations." path="/contact" />
      <SectionFrame>
        <FrostCard className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Contact Desk</p>
            <h1 className="text-4xl font-semibold">Contact</h1>
          </div>
          <p>
            Route general enquiries through <code className="rounded bg-black/5 px-1">/server/contact.php</code>. POST <code>name</code>, <code>email</code>, <code>topic</code>, and <code>message</code>. Successful submissions redirect to{' '}
            <code className="rounded bg-black/5 px-1">/ThankYouForConnecting.html</code>.
          </p>
          <p>
            Demo uploads still use <code className="rounded bg-black/5 px-1">/server/submit_demo.php</code>. We reply with <code>hello@blisssoundrecords.com</code>, and hidden archival copies are logged automatically.
          </p>
          <p>
            Need additional touchpoints? Point partners to <code className="rounded bg-black/5 px-1">ThankYouForSubmission.html</code> after demo workflows, or embed the discography artwork located in <code className="rounded bg-black/5 px-1">/public/artwork</code>.
          </p>
        </FrostCard>
      </SectionFrame>
    </>
  );
}
