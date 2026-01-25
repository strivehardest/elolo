import React, { useState, useEffect } from 'react';
import SEOHead from '../components/seo/SEOHead';
import { pagesSEO } from '../lib/seo';
import Link from 'next/link';
import { useForm, ValidationError } from "@formspree/react";
import { 
  BookOpen, 
  Monitor, 
  Glasses, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Settings,
  Award,
  Mic,
  Send
} from "lucide-react";

const heroImages = [
  '/images/hero/hero2.jpg',
  '/images/hero/hero5.jpg',
  '/images/hero/hero6.jpg',
  '/images/hero/hero7.jpeg',
  '/images/hero/hero8.JPG',
  '/images/hero/hero9.JPG',
  '/images/hero/hero10.JPG',
  '/images/hero/hero1.jpeg',

];

const coreAreas = [
  {
    title: "TVET Curriculum & Course Design",
    description: "Designing competency-based curricula that translate industry needs into practical, assessable learning outcomes.",
    icon: BookOpen,
  },
  {
    title: "EdTech & Blended Learning",
    description: "Implementing digital tools and blended approaches that enhance learning without disrupting institutional workflows.",
    icon: Monitor,
  },
  {
    title: "Virtual Reality (VR) for Skills Training",
    description: "Deploying immersive learning experiences for high-risk or hard-to-access practical training scenarios.",
    icon: Glasses,
  },
  {
    title: "Training, Facilitation & Capacity Building",
    description: "Equipping facilitators and institutional teams with skills to deliver and sustain quality training programmes.",
    icon: Users,
  },
  {
    title: "Strategic Advisory & Project Support",
    description: "Providing guidance on TVET strategy, programme design, and implementation for lasting institutional impact.",
    icon: Target,
  },
];

const focusPoints = [
  "Translate CBT theory into usable training programmes",
  "Integrate digital and immersive tools without disrupting learning",
  "Equip facilitators and learners to perform, not just participate",
  "Build systems that remain functional after pilots end",
];

const whyWorkWithMe = [
  {
    title: "Deep grounding in competency-based training",
    description: "Years of hands-on experience designing and implementing CBT programmes across various TVET contexts.",
  },
  {
    title: "Hands-on experience with institutional realities",
    description: "Understanding the real challenges institutions face—from resource constraints to staff adoption.",
  },
  {
    title: "Ability to bridge policy, pedagogy, and technology",
    description: "Connecting strategic vision with practical implementation that works in real classrooms.",
  },
  {
    title: "Calm, structured facilitation style focused on outcomes",
    description: "Creating environments where teams can learn, adopt, and own new approaches confidently.",
  },
];

const BRAND = {
  orange: '#df8125',
  orangeLight: 'rgba(223,129,37,0.06)',
  orangeStrongOverlay: 'rgba(223,129,37,0.18)',
  blackOverlay: 'rgba(3,2,2,0.55)',
  white: '#fefefd',
  black: '#030202'
};

const YOUTUBE = 'https://www.youtube.com/@eloloagbleke746';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formState, handleFormSubmit] = useForm("xnjjprob");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEOHead
        title={pagesSEO.home.title}
        description={pagesSEO.home.description}
        canonical={pagesSEO.home.canonical}
        openGraph={pagesSEO.home.openGraph}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'Elolo Agbleke, home, TVET, leadership, digital innovation, Ghana, professional development, community, networking, events, groups, resources, skills development, vocational training, technical education, workforce, employability, youth empowerment, Ghana education, TVET Ghana, Elolo TVET, education reform, skills for jobs, industry partnership, TVET advocacy, Ghana skills, TVET policy, Elolo Agbleke Ghana, TVET innovation, TVET leadership, Ghana workforce, TVET transformation, TVET impact, Elolo influence, Ghanaian education, TVET excellence, TVET projects, Elolo initiatives, Ghana TVET expert, TVET solutions, TVET consultancy, TVET change, TVET future, Elolo projects, Ghana skills agenda, TVET best practices, TVET events Ghana, Elolo speaker, TVET mentor, Ghana technical, TVET capacity building, Elolo workshops, TVET conferences, Ghana vocational, TVET champions, Elolo impact, TVET partnerships, Ghana education change, TVET empowerment, Elolo leadership, TVET training, Ghanaian skills, TVET development, Elolo Ghana, TVET success, TVET stories, Ghana TVET leader, Elolo inspiration, TVET role model, Ghana TVET consultant, TVET growth, Elolo Ghanaian, TVET educator, Ghana TVET change, Elolo advocate, TVET influencer, Ghanaian TVET, Elolo community, TVET support, Ghana TVET support, Elolo Ghana TVET, TVET Ghanaian, Elolo Ghana education, TVET Ghana change, Elolo Ghana impact, TVET Ghana projects, Elolo Ghana skills, TVET Ghana expert, Elolo Ghana TVET leader, TVET Ghanaian leader, Elolo Ghana TVET expert, TVET Ghanaian expert, Elolo Ghana TVET consultant, TVET Ghanaian consultant, Elolo Ghana TVET mentor, TVET Ghanaian mentor, Elolo Ghana TVET speaker, TVET Ghanaian speaker, Elolo Ghana TVET influencer, TVET Ghanaian influencer, Elolo Ghana TVET advocate, TVET Ghanaian advocate, Elolo Ghana TVET inspiration, TVET Ghanaian inspiration, Elolo Ghana TVET role model, TVET Ghanaian role model'
        }]}
      />

      <div className="bg-brand-white">
        <section className="relative h-screen overflow-hidden">
          {/* Fullscreen Hero Images with Ken Burns Effect */}
          <div className="absolute inset-0 w-full h-full">
            {heroImages.map((src, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={src}
                  alt={`TVET Innovation ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                    idx === currentSlide ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
            ))}
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Hero Content - Centered Layout */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            <div className="max-w-5xl mx-auto">
              {/* Main Tagline */}
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight mb-8 tracking-tight">
                Building Practical Skills Systems for TVET through Technology, Design, and Capacity Building
              </h1>
              {/* Learn More CTA Button */}
              <div className="w-full max-w-xs sm:max-w-none mx-auto flex justify-center mt-4">
                <a
                  href="/services"
                  className="inline-flex items-center gap-3 bg-orange-400 text-[#ffffff] font-bold w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg shadow-md hover:bg-white/90 hover:text-[#b96a1a] transition-colors justify-center"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? 'bg-[#df8125] w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                My Work in TVET
              </h2>
              <div className="w-24 h-1 bg-[#df8125] mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Supporting institutions to design and implement practical, sustainable skills training systems
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Card 1: The Intersection */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#df8125] rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The Intersection
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  My work sits at the intersection of <strong>TVET</strong>, <strong>competency-based training (CBT)</strong>, 
                  and <strong>education technology</strong>, supporting institutions and programmes to design and implement 
                  practical, sustainable skills training systems.
                </p>
              </div>

              {/* Card 2: What I Do */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#df8125] rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What I Do
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  My work spans <strong>curriculum and course design</strong>, <strong>digital and blended learning</strong>, 
                  <strong> immersive learning (VR)</strong>, and <strong>capacity building</strong> for facilitators and teams. 
                  I focus on what often gets overlooked: <em>adoption, usability, and long-term institutional ownership</em>.
                </p>
              </div>

              {/* Card 3: My Approach */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#df8125] rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  My Approach
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Rather than promoting technology for its own sake, I help institutions use the <strong>right tools 
                  in the right way</strong> to improve learning outcomes, staff confidence, and operational effectiveness.
                </p>
              </div>
            </div>

            {/* Who I Work With - Highlighted Box */}
            <div className="bg-gradient-to-r from-[#df8125] to-[#c67320] rounded-2xl p-8 md:p-10 text-white">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Who I Work With
                  </h3>
                  <p className="text-white/95 text-lg leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    I work with <strong>TVET institutions</strong>, <strong>training providers</strong>, and 
                    <strong> development programmes</strong> seeking clarity, structure, and results in their 
                    skills training initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Upcoming Events CTA Section (matches main events page style) */}
            <div className="mt-12 flex justify-center">
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
                  <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What I Focus On Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What I Focus On
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Most TVET challenges are not about lack of ideas — they're about <strong>execution gaps</strong>.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                I work with institutions to:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {focusPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-[#df8125]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-[#df8125]" />
                    </div>
                    <p className="text-lg text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Areas of Work Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Core Areas of Work
              </h2>
              <div className="w-24 h-1 bg-[#df8125] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#df8125]/30 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#df8125] to-[#c67320] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      {area.description}
                    </p>
                  </div>
                );
              })}
              {/* Motivational Speaking Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#df8125]/30 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#df8125] to-[#c67320] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Motivational Speaking
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Inspire and energize your team or audience with impactful talks that ignite passion and purpose.<br />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Me Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/hero/hero2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Work With Me
              </h2>
              <div className="w-24 h-1 bg-[#df8125] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyWorkWithMe.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[#df8125]/50 transition-colors">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#df8125] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-[#df8125]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Let's Have a Focused Conversation
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              If you're exploring how to strengthen TVET delivery, integrate technology responsibly, 
              or build staff capacity, I'd be happy to discuss how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-10 py-4 bg-white text-[#df8125] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services"
                className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-[#df8125] transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Start a Conversation
              </h2>
              <p className="text-lg text-gray-600" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Share your challenge or question, and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              {formState.succeeded ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Thank you for reaching out. I'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-[#df8125] font-semibold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#df8125] focus:border-transparent text-gray-900"
                        placeholder="Your name"
                      />
                      <ValidationError prefix="Name" field="name" errors={formState.errors} className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#df8125] focus:border-transparent text-gray-900"
                        placeholder="your@email.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#df8125] focus:border-transparent text-gray-900"
                      placeholder="Your organization or institution"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#df8125] focus:border-transparent text-gray-900"
                      placeholder="What would you like to discuss?"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={formState.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#df8125] focus:border-transparent resize-vertical text-gray-900"
                      placeholder="Tell me about your TVET challenge or project..."
                    />
                    <ValidationError prefix="Message" field="message" errors={formState.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="w-full bg-[#df8125] text-white font-bold text-lg py-4 rounded-lg shadow-md hover:bg-[#c67320] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState.submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
