/**
 * Mod Jam reads. Public reads never expose a draft, a hidden theme before submissions open, vote
 * counts or averages before the results are published, or entries that are not `active`.
 */
import {
  JAM_OVERALL_KEY,
  type JamAdminDTO,
  type JamAdminEntryDTO,
  type JamCategoryDTO,
  type JamDTO,
  type JamEntriesDTO,
  type JamEntryDTO,
  type JamListDTO,
  type JamPhase,
  type JamResultsDTO,
  type JamSummaryDTO,
  type MyJamsDTO,
} from '@sotf/contracts/jams';
import { modPath } from '@sotf/contracts/seo';
import { type Executor, jam as jamTable } from '@sotf/db';
import { eq, sql } from 'drizzle-orm';
import { type CommunityConfig, firstRow, rows } from '../comments/shared.ts';
import { loadModCards } from '../downloads/cards.ts';
import { errors } from '../kernel/errors.ts';
import { loadUserRefs } from '../requests/queries.ts';
import { publicObjectUrl } from '../storage/keys.ts';
import { isPublicPhase, showsResults, shuffleEntries, themeVisible } from './rules.ts';

export type JamRow = typeof jamTable.$inferSelect;

const kindOf = (value: string) =>
  (value === 'build' ? 'build' : value === 'library' ? 'library' : 'mod') as Parameters<typeof modPath>[0];
const iso = (value: Date | null): string | null => (value ? value.toISOString() : null);

const ACCENTS = new Set(['signal', 'forest', 'ember', 'ocean', 'violet']);
const accentOf = (value: string) => (ACCENTS.has(value) ? (value as JamSummaryDTO['accent']) : 'signal');

export async function loadJamBySlug(db: Executor, slug: string): Promise<JamRow | null> {
  const [row] = await db.select().from(jamTable).where(eq(jamTable.slug, slug)).limit(1);
  return row ?? null;
}

export async function loadJamById(db: Executor, id: number): Promise<JamRow | null> {
  const [row] = await db.select().from(jamTable).where(eq(jamTable.id, id)).limit(1);
  return row ?? null;
}

/** A public jam by slug (drafts are a 404 for everybody; staff use the admin reads). */
export async function requirePublicJam(db: Executor, slug: string): Promise<JamRow> {
  const row = await loadJamBySlug(db, slug);
  if (!row || !isPublicPhase(row.phase)) throw errors.notFound('Jam');
  return row;
}

export async function loadCategories(db: Executor, jamId: number): Promise<JamCategoryDTO[]> {
  return rows<JamCategoryDTO>(
    db,
    sql`SELECT "id", "key", "label", "weight", "position" FROM "JamCategory"
         WHERE "jamId" = ${jamId} ORDER BY "position", "id"`,
  );
}

async function entryCounts(db: Executor, jamIds: readonly number[]): Promise<Map<number, number>> {
  const out = new Map<number, number>();
  if (jamIds.length === 0) return out;
  const found = await rows<{ jamId: number; n: number }>(
    db,
    sql`SELECT "jamId", count(*)::int AS "n" FROM "JamEntry"
         WHERE "status" = 'active' AND "jamId" IN (${sql.join(
           jamIds.map((id) => sql`${id}`),
           sql`, `,
         )}) GROUP BY "jamId"`,
  );
  for (const row of found) out.set(row.jamId, row.n);
  return out;
}

function summaryOf(row: JamRow, entryCount: number, config: CommunityConfig): JamSummaryDTO {
  const showTheme = themeVisible(row.themeHidden, row.phase);
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    tagline: row.tagline,
    theme: showTheme && row.theme !== '' ? row.theme : null,
    themeHidden: !showTheme,
    bannerUrl: row.bannerUrl,
    accent: accentOf(row.accent),
    phase: row.phase,
    entryCount,
    announceAt: iso(row.announceAt),
    submissionsOpenAt: iso(row.submissionsOpenAt),
    submissionsCloseAt: iso(row.submissionsCloseAt),
    votingOpenAt: iso(row.votingOpenAt),
    votingCloseAt: iso(row.votingCloseAt),
    archiveAt: iso(row.archiveAt),
    resultsPublishedAt: iso(row.resultsPublishedAt),
    ogImageUrl: row.ogImageKey ? publicObjectUrl(config.mediaBaseUrl, row.ogImageKey) : null,
  };
}

export async function listJams(db: Executor, config: CommunityConfig): Promise<JamListDTO> {
  const found = (await db.select().from(jamTable)).filter((row) => isPublicPhase(row.phase));
  const counts = await entryCounts(
    db,
    found.map((row) => row.id),
  );
  const time = (row: JamRow) => (row.submissionsOpenAt ?? row.announceAt ?? row.createdAt).getTime();
  found.sort((a, b) => time(b) - time(a));
  return { items: found.map((row) => summaryOf(row, counts.get(row.id) ?? 0, config)) };
}

export async function getJam(db: Executor, config: CommunityConfig, slug: string): Promise<JamDTO> {
  const row = await requirePublicJam(db, slug);
  const [counts, categories] = await Promise.all([entryCounts(db, [row.id]), loadCategories(db, row.id)]);
  const showTheme = themeVisible(row.themeHidden, row.phase);
  return {
    ...summaryOf(row, counts.get(row.id) ?? 0, config),
    // Until the theme is revealed the description may still talk about it: withhold it too.
    descriptionHtml: showTheme ? (row.descriptionHtml ?? '') : '',
    rulesHtml: row.rulesHtml ?? '',
    prizesHtml: row.prizesHtml ?? '',
    entryKinds: row.entryKinds,
    maxEntriesPerUser: row.maxEntriesPerUser,
    maxCoAuthors: row.maxCoAuthors,
    minVoterAgeDays: row.minVoterAgeDays,
    minVotes: row.minVotes,
    categories,
  };
}

interface EntryRow {
  id: number;
  modId: number;
  notesHtml: string | null;
  createdDuringJam: boolean;
  createdAt: Date;
}

/** Entry DTOs for the given rows (skips entries whose mod is no longer public). */
export async function entryDtos(db: Executor, config: CommunityConfig, found: EntryRow[]): Promise<JamEntryDTO[]> {
  if (found.length === 0) return [];
  const cards = await loadModCards(db, [...new Set(found.map((e) => e.modId))], {
    publicBaseUrl: config.mediaBaseUrl,
    publicBucket: config.publicBucket,
  });
  const authorRows = await rows<{ entryId: number; userId: number; isLead: boolean }>(
    db,
    sql`SELECT "entryId", "userId", "isLead" FROM "JamEntryAuthor"
         WHERE "entryId" IN (${sql.join(
           found.map((e) => sql`${e.id}`),
           sql`, `,
         )}) ORDER BY "isLead" DESC, "userId"`,
  );
  const users = await loadUserRefs(
    db,
    config,
    authorRows.map((a) => a.userId),
  );
  const out: JamEntryDTO[] = [];
  for (const entry of found) {
    const card = cards.get(entry.modId)?.card;
    if (!card || card.nsfw) continue;
    out.push({
      id: entry.id,
      mod: card,
      authors: authorRows
        .filter((a) => a.entryId === entry.id)
        .flatMap((a) => {
          const ref = users.get(a.userId);
          return ref ? [{ ...ref, isLead: a.isLead }] : [];
        }),
      notesHtml: entry.notesHtml,
      createdDuringJam: entry.createdDuringJam,
      createdAt: entry.createdAt.toISOString(),
    });
  }
  return out;
}

async function activeEntryRows(db: Executor, jamId: number): Promise<EntryRow[]> {
  const found = await rows<{
    id: number;
    modId: number;
    notesHtml: string | null;
    createdDuringJam: boolean;
    createdAt: unknown;
  }>(
    db,
    sql`SELECT e."id", e."modId", e."notesHtml", e."createdDuringJam", e."createdAt"
          FROM "JamEntry" e JOIN "Mod" m ON m."id" = e."modId"
         WHERE e."jamId" = ${jamId} AND e."status" = 'active' AND m."status" IN ('published', 'unlisted', 'archived')
         ORDER BY e."id"`,
  );
  return found.map((e) => ({ ...e, createdAt: new Date(e.createdAt as string | Date) }));
}

export async function listEntries(
  db: Executor,
  config: CommunityConfig,
  slug: string,
  seed: string | undefined,
): Promise<JamEntriesDTO> {
  const row = await requirePublicJam(db, slug);
  if (row.phase === 'announced') return { items: [], total: 0 };
  const dtos = await entryDtos(db, config, await activeEntryRows(db, row.id));
  const items = shuffleEntries(dtos, seed ?? `jam:${row.id}`);
  return { items, total: items.length };
}

/** Published results: a podium (top 3, ties included) overall and per category. */
export async function getResults(db: Executor, config: CommunityConfig, slug: string): Promise<JamResultsDTO> {
  const row = await requirePublicJam(db, slug);
  if (!showsResults(row.phase, row.resultsPublishedAt)) throw errors.notFound('Results');
  const [counts, categories, placements, voters] = await Promise.all([
    entryCounts(db, [row.id]),
    loadCategories(db, row.id),
    rows<{ entryId: number; categoryKey: string; votes: number; average: number; score: number; rank: number }>(
      db,
      sql`SELECT r."entryId", r."categoryKey", r."votes", r."average", r."score", r."rank"
            FROM "JamResult" r JOIN "JamEntry" e ON e."id" = r."entryId"
           WHERE r."jamId" = ${row.id} AND r."rank" IS NOT NULL AND r."rank" <= 3 AND e."status" = 'active'
           ORDER BY r."categoryKey", r."rank", r."entryId"`,
    ),
    firstRow<{ n: number }>(
      db,
      sql`SELECT count(DISTINCT "voterId")::int AS "n" FROM "JamVote" WHERE "jamId" = ${row.id} AND "excludedReason" IS NULL`,
    ),
  ]);
  const entryIds = [...new Set(placements.map((p) => p.entryId))];
  const entryRows = (await activeEntryRows(db, row.id)).filter((e) => entryIds.includes(e.id));
  const byId = new Map((await entryDtos(db, config, entryRows)).map((e) => [e.id, e]));
  const build = (key: string) =>
    placements
      .filter((p) => p.categoryKey === key && byId.has(p.entryId))
      .map((p) => ({
        rank: p.rank,
        // biome-ignore lint/style/noNonNullAssertion: filtered by byId.has above
        entry: byId.get(p.entryId)!,
        votes: p.votes,
        average: Number(p.average),
        score: Number(p.score),
      }));
  return {
    jam: summaryOf(row, counts.get(row.id) ?? 0, config),
    overall: build(JAM_OVERALL_KEY),
    categories: categories.map((c) => ({ key: c.key, label: c.label, placements: build(c.key) })),
    participants: counts.get(row.id) ?? 0,
    voters: voters?.n ?? 0,
    minVotes: row.minVotes,
  };
}

/* ---------------------------------- staff reads ------------------------------------------- */

export async function adminJamDto(db: Executor, config: CommunityConfig, row: JamRow): Promise<JamAdminDTO> {
  const [counts, categories] = await Promise.all([entryCounts(db, [row.id]), loadCategories(db, row.id)]);
  return {
    ...summaryOf(row, counts.get(row.id) ?? 0, config),
    theme: row.theme,
    themeHidden: row.themeHidden,
    descriptionHtml: row.descriptionHtml ?? '',
    rulesHtml: row.rulesHtml ?? '',
    prizesHtml: row.prizesHtml ?? '',
    descriptionMd: row.descriptionMd,
    rulesMd: row.rulesMd,
    prizesMd: row.prizesMd,
    entryKinds: row.entryKinds,
    maxEntriesPerUser: row.maxEntriesPerUser,
    maxCoAuthors: row.maxCoAuthors,
    minVoterAgeDays: row.minVoterAgeDays,
    minVoterActivity: row.minVoterActivity,
    minVotes: row.minVotes,
    autoPublishResults: row.autoPublishResults,
    phaseLocked: row.phaseLocked,
    resultsComputedAt: iso(row.resultsComputedAt),
    categories,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export async function listAdminJams(db: Executor, config: CommunityConfig) {
  const found = await db.select().from(jamTable);
  found.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  return { items: await Promise.all(found.map((row) => adminJamDto(db, config, row))) };
}

export async function adminEntryDto(db: Executor, config: CommunityConfig, entryId: number): Promise<JamAdminEntryDTO> {
  const list = await listAdminEntryDtos(db, config, { entryId });
  const first = list[0];
  if (!first) throw errors.notFound('Entry');
  return first;
}

export interface AdminEntryListOptions {
  status?: JamAdminEntryDTO['status'] | undefined;
  /** Text in the mod name or an author handle. */
  q?: string | undefined;
  sort?: 'newest' | 'oldest' | 'votes' | 'name' | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
}

const likeEscape = (value: string) => value.replace(/[\\%_]/g, (c) => `\\${c}`);

/** Where clause and order of the entries list (filters of the staff screen). */
function adminEntryFilters(jamId: number, options: AdminEntryListOptions) {
  const parts = [sql`e."jamId" = ${jamId}`];
  if (options.status) parts.push(sql`e."status" = ${options.status}`);
  const text = options.q?.trim();
  if (text) {
    const pattern = `%${likeEscape(text.toLowerCase())}%`;
    parts.push(
      sql`(lower(m."name") LIKE ${pattern} OR EXISTS (
            SELECT 1 FROM "JamEntryAuthor" ja JOIN "User" au ON au."id" = ja."userId"
             WHERE ja."entryId" = e."id" AND (lower(au."slug") LIKE ${pattern} OR lower(coalesce(au."displayName", '')) LIKE ${pattern})))`,
    );
  }
  const order =
    options.sort === 'oldest'
      ? sql`e."id" ASC`
      : options.sort === 'votes'
        ? sql`"votes" DESC, e."id" DESC`
        : options.sort === 'name'
          ? sql`lower(m."name") ASC, e."id" ASC`
          : sql`e."id" DESC`;
  return { where: sql.join(parts, sql` AND `), order };
}

/** A page of the entries of a jam for staff, with the filtered total and the count per status. */
export async function listAdminEntriesPage(
  db: Executor,
  config: CommunityConfig,
  jamId: number,
  options: AdminEntryListOptions & { limit: number; offset: number },
) {
  const { where } = adminEntryFilters(jamId, options);
  const [totalRow, perStatus] = await Promise.all([
    firstRow<{ n: number }>(
      db,
      sql`SELECT count(*)::int AS "n" FROM "JamEntry" e JOIN "Mod" m ON m."id" = e."modId" WHERE ${where}`,
    ),
    rows<{ status: JamAdminEntryDTO['status']; n: number }>(
      db,
      sql`SELECT "status", count(*)::int AS "n" FROM "JamEntry" WHERE "jamId" = ${jamId} GROUP BY "status"`,
    ),
  ]);
  const counts = { active: 0, withdrawn: 0, hidden: 0, disqualified: 0 };
  for (const row of perStatus) counts[row.status] = row.n;
  const items = await listAdminEntryDtos(db, config, { jamId }, options);
  return { items, total: totalRow?.n ?? 0, counts };
}

export async function listAdminEntryDtos(
  db: Executor,
  config: CommunityConfig,
  filter: { jamId: number } | { entryId: number },
  options: AdminEntryListOptions = {},
): Promise<JamAdminEntryDTO[]> {
  const scoped = 'jamId' in filter ? adminEntryFilters(filter.jamId, options) : null;
  const where = scoped ? scoped.where : sql`e."id" = ${'entryId' in filter ? filter.entryId : 0}`;
  const order = scoped ? scoped.order : sql`e."id"`;
  const paging = options.limit === undefined ? sql`` : sql`LIMIT ${options.limit} OFFSET ${options.offset ?? 0}`;
  const found = await rows<{
    id: number;
    modId: number;
    modName: string;
    modSlug: string;
    modKind: string;
    handle: string | null;
    status: JamAdminEntryDTO['status'];
    statusReason: string | null;
    notesMd: string;
    votes: number;
    excluded: number;
    createdAt: unknown;
  }>(
    db,
    sql`SELECT e."id", e."modId", m."name" AS "modName", m."slug" AS "modSlug", m."type" AS "modKind",
               u."slug" AS "handle", e."status", e."statusReason", e."notesMd", e."createdAt",
               (SELECT count(*) FROM "JamVote" v WHERE v."entryId" = e."id" AND v."excludedReason" IS NULL)::int AS "votes",
               (SELECT count(*) FROM "JamVote" v WHERE v."entryId" = e."id" AND v."excludedReason" IS NOT NULL)::int AS "excluded"
          FROM "JamEntry" e JOIN "Mod" m ON m."id" = e."modId" LEFT JOIN "User" u ON u."id" = m."userId"
         WHERE ${where} ORDER BY ${order} ${paging}`,
  );
  const authors = await rows<{ entryId: number; userId: number }>(
    db,
    found.length === 0
      ? sql`SELECT NULL::int AS "entryId", NULL::int AS "userId" WHERE false`
      : sql`SELECT "entryId", "userId" FROM "JamEntryAuthor" WHERE "entryId" IN (${sql.join(
          found.map((e) => sql`${e.id}`),
          sql`, `,
        )}) ORDER BY "isLead" DESC`,
  );
  const users = await loadUserRefs(
    db,
    config,
    authors.map((a) => a.userId),
  );
  return found.map((e) => ({
    id: e.id,
    mod: {
      id: e.modId,
      name: e.modName,
      canonicalPath: modPath(kindOf(e.modKind), e.handle ?? '_', e.modSlug),
    },
    authors: authors.flatMap((a) => (a.entryId === e.id && users.has(a.userId) ? [users.get(a.userId) as never] : [])),
    status: e.status,
    statusReason: e.statusReason,
    notesMd: e.notesMd,
    votes: e.votes,
    excludedVotes: e.excluded,
    createdAt: new Date(e.createdAt as string | Date).toISOString(),
  }));
}

/* ---------------------------------- own state --------------------------------------------- */

export async function memberActivity(db: Executor, userId: number): Promise<number> {
  const found = await firstRow<{ n: number }>(
    db,
    sql`SELECT ((SELECT count(*) FROM "Comment" WHERE "userId" = ${userId} AND "status" = 'visible')
              + (SELECT count(*) FROM "ModReview" WHERE "userId" = ${userId})
              + (SELECT count(*) FROM "ModFavorite" WHERE "userId" = ${userId}))::int AS "n"`,
  );
  return found?.n ?? 0;
}

export async function myJams(db: Executor, config: CommunityConfig, userId: number): Promise<MyJamsDTO> {
  const all = await db.select().from(jamTable);
  const counts = await entryCounts(
    db,
    all.map((j) => j.id),
  );
  const open = all.filter((j) => j.phase === 'submissions').map((j) => summaryOf(j, counts.get(j.id) ?? 0, config));
  const mine = await rows<{
    jamId: number;
    entryId: number;
    status: JamAdminEntryDTO['status'];
    modId: number;
    modName: string;
    modSlug: string;
    modKind: string;
    handle: string | null;
    rank: number | null;
  }>(
    db,
    sql`SELECT e."jamId", e."id" AS "entryId", e."status", m."id" AS "modId", m."name" AS "modName", m."slug" AS "modSlug",
               m."type" AS "modKind", u."slug" AS "handle", r."rank"
          FROM "JamEntryAuthor" a
          JOIN "JamEntry" e ON e."id" = a."entryId"
          JOIN "Mod" m ON m."id" = e."modId"
          LEFT JOIN "User" u ON u."id" = m."userId"
          LEFT JOIN "JamResult" r ON r."entryId" = e."id" AND r."categoryKey" = ${JAM_OVERALL_KEY}
         WHERE a."userId" = ${userId}
         ORDER BY e."createdAt" DESC`,
  );
  const byId = new Map(all.map((j) => [j.id, j]));
  return {
    open,
    participations: mine.flatMap((p) => {
      const row = byId.get(p.jamId);
      if (!row) return [];
      return [
        {
          jam: summaryOf(row, counts.get(row.id) ?? 0, config),
          entryId: p.entryId,
          status: p.status,
          mod: {
            id: p.modId,
            name: p.modName,
            canonicalPath: modPath(kindOf(p.modKind), p.handle ?? '_', p.modSlug),
          },
          overallRank: row.resultsPublishedAt ? p.rank : null,
        },
      ];
    }),
  };
}

export type { JamPhase };
