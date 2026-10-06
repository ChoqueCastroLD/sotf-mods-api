import { describe, expect, it } from 'vitest';
import { discordJobsForEvent } from './announce.ts';
import { buildDiscordMessage, type DiscordAnnouncement, escapeDiscord, truncate } from './payload.ts';

const base: DiscordAnnouncement = {
  event: 'version.published',
  mod: {
    name: "Axel's Mod Menu",
    kind: 'mod',
    url: "https://sotf-mods.com/mods/imaxel/axel's-mod-menu",
    shortDescription: 'In-game menu with 40+ cheats and tools.',
    color: '#39FF14',
    imageUrl: 'https://r2.sotf-mods.com/mods/20/cover.png',
    categoryName: 'Quality of Life',
  },
  author: { name: 'ImAxel', url: 'https://sotf-mods.com/profile/imaxel', iconUrl: null },
  version: {
    version: '1.3.9',
    channel: 'release',
    changelog: 'Fixed the teleport menu on 1.0.4 and added a @everyone safe search.',
    url: "https://sotf-mods.com/mods/imaxel/axel's-mod-menu/versions/1.3.9",
  },
  at: '2026-09-30T12:00:00.000Z',
};

describe('Discord payloads', () => {
  it('new version (snapshot)', () => {
    expect(buildDiscordMessage(base)).toMatchSnapshot();
  });

  it('new mod, Mod of the Week and milestone (snapshot)', () => {
    const { version: _v, ...rest } = base;
    expect(
      buildDiscordMessage({ ...rest, event: 'mod.published', mod: { ...base.mod, color: null } }),
    ).toMatchSnapshot();
    expect(
      buildDiscordMessage({
        ...rest,
        event: 'award.mod_of_week',
        award: { kind: 'mod_of_week', periodStart: '2026-09-28' },
      }),
    ).toMatchSnapshot();
    expect(
      buildDiscordMessage({ ...rest, event: 'milestone.10k', threshold: 100_000, author: null }),
    ).toMatchSnapshot();
  });

  it('never pings and escapes Markdown', () => {
    const message = buildDiscordMessage({ ...base, mod: { ...base.mod, name: '@everyone **pwn**' } });
    expect(message.allowed_mentions).toEqual({ parse: [] });
    expect(message.content).not.toContain('@everyone');
    expect(message.content).toContain('\\*\\*pwn\\*\\*');
    expect(escapeDiscord('a_b')).toBe('a\\_b');
    expect(truncate('x'.repeat(10), 5)).toBe('xxxx…');
  });

  it('maps domain events to announcements (NSFW never, awards and milestones never)', () => {
    const envelope = {
      id: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
      occurredAt: '2026-09-30T12:00:00.000Z',
      actorId: 12,
    };
    expect(
      discordJobsForEvent({
        ...envelope,
        type: 'mod.published',
        payload: { modId: 20, authorId: 12, kind: 'mod', categorySlug: null, nsfw: true },
      }),
    ).toEqual([]);
    for (const event of [
      {
        type: 'milestone.reached' as const,
        payload: { modId: 20, authorId: 12, threshold: 100_000, reachedAt: '2026-09-30T00:00:00.000Z' },
      },
      {
        type: 'award.created' as const,
        payload: { awardId: 3, kind: 'mod_of_week' as const, modId: 20, authorId: 12, periodStart: '2026-09-28' },
      },
    ]) {
      expect(discordJobsForEvent({ ...envelope, ...event })).toEqual([]);
    }
  });
});
