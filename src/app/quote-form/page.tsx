import type { Metadata } from 'next';
import Script from 'next/script';
import QuoteForm from './quote-form-client';

const pageTitle = 'Quote Form | Warning Machines';
const description = 'Looking for a custom solution for your Projects?';
const ogImage = 'https://warning-machines.com/images/2025/06/cropped-warning-icon-2.png';
const url = 'https://warning-machines.com/quote-form/';

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: {
    canonical: '/quote-form',
  },
  openGraph: {
    type: 'article',
    url,
    siteName: 'Warning Machines',
    title: pageTitle,
    description,
    updatedTime: '2025-08-24T07:26:26+00:00',
    images: [
      {
        url: ogImage,
        width: 512,
        height: 512,
        alt: 'warning machines',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${url}#webpage`,
      url,
      name: pageTitle,
      datePublished: '2025-06-22T21:49:19+00:00',
      dateModified: '2025-08-24T07:26:26+00:00',
      isPartOf: { '@id': 'https://warning-machines.com/#website' },
      primaryImageOfPage: { '@id': ogImage },
      inLanguage: 'en-US',
    },
  ],
};

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LfLpnorAAAAAJ7CvTgksRywmNodesDmTr2qEfzo';

export default function QuoteFormPage() {
  return (
    <>
      <Script id="ldjson-quote-form" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        strategy="afterInteractive"
        id="recaptcha-script"
      />
      <QuoteForm recaptchaSiteKey={recaptchaSiteKey} />
    </>
  );
}

