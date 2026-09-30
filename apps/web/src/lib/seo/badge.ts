/**
 * SVG badges of a mod (PLAN §7.13 T1-09): downloads, latest version, compatibility with the current
 * game build and rating. Flat two-tone shield rendered by hand (no fonts to load, no images); the
 * text is English by design (machine output, like the feeds) and always escaped.
 */
import type { CompatStatus } from '@sotf/contracts/common';

export const BADGE_KINDS = ['downloads', 'version', 'compat', 'rating'] as const;
export type BadgeKind = (typeof BADGE_KINDS)[number];

export function isBadgeKind(value: string): value is BadgeKind {
  return (BADGE_KINDS as readonly string[]).includes(value);
}

export interface BadgeParts {
  label: string;
  value: string;
  /** Hex colour of the value half. */
  color: string;
}

const COMPAT_COLORS: Record<CompatStatus, string> = {
  works: '#2f7d4f',
  mixed: '#a8740f',
  broken: '#b03a2e',
  untested: '#5a6660',
};

function compact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}k`;
  return String(n);
}

export interface BadgeSource {
  downloads: number;
  latestVersion: string | null;
  compatStatus: CompatStatus;
  gameBuildLabel: string | null;
  ratingAvg: number | null;
  ratingCount: number;
}

export function badgeParts(kind: BadgeKind, mod: BadgeSource): BadgeParts {
  switch (kind) {
    case 'downloads':
      return { label: 'downloads', value: compact(mod.downloads), color: '#2f7d4f' };
    case 'version':
      return { label: 'version', value: mod.latestVersion ? `v${mod.latestVersion}` : 'n/a', color: '#3a6ea5' };
    case 'rating':
      return {
        label: 'rating',
        value: mod.ratingAvg === null ? 'no reviews' : `${mod.ratingAvg.toFixed(1)}/5 (${mod.ratingCount})`,
        color: mod.ratingAvg === null ? '#5a6660' : '#a8740f',
      };
    default: {
      const build = mod.gameBuildLabel ? ` ${mod.gameBuildLabel}` : '';
      const text = { works: 'works', mixed: 'mixed', broken: 'broken', untested: 'untested' }[mod.compatStatus];
      return { label: `SOTF${build}`, value: text, color: COMPAT_COLORS[mod.compatStatus] };
    }
  }
}

function escapeXml(text: string): string {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

/** Approximate text width at 11 px Verdana-like (good enough for a shield). */
function width(text: string): number {
  return Math.round(text.length * 6.6 + 12);
}

export function renderBadge({ label, value, color }: BadgeParts): string {
  const lw = width(label);
  const vw = width(value);
  const total = lw + vw;
  const l = escapeXml(label);
  const v = escapeXml(value);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${total}" height="20" role="img" aria-label="${l}: ${v}">` +
    `<title>${l}: ${v}</title>` +
    `<clipPath id="r"><rect width="${total}" height="20" rx="3"/></clipPath>` +
    `<g clip-path="url(#r)"><rect width="${lw}" height="20" fill="#2a332e"/><rect x="${lw}" width="${vw}" height="20" fill="${color}"/></g>` +
    `<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11">` +
    `<text x="${lw / 2}" y="14">${l}</text><text x="${lw + vw / 2}" y="14">${v}</text></g></svg>`
  );
}
