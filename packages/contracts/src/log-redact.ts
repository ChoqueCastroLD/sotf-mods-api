/**
 * Privacy pass of "Share logs": removes obvious personal data and secrets from a pasted log before
 * it is stored. Pure and dependency free (the API runs it before saving; the web runs the same
 * function for the live "what will be hidden" preview).
 *
 * What it hides (every replacement is a visible placeholder, never silent):
 * - `paths`: the account name in user folders (`C:\Users\<name>\`, `/home/<name>/`, `/Users/<name>/`).
 * - `steamIds`: SteamID64 (`7656119…`), legacy `STEAM_0:1:123` and `[U:1:123]` forms.
 * - `ips`: IPv4 and IPv6 addresses (loopback, unspecified and version-like numbers stay).
 * - `emails`: e-mail addresses.
 * - `secrets`: tokens, API keys, passwords (by key name), bearer/basic credentials, JWTs, webhook
 *   URLs, credentials inside URLs and well known key prefixes.
 *
 * The scan is linear per line and lines are capped at {@link LOG_MAX_LINE_CHARS} characters, so a
 * hostile 5 MB single line cannot make it slow.
 */

export const LOG_REDACTION_KINDS = ['paths', 'steamIds', 'ips', 'emails', 'secrets'] as const;
export type LogRedactionKind = (typeof LOG_REDACTION_KINDS)[number];

export type LogRedactionCounts = Record<LogRedactionKind, number> & { total: number };

export interface LogRedactionResult {
  text: string;
  counts: LogRedactionCounts;
}

/** Lines longer than this are cut (minified JSON dumps, base64 blobs). */
export const LOG_MAX_LINE_CHARS = 8000;

export function emptyRedactionCounts(): LogRedactionCounts {
  return { paths: 0, steamIds: 0, ips: 0, emails: 0, secrets: 0, total: 0 };
}

const PLACEHOLDER = {
  user: '<user>',
  steam: '<steamid>',
  ip: '<ip>',
  email: '<email>',
  secret: '<redacted>',
} as const;

const SAFE_PROFILE_NAMES = new Set(['public', 'default', 'all users', 'default user', '<user>', 'shared']);

/** `C:\Users\Name\`, `C:/Users/Name/`, `Z:\home\name\`, `/home/name/`, `/Users/name/`. */
const USER_PATH = /((?:[A-Za-z]:)?[\\/]{1,4}(?:Users|home)[\\/]{1,4})([^\\/\r\n<>:*?"|]{1,64})(?=[\\/])/g;
/** A user folder written with a doubled backslash inside escaped strings (`C:\\Users\\Name\\`). */
const USER_PATH_ESCAPED = /([A-Za-z]:\\\\Users\\\\)([^\\/\r\n<>:*?"|]+)(?=\\\\)/g;

/**
 * The same folders when nothing follows the account name (`USERPROFILE=C:\\Users\\bob`, `cwd: /home/bob`,
 * `"C:\\Users\\Bob Smith"`): the name ends at a quote, a pipe or the end of the line (spaces allowed), or,
 * unquoted, at the first space or separator. Never starts inside a URL path or a longer word.
 */
const USER_PATH_END_QUOTED =
  /(?<![\w.%~-])((?:[A-Za-z]:)?[\\/]{1,4}(?:Users|home)[\\/]{1,4})([^\\/\s<>:*?"'|,;()[\]][^\\/\r\n<>:*?"'|,;()[\]]{0,63}?)(?=["'|]|\s*$)/g;
const USER_PATH_END_BARE =
  /(?<![\w.%~-])((?:[A-Za-z]:)?[\\/]{1,4}(?:Users|home)[\\/]{1,4})([^\\/\s<>:*?"'|,;()[\]]{1,64})/g;
const USER_PATH_ESCAPED_END = /(?<![\w.%~-])([A-Za-z]:\\\\Users\\\\)([^\\/\s<>:*?"'|,;()[\]]{1,64})/g;

const STEAM_ID64 = /(?<![\w.])7656119\d{10}(?![\w])/g;
const STEAM_ID_LEGACY = /\bSTEAM_[0-5]:[01]:\d{3,12}\b/g;
const STEAM_ID3 = /\[U:[0-5]:\d{3,12}(?::\d+)?\]/g;

const IPV4 = /(?<![\w.:-])((?:25[0-5]|2[0-4]\d|1?\d?\d)(?:\.(?:25[0-5]|2[0-4]\d|1?\d?\d)){3})(?![\w.]*\d)(?!\.\d)/g;
/** IPv4 as .NET and Node print it for dual-stack sockets: `::ffff:84.12.201.7`. */
const IPV4_MAPPED =
  /(?<![\w:])::ffff:((?:25[0-5]|2[0-4]\d|1?\d?\d)(?:\.(?:25[0-5]|2[0-4]\d|1?\d?\d)){3})(?![\w.]*\d)/gi;
const IPV6_FULL = /(?<![\w:])(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}(?![\w:])(?!\.\d)/g;
const IPV6_COMPRESSED =
  /(?<![\w:])(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})?::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})?(?![\w:])(?!\.\d)/g;

const EMAIL = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9-]{1,63}(?:\.[A-Za-z0-9-]{1,63}){1,6}/g;

const SECRET_KEY_NAME =
  '[\\w.-]{0,40}(?:password|passwd|passphrase|pwd|secret|token|api[_-]?key|access[_-]?key|private[_-]?key|authorization|credential|session[_-]?id|cookie)[\\w.-]{0,20}';
/** `password=abc`, `"token": "abc"`, `Authorization: Bearer abc` (the value is replaced). */
const SECRET_ASSIGNMENT = new RegExp(
  `(?<![\\w])(${SECRET_KEY_NAME})(\\s*["']?\\s*[:=]\\s*["']?)(?:(Bearer|Basic|Token)\\s+)?([^\\s"'<>,;&]{3,})`,
  'gi',
);
const BEARER = /\b(Bearer|Basic)\s+[A-Za-z0-9._~+/=-]{12,}/g;
const JWT = /\beyJ[\w-]{8,}\.[\w-]{8,}\.[\w-]{8,}\b/g;
const URL_CREDENTIALS = /(\b[a-z][a-z0-9+.-]{1,12}:\/\/)([^\s/@:]{1,64}):([^\s/@]{1,128})@/gi;
const DISCORD_WEBHOOK = /https?:\/\/(?:[\w-]+\.)?discord(?:app)?\.com\/api\/(?:v\d+\/)?webhooks\/\d+\/[\w-]+/gi;
const KNOWN_PREFIX =
  /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|sk-[A-Za-z0-9_-]{20,}|xox[abprs]-[A-Za-z0-9-]{10,}|AKIA[0-9A-Z]{16}|AIza[0-9A-Za-z_-]{35}|sotf_pat_[A-Za-z0-9_-]{16,}|[MNO][A-Za-z0-9_-]{23,27}\.[A-Za-z0-9_-]{6}\.[A-Za-z0-9_-]{27,40})\b/g;
const IDENTITY_FIELD =
  /\b((?:user|computer|machine|pc|host|login)[ _-]?name|steam[ _-]?(?:user|name|persona))(\s*[:=]\s*)([^\r\n]{1,64})/gi;

const SKIP_SECRET_VALUES = new Set([
  'true',
  'false',
  'null',
  'none',
  'nil',
  'undefined',
  'empty',
  'unknown',
  'yes',
  'no',
]);

function isPlaceholder(value: string): boolean {
  return value.startsWith('<') && value.endsWith('>');
}

function redactLine(line: string, counts: LogRedactionCounts): string {
  let out = line;
  let hit = false;
  const bump = (kind: LogRedactionKind): void => {
    counts[kind] += 1;
    counts.total += 1;
    hit = true;
  };

  // Secrets first: their values may look like IPs, emails or paths.
  out = out.replace(DISCORD_WEBHOOK, () => {
    bump('secrets');
    return `https://discord.com/api/webhooks/${PLACEHOLDER.secret}`;
  });
  out = out.replace(JWT, () => {
    bump('secrets');
    return PLACEHOLDER.secret;
  });
  out = out.replace(KNOWN_PREFIX, () => {
    bump('secrets');
    return PLACEHOLDER.secret;
  });
  out = out.replace(URL_CREDENTIALS, (_m, scheme: string) => {
    bump('secrets');
    return `${scheme}${PLACEHOLDER.secret}@`;
  });
  out = out.replace(SECRET_ASSIGNMENT, (whole, key: string, sep: string, scheme: string | undefined, value: string) => {
    if (isPlaceholder(value) || SKIP_SECRET_VALUES.has(value.toLowerCase()) || /^\d{1,3}$/.test(value)) return whole;
    // `Authorization: Bearer <token>` swallowed the scheme as the value: keep the scheme word.
    bump('secrets');
    return `${key}${sep}${scheme ? `${scheme} ` : ''}${PLACEHOLDER.secret}`;
  });
  out = out.replace(BEARER, (_m, scheme: string) => {
    bump('secrets');
    return `${scheme} ${PLACEHOLDER.secret}`;
  });
  out = out.replace(IDENTITY_FIELD, (whole, key: string, sep: string, value: string) => {
    const trimmed = value.trim();
    if (isPlaceholder(trimmed) || trimmed === '') return whole;
    bump('secrets');
    return `${key}${sep}${PLACEHOLDER.user}`;
  });

  out = out.replace(EMAIL, () => {
    bump('emails');
    return PLACEHOLDER.email;
  });

  const pathFix = (whole: string, prefix: string, name: string): string => {
    if (SAFE_PROFILE_NAMES.has(name.trim().toLowerCase())) return whole;
    bump('paths');
    return `${prefix}${PLACEHOLDER.user}${/\s*$/.exec(name)?.[0] ?? ''}`;
  };
  out = out.replace(USER_PATH_ESCAPED, pathFix);
  out = out.replace(USER_PATH, pathFix);
  out = out.replace(USER_PATH_ESCAPED_END, pathFix);
  out = out.replace(USER_PATH_END_QUOTED, pathFix);
  out = out.replace(USER_PATH_END_BARE, pathFix);

  out = out.replace(STEAM_ID64, () => {
    bump('steamIds');
    return PLACEHOLDER.steam;
  });
  out = out.replace(STEAM_ID_LEGACY, () => {
    bump('steamIds');
    return PLACEHOLDER.steam;
  });
  out = out.replace(STEAM_ID3, () => {
    bump('steamIds');
    return PLACEHOLDER.steam;
  });

  out = out.replace(IPV4_MAPPED, (whole: string, ip: string) => {
    if (isHarmlessIpv4(ip, '', '')) return whole;
    bump('ips');
    return PLACEHOLDER.ip;
  });
  out = out.replace(IPV4, (whole: string, ip: string, offset: number, source: string) => {
    if (
      isHarmlessIpv4(
        ip,
        source.slice(Math.max(0, offset - 12), offset),
        source.slice(offset + whole.length, offset + whole.length + 10),
      )
    )
      return whole;
    bump('ips');
    return PLACEHOLDER.ip;
  });
  if (out.includes(':')) {
    const ipv6 = (whole: string): string => {
      // `12:34:56` (a clock) and `::` alone are not addresses: an address has a hex digit run or `::` with content.
      if (whole === '::' || whole === '::1' || !/[0-9A-Fa-f]/.test(whole)) return whole;
      if (!whole.includes('::') && whole.split(':').length !== 8) return whole;
      bump('ips');
      return PLACEHOLDER.ip;
    };
    out = out.replace(IPV6_FULL, ipv6);
    out = out.replace(IPV6_COMPRESSED, (whole: string) => (/\d/.test(whole) && whole.length > 3 ? ipv6(whole) : whole));
  }
  return hit ? out : line;
}

/** Loopback, unspecified, broadcast and version-like dotted quads are not personal data. */
function isHarmlessIpv4(ip: string, before: string, after: string): boolean {
  if (ip === '0.0.0.0' || ip === '255.255.255.255' || ip.startsWith('127.')) return true;
  if (/(?:version|ver|v|assembly|build|release)[ =:]*$/i.test(before)) return true;
  if (/^, (?:Culture|PublicKeyToken)/.test(after)) return true;
  const [a = 0, b = 0, c = 0, d = 0] = ip.split('.').map(Number);
  // 0.x.y.z and "1.0.0.0"-style assembly numbers.
  if (a === 0) return true;
  // Every part below 10 (`1.1.4.2`): a game or mod version, never a household address.
  if (a <= 9 && b <= 9 && c <= 9 && d <= 9) return true;
  return false;
}

/** Redacts `text` line by line and reports how many values of each kind were hidden. */
export function redactLog(text: string): LogRedactionResult {
  const counts = emptyRedactionCounts();
  const normalized = text.replace(/\r\n?/g, '\n');
  const lines = normalized.split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    let line = lines[i] ?? '';
    if (line.length > LOG_MAX_LINE_CHARS) {
      line = `${line.slice(0, LOG_MAX_LINE_CHARS)} … [line cut at ${LOG_MAX_LINE_CHARS} characters]`;
    }
    lines[i] = redactLine(line, counts);
  }
  return { text: lines.join('\n'), counts };
}

/** One-line human summary for tests and logs (`3 paths, 1 IP`). */
export function describeRedactions(counts: LogRedactionCounts): string {
  return LOG_REDACTION_KINDS.filter((kind) => counts[kind] > 0)
    .map((kind) => `${counts[kind]} ${kind}`)
    .join(', ');
}
