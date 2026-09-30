/**
 * Markdown-lite editor of comments, reviews and author replies (PLAN §7.6, research/03 §5.8):
 *
 * - toolbar (bold, italic, code, link, list, quote, spoiler) with `Ctrl/Cmd` shortcuts, a roving
 *   tab stop (`role=toolbar`, arrow keys) and a visible character counter (announced near the
 *   limit);
 * - «Write» / «Preview» tabs: the preview is rendered by the server pipeline
 *   (`POST /api/v2/markdown/preview`, same output as saving);
 * - `@mention` autocomplete (`aria-autocomplete=list` + active descendant, count announced):
 *   thread participants first, then the
 *   handle search (`GET /api/v2/search?types=user`); arrows, Enter/Tab to pick, Escape closes;
 * - `Ctrl/Cmd + Enter` submits.
 */

import { ProseLocator } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { Bold, Code, EyeOff, Italic, Link2, List, Quote } from 'lucide-react';
import { type KeyboardEvent, type ReactNode, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { api, type Failure, get } from './lib/api.ts';
import { formatNumber, localized } from './lib/i18n.tsx';
import {
  applyToolbar,
  insertMention,
  mentionAt,
  shortcutOf,
  type TextEdit,
  type ToolbarAction,
} from './lib/markdown.ts';
import { t } from './lib/messages.ts';
import { FailureNote } from './lib/ui.tsx';

export interface MentionCandidate {
  handle: string;
  displayName: string;
}

export interface ComposerProps {
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  /** Visible label of the textarea. */
  label: string;
  /** Hide the label visually (still the accessible name). */
  labelHidden?: boolean;
  placeholder?: string;
  /** Participants of the thread, suggested first for `@mentions`. */
  participants?: readonly MentionCandidate[];
  /** Search handles on the site when the participants do not match (default true). */
  searchMentions?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  /** Ctrl/Cmd + Enter. */
  onSubmitShortcut?: () => void;
  /** Extra id(s) for `aria-describedby` (e.g. a field error). */
  describedBy?: string;
  invalid?: boolean;
  minRows?: number;
  /** Rendered under the textarea (images, options). */
  footer?: ReactNode;
}

const TOOLS: ReadonlyArray<{ action: ToolbarAction; icon: typeof Bold; label: () => string; keys: string }> = [
  { action: 'bold', icon: Bold, label: () => t('social_editor_bold'), keys: 'B' },
  { action: 'italic', icon: Italic, label: () => t('social_editor_italic'), keys: 'I' },
  { action: 'code', icon: Code, label: () => t('social_editor_code'), keys: 'E' },
  { action: 'link', icon: Link2, label: () => t('social_editor_link'), keys: 'K' },
  { action: 'list', icon: List, label: () => t('social_editor_list'), keys: '' },
  { action: 'quote', icon: Quote, label: () => t('social_editor_quote'), keys: '' },
  { action: 'spoiler', icon: EyeOff, label: () => t('social_editor_spoiler'), keys: 'Shift+S' },
];

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

interface SearchHit {
  type: string;
  title: string;
  subtitle: string | null;
  path: string;
}

function handleFromHit(hit: SearchHit): string | null {
  const match = /^\/profile\/([^/?#]+)$/.exec(hit.path);
  if (match?.[1]) return decodeURIComponent(match[1]);
  if (hit.subtitle?.startsWith('@')) return hit.subtitle.slice(1);
  return null;
}

export function Composer({
  value,
  onChange,
  maxLength,
  label,
  labelHidden = false,
  placeholder,
  participants = [],
  searchMentions = true,
  autoFocus = false,
  disabled = false,
  onSubmitShortcut,
  describedBy,
  invalid = false,
  minRows = 4,
  footer,
}: ComposerProps) {
  const id = useId();
  const textareaId = `${id}-text`;
  const counterId = `${id}-count`;
  const listboxId = `${id}-mentions`;
  const textarea = useRef<HTMLTextAreaElement | null>(null);
  const pendingSelection = useRef<{ start: number; end: number } | null>(null);
  const [tab, setTab] = useState<'write' | 'preview'>('write');
  const [focusTool, setFocusTool] = useState(0);
  const toolRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Preview ---------------------------------------------------------------------------------
  const [preview, setPreview] = useState<{ md: string; html: string } | null>(null);
  const [previewFailure, setPreviewFailure] = useState<Failure | null>(null);
  const [previewLoading, setPreviewLoading] = useState(false);

  const loadPreview = useCallback(async () => {
    if (preview?.md === value) return;
    if (!value.trim()) {
      setPreview({ md: value, html: '' });
      return;
    }
    setPreviewLoading(true);
    setPreviewFailure(null);
    const result = await api<{ html: string }>('POST', '/api/v2/markdown/preview', { md: value, profile: 'lite' });
    setPreviewLoading(false);
    if (result.ok) setPreview({ md: value, html: result.data.html });
    else setPreviewFailure(result);
  }, [preview, value]);

  useEffect(() => {
    if (tab === 'preview') void loadPreview();
  }, [tab, loadPreview]);

  // Selection restore after programmatic edits ----------------------------------------------
  useEffect(() => {
    const selection = pendingSelection.current;
    const element = textarea.current;
    if (!selection || !element) return;
    pendingSelection.current = null;
    element.focus();
    element.setSelectionRange(selection.start, selection.end);
  });

  const commit = (edit: TextEdit) => {
    pendingSelection.current = { start: edit.selectionStart, end: edit.selectionEnd };
    onChange(edit.value);
  };

  const runTool = (action: ToolbarAction) => {
    const element = textarea.current;
    if (!element || disabled) return;
    if (tab !== 'write') setTab('write');
    const placeholderText = action === 'link' ? t('social_editor_link_text') : t('social_editor_sample');
    commit(
      applyToolbar(
        action,
        { value, selectionStart: element.selectionStart, selectionEnd: element.selectionEnd },
        placeholderText,
      ),
    );
  };

  // Mentions --------------------------------------------------------------------------------
  const [mention, setMention] = useState<{ start: number; query: string } | null>(null);
  const [remote, setRemote] = useState<MentionCandidate[]>([]);
  const [active, setActive] = useState(0);

  const local = useMemo(() => {
    if (!mention) return [];
    const query = mention.query.toLowerCase();
    const seen = new Set<string>();
    const out: MentionCandidate[] = [];
    for (const person of participants) {
      const key = person.handle.toLowerCase();
      if (seen.has(key)) continue;
      if (key.startsWith(query) || person.displayName.toLowerCase().startsWith(query)) {
        seen.add(key);
        out.push(person);
      }
    }
    return out.slice(0, 6);
  }, [mention, participants]);

  useEffect(() => {
    if (!mention || !searchMentions || mention.query.length < 2) {
      setRemote([]);
      return;
    }
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      const params = new URLSearchParams({ q: mention.query, types: 'user', limit: '6' });
      const result = await get<{ hits: SearchHit[] }>(`/api/v2/search?${params.toString()}`, controller.signal);
      if (!result.ok || controller.signal.aborted) return;
      const people: MentionCandidate[] = [];
      for (const hit of result.data.hits) {
        if (hit.type !== 'user') continue;
        const handle = handleFromHit(hit);
        if (handle) people.push({ handle, displayName: hit.title });
      }
      setRemote(people);
    }, 200);
    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [mention, searchMentions]);

  const suggestions = useMemo(() => {
    const seen = new Set(local.map((person) => person.handle.toLowerCase()));
    return [...local, ...remote.filter((person) => !seen.has(person.handle.toLowerCase()))].slice(0, 8);
  }, [local, remote]);
  const open = mention !== null && suggestions.length > 0 && tab === 'write';

  useEffect(() => {
    setActive(0);
  }, [suggestions]);

  const trackMention = (element: HTMLTextAreaElement) => {
    if (element.selectionStart !== element.selectionEnd) {
      setMention(null);
      return;
    }
    setMention(mentionAt(element.value, element.selectionStart));
  };

  const pick = (person: MentionCandidate) => {
    const element = textarea.current;
    if (!element || !mention) return;
    commit(insertMention(value, element.selectionStart, mention.start, person.handle));
    setMention(null);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (open) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const step = event.key === 'ArrowDown' ? 1 : -1;
        setActive((current) => (current + step + suggestions.length) % suggestions.length);
        return;
      }
      if (event.key === 'Enter' || event.key === 'Tab') {
        const person = suggestions[active];
        if (person) {
          event.preventDefault();
          pick(person);
          return;
        }
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        setMention(null);
        return;
      }
    }
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      onSubmitShortcut?.();
      return;
    }
    const action = shortcutOf(event);
    if (action) {
      event.preventDefault();
      runTool(action);
    }
  };

  // Toolbar roving focus --------------------------------------------------------------------
  const onToolbarKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1, Home: -Infinity, End: Infinity };
    const step = keys[event.key];
    if (step === undefined) return;
    event.preventDefault();
    const rtl = document.documentElement.dir === 'rtl';
    const last = TOOLS.length - 1;
    let next: number;
    if (step === -Infinity) next = 0;
    else if (step === Infinity) next = last;
    else next = (focusTool + (rtl ? -step : step) + TOOLS.length) % TOOLS.length;
    setFocusTool(next);
    toolRefs.current[next]?.focus();
  };

  const length = value.length;
  const nearLimit = length >= maxLength * 0.9;
  const over = length > maxLength;
  const modifier = isMac ? '⌘' : 'Ctrl';
  const activeId = open ? `${listboxId}-${active}` : undefined;

  return (
    <div className="grid gap-1.5">
      <label htmlFor={textareaId} className={labelHidden ? 'sr-only' : 'text-sm font-semibold'}>
        {label}
      </label>
      <div
        className={`grid rounded-md border bg-sunken focus-within:border-focus ${invalid || over ? 'border-danger' : 'border-border-strong'}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-1 border-b border-border px-1 py-1">
          <div role="tablist" aria-label={t('social_editor_mode')} className="flex gap-1">
            {(['write', 'preview'] as const).map((value) => (
              <button
                key={value}
                type="button"
                role="tab"
                id={`${id}-tab-${value}`}
                aria-selected={tab === value}
                aria-controls={`${id}-panel-${value}`}
                tabIndex={tab === value ? 0 : -1}
                onClick={() => setTab(value)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                    event.preventDefault();
                    const next = tab === 'write' ? 'preview' : 'write';
                    setTab(next);
                    document.getElementById(`${id}-tab-${next}`)?.focus();
                  }
                }}
                className="inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium text-fg-muted aria-selected:bg-raised aria-selected:text-fg md:min-h-8"
              >
                {value === 'write' ? t('social_editor_write') : t('social_editor_preview')}
              </button>
            ))}
          </div>
          <div
            role="toolbar"
            aria-label={t('social_editor_toolbar')}
            aria-controls={textareaId}
            onKeyDown={onToolbarKey}
            className="flex flex-wrap items-center gap-0.5"
          >
            {TOOLS.map((tool, index) => {
              const name = tool.label();
              const hint = tool.keys ? `${name} (${modifier}+${tool.keys})` : name;
              return (
                <button
                  key={tool.action}
                  ref={(element) => {
                    toolRefs.current[index] = element;
                  }}
                  type="button"
                  tabIndex={index === focusTool ? 0 : -1}
                  aria-label={name}
                  title={hint}
                  disabled={disabled}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    setFocusTool(index);
                    runTool(tool.action);
                  }}
                  className="inline-flex size-11 items-center justify-center rounded-sm text-fg-muted hover:bg-fg/8 hover:text-fg disabled:opacity-50 md:size-8"
                >
                  <Icon icon={tool.icon} size={16} />
                </button>
              );
            })}
          </div>
        </div>
        <div
          id={`${id}-panel-write`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-write`}
          hidden={tab !== 'write'}
          className="relative"
        >
          <textarea
            ref={textarea}
            id={textareaId}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            // biome-ignore lint/a11y/noAutofocus: opened on demand (reply / edit), focus follows the action.
            autoFocus={autoFocus}
            rows={minRows}
            aria-autocomplete="list"
            aria-controls={open ? listboxId : undefined}
            aria-activedescendant={activeId}
            aria-invalid={invalid || over || undefined}
            aria-describedby={[counterId, describedBy].filter(Boolean).join(' ')}
            onChange={(event) => {
              onChange(event.target.value);
              trackMention(event.target);
            }}
            onKeyDown={onKeyDown}
            onClick={(event) => trackMention(event.currentTarget)}
            onKeyUp={(event) => {
              if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) trackMention(event.currentTarget);
            }}
            onBlur={() => window.setTimeout(() => setMention(null), 150)}
            className="block max-h-[24rem] min-h-28 w-full resize-y bg-transparent px-3 py-2 text-sm leading-relaxed text-fg outline-none [field-sizing:content] placeholder:text-fg-subtle"
          />
          <p className="sr-only" role="status" aria-live="polite">
            {open ? t('social_editor_mentions_count', { count: suggestions.length }) : ''}
          </p>
          {open ? (
            <div
              id={listboxId}
              role="listbox"
              aria-label={t('social_editor_mentions')}
              className="absolute inset-x-2 top-full z-(--z-dropdown) mt-1 max-h-64 overflow-y-auto rounded-md border border-border-strong bg-raised p-1 shadow-lg"
            >
              {suggestions.map((person, index) => (
                <div
                  key={person.handle}
                  id={`${listboxId}-${index}`}
                  role="option"
                  tabIndex={-1}
                  aria-selected={index === active}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    pick(person);
                  }}
                  onMouseEnter={() => setActive(index)}
                  className="flex min-h-11 cursor-pointer items-center gap-2 rounded-sm px-2 text-sm aria-selected:bg-fg/8 md:min-h-9"
                >
                  <span className="font-semibold">{person.displayName}</span>
                  <span className="text-fg-muted">@{person.handle}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div
          id={`${id}-panel-preview`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-preview`}
          aria-busy={previewLoading || undefined}
          hidden={tab !== 'preview'}
          className="min-h-28 px-3 py-2"
        >
          {previewFailure ? (
            <FailureNote failure={previewFailure} onRetry={() => void loadPreview()} />
          ) : previewLoading && preview?.md !== value ? (
            <p className="text-sm text-fg-muted">{t('social_editor_preview_loading')}</p>
          ) : preview?.html ? (
            <ProseLocator html={localized(preview.html)} size="sm" />
          ) : (
            <p className="text-sm text-fg-muted">{t('social_editor_preview_empty')}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-2 text-xs text-fg-muted">
        <p>{t('social_editor_hint', { modifier })}</p>
        <p
          id={counterId}
          className={`tabular-nums ${over ? 'font-semibold text-danger' : nearLimit ? 'text-warning' : ''}`}
          aria-live={nearLimit ? 'polite' : 'off'}
        >
          {t('social_editor_counter', { count: formatNumber(length), max: formatNumber(maxLength) })}
        </p>
      </div>
      {footer}
    </div>
  );
}
