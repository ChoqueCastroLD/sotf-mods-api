/**
 * Moderation decisions (PLAN §7.4 "Transiciones de estado", §5.2
 * `POST /ranger/mods/:id/decision` and `POST /ranger/versions/:id/decision`).
 *
 * Mods (`MOD_STATUS_TRANSITIONS` of the contracts is the single source of truth):
 *
 * | Action | From → to | Side effects |
 * |---|---|---|
 * | `approve` | `pending` → `published` | held files published from `quarantine/`, pending versions activated (latest recomputed), `mod.published` the first time, `mod.status_changed` (author signal) |
 * | `approve` | `unlisted` → `published` | re-list (e.g. after an auto-hide by reports) |
 * | `reject` | `pending` → `rejected` | pending versions rejected; reason required |
 * | `request_changes` | stays `pending` | `statusReason` = the requested changes; author signal |
 * | `unlist` | `published` → `unlisted` | |
 * | `remove` | `published`/`unlisted`/`archived` → `removed` | 410 + `Tombstone` of every known path, optional successor, forced email to the author |
 * | `restore` | `removed` → `published` | 👑 only; tombstones of the removal dropped |
 *
 * Versions: `approve` a held (`pending`) version publishes its file and activates it
 * (`version.published`, followers notified); `approve` an `active` version marks its post-review as
 * done; `reject` / `remove` pull a pending or active version (`rejected`, latest recomputed);
 * `request_changes` keeps a held version pending with the reason; `restore` (👑) re-activates a
 * version rejected after it had been published. Decisions on the versions of a `pending` mod are
 * taken on the mod.
 *
 * Every decision: one transaction with the status change, the `AuditLog` row, the domain events
 * (which drive the author's signal, the CDN purge, Discord and the compat refresh), the local
 * `NOTIFY cache` eviction and the new lane counts on the `moderation` SSE channel. The status
 * messages come from one enum (the legacy "unapprove said approved" bug cannot come back).
 */
import type { ModStatus } from '@sotf/contracts/common';
import { type DecisionBody, type DecisionResultDTO, MOD_STATUS_TRANSITIONS } from '@sotf/contracts/moderation';
import { modPath } from '@sotf/contracts/seo';
import { type JsonObject, type Transaction, upload } from '@sotf/db';
import { eq, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { textArray } from '../admin/sql.ts';
import { recordAudit } from '../audit/audit.ts';
import { query, queryOne, toDate } from '../follows/sql.ts';
import type { Ctx, Role } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { writeNotificationDrafts } from '../notifications/service.ts';
import { modRouting } from '../publishing/context.ts';
import { recomputeLatest } from '../publishing/versions.ts';
import { loadModerationTemplates, resolveReason } from '../settings/templates.ts';
import {
  attachmentDisposition,
  buildDownloadName,
  IMMUTABLE_CACHE_CONTROL,
  versionDownloadName,
} from '../storage/disposition.ts';
import { finalizeUpload } from '../uploads/service.ts';
import { assertStaff } from './guard.ts';
import { publishLaneCounts } from './lanes.ts';
import { kindOfType, type ModerationDeps, utcTimestamp } from './shared.ts';

type Decision = z.output<typeof DecisionBody>;
type DecisionResult = z.infer<typeof DecisionResultDTO>;
type ModerationAction = Decision['action'];

/** Actions that need a reason (a template, a note or both). */
const NEEDS_REASON: ReadonlySet<ModerationAction> = new Set(['reject', 'request_changes', 'remove']);

// -----------------------------------------------------------------------------------------------
// Allowed actions
// -----------------------------------------------------------------------------------------------

function transitionActor(role: Role): 'moderator' | 'admin' {
  return role === 'admin' ? 'admin' : 'moderator';
}

function allowed(from: ModStatus, to: ModStatus, role: Role): boolean {
  const actor = transitionActor(role);
  return MOD_STATUS_TRANSITIONS.some((t) => t.from === from && t.to === to && t.actors.includes(actor));
}

/** Target status of a mod decision (null when the action does not apply to that status). */
export function modTarget(action: ModerationAction, from: ModStatus): ModStatus | null {
  switch (action) {
    case 'approve':
      return from === 'pending' || from === 'unlisted' ? 'published' : null;
    case 'reject':
      return from === 'pending' ? 'rejected' : null;
    case 'request_changes':
      return from === 'pending' ? 'pending' : null;
    case 'unlist':
      return from === 'published' ? 'unlisted' : null;
    case 'remove':
      return from === 'published' || from === 'unlisted' || from === 'archived' ? 'removed' : null;
    case 'restore':
      return from === 'removed' ? 'published' : null;
  }
}

/** Actions a ranger with `role` may take on a mod in `status`. */
export function modAllowedActions(status: ModStatus, role: Role): ModerationAction[] {
  const out: ModerationAction[] = [];
  for (const action of ['approve', 'reject', 'request_changes', 'unlist', 'remove', 'restore'] as const) {
    const to = modTarget(action, status);
    if (to === null) continue;
    if (to === status || allowed(status, to, role)) out.push(action);
  }
  return out;
}

/** Actions a ranger with `role` may take on a version. */
export function versionAllowedActions(
  version: { status: string; publishedAt: Date | null },
  modStatus: ModStatus,
  role: Role,
): ModerationAction[] {
  if (modStatus === 'pending' || modStatus === 'removed' || modStatus === 'rejected') return [];
  switch (version.status) {
    case 'pending':
      return ['approve', 'reject', 'request_changes'];
    case 'active':
      return ['approve', 'reject', 'remove'];
    case 'rejected':
      return role === 'admin' && version.publishedAt !== null ? ['restore'] : [];
    default:
      return [];
  }
}

function assertReason(body: Decision): void {
  if (NEEDS_REASON.has(body.action) && !body.templateKey && !body.note?.trim()) {
    throw errors.validation('A template or a note is required for this action', [
      { path: 'note', code: 'required', message: 'reason required' },
    ]);
  }
}

// -----------------------------------------------------------------------------------------------
// Rows
// -----------------------------------------------------------------------------------------------

interface ModRow {
  id: number;
  name: string;
  slug: string;
  userId: number | null;
  userSlug: string | null;
  type: string | null;
  status: ModStatus;
  statusReason: string | null;
  publishedAt: Date | string | null;
  isNSFW: boolean;
  successorModId: number | null;
}

async function lockMod(tx: Transaction, id: number): Promise<ModRow> {
  const row = await queryOne<ModRow>(
    tx,
    sql`SELECT m."id", m."name", m."slug", m."userId", u."slug" AS "userSlug", m."type", m."status", m."statusReason",
               m."publishedAt", m."isNSFW", m."successorModId"
          FROM "Mod" m LEFT JOIN "User" u ON u."id" = m."userId"
         WHERE m."id" = ${id}
         FOR UPDATE OF m`,
  );
  if (!row || row.userId === null) throw errors.notFound('Mod');
  return row;
}

interface VersionRow {
  id: number;
  modId: number;
  version: string;
  status: string;
  statusReason: string | null;
  storageKey: string | null;
  extension: string | null;
  contentType: string | null;
  channel: string;
  publishedAt: Date | string | null;
}

const VERSION_COLUMNS = sql.raw(
  `v."id", v."modId", v."version", v."status", v."statusReason", v."storageKey", v."extension", v."contentType", v."channel", v."publishedAt"`,
);

// -----------------------------------------------------------------------------------------------
// Files of held versions
// -----------------------------------------------------------------------------------------------

interface UploadRef {
  final?: { key: string };
  quarantine?: { key: string };
  reserved?: { versionId?: number };
}

/**
 * Makes the file of a held version public at its stored key (`ModVersion.storageKey`, set at
 * submission): files that passed the checks are already there; flagged ones are copied from
 * `quarantine/` (then deleted there). Legacy versions (no upload) are left as they are.
 * Idempotent; runs before the decision's transaction (copies cannot be rolled back, and a retry
 * finds the file already published).
 */
export async function releaseHeldFile(
  ctx: Ctx,
  deps: ModerationDeps,
  version: VersionRow,
  modName: string,
  kind: 'mod' | 'library' | 'build',
): Promise<void> {
  if (!version.storageKey) return;
  const [row] = await ctx.db
    .select()
    .from(upload)
    .where(
      sql`(${upload.resultRef}->'reserved'->>'versionId') = ${String(version.id)}
          OR (${upload.resultRef}->'final'->>'key') = ${version.storageKey}`,
    )
    .orderBy(sql`${upload.createdAt} DESC`)
    .limit(1);
  if (!row) return;
  const ref = (row.resultRef ?? {}) as UploadRef;
  if (ref.final) return;
  const storage = deps.storage;
  if (!storage) throw errors.unavailable('File storage is not configured');
  const extension = kind === 'build' ? 'json' : 'zip';
  const contentType = version.contentType ?? (kind === 'build' ? 'application/json' : 'application/zip');
  const downloadName =
    kind === 'build' ? buildDownloadName(modName) : versionDownloadName(modName, version.version, extension);
  if (ref.quarantine) {
    const bucket = storage.config.publicBucket;
    await storage.copy(
      { bucket: row.bucket, key: ref.quarantine.key },
      {
        bucket,
        key: version.storageKey,
        contentType,
        cacheControl: IMMUTABLE_CACHE_CONTROL,
        contentDisposition: attachmentDisposition(downloadName),
      },
    );
    const head = await storage.head(bucket, version.storageKey);
    if (!head || head.size !== row.declaredBytes) {
      throw errors.unavailable('The published copy does not match the upload; try again');
    }
    const final = { bucket, key: version.storageKey, size: head.size, at: ctx.clock.now().toISOString() };
    await ctx.db
      .update(upload)
      .set({ resultRef: JSON.parse(JSON.stringify({ ...ref, final })) as JsonObject })
      .where(eq(upload.id, row.id));
    await storage.delete(row.bucket, ref.quarantine.key);
    ctx.log.info({ uploadId: row.id, versionId: version.id }, 'held file published by moderation');
    return;
  }
  await finalizeUpload(ctx, storage, { uploadId: row.id, key: version.storageKey, downloadName, contentType });
}

// -----------------------------------------------------------------------------------------------
// Author signals that no domain event covers (changes requested, version decisions)
// -----------------------------------------------------------------------------------------------

async function signalAuthor(
  ctx: Ctx,
  tx: Transaction,
  mod: ModRow,
  data: Record<string, string | number | boolean | null>,
  dedupeKey: string,
): Promise<void> {
  if (mod.userId === null) return;
  await writeNotificationDrafts(
    tx,
    { jobs: ctx.jobs, clock: ctx.clock },
    [
      {
        userId: mod.userId,
        type: 'mod.status_changed',
        actorId: null,
        target: { type: 'mod', id: mod.id, title: mod.name, path: `/basecamp/mods/${mod.id}/details` },
        groupKey: null,
        data: { modId: mod.id, modName: mod.name, ...data },
        dedupeKey,
      },
    ],
    'moderation',
  );
}

// -----------------------------------------------------------------------------------------------
// Mods
// -----------------------------------------------------------------------------------------------

function modCacheTags(mod: ModRow): string[] {
  const kind = kindOfType(mod.type);
  return [
    `mod:${mod.id}`,
    ...(mod.userId ? [`user:${mod.userId}`] : []),
    kind === 'build' ? 'list:builds' : 'list:mods',
    'search-index',
    'sitemap',
    'feed',
    'home',
  ];
}

/** Known public paths of a mod (canonical + slug history), for the removal tombstones. */
async function modPaths(tx: Transaction, mod: ModRow): Promise<string[]> {
  const kind = kindOfType(mod.type);
  const paths = new Set<string>();
  if (mod.userSlug) paths.add(modPath(kind, mod.userSlug, mod.slug));
  const history = await query<{ userSlug: string; slug: string }>(
    tx,
    sql`SELECT "userSlug", "slug" FROM "ModSlugHistory" WHERE "modId" = ${mod.id}`,
  );
  for (const h of history) paths.add(modPath(kind, h.userSlug, h.slug));
  return [...paths];
}

const REMOVAL_TOMBSTONE_REASON = 'removed by moderation';

/** `POST /ranger/mods/:id/decision`. */
export async function decideMod(
  ctx: Ctx,
  deps: ModerationDeps,
  modId: number,
  body: Decision,
): Promise<DecisionResult> {
  const actor = await assertStaff(ctx, 'moderation.decide');
  assertReason(body);
  if (body.action === 'restore') await assertStaff(ctx, 'mod.restore');
  const templates = await loadModerationTemplates(ctx.db);
  const reason = resolveReason(templates, body.action, body.templateKey, body.note);

  // Publish the held files first (outside the transaction: object copies cannot roll back).
  if (body.action === 'approve') {
    const current = await queryOne<{ name: string; type: string | null; status: string }>(
      ctx.db,
      sql`SELECT "name", "type", "status" FROM "Mod" WHERE "id" = ${modId}`,
    );
    if (!current) throw errors.notFound('Mod');
    if (current.status === 'pending') {
      const held = await query<VersionRow>(
        ctx.db,
        sql`SELECT ${VERSION_COLUMNS} FROM "ModVersion" v WHERE v."modId" = ${modId} AND v."status" = 'pending'`,
      );
      for (const v of held) await releaseHeldFile(ctx, deps, v, current.name, kindOfType(current.type));
    }
  }

  const result = await ctx.db.transaction(async (tx) => {
    const mod = await lockMod(tx, modId);
    const from = mod.status;
    const to = modTarget(body.action, from);
    if (to === null) throw errors.conflict(`Cannot ${body.action.replace('_', ' ')} a ${from} mod`);
    if (to !== from && !allowed(from, to, actor.role)) throw errors.forbidden('Your role cannot do this');
    const now = ctx.clock.now();
    const kind = kindOfType(mod.type);
    const routing = await modRouting(tx, mod.id);
    const eventRouting = {
      modId: mod.id,
      authorId: routing.authorId,
      kind: routing.kind,
      categorySlug: routing.categorySlug,
    };
    const statusReason = body.action === 'approve' || body.action === 'restore' ? null : reason.text;
    let successorModId = mod.successorModId;

    if (body.action === 'remove' && body.successorModId !== undefined) {
      if (body.successorModId === mod.id) {
        throw errors.validation('A mod cannot succeed itself', [
          { path: 'successorModId', code: 'invalid', message: 'same mod' },
        ]);
      }
      const successor = await queryOne<{ status: string }>(
        tx,
        sql`SELECT "status" FROM "Mod" WHERE "id" = ${body.successorModId}`,
      );
      if (successor?.status !== 'published') {
        throw errors.validation('The successor must be a published mod', [
          { path: 'successorModId', code: 'invalid', message: 'successor not published' },
        ]);
      }
      successorModId = body.successorModId;
    }

    const activated: number[] = [];
    if (body.action === 'approve' && from === 'pending') {
      const held = await query<VersionRow>(
        tx,
        sql`SELECT ${VERSION_COLUMNS} FROM "ModVersion" v WHERE v."modId" = ${mod.id} AND v."status" = 'pending' FOR UPDATE OF v`,
      );
      for (const v of held) {
        await tx.execute(
          sql`UPDATE "ModVersion" SET "status" = 'active', "statusReason" = NULL,
                     "publishedAt" = coalesce("publishedAt", ${utcTimestamp(now)}), "updatedAt" = ${utcTimestamp(now)}
               WHERE "id" = ${v.id}`,
        );
        activated.push(v.id);
        const tested = await query<{ gameBuildId: number }>(
          tx,
          sql`SELECT "gameBuildId" FROM "ModVersionCompat" WHERE "modVersionId" = ${v.id} AND "authorTested"`,
        );
        for (const t of tested) {
          await ctx.jobs.enqueue('compat.aggregate', { modVersionId: v.id, gameBuildId: t.gameBuildId }, { tx });
        }
      }
      if (activated.length > 0) await recomputeLatest(tx, mod.id, kind);
    }
    if (body.action === 'reject') {
      await tx.execute(
        sql`UPDATE "ModVersion" SET "status" = 'rejected', "statusReason" = ${reason.text}, "updatedAt" = ${utcTimestamp(now)}
             WHERE "modId" = ${mod.id} AND "status" = 'pending'`,
      );
    }

    const firstPublication = to === 'published' && mod.publishedAt === null;
    await tx.execute(
      sql`UPDATE "Mod" SET "status" = ${to}, "statusReason" = ${statusReason},
                 "statusChangedAt" = ${utcTimestamp(now)}, "updatedAt" = ${utcTimestamp(now)},
                 "publishedAt" = ${firstPublication ? utcTimestamp(now) : sql`"publishedAt"`},
                 "approvedAt" = ${body.action === 'approve' && from === 'pending' ? utcTimestamp(now) : sql`"approvedAt"`},
                 "approvedById" = ${body.action === 'approve' && from === 'pending' ? actor.userId : sql`"approvedById"`},
                 "removedAt" = ${to === 'removed' ? utcTimestamp(now) : to === 'published' ? null : sql`"removedAt"`},
                 "successorModId" = ${successorModId}
           WHERE "id" = ${mod.id}`,
    );

    if (to === 'removed') {
      for (const path of await modPaths(tx, mod)) {
        await tx.execute(
          sql`INSERT INTO "Tombstone" ("path", "status", "reason") VALUES (${path}, 410, ${REMOVAL_TOMBSTONE_REASON})
              ON CONFLICT ("path") DO NOTHING`,
        );
      }
    }
    if (body.action === 'restore') {
      const paths = await modPaths(tx, mod);
      if (paths.length > 0) {
        await tx.execute(
          sql`DELETE FROM "Tombstone" WHERE "reason" = ${REMOVAL_TOMBSTONE_REASON}
                AND "path" = ANY(${textArray(paths)})`,
        );
      }
    }

    const auditId = await recordAudit(tx, ctx, {
      action: `mod.${body.action}`,
      targetType: 'mod',
      targetId: mod.id,
      before: { status: from, statusReason: mod.statusReason },
      after: {
        status: to,
        statusReason,
        ...(activated.length > 0 ? { activatedVersionIds: activated } : {}),
        ...(to === 'removed' && successorModId !== null ? { successorModId } : {}),
      },
      reason: reason.text,
    });
    for (const versionId of activated) {
      await recordAudit(tx, ctx, {
        action: 'version.approve',
        targetType: 'version',
        targetId: versionId,
        before: { status: 'pending' },
        after: { status: 'active' },
      });
    }

    if (to !== from) {
      await ctx.jobs.emitNew(
        tx,
        'mod.status_changed',
        { ...eventRouting, from, to, reason: statusReason, templateKey: reason.templateKey },
        { actorId: actor.userId },
      );
      if (firstPublication) {
        await ctx.jobs.emitNew(tx, 'mod.published', { ...eventRouting, nsfw: mod.isNSFW }, { actorId: actor.userId });
      }
    } else {
      // Changes requested: the mod stays pending; the author is told what to change.
      await signalAuthor(
        ctx,
        tx,
        mod,
        { from, status: 'changes_requested', reason: statusReason, templateKey: reason.templateKey },
        `moderation:${auditId}`,
      );
    }
    await publishCacheInvalidation(tx, modCacheTags(mod));
    await publishLaneCounts(tx, now, kind === 'build' ? ['builds', 'post_review'] : ['new_mods', 'post_review']);
    return { mod, to, statusReason, auditId };
  });

  ctx.caches?.invalidate(modCacheTags(result.mod));
  ctx.log.info(
    { modId, action: body.action, from: result.mod.status, to: result.to, actorId: actor.userId },
    'moderation decision on a mod',
  );
  return {
    targetType: 'mod',
    targetId: modId,
    status: result.to,
    statusReason: result.statusReason,
    auditId: result.auditId,
  };
}

// -----------------------------------------------------------------------------------------------
// Versions
// -----------------------------------------------------------------------------------------------

/** `POST /ranger/versions/:id/decision`. */
export async function decideVersion(
  ctx: Ctx,
  deps: ModerationDeps,
  versionId: number,
  body: Decision,
): Promise<DecisionResult> {
  const actor = await assertStaff(ctx, 'moderation.decide');
  assertReason(body);
  if (body.action === 'unlist') throw errors.conflict('Versions cannot be unlisted: unlist the mod');
  if (body.action === 'restore') await assertStaff(ctx, 'mod.restore');
  const templates = await loadModerationTemplates(ctx.db);
  const reason = resolveReason(templates, body.action, body.templateKey, body.note);

  const found = await queryOne<VersionRow & { modName: string; modType: string | null; modStatus: ModStatus }>(
    ctx.db,
    sql`SELECT ${VERSION_COLUMNS}, m."name" AS "modName", m."type" AS "modType", m."status" AS "modStatus"
          FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" WHERE v."id" = ${versionId}`,
  );
  if (!found) throw errors.notFound('Version');
  if (found.modStatus === 'pending') throw errors.conflict('This mod is waiting for review: decide on the mod');
  if (body.action === 'approve' && found.status === 'pending') {
    await releaseHeldFile(ctx, deps, found, found.modName, kindOfType(found.modType));
  }

  const result = await ctx.db.transaction(async (tx) => {
    const mod = await lockMod(tx, found.modId);
    const version = await queryOne<VersionRow>(
      tx,
      sql`SELECT ${VERSION_COLUMNS} FROM "ModVersion" v WHERE v."id" = ${versionId} FOR UPDATE OF v`,
    );
    if (!version) throw errors.notFound('Version');
    const allowedNow = versionAllowedActions(
      { status: version.status, publishedAt: toDate(version.publishedAt) },
      mod.status,
      actor.role,
    );
    if (!allowedNow.includes(body.action)) {
      throw errors.conflict(
        `Cannot ${body.action.replace('_', ' ')} a ${version.status} version of a ${mod.status} mod`,
      );
    }
    const now = ctx.clock.now();
    const kind = kindOfType(mod.type);
    const routing = await modRouting(tx, mod.id);
    const eventRouting = {
      modId: mod.id,
      authorId: routing.authorId,
      kind: routing.kind,
      categorySlug: routing.categorySlug,
    };
    const from = version.status as 'pending' | 'active' | 'rejected';
    let to: string = from;
    let action = `version.${body.action}`;

    switch (body.action) {
      case 'approve': {
        if (from === 'active') {
          action = 'version.post_review_approve';
          break;
        }
        to = 'active';
        await tx.execute(
          sql`UPDATE "ModVersion" SET "status" = 'active', "statusReason" = NULL,
                     "publishedAt" = coalesce("publishedAt", ${utcTimestamp(now)}), "updatedAt" = ${utcTimestamp(now)}
               WHERE "id" = ${version.id}`,
        );
        const latest = await recomputeLatest(tx, mod.id, kind);
        await tx.execute(
          sql`UPDATE "Mod" SET "updatedAt" = ${utcTimestamp(now)}
                     ${latest === version.version ? sql`, "lastReleasedAt" = ${utcTimestamp(now)}` : sql``}
               WHERE "id" = ${mod.id}`,
        );
        const tested = await query<{ gameBuildId: number }>(
          tx,
          sql`SELECT "gameBuildId" FROM "ModVersionCompat" WHERE "modVersionId" = ${version.id} AND "authorTested"`,
        );
        for (const t of tested) {
          await ctx.jobs.enqueue('compat.aggregate', { modVersionId: version.id, gameBuildId: t.gameBuildId }, { tx });
        }
        await ctx.jobs.emitNew(
          tx,
          'version.published',
          {
            ...eventRouting,
            versionId: version.id,
            version: version.version,
            channel: version.channel === 'beta' ? 'beta' : 'release',
            notifyFollowers: true,
            nsfw: mod.isNSFW,
          },
          { actorId: actor.userId },
        );
        break;
      }
      case 'reject':
      case 'remove': {
        to = 'rejected';
        await tx.execute(
          sql`UPDATE "ModVersion" SET "status" = 'rejected', "statusReason" = ${reason.text}, "updatedAt" = ${utcTimestamp(now)}
               WHERE "id" = ${version.id}`,
        );
        if (from === 'active') await recomputeLatest(tx, mod.id, kind);
        break;
      }
      case 'request_changes': {
        await tx.execute(
          sql`UPDATE "ModVersion" SET "statusReason" = ${reason.text}, "updatedAt" = ${utcTimestamp(now)}
               WHERE "id" = ${version.id}`,
        );
        break;
      }
      case 'restore': {
        to = 'active';
        await tx.execute(
          sql`UPDATE "ModVersion" SET "status" = 'active', "statusReason" = NULL, "updatedAt" = ${utcTimestamp(now)}
               WHERE "id" = ${version.id}`,
        );
        await recomputeLatest(tx, mod.id, kind);
        break;
      }
      case 'unlist':
        throw errors.conflict('Versions cannot be unlisted');
    }

    const statusReason = to === 'active' ? null : body.action === 'approve' ? version.statusReason : reason.text;
    const auditId = await recordAudit(tx, ctx, {
      action,
      targetType: 'version',
      targetId: version.id,
      before: { status: from, statusReason: version.statusReason },
      after: { status: to, statusReason },
      reason: reason.text,
    });
    if (to !== from && !(body.action === 'approve' && from === 'pending')) {
      await ctx.jobs.emitNew(
        tx,
        'version.status_changed',
        {
          ...eventRouting,
          versionId: version.id,
          from: from as 'pending' | 'active' | 'rejected',
          to: to as 'active' | 'rejected',
          reason: statusReason,
        },
        { actorId: actor.userId },
      );
    }
    if (to !== from || body.action === 'request_changes') {
      await signalAuthor(
        ctx,
        tx,
        mod,
        {
          from: mod.status,
          status:
            body.action === 'request_changes'
              ? 'version_changes_requested'
              : to === 'active'
                ? 'version_approved'
                : 'version_rejected',
          versionId: version.id,
          version: version.version,
          reason: statusReason,
          templateKey: reason.templateKey,
        },
        `moderation:${auditId}`,
      );
    }
    await publishCacheInvalidation(tx, modCacheTags(mod));
    await publishLaneCounts(tx, now, kind === 'build' ? ['builds'] : ['versions', 'post_review']);
    return { mod, to, statusReason, auditId };
  });

  ctx.caches?.invalidate(modCacheTags(result.mod));
  ctx.log.info(
    { versionId, action: body.action, to: result.to, actorId: actor.userId },
    'moderation decision on a version',
  );
  return {
    targetType: 'version',
    targetId: versionId,
    status: result.to,
    statusReason: result.statusReason,
    auditId: result.auditId,
  };
}
