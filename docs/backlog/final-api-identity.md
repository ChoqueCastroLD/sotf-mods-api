# Backlog final-api-identity

Area: auth, account, me, onboarding, unsubscribe, notifications, events, platform, bootstrap/security plugins,
`packages/emails`, auth/account/me/notifications contracts.

Audit result: every endpoint of PLAN §5.2 for these modules (`/auth/*`, `/me*`, `/notifications*`,
`/notification-preferences`, `/stream`, `/unsubscribe`, `/e`, `/e/vitals`, `/healthz`, `/readyz`) is implemented from its
contract; no TODO/FIXME/stub found in the area. WP-20/30/43/93 backlog entries are notes for other areas (web pages,
worker, e2e) and need no change here.

## Needs work outside this area (cross-area, must land in one merge)

- [ ] **New signal types** (`compat.prompt`, `review.update_prompt`, `kit.added_my_mod`) · `packages/core/src/notifications/**`, worker subscribers, `apps/web/src/console/features/settings/NotificationsScreen.tsx`, `apps/web/src/islands/signals/describe.ts`, i18n · adding a `NotificationType` in `packages/contracts/src/notifications.ts` breaks the exhaustive web records, so contract, core and web must change together.
- [ ] **Live download SSE event** · `packages/contracts/src/events.ts` + downloads module · needs a throttled design; polling `GET /mods/:id/live` stays.
- [ ] **Search page i18n namespace** · `packages/i18n`, `packages/core/src/search/pages.ts` · keys must exist first.
