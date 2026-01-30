export const theme = {
  colors: {
    // Backgrounds
    background: '#0a0a0f',
    backgroundSecondary: '#12121a',
    backgroundTertiary: '#1a1a25',
    
    // Primary accent - vibrant blue/purple gradient
    primary: '#6366f1',
    primaryLight: '#818cf8',
    primaryDark: '#4f46e5',
    
    // Secondary accent - cyan
    secondary: '#22d3ee',
    secondaryDark: '#06b6d4',
    
    // Text colors
    text: '#f8fafc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    
    // Borders
    border: '#2a2a3a',
    borderLight: '#3a3a4a',
    
    // Gradients
    gradientPrimary: 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
    gradientDark: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)',
    
    // Status
    success: '#10b981',
    error: '#ef4444',
  },
  
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'Poppins', 'Inter', sans-serif",
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.6)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)',
    glowStrong: '0 0 40px rgba(99, 102, 241, 0.5)',
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export type Theme = typeof theme;
