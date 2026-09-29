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
