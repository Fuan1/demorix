export * from './colors';
export * from './typography';
export * from './spacing';

// Design System Theme
export const theme = {
  colors: {
    primary: '#0d6efd',
    primaryHover: '#0b5ed7',
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      inverse: '#ffffff',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#e9ecef',
    },
    border: {
      primary: '#e9ecef',
      secondary: '#dee2e6',
    },
    status: {
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#dc3545',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.625,
  },
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    full: '9999px',
  },
  transition: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  },
} as const;
