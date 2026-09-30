/**
 * Text of the auth islands. The page renders every string the island needs **in the request
 * locale** on the server (`messages.server.ts`) and passes that small dictionary as a prop, so
 * the browser never downloads the 13-locale Paraglide modules (they tripled the auth JS; PLAN §8.2
 * caps auth pages at 90 KB br).
 *
 * Templates keep `{name}` placeholders. Number placeholders are formatted with `Intl` in the page
 * language; plural messages are pre-rendered per value (`key#3`) because the forms only ever
 * need a handful of fixed counts.
 */
import { createContext, type ReactNode, useContext, useMemo } from 'react';
import type { AuthMessageKey } from './message-keys.ts';

export type AuthDictionary = Readonly<Partial<Record<string, string>>>;
export type TranslateParams = Readonly<Record<string, string | number>>;
export type Translate = (key: AuthMessageKey, params?: TranslateParams) => string;

/** Key of a pre-rendered plural variant. */
export function variantKey(key: string, value: number): string {
  return `${key}#${value}`;
}

/** Builds the translator of a dictionary (`lang` = BCP-47 page language, for numbers). */
export function createTranslate(dictionary: AuthDictionary, lang: string): Translate {
  const numbers = new Intl.NumberFormat(lang);
  return (key, params) => {
    let template: string | undefined;
    if (params) {
      for (const value of Object.values(params)) {
        if (typeof value !== 'number') continue;
        template = dictionary[variantKey(key, value)];
        if (template !== undefined) break;
      }
    }
    template ??= dictionary[key];
    if (template === undefined) return key;
    if (!params) return template;
    return template.replace(/\{(\w+)\}/g, (match, name: string) => {
      const value = params[name];
      if (value === undefined) return match;
      return typeof value === 'number' ? numbers.format(value) : value;
    });
  };
}

interface AuthI18nValue {
  t: Translate;
  lang: string;
}

const AuthI18nContext = createContext<AuthI18nValue>({ t: (key) => key, lang: 'en' });

export function AuthI18nProvider({
  messages,
  lang,
  children,
}: {
  messages: AuthDictionary;
  lang: string;
  children: ReactNode;
}) {
  const value = useMemo(() => ({ t: createTranslate(messages, lang), lang }), [messages, lang]);
  return <AuthI18nContext.Provider value={value}>{children}</AuthI18nContext.Provider>;
}

/** The translator of the island. */
export function useT(): Translate {
  return useContext(AuthI18nContext).t;
}

/** BCP-47 language of the page (Turnstile, `Intl`). */
export function useLang(): string {
  return useContext(AuthI18nContext).lang;
}
