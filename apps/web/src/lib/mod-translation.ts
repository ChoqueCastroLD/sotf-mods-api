/**
 * The visitor's language version of one mod (name, short description, description), fetched once
 * per request and shared by the header, the description and the SEO helpers of the page. Fail-soft:
 * `null` (original text) when there is no translation, the language is the same, or the API is slow.
 */
import type { Locale } from '@sotf/contracts/common';
import type { ModTranslationDTO } from '@sotf/contracts/translations';
import { optional, serverApi } from './api.ts';

export type ModTranslation = NonNullable<ModTranslationDTO['translation']>;

const pending = new WeakMap<object, Promise<ModTranslation | null>>();

/** Budget of the lookup: the description is large, so a bit more than the usual optional call. */
const TIMEOUT_MS = 1500;

export function loadModTranslation(mod: { id: number }, locale: Locale): Promise<ModTranslation | null> {
  if (locale === 'en') return Promise.resolve(null);
  let promise = pending.get(mod);
  if (!promise) {
    promise = optional(
      (signal) => serverApi().translations.forMod({ params: { id: mod.id }, query: { locale } }, { signal }),
      TIMEOUT_MS,
    ).then((answer) => answer?.translation ?? null);
    pending.set(mod, promise);
  }
  return promise;
}

/** «Spanish», «español»… the language name in the page's own language. */
export function languageName(code: string | null | undefined, locale: Locale): string {
  const base = (code ?? 'en').split('-')[0] ?? 'en';
  try {
    return new Intl.DisplayNames([locale], { type: 'language' }).of(base) ?? base;
  } catch {
    return base;
  }
}
