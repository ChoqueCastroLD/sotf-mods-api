/**
 * B1 · Daily download aggregates (PLAN §6.9, §6.8).
 *
 * `"ModDownload"` rows with `id` in (watermark, max(id) at start] are counted per version, UTC day
 * and channel and **added** to `"ModVersionDownloadDaily"`; downloads without a version, or whose
 * version has no mod, go to `"SiteDownloadDaily"` (research/02 Q3). The watermark moves in the
 * same transaction as the counts, so re-running never counts a row twice and an interrupted run
 * resumes where it stopped. Legacy rows have no reliable identity: `uniqueDownloads` stays 0
 * ("unique since v2").
 *
 * Channel (PLAN §6.8): `ip = 'undefined'` → `client`; `'null'` or `''` → `unknown`; else `web`.
 */
import { type Backfill, lastNote } from './framework.ts';

export const CHANNEL_SQL = `CASE WHEN d."ip" = 'undefined' THEN 'client' WHEN d."ip" IN ('null', '') THEN 'unknown' ELSE 'web' END`;

export const b01: Backfill = {
  id: 'B1',
  title: 'daily download aggregates',
  touchesLegacy: false,
  delta: true,
  checksumSql: `SELECT (SELECT coalesce(sum("downloads"), 0) FROM "ModVersionDownloadDaily")::text || '+' ||
                       (SELECT coalesce(sum("downloads"), 0) FROM "SiteDownloadDaily")::text AS checksum`,
  async run(ctx) {
    const { client } = ctx;
    let watermark = Number((await lastNote<number>(client, 'B1', 'watermark')) ?? 0);
    const { rows: maxRows } = await client.query<{ max: number | null }>('SELECT max("id") AS max FROM "ModDownload"');
    const upper = Number(maxRows[0]?.max ?? 0);
    ctx.notes.watermarkBefore = watermark;
    ctx.notes.upper = upper;
    // Batches of downloads are cheap to aggregate: use a larger window than row-by-row backfills.
    const window = Math.max(ctx.batchSize, 50_000);
    let rows = 0;
    while (watermark < upper) {
      const from = watermark;
      const to = Math.min(upper, from + window);
      const counted = await ctx.batch(
        async () => {
          const perVersion = await client.query(
            `INSERT INTO "ModVersionDownloadDaily" ("modVersionId", "day", "channel", "downloads", "uniqueDownloads")
             SELECT d."modVersionId", (d."createdAt")::date, ${CHANNEL_SQL}, count(*)::int, 0
               FROM "ModDownload" d
               JOIN "ModVersion" v ON v."id" = d."modVersionId" AND v."modId" IS NOT NULL
              WHERE d."id" > $1 AND d."id" <= $2
              GROUP BY 1, 2, 3
             ON CONFLICT ("modVersionId", "day", "channel")
             DO UPDATE SET "downloads" = "ModVersionDownloadDaily"."downloads" + EXCLUDED."downloads"`,
            [from, to],
          );
          const site = await client.query(
            `INSERT INTO "SiteDownloadDaily" ("day", "channel", "downloads")
             SELECT (d."createdAt")::date, ${CHANNEL_SQL}, count(*)::int
               FROM "ModDownload" d
               LEFT JOIN "ModVersion" v ON v."id" = d."modVersionId"
              WHERE d."id" > $1 AND d."id" <= $2 AND (d."modVersionId" IS NULL OR v."id" IS NULL OR v."modId" IS NULL)
              GROUP BY 1, 2
             ON CONFLICT ("day", "channel")
             DO UPDATE SET "downloads" = "SiteDownloadDaily"."downloads" + EXCLUDED."downloads"`,
            [from, to],
          );
          const { rows: n } = await client.query<{ n: string }>(
            'SELECT count(*) AS n FROM "ModDownload" WHERE "id" > $1 AND "id" <= $2',
            [from, to],
          );
          return { rows: Number(n[0]?.n ?? 0), groups: (perVersion.rowCount ?? 0) + (site.rowCount ?? 0) };
        },
        () => ({ watermark: to }),
      );
      rows += counted.rows;
      watermark = to;
    }
    ctx.notes.watermark = watermark;
    ctx.notes.downloads = rows;
    return rows;
  },
};
