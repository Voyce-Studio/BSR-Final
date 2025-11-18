import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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

  const attachedFile = watch('file')?.[0];

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
    <div className="space-y-8 rounded-[36px] border border-white/15 bg-black/45 p-8 text-white backdrop-blur-xl">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Upload</p>
        <h3 className="text-3xl font-semibold leading-tight">Share a living link or one WAV and outline how we can help release it.</h3>
        <p className="text-sm text-white/70">
          High-energy melodic techno, jazz-influenced house, percussive experiments, and club-focused ambience fit the brief. Include private links with download enabled when possible.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          {fields.map((field) => (
            <label key={field.name} className="flex flex-col gap-2 text-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">{field.label}</span>
              <input
                type={field.type || 'text'}
                placeholder={field.placeholder}
                className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
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
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${
                    isActive ? 'border-white bg-white text-black' : 'border-white/25 bg-transparent text-white/70 hover:border-white/60'
                  }`}
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
              className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              {...register('links')}
            />
            {errors.links && <span className="text-xs text-bsr-orange">{errors.links.message}</span>}
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Story / release intent</span>
            <textarea
              rows="4"
              placeholder="Tell us about the show-ready concept, collaborators, or stages you envision."
              className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
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
              className="rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              {...register('socials')}
            />
          </label>
          <div className="text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Upload WAV (optional)</span>
            <div className="mt-2 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-white/25 bg-transparent px-4 py-6 text-left">
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
          <div className="rounded-2xl border border-white/20 px-4 py-3 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Notes</p>
            <p>Upcoming shows, collaborators, visuals, play history, or any other detail can be added inside the story field above.</p>
          </div>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Consent</span>
            <div className="rounded-2xl border border-white/20 px-4 py-3">
              <label className="flex items-center gap-3 text-white/70">
                <input type="checkbox" {...register('consent')} className="h-4 w-4" />
                I confirm this submission is original and agree to be contacted via email.
              </label>
              {errors.consent && <span className="mt-2 block text-xs text-bsr-orange">{errors.consent.message}</span>}
            </div>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full border border-white px-6 py-3 text-xs uppercase tracking-[0.4em] transition hover:bg-white hover:text-black disabled:opacity-60"
          >
            {isSubmitting ? 'Sending…' : 'Submit demo'}
          </button>
          {status === 'error' && <span className="text-xs text-bsr-orange">Something went wrong. Please try again.</span>}
        </div>
      </form>

      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
        {insightPills.map((pill) => (
          <span key={pill.label} className="rounded-full border border-white/20 px-4 py-2 text-white/80">
            <strong className="mr-2 text-white/60">{pill.label}:</strong>
            {pill.value}
          </span>
        ))}
      </div>
    </div>
  );
}
