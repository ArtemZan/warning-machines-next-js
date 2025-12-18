import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const dynamic = 'force-static';

const canonicalUrl = 'https://warning-machines.com/about-us/';
const ogImage = 'https://warning-machines.com/wp-content/uploads/2025/06/Messenger_creation_c90fcfae-aed9-4134-843a-be4dd3fbc961-300x256.jpeg';

export const metadata: Metadata = {
  title: 'About Warning Machines | Warning Machines',
  description:
    'WARNING MACHINES is an engineer-run prototyping and low-volume manufacturing studio. We turn napkin sketches and CAD files into fully functional,',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    locale: 'en_US',
    type: 'article',
    title: 'About Warning Machines | Warning Machines',
    description:
      'WARNING MACHINES is an engineer-run prototyping and low-volume manufacturing studio. We turn napkin sketches and CAD files into fully functional,',
    url: canonicalUrl,
    siteName: 'Warning Machines',
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        alt: 'about Warning Machines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Warning Machines | Warning Machines',
    description:
      'WARNING MACHINES is an engineer-run prototyping and low-volume manufacturing studio. We turn napkin sketches and CAD files into fully functional,',
    images: [ogImage],
  },
  other: {
    'twitter:label1': 'Time to read',
    'twitter:data1': '1 minute',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: 'About Warning Machines | Warning Machines',
  description:
    'WARNING MACHINES is an engineer-run prototyping and low-volume manufacturing studio. We turn napkin sketches and CAD files into fully functional,',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://warning-machines.com/#website' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: ogImage,
    caption: 'about Warning Machines',
  },
  dateModified: '2025-08-27T10:45:24+00:00',
};

export default function AboutUsPage() {
  return (
    <>
      <div className="page about-us-page">
        <section className="section section--narrow">
          <div className="section__header">
            <h1>About Warning Machines</h1>
          </div>

          <div className="about-content">
            <p>
              <strong>WARNING MACHINES</strong> is an engineer-run prototyping and low-volume manufacturing studio.
              <br />
              We turn napkin sketches and CAD files into fully functional, production-ready hardware in 30 days or less,
              all under one roof.
            </p>

            <h4>What We Do</h4>
            <ul>
              <li>
                <strong>CNC machining &amp; 3-D printing</strong> (FDM / SLA / SLS)
              </li>
              <li>
                <strong>PCB design, SMT assembly &amp; firmware hand-off</strong>
              </li>
              <li>
                <strong>Mechanical + electronic integration, test fixtures, pilot builds</strong>
              </li>
            </ul>

            <p>
              From the first Design-for-Manufacturing review to the final functional unit, every step happens in-house,
              eliminating delays and mismatched tolerances.
            </p>

            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              <Image
                src={ogImage}
                alt="warning machines 3d design prototyping"
                width={300}
                height={256}
                unoptimized
                style={{ borderRadius: '8px' }}
              />
            </div>

            <h4>Why It Matters</h4>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      Your Need
                    </th>
                    <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      Our Answer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      Collapse multi-vendor lead-times
                    </td>
                    <td style={{ padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      Single workflow, single PO
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      Engineering-grade precision
                    </td>
                    <td style={{ padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      ± 0.01 mm typical QC report
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      Transparent cost &amp; speed
                    </td>
                    <td style={{ padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      24-hour quote on any STEP / Gerber file
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>IP security</td>
                    <td style={{ padding: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
                      EU jurisdiction, NDA by default
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4>Our Story</h4>
            <p>
              Founded by a team of mechanical and embedded-systems engineers who were tired of watching good ideas die
              in supplier backlogs, WARNING MACHINES was built to remove friction from hardware innovation.
              Boot-strapped, equipment-rich, and data-driven, we invest in machines and people—not middle layers.
            </p>

            <h4>How We Work</h4>
            <ol>
              <li>
                <strong>Upload</strong> your design files
              </li>
              <li>
                <strong>DfM review + quote</strong> within 24 h
              </li>
              <li>
                <strong>Build phase</strong> CNC, print, assemble, verify
              </li>
              <li>
                <strong>Ship</strong> a test-ready prototype (or pilot batch) in ≤ 30 days
              </li>
            </ol>

            <p>
              Weekly progress photos, dimensional reports, and open Slack/Teams channels keep you in the loop without
              extra meetings.
            </p>

            <h4>Quality &amp; Compliance</h4>
            <p>
              Our internal procedures follow ISO 13485 and FDA 21 CFR 820. Every shipment includes a full first-article
              inspection sheet, and IQ/OQ documentation is available on request.
            </p>

            <h4>Ready to Build?</h4>
            <p>
              <strong>
                Please <Link href="/quote-form">send us your files</Link> or drop a note, and our senior engineers will
                respond on the next business day.
              </strong>
            </p>

            <p>
              <strong>WARNING MACHINES</strong>
              <br />
              Concept → Prototype → Product — all under one roof.
            </p>
          </div>
        </section>
      </div>

      <Script
        id="json-ld-about-us"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
    </>
  );
}

