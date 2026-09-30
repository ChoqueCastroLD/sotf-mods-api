# Notification jobs (WP-43)

| Group | Handles |
|---|---|
| `notifications` | subscribers `notifications.signals` (every domain event → signals) and `realtime.mod-updated` |
| `digests` | `notifications.digest` (`10m` instant emails + outbox retries + legacy drain trigger after the cut-over; `daily`; `weekly`) and `creator.weekly` (fan-out, then one report per creator) |
| `discord` | subscriber `discord.enqueue-on-event` and the `discord.announce` queue |
| `legacy-mentions` | `legacy.mentions` (B18 drain; refused while `LEGACY_COEXIST=true`) |

Shared configuration: `options.ts` (transport, `EMAIL_FROM`, `PUBLIC_SITE_URL`, `R2_PUBLIC_BASE_URL`,
`LEGACY_COEXIST`). Acceptance: `pnpm --filter @sotf/worker test:int -- notifications` (Mailpit,
the real API for SSE and the one-click POST, Discord payload snapshot).
