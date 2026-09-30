/**
 * Sanitized HTML → compact Markdown, for the `.md` alternates (PLAN §8.7). The input is always
 * the output of `@sotf/markdown` (a closed set of tags, attributes already safe), so a small
 * tokenizer is enough: headings, paragraphs, lists (nested), links, emphasis, code, quotes,
 * images, rules and tables (as rows of text). Unknown tags keep their text.
 */
import { decodeEntities } from '@sotf/markdown';

const TAG = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:\s+[^\s=>/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>/g;
const ATTR = /([^\s=]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;

function attrsOf(source: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const match of source.matchAll(ATTR)) {
    const name = (match[1] ?? '').toLowerCase();
    out[name] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return out;
}

/** Escapes Markdown control characters in running text. */
function escapeText(text: string): string {
  return text.replace(/([\\`*_[\]<>])/g, '\\$1');
}

interface ListFrame {
  ordered: boolean;
  index: number;
}

/**
 * Converts the HTML to Markdown. Links are made absolute against `siteUrl` when relative (the
 * `.md` is read out of context by crawlers and LLM tools).
 */
export function htmlToMarkdown(html: string, siteUrl: string): string {
  const base = siteUrl.replace(/\/+$/, '');
  const absolute = (href: string) => (href.startsWith('/') && !href.startsWith('//') ? `${base}${href}` : href);
  let out = '';
  const lists: ListFrame[] = [];
  const links: Array<{ href: string; start: number }> = [];
  let pre = 0;
  let skip = 0;
  let last = 0;

  const block = (prefix = '') => {
    out = out.replace(/[ \t]+$/g, '');
    if (out.length > 0 && !out.endsWith('\n\n')) out += out.endsWith('\n') ? '\n' : '\n\n';
    out += prefix;
  };
  const lineBreak = () => {
    out = out.replace(/[ \t]+$/g, '');
    out += '\n';
    const indent = '  '.repeat(Math.max(0, lists.length - 1));
    if (lists.length > 0) out += `${indent}  `;
  };

  const text = (raw: string) => {
    if (skip > 0 || raw.length === 0) return;
    const decoded = decodeEntities(raw);
    if (pre > 0) {
      out += decoded;
      return;
    }
    const collapsed = decoded.replace(/\s+/g, ' ');
    if (collapsed.trim() === '' && (out.endsWith('\n') || out.endsWith(' ') || out.length === 0)) return;
    out += escapeText(collapsed);
  };

  for (const match of html.matchAll(TAG)) {
    text(html.slice(last, match.index));
    last = (match.index ?? 0) + match[0].length;
    const closing = match[1] === '/';
    const tag = (match[2] ?? '').toLowerCase();
    const attributes = attrsOf(match[3] ?? '');

    if (tag === 'script' || tag === 'style' || tag === 'svg' || tag === 'template') {
      skip += closing ? -1 : 1;
      skip = Math.max(0, skip);
      continue;
    }
    if (skip > 0) continue;

    switch (tag) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        if (closing) out += '\n\n';
        // Descriptions start at h2 (the page owns the h1); keep the level, one step below the title.
        else block(`${'#'.repeat(Math.min(6, Number(tag.slice(1)) + 1))} `);
        break;
      case 'p':
      case 'div':
      case 'section':
      case 'details':
      case 'figure':
        if (!closing) block();
        else if (lists.length === 0) out += '\n\n';
        break;
      case 'summary':
        if (!closing) block('**');
        else out += '**\n\n';
        break;
      case 'br':
        lineBreak();
        break;
      case 'hr':
        block('---\n\n');
        break;
      case 'strong':
      case 'b':
        out += '**';
        break;
      case 'em':
      case 'i':
        out += '_';
        break;
      case 'del':
      case 's':
        out += '~~';
        break;
      case 'code':
        if (pre === 0) out += '`';
        break;
      case 'pre':
        if (!closing) {
          block('```\n');
          pre++;
        } else {
          pre = Math.max(0, pre - 1);
          out = out.replace(/\n*$/, '');
          out += '\n```\n\n';
        }
        break;
      case 'blockquote':
        if (!closing) block('> ');
        else out += '\n\n';
        break;
      case 'ul':
      case 'ol':
        if (!closing) {
          if (lists.length === 0) block();
          lists.push({ ordered: tag === 'ol', index: Number(attributes.start ?? 1) || 1 });
        } else {
          lists.pop();
          if (lists.length === 0) out += '\n\n';
        }
        break;
      case 'li': {
        if (closing) break;
        const frame = lists[lists.length - 1];
        out = out.replace(/[ \t]+$/g, '');
        if (!out.endsWith('\n')) out += '\n';
        const indent = '  '.repeat(Math.max(0, lists.length - 1));
        if (frame?.ordered) {
          out += `${indent}${frame.index}. `;
          frame.index++;
        } else out += `${indent}- `;
        break;
      }
      case 'a':
        if (!closing) links.push({ href: absolute(attributes.href ?? ''), start: out.length });
        else {
          const link = links.pop();
          if (link?.href) {
            const label = out.slice(link.start).trim() || link.href;
            out = `${out.slice(0, link.start)}[${label}](${link.href.replace(/\)/g, '%29')})`;
          }
        }
        break;
      case 'img': {
        const src = attributes.src ? absolute(attributes.src) : '';
        if (src) out += `![${escapeText(attributes.alt ?? '')}](${src.replace(/\)/g, '%29')})`;
        break;
      }
      case 'table':
        if (!closing) block();
        else out += '\n';
        break;
      case 'tr':
        if (!closing) {
          out = out.replace(/[ \t]+$/g, '');
          if (out.length > 0 && !out.endsWith('\n')) out += '\n';
          out += '| ';
        }
        break;
      case 'td':
      case 'th':
        if (closing) out += ' | ';
        break;
      default:
        break;
    }
  }
  text(html.slice(last));

  return out
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
