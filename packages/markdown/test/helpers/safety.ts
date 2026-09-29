/**
 * Black-box safety checks on rendered HTML, using a real HTML parser (jsdom, parse5) exactly as a
 * browser would read the fragment. Independent of the production `verifyTree`.
 */
import type { Root, RootContent } from 'hast';
import { JSDOM } from 'jsdom';

/** Every element the pipeline may emit, with the attributes it may carry. */
const ALLOWED: Readonly<Record<string, readonly string[]>> = {
  a: ['href', 'title', 'rel', 'class', 'aria-hidden', 'tabindex', 'data-youtube-id', 'data-youtube-start'],
  b: [],
  blockquote: [],
  br: [],
  code: ['class'],
  dd: [],
  del: [],
  details: ['open'],
  div: ['class', 'role'],
  dl: [],
  dt: [],
  em: [],
  figure: ['class'],
  h1: ['id'],
  h2: ['id'],
  h3: ['id'],
  h4: ['id'],
  h5: ['id'],
  h6: ['id'],
  hr: [],
  i: [],
  img: ['src', 'alt', 'title', 'width', 'height', 'loading', 'decoding', 'referrerpolicy', 'class'],
  input: ['type', 'checked', 'disabled'],
  ins: [],
  kbd: [],
  li: ['class'],
  ol: ['start', 'class'],
  p: ['class'],
  pre: [],
  s: [],
  samp: [],
  span: ['class', 'role', 'tabindex', 'aria-expanded', 'aria-label', 'data-md-label'],
  strong: [],
  sub: [],
  summary: [],
  sup: [],
  table: [],
  tbody: [],
  td: ['align'],
  tfoot: [],
  th: ['align'],
  thead: [],
  tr: [],
  ul: ['class'],
};

const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:']);
const INTERNAL_HOSTS = new Set(['sotf-mods.com', 'www.sotf-mods.com']);
const BASE = 'https://sotf-mods.com/mods/author/some-mod';

let fired = false;
let scripted: JSDOM | undefined;
let inert: JSDOM | undefined;

function windowFor(runScripts: boolean): JSDOM['window'] {
  if (runScripts) {
    if (!scripted) {
      scripted = new JSDOM('<!doctype html><html><head></head><body></body></html>', {
        url: BASE,
        runScripts: 'dangerously',
      });
      const trap = () => {
        fired = true;
      };
      Object.assign(scripted.window, { alert: trap, confirm: trap, prompt: trap, print: trap, xss: trap });
    }
    return scripted.window;
  }
  inert ??= new JSDOM('<!doctype html><html><head></head><body></body></html>', { url: BASE });
  return inert.window;
}

/** Parses an HTML fragment in a (reused) document, the way `innerHTML` does in a browser. */
function fragment(html: string, runScripts = false): { body: HTMLElement; fired: () => boolean } {
  const window = windowFor(runScripts);
  fired = false;
  window.document.head.innerHTML = '';
  window.document.body.innerHTML = html;
  return { body: window.document.body, fired: () => fired };
}

/** Returns the list of violations (empty when the HTML is safe). */
export function findViolations(html: string, tree?: Root): string[] {
  const problems: string[] = [];
  const first = fragment(html, true);
  inspect(first.body, problems);
  // mXSS: serialising the parsed DOM and parsing it again must not change it.
  const once = first.body.innerHTML;
  const expected = tree ? hastSignature(tree) : null;
  const actual = domSignature(first.body);
  if (first.fired()) problems.push('a script ran');
  const second = fragment(once);
  const twice = second.body.innerHTML;
  if (once !== twice) problems.push(`unstable re-parse:\n  ${once}\n  ${twice}`);
  inspect(second.body, problems);
  // The browser must build exactly the tree the pipeline verified (no parser mutation).
  if (expected !== null) {
    if (expected !== actual) problems.push(`browser tree differs from the verified tree:\n  ${expected}\n  ${actual}`);
  }
  return problems;
}

/** Merges adjacent text entries, collapses whitespace and drops whitespace-only text. */
function joinSignature(entries: string[]): string {
  const merged: string[] = [];
  for (const entry of entries) {
    const last = merged[merged.length - 1];
    if (entry.startsWith('\u0000') && last?.startsWith('\u0000')) merged[merged.length - 1] = last + entry.slice(1);
    else merged.push(entry);
  }
  return merged
    .map((entry) => {
      if (!entry.startsWith('\u0000')) return entry;
      const value = entry.slice(1).replace(/\s+/g, ' ').trim();
      return value === '' ? '' : JSON.stringify(value);
    })
    .join('');
}

/** Pre-order signature: tags, attribute names and text (whitespace collapsed, empty text dropped). */
function hastSignature(tree: Root): string {
  const out: string[] = [];
  const walk = (node: RootContent | Root): void => {
    if (node.type === 'text') {
      out.push(`\u0000${node.value}`);
      return;
    }
    if (node.type === 'element') out.push(`<${node.tagName} ${Object.keys(node.properties).length}>`);
    if ('children' in node) for (const child of node.children) walk(child);
    if (node.type === 'element') out.push(`</${node.tagName}>`);
  };
  walk(tree);
  return joinSignature(out);
}

function domSignature(root: HTMLElement): string {
  const out: string[] = [];
  const walk = (node: Node): void => {
    if (node.nodeType === 3) {
      out.push(`\u0000${node.nodeValue ?? ''}`);
      return;
    }
    if (node.nodeType !== 1) return;
    const el = node as Element;
    if (el !== root) out.push(`<${el.localName} ${el.attributes.length}>`);
    for (const child of Array.from(el.childNodes)) walk(child);
    if (el !== root) out.push(`</${el.localName}>`);
  };
  walk(root);
  return joinSignature(out);
}

function inspect(root: HTMLElement, problems: string[]): void {
  const doc = root.ownerDocument;
  const walker = doc.createTreeWalker(root, 0xffffffff);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (node.nodeType === 8) problems.push('comment node');
    if (node.nodeType === 7) problems.push('processing instruction');
    if (node.nodeType !== 1) continue;
    const el = node as Element;
    if (el.namespaceURI !== 'http://www.w3.org/1999/xhtml') problems.push(`foreign element ${el.nodeName}`);
    const name = el.localName;
    const allowed = ALLOWED[name];
    if (!allowed) {
      problems.push(`element <${name}>`);
      continue;
    }
    for (const attr of Array.from(el.attributes)) {
      if (!allowed.includes(attr.name)) problems.push(`attribute ${attr.name} on <${name}>`);
      if (/^on/i.test(attr.name)) problems.push(`event handler ${attr.name}`);
    }
    for (const attr of ['href', 'src']) {
      const value = el.getAttribute(attr);
      if (value === null) continue;
      let protocol: string;
      try {
        protocol = new URL(value, BASE).protocol;
      } catch {
        continue; // Unparseable URLs do not navigate anywhere.
      }
      if (!SAFE_PROTOCOLS.has(protocol) || (attr === 'src' && protocol === 'mailto:')) {
        problems.push(`${attr} with ${protocol} on <${name}>: ${value}`);
      }
    }
    if (name === 'input' && (el.getAttribute('type') !== 'checkbox' || !el.hasAttribute('disabled'))) {
      problems.push('interactive input');
    }
    if (name === 'a' && el.getAttribute('rel') !== null && el.getAttribute('rel') !== 'ugc nofollow noopener') {
      problems.push(`unexpected rel ${el.getAttribute('rel')}`);
    }
    if (name === 'a' && el.getAttribute('href') !== null) {
      // Anti-spam and tab-nabbing: every link the browser resolves off-site carries the external rel.
      let leaves = false;
      try {
        const url = new URL(el.getAttribute('href') as string, BASE);
        // `host` includes a non-default port: another port is another origin.
        leaves = url.protocol === 'mailto:' || !INTERNAL_HOSTS.has(url.host.replace(/\.(?=:|$)/, ''));
      } catch {
        leaves = false;
      }
      if (leaves && el.getAttribute('rel') !== 'ugc nofollow noopener') {
        problems.push(`external link without rel: ${el.getAttribute('href')}`);
      }
    }
    // Nested interactive content: two focus targets and conflicting activation for one click.
    const container = el.parentElement?.closest('a, summary, [role="button"]');
    if (name === 'a' && container && container.localName !== 'summary') problems.push('link inside a link or button');
    if ((name === 'input' || el.getAttribute('role') === 'button') && container) {
      problems.push(`interactive <${name}> inside <${container.localName}>`);
    }
    const id = el.getAttribute('id');
    if (id !== null && !/^md-/.test(id) && !/^[a-z][a-z0-9-]*-/.test(id)) problems.push(`unprefixed id ${id}`);
  }
}

/** What a browser serialises back after parsing `html` as a body fragment (DOM equality check). */
export function canonicalHtml(html: string): string {
  return fragment(html).body.innerHTML;
}

/** Parses rendered HTML into a fresh document body for structural assertions. */
export function parseHtml(html: string): HTMLElement {
  const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>', { url: BASE });
  dom.window.document.body.innerHTML = html;
  return dom.window.document.body;
}
