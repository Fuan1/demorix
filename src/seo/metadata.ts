import type { Metadata } from 'next';

const baseUrl = 'https://demorix.vercel.app'; // TODO: 커스텀 도메인으로 교체

export const baseMetadata: Metadata = {
  title: 'Demorix - Interactive Algorithm & UI Patterns',
  description:
    'Explore interactive demonstrations of algorithms and UI patterns including LexoRank, horizontal scroll, and more',
  keywords: [
    'algorithm',
    'ui patterns',
    'interactive demo',
    'lexorank',
    'horizontal scroll',
    'javascript',
    'react',
    'demo',
  ],
  authors: [{ name: 'Demorix Team' }],
  creator: 'Demorix',
  publisher: 'Demorix',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Demorix',
    title: 'Demorix - Interactive Algorithm & UI Patterns',
    description:
      'Explore interactive demonstrations of algorithms and UI patterns including LexoRank, horizontal scroll, and more',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Demorix - Interactive Algorithm Demonstrations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demorix - Interactive Algorithm & UI Patterns',
    description:
      'Explore interactive demonstrations of algorithms and UI patterns',
    images: ['/og-image.png'],
    creator: '@demorix',
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
  alternates: {
    canonical: baseUrl,
  },
};

export const createPageMetadata = (overrides: Partial<Metadata>): Metadata => ({
  ...baseMetadata,
  ...overrides,
  openGraph: {
    ...baseMetadata.openGraph,
    ...overrides.openGraph,
  },
  twitter: {
    ...baseMetadata.twitter,
    ...overrides.twitter,
  },
});
