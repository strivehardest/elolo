import React from 'react';
import SEOHead from '../../components/seo/SEOHead';
import { pagesSEO } from '../../lib/seo';

export default function DownloadsPage() {
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
      <h1 className="text-4xl font-bold mb-6 text-[#df8125]">Downloads</h1>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#df8125]">Listen: BUBU (Glory) by EldChapEl</h2>
        <div className="flex justify-center">
          <iframe
            title="BUBU (Glory) by EldChapEl"
            src="https://audiomack.com/embed/song/EldChapEl/bubu-glory-eldchapel?background=1"
            scrolling="no"
            width="100%"
            height="180"
            frameBorder="0"
            allow="autoplay"
            className="rounded-xl max-w-xl w-full"
          ></iframe>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#df8125]">Listen: From a Carpenter to a Professor</h2>
        <div className="flex justify-center">
          <iframe
            title="From a Carpenter to a Professor by EldChapEl"
            src="https://audiomack.com/embed/song/EldChapEl/from-a-carpenter-to-a-professor?background=1"
            scrolling="no"
            width="100%"
            height="180"
            frameBorder="0"
            allow="autoplay"
            className="rounded-xl max-w-xl w-full"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
}