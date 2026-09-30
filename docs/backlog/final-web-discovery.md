# Backlog final-web-discovery

Resolved: multiplayer hub single `GET /mods` read (`content/best/hubs.ts`), category hub `og:image` from `CategoryDTO.ogImage`, stale stubs note in `lib/README.md`.

Open (owner/testing, not code in this area):
- OWNER: legal review of the five drafts, then `LEGAL_META[doc].reviewed = true`; confirm mailboxes in `LEGAL_CONTACTS`; add a security mailbox to `pages/.well-known/security.txt.ts`; bump `INSTALL_VERIFIED`.
- Testing phase (dev-only mode): `@cmdk`, `@builds`, LHCI presets in `apps/web/src/lib/testing/**`; root `e2e/**` and `tooling/lhci/**` (WP-91/WP-92).
- i18n: legal/developers texts in 11 locales; machine outputs (llms, feeds, markdown twins) stay English by design.
