/**
 * A small ICU MessageFormat interpreter for the bundled English catalogue of the domain
 * components (and for any catalogue passed to `createDomainTranslate`). Apps normally plug in
 * Paraglide instead (`configureDomainI18n`), which compiles the same messages ahead of time.
 *
 * Supported (the subset allowed by packages/i18n/messages/README.md):
 *   `{arg}` · `{n, number}` · `{n, number, compact}` · `{n, number, percent}` ·
 *   `{n, plural, =0 {…} one {…} other {…}}` (with `#`) · `{n, selectordinal, …}` ·
 *   `{k, select, a {…} other {…}}` · `'{'`, `'}'` and `''` escapes.
 * Parsed messages are cached; malformed messages throw at parse time (caught by the tests).
 */

export type IcuParams = Readonly<Record<string, string | number>>;

type Node =
  | { kind: 'text'; value: string }
  | { kind: 'hash' }
  | { kind: 'arg'; name: string; style: 'none' | 'number' | 'compact' | 'percent' }
  | { kind: 'plural'; name: string; ordinal: boolean; options: Map<string, Node[]> }
  | { kind: 'select'; name: string; options: Map<string, Node[]> };

class Parser {
  private index = 0;
  private readonly source: string;

  constructor(source: string) {
    this.source = source;
  }

  parse(): Node[] {
    const nodes = this.nodes(false, false);
    if (this.index < this.source.length) throw this.error('unexpected "}"');
    return nodes;
  }

  private error(message: string): Error {
    return new Error(`ICU: ${message} at ${this.index} in "${this.source}"`);
  }

  private nodes(nested: boolean, inPlural: boolean): Node[] {
    const out: Node[] = [];
    let text = '';
    const flush = () => {
      if (text) out.push({ kind: 'text', value: text });
      text = '';
    };
    while (this.index < this.source.length) {
      const char = this.source[this.index] as string;
      if (char === "'") {
        const next = this.source[this.index + 1];
        if (next === "'") {
          text += "'";
          this.index += 2;
        } else if (next === '{' || next === '}' || (inPlural && next === '#')) {
          const end = this.source.indexOf("'", this.index + 1);
          if (end === -1) throw this.error('unterminated quote');
          text += this.source.slice(this.index + 1, end);
          this.index = end + 1;
        } else {
          text += char;
          this.index += 1;
        }
      } else if (char === '{') {
        flush();
        out.push(this.argument());
      } else if (char === '}') {
        if (!nested) throw this.error('unexpected "}"');
        break;
      } else if (char === '#' && inPlural) {
        flush();
        out.push({ kind: 'hash' });
        this.index += 1;
      } else {
        text += char;
        this.index += 1;
      }
    }
    flush();
    return out;
  }

  private word(): string {
    this.skipSpace();
    const match = /^[^\s,{}]+/.exec(this.source.slice(this.index));
    if (!match) throw this.error('expected an identifier');
    this.index += match[0].length;
    return match[0];
  }

  private skipSpace(): void {
    while (/\s/.test(this.source[this.index] ?? '')) this.index += 1;
  }

  private expect(char: string): void {
    this.skipSpace();
    if (this.source[this.index] !== char) throw this.error(`expected "${char}"`);
    this.index += 1;
  }

  private argument(): Node {
    this.expect('{');
    const name = this.word();
    this.skipSpace();
    if (this.source[this.index] === '}') {
      this.index += 1;
      return { kind: 'arg', name, style: 'none' };
    }
    this.expect(',');
    const type = this.word();
    this.skipSpace();
    if (type === 'number') {
      let style: 'number' | 'compact' | 'percent' = 'number';
      if (this.source[this.index] === ',') {
        this.index += 1;
        const option = this.word();
        if (option !== 'compact' && option !== 'percent' && option !== 'integer') {
          throw this.error(`unsupported number style "${option}"`);
        }
        style = option === 'integer' ? 'number' : option;
      }
      this.expect('}');
      return { kind: 'arg', name, style };
    }
    if (type === 'plural' || type === 'selectordinal' || type === 'select') {
      this.expect(',');
      const options = new Map<string, Node[]>();
      for (;;) {
        this.skipSpace();
        if (this.source[this.index] === '}') break;
        const key = this.word();
        this.expect('{');
        options.set(key, this.nodes(true, type !== 'select'));
        this.expect('}');
      }
      this.expect('}');
      if (!options.has('other')) throw this.error('missing "other" option');
      return type === 'select'
        ? { kind: 'select', name, options }
        : { kind: 'plural', name, ordinal: type === 'selectordinal', options };
    }
    throw this.error(`unsupported argument type "${type}"`);
  }
}

const cache = new Map<string, Node[]>();

/** Parses a message (cached). Throws on malformed input. */
export function parseIcu(message: string): Node[] {
  let nodes = cache.get(message);
  if (!nodes) {
    nodes = new Parser(message).parse();
    if (cache.size > 512) cache.clear();
    cache.set(message, nodes);
  }
  return nodes;
}

const numberFormats = new Map<string, Intl.NumberFormat>();
function numberFormat(locale: string, style: 'number' | 'compact' | 'percent'): Intl.NumberFormat {
  const key = `${locale}|${style}`;
  let format = numberFormats.get(key);
  if (!format) {
    format = new Intl.NumberFormat(
      locale,
      style === 'compact'
        ? { notation: 'compact', maximumSignificantDigits: 3 }
        : style === 'percent'
          ? { style: 'percent', maximumFractionDigits: 1 }
          : {},
    );
    numberFormats.set(key, format);
  }
  return format;
}

function render(nodes: Node[], params: IcuParams, locale: string, pluralValue: number | null): string {
  let out = '';
  for (const node of nodes) {
    switch (node.kind) {
      case 'text':
        out += node.value;
        break;
      case 'hash':
        out += pluralValue === null ? '#' : numberFormat(locale, 'number').format(pluralValue);
        break;
      case 'arg': {
        const value = params[node.name];
        if (value === undefined) out += `{${node.name}}`;
        else if (node.style === 'none' || typeof value !== 'number') out += String(value);
        else out += numberFormat(locale, node.style).format(value);
        break;
      }
      case 'plural': {
        const value = Number(params[node.name] ?? 0);
        const exact = node.options.get(`=${value}`);
        const category = new Intl.PluralRules(locale, { type: node.ordinal ? 'ordinal' : 'cardinal' }).select(value);
        const branch = exact ?? node.options.get(category) ?? (node.options.get('other') as Node[]);
        out += render(branch, params, locale, value);
        break;
      }
      case 'select': {
        const value = String(params[node.name] ?? 'other');
        const branch = node.options.get(value) ?? (node.options.get('other') as Node[]);
        out += render(branch, params, locale, pluralValue);
        break;
      }
    }
  }
  return out;
}

/** Formats an ICU message with `params` for `locale` (a BCP-47 tag). */
export function formatIcu(message: string, params: IcuParams = {}, locale = 'en'): string {
  return render(parseIcu(message), params, locale, null);
}
