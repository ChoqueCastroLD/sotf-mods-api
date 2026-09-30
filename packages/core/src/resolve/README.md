# Resolver (`@sotf/core/resolve/index`, WP-31)

Canonical URL resolution (PLAN §4.6, research/01 §4.3–4.4), behind `GET /api/v2/resolve?path=`
(the web middleware) and the download route.

`findModBySlug(userSlug, slug)`: 1. exact on `Mod.slug`/`canonicalSlug` (`exact`) or an exact old
path in `ModSlugHistory` (`history`) · 2. the slug under any owner (`global_slug`, or `history`) ·
3. normalised comparison — lower case, no `'()._+`, hyphen runs collapsed — on slug, canonical slug
and history (`normalized`) · 4. normalised slug = `lower(mod_id)` (`manifest_id`). Ties prefer the
requested owner, visible mods, then the oldest id.

`resolvePath(path)` → `ResolveDTO`: explicit `Redirect` rows (301) → mods/builds (200 on the exact
owner path — the canonical path uses `Mod.slug` verbatim —, 301 otherwise, `kind_mismatch` for the
wrong `/mods` ↔ `/builds` prefix; `removed` → 410, `rejected` → 404) → profiles (exact 200;
case-insensitive or `UserSlugHistory` 301) → kits (non-private; exact 200, case-insensitive 301) →
`Tombstone` rows and `KNOWN_TOMBSTONES` (410) → 404. Locale prefixes and the rest of the path are
kept on the canonical path.

Tests: `paths.test.ts` (unit) and `apps/api/src/modules/resolve/resolve.int.test.ts` (every rule,
and the five broken links of research/01 §4.4 on the `db:seed:dev --small` seed).
