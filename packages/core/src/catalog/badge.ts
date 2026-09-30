/**
 * Shields-style SVG badges of a mod (T1-09): downloads, latest version, rating, followers and
 * "works with the current game build". Pure rendering plus one snapshot read; text is XML-escaped
 * and widths come from a per-character estimate so no font is needed.
 */
import type { BADGE_KINDS } from '@sotf/contracts/stats';
import type { CatalogConfig } from './media.ts';
import { assertReachable } from './detail.ts';
import { getSnapshot } from './snapshot.ts';
import type { Ctx } from '../kernel/context.ts';

type BadgeKind = (typeof BADGE_KINDS)[number];

const COLORS = { green: '#2e7d4f', amber: '#b7791f', red: '#b42318', grey: '#5b6472', blue: '#2b6cb0' } as const;

function escapeXml(text: string): string {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

/** ~6.6 px per glyph at 11 px Verdana-like fonts, plus padding. */
function textWidth(text: string): number {
  return Math.round(text.length * 6.6) + 12;
}

export function renderBadge(label: string, value: string, color: string): string {
  const lw = textWidth(label);
  const vw = textWidth(value);
  const width = lw + vw;
  const l = escapeXml(label);
  const v = escapeXml(value);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="20" role="img" aria-label="${l}: ${v}">` +
    `<title>${l}: ${v}</title>` +
    `<clipPath id="r"><rect width="${width}" height="20" rx="3"/></clipPath>` +
    `<g clip-path="url(#r)"><rect width="${lw}" height="20" fill="#3b4252"/><rect x="${lw}" width="${vw}" height="20" fill="${color}"/></g>` +
    `<g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,sans-serif" font-size="11">` +
    `<text x="${lw / 2}" y="14">${l}</text><text x="${lw + vw / 2}" y="14">${v}</text></g></svg>`
  );
}

export function compactNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1).replace(/\.0$/, '')}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1).replace(/\.0$/, '')}k`;
  return String(n);
}

export async function getModBadge(ctx: Ctx, config: CatalogConfig, id: number, kind: BadgeKind): Promise<string> {
  const snapshot = await getSnapshot(ctx, config);
  const entry = assertReachable(snapshot, snapshot.byId.get(id));
  switch (kind) {
    case 'downloads':
      return renderBadge('downloads', compactNumber(entry.downloads), COLORS.blue);
    case 'version':
      return renderBadge('version', entry.latestVersion ?? 'n/a', COLORS.grey);
    case 'followers':
      return renderBadge('followers', compactNumber(entry.followers), COLORS.blue);
    case 'rating':
      return renderBadge(
        'rating',
        entry.ratingAvg === null ? 'no ratings' : `${entry.ratingAvg.toFixed(1)}/5 (${entry.ratingCount})`,
        entry.ratingAvg === null ? COLORS.grey : entry.ratingAvg >= 4 ? COLORS.green : COLORS.amber,
      );
    case 'compat': {
      const map = {
        works: ['works', COLORS.green],
        mixed: ['mixed reports', COLORS.amber],
        broken: ['broken', COLORS.red],
        untested: ['untested', COLORS.grey],
      } as const;
      const [text, color] = map[entry.compatStatus];
      return renderBadge('current patch', text, color);
    }
  }
}
