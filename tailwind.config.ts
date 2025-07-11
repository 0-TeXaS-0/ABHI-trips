import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Professional color palette
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-slow": "bounce 2s infinite",
        "move-slow": "moveSlow 20s ease infinite",
        "move-slow-reverse": "moveSlowReverse 25s ease infinite",
        "shift-horizontal": "shiftHorizontal 15s linear infinite",
        "float": "float 8s ease-in-out infinite",
        "wave": "wave 10s ease-in-out infinite",
        "wave-slow": "wave 8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "floating": "floating 15s ease-in-out infinite",
        "ping-slow": "ping-slow 4s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "wave-fast": "wave 6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-subtle": "pulse-subtle 3s infinite",
        "parallax-slow": "parallax 25s ease-in-out infinite",
        "parallax-medium": "parallax 20s ease-in-out infinite reverse",
        "parallax-fast": "parallax 15s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        moveSlow: {
          "0%": { transform: "translate(0%, 0%)" },
          "25%": { transform: "translate(8%, 8%)" },
          "50%": { transform: "translate(0%, 15%)" },
          "75%": { transform: "translate(-8%, 8%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        floating: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-10px) translateX(5px)" },
          "50%": { transform: "translateY(0px) translateX(10px)" },
          "75%": { transform: "translateY(10px) translateX(5px)" },
          "100%": { transform: "translateY(0px) translateX(0px)" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.8)", opacity: "0.3" },
          "100%": { transform: "scale(1)", opacity: "0.6" },
        },
        "wave-slow": {
          "0%": { transform: "rotate(-2deg) translateY(0%)" },
          "50%": { transform: "rotate(-2deg) translateY(-1%)" },
          "100%": { transform: "rotate(-2deg) translateY(0%)" },
        },
        "wave-fast": {
          "0%": { transform: "rotate(1deg) translateY(0%)" },
          "50%": { transform: "rotate(1deg) translateY(-1.5%)" },
          "100%": { transform: "rotate(1deg) translateY(0%)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        moveSlowReverse: {
          "0%": { transform: "translate(0%, 0%)" },
          "25%": { transform: "translate(-8%, 8%)" },
          "50%": { transform: "translate(0%, 15%)" },
          "75%": { transform: "translate(8%, 8%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        shiftHorizontal: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0", opacity: "0.7" },
          "50%": { backgroundPosition: "0% 0", opacity: "1" },
          "100%": { backgroundPosition: "200% 0", opacity: "0.7" },
        },
        glow: {
          '0%': { boxShadow: '0 0 4px rgba(100, 167, 237, 0.6)' },
          '100%': { boxShadow: '0 0 8px rgba(100, 167, 237, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wave: {
          '0%': { transform: 'translateX(-50%) translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateX(-50%) translateY(5px) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) translateY(0) rotate(-2deg)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '0.5' },
        },
        parallax: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-2%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({
      addUtilities,
      theme,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
      theme: (path: string) => Record<string, string>;
    }) {
      const textShadows = theme('textShadow');
      const utilities: Record<string, any> = {};
      
      if (textShadows) {
        Object.keys(textShadows).forEach(key => {
          const value = textShadows[key];
          const className = key === 'DEFAULT' ? '.text-shadow' : `.text-shadow-${key}`;
          
          utilities[className] = {
            textShadow: value,
          };
        });
      }
      addUtilities(utilities);
    },
  ],
}

export default config
