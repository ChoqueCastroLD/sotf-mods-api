/**
 * Labels and small derivations shared by the mod page components (WP-62).
 */
import type { CompatStatus, MultiplayerRole, Platform } from '@sotf/contracts/common';
import { downloadPath, encodePathSegment } from '@sotf/contracts/seo';
import { type Locale, toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { ModDetailDTO, VersionDTO } from './data.ts';

export function platformLabel(platform: Platform): string {
  switch (platform) {
    case 'Client':
      return m.mod_platform_client();
    case 'Server':
      return m.mod_platform_server();
    default:
      return m.mod_platform_universal();
  }
}

export function multiplayerLabel(role: MultiplayerRole): string | null {
  switch (role) {
    case 'singleplayer_only':
      return m.common_multiplayer_solo_only();
    case 'client_side':
      return m.mod_multiplayer_client_side();
    case 'host_only':
      return m.common_multiplayer_host_only();
    case 'all_players':
      return m.common_multiplayer_everyone();
    default:
      return null;
  }
}

/** One sentence about the compatibility on the current build (header, mobile bar). */
export function compatSentence(mod: ModDetailDTO): string {
  const compat = mod.compatCurrent;
  const build = compat.gameBuild?.label ?? mod.latestVersion?.gameVersionDeclared ?? null;
  const status: CompatStatus = compat.status;
  if (status === 'works' && build) return m.common_compat_works({ count: compat.works, build });
  if (status === 'broken' && build) return m.common_compat_broken({ build });
  if (status === 'mixed' && build)
    return m.mod_compat_mixed({ build, works: compat.works, broken: compat.broken + compat.partial });
  return m.common_compat_unverified();
}

/** Download route of a dependency's latest version (always under `/mods`). */
export function latestDownloadPath(userHandle: string, slug: string): string {
  return downloadPath(userHandle, slug, 'latest');
}

/** Versions of the split-button menu: the latest of each channel first, then the newest others. */
export function otherVersions(versions: readonly VersionDTO[] | null, latestId: number | null, max = 6): VersionDTO[] {
  if (!versions) return [];
  return versions.filter((version) => version.id !== latestId && version.status === 'active').slice(0, max);
}

/** `login?next=<path>` (the path is locale-aware and includes the query). */
export function loginHrefFor(localizedLogin: string, localizedPath: string): string {
  return `${localizedLogin}?next=${encodeURIComponent(localizedPath)}`;
}

/** Locale-less paths of the mod sub-pages (the canonical path keeps legacy slugs verbatim). */
export function versionsPagePath(mod: Pick<ModDetailDTO, 'canonicalPath'>): string {
  return `${mod.canonicalPath}/versions`;
}

export function versionPagePath(mod: Pick<ModDetailDTO, 'canonicalPath'>, version: string): string {
  return `${mod.canonicalPath}/versions/${encodePathSegment(version)}`;
}

export function reviewsPagePath(mod: Pick<ModDetailDTO, 'canonicalPath'>): string {
  return `${mod.canonicalPath}/reviews`;
}

/**
 * `{n}` templates of a plural message for every CLDR category of the locale, so a client script
 * can re-render a count («25 followers», «25 подписчиков») without a message catalogue.
 */
export function pluralTemplates(locale: Locale, message: (count: number) => string): Record<string, string> {
  const rules = new Intl.PluralRules(toHtmlLang(locale));
  const templates: Record<string, string> = {};
  for (const category of rules.resolvedOptions().pluralCategories) {
    let sample = -1;
    for (let n = 0; n <= 200; n++) {
      if (rules.select(n) === category) {
        sample = n;
        break;
      }
    }
    if (sample < 0) continue;
    const text = message(sample);
    const formatted = new Intl.NumberFormat(toHtmlLang(locale)).format(sample);
    const at = text.indexOf(formatted);
    templates[category] = at >= 0 ? `${text.slice(0, at)}{n}${text.slice(at + formatted.length)}` : text;
  }
  return templates;
}
