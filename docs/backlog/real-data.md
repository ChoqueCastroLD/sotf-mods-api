# Backlog real-data (worker, db, migration tooling)

Audit of `apps/worker`, `packages/db`, `tooling/migration`, `packages/migration-tools`, `ops/sql`: no placeholder, mock, "soon", TODO/FIXME or flag-off code found; the only "deferred" wording is the intentional precondition mechanism for migrations 0038/0039/0040/0045 (applied by the backfill flow). Nothing in this area was left unimplemented.

Needed outside the area:

- `packages/core/src/events/**`, `apps/api/src/modules/live/**`, `apps/web/src/scripts/mod/**` · live download counts and kit follows over SSE (T1-24), replacing `GET /mods/:id/live` polling.
- `packages/core/src/stats/**`, `apps/web/**`, `packages/ui/**` · mod public stats sparkline with Recharts `ChartFigure` (WP-62).
- `apps/web/src/**` (builds pages), `packages/ui/**` · `+ Kit` popover and live counts on build pages.
- `packages/ui/src/tokens.css` · `data-motion="full"` override of OS reduced motion.
- `packages/core/src/notifications/rules.ts`, `packages/core/src/compat/**` · emit `compat.prompt` also for later downloaders (per-download trigger).
- `apps/web/src/islands/cmdk/**`, `packages/i18n/messages/**` · Scout copy (T1).
