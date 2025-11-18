import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/meta/SEO';
import { routesMeta } from '../utils/constants';

export default function SitemapPage() {
  const filteredRoutes = routesMeta.filter((route) => !route.path.startsWith('/legal'));

  return (
    <>
      <SEO title="Site Map — Bliss Sound Records" description="HTML overview of every Bliss Sound Records page." path="/sitemap" />
      <section className="border-b border-white/10 text-white">
        <div className="container space-y-4 py-16">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Site Map</p>
          <h1 className="text-4xl font-semibold">HTML overview</h1>
          <p className="text-sm text-white/70">
            Every route listed below is also published inside <code>/public/sitemap.xml</code> for crawlers.
          </p>
        </div>
      </section>
      <section className="container py-12 text-white">
        <div className="grid gap-4 md:grid-cols-2">
          {filteredRoutes.map((route) => (
            <article key={route.path} className="rounded-[28px] border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
              <Link to={route.path} className="text-lg font-semibold text-white hover:underline">
                {route.title}
              </Link>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">{route.path}</p>
              <p className="mt-2 text-sm text-white/70">{route.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
