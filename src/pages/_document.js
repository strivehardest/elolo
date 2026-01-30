import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Onest:wght@400;700&family=Open+Sans:wght@300;400;500;600;700&family=Bricolage+Grotesque:wght@400;600;700&family=Ruluko&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* ✅ Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#2563eb" />

        {/* ✅ Google Search Console Verification */}
        <meta name="google-site-verification" content="Fs3YLznGMqwiT3X_eNN-_NG7DVQOm0D0IbEvMvcgLkA" />

        {/* ✅ Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}

        {/* ✅ Preload Hero Image */}
        <link rel="preload" href="/images/hero/hero1.jpg" as="image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
