/**
 * Real-user Web Vitals aggregation (PLAN §8.8 "RUM": p75 per template and country, shown in
 * `/moderation/admin/performance` through `GET /admin/rum`).
 *
 * Computed on demand from the `web_vital` rows of `AnalyticsEvent` (90-day retention covers the
 * 28-day window) with `percentile_cont(0.75)`: one row per template for every country together
 * (`country: null`) plus one row per template and country with enough samples to be meaningful.
 */
import type { RumDTO } from '@sotf/contracts/admin';
import type { z } from 'zod';
import { num, numOrNull, rows } from '../catalog/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { WEB_VITAL_KIND } from './ingest.ts';

type Rum = z.infer<typeof RumDTO>;
type RumRow = Rum['rows'][number];

export const RUM_RANGES = { '7d': 7, '28d': 28 } as const;
/** Minimum samples for a per-country row (fewer are noise). */
export const RUM_MIN_COUNTRY_SAMPLES = 20;

const METRIC_FIELD = {
  LCP: 'lcpP75',
  INP: 'inpP75',
  CLS: 'clsP75',
  FCP: 'fcpP75',
  TTFB: 'ttfbP75',
} as const satisfies Record<string, keyof RumRow>;

interface Raw {
  template: string;
  country: string | null;
  all_countries: number;
  metric: string;
  n: string;
  p75: number | null;
}

/** p75 of every Web Vital per template (all countries) and per template × country. */
export async function getRumReport(ctx: Ctx, range: keyof typeof RUM_RANGES): Promise<Rum> {
  const since = new Date(ctx.clock.now().getTime() - RUM_RANGES[range] * 86_400_000);
  const raw = await rows<Raw>(
    ctx.db,
    `SELECT "props"->>'template' AS template, "country", GROUPING("country") AS all_countries,
            "props"->>'metric' AS metric, count(*) AS n,
            percentile_cont(0.75) WITHIN GROUP (ORDER BY ("props"->>'value')::float8) AS p75
       FROM "AnalyticsEvent"
      WHERE "kind" = $1 AND "ts" >= $2::timestamptz
        AND "props" ? 'template' AND "props" ? 'metric' AND jsonb_typeof("props"->'value') = 'number'
      GROUP BY GROUPING SETS ((("props"->>'template'), ("props"->>'metric')),
                              (("props"->>'template'), "country", ("props"->>'metric')))`,
    [WEB_VITAL_KIND, since.toISOString()],
  );
  const byKey = new Map<string, RumRow>();
  for (const r of raw) {
    const overall = num(r.all_countries) === 1;
    if (!overall && (r.country === null || !/^[A-Z]{2}$/.test(r.country))) continue;
    const country = overall ? null : r.country;
    const key = `${r.template}|${country ?? ''}`;
    const entry = byKey.get(key) ?? {
      template: r.template,
      country,
      samples: 0,
      lcpP75: null,
      inpP75: null,
      clsP75: null,
      fcpP75: null,
      ttfbP75: null,
    };
    const field = METRIC_FIELD[r.metric as keyof typeof METRIC_FIELD];
    if (field) {
      const value = numOrNull(r.p75);
      entry[field] = value === null ? null : r.metric === 'CLS' ? Math.round(value * 1000) / 1000 : Math.round(value);
      entry.samples = Math.max(entry.samples, num(r.n));
    }
    byKey.set(key, entry);
  }
  const out = [...byKey.values()].filter((r) => r.country === null || r.samples >= RUM_MIN_COUNTRY_SAMPLES);
  out.sort((a, b) => {
    if (a.template !== b.template) return a.template < b.template ? -1 : 1;
    if ((a.country === null) !== (b.country === null)) return a.country === null ? -1 : 1;
    return b.samples - a.samples;
  });
  return { range, rows: out };
}
