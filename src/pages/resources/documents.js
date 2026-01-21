import React from 'react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';

export default function DocumentsPage() {
  return (
    <>
      <SEOHead
        title={pagesSEO.resources.title}
        description={pagesSEO.resources.description}
        canonical={pagesSEO.resources.canonical}
        openGraph={pagesSEO.resources.openGraph}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'Elolo Agbleke, resources, documents, downloads, TVET, Ghana, professional development, community'
        }]}
      />
      <div className="max-w-2xl mx-auto text-center py-20">
      <h1 className="text-4xl font-bold mb-6 text-[#df8125]">Documents</h1>
      <p className="text-lg text-gray-700">Not available at the moment.</p>
    </div>
    </>
  );
}