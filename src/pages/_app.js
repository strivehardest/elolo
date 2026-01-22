import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import ReactGA from 'react-ga4';

import Layout from '../components/layout/Layout';
import { initGA, logPageView } from '../lib/analytics';
import { defaultSEO } from '../lib/seo';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Initialize Google Analytics once on mount
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_ID) {
      initGA();
    }
  }, []);

  // Log page views on route change
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (process.env.NEXT_PUBLIC_GA_ID) {
        logPageView(url);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    // Log initial page load
    if (process.env.NEXT_PUBLIC_GA_ID) {
      logPageView(window.location.pathname);
    }
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Favicon and SEO */}
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo {...defaultSEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
