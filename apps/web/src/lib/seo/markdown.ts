/**
 * Markdown alternates of public pages (PLAN §8.7 GEO): `/mods/:u/:s.md`, `/builds/:u/:s.md` and
 * `/profile/:h.md`, announced with `<link rel="alternate" type="text/markdown">` and never
 * negotiated through `Accept`. They carry the citable facts of the page: the «At a glance» facts
 * with dates, install steps, requirements, compatibility, the description, the latest changelog
 * and the generated FAQ, with absolute links. English (machine endpoints are not localized).
 */
import type { ModCardDTO, ModDetailDTO, UserPublicDTO } from '@sotf/contracts/catalog';
import { absoluteUrl, profilePath, versionsPath } from '@sotf/contracts/seo';
import { STEAM_APP_URL } from '../site.ts';
import { buildModFaq } from './faq.ts';
import { htmlToMarkdown } from './html-to-md.ts';

const numberFormat = new Intl.NumberFormat('en-US');
const ratingFormat = new Intl.NumberFormat('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export const LOADER_NAME = 'RedLoader';

/** `YYYY-MM-DD` of an ISO date (UTC). */
export function isoDay(value: string | Date): string {
  return (value instanceof Date ? value : new Date(value)).toISOString().slice(0, 10);
}

/** Binary sizes with Windows labels (1 KB = 1024 B), as players see them. */
export function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${unit === 0 ? value : value.toFixed(value >= 100 ? 0 : 1)} ${units[unit]}`;
}

/** Escapes a single-line value for Markdown (names, labels). */
export function mdInline(text: string): string {
  return text
    .replace(/([\\`*_[\]<>#|])/g, '\\$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function mdLink(label: string, url: string): string {
  return `[${mdInline(label)}](${url.replace(/\)/g, '%29').replace(/ /g, '%20')})`;
}

const MULTIPLAYER_LABEL: Readonly<Record<string, string>> = {
  client_side: 'client-side (only players who want it install it)',
  host_only: 'host only (other players join without it)',
  all_players: 'every player must install it',
  singleplayer_only: 'singleplayer only',
  unknown: 'not stated',
};
const DEDICATED_LABEL: Readonly<Record<string, string>> = {
  yes: 'supported',
  partial: 'partial',
  no: 'not supported',
  unknown: 'not stated',
};
const LICENSE_LABEL: Readonly<Record<string, string>> = {
  'all-rights-reserved': 'All rights reserved',
  'reupload-with-credit': 'Re-upload allowed with credit',
  mit: 'MIT',
  'gpl-3.0': 'GPL-3.0',
  'cc-by-4.0': 'CC BY 4.0',
  other: 'Other (see description)',
};
const COMPAT_LABEL: Readonly<Record<string, string>> = {
  works: 'works',
  broken: 'broken',
  mixed: 'mixed reports',
  untested: 'untested',
};

function compatLine(mod: ModDetailDTO): string {
  const current = mod.compatCurrent;
  const build = current.gameBuild ? `patch ${current.gameBuild.label}` : 'the current patch';
  const reports = current.works + current.partial + current.broken;
  return `${COMPAT_LABEL[current.status] ?? current.status} on ${build}${reports > 0 ? ` (${numberFormat.format(reports)} field reports: ${current.works} works, ${current.partial} partial, ${current.broken} broken)` : ''}`;
}

/** The Markdown document of a mod, library or build. `now` dates the figures («as of»). */
export function modMarkdown(mod: ModDetailDTO, siteUrl: string, now: Date): string {
  const url = absoluteUrl(mod.canonicalPath, siteUrl);
  const isBuild = mod.kind === 'build';
  const kindLabel = isBuild ? 'Build (BuildShare blueprint)' : mod.kind === 'library' ? 'Library' : 'Mod';
  const latest = mod.latestVersion;
  const lines: string[] = [];

  lines.push(`# ${mdInline(mod.name)}`, '');
  if (mod.shortDescription.trim()) lines.push(`> ${mdInline(mod.shortDescription)}`, '');
  lines.push(
    `${kindLabel} for ${mdLink('Sons of the Forest', STEAM_APP_URL)} by ${mdLink(mod.author.displayName, absoluteUrl(profilePath(mod.author.handle), siteUrl))}. Page: ${url}`,
    '',
  );
  if (mod.banners.includes('archived')) lines.push('**Archived:** the author no longer maintains it.', '');
  if (mod.successor) {
    lines.push(
      `**Superseded by:** ${mdLink(mod.successor.name, absoluteUrl(mod.successor.canonicalPath, siteUrl))}`,
      '',
    );
  }

  // At a glance (PLAN §8.7): every fact of the visible <dl>, with dates.
  lines.push('## At a glance', '');
  const facts: Array<[string, string]> = [];
  if (latest) facts.push(['Version', `${latest.version} (released ${isoDay(latest.publishedAt)})`]);
  if (mod.category) facts.push(['Category', mod.category.name]);
  if (mod.tags.length > 0) facts.push(['Tags', mod.tags.map((tag) => tag.name).join(', ')]);
  if (!isBuild) facts.push(['Game compatibility', compatLine(mod)]);
  if (latest?.gameVersionDeclared) facts.push(['Declared game version', latest.gameVersionDeclared]);
  facts.push([
    'Loader',
    latest?.loaderVersionDeclared ? `${LOADER_NAME} ${latest.loaderVersionDeclared}` : LOADER_NAME,
  ]);
  if (mod.platform) facts.push(['Platform', mod.platform]);
  if (!isBuild) facts.push(['Multiplayer', MULTIPLAYER_LABEL[mod.multiplayerRole ?? 'unknown'] ?? 'not stated']);
  if (!isBuild && mod.dedicatedServer)
    facts.push(['Dedicated server', DEDICATED_LABEL[mod.dedicatedServer] ?? mod.dedicatedServer]);
  const required = mod.dependencies.filter((dependency) => dependency.kind === 'required');
  facts.push([
    'Dependencies',
    required.length > 0
      ? required.map((dependency) => dependency.mod?.name ?? dependency.manifestId).join(', ')
      : 'none',
  ]);
  if (latest?.fileSize) facts.push(['File size', formatBytes(latest.fileSize)]);
  facts.push(['Downloads', `${numberFormat.format(mod.downloads)} (as of ${isoDay(now)})`]);
  if (mod.reviewsSummary.showStars && mod.reviewsSummary.average !== null) {
    facts.push([
      'Rating',
      `${ratingFormat.format(mod.reviewsSummary.average)}/5 from ${numberFormat.format(mod.reviewsSummary.count)} reviews`,
    ]);
  }
  facts.push(['Followers', numberFormat.format(mod.followers)]);
  if (mod.license) facts.push(['License', LICENSE_LABEL[mod.license] ?? mod.license]);
  if (mod.sourceUrl) facts.push(['Source code', mod.sourceUrl]);
  if (mod.publishedAt) facts.push(['First published', isoDay(mod.publishedAt)]);
  facts.push(['Last release', isoDay(mod.lastReleasedAt)]);
  for (const [label, value] of facts) lines.push(`- **${label}:** ${value}`);
  lines.push('');

  // Install.
  lines.push('## Install', '');
  if (isBuild) {
    lines.push(
      `1. Install ${LOADER_NAME} and the BuildShare mod (RedManager can install both).`,
      '2. Download the blueprint from the link below.',
      '3. Import it from the BuildShare menu in game.',
    );
  } else {
    lines.push(
      `1. Install ${LOADER_NAME}, the Sons of the Forest mod loader (RedManager can do it for you).`,
      ...(required.length > 0 ? ['2. Install the required dependencies listed below.'] : []),
      `${required.length > 0 ? 3 : 2}. Download the mod and put it in the \`_RedLoader/Mods\` folder inside the game directory.`,
      `${required.length > 0 ? 4 : 3}. Launch the game and press F1 to confirm it loaded.`,
    );
  }
  if (latest) lines.push('', `Download ${latest.version}: ${absoluteUrl(latest.downloadPath, siteUrl)}`);
  lines.push(`Full guide: ${absoluteUrl('/install', siteUrl)}`, '');

  // Requirements.
  if (mod.dependencies.length > 0) {
    lines.push('## Requirements', '');
    for (const dependency of mod.dependencies) {
      const name = dependency.mod
        ? mdLink(dependency.mod.name, absoluteUrl(dependency.mod.canonicalPath, siteUrl))
        : mdInline(dependency.manifestId);
      const range = dependency.versionRange ? ` ${mdInline(dependency.versionRange)}` : '';
      const state = dependency.state === 'ok' ? '' : ` (${dependency.state})`;
      lines.push(`- ${name}${range}: ${dependency.kind}${state}`);
    }
    lines.push('');
  }

  // Compatibility.
  if (!isBuild) {
    lines.push('## Compatibility', '', `${compatLine(mod)}.`);
    if (mod.possiblyOutdated) lines.push('', 'The latest release predates a breaking game patch: it may be outdated.');
    lines.push(`Details and field reports: ${url}#compatibility`, '');
  }

  // Description.
  const description = htmlToMarkdown(mod.descriptionHtml, siteUrl);
  if (description) lines.push('## Description', '', description, '');

  // Changelog of the latest release.
  if (latest) {
    const changelog = htmlToMarkdown(latest.changelogHtml, siteUrl);
    if (changelog) {
      lines.push(`## Changelog ${latest.version} (${isoDay(latest.publishedAt)})`, '', changelog, '');
    }
    lines.push(`All versions: ${absoluteUrl(versionsPath(mod.kind, mod.userHandle, mod.slug), siteUrl)}`, '');
  }

  // FAQ generated from the facts.
  const faq = buildModFaq(mod, 'en');
  if (faq.length > 0) {
    lines.push('## FAQ', '');
    for (const entry of faq) lines.push(`### ${mdInline(entry.question)}`, '', entry.answer, '');
  }

  if (mod.supportLinks.length > 0) {
    lines.push('## Links', '');
    for (const link of mod.supportLinks) lines.push(`- ${mdLink(link.label ?? link.kind, link.url)}`);
    lines.push('');
  }
  lines.push('---', '', `Source: ${url} · SOTF Mods, the home of Sons of the Forest modding.`, '');
  return lines.join('\n');
}

function cardLine(card: ModCardDTO, siteUrl: string): string {
  const facts = [
    card.latestVersion ? `v${card.latestVersion}` : null,
    `${numberFormat.format(card.downloads)} downloads`,
    card.ratingAvg !== null && card.ratingCount >= 3 ? `${ratingFormat.format(card.ratingAvg)}/5` : null,
    `updated ${isoDay(card.lastReleasedAt)}`,
  ].filter(Boolean);
  const description = card.shortDescription.trim() ? `: ${mdInline(card.shortDescription)}` : '';
  return `- ${mdLink(card.name, absoluteUrl(card.canonicalPath, siteUrl))}${description} (${facts.join(', ')})`;
}

/** The Markdown document of a public profile. */
export function profileMarkdown(
  user: UserPublicDTO,
  items: { mods: readonly ModCardDTO[]; builds: readonly ModCardDTO[] },
  siteUrl: string,
  now: Date,
): string {
  const url = absoluteUrl(user.canonicalPath, siteUrl);
  const stats = user.stats;
  const lines: string[] = [`# ${mdInline(user.displayName)} (@${mdInline(user.handle)})`, ''];
  const bio = user.bioHtml ? htmlToMarkdown(user.bioHtml, siteUrl) : '';
  if (bio)
    lines.push(
      bio
        .split('\n')
        .map((line) => `> ${line}`)
        .join('\n'),
      '',
    );
  lines.push(
    `${user.verifiedCreator ? 'Verified Sons of the Forest mod creator' : 'Sons of the Forest modding community member'} on SOTF Mods. Profile: ${url}`,
    '',
    '## Stats',
    '',
    `- **Mods and libraries:** ${numberFormat.format(stats.modsCount)}`,
    `- **Builds:** ${numberFormat.format(stats.buildsCount)}`,
    `- **Total downloads:** ${numberFormat.format(stats.downloadsTotal)} (as of ${isoDay(now)})`,
    `- **Followers:** ${numberFormat.format(stats.followersCount)}`,
    ...(stats.ratingAvg !== null && stats.reviewsCount > 0
      ? [`- **Average rating of their mods:** ${ratingFormat.format(stats.ratingAvg)}/5`]
      : []),
    `- **Member since:** ${isoDay(user.createdAt)}`,
    '',
  );
  if (items.mods.length > 0) {
    lines.push('## Mods', '', ...items.mods.map((card) => cardLine(card, siteUrl)), '');
  }
  if (items.builds.length > 0) {
    lines.push('## Builds', '', ...items.builds.map((card) => cardLine(card, siteUrl)), '');
  }
  if (user.links.length > 0) {
    lines.push('## Links', '', ...user.links.map((link) => `- ${mdLink(link.label ?? link.kind, link.url)}`), '');
  }
  lines.push('---', '', `Source: ${url} · SOTF Mods, the home of Sons of the Forest modding.`, '');
  return lines.join('\n');
}
