import type { NavigationCategory } from '@/app/types/navigation';

export const navigationCategories: NavigationCategory[] = [
  {
    id: 'algorithms',
    title: 'Algorithms',
    items: [
      {
        id: 'lexorank',
        title: 'LexoRank',
        path: '/lexorank',
        description: 'Drag & drop ordering',
      },
    ],
  },
  {
    id: 'ui-patterns',
    title: 'UI Patterns',
    items: [
      {
        id: 'horizontal-scroll',
        title: 'Horizontal Scroll',
        path: '/horizontal-scroll',
        description: 'Custom scroll implementations',
      },
    ],
  },
];
