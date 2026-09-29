/**
 * Comparator of legacy responses: deep equality **with object key order**, deviation-aware
 * (PLAN §5.5), plus the structural checks every legacy answer must pass whatever the data:
 * strict schema + key order (`validateLegacy` of `@sotf/contracts`), `meta` arithmetic and the
 * UpdatesChecker value fields.
 */
import {
  LEGACY_JSON_CONTENT_TYPE,
  LEGACY_NOT_FOUND_MESSAGE,
  LegacyErrorResponse,
  UPDATES_CHECKER_VALUE_FIELDS,
  validateLegacy,
} from '@sotf/contracts/legacy';
import type { z } from 'zod';
import type { DeviationId } from './deviations.ts';
import type { FixturePolicy } from './expectations.ts';
import { normaliseContentType, parseJson } from './http.ts';
import { isPlainObject, jsonType, normalize } from './normalize.ts';

export type DiffKind =
  | 'status'
  | 'content-type'
  | 'json'
  | 'schema'
  | 'order'
  | 'missing'
  | 'extra'
  | 'type'
  | 'value'
  | 'meta'
  | 'value-field';

export interface Diff {
  path: string;
  kind: DiffKind;
  message: string;
  expected?: unknown;
  actual?: unknown;
}

export interface CompareContext {
  /** Deviations allowed at this comparison. */
  deviations: ReadonlySet<DeviationId>;
  /** Deviations that were actually needed (reported). */
  used: Set<DeviationId>;
}

const MAX_DIFFS = 200;

function preview(value: unknown): unknown {
  const text = JSON.stringify(value);
  if (text !== undefined && text.length > 160) return `${text.slice(0, 157)}...`;
  return value;
}

/** Deviation hook: `type: null` in legacy may come out as "Mod" or "Library" (backfill B4). */
function acceptedDeviation(key: string | null, expected: unknown, actual: unknown, ctx: CompareContext): boolean {
  if (
    key === 'type' &&
    expected === null &&
    (actual === 'Mod' || actual === 'Library') &&
    ctx.deviations.has('type-null')
  ) {
    ctx.used.add('type-null');
    return true;
  }
  return false;
}

/** Deep diff with key order. Both sides should already be normalised. */
export function diffValues(
  expected: unknown,
  actual: unknown,
  ctx: CompareContext,
  path = '$',
  key: string | null = null,
  out: Diff[] = [],
): Diff[] {
  if (out.length >= MAX_DIFFS) return out;
  const te = jsonType(expected);
  const ta = jsonType(actual);
  if (te !== ta) {
    if (!acceptedDeviation(key, expected, actual, ctx)) {
      out.push({
        path,
        kind: 'type',
        message: `expected ${te}, got ${ta}`,
        expected: preview(expected),
        actual: preview(actual),
      });
    }
    return out;
  }
  if (Array.isArray(expected) && Array.isArray(actual)) {
    if (expected.length !== actual.length) {
      out.push({ path, kind: 'value', message: `expected ${expected.length} items, got ${actual.length}` });
    }
    const n = Math.min(expected.length, actual.length);
    for (let i = 0; i < n; i++) diffValues(expected[i], actual[i], ctx, `${path}[${i}]`, null, out);
    return out;
  }
  if (isPlainObject(expected) && isPlainObject(actual)) {
    const ek = Object.keys(expected);
    const ak = Object.keys(actual);
    const missing = ek.filter((k) => !(k in actual));
    const extra = ak.filter((k) => !(k in expected));
    for (const k of missing) out.push({ path: `${path}.${k}`, kind: 'missing', message: 'key missing' });
    for (const k of extra)
      out.push({ path: `${path}.${k}`, kind: 'extra', message: 'unexpected key', actual: preview(actual[k]) });
    const commonE = ek.filter((k) => k in actual);
    const commonA = ak.filter((k) => k in expected);
    if (commonE.join('\u0000') !== commonA.join('\u0000')) {
      out.push({ path, kind: 'order', message: 'key order differs', expected: commonE, actual: commonA });
    }
    for (const k of commonE) diffValues(expected[k], actual[k], ctx, `${path}.${k}`, k, out);
    return out;
  }
  if (!Object.is(expected, actual) && !acceptedDeviation(key, expected, actual, ctx)) {
    out.push({ path, kind: 'value', message: 'value differs', expected: preview(expected), actual: preview(actual) });
  }
  return out;
}

/** `byId` comparison of `$.data`: matched items equal; extra/missing only when the policy allows. */
export function diffById(
  expected: unknown[],
  actual: unknown[],
  policy: Pick<FixturePolicy, 'allowExtra' | 'allowMissing'>,
  ctx: CompareContext,
  path = '$.data',
  onAccepted: () => void = () => {},
): Diff[] {
  const out: Diff[] = [];
  const idOf = (item: unknown) => (isPlainObject(item) ? JSON.stringify(item.id) : undefined);
  const expectedById = new Map<string, unknown>();
  for (const item of expected) {
    const id = idOf(item);
    if (id !== undefined) expectedById.set(id, item);
  }
  const seen = new Set<string>();
  actual.forEach((item, i) => {
    const id = idOf(item);
    if (id === undefined) {
      out.push({ path: `${path}[${i}]`, kind: 'type', message: 'item without id' });
      return;
    }
    if (seen.has(id)) out.push({ path: `${path}[${i}]`, kind: 'value', message: `duplicate id ${id}` });
    seen.add(id);
    const match = expectedById.get(id);
    if (match === undefined) {
      if (!policy.allowExtra)
        out.push({ path: `${path}[${i}]`, kind: 'extra', message: `id ${id} is not in the reference` });
      else onAccepted();
      return;
    }
    diffValues(match, item, ctx, `${path}[id=${id}]`, null, out);
  });
  if (!policy.allowMissing) {
    for (const id of expectedById.keys()) {
      if (!seen.has(id))
        out.push({ path: `${path}[id=${id}]`, kind: 'missing', message: `id ${id} missing from the answer` });
    }
  } else if ([...expectedById.keys()].some((id) => !seen.has(id))) {
    onAccepted();
  }
  return out;
}

export function schemaDiffs(schema: z.ZodType, body: unknown): Diff[] {
  const result = validateLegacy(schema, body);
  if (result.success) return [];
  const diffs: Diff[] = [];
  for (const issue of result.zodIssues.slice(0, 20)) {
    diffs.push({ path: `$.${issue.path.join('.')}`.replace(/\.$/, ''), kind: 'schema', message: issue.message });
  }
  for (const issue of result.keyOrder.slice(0, 20)) {
    diffs.push({
      path: issue.path,
      kind: 'order',
      message: 'key order differs from the legacy schema',
      expected: issue.expected,
      actual: issue.actual,
    });
  }
  return diffs;
}

/** `meta` arithmetic of `GET /api/mods` (research/01 §2.3) for the requested page and limit. */
export function metaDiffs(body: unknown, requested: { page: number; limit: number } | null): Diff[] {
  if (!isPlainObject(body) || !isPlainObject(body.meta) || !Array.isArray(body.data)) return [];
  const meta = body.meta;
  const out: Diff[] = [];
  const { total, page, limit, pages, next_page, prev_page } = meta as Record<string, unknown>;
  if (typeof total !== 'number' || typeof page !== 'number' || typeof limit !== 'number') return out;
  if (requested) {
    if (page !== requested.page)
      out.push({
        path: '$.meta.page',
        kind: 'meta',
        message: 'page differs from the request',
        expected: requested.page,
        actual: page,
      });
    if (limit !== requested.limit)
      out.push({
        path: '$.meta.limit',
        kind: 'meta',
        message: 'limit differs from the request',
        expected: requested.limit,
        actual: limit,
      });
  }
  if (limit <= 0) return out; // legacy `limit=0` quirk: pages = null (checked by the schema/value fields)
  const expectedPages = Math.ceil(total / limit);
  if (pages !== expectedPages)
    out.push({
      path: '$.meta.pages',
      kind: 'meta',
      message: 'pages != ceil(total/limit)',
      expected: expectedPages,
      actual: pages,
    });
  const expectedNext = Math.min(page + 1, expectedPages);
  if (next_page !== expectedNext)
    out.push({
      path: '$.meta.next_page',
      kind: 'meta',
      message: 'next_page != min(page+1, pages)',
      expected: expectedNext,
      actual: next_page,
    });
  const expectedPrev = Math.max(page - 1, 1);
  if (prev_page !== expectedPrev)
    out.push({
      path: '$.meta.prev_page',
      kind: 'meta',
      message: 'prev_page != max(page-1, 1)',
      expected: expectedPrev,
      actual: prev_page,
    });
  const expectedLen = Math.max(0, Math.min(limit, total - (page - 1) * limit));
  if (body.data.length !== expectedLen) {
    out.push({
      path: '$.data',
      kind: 'meta',
      message: `page should hold ${expectedLen} items (total ${total}, limit ${limit})`,
      actual: body.data.length,
    });
  }
  return out;
}

const DATE_FIELDS = new Set(['lastReleasedAt', 'createdAt', 'updatedAt']);

function valueFieldDiff(path: string, field: string, value: unknown): Diff | null {
  if (DATE_FIELDS.has(field)) {
    return typeof value === 'string' && !Number.isNaN(Date.parse(value))
      ? null
      : { path, kind: 'value-field', message: 'UpdatesChecker needs a DateTime (ISO string)', actual: value };
  }
  if (field.startsWith('is') || field === 'status') {
    return typeof value === 'boolean'
      ? null
      : { path, kind: 'value-field', message: 'UpdatesChecker needs a bool', actual: value };
  }
  if (field === 'averageRating') {
    return typeof value === 'number' && Number.isFinite(value)
      ? null
      : { path, kind: 'value-field', message: 'UpdatesChecker needs a double', actual: value };
  }
  return typeof value === 'number' && Number.isInteger(value) && Math.abs(value) <= 2_147_483_647
    ? null
    : { path, kind: 'value-field', message: 'UpdatesChecker needs an Int32', actual: value };
}

/**
 * Fields the UpdatesChecker DTO reads as .NET value types (research/01 §1.2): never `null`, a
 * string or another shape. Mirrors the .NET checker for runs without Docker.
 */
export function updatesCheckerDiffs(body: unknown): Diff[] {
  const out: Diff[] = [];
  if (!isPlainObject(body)) return [{ path: '$', kind: 'value-field', message: 'root must be an object' }];
  const push = (d: Diff | null) => {
    if (d) out.push(d);
  };
  for (const f of UPDATES_CHECKER_VALUE_FIELDS.root) push(valueFieldDiff(`$.${f}`, f, body[f]));
  if (!isPlainObject(body.meta)) out.push({ path: '$.meta', kind: 'value-field', message: 'meta must be an object' });
  else for (const f of UPDATES_CHECKER_VALUE_FIELDS.meta) push(valueFieldDiff(`$.meta.${f}`, f, body.meta[f]));
  if (!Array.isArray(body.data)) {
    out.push({ path: '$.data', kind: 'value-field', message: 'data must be an array' });
    return out;
  }
  body.data.forEach((mod, i) => {
    const p = `$.data[${i}]`;
    if (!isPlainObject(mod)) {
      out.push({ path: p, kind: 'value-field', message: 'mod must be an object' });
      return;
    }
    for (const f of UPDATES_CHECKER_VALUE_FIELDS.mod) push(valueFieldDiff(`${p}.${f}`, f, mod[f]));
    if (mod.numberOfElements !== null && mod.numberOfElements !== undefined) {
      push(valueFieldDiff(`${p}.numberOfElements`, 'numberOfElements', mod.numberOfElements));
    }
    const lists: Array<[string, readonly string[]]> = [
      ['images', UPDATES_CHECKER_VALUE_FIELDS.image],
      ['versions', UPDATES_CHECKER_VALUE_FIELDS.version],
    ];
    for (const [list, fields] of lists) {
      const items = mod[list];
      if (items === null || items === undefined) continue; // reference types may be null for Newtonsoft
      if (!Array.isArray(items)) {
        out.push({ path: `${p}.${list}`, kind: 'value-field', message: 'must be an array' });
        continue;
      }
      items.forEach((item, j) => {
        if (!isPlainObject(item)) return;
        for (const f of fields) push(valueFieldDiff(`${p}.${list}[${j}].${f}`, f, item[f]));
      });
    }
    if (isPlainObject(mod._count)) {
      for (const f of UPDATES_CHECKER_VALUE_FIELDS.count) push(valueFieldDiff(`${p}._count.${f}`, f, mod._count[f]));
    }
  });
  return out;
}

export interface Reference {
  status: number;
  body: unknown;
}

export interface Observed {
  status: number;
  contentType: string | undefined;
  body: Buffer;
}

export interface ComparisonResult {
  ok: boolean;
  /** `legacy` = same status as the reference, `v2` = accepted v2 alternative. */
  outcome: 'legacy' | 'v2' | 'mismatch';
  diffs: Diff[];
  deviations: DeviationId[];
}

/** Requested `page`/`limit` of a list route (`null` when not a list or non-numeric). */
export function requestedPaging(route: string): { page: number; limit: number } | null {
  const url = new URL(route, 'http://x');
  if (url.pathname !== '/api/mods') return null;
  const page = url.searchParams.get('page');
  const limit = url.searchParams.get('limit');
  const p = page === null || page === '' ? 1 : Number(page);
  const l = limit === null || limit === '' ? 10 : Number(limit);
  return Number.isInteger(p) && Number.isInteger(l) ? { page: p, limit: l } : null;
}

/**
 * Compares one observed answer with the reference (a fixture, or the legacy server in shadow
 * mode) under the fixture's policy.
 */
export function compareResponse(
  route: string,
  schema: z.ZodType,
  policy: FixturePolicy,
  reference: Reference,
  observed: Observed,
): ComparisonResult {
  const ctx: CompareContext = { deviations: new Set(policy.deviations), used: new Set() };
  const diffs: Diff[] = [];
  const done = (outcome: ComparisonResult['outcome']): ComparisonResult => ({
    ok: diffs.length === 0,
    outcome: diffs.length === 0 ? outcome : 'mismatch',
    diffs,
    deviations: [...ctx.used],
  });

  const contentType = normaliseContentType(observed.contentType);
  if (contentType !== LEGACY_JSON_CONTENT_TYPE) {
    diffs.push({
      path: 'content-type',
      kind: 'content-type',
      message: 'legacy JSON is `application/json` without charset',
      expected: LEGACY_JSON_CONTENT_TYPE,
      actual: observed.contentType ?? null,
    });
  }
  let outcome: 'legacy' | 'v2';
  if (observed.status === reference.status) outcome = 'legacy';
  else if (policy.v2 && observed.status === policy.v2.status) {
    outcome = 'v2';
    ctx.used.add(policy.v2.deviation);
  } else {
    diffs.push({
      path: 'status',
      kind: 'status',
      message: 'unexpected status',
      expected: policy.v2 ? [reference.status, policy.v2.status] : reference.status,
      actual: observed.status,
    });
    return done('mismatch');
  }
  const parsed = parseJson(observed.body);
  if (!parsed.ok) {
    diffs.push({ path: '$', kind: 'json', message: `body is not JSON: ${parsed.error}` });
    return done('mismatch');
  }
  const body = parsed.value;

  if (outcome === 'v2' && policy.v2) {
    diffs.push(...schemaDiffs(LegacyErrorResponse, body));
    if (isPlainObject(body) && body.error !== policy.v2.error) {
      diffs.push({
        path: '$.error',
        kind: 'value',
        message: 'error code differs',
        expected: policy.v2.error,
        actual: body.error,
      });
    }
    if (policy.v2.exactBody) diffValues(policy.v2.exactBody, body, ctx, '$', null, diffs);
    return done('v2');
  }

  const isError = reference.status >= 400;
  if (isError || policy.compare === 'error') {
    diffs.push(...schemaDiffs(LegacyErrorResponse, body));
    const ref = reference.body;
    if (isPlainObject(ref) && isPlainObject(body)) {
      if (body.error !== ref.error)
        diffs.push({
          path: '$.error',
          kind: 'value',
          message: 'error code differs',
          expected: ref.error,
          actual: body.error,
        });
      if (ref.error === 'NOT_FOUND' && body.message !== LEGACY_NOT_FOUND_MESSAGE) {
        diffs.push({
          path: '$.message',
          kind: 'value',
          message: 'a legacy 404 carries the Spanish literal',
          expected: LEGACY_NOT_FOUND_MESSAGE,
          actual: body.message,
        });
      }
    }
    return done('legacy');
  }

  diffs.push(...schemaDiffs(schema, body));
  diffs.push(...metaDiffs(body, requestedPaging(route)));
  if (policy.updatesChecker) diffs.push(...updatesCheckerDiffs(body));

  const norm = { volatilePaths: policy.volatilePaths, orderKey: policy.orderKey, dropHidden: policy.dropHidden };
  if (policy.dropHidden && JSON.stringify(reference.body).includes('"isHidden":true')) ctx.used.add('comments-hidden');
  const expectedN = normalize(reference.body, norm);
  const actualN = normalize(body, norm);
  if (policy.compare === 'strict') {
    diffValues(expectedN, actualN, ctx, '$', null, diffs);
  } else if (policy.compare === 'byId') {
    if (
      isPlainObject(expectedN) &&
      isPlainObject(actualN) &&
      Array.isArray(expectedN.data) &&
      Array.isArray(actualN.data)
    ) {
      const { data: ed, meta: _em, ...eRest } = expectedN;
      const { data: ad, meta: _am, ...aRest } = actualN;
      diffValues(eRest, aRest, ctx, '$', null, diffs);
      diffs.push(
        ...diffById(ed, ad, policy, ctx, '$.data', () => {
          for (const d of policy.deviations) if (d !== 'type-null' && d !== 'stable-order') ctx.used.add(d);
        }),
      );
    } else {
      diffValues(expectedN, actualN, ctx, '$', null, diffs);
    }
  }
  return done('legacy');
}
