export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F14',
        gold: '#C9A84C',
        goldlight: '#E8C97A',
        emerald: '#0D7A5F',
        emeraldlight: '#10A37F',
        danger: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
        success: '#10B981',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        mono: ['DM Mono', 'monospace'],
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'emergency-pulse': 'emergency-pulse 1.5s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'emergency-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(239,68,68,0.4)' },
          '50%': { boxShadow: '0 0 0 14px rgba(239,68,68,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
