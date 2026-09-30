/**
 * B9 · Markdown sources and rendered HTML (PLAN §6.9; WP-15 backlog).
 *
 * - `"Mod"."descriptionMd"` = the legacy description **literally** (mod descriptions were never
 *   sanitised by the legacy site), `"descriptionHtml"` = `@sotf/markdown` with the `legacyHtml`
 *   profile (it reproduces the legacy renderer: raw HTML allowlist, showdown quirks) and
 *   `"renderVersion"` = `RENDER_VERSION`, `"descriptionFormat"` = `'legacy'` (migration 2002: an
 *   edited legacy description keeps rendering with `legacyHtml` until its author converts it).
 *   Mods rendered by an earlier B9 run and never published through v2 get the same format.
 * - `"ModVersion"."changelogMd"` = changelog with one level of HTML entities decoded (the legacy
 *   client stored them encoded), `"changelogHtml"` rendered with `legacyHtml`.
 * - `"Comment"."bodyMd"` / `"ModReview"."bodyMd"` = message with entities decoded, `"bodyHtml"`
 *   rendered with the `lite` profile; `@mentions` link to existing profiles.
 *
 * Only rows whose `*Md` column is still NULL are processed; later re-renders (a new
 * `RENDER_VERSION`) belong to the application (WP-40). Text that cannot be rendered (over the
 * pipeline's hard limit) keeps its `*Md` and a NULL `*Html`, and is listed in the run's notes.
 */
import { decodeEntities, MarkdownInputError, type MentionTarget, RENDER_VERSION, renderMarkdown } from '@sotf/markdown';
import type pg from 'pg';
import type { Backfill, BackfillContext } from './framework.ts';

type Profile = 'legacyHtml' | 'lite';

function render(
  md: string,
  profile: Profile,
  options: { idPrefix?: string; resolveMention?: (handle: string) => MentionTarget | null } = {},
): string | null {
  try {
    return renderMarkdown(md, { profile, ...options }).html;
  } catch (error) {
    if (error instanceof MarkdownInputError) return null;
    throw error;
  }
}

async function mentionResolver(client: pg.ClientBase): Promise<(handle: string) => MentionTarget | null> {
  const { rows } = await client.query<{ name: string; slug: string }>('SELECT "name", "slug" FROM "User"');
  const byHandle = new Map<string, string>();
  for (const r of rows) byHandle.set(r.slug.toLowerCase(), r.slug);
  for (const r of rows) if (!byHandle.has(r.name.toLowerCase())) byHandle.set(r.name.toLowerCase(), r.slug);
  return (handle) => {
    const slug = byHandle.get(handle.toLowerCase());
    return slug ? { href: `/profile/${encodeURIComponent(slug)}` } : null;
  };
}

interface Target {
  table: string;
  source: string;
  md: string;
  html: string;
  extra?: string;
  profile: Profile;
  decode: boolean;
  idPrefix?: (id: number) => string;
  mentions: boolean;
}

const TARGETS: readonly Target[] = [
  {
    table: 'Mod',
    source: 'description',
    md: 'descriptionMd',
    html: 'descriptionHtml',
    extra: `"renderVersion" = ${RENDER_VERSION}, "descriptionFormat" = coalesce(x."descriptionFormat", 'legacy')`,
    profile: 'legacyHtml',
    decode: false,
    mentions: false,
  },
  {
    table: 'ModVersion',
    source: 'changelog',
    md: 'changelogMd',
    html: 'changelogHtml',
    profile: 'legacyHtml',
    decode: true,
    idPrefix: (id) => `cl-${id}-`,
    mentions: false,
  },
  {
    table: 'Comment',
    source: 'message',
    md: 'bodyMd',
    html: 'bodyHtml',
    profile: 'lite',
    decode: true,
    mentions: true,
  },
  {
    table: 'ModReview',
    source: 'message',
    md: 'bodyMd',
    html: 'bodyHtml',
    profile: 'lite',
    decode: true,
    mentions: true,
  },
];

async function renderTable(ctx: BackfillContext, target: Target, failures: string[]): Promise<number> {
  const { client } = ctx;
  let resolver: ((handle: string) => MentionTarget | null) | undefined;
  let cursor = 0;
  let total = 0;
  const batch = Math.min(ctx.batchSize, 1000);
  for (;;) {
    const { rows } = await client.query<{ id: number; text: string }>(
      `SELECT "id", "${target.source}" AS text FROM "${target.table}"
        WHERE "id" > $1 AND "${target.md}" IS NULL ORDER BY "id" LIMIT $2`,
      [cursor, batch],
    );
    if (rows.length === 0) break;
    cursor = rows[rows.length - 1]?.id as number;
    if (target.mentions && !resolver) resolver = await mentionResolver(client);
    const ids: number[] = [];
    const mds: string[] = [];
    const htmls: Array<string | null> = [];
    for (const row of rows) {
      const md = target.decode ? decodeEntities(row.text) : row.text;
      const html = render(md, target.profile, {
        idPrefix: target.idPrefix?.(row.id),
        resolveMention: target.mentions ? resolver : undefined,
      });
      if (html === null) failures.push(`${target.table}#${row.id}`);
      ids.push(row.id);
      mds.push(md);
      htmls.push(html);
    }
    const updated = await ctx.batch(() =>
      client.query(
        `UPDATE "${target.table}" x SET "${target.md}" = t.md, "${target.html}" = t.html${target.extra ? `, ${target.extra}` : ''}
           FROM unnest($1::int[], $2::text[], $3::text[]) AS t(id, md, html)
          WHERE x."id" = t.id AND x."${target.md}" IS NULL`,
        [ids, mds, htmls],
      ),
    );
    total += updated.rowCount ?? 0;
  }
  ctx.notes[target.table] = total;
  return total;
}

/**
 * `"descriptionFormat" = 'legacy'` for mods whose description was rendered by an earlier B9 run
 * (before migration 2002) and that were never published through v2 (same rule as
 * `isLegacyAuthored` of `@sotf/core/publishing`).
 */
async function markLegacyFormat(ctx: BackfillContext): Promise<number> {
  const res = await ctx.batch(() =>
    ctx.client.query(
      `UPDATE "Mod" m SET "descriptionFormat" = 'legacy'
        WHERE m."descriptionFormat" IS NULL AND m."descriptionMd" IS NOT NULL
          AND NOT EXISTS (SELECT 1 FROM "ModVersion" v WHERE v."modId" = m."id" AND v."publishedById" IS NOT NULL)`,
    ),
  );
  ctx.notes.descriptionFormat = res.rowCount ?? 0;
  return res.rowCount ?? 0;
}

export const b09: Backfill = {
  id: 'B9',
  title: 'Markdown sources and rendered HTML',
  touchesLegacy: false,
  delta: false,
  checksumSql: `SELECT md5(coalesce(string_agg("id"::text || ':' || md5(coalesce("descriptionHtml", '~')), ',' ORDER BY "id"), '')) AS checksum FROM "Mod"`,
  async run(ctx) {
    const failures: string[] = [];
    let total = 0;
    for (const target of TARGETS) total += await renderTable(ctx, target, failures);
    total += await markLegacyFormat(ctx);
    ctx.notes.renderVersion = RENDER_VERSION;
    if (failures.length > 0) {
      ctx.notes.renderFailures = failures;
      ctx.log.warn(`B9: ${failures.length} text(s) could not be rendered (kept as Markdown): ${failures.join(', ')}`);
    }
    return total;
  },
};
