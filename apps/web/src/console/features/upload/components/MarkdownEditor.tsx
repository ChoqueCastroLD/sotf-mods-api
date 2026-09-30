/**
 * The Markdown editor chunk (loaded on demand by `MarkdownField`): CodeMirror 6 with Markdown
 * highlighting and a live preview rendered by `@sotf/markdown` — the same pipeline the API uses
 * when it saves, so what the creator sees is what the page will show.
 */
import { markdownKeymap, markdownLanguage, pasteURLAsLink } from '@codemirror/lang-markdown';
import { EditorView, keymap } from '@codemirror/view';
import { cn } from '@sotf/ui/cn';
import { ProseLocator } from '@sotf/ui/domain/content';
import CodeMirror from '@uiw/react-codemirror';
import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { ut } from '../i18n.ts';

export interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  labelId: string;
  describedBy?: string;
  placeholder?: string;
  maxLength: number;
  /** `preview` hides the editor on narrow screens (the field's toggle). */
  view: 'write' | 'preview';
  minHeight: string;
  /** Heading-id prefix of the preview (`md-desc-`, `md-cl-`). */
  idPrefix: string;
}

/**
 * Markdown support without `markdown()`: that helper wires `@codemirror/lang-html` (HTML tag
 * completion and embedded HTML/CSS/JS highlighting), which tripled the chunk. The GFM language,
 * list/quote continuation on Enter and URL-paste-as-link are all the editor needs; tree-shaking
 * drops lang-html/css/javascript because nothing here references them.
 */
const markdownSupport = [markdownLanguage.extension, keymap.of(markdownKeymap), pasteURLAsLink];

const theme = EditorView.theme({
  '&': {
    color: 'var(--color-fg)',
    backgroundColor: 'var(--color-sunken)',
    fontSize: '0.875rem',
    borderRadius: 'var(--radius-md)',
  },
  '&.cm-focused': { outline: '2px solid var(--color-focus)', outlineOffset: '2px' },
  '.cm-content': { fontFamily: 'var(--font-mono)', padding: '0.75rem 0', caretColor: 'var(--color-fg)' },
  '.cm-line': { padding: '0 0.75rem' },
  '.cm-gutters': { display: 'none' },
  '.cm-activeLine': { backgroundColor: 'color-mix(in oklab, var(--color-fg) 4%, transparent)' },
  '.cm-selectionBackground, &.cm-focused .cm-selectionBackground, ::selection': {
    backgroundColor: 'var(--color-selection)',
  },
  '.cm-cursor': { borderLeftColor: 'var(--color-fg)' },
  '.cm-placeholder': { color: 'var(--color-fg-subtle)' },
});

export default function MarkdownEditor({
  value,
  onChange,
  labelId,
  describedBy,
  placeholder,
  maxLength,
  view,
  minHeight,
  idPrefix,
}: MarkdownEditorProps) {
  const deferred = useDeferredValue(value);
  // The rendering pipeline is its own chunk: the editor is usable before it arrives.
  // `@sotf/markdown/preview` is the pipeline without rehype-raw/parse5 (never needed for `full`).
  const [render, setRender] = useState<typeof import('@sotf/markdown/preview').renderPreview | null>(null);
  useEffect(() => {
    let alive = true;
    import('@sotf/markdown/preview').then(
      (mod) => {
        if (alive) setRender(() => mod.renderPreview);
      },
      () => {},
    );
    return () => {
      alive = false;
    };
  }, []);
  const preview = useMemo(() => {
    if (!deferred.trim() || !render) return null;
    try {
      return render(deferred.slice(0, maxLength), { profile: 'full', idPrefix }).html;
    } catch {
      // Input the pipeline refuses (over its hard ceiling): no preview rather than a crash.
      return null;
    }
  }, [deferred, maxLength, idPrefix, render]);

  const extensions = useMemo(
    () => [
      markdownSupport,
      EditorView.lineWrapping,
      theme,
      EditorView.contentAttributes.of({
        'aria-labelledby': labelId,
        ...(describedBy ? { 'aria-describedby': describedBy } : {}),
        'aria-multiline': 'true',
        role: 'textbox',
        spellcheck: 'true',
      }),
    ],
    [labelId, describedBy],
  );

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <div className={cn('min-w-0', view === 'preview' && 'max-lg:hidden')}>
        <CodeMirror
          value={value}
          onChange={(next) => onChange(next.length > maxLength ? next.slice(0, maxLength) : next)}
          extensions={extensions}
          theme="none"
          minHeight={minHeight}
          maxHeight="70vh"
          indentWithTab={false}
          basicSetup={{
            lineNumbers: false,
            foldGutter: false,
            highlightActiveLineGutter: false,
            autocompletion: false,
            searchKeymap: true,
            bracketMatching: true,
          }}
          {...(placeholder ? { placeholder } : {})}
          className="rounded-md border border-border-strong"
        />
      </div>
      <section
        aria-label={ut('upload_markdown_preview')}
        className={cn(
          'min-w-0 overflow-auto rounded-md border border-border bg-raised p-4',
          view === 'write' && 'max-lg:hidden',
        )}
        style={{ minHeight, maxHeight: '70vh' }}
      >
        {preview ? (
          <ProseLocator html={preview} size="sm" />
        ) : (
          <p className="text-sm text-fg-subtle">{ut('upload_markdown_preview_empty')}</p>
        )}
      </section>
    </div>
  );
}
