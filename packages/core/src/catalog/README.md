# Catalog domain (WP-33)

Public reads of mods, libraries and builds (PLAN §5.2 "Catálogo y búsqueda", T0-03, T0-06, T0-09,
T0-30). Served by `apps/api/src/modules/{catalog,site}`; import from `@sotf/core/catalog/index`.

| Module | What |
|---|---|
| `snapshot.ts` | The cached catalog snapshot: every owned mod as a ready-made `ModCardDTO`/`ModRefDTO`, the taxonomy (retired categories folded through `legacySlugs`) and the authors. 60 s in the process LRU, evicted by `list:mods`, `list:builds`, `mod:{id}`, `user:{id}`, `category:{slug}`. |
| `listing.ts` · `explore.ts` | `GET /mods`: filters (categories OR, tags AND, exclusions always), sorts (trending, downloads, updated, new, rating = Bayesian, follows, comments, relevance), pagination and disjunctive facets. Responses cached 30 s per normalised query. |
| `detail.ts` | `GET /mods/:id`, `/by-slug`, `/by-manifest`: status rules (published · unlisted + noindex · archived + successor · pending only with passed checks + noindex · rejected 404 · removed 410), NSFW banner, alternates, reviews summary, current-build compatibility. |
| `versions.ts` · `semver.ts` | Versions in semver precedence (BuildShare 1.0.10 > 1.0.2; builds by date), scan, compat, dependencies resolved against `manifestId` with their state (`ok`, `unlisted`, `archived`, `removed`, `missing`), "Required by". |
| `related.ts` | Dependents, related mods (category + shared tags + word similarity), version reads. |
| `taxonomy.ts` · `users.ts` | Categories and curated tags with counts; creators directory; public profiles, their mods/builds/reviews/activity with privacy (`hideRank`, `hideActivity`). |
| `stats.ts` | `site/stats`, `live/pulse`, `mods/:id/live`, the zero-filled public download series. |
| `media.ts` · `sql.ts` | Public image URLs (processed variants, legacy originals, legacy absolute URLs) and the raw-SQL/LRU helpers. |

Rules:

- Listings, search, the Cmd+K index and the figures only show `published` items of visible authors;
  NSFW only with `nsfw=1` on `GET /mods` (the response is edge-cached and never varies by cookie, so
  the age-gated opt-in is enforced by the caller: the web sends `nsfw=1` only for opted-in visitors).
- Public responses never include `descriptionMd` (owner-only, WP-40).
- Every value that crosses the wire is validated against the contract before it is returned
  (URLs, colours, enums): bad legacy data is dropped, never a 500.
