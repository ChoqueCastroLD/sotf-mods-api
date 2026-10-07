# Profile (WP-64)

Public page of T0-15:

| Route | Page | Cache |
|---|---|---|
| `/profile/:handle` (`?tab=mods,builds,reviews`, `&sort=`, `&page=`, `&cursor=`) | `pages/profile/[handle]/index.astro` | E(900) `user:{id}`; a failed tab E(60) |

`/@handle` → 301 `/profile/:handle` is done by the middleware; `/profile/:handle.md` and
`/profile/:handle/feed.xml` belong to WP-61 (the page links them as alternates). The creators
directory, achievements, badges, ranks, kits and the activity heatmap are gone (CLASSIC.md).

## Files

| File | What |
|---|---|
| `data.ts` | Resolver (301 renamed handle / 404 / 410), `?tab` parsing and URLs, one loader per tab |
| `ProfileHeader.astro` | Avatar, name, Trusted and staff role, handle, member since, bio, links, stats, follow / edit / share |
| `ProfileTabs.astro` | Link tab bar (`aria-current="page"`) |
| `Domain.tsx` | Server-only `@sotf/ui/domain` blocks: card grids and written reviews |
| `TabState.astro` | Empty and error states |
| `profile-page.ts` | Vanilla client: follow (optimistic, undo through the shared page toast, own profile shows «Edit profile»), share |
| `i18n.ts` | Link labels and the page `DomainI18n` |
| `seo.ts` | Titles, descriptions, `ProfilePage` → `Person` |

## Rules

- The HTML is identical for every visitor (edge-cached): the follow state, «this is you» and the
  session only exist in `profile-page.ts`. Guests (and no-JS) submit the follow form to `/login?next=`.
- Profiles without public content are `noindex`; `?tab`/`?page`/`?sort` variants are canonical to
  the profile. Malformed query values (including the removed `?tab=kits|badges|activity`) 301 to
  the clean URL.
- Copy lives in `packages/i18n/messages/profile/*.json` (13 locales, English is the source).
