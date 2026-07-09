/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#000000', // Pure black
        surface: '#0A0A0A', // Luxury dark gray card background
        'surface-2': '#121212', // Slightly lighter dark gray for hover states
        border: 'rgba(255,255,255,0.06)',
        accent: '#6B8F71', // Muted sage/moss green
        'accent-secondary': '#9FB3A6', // Pale mist gray-green
        'text-primary': '#F2F4F0', // Soft cloud-white
        'text-secondary': '#9FB3A6',
        'text-muted': '#5F7365',
      },
      fontFamily: {
        heading: ['"General Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      fontSize: {
        'hero': 'clamp(2.75rem, 6vw, 5.5rem)',
        'display': 'clamp(2rem, 4vw, 3.5rem)',
        'section': 'clamp(1.75rem, 3vw, 2.75rem)',
      },
      lineHeight: {
        'tight-hero': '1.08',
      },
      letterSpacing: {
        'hero': '-0.03em',
        'tight': '-0.02em',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6B8F71, #9FB3A6)',
        'gradient-accent-reverse': 'linear-gradient(135deg, #9FB3A6, #6B8F71)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(135deg, #121613, #1B201C)',
      },
      boxShadow: {
        'glow-green': '0 0 40px rgba(107,143,113,0.15)',
        'glow-mist': '0 0 40px rgba(159,179,166,0.15)',
        'glow-accent': '0 0 60px rgba(107,143,113,0.2)',
        'card': '0 4px 32px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(107,143,113,0.25)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'dappled-light': 'dappledLight 24s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-5px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        dappledLight: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)', opacity: 0.03 },
          '33%': { transform: 'translate(100px, 80px) scale(1.2) rotate(120deg)', opacity: 0.07 },
          '66%': { transform: 'translate(-50px, 120px) scale(0.9) rotate(240deg)', opacity: 0.04 },
        }
      },
      spacing: {
        'section': '7.5rem',
        'section-sm': '5rem',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '2xl2': '1.5rem',
      },
    },
  },
  plugins: [],
}
