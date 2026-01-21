import React from "react";
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';
import { Hammer, GraduationCap, Mic2, CheckCircle } from "lucide-react";

export default function EventsPage() {
  return (
    <>
      <SEOHead
        title={pagesSEO.events.title}
        description={pagesSEO.events.description}
        canonical={pagesSEO.events.canonical}
        openGraph={pagesSEO.events.openGraph}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'Elolo Agbleke, events, workshops, conferences, networking, TVET, Ghana, professional development, community gatherings'
        }]}
      />
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Workshops, Trainings &<br />Professional Engagements
          </h1>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto mb-8 rounded-full"></div>
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Regularly, I design, facilitate, and contribute to training programmes, workshops, and professional events focused on TVET, digital learning, and skills development. These engagements cut across staff development, student training, and institutional innovation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {/* Training Workshops Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="bg-[#df8125] px-8 py-6">
              <h2 
                className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Hammer className="w-7 h-7" />
                Training Workshops
              </h2>
            </div>
            <div className="px-8 py-8">
              <ul className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Immerging technologies for Teaching and Learning in TVET</span>
                </li>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Competency-Based Training (CBT) for Facilitators</span>
                </li>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Digital & Blended Learning Design for TVET</span>
                </li>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">EdTech Adoption and Institutional Readiness</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500">
                  <span className="text-orange-600 font-bold">Format:</span> 1–5 days | Hands-on | Practice-focused
                </p>
              </div>
            </div>
          </div>

          {/* Orientation and Graduation Events Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="bg-[#df8125] px-8 py-6">
              <h2 
                className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <GraduationCap className="w-7 h-7" />
                Orientation and Graduation & Skills Events
              </h2>
            </div>
            <div className="px-8 py-8">
              <ul className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Offers hands on training and coaching for newly admitted TVET students</span>
                </li>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Speaks and serves as Master of Ceremony at graduation ceremonies for TVET institutes</span>
                </li>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Showcase events for digital skills and vocational programmes</span>
                </li>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Student project demonstrations and exhibitions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Speaking & Facilitation Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="bg-[#df8125] px-8 py-6">
              <h2 
                className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Mic2 className="w-7 h-7" />
                Speaking & Facilitation
              </h2>
            </div>
            <div className="px-8 py-8">
              <ul className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Leads panel discussions on TVET innovation</span>
                </li>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Facilitates institutional retreats and strategy sessions</span>
                </li>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Serves as guest facilitator for partner organizations</span>
                </li>
                <li className="flex gap-3 items-start group">
                  <CheckCircle className="text-orange-600 w-6 h-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Speaks during TVET and SRC week celebrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-16 flex justify-center">
          <div className="bg-[#df8125] rounded-2xl shadow-lg px-10 py-12 text-center max-w-2xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Book an Event
            </h2>
            <p className="text-lg text-white/90 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Interested in a workshop, training, or speaking engagement? Let’s collaborate to create a meaningful event for your institution or organization.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-400 text-[#ffffff] font-bold px-8 py-4 rounded-xl text-lg shadow-md hover:bg-white/90 hover:text-[#b96a1a] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact to Book an Event
            </a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}