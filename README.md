# Lumière Gallery

A production-grade infinite scroll photo gallery built with Next.js 15, TanStack Query v5, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Infinite Scroll** — loads 20 photos at a time using `IntersectionObserver` + `useInfiniteQuery`
- **Design Token System** — full CSS variable + Tailwind token system for colors, spacing, typography
- **Framer Motion** — smooth card animations, staggered reveals, hover effects
- **Context API** — `ThemeContext` for dark/light mode with `localStorage` persistence
- **TanStack Query** — smart caching, deduplication, background refetching
- **TypeScript** — fully typed throughout
- **3 Routes** — `/` Gallery (infinite scroll), `/about`, `/contact`

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15.1.0 |
| React | 19 |
| TanStack Query | 5.x |
| Framer Motion | 11.x |
| Tailwind CSS | 3.4 |
| TypeScript | 5.x |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── globals.css         # CSS design tokens + base styles
│   ├── page.tsx            # Home (infinite gallery)
│   ├── about/page.tsx      # About Us
│   └── contact/page.tsx    # Contact Us
├── components/
│   ├── QueryProvider.tsx   # TanStack Query setup
│   ├── Navbar.tsx          # Animated navigation
│   ├── Footer.tsx
│   ├── InfinitePhotoGrid.tsx  # Core infinite scroll component
│   ├── PhotoCard.tsx       # Individual photo card with animations
│   └── PhotoCardSkeleton.tsx  # Loading skeleton
├── context/
│   └── ThemeContext.tsx    # Dark/light theme via Context API
├── hooks/
│   └── useIntersectionObserver.ts  # Custom hook for scroll trigger
├── lib/
│   └── api.ts              # Fetch function with pagination
└── types/
    └── photo.ts            # TypeScript interfaces
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — click Deploy

No environment variables required.

## 🎨 Design Tokens

All tokens defined in `tailwind.config.ts` and mirrored as CSS variables in `globals.css`:

- **Colors**: `brand`, `accent`, `surface` palettes
- **Typography**: `font-display` (Playfair Display), `font-body` (DM Sans), `font-mono` (JetBrains Mono)
- **Shadows**: `shadow-card`, `shadow-card-hover`, `shadow-glow-brand`
- **Animations**: `animate-shimmer`, `animate-float`, `animate-fade-up`
