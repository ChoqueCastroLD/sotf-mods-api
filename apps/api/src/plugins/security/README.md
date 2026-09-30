# `plugins/security` — API hardening (WP-93)

`setupSecurity(app, { env })` is registered by `buildApp()` right after `setupCacheHeaders()`:

| File | What |
|---|---|
| `headers.ts` | HSTS 6 months (`includeSubDomains`, no preload), restrictive `Permissions-Policy`, `X-Robots-Tag: noindex`, and `private, no-store` + no edge headers on every response that sets a cookie. helmet (in `app.ts`) keeps the JSON-API CSP, `nosniff`, `X-Frame-Options`, COOP/CORP and `Referrer-Policy`. |
| `private-data-guard.ts` | A contract response cacheable by the CDN (`cache.kind: 'public'`) that carries a field of `PRIVATE_RESPONSE_KEYS` (`@sotf/core/security/policy`) is demoted to `private, no-store` and logged; outside production it fails with `500` so the leak is caught before release. |
| `csp-report.ts` | `POST /api/v2/security/csp-report`: collector of the web CSP reports (`application/csp-report` and `application/reports+json`), origin-filtered, extension noise dropped, URLs stripped of query strings, aggregated per minute, soft `beacon` bucket. Always `204`. The route sets `config.csrfExempt` (reports carry no credentials). |

## Related policies

- `packages/core/src/permissions/policy.ts` — the reviewed action × persona × ownership matrix
  of `can()` (`reviewPermissionMatrix()` returns the mismatching cells; empty = consistent).
- `packages/core/src/security/policy.ts` — data-access policy of **every** database table
  (exposure, writers, private and secret columns, retention of PLAN §9.3);
  `reviewTablePolicies(tablesFromSchema(schema))` flags unclassified tables, stale entries and
  unknown columns, so a new table cannot ship unreviewed.
- `tooling/scripts/secrets-scan.ts` — secrets in the working tree, the index or the whole git
  history (redacted output).

## Dependency policy (PLAN §9.1 "Cadena de suministro")

1. **Pinned and aged**: every dependency is an exact version from the `pnpm-workspace.yaml`
   catalog; `minimumReleaseAge: 1440` refuses versions younger than 24 h. Exceptions are
   version-scoped and dated.
2. **No install scripts by default**: only the allowlisted packages (sharp, `@node-rs/*`, esbuild)
   may run build scripts (`allowBuilds`).
3. **Frozen lockfile in CI**; a lockfile conflict is resolved by taking `main` and running
   `pnpm install --lockfile-only`.
4. **Audit**: `pnpm audit --prod` runs weekly and on every dependency change. Gate: **0 high or
   critical** findings in production dependencies. A finding is fixed by upgrading the direct
   dependency; when the vulnerable package is transitive and the parent has no fixed release, a
   version-scoped `overrides` entry in `pnpm-workspace.yaml` pins the patched version (removed as
   soon as the parent catches up). Moderate/low findings are triaged within 30 days (fixed, or
   documented as not reachable).
5. **New dependencies**: justify them in the WP backlog (size, maintenance, licence, install
   scripts); prefer the platform or an existing dependency. No packages with `postinstall`
   downloads, no git/URL dependencies.
6. **Secrets**: `pnpm check:forbidden` on every commit, `secrets-scan --history` before any push
   of the repository (the v2 branch becomes public on GitHub), rotation per PLAN §9.4 for anything
   found.

### Audit status at WP-93 (2026-09-30)

`pnpm audit --prod`: 2 high, 6 moderate, 3 low — all transitive:

- `undici` < 7.29.1 (2 high: WebSocket subprotocol DoS, BalancedPool TLS bypass; plus moderate/low)
  via `@scalar/fastify-api-reference` → `@scalar/openapi-parser` → `@scalar/json-magic` (API docs
  page). Fix: override `undici@<7.29.1` → `7.29.1` (published 2026-09-04, past the 24 h rule).
- `fflate` < 0.7.5 (moderate: ZIP64 infinite loop) via `satori` (OG images, worker/core). Fix:
  override `fflate@<0.7.5` → `0.7.5`.

Both overrides live in `pnpm-workspace.yaml`, which WP-93 does not own: they are recorded in
docs/backlog/WP-93.md for the integrator.
