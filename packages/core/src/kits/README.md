# Kits domain (WP-42)

Shareable mod collections (PLAN §7.8, T0-18). Served by `apps/api/src/modules/kits`; the UI is
WP-71. Import from `@sotf/core/kits/index`.

| Module | What |
|---|---|
| `rules.ts` | Pure rules: share codes (`KIT-XXXX-XX`, Crockford base32), slugs, automatic dependencies, conflicts, multiplayer and compatibility summaries, total size, `noindex`, item diffs and revision summaries. |
| `read.ts` | Rows, owners, items, version resolution (pinned or latest) and the `KitCardDTO` / `KitDTO` builders (mod cards from the catalog snapshot). |
| `service.ts` | Reads (`getKit`, `getKitBySlug`, `getKitByCode`, `listKits`, `listUserKits`, `listMyKits`, `recentKitCards`, `getOwnKit`) and writes (`createKit`, `updateKit`, `deleteKit`, `putKitItems`, `forkKit`). |

Rules:

- **Visibility**: `public` kits are listed (`GET /kits` only lists public kits with at least one
  item); `unlisted` kits are reachable by id, slug or code; `private` kits only by their owner.
  Hidden kits answer 404 (never 403). Kits of deleted/banned owners are hidden from others.
  The public reads are edge-cacheable and the platform does not resolve sessions for them, so they
  always answer as for an anonymous visitor; owners get the full kit (`descriptionMd`) from the
  write responses and `getOwnKit` (endpoint pending, docs/backlog/WP-42.md).
- **Codes**: 6 random Crockford characters (≈ 1.07 × 10⁹ codes), unique by `Kit_code_key`; the
  insert uses `ON CONFLICT DO NOTHING` and retries with a new code (or the next derived slug) so
  the transaction survives collisions. Codes of deleted kits stay reserved. `by-code` accepts
  `KIT-XXXX-XX`, the short `XXXXXX` form, any case and the Crockford confusables.
- **Slugs**: explicit (`409` when taken) or derived from the name (`name`, `name-2`, …, unique per
  owner even under concurrent creates). A soft-deleted kit frees its slug (`slug~deleted-{id}`).
- **Items**: `PUT /kits/:id/items` replaces the explicit, ordered list; new mods must be
  reachable (published, unlisted, archived, pending with passed checks); mods already in the kit
  may stay after being archived or removed. A pin must be an `active` version of that mod. The
  required dependencies of the pinned/latest version of every item are added transitively as
  `isAutoDependency` after the explicit items (send only the non-auto items back). ≤ 200 items
  with dependencies.
- **Revisions**: a real change of the items bumps `Kit.revision` and records a `KitRevision`
  (`{summary, added, removed, reordered, edited}`; the summary is `revisionSummary` or «+Name,
  −Name»). Unchanged lists create nothing. Creation is revision 1 («Created» / «Forked from X»).
- **Summaries**: multiplayer counts by `Mod.multiplayerRole`; compatibility by `Mod.compatStatus`
  on the current build (`mixed` counts as unverified) plus the number of conflicting pairs
  (`conflicts` edges by id or manifest id between kit items); total size of the resolved versions.
  `compat=works` on the listing = no broken item and no conflict. `noindex` unless public with ≥ 3
  items.
- **Fork**: any visible kit, with its items, notes, pins, description and cover; private by
  default; `forkedFrom` is shown only while the source is public.
- **Permissions**: creating, editing items and forking need a verified email and no suspension
  (`kit.write`); editing and deleting need ownership (`kit.edit`, `kit.delete`).
- Every write emits `kit.created|updated|deleted` in its transaction (purges `kit:{id}`,
  `list:kits`, `user:{ownerId}`).
- Descriptions are stored as `descriptionMd` + `descriptionHtml` (escaped paragraphs until core
  depends on `@sotf/markdown`, see the backlog; `KitsDeps.renderDescription` plugs it in).
