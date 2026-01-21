import React from 'react';
import SEOHead from '../../components/seo/SEOHead';

export default function UpcomingEvents() {
  return (
    <>
      <SEOHead
        title="Upcoming Events | TVET Conferences, Workshops & Networking"
        description="See upcoming TVET events, conferences, workshops, and networking opportunities hosted by Elolo Agbleke."
        canonical="https://eloloagbleke.com/events/upcoming"
        openGraph={{
          title: "Upcoming Events | TVET Conferences, Workshops & Networking",
          description: "See upcoming TVET events, conferences, workshops, and networking opportunities hosted by Elolo Agbleke.",
          url: "https://eloloagbleke.com/events/upcoming"
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'upcoming events, TVET, conferences, workshops, networking, Elolo Agbleke, Ghana, professional development, education'
        }]}
      />
      <div className="max-w-2xl mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-6 text-[#df8125]">Upcoming Events</h1>
        <p className="text-lg text-gray-700">Not available at the moment.</p>
      </div>
    </>
  );
}
