# `src/lib/security` — browser-facing security of the web (WP-93)

| File | What |
|---|---|
| `csp.ts` | The Content Security Policy: build-time part (`cspConfig()` for `astro.config.mjs`) and runtime completion (`finalizePolicy`, `cspModeFor`, `fallbackPolicy`). |
| `headers.ts` | `applySecurityHeaders()`, called by the server entry for every response: CSP (enforcing or report-only), HSTS, `X-Frame-Options`, `Permissions-Policy`, COOP, `nosniff`, `noindex` outside production. |
| `../../middleware/security.ts` | Fetch Metadata resource isolation (`securityMiddleware`): refuses cross-site writes and cross-site subresource loads of our documents. |

## The policy

Astro renders the per-page policy as a header (hashes of every bundled script and stylesheet
included). `headers.ts` then adds, per environment:

- `frame-ancestors 'none'` (`*` on `/embed/*`) — clickjacking protection, also kept enforcing
  while the rest of the policy is report-only;
- `upgrade-insecure-requests` when the site is served over HTTPS;
- `report-uri <site>/api/v2/security/csp-report` + `report-to csp` and the matching
  `Reporting-Endpoints` header (collector: `apps/api/src/plugins/security/csp-report.ts`);
- the configured `R2_PUBLIC_BASE_URL` origin when it is not `https://r2.sotf-mods.com`, and
  `http://127.0.0.1:*`/`http://localhost:*` in development and preflight (local S3 service).

Non-HTML responses (JSON, XML, text, redirects) get `default-src 'none'; frame-ancestors 'none'`.

### Rollout (PLAN §9.1)

| `SITE_ENV` | Default mode |
|---|---|
| `staging` | report-only (one week, then set `CSP_MODE=enforce`, see docs/backlog/WP-93.md) |
| `production`, `preflight`, `development` | enforce |

`astro dev` renders no policy (Vite injects inline styles and HMR scripts), so development only
gets `frame-ancestors`; run `astro build && node dist/server/entry.mjs` to see the real policy.

### Why no `'strict-dynamic'`

Astro emits its bundles as external module scripts **without** SRI `integrity`. Under
`'strict-dynamic'` CSP3 browsers ignore `'self'` and host sources, and a listed hash only matches an
external script that carries `integrity` — so every page script would be blocked (verified with
Chromium while building WP-93). The policy is therefore an allowlist: `'self'` + inline-script
hashes + the exact third-party script origins (AdSense/CMP, Turnstile). Revisit when Astro adds
`integrity` to its script tags.

### Adding something to the page

- **Inline script** (`<script is:inline>`): add its source to `INLINE_SCRIPTS` in `csp.ts`.
- **A library that injects `<style>` at runtime**: hash its CSS in `thirdPartyStyleHashes()`
  (read it from the installed package, as sonner and Base UI are, so upgrades stay in sync).
- **A new third-party origin**: add it to the right directive in `CSP_DIRECTIVES` (never widen
  `default-src`), and list it in `/privacy` if it receives personal data.
- **An iframe**: add the origin to `frame-src`.

Never add `'unsafe-inline'` to `script-src`, `'unsafe-eval'`, `data:` to `script-src`, or `*`.
