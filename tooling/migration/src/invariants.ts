/**
 * `db:invariants` (PLAN §6.11): the ten data invariants of `sql/invariants.sql` plus the internal
 * links of the descriptions (part of invariant 4), which need URL decoding.
 *
 * Link rule: every `sotf-mods.com/mods/:user/:slug` or `/profile/:slug` link that resolves with
 * the legacy lookup (exact user and mod slug) must still resolve in v2 (slug history or canonical
 * slug, case-insensitive). Links that were already broken in the legacy site (deleted or renamed
 * mods) are reported but do not fail: the migration did not break them.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type pg from 'pg';
import { SQL_DIR } from './constants.ts';
import { sqlSections } from './verify-snapshot.ts';

export interface InvariantResult {
  id: string;
  ok: boolean;
  detail: Record<string, unknown>;
}

export interface InvariantOptions {
  /** Invariant 7 threshold (default 1 977 059). */
  minSiteDownloads?: number;
  /** Invariant 5: expected `file_missing` versions (default 1; negative = any). */
  expectedFileMissing?: number;
}

const LINK = /(?:https?:\/\/)?(?:www\.)?sotf-mods\.com\/(mods|profile)\/([^\s)\]"'<>#?/]+)(?:\/([^\s)\]"'<>#?/]+))?/gi;

function decode(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

export interface InternalLink {
  modId: number;
  kind: 'mods' | 'profile';
  user: string;
  slug: string | null;
  raw: string;
}

/** Internal links of one description (decoded path segments). */
export function internalLinks(modId: number, description: string): InternalLink[] {
  const out: InternalLink[] = [];
  for (const match of description.matchAll(LINK)) {
    const kind = (match[1] as string).toLowerCase() as 'mods' | 'profile';
    const user = decode(match[2] as string);
    const slug = match[3] ? decode(match[3]) : null;
    if (kind === 'mods' && slug === null) continue;
    out.push({ modId, kind, user, slug: kind === 'mods' ? slug : null, raw: match[0] });
  }
  return out;
}

async function checkLinks(client: pg.ClientBase): Promise<InvariantResult> {
  const { rows: mods } = await client.query<{ id: number; description: string }>(
    `SELECT "id", "description" FROM "Mod" WHERE "description" ILIKE '%sotf-mods.com/%' ORDER BY "id"`,
  );
  const links = mods.flatMap((m) => internalLinks(m.id, m.description));
  const broken: InternalLink[] = [];
  const alreadyBroken: InternalLink[] = [];
  for (const link of links) {
    if (link.kind === 'mods') {
      const { rows } = await client.query<{ legacy: boolean; v2: boolean }>(
        `SELECT EXISTS (SELECT 1 FROM "Mod" m JOIN "User" u ON u."id" = m."userId"
                         WHERE u."slug" = $1 AND m."slug" = $2) AS legacy,
                EXISTS (SELECT 1 FROM "ModSlugHistory" h WHERE lower(h."userSlug") = lower($1) AND lower(h."slug") = lower($2))
                OR EXISTS (SELECT 1 FROM "Mod" m JOIN "User" u ON u."id" = m."userId"
                            WHERE lower(u."slug") = lower($1) AND lower(m."canonicalSlug") = lower($2)) AS v2`,
        [link.user, link.slug],
      );
      const r = rows[0];
      if (r?.legacy && !r.v2) broken.push(link);
      else if (!r?.legacy && !r?.v2) alreadyBroken.push(link);
    } else {
      const { rows } = await client.query<{ legacy: boolean; v2: boolean }>(
        `SELECT EXISTS (SELECT 1 FROM "User" WHERE "slug" = $1) AS legacy,
                EXISTS (SELECT 1 FROM "UserSlugHistory" WHERE lower("slug") = lower($1))
                OR EXISTS (SELECT 1 FROM "User" WHERE lower("slug") = lower($1)) AS v2`,
        [link.user],
      );
      const r = rows[0];
      if (r?.legacy && !r.v2) broken.push(link);
      else if (!r?.legacy && !r?.v2) alreadyBroken.push(link);
    }
  }
  return {
    id: '4b-description-links',
    ok: broken.length === 0,
    detail: {
      links: links.length,
      brokenByMigration: broken.map((l) => `${l.modId}: ${l.raw}`),
      alreadyBrokenInLegacy: alreadyBroken.map((l) => `${l.modId}: ${l.raw}`),
    },
  };
}

export async function runInvariants(client: pg.Client, options: InvariantOptions = {}): Promise<InvariantResult[]> {
  const sections = sqlSections(readFileSync(join(SQL_DIR, 'invariants.sql'), 'utf8'));
  await client.query('BEGIN READ ONLY');
  try {
    await client.query(`SELECT set_config('sotf.min_site_downloads', $1, true)`, [
      String(options.minSiteDownloads ?? 1_977_059),
    ]);
    await client.query(`SELECT set_config('sotf.expected_file_missing', $1, true)`, [
      String(options.expectedFileMissing ?? 1),
    ]);
    const results: InvariantResult[] = [];
    for (const [id, sql] of sections) {
      const { rows } = await client.query<{ ok: boolean; detail: Record<string, unknown> }>(sql);
      results.push({ id, ok: rows[0]?.ok === true, detail: rows[0]?.detail ?? {} });
      if (id.startsWith('4-')) results.push(await checkLinks(client));
    }
    return results;
  } finally {
    await client.query('ROLLBACK');
  }
}

/** Seed metadata recorded by `db:seed:dev` (the small seed has fewer downloads by design). */
export async function seedExpectations(client: pg.ClientBase): Promise<InvariantOptions> {
  const { rows } = await client.query<{ notes: { mode?: string; downloads?: number } | null }>(
    `SELECT "notes" FROM "MigrationRun" WHERE "name" = 'seed:dev' ORDER BY "id" DESC LIMIT 1`,
  );
  const notes = rows[0]?.notes;
  if (notes?.mode === 'small' && typeof notes.downloads === 'number') return { minSiteDownloads: notes.downloads };
  return {};
}
