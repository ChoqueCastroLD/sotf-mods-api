# real-console-admin

Audit of ranger, admin, me, settings, signals: no stubs/TODO/mocks/disabled features found. Removed the "still being set up, check back soon" area placeholder (now `NotFound`) and its i18n keys in 13 locales.

Outside the area:
- `apps/web/src/console/layout/TopBar.tsx` (console-creator): signals panel with the 8 latest signals reusing `islands/signals/SignalRow.tsx`.
- `packages/ui/src/tokens.css` (shared-ui): let `data-motion="full"` override the OS reduced-motion rule (currently `!important`).
- `apps/web/src/console/components/DomainI18nBridge.tsx` (console-creator): `taxonomy` resolver for localized taxonomy names in console cards.
