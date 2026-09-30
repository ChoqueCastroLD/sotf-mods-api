/**
 * Known issues and FAQ of a mod. Both lists are replaced as a whole by the editor (items with an
 * `id` are updated, new ones inserted, the rest deleted); position = index in the list. Owners,
 * accepted co-authors and admins edit; everyone reads the public version.
 */
import type { UserRefDTO } from '@sotf/contracts/common';
import type {
  CoAuthorDTO,
  FaqEntryDTO,
  FaqInput,
  KnownIssueDTO,
  KnownIssueInput,
  ModKnowledgeDTO,
} from '@sotf/contracts/mod-knowledge';
import { type Executor, modCoAuthor, modFaqEntry, modKnownIssue } from '@sotf/db';
import { and, asc, eq, inArray, notInArray } from 'drizzle-orm';
import { loadUserRefs } from '../catalog/snapshot.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { actorOf, assertWriter, loadManagedMod, lockManagedMod } from '../publishing/queries.ts';
import { announceModChange, evictModCaches, type KnowledgeDeps, loadPublicMod } from './common.ts';

function issueDto(r: typeof modKnownIssue.$inferSelect): KnownIssueDTO {
  return {
    id: r.id,
    title: r.title,
    body: r.body,
    status: r.status,
    affectedVersions: r.affectedVersions,
    fixedInVersion: r.fixedInVersion,
    createdAt: r.createdAt.toISOString(),
    updatedAt: r.updatedAt.toISOString(),
    resolvedAt: r.resolvedAt?.toISOString() ?? null,
  };
}

function faqDto(r: typeof modFaqEntry.$inferSelect): FaqEntryDTO {
  return { id: r.id, question: r.question, answer: r.answer };
}

/** Open and investigating issues first (author order), then the fixed ones (newest first). */
export async function readKnownIssues(exec: Executor, modId: number): Promise<KnownIssueDTO[]> {
  const rows = await exec
    .select()
    .from(modKnownIssue)
    .where(eq(modKnownIssue.modId, modId))
    .orderBy(asc(modKnownIssue.position), asc(modKnownIssue.id));
  const active = rows.filter((r) => r.status !== 'fixed');
  const fixed = rows
    .filter((r) => r.status === 'fixed')
    .sort((a, b) => (b.resolvedAt?.getTime() ?? 0) - (a.resolvedAt?.getTime() ?? 0));
  return [...active, ...fixed].map(issueDto);
}

export async function readFaq(exec: Executor, modId: number): Promise<FaqEntryDTO[]> {
  const rows = await exec
    .select()
    .from(modFaqEntry)
    .where(eq(modFaqEntry.modId, modId))
    .orderBy(asc(modFaqEntry.position), asc(modFaqEntry.id));
  return rows.map(faqDto);
}

export async function readCoAuthors(ctx: Ctx, deps: KnowledgeDeps, modId: number): Promise<CoAuthorDTO[]> {
  const rows = await ctx.db
    .select()
    .from(modCoAuthor)
    .where(and(eq(modCoAuthor.modId, modId), eq(modCoAuthor.status, 'accepted')))
    .orderBy(asc(modCoAuthor.respondedAt), asc(modCoAuthor.id));
  const refs = await loadUserRefs(
    ctx.db,
    deps.config,
    rows.map((r) => r.userId),
  );
  const out: CoAuthorDTO[] = [];
  for (const r of rows) {
    const user: UserRefDTO | undefined = refs.get(r.userId);
    if (user) out.push({ user, acceptedAt: (r.respondedAt ?? r.invitedAt).toISOString() });
  }
  return out;
}

async function knowledgeOf(ctx: Ctx, deps: KnowledgeDeps, modId: number): Promise<ModKnowledgeDTO> {
  const [knownIssues, faq, coAuthors] = await Promise.all([
    readKnownIssues(ctx.db, modId),
    readFaq(ctx.db, modId),
    readCoAuthors(ctx, deps, modId),
  ]);
  return { knownIssues, faq, coAuthors };
}

/** `GET /mods/:id/knowledge` (public mods only). */
export async function getModKnowledge(ctx: Ctx, deps: KnowledgeDeps, modId: number): Promise<ModKnowledgeDTO> {
  await loadPublicMod(ctx.db, modId);
  return knowledgeOf(ctx, deps, modId);
}

/** `GET /studio/mods/:id/knowledge`. */
export async function getStudioKnowledge(ctx: Ctx, deps: KnowledgeDeps, modId: number): Promise<ModKnowledgeDTO> {
  await loadManagedMod(ctx, modId);
  return knowledgeOf(ctx, deps, modId);
}

function duplicateIds(ids: readonly number[]): boolean {
  return new Set(ids).size !== ids.length;
}

/** `PUT /studio/mods/:id/known-issues`. */
export async function putKnownIssues(
  ctx: Ctx,
  modId: number,
  items: readonly KnownIssueInput[],
): Promise<KnownIssueDTO[]> {
  assertWriter(ctx);
  const actor = actorOf(ctx);
  const current = await loadManagedMod(ctx, modId);
  if (current.status === 'removed') throw errors.forbidden('A removed mod cannot be edited');
  const sentIds = items.flatMap((i) => (i.id === undefined ? [] : [i.id]));
  if (duplicateIds(sentIds)) {
    throw errors.validation('Duplicate known issue', [{ path: 'items', code: 'duplicate', message: 'Repeated id' }]);
  }
  const now = ctx.clock.now();
  await ctx.db.transaction(async (tx) => {
    await lockManagedMod(ctx, tx, current.id);
    const existing = await tx.select().from(modKnownIssue).where(eq(modKnownIssue.modId, current.id));
    const byId = new Map(existing.map((r) => [r.id, r]));
    for (const id of sentIds) {
      if (!byId.has(id)) {
        throw errors.validation('Unknown known issue', [{ path: 'items', code: 'unknown_id', message: `Issue ${id}` }]);
      }
    }
    if (sentIds.length === 0) await tx.delete(modKnownIssue).where(eq(modKnownIssue.modId, current.id));
    else
      await tx
        .delete(modKnownIssue)
        .where(and(eq(modKnownIssue.modId, current.id), notInArray(modKnownIssue.id, sentIds)));
    for (const [position, item] of items.entries()) {
      const before = item.id === undefined ? undefined : byId.get(item.id);
      const values = {
        title: item.title,
        body: item.body ?? '',
        status: item.status,
        affectedVersions: item.affectedVersions?.trim() || null,
        fixedInVersion: item.status === 'fixed' ? item.fixedInVersion?.trim() || null : null,
        position,
        resolvedAt: item.status === 'fixed' ? (before?.status === 'fixed' ? before.resolvedAt : now) : null,
        updatedAt: now,
      };
      if (before) await tx.update(modKnownIssue).set(values).where(eq(modKnownIssue.id, before.id));
      else await tx.insert(modKnownIssue).values({ ...values, modId: current.id, createdById: actor.userId });
    }
    await announceModChange(ctx, tx, current, 'knownIssues');
  });
  evictModCaches(ctx, current);
  ctx.log.info({ modId: current.id, count: items.length }, 'known issues replaced');
  return readKnownIssues(ctx.db, current.id);
}

/** `PUT /studio/mods/:id/faq`. */
export async function putFaq(ctx: Ctx, modId: number, items: readonly FaqInput[]): Promise<FaqEntryDTO[]> {
  assertWriter(ctx);
  const current = await loadManagedMod(ctx, modId);
  if (current.status === 'removed') throw errors.forbidden('A removed mod cannot be edited');
  const sentIds = items.flatMap((i) => (i.id === undefined ? [] : [i.id]));
  if (duplicateIds(sentIds)) {
    throw errors.validation('Duplicate FAQ entry', [{ path: 'items', code: 'duplicate', message: 'Repeated id' }]);
  }
  const now = ctx.clock.now();
  await ctx.db.transaction(async (tx) => {
    await lockManagedMod(ctx, tx, current.id);
    const existing = await tx
      .select({ id: modFaqEntry.id })
      .from(modFaqEntry)
      .where(and(eq(modFaqEntry.modId, current.id), sentIds.length > 0 ? inArray(modFaqEntry.id, sentIds) : undefined));
    if (existing.length !== sentIds.length) {
      throw errors.validation('Unknown FAQ entry', [{ path: 'items', code: 'unknown_id', message: 'Unknown id' }]);
    }
    if (sentIds.length === 0) await tx.delete(modFaqEntry).where(eq(modFaqEntry.modId, current.id));
    else
      await tx.delete(modFaqEntry).where(and(eq(modFaqEntry.modId, current.id), notInArray(modFaqEntry.id, sentIds)));
    for (const [position, item] of items.entries()) {
      const values = { question: item.question, answer: item.answer, position, updatedAt: now };
      if (item.id === undefined) await tx.insert(modFaqEntry).values({ ...values, modId: current.id });
      else await tx.update(modFaqEntry).set(values).where(eq(modFaqEntry.id, item.id));
    }
    await announceModChange(ctx, tx, current, 'faq');
  });
  evictModCaches(ctx, current);
  ctx.log.info({ modId: current.id, count: items.length }, 'FAQ replaced');
  return readFaq(ctx.db, current.id);
}
