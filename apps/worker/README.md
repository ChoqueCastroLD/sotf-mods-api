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
- Deployment variables: `ops/coolify/env/worker.env.example`.

## Backfills run by the worker (B15, B16…)

Worker-side backfills are the `backfill.run` job. They are enqueued with the API image's
`backfill` entry, from the Coolify terminal of `sotf-v2-api` (or `sotf-v2-worker`):

```bash
node dist/backfill.js B15                  # dry run: reports what would change
node dist/backfill.js B15 --apply --wait   # applies; --wait blocks and exits 1 if the job failed
```

Operator guide: `ops/runbooks/deploy/05-migrations-and-backfills.md` and
`ops/runbooks/migration/r2-pass.md`.

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
- Events: producers call `ctx.jobs.emit(tx, event)` inside their transaction; the `domain.event`
  queue dispatches each event to every matching subscriber in sequence and retries the whole event
  when one fails, so **subscribers must be idempotent**.
- Schedules (`JOB_SCHEDULES`, UTC) are registered only for queues that have a handler.
- `LEGACY_COEXIST=true` (before the cut-over) disables `legacy.counters` and `legacy.mentions`.
- The platform group (`src/jobs/platform`) turns every event into its cache tags and enqueues the
  debounced `cdn.purge` (handled by WP-61).

## Tests

`pnpm --filter @sotf/worker test:int` (Testcontainers PostgreSQL 16 with the pg-boss schema).
