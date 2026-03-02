import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  openGraph, 
  twitter,
  additionalMetaTags = [],
  noindex = false,
  nofollow = false 
}) => {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eloloagbleke.com';
  const cleanPath = router.asPath.split('?')[0].split('#')[0];
  
  // Generate canonical URL if not provided
  const canonicalUrl = canonical
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`)
    : `${siteUrl}${cleanPath}`;
  
  // Generate robots meta content
  const robots = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  const defaultMetaTags = [
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
  ];

  const mergedMetaTags = [...defaultMetaTags];
  additionalMetaTags.forEach((tag) => {
    const key = tag?.name || tag?.property || tag?.httpEquiv;
    const existingIndex = mergedMetaTags.findIndex((existingTag) => {
      const existingKey = existingTag?.name || existingTag?.property || existingTag?.httpEquiv;
      return key && existingKey === key;
    });

    if (existingIndex >= 0) {
      mergedMetaTags[existingIndex] = tag;
    } else {
      mergedMetaTags.push(tag);
    }
  });

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
      additionalMetaTags={mergedMetaTags}
    />
  );
};

export default SEOHead;