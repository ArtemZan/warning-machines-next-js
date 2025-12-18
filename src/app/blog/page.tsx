import type { Metadata } from 'next';
import { BlogPage } from '@/components/blog/BlogPage';
import { siteContent } from '@/lib/content';

const title = 'WARNING MACHINES Blog | CNC, 3D Printing & PCB Guid';
const description =
  'WARNING MACHINES Blog latest insights and expert guides on CNC, 3D Printing, and hardware development. Click to expand your knowledge';
const ogImage = 'https://warning-machines.com/images/2025/06/cropped-warning-icon-2.png';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'article',
    url: 'https://warning-machines.com/blog/',
    siteName: 'Warning Machines',
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 800,
        height: 638,
        alt: 'WARNING MACHINES Blog',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
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

export default function Blog() {
  return <BlogPage articles={siteContent.articles} />;
}

