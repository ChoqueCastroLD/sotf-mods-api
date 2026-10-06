/**
 * Discord webhook messages (PLAN §7.1 T0-31): embeds for a new mod, a new version (changelog
 * excerpt, image and link), the Mod of the Week and download milestones ≥ 10 k.
 *
 * Pure functions (snapshot-tested). The community Discord is English-only, so the texts live here
 * rather than in the i18n catalog. User text is escaped for Discord Markdown and `allowed_mentions`
 * is empty, so a mod called "@everyone" pings nobody.
 */

import { palette } from '@sotf/brand/colors';
import type { DISCORD_EVENTS } from '@sotf/contracts/admin';
import type { ModKind } from '@sotf/contracts/common';

export type DiscordEvent = (typeof DISCORD_EVENTS)[number];

export interface DiscordAnnouncement {
  event: DiscordEvent;
  mod: {
    name: string;
    kind: ModKind;
    /** Absolute URL of the mod page. */
    url: string;
    shortDescription: string;
    /** `#RRGGBB` (manifest LogColor), else the brand flare. */
    color: string | null;
    /** Absolute URL of the cover image. */
    imageUrl: string | null;
    categoryName: string | null;
  };
  author: { name: string; url: string; iconUrl: string | null } | null;
  version?: { version: string; channel: 'release' | 'beta'; changelog: string; url: string };
  award?: { kind: string; periodStart: string };
  threshold?: number;
  /** ISO timestamp shown by Discord under the embed. */
  at: string;
}

export interface DiscordEmbed {
  title: string;
  url: string;
  description?: string;
  color: number;
  timestamp: string;
  author?: { name: string; url: string; icon_url?: string };
  image?: { url: string };
  fields?: Array<{ name: string; value: string; inline: boolean }>;
  footer: { text: string };
}

export interface DiscordMessage {
  username: string;
  content: string;
  embeds: [DiscordEmbed];
  allowed_mentions: { parse: [] };
}

/** The brand red (`palette.flare[500]`, the logo red), the default embed colour. */
export const DISCORD_BRAND_COLOR = Number.parseInt(palette.flare[500].slice(1), 16);

const KIND_LABEL: Record<ModKind, string> = { mod: 'mod', library: 'library', build: 'build' };
const AWARD_LABEL: Record<string, string> = {
  mod_of_week: 'Mod of the Week',
  mod_of_month: 'Mod of the Month',
  build_of_month: 'Build of the Month',
  staff_pick: 'Staff Pick',
};

/** Escapes Discord Markdown and neutralises mentions in user-provided text. */
export function escapeDiscord(text: string): string {
  // Inline Markdown (bold, italics, strike, code, spoilers, masked links); names never start a line.
  return text.replace(/([\\*_~`|[\]()])/g, '\\$1').replace(/@/g, '@\u200b');
}

/** Plain text trimmed to `max` characters at a word boundary. */
export function truncate(text: string, max: number): string {
  const clean = text
    .replace(/\r\n?/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).trimEnd()}…`;
}

function colorOf(hex: string | null): number {
  return hex && /^#[0-9A-Fa-f]{6}$/.test(hex) ? Number.parseInt(hex.slice(1), 16) : DISCORD_BRAND_COLOR;
}

function compact(n: number): string {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 3 }).format(n);
}

export function buildDiscordMessage(a: DiscordAnnouncement): DiscordMessage {
  const name = escapeDiscord(a.mod.name);
  const by = a.author ? ` by ${escapeDiscord(a.author.name)}` : '';
  const embed: DiscordEmbed = {
    title: truncate(a.mod.name, 256),
    url: a.mod.url,
    color: colorOf(a.mod.color),
    timestamp: a.at,
    footer: { text: 'SOTF Mods' },
  };
  if (a.author) {
    embed.author = {
      name: truncate(a.author.name, 256),
      url: a.author.url,
      ...(a.author.iconUrl ? { icon_url: a.author.iconUrl } : {}),
    };
  }
  if (a.mod.imageUrl) embed.image = { url: a.mod.imageUrl };
  const fields: NonNullable<DiscordEmbed['fields']> = [];
  if (a.mod.categoryName) fields.push({ name: 'Category', value: truncate(a.mod.categoryName, 100), inline: true });
  let content: string;
  switch (a.event) {
    case 'mod.published':
      content = `New ${KIND_LABEL[a.mod.kind]} on SOTF Mods: **${name}**${by}`;
      if (a.mod.shortDescription) embed.description = truncate(a.mod.shortDescription, 350);
      break;
    case 'version.published': {
      const v = a.version;
      if (!v) throw new TypeError('version.published needs a version');
      content = `**${name}** ${escapeDiscord(v.version)} is out${v.channel === 'beta' ? ' (beta)' : ''}`;
      embed.title = truncate(`${a.mod.name} ${v.version}`, 256);
      embed.url = v.url;
      embed.description = truncate(v.changelog || a.mod.shortDescription, 350) || undefined;
      fields.unshift({ name: 'Version', value: truncate(v.version, 64), inline: true });
      if (v.channel === 'beta') fields.push({ name: 'Channel', value: 'Beta', inline: true });
      break;
    }
    case 'award.mod_of_week': {
      const label = AWARD_LABEL[a.award?.kind ?? 'mod_of_week'] ?? 'Mod of the Week';
      content = `${label}: **${name}**${by}`;
      if (a.mod.shortDescription) embed.description = truncate(a.mod.shortDescription, 350);
      if (a.award) fields.push({ name: 'Week of', value: a.award.periodStart, inline: true });
      break;
    }
    case 'milestone.10k': {
      const threshold = a.threshold ?? 10_000;
      content = `**${name}** just passed ${compact(threshold)} downloads`;
      fields.push({ name: 'Downloads', value: `${compact(threshold)}+`, inline: true });
      break;
    }
  }
  if (embed.description === undefined) delete embed.description;
  if (fields.length > 0) embed.fields = fields;
  return { username: 'SOTF Mods', content: truncate(content, 2000), embeds: [embed], allowed_mentions: { parse: [] } };
}
