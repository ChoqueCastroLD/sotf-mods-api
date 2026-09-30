# OG images (`@sotf/core/og/index`, WP-61)

PLAN §8.6 «OG por entidad». `renderEntityOg(ctx, { storage, config }, { entityType, entityId })`
is the `og.render` job:

- `data.ts` builds the card (English; one image per entity) from the public reads: mods and builds
  (kind + category, title, author, «↓ 48.2K · ★ 4.8 · Works on 1.0.x», `logColor` edge), profiles,
  public kits, categories, the Patch Radar and guides. NSFW, private or missing entities get none.
- `template.ts` + `render.ts`: background from `@sotf/brand` (Night, seeded topography, waypoint)
  and a satori foreground (Big Shoulders 800 + Martian Mono from `@fontsource/*` WOFF, every subset
  its own family so Latin Extended/Vietnamese/Cyrillic fall back; unsupported scripts are dropped
  and the slug is used when nothing drawable is left), composited and palette-quantized by sharp:
  1200 × 630, always < 100 KB (256 → 32 colours until it fits).
- `service.ts`: content-addressed key `og/{type}/{id}-{hash}.png` (hash of template version + card)
  in the public bucket with `immutable` caching; `Mod.ogImageKey`, `User.ogImageKey` and
  `Kit.ogImageKey` are updated with plain SQL (no `updatedAt` bump) and the entity is purged.
  Categories, Patch Radar and guides have no column: their object is uploaded only.

Triggers: the worker's `og-on-event` subscriber (mod/version/review/compat/profile/kit/game-build
events), one pending job per entity (`singletonKey`).
