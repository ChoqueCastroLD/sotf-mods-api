# Backlog final-data (worker, db, migration tooling)

Needed outside the area:

- `ops/coolify/env/worker.env.example`, root `.env.example` · remove `ALERT_INTERVAL_SECONDS` (the worker no longer reads it; alerts are the `ops.alerts` pg-boss queue every 5 min).
- `docs/operations/monitoring.md`, `ops/runbooks/deploy/05-migrations-and-backfills.md` · schedule `node src/cli/invariants.ts --record` nightly in `sotf-v2-tools` (writes the `MigrationRun` row `ops.alerts` reads), and drop the mention of the worker's `ALERT_INTERVAL_SECONDS`.
- `packages/contracts/src/notifications.ts`, `packages/core/src/notifications/**` + worker subscriber + web i18n · notification type `review.update_prompt` (WP-41): one merge across contracts, core, web and worker (see wire-api).
