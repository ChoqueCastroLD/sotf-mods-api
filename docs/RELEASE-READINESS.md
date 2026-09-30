# Release readiness (2026-09-30)

State of `main` after the final integration (notif-types, search-publishing, console-extras, ops-og merged).

## Verified on main

- `pnpm install --frozen-lockfile`, `pnpm gen`, `pnpm typecheck` (15 packages) and `pnpm build` (whole repo): OK.
- Production images `api.Dockerfile`, `worker.Dockerfile`, `web.Dockerfile` (`ops/docker/`) build: OK (api and worker 317 MB, web 176 MB). The throwaway tags were removed.
- `pnpm check:forbidden`: no forbidden content (no `files.sotf-mods.com`, no legacy env vars).
- Dev-only mode: no tests or QA were run.

## Complete

- All T0 areas: API (identity, content, community), worker, data/migrations (incl. `2009_modmilestone_og_image_key`), web discovery/entities, creator/admin consoles, shared UI and i18n (13 locales), infra and Coolify runbooks.
- New signal types `compat.prompt`, `review.update_prompt`, `kit.added_my_mod`.
- Search page titles as an i18n namespace; `/developers` documents legacy deviations, Sunset, 410 envelope and KelvinSeek fallback.
- Immediate lane counts on submission (`new_mods`, `versions`).
- Milestone share card (`OG_ENTITY_TYPES` `milestone`, `?milestone=<threshold>` on the mod page).
- Top-bar Signals panel and taxonomy names in console cards.
- Alerts: `ALERT_INTERVAL_SECONDS` removed; nightly `invariants.ts --record` documented.

## Open (not resolved)

Code / product:
- Live download events and kit follows over SSE (T1-24): needs a throttled SSE design and a product decision; `GET /mods/:id/live` polling stays.
- `data-motion="full"` cannot lift the OS reduced-motion rule (`packages/ui/src/tokens.css`, `!important`); low priority.
- Build pages: `+ Kit` links to `/me/kits?add=<id>` (no popover) and title counts are not live.
- Mod public stats sparkline and Recharts `ChartFigure` (WP-62): T1, left out on purpose.
- Scout copy in `cmdk`: deferred to T1.
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

- Create and configure the apps, domains and variables in the Coolify UI (nothing was applied).
- Legal review of the five legal drafts, then set `LEGAL_META[doc].reviewed = true`; confirm mailboxes in `LEGAL_CONTACTS`; add a security mailbox to `pages/.well-known/security.txt.ts`; bump `INSTALL_VERIFIED`.
- Native review of translations.
- Decide on the live download SSE design.
- Schedule the nightly invariants task.
