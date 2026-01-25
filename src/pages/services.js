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
          content: 'Elolo Agbleke, TVET, Ghana, services, consulting, training, workshops, professional development, skills, capacity building, digital learning, curriculum, VR, blended learning, advisory, project support, motivational speaking, vocational training, technical education, workforce, employability, youth empowerment, TVET Ghana, Elolo TVET, education reform, industry partnership, TVET advocacy, TVET innovation, TVET leadership, TVET impact, Elolo influence, TVET excellence, TVET projects, Elolo initiatives, TVET solutions, TVET consultancy, TVET change, TVET future, TVET best practices, TVET events Ghana, Elolo speaker, TVET mentor, TVET capacity building, Elolo workshops, TVET conferences, TVET partnerships, TVET empowerment, Elolo leadership, TVET training, TVET development, Elolo Ghana, TVET success, TVET stories, TVET educator, Elolo advocate, TVET influencer, Elolo community, TVET support, Elolo Ghana TVET, TVET Ghanaian, Elolo Ghana education, TVET Ghana change, Elolo Ghana impact, TVET Ghana projects, Elolo Ghana skills, TVET Ghana expert, Elolo Ghana TVET leader, TVET Ghanaian leader, Elolo Ghana TVET expert, TVET Ghanaian expert, Elolo Ghana TVET consultant, TVET Ghanaian consultant, Elolo Ghana TVET mentor, TVET Ghanaian mentor, Elolo Ghana TVET speaker, TVET Ghanaian speaker, Elolo Ghana TVET influencer, TVET Ghanaian influencer, Elolo Ghana TVET advocate, TVET Ghanaian advocate, Elolo Ghana TVET inspiration, TVET Ghanaian inspiration, Elolo Ghana TVET role model, TVET Ghanaian role model'
        }]} />
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
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-onest leading-relaxed">
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
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-onest">
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
                        className="px-3 py-1.5 rounded-full text-sm font-medium border font-onest"
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
              <p className="text-lg sm:text-xl text-gray-600 font-onest max-w-2xl mx-auto leading-relaxed">
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
                  <p className="text-gray-600 font-onest leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA - Styled like Past Events */}
        <div className="mt-16 flex justify-center">
          <div className="bg-[#df8125] rounded-2xl shadow-lg px-10 py-12 text-center max-w-2xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book a Service
            </h2>
            <p className="text-lg text-white/90 mb-6 font-onest">
              Ready to transform your organization? Let's start the conversation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-orange-400 text-[#ffffff] font-bold px-8 py-4 rounded-xl text-lg shadow-md hover:bg-white/90 hover:text-[#b96a1a] transition-colors"
            >
              Book Now
              <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}