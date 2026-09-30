/**
 * Description images (WP-15 backlog, PLAN §8.3): after a mod's description is published or edited,
 * the remote images it embeds are replicated to R2 (`importRemoteImage`) and the description is
 * re-rendered with `resolveImage` pointing each one at its R2 variant (≤ 960 px) with explicit
 * `width`/`height`. Images already on R2 are left as written; images that cannot be fetched keep
 * their original URL (the CSP blocks them, as before). The update is skipped when the Markdown
 * changed meanwhile (a later run handles the newer text).
 */
import type { ImageTarget } from '@sotf/markdown';
import { sql } from 'drizzle-orm';
import { type CatalogConfig, mediaUrlForWidth } from '../catalog/media.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { isLegacyAuthored } from '../publishing/queries.ts';
import { renderDescription } from '../publishing/text.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { importRemoteImage } from './remote.ts';
import type { SafeFetchOptions } from './ssrf.ts';

/** Max images replicated per description. */
export const MAX_DESCRIPTION_IMAGES = 20;
/** Width of the variant used inside descriptions. */
export const DESCRIPTION_IMAGE_WIDTH = 960;

export interface ReplicationReport {
  images: number;
  replicated: number;
  failed: number;
  updated: boolean;
}

export async function replicateDescriptionImages(
  ctx: Ctx,
  storage: ObjectStorage,
  config: CatalogConfig,
  modId: number,
  options: { fetch?: SafeFetchOptions } = {},
): Promise<ReplicationReport> {
  const report: ReplicationReport = { images: 0, replicated: 0, failed: 0, updated: false };
  const found = await ctx.db.execute<{ md: string | null; html: string | null; userId: number | null }>(
    sql`SELECT "descriptionMd" AS "md", "descriptionHtml" AS "html", "userId" FROM "Mod" WHERE "id" = ${modId}`,
  );
  const row = found.rows[0];
  if (!row?.md) return report;
  const md = row.md;
  const legacy = await isLegacyAuthored(ctx.db, modId);
  const base = config.mediaBaseUrl.replace(/\/+$/, '');

  const first = renderDescription(md, { legacy });
  const remote = [
    ...new Set(
      first.images.map((i) => i.src).filter((src) => src.startsWith('https://') && !src.startsWith(`${base}/`)),
    ),
  ].slice(0, MAX_DESCRIPTION_IMAGES);
  report.images = remote.length;
  if (remote.length === 0) return report;

  const targets = new Map<string, ImageTarget>();
  for (const src of remote) {
    const result = await importRemoteImage(ctx, storage, src, {
      ownerId: row.userId,
      purpose: 'mod_image',
      ...(options.fetch ? { fetch: options.fetch } : {}),
    });
    if (result.status !== 'ready') {
      report.failed += 1;
      continue;
    }
    const m = result.media;
    const url = mediaUrlForWidth(config, m, DESCRIPTION_IMAGE_WIDTH);
    if (!url || !m.width || !m.height) {
      report.failed += 1;
      continue;
    }
    const variant = (m.variants ?? [])
      .filter((v) => v.format !== 'avif')
      .sort((a, b) => a.w - b.w)
      .find((v) => v.w >= DESCRIPTION_IMAGE_WIDTH);
    const width = Math.min(m.width, variant?.w ?? m.width);
    targets.set(src, { src: url, width, height: Math.max(1, Math.round((m.height * width) / m.width)) });
    report.replicated += 1;
  }
  if (targets.size === 0) return report;

  const rendered = renderDescription(md, { legacy, resolveImage: (src) => targets.get(src) ?? null });
  if (rendered.html === row.html) return report;
  const res = await ctx.db.execute(sql`
    UPDATE "Mod" SET "descriptionHtml" = ${rendered.html}, "renderVersion" = ${rendered.renderVersion}
     WHERE "id" = ${modId} AND "descriptionMd" = ${md}`);
  report.updated = (res.rowCount ?? 0) > 0;
  if (report.updated) {
    const tags = [`mod:${modId}`];
    await publishCacheInvalidation(ctx.db, tags);
    await purge(ctx.jobs, tags, 'description.images');
  }
  return report;
}
