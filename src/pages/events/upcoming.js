import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, MapPin, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';

export default function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Placeholder upcoming events data
  const events = [
    {
      id: 1,
      title: "VR-based Training for TVET : Bridging the Skills Gap",
      date: "January - April 2026",
      location: "Technical Institutes in Ghana",
      attendees: "Expected 5,000+",
      description: "A comprehensive VR-based training program aimed at bridging the skills gap in TVET across Ghana.",
      image: "/upcoming/tvet.jpeg"
    },
    {
      id: 2,
      title: "VR in TVET : Enhancing Practical Skills Training through Immersive Technology",
      date: "January - June 2026",
      location: "TVET Institutes in Ghana",
      attendees: "Expected 3000+",
      description: "A TVET-focused event exploring the use of VR to enhance practical skills training through immersive technology.",
      image: "/upcoming/tvet1.jpeg"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentEvent = events[currentIndex];

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
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        {/* Modal for full image */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowModal(false)}>
            <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-[#df8125] rounded-full p-2 z-10 shadow"
                onClick={() => setShowModal(false)}
                aria-label="Close full image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="bg-white rounded-2xl overflow-hidden">
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-auto max-h-[80vh]"
                  priority
                />
              </div>
            </div>
          </div>
        )}
        <div className="max-w-7xl mx-auto">


          {/* Main Carousel */}
          <div className="relative mb-12">
            {/* Event Card */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-96 md:h-auto bg-gray-200">
                  <Image
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    fill
                    className="object-cover cursor-pointer"
                    priority
                    onClick={() => setShowModal(true)}
                  />
                  {/* Navigation Arrows on Image */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#df8125] p-3 rounded-full shadow-lg transition-all z-10"
                    aria-label="Previous event"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#df8125] p-3 rounded-full shadow-lg transition-all z-10"
                    aria-label="Next event"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#030202] mb-6">
                    {currentEvent.title}
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-[#df8125] mr-3" />
                      <span className="text-lg">{currentEvent.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 text-[#df8125] mr-3" />
                      <span className="text-lg">{currentEvent.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-[#df8125] mr-3" />
                      <span className="text-lg">{currentEvent.attendees}</span>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                    {currentEvent.description}
                  </p>
                  {/* Event Number Indicator */}
                  <div className="text-sm font-semibold text-[#df8125]">
                    Event {currentIndex + 1} of {events.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentIndex
                      ? 'w-12 h-3 bg-[#df8125]'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Upcoming Projects Section - between carousel and CTA */}
          <div className="mb-12 max-w-3xl mx-auto bg-yellow-50 border-l-4 border-[#df8125] rounded-xl p-8 shadow">
            <h2 className="text-2xl font-bold text-[#df8125] mb-4">Upcoming Projects</h2>
            <ul className="space-y-3">
              {[
                'TVET Info Hub',
                'VR Experience Labs',
                'Carpentry Competition',
                'TVET Radio/ Career Fm',
                'The TVET GDP Season I',
                'TVET Recruitment Centre',
                'Bible Quiz for TVET Institutes',
                'SkitWALL Project from Kenya',
                'PlayVR Lab Project from India',
                'TVET Innovation & Creative Hub',
                'TVET WELL & Placement Centre',
                'MilleaLab Project from Indonesia',
                'The 3rd Accra TVET Empowerment Conference',
                'Website Designing Masterclass for TVET Students',
                'National Chaplaincy Training with Accra Bible School',
                'Regional Digital Skills Masterclass for TVET Regional Directors with Done by Us',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-lg text-gray-800">
                  <CheckCircle className="w-6 h-6 text-[#df8125] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Past Events CTA Section - stays at bottom */}
          <div className="mt-16 flex justify-center">
            <div className="bg-[#df8125] rounded-2xl shadow-lg px-10 py-12 text-center max-w-2xl w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                See Past Events
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Explore highlights from our past events, workshops, and conferences.
              </p>
              <a
                href="/events/past"
                className="inline-flex items-center gap-3 bg-orange-400 text-[#ffffff] font-bold px-8 py-4 rounded-xl text-lg shadow-md hover:bg-white/90 hover:text-[#b96a1a] transition-colors"
              >
                Past Events
                <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
