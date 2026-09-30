/** Patch Radar uptime probes (T1-20, migration 2170). */
import { bigint, boolean, index, integer, pgTable, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';

export const UPTIME_COMPONENTS = ['web', 'api', 'media', 'database'] as const;
export type UptimeComponent = (typeof UPTIME_COMPONENTS)[number];

/** One probe of a platform component, inserted by the worker job `compat.uptime_probe`. */
export const compatUptimeSample = pgTable(
  'CompatUptimeSample',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    component: text('component').$type<UptimeComponent>().notNull(),
    ok: boolean('ok').notNull(),
    latencyMs: integer('latencyMs'),
    statusCode: integer('statusCode'),
    checkedAt: tstz('checkedAt').notNull().defaultNow(),
  },
  (t) => [
    index('CompatUptimeSample_component_checkedAt_idx').on(t.component, t.checkedAt.desc()),
    index('CompatUptimeSample_checkedAt_idx').on(t.checkedAt),
  ],
);

export type CompatUptimeSample = typeof compatUptimeSample.$inferSelect;
export type NewCompatUptimeSample = typeof compatUptimeSample.$inferInsert;
