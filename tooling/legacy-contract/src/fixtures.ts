/**
 * Golden fixtures of the legacy API (research/01 §7.1): `fixtures/*.json` + `INDEX.tsv`
 * (`name<TAB>route<TAB>status<TAB>content-type`). The directory is a byte-identical copy of
 * `docs/plan/research/fixtures/01-compat` (a test checks it).
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LEGACY_FIXTURES, LEGACY_SCHEMAS, type LegacySchemaName } from '@sotf/contracts/legacy';
import type { z } from 'zod';

export const PACKAGE_DIR = join(dirname(fileURLToPath(import.meta.url)), '..');
export const FIXTURES_DIR = join(PACKAGE_DIR, 'fixtures');
export const INDEX_FILE = join(FIXTURES_DIR, 'INDEX.tsv');

export interface Fixture {
  name: string;
  /** Path + query exactly as captured (`/api/mods?&approved=true…`). */
  route: string;
  status: number;
  contentType: string;
  /** Raw response bytes (minified JSON as served by the legacy API). */
  raw: Buffer;
  body: unknown;
  schemaName: LegacySchemaName;
  schema: z.ZodType;
}

export interface IndexRow {
  name: string;
  route: string;
  status: number;
  contentType: string;
}

/** Parses `INDEX.tsv`; throws on malformed rows so a broken copy never passes silently. */
export function parseIndex(text: string): IndexRow[] {
  const rows: IndexRow[] = [];
  for (const [i, line] of text.split('\n').entries()) {
    if (line.trim() === '') continue;
    const cells = line.split('\t');
    const [name, route, status, contentType] = cells;
    if (cells.length !== 4 || !name || !route || !status || !contentType) {
      throw new Error(`INDEX.tsv line ${i + 1}: expected 4 tab-separated cells, got ${JSON.stringify(line)}`);
    }
    const code = Number(status);
    if (!Number.isInteger(code) || code < 100 || code > 599) throw new Error(`INDEX.tsv line ${i + 1}: bad status`);
    rows.push({ name, route, status: code, contentType });
  }
  return rows;
}

let cache: Fixture[] | null = null;

/** Loads every fixture of `INDEX.tsv` with its body and the legacy schema bound by `@sotf/contracts`. */
export function loadFixtures(dir: string = FIXTURES_DIR): Fixture[] {
  if (dir === FIXTURES_DIR && cache) return cache;
  const rows = parseIndex(readFileSync(join(dir, 'INDEX.tsv'), 'utf8'));
  const bySchema = new Map(LEGACY_FIXTURES.map((meta) => [meta.name, meta]));
  const fixtures = rows.map((row): Fixture => {
    const meta = bySchema.get(row.name);
    if (!meta) throw new Error(`fixture ${row.name} is not bound to a schema in @sotf/contracts LEGACY_FIXTURES`);
    if (meta.route !== row.route || meta.status !== row.status) {
      throw new Error(`fixture ${row.name}: INDEX.tsv and LEGACY_FIXTURES disagree`);
    }
    const raw = readFileSync(join(dir, `${row.name}.json`));
    return {
      ...row,
      raw,
      body: JSON.parse(raw.toString('utf8')) as unknown,
      schemaName: meta.schema,
      schema: LEGACY_SCHEMAS[meta.schema],
    };
  });
  if (dir === FIXTURES_DIR) cache = fixtures;
  return fixtures;
}

export function fixtureByName(name: string, fixtures: Fixture[] = loadFixtures()): Fixture {
  const fixture = fixtures.find((f) => f.name === name);
  if (!fixture) throw new Error(`unknown fixture ${name}`);
  return fixture;
}

/** Deep copy of a fixture body (callers may mutate it). */
export function fixtureBody<T = unknown>(name: string): T {
  return structuredClone(fixtureByName(name).body) as T;
}
