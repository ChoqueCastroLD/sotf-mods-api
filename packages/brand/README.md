# @sotf/brand

The «Locator» brand of SOTF Mods (PLAN §3.2, §3.6): the Contour Pin isotype, the «SOTF MODS»
lockups, favicons and app icons, the default OG image, the shared topography texture, the
«Field kit» icon set and the generative artwork (covers, banners, avatars, moon phase).

Everything is a **pure, deterministic function** that returns SVG markup as a string, so the same
code runs in Astro SSR, the console SPA, the worker (OG images) and the build scripts. The binary
assets under `assets/` are committed and reproduced byte for byte by `build:assets`.

## Usage

```ts
import { avatarSvg, bannerSvg, coverSvg, lockupSvg, markSvg, topoSvg } from '@sotf/brand';
import { moonPhase } from '@sotf/brand/moon'; // tiny, client-safe
import { fieldKitIcon, fieldKitUse } from '@sotf/brand/field-kit';

lockupSvg({ layout: 'horizontal', theme: 'adaptive' }); // header logo (see "Theming")
markSvg({ variant: 'simple', size: 20, title: 'SOTF Mods' });
coverSvg(mod.slug, category.color, 'AP'); // mods without an image (16:9)
bannerSvg(user.id, user.bannerSeed); // profile banner; «Reroll terrain» stores a new seed
avatarSvg(user.displayName, user.id, { size: 40 }); // default avatar
fieldKitUse('campfire', { title: 'Campfire tier' }); // <svg><use href="/brand/field-kit.svg#fk-campfire"/></svg>
moonPhase(new Date()).index; // 0–7 → `moon-phase-{index}` icon in the footer
```

Import sub-paths (`@sotf/brand/<module>`) in client code; the barrel is meant for the server.
Untrusted input is safe: colours are validated (`normalizeHex`, falling back to Flare) and all
text is XML-escaped.

| Module | Exports |
|---|---|
| `mark` | `markSvg`, `markPath`, `markPathData`, `markVariantForSize`, `MARK_BOUNDS`, `MARK_MIN_SIZE`, `CLEAR_SPACE_RATIO` |
| `logo` | `lockupSvg`, `lockupBody`, `lockupGeometry` (`horizontal`, `stacked`, `wordmark` × `night`, `day`, `adaptive`) |
| `icons` | `faviconSvg`, `appIconSvg`, `APP_ICONS`, `manifestIcons()` (for `/manifest.webmanifest`) |
| `og` | `ogDefaultSvg` (source of `/brand/og-default.png`) |
| `topo` | `topoSvg`, `topoLines`, `topoGroup`, `topoField`, `TOPO_TEXTURE_SEED/OPTIONS` |
| `cover` · `banner` · `avatar` | `coverSvg`, `bannerSvg`/`bannerSeed`, `avatarSvg`/`avatarColor` |
| `field-kit` | `fieldKitIcon`, `fieldKitSprite`, `fieldKitUse`, `FIELD_KIT_NAMES`, `CREATOR_TIER_ICONS` |
| `moon` | `moonPhase`, `MOON_PHASE_NAMES` |
| `initials` | `initialsFrom`, `initialsElement` |
| `colors` | `palette`, `logoColors`, `themeColor`, `chartSlots`, `contrastRatio`, `normalizeHex`, `mixHex` |

## Assets

`assets/public/` mirrors the web app's `public/` directory; copy it as is into `apps/web/public/`
(WP-22). `assets/manifest.json` lists the SHA-256 of every file.

| File | What |
|---|---|
| `favicon.svg`, `favicon.ico` (16/32/48) | Simplified mark; the SVG follows `prefers-color-scheme` |
| `apple-touch-icon.png` (180) | Full-bleed Night tile (iOS applies its own mask) |
| `brand/icon-{192,512}.png` | Manifest `any`: Night tile with 22 % radius |
| `brand/icon-maskable-{192,512}.png` | Manifest `maskable`: mark inside the 80 % safe circle |
| `brand/favicon-{16,32,48}.png` | PNG favicons |
| `brand/mark.svg`, `mark-day.svg`, `mark-simple.svg`, `logo-mark.png` | Isotype |
| `brand/logo-{horizontal,stacked}-{night,day}.{svg,png}`, `logo-horizontal-adaptive.svg`, `wordmark-{night,day}.svg` | Lockups (PNG targets of the legacy `/static/images/logo*.png` redirect) |
| `brand/og-default.png` (+ `.svg` source) | Default OG image, 1200 × 630 |
| `brand/topo.svg` | The shared contour texture (`texture-topo` mask), ≤ 4.5 KB gzip |
| `brand/field-kit.svg` | Icon sprite, symbols `fk-<name>`, ≤ 6 KB gzip |

## Scripts

```bash
pnpm --filter @sotf/brand build:assets   # regenerate src/generated/brand-data.gen.ts + assets/
pnpm --filter @sotf/brand check:assets   # rebuild in memory; fails if anything differs
pnpm --filter @sotf/brand test           # determinism snapshots, budgets, contrast, geometry
pnpm --filter @sotf/brand typecheck
```

`src/generated/brand-data.gen.ts` holds the build-time geometry: the isotype knock-outs and the
glyph outlines of Big Shoulders Stencil 800 (wordmark), Big Shoulders 800 (initials A–Z, 0–9) and
Martian Mono 500 (OG readout), extracted with opentype.js from the pinned Fontsource packages.
Never edit it by hand.

**Reproducibility.** Vector assets depend only on this package. PNGs are encoded by the pinned
sharp/libvips build without metadata; hashes are stable for a given platform (linux-x64 in CI and
Docker). `check:assets` is always strict. The unit tests compare SVG/JSON byte for byte everywhere,
but compare rasters byte for byte only on linux-x64 or when `CI=true` (or
`SOTF_BRAND_STRICT_ASSETS=1`); elsewhere they decode the PNGs and allow a small pixel tolerance, so
`pnpm verify` on macOS or arm64 is not red for platform noise. If `check:assets` flags PNG-only
differences on another OS, rebuild on linux-x64.

**Shared config.** `tsconfig.json` extends `../config/tsconfig/node.json` by relative path, not
through `node_modules/@sotf/config`: Vite/oxc resolves the preset's own `extends` from the
symlinked location and would miss the root `tsconfig.base.json`. Vitest uses the shared
`defineUnitConfig` preset from `@sotf/config/vitest`.

## Design notes

- **One path per mark.** The knock-out contours are converted from strokes into filled outlines
  (`src/mark-geometry.ts`), so the isotype is a single `fill-rule="evenodd"` path with real holes:
  no masks, ids or background-coloured strokes, and it works on any surface.
- **Real topography.** Contours come from a height field traced with marching squares, so lines
  never cross. The field uses only correctly rounded IEEE-754 operations and integer hashing, so
  a seed renders the same terrain in every engine.
- **Cost.** A cover takes ≈ 2 ms and a banner ≈ 4 ms to generate (warm Node 24); avatars are
  sub-millisecond. Public HTML is edge-cached, so this is paid once per page render.
- **Font-independent initials.** Latin capitals and digits are drawn from embedded outlines;
  other scripts fall back to `<text>` with the display font stack (one character for CJK).
  Initials are NFC-normalised and counted in user-perceived characters (graphemes); an upper
  case that would expand («ß» → «SS») keeps the original character, so the limit always holds.
- **Theming.** `lockupSvg({ theme: 'adaptive' })` paints «SOTF» with `currentColor` and the Flare
  parts with the Day flare `#E75803` plus the class `brand-flare`. That default keeps ≥ 3:1 on
  every surface of both themes, so the logo degrades safely without theme CSS; in Night a page may
  brighten it with `[data-theme="dark"] .brand-flare { fill: #FF7335 }`.
- **Accessibility.** Untitled SVGs get `aria-hidden="true"`; pass `title` when the graphic is the
  only carrier of meaning. The pin keeps ≥ 3:1 contrast on every surface of both themes (tested).

## Adding a Field kit icon

Draw it on the 24 px grid with 1.75 px round strokes (fills only for solid details), add it to
`FIELD_KIT_ICONS` in `src/field-kit.ts`, run `build:assets` and update the snapshot
(`vitest -u`). The sprite must stay ≤ 6 KB gzip.

## Licences

Glyph outlines derived from Big Shoulders, Big Shoulders Stencil and Martian Mono (SIL Open Font
License 1.1); the OFL permits using glyphs in logos and artwork. No font files are redistributed.
