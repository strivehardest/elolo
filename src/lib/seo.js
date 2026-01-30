const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eloloagbleke.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Elolo Agbleke - Building TVET Systems';
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Building TVET systems, fostering growth, and creating meaningful relationships through shared experiences and knowledge.';

export const defaultSEO = {
  title: `${siteName} | Building TVET Systems`,
  description: siteDescription,
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    site_name: siteName,
    title: `${siteName} | Building TVET Systems`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Building TVET Systems`,
      },
    ],
    profile: {
      firstName: 'Elolo',
      lastName: 'Agbleke',
    },
    social: [
      {
        label: 'Facebook',
        url: 'https://web.facebook.com/EldChapEl',
      },
      {
        label: 'X',
        url: 'https://x.com/elolo2000?s=11',
      },
      {
        label: 'YouTube',
        url: 'https://www.youtube.com/@eloloagbleke746',
      },
      {
        label: 'LinkedIn',
        url: 'https://gh.linkedin.com/in/elolo-kwabla-magnus-agbleke-69693b2b',
      },
      {
        label: 'WhatsApp',
        url: 'https://wa.me/233243623269',
      },
      {
        label: 'Telegram',
        url: 'https://t.me/EldChapEl',
      },
    ],
  },
  twitter: {
    handle: '@eloloagbleke',
    site: '@eloloagbleke',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'TVET, TVET Foundation, TVET Founder, Motivational Speakers in Ghana, technical and vocational education, skills development, community building, professional development, networking, events, groups, resources, leadership, mentoring, Elolo Agbleke, Ghana, education, training',
    },
    {
      name: 'author',
      content: 'Elolo Agbleke',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
};

// Page-specific SEO configurations
export const pagesSEO = {
  home: {
    title: `${siteName} | Building TVET Systems`,
    description: 'Join our vibrant community focused on professional development, networking, and meaningful connections. Discover groups, events, and resources designed to foster growth.',
    canonical: siteUrl,
    openGraph: {
      title: `${siteName} | Building TVET Systems`,
      description: 'Join our vibrant community focused on TVET, technical and vocational education, professional development, networking, and meaningful connections.',
      url: siteUrl,
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'TVET, TVET Foundation, TVET Founder, Motivational Speakers in Ghana, technical and vocational education, skills development, community building, professional development, networking, events, groups, resources, leadership, mentoring, Elolo Agbleke, Ghana, education, training',
      },
    ],
  },
  
  about: {
    title: `About Elolo Agbleke | ${siteName}`,
    description: 'Learn about Elolo Agbleke\'s mission to build meaningful connections and foster growth through TVET, technical and vocational education, community engagement, leadership development, and professional networking.',
    canonical: `${siteUrl}/about`,
    openGraph: {
      title: `About Elolo Agbleke | ${siteName}`,
      description: 'Learn about Elolo Agbleke\'s mission to build meaningful connections and foster growth through TVET and community engagement.',
      url: `${siteUrl}/about`,
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'TVET, TVET Foundation, TVET Founder, Motivational Speakers in Ghana, technical and vocational education, skills development, community building, professional development, leadership, Elolo Agbleke, Ghana, education, training',
      },
    ],
  },
  
  groups: {
    title: `Community Groups | ${siteName}`,
    description: 'Explore our diverse TVET and community groups including study groups, support groups, professional networks, and community engagement opportunities.',
    canonical: `${siteUrl}/groups`,
    openGraph: {
      title: `Community Groups | ${siteName}`,
      description: 'Explore our diverse TVET and community groups and find your perfect network.',
      url: `${siteUrl}/groups`,
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'TVET, TVET Foundation, TVET Founder, Motivational Speakers in Ghana, technical and vocational education, community groups, professional networks, Elolo Agbleke, Ghana, education, training',
      },
    ],
  },
  
  events: {
    title: `Events & Workshops | ${siteName}`,
    description: 'Discover upcoming TVET workshops, conferences, networking events, and community gatherings. Register for professional development and social connection opportunities.',
    canonical: `${siteUrl}/events`,
    openGraph: {
      title: `Events & Workshops | ${siteName}`,
      description: 'Discover upcoming TVET workshops, conferences, and networking events.',
      url: `${siteUrl}/events`,
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'TVET, TVET Foundation, TVET Founder, Motivational Speakers in Ghana,   technical and vocational education, events, workshops, conferences, networking, Elolo Agbleke, Ghana, education, training',
      },
    ],
  },
  
  services: {
    title: `Professional Services | ${siteName}`,
    description: 'Expert TVET, community building, event planning, professional development, and strategic mentoring services to help you grow your network and organization.',
    canonical: `${siteUrl}/services`,
    openGraph: {
      title: `Professional Services | ${siteName}`,
      description: 'Expert TVET, community building, event planning, and professional development services.',
      url: `${siteUrl}/services`,
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'TVET, TVET Foundation, TVET Founder, Motivational Speakers in Ghana, technical and vocational education, services, professional development, event planning, mentoring, Elolo Agbleke, Ghana, education, training',
      },
    ],
  },
  
  resources: {
    title: `Community Resources | ${siteName}`,
    description: 'Access valuable TVET documents, downloads, useful links, and frequently asked questions to support your community engagement and professional development.',
    canonical: `${siteUrl}/resources`,
    openGraph: {
      title: `Community Resources | ${siteName}`,
      description: 'Access valuable TVET documents, downloads, and resources for community engagement.',
      url: `${siteUrl}/resources`,
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'TVET, TVET Foundation, TVET Founder, Motivational Speakers in Ghana, technical and vocational education, resources, documents, downloads, Elolo Agbleke, Ghana, education, training',
      },
    ],
  },
  
  contact: {
    title: `Contact Us | ${siteName}`,
    description: 'Get in touch with Elolo Agbleke for TVET, community inquiries, event planning, professional services, or to learn more about joining our network.',
    canonical: `${siteUrl}/contact`,
    openGraph: {
      title: `Contact Us | ${siteName}`,
      description: 'Get in touch for TVET, community inquiries, event planning, and professional services.',
      url: `${siteUrl}/contact`,
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'TVET, technical and vocational education, contact, community, event planning, professional services, Elolo Agbleke, Ghana, education, training',
      },
    ],
  },
};

// Generate structured data for different page types
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: siteDescription,
    founder: {
      '@type': 'Person',
      name: 'Elolo Agbleke',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      availableLanguage: 'English',
    },
    sameAs: [
      'https://facebook.com/eloloagbleke',
      'https://lik'
      // 'https://linkedin.com/in/eloloagbleke',
      // 'https://twitter.com/eloloagbleke',
    ],
  };
};

export const generatePersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Elolo Agbleke',
    jobTitle: 'Community Builder & Professional Development Specialist',
    description: 'Passionate about building bridges, fostering connections, and empowering communities through meaningful engagement.',
    url: siteUrl,
    image: `${siteUrl}/about-image.jpg`,
    knowsAbout: [
      'Community Building',
      'Professional Development',
      'Leadership Training',
      'Event Planning',
      'Networking',
    ],
  };
};

export const generateEventSchema = (event) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location,
    },
    organizer: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: event.price || '0',
      priceCurrency: 'USD',
    },
  };
};

// Social links for SEO and metadata
export const socialLinks = {
  facebook: 'https://web.facebook.com/EldChapEl',
  twitter: 'https://x.com/elolo2000?s=11',
  youtube: 'https://www.youtube.com/@eloloagbleke746',
  linkedin: 'https://gh.linkedin.com/in/elolo-kwabla-magnus-agbleke-69693b2b',
  whatsapp: 'https://wa.me/233243623269',
  telegram: 'https://t.me/EldChapEl',
};