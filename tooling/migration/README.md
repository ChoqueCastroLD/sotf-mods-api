# @sotf/migration-tools

Development data and the data migration of SOTF Mods v2 (PLAN §6.9–§6.14): a production-like
seed built from public data, the backfills B1–B14, the verification SQL and the operator CLIs.
Nothing here ever deletes or overwrites legacy data except the two **audited** fixes (B4, B5),
which are reversible row by row.

## Commands (from the repository root)

| Command | What it does |
|---|---|
| `pnpm db:reset:dev` | Drops and recreates the local dev database (starts the `sotfv2` compose PostgreSQL if needed). Local hosts only. |
| `pnpm db:seed:dev [--small] [--reset] [--no-dump]` | Snapshot + synthetic data → migrations → backfills → verify-snapshot diff + invariants → `out/dev-seed.dump`. Full ≈ 3.5 min (1 977 059 downloads), `--small` ≈ 12 s (10 000 downloads). |
| `pnpm db:backfill --all \| --delta \| B1,B11 [--dry-run] [--batch-size n]` | Backfills (idempotent, resumable, batched, recorded in `"MigrationRun"`); then applies the migrations that were waiting for them (0038 after B5). A non-local database needs `--confirm <db>`. `--list` shows them. |
| `pnpm db:invariants [--json]` | The 10 invariants of PLAN §6.11 (+ description links). Read-only; exit 1 when one is red. |
| `pnpm db:verify-snapshot [--out f] [--compare before.json] [--diff a b] [--strict]` | Legacy checksums (legacy columns only, `ModDownload` per 100 k ids) and v2 checksums; the diff accepts only audited fixes. Read-only. |
| `pnpm db:revert-fix <fixId> [--row ids] [--dry-run]` | Reverts an audited fix from `"DataFixAudit"` (B4, B5, `admin-grant`…). Rows changed since the fix are reported as conflicts. |
| `pnpm admin:grant --email <e> --role admin\|moderator\|user` | Grants a role (the account must exist); moderator/admin also set the legacy `isTrusted` (audited). Writes `"AuditLog"`. |
| `pnpm --filter @sotf/migration-tools db:profile [--json]` | Profiling queries Q-P0…Q-P10 (research/02 §14.1). Read-only. |
| `pnpm --filter @sotf/migration-tools db:restore:prod-copy <file>` | Restores a production backup into the local `sotf_prod_copy` (rehearsals only). |
| `pnpm --filter @sotf/migration-tools db:anonymize --confirm sotf_prod_copy [--dump]` | `sql/anonymize.sql` on that local copy → `out/dev.dump`. |
| `node tooling/migration/replay-delta.ts --from <url> --to <url> --since-watermarks [--apply]` | Disaster runbook R4: re-injects rows created after the restored dump (dry run by default). |

The database comes from `MIGRATIONS_DATABASE_URL`, `DATABASE_URL` (root `.env` is loaded) or
`postgres://sotf:sotf@127.0.0.1:47432/sotf`. Relative paths are resolved from where you ran `pnpm`.

## The development seed

Order = production order: baseline `0000` only → legacy rows → `db:migrate` (expand) →
verify-snapshot *before* → B1–B14 → deferred migrations → verify-snapshot *after* + diff →
invariants → dump. The seed refuses a non-empty database and fails if any count, the diff or an
invariant is off.

- **Public snapshot** (`snapshot/public-api-2026-09-29/`, read-only GETs of 2026-09-29, public
  data only): 25 categories, 257 mods (28 unapproved, 19 `type NULL`, 15 non-canonical slugs),
  612 versions (one on the lost `files.` host), 126 gallery images, 278 comments. Authors keep
  their real ids; the 133 commenters without a mod get ids ≥ 100 000 (slug order).
- **Synthetic, deterministic** (`SEED` in `src/constants.ts`): users up to 3 883
  (`<slug>@example.test`, password `sotf-dev-2026!`, argon2id with Bun's parameters), 234 follows
  spread by `favoritesCount`, 1 977 059 `ModDownload` rows by `COPY` (per version exactly its
  legacy count, spread between its release and the next one, `lastWeekDownloads` in the last week,
  ids growing with time, 30 % `ip='undefined'`, some `'null'`/`''`/proxy chains), 434 orphan
  downloads (`modVersionId NULL`), expired sessions and reset tokens.
- **Injected rare cases**: two emails that differ only in case (B6 reports them and `0045` stays
  deferred, as in production until the owner decides), 3 duplicated follows (B5), one `$2b$10$`
  bcrypt hash, plus the snapshot's own cases (entities such as `&lt;3`, `type NULL`, odd slugs,
  the missing file).
- `--small`: the same data with 10 000 downloads (counts scaled by largest remainder and
  `Mod.downloads` adjusted; the invariants read the threshold from the `seed:dev` record).

Restore a dump instead of reseeding:
`docker run --rm -i --network host postgres:16-alpine pg_restore --no-owner --no-acl -d <url> < tooling/migration/out/dev-seed.dump`.

## Backfills (PLAN §6.9 with §14 decisions)

| # | Writes | Notes |
|---|---|---|
| B1 | `ModVersionDownloadDaily`, `SiteDownloadDaily` | Watermark on `ModDownload.id`, moved in the batch transaction; channel from `ip`; unique = 0. |
| B2 | `ModVersion.storageKey`/`status='file_missing'`, `ModImage.storageKey`/`mediaId`, `Mod.thumbnailMediaId`, `User.avatarMediaId`, `Media(purpose='legacy')` | URL-decoded keys; one `Media` per key. |
| B3 | `Mod.canonicalSlug`, `ModSlugHistory` (`legacy` + `canonicalized`), `UserSlugHistory` | `-2` on collisions within an owner. |
| B4 | `Mod.type` NULL → `Mod` | **Legacy column**, audited (`DataFixAudit` fixId `B4`). |
| B5 | `ModFavorite` duplicates / NULL rows → `ModFavoriteArchive` | **Legacy rows moved**, audited (`columnName='*'`); count and watermark kept for invariant 3. |
| B6 | `User.emailNormalized` | Collisions → `out/email-collisions.csv`; never merged. |
| B7 | `legacyTrusted`, `verifiedCreator`, `role='moderator'` for trusted users (§14.2) | Never downgrades a role. |
| B9 | `descriptionMd`/`Html` (`legacyHtml`, literal source), `changelogMd`/`Html` and `bodyMd`/`Html` (entities decoded; comments `lite` with mentions), `renderVersion` | Only rows whose `*Md` is NULL. |
| B10 | `ModDependency` from the CSV on the latest version | |
| B11 | `ModVersion.downloadsCount`, `ModStats`, `SiteStat`, `UserStats` | Writes only differing rows. |
| B12 | `Mod.status` (approved → published; **unapproved stay pending**, §14.1), `publishedAt`, `approvedAt`, `ModVersion.checksStatus`, hidden comments/reviews | `isApproved` never changes. |
| B13 | `Mod.platform`, `Mod.multiplayerRole` | |
| B14 | `User.emailVerifiedAt` for authors and commenters | |

B8 (manifest short descriptions) and B15–B18 belong to WP-84, WP-60 and WP-43. `--delta` runs B12,
B14, B1 and B11 for the cut-over (PLAN §6.13 D4).

## Verification

- `sql/verify-snapshot.sql`: section `legacy` (works before the expand too) and section `v2`
  (checksums with the audited fixes undone + deterministic checksums of everything the backfills
  write). Two `--all` runs must be `--strict`-identical; before vs after may differ only by
  audited fixes.
- `sql/invariants.sql`: invariants 1–10 of PLAN §6.11 as `ok`/`detail` rows; `src/invariants.ts`
  adds the description links of invariant 4 (a link that resolved in the legacy site must resolve
  in v2; links already broken in the legacy site are listed, not failed — 5 in the snapshot).
- `sql/profile.sql`, `sql/anonymize.sql`: see the commands above.

## Layout

`legacy/schema.prisma` (copy of the legacy Prisma schema) · `snapshot/` (public data, excluded
from Biome) · `sql/` · `src/seed/` (snapshot reader, dataset, COPY, loader, orchestration) ·
`src/backfills/` · `src/cli/` · `replay-delta.ts` · `out/` (git-ignored reports and dumps).

## Tests

`pnpm --filter @sotf/migration-tools test` (slugs, keys, dataset determinism and volumes, hashes,
diff rules, SQL files) and `test:int` (Docker/Testcontainers or `SOTF_TEST_DATABASE_URL`): the
`--small` seed end to end, second run = no-op, dry runs, B4/B5/admin-grant reverts, anonymisation,
hand-made edge cases (versions without mod, NULL follows, watermarks, collisions), replay-delta
and the CLIs' safety refusals.
