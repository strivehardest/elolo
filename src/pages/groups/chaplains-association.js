import React from 'react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';
import { Users2, School, UserCheck, Heart, Shield, CheckCircle, ArrowRight, HeartHandshake, GraduationCap, MessageCircle, CalendarDays, ArrowUp } from 'lucide-react';
import CalendarIcon from 'react-calendar-icon';
import Link from 'next/link';
import Image from 'next/image';

const ChaplainsAssociationPage = () => {
    const impacts = [
      { number: "200+", title: "Member Chaplains", text: "Over 200 member chaplains serving in education", icon: Users2 },
      { number: "500+", title: "Schools Served", text: "500+ schools supported with spiritual care", icon: School },
      { number: "100K+", title: "Students Reached", text: "100,000+ students reached across Ghana", icon: UserCheck },
      { number: "15+", title: "Years of Service", text: "15+ years of dedicated service in education", icon: CalendarDays }
    ];
  const services = [
    {
      title: "Spiritual Guidance",
      icon: Heart,
      description: "Providing spiritual support and guidance to students and educators, helping them navigate life's challenges with faith and purpose."
    }
  ];
  const values = [
    "Compassionate care for every student",
    "Respect for diverse faith traditions",
    "Excellence in pastoral ministry",
    "Collaboration with educators and families",
    "Commitment to holistic student development"
  ];

  // Move to Top Arrow state
  const [showTop, setShowTop] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <SEOHead
        title="Chaplains Association | Spiritual Care in Education (Ghana)"
        description="Learn about the Chaplains Association: providing spiritual guidance, pastoral care, and holistic support to students and educators across Ghana."
        canonical="https://eloloagbleke.com/groups/chaplains-association"
        openGraph={{
          title: "Chaplains Association | Spiritual Care in Education (Ghana)",
          description: "Learn about the Chaplains Association: providing spiritual guidance, pastoral care, and holistic support to students and educators across Ghana.",
          url: "https://eloloagbleke.com/groups/chaplains-association"
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'Chaplains Association, Elolo Agbleke, Ghana, spiritual care, education, pastoral support, TVET, holistic development, students, educators'
        }]}
      />
      <div className="min-h-screen bg-[#fefefd]">
      {/* Move to Top Arrow */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
              ASSOCIATION OF CHAPLAINS IN EDUCATION (ACE)
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed font-medium mb-3">
              ACE - Spiritual and pastoral care for education
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-6">
              Professionalizing chaplaincy and holistic learner transformation in Ghana
            </p>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden p-4">
              <Image
                src="/groups/chaplains.jpeg"
                alt="ACE Logo"
                width={160}
                height={160}
                className="object-contain mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="mb-20">
                          <h2 className="text-3xl md:text-4xl font-bold text-[#030202] mb-6 text-center">Mandate</h2>
                          <p className="text-lg md:text-xl text-[#65605b] leading-relaxed text-center max-w-3xl mx-auto">
                            To professionalize, strengthen, and coordinate chaplaincy services within the education sector; particularly TVET through capacity building, ethical formation, mentorship, and spiritually grounded learner transformation programmes.
                          </p>
                      </div>

                        {/* Strategic Position */}
                        <div className="mb-20 flex justify-center">
                          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200 text-center flex flex-col items-center max-w-2xl w-full">
                            <div className="flex flex-col items-center mb-6">
                              <div className="w-12 h-12 bg-[#df8125] rounded-lg flex items-center justify-center mb-3">
                                <CheckCircle className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold text-[#030202]">Strategic Position</h3>
                            </div>
                            <p className="text-lg md:text-xl text-[#65605b] leading-relaxed max-w-xl mx-auto">
                              ACE is not a church, not a revival ministry, and not a student fellowship.<br/>
                              It is a professional, systems-oriented chaplaincy body that operates within institutional rules while shaping moral, spiritual, and character outcomes in learners.
                            </p>
                          </div>
                        </div>

                        {/* Scope of Work */}
                        <div className="mb-20">
                          <h2 className="text-3xl md:text-4xl font-bold text-[#030202] mb-6 text-center">Scope of Work</h2>
                          <p className="text-lg md:text-xl text-[#65605b] max-w-3xl mx-auto text-center mb-8">ACE’s work is organized under five interlinked pillars:</p>
                          <div className="grid md:grid-cols-2 gap-8">
                            {[
                              {
                                title: "Pillar 1: Chaplain Professionalization & Standards",
                                items: [
                                  "Development of chaplaincy competency frameworks for educational settings",
                                  "Ethics, safeguarding, and professional conduct standards",
                                  "Accreditation and recognition pathways"
                                ]
                              },
                              {
                                title: "Pillar 2: Continuous Training & Capacity Building",
                                items: [
                                  "Induction programmes for new chaplains",
                                  "Annual CPD programmes",
                                  "Specialized training for TVET environments (youth at risk, discipline, counselling)"
                                ]
                              },
                              {
                                title: "Pillar 3: Learner Spiritual & Character Formation",
                                items: [
                                  "Values-based programmes embedded in school life",
                                  "Moral leadership and citizenship development",
                                  "Faith-informed life skills for TVET learners"
                                ]
                              },
                              {
                                title: "Pillar 4: Experiential Faith & Values Engagement",
                                items: [
                                  "Structured spiritual and ethical events aligned with educational calendars",
                                  "Inter-institutional learner engagement activities"
                                ]
                              },
                              {
                                title: "Pillar 5: Mentorship & Knowledge Transfer",
                                items: [
                                  "Structured mentorship for young and emerging chaplains",
                                  "Documentation and transfer of institutional chaplaincy wisdom"
                                ]
                              }
                            ].map((pillar, idx) => (
                              <div key={pillar.title} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                                <h3 className="text-2xl font-bold text-[#df8125] mb-4">{pillar.title}</h3>
                                <div className="space-y-5">
                                  {pillar.items.map((item, i) => (
                                    <div key={i} className="flex items-start">
                                      <div className="flex-shrink-0 w-8 h-8 bg-[#df8125] rounded-full flex items-center justify-center mr-5 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                      </div>
                                      <p className="text-lg md:text-xl text-[#65605b] leading-relaxed">
                                        {item}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Strategic Targets */}
                        <div className="mb-20">
                          <h2 className="text-3xl md:text-4xl font-bold text-[#030202] mb-6 text-center">Strategic Targets</h2>
                          <ul className="list-disc pl-6 text-[#65605b] text-lg space-y-2 max-w-3xl mx-auto">
                            {[
                              "Establish ACE chapters in all TVET regions of Ghana",
                              "Register and profile 200+ practicing chaplains",
                              "Train 500+ chaplains and assistant chaplains through CPD",
                              "Reach 200,000+ learners through character and spiritual programmes",
                              "Develop one nationally recognized chaplaincy practice framework for education"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#df8125] mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Projected Core Programmes & Activities */}
                        <div className="mb-20">
                          <h2 className="text-3xl md:text-4xl font-bold text-[#030202] mb-6 text-center">Projected Core Programmes & Activities</h2>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">a. National Chaplaincy Capacity Building Programme</h3>
                              <ul className="list-disc pl-6 text-[#65605b] text-lg space-y-1 text-left">
                                {[
                                  "Quarterly training workshops",
                                  "Topics: counselling, adolescent psychology, ethics, safeguarding, crisis response, interfaith sensitivity"
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#df8125] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">b. TVET Learners Spiritual & Character Transformation Series</h3>
                              <ul className="list-disc pl-6 text-[#65605b] text-lg space-y-1 text-left">
                                {[
                                  "Bible Quiz & Values Competitions",
                                  "Ethical Leadership Forums",
                                  "Purpose, Discipline & Work Ethic Seminars"
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#df8125] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">c. National Faith & Values Festivals (Annual / Biennial)</h3>
                              <ul className="list-disc pl-6 text-[#65605b] text-lg space-y-1 text-left">
                                {[
                                  "Prayer Festivals",
                                  "Praise & Worship Conferences",
                                  "Music & Arts for Transformation Festivals",
                                  "Drama & Spoken Word Nights"
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#df8125] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">d. Chaplains Mentorship & Apprenticeship Scheme</h3>
                              <ul className="list-disc pl-6 text-[#65605b] text-lg space-y-1 text-left">
                                {[
                                  "One-on-one and cohort-based mentoring",
                                  "Senior chaplains matched with early-career chaplains",
                                  "Documentation of lived chaplaincy cases and lessons"
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#df8125] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">e. Chaplaincy Knowledge & Resource Hub</h3>
                              <ul className="list-disc pl-6 text-[#65605b] text-lg space-y-1 text-left">
                                {[
                                  "Manuals, sermon frameworks, counselling guides",
                                  "Case studies from TVET institutions",
                                  "Digital repository (long-term)"
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#df8125] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Innovative Approaches */}
                        <div className="mb-20">
                          <h2 className="text-3xl md:text-4xl font-bold text-[#030202] mb-6 text-center">Innovative Approaches</h2>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">1. Competency-Based Chaplaincy Model</h3>
                              <p className="text-[#65605b] text-lg">Clear skills, behaviours, and ethical standards</p>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">2. Event-as-Formation Model</h3>
                              <p className="text-[#65605b] text-lg">Spiritual events designed with learning objectives, reflection tools, and follow-up activities</p>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">3. Mentorship as Institutional Memory</h3>
                              <p className="text-[#65605b] text-lg">Systematic capture of senior Chaplain’s lived experiences</p>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">4. TVET-Specific Chaplaincy Practice</h3>
                              <p className="text-[#65605b] text-lg">Addressing identity, discipline, employability ethics, substance abuse, and life purpose</p>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">5. Hybrid Faith Engagement</h3>
                              <p className="text-[#65605b] text-lg">Physical events + digital devotionals, reflections, and learning tools</p>
                            </div>
                          </div>
                        </div>

                        {/* Governance & Management Structure */}
                        <div className="mb-20">
                          <h2 className="text-3xl md:text-4xl font-bold text-[#030202] mb-6 text-center">Governance & Management Structure</h2>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">Governing Board</h3>
                              <ul className="list-disc pl-6 text-[#65605b] text-lg space-y-1 text-left">
                                {[
                                  "Chairperson",
                                  "Vice Chair",
                                  "Secretary",
                                  "Finance & Audit Lead",
                                  "Programmes Lead",
                                  "Safeguarding & Ethics Lead"
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#df8125] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                              <h3 className="text-2xl font-bold text-[#df8125] mb-2">National Secretariat</h3>
                              <ul className="list-disc pl-6 text-[#65605b] text-lg space-y-1 text-left">
                                {[
                                  "National Chaplain",
                                  "Programmes Coordinator (Chaplaincy & Training)",
                                  "Events & Outreach Coordinator",
                                  "Finance & Administration Officer"
                                ].map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#df8125] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Required Operational Documents */}
                        <div className="mb-20">
                          <h2 className="text-3xl md:text-4xl font-bold text-[#030202] mb-6 text-center">Required Operational Documents</h2>
                          <ul className="list-disc pl-6 text-[#65605b] text-lg space-y-2 max-w-3xl mx-auto text-left">
                            {["Constitution / Governing Instrument",
                              "Board Charter & Code of Conduct",
                              "Chaplaincy Ethics & Safeguarding Policy",
                              "Operations & Administration Manual",
                              "Financial Management & Procurement Policy",
                              "Monitoring, Evaluation & Learning (MEL) Framework",
                              "Membership & Accreditation Guidelines",
                              "Mentorship Programme Framework",
                              "Partnerships & Stakeholder Engagement Strategy",
                              "Risk Management & Crisis Response Protocol"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-[#df8125] mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Section */}
                        <div className="relative rounded-2xl overflow-hidden my-20">
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: "url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                            aria-hidden="true"
                          />
                          <div className="absolute inset-0 bg-[#df8125]/90" aria-hidden="true" />
                          <div className="relative z-10 p-12 md:p-20 text-center text-white">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to connect with us?</h2>
                            <Link 
                              href="/contact"
                              className="inline-flex items-center justify-center bg-[#df8125] text-white px-10 py-5 rounded-xl font-bold text-xl transition-colors shadow-lg hover:bg-white hover:text-[#df8125]"
                            >
                              Get Involved
                            </Link>
                          </div>
                        </div>

      </div>
    </div>
    </>
  );
}
export default ChaplainsAssociationPage;