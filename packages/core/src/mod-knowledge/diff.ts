/**
 * Public diff between two versions of a mod (T1-17): files added, removed and changed (from the
 * stored zip listing in "VersionInspection"), manifest fields that differ and the changelogs of
 * the range. A listing saved by the upload flow carries sizes only (`crc32 = 0`); when both sides
 * have CRC-32 values a same-size change is detected too (`precise`).
 */
import type { ModKind } from '@sotf/contracts/common';
import { KNOWLEDGE_LIMITS, type VersionDiffDTO } from '@sotf/contracts/mod-knowledge';
import { versionsPath } from '@sotf/contracts/seo';
import { type JsonObject, modVersion, user, versionInspection } from '@sotf/db';
import { and, eq, inArray, sql } from 'drizzle-orm';
import { kindOf } from '../catalog/snapshot.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { loadPublicMod } from './common.ts';

const DIFFABLE_STATUSES: Array<'active' | 'yanked'> = ['active', 'yanked'];

interface Entry {
  path: string;
  size: number;
  crc32: number;
}

type ChangelogRow = { id: number; version: string; publishedAt: Date; changelogHtml: string };

/** Fields that change with every release or carry no information for a reader. */
const IGNORED_MANIFEST_FIELDS = new Set(['version', 'Version']);
const MANIFEST_CHANGES_MAX = 40;
const VALUE_MAX = 200;

function asText(value: unknown): string | null {
  if (value === undefined || value === null) return null;
  const text = typeof value === 'string' ? value : JSON.stringify(value);
  return text.length > VALUE_MAX ? `${text.slice(0, VALUE_MAX - 1)}…` : text;
}

export function manifestChanges(from: JsonObject | null, to: JsonObject | null): VersionDiffDTO['manifest'] {
  if (!from || !to) return [];
  const keys = [...new Set([...Object.keys(from), ...Object.keys(to)])].filter((k) => !IGNORED_MANIFEST_FIELDS.has(k));
  const out: VersionDiffDTO['manifest'] = [];
  for (const field of keys.sort()) {
    const a = from[field];
    const b = to[field];
    if (JSON.stringify(a ?? null) === JSON.stringify(b ?? null)) continue;
    out.push({ field, from: asText(a), to: asText(b) });
    if (out.length >= MANIFEST_CHANGES_MAX) break;
  }
  return out;
}

/** Compares two zip listings (pure). */
export function diffEntries(
  from: readonly Entry[],
  to: readonly Entry[],
): Pick<VersionDiffDTO, 'added' | 'removed' | 'changed' | 'unchangedCount' | 'precise' | 'truncated'> {
  const before = new Map(from.filter((e) => !e.path.endsWith('/')).map((e) => [e.path, e]));
  const after = new Map(to.filter((e) => !e.path.endsWith('/')).map((e) => [e.path, e]));
  const precise = [...before.values(), ...after.values()].every((e) => e.crc32 !== 0);
  const added: VersionDiffDTO['added'] = [];
  const removed: VersionDiffDTO['removed'] = [];
  const changed: VersionDiffDTO['changed'] = [];
  let unchanged = 0;
  for (const [path, b] of after) {
    const a = before.get(path);
    if (!a) added.push({ path, size: b.size });
    else if (a.size !== b.size || (precise && a.crc32 !== b.crc32))
      changed.push({ path, fromSize: a.size, toSize: b.size });
    else unchanged += 1;
  }
  for (const [path, a] of before) if (!after.has(path)) removed.push({ path, size: a.size });
  const byPath = (x: { path: string }, y: { path: string }) => x.path.localeCompare(y.path);
  added.sort(byPath);
  removed.sort(byPath);
  changed.sort(byPath);
  const max = KNOWLEDGE_LIMITS.diffFilesMax;
  const truncated = added.length > max || removed.length > max || changed.length > max;
  return {
    added: added.slice(0, max),
    removed: removed.slice(0, max),
    changed: changed.slice(0, max),
    unchangedCount: unchanged,
    precise,
    truncated,
  };
}

/** `GET /mods/:id/diff?from=&to=`. */
export async function getVersionDiff(ctx: Ctx, modId: number, fromId: number, toId: number): Promise<VersionDiffDTO> {
  if (fromId === toId) {
    throw errors.validation('Pick two different versions', [
      { path: 'to', code: 'same_version', message: 'from and to are the same version' },
    ]);
  }
  const current = await loadPublicMod(ctx.db, modId);
  const kind: ModKind = kindOf(current.type);
  const [owner] =
    current.userId === null
      ? []
      : await ctx.db.select({ slug: user.slug }).from(user).where(eq(user.id, current.userId));
  if (!owner) throw errors.notFound('Mod');

  const pair = await ctx.db
    .select({
      id: modVersion.id,
      version: modVersion.version,
      publishedAt: modVersion.publishedAt,
      createdAt: modVersion.createdAt,
      fileSize: modVersion.fileSize,
      manifest: modVersion.manifest,
      entries: versionInspection.entries,
    })
    .from(modVersion)
    .leftJoin(versionInspection, eq(versionInspection.modVersionId, modVersion.id))
    .where(
      and(
        eq(modVersion.modId, current.id),
        inArray(modVersion.id, [fromId, toId]),
        inArray(modVersion.status, DIFFABLE_STATUSES),
      ),
    );
  const from = pair.find((p) => p.id === fromId);
  const to = pair.find((p) => p.id === toId);
  if (!from || !to) throw errors.notFound('Version');

  const fromEntries = (from.entries ?? null) as Entry[] | null;
  const toEntries = (to.entries ?? null) as Entry[] | null;
  const filesAvailable = fromEntries !== null && toEntries !== null && fromEntries.length > 0 && toEntries.length > 0;
  const files = filesAvailable
    ? diffEntries(fromEntries, toEntries)
    : { added: [], removed: [], changed: [], unchangedCount: 0, precise: false, truncated: false };

  // Changelogs of the versions after `from` up to `to` (publication order), newest first.
  const fromAt = (from.publishedAt ?? from.createdAt).getTime();
  const toAt = (to.publishedAt ?? to.createdAt).getTime();
  const [older, newer] = fromAt <= toAt ? [from, to] : [to, from];
  const range = await ctx.db.execute<{
    id: number;
    version: string;
    publishedAt: Date;
    changelogHtml: string | null;
    changelog: string;
  }>(sql`
    SELECT v."id", v."version", coalesce(v."publishedAt", v."createdAt") AS "publishedAt",
           v."changelogHtml", v."changelog"
      FROM "ModVersion" v
     WHERE v."modId" = ${current.id} AND v."status" = ANY(${`{${DIFFABLE_STATUSES.join(',')}}`}::text[])
       AND coalesce(v."publishedAt", v."createdAt") > ${(older.publishedAt ?? older.createdAt).toISOString()}::timestamptz
       AND coalesce(v."publishedAt", v."createdAt") <= ${(newer.publishedAt ?? newer.createdAt).toISOString()}::timestamptz
     ORDER BY coalesce(v."publishedAt", v."createdAt") DESC, v."id" DESC
     LIMIT ${KNOWLEDGE_LIMITS.diffChangelogMax + 1}`);
  const rows: ChangelogRow[] = range.rows.map((r) => ({
    id: Number(r.id),
    version: r.version,
    publishedAt: new Date(r.publishedAt),
    changelogHtml: r.changelogHtml ?? '',
  }));
  const changelogTruncated = rows.length > KNOWLEDGE_LIMITS.diffChangelogMax;

  const side = (v: typeof from, files: number | null) => ({
    id: v.id,
    version: v.version,
    publishedAt: (v.publishedAt ?? v.createdAt).toISOString(),
    fileSize: v.fileSize,
    filesCount: files,
    path: versionsPath(kind, owner.slug, current.slug, v.version),
  });
  const count = (e: Entry[] | null) => (e === null ? null : e.filter((x) => !x.path.endsWith('/')).length);
  return {
    modId: current.id,
    from: side(from, count(fromEntries)),
    to: side(to, count(toEntries)),
    filesAvailable,
    precise: files.precise,
    sizeDelta: from.fileSize !== null && to.fileSize !== null ? to.fileSize - from.fileSize : null,
    added: files.added,
    removed: files.removed,
    changed: files.changed,
    unchangedCount: files.unchangedCount,
    truncated: files.truncated,
    manifest: manifestChanges(from.manifest, to.manifest),
    changelog: rows.slice(0, KNOWLEDGE_LIMITS.diffChangelogMax).map((r) => ({
      versionId: r.id,
      version: r.version,
      publishedAt: r.publishedAt.toISOString(),
      changelogHtml: r.changelogHtml,
    })),
    changelogTruncated,
  };
}
