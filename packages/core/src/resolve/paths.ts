/**
 * `resolvePath(path)` → `ResolveDTO` (PLAN §4.6, `GET /api/v2/resolve`): used by the web
 * middleware before rendering a mod, build, profile or kit page, and by anything that needs to
 * turn an old URL into the current one.
 *
 * Order: explicit `Redirect` rows → the entity resolvers (mods/builds: `findModBySlug`; profiles:
 * current slug, case-insensitive slug, `UserSlugHistory`; kits: owner + slug) → `Tombstone` rows
 * and the known deleted legacy paths → 404.
 *
 * - A locale prefix (`/es/mods/…`) is kept on the canonical path; so is the rest of the path
 *   (`/mods/u/s/versions/1.0` → `/mods/new/s/versions/1.0`).
 * - Mods: `removed` → 410, `rejected` → 404 (T0-03); every other state resolves (the page decides
 *   what to show). A mod under the wrong prefix (`/mods` ↔ `/builds`) → 301 `kind_mismatch`.
 */
import { LOCALES } from '@sotf/contracts/common';
import { encodePathSegment, modPath, type ResolveDTO } from '@sotf/contracts/seo';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { findModBySlug, type ModMatch } from './mods.ts';

export interface ParsedPath {
  locale: string | null;
  section: string;
  /** Decoded segments after the section (`['imaxel', "axel's-mod-menu", 'versions']`). */
  segments: string[];
}

function decode(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

/** Splits a site path into locale, section and decoded segments (query and hash dropped). */
export function parseSitePath(path: string): ParsedPath {
  const clean = path.split(/[?#]/, 1)[0] ?? '/';
  const raw = clean.split('/').filter((s, i) => i > 0 && s !== '');
  let locale: string | null = null;
  if (raw[0] && raw[0] !== 'en' && (LOCALES as readonly string[]).includes(raw[0])) {
    locale = raw[0];
    raw.shift();
  }
  const [section = '', ...rest] = raw;
  return { locale, section, segments: rest.map(decode) };
}

function withLocale(locale: string | null, path: string): string {
  return locale ? `/${locale}${path}` : path;
}

function restOf(segments: readonly string[], from: number): string {
  const rest = segments.slice(from);
  return rest.length ? `/${rest.map(encodePathSegment).join('/')}` : '';
}

function result(partial: Partial<ResolveDTO> & Pick<ResolveDTO, 'status' | 'rule'>): ResolveDTO {
  return { kind: null, id: null, canonicalPath: null, ...partial };
}

function kindOf(mod: ModMatch): 'mod' | 'build' {
  return mod.type === 'Build' ? 'build' : 'mod';
}

/** Canonical page path of a mod: current owner's slug + `Mod.slug` verbatim. */
export function canonicalModPath(mod: ModMatch): string {
  return modPath(kindOf(mod), mod.ownerSlug ?? 'undefined', mod.slug);
}

/** Status of a tombstoned entity path (`/mods/aedev/gyrocopter`), or null. */
export async function tombstoneStatus(db: Executor, paths: readonly string[]): Promise<404 | 410 | null> {
  const found = await tombstoneFor(db, paths);
  if (!found) return null;
  return found.status === 404 ? 404 : 410;
}

async function tombstoneFor(db: Executor, paths: readonly string[]): Promise<ResolveDTO | null> {
  const unique = [...new Set(paths)];
  const found = await db.execute<{ status: number }>(
    sql`SELECT "status" FROM "Tombstone" WHERE "path" = ANY(${sql.param(unique)}::text[]) ORDER BY "status" DESC LIMIT 1`,
  );
  const row = found.rows[0];
  // Content deleted before v2 (e.g. `/mods/aedev/gyrocopter`, research/01 §4.4) is a `Tombstone`
  // row since migration 2006_known_tombstones.
  return row ? result({ status: Number(row.status) === 404 ? 404 : 410, rule: 'tombstone' }) : null;
}

async function resolveMod(db: Executor, parsed: ParsedPath, prefix: 'mods' | 'builds'): Promise<ResolveDTO | null> {
  const [userSlug, slug] = parsed.segments;
  if (userSlug === undefined || slug === undefined) return null;
  const found = await findModBySlug(db, userSlug, slug);
  if (!found) return null;
  const { mod } = found;
  const kind = kindOf(mod);
  if (mod.status === 'removed') return result({ status: 410, kind, id: mod.id, rule: found.rule });
  if (mod.status === 'rejected') return result({ status: 404, kind, id: mod.id, rule: found.rule });
  const canonicalPath = withLocale(parsed.locale, `${canonicalModPath(mod)}${restOf(parsed.segments, 2)}`);
  const prefixMatches = (kind === 'build') === (prefix === 'builds');
  if (found.rule === 'exact' && mod.ownerSlug === userSlug) {
    return prefixMatches
      ? result({ status: 200, kind, id: mod.id, canonicalPath, rule: 'exact' })
      : result({ status: 301, kind, id: mod.id, canonicalPath, rule: 'kind_mismatch' });
  }
  return result({ status: 301, kind, id: mod.id, canonicalPath, rule: found.rule });
}

async function resolveProfile(db: Executor, parsed: ParsedPath): Promise<ResolveDTO | null> {
  const [handle] = parsed.segments;
  if (!handle) return null;
  const rest = restOf(parsed.segments, 1);
  const rows = await db.execute<{ id: number; slug: string; exact: boolean; rule: string }>(sql`
    SELECT u."id", u."slug", (u."slug" = ${handle}) AS "exact", 'current' AS "rule"
      FROM "User" u
     WHERE lower(u."slug") = lower(${handle}) AND u."deletedAt" IS NULL
    UNION ALL
    SELECT u."id", u."slug", false AS "exact", 'history' AS "rule"
      FROM "UserSlugHistory" h JOIN "User" u ON u."id" = h."userId"
     WHERE lower(h."slug") = lower(${handle}) AND u."deletedAt" IS NULL
     ORDER BY "exact" DESC, "rule" ASC, "id" ASC
     LIMIT 1`);
  const row = rows.rows[0];
  if (!row) return null;
  const canonicalPath = withLocale(parsed.locale, `/profile/${encodePathSegment(row.slug)}${rest}`);
  const id = Number(row.id);
  if (row.exact) return result({ status: 200, kind: 'user', id, canonicalPath, rule: 'exact' });
  return result({
    status: 301,
    kind: 'user',
    id,
    canonicalPath,
    rule: row.rule === 'history' ? 'history' : 'normalized',
  });
}

async function resolveKit(db: Executor, parsed: ParsedPath): Promise<ResolveDTO | null> {
  const [ownerSlug, slug] = parsed.segments;
  if (!ownerSlug || !slug) return null;
  const rows = await db.execute<{ id: number; ownerSlug: string; slug: string }>(sql`
    SELECT k."id", u."slug" AS "ownerSlug", k."slug"
      FROM "Kit" k JOIN "User" u ON u."id" = k."ownerId"
     WHERE lower(u."slug") = lower(${ownerSlug}) AND lower(k."slug") = lower(${slug})
       AND k."visibility" <> 'private' AND u."deletedAt" IS NULL
     ORDER BY (u."slug" = ${ownerSlug} AND k."slug" = ${slug}) DESC, k."id"
     LIMIT 1`);
  const row = rows.rows[0];
  if (!row) return null;
  const canonicalPath = withLocale(
    parsed.locale,
    `/kits/${encodePathSegment(row.ownerSlug)}/${encodePathSegment(row.slug)}${restOf(parsed.segments, 2)}`,
  );
  const exact = row.ownerSlug === ownerSlug && row.slug === slug;
  return result({
    status: exact ? 200 : 301,
    kind: 'kit',
    id: Number(row.id),
    canonicalPath,
    rule: exact ? 'exact' : 'normalized',
  });
}

/** Resolves a site path (PLAN §4.6). */
export async function resolvePath(db: Executor, path: string): Promise<ResolveDTO> {
  const pathOnly = path.split(/[?#]/, 1)[0] ?? '/';
  const redirect = await db.execute<{ toPath: string; status: number }>(
    sql`SELECT "toPath", "status" FROM "Redirect" WHERE "fromPath" = ${pathOnly} LIMIT 1`,
  );
  const explicit = redirect.rows[0];
  if (explicit) return result({ status: 301, canonicalPath: explicit.toPath, rule: 'redirect' });

  const parsed = parseSitePath(pathOnly);
  let resolved: ResolveDTO | null = null;
  if (parsed.section === 'mods' || parsed.section === 'builds') resolved = await resolveMod(db, parsed, parsed.section);
  else if (parsed.section === 'profile') resolved = await resolveProfile(db, parsed);
  else if (parsed.section === 'kits') resolved = await resolveKit(db, parsed);
  if (resolved) return resolved;

  // Tombstones are keyed by the locale-less entity path (`/mods/aedev/gyrocopter`).
  const entityDepth = parsed.section === 'profile' ? 1 : 2;
  const entity = parsed.segments.slice(0, entityDepth);
  const base = `/${parsed.section}${entity.length ? `/${entity.map(encodePathSegment).join('/')}` : ''}`;
  const tombstone = await tombstoneFor(db, [
    pathOnly,
    base,
    base.toLowerCase(),
    `/${parsed.section}/${entity.join('/')}`,
  ]);
  return tombstone ?? result({ status: 404, rule: 'none' });
}
