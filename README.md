# Wardeng

Company profile website for Wardeng — retail, FnB, and digital services.

## Stack

React 19 · Vite · TypeScript · Tailwind CSS · Lucide React · Formspree

## Setup

```bash
npm install
cp .env.example .env
# Set VITE_FORMSPREE_ENDPOINT in .env
npm run dev
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — lint with oxlint

## Configuration

Edit `src/data/site.ts` for business info, hero image, and map embed URL.
Set `VITE_FORMSPREE_ENDPOINT` for the contact form.
Optionally set `VITE_SITE_URL` for canonical / Open Graph URL in production.
