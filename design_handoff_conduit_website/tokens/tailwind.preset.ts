import type { Config } from 'tailwindcss'

/**
 * Conduit Systems — Tailwind preset
 *
 * Drop into a Tailwind project as a preset:
 *   import conduitPreset from './design-system-export/tokens/tailwind.preset'
 *   export default { presets: [conduitPreset], content: [...] }
 */
const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        text: '#040316',
        background: '#FBFBFE',
        primary: {
          DEFAULT: '#FF4529',
          hover: '#E63E25',
          pressed: '#D43820',
          tint: '#FF5A41',
        },
        secondary: '#212121',
        accent: '#B7C8D7',
        muted: '#6B7280',
        surface: {
          card: '#FFFFFF',
          'card-soft': '#F4F5F8',
          'card-pressed': '#ECEEF3',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      fontSize: {
        h1: ['4.210rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['3.158rem', { lineHeight: '1.10', letterSpacing: '-0.015em', fontWeight: '700' }],
        h3: ['2.369rem', { lineHeight: '1.20', fontWeight: '700' }],
        h4: ['1.777rem', { lineHeight: '1.25', fontWeight: '700' }],
        h5: ['1.333rem', { lineHeight: '1.30', fontWeight: '700' }],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '18px',
        xl: '24px',
        '2xl': '32px',
      },
      boxShadow: {
        '1': '0 1px 2px rgba(15, 23, 42, 0.06)',
        '2': '0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04)',
        '3': '0 4px 14px rgba(15, 23, 42, 0.12)',
        '4': '0 24px 50px -20px rgba(20, 25, 40, 0.18), 0 50px 100px -40px rgba(20, 25, 40, 0.18)',
        glow: '0 4px 12px rgba(255, 69, 41, 0.25)',
        'glow-lg': '0 6px 20px rgba(255, 69, 41, 0.40)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
      transitionDuration: {
        '240': '240ms',
        '320': '320ms',
        '700': '700ms',
      },
      backgroundImage: {
        'gradient-primary-secondary': 'linear-gradient(#FF4529, #212121)',
        'gradient-primary-accent': 'linear-gradient(#FF4529, #B7C8D7)',
        'gradient-secondary-accent': 'linear-gradient(#212121, #B7C8D7)',
        'gradient-btn-primary': 'linear-gradient(180deg, #FF4529 0%, #E63E25 100%)',
        'gradient-btn-primary-hover': 'linear-gradient(180deg, #FF5A41 0%, #FF4529 100%)',
      },
      maxWidth: {
        prose: '62ch',
      },
    },
  },
}

export default preset
