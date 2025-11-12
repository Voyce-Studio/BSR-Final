import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import FrostCard from '../../components/FrostCard';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  artist: z.string().min(2, 'Artist name required'),
  email: z.string().email('Valid email required'),
  country: z.string().optional(),
  links: z.string().min(4, 'Share at least one link').optional(),
  notes: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Consent required' }) }),
  file: z.any()
});

const fields = [
  { name: 'artist', label: 'Artist / Project', placeholder: 'Celestial Pulse' },
  { name: 'email', label: 'Contact email', placeholder: 'you@email.com', type: 'email' },
  { name: 'country', label: 'Country / Region', placeholder: 'Germany or EU' }
];

export default function SubmissionForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm({ resolver: zodResolver(schema) });
  const [status, setStatus] = React.useState(null);

  const watchFields = watch(['artist', 'email', 'links', 'consent']);
  const completion = Math.round(
    (watchFields.filter((value) => (typeof value === 'boolean' ? value : value?.length)).length / watchFields.length) * 100
  );

  const onSubmit = async (data) => {
    try {
      const body = new FormData();
      body.append('artist', data.artist);
      body.append('email', data.email);
      body.append('country', data.country || '');
      body.append('links', data.links || '');
      body.append('notes', data.notes || '');
      body.append('consent', data.consent ? 'yes' : '');
      if (data.file?.[0]) body.append('file', data.file[0]);

      setStatus('sending');
      const res = await fetch('/server/submit_demo.php', { method: 'POST', body });
      const json = await res.json();
      if (!json.ok) throw new Error(json.error || 'Submission failed');
      reset();
      navigate('/submissions/success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <FrostCard className="p-8 space-y-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.4em] text-black/60">Demo intake</p>
          <h3 className="text-2xl font-semibold">Share links or a single WAV (max 300 MB)</h3>
        </div>
        <div className="w-full md:w-48">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">Progress</p>
          <div className="h-2 rounded-full bg-black/10 mt-2 overflow-hidden">
            <div className="h-full bg-bsr-blue transition-all" style={{ width: `${completion}%` }} />
          </div>
          <p className="text-xs text-black/60 mt-1">{completion}% ready</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          {fields.map((field) => (
            <label key={field.name} className="flex flex-col gap-2 text-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-black/60">{field.label}</span>
              <input
                type={field.type || 'text'}
                placeholder={field.placeholder}
                className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 focus:border-bsr-blue/60 focus:outline-none"
                {...register(field.name)}
              />
              {errors[field.name] && <span className="text-xs text-bsr-orange">{errors[field.name].message}</span>}
            </label>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-black/60">Links*</span>
            <textarea
              rows="4"
              placeholder="SoundCloud, Dropbox, Drive, YouTube, etc."
              className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 focus:border-bsr-blue/60 focus:outline-none"
              {...register('links')}
            />
            {errors.links && <span className="text-xs text-bsr-orange">{errors.links.message}</span>}
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-black/60">Notes</span>
            <textarea
              rows="4"
              placeholder="Context, collaborators, stage plan, etc."
              className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 focus:border-bsr-blue/60 focus:outline-none"
              {...register('notes')}
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-black/60">Upload WAV (optional)</span>
            <div className="mt-2 rounded-2xl border border-dashed border-black/20 bg-white/60 px-4 py-6">
              <input type="file" accept=".wav,audio/wav" {...register('file')} />
              <p className="text-xs text-black/60 mt-2">Max 300 MB • one file only • rename with artist name.</p>
            </div>
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 text-sm">
              <input type="checkbox" {...register('consent')} />
              <span>I consent to BSR using this data to review and contact me.</span>
            </label>
            {errors.consent && <p className="text-xs text-bsr-orange">{errors.consent.message}</p>}
            {status === 'error' && <p className="text-xs text-bsr-orange">Something glitched — try again.</p>}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-bsr-blue text-white tracking-[0.3em] uppercase text-xs"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Send demo'}
          </button>
          <span className="text-xs text-black/60">A confirmation email will echo back within a few minutes.</span>
        </div>
      </form>
    </FrostCard>
  );
}
