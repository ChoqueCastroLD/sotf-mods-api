# CDN purges (`@sotf/core/cdn/index`, WP-61)

PLAN §2.7 «Flujo de purga». A write emits a domain event; the platform subscriber maps it to cache
tags (`tagsForEvent`) and enqueues `cdn.purge` (debounced 20 s per tag set, ≤ 30 tags). The
worker's `cdn.purge` job calls `runCdnPurge`:

1. `invalidateWebCache` → `POST {WEB_INTERNAL_URL}/_internal/cache/invalidate` (`X-Internal-Auth`);
2. `purgeCloudflareTags` → `POST /zones/{CF_ZONE_ID}/purge_cache {tags}` (≤ 30 tags per call,
   `PurgeThrottle` keeps ≥ 20 s between calls of the process; the queue runs one job at a time);
3. `publishCacheInvalidation` → `NOTIFY cache` (API LRUs);
4. `indexnow.ping` with the locale URLs of the pages touched (content changes only, production
   with an `INDEXNOW_KEY`; see `../seo`).

Steps 1–2 throw on failure and pg-boss retries the whole job (all steps are idempotent). Missing
configuration skips a step (development has no Cloudflare credentials). Deploys purge `html`
through `POST /internal/cdn/purge` (platform module) with `reason = deploy:<sha>`.
