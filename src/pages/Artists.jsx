import React from 'react';
import SectionFrame from '../components/SectionFrame';
import ArtistsGrid from '../features/artists/ArtistsGrid';
import ArtistDetail from '../features/artists/ArtistDetail';
import SEO from '../components/SEO';
import { artistList } from '../utils/constants';

export default function Artists() {
  const [selected, setSelected] = React.useState(artistList[0]);

  return (
    <>
      <SEO title="BSR Artists — New voices in electronic music" description="Meet the Bliss Sound roster pushing club culture forward." path="/artists" />
      <SectionFrame tone="halo">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Roster</p>
            <h1 className="text-4xl font-semibold">New voices in electronic music</h1>
          </div>
          <ArtistsGrid artists={artistList} active={selected} onSelect={setSelected} />
        </div>
      </SectionFrame>
      <SectionFrame tone="dusk">
        <ArtistDetail artist={selected} />
      </SectionFrame>
    </>
  );
}
