import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  openGraph, 
  twitter,
  noindex = false,
  nofollow = false 
}) => {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eloloagbleke.com';
  
  // Generate canonical URL if not provided
  const canonicalUrl = canonical || `${siteUrl}${router.asPath}`;
  
  // Generate robots meta content
  const robots = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonicalUrl}
      noindex={noindex}
      nofollow={nofollow}
      openGraph={{
        url: canonicalUrl,
        title: title,
        description: description,
        site_name: 'Elolo Agbleke Community',
        type: 'website',
        locale: 'en_US',
        ...openGraph,
      }}
      twitter={{
        handle: '@eloloagbleke',
        site: '@eloloagbleke',
        cardType: 'summary_large_image',
        ...twitter,
      }}
      additionalMetaTags={[
        {
          name: 'robots',
          content: robots,
        },
        {
          name: 'googlebot',
          content: robots,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5',
        },
        {
          httpEquiv: 'x-ua-compatible',
          content: 'IE=edge',
        },
      ]}
    />
  );
};

export default SEOHead;