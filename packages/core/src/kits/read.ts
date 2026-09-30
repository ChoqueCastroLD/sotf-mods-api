/**
 * Kit reads: rows, owners, items, version resolution and the `KitCardDTO` / `KitDTO` builders.
 * Mods come from the catalog snapshot (the same cards as everywhere else); what the snapshot does
 * not hold (items, pins, dependency edges, file sizes, revisions) is read from the database, on
 * the executor given (so writes can build their response inside their transaction).
 */
import type { UserRefDTO } from '@sotf/contracts/common';
import { type KitCardDTO, type KitCode, type KitDTO, KitVisibility } from '@sotf/contracts/kits';
import { kitPath } from '@sotf/contracts/seo';
import type { Executor, MediaVariant, UserPrivacy } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import { ogImageOf } from '../catalog/build-facts.ts';
import { type CatalogConfig, imageDto, type MediaRow, mediaUrlForWidth } from '../catalog/media.ts';
import { type CatalogEntry, type CatalogSnapshot, rankOf, roleOf, tierOf } from '../catalog/snapshot.ts';
import { dependencyState } from '../catalog/versions.ts';
import { intArray, query, toDate, toInt } from '../follows/sql.ts';
import {
  type CompatSummary,
  compatSummary,
  conflictPairs,
  type DependencyEdge,
  kitNoindex,
  multiplayerSummary,
  type Resolver,
  type ResolverMod,
  totalBytes,
} from './rules.ts';

// -----------------------------------------------------------------------------------------------
// Rows
// -----------------------------------------------------------------------------------------------

export interface KitRow {
  id: number;
  ownerId: number;
  slug: string;
  name: string;
  descriptionMd: string | null;
  descriptionHtml: string | null;
  visibility: KitVisibility;
  code: string;
  ogImageKey: string | null;
  coverMediaId: string | null;
  isStaffPick: boolean;
  forkedFromId: number | null;
  revision: number;
  itemsCount: number;
  followersCount: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  // Owner
  ownerSlug: string;
  ownerName: string;
  ownerDisplayName: string | null;
  ownerImageUrl: string | null;
  ownerVerified: boolean;
  ownerRole: string;
  ownerPrivacy: UserPrivacy | null;
  ownerHidden: boolean;
  ownerTier: string | null;
  ownerRank: string | null;
  // Owner avatar and kit cover media
  aWidth: number | null;
  aHeight: number | null;
  aThumbhash: string | null;
  aColor: string | null;
  aVariants: MediaVariant[] | null;
  aBucket: string | null;
  aKey: string | null;
  cWidth: number | null;
  cHeight: number | null;
  cThumbhash: string | null;
  cColor: string | null;
  cVariants: MediaVariant[] | null;
  cBucket: string | null;
  cKey: string | null;
}

const KIT_SELECT = sql`
SELECT k."id", k."ownerId", k."slug", k."name", k."descriptionMd", k."descriptionHtml", k."visibility", k."code", k."ogImageKey",
       k."coverMediaId", k."isStaffPick", k."forkedFromId", k."revision", k."itemsCount", k."followersCount",
       k."createdAt", k."updatedAt", k."deletedAt",
       u."slug" AS "ownerSlug", u."name" AS "ownerName", u."displayName" AS "ownerDisplayName",
       u."imageUrl" AS "ownerImageUrl", u."verifiedCreator" AS "ownerVerified", u."role" AS "ownerRole",
       u."privacy" AS "ownerPrivacy", (u."deletedAt" IS NOT NULL OR u."bannedAt" IS NOT NULL) AS "ownerHidden",
       s."creatorTier" AS "ownerTier", s."survivorRank" AS "ownerRank",
       a."width" AS "aWidth", a."height" AS "aHeight", a."thumbhash" AS "aThumbhash", a."dominantColor" AS "aColor",
       a."variants" AS "aVariants", a."sourceBucket" AS "aBucket", a."sourceKey" AS "aKey",
       c."width" AS "cWidth", c."height" AS "cHeight", c."thumbhash" AS "cThumbhash", c."dominantColor" AS "cColor",
       c."variants" AS "cVariants", c."sourceBucket" AS "cBucket", c."sourceKey" AS "cKey"
  FROM "Kit" k
  JOIN "User" u ON u."id" = k."ownerId"
  LEFT JOIN "UserStats" s ON s."userId" = u."id"
  LEFT JOIN "Media" a ON a."id" = u."avatarMediaId"
  LEFT JOIN "Media" c ON c."id" = k."coverMediaId" AND c."status" <> 'failed'`;

function normalizeKitRow(r: KitRow): KitRow {
  return {
    ...r,
    visibility: KitVisibility.safeParse(r.visibility).success ? r.visibility : 'private',
    createdAt: toDate(r.createdAt) ?? new Date(0),
    updatedAt: toDate(r.updatedAt) ?? new Date(0),
    deletedAt: toDate(r.deletedAt),
    revision: Math.max(1, toInt(r.revision)),
    itemsCount: toInt(r.itemsCount),
    followersCount: toInt(r.followersCount),
  };
}

/** Kits matching `where` (a SQL condition on `k` / `u`), in `orderBy` order. */
export async function loadKitRows(db: Executor, where: SQL, orderBy: SQL = sql`k."id"`): Promise<KitRow[]> {
  const list = await query<KitRow>(db, sql`${KIT_SELECT} WHERE ${where} ORDER BY ${orderBy}`);
  return list.map(normalizeKitRow);
}

/** One kit by id (deleted ones included: callers decide), optionally locked `FOR UPDATE OF k`. */
export async function loadKitRow(db: Executor, kitId: number, forUpdate = false): Promise<KitRow | null> {
  const [row] = await query<KitRow>(
    db,
    forUpdate ? sql`${KIT_SELECT} WHERE k."id" = ${kitId} FOR UPDATE OF k` : sql`${KIT_SELECT} WHERE k."id" = ${kitId}`,
  );
  return row ? normalizeKitRow(row) : null;
}

function mediaOf(r: KitRow, prefix: 'a' | 'c'): MediaRow | null {
  const key = r[`${prefix}Key`];
  const variants = r[`${prefix}Variants`];
  if (key === null && variants === null) return null;
  return {
    width: r[`${prefix}Width`],
    height: r[`${prefix}Height`],
    thumbhash: r[`${prefix}Thumbhash`],
    dominantColor: r[`${prefix}Color`],
    variants,
    sourceBucket: r[`${prefix}Bucket`],
    sourceKey: key,
  };
}

export function ownerRefOf(config: CatalogConfig, r: KitRow): UserRefDTO {
  const hideRank = r.ownerPrivacy?.hideRank === true;
  return {
    id: r.ownerId,
    handle: r.ownerSlug,
    displayName: r.ownerDisplayName?.trim() || r.ownerName,
    avatarUrl: mediaUrlForWidth(config, mediaOf(r, 'a'), 96, r.ownerImageUrl),
    verifiedCreator: r.ownerVerified === true,
    role: roleOf(r.ownerRole),
    creatorTier: tierOf(r.ownerTier),
    survivorRank: hideRank ? null : rankOf(r.ownerRank),
  };
}

// -----------------------------------------------------------------------------------------------
// Visibility
// -----------------------------------------------------------------------------------------------

export type KitView = 'owner' | 'public';

/**
 * Who sees a kit: its owner always (unless deleted); others only public and unlisted kits of
 * visible owners. `null` = 404.
 */
export function viewOf(kit: KitRow, viewerId: number | null): KitView | null {
  if (kit.deletedAt) return null;
  if (viewerId !== null && viewerId === kit.ownerId) return 'owner';
  if (kit.ownerHidden) return null;
  return kit.visibility === 'private' ? null : 'public';
}

// -----------------------------------------------------------------------------------------------
// Items and version resolution
// -----------------------------------------------------------------------------------------------

export interface ItemRow {
  kitId: number;
  modId: number;
  position: number;
  note: string | null;
  pinnedVersionId: number | null;
  isAutoDependency: boolean;
  addedAt: Date;
}

/** Items of the given kits, in position order. */
export async function loadItems(db: Executor, kitIds: readonly number[]): Promise<ItemRow[]> {
  if (kitIds.length === 0) return [];
  const list = await query<ItemRow>(
    db,
    sql`SELECT "kitId", "modId", "position", "note", "pinnedVersionId", "isAutoDependency", "addedAt"
          FROM "KitItem" WHERE "kitId" = ANY(${intArray(kitIds)})
         ORDER BY "kitId", "position", "modId"`,
  );
  return list.map((r) => ({ ...r, addedAt: toDate(r.addedAt) ?? new Date(0) }));
}

export interface ResolvedVersion {
  id: number;
  modId: number;
  version: string;
  fileSize: number | null;
  status: string;
  edges: DependencyEdge[];
}

/**
 * The version each `(modId, pinnedVersionId)` resolves to: the pinned one when it still belongs to
 * the mod, else the latest (`isLatest`, not rejected). Keyed by mod id.
 */
export async function resolveVersions(
  db: Executor,
  items: ReadonlyArray<{ modId: number; pinnedVersionId: number | null }>,
): Promise<Map<number, ResolvedVersion>> {
  const out = new Map<number, ResolvedVersion>();
  if (items.length === 0) return out;
  const pinned = items.filter((i) => i.pinnedVersionId !== null).map((i) => i.pinnedVersionId as number);
  const modIds = items.map((i) => i.modId);
  const versions = await query<{
    id: number;
    modId: number;
    version: string;
    fileSize: string | number | null;
    status: string;
    isLatest: boolean;
  }>(
    db,
    sql`SELECT v."id", v."modId", v."version", v."fileSize", v."status", false AS "isLatest"
          FROM "ModVersion" v WHERE v."id" = ANY(${intArray(pinned)})
        UNION ALL
        SELECT * FROM (
          SELECT DISTINCT ON (v."modId") v."id", v."modId", v."version", v."fileSize", v."status", true AS "isLatest"
            FROM "ModVersion" v
           WHERE v."modId" = ANY(${intArray(modIds)}) AND v."isLatest" AND v."status" <> 'rejected'
           ORDER BY v."modId", v."id" DESC
        ) latest`,
  );
  const byId = new Map(versions.filter((v) => !v.isLatest).map((v) => [v.id, v]));
  const latestOf = new Map(versions.filter((v) => v.isLatest).map((v) => [v.modId, v]));
  const chosen = new Map<number, (typeof versions)[number]>();
  for (const item of items) {
    const pin = item.pinnedVersionId === null ? undefined : byId.get(item.pinnedVersionId);
    const version = pin && pin.modId === item.modId ? pin : latestOf.get(item.modId);
    if (version) chosen.set(item.modId, version);
  }
  const versionIds = [...new Set([...chosen.values()].map((v) => v.id))];
  const edges =
    versionIds.length === 0
      ? []
      : await query<{
          modVersionId: number;
          kind: DependencyEdge['kind'];
          depModId: number | null;
          depManifestId: string;
        }>(
          db,
          sql`SELECT "modVersionId", "kind", "depModId", "depManifestId" FROM "ModDependency"
               WHERE "modVersionId" = ANY(${intArray(versionIds)}) ORDER BY "id"`,
        );
  const edgesOf = new Map<number, DependencyEdge[]>();
  for (const e of edges) {
    if (e.kind !== 'required' && e.kind !== 'optional' && e.kind !== 'conflicts') continue;
    const list = edgesOf.get(e.modVersionId) ?? [];
    list.push({ kind: e.kind, depModId: e.depModId, depManifestId: e.depManifestId });
    edgesOf.set(e.modVersionId, list);
  }
  for (const [modId, v] of chosen) {
    out.set(modId, {
      id: v.id,
      modId,
      version: v.version,
      fileSize: v.fileSize === null ? null : toInt(v.fileSize),
      status: v.status,
      edges: edgesOf.get(v.id) ?? [],
    });
  }
  return out;
}

/** States of a dependency target that may be added to a kit (never removed or missing mods). */
const ADDABLE = new Set(['ok', 'unlisted', 'archived']);

/** True when a catalog entry may be added to a kit. */
export function isAddable(snapshot: CatalogSnapshot, entry: CatalogEntry | undefined): boolean {
  return ADDABLE.has(dependencyState(snapshot, entry).state);
}

/**
 * Resolver over the snapshot and the resolved versions. Mods whose version was never loaded have
 * `undefined` edges; mods without any version have none.
 */
export function makeResolver(
  snapshot: CatalogSnapshot,
  versions: ReadonlyMap<number, ResolvedVersion>,
  loaded: ReadonlySet<number>,
): Resolver {
  const toMod = (entry: CatalogEntry | undefined): ResolverMod | undefined =>
    entry ? { id: entry.id, manifestId: entry.manifestId, addable: isAddable(snapshot, entry) } : undefined;
  return {
    find(edge) {
      const byId = edge.depModId === null ? undefined : snapshot.byId.get(edge.depModId);
      return toMod(byId ?? snapshot.byManifestId.get(edge.depManifestId));
    },
    edgesOf(modId) {
      if (!loaded.has(modId)) return undefined;
      return versions.get(modId)?.edges ?? [];
    },
  };
}

// -----------------------------------------------------------------------------------------------
// DTO builders
// -----------------------------------------------------------------------------------------------

/** Items whose mod can still be shown (rejected, never-checked or hidden-author mods are skipped). */
function visibleEntries(
  snapshot: CatalogSnapshot,
  items: readonly ItemRow[],
): Array<{ item: ItemRow; entry: CatalogEntry }> {
  const out: Array<{ item: ItemRow; entry: CatalogEntry }> = [];
  for (const item of items) {
    const { entry } = dependencyState(snapshot, snapshot.byId.get(item.modId));
    if (entry) out.push({ item, entry });
  }
  return out;
}

function cardOf(config: CatalogConfig, snapshot: CatalogSnapshot, kit: KitRow, items: readonly ItemRow[]): KitCardDTO {
  const thumbs: string[] = [];
  for (const { entry } of visibleEntries(snapshot, items)) {
    if (thumbs.length >= 6) break;
    if (entry.ref.thumbnailUrl) thumbs.push(entry.ref.thumbnailUrl);
  }
  return {
    id: kit.id,
    slug: kit.slug,
    name: kit.name,
    canonicalPath: kitPath(kit.ownerSlug, kit.slug),
    owner: ownerRefOf(config, kit),
    visibility: kit.visibility,
    code: kit.code as KitCode,
    cover: imageDto(config, mediaOf(kit, 'c'), null, kit.name),
    previewThumbnails: thumbs,
    isStaffPick: kit.isStaffPick,
    itemsCount: kit.itemsCount,
    followersCount: kit.followersCount,
    revision: kit.revision,
    updatedAt: kit.updatedAt.toISOString(),
  };
}

/** Cards of several kits (one items query for all of them). */
export async function buildKitCards(
  db: Executor,
  config: CatalogConfig,
  snapshot: CatalogSnapshot,
  kits: readonly KitRow[],
): Promise<KitCardDTO[]> {
  const items = await loadItems(
    db,
    kits.map((k) => k.id),
  );
  const byKit = new Map<number, ItemRow[]>();
  for (const item of items) byKit.set(item.kitId, [...(byKit.get(item.kitId) ?? []), item]);
  return kits.map((kit) => cardOf(config, snapshot, kit, byKit.get(kit.id) ?? []));
}

/** Compatibility summary of a list of items (shown mods only). */
export function kitCompatOf(
  snapshot: CatalogSnapshot,
  items: readonly ItemRow[],
  versions: ReadonlyMap<number, ResolvedVersion>,
): CompatSummary {
  const shown = visibleEntries(snapshot, items);
  const modIds = shown.map((s) => s.entry.id);
  const resolver = makeResolver(snapshot, versions, new Set(modIds));
  return compatSummary(
    shown.map((s) => s.entry.compatStatus),
    conflictPairs(modIds, resolver).length,
  );
}

/** The full `KitDTO` of a kit (owner views include `descriptionMd`). */
export async function buildKitDto(
  db: Executor,
  config: CatalogConfig,
  snapshot: CatalogSnapshot,
  kit: KitRow,
  view: KitView,
): Promise<KitDTO> {
  const [items, revisions, forked] = await Promise.all([
    loadItems(db, [kit.id]),
    query<{ revision: number; summary: string | null; createdAt: Date }>(
      db,
      sql`SELECT "revision", "changes"->>'summary' AS "summary", "createdAt" FROM "KitRevision"
           WHERE "kitId" = ${kit.id} ORDER BY "revision" DESC LIMIT 5`,
    ),
    kit.forkedFromId === null ? Promise.resolve([] as KitRow[]) : loadKitRows(db, sql`k."id" = ${kit.forkedFromId}`),
  ]);
  const shown = visibleEntries(snapshot, items);
  const versions = await resolveVersions(
    db,
    shown.map((s) => ({ modId: s.item.modId, pinnedVersionId: s.item.pinnedVersionId })),
  );
  const source = forked[0];
  // Attribution links only to public sources: an unlisted kit's link is shared by its owner only.
  const sourceVisible = source !== undefined && source.visibility === 'public' && viewOf(source, null) === 'public';
  const itemDtos: KitDTO['items'] = shown.map(({ item, entry }, index) => {
    const version = versions.get(item.modId);
    const pinned = item.pinnedVersionId !== null && version && version.id === item.pinnedVersionId ? version : null;
    return {
      mod: entry.card,
      position: index,
      note: item.note,
      pinnedVersion: pinned ? { id: pinned.id, version: pinned.version.slice(0, 64) } : null,
      isAutoDependency: item.isAutoDependency,
      addedAt: item.addedAt.toISOString(),
    };
  });
  const card = cardOf(config, snapshot, kit, items);
  return {
    ...card,
    descriptionHtml: kit.descriptionHtml,
    ...(view === 'owner' ? { descriptionMd: kit.descriptionMd } : {}),
    items: itemDtos,
    forkedFrom:
      source && sourceVisible
        ? {
            id: source.id,
            name: source.name,
            canonicalPath: kitPath(source.ownerSlug, source.slug),
            ownerHandle: source.ownerSlug,
          }
        : null,
    multiplayer: multiplayerSummary(shown.map((s) => s.entry.multiplayerRole)),
    compat: kitCompatOf(snapshot, items, versions),
    totalBytes: totalBytes(shown.map((s) => versions.get(s.item.modId)?.fileSize ?? null)),
    recentRevisions: revisions.map((r) => ({
      revision: Math.max(1, toInt(r.revision)),
      summary: (r.summary ?? '').slice(0, 200),
      createdAt: (toDate(r.createdAt) ?? new Date(0)).toISOString(),
    })),
    noindex: kitNoindex(kit.visibility, kit.itemsCount),
    createdAt: kit.createdAt.toISOString(),
    // Private kits are never rendered (og.render skips them); a stale key must not leak either.
    ogImage: kit.visibility === 'private' ? null : ogImageOf(config, kit.ogImageKey),
  };
}
