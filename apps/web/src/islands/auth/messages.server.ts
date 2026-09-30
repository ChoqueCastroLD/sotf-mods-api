/**
 * Server side of the auth islands' text (see `i18n.tsx`): renders the keys an island needs with
 * the Paraglide messages of the **request locale** and returns a flat dictionary for its props.
 * Only imported by the `.astro` pages (never bundled for the browser).
 */
import type { Locale } from '@sotf/i18n';
import { toIntlLocale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { type AuthDictionary, variantKey } from './i18n.tsx';
import { type AuthIslandName, type AuthMessageKey, ISLAND_KEYS, MESSAGE_PARAMS } from './message-keys.ts';

type MessageFn = (inputs?: Record<string, unknown>, options?: { locale?: Locale }) => string;

/** Large, unambiguous number used to find where a formatted number lands in a template. */
const SENTINEL = 987_654_321;

function messageFn(key: string): MessageFn {
  const fn = (m as unknown as Record<string, MessageFn | undefined>)[key];
  if (!fn) throw new Error(`unknown message key ${key}`);
  return fn;
}

/** One template (placeholders kept as `{name}`) or its pre-rendered variants. */
export function renderMessage(key: AuthMessageKey, locale: Locale): Record<string, string> {
  const fn = messageFn(key);
  const spec = MESSAGE_PARAMS[key];
  const options = { locale };
  if (!spec) return { [key]: fn({}, options) };
  if (spec.variants) {
    const out: Record<string, string> = {};
    for (const value of spec.variants.values) {
      out[variantKey(key, value)] = fn({ [spec.variants.name]: value }, options);
    }
    return out;
  }
  const inputs: Record<string, unknown> = {};
  for (const name of spec.strings ?? []) inputs[name] = `{${name}}`;
  for (const name of spec.numbers ?? []) inputs[name] = SENTINEL;
  let text = fn(inputs, options);
  if (spec.numbers?.length) {
    const formatted = new Intl.NumberFormat(toIntlLocale(locale)).format(SENTINEL);
    for (const name of spec.numbers) text = text.replace(formatted, `{${name}}`);
  }
  return { [key]: text };
}

/** The dictionary of an island in `locale`. */
export function islandMessages(island: AuthIslandName, locale: Locale): AuthDictionary {
  const out: Record<string, string> = {};
  for (const key of new Set<AuthMessageKey>(ISLAND_KEYS[island])) Object.assign(out, renderMessage(key, locale));
  return out;
}
