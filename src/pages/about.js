import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import { pagesSEO } from '../lib/seo';
import Modal from '../components/ui/Modal';
import { BookOpen, Zap, Users, Settings, Calendar, Globe, Heart, Briefcase, Award, Lightbulb, Target, GraduationCap, Gem, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const [showModal, setShowModal] = useState(false);

  const roles = [
    {
      title: 'Principal Manager',
      organization: 'Ghana TVET Service Headquarters – HRMD Division',
      logo: '/images/logos/gts.jpg',
    },
    {
      title: 'COO',
      organization: 'Keta Institute of Technology',
      logo: '/images/logos/kit.png',
    },
    {
      title: 'Founder & CEO',
      organization: 'The TVET Foundation Ghana & Association of Chaplains in Education (Africa)',
      logo: '/images/logos/tvet-foundation.jpg',
    },
    {
      title: 'Chaplain',
      organization: 'Serving over 35 public TVET institutes across Greater Accra, Central, and Volta Regions',
      logo: '/images/logos/chaplaincy.jpg',
    },
    {
      title: 'Conference Host',
      organization: 'Accra TVET Prayer & Empowerment Conference',
      logo: '/images/logos/conference.jpg',
    },
    {
      title: 'Strategic Marketer',
      organization: 'Adonai Business Groups',
      logo: '/images/logos/adonai.jpg',
    },
  ];

  const achievements = [
    {
      number: '14+',
      label: 'Years of Experience',
      description: 'ICT skills training, TVET administration, chaplaincy',
      Icon: Award,
    },
    {
      number: '35+',
      label: 'TVET Institutes',
      description: 'As chaplain across Greater Accra, Central, and Volta',
      Icon: GraduationCap,
    },
    {
      number: '5,000+',
      label: 'People Trained',
      description: 'Beneficiaries of ICT, TVET, and leadership programs',
      Icon: Users,
    },
    {
      number: '100+',
      label: 'Events Organized',
      description: 'Workshops, conferences, and outreach initiatives',
      Icon: Calendar,
    },
  ];

  const expertise = [
    { text: 'TVET Leadership', Icon: Award },
    { text: 'Digital Innovation', Icon: Zap },
    { text: 'Faith-Based Leadership', Icon: Heart },
    { text: 'ICT Skills Training', Icon: BookOpen },
    { text: 'HR Management', Icon: Users },
    { text: 'Strategic Marketing', Icon: Briefcase },
    { text: 'Conference Organization', Icon: Calendar },
    { text: 'EdTech Advocacy', Icon: Globe },
    { text: 'Chaplaincy', Icon: Users },
    { text: 'Digital Entrepreneurship', Icon: Settings },
  ];

  return (
    <>
      <SEOHead
        title={pagesSEO.about.title}
        description={pagesSEO.about.description}
        canonical={pagesSEO.about.canonical}
        openGraph={pagesSEO.about.openGraph}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'Elolo Agbleke, about, TVET, leadership, digital innovation, chaplaincy, Ghana, professional development, community building'
        }]}
      />
      
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[340px] md:h-[420px] w-full flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Training, technology, or speaking event"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            style={{ filter: 'brightness(0.65)' }}
          />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">About Elolo Agbleke</h1>
            <div className="w-24 h-1 mx-auto mb-8 bg-white opacity-80"></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white drop-shadow">
              Transforming Lives Through TVET, Digital Innovation & Faith-Based Leadership
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Section */}
          <div className="py-20 grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column - always first */}
            <div className="order-1 flex justify-center mb-10 lg:mb-0">
              <div 
                className="relative h-[400px] w-[320px] md:h-[500px] md:w-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => setShowModal(true)}
              >
                <img
                  src="/images/about/elolo-portrait.jpg"
                  alt="Elolo Agbleke"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Text Column - always second */}
            <div className="order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                A Purpose-Driven Leader
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
                <h3 className="text-2xl font-bold text-yellow-700 mb-4">Building Practical Skills Systems for TVET through Technology, Design, and Capacity Building</h3>
                <p>
                  Elolo Agbleke is an experienced TVET practitioner, digital educator, and chaplain with over 15 years of expertise in ICT skills training, educational technology integration, public TVET administration, human resource management, and institutional chaplaincy. He is passionate about advancing workforce development through technology integration and education reform, and is widely regarded as an influential voice in Ghana’s TVET ecosystem. He envisions a leadership role in techno-pedagogical design for Africa's TVET sector, spearheading reforms in curriculum development, digital learning, and instructional design.
                </p>
                <p>
                  Elolo currently serves as Digital Learning Specialist/EduTech Principal Manager at the Ghana TVET Service Headquarters (EduTech Division) and Chief Operating Officer of the Keta Institute of Technology. Prior to this, he held the position of Principal Manager in the Human Resource Management and Development Division (HRMD), where he was responsible for policy analysis and IT integration. Additionally, he served as Principal Training Officer at Biriwa Technical Institute, teaching ICT and Computer Hardware Servicing for over 12 years. During his tenure, he trained over 2,500 students, managed school data and digital resources, and led multiple community engagements and educational projects.
                </p>
                <p>
                  He is also the Founder & CEO of The TVET Foundation Ghana, The ASSET Initiative, The Workforce Development Institute, and the Association of Chaplains in Education (Africa), driving initiatives that empower learners and strengthen institutions.
                </p>
                <p>
                  As a conference host, technology educator, TVET advocate, Chaplain, and church elder, Elolo continues to pioneer impactful and sustainable solutions that bridge education, technology, faith, and enterprise.
                </p>
                <p>
                  He is happily married to Lady Judith Sena Agbleke, a fellow TVET professional, and together they are raising three gifted children, namely Etornam, Elikem, and Esinam.
                </p>
              </div>

            </div>
          </div>

          {/* Modal */}
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <img
              src="/images/about/elolo-portrait.jpg"
              alt="Elolo Agbleke"
              className="max-h-[85vh] w-auto mx-auto rounded-2xl"
            />
          </Modal>

          {/* Impact Numbers */}
          <div className="py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                Impact by Numbers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.Icon;
                  return (
                        <div 
                          key={idx} 
                          className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <div className="mb-6 flex flex-col items-center justify-center">
                            <Icon className="w-10 h-10 text-yellow-600 mb-2" />
                            <div className="text-3xl font-bold text-yellow-600" style={{ fontFamily: "var(--font-heading)" }}>{achievement.number}</div>
                          </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{achievement.label}</h3>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Professional Roles */}
          <div className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Professional Roles & Leadership
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Serving in multiple capacities across education, technology, and faith-based initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roles.map((role, idx) => (
                <div 
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-yellow-50 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src={role.logo}
                      alt={role.title}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {role.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                Areas of Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {expertise.map((item, idx) => {
                  const Icon = item.Icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="w-14 h-14 mx-auto mb-4 bg-yellow-50 rounded-full flex items-center justify-center">
                        <Icon className="w-7 h-7 text-yellow-600" />
                      </div>
                      <p className="font-semibold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="py-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-12 text-center hover:border-yellow-600 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">My Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Building bridges between technology, education, faith, and enterprise to unlock Africa's full potential.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-3xl p-12 text-center hover:border-yellow-600 transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 bg-yellow-50 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">My Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To pioneer innovative solutions across the TVET ecosystem, transforming lives through education and technology.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section - Styled like Events CTA */}
          <div className="mt-16 flex justify-center">
            <div className="bg-[#df8125] rounded-2xl shadow-lg px-10 py-12 text-center max-w-2xl w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Connect?
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Let's work together to create meaningful impact through education, technology, and leadership development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services"
                  className="inline-flex items-center gap-3 bg-orange-400 text-[#ffffff] font-bold px-8 py-4 rounded-xl text-lg shadow-md hover:bg-white/90 hover:text-[#b96a1a] transition-colors"
                >
                  Explore My Services
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 border-2 border-white rounded-xl font-bold text-lg px-8 py-4 text-white hover:bg-white hover:text-[#b96a1a] transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;