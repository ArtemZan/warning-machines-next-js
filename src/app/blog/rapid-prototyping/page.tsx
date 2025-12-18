import Script from 'next/script';
import { ArticlePage } from '@/components/blog/ArticlePage';
import { getArticleById } from '@/lib/content';
import { buildArticleJsonLd, buildArticleMetadata } from '@/lib/seo';

export const dynamic = 'force-static';

const article = getArticleById('rapid-prototyping');

export const metadata = article ? buildArticleMetadata(article, 'rapid-prototyping') : {};

function RapidVsProductionContent() {
  return (
    <>
      <p>
        Rapid prototyping and production serve different goals. Prototyping optimizes for speed and learning; production
        optimizes for repeatability, cost, and quality at scale.
      </p>
      <h2>When to Pivot</h2>
      <p>
        Pivot when design is stable, requirements are validated, and the economics of tooling and process changes make
        sense for volume.
      </p>
      <h2>Process Differences</h2>
      <ul>
        <li>Prototyping: 3D printing, soft tooling, quick-turn CNC, manual assembly.</li>
        <li>Production: hard tooling, injection molding, DFM/DFA, automation, quality systems.</li>
      </ul>
      <h2>Cost and Quality</h2>
      <p>
        Prototyping tolerates higher unit costs for speed; production drives cost down with tooling, fixtures, and
        optimized routing while enforcing tighter quality controls.
      </p>
      <h2>Team and Documentation</h2>
      <p>
        Shift to production with controlled BOMs, process docs, test plans, and supplier alignment to prevent surprises
        at scale.
      </p>
    </>
  );
}

export default function RapidPrototypingVsProductionPage() {
  const jsonLd = article ? buildArticleJsonLd(article, 'rapid-prototyping-vs-production') : null;

  return (
    <>
      {jsonLd ? (
        <Script id="ldjson-rapid-prototyping-vs-production" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      ) : null}
      <ArticlePage article={article ? { ...article, bodyContent: <RapidVsProductionContent /> } : undefined} />
    </>
  );
}

