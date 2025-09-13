export const colors = {
  // Primary Colors
  primary: {
    50: '#e7f1ff',
    100: '#cee3ff',
    200: '#9cc7ff',
    300: '#6babff',
    400: '#3d8fff',
    500: '#0d6efd', // Main primary
    600: '#0b5ed7',
    700: '#094eb0',
    800: '#073e8a',
    900: '#052e63',
  },

  // Gray Scale
  gray: {
    50: '#f8f9fa',
    100: '#f1f3f4',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#6c757d',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  },

  // Semantic Colors
  success: {
    50: '#f0f9f4',
    500: '#22c55e',
    600: '#16a34a',
  },

  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
  },

  error: {
    50: '#fef2f2',
    500: '#dc3545',
    600: '#c82333',
  },

  // White & Black
  white: '#ffffff',
  black: '#000000',
} as const;

export type ColorKey = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;
