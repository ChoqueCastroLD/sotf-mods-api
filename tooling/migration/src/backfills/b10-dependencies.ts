/**
 * B10 · `"ModDependency"` from the legacy CSV `"Mod"."dependencies"` (PLAN §6.9).
 *
 * Each manifest id of the CSV becomes a `required` dependency of the mod's latest version,
 * resolved to the mod with that `mod_id` when it exists (12 references today, all resolve).
 * Mods without a latest version are skipped and listed in the notes.
 */
import type { Backfill } from './framework.ts';

/** Splits the legacy CSV: trimmed, non-empty, first occurrence wins. */
export function parseDependencyCsv(csv: string | null | undefined): string[] {
  const seen = new Set<string>();
  for (const part of (csv ?? '').split(',')) {
    const id = part.trim();
    if (id !== '' && !seen.has(id)) seen.add(id);
  }
  return [...seen];
}

export const b10: Backfill = {
  id: 'B10',
  title: 'dependencies from the legacy CSV',
  touchesLegacy: false,
  delta: false,
  checksumSql: `SELECT md5(coalesce(string_agg("modVersionId"::text || ':' || "depManifestId" || ':' || coalesce("depModId"::text, '~'), ',' ORDER BY "modVersionId", "depManifestId"), '')) AS checksum FROM "ModDependency"`,
  async run(ctx) {
    const { client } = ctx;
    const { rows } = await client.query<{ id: number; dependencies: string; latestId: number | null }>(
      `SELECT m."id", m."dependencies",
              (SELECT v."id" FROM "ModVersion" v WHERE v."modId" = m."id" AND v."isLatest"
                ORDER BY v."createdAt" DESC, v."id" DESC LIMIT 1) AS "latestId"
         FROM "Mod" m WHERE btrim(m."dependencies") <> '' ORDER BY m."id"`,
    );
    const versionIds: number[] = [];
    const manifestIds: string[] = [];
    const skipped: number[] = [];
    for (const row of rows) {
      if (row.latestId === null) {
        skipped.push(row.id);
        continue;
      }
      for (const dep of parseDependencyCsv(row.dependencies)) {
        versionIds.push(row.latestId);
        manifestIds.push(dep);
      }
    }
    let total = 0;
    for (let i = 0; i < versionIds.length; i += ctx.batchSize) {
      const inserted = await ctx.batch(() =>
        client.query(
          `INSERT INTO "ModDependency" ("modVersionId", "depManifestId", "depModId", "kind")
           SELECT t.version, t.dep, (SELECT m."id" FROM "Mod" m WHERE m."mod_id" = t.dep), 'required'
             FROM unnest($1::int[], $2::text[]) AS t(version, dep)
           ON CONFLICT ("modVersionId", "depManifestId") DO NOTHING`,
          [versionIds.slice(i, i + ctx.batchSize), manifestIds.slice(i, i + ctx.batchSize)],
        ),
      );
      total += inserted.rowCount ?? 0;
    }
    const { rows: unresolved } = await client.query<{ n: string }>(
      `SELECT count(*) AS n FROM "ModDependency" WHERE "depModId" IS NULL`,
    );
    Object.assign(ctx.notes, {
      references: versionIds.length,
      skippedNoLatest: skipped,
      unresolved: Number(unresolved[0]?.n ?? 0),
    });
    return total;
  },
};
