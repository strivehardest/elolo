import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';

import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';
export default function PastEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const events = [
    {
      id: 1,
      title: "ChatGPT + TOME + Designer for PRESENTATION 2023",
      date: "September 9, 2023",
      location: "ZOOM Virtual Event",
      attendees: "500+",
      description: "A gathering of industry leaders, policymakers, and educators to discuss the future of TVET in Ghana.",
      image: "/events/past-1.jpeg"
    },
    {
      id: 2,
      title: "Emerging Educational Technologies & Instructional Design for TVET Delivery",
      date: "March 15, 2023",
      location: "Accra International Conference Centre",
      attendees: "500+",
      description: "A gathering of industry leaders, policymakers, and educators to discuss the future of TVET in Ghana.",
      image: "/events/past2.jpeg"
    },
    {
      id: 3,
      title: "Integrating Technology in TVET Education",
      date: "December, 10-11 2025",
      location: "Accra International Conference Centre",
      attendees: "500+",
      description: "A gathering of industry leaders, policymakers, and educators to discuss the future of TVET in Ghana.",
      image: "/events/past3.jpeg"
    },
    {
      id: 4,
      title: "Virtual Reality Application",
      date: "January 3-4, 2026",
      location: "KIT, Kedzikope, Lord's Gym",
      attendees: "50+",
      description: "For school students to explore virtual reality applications in education.",
      image: "/events/past4.jpeg"
    },
    {
      id: 5,
      title: "Allos Parakletos",
      date: "May 23-25, 2025",
      location: "Biriwa Technical Institute, Central Region",
      attendees: "3000+",
      description: "A significant community event focused on vocational education and training.",
      image: "/events/past5.jpg"
    },
    {
      id: 6,
      title: "BarCamp Cape Coast Mentor",
      date: "June 28, 2025",
      location: "GNAT Hall, Cape Coast",
      attendees: "3000+",
      description: "A mentorship event focused on fostering collaboration and knowledge sharing among TVET professionals.",
      image: "/events/past6.jpg"
    },
    {
      id: 7,
      title: "Soft Skills for TVET Excellence",
      date:"July 1, 2023",
      location:"PIWC Tesano, Accra",
      attendees: "200+",
      description: "A workshop aimed at enhancing the soft skills of TVET students for better employability.",
      image: "/events/past7.jpg"
    },
    {
      id: 8,
      title: "ICT Bootcamp for students",
      date: "21st -31st July, 2025",
      location: "KIT, Kedzikope, Lord's Gym",
      attendees: "30+",
      description: "An intensive ICT training program designed to equip students with essential digital skills.",
      image: "/events/past8.jpg"
    },
    {
      id: 9,
      title: "Prayer Empowerment COnference - Influence",
      date: "23rd August, 2025",
      location: "PIWC Tesano, Accra",
      attendees: "500+",
      description: "A conference focused on spiritual growth and empowerment for community leaders and members.",
      image: "/events/past9.jpg"
    },
    {
      id: 10,
      title: "End of Year Thanksgiving Service",
      date: "25th November, 2023",
      location: "PIWC Tesano, Accra",
      attendees: "1000+",
      description: "A thanksgiving service to celebrate the achievements and milestones of the year.",
      image: "/events/past10.jpeg"
    },
    {
      id: 11,
      title: "The TVET Masterclass",
      date: "June",
      location: "Google Meet",
      image: "/events/past11.jpeg"
    },
    {
      id: 12,
      title: "Transforming TVET Delivery using Digital Tools",
      date:"15th May, 2021",
      location: "Biriwa Technical Institute, Central Region",
      attendees: "200+",
      description: "A workshop focused on leveraging digital tools to enhance the delivery of TVET programs.",
      image: "/events/past12.jpeg"
    },
    {
      id: 13,
      title: "Pedagogy and AI-Pedagogy in TVET",
      date:"22nd September, 2025",
      location: "Google Meet",
      attendees: "150+",
      description: "An online seminar exploring the integration of AI in pedagogical practices within TVET.",
      image: "/events/past13.jpeg"
    },
    {
      id: 14,
      title:"Cape Coast Convocation - Talented for Impact",
      date: "12th May, 2018",
      location: "Aggrey Memorial SHS, Cape Coast",
      attendees: "2000+",
      description: "A convocation ceremony celebrating the achievements of graduates and their potential to make a positive impact.",
      image: "/events/past14.jpeg"
    },
    {
      id: 15,
      title: "Spiritual Deeping Experience",
      date: "24th-26th, March, 2023",
      location: "Biriwa Technical Institute, Central Region",
      attendees: "300+",
      description: "A retreat focused on spiritual growth and deepening one's faith through various activities and sessions.",
      image: "/events/past15.jpeg"
    },
    {
      id: 16,
      title: "Cape Tech for Christ",
      date: "10th-12th, November, 2023",
      location: "Cape Coast Technical University",
      attendees: "500+",
      description: "A faith-based event aimed at inspiring and equipping students and staff for Christian service.",
      image: "/events/past16.jpeg"
    },
    {
      id: 17,
      title: "Skills Development",
      date: "24th September, 2023",
      location: "Redemption Chapel, Mamprobi, Accra",
      attendees: "100+",
      description: "A workshop focused on enhancing vocational skills for better employability and career growth.",
      image: "/events/past17.jpeg"
    },
    {
      id: 18,
      title: "Career Guidance Summit",
      date: "3rd November, 2023",
      location: "Kumasi Aglican SHS, Kumasi",
      attendees: "300+",
      description: "A summit aimed at providing career guidance and counseling to students for informed decision-making.",
      image: "/events/past18.jpeg"
    },
    {
      id: 19,
      title: "Technical and Vocational Education & Traning, a means of human empowerment",
      date: "15th October, 2023",
      location: "Presbyterian Church of Ghana, Kuntunse",
      attendees: "300+",
      description: "A seminar discussing the role of TVET in empowering individuals and communities for sustainable development.",
      image: "/events/past19.jpeg"
    },
    {
      id: 20,
      title: "7th ACCRA YOUTH SUMMIT, Preparing for the Job Market",
      date: "19th October, 2019",
      location: "Accra Technical University, Accra",
      attendees: "1000+",
      description: "A youth summit focused on equipping young people with the skills and knowledge needed to succeed in the job market.",
      image: "/events/past20.jpeg"
    }
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
              title="Past Events | TVET Conferences, Workshops & Networking"
              description="See past TVET events, conferences, workshops, and networking opportunities hosted by Elolo Agbleke."
              canonical="https://eloloagbleke.com/events/past"
              openGraph={{
                title: "Past Events | TVET Conferences, Workshops & Networking",
                description: "See past TVET events, conferences, workshops, and networking opportunities hosted by Elolo Agbleke.",
                url: "https://eloloagbleke.com/events/past"
              }}
              additionalMetaTags={[{
                name: 'keywords',
                content: 'past events, TVET, conferences, workshops, networking, Elolo Agbleke, Ghana, professional development, education'
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
                {/* Header */}
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#030202]">
                    Past Events
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Explore highlights from our previous events, workshops, and community gatherings.
                  </p>
                </div>

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

                  {/* Dots Indicator (hidden on mobile, visible md+) */}
                  <div className="hidden md:flex justify-center mt-8 gap-3">
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
                {/* Upcoming Events CTA Section - moved to bottom */}
                <div className="mt-16 flex justify-center">
                  <div className="bg-[#df8125] rounded-2xl shadow-lg px-10 py-12 text-center max-w-2xl w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      See Upcoming Events
                    </h2>
                    <p className="text-lg text-white/90 mb-6">
                      Interested in attending upcoming events? Stay tuned for the latest updates and announcements.
                    </p>
                    <a
                      href="/events/upcoming"
                      className="inline-flex items-center gap-3 bg-orange-400 text-[#ffffff] font-bold px-8 py-4 rounded-xl text-lg shadow-md hover:bg-white/90 hover:text-[#b96a1a] transition-colors"
                    >
                      Upcoming Events
                      <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }