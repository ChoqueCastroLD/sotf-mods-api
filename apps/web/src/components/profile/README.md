# Profile, creators and achievements (WP-64)

Public pages of T0-15 and the rules page of PLAN §7.2:

| Route | Page | Cache |
|---|---|---|
| `/profile/:handle` (`?tab=mods,builds,kits,badges,activity,reviews`, `&sort=`, `&page=`, `&cursor=`) | `pages/profile/[handle]/index.astro` | E(900) `user:{id}`; a failed tab E(60) |
| `/creators` (`?sort=downloads,followers,recent,spotlight`, `&page=`) | `pages/creators/index.astro` | E(900) `list:mods` |
| `/achievements` | `pages/achievements.astro` | E(3600) `stats` |

`/@handle` → 301 `/profile/:handle` is done by the WP-22 middleware; `/profile/:handle.md` and
`/profile/:handle/feed.xml` belong to WP-61 (the page links them as alternates).

## Files

| File | What |
|---|---|
| `data.ts` | Resolver (301 renamed handle / 404 / 410), `?tab` parsing and URLs, one loader per tab, creators and badge catalog loaders |
| `ProfileHeader.astro` | Generative terrain banner (`@sotf/brand` `bannerSvg`, Night and Day variants) or uploaded banner, avatar with the tier frame, «Day N on the island», stamps, bio, links, stats, follow / edit / share |
| `ProfileTabs.astro` | Link tab bar (`aria-current="page"`), sticky under the header |
| `ActivityHeatmap.astro` + `activity.ts` | 12-month heatmap (SVG, Flare sequential, week columns), totals, latest days and the monthly table |
| `Domain.tsx` | Server-only `@sotf/ui/domain` blocks: stamps, card grids, written reviews, the field notebook, creator grid with follow buttons |
| `TabState.astro` | Empty, private and error states |
| `ProfileToast.astro` + `profile-page.ts` | Vanilla client: follow (optimistic, undo, own profile → «Edit profile»), share, heatmap scroll |
| `i18n.ts` | Badge/rank/tier names and hints (`profile` namespace) and the page `DomainI18n` |
| `seo.ts` | Titles, descriptions, `ProfilePage` → `Person`, creators `CollectionPage` + `ItemList`, achievements `DefinedTermSet` |

## Rules

- The HTML is identical for every visitor (edge-cached): the follow state, «this is you» and the
  session only exist in `profile-page.ts`. Guests (and no-JS) submit the follow form to `/login?next=`.
- Privacy comes from the API (`hideRank` → no rank/XP, `hideKits`, `hideActivity`); hidden tabs
  are left out of the bar and answer a «kept private» state when opened directly.
- Profiles without public content are `noindex`; `?tab`/`?page`/`?sort` variants are canonical to
  the profile. Malformed query values 301 to the clean URL.
- Copy lives in `packages/i18n/messages/profile/*.json` (13 locales, English is the source).
