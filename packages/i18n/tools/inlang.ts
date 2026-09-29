/**
 * Converts parsed ICU messages to the inlang message format that Paraglide JS 2 compiles
 * (`@inlang/plugin-message-format`): a plain pattern string for simple messages, or a single
 * complex message `{ declarations, selectors, match }` for plurals and selects.
 *
 * Semantics kept from ICU
 * - `#` and `{n, number}` are formatted with the message's locale (`Intl.NumberFormat`).
 * - Exact matches (`=0`) win over plural categories; `other` is the fallback of every selector.
 * - Nested selectors are flattened into one ordered variant list; Paraglide evaluates variants in
 *   order and the all-wildcard variant (built from the `other` branches) always comes last.
 * - Dates and times are formatted in UTC (the HTML is shared by every visitor, PLAN §2.5).
 *
 * Generated local variables use the `<arg>__<suffix>` naming; `__` is forbidden in argument names
 * so they can never collide with inputs.
 */
import type { ArgumentFormat, IcuNode, MessageOption, PluralNode, SelectNode } from './icu.ts';

export interface InlangComplexMessage {
  declarations: string[];
  selectors: string[];
  match: Record<string, string>;
}

/** Value stored per key in `.generated/<locale>.json`. */
export type InlangMessage = string | [InlangComplexMessage];

/** Upper bound on flattened variants per message; beyond this the message should be split. */
export const MAX_VARIANTS = 64;

/** Escapes literal text for an inlang pattern (`{`, `}` and `\` are syntax). */
export function escapePatternText(text: string): string {
  return text.replace(/[\\{}]/g, (char) => `\\${char}`);
}

interface Local {
  name: string;
  declaration: string;
}

class Context {
  readonly inputs: string[] = [];
  readonly locals = new Map<string, Local>();
  readonly selectors: string[] = [];

  input(name: string): string {
    if (!this.inputs.includes(name)) this.inputs.push(name);
    return name;
  }

  local(name: string, declaration: string): string {
    if (!this.locals.has(name)) this.locals.set(name, { name, declaration });
    return name;
  }

  selector(name: string): string {
    if (!this.selectors.includes(name)) this.selectors.push(name);
    return name;
  }

  numberLocal(arg: string): string {
    this.input(arg);
    return this.local(`${arg}__number`, `local ${arg}__number = ${arg}: number`);
  }

  formatted(arg: string, format: ArgumentFormat): string {
    this.input(arg);
    switch (format.kind) {
      case 'number':
        switch (format.style) {
          case 'decimal':
            return this.numberLocal(arg);
          case 'integer':
            return this.local(`${arg}__integer`, `local ${arg}__integer = ${arg}: number maximumFractionDigits=0`);
          case 'percent':
            return this.local(`${arg}__percent`, `local ${arg}__percent = ${arg}: number style=percent`);
          case 'compact':
            return this.local(
              `${arg}__compact`,
              `local ${arg}__compact = ${arg}: number notation=compact maximumSignificantDigits=3`,
            );
        }
        break;
      case 'date':
        return this.local(
          `${arg}__date_${format.style}`,
          `local ${arg}__date_${format.style} = ${arg}: datetime dateStyle=${format.style} timeZone=UTC`,
        );
      case 'time':
        return this.local(
          `${arg}__time_${format.style}`,
          `local ${arg}__time_${format.style} = ${arg}: datetime timeStyle=${format.style} timeZone=UTC`,
        );
    }
    throw new Error(`unreachable format ${JSON.stringify(format)}`);
  }

  declarations(): string[] {
    return [...this.inputs.map((name) => `input ${name}`), ...[...this.locals.values()].map((l) => l.declaration)];
  }
}

interface Variant {
  conditions: Map<string, string>;
  pattern: string;
}

/** Orders options so that exact matches come first and `other` last (ICU precedence). */
function orderedOptions(options: readonly MessageOption[]): MessageOption[] {
  const rank = (key: string) => (key.startsWith('=') ? 0 : key === 'other' ? 2 : 1);
  return [...options].sort((a, b) => rank(a.key) - rank(b.key));
}

/** Selector conditions for one option of a plural or select node. */
function optionConditions(ctx: Context, node: PluralNode | SelectNode, key: string): Array<[string, string]> {
  if (node.type === 'select') {
    return [[ctx.selector(ctx.input(node.name)), key === 'other' ? '*' : key]];
  }
  ctx.input(node.name);
  const hasExact = node.options.some((option) => option.key.startsWith('='));
  const hasCategory = node.options.some((option) => !option.key.startsWith('=') && option.key !== 'other');
  const conditions: Array<[string, string]> = [];
  if (hasExact) {
    // `number` with Latin digits: small integers format identically in all 13 locales ("0", "1").
    const exact = ctx.local(
      `${node.name}__exact`,
      `local ${node.name}__exact = ${node.name}: number maximumFractionDigits=20`,
    );
    conditions.push([ctx.selector(exact), key.startsWith('=') ? key.slice(1) : '*']);
  }
  if (hasCategory) {
    const categorySelector = node.ordinal
      ? ctx.local(`${node.name}__ordinal`, `local ${node.name}__ordinal = ${node.name}: plural type=ordinal`)
      : ctx.local(`${node.name}__plural`, `local ${node.name}__plural = ${node.name}: plural`);
    conditions.push([ctx.selector(categorySelector), key.startsWith('=') || key === 'other' ? '*' : key]);
  }
  return conditions;
}

function expand(ctx: Context, nodes: readonly IcuNode[], variants: Variant[]): Variant[] {
  let current = variants;
  for (const node of nodes) {
    switch (node.type) {
      case 'text':
        for (const variant of current) variant.pattern += escapePatternText(node.value);
        break;
      case 'argument': {
        const reference = node.format ? ctx.formatted(node.name, node.format) : ctx.input(node.name);
        for (const variant of current) variant.pattern += `{${reference}}`;
        break;
      }
      case 'pound': {
        const reference = ctx.numberLocal(node.name);
        for (const variant of current) variant.pattern += `{${reference}}`;
        break;
      }
      case 'plural':
      case 'select': {
        const next: Variant[] = [];
        for (const variant of current) {
          for (const option of orderedOptions(node.options)) {
            const conditions = new Map(variant.conditions);
            for (const [selector, value] of optionConditions(ctx, node, option.key)) {
              if (conditions.has(selector)) {
                throw new Error(
                  `Argument "${node.name}" is used by two selectors in the same branch; merge them into one ${node.type}`,
                );
              }
              conditions.set(selector, value);
            }
            next.push(...expand(ctx, option.value, [{ conditions, pattern: variant.pattern }]));
            if (next.length > MAX_VARIANTS) {
              throw new Error(`Message expands to more than ${MAX_VARIANTS} variants; split it into smaller messages`);
            }
          }
        }
        current = next;
        break;
      }
    }
  }
  return current;
}

function hasSelectors(nodes: readonly IcuNode[]): boolean {
  return nodes.some((node) => node.type === 'plural' || node.type === 'select');
}

/** Converts one parsed ICU message to its inlang message-format value. */
export function toInlangMessage(nodes: readonly IcuNode[]): InlangMessage {
  const ctx = new Context();
  const variants = expand(ctx, nodes, [{ conditions: new Map(), pattern: '' }]);
  if (!hasSelectors(nodes)) {
    const [only] = variants;
    if (!only) throw new Error('unreachable: a message always has one variant');
    // Formatted arguments need local declarations, which only the complex form can carry; without
    // selectors it is a single variant with an empty match key.
    if (ctx.locals.size === 0) return only.pattern;
    return [{ declarations: ctx.declarations(), selectors: [], match: { '': only.pattern } }];
  }
  const match: Record<string, string> = {};
  for (const variant of variants) {
    const key = ctx.selectors.map((selector) => `${selector}=${variant.conditions.get(selector) ?? '*'}`).join(', ');
    // A later variant with identical conditions can never be reached (ICU keeps the first one).
    if (!Object.hasOwn(match, key)) match[key] = variant.pattern;
  }
  return [{ declarations: ctx.declarations(), selectors: [...ctx.selectors], match }];
}
