import { describe, expect, it } from 'vitest';
import type { Catalog, ColumnInfo, TableCatalog } from '../src/guard/catalog.ts';
import { compareLegacyCatalog, formatGuardReport } from '../src/guard/compare.ts';

const column = (type: string, extra: Partial<ColumnInfo> = {}): ColumnInfo => ({
  type,
  nullable: false,
  default: null,
  generated: '',
  identity: '',
  ...extra,
});

function legacyTable(): TableCatalog {
  return {
    columns: {
      id: column('integer', { default: `nextval('"Mod_id_seq"'::regclass)` }),
      name: column('text'),
      updatedAt: column('timestamp(3) without time zone'),
    },
    constraints: { Mod_pkey: { type: 'p', definition: 'PRIMARY KEY (id)', validated: true } },
    indexes: {
      Mod_pkey: { definition: 'CREATE UNIQUE INDEX "Mod_pkey" ON public."Mod" USING btree (id)', valid: true },
    },
    triggers: {},
  };
}
const snapshot = (): Catalog => ({ tables: { Mod: legacyTable() } });
const clone = (c: Catalog): Catalog => structuredClone(c);

describe('compareLegacyCatalog', () => {
  it('accepts an identical catalog and v2 additions declared in Drizzle', () => {
    const live = clone(snapshot());
    const mod = live.tables.Mod as TableCatalog;
    mod.columns.status = column('text', { default: `'pending'::text` });
    mod.indexes.Mod_status_idx = { definition: 'CREATE INDEX …', valid: true };
    const report = compareLegacyCatalog(snapshot(), live, {
      declaredColumns: new Map([['Mod', new Set(['id', 'name', 'updatedAt', 'status'])]]),
    });
    expect(report.ok).toBe(true);
    expect(report.additions).toBe(2);
  });

  it('accepts the additive "updatedAt" default and nothing else', () => {
    const live = clone(snapshot());
    const mod = live.tables.Mod as TableCatalog;
    (mod.columns.updatedAt as ColumnInfo).default = 'CURRENT_TIMESTAMP';
    expect(compareLegacyCatalog(snapshot(), live).ok).toBe(true);
    (mod.columns.name as ColumnInfo).default = `''::text`;
    const report = compareLegacyCatalog(snapshot(), live);
    expect(report.ok).toBe(false);
    expect(report.issues[0]).toMatchObject({ table: 'Mod', kind: 'column', name: 'name' });
  });

  it.each([
    ['missing table', (c: Catalog) => delete c.tables.Mod, 'legacy table is missing'],
    ['missing column', (c: Catalog) => delete c.tables.Mod?.columns.name, 'legacy column is missing'],
    [
      'type change',
      (c: Catalog) => ((c.tables.Mod as TableCatalog).columns.name = column('varchar(10)')),
      'type changed',
    ],
    [
      'nullability change',
      (c: Catalog) => ((c.tables.Mod as TableCatalog).columns.name = column('text', { nullable: true })),
      'nullability changed',
    ],
    ['missing constraint', (c: Catalog) => delete c.tables.Mod?.constraints.Mod_pkey, 'legacy constraint is missing'],
    ['missing index', (c: Catalog) => delete c.tables.Mod?.indexes.Mod_pkey, 'legacy index is missing'],
  ])('reports a %s', (_name, mutate, message) => {
    const live = clone(snapshot());
    mutate(live);
    const report = compareLegacyCatalog(snapshot(), live);
    expect(report.ok).toBe(false);
    expect(formatGuardReport(report)).toContain(message);
  });

  it('reports undeclared columns on legacy tables as drift', () => {
    const live = clone(snapshot());
    (live.tables.Mod as TableCatalog).columns.canApprove = column('boolean');
    const report = compareLegacyCatalog(snapshot(), live, {
      declaredColumns: new Map([['Mod', new Set(['id', 'name', 'updatedAt'])]]),
    });
    expect(report.ok).toBe(false);
    expect(report.issues[0]?.message).toMatch(/unexpected column/);
  });

  it('warns (without failing) about INVALID v2 indexes', () => {
    const live = clone(snapshot());
    (live.tables.Mod as TableCatalog).indexes.Mod_x_idx = { definition: 'CREATE INDEX …', valid: false };
    const report = compareLegacyCatalog(snapshot(), live);
    expect(report.ok).toBe(true);
    expect(report.issues).toHaveLength(1);
    expect(report.issues[0]?.severity).toBe('warning');
  });
});
