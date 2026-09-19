# Macovin frontend

Company site for [Macovin](https://github.com/loraxx753/macovin).
Meanwhile is the factory; this repo is the people-facing front door.

## What this is

A thin React + TypeScript site (Webpack, Tailwind, hash router) shaped like
[Meanwhile](https://github.com/MeanwhileJS/meanwhile): page components with a
static `path`, `cn` utility, and Atoms / Molecules / Organisms folders.

Pages:

- **Home** (`#/`) - who we are, what we build, Meanwhile as factory
- **Work** (`#/work`) - elder care + Texas workers' rights via `GET /api/examples` (static fallback if API is down)
- **About** (`#/about`) - name once, story-first, clock as proof
- **Contact** (`#/contact`) - `POST /api/contact`, mailto fallback if API is down or unset

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://localhost:5173](http://localhost:5173)

In development, webpack defaults `MACOVIN_API_BASE_URL` to
`http://localhost:3001` (macovin-backend). Start the API in another terminal:

```bash
cd ../macovin-backend
npm install && npm run dev
```

```bash
npm run build   # production bundle → dist/
npm run serve   # static serve of dist/
npm run lint
```

## Env: `MACOVIN_API_BASE_URL`

Point this at macovin-backend (no trailing slash).

| Value | Behavior |
| --- | --- |
| `http://localhost:3001` | Contact posts to `/api/contact`; Work loads `/api/examples` |
| empty / unset (production default) | Mailto for contact; static example blurbs on Work |

```bash
cp .env.example .env
# or one-shot:
MACOVIN_API_BASE_URL=http://localhost:3001 npm run dev
```

If the API is down, contact opens a mailto draft and Work shows the offline
copy. The site stays shippable either way.

Backend CORS defaults already allow `http://localhost:5173`. If you change the
dev port, add it to the backend `CORS_ORIGINS` list.

## Notes

- Do not invent prices, dates, or bridge amounts on the site.
- Example work pages are clearly marked as ideas, not live products.
- Voice matches Macovin company docs: contractions, plain sentences, no em dashes.
