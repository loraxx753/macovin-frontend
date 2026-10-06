# AGENTS

Scope: this file applies to all work under macovin-frontend/.

## Repo Identity
- Canonical role: the Macovin company site (people-facing front door).
- Stack: React + TypeScript + Webpack + Tailwind.
- UI conventions follow [MeanwhileJS/meanwhile](https://github.com/MeanwhileJS/meanwhile): page components with a static `.path`, `cn`, Atoms / Molecules / Organisms folders.
- API: [macovin-backend](https://github.com/loraxx753/macovin-backend) (`POST /api/contact`). Company docs and voice: [macovin](https://github.com/loraxx753/macovin).

## Fast Start
- Install: `npm install`
- Dev: `npm run dev` (port 5173)
- Lint: `npm run lint`
- Build: `npm run build`
- Serve the build: `npm start`

## Architecture Notes
- Browser routing (`/work`, not `/#/work`). The server must send `index.html` for every path; `serve -s`, the dev server, and the `Staticfile` do.
- The Work page list lives in `src/lib/examples.ts`. Don't add a second copy in the backend.
- `MACOVIN_API_BASE_URL` is baked in at build time. Empty means the contact form falls back to mailto.

## Jira
- Site: https://macovin.atlassian.net
- Project: `MAC`
- Default issue type: Task
- Create and update tickets in `MAC` unless the user names another project. Factory work goes in `MNWL` (Meanwhile), Shimmering Stars work in `SS`.
- Pair backend work with `macovin-backend` under the same `MAC` ticket.
- Loop: create a ticket when the work starts, do it on a branch, open a PR, merge, then mark the ticket **Done** with a short comment of what landed (PR link, what changed, what's not included). Tracking is a byproduct of shipping, not a ceremony before code.
- Do not hold a feature open for tests or docs. File those as housekeeping on their own tickets.

## Working Rules for Agents
- Match the company voice from [macovin/AGENTS.md](https://github.com/loraxx753/macovin/blob/master/AGENTS.md): contractions, plain sentences, no em dashes.
- Do not invent prices, dates, or bridge amounts on the site.
- Shimmering Stars is live. The other Work examples are ideas and say so.
