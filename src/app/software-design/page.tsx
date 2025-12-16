import type { Metadata } from 'next';

export const dynamic = 'force-static';

const canonicalUrl = 'https://warning-machines.com/software-design/';

export const metadata: Metadata = {
  title: 'Software Design | Warning Machines',
  description: 'Software design and development services from Warning Machines. Custom software solutions for hardware products.',
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    locale: 'en_US',
    type: 'article',
    title: 'Software Design | Warning Machines',
    description: 'Software design and development services from Warning Machines. Custom software solutions for hardware products.',
    url: canonicalUrl,
    siteName: 'Warning Machines',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Design | Warning Machines',
    description: 'Software design and development services from Warning Machines. Custom software solutions for hardware products.',
  },
};

export default function SoftwareDesignPage() {
  return (
    <div className="page">
      <section className="section section--narrow">
        <div className="section__header">
          <h1>Software Design</h1>
        </div>
      </section>
    </div>
  );
}

