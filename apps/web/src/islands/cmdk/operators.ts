/**
 * Search operators of the palette: `by:handle`, `cat:slug`, `sort:downloads|new|updated|rating`,
 * `type:mod|library|build` and `mp:yes|no`. They can appear anywhere in the query; the rest
 * of the words is the text search. Pure functions, no DOM: the engine applies the filters and the
 * palette shows them as chips and completes their values.
 */

export const OPERATORS = ['by', 'cat', 'sort', 'type', 'mp'] as const;
export type Operator = (typeof OPERATORS)[number];

export const SORTS = ['downloads', 'new', 'updated', 'rating'] as const;
export type Sort = (typeof SORTS)[number];

export const TYPE_VALUES = ['mod', 'library', 'build'] as const;
export type TypeValue = (typeof TYPE_VALUES)[number];

export const MP_VALUES = ['yes', 'no'] as const;
export type MpValue = (typeof MP_VALUES)[number];

export interface Filters {
  by?: string;
  cat?: string;
  sort?: Sort;
  type?: TypeValue;
  mp?: MpValue;
}

export interface OperatorToken {
  op: Operator;
  /** As typed, without the `op:` part. */
  value: string;
  /** Offsets of `op:value` in the raw text. */
  start: number;
  end: number;
}

export interface ParsedFilters {
  /** Words left after removing the operators. */
  text: string;
  filters: Filters;
  tokens: OperatorToken[];
  /** The operator being typed at the end of the text (its value can be completed). */
  pending: OperatorToken | null;
}

const TOKEN = /(^|\s)(by|cat|sort|type|mp):(\S*)/gi;

function isOneOf<T extends string>(list: readonly T[], value: string): value is T {
  return (list as readonly string[]).includes(value);
}

/** True when `value` is a complete value of an enumerated operator. */
export function isEnumValue(op: Operator, value: string): boolean {
  const folded = value.toLowerCase();
  if (op === 'sort') return isOneOf(SORTS, folded);
  if (op === 'type') return isOneOf(TYPE_VALUES, folded);
  if (op === 'mp') return isOneOf(MP_VALUES, folded);
  return false;
}

export function parseFilters(raw: string): ParsedFilters {
  const tokens: OperatorToken[] = [];
  const filters: Filters = {};
  let text = '';
  let last = 0;
  TOKEN.lastIndex = 0;
  for (let found = TOKEN.exec(raw); found; found = TOKEN.exec(raw)) {
    const lead = found[1] ?? '';
    const op = (found[2] ?? '').toLowerCase() as Operator;
    const value = found[3] ?? '';
    const start = found.index + lead.length;
    const end = found.index + found[0].length;
    tokens.push({ op, value, start, end });
    text += raw.slice(last, start);
    last = end;
    const folded = value.toLowerCase();
    if (value === '') continue;
    if (op === 'by' || op === 'cat') filters[op] = value;
    else if (op === 'sort' && isOneOf(SORTS, folded)) filters.sort = folded;
    else if (op === 'type' && isOneOf(TYPE_VALUES, folded)) filters.type = folded;
    else if (op === 'mp' && isOneOf(MP_VALUES, folded)) filters.mp = folded;
  }
  text += raw.slice(last);
  const tail = tokens[tokens.length - 1];
  const pending =
    tail && tail.end === raw.length && !(tail.op !== 'by' && tail.op !== 'cat' && isEnumValue(tail.op, tail.value))
      ? tail
      : null;
  return { text: text.replace(/\s+/g, ' ').trim(), filters, tokens, pending };
}

/** Whether any operator narrows or reorders the results. */
export function hasFilters(filters: Filters): boolean {
  return Object.keys(filters).length > 0;
}

/** The raw text with `token` replaced by `op:value ` (completion of a suggestion). */
export function completeToken(raw: string, token: OperatorToken, value: string): string {
  return `${raw.slice(0, token.start)}${token.op}:${value} ${raw.slice(token.end)}`.replace(/\s+$/, ' ');
}

/** The raw text without `token`. */
export function removeToken(raw: string, token: OperatorToken): string {
  const before = raw.slice(0, token.start).replace(/\s+$/, '');
  const after = raw.slice(token.end).replace(/^\s+/, '');
  return before && after ? `${before} ${after}` : `${before}${after}`;
}
