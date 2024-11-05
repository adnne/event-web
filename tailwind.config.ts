import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          50: '#effaf4',
          100: '#d8f3e2',
          200: '#b5e5ca',
          300: '#84d1ab',
          400: '#52b788',
          500: '#2e9b6c',
          600: '#1f7c56',
          700: '#196347',
          800: '#164f39',
          900: '#134130',
        },
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        'nunito-sans': ['var(--font-nunito-sans)'],
        inter: ['var(--font-inter)'],
      },
      fontWeight: {
        thin: '100',        
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
      }
    
    },
  },
  plugins: [],
};
export default config;
