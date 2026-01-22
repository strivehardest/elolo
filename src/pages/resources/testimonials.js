
import SEOHead from '../../components/seo/SEOHead';

const testimonials = [
  {
    title: "Institutional Leadership",
    quote: "Elolo brings clarity to complex TVET concepts and turns ideas into structured, workable programmes. His approach is practical, well thought through, and grounded in real institutional needs.",
    author: "Senior TVET Administrator"
  },
  {
    title: "Project Collaboration",
    quote: "Working with Elolo was refreshing. He understands both the technical and human sides of training implementation, which made adoption much smoother for our team.",
    author: "Project Coordinator"
  },
  {
    title: "VR Training",
    quote: "The VR training session was hands-on, engaging, and surprisingly practical. Participants left confident, not confused — which is rare with new technology.",
    author: "Training Participant"
  },
  {
    title: "Staff Capacity Building",
    quote: "He has a strong grasp of competency-based training and knows how to transfer that understanding to facilitators without overwhelming them.",
    author: "TVET Trainer"
  },
  {
    title: "Student Perspective",
    quote: "The training changed how I see learning. It was practical, interactive, and directly connected to real work situations.",
    author: "TVET Student"
  },
  {
    title: "Institutional Partner",
    quote: "Elolo doesn’t just deliver training and disappear. He stays engaged, follows through, and ensures systems are actually usable after the workshop.",
    author: "Institutional Partner"
  },
  {
    title: "Event Facilitation",
    quote: "His facilitation style is calm, structured, and focused on outcomes. Sessions are well paced and highly participatory.",
    author: "Event Participant"
  },
  {
    title: "EdTech Implementation",
    quote: "What stood out was his ability to adapt digital learning solutions to our context instead of forcing a one-size-fits-all model.",
    author: "Programme Manager"
  }
];

export default function TestimonialsPage() {
  return (
    <>
        <SEOHead
          title="Testimonials | TVET Training & Community Impact Reviews"
          description="Read testimonials and reviews from institutions, partners, and participants about Elolo Agbleke's TVET training, EdTech, and community impact."
          canonical="https://eloloagbleke.com/resources/testimonials"
          openGraph={{
            title: "Testimonials | TVET Training & Community Impact Reviews",
            description: "Read testimonials and reviews from institutions, partners, and participants about Elolo Agbleke's TVET training, EdTech, and community impact.",
            url: "https://eloloagbleke.com/resources/testimonials"
          }}
          additionalMetaTags={[{
            name: 'keywords',
            content: 'testimonials, reviews, TVET, Elolo Agbleke, training, EdTech, community, Ghana, impact, feedback'
          }]}
      />
      <section className="py-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h1>
          <div className="w-24 h-1 bg-[#df8125] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Feedback from institutions, partners, and participants about Elolo's work in TVET, EdTech, and capacity building.
          </p>
        </div>
        <div className="space-y-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow p-6 border-l-4 border-[#df8125]">
              <h2 className="text-xl font-semibold text-[#df8125] mb-2">{t.title}</h2>
              <blockquote className="text-gray-800 italic mb-2">
                “{t.quote}”
              </blockquote>
              <div className="text-sm text-gray-600 text-right">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
