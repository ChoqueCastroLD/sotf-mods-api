# @sotf/legacy-contract

Harness that proves the v2 legacy layer (`/api/*`, PLAN §5.5) does not break the external clients
of sotf-mods.com: **RedManager** 1.1.10, **UpdatesChecker** (typed Newtonsoft DTO) and
**KelvinSeek** (research/01 §1, §7). WP-24.

```bash
pnpm contract:legacy                                        # self-test against the simulated server
pnpm contract:legacy --base-url http://127.0.0.1:3001       # a v2 API (local compose or staging)
pnpm contract:legacy --base-url http://127.0.0.1:3001 --web-url http://127.0.0.1:4321
pnpm contract:legacy --base-url https://beta.sotf-mods.com --compare-with https://api.sotf-mods.com
pnpm contract:legacy --help
pnpm --filter @sotf/legacy-contract test                    # unit + acceptance against the simulated server
pnpm --filter @sotf/legacy-contract test:int                # .NET checker (needs Docker)
```

Exit code 0 = no failed check. `--json`/`--report <file>` give the machine-readable report.

## Suites

| Suite | What it proves |
|---|---|
| `fixtures` | Each of the 38 golden fixture routes: status, `Content-Type` (`application/json`, no charset), strict schema + **key order** (`validateLegacy` of `@sotf/contracts`), values after normalisation, `meta` arithmetic, UpdatesChecker value fields, well-formed `Deprecation`/`Sunset` |
| `check` | `/api/mods/:id/check` on live data: the three exact answers (node-semver `gt`, `v` prefix), 404, non-2xx for non-semver and builds |
| `redmanager` | RedManager's flow with the types of `mods.ts` (`src/redmanager.ts`): the three tabs walk every page (`?&approved=…&orderby=newest&page=N&nsfw=…`, stable totals, no duplicates), search, detail refresh (`dependencies` stays a string; one-character ids answer JSON), installs through `/mods/{user}/{slug}/download/{latestVersion}` with a client **without User-Agent that does not look at the status and follows redirects** (first hop 302, final body = the file), CORS for `https://tauri.localhost` and `tauri://localhost` |
| `updateschecker` | `?limit=n&modIds=csv` (every requested id returned, other types too) and `?&page=N` for every page: 2xx and value fields never null; bodies captured for `dotnet` |
| `kelvinseek` | `text/plain;charset=utf-8` `"{command}\|{answer}"` with a known command, `no-store`, 422 JSON without a parameter, `Chat cleared` |
| `downloads` | 302 (never 301/200) to the storage URL with the key encoded segment by segment for keys with space, `'`, `+` and `()`; file reachable; `/api` aliases (and `?ip=&agent=` ignored); `/mods/undefined/<slug>/download/undefined` and a wrong user resolve; 404 for unknown mod/version; HEAD without body; **counting**: HEAD, `Range: bytes=100-` and a bot UA do not count, a GET without UA counts exactly once (read back from `_count.downloads`) |
| `shadow` | With `--compare-with`: every Tier 1/2 GET read fixture route from the reference and the target, compared with the same rules |
| `dotnet` | The UpdatesChecker bodies through the real DTO (`dotnet/`, `mcr.microsoft.com/dotnet/sdk:10.0` + Newtonsoft.Json 13.0.4) in Docker (`--dotnet auto\|on\|off`) |

## Comparison rules

- **Normaliser** (`src/normalize.ts`): `LEGACY_VOLATILE_FIELDS` (`downloads`, `lastWeekDownloads`,
  `favoritesCount`, `commentsCount`, `updatedAt`), `averageRating`, `reviewsCount`, every
  `_count.*` and per-fixture paths (stats) become a token that **keeps the JSON type**; ties of the
  sort key are re-ordered by `id` (deviation `stable-order`); hidden comments are dropped.
- **Comparator** (`src/compare.ts`): deep equality including object key order.
- **Policies** (`src/expectations.ts`): the legacy outcome is always accepted; a v2 outcome only
  with its deviation (`validation-422`: 500 → 422 `VALIDATION`; `tier3-gone`: 410 with the exact
  `GONE` body). Lists whose membership depends on the v2 statuses (`approved` absent/false,
  `modIds` without type, featured, comments) are compared **by id**: matched items must be equal.
  Error bodies compare `status`, `error` and the Spanish 404 literal.
- **Deviations** (`src/deviations.ts`): the ten of PLAN §5.5 (`LEGACY_DEVIATIONS`) plus
  `modids-all-types`, `tier3-gone` and `taxonomy-seed`; the report lists the ones each check needed.
- `--mode shape` skips value equality (schema, key order, statuses and invariants only), for data
  sets that are not the production snapshot (e.g. the dev seed).

## Production safety

`src/guard.ts` runs before any socket is opened: against `sotf-mods.com`, `www.`, `api.` and `r2.`
only GET/HEAD, never download, favorite, approve/unapprove, KelvinSeek or KelvinGPT paths (checked
on every redirect hop too), and at most 2 requests per second. With a production target the
`downloads` and `kelvinseek` suites, the installs and the CORS preflight are skipped.

## Simulated server

`src/mock/` replays the fixtures byte for byte and answers everything else from a dataset built
from them plus deterministic filler rows, so every list total matches its fixture (tested) and the
flows can walk all pages. It implements the v2 semantics of PLAN §5.5 (contracts' query parser,
302 downloads to a local "R2" with R2's `+` behaviour, counting rules, KelvinSeek fallback). Hooks
inject regressions; the tests prove each one is caught. Run it alone with
`pnpm --filter @sotf/legacy-contract mock --port <port>`.

## Layout

`fixtures/` byte-identical copy of `docs/plan/research/fixtures/01-compat` (tested) · `src/cli.ts`
CLI · `src/index.ts` `runHarness` · `src/suites/*` · `src/redmanager.ts` RedManager types ·
`src/kelvinseek.ts` command list (copied from the legacy API) · `src/downloads.ts` key encoding ·
`dotnet/` checker (DTO in `Dto.cs`, `Program.cs`, `Dockerfile`).
