# @sotf/ui

The «Locator» design system of SOTF Mods v2 (PLAN §3): Tailwind 4 tokens, self-hosted fonts and
the accessible React primitives shared by the public site (server-rendered by Astro, mostly
without hydration) and the console SPA. Domain components (ModCard, CompatCapsule…) live in
`src/domain/` and are owned by WP-25 (`@sotf/ui/domain`).

## Use it

```css
/* apps/web global stylesheet (processed by @tailwindcss/vite) */
@import "@sotf/ui/tokens.css";
```

```tsx
import { Button, Dialog, Field, Input, toast } from '@sotf/ui';
```

```astro
---
import { THEME_INIT_SCRIPT } from '@sotf/ui/theme';
import { BANNER_INIT_SCRIPT } from '@sotf/ui/dismissals';
import { FONT_PRELOADS } from '@sotf/ui/font-preloads';
---
<html lang={locale} data-theme="dark">
  <head>
    <script is:inline set:html={THEME_INIT_SCRIPT} />  <!-- ≤ 200 B, before any paint -->
    <script is:inline set:html={BANNER_INIT_SCRIPT} /> <!-- optional: hides dismissed banners -->
    {FONT_PRELOADS.map((href) => <link rel="preload" href={href} as="font" type="font/woff2" crossorigin />)}
```

```ts
// apps/web/src/scripts/**: wire server-rendered ThemeToggle, LanguageSwitcher, Banner, LiveDot
import { enhance } from '@sotf/ui/enhance';
enhance();
```

| Import | What |
|---|---|
| `@sotf/ui` | Every primitive (side-effect free: importing `Button` alone ships < 3 KB br) |
| `@sotf/ui/tokens.css` | Tokens + Tailwind + typography plugin + fonts; `@source`s the primitives |
| `@sotf/ui/fonts.css` | Fontsource variable fonts + fontaine metric fallbacks (imported by tokens.css) |
| `@sotf/ui/theme` | `THEME_INIT_SCRIPT`, `setTheme`, `readTheme`, `onThemeChange`, `bindThemeToggles`, `cspScriptHash` (no React) |
| `@sotf/ui/enhance` | `enhance()`, `bindDisclosures`, `bindBanners`, `bindLiveDots` (no React) |
| `@sotf/ui/dismissals` | Persistent banner dismissals + `BANNER_INIT_SCRIPT` (no React) |
| `@sotf/ui/labels` | `UiTranslate`, `configureUiTranslate`, `UiTranslateProvider` |
| `@sotf/ui/font-preloads` | Hashed URLs of the two preloaded fonts (Vite `?url`) |
| `@sotf/ui/messages/<locale>.json` | The `ui` message namespace (13 locales) |
| `@sotf/ui/<module>` | Any component module, e.g. `@sotf/ui/button` |

## Primitives (PLAN §3.9)

- **Actions**: `Button` (`primary` · `secondary` · `ghost` · `outline` · `danger` · `link` · `icon`;
  `sm` 32 / `md` 40 / `lg` 48 px; `loading` with the radar sweep; `glow` for the one main CTA),
  `ButtonLink`, `buttonClasses()`.
- **Forms**: `Field` (label, description, error with icon, «Optional»), `Input`, `Textarea`
  (`field-sizing: content` + fallback), `Select`, `Combobox`, `Switch`, `Checkbox`,
  `RadioCardGroup`, `Slider` (single or range), `PasswordField` (show/hide + strength meter,
  `passwordStrength()`).
- **Surfaces**: `Dialog` (a Base UI dialog on ≥ md, a swipeable bottom sheet below), `DialogClose`,
  `ConfirmDialog` (async confirm, type-the-name for destructive actions), `Popover`, `Tooltip`
  (300 ms), `Menu` (actions, links, groups, checkbox and radio items), `Tabs` (gliding indicator).
- **Navigation**: `Breadcrumbs` (+ `breadcrumbListJsonLd`), `Pagination` (real `?page=` links +
  progressive «Load more»), `Stepper` («manual tabs»).
- **Feedback**: `Toaster` + `toast.success|info|warning|error|progress`, `Banner` (persistent
  dismissal), `EmptyState`, `ErrorState` (retry + reference id), `Skeleton`, `SkeletonText`,
  `SkeletonGroup` (appears only after 300 ms).
- **Other**: `Kbd`, `Avatar` (image or the generative waypoint avatar), `Badge` (`neutral` ·
  `signal` · `success` · `warning` · `danger` · `featured` (notched) · `blueprint` ·
  `outline-mono`), `LiveDot`, `SkipLink`, `ThemeToggle`, `LanguageSwitcher`, `RadarSpinner`.
- **Icons**: `Icon` (any Lucide icon at the brand weight: 1.75 px, 2 px ≤ 16 px), the semantic
  `icons` map (research/03 §4.5) and `FieldKitIcon` (sprite or inline, from `@sotf/brand`).

Rules the primitives follow: status is never colour alone (icon + text); controls use
`border-strong` (≥ 3:1); targets ≥ 24 px (44 px for primary actions below `md`); only
`transform`/`opacity` animate and everything honours `prefers-reduced-motion`; logical properties
only (`ms-*`, `pe-*`), so RTL stays possible.

## Server rendering and hydration

Every primitive renders with `renderToString` (tested). Public pages render them without
hydration, so the ones that must work there are plain HTML: `Button`/`ButtonLink`, `Badge`,
`Breadcrumbs`, `Pagination`, `Stepper`, `EmptyState`, `ErrorState`, `Skeleton*`, `Avatar`, `Kbd`,
`SkipLink`, `LiveDot`, and — through `enhance()` — `ThemeToggle` (native radios),
`LanguageSwitcher` (a `<details>` of real `hreflang` links) and dismissible `Banner`s. Base UI
based primitives (dialogs, menus, selects, tabs, forms) need a React island or the console.

Floating parts (dialogs, menus, popovers) render through portals, so they appear only after
hydration; always give them a trigger that makes sense before JavaScript loads.

## Themes

`data-theme="dark" | "light" | "system"` on `<html>` only. The semantic tokens use
`light-dark()`, which Lightning CSS lowers for older browsers into custom properties resolved at
`:root`; a nested `[data-theme]` therefore does not re-theme a subtree. Preview the other theme in
an iframe (as the playground does). The preference lives in `localStorage` (`sotf-theme`), never
in a cookie, so cached HTML stays identical for everyone.

## Text and i18n

Components contain no hard-coded copy. They ask a `UiTranslate` for keys of the `ui` namespace
(`messages/<locale>.json`, 13 locales, English source). Resolution: `UiTranslateProvider` →
`configureUiTranslate()` (set once at start-up with a request-locale-aware function, e.g.
Paraglide) → English. Every other string (titles, labels, descriptions) comes in through props.

## Tokens

`src/tokens.css` section 1 is a literal copy of research/03 §4.4 (checked byte for byte by
`test/tokens-literal.test.ts`; the only change moves the Fontsource imports to `fonts.css`).
Additions go to section 2. `src/font-fallbacks.gen.css` is generated by fontaine
(`pnpm --filter @sotf/ui gen`, part of `pnpm gen`); never edit it by hand.

## Scripts

```bash
pnpm --filter @sotf/ui test         # SSR of every primitive, contrast, keyboard, tree-shaking, units
pnpm --filter @sotf/ui build:css    # compile tokens + primitives CSS; fails on any warning (also `build`)
pnpm --filter @sotf/ui playground   # http://127.0.0.1:47350 — every primitive, Night | Day side by side
pnpm --filter @sotf/ui gen          # regenerate the font fallbacks
pnpm --filter @sotf/ui typecheck
```

The playground renders `playground/domain/**/*.demo.tsx` too (owned by WP-25): export a component
as `default` and an optional `title`.

## Decisions

- **Bottom sheet on Base UI `Drawer`**, not vaul: one accessibility layer (focus, inert, Escape)
  for dialogs and sheets, swipe-to-dismiss included, and no Radix dependency.
- **`cn()` without tailwind-merge**: keeps a lone `Button` < 3 KB br. Components expose variants;
  a caller's `className` should add layout, not override colours or sizes.
- **Toasts**: sonner positions and stacks; every toast renders `ToastCard` (brand markup,
  `role="alert"` for warnings/errors). sonner injects a `<style>` at import time, so the page CSP
  must allow it (see docs/backlog/WP-12.md).
