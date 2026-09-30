/**
 * Markdown-lite helpers of the editors (PLAN §7.6): the toolbar edits and the conversion of a
 * stored lite HTML back to its Markdown source.
 *
 * Public DTOs carry only the sanitised HTML (`bodyHtml`), so «Edit» rebuilds the source from it.
 * The lite profile is small (paragraphs, bold, italic, strikethrough, code, fenced code, links,
 * mentions, lists, quotes, spoilers, line breaks), so the round trip is faithful for everything
 * the editor can write. The DOM is only read (a detached `<template>`), never inserted.
 */

export type ToolbarAction = 'bold' | 'italic' | 'code' | 'link' | 'list' | 'quote' | 'spoiler';

export interface TextEdit {
  value: string;
  selectionStart: number;
  selectionEnd: number;
}

const WRAPS: Partial<Record<ToolbarAction, readonly [string, string]>> = {
  bold: ['**', '**'],
  italic: ['*', '*'],
  code: ['`', '`'],
  spoiler: ['||', '||'],
};

function wrap(edit: TextEdit, before: string, after: string, placeholder: string): TextEdit {
  const { value, selectionStart: start, selectionEnd: end } = edit;
  const selected = value.slice(start, end);
  // Toggle off when the selection is already wrapped.
  if (value.slice(start - before.length, start) === before && value.slice(end, end + after.length) === after) {
    return {
      value: value.slice(0, start - before.length) + selected + value.slice(end + after.length),
      selectionStart: start - before.length,
      selectionEnd: end - before.length,
    };
  }
  const text = selected || placeholder;
  return {
    value: value.slice(0, start) + before + text + after + value.slice(end),
    selectionStart: start + before.length,
    selectionEnd: start + before.length + text.length,
  };
}

function prefixLines(edit: TextEdit, prefix: string): TextEdit {
  const { value, selectionStart, selectionEnd } = edit;
  const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;
  const nextBreak = value.indexOf('\n', selectionEnd);
  const lineEnd = nextBreak === -1 ? value.length : nextBreak;
  const lines = value.slice(lineStart, lineEnd).split('\n');
  const all = lines.every((line) => line.startsWith(prefix));
  const changed = lines.map((line) => (all ? line.slice(prefix.length) : prefix + line)).join('\n');
  // A block needs a blank line before it to start a list or quote.
  const needsGap =
    !all && lineStart > 0 && value.slice(0, lineStart) !== '' && !value.slice(0, lineStart).endsWith('\n\n');
  const gap = needsGap ? '\n' : '';
  const next = value.slice(0, lineStart) + gap + changed + value.slice(lineEnd);
  return {
    value: next,
    selectionStart: lineStart + gap.length,
    selectionEnd: lineStart + gap.length + changed.length,
  };
}

/** Applies a toolbar action to the textarea state. `placeholder` is the localised sample text. */
export function applyToolbar(action: ToolbarAction, edit: TextEdit, placeholder: string): TextEdit {
  const pair = WRAPS[action];
  if (pair) return wrap(edit, pair[0], pair[1], placeholder);
  if (action === 'list') return prefixLines(edit, '- ');
  if (action === 'quote') return prefixLines(edit, '> ');
  // Link: the selection becomes the text; the URL placeholder is selected for typing.
  const { value, selectionStart: start, selectionEnd: end } = edit;
  const selected = value.slice(start, end);
  if (/^https?:\/\/\S+$/.test(selected)) {
    const next = `${value.slice(0, start)}[${placeholder}](${selected})${value.slice(end)}`;
    return { value: next, selectionStart: start + 1, selectionEnd: start + 1 + placeholder.length };
  }
  const text = selected || placeholder;
  const url = 'https://';
  const next = `${value.slice(0, start)}[${text}](${url})${value.slice(end)}`;
  const urlStart = start + text.length + 3;
  return { value: next, selectionStart: urlStart, selectionEnd: urlStart + url.length };
}

/** `Ctrl/Cmd + key` shortcuts of the toolbar. */
export function shortcutOf(event: {
  key: string;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
}): ToolbarAction | null {
  if (!(event.ctrlKey || event.metaKey) || event.altKey) return null;
  const key = event.key.toLowerCase();
  if (!event.shiftKey && key === 'b') return 'bold';
  if (!event.shiftKey && key === 'i') return 'italic';
  if (!event.shiftKey && key === 'k') return 'link';
  if (!event.shiftKey && key === 'e') return 'code';
  if (event.shiftKey && key === 's') return 'spoiler';
  return null;
}

// ---------------------------------------------------------------------------------------------
// Lite HTML → Markdown
// ---------------------------------------------------------------------------------------------

/** Escapes what Markdown would otherwise interpret in plain text. */
function escapeText(text: string): string {
  return text.replace(/([\\`*_[\]|~])/g, '\\$1').replace(/^(\s*)([#>+-]|\d+[.)])(\s)/gm, '$1\\$2$3');
}

function codeSpan(text: string): string {
  const longest = Math.max(0, ...(text.match(/`+/g) ?? []).map((run) => run.length));
  const fence = '`'.repeat(longest + 1);
  const pad = text.startsWith('`') || text.endsWith('`') ? ' ' : '';
  return `${fence}${pad}${text}${pad}${fence}`;
}

function inline(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) return escapeText((node.textContent ?? '').replace(/\n/g, ' '));
  if (!(node instanceof Element)) return '';
  const children = () => Array.from(node.childNodes, inline).join('');
  const tag = node.tagName.toLowerCase();
  // Label placeholders of the pipeline (e.g. localised spoiler names) are not content.
  if (node.hasAttribute('data-md-label') && !node.classList.contains('md-spoiler')) return '';
  switch (tag) {
    case 'strong':
    case 'b':
      return `**${children()}**`;
    case 'em':
    case 'i':
      return `*${children()}*`;
    case 'del':
    case 's':
      return `~~${children()}~~`;
    case 'code':
      return codeSpan(node.textContent ?? '');
    case 'br':
      return '\\\n';
    case 'img': {
      const alt = node.getAttribute('alt') ?? '';
      const src = node.getAttribute('src') ?? '';
      return src ? `![${escapeText(alt)}](${src})` : '';
    }
    case 'a': {
      const href = node.getAttribute('href') ?? '';
      const text = node.textContent ?? '';
      if (node.classList.contains('md-mention') || /^@[\w.-]+$/.test(text)) return text;
      if (!href || href === text || node.classList.contains('md-youtube-link')) return href || text;
      return `[${children()}](${href.replace(/\)/g, '%29').replace(/ /g, '%20')})`;
    }
    case 'span':
      if (node.classList.contains('md-spoiler')) {
        const content = Array.from(node.childNodes)
          .filter((child) => !(child instanceof Element && child.hasAttribute('data-md-label')))
          .map(inline)
          .join('');
        return `||${content}||`;
      }
      return children();
    default:
      return children();
  }
}

function block(node: Node, depth = 0): string {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = (node.textContent ?? '').trim();
    return text ? escapeText(text) : '';
  }
  if (!(node instanceof Element)) return '';
  const tag = node.tagName.toLowerCase();
  const blocks = () =>
    Array.from(node.childNodes, (child) => block(child, depth))
      .filter((part) => part !== '')
      .join('\n\n');
  switch (tag) {
    case 'p':
      return inline(node).trim();
    case 'pre': {
      const code = node.textContent ?? '';
      const longest = Math.max(2, ...(code.match(/`+/g) ?? []).map((run) => run.length));
      const fence = '`'.repeat(longest + 1);
      return `${fence}\n${code.replace(/\n$/, '')}\n${fence}`;
    }
    case 'blockquote':
      return blocks()
        .split('\n')
        .map((line) => (line ? `> ${line}` : '>'))
        .join('\n');
    case 'ul':
    case 'ol': {
      const ordered = tag === 'ol';
      const startAttr = Number.parseInt(node.getAttribute('start') ?? '1', 10);
      let index = Number.isFinite(startAttr) ? startAttr : 1;
      const items: string[] = [];
      for (const child of Array.from(node.children)) {
        if (child.tagName.toLowerCase() !== 'li') continue;
        const marker = ordered ? `${index}. ` : '- ';
        index += 1;
        const inner = Array.from(child.childNodes)
          .map((part) =>
            part instanceof Element && ['ul', 'ol', 'p', 'pre', 'blockquote'].includes(part.tagName.toLowerCase())
              ? `\n${block(part, depth + 1)}`
              : inline(part),
          )
          .join('')
          .trim();
        const indent = ' '.repeat(marker.length);
        items.push(
          marker +
            inner
              .split('\n')
              .map((line, lineIndex) => (lineIndex === 0 || line === '' ? line : indent + line))
              .join('\n'),
        );
      }
      return items.join('\n');
    }
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      // Not part of lite; kept as bold text so nothing is lost.
      return `**${inline(node).trim()}**`;
    case 'hr':
      return '---';
    case 'div':
    case 'section':
    case 'details':
      return blocks();
    default:
      return inline(node).trim();
  }
}

/** Markdown source of a stored lite HTML body. */
export function htmlToMarkdown(html: string): string {
  if (!html || typeof document === 'undefined') return '';
  const template = document.createElement('template');
  template.innerHTML = html;
  return Array.from(template.content.childNodes, (node) => block(node))
    .filter((part) => part !== '')
    .join('\n\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** The `@handle` being typed at the caret, if any (`MENTION_PATTERN` of @sotf/markdown). */
export function mentionAt(value: string, caret: number): { start: number; query: string } | null {
  const before = value.slice(0, caret);
  const match = /(^|[^\p{L}\p{N}_@./+-])@([A-Za-z0-9][A-Za-z0-9_.-]{0,38})?$/u.exec(before);
  if (!match) return null;
  const query = match[2] ?? '';
  return { start: caret - query.length - 1, query };
}

/** Replaces the mention being typed with `@handle `. */
export function insertMention(value: string, caret: number, start: number, handle: string): TextEdit {
  const text = `@${handle} `;
  const next = value.slice(0, start) + text + value.slice(caret).replace(/^\S*/, '');
  const position = start + text.length;
  return { value: next, selectionStart: position, selectionEnd: position };
}
