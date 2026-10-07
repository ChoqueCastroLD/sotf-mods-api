/**
 * `/logs/:id` viewer: fetches the redacted text, parses it in the browser and renders only the
 * rows in view (windowed list with exact wrapped heights), so 100k-line logs stay smooth.
 *
 * Features: color-coded levels, line numbers, folded repeats, level chips with counts, search,
 * jump to the first error, wrap toggle, per-line copy and permalink (`#L123`), raw download, share
 * link, report, and "delete now" for the creator (token in the URL fragment or local storage, or
 * the signed-in author). Filters live in the URL (`?level=error&q=text`).
 */
import { type LogLine, parseLog } from '@sotf/contracts/log-parser';
import { Button, ButtonLink } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { ChevronRight, Copy, Download, Flag, Link2, Search, Trash2, TriangleAlert, WrapText, X } from 'lucide-react';
import { useCallback, useDeferredValue, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { toast } from '../../lib/client/toast.ts';
import { API_LOGS, fill, type LogLabels } from './labels.ts';
import {
  buildRows,
  displayText,
  foldHiding,
  LEVEL_FILTERS,
  type LevelFilter,
  passes,
  rowOffsets,
  rowOfLine,
  segmentsOf,
  visibleRange,
} from './model.ts';

export interface LogViewerProps {
  id: string;
  labels: LogLabels;
  basePath: string;
  firstErrorLine: number | null;
  counts: { error: number; warning: number; info: number; lines: number };
}

const LINE_HEIGHT = 20;
const OVERSCAN = 400;
/** Gutter (line number), level stripe and text padding in px: must match the row classes below. */
const GUTTER = 56;
/** Narrow screens give the text the width: a slimmer line-number gutter. */
const GUTTER_NARROW = 44;
const STRIPE = 3;
const PAD = 8 + 12;
const STORAGE_PREFIX = 'sotf.logs.del.';

const LEVEL_TEXT: Record<LogLine['level'], string> = {
  fatal: 'text-danger font-semibold',
  error: 'text-danger',
  warning: 'text-warning',
  info: 'text-fg',
  debug: 'text-fg-subtle',
};
const LEVEL_TAG: Record<LogLine['level'], string> = {
  fatal: 'text-danger font-bold',
  error: 'text-danger font-semibold',
  warning: 'text-warning font-semibold',
  info: 'text-success',
  debug: 'text-fg-subtle',
};

/** The columns of a line, colored: dim time, level tag by severity, linked-blue source, then the message. */
function LineText({ line, needle, dim }: { line: LogLine; needle: string; dim?: boolean }) {
  return (
    <>
      {segmentsOf(line).map((segment, index) => {
        const cls =
          segment.kind === 'time'
            ? 'text-fg-subtle'
            : segment.kind === 'level'
              ? LEVEL_TAG[line.level]
              : segment.kind === 'source'
                ? 'text-link'
                : `${LEVEL_TEXT[line.level]}${dim ? ' opacity-80' : ''}`;
        return (
          <span key={index} className={cls}>
            {segment.kind === 'body' ? highlight(displayText(segment.text), needle) : displayText(segment.text)}
          </span>
        );
      })}
    </>
  );
}
const LEVEL_STRIPE: Record<LogLine['level'], string> = {
  fatal: 'border-danger',
  error: 'border-danger',
  warning: 'border-warning',
  info: 'border-transparent',
  debug: 'border-transparent',
};

function readUrlState(): { level: LevelFilter; q: string } {
  const params = new URLSearchParams(location.search);
  const level = LEVEL_FILTERS.find((value) => value === params.get('level')) ?? 'all';
  return { level, q: (params.get('q') ?? '').slice(0, 200) };
}

function writeUrlState(level: LevelFilter, q: string): void {
  const params = new URLSearchParams(location.search);
  if (level === 'all') params.delete('level');
  else params.set('level', level);
  if (q) params.set('q', q);
  else params.delete('q');
  const query = params.toString();
  history.replaceState(null, '', `${location.pathname}${query ? `?${query}` : ''}${location.hash}`);
}

function lineFromHash(): number | null {
  const match = /^#L(\d{1,9})$/.exec(location.hash);
  return match ? Number(match[1]) : null;
}

async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function highlight(text: string, needle: string) {
  if (!needle) return text;
  const lower = text.toLowerCase();
  const parts: Array<string | { hit: string }> = [];
  let from = 0;
  for (;;) {
    const at = lower.indexOf(needle, from);
    if (at < 0) break;
    if (at > from) parts.push(text.slice(from, at));
    parts.push({ hit: text.slice(at, at + needle.length) });
    from = at + needle.length;
    if (parts.length > 200) break;
  }
  if (from === 0) return text;
  parts.push(text.slice(from));
  return parts.map((part, index) =>
    typeof part === 'string' ? (
      part
    ) : (
      <mark key={index} className="rounded-xs bg-warning-soft text-fg">
        {part.hit}
      </mark>
    ),
  );
}

export default function LogViewer({ id, labels, basePath, firstErrorLine, counts }: LogViewerProps) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [lines, setLines] = useState<LogLine[]>([]);
  const [level, setLevel] = useState<LevelFilter>('all');
  const [query, setQuery] = useState('');
  const [wrap, setWrap] = useState(false);
  const [expanded, setExpanded] = useState<ReadonlySet<number>>(() => new Set());
  const [active, setActive] = useState<number | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 560 });
  const [charWidth, setCharWidth] = useState(7.8);
  const [pendingJump, setPendingJump] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isOwner, setIsOwner] = useState(false);
  const [panel, setPanel] = useState<'none' | 'report' | 'delete'>('none');
  const [reason, setReason] = useState('personal_data');
  const [note, setNote] = useState('');
  const [panelBusy, setPanelBusy] = useState(false);
  const [panelMessage, setPanelMessage] = useState<string | null>(null);
  const scroller = useRef<HTMLDivElement | null>(null);
  const probe = useRef<HTMLSpanElement | null>(null);
  const jumpAttempts = useRef(0);

  const deferredQuery = useDeferredValue(query);
  const needle = deferredQuery.trim().toLowerCase();

  const flash = useCallback((message: string, ok = true) => {
    if (ok) toast.success(message);
    else toast.error(message);
  }, []);

  // Initial state: URL filters, wrap default by viewport, delete token, raw text.
  useEffect(() => {
    const url = readUrlState();
    setLevel(url.level);
    setQuery(url.q);
    setWrap(window.matchMedia('(max-width: 767px)').matches);
    const hash = /^#del=([\w-]{16,64})$/.exec(location.hash);
    let stored: string | null = null;
    try {
      if (hash?.[1]) {
        localStorage.setItem(`${STORAGE_PREFIX}${id}`, hash[1]);
        history.replaceState(null, '', `${location.pathname}${location.search}`);
      }
      stored = localStorage.getItem(`${STORAGE_PREFIX}${id}`);
    } catch {
      stored = hash?.[1] ?? null;
    }
    setToken(stored);
    const controller = new AbortController();
    fetch(`${API_LOGS}/${id}`, {
      credentials: 'same-origin',
      headers: { accept: 'application/json' },
      signal: controller.signal,
    })
      .then(async (response) => {
        if (response.ok) setIsOwner(Boolean(((await response.json()) as { isOwner?: boolean }).isOwner));
      })
      .catch(() => {});
    return () => controller.abort();
  }, [id]);

  const load = useCallback(() => {
    const controller = new AbortController();
    setStatus('loading');
    fetch(`${API_LOGS}/${id}/raw`, { credentials: 'same-origin', signal: controller.signal })
      .then(async (response) => {
        if (response.status === 404 || response.status === 410) {
          location.reload();
          return;
        }
        if (!response.ok) throw new Error(String(response.status));
        const parsed = parseLog(await response.text());
        setLines(parsed);
        setStatus('ready');
      })
      .catch((error: unknown) => {
        if ((error as { name?: string }).name !== 'AbortError') setStatus('error');
      });
    return () => controller.abort();
  }, [id]);
  useEffect(() => load(), [load]);

  // Size of the scroller and width of one monospace character.
  useLayoutEffect(() => {
    const element = scroller.current;
    if (!element || status !== 'ready') return;
    const measure = (): void => {
      setSize({ width: element.clientWidth, height: element.clientHeight });
      const span = probe.current;
      if (span) {
        const width = span.getBoundingClientRect().width / 100;
        if (width > 3) setCharWidth(width);
      }
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [status]);

  const rows = useMemo(() => buildRows(lines, level, deferredQuery, expanded), [lines, level, deferredQuery, expanded]);
  const gutter = size.width > 0 && size.width < 560 ? GUTTER_NARROW : GUTTER;
  const textWidth = Math.max(0, size.width - STRIPE - gutter - PAD);
  const charsPerRow = wrap ? Math.max(8, Math.floor(textWidth / charWidth - 0.05)) : null;
  const offsets = useMemo(() => rowOffsets(rows, LINE_HEIGHT, charsPerRow), [rows, charsPerRow]);
  const total = offsets[rows.length] ?? 0;
  const maxChars = useMemo(() => {
    if (wrap) return 0;
    let longest = 0;
    for (const row of rows) longest = Math.max(longest, row.line.text.length + (row.kind === 'fold' ? 12 : 0));
    return Math.min(longest, 8200);
  }, [rows, wrap]);
  const contentWidth = wrap
    ? '100%'
    : Math.max(size.width, STRIPE + gutter + PAD + Math.ceil(maxChars * charWidth) + 24);
  const { start, end } = visibleRange(offsets, scrollTop, size.height, OVERSCAN);

  const scrollToIndex = useCallback(
    (index: number) => {
      const element = scroller.current;
      if (!element) return;
      const top = Math.max(0, (offsets[index] ?? 0) - element.clientHeight / 3);
      element.scrollTo({ top });
      setScrollTop(top);
      // On small screens the log may sit below the fold: bring the viewer itself into view too.
      const box = element.getBoundingClientRect();
      if (box.top < 0 || box.top > window.innerHeight * 0.6) {
        element.scrollIntoView({ block: 'start', behavior: 'auto' });
      }
    },
    [offsets],
  );

  const jumpTo = useCallback((n: number) => {
    jumpAttempts.current = 0;
    setActive(n);
    setPendingJump(n);
  }, []);

  // A jump can need filters cleared or a fold opened before the row exists.
  useEffect(() => {
    if (pendingJump === null || status !== 'ready') return;
    const index = rowOfLine(rows, pendingJump);
    if (index >= 0) {
      setPendingJump(null);
      scrollToIndex(index);
      return;
    }
    jumpAttempts.current += 1;
    if (jumpAttempts.current > 3) {
      setPendingJump(null);
      return;
    }
    const fold = foldHiding(rows, pendingJump);
    if (fold !== null) {
      setExpanded((current) => new Set(current).add(fold));
      return;
    }
    const target = lines[pendingJump - 1];
    if (target && !passes(target, level, needle)) {
      setLevel('all');
      setQuery('');
      writeUrlState('all', '');
    } else {
      setPendingJump(null);
    }
  }, [pendingJump, rows, status, lines, level, needle, scrollToIndex]);

  // Deep links: `#L123` on load and when the summary links change the hash.
  useEffect(() => {
    if (status !== 'ready') return;
    const go = (): void => {
      const n = lineFromHash();
      if (n !== null && n >= 1 && n <= lines.length) jumpTo(n);
    };
    go();
    window.addEventListener('hashchange', go);
    return () => window.removeEventListener('hashchange', go);
  }, [status, lines.length, jumpTo]);

  const changeLevel = (next: LevelFilter): void => {
    setLevel(next);
    writeUrlState(next, query);
    scroller.current?.scrollTo({ top: 0 });
    setScrollTop(0);
  };
  const changeQuery = (next: string): void => {
    setQuery(next);
    writeUrlState(level, next);
    scroller.current?.scrollTo({ top: 0 });
    setScrollTop(0);
  };
  const pickLine = (n: number): void => {
    setActive(n);
    history.replaceState(null, '', `${location.pathname}${location.search}#L${n}`);
  };
  const lineLink = (n: number): string => `${location.origin}${location.pathname}#L${n}`;

  const doDelete = async (): Promise<void> => {
    setPanelBusy(true);
    setPanelMessage(null);
    try {
      const response = await fetch(`${API_LOGS}/${id}${token ? `?token=${encodeURIComponent(token)}` : ''}`, {
        method: 'DELETE',
        credentials: 'same-origin',
        headers: { accept: 'application/json', 'content-type': 'application/json' },
        // The API rejects a JSON content type without a body.
        body: '{}',
      });
      if (!response.ok && response.status !== 410) throw new Error(String(response.status));
      try {
        localStorage.removeItem(`${STORAGE_PREFIX}${id}`);
      } catch {
        // nothing to clean
      }
      location.reload();
    } catch {
      setPanelMessage(labels.delete_failed);
      setPanelBusy(false);
    }
  };

  const doReport = async (): Promise<void> => {
    setPanelBusy(true);
    setPanelMessage(null);
    try {
      const response = await fetch(`${API_LOGS}/${id}/report`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { accept: 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify({ reason, ...(note.trim() ? { note: note.trim() } : {}) }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setPanelMessage(labels.report_sent);
      setNote('');
      setTimeout(() => setPanel('none'), 2500);
    } catch {
      setPanelMessage(labels.report_failed);
    } finally {
      setPanelBusy(false);
    }
  };

  const chipCount: Record<LevelFilter, number> = {
    all: counts.lines,
    error: counts.error,
    warning: counts.warning,
    info: counts.info,
  };
  const chipLabel: Record<LevelFilter, string> = {
    all: labels.filter_all,
    error: labels.filter_errors,
    warning: labels.filter_warnings,
    info: labels.filter_info,
  };
  const activeLine = active !== null ? lines[active - 1] : undefined;
  const canDelete = token !== null || isOwner;
  const shownLines = useMemo(
    () =>
      level === 'all' && needle === '' ? lines.length : lines.filter((line) => passes(line, level, needle)).length,
    [lines, level, needle],
  );

  const rendered = [];
  for (let index = start; index < end; index += 1) {
    const row = rows[index];
    if (!row) continue;
    const line = row.line;
    const top = offsets[index] ?? 0;
    const height = (offsets[index + 1] ?? top) - top;
    const isActive = active === line.n;
    rendered.push(
      <div
        key={row.kind === 'fold' ? `f${line.n}` : line.n}
        data-line={line.n}
        style={{ position: 'absolute', top, height, left: 0, right: 0 }}
        className={`flex border-s-[3px] ${LEVEL_STRIPE[line.level]} ${isActive ? 'bg-primary/15' : ''} ${row.kind === 'fold' ? 'bg-surface' : ''}`}
      >
        <button
          type="button"
          onClick={() => pickLine(line.n)}
          aria-label={fill(labels.line_number, { line: line.n })}
          aria-pressed={isActive}
          style={{ width: gutter }}
          className="sticky start-0 z-1 shrink-0 cursor-pointer bg-bg pe-1.5 text-end md:pe-2 font-mono text-[12px] leading-5 text-fg-subtle tabular-nums select-none hover:text-fg focus-visible:outline-2 focus-visible:outline-focus"
        >
          {line.n}
        </button>
        {row.kind === 'fold' ? (
          <div className="flex min-w-0 flex-1 items-center gap-2 ps-2 pe-3">
            <button
              type="button"
              aria-expanded={row.expanded}
              onClick={() =>
                setExpanded((current) => {
                  const next = new Set(current);
                  if (next.has(line.n)) next.delete(line.n);
                  else next.add(line.n);
                  return next;
                })
              }
              className="inline-flex h-5 shrink-0 items-center gap-1 rounded-sm border border-border-strong px-1.5 text-[11px] leading-none text-fg hover:bg-raised focus-visible:outline-2 focus-visible:outline-focus"
            >
              <Icon icon={ChevronRight} size={12} className={row.expanded ? 'rotate-90' : ''} />
              {fill(row.expanded ? labels.collapse : labels.repeated, { count: row.count })}
            </button>
            <span className="min-w-0 truncate font-mono text-[13px] leading-5">
              {row.expanded ? null : <LineText line={line} needle={needle} dim />}
            </span>
          </div>
        ) : (
          <div
            className={`min-w-0 flex-1 ps-2 pe-3 font-mono text-[13px] leading-5 ${wrap ? 'break-all whitespace-pre-wrap' : 'whitespace-pre'}`}
          >
            <LineText line={line} needle={needle} />
          </div>
        )}
      </div>,
    );
  }

  return (
    <section className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-3">
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-2 rounded-lg border border-border bg-surface p-2 md:p-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <label className="relative block min-w-0 flex-1">
            <span className="sr-only">{labels.search_label}</span>
            <Icon
              icon={Search}
              size={16}
              className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-fg-subtle"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => changeQuery(event.target.value)}
              placeholder={labels.search_placeholder}
              spellCheck={false}
              autoComplete="off"
              className="h-11 w-full rounded-md border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none ps-9 pe-3 text-base text-fg placeholder:text-fg-subtle md:h-10 md:text-sm"
            />
          </label>
          <div className="grid min-w-0 gap-2 md:flex md:flex-wrap md:items-center">
            {/* biome-ignore lint/a11y/useSemanticElements: a segmented control of toggle buttons, a fieldset has no layout of its own */}
            <div
              role="group"
              aria-label={labels.filter_label}
              className="grid min-w-0 grid-cols-4 gap-1 rounded-lg border border-border bg-bg p-1 md:flex md:gap-1.5 md:border-0 md:bg-transparent md:p-0"
            >
              {LEVEL_FILTERS.map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={level === value}
                  onClick={() => changeLevel(value)}
                  className={`inline-flex min-h-12 min-w-0 flex-col items-center justify-center gap-0.5 rounded-md border px-1 text-center text-[13px] leading-tight font-medium md:h-10 md:min-h-0 md:flex-row md:gap-1.5 md:px-3 md:text-sm ${
                    level === value
                      ? 'border-primary bg-primary/15 text-fg'
                      : 'border-transparent text-fg-muted hover:text-fg md:border-border-strong md:bg-raised'
                  }`}
                >
                  <span className="min-w-0 break-words">{chipLabel[value]}</span>
                  <span
                    className={`rounded-sm px-1.5 text-xs tabular-nums ${value === 'error' && counts.error > 0 ? 'bg-danger text-danger-fg' : value === 'warning' && counts.warning > 0 ? 'bg-warning-soft text-warning' : 'bg-raised text-fg-muted md:bg-bg'}`}
                  >
                    {chipCount[value]}
                  </span>
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 md:flex">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                aria-pressed={wrap}
                icon={<Icon icon={WrapText} size={16} />}
                onClick={() => setWrap((value) => !value)}
                className={`max-md:min-h-11 max-md:justify-center ${wrap ? 'border-primary bg-primary/10' : ''}`}
                title={labels.wrap}
              >
                {labels.wrap}
              </Button>
              {firstErrorLine !== null ? (
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  icon={<Icon icon={TriangleAlert} size={16} />}
                  onClick={() => {
                    history.replaceState(null, '', `${location.pathname}${location.search}#L${firstErrorLine}`);
                    jumpTo(firstErrorLine);
                  }}
                  className="max-md:min-h-11 max-md:justify-center"
                  title={labels.jump_error}
                >
                  <span className="md:max-lg:sr-only">{labels.jump_error}</span>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
        <p className="text-xs text-fg-muted" aria-live="polite">
          {status === 'ready' ? fill(labels.lines_shown, { shown: shownLines, total: lines.length }) : ' '}
        </p>
      </div>

      {activeLine ? (
        <div className="flex flex-wrap items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm">
          <span className="font-mono text-fg">#L{activeLine.n}</span>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            icon={<Icon icon={Copy} size={14} />}
            onClick={async () =>
              (await copy(activeLine.text)) ? flash(labels.copied) : flash(labels.err_generic, false)
            }
          >
            {labels.copy_line}
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            icon={<Icon icon={Link2} size={14} />}
            onClick={async () =>
              (await copy(lineLink(activeLine.n))) ? flash(labels.copied) : flash(labels.err_generic, false)
            }
          >
            {labels.copy_line_link}
          </Button>
          <Button
            type="button"
            variant="icon"
            size="sm"
            aria-label={labels.cancel}
            icon={<Icon icon={X} size={14} />}
            onClick={() => {
              setActive(null);
              history.replaceState(null, '', `${location.pathname}${location.search}`);
            }}
          />
        </div>
      ) : null}

      <div className="relative overflow-hidden rounded-lg border border-border bg-bg">
        <span
          ref={probe}
          aria-hidden="true"
          className="pointer-events-none invisible absolute font-mono text-[13px] whitespace-pre"
        >
          {'M'.repeat(100)}
        </span>
        {status === 'loading' ? (
          <p className="p-6 text-sm text-fg-muted" role="status">
            {labels.loading}
          </p>
        ) : null}
        {status === 'error' ? (
          <div className="flex flex-wrap items-center gap-3 p-6" role="alert">
            <p className="text-sm text-fg">{labels.load_failed}</p>
            <Button type="button" variant="secondary" size="sm" onClick={load}>
              {labels.retry}
            </Button>
          </div>
        ) : null}
        {status === 'ready' ? (
          <section
            ref={scroller}
            // biome-ignore lint/a11y/noNoninteractiveTabindex: a scroll container must be keyboard scrollable
            tabIndex={0}
            aria-label={labels.log_region}
            onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
            className="h-[68dvh] min-h-80 overflow-auto overscroll-contain md:h-[calc(100dvh-10rem)] md:max-h-[60rem]"
          >
            {rows.length === 0 ? (
              <p className="p-6 text-sm text-fg-muted">{labels.no_matches}</p>
            ) : (
              <div style={{ position: 'relative', height: total, width: contentWidth }}>{rendered}</div>
            )}
          </section>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <ButtonLink
          href={`${API_LOGS}/${id}/raw?download=1`}
          variant="secondary"
          size="sm"
          icon={<Icon icon={Download} size={16} />}
          rel="nofollow"
          className="max-md:min-h-11"
        >
          {labels.download}
        </ButtonLink>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          icon={<Icon icon={Link2} size={16} />}
          className="max-md:min-h-11"
          onClick={async () =>
            (await copy(`${location.origin}${basePath}/${id}`))
              ? flash(labels.copied)
              : flash(labels.err_generic, false)
          }
        >
          {labels.copy_link}
        </Button>
        <span className="flex-1" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="max-md:min-h-11"
          icon={<Icon icon={Flag} size={16} />}
          aria-expanded={panel === 'report'}
          onClick={() => {
            setPanel(panel === 'report' ? 'none' : 'report');
            setPanelMessage(null);
          }}
        >
          {labels.report}
        </Button>
        {canDelete ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            icon={<Icon icon={Trash2} size={16} />}
            aria-expanded={panel === 'delete'}
            onClick={() => {
              setPanel(panel === 'delete' ? 'none' : 'delete');
              setPanelMessage(null);
            }}
          >
            {labels.delete_now}
          </Button>
        ) : null}
      </div>

      {panel === 'report' ? (
        <div className="grid gap-3 rounded-lg border border-border bg-surface p-3 md:p-4">
          <p className="text-sm font-semibold text-fg">{labels.report_title}</p>
          <label className="grid gap-1 text-sm text-fg">
            {labels.report_reason}
            <select
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              className="h-11 rounded-md border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none px-2 text-base text-fg md:h-10 md:text-sm"
            >
              <option value="personal_data">{labels.report_reason_personal_data}</option>
              <option value="abuse">{labels.report_reason_abuse}</option>
              <option value="malware">{labels.report_reason_malware}</option>
              <option value="other">{labels.report_reason_other}</option>
            </select>
          </label>
          <label className="grid gap-1 text-sm text-fg">
            {labels.report_note}
            <input
              value={note}
              maxLength={500}
              onChange={(event) => setNote(event.target.value)}
              className="h-11 rounded-md border border-border-strong bg-sunken shadow-[inset_0_1px_2px_rgb(0_0_0/0.18)] transition-[border-color,box-shadow] duration-(--dur-fast) hover:border-fg-subtle focus-visible:border-focus focus-visible:shadow-[0_0_0_3px_var(--focus-halo)] focus-visible:outline-none px-3 text-base text-fg md:h-10 md:text-sm"
            />
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <Button type="button" variant="primary" size="sm" loading={panelBusy} onClick={() => void doReport()}>
              {labels.report_send}
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={() => setPanel('none')}>
              {labels.cancel}
            </Button>
            {panelMessage ? (
              <span role="status" className="text-sm text-fg-muted">
                {panelMessage}
              </span>
            ) : null}
          </div>
        </div>
      ) : null}
      {panel === 'delete' ? (
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-danger/50 bg-danger-soft p-3 md:p-4">
          <p className="text-sm text-fg">{labels.delete_confirm}</p>
          <Button
            type="button"
            variant="primary"
            size="sm"
            loading={panelBusy}
            icon={<Icon icon={Trash2} size={16} />}
            onClick={() => void doDelete()}
          >
            {labels.delete_now}
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={() => setPanel('none')}>
            {labels.cancel}
          </Button>
          {panelMessage ? (
            <span role="alert" className="text-sm text-fg">
              {panelMessage}
            </span>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
