# Aeline

A modern personal portfolio and agency-style landing website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **shadcn-ui** components. It presents a full one-page marketing site — hero, about, services, experience, pricing, testimonials, blog, and footer sections — with a clean, responsive design.

## Features

- **Hero section** — headline, CTAs, and intro with animations
- **About** — profile/bio section
- **Services** — service offering cards
- **Experience** — timeline of work experience
- **Pricing** — pricing plan cards
- **Testimonials** — client feedback carousel/grid
- **Blog** — blog post previews
- **Footer** — site footer with links
- Responsive layout for mobile, tablet, and desktop
- API route stub at `/api` (returns a JSON hello message)

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn-ui](https://ui.shadcn.com/) components
- [Prisma](https://www.prisma.io/) with SQLite (scaffolded User/Post models; not yet wired to the UI)

## Quick Start

Prerequisites: Node.js (18+) and npm (or bun).

```sh
# Install dependencies
npm install

# Run the dev server
npm run dev
# -> http://localhost:3000

# Build for production (standalone output)
npm run build

# Start the production server
npm run start
```

## Project Structure

```
aeline/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Landing page composition
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   └── api/route.ts      # Stub JSON API route
│   ├── components/
│   │   ├── landing/          # Hero, About, Services, Pricing, etc.
│   │   └── ui/               # shadcn-ui components
│   ├── hooks/                # Custom hooks
│   └── lib/                  # Utilities (db.ts, utils.ts)
├── prisma/schema.prisma      # SQLite schema (User, Post)
├── public/                   # Static assets
├── next.config.ts            # Next.js config (standalone output)
└── Caddyfile                 # Caddy reverse-proxy config (self-host option)
```

## Deploy Notes

- `output: "standalone"` is enabled in `next.config.ts`; `npm run build` produces a self-contained server in `.next/standalone` (served via `npm run start`).
- The app deploys well to **Netlify** (Next.js runtime) or any Node host. A `Caddyfile` is included for reverse-proxying the standalone server.
- The Prisma/SQLite scaffold is unused by the UI — if you wire it up, set `DATABASE_URL` accordingly.

## Credits

Built by **Girish Lade** — [ladestack.in](https://ladestack.in)
