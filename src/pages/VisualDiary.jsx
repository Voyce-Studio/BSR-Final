import React from 'react';
import SEO from '../components/meta/SEO';
import { artistList } from '../utils/constants';
import galleryOne from '../assets/images/arty-backgrounds/BSR 1.png';
import galleryTwo from '../assets/images/arty-backgrounds/BSR 2.png';

const brandKitDownloads = [
  { name: 'BSR Brand Kit (ZIP placeholder)', href: '/press_kit/brand-kit/README.txt', note: 'Replace README with the final zip package when assets are ready.' },
  { name: 'BSR Vinyl Emblem (SVG)', href: '/BSR-VINYL-SVG.svg', note: 'Primary rotating mark used on the hero.' },
  { name: 'BSR Vinyl Animated GIF', href: '/BSR-VINYL-GIF.gif', note: 'Use this halo as a secondary layer behind the SVG.' }
];

const inspirationShots = [
  { src: galleryOne, title: 'Seaside gradients', description: 'Soft coral to teal gradients echo the Seaside Dance Ritual palette.' },
  { src: galleryTwo, title: 'After-hours glass', description: 'Use glassmorphism overlays to highlight typography and strip copy.' },
  { src: galleryTwo, title: 'Texture studies', description: 'Organic grain + blurred light to simulate fog rolling over water.' },
  { src: galleryOne, title: 'Roster capsules', description: 'Pair portraits with circular glows in the spirit of the home orbit.' }
];

export default function VisualDiary() {
  const pressAssets = artistList.filter((artist) => artist.pressKit);

  return (
    <>
      <SEO
        title="BSR Visual Diary — Label Toolkit"
        description="Download the Bliss Sound brand kit, roster press assets, and peek at artwork inspiration."
        path="/visual-diary"
      />
      <section className="border-b border-white/10 text-white">
        <div className="container space-y-4 py-16">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Toolkit</p>
          <h1 className="text-4xl font-semibold">Visual diary</h1>
          <p className="text-sm text-white/70">
            Drop updated assets inside <code>/public/press_kit</code> and this page will serve promoters, writers, and designers with a living toolkit.
          </p>
        </div>
      </section>

      <section className="container space-y-8 py-16 text-white">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">BSR brand kit</h2>
          <p className="text-sm text-white/70">Logos, vinyl glyphs, and placeholder zip so you can swap the final pack without touching the layout.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {brandKitDownloads.map((asset) => (
            <article key={asset.name} className="rounded-3xl border border-white/15 bg-black/40 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold">{asset.name}</p>
              <p className="mt-2 text-xs text-white/60">{asset.note}</p>
              <a
                href={asset.href}
                className="mt-4 inline-flex rounded-full border border-white px-4 py-2 text-xs uppercase tracking-[0.35em] transition hover:bg-white hover:text-black"
                download
              >
                Download
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6 py-12 text-white">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Roster press kits</h2>
          <p className="text-sm text-white/70">Every resident and incoming artist has a folder under <code>/public/press_kit</code>. Update PDFs there to refresh this list.</p>
        </div>
        <div className="overflow-auto rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl">
          <table className="min-w-full border-collapse text-left text-sm text-white/80">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.35em] text-white/60">
              <tr>
                <th className="px-6 py-4">Artist</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Press kit</th>
              </tr>
            </thead>
            <tbody>
              {pressAssets.map((artist) => (
                <tr key={artist.slug} className="border-t border-white/10">
                  <td className="px-6 py-4 font-semibold text-white">{artist.name}</td>
                  <td className="px-6 py-4 text-xs uppercase tracking-[0.35em] text-white/60">{artist.status}</td>
                  <td className="px-6 py-4">
                    <a
                      href={artist.pressKit}
                      className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white transition hover:border-white"
                      download
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container space-y-6 py-12 text-white">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">After-Hours &amp; Artwork Themes</h2>
          <p className="text-sm text-white/70">Mood boards that mirror Julia&apos;s love for seaside elements, corals, textures, and multicolor gradients.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {inspirationShots.map((shot) => (
            <figure key={shot.title} className="overflow-hidden rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-xl">
              <img src={shot.src} alt={shot.title} className="h-60 w-full object-cover" />
              <figcaption className="space-y-1 p-4">
                <p className="text-sm font-semibold">{shot.title}</p>
                <p className="text-xs text-white/70">{shot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
