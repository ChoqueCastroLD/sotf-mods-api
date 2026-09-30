# @sotf/api

Fastify 5 server of SOTF Mods v2 (PLAN §2.1, §5): `/api/v2` (same origin as the web and
`api.sotf-mods.com`), the legacy `/api/*` surface, the SSE hub, internal operations and the API
reference. Business logic lives in `@sotf/core`; this app only adapts HTTP to it.

## Entry points

| File | Run | What |
|---|---|---|
| `src/server.ts` | `pnpm --filter @sotf/api dev` · `node dist/server.js` | HTTP server (PORT 3001), graceful shutdown on SIGTERM |
| `src/migrate.ts` | `node dist/migrate.js [up\|status\|down …]` | One-off migrate task: `@sotf/db` runner + pg-boss schema + guard, with `MIGRATIONS_DATABASE_URL`; the SQL files ship in `dist/migrations` |
| `src/backfill.ts` | `node dist/backfill.js B7 [--apply] [--batch-size 2000] [--wait]` | Enqueues `backfill.run` for the worker (dry run unless `--apply`) |

`pnpm --filter @sotf/api build` bundles the three entries with tsdown (workspace packages inlined,
npm dependencies external — list every runtime dependency in `package.json`).

## Local development

- `pnpm dev` from the root (or `pnpm --filter @sotf/api dev`) runs `src/server.ts` with
  `node --watch`. The environment is validated by `src/env.ts` (Zod; the only reader of
  `process.env`); outside production it first loads the root `.env` without overriding variables
  already set (`SOTF_NO_DOTENV=1` disables it). `APP_SECRET` and `INTERNAL_SECRET` (≥ 32 chars),
  `PUBLIC_SITE_URL` and `DATABASE_URL` are required.
- The `dev` script listens on `127.0.0.1:47301`, where the web expects it (`INTERNAL_API_URL`);
  `PORT`/`HOST` exported in the shell override it. Outside the dev script `PORT` defaults to 3001
  (the Coolify port).
- The database comes from `pnpm infra:up && pnpm db:seed:dev --small`; the API docs are served at
  `http://127.0.0.1:47301/api/docs`.
- Environment reference per deployment: `ops/coolify/env/api.env.example`; operations:
  `docs/operations/`.

## Writing a module

`src/modules/<domain>/index.ts` default-exports `defineModule`; `pnpm gen` updates
`src/modules/_registry.gen.ts`. Routes are **contracts** from `@sotf/contracts`, never hand-written:

```ts
import { catalogEndpoints } from '@sotf/contracts';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'catalog',
  register(m) {
    m.implement(catalogEndpoints.getMod, async ({ params, ctx, cache }) => {
      const mod = await getModDetail(ctx, params.id); // core service; throws DomainError
      cache({ id: mod.id });                          // entity values of the contract's cache tags
      return mod;                                     // validated/serialised with the response DTO
    });
  },
});
```

From the contract the platform derives: method and path, Zod validation (422 `VALIDATION_FAILED`
with `errors[]`), response serialisation, the auth level (`public`/`session`/`verified`/
`moderator`/`admin`/`internal`), CSRF rules, the rate-limit bucket, cache headers
(`Cache-Control` + `Cloudflare-CDN-Cache-Control` + `Cache-Tag` + ETag) and the error format
(problem+json for v2, the legacy envelope for `errorFormat: 'legacy'`). Handlers get `ctx` (core
`Ctx`: actor, request id, hashed IP, jobs, clock, logger), `params`, `query`, `body`, `request`,
`reply` and `cache()`. A module may also provide the `sessionResolver` (WP-30); without one every
request is anonymous. `app.platform.rateLimiter.consume(name, key, { max, window })` covers
per-account/per-email limits.

## Platform behaviour

- **Errors**: `DomainError` → RFC 9457 `application/problem+json` with `requestId` (= `cf-ray` or
  a uuid v7, echoed as `X-Request-Id`); legacy routes → `{"status":false,"error":…,"message":…}`
  with `Content-Type: application/json` (`sendExactJson` keeps it byte-exact). Errors are
  `no-store`; 5xx never leak details.
- **CSRF** (`plugins/csrf.ts`): unsafe methods need `Sec-Fetch-Site: same-origin` or a trusted
  `Origin` (PUBLIC_SITE_URL + `CSRF_TRUSTED_ORIGINS`) and `Content-Type: application/json`
  (`text/plain` for `bodyKind: 'text'`, forms for `signed_token` contracts). `/internal/*` is exempt.
- **Rate limits** (`plugins/rate-limit.ts`): named buckets of `RATE_LIMITS`; defaults
  `anonymousRead` (v2 GET), `legacyRead` (legacy GET), `userWrite` (authenticated writes).
  `downloads` and `beacon` are soft: never 429, `request.overSoftLimit` is set instead.
- **CORS** (`plugins/cors.ts`): `*` without credentials on public v2 GETs and the legacy layer
  (preflight 204, 24 h); cookie endpoints are same-origin only.
- **Public responses never see the session** (the resolver is not called for `auth: public` +
  public cache) and never set cookies.
- **SSE** (`plugins/sse.ts`): `GET /api/v2/stream` (session) with channels `user:{id}` and
  `moderation`; one LISTEN connection (`events`), `: ping` every 25 s, `Last-Event-ID` replay of
  recent messages. Core publishes with `publishRealtime(tx, message)` (delivered on commit).
- **LRU caches**: `app.platform.caches.create({ name, ttlMs })` → tag-invalidated by
  `NOTIFY cache` (`publishCacheInvalidation`), cleared after LISTEN reconnections.
- **Docs**: `/api/v2/openapi.json` (generated from the contracts) and Scalar at `/api/docs`.
- **Health**: `/healthz` (liveness) and `/readyz` (DB, pg-boss producer, LISTEN; 503 degraded).
  pg-boss and LISTEN start in the background with retries, so the process answers `/healthz` while
  the database is unreachable. `@fastify/under-pressure` answers 503 `UNAVAILABLE` under load.

## Tests

```bash
pnpm --filter @sotf/api test       # unit
pnpm --filter @sotf/api test:int   # Testcontainers PostgreSQL 16 (or SOTF_TEST_DATABASE_URL)
```

`buildTestApp()` (`@sotf/api/testing`) builds the real app on a fresh migrated database with the
pg-boss schema; `t.as(actor)` authenticates a request, `t.sameOrigin()` and `t.internal()` build
CSRF/internal headers.
