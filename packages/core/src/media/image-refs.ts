/**
 * References to stored images inside text (B22, the WebP conversion of every old image): finds and
 * rewrites the public URL or the bare key of a known object wherever it is written in a Markdown
 * description, a rendered HTML page, a comment, a JSON document or a plain column.
 *
 * Pure strings, no storage and no database. The matching is **exact**: a reference is only touched
 * when it is the full public URL (or the full key) of an object of the given mapping, followed by a
 * boundary, so `…/a.png` never matches inside `…/a.png.bak` and a foreign host is never touched.
 *
 * Forms recognised for a key `K` under a public base `https://r2.sotf-mods.com` (the scheme and host
 * stay as written, only the path after `r2.sotf-mods.com/` is compared and replaced):
 *
 * - raw (`1773_a b.png`, how the old site stored some URLs), per-segment percent encoding
 *   (`1773_a%20b.png`, `encodeStorageKey`), spaces only (`a%20b`), `encodeURI` style, lower-case hex;
 * - each of those HTML-escaped (`&amp;`, `&#39;`, `&quot;`, `&lt;`, `&gt;`, as in rendered pages);
 * - each of those with JSON-escaped slashes (`https:\/\/r2.sotf-mods.com\/media\/…`, text columns that
 *   hold JSON written by PHP);
 * - the bare `media/{uuid}/…` key anywhere in a text, and any bare key as the whole value of a cell
 *   or of a JSON string.
 *
 * The replacement keeps the style of the form that was found: a percent-encoded URL stays encoded.
 */
import { encodeStorageKey } from '@sotf/contracts/downloads';

/** Extensions of the images the backfill converts (WebP and SVG are not converted). */
export const CONVERTIBLE_IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'tif', 'tiff', 'avif'] as const;
export const IMAGE_EXTENSION_PATTERN = '(?:png|jpe?g|gif|bmp|tiff?|avif)';

/** Lower-case extension of a key, or '' (`a.b/c` has none). */
export function extensionOfKey(key: string): string {
  const name = key.slice(key.lastIndexOf('/') + 1);
  const dot = name.lastIndexOf('.');
  return dot > 0 ? name.slice(dot + 1).toLowerCase() : '';
}

export function isConvertibleImageKey(key: string): boolean {
  return (CONVERTIBLE_IMAGE_EXTENSIONS as readonly string[]).includes(extensionOfKey(key));
}

/** `a/b.png` → `a/b.webp`; a key without extension gets `.webp`. */
export function webpKeyOf(key: string, taken: ReadonlySet<string> = new Set()): string {
  const name = key.slice(key.lastIndexOf('/') + 1);
  const dot = name.lastIndexOf('.');
  const stem = dot > 0 ? key.slice(0, key.length - name.length + dot) : key;
  const plain = `${stem}.webp`;
  if (!taken.has(plain)) return plain;
  // `a.png` and `a.jpg` (or an unrelated `a.webp`) cannot share `a.webp`: keep the old extension in the name.
  const ext = dot > 0 ? name.slice(dot + 1).toLowerCase() : 'bin';
  return `${stem}.${ext}.webp`;
}

// Where a path stops being part of a URL inside a text (a quote, a tag, a line end, an escaped quote).
const HARD_STOP = /["<>`\r\n]|\\(?!\/)/;
const MAX_TAIL = 700;
// An extension that ends a key: not followed by more name (`.pngx`, `.png.bak`, `.png%20x`, `.png-2`).
const EXT_END = new RegExp(`\\.${IMAGE_EXTENSION_PATTERN}(?![A-Za-z0-9_%~-]|\\.[A-Za-z0-9])`, 'gi');
const BARE_MEDIA =
  /(?<![A-Za-z0-9_/.%-])media\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/[A-Za-z0-9._-]+/g;

function htmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function lowerHex(value: string): string {
  return value.replace(/%[0-9A-F]{2}/g, (m) => m.toLowerCase());
}

interface Style {
  encode: (key: string) => string;
  html: boolean;
}

function safeEncodeUri(key: string): string {
  try {
    return encodeURI(key);
  } catch {
    return key;
  }
}

const ENCODINGS: ReadonlyArray<(key: string) => string> = [
  (key) => key,
  (key) => encodeStorageKey(key),
  (key) => key.replace(/ /g, '%20'),
  (key) => safeEncodeUri(key),
  (key) => lowerHex(encodeStorageKey(key)),
];

const STYLES: readonly Style[] = ENCODINGS.flatMap((encode) => [
  { encode, html: false },
  { encode, html: true },
]);

function render(style: Style, key: string): string {
  const encoded = style.encode(key);
  return style.html ? htmlEscape(encoded) : encoded;
}

export interface ImageRefMatch {
  /** Offsets in the searched text. */
  start: number;
  end: number;
  /** The old key (the mapping entry that matched). */
  key: string;
  /** What the matched span becomes. */
  replacement: string;
  kind: 'url' | 'bare';
}

export interface ImageRefIndexOptions {
  /** Public base URLs of the bucket (`https://r2.sotf-mods.com`, the dev `http://127.0.0.1:47333/sotf-mods`). */
  bases: readonly string[];
}

interface FormEntry {
  key: string;
  style: Style;
}

/** `r2.sotf-mods.com/` of `https://r2.sotf-mods.com`, the part that is always written the same. */
function anchorOf(base: string): string {
  return `${base.replace(/^[a-z][a-z0-9+.-]*:\/\//i, '').replace(/\/+$/, '')}/`;
}

/**
 * An index over `old key → new key`. With identical keys (`new = old`) it is a plain finder.
 */
export class ImageRefIndex {
  readonly #mapping: ReadonlyMap<string, string>;
  readonly #anchors: string[];
  readonly #jsonAnchors: string[];
  /** path form → entry */
  readonly #forms = new Map<string, FormEntry>();
  readonly #wholeKeys = new Map<string, string>();
  /** Forms of keys without an image extension (found through their content type): matched by prefix. */
  readonly #odd: Array<{ form: string; entry: FormEntry }> = [];

  constructor(mapping: ReadonlyMap<string, string>, options: ImageRefIndexOptions) {
    this.#mapping = mapping;
    const anchors = [...new Set(options.bases.map(anchorOf))];
    this.#anchors = anchors;
    this.#jsonAnchors = anchors.map((a) => a.replace(/\//g, '\\/'));
    // Raw forms of real keys first: a derived form never shadows the form of another key.
    for (const key of mapping.keys()) this.#forms.set(key, { key, style: STYLES[0] as Style });
    for (const key of mapping.keys()) {
      for (const style of STYLES) {
        const form = render(style, key);
        if (!this.#forms.has(form)) this.#forms.set(form, { key, style });
      }
      this.#wholeKeys.set(key, key);
    }
    for (const [form, entry] of this.#forms) {
      if (!isConvertibleImageKey(entry.key) && !/\.(?:png|jpe?g|gif|bmp|tiff?|avif)$/i.test(form)) {
        this.#odd.push({ form, entry });
      }
    }
    this.#odd.sort((a, b) => b.form.length - a.form.length);
  }

  get size(): number {
    return this.#mapping.size;
  }

  newKeyOf(key: string): string | undefined {
    return this.#mapping.get(key);
  }

  #replacement(entry: FormEntry, jsonSlash: boolean): string {
    const next = this.#mapping.get(entry.key) as string;
    const text = render(entry.style, next);
    return jsonSlash ? text.replace(/\//g, '\\/') : text;
  }

  /** Every reference in `text` to a key of the mapping, left to right, without overlaps. */
  locate(text: string): ImageRefMatch[] {
    const found: ImageRefMatch[] = [];
    if (this.#mapping.size === 0 || text === '') return found;

    const lower = text; // hosts are written lower case: anchors are matched as they are
    for (const [kind, anchors] of [
      ['plain', this.#anchors],
      ['json', this.#jsonAnchors],
    ] as const) {
      for (const anchor of anchors) {
        let from = 0;
        for (;;) {
          const at = lower.indexOf(anchor, from);
          if (at < 0) break;
          from = at + anchor.length;
          // Must be the host of a URL (`//host/`), not the tail of another host.
          const before = kind === 'json' ? lower.slice(Math.max(0, at - 4), at) : lower.slice(Math.max(0, at - 2), at);
          if (kind === 'json' ? !before.endsWith('\\/\\/') : !before.endsWith('//')) continue;
          const match = this.#matchAt(lower, at + anchor.length, kind === 'json');
          if (!match) continue;
          found.push({
            start: at + anchor.length,
            end: at + anchor.length + match.length,
            key: match.entry.key,
            replacement: this.#replacement(match.entry, kind === 'json'),
            kind: 'url',
          });
          from = at + anchor.length + match.length;
        }
      }
    }

    BARE_MEDIA.lastIndex = 0;
    for (let m = BARE_MEDIA.exec(text); m; m = BARE_MEDIA.exec(text)) {
      const entry = this.#forms.get(m[0]);
      if (!entry || entry.style !== STYLES[0] || !this.#mapping.has(m[0])) continue;
      found.push({
        start: m.index,
        end: m.index + m[0].length,
        key: entry.key,
        replacement: this.#mapping.get(entry.key) as string,
        kind: 'bare',
      });
    }

    found.sort((a, b) => a.start - b.start || b.end - a.end);
    const out: ImageRefMatch[] = [];
    let cursor = -1;
    for (const match of found) {
      if (match.start < cursor) continue; // overlaps a previous (URL) match
      out.push(match);
      cursor = match.end;
    }
    return out;
  }

  #matchAt(text: string, from: number, jsonSlash: boolean): { length: number; entry: FormEntry } | null {
    const window = text.slice(from, from + MAX_TAIL);
    const stop = window.search(HARD_STOP);
    const tail = stop < 0 ? window : window.slice(0, stop);
    let best: { length: number; entry: FormEntry } | null = null;
    EXT_END.lastIndex = 0;
    for (let m = EXT_END.exec(tail); m; m = EXT_END.exec(tail)) {
      const end = m.index + m[0].length;
      const candidate = jsonSlash ? tail.slice(0, end).replace(/\\\//g, '/') : tail.slice(0, end);
      const entry = this.#forms.get(candidate);
      if (entry) best = { length: end, entry };
    }
    for (const odd of this.#odd) {
      const form = jsonSlash ? odd.form.replace(/\//g, '\\/') : odd.form;
      if (form.length <= (best?.length ?? 0) || !tail.startsWith(form)) continue;
      const next = tail.slice(form.length, form.length + 2);
      if (/^[A-Za-z0-9_%~-]/.test(next) || /^\.[A-Za-z0-9]/.test(next)) continue;
      best = { length: form.length, entry: odd.entry };
    }
    return best;
  }

  /** The new key when `value` is, as a whole (trimmed), a key of the mapping. */
  wholeKey(value: string): { key: string; newKey: string } | null {
    const key = value.trim();
    const next = this.#wholeKeys.has(key) ? this.#mapping.get(key) : undefined;
    return next === undefined ? null : { key, newKey: next };
  }

  /** `text` with every reference replaced; `keys` are the old keys that were found. */
  rewriteText(text: string): { text: string; keys: Set<string>; count: number } {
    const matches = this.locate(text);
    const keys = new Set<string>();
    if (matches.length === 0) return { text, keys, count: 0 };
    let out = '';
    let cursor = 0;
    for (const match of matches) {
      out += text.slice(cursor, match.start) + match.replacement;
      cursor = match.end;
      keys.add(match.key);
    }
    return { text: out + text.slice(cursor), keys, count: matches.length };
  }

  /** Like {@link rewriteText}, also when the whole cell is a bare key. */
  rewriteCell(
    text: string,
    options: { wholeKey: boolean } = { wholeKey: true },
  ): {
    text: string;
    keys: Set<string>;
    count: number;
  } {
    if (options.wholeKey) {
      const whole = this.wholeKey(text);
      if (whole) {
        const lead = text.slice(0, text.length - text.trimStart().length);
        const trail = text.slice(text.trimEnd().length);
        return { text: `${lead}${whole.newKey}${trail}`, keys: new Set([whole.key]), count: 1 };
      }
    }
    return this.rewriteText(text);
  }

  /** Rewrites every string of a JSON value (whole bare keys and embedded URLs). */
  rewriteJson(value: unknown): { value: unknown; keys: Set<string>; count: number } {
    const keys = new Set<string>();
    let count = 0;
    const walk = (node: unknown): unknown => {
      if (typeof node === 'string') {
        const out = this.rewriteCell(node);
        for (const key of out.keys) keys.add(key);
        count += out.count;
        return out.text;
      }
      if (Array.isArray(node)) return node.map(walk);
      if (node !== null && typeof node === 'object') {
        const copy: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(node)) copy[k] = walk(v);
        return copy;
      }
      return node;
    };
    const next = walk(value);
    return { value: next, keys, count };
  }
}

/**
 * Keys of every image URL written in `text` under one of the public bases, decoded, whether or not
 * the object exists (to find the dangling ones). The key ends at the first image extension that is
 * followed by a boundary, so a path with spaces still resolves.
 */
export function extractImageUrlKeys(text: string, bases: readonly string[]): string[] {
  const out = new Set<string>();
  const decode = (raw: string): string => {
    const unescaped = raw
      .replace(/\\\//g, '/')
      .replace(/&amp;/g, '&')
      .replace(/&#39;|&#x27;/g, "'");
    try {
      return decodeURIComponent(unescaped);
    } catch {
      return unescaped;
    }
  };
  for (const anchor of [...new Set(bases.map(anchorOf))]) {
    for (const form of [anchor, anchor.replace(/\//g, '\\/')]) {
      let from = 0;
      for (;;) {
        const at = text.indexOf(form, from);
        if (at < 0) break;
        from = at + form.length;
        const window = text.slice(from, from + MAX_TAIL);
        const stop = window.search(HARD_STOP);
        const tail = stop < 0 ? window : window.slice(0, stop);
        EXT_END.lastIndex = 0;
        const first = EXT_END.exec(tail);
        if (!first) continue;
        const raw = tail.slice(0, first.index + first[0].length);
        // Another URL starts before an extension: the first one was not an image (`/file.zip https://x/y.png`).
        if (/:\/\/|:\\\/\\\//.test(raw)) continue;
        out.add(decode(raw));
      }
    }
  }
  return [...out];
}
