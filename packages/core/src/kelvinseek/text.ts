/**
 * Text handling of KelvinSeek, ported literally from the legacy API (PLAN §5.5 "*prompt* y
 * *fallback* copiados literalmente"):
 *
 * - `sanitizeInput`: the legacy `shared/sanitize.ts` (character allow-list, then sanitize-html,
 *   which decodes character references and re-escapes `&`, `<` and `>`).
 * - `diceSimilarity` / `simSort`: `dice-similarity-coeff` 1.1.1 (bigram Dice coefficient; the
 *   legacy sorted the shared command list **in place**, v2 sorts a copy with the same stable order).
 * - `closestCommand`: `fastest-levenshtein` `closest` (first command with the smallest distance).
 * - `fallbackReply`: the deterministic answer when the model cannot be used.
 * - `parseModelAnswer`: how the legacy turned the model output into `"{command}|{answer}"`.
 */
import { KELVINSEEK_COMMANDS } from './prompt.ts';

const ALLOWED = /[^\p{Script=Han}a-zA-Z0-9,.¡!¿?$%&()#+;/'"\n @_-]/gu;

const NAMED_ENTITIES: Readonly<Record<string, string>> = {
  excl: '!',
  quot: '"',
  num: '#',
  dollar: '$',
  percnt: '%',
  amp: '&',
  apos: "'",
  lpar: '(',
  rpar: ')',
  ast: '*',
  plus: '+',
  comma: ',',
  period: '.',
  sol: '/',
  colon: ':',
  semi: ';',
  lt: '<',
  equals: '=',
  gt: '>',
  quest: '?',
  commat: '@',
  lbrack: '[',
  bsol: '\\',
  rbrack: ']',
  Hat: '^',
  lowbar: '_',
  lbrace: '{',
  verbar: '|',
  rbrace: '}',
  nbsp: '\u00a0',
  iexcl: '\u00a1',
  cent: '\u00a2',
  pound: '\u00a3',
  curren: '\u00a4',
  yen: '\u00a5',
  brvbar: '\u00a6',
  sect: '\u00a7',
  uml: '\u00a8',
  die: '\u00a8',
  copy: '\u00a9',
  ordf: '\u00aa',
  laquo: '\u00ab',
  not: '\u00ac',
  shy: '\u00ad',
  reg: '\u00ae',
  circledR: '\u00ae',
  macr: '\u00af',
  deg: '\u00b0',
  plusmn: '\u00b1',
  PlusMinus: '\u00b1',
  sup2: '\u00b2',
  sup3: '\u00b3',
  acute: '\u00b4',
  micro: '\u00b5',
  para: '\u00b6',
  middot: '\u00b7',
  centerdot: '\u00b7',
  cedil: '\u00b8',
  sup1: '\u00b9',
  ordm: '\u00ba',
  raquo: '\u00bb',
  frac14: '\u00bc',
  frac12: '\u00bd',
  frac34: '\u00be',
  iquest: '\u00bf',
  Agrave: '\u00c0',
  Aacute: '\u00c1',
  Acirc: '\u00c2',
  Atilde: '\u00c3',
  Auml: '\u00c4',
  Aring: '\u00c5',
  angst: '\u00c5',
  AElig: '\u00c6',
  Ccedil: '\u00c7',
  Egrave: '\u00c8',
  Eacute: '\u00c9',
  Ecirc: '\u00ca',
  Euml: '\u00cb',
  Igrave: '\u00cc',
  Iacute: '\u00cd',
  Icirc: '\u00ce',
  Iuml: '\u00cf',
  ETH: '\u00d0',
  Ntilde: '\u00d1',
  Ograve: '\u00d2',
  Oacute: '\u00d3',
  Ocirc: '\u00d4',
  Otilde: '\u00d5',
  Ouml: '\u00d6',
  times: '\u00d7',
  Oslash: '\u00d8',
  Ugrave: '\u00d9',
  Uacute: '\u00da',
  Ucirc: '\u00db',
  Uuml: '\u00dc',
  Yacute: '\u00dd',
  THORN: '\u00de',
  szlig: '\u00df',
  agrave: '\u00e0',
  aacute: '\u00e1',
  acirc: '\u00e2',
  atilde: '\u00e3',
  auml: '\u00e4',
  aring: '\u00e5',
  aelig: '\u00e6',
  ccedil: '\u00e7',
  egrave: '\u00e8',
  eacute: '\u00e9',
  ecirc: '\u00ea',
  euml: '\u00eb',
  igrave: '\u00ec',
  iacute: '\u00ed',
  icirc: '\u00ee',
  iuml: '\u00ef',
  eth: '\u00f0',
  ntilde: '\u00f1',
  ograve: '\u00f2',
  oacute: '\u00f3',
  ocirc: '\u00f4',
  otilde: '\u00f5',
  ouml: '\u00f6',
  divide: '\u00f7',
  div: '\u00f7',
  oslash: '\u00f8',
  ugrave: '\u00f9',
  uacute: '\u00fa',
  ucirc: '\u00fb',
  uuml: '\u00fc',
  yacute: '\u00fd',
  thorn: '\u00fe',
  yuml: '\u00ff',
  trade: '\u2122',
  hellip: '\u2026',
  mdash: '\u2014',
  ndash: '\u2013',
  euro: '\u20ac',
  lsquo: '\u2018',
  rsquo: '\u2019',
  ldquo: '\u201c',
  rdquo: '\u201d',
  bull: '\u2022',
  dagger: '\u2020',
  Dagger: '\u2021',
  permil: '\u2030',
  AMP: '&',
  LT: '<',
  GT: '>',
  QUOT: '"',
  COPY: '\u00a9',
  REG: '\u00ae',
};

/** Names HTML also decodes without the trailing `;` (the legacy Latin-1 set). */
const LEGACY_NAMES: readonly string[] = [
  'quot',
  'amp',
  'lt',
  'gt',
  'nbsp',
  'iexcl',
  'cent',
  'pound',
  'curren',
  'yen',
  'brvbar',
  'sect',
  'uml',
  'copy',
  'ordf',
  'laquo',
  'not',
  'shy',
  'reg',
  'macr',
  'deg',
  'plusmn',
  'sup2',
  'sup3',
  'acute',
  'micro',
  'para',
  'middot',
  'cedil',
  'sup1',
  'ordm',
  'raquo',
  'frac14',
  'frac12',
  'frac34',
  'iquest',
  'Agrave',
  'Aacute',
  'Acirc',
  'Atilde',
  'Auml',
  'Aring',
  'AElig',
  'Ccedil',
  'Egrave',
  'Eacute',
  'Ecirc',
  'Euml',
  'Igrave',
  'Iacute',
  'Icirc',
  'Iuml',
  'ETH',
  'Ntilde',
  'Ograve',
  'Oacute',
  'Ocirc',
  'Otilde',
  'Ouml',
  'times',
  'Oslash',
  'Ugrave',
  'Uacute',
  'Ucirc',
  'Uuml',
  'Yacute',
  'THORN',
  'szlig',
  'agrave',
  'aacute',
  'acirc',
  'atilde',
  'auml',
  'aring',
  'aelig',
  'ccedil',
  'egrave',
  'eacute',
  'ecirc',
  'euml',
  'igrave',
  'iacute',
  'icirc',
  'iuml',
  'eth',
  'ntilde',
  'ograve',
  'oacute',
  'ocirc',
  'otilde',
  'ouml',
  'divide',
  'oslash',
  'ugrave',
  'uacute',
  'ucirc',
  'uuml',
  'yacute',
  'thorn',
  'yuml',
  'AMP',
  'LT',
  'GT',
  'QUOT',
  'COPY',
  'REG',
].sort((a, b) => b.length - a.length);

/** Windows-1252 remapping of numeric references 0x80–0x9F (HTML spec, as htmlparser2 does). */
const C1_REMAP: Readonly<Record<number, number>> = {
  128: 0x20ac,
  130: 0x201a,
  131: 0x0192,
  132: 0x201e,
  133: 0x2026,
  134: 0x2020,
  135: 0x2021,
  136: 0x02c6,
  137: 0x2030,
  138: 0x0160,
  139: 0x2039,
  140: 0x0152,
  142: 0x017d,
  145: 0x2018,
  146: 0x2019,
  147: 0x201c,
  148: 0x201d,
  149: 0x2022,
  150: 0x2013,
  151: 0x2014,
  152: 0x02dc,
  153: 0x2122,
  154: 0x0161,
  155: 0x203a,
  156: 0x0153,
  158: 0x017e,
  159: 0x0178,
};

function codePointOf(n: number): string {
  if (n === 0 || n > 0x10ffff || (n >= 0xd800 && n <= 0xdfff)) return '\ufffd';
  return String.fromCodePoint(C1_REMAP[n] ?? n);
}

/**
 * Decodes character references like htmlparser2 does in text (what sanitize-html runs on): numeric
 * references (`;` optional), named references of the table, and the legacy Latin-1 names without
 * `;` (longest match: `&amp b` → `& b`, `&lt3` → `<3`). Unknown names stay literal.
 */
function decodeReferences(value: string): string {
  return value.replace(
    /&(?:#(\d+);?|#[xX]([0-9a-fA-F]+);?|([a-zA-Z][a-zA-Z0-9]*)(;?))/g,
    (match, dec, hex, name, semi) => {
      if (dec !== undefined) return codePointOf(Number.parseInt(dec, 10));
      if (hex !== undefined) return codePointOf(Number.parseInt(hex, 16));
      if (semi === ';' && Object.hasOwn(NAMED_ENTITIES, name)) return NAMED_ENTITIES[name] as string;
      const prefix = LEGACY_NAMES.find((legacyName) => name.startsWith(legacyName));
      if (prefix) return `${NAMED_ENTITIES[prefix]}${name.slice(prefix.length)}${semi}`;
      return match;
    },
  );
}

/** sanitize-html's text escaping (`&`, `<`, `>`; quotes stay). */
function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * The legacy `sanitizeInput`: keeps Han characters, ASCII letters and digits, `,.¡!¿?$%&()#+;/'"`,
 * newline, space, `@`, `_`, `-` and `:`; decodes character references and escapes `&`, `<`, `>`.
 */
export function sanitizeInput(input: string | null | undefined): string {
  if (!input) return '';
  const allowed = input.replace(ALLOWED, (c) => (c === ':' ? c : ''));
  // No `<` survives the allow-list, so sanitize-html only decodes and re-escapes the text.
  return escapeText(decodeReferences(allowed)).trim();
}

// -----------------------------------------------------------------------------------------------
// Similarity (dice-similarity-coeff 1.1.1, fastest-levenshtein 1.0.16)
// -----------------------------------------------------------------------------------------------

function pairs(s: string): string[] {
  const out: string[] = [];
  for (let i = 0; i < s.length - 1; i += 1) out.push(s.slice(i, i + 2));
  return out;
}

/** Dice coefficient of the character bigrams (case and whitespace ignored), 0–1. */
export function diceSimilarity(a: string, b: string): number {
  const s1 = a.replace(/\s/g, '').toLowerCase();
  const s2 = b.replace(/\s/g, '').toLowerCase();
  if (s1.length === 1 || s2.length === 1) return Number(s1 === s2);
  const p1 = pairs(s1);
  const p2 = pairs(s2);
  const set = new Set(p2);
  const shared = p1.filter((pair) => set.has(pair)).length;
  return (2 * shared) / (p1.length + p2.length);
}

/** `simSort`: candidates by descending similarity (stable), on a copy. */
export function simSort(text: string, candidates: readonly string[]): string[] {
  return [...candidates].sort((a, b) => diceSimilarity(text, b) - diceSimilarity(text, a));
}

/** Levenshtein distance. */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    const current = [i];
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
      current[j] = Math.min(
        (previous[j] as number) + 1,
        (current[j - 1] as number) + 1,
        (previous[j - 1] as number) + cost,
      );
    }
    previous = current;
  }
  return previous[b.length] as number;
}

/** `closest(value, commands)`: the first command with the smallest distance. */
export function closestCommand(value: string): string {
  let best: string = KELVINSEEK_COMMANDS[0];
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const command of KELVINSEEK_COMMANDS) {
    const distance = levenshtein(value, command);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = command;
    }
  }
  return best;
}

// -----------------------------------------------------------------------------------------------
// Fallback and parsing
// -----------------------------------------------------------------------------------------------

/** Legacy error notes appended to the fallback answer. */
export const KELVINSEEK_FALLBACK_NOTES = {
  /** The model failed or timed out. */
  error: 'Chat GPT API Error. Try a different chat gpt api key',
  /** The daily budget is spent (the legacy message for an exhausted OpenAI quota). */
  quota: 'Chat GPT API Error. You have exceeded your current quota.',
} as const;
export type KelvinSeekFallbackReason = keyof typeof KELVINSEEK_FALLBACK_NOTES;

const COMMAND_WORDS: ReadonlySet<string> = new Set(
  KELVINSEEK_COMMANDS.flatMap((command) => command.split('.')).flatMap((word) => word.split('_')),
);

/**
 * The legacy fallback: keep the words of the (sanitised) player text that appear in the command
 * ids, pick the most similar command and answer `"{command}|I will {command in words} right away
 * ({note})"`, e.g. `get.logs.follow_me|I will get logs and follow you right away (…)`.
 */
export function fallbackReply(sanitizedText: string, reason: KelvinSeekFallbackReason): string {
  const note = KELVINSEEK_FALLBACK_NOTES[reason];
  const userText = sanitizedText
    .split(' ')
    .filter((word) => COMMAND_WORDS.has(word))
    .join(' ');
  const command = simSort(userText, KELVINSEEK_COMMANDS)[0];
  if (command) {
    const words = command
      .replace('.', ' ')
      .replace('.', ' and ')
      .replaceAll('_', ' ')
      .split(' ')
      .map((word) => (word === 'me' ? 'you' : word))
      .join(' ');
    return `${command}|I will ${words} right away (${note})`;
  }
  return `|I can't understand anything.. (${note})`;
}

/** One line, no separator: what the mod can display after `split('|')`. */
function oneLine(value: string): string {
  return value
    .replace(/\|/g, ' ')
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Turns the model output into `{command, answer}` as the legacy did: with a `|`, the part before
 * the first separator is snapped to the closest command (empty stays empty) and the part after the
 * last one is the (sanitised) answer; without `|` the whole text is the answer. v2 additionally
 * keeps the answer on one line without separators. Returns null when no answer is left.
 */
export function parseModelAnswer(output: string): { command: string; answer: string } | null {
  let command = '';
  let answer: string;
  if (output.includes('|')) {
    const parts = output.split('|');
    const head = (parts[0] ?? '').trim();
    command = head.length > 0 ? closestCommand(head) : '';
    const tail = (parts[parts.length - 1] ?? '').trim();
    answer = tail ? sanitizeInput(tail) : '';
  } else {
    answer = sanitizeInput(output.trim());
  }
  answer = oneLine(answer);
  return answer ? { command, answer } : null;
}

/**
 * `previousConversations` of the prompt: `"prompt > message"` pairs joined by `,` (the legacy
 * removed only the **first** `,` and `>` of each side).
 */
export function previousConversations(messages: ReadonlyArray<{ prompt: string; message: string }>): string {
  return messages
    .map(
      (m) =>
        `${m.prompt.replace(',', '').replace('>', '').trim()} > ${m.message.replace(',', '').replace('>', '').trim()}`,
    )
    .join(',');
}
