import React from 'react';
import SubmissionForm from '../features/submissions/SubmissionForm';
import SEO from '../components/meta/SEO';



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
      <section className="text-white">
        <div className="container space-y-10 py-16">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Submissions</p>
            <h1 className="text-4xl font-semibold">Demo intake</h1>
            <p className="text-base text-white/70">
              We are always looking for new sounds that resonate with the Bliss Sound ethos. If you produce melodic techno, deep house, or textured electronic music, we want to hear from you. Use the form below to send us your best work.
            </p>
          </div>
          <SubmissionForm />
          <div className="rounded-3xl border border-white/15 bg-black/35 p-5 text-sm text-white/70">
            Trouble with the form or sending multiple files? Compress stems into one download and email{' '}
            <a href="mailto:blisssoundrecords@gmail.com" className="underline">
              blisssoundrecords@gmail.com
            </a>
            .
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Curation focus', body: 'We look for melodic and textured techno, leftfield house, and percussive Afro-electronic sounds that tell a story.' },
              { title: 'What to include', body: 'Please provide private streaming links (SoundCloud/Dropbox) with download options. Include a brief bio and any relevant collaborator credits.' },
              { title: 'Follow-up', body: 'We listen to every submission. While we try to respond to everyone, please allow up to two weeks for a response due to the volume of demos we receive.' }
            ].map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/15 bg-black/40 p-5 text-sm backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.title}</p>
                <p className="mt-2 text-white/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
