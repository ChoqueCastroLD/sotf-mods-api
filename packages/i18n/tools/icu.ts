/**
 * ICU MessageFormat (v1) parser for the subset SOTF Mods messages use (PLAN §7.11: "plurales ICU").
 *
 * Supported syntax
 * - Text, with ICU apostrophe quoting: `''` is a literal apostrophe, `'{'`… `'}'` quotes syntax
 *   characters (and `'#'` inside plurals). A lone apostrophe (`don't`) is literal text.
 * - `{name}`: argument, inserted as-is.
 * - `{name, number}` · `{name, number, integer|percent|compact}`: locale-formatted number.
 * - `{name, date, short|medium|long|full}` · `{name, time, short|medium|long}`: UTC date/time.
 * - `{name, plural, =0 {…} one {…} other {…}}` and `{name, selectordinal, …}`; `#` inside a
 *   branch is the locale-formatted number. Exact matches `=N` take precedence (N integer 0–999).
 * - `{name, select, value {…} other {…}}` (values `[A-Za-z0-9_-]+`).
 * - Nesting (a select inside a plural and vice versa).
 *
 * Not supported (rejected with a clear error): `offset:`, `choice`, `spellout`, `duration`,
 * skeletons (`::`), tags (`<b>`), and argument names that are not plain identifiers.
 */

export interface TextNode {
  type: 'text';
  value: string;
}

export type NumberStyle = 'decimal' | 'integer' | 'percent' | 'compact';
export type DateTimeStyle = 'short' | 'medium' | 'long' | 'full';

export type ArgumentFormat =
  | { kind: 'number'; style: NumberStyle }
  | { kind: 'date'; style: DateTimeStyle }
  | { kind: 'time'; style: Exclude<DateTimeStyle, 'full'> };

export interface ArgumentNode {
  type: 'argument';
  name: string;
  format: ArgumentFormat | null;
}

/** `#` inside a plural branch: the number of the innermost enclosing plural. */
export interface PoundNode {
  type: 'pound';
  /** Argument of the innermost enclosing plural or selectordinal. */
  name: string;
}

export interface MessageOption {
  /** `other`, a CLDR plural category, `=N` (plural) or a select value. */
  key: string;
  value: IcuNode[];
}

export interface PluralNode {
  type: 'plural';
  name: string;
  ordinal: boolean;
  options: MessageOption[];
}

export interface SelectNode {
  type: 'select';
  name: string;
  options: MessageOption[];
}

export type IcuNode = TextNode | ArgumentNode | PoundNode | PluralNode | SelectNode;

export const PLURAL_CATEGORIES = ['zero', 'one', 'two', 'few', 'many', 'other'] as const;
export type PluralCategory = (typeof PLURAL_CATEGORIES)[number];

export class IcuSyntaxError extends Error {
  readonly offset: number;
  constructor(message: string, source: string, offset: number) {
    const excerpt = `${source.slice(Math.max(0, offset - 20), offset)}⟪here⟫${source.slice(offset, offset + 20)}`;
    super(`${message} (at offset ${offset}: "${excerpt}")`);
    this.name = 'IcuSyntaxError';
    this.offset = offset;
  }
}

/** Argument names: identifiers without `__`, which is reserved for generated local variables. */
export const ARGUMENT_NAME = /^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$/;
const SELECT_VALUE = /^[A-Za-z0-9_-]+$/;
const EXACT_KEY = /^=(\d{1,3})$/;
const MAX_DEPTH = 4;

const NUMBER_STYLES: ReadonlySet<string> = new Set(['integer', 'percent', 'compact']);
const DATE_STYLES: ReadonlySet<string> = new Set(['short', 'medium', 'long', 'full']);
const TIME_STYLES: ReadonlySet<string> = new Set(['short', 'medium', 'long']);

class Parser {
  private pos = 0;
  private readonly source: string;

  constructor(source: string) {
    this.source = source;
  }

  parse(): IcuNode[] {
    const nodes = this.message(null, 0);
    if (this.pos < this.source.length) this.fail('Unexpected "}" (unbalanced braces)');
    return nodes;
  }

  private fail(message: string, at = this.pos): never {
    throw new IcuSyntaxError(message, this.source, at);
  }

  private peek(offset = 0): string | undefined {
    return this.source[this.pos + offset];
  }

  private skipWhitespace(): void {
    while (this.pos < this.source.length && /\s/.test(this.source[this.pos] ?? '')) this.pos += 1;
  }

  private expect(char: string): void {
    if (this.peek() !== char) this.fail(`Expected "${char}"`);
    this.pos += 1;
  }

  /** Parses text and placeholders until `}` (nested) or the end of input (top level). */
  private message(pluralArg: string | null, depth: number): IcuNode[] {
    const nodes: IcuNode[] = [];
    let text = '';
    const flush = () => {
      if (text) nodes.push({ type: 'text', value: text });
      text = '';
    };
    while (this.pos < this.source.length) {
      const char = this.source[this.pos] as string;
      if (char === "'") {
        text += this.apostrophe(pluralArg !== null);
        continue;
      }
      if (char === '{') {
        flush();
        nodes.push(this.placeholder(pluralArg, depth));
        continue;
      }
      if (char === '}') break;
      if (char === '#' && pluralArg !== null) {
        flush();
        nodes.push({ type: 'pound', name: pluralArg });
        this.pos += 1;
        continue;
      }
      text += char;
      this.pos += 1;
    }
    flush();
    return nodes;
  }

  /** ICU "DOUBLE_OPTIONAL" apostrophe mode. */
  private apostrophe(inPlural: boolean): string {
    const next = this.peek(1);
    if (next === "'") {
      this.pos += 2;
      return "'";
    }
    const quotable = next === '{' || next === '}' || (inPlural && next === '#');
    if (!quotable) {
      this.pos += 1;
      return "'";
    }
    const start = this.pos;
    this.pos += 1;
    let quoted = '';
    while (this.pos < this.source.length) {
      const char = this.source[this.pos] as string;
      if (char === "'") {
        if (this.peek(1) === "'") {
          quoted += "'";
          this.pos += 2;
          continue;
        }
        this.pos += 1;
        return quoted;
      }
      quoted += char;
      this.pos += 1;
    }
    return this.fail('Unterminated quoted literal (close it with an apostrophe)', start);
  }

  private identifier(what: string): string {
    const start = this.pos;
    while (this.pos < this.source.length && /[A-Za-z0-9_]/.test(this.source[this.pos] ?? '')) this.pos += 1;
    const value = this.source.slice(start, this.pos);
    if (!value) this.fail(`Expected ${what}`, start);
    return value;
  }

  private placeholder(pluralArg: string | null, depth: number): IcuNode {
    const open = this.pos;
    this.expect('{');
    this.skipWhitespace();
    if (this.peek() === '<' || this.peek() === '/' || this.peek() === '#')
      this.fail('Tags and markup are not supported');
    const name = this.identifier('an argument name');
    if (!ARGUMENT_NAME.test(name)) {
      this.fail(`Invalid argument name "${name}" (use camelCase or snake_case identifiers without "__")`, open + 1);
    }
    this.skipWhitespace();
    if (this.peek() === '}') {
      this.pos += 1;
      return { type: 'argument', name, format: null };
    }
    this.expect(',');
    this.skipWhitespace();
    const typeStart = this.pos;
    const type = this.identifier('an argument type');
    this.skipWhitespace();
    switch (type) {
      case 'number':
      case 'date':
      case 'time':
        return this.formattedArgument(name, type, typeStart);
      case 'plural':
      case 'selectordinal':
      case 'select':
        if (depth >= MAX_DEPTH) this.fail(`Selectors are nested more than ${MAX_DEPTH} levels deep`, open);
        return this.selector(name, type, pluralArg, depth, open);
      default:
        return this.fail(`Unsupported argument type "${type}"`, typeStart);
    }
  }

  private formattedArgument(name: string, type: 'number' | 'date' | 'time', typeStart: number): ArgumentNode {
    let style = '';
    if (this.peek() === ',') {
      this.pos += 1;
      const styleStart = this.pos;
      const close = this.source.indexOf('}', this.pos);
      if (close === -1) this.fail('Unterminated argument', styleStart);
      style = this.source.slice(this.pos, close).trim();
      this.pos = close;
      if (!style) this.fail('Empty argument style', styleStart);
      if (style.startsWith('::')) this.fail('Number and date skeletons are not supported', styleStart);
    }
    this.expect('}');
    if (type === 'number') {
      if (style && !NUMBER_STYLES.has(style)) {
        this.fail(`Unsupported number style "${style}" (use integer, percent or compact)`, typeStart);
      }
      return { type: 'argument', name, format: { kind: 'number', style: (style || 'decimal') as NumberStyle } };
    }
    if (type === 'date') {
      if (style && !DATE_STYLES.has(style)) {
        this.fail(`Unsupported date style "${style}" (use short, medium, long or full)`, typeStart);
      }
      return { type: 'argument', name, format: { kind: 'date', style: (style || 'medium') as DateTimeStyle } };
    }
    if (style && !TIME_STYLES.has(style)) {
      this.fail(`Unsupported time style "${style}" (use short, medium or long)`, typeStart);
    }
    return {
      type: 'argument',
      name,
      format: { kind: 'time', style: (style || 'short') as Exclude<DateTimeStyle, 'full'> },
    };
  }

  private selector(
    name: string,
    type: 'plural' | 'selectordinal' | 'select',
    pluralArg: string | null,
    depth: number,
    open: number,
  ): PluralNode | SelectNode {
    this.expect(',');
    const isPlural = type !== 'select';
    const options: MessageOption[] = [];
    const seen = new Set<string>();
    for (;;) {
      this.skipWhitespace();
      if (this.peek() === '}') {
        this.pos += 1;
        break;
      }
      if (this.pos >= this.source.length) this.fail(`Unterminated ${type}`, open);
      const keyStart = this.pos;
      let key: string;
      if (this.peek() === '=') {
        this.pos += 1;
        key = `=${this.identifier('a number after "="')}`;
      } else {
        while (this.pos < this.source.length && /[A-Za-z0-9_:-]/.test(this.source[this.pos] ?? '')) this.pos += 1;
        key = this.source.slice(keyStart, this.pos);
      }
      if (!key) this.fail(`Expected a ${type} option key`, keyStart);
      if (key.startsWith('offset')) this.fail('"offset:" is not supported', keyStart);
      if (isPlural) {
        if (key.startsWith('=')) {
          if (!EXACT_KEY.test(key)) this.fail(`Exact match "${key}" must be an integer between 0 and 999`, keyStart);
        } else if (!(PLURAL_CATEGORIES as readonly string[]).includes(key)) {
          this.fail(`Unknown plural category "${key}" (use ${PLURAL_CATEGORIES.join(', ')} or =N)`, keyStart);
        }
      } else if (!SELECT_VALUE.test(key)) {
        this.fail(`Invalid select value "${key}" (use letters, digits, "_" and "-")`, keyStart);
      }
      const normalized = key.startsWith('=') ? `=${Number(key.slice(1))}` : key;
      if (seen.has(normalized)) this.fail(`Duplicate ${type} option "${key}"`, keyStart);
      seen.add(normalized);
      this.skipWhitespace();
      this.expect('{');
      const value = this.message(isPlural ? name : pluralArg, depth + 1);
      this.expect('}');
      options.push({ key: normalized, value });
    }
    if (!seen.has('other')) this.fail(`A ${type} must have an "other" option`, open);
    return isPlural
      ? { type: 'plural', name, ordinal: type === 'selectordinal', options }
      : { type: 'select', name, options };
  }
}

/** Parses an ICU message into an AST. Throws {@link IcuSyntaxError}. */
export function parseIcu(source: string): IcuNode[] {
  return new Parser(source).parse();
}

export type ArgumentKind = 'plain' | 'number' | 'date' | 'time' | 'plural' | 'selectordinal' | 'select';

/**
 * Arguments a message expects, with the ways each one is used. Used to check that every
 * translation takes exactly the same inputs as the English source.
 */
export function collectArguments(nodes: readonly IcuNode[], into = new Map<string, Set<ArgumentKind>>()) {
  const add = (name: string, kind: ArgumentKind) => {
    const kinds = into.get(name) ?? new Set<ArgumentKind>();
    kinds.add(kind);
    into.set(name, kinds);
  };
  for (const node of nodes) {
    switch (node.type) {
      case 'text':
      case 'pound':
        break;
      case 'argument':
        add(node.name, node.format ? node.format.kind : 'plain');
        break;
      case 'plural':
        add(node.name, node.ordinal ? 'selectordinal' : 'plural');
        for (const option of node.options) collectArguments(option.value, into);
        break;
      case 'select':
        add(node.name, 'select');
        for (const option of node.options) collectArguments(option.value, into);
        break;
    }
  }
  return into;
}

/** Visits every node depth-first (options included). */
export function walkIcu(nodes: readonly IcuNode[], visit: (node: IcuNode) => void): void {
  for (const node of nodes) {
    visit(node);
    if (node.type === 'plural' || node.type === 'select') {
      for (const option of node.options) walkIcu(option.value, visit);
    }
  }
}

/** Concatenated literal text of a message (all branches), e.g. for length and hygiene checks. */
export function textContent(nodes: readonly IcuNode[]): string {
  let text = '';
  walkIcu(nodes, (node) => {
    if (node.type === 'text') text += node.value;
  });
  return text;
}

/** Maps every text node (all branches), keeping the structure. */
export function mapText(nodes: readonly IcuNode[], map: (text: string) => string): IcuNode[] {
  return nodes.map((node): IcuNode => {
    switch (node.type) {
      case 'text':
        return { type: 'text', value: map(node.value) };
      case 'plural':
      case 'select':
        return {
          ...node,
          options: node.options.map((option) => ({ key: option.key, value: mapText(option.value, map) })),
        };
      default:
        return node;
    }
  });
}
