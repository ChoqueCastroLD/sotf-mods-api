/**
 * YouTube links → click-to-load facade (research/04 §4.13): the page shows a thumbnail link and a
 * client script swaps in the `youtube-nocookie.com` iframe only after a click. Without JavaScript
 * the facade is a plain link to the video, so nothing breaks.
 */

export interface YoutubeVideo {
  /** 11-character video id. */
  id: string;
  /** Start offset in seconds, if the link had one. */
  start: number | null;
  /** Canonical watch URL. */
  watchUrl: string;
  /** Thumbnail (allowed by the CSP `img-src https://i.ytimg.com`). */
  thumbnailUrl: string;
}

const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;
const HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'music.youtube.com',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
  'youtu.be',
]);
const PATH_PREFIXES = ['/embed/', '/shorts/', '/live/', '/v/'];

/** Width and height of the `hqdefault` thumbnail. */
export const YOUTUBE_THUMBNAIL_SIZE = { width: 480, height: 360 } as const;

function parseStart(value: string | undefined): number | null {
  if (!value) return null;
  if (/^\d{1,6}$/.test(value)) return Number(value) || null;
  const match = /^(?:(\d{1,3})h)?(?:(\d{1,4})m)?(?:(\d{1,6})s)?$/.exec(value);
  if (!match || match[0] === '') return null;
  const seconds = Number(match[1] ?? 0) * 3600 + Number(match[2] ?? 0) * 60 + Number(match[3] ?? 0);
  return seconds > 0 ? seconds : null;
}

function queryParams(query: string): Map<string, string> {
  const params = new Map<string, string>();
  for (const pair of query.split('&')) {
    const [key, value = ''] = pair.split('=', 2);
    if (key && !params.has(key)) params.set(key, value);
  }
  return params;
}

/** Recognises a YouTube video URL; returns `null` for anything else (playlists, channels…). */
export function youtubeFromUrl(url: string): YoutubeVideo | null {
  const match = /^https?:\/\/([^/?#:@]+)(?::\d+)?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/i.exec(url.trim());
  if (!match) return null;
  const host = (match[1] as string).toLowerCase();
  if (!HOSTS.has(host)) return null;
  const path = match[2] ?? '/';
  const params = queryParams(match[3] ?? '');
  let id: string | undefined;
  if (host === 'youtu.be') {
    id = path.slice(1).split('/')[0];
  } else if (path === '/watch') {
    id = params.get('v');
  } else {
    const prefix = PATH_PREFIXES.find((candidate) => path.startsWith(candidate));
    if (prefix) id = path.slice(prefix.length).split('/')[0];
  }
  if (!id || !VIDEO_ID.test(id)) return null;
  const fragment = queryParams(match[4] ?? '');
  const start = parseStart(params.get('t') ?? params.get('start') ?? fragment.get('t'));
  return {
    id,
    start,
    watchUrl: `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ''}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  };
}
