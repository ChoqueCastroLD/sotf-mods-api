# Search domain (WP-33)

Server search and the Cmd+K index (PLAN §7.9). Served by `apps/api/src/modules/search`; import from
`@sotf/core/search/index`.

- `search.ts`: `GET /search`. Mods and builds by exact manifest id or name first, then full text
  (`websearch_to_tsquery` over `"searchVector"`, `simple` + `english`, `ts_rank_cd`), then trigram
  similarity (≥ 0.3 on the name, the name without spaces and the manifest id; `word_similarity`
  ≥ 0.5 for a word inside a longer name) so typos work («stak mod» → StackMod, «kelvn» → the Kelvin
  mods). Also users, public kits and the static pages. `modRelevance` feeds `GET /mods?q=`.
  Queries are logged per day in `SearchQueryDaily` (fire and forget).
- `search-index.ts`: `GET /search/index?locale=`: tuples of every listable mod/build, public kits,
  creators, localised categories and pages, trending ids. ≈ 8 KB brotli on the seed, ≈ 12 KB with a
  processed 64 px thumbnail per mod (budget 15 KB, checked by the integration test in all 13 locales).
- `pages.ts`: the static pages with their titles in the 13 locales.
- `text.ts`: query normalisation (`qNorm`) and the «» highlight.

Paths in results and in the index are unprefixed; the web adds the locale prefix.
