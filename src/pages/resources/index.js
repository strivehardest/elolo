import React from 'react';
import Link from 'next/link';
import { Library, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';

const resourceLinks = [
  {
    title: 'Downloads',
    description: 'Access featured media and downloadable resources.',
    href: '/resources/download',
  },
  {
    title: 'Testimonials',
    description: 'Read feedback from partners, learners, and institutions.',
    href: '/resources/testimonials',
  },
  {
    title: 'Useful Links',
    description: 'Curated external resources for TVET and professional growth.',
    href: '/resources/links',
  },
  {
    title: 'Gallery',
    description: 'Browse highlights from events, workshops, and projects.',
    href: '/resources/gallery',
  },
  {
    title: 'FAQs',
    description: 'Find answers to common questions about services and programs.',
    href: '/resources/faqs',
  },
];

export default function ResourcesIndexPage() {
  return (
    <>
      <SEOHead
        title={pagesSEO.resources.title}
        description={pagesSEO.resources.description}
        canonical={pagesSEO.resources.canonical}
        openGraph={pagesSEO.resources.openGraph}
      />

      <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse guides, links, testimonials, and media curated to support TVET and community growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resourceLinks.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-[#df8125] hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[#df8125] font-semibold mb-3">
                      <Library className="w-5 h-5" /> Resource
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{resource.title}</h2>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#df8125] flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
