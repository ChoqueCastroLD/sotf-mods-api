import { getTableConfig, type PgColumn } from 'drizzle-orm/pg-core';
import { describe, expect, it } from 'vitest';
import { createDb } from '../src/client.ts';
import { compareSchemaToCatalog, formatDrizzleType, tablesOf } from '../src/guard/drizzle.ts';
import { loadLegacyCatalog } from '../src/guard/snapshot.ts';
import * as schema from '../src/schema/_index.gen.ts';
import { legacyTables } from '../src/schema/legacy/_tables.ts';

const col = (table: Parameters<typeof getTableConfig>[0], name: string): PgColumn => {
  const found = getTableConfig(table).columns.find((c) => c.name === name);
  if (!found) throw new Error(`column ${name} not found`);
  return found;
};

describe('the four drizzle-kit pull defects are fixed (research/04 §4.3)', () => {
  it('1. isNSFW keeps its exact column name', () => {
    expect(col(schema.mod, 'isNSFW').name).toBe('isNSFW');
    expect(getTableConfig(schema.mod).columns.some((c) => c.name === 'isNsfw')).toBe(false);
  });

  it("2. empty-string defaults are real ''", () => {
    for (const [table, name] of [
      [schema.mod, 'shortDescription'],
      [schema.mod, 'dependencies'],
      [schema.mod, 'latestVersion'],
      [schema.user, 'imageUrl'],
      [schema.kelvinGptMessages, 'messageId'],
      [schema.kelvinGptMessages, 'prompt'],
    ] as const) {
      expect((col(table, name) as PgColumn & { default: unknown }).default, name).toBe('');
    }
  });

  it('3. the (slug, userId) unique index has no operator class', () => {
    const index = getTableConfig(schema.mod).indexes.find((i) => i.config.name === 'Mod_slug_userId_key');
    expect(index?.config.unique).toBe(true);
    expect(index?.config.columns.map((c) => (c as PgColumn).name)).toEqual(['slug', 'userId']);
    for (const c of index?.config.columns ?? []) {
      expect((c as { indexConfig?: { opClass?: string } }).indexConfig?.opClass).toBeUndefined();
    }
  });

  it('4. legacy timestamps are timestamp(3) without time zone mapped to Dates', () => {
    for (const table of legacyTables) {
      for (const column of getTableConfig(table).columns) {
        if (!column.getSQLType().startsWith('timestamp')) continue;
        expect(formatDrizzleType(column.getSQLType()), `${getTableConfig(table).name}.${column.name}`).toBe(
          'timestamp(3) without time zone',
        );
        expect(column.columnType, column.name).toBe('PgTimestamp');
      }
    }
  });

  it('exposes "mod_id" as manifestId and keeps every other name identical', () => {
    expect(schema.mod.manifestId.name).toBe('mod_id');
    for (const table of tablesOf(schema)) {
      const properties = table as unknown as Record<string, unknown>;
      for (const column of getTableConfig(table).columns) {
        const tsKey = Object.keys(properties).find((k) => properties[k] === column);
        const expected = column.name === 'mod_id' ? 'manifestId' : column.name;
        expect(tsKey, `${getTableConfig(table).name}.${column.name}`).toBe(expected);
      }
    }
  });
});

describe('the Drizzle legacy tables match the frozen legacy catalog', () => {
  const snapshot = loadLegacyCatalog();

  it('declares the 16 legacy tables', () => {
    expect(legacyTables.map((t) => getTableConfig(t).name).sort()).toEqual(Object.keys(snapshot.tables).sort());
  });

  it('declares every legacy column with the same type and nullability', () => {
    const legacyOnly = {
      tables: Object.fromEntries(Object.entries(snapshot.tables).map(([name, t]) => [name, { ...t }])),
    };
    const mismatches = compareSchemaToCatalog(legacyTables, legacyOnly).filter(
      // v2 columns are not in the pre-v2 snapshot: only legacy columns are compared here.
      (m) => !m.message.startsWith('declared in Drizzle but missing'),
    );
    expect(mismatches).toEqual([]);
    for (const [name, table] of Object.entries(snapshot.tables)) {
      const drizzleTable = legacyTables.find((t) => getTableConfig(t).name === name);
      const declared = new Set(
        getTableConfig(drizzleTable as NonNullable<typeof drizzleTable>).columns.map((c) => c.name),
      );
      for (const column of Object.keys(table.columns)) expect(declared.has(column), `${name}.${column}`).toBe(true);
    }
  });

  it('declares every legacy index with its exact name', () => {
    for (const [name, table] of Object.entries(snapshot.tables)) {
      const drizzleTable = legacyTables.find((t) => getTableConfig(t).name === name);
      const config = getTableConfig(drizzleTable as NonNullable<typeof drizzleTable>);
      const declared = config.indexes.map((i) => i.config.name).sort();
      const expected = Object.keys(table.indexes)
        .filter((i) => !i.endsWith('_pkey'))
        .sort();
      expect(declared, name).toEqual(expected);
    }
  });
});

describe('formatDrizzleType', () => {
  it.each([
    ['serial', 'integer'],
    ['timestamp (3)', 'timestamp(3) without time zone'],
    ['timestamp(3) with time zone', 'timestamp(3) with time zone'],
    ['integer[]', 'integer[]'],
    ['varchar(20)', 'character varying(20)'],
    ['double precision', 'double precision'],
  ])('%s -> %s', (input, output) => {
    expect(formatDrizzleType(input)).toBe(output);
  });
});

describe('createDb', () => {
  it('builds the relational query API for every table without connecting', async () => {
    const handle = createDb({ connectionString: 'postgres://nobody:nothing@127.0.0.1:1/none', max: 1 });
    expect(handle.db.query.mod).toBeDefined();
    expect(handle.db.query.user).toBeDefined();
    expect(handle.db.query.session).toBeDefined();
    await handle.close();
    await handle.close();
  });
});
