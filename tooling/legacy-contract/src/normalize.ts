/**
 * Normaliser of legacy responses before comparison (research/01 §7.1, PLAN §5.5):
 *
 * - volatile counters (`LEGACY_VOLATILE_FIELDS`, rating aggregates, every `_count.*` and the
 *   policy's `volatilePaths`) are replaced by a token that keeps only their JSON type, so a
 *   counter that became `null` or a string is still a difference;
 * - `dropHidden` removes comments with `isHidden: true` (deviation `comments-hidden`);
 * - `orderKey` re-orders runs of items that tie on the sort key by `id` (deviation `stable-order`:
 *   legacy had no tie-breaker, v2 breaks ties by `id`).
 *
 * Normalisation never changes the order of object keys: the comparator checks it afterwards.
 */
import { LEGACY_VOLATILE_FIELDS } from '@sotf/contracts/legacy';

/**
 * Rating aggregates also move with the site's activity (v2 reviews). Their *type* is still checked
 * (schema + UpdatesChecker value fields), only the value is ignored.
 */
export const EXTRA_VOLATILE_FIELDS = ['averageRating', 'reviewsCount'] as const;

export const VOLATILE_FIELDS: ReadonlySet<string> = new Set<string>([
  ...LEGACY_VOLATILE_FIELDS,
  ...EXTRA_VOLATILE_FIELDS,
]);

export interface NormalizeOptions {
  /** JSONPath-like patterns (`$.data.*`, `$.data[*].count`) whose values are volatile. */
  volatilePaths?: readonly string[];
  /** Sort key of `$.data` (list endpoints). */
  orderKey?: string;
  dropHidden?: boolean;
}

export function jsonType(value: unknown): string {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

export function volatileToken(value: unknown): string {
  return `‹volatile:${jsonType(value)}›`;
}

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/** Converts `$.data[*].count` / `$.data.*` into a matcher over normalised paths (`$.data.3.count`). */
export function compilePathPattern(pattern: string): RegExp {
  const normalised = pattern.replace(/\[(\*|\d+)\]/g, '.$1');
  const source = normalised
    .split('.')
    .map((segment) => (segment === '*' ? '[^.]+' : segment.replace(/[$^\\|+?()[\]{}]/g, '\\$&')))
    .join('\\.');
  return new RegExp(`^${source}$`);
}

function compareIds(a: unknown, b: unknown): number {
  const ia = isPlainObject(a) ? a.id : undefined;
  const ib = isPlainObject(b) ? b.id : undefined;
  if (typeof ia === 'number' && typeof ib === 'number') return ia - ib;
  return String(ia).localeCompare(String(ib));
}

/** Re-orders items that tie on `key` by `id`, keeping the order of the runs. */
export function breakTies(items: unknown[], key: string): unknown[] {
  const out: unknown[] = [];
  let run: unknown[] = [];
  let runValue: string | undefined;
  const flush = () => {
    out.push(...run.sort(compareIds));
    run = [];
  };
  for (const item of items) {
    const value = isPlainObject(item) ? JSON.stringify(item[key]) : undefined;
    if (run.length > 0 && value !== runValue) flush();
    runValue = value;
    run.push(item);
  }
  flush();
  return out;
}

function dropHiddenDeep(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.filter((item) => !(isPlainObject(item) && item.isHidden === true)).map(dropHiddenDeep);
  }
  if (isPlainObject(value)) {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value)) out[key] = dropHiddenDeep(child);
    return out;
  }
  return value;
}

function tokenise(value: unknown, path: string, parentKey: string | null, patterns: RegExp[]): unknown {
  if (patterns.some((re) => re.test(path))) return volatileToken(value);
  if (Array.isArray(value)) return value.map((item, i) => tokenise(item, `${path}.${i}`, parentKey, patterns));
  if (isPlainObject(value)) {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value)) {
      const childPath = `${path}.${key}`;
      out[key] =
        VOLATILE_FIELDS.has(key) || parentKey === '_count' || key === '_count'
          ? key === '_count' && isPlainObject(child)
            ? tokenise(child, childPath, key, patterns)
            : volatileToken(child)
          : tokenise(child, childPath, key, patterns);
    }
    return out;
  }
  return value;
}

/** Deep copy of `value` normalised for comparison (see module comment). */
export function normalize(value: unknown, options: NormalizeOptions = {}): unknown {
  let out: unknown = structuredClone(value);
  if (options.dropHidden) out = dropHiddenDeep(out);
  if (options.orderKey && isPlainObject(out) && Array.isArray(out.data)) {
    out = { ...out, data: breakTies(out.data, options.orderKey) };
    // `{...out}` keeps the key order of the envelope.
  }
  const patterns = (options.volatilePaths ?? []).map(compilePathPattern);
  return tokenise(out, '$', null, patterns);
}
