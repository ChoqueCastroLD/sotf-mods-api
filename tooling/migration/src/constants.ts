/**
 * Fixed values of the development data set (PLAN §6.12) and of the verification (PLAN §6.11).
 */
import { fileURLToPath } from 'node:url';

/** Root of this package. */
export const PACKAGE_DIR = fileURLToPath(new URL('..', import.meta.url));

/** Public API snapshot (read-only GETs of 2026-09-29; public data only). */
export const SNAPSHOT_DIR = fileURLToPath(new URL('../snapshot/public-api-2026-09-29/', import.meta.url));

/** Verification SQL (profile, verify-snapshot, anonymize, invariants). */
export const SQL_DIR = fileURLToPath(new URL('../sql/', import.meta.url));

/** Generated reports (email collisions, snapshots, dumps). Ignored by git. */
export const OUT_DIR = fileURLToPath(new URL('../out/', import.meta.url));

/** Moment the snapshot was taken (the legacy counter cron had just run at 03:30 UTC). */
export const SNAPSHOT_AT = '2026-09-29T03:30:00.000Z';

/** Sons of the Forest early-access release: no account is older than this. */
export const SITE_EPOCH = '2023-02-23T00:00:00.000Z';

/** Password of every development account (documented, never used outside local data). */
export const DEV_PASSWORD = 'sotf-dev-2026!';

/**
 * argon2id (m=65536, t=2, p=1: Bun's `Bun.password.hash` defaults and the v2 target parameters)
 * of {@link DEV_PASSWORD} with a fixed salt, so the seed is deterministic and needs no hashing at
 * run time. `sql/anonymize.sql` embeds the same value; a unit test verifies both.
 */
export const DEV_PASSWORD_ARGON2ID =
  '$argon2id$v=19$m=65536,t=2,p=1$UbOPxj/gSeBm7kdfV5au9g$Iq1kbYe86SFiYH7AupL3YHoW5FCpMV/S/er3geF8AVA';

/** bcrypt (`$2b$`, cost 10) of {@link DEV_PASSWORD}: the rare legacy hash format of PLAN §6.10. */
export const DEV_PASSWORD_BCRYPT = '$2b$10$SZMNvh9eQc/k5ibdT3Ys7eGlaGYpJ9kDDynbfsTuir8.GNWaQ5f62';

/** Seed of the synthetic generator: change it and every synthetic row changes. */
export const SEED = 0x50_7f_20_26;

/** Volumes measured on 2026-09-29 (research/02 §3.1) that the full seed reproduces exactly. */
export const EXPECTED = {
  users: 3883,
  mods: 257,
  versions: 612,
  comments: 278,
  favorites: 234,
  downloads: 1_977_059,
  orphanDownloads: 434,
} as const;

/** Rare cases injected on top of the snapshot (PLAN §6.12 point 4). */
export const INJECTED = {
  duplicateFavorites: 3,
  expiredTokens: 180,
  passwordResetTokens: 4,
  /** Two accounts whose emails differ only in case (B6 must report the collision). */
  caseCollisionEmails: ['Survivor.Twin@example.test', 'survivor.twin@example.test'],
} as const;

/** Downloads of the `--small` seed (fast tests). */
export const SMALL_DOWNLOADS = 10_000;

/** First id given to commenters that have no known id (the public API does not expose it). */
export const COMMENTER_ID_BASE = 100_000;

/** Public R2 bucket and host of the legacy URLs (backfill B2). */
export const PUBLIC_BUCKET = 'sotf-mods';
export const PUBLIC_R2_ORIGIN = 'https://r2.sotf-mods.com/';

/** Local development database (ops/compose/dev.yml). */
export const DEFAULT_DATABASE_URL = 'postgres://sotf:sotf@127.0.0.1:47432/sotf';
