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
