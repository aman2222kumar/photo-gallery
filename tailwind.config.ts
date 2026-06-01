import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Design Token System ──────────────────────────────────────────
      colors: {
        // Primary palette — deep indigo-coal
        brand: {
          50:  "#f0f0ff",
          100: "#e4e3ff",
          200: "#cccbfe",
          300: "#aaa8fd",
          400: "#8480f9",
          500: "#6560f3",
          600: "#5040e7",
          700: "#432fcc",
          800: "#3828a5",
          900: "#312683",
          950: "#1e174f",
        },
        // Accent — electric amber
        accent: {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        // Neutrals — warm slate
        surface: {
          0:   "#0b0b10",
          50:  "#111118",
          100: "#18181f",
          200: "#21212c",
          300: "#2e2e3d",
          400: "#3f3f52",
          500: "#6b6b8a",
          600: "#9090aa",
          700: "#b5b5c8",
          800: "#d4d4e0",
          900: "#eeeef4",
          950: "#f7f7fb",
        },
        // Semantic
        success: "#22c55e",
        warning: "#f59e0b",
        error:   "#ef4444",
        info:    "#3b82f6",
      },

      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },

      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        xs:    ["0.75rem",  { lineHeight: "1rem" }],
        sm:    ["0.875rem", { lineHeight: "1.25rem" }],
        base:  ["1rem",     { lineHeight: "1.5rem" }],
        lg:    ["1.125rem", { lineHeight: "1.75rem" }],
        xl:    ["1.25rem",  { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem",   { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem",  { lineHeight: "2.5rem" }],
        "5xl": ["3rem",     { lineHeight: "1" }],
        "6xl": ["3.75rem",  { lineHeight: "1" }],
        "7xl": ["4.5rem",   { lineHeight: "1" }],
        "8xl": ["6rem",     { lineHeight: "1" }],
        "9xl": ["8rem",     { lineHeight: "1" }],
      },

      spacing: {
        "4.5": "1.125rem",
        "13":  "3.25rem",
        "15":  "3.75rem",
        "18":  "4.5rem",
        "22":  "5.5rem",
        "26":  "6.5rem",
        "30":  "7.5rem",
        "34":  "8.5rem",
        "128": "32rem",
        "144": "36rem",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      boxShadow: {
        "glow-brand":   "0 0 20px rgba(101, 96, 243, 0.35)",
        "glow-accent":  "0 0 20px rgba(245, 158, 11, 0.35)",
        "card":         "0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)",
        "card-hover":   "0 16px 48px rgba(0,0,0,0.6), 0 4px 12px rgba(101,96,243,0.2)",
        "nav":          "0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.5)",
        "inner-glow":   "inset 0 1px 0 rgba(255,255,255,0.08)",
      },

      animation: {
        "fade-up":      "fadeUp 0.5s ease forwards",
        "fade-in":      "fadeIn 0.4s ease forwards",
        "shimmer":      "shimmer 1.8s linear infinite",
        "float":        "float 6s ease-in-out infinite",
        "pulse-slow":   "pulse 3s ease-in-out infinite",
        "spin-slow":    "spin 8s linear infinite",
      },

      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to:   { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
      },

      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise":            "url('/noise.svg')",
        "grid-pattern":     "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
      },

      backgroundSize: {
        "grid": "60px 60px",
      },

      transitionTimingFunction: {
        "spring":        "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth":        "cubic-bezier(0.4, 0, 0.2, 1)",
        "snappy":        "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
