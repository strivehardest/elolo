import Head from 'next/head';
import Script from 'next/script';
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

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_ID) {
      initGA();
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (process.env.NEXT_PUBLIC_GA_ID) {
        logPageView(url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* ✅ Google Analytics Tag (using env variable) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

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
