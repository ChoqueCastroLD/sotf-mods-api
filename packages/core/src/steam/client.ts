/**
 * HTTP client of the two public Steam endpoints (see `parse.ts`). No API key. Transient failures
 * (network errors, timeouts, 429 and 5xx) are retried a few times with a short delay inside one
 * call; the job-level backoff (`sync.ts`) handles longer outages. `fetch` is injectable: tests and
 * the backfill use recorded fixtures, never the network.
 */
import {
  OFFICIAL_FEED,
  parseSteamInfo,
  parseSteamNews,
  SOTF_APP_ID,
  type SteamBranchInfo,
  type SteamNewsItem,
} from './parse.ts';

export const STEAMCMD_INFO_URL = 'https://api.steamcmd.net/v1/info';
export const STEAM_NEWS_URL = 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/';

/** A failed Steam request; `retryable` tells transient failures from permanent ones. */
export class SteamError extends Error {
  readonly retryable: boolean;
  readonly status: number | null;
  constructor(message: string, options: { retryable: boolean; status?: number | null; cause?: unknown }) {
    super(message, options.cause === undefined ? undefined : { cause: options.cause });
    this.name = 'SteamError';
    this.retryable = options.retryable;
    this.status = options.status ?? null;
  }
}

export interface SteamClient {
  /** Build id and update time of the public branch. */
  getBranch(): Promise<SteamBranchInfo>;
  /** Developer announcements, newest first (`count` up to 500). */
  getNews(options?: { count?: number; officialOnly?: boolean }): Promise<SteamNewsItem[]>;
}

export interface SteamClientOptions {
  appId?: number;
  fetch?: typeof fetch;
  /** Per-request timeout (default 15 s). */
  timeoutMs?: number;
  /** Delays between attempts of one call (default 1 s, 4 s: three attempts). */
  retryDelaysMs?: readonly number[];
  sleep?: (ms: number) => Promise<void>;
}

const MAX_BODY_BYTES = 4 * 1024 * 1024;

export function createSteamClient(options: SteamClientOptions = {}): SteamClient {
  const appId = options.appId ?? SOTF_APP_ID;
  const doFetch = options.fetch ?? fetch;
  const timeoutMs = options.timeoutMs ?? 15_000;
  const delays = options.retryDelaysMs ?? [1_000, 4_000];
  const sleep = options.sleep ?? ((ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms)));

  async function once(url: string): Promise<unknown> {
    let response: Response;
    try {
      response = await doFetch(url, {
        headers: { accept: 'application/json', 'user-agent': 'sotf-mods.com game-build-sync' },
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (error) {
      throw new SteamError(`request failed: ${error instanceof Error ? error.message : String(error)}`, {
        retryable: true,
        cause: error,
      });
    }
    if (!response.ok) {
      const transient = response.status === 429 || response.status >= 500;
      throw new SteamError(`HTTP ${response.status}`, { retryable: transient, status: response.status });
    }
    const text = await response.text();
    if (text.length > MAX_BODY_BYTES) throw new SteamError('response too large', { retryable: false });
    try {
      return JSON.parse(text) as unknown;
    } catch (error) {
      // An HTML error page from a proxy is transient; the endpoints themselves always send JSON.
      throw new SteamError('response is not JSON', { retryable: true, cause: error });
    }
  }

  async function getJson(url: string): Promise<unknown> {
    for (let attempt = 0; ; attempt += 1) {
      try {
        return await once(url);
      } catch (error) {
        const wait = delays[attempt];
        if (!(error instanceof SteamError) || !error.retryable || wait === undefined) throw error;
        await sleep(wait);
      }
    }
  }

  return {
    async getBranch() {
      const json = await getJson(`${STEAMCMD_INFO_URL}/${appId}`);
      try {
        return parseSteamInfo(json, appId);
      } catch (error) {
        // The mirror answers 200 with an empty or failed payload while it refreshes an app.
        throw new SteamError(error instanceof Error ? error.message : 'invalid steamcmd response', {
          retryable: true,
          cause: error,
        });
      }
    },
    async getNews({ count = 20, officialOnly = false } = {}) {
      const url = new URL(STEAM_NEWS_URL);
      url.searchParams.set('appid', String(appId));
      url.searchParams.set('count', String(Math.min(Math.max(count, 1), 500)));
      if (officialOnly) url.searchParams.set('feeds', OFFICIAL_FEED);
      const json = await getJson(url.toString());
      try {
        return parseSteamNews(json);
      } catch (error) {
        throw new SteamError(error instanceof Error ? error.message : 'invalid steam news response', {
          retryable: false,
          cause: error,
        });
      }
    },
  };
}
