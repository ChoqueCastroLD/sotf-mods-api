/**
 * Generates `src/legacy.gen.ts`: the Zod schemas of the legacy (v1) API, with the exact key order
 * of the golden fixtures captured from production (PLAN §5.4, §5.5; research/01).
 *
 * - Key order and observed JSON types come from the fixtures (`fixtures/legacy/*.json`).
 * - `scripts/legacy-spec.ts` names the nested objects and completes what samples cannot show.
 * - Every inferred or declared type is checked against every sample; any inconsistency (a new
 *   key, a different order, a value of another type) fails the generation.
 *
 *   node scripts/gen-legacy.ts          # write src/legacy.gen.ts
 *   node scripts/gen-legacy.ts --check  # exit 1 if the file is stale
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LEGACY_SPEC, type LegacyDtoSpec } from './legacy-spec.ts';

export const PACKAGE_DIR = join(dirname(fileURLToPath(import.meta.url)), '..');
export const FIXTURES_DIR = join(PACKAGE_DIR, 'fixtures', 'legacy');
export const OUTPUT_FILE = join(PACKAGE_DIR, 'src', 'legacy.gen.ts');

export interface LegacyFixture {
  name: string;
  route: string;
  status: number;
  contentType: string;
  body: unknown;
}

/** Reads `INDEX.tsv` (name, route, status, content type) and every fixture body. */
export function loadFixtures(dir: string = FIXTURES_DIR): LegacyFixture[] {
  const index = readFileSync(join(dir, 'INDEX.tsv'), 'utf8');
  return index
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .map((line) => {
      const [name, route, status, contentType] = line.split('\t');
      if (!name || !route || !status || !contentType) throw new Error(`malformed INDEX.tsv line: ${line}`);
      const body: unknown = JSON.parse(readFileSync(join(dir, `${name}.json`), 'utf8'));
      return { name, route, status: Number(status), contentType: contentType.trim(), body };
    });
}

// -----------------------------------------------------------------------------------------------
// Type DSL
// -----------------------------------------------------------------------------------------------

type Scalar = 'string' | 'int' | 'number' | 'bool' | 'datetime' | 'date' | 'true' | 'false';
type TypeNode =
  | { kind: Scalar; nullable: boolean }
  | { kind: 'enum'; values: string[]; nullable: boolean }
  | { kind: 'ref'; name: string; nullable: boolean }
  | { kind: 'array'; item: TypeNode; nullable: boolean };

const SCALARS = new Set<string>(['string', 'int', 'number', 'bool', 'datetime', 'date', 'true', 'false']);

function splitTopLevel(text: string, sep: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let current = '';
  for (const ch of text) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === sep && depth === 0) {
      out.push(current);
      current = '';
    } else current += ch;
  }
  out.push(current);
  return out;
}

export function parseType(text: string): TypeNode {
  const parts = splitTopLevel(text.trim(), '|');
  const nullable = parts.length > 1 && parts[parts.length - 1] === 'null';
  const core = (nullable ? parts.slice(0, -1) : parts).join('|').trim();
  if (SCALARS.has(core)) return { kind: core as Scalar, nullable };
  const call = /^(enum|ref|array)\((.*)\)$/.exec(core);
  if (!call) throw new Error(`unknown type "${text}"`);
  const [, fn, arg = ''] = call;
  if (fn === 'enum') return { kind: 'enum', values: arg.split('|').map((v) => v.trim()), nullable };
  if (fn === 'ref') return { kind: 'ref', name: arg.trim(), nullable };
  return { kind: 'array', item: parseType(arg), nullable };
}

const ISO_DATETIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function jsonKind(value: unknown): 'null' | 'bool' | 'int' | 'float' | 'string' | 'array' | 'object' {
  if (value === null) return 'null';
  if (typeof value === 'boolean') return 'bool';
  if (typeof value === 'number') return Number.isInteger(value) ? 'int' : 'float';
  if (typeof value === 'string') return 'string';
  if (Array.isArray(value)) return 'array';
  return 'object';
}

function infer(values: unknown[], where: string): TypeNode {
  const nullable = values.some((v) => v === null);
  const present = values.filter((v) => v !== null);
  if (present.length === 0) throw new Error(`${where}: only null in the fixtures, declare its type in legacy-spec.ts`);
  const kinds = new Set(present.map(jsonKind));
  if (kinds.has('object')) throw new Error(`${where}: nested object, declare it as ref(...) in legacy-spec.ts`);
  if (kinds.has('array')) {
    if (kinds.size > 1) throw new Error(`${where}: mixes arrays and scalars`);
    const items = present.flatMap((v) => v as unknown[]);
    if (items.length === 0) throw new Error(`${where}: arrays are always empty, declare array(...) in legacy-spec.ts`);
    return { kind: 'array', item: infer(items, `${where}[]`), nullable };
  }
  if (kinds.size === 1 && kinds.has('bool')) return { kind: 'bool', nullable };
  if ([...kinds].every((k) => k === 'int')) return { kind: 'int', nullable };
  if ([...kinds].every((k) => k === 'int' || k === 'float')) return { kind: 'number', nullable };
  if (kinds.size === 1 && kinds.has('string')) {
    const strings = present as string[];
    if (strings.every((s) => ISO_DATETIME.test(s))) return { kind: 'datetime', nullable };
    if (strings.every((s) => ISO_DATE.test(s))) return { kind: 'date', nullable };
    return { kind: 'string', nullable };
  }
  throw new Error(`${where}: mixed JSON types ${[...kinds].join(', ')}`);
}

function checkValue(value: unknown, type: TypeNode, where: string): void {
  if (value === null) {
    if (!type.nullable) throw new Error(`${where}: null but the type is not nullable`);
    return;
  }
  const kind = jsonKind(value);
  const fail = (expected: string) => {
    throw new Error(`${where}: expected ${expected}, got ${JSON.stringify(value)?.slice(0, 80)}`);
  };
  switch (type.kind) {
    case 'string':
      if (kind !== 'string') fail('string');
      return;
    case 'datetime':
      if (kind !== 'string' || !ISO_DATETIME.test(value as string)) fail('ISO datetime');
      return;
    case 'date':
      if (kind !== 'string' || !ISO_DATE.test(value as string)) fail('YYYY-MM-DD');
      return;
    case 'int':
      if (kind !== 'int') fail('integer');
      return;
    case 'number':
      if (kind !== 'int' && kind !== 'float') fail('number');
      return;
    case 'bool':
      if (kind !== 'bool') fail('boolean');
      return;
    case 'true':
      if (value !== true) fail('true');
      return;
    case 'false':
      if (value !== false) fail('false');
      return;
    case 'enum':
      if (kind !== 'string' || !type.values.includes(value as string)) fail(`one of ${type.values.join(', ')}`);
      return;
    case 'ref':
      if (kind !== 'object') fail(`object (${type.name})`);
      return;
    case 'array':
      if (kind !== 'array') fail('array');
      (value as unknown[]).forEach((item, i) => {
        checkValue(item, type.item, `${where}[${i}]`);
      });
      return;
  }
}

function emitType(type: TypeNode): string {
  let code: string;
  switch (type.kind) {
    case 'string':
      code = 'z.string()';
      break;
    case 'int':
      code = 'z.number().int()';
      break;
    case 'number':
      code = 'z.number()';
      break;
    case 'bool':
      code = 'z.boolean()';
      break;
    case 'datetime':
      code = 'LegacyDateTime';
      break;
    case 'date':
      code = 'LegacyDate';
      break;
    case 'true':
      code = 'z.literal(true)';
      break;
    case 'false':
      code = 'z.literal(false)';
      break;
    case 'enum':
      code = `z.enum([${type.values.map((v) => JSON.stringify(v)).join(', ')}])`;
      break;
    case 'ref':
      code = type.name;
      break;
    case 'array':
      code = `z.array(${emitType(type.item)})`;
      break;
  }
  return type.nullable ? `${code}.nullable()` : code;
}

function refsOf(type: TypeNode): string[] {
  if (type.kind === 'ref') return [type.name];
  if (type.kind === 'array') return refsOf(type.item);
  return [];
}

// -----------------------------------------------------------------------------------------------
// Sample selection
// -----------------------------------------------------------------------------------------------

export function selectPath(root: unknown, path: string): unknown[] {
  if (!path.startsWith('$')) throw new Error(`path must start with $: ${path}`);
  const tokens = path.slice(1).match(/\.[^.[\]]+|\[\]/g) ?? [];
  if (tokens.join('') !== path.slice(1)) throw new Error(`invalid path ${path}`);
  let current: unknown[] = [root];
  for (const token of tokens) {
    const next: unknown[] = [];
    for (const value of current) {
      if (token === '[]') {
        if (Array.isArray(value)) next.push(...value);
      } else if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        const key = token.slice(1);
        if (key in value) next.push((value as Record<string, unknown>)[key]);
      }
    }
    current = next;
  }
  return current;
}

function truncateExample(value: unknown): unknown {
  if (Array.isArray(value)) return value.slice(0, 1).map(truncateExample);
  if (typeof value === 'string') return value.length > 200 ? `${value.slice(0, 197)}...` : value;
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, truncateExample(v)]));
  }
  return value;
}

// -----------------------------------------------------------------------------------------------
// Model
// -----------------------------------------------------------------------------------------------

interface DtoModel {
  name: string;
  description: string;
  fields: Array<[string, TypeNode]>;
  example: Record<string, unknown>;
  samples: number;
  fixtures: string[];
}

function buildModel(fixtures: LegacyFixture[], spec: Readonly<Record<string, LegacyDtoSpec>>): Map<string, DtoModel> {
  const byName = new Map(fixtures.map((f) => [f.name, f]));
  const models = new Map<string, DtoModel>();
  const pendingDerived: Array<[string, LegacyDtoSpec]> = [];

  for (const [name, dtoSpec] of Object.entries(spec)) {
    if (dtoSpec.derive) {
      pendingDerived.push([name, dtoSpec]);
      continue;
    }
    if (dtoSpec.manual) {
      models.set(name, {
        name,
        description: dtoSpec.description,
        fields: dtoSpec.manual.fields.map(([key, type]) => [key, parseType(type)]),
        example: dtoSpec.manual.example,
        samples: 0,
        fixtures: [],
      });
      continue;
    }
    const samples: Array<{ fixture: string; value: Record<string, unknown> }> = [];
    for (const [fixtureName, path] of dtoSpec.sources ?? []) {
      const fixture = byName.get(fixtureName);
      if (!fixture) throw new Error(`${name}: unknown fixture ${fixtureName}`);
      for (const value of selectPath(fixture.body, path)) {
        if (value === null) continue;
        if (typeof value !== 'object' || Array.isArray(value))
          throw new Error(`${name}: ${fixtureName} ${path} is not an object`);
        samples.push({ fixture: fixtureName, value: value as Record<string, unknown> });
      }
    }
    const first = samples[0];
    if (!first) throw new Error(`${name}: no samples in the fixtures (use manual or derive)`);
    const keys = Object.keys(first.value);
    for (const sample of samples) {
      const sampleKeys = Object.keys(sample.value);
      if (sampleKeys.join(',') !== keys.join(',')) {
        throw new Error(
          `${name}: key order differs in ${sample.fixture}:\n  ${sampleKeys.join(',')}\n  vs ${keys.join(',')}`,
        );
      }
    }
    for (const key of Object.keys(dtoSpec.types ?? {})) {
      if (!keys.includes(key)) throw new Error(`${name}: declared type for unknown key "${key}"`);
    }
    const fields: Array<[string, TypeNode]> = keys.map((key) => {
      const declared = dtoSpec.types?.[key];
      const values = samples.map((s) => s.value[key]);
      const type = declared ? parseType(declared) : infer(values, `${name}.${key}`);
      samples.forEach((s) => {
        checkValue(s.value[key], type, `${name}.${key} (${s.fixture})`);
      });
      return [key, type];
    });
    models.set(name, {
      name,
      description: dtoSpec.description,
      fields,
      example: truncateExample(first.value) as Record<string, unknown>,
      samples: samples.length,
      fixtures: [...new Set(samples.map((s) => s.fixture))],
    });
  }

  for (const [name, dtoSpec] of pendingDerived) {
    const derive = dtoSpec.derive;
    if (!derive) continue;
    const base = models.get(derive.from);
    if (!base) throw new Error(`${name}: derives from unknown ${derive.from}`);
    const example = Object.fromEntries(Object.entries(base.example).filter(([key]) => !derive.omit.includes(key)));
    models.set(name, {
      name,
      description: dtoSpec.description,
      fields: base.fields.filter(([key]) => !derive.omit.includes(key)),
      example,
      samples: 0,
      fixtures: [],
    });
  }

  for (const model of models.values()) {
    for (const [key, type] of model.fields) {
      for (const ref of refsOf(type)) {
        if (!models.has(ref)) throw new Error(`${model.name}.${key}: ref to unknown DTO ${ref}`);
      }
    }
  }
  return models;
}

function topoOrder(models: Map<string, DtoModel>): DtoModel[] {
  const out: DtoModel[] = [];
  const state = new Map<string, 'visiting' | 'done'>();
  const visit = (name: string, trail: string[]) => {
    if (state.get(name) === 'done') return;
    if (state.get(name) === 'visiting') throw new Error(`reference cycle: ${[...trail, name].join(' -> ')}`);
    state.set(name, 'visiting');
    const model = models.get(name);
    if (!model) throw new Error(`unknown DTO ${name}`);
    for (const [, type] of model.fields) for (const ref of refsOf(type)) visit(ref, [...trail, name]);
    state.set(name, 'done');
    out.push(model);
  };
  for (const name of models.keys()) visit(name, []);
  return out;
}

function rootBindings(fixtures: LegacyFixture[], spec: Readonly<Record<string, LegacyDtoSpec>>): Map<string, string> {
  const binding = new Map<string, string>();
  for (const [name, dtoSpec] of Object.entries(spec)) {
    for (const [fixture, path] of dtoSpec.sources ?? []) {
      if (path !== '$') continue;
      const previous = binding.get(fixture);
      if (previous) throw new Error(`fixture ${fixture} bound to both ${previous} and ${name}`);
      binding.set(fixture, name);
    }
  }
  for (const fixture of fixtures) {
    if (!binding.has(fixture.name)) throw new Error(`fixture ${fixture.name} has no root schema in legacy-spec.ts`);
  }
  return binding;
}

// -----------------------------------------------------------------------------------------------
// Code generation
// -----------------------------------------------------------------------------------------------

function indent(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces);
  return text
    .split('\n')
    .map((line, i) => (i === 0 ? line : `${pad}${line}`))
    .join('\n');
}

/** Builds the source of `src/legacy.gen.ts`. */
export function generateLegacyModule(fixtures: LegacyFixture[] = loadFixtures()): string {
  const models = buildModel(fixtures, LEGACY_SPEC);
  const ordered = topoOrder(models);
  const bindings = rootBindings(fixtures, LEGACY_SPEC);
  const lines: string[] = [];
  lines.push(
    '// Generated by packages/contracts/scripts/gen-legacy.ts from fixtures/legacy/ — DO NOT EDIT.',
    '// Regenerate with `pnpm gen` (or `pnpm --filter @sotf/contracts gen`).',
    '//',
    `// ${fixtures.length} golden fixtures captured from api.sotf-mods.com on 2026-09-29 (research/01).`,
    '// Key order = declaration order; `assertKeyOrder` (legacy.ts) enforces it at runtime.',
    '',
    "import { z } from 'zod';",
    "import { dto } from './dto.ts';",
    '',
    '/** `Date.prototype.toISOString()` output: milliseconds and `Z` (Prisma DateTime in UTC). */',
    'export const LegacyDateTime = z.iso.datetime({ precision: 3 });',
    '/** Calendar day `YYYY-MM-DD` (UTC). */',
    'export const LegacyDate = z.iso.date();',
    '',
  );
  for (const model of ordered) {
    const provenance =
      model.samples > 0
        ? `${model.samples} sample(s) from ${model.fixtures.join(', ')}`
        : 'no samples in the fixtures (declared in legacy-spec.ts)';
    const fieldLines = model.fields.map(
      ([key, type]) => `    ${/^[A-Za-z_$][\w$]*$/.test(key) ? key : JSON.stringify(key)}: ${emitType(type)},`,
    );
    lines.push(
      `/** ${model.description.replaceAll('*/', '*\\/')} (${provenance}) */`,
      `export const ${model.name} = dto(`,
      `  ${JSON.stringify(model.name)},`,
      '  z.strictObject({',
      ...fieldLines,
      '  }),',
      '  {',
      `    description: ${JSON.stringify(model.description)},`,
      `    examples: [${indent(JSON.stringify(model.example, null, 2), 4)}],`,
      '  },',
      ');',
      `export type ${model.name} = z.infer<typeof ${model.name}>;`,
      '',
    );
  }
  lines.push('/** Every generated legacy schema by name. */', 'export const LEGACY_SCHEMAS = {');
  for (const model of ordered) lines.push(`  ${model.name},`);
  lines.push('} as const;', 'export type LegacySchemaName = keyof typeof LEGACY_SCHEMAS;', '');
  lines.push(
    '/** The golden fixtures (`fixtures/legacy/INDEX.tsv`) and the schema of each body. */',
    'export const LEGACY_FIXTURES: ReadonlyArray<{',
    '  name: string;',
    '  route: string;',
    '  status: number;',
    '  contentType: string;',
    '  schema: LegacySchemaName;',
    '}> = [',
  );
  for (const fixture of fixtures) {
    lines.push(
      `  { name: ${JSON.stringify(fixture.name)}, route: ${JSON.stringify(fixture.route)}, status: ${fixture.status}, contentType: ${JSON.stringify(fixture.contentType)}, schema: ${JSON.stringify(bindings.get(fixture.name))} },`,
    );
  }
  lines.push('];', '');
  return lines.join('\n');
}

function main(): void {
  const check = process.argv.includes('--check');
  const source = generateLegacyModule();
  if (check) {
    const current = readFileSync(OUTPUT_FILE, 'utf8');
    if (current !== source) {
      process.stderr.write('src/legacy.gen.ts is stale: run `pnpm --filter @sotf/contracts gen`\n');
      process.exit(1);
    }
    process.stdout.write('ok legacy.gen.ts is up to date\n');
    return;
  }
  writeFileSync(OUTPUT_FILE, source);
  process.stdout.write(`ok wrote ${OUTPUT_FILE}\n`);
}

if (import.meta.main) main();
