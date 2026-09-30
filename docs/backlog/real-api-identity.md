# Backlog real-api-identity

Implemented in this branch (area api-identity):

- `GET /api/v2/mods/:id/live/stream` (public, cookieless SSE, `events.modLiveStream`): live `mod.live` counters
  (downloads, downloads24h, followers). Throttled by design (one counter check per 15 s per stream over the shared
  `getModLive` LRU, frames only when a figure changed, 4 streams per IP, recycled every 10 min, closed on shutdown).
  Contract: `packages/contracts/src/events.ts` (`SseModLiveEventDTO`, `encodeModLiveFrame`); server: `apps/api/src/plugins/sse.ts`.

## Needs work outside this area

- [ ] **Consume the mod live stream** · `apps/web/src/scripts/mod/**` (mod page) and build pages · open
  `new EventSource('/api/v2/mods/<id>/live/stream')`, parse `mod.live` with `@sotf/contracts/events`, update download /
  follower counters, fall back to polling `GET /mods/:id/live` on error; same for live title counts on build pages.
- [ ] **T1-02 2FA TOTP + recovery codes, T1-26 passkeys, T1-01 Discord OAuth, T1-08 PAT** · `packages/db` (migration:
  `UserTotp`, `UserRecoveryCode`, `UserPasskey`, `UserOAuthAccount`, `PersonalAccessToken`), `packages/core/src/auth/**`,
  `packages/contracts/src/auth.ts` endpoints, `apps/api/src/modules/auth` handlers, console settings/security screen, i18n
  in 13 locales. They need new tables and core services (outside api-identity paths) plus, for Discord, an OAuth app
  credential (degrade invisibly when `DISCORD_CLIENT_ID` is unset).
- [ ] **New-login alert email (PLAN §9)** · `packages/core/src/auth/service.ts` (trigger on a session from a new
  device/country) + a template in `packages/emails/src/auth`.
