import React from 'react';
import { Youtube, Waves, Cloud, Apple } from 'lucide-react';
import logoMark from '../assets/images/logo.svg';
import SpotifyGlyph from './icons/SpotifyGlyph';

const socials = [
  { href: 'https://music.apple.com', label: 'Apple Music', Icon: Apple },
  { href: 'https://open.spotify.com', label: 'Spotify', Icon: SpotifyGlyph },
  { href: 'https://www.youtube.com', label: 'YouTube', Icon: Youtube },
  { href: 'https://soundcloud.com', label: 'SoundCloud', Icon: Cloud },
  { href: 'https://www.beatport.com', label: 'Beatport', Icon: Waves, badge: 'coming soon' }
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black text-white">
      <div className="container flex flex-col gap-10 py-12">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={logoMark}
              alt="Bliss Sound Records"
              className="h-12 w-auto drop-shadow-[0_10px_25px_rgba(15,23,42,0.2)]"
            />
            <div className="text-xs uppercase tracking-[0.5em] text-white/60">FORWARD ONLY / LOW TEXT — BLOOMING HOUSE & TEXTURED TECHNO</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ href, label, Icon, badge }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white/80 transition hover:border-white hover:text-white"
              >
                <Icon size={16} />
                <span>{label}</span>
                {badge && (
                  <span className="text-[9px] uppercase tracking-[0.3em] bg-white/20 text-white px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.45em] text-white/60">
          <span>© {new Date().getFullYear()} Bliss Sound Records</span>
          <span>Neon sunrise // catalog in motion</span>
        </div>
      </div>
    </footer>
  );
}
