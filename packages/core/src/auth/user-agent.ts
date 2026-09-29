/**
 * Human label of a session's device ("Firefox on Windows") for the sessions page (T0-13). Only the
 * label and a truncated User-Agent are stored; never the IP in clear.
 */

const BROWSERS: ReadonlyArray<[RegExp, string]> = [
  [/\bEdg(?:e|A|iOS)?\//, 'Edge'],
  [/\bOPR\/|\bOpera\b/, 'Opera'],
  [/\bSamsungBrowser\//, 'Samsung Internet'],
  [/\bVivaldi\//, 'Vivaldi'],
  [/\bYaBrowser\//, 'Yandex Browser'],
  [/\bFirefox\/|\bFxiOS\//, 'Firefox'],
  [/\bCriOS\/|\bChrome\/|\bChromium\//, 'Chrome'],
  [/\bVersion\/[\d.]+.*\bSafari\//, 'Safari'],
  [/\bRedManager\b/i, 'RedManager'],
  [/\bcurl\//, 'curl'],
];

const SYSTEMS: ReadonlyArray<[RegExp, string]> = [
  [/\bWindows NT\b/, 'Windows'],
  [/\b(?:iPhone|iPad|iPod)\b/, 'iOS'],
  [/\bAndroid\b/, 'Android'],
  [/\bCrOS\b/, 'ChromeOS'],
  [/\bMac OS X\b|\bMacintosh\b/, 'macOS'],
  [/\bLinux\b/, 'Linux'],
];

function first(table: ReadonlyArray<[RegExp, string]>, ua: string): string | null {
  for (const [pattern, name] of table) if (pattern.test(ua)) return name;
  return null;
}

/** `Browser on OS`, `Browser`, `OS` or null (unknown / empty UA). */
export function deviceLabel(userAgent: string | null | undefined): string | null {
  const ua = (userAgent ?? '').trim();
  if (!ua) return null;
  const browser = first(BROWSERS, ua);
  const system = first(SYSTEMS, ua);
  if (browser && system) return `${browser} on ${system}`;
  return browser ?? system;
}

/** User-Agent as stored with a session (bounded). */
export function storedUserAgent(userAgent: string | null | undefined): string | null {
  const ua = (userAgent ?? '').trim();
  return ua ? ua.slice(0, 512) : null;
}
