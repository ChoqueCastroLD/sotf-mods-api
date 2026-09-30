/**
 * `GET /ranger/items/:id` (🛡, session < 12 h): everything a ranger needs to decide on a queue
 * item (PLAN §7.4 "Vista de ítem"). The id is `<lane>:<targetType>:<targetId>`.
 *
 * - The inspection of the version under review (`VersionInspection`, as an `UploadInspectionDTO`);
 * - the file diff against the previous version (added, removed and changed entries with sizes and
 *   CRC) and the manifest diff (top-level fields whose value changed);
 * - the latest security scan, the rendered description and changelog, the gallery;
 * - the author's history (account age, published and rejected mods, active sanctions, trust);
 * - the actions the ranger may take now (`allowedActions`).
 *
 * Reports resolve to what they point at (a mod, a version, a comment…); comments held for review
 * show their rendered body as the description.
 */

import type { ImageDTO, ModStatus } from '@sotf/contracts/common';
import { BuildMetaDTO, RedLoaderManifestDTO } from '@sotf/contracts/manifest';
import type { ModerationLane, QueueItemDetailDTO } from '@sotf/contracts/moderation';
import type { UploadInspectionDTO } from '@sotf/contracts/uploads';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { imageDto, type MediaRow } from '../catalog/media.ts';
import { textToHtml } from '../catalog/versions.ts';
import { query, queryOne, toDate, toInt } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { getReport } from '../reports/service.ts';
import { modAllowedActions, versionAllowedActions } from './decisions.ts';
import { assertStaff } from './guard.ts';
import {
  applyQueueMarks,
  commentRows,
  type LaneRow,
  pendingModRows,
  reportRows,
  toQueueItems,
  versionRows,
} from './lanes.ts';
import { authorHistory, flagsOf, latestScans, type ModerationDeps, scanSummary } from './shared.ts';

type QueueItemDetail = z.infer<typeof QueueItemDetailDTO>;
type Inspection = z.infer<typeof UploadInspectionDTO>;
type FileDiff = NonNullable<QueueItemDetail['fileDiff']>;

const ITEM_ID = /^([a-z_]+):([a-z_]+):(\d+)$/;
const LANE_SET = new Set<string>(['new_mods', 'versions', 'post_review', 'reports', 'comments', 'builds']);
const SHA256 = /^[0-9a-f]{64}$/;
const DIFF_LIMIT = 500;

interface EntryRow {
  path: string;
  size: number;
  compressed: number;
  crc32: number;
}

interface InspectionRow {
  status: string;
  manifest: Record<string, unknown> | null;
  entries: unknown;
  flags: unknown;
  uncompressedBytes: string | number | null;
  ratio: number | null;
  sha256: string | null;
}

function entriesOf(value: unknown): EntryRow[] {
  if (!Array.isArray(value)) return [];
  const out: EntryRow[] = [];
  for (const e of value) {
    if (!e || typeof e !== 'object') continue;
    const r = e as Record<string, unknown>;
    if (typeof r.path !== 'string') continue;
    out.push({
      path: r.path,
      size: toInt(r.size),
      compressed: toInt(r.compressed),
      crc32: toInt(r.crc32),
    });
  }
  return out;
}

async function loadInspection(ctx: Ctx, versionId: number): Promise<{ dto: Inspection; entries: EntryRow[] } | null> {
  const row = await queryOne<InspectionRow>(
    ctx.db,
    sql`SELECT "status", "manifest", "entries", "flags", "uncompressedBytes", "ratio", "sha256"
          FROM "VersionInspection" WHERE "modVersionId" = ${versionId}`,
  );
  if (!row) return null;
  const entries = entriesOf(row.entries);
  const manifest = RedLoaderManifestDTO.safeParse(row.manifest);
  const buildMeta = BuildMetaDTO.safeParse(row.manifest?.buildMeta);
  const status = (['pending', 'passed', 'flagged', 'failed'] as const).find((s) => s === row.status) ?? 'pending';
  return {
    dto: {
      status,
      manifest: manifest.success ? manifest.data : null,
      buildMeta: buildMeta.success ? buildMeta.data : null,
      entries: entries.slice(0, 500).map((e) => ({ path: e.path, size: e.size, compressed: e.compressed })),
      entriesTotal: entries.length,
      uncompressedBytes: row.uncompressedBytes === null ? null : toInt(row.uncompressedBytes),
      ratio: row.ratio === null ? null : Math.max(0, Number(row.ratio)),
      sha256: row.sha256 && SHA256.test(row.sha256) ? row.sha256 : null,
      flags: flagsOf(row.flags),
    },
    entries,
  };
}

/** Zip entries compared by path (directories ignored). */
export function fileDiff(before: readonly EntryRow[], after: readonly EntryRow[]): FileDiff {
  const files = (list: readonly EntryRow[]) =>
    new Map(list.filter((e) => !e.path.endsWith('/')).map((e) => [e.path, e]));
  const a = files(before);
  const b = files(after);
  const added: FileDiff['added'] = [];
  const removed: FileDiff['removed'] = [];
  const changed: FileDiff['changed'] = [];
  for (const [path, e] of b) {
    const prev = a.get(path);
    if (!prev) added.push({ path, size: e.size });
    else {
      const crcKnown = prev.crc32 !== 0 && e.crc32 !== 0;
      const crcChanged = crcKnown && prev.crc32 !== e.crc32;
      if (prev.size !== e.size || crcChanged) {
        changed.push({ path, sizeBefore: prev.size, sizeAfter: e.size, crcChanged });
      }
    }
  }
  for (const [path, e] of a) if (!b.has(path)) removed.push({ path, size: e.size });
  const byPath = (x: { path: string }, y: { path: string }) => (x.path < y.path ? -1 : x.path > y.path ? 1 : 0);
  return {
    added: added.sort(byPath).slice(0, DIFF_LIMIT),
    removed: removed.sort(byPath).slice(0, DIFF_LIMIT),
    changed: changed.sort(byPath).slice(0, DIFF_LIMIT),
  };
}

/** Top-level manifest fields whose (JSON) value changed. */
export function manifestDiff(
  before: Record<string, unknown> | null,
  after: Record<string, unknown> | null,
): QueueItemDetail['manifestDiff'] {
  if (!after) return [];
  const prev = before ?? {};
  const keys = [...new Set([...Object.keys(prev), ...Object.keys(after)])].sort();
  const out: QueueItemDetail['manifestDiff'] = [];
  for (const field of keys) {
    const a = prev[field];
    const b = after[field];
    if (JSON.stringify(a) !== JSON.stringify(b)) out.push({ field, before: a ?? null, after: b ?? null });
  }
  return out;
}

interface ModFacts {
  id: number;
  status: ModStatus;
  type: string | null;
  userId: number | null;
  descriptionHtml: string | null;
  description: string | null;
}

interface VersionFacts {
  id: number;
  modId: number;
  status: string;
  version: string;
  createdAt: Date | string;
  publishedAt: Date | string | null;
  changelogHtml: string | null;
  changelog: string | null;
  manifest: Record<string, unknown> | null;
}

const VERSION_FACTS = sql.raw(
  `v."id", v."modId", v."status", v."version", v."createdAt", v."publishedAt", v."changelogHtml", v."changelog", v."manifest"`,
);

async function loadMod(ctx: Ctx, id: number): Promise<ModFacts | null> {
  return queryOne<ModFacts>(
    ctx.db,
    sql`SELECT "id", "status", "type", "userId", "descriptionHtml", "description" FROM "Mod" WHERE "id" = ${id}`,
  );
}

/** The version a mod item is about: its pending version, else its latest, else its newest. */
async function versionForMod(ctx: Ctx, modId: number): Promise<VersionFacts | null> {
  return queryOne<VersionFacts>(
    ctx.db,
    sql`SELECT ${VERSION_FACTS} FROM "ModVersion" v WHERE v."modId" = ${modId}
         ORDER BY (v."status" = 'pending') DESC, v."isLatest" DESC, v."id" DESC LIMIT 1`,
  );
}

/** The version published before `version` (the diff baseline). */
async function previousVersion(ctx: Ctx, version: VersionFacts): Promise<VersionFacts | null> {
  return queryOne<VersionFacts>(
    ctx.db,
    sql`SELECT ${VERSION_FACTS} FROM "ModVersion" v
         WHERE v."modId" = ${version.modId} AND v."id" <> ${version.id} AND v."status" IN ('active', 'yanked')
           AND v."createdAt" <= ${(toDate(version.createdAt) ?? new Date()).toISOString()}::timestamptz AT TIME ZONE 'UTC'
         ORDER BY v."createdAt" DESC, v."id" DESC LIMIT 1`,
  );
}

async function gallery(ctx: Ctx, deps: ModerationDeps, modId: number): Promise<z.infer<typeof ImageDTO>[]> {
  const list = await query<MediaRow & { url: string | null; alt: string | null }>(
    ctx.db,
    sql`SELECT i."url", i."alt", med."width", med."height", med."thumbhash", med."dominantColor", med."variants",
               med."sourceBucket", med."sourceKey"
          FROM "ModImage" i LEFT JOIN "Media" med ON med."id" = i."mediaId"
         WHERE i."modId" = ${modId}
         ORDER BY i."isThumbnail" DESC, i."position" NULLS LAST, i."isPrimary" DESC, i."id"
         LIMIT 20`,
  );
  return list
    .map((g) => imageDto(deps.config, g.sourceKey === null && g.variants === null ? null : g, g.url, g.alt))
    .filter((i): i is z.infer<typeof ImageDTO> => i !== null);
}

export function parseItemId(id: string): { lane: ModerationLane; targetType: string; targetId: number } {
  const match = ITEM_ID.exec(id);
  if (!match || !LANE_SET.has(match[1] ?? '')) throw errors.notFound('Queue item');
  return { lane: match[1] as ModerationLane, targetType: match[2] ?? '', targetId: Number(match[3]) };
}

async function rawLaneRowFor(
  ctx: Ctx,
  lane: ModerationLane,
  targetType: string,
  targetId: number,
): Promise<LaneRow | null> {
  switch (targetType) {
    case 'mod':
      return (await pendingModRows(ctx, lane, sql`m."id" = ${targetId}`))[0] ?? null;
    case 'version':
      return (await versionRows(ctx, lane, sql`v."id" = ${targetId}`, lane === 'post_review'))[0] ?? null;
    case 'report':
      return (await reportRows(ctx, sql`r."id" = ${targetId}`))[0] ?? null;
    case 'comment':
      return (await commentRows(ctx, sql`c."id" = ${targetId}`))[0] ?? null;
    default:
      return null;
  }
}

/** The lane row of one item (with its assignment and escalation), or null. */
export async function laneRowFor(
  ctx: Ctx,
  lane: ModerationLane,
  targetType: string,
  targetId: number,
): Promise<LaneRow | null> {
  const row = await rawLaneRowFor(ctx, lane, targetType, targetId);
  if (!row) return null;
  const [marked] = await applyQueueMarks(ctx.db, [row]);
  return marked ?? null;
}

/** `GET /ranger/items/:id`. */
export async function getQueueItem(ctx: Ctx, deps: ModerationDeps, itemId: string): Promise<QueueItemDetail> {
  const actor = await assertStaff(ctx, 'moderation.queue');
  const { lane, targetType, targetId } = parseItemId(itemId);
  const row = await laneRowFor(ctx, lane, targetType, targetId);
  if (!row) throw errors.notFound('Queue item');
  const [item] = await toQueueItems(ctx, deps, [row]);
  if (!item) throw errors.notFound('Queue item');
  const now = ctx.clock.now();

  // What the item is about.
  let modId: number | null = row.modId;
  let versionId: number | null = targetType === 'version' ? targetId : null;
  let contentHtml: string | null = null;
  let contentAuthorId: number | null = row.authorId;
  let allowedFrom: 'mod' | 'version' | 'comment' | 'none' = targetType === 'mod' ? 'mod' : 'version';

  if (targetType === 'report') {
    const report = await queryOne<{ targetType: string; targetId: number }>(
      ctx.db,
      sql`SELECT "targetType", "targetId" FROM "Report" WHERE "id" = ${targetId}`,
    );
    if (!report) throw errors.notFound('Queue item');
    allowedFrom = 'none';
    if (report.targetType === 'version') versionId = report.targetId;
    if (report.targetType === 'comment') {
      const c = await queryOne<{ bodyHtml: string | null; message: string }>(
        ctx.db,
        sql`SELECT "bodyHtml", "message" FROM "Comment" WHERE "id" = ${report.targetId}`,
      );
      contentHtml = c ? (c.bodyHtml ?? textToHtml(c.message)) : null;
    }
    if (report.targetType === 'review') {
      const r = await queryOne<{ title: string; message: string; bodyHtml: string | null }>(
        ctx.db,
        sql`SELECT "title", "message", "bodyHtml" FROM "ModReview" WHERE "id" = ${report.targetId}`,
      );
      contentHtml = r ? (r.bodyHtml ?? textToHtml(`${r.title}\n\n${r.message}`)) : null;
    }
    if (report.targetType === 'compat_report') {
      const r = await queryOne<{ note: string | null }>(
        ctx.db,
        sql`SELECT "note" FROM "CompatReport" WHERE "id" = ${report.targetId}`,
      );
      contentHtml = r?.note ? textToHtml(r.note) : null;
    }
  }
  if (targetType === 'comment') {
    allowedFrom = 'comment';
    const c = await queryOne<{ bodyHtml: string | null; message: string }>(
      ctx.db,
      sql`SELECT "bodyHtml", "message" FROM "Comment" WHERE "id" = ${targetId}`,
    );
    contentHtml = c ? (c.bodyHtml ?? textToHtml(c.message)) : null;
  }

  const version =
    versionId !== null
      ? await queryOne<VersionFacts>(
          ctx.db,
          sql`SELECT ${VERSION_FACTS} FROM "ModVersion" v WHERE v."id" = ${versionId}`,
        )
      : modId !== null && (targetType === 'mod' || targetType === 'report')
        ? await versionForMod(ctx, modId)
        : null;
  if (version) modId = version.modId;
  const mod = modId === null ? null : await loadMod(ctx, modId);
  if (mod && targetType !== 'comment' && targetType !== 'report') contentAuthorId = mod.userId;

  const [inspection, previous, scans, media, history] = await Promise.all([
    version && targetType !== 'comment' ? loadInspection(ctx, version.id) : Promise.resolve(null),
    version && targetType !== 'comment' ? previousVersion(ctx, version) : Promise.resolve(null),
    version ? latestScans(ctx.db, [version.id]) : Promise.resolve(new Map()),
    mod && targetType !== 'comment' ? gallery(ctx, deps, mod.id) : Promise.resolve([]),
    authorHistory(ctx.db, contentAuthorId, now),
  ]);
  const previousInspection = previous ? await loadInspection(ctx, previous.id) : null;

  let allowedActions: QueueItemDetail['allowedActions'] = [];
  if (allowedFrom === 'mod' && mod) allowedActions = modAllowedActions(mod.status, actor.role);
  if (allowedFrom === 'version' && version && mod) {
    allowedActions = versionAllowedActions(
      { status: version.status, publishedAt: toDate(version.publishedAt) },
      mod.status,
      actor.role,
    );
  }
  if (allowedFrom === 'comment') allowedActions = ['approve', 'reject'];

  const showsMod =
    targetType === 'mod' || targetType === 'version' || (targetType === 'report' && contentHtml === null);
  return {
    item,
    inspection: inspection?.dto ?? null,
    fileDiff: inspection && previousInspection ? fileDiff(previousInspection.entries, inspection.entries) : null,
    manifestDiff: version && targetType !== 'comment' ? manifestDiff(previous?.manifest ?? null, version.manifest) : [],
    scan: version ? scanSummary(scans.get(version.id)) : null,
    descriptionHtml:
      contentHtml ??
      (showsMod && mod ? (mod.descriptionHtml ?? (mod.description ? textToHtml(mod.description) : null)) : null),
    changelogHtml:
      version && targetType !== 'comment'
        ? (version.changelogHtml ?? (version.changelog ? textToHtml(version.changelog) : null))
        : null,
    media,
    authorHistory: history,
    allowedActions,
    report: targetType === 'report' ? await getReport(ctx, deps.config, targetId) : null,
  };
}
