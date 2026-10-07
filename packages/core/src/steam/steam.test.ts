/**
 * Steam game builds (recorded fixtures, no network): parsing of the SteamCMD info and the news feed,
 * the label rules, the seed plan, the announcement matching of a new build and the HTTP client's
 * retries.
 */
import { readFileSync } from 'node:fs';
import { describe, expect, it, vi } from 'vitest';
import { createSteamClient, SteamError } from './client.ts';
import {
  fallbackLabel,
  isFallbackLabel,
  labelCandidates,
  parseSteamInfo,
  parseSteamNews,
  planSeed,
  releaseOfNews,
  type SteamNewsItem,
  SteamParseError,
} from './parse.ts';
import { backoffMs } from './sync.ts';

const fixture = (name: string): unknown =>
  JSON.parse(readFileSync(new URL(`./fixtures/${name}`, import.meta.url), 'utf8'));

function item(title: string, date: string, extra: Partial<SteamNewsItem> = {}): SteamNewsItem {
  return {
    gid: `${title}@${date}`,
    title,
    date: new Date(date),
    feedName: 'steam_community_announcements',
    official: true,
    contents: '',
    ...extra,
  };
}

describe('parseSteamInfo', () => {
  it('reads the public branch of the recorded SteamCMD answer', () => {
    const branch = parseSteamInfo(fixture('steamcmd-info.json'));
    expect(branch.buildId).toBe('20228174');
    expect(branch.timeUpdated.toISOString()).toBe('2025-10-03T18:44:52.000Z');
  });

  it('rejects answers without a usable public branch', () => {
    expect(() => parseSteamInfo({ status: 'failure', data: {} })).toThrow(SteamParseError);
    expect(() => parseSteamInfo({ status: 'success', data: { '1326470': {} } })).toThrow(/no "public" branch/);
    expect(() =>
      parseSteamInfo({
        data: { '1326470': { depots: { branches: { public: { buildid: 'abc', timeupdated: '1759517092' } } } } },
      }),
    ).toThrow(/invalid build id/);
    expect(() =>
      parseSteamInfo({ data: { '1326470': { depots: { branches: { public: { buildid: '1', timeupdated: '0' } } } } } }),
    ).toThrow(/update time/);
    expect(() => parseSteamInfo('nope')).toThrow(SteamParseError);
  });
});

describe('releaseOfNews', () => {
  it.each([
    ['Hotfix', '2024-05-14', 'hotfix', 'Hotfix 2024-05-14'],
    ['Hotfix 2', '2023-02-28', 'hotfix', 'Hotfix 2'],
    ['Small Patch', '2024-03-13', 'patch', 'Patch 2024-03-13'],
    ['Patch 06 - Hard survival mode, Stone building', '2023-05-26', 'patch', 'Patch 6'],
    ['Patch 58.30 - Something', '2026-01-02', 'patch', 'Patch 58.30'],
    ['Patch 09- Placeable radio, new trap', '2023-08-17', 'patch', 'Patch 9'],
    ['Patch 15 -Weapon holders, New cannibal type', '2023-11-30', 'patch', 'Patch 15'],
    ['v1.0', '2024-02-22', 'version', 'Version 1.0'],
    ['Unity security update', '2025-10-03', 'update', 'Update 2025-10-03'],
  ])('%s -> %s', (title, day, kind, label) => {
    expect(releaseOfNews(item(title, `${day}T12:00:00Z`))).toMatchObject({ kind, label, releasedAt: day });
  });

  it('marks the delay posts of a patch as notices and skips what is not a build', () => {
    expect(releaseOfNews(item('Patch 12 update', '2023-09-28T10:00:00Z'))).toMatchObject({
      label: 'Patch 12',
      notice: true,
    });
    expect(releaseOfNews(item('Release Update', '2023-11-29T10:00:00Z'))).toBeNull();
    expect(releaseOfNews(item('Sons Of The Forest Multiplayer Trailer', '2023-02-20T10:00:00Z'))).toBeNull();
    expect(releaseOfNews(item('Patch 99', '2023-02-20T10:00:00Z', { official: false }))).toBeNull();
  });

  it('recognises an unnamed patch by its text', () => {
    const post = item('Rafts, Defensive Wall Blueprints, Fixes, Improvements and more', '2025-01-15T17:44:56Z', {
      contents: 'Hey Everyone, This patch adds 3 buildable rafts along with a mooring post.',
    });
    expect(releaseOfNews(post)).toMatchObject({ kind: 'patch', label: 'Patch 2025-01-15' });
  });
});

describe('planSeed with the recorded history', () => {
  const news = parseSteamNews(fixture('news-official.json'));
  const plan = planSeed(news);

  it('keeps one build per label, newest first, with unique labels', () => {
    expect(news).toHaveLength(73);
    expect(plan.length).toBeGreaterThan(40);
    expect(new Set(plan.map((p) => p.label)).size).toBe(plan.length);
    const days = plan.map((p) => p.releasedAt);
    expect([...days].sort().reverse()).toEqual(days);
    expect(plan.every((p) => p.label.length <= 40)).toBe(true);
  });

  it('imports patches, versions, hotfixes and updates, and leaves the announcements out', () => {
    const labels = plan.map((p) => p.label);
    expect(labels).toEqual(
      expect.arrayContaining(['Patch 1', 'Patch 15', 'Version 1.0', 'Hotfix 3', 'Update 2025-10-03']),
    );
    expect(labels).toContain('Patch 2025-01-15');
    expect(labels).toContain('Hotfix 2024-05-14');
    expect(labels.some((l) => /trailer|release update|early access/i.test(l))).toBe(false);
  });

  it('prefers the real patch post over its delay notice', () => {
    const patch12 = plan.find((p) => p.label === 'Patch 12');
    expect(patch12).toMatchObject({ releasedAt: '2023-09-29', notice: false });
    const patch6 = plan.find((p) => p.label === 'Patch 6');
    expect(patch6?.releasedAt).toBe('2023-05-26');
  });

  it('collapses hotfixes of one day into one build', () => {
    expect(plan.filter((p) => p.releasedAt === '2023-07-21' && p.kind === 'hotfix')).toHaveLength(1);
  });
});

describe('labelCandidates', () => {
  const mixed = parseSteamNews(fixture('news-mixed.json'));
  const branch = parseSteamInfo(fixture('steamcmd-info.json'));

  it('names the recorded build after the announcement posted two minutes later', () => {
    expect(labelCandidates(mixed, branch.timeUpdated).map((c) => c.label)).toEqual(['Update 2025-10-03']);
  });

  it('ignores press and SteamDB reposts and posts outside the window', () => {
    const later = new Date(branch.timeUpdated.getTime() + 20 * 86_400_000);
    expect(labelCandidates(mixed, later)).toEqual([]);
  });

  it('picks the closest announcement and skips delay notices', () => {
    const items = [
      item('Patch 12 update', '2023-09-28T10:00:00Z'),
      item('Hotfix', '2023-09-29T21:00:00Z'),
      item('Patch 12 - New cave', '2023-09-29T09:00:00Z'),
    ];
    const released = new Date('2023-09-29T09:30:00Z');
    expect(labelCandidates(items, released).map((c) => c.label)).toEqual(['Patch 12', 'Hotfix 2023-09-29']);
  });
});

describe('labels and back-off', () => {
  it('recognises its own fallback label', () => {
    expect(fallbackLabel('20228174')).toBe('Build 20228174');
    expect(isFallbackLabel('Build 20228174', '20228174')).toBe(true);
    expect(isFallbackLabel('Patch 12', '20228174')).toBe(false);
    expect(isFallbackLabel('Build 1', null)).toBe(false);
  });

  it('backs off 25 minutes, doubling, capped at 6 hours', () => {
    expect([0, 1, 2, 3, 4, 5, 9].map(backoffMs)).toEqual([
      0,
      25 * 60_000,
      50 * 60_000,
      100 * 60_000,
      200 * 60_000,
      360 * 60_000,
      360 * 60_000,
    ]);
  });
});

describe('createSteamClient', () => {
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

  it('calls the documented URLs and parses the answers', async () => {
    const urls: string[] = [];
    const fetchMock = vi.fn(async (input: string | URL | Request) => {
      urls.push(String(input));
      return String(input).includes('steamcmd')
        ? json(fixture('steamcmd-info.json'))
        : json(fixture('news-mixed.json'));
    });
    const client = createSteamClient({ fetch: fetchMock as unknown as typeof fetch });
    expect((await client.getBranch()).buildId).toBe('20228174');
    const news = await client.getNews({ count: 20 });
    expect(news.some((n) => n.official)).toBe(true);
    expect(urls[0]).toBe('https://api.steamcmd.net/v1/info/1326470');
    expect(urls[1]).toBe('https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1326470&count=20');
    await client.getNews({ count: 900, officialOnly: true });
    expect(urls[2]).toContain('count=500');
    expect(urls[2]).toContain('feeds=steam_community_announcements');
  });

  it('retries transient failures and then succeeds', async () => {
    const sleeps: number[] = [];
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response('busy', { status: 503 }))
      .mockRejectedValueOnce(new TypeError('fetch failed'))
      .mockResolvedValueOnce(json(fixture('steamcmd-info.json')));
    const client = createSteamClient({
      fetch: fetchMock as unknown as typeof fetch,
      sleep: async (ms) => void sleeps.push(ms),
    });
    expect((await client.getBranch()).buildId).toBe('20228174');
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(sleeps).toEqual([1000, 4000]);
  });

  it('gives up after the attempts and does not retry client errors', async () => {
    const always503 = vi.fn(async () => new Response('down', { status: 503 }));
    const slow = createSteamClient({ fetch: always503 as unknown as typeof fetch, sleep: async () => {} });
    await expect(slow.getBranch()).rejects.toMatchObject({ name: 'SteamError', retryable: true, status: 503 });
    expect(always503).toHaveBeenCalledTimes(3);

    const notFound = vi.fn(async () => new Response('no', { status: 404 }));
    const client = createSteamClient({ fetch: notFound as unknown as typeof fetch, sleep: async () => {} });
    await expect(client.getNews()).rejects.toBeInstanceOf(SteamError);
    expect(notFound).toHaveBeenCalledTimes(1);
  });

  it('treats an empty SteamCMD answer as a retryable failure', async () => {
    const empty = vi.fn(async () => json({ status: 'success', data: {} }));
    const client = createSteamClient({ fetch: empty as unknown as typeof fetch, sleep: async () => {} });
    await expect(client.getBranch()).rejects.toMatchObject({ name: 'SteamError' });
    expect(empty).toHaveBeenCalledTimes(1);
  });
});
