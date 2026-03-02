import React from 'react';
import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';

const groupLinks = [
  {
    title: 'TVET Foundation Ghana',
    description: 'Advancing TVET leadership, collaboration, and innovation across Ghana.',
    href: '/groups/tvet-foundation',
  },
  {
    title: 'The ASSET Initiative',
    description: 'Digital TVET innovation and systems partnerships for practical impact.',
    href: '/groups/asset-initiative',
  },
  {
    title: 'Association of Chaplains in Education',
    description: 'Faith-based support and leadership development across education spaces.',
    href: '/groups/chaplains-association',
  },
  {
    title: 'Workforce Development Institute',
    description: 'Workforce readiness, practical skills growth, and institutional support.',
    href: '/groups/workforce-development',
  },
];

export default function GroupsIndexPage() {
  return (
    <>
      <SEOHead
        title={pagesSEO.groups.title}
        description={pagesSEO.groups.description}
        canonical={pagesSEO.groups.canonical}
        openGraph={pagesSEO.groups.openGraph}
      />

      <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Groups</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our initiatives and partner groups focused on TVET growth, leadership, and community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {groupLinks.map((group) => (
              <Link
                key={group.href}
                href={group.href}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-[#df8125] hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-2 text-[#df8125] font-semibold mb-3">
                      <Users className="w-5 h-5" /> Group
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{group.title}</h2>
                    <p className="text-gray-600">{group.description}</p>
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
