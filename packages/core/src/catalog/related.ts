/**
 * "Required by" and related mods (PLAN §5.2 `GET /mods/:id/dependents`, `GET /mods/:id/related`;
 * T0-09). Related = same category and shared tags plus text similarity of the name and short
 * description (co-downloads arrive in T1). Only published, non-NSFW mods of the same family
 * (builds with builds, mods and libraries together) are suggested.
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import type { DependencyDTO, VersionDTO } from '@sotf/contracts/versions';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { assertReachable, getVersionsData } from './detail.ts';
import type { CatalogConfig } from './media.ts';
import { type CatalogEntry, type CatalogSnapshot, getSnapshot, isListable } from './snapshot.ts';
import { cached } from './sql.ts';
import { latestOf, loadDependentIds, selectVersion } from './versions.ts';

export const RELATED_LIMIT = 8;
export const DEPENDENTS_LIMIT = 100;

function jaccard(a: ReadonlySet<string>, b: ReadonlySet<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let common = 0;
  for (const w of a) if (b.has(w)) common += 1;
  return common / (a.size + b.size - common);
}

/** Similarity score of `candidate` for `target` (0 = unrelated). */
export function relatedScore(target: CatalogEntry, candidate: CatalogEntry): number {
  let score = 0;
  if (target.categoryId !== null && target.categoryId === candidate.categoryId) score += 1;
  const shared = candidate.tagIds.filter((id) => target.tagIds.includes(id)).length;
  score += shared * 1.5;
  score += jaccard(target.words, candidate.words) * 4;
  return score;
}

export function relatedEntries(snapshot: CatalogSnapshot, target: CatalogEntry, limit = RELATED_LIMIT): CatalogEntry[] {
  const family = (e: CatalogEntry) => (e.kind === 'build' ? 'build' : 'mod');
  return (
    snapshot.entries
      .filter((e) => e.id !== target.id && family(e) === family(target) && isListable(snapshot, e))
      .map((e) => ({ e, score: relatedScore(target, e) }))
      // Same category alone is a weak signal: require it plus something else, or a tag/text match.
      .filter((x) => x.score > 1 || (x.score > 0 && x.e.categoryId !== target.categoryId))
      .sort(
        (a, b) =>
          b.score - a.score || b.e.downloads7d - a.e.downloads7d || b.e.downloads - a.e.downloads || a.e.id - b.e.id,
      )
      .slice(0, limit)
      .map((x) => x.e)
  );
}

/** Related mods of a reachable mod. */
export async function getRelated(ctx: Ctx, config: CatalogConfig, id: number): Promise<ModCardDTO[]> {
  const snapshot = await getSnapshot(ctx, config);
  const entry = assertReachable(snapshot, snapshot.byId.get(id));
  let related = relatedEntries(snapshot, entry);
  if (related.length < RELATED_LIMIT && entry.categoryId !== null) {
    // Small categories: top up with the most downloaded mods of the same category.
    const taken = new Set([entry.id, ...related.map((e) => e.id)]);
    const fill = snapshot.entries
      .filter(
        (e) =>
          !taken.has(e.id) && e.categoryId === entry.categoryId && e.kind === entry.kind && isListable(snapshot, e),
      )
      .sort((a, b) => b.downloads - a.downloads || a.id - b.id)
      .slice(0, RELATED_LIMIT - related.length);
    related = [...related, ...fill];
  }
  return related.map((e) => e.card);
}

/** Published mods that require this one (most downloaded first). */
export async function getDependents(ctx: Ctx, config: CatalogConfig, id: number): Promise<ModCardDTO[]> {
  const snapshot = await getSnapshot(ctx, config);
  const entry = assertReachable(snapshot, snapshot.byId.get(id));
  const ids = await cached<number[]>(
    ctx,
    { name: 'catalog:dependents', max: 500, ttlMs: 60_000 },
    String(entry.id),
    async () => ({
      value: await loadDependentIds(ctx, snapshot, entry),
      tags: [`mod:${entry.id}`, 'list:mods'],
    }),
  );
  return ids
    .slice(0, DEPENDENTS_LIMIT)
    .map((depId) => snapshot.byId.get(depId))
    .filter((e): e is CatalogEntry => e !== undefined && isListable(snapshot, e))
    .map((e) => e.card);
}

/** Resolved dependencies of the latest version. */
export async function getDependencies(ctx: Ctx, config: CatalogConfig, id: number): Promise<DependencyDTO[]> {
  const snapshot = await getSnapshot(ctx, config);
  const entry = assertReachable(snapshot, snapshot.byId.get(id));
  const { versions } = await getVersionsData(ctx, snapshot, entry);
  return latestOf(versions)?.dependencies ?? [];
}

/** Every public version of a reachable mod, newest first. */
export async function getVersionList(ctx: Ctx, config: CatalogConfig, id: number): Promise<VersionDTO[]> {
  const snapshot = await getSnapshot(ctx, config);
  const entry = assertReachable(snapshot, snapshot.byId.get(id));
  return (await getVersionsData(ctx, snapshot, entry)).versions;
}

/** One version by id, version string or `latest` (NOT_FOUND when the mod has no such public version). */
export async function getVersion(ctx: Ctx, config: CatalogConfig, id: number, selector: string): Promise<VersionDTO> {
  const versions = await getVersionList(ctx, config, id);
  const found = selectVersion(versions, selector);
  if (!found) throw errors.notFound('Version');
  return found;
}
