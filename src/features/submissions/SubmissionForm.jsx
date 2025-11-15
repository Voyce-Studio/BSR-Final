import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  artist: z.string().min(2, 'Artist name required'),
  email: z.string().email('Valid email required'),
  country: z.string().optional(),
  timeline: z.string().min(1, 'Select a release window'),
  links: z.string().min(4, 'Share at least one link'),
  notes: z.string().optional(),
  socials: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent required' }) }),
  file: z.any()
});

const fields = [
  { name: 'artist', label: 'Artist / Project', placeholder: 'Celestial Pulse' },
  { name: 'email', label: 'Contact email', placeholder: 'you@email.com', type: 'email' },
  { name: 'country', label: 'Country / Region', placeholder: 'Germany · EU · LATAM' }
];

const releaseWindows = ['ASAP / promos ready', '1-3 months out', '6+ months / early ideas'];

const insightPills = [
  { label: 'Average response', value: '4 business days' },
  { label: 'Preferred genres', value: 'Blooming house · textured techno' },
  { label: 'File limit', value: '1 WAV · 300 MB' }
];

export default function SubmissionForm() {
  const navigate = useNavigate();
  const fileInputRef = React.useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    setValue
  } = useForm({ resolver: zodResolver(schema), defaultValues: { timeline: releaseWindows[1] } });
  const [status, setStatus] = React.useState(null);

  const watchFields = watch(['artist', 'email', 'links', 'consent']);
  const attachedFile = watch('file')?.[0];
  const completion = Math.round(
    (watchFields.filter((value) => (typeof value === 'boolean' ? value : value?.length)).length / watchFields.length) * 100
  );

  const onSubmit = async (data) => {
    try {
      const body = new FormData();
      body.append('artist', data.artist);
      body.append('email', data.email);
      body.append('country', data.country || '');
      body.append('timeline', data.timeline);
      body.append('links', data.links || '');
      body.append('notes', data.notes || '');
      body.append('socials', data.socials || '');
      body.append('consent', data.consent ? 'yes' : '');
      if (data.file?.[0]) body.append('file', data.file[0]);

      setStatus('sending');
      const res = await fetch('/server/submit_demo.php', { method: 'POST', body });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || 'Submission failed');
      reset({ timeline: releaseWindows[1] });
      navigate('/submissions/success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleFilePrompt = () => fileInputRef.current?.click();

  return (
    <div className="space-y-8 overflow-hidden rounded-[32px] border border-white/15 bg-slate-950 p-8 text-white shadow-[0_30px_70px_rgba(0,0,0,0.65)]">
      <div className="grid gap-6 lg:grid-cols-[1fr,260px]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Demo intake</p>
          <h3 className="text-3xl font-semibold leading-tight text-white">Share a living link or one WAV and outline how we can help release it.</h3>
          <p className="text-sm text-white/70">
            High-energy melodic techno, jazz-influenced house, percussive experiments, and club-focused ambience fit the brief. Please include private links with download enabled when possible.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            {insightPills.map((pill) => (
              <span key={pill.label} className="rounded-full border border-white/20 px-3 py-1 text-white/80">
                <strong className="mr-2 text-white/60">{pill.label}:</strong>
                {pill.value}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/5 p-5 shadow-inner">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Progress tracker</p>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-bsr-lilac via-bsr-blue to-bsr-orange"
              animate={{ width: `${completion}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>
          <p className="mt-2 text-sm text-white/80">{completion || 0}% complete</p>
          <p className="text-xs text-white/60">Finish the highlighted steps to unlock the submit button.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          {fields.map((field) => (
            <label key={field.name} className="flex flex-col gap-2 text-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">{field.label}</span>
              <input
                type={field.type || 'text'}
                placeholder={field.placeholder}
                className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
                {...register(field.name)}
              />
              {errors[field.name] && <span className="text-xs text-bsr-orange">{errors[field.name].message}</span>}
            </label>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Release window</p>
          <div className="grid gap-3 md:grid-cols-3">
            {releaseWindows.map((window) => {
              const isActive = watch('timeline') === window;
              return (
                <button
                  key={window}
                  type="button"
                  onClick={() => setValue('timeline', window, { shouldValidate: true })}
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${isActive ? 'border-white bg-white text-black' : 'border-white/20 bg-black/30 text-white/70 hover:border-white/60'}`}
                >
                  {window}
                </button>
              );
            })}
          </div>
          {errors.timeline && <span className="text-xs text-bsr-orange">{errors.timeline.message}</span>}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Streaming / download links*</span>
            <textarea
              rows="4"
              placeholder="SoundCloud (private), Dropbox, Drive, YouTube, WeTransfer, etc."
              className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              {...register('links')}
            />
            {errors.links && <span className="text-xs text-bsr-orange">{errors.links.message}</span>}
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Story / release intent</span>
            <textarea
              rows="4"
              placeholder="Tell us about the show-ready concept, collaborators, or stages you envision."
              className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              {...register('notes')}
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Key social handles</span>
            <input
              type="text"
              placeholder="@instagram · @soundcloud · website"
              className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              {...register('socials')}
            />
          </label>
          <div className="text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Upload WAV (optional)</span>
            <div
              className="mt-2 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-white/20 bg-black/30 px-4 py-6 text-left"
            >
              <input ref={fileInputRef} type="file" accept=".wav,audio/wav" className="hidden" {...register('file')} />
              <button
                type="button"
                onClick={handleFilePrompt}
                className="rounded-full border border-white/40 px-4 py-2 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
              >
                {attachedFile ? 'Replace file' : 'Attach WAV'}
              </button>
              <p className="text-xs text-white/60">
                {attachedFile ? `${attachedFile.name} — ${(attachedFile.size / 1024 / 1024).toFixed(1)} MB` : 'Max 300 MB · rename file with artist name.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" className="mt-1" {...register('consent')} />
            <span>I consent to Bliss Sound Records storing this information for demo review and follow-up communication.</span>
          </label>
          <div className="space-y-2 text-xs">
            {errors.consent && <p className="text-bsr-orange">{errors.consent.message}</p>}
            {status === 'error' && <p className="text-bsr-orange">Something glitched — refresh and try again.</p>}
            {status === 'sending' && <p className="text-white/70">Uploading… please keep this tab open.</p>}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="rounded-full border border-white px-8 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-black disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending demo…' : 'Send demo'}
          </button>
          <span className="text-xs text-white/60">
            A confirmation email arrives shortly. Questions? Write{' '}
            <a className="underline" href="mailto:demos@blisssoundrecords.com">
              demos@blisssoundrecords.com
            </a>
            .
          </span>
        </div>
      </form>
    </div>
  );
}
