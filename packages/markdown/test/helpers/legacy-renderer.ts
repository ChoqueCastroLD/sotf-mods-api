/**
 * The legacy site's Markdown renderer, reproduced exactly (test oracle only, never shipped):
 * showdown 2.1.0 with the options and the blank-line preprocessing of `markdownToHTML` in the
 * legacy frontend (`src/static/scripts/shared.js`). Its output, parsed by a browser, is the
 * structure users saw on sotf-mods.com.
 */
import showdown from 'showdown';

const converter = new showdown.Converter({
  simpleLineBreaks: true,
  smoothLivePreview: true,
  simplifiedAutoLink: true,
  noHeaderId: true,
  tasklists: true,
});

export function legacyMarkdownToHtml(text: string): string {
  const lineBreakToken = 'SOTFLEGACYLINEBREAKTOKEN';
  const joined = text
    .split('\n')
    .map((line) => (line.trim() === '' ? lineBreakToken : `\n${line}`))
    .join('');
  return converter.makeHtml(joined).replaceAll('\n', '').replaceAll(lineBreakToken, '<br>');
}
