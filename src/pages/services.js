import React from "react";
import SEOHead from '../components/seo/SEOHead';
import { pagesSEO } from '../lib/seo';
import {
  Briefcase,
  Mic,
  Laptop,
  Users,
  BarChart,
  Lightbulb,
  CheckCircle,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const brandColor = "#ff8125";

const services = [
  {
    title: "TVET Curriculum & Course Design",
    icon: Briefcase,
    details: [
      "Design competency-based curricula aligned to TVET standards",
      "Convert manuals and informal training into certifiable short courses",
      "Develop facilitator guides, learner workbooks, assessments, and certification systems",
      "Map learning outcomes to institutional or national frameworks",
    ],
    clients: [
      "TVET institutes",
      "NGOs and donor-funded projects",
      "Private training providers",
    ],
  },
  {
    title: "EdTech & Digital Learning Implementation",
    icon: Laptop,
    details: [
      "Design online and blended learning programmes",
      "Support LMS setup, content structuring, and assessment workflows",
      "Train facilitators to teach effectively online and in blended formats",
      "Integrate low-bandwidth and mobile-friendly solutions where needed",
    ],
  },
  {
    title: "Virtual Reality (VR) for TVET Training",
    icon: Lightbulb,
    details: [
      "Design and deliver VR-based training programmes for TVET",
      "Train staff and learners on devices such as Meta Quest",
      "Develop VR lesson plans, activity mappings, and assessment models",
      "Advise institutions on VR lab setup, SOPs, and usage policies",
    ],
  },
  {
    title: "Training, Facilitation & Capacity Building",
    icon: Users,
    details: [
      "Facilitate workshops for staff, trainers, and students",
      "Deliver hands-on training using competency-based approaches",
      "Support Trainer-of-Trainers (ToT) programmes",
      "Coach institutions through change and adoption phases",
    ],
  },
  {
    title: "Strategic Advisory & Project Support",
    icon: BarChart,
    details: [
      "Support TVET innovation and transformation projects",
      "Advise on pilot design, scaling strategies, and risk management",
      "Support proposal development and donor-facing documentation",
      "Act as a technical resource for implementation teams",
    ],
  },
  {
    title: "Motivational Speaking",
    icon: Mic,
    details: [
      "Inspire and energize your team or audience with impactful talks that ignite passion and purpose.",
      "Elolo draws from real-life experiences, practical wisdom, and a deep understanding of human motivation to deliver messages that resonate.",
      "Whether for corporate teams, youth groups, or community organizations, his sessions foster resilience, growth mindsets, and a renewed sense of possibility.",
      "Expect actionable takeaways, engaging stories, and a contagious enthusiasm that leaves a lasting impression.",
    ],
  },
];

const benefits = [
  {
    title: "Proven Expertise",
    description:
      "Over a decade of experience in coaching, leadership, and IT training.",
    icon: CheckCircle,
  },
  {
    title: "Innovative Approach",
    description:
      "We blend creativity with strategy to deliver impactful solutions.",
    icon: Lightbulb,
  },
  {
    title: "Personalized Support",
    description:
      "Every client receives a tailored experience to meet their unique needs.",
    icon: HeartHandshake,
  },
];

export default function Services() {
  return (
    <>
      <SEOHead
        title={pagesSEO.services.title}
        description={pagesSEO.services.description}
        canonical={pagesSEO.services.canonical}
        openGraph={pagesSEO.services.openGraph}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'Elolo Agbleke, services, TVET, professional development, event planning, mentoring, Ghana, community building, consulting'
        }]}
      />
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full" style={{ backgroundColor: `${brandColor}15`, color: brandColor }}>
              What We Offer
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed">
            We offer a range of professional services designed to empower
            individuals and businesses to reach their full potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-[#ff8125] transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4 mb-5">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" 
                  style={{ backgroundColor: `${brandColor}15` }}
                >
                  <service.icon className="h-7 w-7" style={{ color: brandColor, strokeWidth: 2 }} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
                  {service.title}
                </h3>
              </div>
              
              <ul className="space-y-3 mb-5">
                {service.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-opensans">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#ff8125]" aria-hidden="true" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              {service.clients && (
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 mb-3 font-manrope flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: brandColor }} />
                    Ideal For:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.clients.map((client, j) => (
                      <span 
                        key={j} 
                        className="px-3 py-1.5 rounded-full text-sm font-medium border font-opensans"
                        style={{ 
                          backgroundColor: `${brandColor}08`, 
                          borderColor: `${brandColor}30`,
                          color: '#4a5568'
                        }}
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl" style={{ background: `linear-gradient(135deg, ${brandColor}05 0%, ${brandColor}10 100%)` }}></div>
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl">
            <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-opensans max-w-2xl mx-auto leading-relaxed">
                We stand out because of our commitment to quality, innovation, and
                client success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div
                    className="mx-auto mb-5 flex items-center justify-center w-16 h-16 rounded-2xl transition-transform duration-300 hover:scale-110"
                    style={{ backgroundColor: brandColor, boxShadow: `0 8px 20px ${brandColor}30` }}
                  >
                    <benefit.icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-opensans leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 font-manrope text-white hover:shadow-2xl hover:scale-105 group"
            style={{
              backgroundColor: brandColor,
              boxShadow: `0 10px 30px ${brandColor}40`,
            }}
          >
            Book a Service
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-sm text-gray-500 font-opensans">
            Ready to transform your organization? Let's start the conversation.
          </p>
        </div>
      </div>
      </section>
    </>
  );
}