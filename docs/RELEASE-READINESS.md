# Release readiness (2026-09-30)

State of `main` after the second integration (live-web, analytics-countries, auth-2fa, auth-tokens-oauth, kits-social, mod-knowledge, discovery-ai, radar-requests, translations, build-viewer merged on top of the first one).

## Verified on main

- `pnpm install --frozen-lockfile`, `pnpm gen`, `pnpm typecheck` (15 packages) and `pnpm build` (whole repo): OK.
- Production images `api.Dockerfile`, `worker.Dockerfile`, `web.Dockerfile` (`ops/docker/`) build: OK (api and worker 331 MB, web 179 MB of the 180 MB budget), and the tools image `tools.Dockerfile` (1.17 GB). The throwaway tags were removed.
- `pnpm check:forbidden` clean and `pnpm lint` (biome) clean.
- Migrations 2009 through 2191 (71 in total) apply from an empty Postgres 16 (throwaway container, removed) with `db:migrate`; `db:lint-sql` clean.
- Dev-only mode: no tests or QA were run.

## Complete

- All T0 areas: API (identity, content, community), worker, data/migrations (incl. `2009_modmilestone_og_image_key`), web discovery/entities, creator/admin consoles, shared UI and i18n (13 locales), infra and Coolify runbooks.
- New signal types `compat.prompt`, `review.update_prompt`, `kit.added_my_mod`.
- Search page titles as an i18n namespace; `/developers` documents legacy deviations, Sunset, 410 envelope and KelvinSeek fallback.
- Immediate lane counts on submission (`new_mods`, `versions`).
- Milestone share card (`OG_ENTITY_TYPES` `milestone`, `?milestone=<threshold>` on the mod page).
- Top-bar Signals panel and taxonomy names in console cards.
- Alerts: `ALERT_INTERVAL_SECONDS` removed; nightly `invariants.ts --record` documented.

## Added by the second integration

- Live counters over SSE and the compare button/badge embed (live-web), country analytics (analytics-countries).
- Two-factor (TOTP, recovery codes, passkeys; migrations 2120-2123; deps `@simplewebauthn/server` 14.0.3 in api, worker and core, `@simplewebauthn/browser` 14.0.0 and `qrcode` 1.5.4 in web).
- Personal access tokens and Discord OAuth (2130-2131); both stay hidden/inactive unless `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET` are set on the api (PATs work without extra configuration).
- Kit comments and social (2140); mod known issues, FAQ and co-authors (2150-2152); recommendations and Scout (2160-2161; env `SCOUT_MODEL`, `SCOUT_DAILY_BUDGET_USD`, `SCOUT_ENABLED`); platform uptime and the request board (2170-2172); automatic translations of short descriptions (2180); 3D build viewer and kit bundles (2190-2191; dep `three` 0.186.1).
- Integration fixes: `@simplewebauthn/server` added to the api and worker packages (the bundles keep npm deps external, so the image runtime check failed without it); stray brace in `packages/ui/src/tokens.css` (live-web) broke the CSS build; biome findings of several slices.

## Open (not resolved)

Code / product:
- Build pages: `+ Kit` links to `/me/kits?add=<id>` (no popover) and title counts are not live.
- `compat.prompt` fires once at build publication; later downloaders only see it via `GET /me/compat-prompts`.
- `seo/faq.ts` FAQ templates stay in core (no consumers for an i18n namespace yet).
- Legacy contract harness: `byId` + `allowExtra` for `type-null` fixtures and settle wait before downloads `counting` (WP-31/WP-32); `pnpm load` needs the `catalog` target (WP-33).
- `ops-og`: the migration must be applied by the normal deploy flow before the `ogImageKey` column exists.

Testing phase (deliberately skipped, dev-only order):
- e2e (`@builds|@profile|@kits|@social|@cmdk`), LHCI presets, axe, unit tests for builds/markdown/social, Playwright visual captures. `e2e/`, `tooling/lhci/` and `tooling/shadow/` packages are not present (WP-91/WP-92).

Dependencies / time-gated:
- Remove `minimumReleaseAgeExclude` from `pnpm-workspace.yaml` after 2026-09-30T20:00Z, run `pnpm install --lockfile-only`, rebuild the images.
- Extract-zip advisories (GHSA-jmr9-qjv8-65gv, GHSA-7pqw-9j4j-h8q3) and `showdown` are unpatched; dev-only chains, not in images. Drop the ignores when fixed.

Translations: the 12 non-English translations of the new strings (signals, search, developers legacy notes, legal/developers texts in 11 locales) have had no native review.

## Deploy steps (summary)

The full procedure is `ops/deploy/COOLIFY.md` (variables in `ops/deploy/ENV.md`, runbooks in `ops/runbooks/deploy/`).

1. In Coolify, create the apps from Git (Base Directory `/`): api (`ops/docker/api.Dockerfile`), worker (`worker.Dockerfile`), web (`web.Dockerfile`), migrate task, and tools (`node.Dockerfile`, target `tools`), with the variables from `ENV.md`.
2. Run the migrations through the migrate task (includes 2009) before starting api/worker.
3. Deploy api, worker, then web; check `/healthz` and `/readyz`.
4. Schedule the nightly `node src/cli/invariants.ts --record` in `sotf-v2-tools`.
5. Follow the runbook for the domain cutover and legacy hotfix routes.

## Needs the owner

- Set `DISCORD_CLIENT_ID`/`DISCORD_CLIENT_SECRET` when a Discord OAuth app exists (the button stays hidden until then) and review the Scout variables.
- Create and configure the apps, domains and variables in the Coolify UI (nothing was applied).
- Legal review of the five legal drafts, then set `LEGAL_META[doc].reviewed = true`; confirm mailboxes in `LEGAL_CONTACTS`; add a security mailbox to `pages/.well-known/security.txt.ts`; bump `INSTALL_VERIFIED`.
- Native review of translations.
- Schedule the nightly invariants task.
