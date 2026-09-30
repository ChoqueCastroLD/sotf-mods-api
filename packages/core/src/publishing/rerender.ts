/**
 * `markdown.rerender` (nightly; backlogs WP-14/WP-40): when `@sotf/markdown` bumps `RENDER_VERSION`
 * (a sanitiser or renderer change), the stored HTML of older rows is re-rendered from the Markdown
 * source so pages never serve HTML produced by a previous pipeline.
 *
 * - `"Mod"."renderVersion"` marks the description; the changelogs of the mod's versions
 *   (`ModVersion.changelogMd` → `changelogHtml`) are re-rendered in the same pass.
 * - Descriptions keep their persisted rendering profile (`descriptionFormat`: `legacyHtml` for
 *   legacy layouts) and their replicated images: with a storage client the description goes
 *   through `replicateDescriptionImages` (remote images are content-addressed, never fetched twice).
 * - Rows edited meanwhile are skipped (`WHERE "descriptionMd" = <source>`); only v2 columns are
 *   written, with raw SQL so the legacy `updatedAt` never moves.
 * - Batches of `batchSize` mods; `remaining` tells the caller whether another run is needed.
 */
import { RENDER_VERSION } from '@sotf/markdown';
import { sql } from 'drizzle-orm';
import type { CatalogConfig } from '../catalog/media.ts';
import { query } from '../follows/sql.ts';
import { cacheTag, purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { replicateDescriptionImages } from '../media/description.ts';
import type { ObjectStorage } from '../storage/client.ts';

export { RENDER_VERSION };

import { isLegacyAuthored } from './queries.ts';
import { renderChangelog, renderDescription } from './text.ts';

export interface RerenderDeps {
  config: CatalogConfig;
  /** Public storage: keeps the replicated description images. Without it images keep their source URL. */
  storage?: ObjectStorage | null;
}

export interface RerenderResult {
  mods: number;
  changelogs: number;
  /** More stale descriptions are waiting (run again). */
  remaining: boolean;
}

/** Re-renders up to `batchSize` descriptions (and their changelogs) older than `RENDER_VERSION`. */
export async function rerenderStaleMarkdown(
  ctx: Ctx,
  deps: RerenderDeps,
  options: { batchSize?: number } = {},
): Promise<RerenderResult> {
  const batchSize = Math.max(1, Math.min(1000, options.batchSize ?? 200));
  const stale = await query<{ id: number; md: string; html: string | null }>(
    ctx.db,
    sql`SELECT "id", "descriptionMd" AS "md", "descriptionHtml" AS "html" FROM "Mod"
         WHERE "descriptionMd" IS NOT NULL AND "renderVersion" < ${RENDER_VERSION}
         ORDER BY "id" LIMIT ${batchSize + 1}`,
  );
  const batch = stale.slice(0, batchSize);
  const result: RerenderResult = { mods: 0, changelogs: 0, remaining: stale.length > batchSize };
  const touched: number[] = [];

  for (const row of batch) {
    const modId = Number(row.id);
    let updated = false;
    let handled = false;
    if (deps.storage) {
      const report = await replicateDescriptionImages(ctx, deps.storage, deps.config, modId);
      updated = report.updated;
      // Replicated images and an identical render: only the version is behind.
      handled = report.updated || report.replicated > 0;
    }
    if (!handled) {
      const legacy = await isLegacyAuthored(ctx.db, modId);
      const rendered = renderDescription(row.md, { legacy });
      const res = await ctx.db.execute(
        sql`UPDATE "Mod" SET "descriptionHtml" = ${rendered.html}, "renderVersion" = ${rendered.renderVersion}
             WHERE "id" = ${modId} AND "descriptionMd" = ${row.md}`,
      );
      updated = (res.rowCount ?? 0) > 0 && rendered.html !== row.html;
    }
    await ctx.db.execute(
      sql`UPDATE "Mod" SET "renderVersion" = ${RENDER_VERSION}
           WHERE "id" = ${modId} AND "descriptionMd" = ${row.md} AND "renderVersion" < ${RENDER_VERSION}`,
    );
    const versions = await query<{ id: number; md: string; html: string | null }>(
      ctx.db,
      sql`SELECT "id", "changelogMd" AS "md", "changelogHtml" AS "html" FROM "ModVersion"
           WHERE "modId" = ${modId} AND "changelogMd" IS NOT NULL`,
    );
    for (const version of versions) {
      const html = renderChangelog(version.md, Number(version.id)).html;
      if (html === version.html) continue;
      await ctx.db.execute(
        sql`UPDATE "ModVersion" SET "changelogHtml" = ${html}
             WHERE "id" = ${version.id} AND "changelogMd" = ${version.md}`,
      );
      result.changelogs += 1;
      updated = true;
    }
    if (updated) {
      result.mods += 1;
      touched.push(modId);
    }
  }

  if (touched.length > 0) {
    const tags = touched.map((id) => cacheTag.mod(id));
    await publishCacheInvalidation(ctx.db, tags);
    await purge(ctx.jobs, tags, 'markdown.rerender');
    ctx.log.info(
      { mods: result.mods, changelogs: result.changelogs, renderVersion: RENDER_VERSION },
      'markdown re-rendered',
    );
  }
  return result;
}
