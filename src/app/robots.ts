import { MetadataRoute } from 'next';

import { SEO_CONFIG } from '@/seo/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${SEO_CONFIG.baseUrl}/sitemap.xml`,
  };
}
