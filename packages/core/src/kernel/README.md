# Kernel of @sotf/core (WP-20)

Shared building blocks of every domain service (PLAN §2.6, §2.7, §2.9). Import from `@sotf/core`.

| Module | What |
|---|---|
| `errors.ts` | `DomainError(code, httpStatus?, detail, meta?)` and `errors.*` shorthands; the API renders them as RFC 9457 problems |
| `context.ts` | `Ctx` (db, jobs, clock, log, caches, actor, requestId, ip/ipHash, locale…), `createCtx`, `systemCtx`, `hasRole` |
| `clock.ts` · `ids.ts` | `Clock`/`systemClock`/`ManualClock`, `utcDay`; `newId()` (uuid v7) |
| `hashing.ts` | `ipHash` with a daily salt derived from `APP_SECRET`, `keyedHash` (e.g. KelvinSeek chatHash), `logHash` for logs |
| `logger.ts` | pino JSON with redaction and path-only HTTP serializers |
| `jobs.ts` · `queues.ts` | `Jobs.emit(tx, event)` (pg-boss `send` inside the transaction; the event id is the job id), `Jobs.enqueue(queue, payload, { tx })` (validated, debounced for coalescing queues), `ensureQueues` (retries, backoff, `dead-letter`) |
| `cache-tags.ts` | `tagsForEvent` (event → tags map of §2.7), `purge(jobs, tags, reason)` → `cdn.purge` |
| `notify.ts` · `listener.ts` · `lru.ts` | `publishRealtime(tx, message)` (SSE via `NOTIFY events`), `publishCacheInvalidation(tx, tags)` (`NOTIFY cache`), the single reconnecting `PgListener`, `TaggedCache`/`CacheRegistry` |
| `env.ts` | Zod helpers for the apps' `env.ts` (`commonServerEnv`, `envFlag`, `envInt`…) |

Rules: pass the transaction to `emit`/`enqueue`/`publish*` whenever the write must be atomic with
them; never read `process.env` here; never log PII in clear.
