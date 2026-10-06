# Classic: v2 as an evolution of the old sotf-mods.com

Owner decision (2026-10-06), after community feedback that v2 is "too much". This document overrides
the "Locator" identity in PLAN.md, research/03 and packages/brand wherever they disagree.

## Goals

1. Remove achievements, badges, XP, levels, milestones, awards ("Patch Day Hero", "Mod of the Week"
   award, legends, rising creators) and every non-vital feature listed below.
2. Use the old logo and look: red "SOTF-MODS" logo, dark neutral background, one red accent.
3. Use the old plain glossary. No themed jargon.
4. Layout and features feel like the old site, rebuilt with the new stack: modern, cleaner, better
   integrated, without unnecessary cards.
5. Copy everywhere (site, console, emails, all 13 locales): no em dashes, human but serious, never
   childish or cute.
6. Cut anything that is "too much".

The old site: `/root/sotf-mods/sotf-mods-frontend` (Nunjucks templates in `src/templates`, DaisyUI 5
dark theme + Tailwind 4, strings in `src/translations/*.translations.ts`, logos in
`src/static/images`). Archive: https://web.archive.org/web/20260308002336/https://sotf-mods.com/mods
(rate limited from this server; read the templates instead).

## What stays

Mods catalogue, mod page (description, images, versions, changelog, downloads, dependencies,
comments, reviews/ratings, follow), builds, categories and tags, search (header search + Ctrl+K kept
simple: results only, no gamified actions), profiles, upload and the creator dashboard, mod
requests, Mod Jams, notifications, settings (display name, 2FA, sessions, email), moderation queue,
share logs, install guide (RedLoader / Red Manager), legal pages, developers/API docs (footer only),
translations of mod titles/descriptions, the legacy API, RSS, sitemaps, ads.

## What goes (UI removed, routes 301, data kept, nothing dropped from the DB)

- Gamification: achievements, badges (pages, stamps, profile shelves, SVG badge pages for users),
  XP, levels, streaks, milestones and their notifications, awards (mod of the week award, legends,
  hall of fame), creator spotlight, "rising".
- Kits (all pages, `/k/*` short links, kit cards, "add to kit", kit social, console kit screens).
- Patch Radar and compatibility reports UI (pages, "Not verified"/compat badges on cards, breaking
  build banner, radar band). Keep the API endpoints if other things depend on them; just no UI.
- Landing extras: island map, field notes timeline, regions, stats tiles, picks tabs, personal
  block, onboarding checklist, live readouts/pulse, count-ups.
- `/best`, `/compare`, `/creators` directory, `/news`, `/brand`, `/achievements`, `/badges`
  (the README badge images for mod embeds `badges/mods/...svg` stay: creators use them on GitHub).
- KelvinSeek is already gone; do not reintroduce anything AI-flavoured in the UI.
- Decorative textures (topo contours, blueprint grid), corner brackets (`loc-frame`), glows, pulse
  dots, mono uppercase "readout" labels as decoration.

Redirects: `/kits*`, `/k/*` → `/mods`; `/patch-radar*` → `/mods`; `/best*`, `/compare` → `/mods`;
`/creators` → `/mods`; `/news*` → `/`; `/achievements`, `/badges` (non-svg) → `/`; `/brand` → `/`.
Locale-prefixed variants too. All 301.

## Glossary (English source; translate the same plain way in every locale)

| v2 term | Classic term |
|---|---|
| Ranger, Ranger Station | Moderation |
| Basecamp | Dashboard |
| Signals | Notifications |
| Blueprints | Builds |
| Field notes | Recent updates |
| Survivors | Users (or players when it means people playing) |
| Legends of the island | Most downloaded |
| Find your next mod | Mods |
| Regions | Categories |
| Scout | Search / Suggestions (whatever it literally does) |
| Field-tested, island, camp, trail, waypoint, crosshair metaphors | plain words |
| Verified creator | Trusted (old badge name) |
| Mod of the Week (award) | Mods of the week (ranked list by downloads this week, like the old sidebar) |

Routes rename with 301 from the old path: `/ranger*` → `/moderation*`, `/basecamp*` → `/dashboard*`,
`/signals*` → `/notifications*`. Console SPA routes follow.

## Writing rules

- No em dashes (—) anywhere user-facing, in any locale. Use a period, comma, colon or parentheses.
  En dashes only in number ranges. No "--" either.
- Short, plain, serious. Say what it is. No puns, no game metaphors, no exclamation marks except
  real success confirmations, no emojis.
- Keep ICU placeholders and plural forms intact. Keep keys stable unless a key is removed with its
  feature.

## Visual direction

- Background: DaisyUI dark neutrals. bg `#15191e`, surface `#1d232a`, raised `#232a32`, sunken
  `#111418`, border `#2a323c`, border-strong `#3d4651`; text `#e5e7eb`, muted `#9ca3af`.
- Accent: red. primary `#e11d1d` (hover `#c81414`, the old theme color was `#fe0e0f`, the logo red);
  primary-fg white. Links: light red/neutral, not cyan. Remove the cyan "signal" and blue
  "blueprint" hues from the UI (map them to neutral or red). Success/warning/danger stay semantic.
- Logo: the old raster logo (`logo-sm.png` "SOTF-MODS" for the header, `logo.png` for the footer and
  OG/emails, favicons from the old site). Optimize (WebP/AVIF + PNG fallback, correct sizes, 2x).
- Type: one sans family (keep Onest), sentence case headings, bold. Drop the condensed all-caps
  display face and mono readouts (mono only for versions, code, file names).
- Shapes: 8px radius on surfaces, pill radius only for the nav pill and chips. No glows, no
  textures, light shadows only for overlays.
- Header like the old navbar, modernised: logo left; center pill menu (Mods, Builds, Jams,
  Requests, Discord); right: search field (Ctrl+K), language, upload, account menu
  (Profile, Dashboard, Notifications, Settings, Moderation for staff, Logout). Mobile: logo + search
  + menu; the bottom tab bar is plain (Mods, Builds, Search, Notifications, Account).
- Footer like the old one: SOTF-MODS (YouTube Shoko, GitHub backend/frontend), Partners (Discord
  Sons of | The forest, YouTube Toni Macaroni), Related sites (Tonihub, RedLoader wiki, SOTF Mods
  Tutorials), plus legal links, developers/API, language; grayscale logo + "Providing quality mods
  since March 2023".
- Home (`/`) = the catalogue, like the old `/mods`: a slim featured carousel (top weekly mods),
  then two columns: left 2/3 the mod list (row items: thumbnail 16:9 left, name + version, short
  description, author with Trusted badge, comments/follows/downloads/updated/category icons) with a
  sticky toolbar (search, category, sort: Newest, Oldest, Popular, Random, plus Unapproved and NSFW
  toggles, pagination); right 1/3: stats (downloads, mods, users) and "Mods of the week" ranked
  list (#1-#3 highlighted) with "Show more". No other sections. `/mods` renders the same view
  (canonical `/mods` for filters, `/` for the default listing).
- Unapproved toggle (old feature, owner wants old functions back): shows `pending` mods whose checks
  passed, clearly labelled "Pending approval", noindex, never mixed into the default listing.
- Mod page like old `mod.njk`, modernised: title, version, author, stats row, big Download button
  (+ One-click install / Red Manager), image gallery, tabs for Description, Versions/Changelog,
  Comments, Reviews. No compat badges, no kits, no awards, no stamps, no "at a glance" card piles.
- Fewer cards: lists and sections separated by spacing and hairlines; a card only when the
  content is a clickable unit in a grid (builds grid, jam entries).

## Ownership (agents edit only their area; ask the integrator via notes for anything else)

- W1-A Theme and brand: `packages/ui/src/tokens.css`, `fonts.css`, `theme.ts`, `surfaces.ts`,
  `packages/ui/src/*.tsx` base components' looks, `apps/web/src/layouts/global.css`,
  `packages/brand` (logo exports), `apps/web/public` icons/manifest, OG image generation look.
- W1-B Shell: `apps/web/src/components/layout/*`, `apps/web/src/components/account/*`,
  `layouts/BaseLayout.astro`, `PageLayout.astro`, cmdk island (simplify).
- W1-C Home and catalogue: `pages/index.astro`, `pages/mods/index.astro`,
  `components/explore/*`, `components/landing/*` (delete what is unused), `packages/ui/src/domain/mod-card.tsx`,
  `cards.tsx`, `filters.tsx`, the unapproved listing in the API catalogue (`packages/core/src/catalog`,
  contracts for the list query) if needed.
- W1-D Mod and build pages: `components/mod/*`, `pages/mods/[user]/*`, `components/builds/*`,
  `pages/builds/*`, `packages/ui/src/domain/*` except mod-card/cards/filters.
- W1-E Feature removal (web): pages and components of kits, patch-radar, achievements, badges,
  best, compare, creators, news, brand; profile gamification (`components/profile/*`, `pages/profile/*`);
  redirects (middleware/redirect table); sitemap/llms/feeds entries for removed pages; console
  kits/badges screens (`console/features/kits`, `bundles` if kit-only).
- W1-F Feature removal (backend): worker gamification jobs and schedules
  (`apps/worker`, `packages/core/src/gamification`), notification types for gamification hidden
  from lists and preferences, digests without gamification, API routes left but unlinked, cmdk
  actions, Discord/announcement hooks for awards.
- W2 Copy and glossary: i18n namespaces split across agents (en + 12 locales each), emails
  (`packages/emails`), console route renames (`/ranger` → `/moderation`, `/basecamp` → `/dashboard`,
  `/signals` → `/notifications`) with redirects.
- W3 Integration (orchestrator): typecheck, lint, tests, build, screenshots, fixes, deploy.

## Rules for every agent

- Additive DB only; no migrations unless strictly needed and then additive. Never drop data.
- Do not delete i18n keys in W1 (W2 cleans orphans); you may stop using them. New keys only in a
  namespace you own, in `en.json` plus the other 12 locales.
- Do not commit; the orchestrator commits. Do not deploy.
- Local preview: `http://127.0.0.1:47321` (astro dev, reads the production API, HMR). Screenshot
  with Playwright (`/root/sotf-mods/shots/shot.mjs <url> <out.png> <w> <h> 1`), check desktop
  1440 and phone 390, judge it critically against the old site's feel.
- Run the package's typecheck and the tests you touched before finishing.
