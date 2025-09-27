import { MetadataRoute } from 'next';

import { SEO_CONFIG } from '@/seo/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SEO_CONFIG.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SEO_CONFIG.baseUrl}/lexorank`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SEO_CONFIG.baseUrl}/horizontal-scroll`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
