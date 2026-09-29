/**
 * The locale of a request, decided once by the server entry from the URL prefix (PLAN §4.1) and
 * carried on the rewritten request in an internal header. The entry always overwrites the header,
 * so a client can never choose it.
 */
import { DEFAULT_LOCALE, isLocale, type Locale } from '@sotf/i18n';

export const LOCALE_HEADER = 'x-sotf-locale';

/** Locale stamped by the server entry, or `undefined` when the request did not go through it. */
export function requestLocale(request: Request): Locale | undefined {
  const value = request.headers.get(LOCALE_HEADER);
  return isLocale(value) ? value : undefined;
}

/** Locale stamped by the server entry, defaulting to English. */
export function requestLocaleOrDefault(request: Request): Locale {
  return requestLocale(request) ?? DEFAULT_LOCALE;
}
