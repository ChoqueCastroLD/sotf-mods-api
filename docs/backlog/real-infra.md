# real-infra backlog

Audit of the infra area (root config, ops/**, .github/**, tooling/scripts/**, docs/**): no "coming soon", TODO/FIXME, mock data, feature flags left off or disabled features were found. The only hits are legitimate (placeholder values in env templates, Turbo/Astro telemetry-disabled env vars, the secrets scanner's placeholder-password list).

## Cross-area items (owned by other workers)

- **Live download counts and kit follows over SSE (T1-24)** · `apps/api/src/modules/**` (stream channel `mod:{id}`), `packages/core/**`, `apps/web/src/**` · PLAN §6 (SSE `mod:{id}` channel, pg_notify 'events'); replaces polling of `GET /mods/:id/live`.
- **Mod public stats sparkline with Recharts `ChartFigure`** · `apps/web/src/**`, `packages/ui/**` · WP-62 T1.
- **Build pages: `+ Kit` popover and live title counts** · `apps/web/src/**` · currently links to `/me/kits?add=<id>`.
- **`data-motion="full"` override of OS reduced motion** · `packages/ui/src/tokens.css` · drop the `!important` on the reduced-motion rule.
- **Scout copy in `cmdk`** · `apps/web/src/**`, `packages/i18n/messages/**` (13 locales) · T1.
- **`compat.prompt` for later downloaders** · `packages/core/**`, `apps/worker/**` · currently fired once at build publication.
- **Legacy contract harness fixes** · `packages/migration-tools/**` or the WP-31/32/33 package · `byId` + `allowExtra` for type-null fixtures, settle wait before downloads `counting`, `pnpm load` `catalog` target.

## Time-gated (this area)

- **Remove `minimumReleaseAgeExclude`** · `pnpm-workspace.yaml` · every exception is younger than 24 h until 2026-09-30T20:00Z; removing it earlier breaks `pnpm fetch` in the Docker builds. After that time delete the block, run `pnpm install --lockfile-only`, rebuild the images.
