/**
 * Per-request locale on the server (Node): AsyncLocalStorage (PLAN §7.11).
 *
 *   import { withLocale } from '@sotf/i18n/server';
 *   // Astro middleware (WP-22), Fastify hook, pg-boss job…
 *   return withLocale(locals.locale, () => next());
 *
 * Inside the callback — including every `await` and callback it schedules — `getLocale()` and all
 * messages resolve to that locale; concurrent requests never see each other's locale.
 *
 * Importing this module (once, anywhere in the server process) also makes the Paraglide runtime
 * server-safe:
 * - `getLocale()` reads only the request store and falls back to English outside a request;
 * - `setLocale()` throws: a process-wide locale would leak between concurrent requests.
 */
import { AsyncLocalStorage } from 'node:async_hooks';
import {
  baseLocale,
  overwriteGetLocale,
  overwriteServerAsyncLocalStorage,
  overwriteSetLocale,
} from '../.generated/paraglide/runtime.js';
import { assertLocale, type Locale } from './locales.ts';
import './runtime.ts';

/** Shape Paraglide expects from its server store (`origin` and `messageCalls` are optional). */
interface LocaleStore {
  locale?: Locale;
  origin?: string;
  messageCalls?: Set<string>;
}

const storage = new AsyncLocalStorage<LocaleStore>();

overwriteServerAsyncLocalStorage(storage);
overwriteGetLocale(() => storage.getStore()?.locale ?? baseLocale);
overwriteSetLocale(() => {
  throw new Error('setLocale() is not available on the server; wrap the work in withLocale(locale, fn)');
});

/**
 * Runs `fn` with `locale` as the current locale and returns its result (sync or async).
 * Nested calls override the locale for their own scope only.
 */
export function withLocale<T>(locale: Locale, fn: () => T, options: { origin?: string } = {}): T {
  const store: LocaleStore = { locale: assertLocale(locale) };
  if (options.origin !== undefined) store.origin = options.origin;
  return storage.run(store, fn);
}

/** Locale of the current request, or `undefined` outside {@link withLocale}. */
export function requestLocale(): Locale | undefined {
  return storage.getStore()?.locale;
}
