# @sotf/contracts

The shared contract of SOTF Mods v2 (PLAN §5, WP-11): Zod 4 DTOs, endpoint contracts, error codes,
pagination, domain events, job payloads, the typed API client, the OpenAPI 3.1 generator and the
legacy (v1) schemas generated from the 38 golden fixtures. Runtime-agnostic (no DOM or Node APIs);
no build step (`exports` point at `src/*.ts`).

## Layout

| File | Content |
|---|---|
| `src/<domain>.ts` | One file per domain: `auth`, `me`, `catalog`, `versions`, `downloads`, `uploads`, `studio`, `comments`, `reviews`, `follows`, `kits`, `compat`, `notifications`, `moderation`, `admin`, `search`, `stats`, `events`, `gamification`, `seo`, `legacy`, `manifest`, plus `internal` (health, CDN purge). Each exports its DTOs (with examples), constants/pure rules of the domain and `<domain>Endpoints`. |
| `src/common.ts` | Ids, dates, locales, handles, enums of the data model, `UserRefDTO`, `ModRefDTO`, `ImageDTO`… |
| `src/errors.ts` · `src/error-codes.ts` | Error codes → HTTP status, `ProblemDTO` (RFC 9457), `problem()`. `error-codes.ts` has no Zod. |
| `src/pagination.ts` | `PageQuery`/`pageOf()` (catalog) and `CursorQuery`/`cursorPageOf()` + opaque cursors (feeds). |
| `src/endpoint.ts` · `src/cache.ts` | `defineEndpoint`, auth levels, requirements, rate-limit buckets (`RATE_LIMITS`), cache policies and cache tags. |
| `src/dto.ts` | DTO registry (`dto()`, `examplesOf()`, `exampleOf()`) and the wire helpers for query/path params. |
| `src/domain-events.ts` | `DomainEvent` union (PLAN §2.7 + §7.3), `makeDomainEvent`, `DOMAIN_EVENT_EXAMPLES`. |
| `src/jobs.ts` | pg-boss queues, payload schemas, schedules, `JOB_PAYLOAD_EXAMPLES`. |
| `src/contracts.ts` | `apiContracts` (every endpoint by domain) and `allEndpoints()`. |
| `src/client.ts` | `createApiClient({ baseUrl, fetch })` → `api.<domain>.<name>(input)`. |
| `src/openapi.ts` | `buildOpenApiDocument({ audience, servers, version })` → OpenAPI 3.1. |
| `src/legacy.ts` · `src/legacy.gen.ts` | Legacy schemas (generated), `keyOrderIssues`/`assertKeyOrder`/`validateLegacy`/`orderKeys`, conventions and Tier 1/2 endpoints. |
| `src/routes.gen.ts` | Schema-free route table used by the client at runtime (generated). |
| `fixtures/legacy/` | Byte-identical copy of `docs/plan/research/fixtures/01-compat` (checked by a test). |

## Usage

```ts
import { createApiClient } from '@sotf/contracts/client';

// SSR: internal URL and the visitor's cookie. Islands/console: same origin ('').
const api = createApiClient({ baseUrl: env.INTERNAL_API_URL, headers: () => ({ cookie }) });
const mod = await api.catalog.getModBySlug({ params: { user: 'imaxel', slug: "axel's-mod-menu" } });
await api.follows.followMod({ params: { id: mod.id }, body: { notify: true } });
```

- Errors throw `ApiError` (`code`, `status`, `problem`, and `legacy` for `/api/*` routes).
- Redirect endpoints (downloads) resolve to `{ status, location }` without following the redirect.
- Unsafe methods always send `Content-Type: application/json` (beacons: `text/plain`) and a JSON
  body (`{}` when the contract has none), as the CSRF rule of PLAN §5.1 requires.
- Query strings are serialised with sorted keys (stable cache keys), repeated keys for arrays and
  `1`/`0` for booleans.
- `validateWith: apiContracts` parses every JSON response with its schema (server/dev only).
- The client's runtime graph is `client → endpoint, error-codes, routes.gen` only (a test enforces
  it): importing `@sotf/contracts/client` ships neither Zod nor any schema. In browser code import
  subpaths (`@sotf/contracts/client`, `@sotf/contracts/manifest`…) rather than the barrel.

Server side (WP-20): register routes from `apiContracts` (each endpoint has `method`, `path`,
`params`, `query`, `body`, `response`, `auth`, `requires`, `cache`, `rateLimit`, `errorFormat`),
render `cacheHeaders(policy, resolveCacheTags(policy.tags, values))` where `{id}`/`{slug}` are the
**entity** values the handler resolved (a mod id for `mod:{id}`, a user id for `user:{id}`), and
serve `buildOpenApiDocument({ version: gitSha })` at `/api/v2/openapi.json`.

## Conventions

- Response DTOs are `z.object` (clients tolerate new fields: changes within v2 are additive only);
  request bodies are `z.strictObject` (unknown keys → 422). Legacy schemas are strict **and** keep the
  exact key order of production.
- Every request/response body is a registered DTO with at least one example; examples are
  type-checked against the schema input and validated by the tests (Zod and the published JSON
  Schema).
- Query/path numbers and flags accept both typed values and their URL strings (`wireInt`,
  `wireFlag`, `wireList`); the OpenAPI document shows the wire type.
- v2 kinds are `mod | library | build` (`ModCardDTO.kind`, PLAN §6.8) — the legacy `type`
  (`Mod | Library | Build`) only exists in the legacy schemas.
- Decisions not fixed by the plan (documented in `docs/backlog/WP-11.md`): image upload limits,
  build size classes (S < 500 ≤ M < 2 000 ≤ L < 8 000 ≤ XL elements), extra endpoints
  (`/me/kits`, `/me/follows/lookup`, `/admin/loader-releases`, `DELETE /comments/:id/solution`) and
  the `REAUTH_REQUIRED` error code.

## Legacy schemas

`scripts/gen-legacy.ts` reads the fixtures and `scripts/legacy-spec.ts` (names of nested objects,
nullability of the Prisma columns, UpdatesChecker value types) and writes `src/legacy.gen.ts`: key
order and observed types come from production; every declared type is checked against every
sample. `validateLegacy(schema, body)` = strict schema + key order.

## Scripts

```bash
pnpm --filter @sotf/contracts test       # vitest (+ type tests of the client via tsc)
pnpm --filter @sotf/contracts typecheck  # src with the library preset, tests/scripts with Node types
pnpm --filter @sotf/contracts gen        # regenerate legacy.gen.ts and routes.gen.ts (also run by `pnpm gen`)
```
