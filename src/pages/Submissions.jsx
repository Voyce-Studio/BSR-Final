import React from 'react';
import SectionFrame from '../components/primitives/SectionFrame';
import SubmissionForm from '../features/submissions/SubmissionForm';
import SEO from '../components/meta/SEO';

const expectations = [
  { title: 'Curation focus', body: 'Melodic and textured techno, leftfield house, percussive Afro-electronic, ambient club scores.' },
  { title: 'What to include', body: 'Private links with download enabled, 1–2 sentences about the story, and any collaborators we should credit.' },
  { title: 'Follow-up', body: 'We review everything. Expect a status email within a week—faster if we feel an immediate connection.' }
];

export default function Submissions() {
  return (
    <>
      <SEO
        title="Submit Your Demo — Bliss Sound Records"
        description="Professional submission intake for melodic techno, blooming house, and textured club music."
        path="/submissions"
        keywords={['demo submission', 'melodic techno label', 'Bliss Sound Records', 'textured techno']}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'MusicGroup',
          name: 'Bliss Sound Records',
          url: 'https://www.blisssoundrecords.com/submissions',
          genre: ['Electronic', 'Techno', 'House'],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Demo Submissions',
            email: 'demos@blisssoundrecords.com'
          }
        }}
      />
      <SectionFrame>
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Submissions</p>
            <h1 className="text-4xl font-semibold">Demo intake</h1>
            <p className="text-base text-black/70">
              A polished, secure intake form for artists exploring velvet, percussive textures. Complete the steps below to route your music directly to the Bliss Sound A&R desk.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {expectations.map((item) => (
              <article key={item.title} className="rounded-3xl border border-black/10 bg-white/80 p-4 text-sm shadow-[0_20px_35px_rgba(0,0,0,0.05)]">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">{item.title}</p>
                <p className="mt-2 text-black/70">{item.body}</p>
              </article>
            ))}
          </div>
          <SubmissionForm />
        </div>
      </SectionFrame>
    </>
  );
}
