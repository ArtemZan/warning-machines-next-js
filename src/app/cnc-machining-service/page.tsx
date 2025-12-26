import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const dynamic = 'force-static';

const canonicalUrl = 'https://warning-machines.com/cnc-machining-service/';
const ogImage = 'https://warning-machines.com/wp-content/uploads/2025/09/CNC-Process.jpg';

export const metadata: Metadata = {
  title: 'CNC Machining Service | Warning Machines',
  description:
    'At Warning Machines, our CNC Machining Service transforms solid blocks and rods of metal or plastic into precise, repeatable parts. Using advanced computer',
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
    title: 'CNC Machining Service | Warning Machines',
    description:
      'At Warning Machines, our CNC Machining Service transforms solid blocks and rods of metal or plastic into precise, repeatable parts. Using advanced computer',
    url: canonicalUrl,
    siteName: 'Warning Machines',
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1200,
        height: 1200,
        alt: 'CNC Process',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CNC Machining Service | Warning Machines',
    description:
      'At Warning Machines, our CNC Machining Service transforms solid blocks and rods of metal or plastic into precise, repeatable parts. Using advanced computer',
    images: [ogImage],
  },
  other: {
    'twitter:label1': 'Time to read',
    'twitter:data1': '2 minutes',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: 'CNC Machining Service | Warning Machines',
  description:
    'At Warning Machines, our CNC Machining Service transforms solid blocks and rods of metal or plastic into precise, repeatable parts. Using advanced computer',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://warning-machines.com/#website' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: ogImage,
    width: '1200',
    height: '1200',
    caption: 'CNC Process',
  },
  dateModified: '2025-09-22T10:28:03+00:00',
};

const processSteps = [
  {
    title: 'Upload & Review CAD Model',
    quote: 'Our engineers will import your 3D CAD model and prepare it for machining.',
    description:
      'We start by reviewing your CAD design for manufacturability. This ensures your part can be produced with the right tolerances, materials, and finishes before machining begins.',
  },
  {
    title: 'Toolpath Programming',
    quote: 'We program precise tool paths to cut, drill, and thread your part from a single blank.',
    description:
      'Using advanced CAM software, our team generates optimized toolpaths for milling and turning. This guarantees accuracy, efficiency, and consistency in every cut.',
  },
  {
    title: 'CNC Machining in Action',
    quote: 'Fast, repeatable production using 3-axis milling, plus turning operations.',
    description:
      'Your part is machined using our high-performance CNC equipment. We can cut metals (aluminium, stainless steel, brass) as well as plastics (nylon, Delrin, ABS), delivering precision prototypes or production-grade parts.',
  },
  {
    title: 'Precision & Surface Finishing',
    quote: 'We deliver excellent dimensional accuracy and surface finishes.',
    description:
      'Secondary processes such as threading, tapping, anodising, plating, and bead blasting ensure your parts are ready for assembly and meet both technical and visual requirements.',
  },
  {
    title: 'Quality Inspection',
    quote: 'Every part is checked against your specifications.',
    description:
      'Before delivery, parts undergo strict quality control checks. We validate tolerances, finishes, and structural integrity to ensure every part matches your expectations.',
  },
  {
    title: 'Packaging & Fast Delivery',
    quote: 'From prototypes to production runs, we ship quickly worldwide.',
    description:
      'After inspection, your parts are packaged securely and shipped with fast turnaround, whether it\'s a one-off prototype or hundreds of production units.',
  },
];

const materials = [
  {
    src: '/images/services/metal.jpg',
    alt: 'Metals',
    caption: 'Metals',
    description: (
      <>
        Aluminium, Stainless Steel, Brass
        <br />✓ High strength &amp; durability
        <br />✓ Excellent for precision parts
        <br />✓ Ideal for everyday user products
      </>
    ),
  },
  {
    src: '/images/services/plastic.png',
    alt: 'Plastics',
    caption: 'Plastics',
    description: (
      <>
        Nylon, PLA, PETG, ABS
        <br />✓ Lightweight and versatile
        <br />✓ Cost-effective for prototypes
        <br />✓ Strong machinability for functional parts
      </>
    ),
  }
];

export default function CNCMachiningServicePage() {
  return (
    <>
      <div className="page cnc-machining-page">
        <section className="section section--narrow">
          <div className="section__header">
            <h1>
              <strong>CNC Machining Service</strong>
            </h1>
          </div>
          <p>
            At Warning Machines, our CNC Machining Service transforms solid blocks and rods of metal or plastic into
            precise, repeatable parts. Using advanced computer numerical control (CNC) milling and turning equipment, we
            machine your digital designs with tight tolerances and complex geometries. CNC is ideal for both prototypes
            and production, delivering high-quality parts in production-grade materials.
          </p>
        </section>

        <section className="section section--narrow">
          <div className="section__header">
            <h2>How Our CNC Process Works</h2>
          </div>
          <div
            style={{ gap: '1.5rem', alignItems: 'start', display: 'flex', flexDirection: 'column' }}
          >
            <Image
              src="/images/articles/cnc-machining.png"
              alt="CNC Process"
              width={1200}
              height={400}
              style={{objectFit: 'cover'}}
              unoptimized
            />
            <div>
              {processSteps.map((step, index) => (
                <details key={step.title} open={index === 0} style={{ marginBottom: '0.75rem' }}>
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      padding: '0.75rem 0',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    {step.title}
                  </summary>
                  <div style={{ padding: '1rem 0' }}>
                    <p>
                      <em>&ldquo;{step.quote}&rdquo;</em>
                    </p>
                    <p>{step.description}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--narrow">
          <div className="section__header">
            <h2>Materials We Machine</h2>
          </div>
          <div
            style={{ gap: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column' }}
          >
            {materials.map((material) => (
              <div key={material.caption} style={{display: 'flex', gap: '1.5rem'}}>
                <figure className="card card--article" style={{ margin: 0, minWidth: "70%", objectFit: 'cover'}}>
                    <Image src={material.src} alt={material.alt} width={500} height={500} style={{ objectFit: 'cover', width: '100%'}} unoptimized />
                  <figcaption className="card__caption">{material.caption}</figcaption>
                </figure>
                <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', opacity: 0.9 }}>{material.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--narrow">
          <Link href="/quote-form" className="cta-banner">
            <div
              className="cta-banner__bg"
              style={{
                backgroundImage: 'url(https://warning-machines.com/wp-content/uploads/2025/09/CNC-Process-1.jpg)',
              }}
            />
            <div className="cta-banner__overlay" />
            <div className="cta-banner__content">
              <h3>Let's create your prototype</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>From Idea to Reality</p>
              <span className="button button--primary">Book a meeting</span>
            </div>
          </Link>
        </section>
      </div>

      <Script
        id="json-ld-cnc-machining"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
    </>
  );
}

