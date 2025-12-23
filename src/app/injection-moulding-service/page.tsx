import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const dynamic = 'force-static';

const canonicalUrl = 'https://warning-machines.com/injection-moulding-service/';
const ogImage = '/images/services/injection-moulding/image1.png';

export const metadata: Metadata = {
  title: 'Injection Moulding Service | Warning Machines',
  description:
    'At Warning Machines, we offer a comprehensive and fully integrated injection moulding service that takes your project from initial consultation through to the',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    locale: 'en_US',
    type: 'article',
    title: 'Injection Moulding Service | Warning Machines',
    description:
      'At Warning Machines, we offer a comprehensive and fully integrated injection moulding service that takes your project from initial consultation through to the',
    url: canonicalUrl,
    siteName: 'Warning Machines',
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1600,
        height: 896,
        alt: 'Injection Moulding',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Injection Moulding Service | Warning Machines',
    description:
      'At Warning Machines, we offer a comprehensive and fully integrated injection moulding service that takes your project from initial consultation through to the',
    images: [ogImage],
  },
  other: {
    'twitter:label1': 'Time to read',
    'twitter:data1': '3 minutes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: 'Injection Moulding Service | Warning Machines',
  description:
    'At Warning Machines, we offer a comprehensive and fully integrated injection moulding service that takes your project from initial consultation through to the',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://warning-machines.com/#website' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: ogImage,
    width: '1600',
    height: '896',
    caption: 'Injection Moulding',
  },
  dateModified: '2025-09-22T10:00:48+00:00',
};

export default function InjectionMouldingServicePage() {
  return (
    <>
      <div className="page injection-moulding-page">
        <section className="section section--narrow">
          <div className="section__header">
            <h1>Injection Moulding Service</h1>
          </div>
          <p>
            At Warning Machines, we offer a <strong>comprehensive and fully integrated injection moulding service</strong> that
            takes your project from initial consultation through to the delivery of production-ready components. Rather than
            simply producing parts, we act as a trusted manufacturing partner to product developers, OEMs and industrial
            innovators. Our focus is on manufacturing plastic and silicone components with exceptional repeatability, precise
            tolerances and consistent surface finishes, no matter the production scale. By combining our engineering expertise
            with rapid tooling capabilities and efficient production workflows, we provide a seamless service that allows
            clients to move from concept to finished product faster and with greater confidence.
          </p>
        </section>

        <section className="section section--narrow">
          <div className="section__header">
            <h2>Engineering and Design for Manufacturability</h2>
          </div>
          <p>
            Every successful moulding project begins with smart design decisions. We engage with your team early in the
            development process to ensure that manufacturability is built into your design from day one. Our engineers perform
            detailed reviews covering wall-thickness analysis, draft and undercut considerations, material compatibility checks
            and mould-flow simulation. This proactive approach helps to uncover potential risks and bottlenecks at the CAD
            stage, reducing costly tooling changes later on and accelerating the path to a working mould. By making targeted
            design suggestions—such as ways to reduce cycle time, minimise material stress, or extend part longevity—we help
            you achieve both technical excellence and cost-effective production.
          </p>
          <div className="card card--article" style={{ marginTop: '1.5rem' }}>
            <div className="card__image">
              <Image
                src="/images/services/injection-moulding/image1.png"
                alt="Injection Moulding"
                width={1024}
                height={573}
              />
            </div>
          </div>
        </section>

        <section className="section section--narrow">
          <div className="section__header">
            <h2>Tooling and Prototype Development</h2>
          </div>
          <p>
            The right tool is at the heart of every quality moulded part. Whether your project calls for an aluminum
            rapid-tooling mould to validate an early concept or a hardened steel production tool for long-run durability,
            Warning Machines offers both in-house machining and partnerships with trusted toolmakers who meet our rigorous
            standards. Our <Link href="/services">rapid prototype</Link> tooling allows you to test form, fit and function
            before committing to large-scale production. Once the prototype is validated, we handle the smooth transition to
            production-grade tooling, ramping up capacity while maintaining the same tight tolerances and surface finishes you
            approved in testing.
          </p>
          <div
            className="grid"
            style={{ gap: '1rem', marginTop: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
          >
            <div className="card card--article">
              <div className="card__image">
                <Image
                  src="/images/services/injection-moulding/image2.png"
                  alt="Tooling and Prototype Development"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="card card--article">
              <div className="card__image">
                <Image
                  src="/images/services/injection-moulding/image3.png"
                  alt="Tooling and Prototype Development"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="card card--article">
              <div className="card__image">
                <Image
                  src="/images/services/injection-moulding/image4.png"
                  alt="Tooling and Prototype Development"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="card card--article">
              <div className="card__image">
                <Image
                  src="/images/services/injection-moulding/image5.png"
                  alt="Tooling"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--narrow">
          <div className="section__header">
            <h2>Material Expertise and Selection</h2>
          </div>
          <div className="grid" style={{ gap: '1.5rem', alignItems: 'start', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card card--article">
              <div className="card__image">
                <Image
                  src="/images/services/injection-moulding/image6.png"
                  alt="Material Expertise"
                  width={800}
                  height={601}
                />
              </div>
            </div>
            <div className="card card--article">
              <div className="card__image">
                <Image
                  src="/images/services/injection-moulding/image7.png"
                  alt="Material Expertise in Injection Moulding Service"
                  width={800}
                  height={601}
                />
              </div>
            </div>
            <div>
              <p>
                Material choice can make or break the performance of a moulded component. We work with a broad portfolio of
                engineering-grade thermoplastics and silicones, including ABS, polycarbonate, nylon, TPE, custom elastomeric
                silicones and a wide array of specialty resins. By analysing factors such as mechanical load, thermal cycling,
                chemical resistance, cosmetic finish and long-term durability, our team can recommend the best material for your
                specific application. Because we maintain strong relationships with leading resin suppliers, we can also guide
                you through regulatory and functional requirements to ensure that your parts perform reliably in real-world
                conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--narrow">
          <div className="section__header">
            <h2>Production Efficiency and Scalability</h2>
          </div>
          <p>
            Our production facilities are equipped with modern injection moulding machines, automated process monitoring
            systems and disciplined setup procedures designed to deliver consistent quality from the first shot to the last.
            Whether you need prototype quantities, low- to mid-volume runs or full high-volume production, we tailor our
            workflows to match your requirements. By emphasising repeatability, tight process control and minimisation of
            scrap, we keep costs under control while safeguarding surface finish, dimensional stability and material
            performance as your volumes scale.
          </p>
        </section>

        <section className="section section--narrow">
          <div className="section__header">
            <h2>Secondary Services and Turnkey Delivery</h2>
          </div>
          <p>
            Beyond moulding, we offer a full suite of secondary services to streamline your supply chain. Our capabilities
            include part cleaning, trimming, snap-fit assembly, insert moulding, overmoulding, quality inspections and custom
            packaging. By delivering components that are already cleaned, finished and ready for integration into your final
            product, we reduce the need for additional in-house processing or complex assembly steps. This turnkey approach
            helps you shorten lead times, simplify logistics and focus on your core business.
          </p>
        </section>

        <section className="section section--narrow">
          <Link href="/quote-form" className="cta-banner">
            <div
              className="cta-banner__bg"
              style={{
                backgroundImage: 'url(/images/services/injection-moulding/request-quote.png)',
              }}
            />
            <div className="cta-banner__overlay" />
            <div className="cta-banner__content">
              <h3>
                Whether you&apos;re seeking a handful of precision prototypes or thousands of repeatable production parts, you can
                rely on Warning Machines to deliver on speed, precision and reliability every step of the way.
              </h3>
              <span className="button button--primary">Request a Quote!</span>
            </div>
          </Link>
        </section>
      </div>

      <Script
        id="json-ld-injection-moulding"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
    </>
  );
}

