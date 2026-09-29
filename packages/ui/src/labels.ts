/**
 * UI strings of the primitives (close, pagination, theme names, …). Components never hard-code
 * text: they ask a `UiTranslate` function for a message of the `ui` namespace
 * (`packages/ui/messages/<locale>.json`, 13 locales, English is the source).
 *
 * Resolution order inside a component:
 *   1. `<UiTranslateProvider value={t}>` (React context: the console, islands);
 *   2. `configureUiTranslate(t)` (set once at app start-up; the function itself must be
 *      locale-aware per request, e.g. Paraglide messages that read the request locale from
 *      AsyncLocalStorage during SSR);
 *   3. English (`messages/en.json`), so a component is never label-less.
 *
 * With Paraglide (WP-13): `configureUiTranslate((key, params) => m[key](params ?? {}))`.
 */
import { createContext, createElement, type ReactNode, useContext } from 'react';
import en from '../messages/en.json' with { type: 'json' };

type Catalog = typeof en;

/** Message keys of the `ui` namespace. */
export type UiMessageKey = Exclude<keyof Catalog, '$schema'>;

export type UiMessageParams = Readonly<Record<string, string | number>>;

export type UiTranslate = (key: UiMessageKey, params?: UiMessageParams) => string;

/** Every key of the namespace (source order). */
export const UI_MESSAGE_KEYS = Object.keys(en).filter((key) => key !== '$schema') as UiMessageKey[];

/** Replaces `{name}` placeholders; unknown placeholders are left untouched. */
export function interpolate(template: string, params?: UiMessageParams): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) => {
    const value = params[name];
    return value === undefined ? match : String(value);
  });
}

/** Builds a translator from a flat message catalogue (any locale's `messages/<locale>.json`). */
export function createUiTranslate(messages: Readonly<Partial<Record<UiMessageKey, string>>>): UiTranslate {
  return (key, params) => interpolate(messages[key] ?? en[key], params);
}

/** English source translator (the last-resort fallback). */
export const englishUiTranslate: UiTranslate = createUiTranslate(en);

let configured: UiTranslate | null = null;

/** Sets the application-wide translator (see the module comment). Pass `null` to reset. */
export function configureUiTranslate(translate: UiTranslate | null): void {
  configured = translate;
}

const UiTranslateContext = createContext<UiTranslate | null>(null);

export interface UiTranslateProviderProps {
  value: UiTranslate;
  children?: ReactNode;
}

export function UiTranslateProvider({ value, children }: UiTranslateProviderProps) {
  return createElement(UiTranslateContext.Provider, { value }, children);
}

/** The translator in scope (context → configured → English). */
export function useUiTranslate(): UiTranslate {
  return useContext(UiTranslateContext) ?? configured ?? englishUiTranslate;
}
