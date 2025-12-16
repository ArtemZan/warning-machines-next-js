import type { Metadata } from 'next';
import type { Article } from '@/types';

const baseUrl = 'https://warning-machines.com';

function buildAbsoluteUrl(path: string | undefined): string | undefined {
  if (!path) return undefined;
  if (path.startsWith('http')) return path;
  return `${baseUrl}${path}`;
}

export function buildArticleMetadata(article: Article, slug: string): Metadata {
  const title = article.headTitle || article.title;
  const description = article.summary;
  const imageUrl = buildAbsoluteUrl(article.heroImage);

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'Warning Machines',
      title,
      description,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: article.imageAlt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export function buildArticleJsonLd(article: Article, slug: string) {
  const title = article.headTitle || article.title;
  const description = article.summary;
  const imageUrl = buildAbsoluteUrl(article.heroImage);
  const url = `${baseUrl}/blog/${slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: 'Warning Machines',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Warning Machines',
      logo: imageUrl,
    },
  };
}

