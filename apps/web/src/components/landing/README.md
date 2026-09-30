# Landing (`/`, WP-53, T0-05)

`pages/index.astro` loads every block in parallel from the public API (`data.ts`, 800 ms budget per
call) and renders: hero «The living island» (`Hero.astro`, `PinItem.astro`, `pins.ts`) · personal
block (`PersonalBlock.astro`, hidden) · Start here · Patch Radar band · Trending · Regions · Field
notes · Featured Kit · Mod of the Week · Blueprints · Creator spotlight · FAQ (`content/faq`,
13 locales) · footer (layout). Cards are the `@sotf/ui/domain` components, server-rendered in a
locale scope (`domain.tsx`).

- **Cache**: edge 300 s with tags `home`, `list:mods`, `list:builds`, `list:kits`, `compat`; 60 s
  while a block is in its error state. The HTML never depends on the visitor.
- **Browser** (`islands/landing`, ≈ 2.3 KB gz + the personal chunk ≈ 1.4 KB gz, only with the
  `sotf_li` hint): relative times, stat count-up, hero search → `sotf:cmdk-open`, `live/pulse`
  polling every 60 s (readout + pins, back-off, «Signal lost»), personal block from `/me/home`.
- **SEO**: single `h1` (the LCP, text only), `WebSite` + `SearchAction`, `Organization`,
  `FAQPage` identical to the visible FAQ; figures dated with `site/stats.generatedAt`.
- **i18n**: namespace `landing` (`packages/i18n/messages/landing`), FAQ in
  `apps/web/src/content/faq/<locale>.json` (same ids in every locale).
