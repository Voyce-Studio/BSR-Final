import React from 'react';
import SectionFrame from '../components/SectionFrame';
import EventsList from '../features/events/EventsList';
import SEO from '../components/SEO';
import { eventList } from '../utils/constants';

export default function Events() {
  return (
    <>
      <SEO title="BSR Events — Club culture, reimagined" description="Intimate listening rooms and club takeovers with Bliss Sound." path="/events" />
      <SectionFrame>
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Happenings</p>
            <h1 className="text-4xl font-semibold">Events &amp; activations</h1>
          </div>
          <EventsList events={eventList} />
        </div>
      </SectionFrame>
    </>
  );
}
