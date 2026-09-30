# R2 pass of the migration (WP-84)

Backfills that need the objects in R2 (PLAN §6.9 B8, B15, B17 and the manifest part of B4) and the
one-off category suggestions. The operator runbook is
[`ops/runbooks/migration/r2-pass.md`](../../../ops/runbooks/migration/r2-pass.md).

| What | Where | Writes |
|---|---|---|
| **B15** R2 pass: HEAD, streamed SHA-256, Range-read manifests, `VersionInspection`, declared game/loader version and platform, `Mod.logColor`, `buildMeta` + thumbnails of builds, AVIF/WebP variants of every legacy image, OG cards | worker, `apps/worker/src/jobs/backfill` (`backfill.run` `{ name: 'B15' }`) | v2 columns/tables only; new R2 keys (`media/…`, `og/…`). Legacy objects are only read |
| **B4M** `type` NULL/B4 → `Library` when the manifest says so | `manifest-fixes.ts` | `Mod.type` (legacy, audited `B4M`) |
| **B8** `shortDescription` ← manifest description when the legacy sanitiser explains the loss exactly | `manifest-fixes.ts`, `legacy-sanitize.ts` | `Mod.shortDescription` (legacy, audited `B8`) |
| **B17** `Content-Type` + `Content-Disposition` of the legacy zips/JSON, `Content-Type` of mislabelled images (sniffed) | `b17.ts`, `s3.ts`, `content-type.ts` | R2 object metadata (in-place `CopyObject` `REPLACE`, ETag-guarded) + manifests in `out/` |
| Category suggestions (rules + optional LLM) → CSV for the admin import | `suggest-categories.ts` | only the CSV |
| ≈ 20 real objects for a local rehearsal | `cli/copy-sample.ts` | the **local** emulator only |

## Commands

From the repository root (`--help` on each):

```bash
pnpm --filter @sotf/api backfill B15 [--apply] [--wait]           # enqueue B15 (worker must run)
pnpm --filter @sotf/migration-tools r2:manifest-fixes [B4M,B8] [--apply] [--confirm <db>]
pnpm --filter @sotf/migration-tools r2:b17 [--apply] [--confirm-bucket sotf-mods] [--only version|image] [--limit n]
pnpm --filter @sotf/migration-tools r2:suggest-categories [--llm] [--out file.csv]
pnpm --filter @sotf/migration-tools r2:sample [--dry-run]           # local emulator only
```

Everything defaults to a **dry run**. Writing to anything but local services needs an explicit
confirmation (`--confirm <db>` for the database, `--confirm-bucket <bucket>` for R2).

## Guarantees

- **Idempotent**: B15 selects versions without `VersionInspection`, media still `pending` and
  entities without `ogImageKey`; B8/B4M only match rows that still hold the legacy value; B17 skips
  objects whose headers are already right. A second run changes nothing.
- **Audited**: B8 and B4M write the previous value to `"DataFixAudit"` in the same statement
  (`pnpm db:revert-fix B8`, `… B4M`; revert B4M before B4). Every run is in `"MigrationRun"`.
- **B17 safety**: `CopySourceIfMatch` with the ETag of the "before" manifest (an object changed
  since the plan is refused), user metadata and other headers carried over, multipart objects
  (ETag `…-N`) skipped unless `--allow-etag-change`, and an "after" manifest with `etagIntact` per
  object; the command exits 1 on any failed copy, changed ETag or header that did not stick.
- **B8** only restores when `sanitize(form(manifest.description)) === shortDescription` holds
  exactly (research/02 §4.1: 3 known cases); texts whose HTML parse is not plain text are never
  touched.

## CSV of `r2:suggest-categories`

UTF-8, RFC 4180, CRLF, header row. The import applies `modId`, `categorySlug` and `tagSlugs`
(`;`-separated); the other columns explain the suggestion:
`modId,categorySlug,tagSlugs,slug,name,currentCategory,source,confidence,ruleCategory,ruleConfidence,ruleKeywords,llmCategory,llmConfidence,llmReason`.
`source` is `rules`, `type` (libraries), `llm` or `current`.
