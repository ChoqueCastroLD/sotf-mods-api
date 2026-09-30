/**
 * Referrer and device classification of the analytics beacon (PLAN §7.5 "Analíticas por mod":
 * Google, Discord, YouTube, GitHub, AI assistants, internal or direct).
 *
 * Only a normalised **domain** is stored (never the full referrer URL): search terms, paths and
 * query strings of other sites never reach the database.
 */

/** Stored when there is no referrer (typed URL, bookmark, app without referrer). */
export const DIRECT_REFERRER = 'direct';
/** Stored for navigation inside the site. */
export const INTERNAL_REFERRER = 'internal';

/** Known sources folded into one canonical domain (order matters: the first match wins). */
const KNOWN_SOURCES: ReadonlyArray<{ test: (host: string) => boolean; domain: string }> = [
  // AI assistants first: gemini.google.com must not become google.com.
  { test: (h) => h === 'chatgpt.com' || h.endsWith('.chatgpt.com') || h === 'chat.openai.com', domain: 'chatgpt.com' },
  { test: (h) => h === 'perplexity.ai' || h.endsWith('.perplexity.ai'), domain: 'perplexity.ai' },
  { test: (h) => h === 'copilot.microsoft.com' || h === 'copilot.cloud.microsoft', domain: 'copilot.microsoft.com' },
  { test: (h) => h === 'gemini.google.com' || h === 'bard.google.com', domain: 'gemini.google.com' },
  { test: (h) => h === 'claude.ai' || h.endsWith('.claude.ai'), domain: 'claude.ai' },
  // Search engines, communities and video.
  {
    test: (h) =>
      /^(?:[\w-]+\.)*google\.[a-z]{2,3}(?:\.[a-z]{2})?$/.test(h) || h === 'com.google.android.googlequicksearchbox',
    domain: 'google.com',
  },
  { test: (h) => h === 'bing.com' || h.endsWith('.bing.com'), domain: 'bing.com' },
  { test: (h) => h === 'duckduckgo.com' || h.endsWith('.duckduckgo.com'), domain: 'duckduckgo.com' },
  { test: (h) => /^(?:[\w-]+\.)*yandex\.[a-z]{2,3}$/.test(h), domain: 'yandex.com' },
  {
    test: (h) =>
      h === 'discord.com' ||
      h.endsWith('.discord.com') ||
      h === 'discordapp.com' ||
      h.endsWith('.discordapp.com') ||
      h === 'discord.gg',
    domain: 'discord.com',
  },
  {
    test: (h) => h === 'youtube.com' || h.endsWith('.youtube.com') || h === 'youtu.be',
    domain: 'youtube.com',
  },
  { test: (h) => h === 'github.com' || h.endsWith('.github.com') || h.endsWith('.github.io'), domain: 'github.com' },
  { test: (h) => h === 'reddit.com' || h.endsWith('.reddit.com') || h === 'redd.it', domain: 'reddit.com' },
  {
    test: (h) => h === 'steamcommunity.com' || h.endsWith('.steamcommunity.com') || h === 'store.steampowered.com',
    domain: 'steamcommunity.com',
  },
  { test: (h) => h === 'twitter.com' || h === 'x.com' || h === 't.co', domain: 'x.com' },
  { test: (h) => h === 'nexusmods.com' || h.endsWith('.nexusmods.com'), domain: 'nexusmods.com' },
];

/** AI assistant domains (the Studio highlights them). */
export const AI_REFERRERS: readonly string[] = [
  'chatgpt.com',
  'perplexity.ai',
  'copilot.microsoft.com',
  'gemini.google.com',
  'claude.ai',
];

function hostOf(value: string): string | null {
  try {
    const url = new URL(value);
    if (url.protocol === 'android-app:') return url.hostname.toLowerCase() || null;
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
    return url.hostname.toLowerCase().replace(/\.$/, '') || null;
  } catch {
    return null;
  }
}

/**
 * Normalised referrer domain: `direct`, `internal`, a canonical known source, or the host without
 * `www.`/`m.` (≤ 100 chars). `siteHosts` are the hosts of the site itself (`sotf-mods.com`, …).
 */
export function referrerDomain(referrer: string | null | undefined, siteHosts: readonly string[]): string {
  const raw = (referrer ?? '').trim();
  if (raw === '') return DIRECT_REFERRER;
  const host = hostOf(raw);
  if (!host) return DIRECT_REFERRER;
  for (const site of siteHosts) {
    if (host === site || host.endsWith(`.${site}`)) return INTERNAL_REFERRER;
  }
  const bare = host.replace(/^(?:www\d?|m|mobile|amp)\./, '');
  for (const known of KNOWN_SOURCES) if (known.test(bare)) return known.domain;
  return bare.slice(0, 100);
}

/** Hosts of the site derived from its public URL (the apex is also accepted for `www.`). */
export function siteHostsOf(publicSiteUrl: string): string[] {
  const host = hostOf(publicSiteUrl);
  if (!host) return [];
  const bare = host.replace(/^www\./, '');
  return [...new Set([host, bare])];
}

export type DeviceClass = 'mobile' | 'tablet' | 'desktop';

/** Coarse device class from the User-Agent (no fingerprinting: three buckets only). */
export function deviceOf(userAgent: string | null | undefined): DeviceClass {
  const ua = userAgent ?? '';
  if (/iPad|Tablet|PlayBook|Silk|Kindle/i.test(ua)) return 'tablet';
  if (/Android/i.test(ua) && !/Mobile/i.test(ua)) return 'tablet';
  if (/Mobi|iPhone|iPod|Android.*Mobile|Windows Phone|Opera Mini|IEMobile/i.test(ua)) return 'mobile';
  return 'desktop';
}
