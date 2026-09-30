# Backlog final-api-content

Audit of `apps/api/src/modules/{catalog,search,site,resolve,downloads,uploads,drafts,studio-mods,markdown-preview,legacy,ecosystem}`, `packages/core/src/{catalog,search,storage,publishing,legacy}` and their contracts: no TODO/FIXME, stubs or unimplemented routes found; every open item in `docs/backlog/*.md` that targets these paths was already resolved by wire-api. No code change was needed.

## Outside this area

- [ ] **Search page titles as an i18n namespace** · `packages/i18n/messages/search/*` + `packages/core/src/search/pages.ts` · the 13 localised titles are already served localised by the API (not English-only copy), so nothing is broken; moving them to a `search` namespace needs the keys in `packages/i18n` first, then core can read them.
- [ ] **`/developers` page** · `apps/web/src/pages/developers/**` · document `LEGACY_DEVIATIONS`, the Sunset date, the 410 envelope and KelvinSeek's fallback wording (WP-32).
- [ ] **Legacy contract harness** · `tooling/legacy-contract/**` · `byId` + `allowExtra` for the `type-null` fixtures; settle wait before the downloads `counting` check (WP-31/WP-32).
- [ ] **`pnpm load` dispatcher** · `tooling/load/package.json` · add the `catalog` target (WP-33).
