import React from 'react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is Elolo Agbleke Community?',
    answer: 'Elolo Agbleke Community is an organization focused on TVET innovation, digital transformation, and capacity building for individuals and organizations.'
  },
  {
    question: 'How can I join or participate in events?',
    answer: 'You can join our events by visiting the Events section of our website and registering for upcoming activities.'
  },
  {
    question: 'Where can I find resources and documents?',
    answer: 'Resources and documents will be available soon in the Resources section. Stay tuned for updates!'
  },
  {
    question: 'How do I contact the team?',
    answer: (
      <>
        You can reach out to us via the Contact page for any inquiries or support.
        <div className="mt-4">
          <Link href="/contact" legacyBehavior>
            <a
              className="inline-block px-5 py-2 rounded-full bg-brand-orange text-white font-semibold shadow border-2 border-brand-orange focus:outline-none transition-colors duration-200 hover:bg-white hover:text-brand-orange hover:border-brand-orange"
              style={{ minWidth: '120px' }}
            >
              Contact Us
            </a>
          </Link>
        </div>
      </>
    )
  }
];

export default function FAQsPage() {
  return (
    <>
      <SEOHead
        title="FAQs | TVET Community Questions & Answers"
        description="Find answers to frequently asked questions about Elolo Agbleke, TVET innovation, events, and community resources."
        canonical="https://eloloagbleke.com/resources/faqs"
        openGraph={{
          title: "FAQs | TVET Community Questions & Answers",
          description: "Find answers to frequently asked questions about Elolo Agbleke, TVET innovation, events, and community resources.",
          url: "https://eloloagbleke.com/resources/faqs"
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'FAQs, questions, answers, TVET, Elolo Agbleke, Ghana, community, events, resources, support'
        }]}
      />
      <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-[#df8125] text-center">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h2>
            <div className="text-gray-700">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
