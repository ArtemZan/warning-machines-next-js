import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://warning-machines.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/login', '/signup'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

