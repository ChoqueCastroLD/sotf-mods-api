/**
 * Pure parsing of the two public Steam endpoints the game-build sync reads (no key needed):
 *
 * - `https://api.steamcmd.net/v1/info/1326470` (SteamCMD mirror of the app info): the `public`
 *   branch carries the current `buildid` and `timeupdated` (unix seconds).
 * - `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1326470`: the announcements of
 *   the developer. Titles tell patches, hotfixes and versions apart; they become the build labels.
 *
 * Labels are plain and unique (`GameBuild.label` is unique): `Patch 15`, `Version 1.0`, `Hotfix 2`,
 * `Hotfix 2024-05-14`, `Patch 2024-03-13`, `Update 2025-10-03` or, when nothing matches, `Build 20228174`.
 */
import { z } from 'zod';

/** Sons of the Forest on Steam. */
export const SOTF_APP_ID = 1326470;
/** Feed of the developer's own announcements (the others are press and SteamDB reposts). */
export const OFFICIAL_FEED = 'steam_community_announcements';
/** `GameBuild.label` is at most 40 characters (contract). */
export const LABEL_MAX = 40;

export interface SteamBranchInfo {
  /** Steam build id of the public branch (digits). */
  buildId: string;
  /** When the branch was last updated. */
  timeUpdated: Date;
}

export interface SteamNewsItem {
  gid: string;
  title: string;
  date: Date;
  feedName: string;
  /** Posted by the developer through the Steam community announcements. */
  official: boolean;
  contents: string;
}

export class SteamParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SteamParseError';
  }
}

const InfoSchema = z.object({
  status: z.string().optional(),
  data: z.record(
    z.string(),
    z
      .object({
        depots: z
          .object({
            branches: z
              .record(z.string(), z.object({ buildid: z.coerce.string(), timeupdated: z.coerce.number().optional() }))
              .optional(),
          })
          .optional(),
      })
      .passthrough(),
  ),
});

/** The public branch of the app info (`api.steamcmd.net/v1/info/<appid>`). */
export function parseSteamInfo(json: unknown, appId: number = SOTF_APP_ID, branch = 'public'): SteamBranchInfo {
  const parsed = InfoSchema.safeParse(json);
  if (!parsed.success) throw new SteamParseError('steamcmd response has an unexpected shape');
  if (parsed.data.status && parsed.data.status !== 'success') {
    throw new SteamParseError(`steamcmd answered status "${parsed.data.status}"`);
  }
  const app = parsed.data.data[String(appId)];
  const entry = app?.depots?.branches?.[branch];
  if (!entry) throw new SteamParseError(`steamcmd has no "${branch}" branch for app ${appId}`);
  if (!/^\d{1,12}$/.test(entry.buildid)) throw new SteamParseError(`invalid build id "${entry.buildid}"`);
  const seconds = entry.timeupdated;
  if (seconds === undefined || !Number.isFinite(seconds) || seconds <= 0) {
    throw new SteamParseError('the public branch has no update time');
  }
  return { buildId: entry.buildid, timeUpdated: new Date(seconds * 1000) };
}

const NewsSchema = z.object({
  appnews: z.object({
    newsitems: z.array(
      z.object({
        gid: z.coerce.string(),
        title: z.string().default(''),
        date: z.number(),
        feedname: z.string().default(''),
        feed_type: z.number().optional(),
        contents: z.string().default(''),
      }),
    ),
  }),
});

/** News of the app (`ISteamNews/GetNewsForApp/v2`), newest first as Steam sends them. */
export function parseSteamNews(json: unknown): SteamNewsItem[] {
  const parsed = NewsSchema.safeParse(json);
  if (!parsed.success) throw new SteamParseError('steam news response has an unexpected shape');
  return parsed.data.appnews.newsitems.map((item) => ({
    gid: item.gid,
    title: item.title.trim(),
    date: new Date(item.date * 1000),
    feedName: item.feedname,
    official: item.feedname === OFFICIAL_FEED || item.feed_type === 1,
    contents: item.contents,
  }));
}

export type ReleaseKind = 'version' | 'patch' | 'hotfix' | 'update';

export interface ReleaseCandidate {
  kind: ReleaseKind;
  label: string;
  /** UTC day of the announcement (`YYYY-MM-DD`). */
  releasedAt: string;
  gid: string;
  title: string;
  /** "Patch 12 update": says the patch is delayed, the build is not out yet. */
  notice: boolean;
}

/** UTC calendar day as `YYYY-MM-DD`. */
export function isoDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** `06` → `6`, `58.05` → `58.05`: only the first segment loses its leading zeros. */
function normalizeNumber(raw: string): string {
  const [first = '', ...rest] = raw.split('.');
  return [String(Number(first)), ...rest].join('.');
}

const HOTFIX = /\bhot\s?fix(?:es)?\b(?:\s*#?(\d{1,3})\b)?/i;
const VERSION = /^v(?:ersion)?\s*(\d+(?:\.\d+)+)\b/i;
const PATCH_NUMBERED = /\bpatch\s*#?(\d+(?:\.\d+)*)/i;
const PATCH_NOTICE = /^patch\s*#?\d+(?:\.\d+)*\s+update\s*$/i;
const PATCH_PLAIN = /^(?:(?:small|tiny|minor|big|major)\s+)?patch\b/i;
const UPDATE = /\bupdate\b/i;
/** The date announcement before 1.0 ("Release Update") is not a build. */
const NOT_A_BUILD = /\brelease update\b/i;
/** Developer posts without a keyword in the title, such as "Rafts, ... and more": "This patch adds ...". */
const PATCH_IN_TEXT = /\b(?:this|here(?:'|’)s a|today(?:'|’)s)\s+(?:small\s+|big\s+)?patch\b/i;

/** What a news item announces, or null when it is not a build (trailers, sales, press, reposts). */
export function releaseOfNews(item: SteamNewsItem): ReleaseCandidate | null {
  if (!item.official) return null;
  const title = item.title.replace(/\s+/g, ' ').trim();
  const day = isoDay(item.date);
  const make = (kind: ReleaseKind, label: string, notice = false): ReleaseCandidate => ({
    kind,
    label: label.slice(0, LABEL_MAX),
    releasedAt: day,
    gid: item.gid,
    title,
    notice,
  });
  if (NOT_A_BUILD.test(title)) return null;
  const hotfix = HOTFIX.exec(title);
  if (hotfix) return make('hotfix', hotfix[1] ? `Hotfix ${Number(hotfix[1])}` : `Hotfix ${day}`);
  const version = VERSION.exec(title);
  if (version) return make('version', `Version ${normalizeNumber(version[1] as string)}`);
  const patch = PATCH_NUMBERED.exec(title);
  if (patch) return make('patch', `Patch ${normalizeNumber(patch[1] as string)}`, PATCH_NOTICE.test(title));
  if (PATCH_PLAIN.test(title)) return make('patch', `Patch ${day}`);
  if (UPDATE.test(title)) return make('update', `Update ${day}`);
  if (PATCH_IN_TEXT.test(item.contents.slice(0, 400))) return make('patch', `Patch ${day}`);
  return null;
}

/**
 * The builds to import from a news history: one per label (a delay notice yields to the real
 * announcement; among equals the earliest day wins), newest first.
 */
export function planSeed(items: readonly SteamNewsItem[]): ReleaseCandidate[] {
  const byLabel = new Map<string, ReleaseCandidate>();
  for (const item of items) {
    const candidate = releaseOfNews(item);
    if (!candidate) continue;
    const known = byLabel.get(candidate.label);
    if (!known) {
      byLabel.set(candidate.label, candidate);
      continue;
    }
    const better = known.notice !== candidate.notice ? known.notice : candidate.releasedAt < known.releasedAt;
    if (better) byLabel.set(candidate.label, candidate);
  }
  return [...byLabel.values()].sort(
    (a, b) => b.releasedAt.localeCompare(a.releasedAt) || a.label.localeCompare(b.label),
  );
}

/** Window around a branch update in which an announcement is taken as the one of that build. */
export const NEWS_WINDOW = { beforeMs: 3 * 86_400_000, afterMs: 86_400_000 } as const;

/**
 * Announcements that can name the build published at `timeUpdated`, closest first (the post
 * usually follows the build by minutes, sometimes by hours). Delay notices are left out.
 */
export function labelCandidates(items: readonly SteamNewsItem[], timeUpdated: Date): ReleaseCandidate[] {
  const at = timeUpdated.getTime();
  return items
    .map((item) => ({ item, candidate: releaseOfNews(item) }))
    .filter(
      (entry): entry is { item: SteamNewsItem; candidate: ReleaseCandidate } =>
        entry.candidate !== null &&
        !entry.candidate.notice &&
        entry.item.date.getTime() >= at - NEWS_WINDOW.beforeMs &&
        entry.item.date.getTime() <= at + NEWS_WINDOW.afterMs,
    )
    .sort((a, b) => Math.abs(a.item.date.getTime() - at) - Math.abs(b.item.date.getTime() - at))
    .map((entry) => entry.candidate);
}

/** Label of a build nobody announced. */
export function fallbackLabel(buildId: string): string {
  return `Build ${buildId}`;
}

/** True for the labels the sync made up (`Build 20228174`): a later announcement may rename them. */
export function isFallbackLabel(label: string, buildId: string | null): boolean {
  return buildId !== null && label === fallbackLabel(buildId);
}
