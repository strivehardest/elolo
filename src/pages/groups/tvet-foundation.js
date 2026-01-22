import React from 'react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';
import Image from 'next/image';
import { Users2, Award, GraduationCap, Building2, CheckCircle, ArrowRight, Target, ArrowUp, Lightbulb, BookOpen, Users } from 'lucide-react';
import Link from 'next/link';

const TVETFoundationPage = () => {
  const impacts = [
    { number: "1", label: "Flagship TVET LMS", text: "Develop one flagship TVET LMS/content ecosystem", icon: Award },
    { number: "200+", label: "Digital Learning Objects", text: "Produce 200+ digital TVET learning objects", icon: Building2 },
    { number: "50+", label: "Institutions Supported", text: "Support 50+ institutions across Ghana and West Africa", icon: Users2 },
    { number: "1st", label: "Technical Partner Status", text: "Become a recognized technical partner to government and donors", icon: GraduationCap }
  ];

  // Move to Top Arrow state
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
        title="TVET Foundation Ghana | Digital Learning & Institutional Support"
        description="Discover the TVET Foundation: supporting digital TVET, content development, and institutional growth across Ghana and West Africa."
        canonical="https://eloloagbleke.com/groups/tvet-foundation"
        openGraph={{
          title: "TVET Foundation Ghana | Digital Learning & Institutional Support",
          description: "Discover the TVET Foundation: supporting digital TVET, content development, and institutional growth across Ghana and West Africa.",
          url: "https://eloloagbleke.com/groups/tvet-foundation"
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'TVET Foundation, Elolo Agbleke, Ghana, digital learning, TVET, institutional support, education, content development, West Africa'
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
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden p-4">
              <Image
                src="/groups/TVET.png"
                alt="TVET Foundation Ghana Logo"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-5 tracking-tight">
                TVET Foundation Ghana
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed font-medium mb-3">
                Foundation - Policy and Perception
              </p>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
                A system-level enabler and advocate for TVET transformation in Ghana
              </p>
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
              To strengthen, promote, and modernize TVET systems in Ghana through advocacy, innovation support, digitization, and public engagement.
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
                A system-level enabler and advocate for TVET transformation — not a training provider.
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
                Foundation - Policy and Perception
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
              Our core activities revolve around the following strategic pillars:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-5">
              {[
                "TVET systems advocacy and thought leadership",
                "Support for digitization and innovation in TVET institutions",
                "Public awareness and perception change around TVET",
                "Policy support and evidence generation",
                "Strategic partnerships for TVET development"
              ].map((item, index) => (
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
                Strategic initiatives designed to transform TVET systems across Ghana
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#df8125]/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#df8125]" />
                </div>
                <h3 className="text-2xl font-bold text-[#030202] mb-4">
                  National TVET Innovation & Digitization Forum
                </h3>
                <p className="text-lg md:text-xl text-[#65605b] leading-relaxed">
                  Annual gathering of stakeholders to showcase innovations and drive digital transformation in TVET institutions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#df8125]/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#df8125]" />
                </div>
                <h3 className="text-2xl font-bold text-[#030202] mb-4">
                  TVET Public Awareness & Rebranding Campaign
                </h3>
                <p className="text-lg md:text-xl text-[#65605b] leading-relaxed">
                  Comprehensive campaigns to change public perception and promote TVET as a viable pathway to success.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#df8125]/10 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-[#df8125]" />
                </div>
                <h3 className="text-2xl font-bold text-[#030202] mb-4">
                  Institutional Digitization Readiness Assessments
                </h3>
                <p className="text-lg md:text-xl text-[#65605b] leading-relaxed">
                  Evaluating and supporting TVET institutions in their journey towards digital transformation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#df8125]/10 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-[#df8125]" />
                </div>
                <h3 className="text-2xl font-bold text-[#030202] mb-4">
                  Policy Briefs and TVET Research Publications
                </h3>
                <p className="text-lg md:text-xl text-[#65605b] leading-relaxed">
                  Evidence-based research and policy recommendations to inform national TVET strategy.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow md:col-span-2">
                <div className="w-14 h-14 bg-[#df8125]/10 rounded-xl flex items-center justify-center mb-6">
                  <Users2 className="w-7 h-7 text-[#df8125]" />
                </div>
                <h3 className="text-2xl font-bold text-[#030202] mb-4">
                  TVET Leadership Roundtables
                </h3>
                <p className="text-lg md:text-xl text-[#65605b] leading-relaxed">
                  Convening leaders from government, industry, and education to align on TVET development priorities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Innovative Approaches Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#030202] mb-6"
              style={{ fontFamily: "'Ruluko', Arial, sans-serif" }}
            >
              Innovative Approaches
            </h2>
            <p className="text-lg md:text-xl text-[#65605b] max-w-3xl mx-auto mb-12">
              We employ cutting-edge strategies to drive TVET transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#df8125] transition-colors">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#df8125] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-[#030202] mb-3">
                    Data-driven TVET storytelling
                  </h4>
                  <p className="text-lg text-[#65605b] leading-relaxed">
                    Digital dashboards and short documentaries to showcase impact and drive engagement
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#df8125] transition-colors">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#df8125] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-[#030202] mb-3">
                    Public-private TVET innovation challenges
                  </h4>
                  <p className="text-lg text-[#65605b] leading-relaxed">
                    Collaborative competitions to develop solutions for TVET sector challenges
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#df8125] transition-colors">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#df8125] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-[#030202] mb-3">
                    Youth-led TVET ambassador programmes
                  </h4>
                  <p className="text-lg text-[#65605b] leading-relaxed">
                    Empowering young people to champion TVET in their communities
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#df8125] transition-colors">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#df8125] mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-[#030202] mb-3">
                    Evidence-backed advocacy
                  </h4>
                  <p className="text-lg text-[#65605b] leading-relaxed">
                    Policy influence grounded in rigorous research and data, not rhetoric
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-[#df8125]/92" />
          <div className="relative z-10 p-16 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Partner With Us</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Join us in transforming technical and vocational education in Ghana. Whether as an industry partner, 
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

export default TVETFoundationPage;