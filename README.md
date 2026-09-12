# HanzaLabs — Design Studio Website

A production-ready marketing site for the **HanzaLabs** design studio, built from the Figma
design. Fully responsive (desktop / tablet / mobile 390px) with smooth Formora-style motion:
Lenis smooth scrolling, a custom cursor, scroll reveals, marquees, magnetic buttons, an
animated mega/mobile menu, and count-up stats.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens mirror the Figma variables)
- **Framer Motion** — reveals, transitions, hover & cursor-follow effects
- **Lenis** — momentum smooth scroll
- **Inter** (via `next/font`) as the "Inter Display" stand-in

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, showreel, partners, works, about, services, pricing, testimonials, FAQ, blog |
| `/studio` | Studio — hero, numbers, awards (hover-image reveal), values carousel, team, FAQ |
| `/work` | Work — sticky heading + scrolling project list |
| `/pricing` | Pricing — plans table, FAQ, testimonials |
| `/pricing-single` | Standard plan detail — prices, features, editorial content |
| `/contact` | Contact — form + global office locations |
| `*` (not found) | Branded 404 |

The mega menu / mobile menu opens from the menu button in the navbar.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset is auto-detected as **Next.js** — no configuration needed.
4. Click **Deploy**.

No environment variables are required. All imagery lives in `public/images` and is committed.

## Design tokens

Defined in `tailwind.config.ts`:

- Background `#EFF0F1` · Ink `#0E0E0E` · **Primary (lime) `#D7FF87`**
- Dark surfaces `#1A1A1A` / stroke `#282828`
- Grays `#444444` / `#A4A4A4` / `#E8E8E8`

## Notes

- The contact form and newsletter are front-end only (they show a success state). Wire them to
  your email provider or a Next.js Route Handler when you're ready.
- Placeholder links in the mega menu / footer (Blog, Career, Style Guide, etc.) are intentionally
  inert until those pages exist.
