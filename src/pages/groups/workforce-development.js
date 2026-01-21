
import React from 'react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';
import Image from 'next/image';
import { Users2, Award, CheckCircle, ArrowRight, Target, ArrowUp, BookOpen, Briefcase, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const WorkforceDevelopmentPage = () => {
  const impacts = [
    { number: "5,000+", label: "TVET Staff Trained", text: "Train 5,000+ TVET staff", icon: Users2 },
    { number: "30+", label: "CPD Programmes", text: "Develop 30+ modular CPD programmes", icon: BookOpen },
    { number: "Regional", label: "Training Hubs", text: "Establish regional training hubs", icon: Briefcase },
    { number: "1st", label: "Certification Pathway", text: "Launch a recognized professional certification pathway", icon: Award }
  ];
  const scope = [
    "Continuous professional development for TVET staff",
    "Leadership and management training for TVET institutions",
    "Pedagogy, assessment, and CBT mastery programmes",
    "Skills competitions, challenges, and labs",
    "Applied research and professional certification"
  ];
  const activities = [
    "National TVET Facilitator Certification Programme",
    "Annual Workforce Development Conference",
    "Trainer-of-Trainers (ToT) Academies",
    "TVET Skills Olympics & Teaching Challenges",
    "Leadership & Institutional Management Labs",
    "Blended learning onboarding courses  for newly recruited staff"
  ];
  const approaches = [
    "Micro-credentialing and stackable certificates",
    "Practice-based assessment (not exams)",
    "Industry-embedded facilitators",
    "Blended, modular delivery"
  ];
  const [showTop, setShowTop] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <>
      <SEOHead
        title="Workforce Development | TVET Staff Training & Certification"
        description="Explore Workforce Development: CPD, staff training, leadership, and certification for TVET professionals in Ghana. Empowering educators and institutions."
        canonical="https://eloloagbleke.com/groups/workforce-development"
        openGraph={{
          title: "Workforce Development | TVET Staff Training & Certification",
          description: "Explore Workforce Development: CPD, staff training, leadership, and certification for TVET professionals in Ghana.",
          url: "https://eloloagbleke.com/groups/workforce-development"
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'Workforce Development, TVET, staff training, CPD, certification, Ghana, Elolo Agbleke, professional development, education, leadership'
        }]}
      />
      <div className="min-h-screen bg-white">
      {/* Move to Top Arrow */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed left-6 bottom-8 z-50 bg-[#df8125] text-white p-3 rounded-full shadow-lg hover:bg-[#b96a1a] transition-colors flex items-center justify-center"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
      {/* Hero Section */}
      <div className="relative bg-[#df8125] text-white">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="flex flex-col items-center justify-center text-center gap-10 md:gap-16">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden p-4 mx-auto">
              <Image
                src="/groups/workforce.jpeg"
                alt="Workforce Development Institute Logo"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-5 tracking-tight">
                WORKFORCE DEVELOPMENT INSTITUTE (WDI)
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Impact Stats */}
      <div className="bg-gray-50 py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#030202] mb-12">
            Strategic Targets
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#df8125]/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#df8125]" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-[#df8125] mb-2">{impact.number}</div>
                  <div className="text-gray-700 font-semibold text-base md:text-lg mb-2">{impact.label}</div>
                  <div className="text-gray-600 text-sm md:text-base max-w-xs mx-auto">{impact.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mandate Section */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#030202] mb-8">
              Our Mandate
            </h2>
            <p className="text-xl md:text-2xl text-[#65605b] leading-relaxed">
              To serve as a premier capacity-building institute for TVET staff and instructors, rivaling traditional public training universities in relevance and responsiveness.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#df8125] rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#030202]">
                  Strategic Position
                </h3>
              </div>
              <p className="text-lg md:text-xl text-[#65605b] leading-relaxed">
                A practice-first, competency-driven professional institute.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#df8125] rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#030202]">
                  Our Tagline
                </h3>
              </div>
              <p className="text-lg md:text-xl text-[#65605b] leading-relaxed italic">
                WDI - People and capability
              </p>
            </div>
          </div>
        </div>
        {/* Scope of Work */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#030202] mb-6">
              Scope of Work
            </h2>
            <p className="text-lg md:text-xl text-[#65605b] max-w-3xl mx-auto">
              We are committed to the following:
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-5">
              {scope.map((item, index) => (
                <div key={index} className="flex items-start bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#df8125] transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#df8125] text-white rounded-full flex items-center justify-center font-bold mr-5 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-lg md:text-xl text-[#65605b] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Core Activities Section */}
        <div className="mb-24 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#030202] mb-6">
                Projected Core Activities
              </h2>
              <p className="text-lg md:text-xl text-[#65605b] max-w-3xl mx-auto">
                Strategic initiatives designed to transform TVET workforce development
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <div key={index} className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-[#df8125]/10 rounded-xl flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-[#df8125]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#030202] mb-4">
                    {activity}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Innovative Approaches Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#030202] mb-6">
              Innovative Approaches
            </h2>
            <p className="text-lg md:text-xl text-[#65605b] max-w-3xl mx-auto mb-12">
              We employ cutting-edge strategies to drive TVET transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#df8125] transition-colors">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#df8125] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-[#030202] mb-3">
                      {approach}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-[#df8125]/92" />
          <div className="relative z-10 p-16 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-black">
              Join us in transforming technical and vocational education in Africa. Whether as an industry partner, 
              donor, or supporter, your involvement drives meaningful change.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-[#df8125] text-white px-10 py-5 rounded-xl font-bold text-xl transition-colors shadow-lg hover:bg-white hover:text-[#df8125]"
            >
              Get Involved
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WorkforceDevelopmentPage;
