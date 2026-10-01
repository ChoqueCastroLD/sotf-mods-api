# Kits — public pages (WP-71)

PLAN §7.8, research/03 §6.5. Backend: WP-42 (`@sotf/core/kits`, `packages/contracts/src/kits.ts`).

| Route | What | Cache |
|---|---|---|
| `/kits` | Knolling cards (`KitCard`), sort `popular`/`new`, filters `compat=works` and `staff=1`, `?page=N`; non-canonical queries → 301; filtered views `noindex` | E(300) `list:kits`; API down → 503 uncached |
| `/kits/:user/:slug` | Resolver (301/404/410) → `GET /kits/:id`: knolling header, curator, revision, compatibility/multiplayer/size summaries, ordered items (notes, pins, auto dependencies), description, revisions, more kits of the curator; «Download all» sheet, share dialog (code, short URL, Markdown, QR), fork, owner «Edit» | E(900) `kit:{id}` |
| `/k/:code` | Share code (`KIT-XXXX-XX`, the short form, any case) → 301 to the canonical page | E(3600) `kit:{id}` |
| `/k?code=` | Target of the «Have a kit code?» form (works without JavaScript) | no-store |

- `data.ts` — listing state and loaders, the kit resolver, `kitByCode`.
- `format.ts` / `seo.ts` — summaries, download paths, titles, descriptions and JSON-LD (`CollectionPage` + `ItemList`).
- `scripts/` — the page script (vanilla): dialogs, copy/share/QR, the download checklist
  (`sessionStorage` per kit revision; every link is the normal download route, so each counts),
  fork (`POST /kits/:id/fork` → `/me/kits/:id?forked=1`) and the owner's «Edit» link. It reuses the
  generic modules of the mod page (`scripts/mod/{dialogs,toast,session,api,qr}.ts`).
- Everything user-specific is resolved after load; the HTML is identical for every visitor.

The editor lives in the console: `src/console/features/kits` (`/me/kits`, `/me/kits/$kitId`).
Messages: namespace `kits` (`packages/i18n/messages/kits/*.json`, 13 locales).

## Phones (m-entity)

The knolling mat is full-bleed (max two rows, no placeholders), the summary panels swipe sideways, the sticky bar is
Download all · Follow · More (`KitMoreSheet.astro`: copy code, share, fork, edit), `SectionNav.astro` jumps between
items, about, comments and revisions, the description is clamped, revisions fold and the comment thread opens in a
bottom sheet (`scripts/mod/sheets.ts`; the form stays docked at the bottom, see the global style of the page).
