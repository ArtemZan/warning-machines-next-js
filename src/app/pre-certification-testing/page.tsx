import type { Metadata } from 'next';

export const dynamic = 'force-static';

const canonicalUrl = 'https://warning-machines.com/pre-certification-testing/';

export const metadata: Metadata = {
  title: 'Pre Certification Testing | Warning Machines',
  description: 'Pre-certification testing services from Warning Machines. Ensure your product meets regulatory requirements before submission.',
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    locale: 'en_US',
    type: 'article',
    title: 'Pre Certification Testing | Warning Machines',
    description: 'Pre-certification testing services from Warning Machines. Ensure your product meets regulatory requirements before submission.',
    url: canonicalUrl,
    siteName: 'Warning Machines',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pre Certification Testing | Warning Machines',
    description: 'Pre-certification testing services from Warning Machines. Ensure your product meets regulatory requirements before submission.',
  },
};

export default function PreCertificationTestingPage() {
  return (
    <div className="page">
      <section className="section section--narrow">
        <div className="section__header">
          <h1>Pre Certification Testing</h1>
        </div>
      </section>
    </div>
  );
}

