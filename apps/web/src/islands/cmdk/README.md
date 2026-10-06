# Ctrl+K command palette

Search of mods, builds, users and pages with a few navigation commands. Plain on purpose: results only.

## Loading (nothing on first load)

| Piece | When | Size (br) |
|---|---|---|
| `Trigger.ts` | in `lib/client/boot.ts` on every page | < 1 KB |
| `mount.tsx` chunk (palette, MiniSearch, engine) + its small shared chunks (`icu`, icons, `Kbd`) | on intent (pointer over / focus on the header search, pointer down on the «Search» tab or header icon, pointer over the hero field) or when opening | ≈ 22 KB (React excluded) |
| `packages/i18n/messages/cmdk/<locale>.json` | with the chunk, page locale only | ≈ 1–1.4 KB |
| `GET /api/v2/search/index?locale=` (WP-33) | first open of the page, cached for the page | ≈ 8–15 KB |

Opening: `⌘K` / `Ctrl+K` (toggle), `/` outside text fields, focus on the header field (keeps what
was typed), click on the header icon / mobile «Search» tab (full screen below `md`), the landing
hero's cancelable `sotf:cmdk-open` event. If the chunk cannot load, the real `/search` form and
links take over.

## Search

- `engine.ts`: MiniSearch (`prefix`, `fuzzy: 0.2` for terms > 3 letters, `maxFuzzy: 2`, boosts on
  name and `manifestId`, downloads as a mild popularity boost). The tokenizer also splits camelCase
  (`StackMod` → `stack`, `mod`, `stackmod`) so «stak mod» finds StackMod. AND first, OR fallback.
  An exact `manifestId`/name/handle (case- and accent-insensitive) is always first.
- Groups: Recent (device-only `localStorage`, `recents.ts`) · Trending · Mods · Builds · Users ·
  Categories · Pages · Actions; best group first; «See all» → `/search?q=&type=`.
- Scopes (`scope.ts`): `mods:`, `builds:`, `@user`, `>` commands, `Tab`/`Shift+Tab`, chips;
  `Backspace` on an empty field drops the scope.
- Nothing local (or the index failed): `GET /api/v2/search` answers a «From the full search» group;
  that request is also what logs the query in `SearchQueryDaily` (zero-result searches are counted).
- Actions (`actions.ts`): Mods, Builds, Requests, Jams, install guide, share logs, developers;
  for members dashboard, upload a mod or build, notifications, settings; moderation for staff;
  log in for guests; language (13; uses the page's hreflang alternate when it exists). Paths
  of the console routes are read here and in `components/layout/nav-items.ts`.

## UI and accessibility

- Own modal (`role="dialog"`, `aria-modal`, background `inert`, scroll lock, focus returned) and a
  combobox + listbox with `aria-activedescendant`, groups labelled, polite live region with the
  result count. `cmdk` was dropped: its bundled Radix Dialog cannot be tree-shaken (≈ 15.7 KB br)
  and alone would break the 25 KB budget.
- Keys: `↑`/`↓` move, `PageUp`/`PageDown` first/last, `Enter` open, `⌘/Ctrl+Enter` new tab,
  `⌘/Ctrl+D` download the latest version, `Tab` scope, `Esc` close.
- Preview (≥ `lg`): thumbnail, kind, author, downloads, category, manifest id, tags,
  «Download latest» (`/mods/:user/:slug/download/latest`) and «Open page».
- States: skeleton after 300 ms while the index loads, error with retry and request ref, offline
  notice (recent items and actions keep working), empty state with scope hints.
- Analytics: `cmdk_open` (`source`), `cmdk_select` (entity, group, type, scope, new tab),
  `download_click` (`source: cmdk`).

## Text

`i18n.ts` loads the `cmdk` and `shell` namespaces of the page locale (the plain labels of the
palette are `shell_cmdk_*`) and formats them with `formatIcu` (`@sotf/ui/domain`). The few shared terms it shows (Mods, Builds, «Try again»…) are mirrored as
`cmdk_term_*`/… keys with the same text as `common`, because the compiled Paraglide
messages (13 locales each) or the whole `common/<locale>.json` would exceed the budget.

## Overhaul (feat/cmdk)

- Images: every mod/build row shows its thumbnail (index tuple field 9, users carry an avatar), the
  preview a 16:9 hero plus up to four gallery shots (`detail.ts`, loaded on highlight from
  `/api/v2/mods/:id`, `/users/:handle`).
- Operators `by: cat: sort: type: mp:` (`operators.ts`, chips, completion in `suggest.ts`), per-item
  actions menu (`itemActions.ts`), recents for searches and opened items, navigation commands.
- Size: the `mount` chunk is about 29 KB gzip / 26 KB brotli (React excluded), loaded on intent only.
