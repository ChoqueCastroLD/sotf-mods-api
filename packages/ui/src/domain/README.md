# `@sotf/ui/domain`

Domain components of the «Locator» design system (PLAN §3.9, research/03 §5.2, §5.3, §5.8,
§5.9), owned by WP-25. They are typed with the DTOs of `@sotf/contracts`, render on the server
(Astro `renderToString`, no `window`) and are shared with the console.

```tsx
import { CompatCapsule, compatCapsulePropsOf, ModCard, VersionTable } from '@sotf/ui/domain';

<ModCard mod={card} action={<FavoriteToggle … />} />
<ModCard mod={card} variant="list" labels={labels} now={Date.now()} />
<CompatCapsule {...compatCapsulePropsOf(mod)} />
<VersionTable versions={versions.items} lastDownloadedAt={lastDownload} />
```

| Group | Components |
|---|---|
| Cards | `ModCard` (`list` · `grid` · `row` · `compact` · `feature`; no compatibility, award or stamp on any of them), `BuildCard`, `KitCard`, `CreatorCard`, skeletons of each (`ModCardSkeleton`, `BuildCardSkeleton`, `KitCardSkeleton`, `CreatorCardSkeleton`), `CardLink`, `Cover`, `Placeholder` |
| Data and status | `StatTile` (+ `Sparkline`), `CompatBadge`, `CompatCapsule`, `FieldReportMeter`, `VersionTable`, `ModChip`, `DependencyList` |
| Identity | `RankStamp`, `TierStamp`, `BadgeStamp` (locked = dashed), `TrustedMark` |
| Download and gallery | `DownloadSplitButton` (presentational), `GalleryStrip` |
| Filters | `FilterChips` (include/exclude), `SortMenu`, `ViewToggle`, `DisclosureMenu` |
| Content | `ProseLocator` (styles of the `@sotf/markdown` hooks), `AdSlot`, `ConsentBar`, `ReviewCard` (+ `StarRating`, `RatingHistogram`), `CommentItem`, `ChartFigure` + `chartTheme` (Recharts props from the tokens) |

## Rules they follow

- **Cards**: the title link is stretched over the card with a pseudo-element (no nested links);
  controls inside a card (favourite, follow, author link) sit above it (`cardControlClasses`).
  Hover lifts 2 px (transform only, none under reduced motion). The grid `ModCard` is a
  container (`@container/card`): below **260 px** of its own width it takes the compact layout.
  The cover carries `view-transition-name: mod-cover-{id}` (turn off with `viewTransition={false}`
  when the same mod appears twice on a page).
- **Status is never colour alone**: `CompatBadge`, deltas, dependency states, filter states,
  locked badges and reports always pair an icon with text (visible or `sr-only`).
- **No layout shift**: covers and thumbnails have fixed ratios and dimensions; `AdSlot` reserves
  its `min-height` per format and breakpoint (`AD_MIN_HEIGHT`); skeletons share the geometry.
- **Works without JavaScript** on public pages: links for filters, sort, view, gallery and
  downloads; `<details data-disclosure>` menus (enhanced by `enhance()` of `@sotf/ui/enhance`).
  Every interactive component also has a callback mode for the console.
- **Cached HTML stays deterministic**: dates are absolute and UTC by default; «Updated» badges
  only appear when the caller passes `now`.

## Text and formatting (namespace `ui-domain`)

Components never hard-code copy. They read `ui_domain_*` messages through `useDomainI18n()`:
`DomainI18nProvider` (context) → `configureDomainI18n()` (set once per app, request-aware) →
English (`messages/en.json`, interpreted by the small ICU formatter in `icu.ts`). `locale` is a
BCP-47 tag used by every `Intl` formatter (`formatCompact`, `formatBytes`, `formatDate`…);
`taxonomy(nameKey, fallback)` localises category names and `href(path)` localises the site paths
the components build themselves (profile links of `ModCard`, `BuildCard`, `CreatorCard`,
`ReviewCard` and `CommentItem`, through `useProfileHref()`); DTO paths such as `canonicalPath` are
rendered as the caller passes them.

```ts
// apps/web (WP-22) and the console (WP-34), with Paraglide:
configureDomainI18n({
  get locale() { return toHtmlLang(getLocale()); },
  t: (key, params) => m[key](params ?? {}),
  taxonomy: (nameKey, fallback) => (nameKey in m ? m[nameKey]() : fallback),
  href: (path) => localizePath(path, getLocale()),
});
```

Messages whose argument is a React node (the author link in «by {author}») are translated with
`SLOT` and split with `withSlot`, so each language keeps its word order.

The 13-locale catalogue `packages/i18n/messages/ui-domain/` is created from `messages/en.json`
by the i18n owner (see docs/backlog/WP-25.md); until then every locale falls back to English
text with locale-aware numbers and dates.

## Tests and playground

```bash
pnpm --filter @sotf/ui test             # src/domain/test: SSR without window + snapshots, rules, keyboard
pnpm --filter @sotf/ui playground       # playground/domain/*.demo.tsx, Night | Day side by side
pnpm --filter @sotf/ui playground:build
```

`test/fixtures.ts` builds every fixture from the examples of `@sotf/contracts` (parsed with the
schemas), so a contract change that breaks a component fails here.
