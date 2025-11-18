import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Waves, Cloud, Apple } from 'lucide-react';
import logoMark from '../../assets/images/logo.svg';
import SpotifyGlyph from '../icons/SpotifyGlyph';

const socials = [
  { href: 'https://music.apple.com', label: 'Apple Music', Icon: Apple },
  { href: 'https://open.spotify.com', label: 'Spotify', Icon: SpotifyGlyph },
  { href: 'https://www.youtube.com', label: 'YouTube', Icon: Youtube },
  { href: 'https://soundcloud.com', label: 'SoundCloud', Icon: Cloud },
  { href: 'https://www.beatport.com', label: 'Beatport', Icon: Waves }
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black text-white">
      <div className="container flex flex-col gap-10 py-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/"
            className="footer-logo-link group relative flex items-center gap-4"
            aria-label="Return to Bliss Sound Records home"
          >
            <span
              className="block h-20 w-40 overflow-hidden"
              style={{ WebkitMaskImage: `url(${logoMark})`, maskImage: `url(${logoMark})`, WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskPosition: 'center', maskPosition: 'center' }}
            >
              <span className="footer-logo-gradient block h-full w-full rounded-sm transition-all duration-500" />
            </span>
            <div className="text-xs uppercase tracking-[0.5em] text-white/60">BLISS SOUND RECORDS</div>
          </Link>
          <div className="flex flex-wrap gap-4">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/60"
                aria-label={label}
              >
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition group-hover:opacity-80" style={{ boxShadow: '0 0 25px rgba(255,255,255,0.35)' }} />
                <Icon size={18} className="transition duration-300 group-hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.65)]" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.45em] text-white/60">
          <span>© {new Date().getFullYear()} Bliss Sound Records | MADE WITH LOVE BY PATTY </span>
          <div className="flex flex-wrap gap-6">
            <Link to="/sitemap" className="transition hover:text-white">
              Sitemap
            </Link>
            <a href="/sitemap.xml" className="transition hover:text-white">XML</a>
            <Link to="/legal/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link to="/legal/terms" className="transition hover:text-white">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
