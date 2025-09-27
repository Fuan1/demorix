export const SEO_CONFIG = {
  baseUrl: 'https://demorix.vercel.app', // TODO: 커스텀 도메인으로 교체
  siteName: 'Demorix',
  defaultTitle: 'Demorix - Interactive Algorithm & UI Patterns',
  defaultDescription:
    'Explore interactive demonstrations of algorithms and UI patterns including LexoRank, horizontal scroll, and more',
  twitterHandle: '@demorix',
  googleSiteVerification: 'google-site-verification-code-here',

  // 페이지별 SEO 설정
  pages: {
    home: {
      title: 'Demorix - Interactive Algorithm & UI Patterns',
      description:
        'Explore interactive demonstrations of algorithms and UI patterns including LexoRank, horizontal scroll, and more',
      keywords: [
        'algorithm',
        'ui patterns',
        'interactive demo',
        'lexorank',
        'horizontal scroll',
      ],
    },
    lexorank: {
      title: 'LexoRank Algorithm Demo - Demorix',
      description:
        'Interactive demonstration of LexoRank algorithm for efficient drag-and-drop ordering and ranking systems',
      keywords: ['lexorank', 'algorithm', 'drag drop', 'ordering', 'ranking'],
    },
    horizontalScroll: {
      title: 'Horizontal Scroll Patterns - Demorix',
      description:
        'Interactive examples of horizontal scrolling UI patterns and implementations',
      keywords: ['horizontal scroll', 'ui patterns', 'scrolling', 'carousel'],
    },
  },
} as const;
