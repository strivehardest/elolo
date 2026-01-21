import React, { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import { pagesSEO } from '../lib/seo';
import Image from 'next/image';
import Modal from '../components/ui/Modal';
import { BookOpen, Zap, Users, Settings, Calendar, Globe, Heart, Briefcase, Award, Lightbulb, Target, GraduationCap, Home, Smile, Gem } from 'lucide-react';

const AboutPage = () => {
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
      number: '10+',
      label: 'Years of Marriage',
      description: 'Happily married to Lady Judith Sena Agbleke',
      Icon: Gem,
    },
    {
      number: '3',
      label: 'Wonderful Children',
      description: 'Etornam, Elikem, and Esinam',
      Icon: Users,
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

  const [showModal, setShowModal] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');

  const handlePortraitClick = () => {
    setModalImgSrc('/images/about/elolo-portrait.jpg');
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
    setModalImgSrc('');
  };

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
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Elolo Agbleke</h1>
            <div className="w-32 h-1 mx-auto mb-8 bg-yellow-600"></div>
            <p className="text-2xl font-semibold text-yellow-600">
              Transforming Lives Through TVET, Digital Innovation & Faith-Based Leadership
            </p>
          </div>

          {/* Hero Bio Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center overflow-hidden cursor-pointer group" onClick={handlePortraitClick} title="Click to view larger">
                  <img
                    src="/images/about/elolo-portrait.jpg"
                    alt="Elolo Agbleke"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                    {/* Modal for viewing portrait image */}
                    <Modal isOpen={showModal} onClose={handleModalClose}>
                      <img
                        src={modalImgSrc}
                        alt="Elolo Agbleke large view"
                        className="max-h-[80vh] w-auto mx-auto rounded-2xl shadow-lg"
                      />
                    </Modal>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">A Purpose-Driven Leader</h2>
              <div className="space-y-6 text-gray-600 mb-8 leading-relaxed">
                <p>Elolo Agbleke is an experienced TVET practitioner, digital innovator, and chaplain with over 14 years of expertise in ICT skills training, public TVET administration, human resource management, and institutional chaplaincy.</p>
                <p>Currently, Elolo serves as Principal Manager at the Ghana TVET Service Headquarters and Chief Operating Officer of the Keta Institute of Technology. He is also the Founder & CEO of The TVET Foundation Ghana.</p>
                <p>As a conference host, digital tutor, and educator, Elolo continues to pioneer impactful solutions that bridge education, technology, faith, and enterprise.</p>
                <p>He is happily married to Lady Judith Sena Agbleke, and together they are raising three children—Etornam, Elikem, and Esinam.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/services" className="px-8 py-4 rounded-lg font-bold text-lg shadow-lg bg-yellow-600 text-white hover:bg-yellow-700 transition text-center">
                  Explore Services
                </a>
                <a href="/contact" className="border-2 border-yellow-600 rounded-lg font-bold text-lg px-8 py-4 text-yellow-600 hover:bg-yellow-600 hover:text-white transition text-center">
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>

          {/* Impact by Numbers with Circles */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Impact by Numbers</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((a, i) => {
                const Icon = a.Icon;
                return (
                  <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
                    <div className="w-32 h-32 rounded-full border-4 border-yellow-600 flex flex-col items-center justify-center mx-auto mb-4 bg-yellow-50">
                      <Icon className="h-10 w-10 text-yellow-600 mb-2" />
                      <div className="text-3xl md:text-4xl font-bold text-yellow-600">{a.number}</div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{a.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Roles */}
          <section className="mb-20 bg-gradient-to-br from-orange-50/60 to-yellow-50/40 border border-orange-100 rounded-3xl py-14 px-4 sm:px-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Professional Roles & Leadership
            </h2>
            <p className="text-lg md:text-xl text-gray-700 text-center mb-10 max-w-2xl mx-auto font-medium">
              Serving in multiple capacities across education, technology, and faith-based initiatives.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {roles.map((role, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-7 flex flex-col items-center shadow-md border border-orange-100 hover:shadow-xl transition-all duration-200 h-full"
                >
                  <div className="w-24 h-24 bg-orange-100 rounded-2xl flex items-center justify-center mb-5 shadow-sm overflow-hidden border border-orange-200">
                    <Image
                      src={role.logo}
                      alt={role.title}
                      width={64}
                      height={64}
                      className="object-contain w-16 h-16"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="/images/logos/placeholder.png"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 text-center group-hover:text-yellow-700 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>{role.title}</h3>
                  <p className="text-gray-600 text-center text-base md:text-lg leading-relaxed font-normal" style={{ fontFamily: 'Onest, sans-serif' }}>{role.organization}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Expertise */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">Areas of Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {expertise.map((item, idx) => {
                const Icon = item.Icon;
                return (
                  <div key={idx} className="flex flex-col items-center bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                    <span className="flex items-center justify-center rounded-full p-3 bg-white shadow mb-3">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </span>
                    <span className="text-sm md:text-base font-semibold text-gray-900 text-center">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row gap-0 md:gap-0 items-stretch relative">
              <div className="flex-1 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-white border border-orange-100 shadow-sm mb-6 md:mb-0 md:mr-4">
                <span className="inline-flex items-center justify-center rounded-full p-4 mb-4 bg-yellow-50 shadow-lg">
                  <Lightbulb className="h-7 w-7 text-yellow-600" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">My Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Building bridges between technology, education, faith, and enterprise to unlock Africa's full potential.
                </p>
              </div>
              <div className="hidden md:block w-px bg-orange-100 mx-2 my-8"></div>
              <div className="flex-1 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-white border border-orange-100 shadow-sm md:ml-4">
                <span className="inline-flex items-center justify-center rounded-full p-4 mb-4 bg-yellow-50 shadow-lg">
                  <Target className="h-7 w-7 text-yellow-600" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">My Mission</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  To pioneer innovative solutions across the TVET ecosystem, transforming lives through education and technology.
                </p>
              </div>
            </div>
          </div>

          {/* Simple CTA with Unsplash background */}
          <div className="relative rounded-3xl overflow-hidden my-12 min-h-[340px] md:min-h-[400px] flex items-stretch">
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Connect background"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                style={{ display: 'block' }}
              />
              <div className="absolute inset-0 bg-[#df8125]/60"></div>
            </div>
            <div className="relative z-10 w-full flex flex-col items-center justify-center text-white p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Ready to Connect?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
                Let's work together to create meaningful impact through education, technology, and leadership development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/services" className="px-8 py-4 rounded-lg font-bold text-lg shadow-lg bg-white text-yellow-700 hover:bg-gray-100 transition text-center min-w-[180px]">
                  Explore My Services
                </a>
                <a href="/contact" className="border-2 border-white rounded-lg font-bold text-lg px-8 py-4 text-white hover:bg-white hover:text-yellow-700 transition text-center min-w-[180px]">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutPage;