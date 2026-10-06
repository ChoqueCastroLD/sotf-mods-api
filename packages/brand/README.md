# @sotf/brand

The brand of SOTF Mods, as in the old site: the red «SOTF-MODS» logo, its favicons and icons, the
default OG image, and the default avatars, covers and banners. The look is calm: dark neutrals, one
red accent, no artwork. (CLASSIC.md in `docs/plan` is the reference.)

Logos, favicons and icons are the raster files of the old site (`sources/`), optimized by
`scripts/build-assets.ts` into `assets/public/` (WebP plus PNG, 1x and 2x). Avatars, covers and banners are pure,
deterministic functions that return SVG markup, so the same code runs in Astro SSR, the console SPA,
the worker and the build scripts. The built assets under `assets/` are committed.

## Usage

```ts
import { avatarSvg, bannerSvg, coverSvg, lockupSvg } from '@sotf/brand';

lockupSvg({ height: 34 }); // header logo: <picture> with WebP + PNG, sized (render with set:html)
lockupSvg({ layout: 'stacked', height: 96 }); // footer logo
coverSvg(mod.slug, category.color, 'AP'); // mods without an image (16:9): flat, tinted, initials
bannerSvg(user.id, user.bannerSeed); // profile banner: quiet gradient
avatarSvg(user.displayName, user.id, { size: 40 }); // default avatar: initials in a ring
```

Import sub-paths (`@sotf/brand/<module>`) in client code; the barrel is meant for the server.
Untrusted input is safe: colours are validated (`normalizeHex`, falling back to the red) and all
text is XML-escaped.

| Module | Exports |
|---|---|
| `logo` | `lockupSvg` / `logoPicture`, `LOGO_FILES`, `LOGO_PATHS` |
| `logo-data` | `LOGO_WORDMARK_DATA_URI` (for renderers that cannot load files: OG images) |
| `icons` | `APP_ICONS`, `manifestIcons()` (for `/manifest.webmanifest`) |
| `og` | `OG_WIDTH`, `OG_HEIGHT` (the default image is composed by `scripts/build-icons.ts`) |
| `cover` · `banner` · `avatar` | `coverSvg`, `bannerSvg`/`bannerSeed`, `avatarSvg`/`avatarColor` |
| `initials` | `initialsFrom`, `initialsElement` (Onest Bold outlines) |
| `colors` | `palette`, `logoColors`, `themeColor`, `chartSlots`, `contrastRatio`, `normalizeHex`, `mixHex` |
| `field-kit` · `moon` · `topo` · `contour` | Older modules, still exported for code that has not moved yet (`topo` and `contour` have no users left once the landing map is gone). |

## Public URLs

Stable paths on the site origin (also for e-mails, which need absolute URLs and PNG):

| URL | What |
|---|---|
| `/brand/logo-sm.png`, `/brand/logo-sm.webp` | One-line «SOTF-MODS», 419 x 110 (header, auth pages, e-mails) |
| `/brand/logo-sm-140.*`, `/brand/logo-sm-280.*` | Same logo at 1x and 2x of a ~36 px tall header |
| `/brand/logo.png`, `/brand/logo.webp` | Stacked «Sons of the Forest Mods», 640 x 360 (footer, OG, splash) |
| `/brand/logo-320.*` | Stacked logo, half size |
| `/brand/og-default.png` | Default OG image, 1200 x 630 |
| `/brand/icon-{192,512}.png`, `/brand/icon-maskable-{192,512}.png`, `/brand/favicon-{16,32,48}.png` | Manifest and favicon icons |
| `/favicon.ico`, `/favicon.svg`, `/apple-touch-icon.png` | Root icons |
| `/brand/logo-horizontal-{night,day}.png`, `/brand/logo-mark.png` | Legacy names (same images as `logo-sm.png` and `icon-512.png`), kept for old links and e-mails |

`assets/public/` mirrors the web app's `public/` directory; `apps/web` copies it with `pnpm gen`.
`assets/manifest.json` lists the SHA-256 of every file.

## Scripts

```bash
pnpm --filter @sotf/brand build:assets   # regenerate src/generated/brand-data.gen.ts + assets/
pnpm --filter @sotf/brand check:assets   # rebuild in memory; fails if anything differs
pnpm --filter @sotf/brand test
pnpm --filter @sotf/brand typecheck
```

`src/generated/brand-data.gen.ts` holds the Onest Bold outlines of A-Z and 0-9 (from
`sources/fonts/Onest-Bold-latin.ttf`, a static instance of the Onest variable font cut with fontTools)
and the base64 of the wordmark. Never edit it by hand.

**Reproducibility.** Images are encoded by the pinned sharp/libvips build without metadata; hashes
are stable for a given platform (linux-x64 in CI and Docker). The unit tests compare text assets
byte for byte and rasters byte for byte only on linux-x64 or when `CI=true` (or
`SOTF_BRAND_STRICT_ASSETS=1`); elsewhere they decode the images and allow a small pixel tolerance.

## Design notes

- **The old logo is the logo.** Red on a transparent background, so one file serves both themes.
  Only the sizes and formats changed (WebP lossless or near-lossless, whichever is smaller, plus a
  palette PNG).
- **No artwork.** Covers are a flat panel tinted with the category colour; banners a quiet gradient;
  avatars a dark disc with initials and a thin ring (one of eight muted colours, chosen by id).
- **Font-independent initials.** Latin capitals and digits are drawn from embedded outlines;
  other scripts fall back to `<text>` with the UI font stack (one character for CJK). Initials are
  NFC-normalised and counted in user-perceived characters (graphemes).
- **Accessibility.** The logo `<img>` has the alt text «SOTF Mods» unless `title: ''` marks it as
  decorative; untitled SVGs get `aria-hidden="true"`.

## Licences

Glyph outlines derived from Onest (SIL Open Font License 1.1); the OFL permits using glyphs in
artwork. The logo files come from the old SOTF Mods site.
