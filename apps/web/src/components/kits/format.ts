/**
 * Labels and small derivations of the public kit pages (WP-71). Every text comes from the `kits`
 * namespace (or `common`), numbers, sizes and dates from `Intl` in the request locale.
 */
import { absoluteUrl, downloadPath } from '@sotf/contracts/seo';
import { formatBytes, formatDate, type Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { href } from '../../lib/i18n.ts';
import type { KitDTO, KitItem } from './data.ts';

/** Download route of an item: the pinned version, or the latest one («always the latest»). */
export function itemDownloadPath(item: KitItem): string {
  return downloadPath(item.mod.userHandle, item.mod.slug, item.pinnedVersion?.version ?? 'latest');
}

/** The version a visitor gets for an item (pinned, or the mod's latest), or null. */
export function itemVersion(item: KitItem): string | null {
  return item.pinnedVersion?.version ?? item.mod.latestVersion;
}

/** Items that can be downloaded (a published version exists). */
export function downloadableItems(kit: KitDTO): KitItem[] {
  return kit.items.filter((item) => itemVersion(item) !== null && item.mod.status !== 'removed');
}

/** «Everyone needs 4 · Host only 2 · …» parts (zero counts omitted). */
export function multiplayerParts(kit: KitDTO): string[] {
  const mp = kit.multiplayer;
  const parts: string[] = [];
  if (mp.allPlayers > 0) parts.push(m.kits_mp_all_players({ count: mp.allPlayers }));
  if (mp.hostOnly > 0) parts.push(m.kits_mp_host_only({ count: mp.hostOnly }));
  if (mp.clientSide > 0) parts.push(m.kits_mp_client_side({ count: mp.clientSide }));
  if (mp.singleplayerOnly > 0) parts.push(m.kits_mp_solo_only({ count: mp.singleplayerOnly }));
  if (mp.unknown > 0) parts.push(m.kits_mp_unknown({ count: mp.unknown }));
  return parts;
}

export interface CompatLine {
  tone: 'works' | 'untested' | 'broken' | 'conflicts';
  text: string;
}

/** «✔ 11/12 work on 1.0.4 · ⚠ 1 unverified · ✖ 0 conflicts» as separate, icon-paired parts. */
export function compatLines(kit: KitDTO, currentBuild: string | null): CompatLine[] {
  const c = kit.compat;
  const total = kit.items.length;
  const lines: CompatLine[] = [
    {
      tone: 'works',
      text: currentBuild
        ? m.kits_compat_works_on({ works: c.works, total, build: currentBuild })
        : m.kits_compat_works({ works: c.works, total }),
    },
  ];
  if (c.untested > 0) lines.push({ tone: 'untested', text: m.kits_compat_untested({ count: c.untested }) });
  if (c.broken > 0) lines.push({ tone: 'broken', text: m.kits_compat_broken({ count: c.broken }) });
  lines.push({
    tone: 'conflicts',
    text: c.conflicts > 0 ? m.kits_compat_conflicts({ count: c.conflicts }) : m.kits_compat_no_conflicts(),
  });
  return lines;
}

export function totalSizeLabel(kit: KitDTO, locale: Locale): string | null {
  return kit.totalBytes === null ? null : formatBytes(locale, kit.totalBytes);
}

export function dateLabel(value: string, locale: Locale): string {
  return formatDate(locale, value, 'medium');
}

/** Absolute, localised canonical URL of a kit. */
export function kitUrl(kit: Pick<KitDTO, 'canonicalPath'>, locale: Locale, siteUrl: string): string {
  return absoluteUrl(href(kit.canonicalPath, locale), siteUrl);
}

/** `login?next=<path>`: `nextPath` is the locale-less path (+ query) to come back to. */
export function loginHref(locale: Locale, nextPath: string): string {
  return `${href('/login', locale)}?next=${encodeURIComponent(href(nextPath, locale))}`;
}

/** Placeholder passed to a message whose argument is markup (a link); see {@link splitSlot}. */
export const SLOT = '\u0000';

/**
 * Splits a message rendered with {@link SLOT} as the argument into the text before and after it,
 * so each language keeps its own word order around the link («Curated by X», «X さんのキット»).
 */
export function splitSlot(text: string): [string, string] {
  const at = text.indexOf(SLOT);
  return at < 0 ? [text, ''] : [text.slice(0, at), text.slice(at + SLOT.length)];
}
