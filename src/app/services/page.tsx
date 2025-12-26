import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

import './services.css';

export const dynamic = 'force-static';

const canonicalUrl = 'https://warning-machines.com/services/';
const ogImage = '/images/services-page/image1.png';
const ogImageAlt =
  'Three engineers wearing safety glasses examine a 3-D mechanical part on a tablet over a blueprint, set against a blue-toned factory and schematic backdrop.';

export const metadata: Metadata = {
  title: '3D Printing, CNC & PCB Services | Warning Machines',
  description: '3D printing, CNC machining & PCB prototyping under one roof turn CAD files into production-ready parts in 30 days or less',
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
    title: '3D Printing, CNC & PCB Services | Warning Machines',
    description: '3D printing, CNC machining & PCB prototyping under one roof turn CAD files into production-ready parts in 30 days or less',
    url: canonicalUrl,
    siteName: 'Warning Machines',
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1024,
        height: 1024,
        alt: ogImageAlt,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Printing, CNC & PCB Services | Warning Machines',
    description: '3D printing, CNC machining & PCB prototyping under one roof turn CAD files into production-ready parts in 30 days or less',
    images: [ogImage],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: '3D Printing, CNC & PCB Services | Warning Machines',
  description:
    '3D printing, CNC machining & PCB prototyping under one roof turn CAD files into production-ready parts in 30 days or less',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://warning-machines.com/#website' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: ogImage,
    width: '1024',
    height: '1024',
    caption: ogImageAlt,
  },
  dateModified: '2025-08-27T10:45:46+00:00',
};

function Section({ children, title, id }: { children: React.ReactNode; title: string; id?: string }) {
  return (
    <section className="section section--narrow" id={id}>
      <div className="section__header">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <div className="page services-page">
        <section className="section section--narrow">
          <div className="section__header">
            <h1>Services</h1>
            <p style={{ margin: '0.5rem 0 0' }}>Everything you need to turn an idea into a field-ready product</p>
          </div>
          <div style={{ gap: '1rem', alignItems: 'start', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ margin: 0 }}>Design-for-Manufacturing (DfM) &amp; Engineering Review</h3>

            <div className="card card--article">
              <Image src="/images/services/DFM.jpg" alt="DfM review" width={1200} height={400} style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <p>Before we cut metal or spin a board, our senior engineers run a 360° DfM review:</p>
              <ul>
                <li>
                  <strong>Mechanical:</strong> tolerance stack-up, wall-thickness, draft &amp; fillet optimisation
                </li>
                <li>
                  <strong>Electronics:</strong> component availability, thermal layout, signal integrity
                </li>
                <li>
                  <strong>Cost &amp; lead-time modelling:</strong> instant feedback on materials, processes, and alternatives
                </li>
              </ul>
              <blockquote style={{ margin: 0 }}>
                <strong>Deliverable:</strong> PDF report with annotated CAD/PCB recommendations + updated quote within 24 h
              </blockquote>
            </div>

          </div>
        </section >

        <Section title="CNC Machining" id="cnc">
          <div className="card card--article">
            <Image src="/images/articles/cnc-machining.png" alt="CNC 3-Axis Milling" width={1200} height={400} style={{ objectFit: 'cover' }} />
          </div>
          <div className="grid" style={{ alignItems: 'start', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div>
              <p>Precision 3-axis milling and turning for metals &amp; engineering plastics.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '0.4rem 0.25rem' }}>Capability</th>
                      <th style={{ textAlign: 'left', padding: '0.4rem 0.25rem' }}>Metrics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '0.35rem 0.25rem' }}>Materials</td>
                      <td style={{ padding: '0.35rem 0.25rem' }}>6061/7075 Al, 304/316 SS, POM-C, PEEK, brass, more</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.35rem 0.25rem' }}>Envelope</td>
                      <td style={{ padding: '0.35rem 0.25rem' }}>650 × 400 × 350 mm (milling) • Ø300 × 500 mm (turning)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.35rem 0.25rem' }}>Typical tolerance</td>
                      <td style={{ padding: '0.35rem 0.25rem' }}>
                        <strong>±0.01 mm</strong> (±0.0004”)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </Section>

        <Section title="Industrial 3-D Printing" id="printing">
          <div className="grid" style={{ alignItems: 'start', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card card--article">
              <div className="card__image" aria-hidden="true">
                <Image src="/images/services-page/image3.png" alt="FDM & SLA 3D Printing" width={1200} height={900} />
              </div>
            </div>
            <div>
              <p>Fast, iterative, and functional.</p>
              <ul>
                <li>
                  <strong>SLA</strong> for high-resolution enclosures &amp; clear parts
                </li>
                <li>
                  <strong>FDM</strong> for robust, end-use nylon or carbon-filled prototypes
                </li>
                <li>
                  <strong>SLS</strong> via partner line for complex lattice or low-volume bridge parts
                </li>
              </ul>
              <p>Turnaround as quick as <strong>48 h</strong> for priority parts.</p>
            </div>
          </div>
        </Section>

        <Section title="PCB Design &amp; SMT Assembly" id="pcb">
          <div className="grid" style={{ alignItems: 'start', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div>
              <p>Mechanical and electronic integration under one roof.</p>
              <ul>
                <li>Schematic capture &amp; stack-up design (2- to 10-layer)</li>
                <li>Pick-and-place capacity: 0201 packages, BGA down to 0.4 mm pitch</li>
                <li>Reflow &amp; selective-soldering, functional ICT/ATE on request</li>
                <li>Firmware hand-off compiled and flashed if provided</li>
              </ul>
              <p>Trace-to-chassis fit is verified against your enclosure before we ship—no late-cycle surprises.</p>
            </div>
            <div className="card card--article">
              <div className="card__image" aria-hidden="true">
                <Image src="/images/services-page/image4.png" alt="Surface-mount pick-and-place" width={1200} height={900} />
              </div>
            </div>
          </div>
        </Section>

        <Section title="Firmware development" id="firmware">
          <div style={{ alignItems: 'start' }}>
            <div className="card card--article">
              <div className="card__image" aria-hidden="true">
                <Image src="/images/services-page/image3.png" alt="FDM & SLA 3D Printing" width={1200} height={900} />
              </div>
            </div>
            <div>
              <p>We develop firmware for a wide range of microcontrollers and processors.</p>
              <ul>
                <li>
                  ESP32
                </li>
                <li>
                  Raspberry PI
                </li>
                <li>
                  STM32
                </li>
              </ul>
              
            </div>
          </div>
        </Section>

        <Section title="System Integration &amp; Functional Prototyping" id="integration">
          <div className="grid" style={{ alignItems: 'start', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card card--article">
              <div className="card__image" aria-hidden="true">
                <Image src="/images/services-page/image5.png" alt="Engineers wiring PCB inside enclosure" width={1200} height={900} />
              </div>
            </div>
            <div>
              <p>We don’t stop at “two bags of parts.” We deliver:</p>
              <ol>
                <li>
                  <strong>Full mechanical assembly</strong> (bonding, fasteners, inserts)
                </li>
                <li>
                  <strong>Electronic harness &amp; board install</strong>
                </li>
                <li>
                  <strong>Basic firmware flash / smoke test</strong>
                </li>
                <li>
                  <strong>Dimensional and functional verification sheet</strong>
                </li>
              </ol>
              <p>
                You receive a <strong>ready-to-demo, ready-to-test prototype</strong>—not a kit to build at midnight.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Logistics &amp; After-Build Support" id="logistics">
          <div className="grid" style={{ alignItems: 'start', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card card--article">
              <div className="card__image" aria-hidden="true">
                <Image
                  src="/images/services-page/image8.png"
                  alt="Customer-support agent tracking shipments"
                  width={1200}
                  height={900}
                />
              </div>
            </div>
            <div>
              <ul>
                <li>Global shipping with customs paperwork handled</li>
                <li>On-call engineer for post-delivery tuning or redesign</li>
                <li>File and BOM management under secure EU server with NDA by default</li>
              </ul>
            </div>
          </div>
        </Section>

      </div >

      <Script
        id="json-ld-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
    </>
  );
}

