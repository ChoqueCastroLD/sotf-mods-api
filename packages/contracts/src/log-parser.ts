/**
 * Log parser of "Share logs": turns the text of a RedLoader/BepInEx log, the game's `Player.log`
 * or a SOTF dedicated server log into structured lines (timestamp, level, source, message) and a
 * summary (game and loader versions, loaded mods, error and warning counts, top distinct errors).
 *
 * Pure and dependency free: the API runs it when a log is saved (the summary is stored) and the
 * viewer island runs it again in the browser to render and filter the lines.
 *
 * Recognised line shapes (a timestamp prefix `[12:34:56.789]` or `2026-09-30 12:34:56` is optional
 * on all of them):
 *   [Info   :RedLoader] Loading mods…          BepInEx / RedLoader:  [Level : Source] message
 *   [Error  : Unity Log] NullReferenceException …
 *   [ERROR] [ModName] message                  [LEVEL] [source] message
 *   ModName: message                           only when the prefix is a level word
 *   [ModName] message                          source only (level guessed from the message)
 *   Unity player logs                          no header: level guessed from the message
 * Lines without a header (stack frames, blank lines, wrapped text) continue the previous entry and
 * inherit its level.
 */

export const LOG_LEVELS = ['fatal', 'error', 'warning', 'info', 'debug'] as const;
export type LogLevel = (typeof LOG_LEVELS)[number];

export const LOG_KINDS = ['redloader', 'bepinex', 'melonloader', 'player', 'server', 'unknown'] as const;
export type LogKind = (typeof LOG_KINDS)[number];

export interface LogLine {
  /** 1-based line number in the stored text. */
  n: number;
  /** The whole line. */
  text: string;
  level: LogLevel;
  /** Timestamp as written (`12:34:56.789`), empty when the line has none. */
  time: string;
  /** Source/logger (`RedLoader`, `Unity Log`, a mod name), empty when unknown. */
  source: string;
  /** Message without timestamp, level and source. */
  body: string;
  /** True for a line that continues the previous entry (stack frame, wrapped text). */
  cont: boolean;
}

export interface LogModEntry {
  name: string;
  version: string | null;
  author: string | null;
  /** Line where the mod showed up. */
  line: number;
}

export interface LogTopError {
  message: string;
  count: number;
  /** First line number with this error. */
  line: number;
  level: 'fatal' | 'error';
}

export interface LogSummary {
  kind: LogKind;
  gameVersion: string | null;
  loaderName: string | null;
  loaderVersion: string | null;
  unityVersion: string | null;
  mods: LogModEntry[];
  counts: { lines: number; fatal: number; error: number; warning: number; info: number; debug: number };
  topErrors: LogTopError[];
  /** 1-based line of the first fatal/error entry, null when there is none. */
  firstErrorLine: number | null;
  /** First and last timestamp seen (as written). */
  firstTime: string | null;
  lastTime: string | null;
}

const LEVEL_WORDS: Record<string, LogLevel> = {
  fatal: 'fatal',
  critical: 'fatal',
  crit: 'fatal',
  error: 'error',
  err: 'error',
  exception: 'error',
  warning: 'warning',
  warn: 'warning',
  message: 'info',
  msg: 'info',
  info: 'info',
  information: 'info',
  log: 'info',
  notice: 'info',
  debug: 'debug',
  dbg: 'debug',
  trace: 'debug',
  verbose: 'debug',
};

// `[12:34:56.789]`, `12:34:56`, `[2026.09.30-12.34.56]`, `2026-09-30 12:34:56,789`, `2026-09-30T12:34:56Z`.
const TIME_PREFIX =
  /^\s*\[?((?:\d{4}[-./]\d{2}[-./]\d{2}[ T_-])?\d{2}[:.]\d{2}[:.]\d{2}(?:[.,:]\d{1,6})?(?:Z|[+-]\d{2}:?\d{2})?)\]?[\s:-]*/;
const BEPINEX_HEADER = /^\[\s*([A-Za-z]+)\s*:\s*([^\]]*?)\s*\]\s?/;
const LEVEL_BRACKET = /^\[\s*([A-Za-z]+)\s*\]\s?(?:\[\s*([^\]]+?)\s*\]\s?)?/;
const SOURCE_BRACKET = /^\[\s*([^\]\n]{1,48}?)\s*\]\s?/;
const LEVEL_COLON = /^([A-Za-z]{3,11})\s*:\s+/;
const STACK_FRAME =
  /^\s+at\s|^\s*\(Filename:|^\s*---\s|^\s*--- End of|^\s+in\s+<|^\s*$|^UnityEngine\.\w+:|^\w[\w.]*:\w[\w.`<>]*\(.*\)\s*$/;

const ERROR_HINT =
  /^(?:[\w.]+(?:Exception|Error)\b|\s*(?:error|fatal|crash)\b|.*\b(?:unhandled exception|fatal error|crash(?:ed)?\b|stack overflow|access violation|segmentation fault)\b)/i;
const ERROR_WORD = /\b(?:exception|failed to|failure|could not|cannot|unable to|error)\b/i;
const WARNING_HINT = /^\s*warning\b|\bwarning[:!]|\bdeprecated\b/i;

function levelFromWord(word: string): LogLevel | null {
  return LEVEL_WORDS[word.toLowerCase()] ?? null;
}

/** Level guess for lines without an explicit level (Unity player logs, MelonLoader-style). */
function guessLevel(body: string): LogLevel {
  if (ERROR_HINT.test(body)) return 'error';
  if (WARNING_HINT.test(body)) return 'warning';
  if (
    ERROR_WORD.test(body) &&
    !/\b(?:0|no|zero) errors?\b/i.test(body) &&
    !/\berror(?:s)? (?:count|rate)\b/i.test(body)
  ) {
    // Mentions like "Failed to load X" are errors; bare "error" inside a long info sentence are too noisy.
    return /\b(?:failed to|could not|cannot|unable to|exception)\b/i.test(body) ? 'error' : 'info';
  }
  return 'info';
}

/** Parses one physical line. `previous` is the entry it may continue. */
function parseOne(n: number, text: string, previous: LogLine | null, headered: boolean): LogLine {
  let rest = text;
  let time = '';
  const timeMatch = TIME_PREFIX.exec(rest);
  if (timeMatch?.[1]) {
    time = timeMatch[1];
    rest = rest.slice(timeMatch[0].length);
  }

  let level: LogLevel | null = null;
  let source = '';
  let body = rest;

  const bep = BEPINEX_HEADER.exec(rest);
  const bepLevel = bep?.[1] ? levelFromWord(bep[1]) : null;
  if (bep && bepLevel) {
    level = bepLevel;
    source = (bep[2] ?? '').trim();
    body = rest.slice(bep[0].length);
  } else {
    const lb = LEVEL_BRACKET.exec(rest);
    const lbLevel = lb?.[1] ? levelFromWord(lb[1]) : null;
    if (lb && lbLevel) {
      level = lbLevel;
      source = (lb[2] ?? '').trim();
      body = rest.slice(lb[0].length);
    } else {
      const sb = SOURCE_BRACKET.exec(rest);
      if (sb?.[1] && !/^\d+$/.test(sb[1])) {
        source = sb[1];
        body = rest.slice(sb[0].length);
        // `[Mod] [Warning] text`
        const second = LEVEL_BRACKET.exec(body);
        const secondLevel = second?.[1] && !second[2] ? levelFromWord(second[1]) : null;
        if (second && secondLevel) {
          level = secondLevel;
          body = body.slice(second[0].length);
        }
      } else {
        const lc = LEVEL_COLON.exec(rest);
        const lcLevel = lc?.[1] ? levelFromWord(lc[1]) : null;
        if (lc && lcLevel && lcLevel !== 'info') {
          level = lcLevel;
          body = rest.slice(lc[0].length);
        }
      }
    }
  }

  const hasHeader = level !== null || source !== '' || time !== '';
  // In a log where (nearly) every entry has a header, a line without one is part of the entry above
  // (multi-line exception messages); in a Unity player log only stack frames continue it.
  if (!hasHeader && previous && (headered || STACK_FRAME.test(text))) {
    return { n, text, level: previous.level, time: '', source: '', body: text, cont: true };
  }
  if (!hasHeader && previous && /^\s/.test(text) && text.trim() !== '') {
    return { n, text, level: previous.level, time: '', source: '', body: text, cont: true };
  }
  if (level === null) level = guessLevel(body);
  return { n, text, level, time, source, body, cont: false };
}

const HEADER_SHAPE = /^\s*\[?\d{2}[:.]\d{2}[:.]\d{2}|^\[\s*[A-Za-z]+\s*:|^\[[^\]\n]{1,48}\]/;

/** True when most of the first lines start with a timestamp or a `[Level:Source]` header. */
function isHeadered(raw: readonly string[]): boolean {
  let seen = 0;
  let headers = 0;
  for (let i = 0; i < raw.length && seen < 200; i += 1) {
    const line = raw[i] ?? '';
    if (line.trim() === '') continue;
    seen += 1;
    if (HEADER_SHAPE.test(line)) headers += 1;
  }
  return seen >= 3 && headers / seen >= 0.6;
}

/** Splits `text` into parsed lines (`\r\n` and `\n`; a trailing newline adds no empty line). */
export function parseLog(text: string): LogLine[] {
  const raw = text.split(/\r\n|\n|\r/);
  if (raw.length > 0 && raw[raw.length - 1] === '') raw.pop();
  const lines: LogLine[] = new Array(raw.length);
  const headered = isHeadered(raw);
  let previous: LogLine | null = null;
  for (let i = 0; i < raw.length; i += 1) {
    const line = parseOne(i + 1, raw[i] ?? '', previous, headered);
    lines[i] = line;
    if (!line.cont) previous = line;
  }
  return lines;
}

// ---------------------------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------------------------

const GAME_VERSION_PATTERNS: readonly RegExp[] = [
  /\b(?:game|sotf|sons of the forest|server)\s*(?:build\s*)?(?:version|ver\.?)\s*[:=]?\s*v?(\d+\.\d+(?:\.\d+){0,2}[\w.+-]*)/i,
  /\bSons\s*Of\s*The\s*Forest\b[^\n]{0,30}?\bv(?:ersion)?\s*[:=]?\s*(\d+\.\d+(?:\.\d+){0,2}[\w.+-]*)/i,
  /\bbuild\s*(?:id)?\s*[:=]\s*(\d{6,})/i,
];
const LOADER_PATTERN = /\b(RedLoader|BepInEx|MelonLoader)\b[^\d\n]{0,20}?v?(\d+\.\d+\.\d+(?:[-+.][\w.+-]*)?)/i;
const UNITY_PATTERN =
  /(?:Initialize engine version:|Unity(?: Player)? version\s*[:=]?|Unity\s+v?)\s*(\d{4}\.\d+\.\d+[a-z]\d+|\d{4}\.\d+\.\d+)/i;

const MOD_LINE_PATTERNS: readonly { re: RegExp; name: number; version?: number; author?: number }[] = [
  // BepInEx: "Loading [Plugin Name 1.2.3]"
  { re: /^Loading \[(.+?) v?(\d+\.\d+(?:\.\d+){0,2}[\w.+-]*)\]$/, name: 1, version: 2 },
  // "Name v1.2.3 by Author" (RedLoader/MelonLoader mod banner)
  {
    re: /^(?:\[?Mod\]?:?\s+)?([A-Za-z0-9][\w .&'+-]{1,58}?)\s+v?(\d+\.\d+(?:\.\d+){0,2}[\w.+-]*)\s+by\s+(.{1,60})$/i,
    name: 1,
    version: 2,
    author: 3,
  },
  // "Loaded mod: Name v1.2.3", "Mod loaded: Name (1.2.3)", "Loaded Mod 'Name' 1.2.3"
  {
    re: /^(?:loaded|loading|registered|initiali[sz]ed)\s+(?:mod|plugin)s?(?:\s*[:'"-]\s*|\s+)['"]?([A-Za-z0-9][\w .&+-]{1,58}?)['"]?(?:\s*[(v]\s*v?(\d+\.\d+(?:\.\d+){0,2}[\w.+-]*)\)?)?\s*$/i,
    name: 1,
    version: 2,
  },
  {
    re: /^(?:mod|plugin)\s+(?:loaded|enabled|initiali[sz]ed)\s*[:-]\s*['"]?([A-Za-z0-9][\w .&+-]{1,58}?)['"]?(?:\s*[(v]\s*v?(\d+\.\d+(?:\.\d+){0,2}[\w.+-]*)\)?)?\s*$/i,
    name: 1,
    version: 2,
  },
];
const LOADER_SOURCES = new Set(['redloader', 'bepinex', 'melonloader', 'loader', 'modmanager', 'mod manager']);
const NOT_A_MOD = /^(?:the game|sons of the forest|unity|redloader|bepinex|melonloader|game|engine|version|build)\b/i;

function normalizeErrorMessage(message: string): string {
  return message
    .replace(/0x[0-9a-f]+/gi, '0x#')
    .replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, '#guid')
    .replace(/(?:[A-Za-z]:)?[\\/][\w .\\/()-]+\.\w{1,5}/g, '#path')
    .replace(/\d+(?:\.\d+)?/g, '#')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 240);
}

/** The first line of the message shown in the "top errors" list (exception type + message). */
function displayError(body: string): string {
  return body.trim().replace(/\s+/g, ' ').slice(0, 200);
}

function detectKind(lines: readonly LogLine[], loader: string | null): LogKind {
  const l = loader?.toLowerCase();
  if (l === 'redloader') return 'redloader';
  if (l === 'bepinex') return 'bepinex';
  if (l === 'melonloader') return 'melonloader';
  const head = lines.slice(0, 80);
  if (
    head.some((line) => /Initialize engine version|Mono path\[0\]|Player\.log|Desktop is \d+ x \d+/i.test(line.text))
  ) {
    return 'player';
  }
  if (
    lines
      .slice(0, 400)
      .some((line) =>
        /dedicated\s*server|SonsOfTheForestDS|server (?:started|listening)|\bport\b.*\b\d{4,5}\b/i.test(line.text),
      )
  ) {
    return 'server';
  }
  return 'unknown';
}

/** Summarises parsed lines (see {@link LogSummary}). Runs in one pass over `lines`. */
export function summarizeLog(lines: readonly LogLine[]): LogSummary {
  const counts = { lines: lines.length, fatal: 0, error: 0, warning: 0, info: 0, debug: 0 };
  const groups = new Map<string, LogTopError & { key: string }>();
  const mods = new Map<string, LogModEntry>();
  let gameVersion: string | null = null;
  let loaderName: string | null = null;
  let loaderVersion: string | null = null;
  let unityVersion: string | null = null;
  let firstErrorLine: number | null = null;
  let firstTime: string | null = null;
  let lastTime: string | null = null;

  for (const line of lines) {
    if (line.time) {
      firstTime ??= line.time;
      lastTime = line.time;
    }
    if (line.cont) continue;
    counts[line.level] += 1;

    if (line.level === 'fatal' || line.level === 'error') {
      firstErrorLine ??= line.n;
      const key = normalizeErrorMessage(line.body);
      if (key !== '') {
        const found = groups.get(key);
        if (found) found.count += 1;
        else groups.set(key, { key, message: displayError(line.body), count: 1, line: line.n, level: line.level });
      }
    }

    // Header facts live near the top; scanning the first 600 entries is enough and keeps it cheap.
    if (line.n <= 600) {
      if (!loaderVersion) {
        const loader = LOADER_PATTERN.exec(line.body);
        if (loader?.[1] && loader[2]) {
          loaderName = loader[1].replace(/^(\w)/, (c) => c.toUpperCase());
          loaderVersion = loader[2];
          if (/^redloader$/i.test(loader[1])) loaderName = 'RedLoader';
          else if (/^bepinex$/i.test(loader[1])) loaderName = 'BepInEx';
          else loaderName = 'MelonLoader';
        }
      }
      if (!gameVersion) {
        for (const pattern of GAME_VERSION_PATTERNS) {
          const match = pattern.exec(line.body);
          if (match?.[1]) {
            gameVersion = match[1];
            break;
          }
        }
      }
      if (!unityVersion) {
        const unity = UNITY_PATTERN.exec(line.text);
        if (unity?.[1]) unityVersion = unity[1];
      }
    }

    if (line.n <= 4000 && mods.size < 400) {
      const fromLoader = line.source === '' || LOADER_SOURCES.has(line.source.toLowerCase());
      if (fromLoader || line.source.length > 0) {
        const candidate = line.body.trim();
        for (const pattern of MOD_LINE_PATTERNS) {
          const match = pattern.re.exec(candidate);
          const name = match?.[pattern.name]?.trim();
          if (!match || !name || NOT_A_MOD.test(name) || /[.:]$/.test(name)) continue;
          // "Name v1 by Author" is a banner only when the loader prints it; other sources would be chat.
          if (pattern.author && !fromLoader) continue;
          const key = name.toLowerCase();
          if (!mods.has(key)) {
            mods.set(key, {
              name,
              version: (pattern.version ? match[pattern.version] : undefined) ?? null,
              author: (pattern.author ? match[pattern.author]?.trim() : undefined) ?? null,
              line: line.n,
            });
          }
          break;
        }
      }
    }
  }

  const topErrors = [...groups.values()]
    .sort((a, b) => b.count - a.count || a.line - b.line)
    .slice(0, 8)
    .map(({ message, count, line, level }) => ({ message, count, line, level }));

  return {
    kind: detectKind(lines, loaderName),
    gameVersion,
    loaderName,
    loaderVersion,
    unityVersion,
    mods: [...mods.values()].slice(0, 300),
    counts,
    topErrors,
    firstErrorLine,
    firstTime,
    lastTime,
  };
}

/** Collapses a run of consecutive identical messages (ignoring timestamps) for the viewer. */
export function repeatKey(line: LogLine): string {
  return `${line.level}|${line.source}|${line.body}`;
}
