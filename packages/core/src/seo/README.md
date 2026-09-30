# SEO services (`@sotf/core/seo/index`, WP-61)

- `indexnow.ts`: IndexNow client (`submitIndexNow`, batches of ≤ 10 000 URLs to
  `api.indexnow.org`, `keyLocation = {site}/{key}.txt`); 429/5xx are retryable, other 4xx are
  permanent. `localizedUrls`/`indexNowUrls` build absolute URLs of every locale.
- `paths.ts`: which canonical paths a purge touches (`indexNowSubjects` + `pathsForSubjects`):
  mod/build pages (+ versions page, author profile, category) for listing events (`sitemap` tag),
  public kits for `kit.*`, profiles for `user.profile_updated`. NSFW and pending content is never
  announced; deploy purges announce nothing.

The web side of SEO/GEO (sitemaps, feeds, `llms.txt`, oEmbed, `.md` alternates, the per-mod FAQ)
lives in `apps/web/src/lib/seo/` (the web never imports `@sotf/core`).
