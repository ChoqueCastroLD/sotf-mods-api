# @sotf/worker

pg-boss 12 worker of SOTF Mods v2 (PLAN §2.9): every background job, the domain-event fan-out and
the recurring schedules. Business logic lives in `@sotf/core`.

## Run

- `pnpm --filter @sotf/worker dev` (source) · `node dist/worker.js` (bundle, `pnpm build`).
- Health server on `PORT` (3002): `/healthz`, `/readyz` (DB + pg-boss).
- pg-boss runs with `migrate: false` (the schema comes from `db:migrate`), maintenance and cron on.
  Every queue of `JOB_PAYLOADS` exists with retries, exponential backoff and the shared
  `dead-letter` queue (`@sotf/core` `ensureQueues`).
- SIGTERM stops fetching, waits up to 30 s for active jobs and exits.
- Environment: `src/env.ts` (Zod). Outside production the root `.env` is loaded first (never
  overriding set variables; `SOTF_NO_DOTENV=1` disables it). Locally, e-mails go to Mailpit
  (`EMAIL_TRANSPORT=mailpit`, UI `http://127.0.0.1:47080`) and the CDN purge is a no-op without
  `CF_ZONE_ID`/`CF_API_TOKEN`.
- The `dev` script serves the health endpoint on `127.0.0.1:47302` (`PORT`/`HOST` exported in the
  shell override it); outside it `PORT` defaults to 3002 (the Coolify port).
- Errors: with `SENTRY_DSN` every failed job attempt is reported to Sentry (`src/sentry.ts`,
  `@sentry/core` without OpenTelemetry): tags `queue`/`final`, context `job` (id, retry count),
  level `warning` while pg-boss will retry and `error` on the last attempt; fatal errors of the
  process are reported before exiting. No job payloads or user data are sent.
- Alerts (PLAN §10.3): the `ops.alerts` queue (every 5 min, `runOpsAlerts` of `@sotf/core`) emails
  the active admins when jobs sit in the `dead-letter` queue, the 5xx rate exceeds 1 % in 5 min,
  the latest `db:invariants --record` run is red or older than 26 h, or KelvinSeek spent 80 % of
  its daily budget (`SiteSetting('kelvinseek')` over `KELVINSEEK_DAILY_BUDGET_USD`); one email per
  alert and admin every 6 h. The backup age is not checked here (user cron).
- Sweeps: `security.rescan` (hourly) enqueues again the `"SecurityScan"` rows still `pending` after
  6 h without a live `security.scan` job; `markdown.rerender` (nightly) re-renders descriptions
  and changelogs older than `RENDER_VERSION` in batches; `legacy.mentions` runs every 10 min after the cut-over.
- Deployment variables: `ops/coolify/env/worker.env.example`.

## Backfills run by the worker (B15, B20, B21, B22)

Worker-side backfills are the `backfill.run` job. They are enqueued with the API image's
`backfill` entry, from the Coolify terminal of `sotf-v2-api` (or `sotf-v2-worker`):

```bash
node dist/backfill.js B15                  # dry run: reports what would change
node dist/backfill.js B15 --apply --wait   # applies; --wait blocks and exits 1 if the job failed
```

- `B20` runs the automatic checks (zip, manifest, size, hashes, VirusTotal lookup) on the versions
  of mods that are still `pending` and whose `checksStatus` is `pending`, from the objects already
  in the bucket. It never changes a mod or version status, is audited in `DataFixAudit`
  (`pnpm db:revert-fix B20`) and needs the `R2_*` variables. `VIRUSTOTAL_API_KEY` is optional.
- `B21` seeds `GameBuild` from the Steam news feed (patches, hotfixes, versions, updates). Needs
  network access only; a second run creates nothing.

- `B22` converts every stored image to WebP quality 75 and rewrites every database reference (three
  phases, see below). Needs the `R2_*` variables.

```bash
node dist/backfill.js B20 --apply --wait
node dist/backfill.js B21 --apply --wait
```

### B22 · every image to WebP q75

```bash
node dist/backfill.js B22 --wait                                  # 1. report, writes nothing
node dist/backfill.js B22 --apply --wait                          # 2. convert + rewrite the database
node dist/backfill.js B22 --apply --include-unreferenced --wait   #    (also the images no row references)
node dist/backfill.js B22 --delete-originals --wait               # 3. list what would be deleted
node dist/backfill.js B22 --delete-originals --apply --wait       #    delete the originals and AVIF variants
```

1. **Report.** Counts, bytes and sample keys of every image the database references and every
   image-like object of the bucket (by extension and by content type), references to objects that do not
   exist, unreferenced images and an estimate of the saving measured on ~20 conversions. Writes nothing.
2. **`--apply`.** Per image: download, WebP q75 (animation kept, metadata stripped, same size), upload
   next to it as `.webp` (`image/webp`, immutable), download again and decode, record `old key → new key`
   with both sizes in the ledger `ops/b22/ledger/*.json` of the bucket, then rewrite every reference in
   every text/JSON column of every table (`Media` source and variants included) by exact replacement of
   the full URL or key. Each changed cell is in `DataFixAudit` (`fixId = 'B22'`): `pnpm db:revert-fix B22`
   restores the database. AVIF variants with a WebP twin leave `Media.variants`. Pages of the touched
   mods and users are invalidated. Nothing is deleted. Idempotent; stop and run again to continue.
3. **`--delete-originals`.** Deletes an old object only when its WebP exists and decodes, the ledger
   says so, and no database cell references the old key any more (re-scanned), plus the AVIF variants
   whose WebP twin exists. Without `--apply` it lists. Revert the database **before** this phase if you
   ever want to; afterwards the originals are gone.

Never touched: `og/` (Open Graph cards stay PNG for social networks), `mods/`, `builds/`, `bundles/`,
`exports/`, `incoming/`, `quarantine/`, `ops/` and every non-image object. New uploads are converted by
`media.process` (WebP only, no AVIF) and need no backfill.

Operator guide: `ops/runbooks/deploy/05-migrations-and-backfills.md` and
`ops/runbooks/migration/r2-pass.md`.

## Job groups

| Group (`src/jobs/…`) | Queues | Event subscribers | Owner |
|---|---|---|---|
| `accounts` | `account.export`, `account.delete`, `accounts.trust-level`, `cleanup.sessions` | | WP-30 |
| `backfill` | `backfill.run` (B15, B20, B21, B22) | | WP-84 |
| `builds` | `build.extract` | | WP-40 |
| `cdn` | `cdn.purge` | | WP-61 |
| `cleanup` | `cleanup.analytics` | | WP-52 |
| `compat` | `compat.aggregate` | `compat.mod-status` | WP-50 |
| `digests` | `notifications.digest`, `creator.weekly` | | WP-43 |
| `discord` | `discord.announce` | `discord.enqueue-on-event` | WP-43 |
| `downloads` | `cleanup.download-unique` | | WP-31 |
| `email` | `email.send` | | WP-30 |
| `indexnow` | `indexnow.ping` | | WP-61 |
| `inspection` | `inspection.run` | | WP-40 |
| `kelvinseek` | `cleanup.kelvinseek` | | WP-32 |
| `discovery` | `recommendations.compute`, `cleanup.scout` | | WP-33 |
| `legacy-counters` | `legacy.counters` (off while `LEGACY_COEXIST=true`) | | WP-52 |
| `legacy-mentions` | `legacy.mentions` (B18; off while `LEGACY_COEXIST=true`) | | WP-43 |
| `media` | `media.process` | `description-images` | WP-40 |
| `moderation` | | `moderation.lane-counts` | WP-51 |
| `notifications` | | `notifications.signals`, `realtime.mod-updated` | WP-43 |
| `og` | `og.render` | `og-on-event` | WP-61 |
| `platform` | | `cdn-purge-on-event` | WP-20 |
| `security-scan` | `security.scan` | | WP-51 |
| `stats` | `stats.rollup`, `stats.trending` | `stats.unfollows` | WP-52 |
| `steam` | `steam.sync` (every 30 min: new Steam build becomes the current `GameBuild`) | | WP-50 |
| `uploads` | `cleanup.uploads` | | WP-31 |

Retired queues (gamification, Patch Radar uptime, bundle sweep) are listed in `RETIRED_JOB_SCHEDULES` of `@sotf/contracts/jobs`; the runtime deletes their schedules on start.

Notification details: `src/jobs/notifications/README.md`; compatibility: `src/jobs/compat/README.md`.

## Writing jobs

`src/jobs/<name>/index.ts` default-exports a group; `pnpm gen` updates `src/jobs/_registry.gen.ts`.

```ts
import { defineJob, defineJobGroup, onEvent } from '../../define-job.ts';

export default defineJobGroup({
  name: 'stats',
  jobs: [
    defineJob({ queue: 'stats.rollup', handler: async (data, { ctx, job }) => rollup(ctx, data.hour) }),
  ],
  subscribers: [
    onEvent({ name: 'stats-on-download', types: ['version.published'], handler: async (event, { ctx }) => … }),
  ],
});
```

- Payloads are validated with the queue's schema before the handler runs; throwing retries.
- Handlers receive `{ ctx, job, services }`: `services.env` is the validated environment of the
  worker and `services.storage()` its R2 client (null without credentials). Never read
  `process.env` or re-parse the environment inside a job (`src/services.ts`).
- Events: producers call `ctx.jobs.emit(tx, event)` inside their transaction; the `domain.event`
  queue dispatches each event to every matching subscriber in sequence and retries the whole event
  when one fails, so **subscribers must be idempotent**.
- Schedules (`JOB_SCHEDULES`, UTC) are registered only for queues that have a handler.
- `LEGACY_COEXIST=true` (before the cut-over) disables `legacy.counters` and `legacy.mentions`.
- The platform group (`src/jobs/platform`) turns every event into its cache tags and enqueues the
  debounced `cdn.purge` (handled by WP-61).

## Tests

`pnpm --filter @sotf/worker test:int` (Testcontainers PostgreSQL 16 with the pg-boss schema).
