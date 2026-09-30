# Legacy `/api/*` layer (WP-32)

Keeps the external clients of the old API working after the cut-over (PLAN §5.5, research/01 §2–§3):
**RedManager**, **UpdatesChecker** (typed .NET DTO), **KelvinSeek** and whatever else still calls
`api.sotf-mods.com/api/*` or `sotf-mods.com/api/*` (same process, the handlers never look at the
host). Business logic lives in `@sotf/core/legacy` and `@sotf/core/kelvinseek`; this directory
adapts HTTP and writes the bodies byte-exact.

| Tier | Routes | Behaviour |
|---|---|---|
| 1 | `GET /api/mods`, `/api/mods/:mod_id`, `/api/mods/:mod_id/check`, `/api/kelvinseek/prompt`, `/api/kelvinseek/clear` | Byte-compatible: same statuses, `Content-Type`, keys, types, nullability and **key order** as the golden fixtures |
| 2 | `/api/mods/slug/:u/:s`, `/api/mods/find`, `/api/mods/featured`, `/api/builds/featured`, `/api/stats`, `/api/stats/builds`, `/api/categories`, `/api/users/:slug`, `/api/users/:slug/stats`, `GET /api/comments`, `/api/mods/:mod_id/download-stats` | Frozen; `Deprecation: true`, `Sunset`, `Link: <https://sotf-mods.com/developers>; rel="deprecation"`. Download numbers come from the daily aggregates |
| 3 | auth, favorites, approve/unapprove/favorite, uploads, publish, release, details, avatar, `POST /api/comments`, `/api/kelvin-gpt*` | `410` + `{"status":false,"error":"GONE","message":"This endpoint was retired in sotf-mods v2. See https://sotf-mods.com/developers"}` for every method (bodies never parsed) |

The download aliases (`/api/mods/:id/download/:v`, `/api/mods/slug/:u/:s/download/:v`) live in
`downloads/` (WP-31).

## Files

| File | What |
|---|---|
| `index.ts` | `createLegacyModule(options)` (clock, LRU TTL, KelvinSeek model/timeout/limits, usage flush, Sunset) and the default module |
| `route.ts` | `legacyRoute()`: registers a route from its `@sotf/contracts/legacy` endpoint (validation, CORS, rate-limit bucket, cache headers, legacy errors come from the platform) and sends JSON as `application/json` without charset; Tier 2 headers; 15 s tag-invalidated LRU of bodies |
| `serializers.ts` | Hand-written builders in the exact legacy key order + snake_case aliases (`LEGACY_SNAKE_ALIASES`) |
| `mods.ts` · `site.ts` · `kelvinseek.ts` | Route groups |
| `retired.ts` | Tier 3 through prefix not-found handlers (no body parsing, no cookie-CSRF: the legacy surface has no cookies) |
| `usage.ts` | UA/Origin per route and day → `"AnalyticsEvent"(kind='legacy_call')`, flushed every minute and on shutdown |

## Rules kept on purpose

- `GET /api/mods`: `type` defaults to `Mod` unless `modIds` is given; `approved` absent = no approval
  filter (v2: published, archived, unlisted and pending-with-checks); `nsfw=true` only NSFW, else no
  NSFW; `versions` = the **lowest version by string order**; `dependencies` as an array;
  `latestVersionSize` `""`; numbers never `null`; ties broken by `id`; `limit` 1–1000 else 422.
- Detail: every visible version in **descending string order**, raw `dependencies` string,
  `downloadUrl` unencoded; 404 (`"No se encontró el recurso."`) for rejected/removed mods.
- `check`: node-semver `gt` (ported in `@sotf/core/legacy/semver.ts`); invalid versions → 422.
- KelvinSeek: literal command list, prompt and fallback; `text/plain;charset=utf-8`; always 200 except
  422 for a missing parameter and the platform's 429 (`kelvinseek` bucket, 20/min per chat + IP).

## Tests and acceptance

```bash
pnpm --filter @sotf/api test -- test/legacy          # unit
pnpm --filter @sotf/api test:int -- test/legacy      # PostgreSQL 16 + simulated OpenAI
# Contract harness on the dev seed (until the module is in the generated registry):
DATABASE_URL=postgres://…/sotf APP_SECRET=… INTERNAL_SECRET=… PUBLIC_SITE_URL=… \
  node apps/api/test/legacy/serve.ts --port 47301 &
pnpm contract:legacy --base-url http://127.0.0.1:47301 --mode shape --dotnet on
```
