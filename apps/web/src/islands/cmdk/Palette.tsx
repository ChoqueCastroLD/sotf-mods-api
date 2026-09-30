/**
 * The command palette, «el bloc de órdenes» (PLAN §7.1 T0-07, §7.9; research/03 §5.5).
 *
 * - Modal `role="dialog"` (640 px at 12 vh; 880 px with the preview pane at ≥ lg; full screen
 *   below md), focus kept inside, background `inert`, scroll locked, focus returned on close.
 * - cmdk listbox with `aria-activedescendant`; results come from the MiniSearch engine
 *   (`engine.ts`), grouped Recent · Trending · Mods · Builds · Kits · Creators · Categories ·
 *   Pages · Actions, best group first, «See all» → `/search`.
 * - Keys: ↑↓ move · Enter open · ⌘/Ctrl+Enter new tab · ⌘/Ctrl+D download · Tab / Shift+Tab
 *   scope · Backspace on an empty field drops the scope · Esc close.
 * - States: index loading (skeleton after 300 ms), error (what happened, what to do, retry, ref),
 *   offline (recent items and actions keep working), empty (brand microcopy + hint).
 */
import { type Locale, localizePath, matchLocale } from '@sotf/i18n';
import { Kbd } from '@sotf/ui/kbd';
import { onThemeChange } from '@sotf/ui/theme';
import { Eraser, RotateCw, Search, Sparkles, WifiOff, X } from 'lucide-react';
import {
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { track } from '../../scripts/beacon.ts';
import { buildActions, QUICK_ACTIONS } from './actions.ts';
import {
  ActionSearch,
  groupResults,
  IndexLoadError,
  loadIndex,
  type PaletteIndex,
  SCOPED_LIMIT,
  serverSearch,
} from './engine.ts';
import { t } from './i18n.ts';
import { Glyph, latestDownloadPath, Preview, RowContent } from './present.tsx';
import { clearRecents, readRecents, rememberRecent } from './recents.ts';
import { cycleScope, parseQuery, SCOPES, type Scope } from './scope.ts';
import { askScout, loadScoutAvailable, SCOUT_MAX_LENGTH, SCOUT_MIN_LENGTH, type ScoutResult } from './scout.ts';
import type { EntryItem, GroupId, PaletteItem, ResultGroup, ResultItem } from './types.ts';

export type OpenSource = 'shortcut' | 'header' | 'tab-bar' | 'landing-hero' | 'link';

export interface OpenRequest {
  query: string;
  source: OpenSource;
  /** Element to focus again on close (null → whatever had focus). */
  returnFocus: HTMLElement | null;
}

const NO_ITEMS: ResultItem[] = [];
const NO_ENTRIES: EntryItem[] = [];
const SEE_ALL = '__see_all';
const CLEAR_RECENT = '__clear_recent';
const SERVER_DEBOUNCE_MS = 350;
const SKELETON_DELAY = { '--skeleton-delay': '300ms' } as CSSProperties;
/** Same look as `Skeleton` of `@sotf/ui` (shimmer class from the tokens), without its label bundle. */
const SKELETON = 'skeleton block h-4 [--color-raised:light-dark(var(--color-night-100),var(--color-night-900))]';

type IndexState =
  | { status: 'loading' }
  | { status: 'ready'; index: PaletteIndex }
  | { status: 'error'; ref: string | null; offline: boolean };

type ScoutState =
  | { status: 'loading'; question: string }
  | { status: 'done'; question: string; answer: string; items: EntryItem[] }
  | { status: 'error'; question: string; reason: 'rate' | 'unavailable' | 'error' };

type ServerState = { key: string; status: 'loading' | 'done'; items: ResultItem[] } | null;

const SCOPE_TYPE_PARAM: Record<Scope, string | null> = {
  all: null,
  mods: 'mod',
  builds: 'build',
  kits: 'kit',
  creators: 'user',
  actions: null,
  scout: null,
};

function scopeLabel(scope: Scope): string {
  switch (scope) {
    case 'all':
      return t('cmdk_scope_all');
    case 'mods':
      return t('cmdk_term_mods');
    case 'builds':
      return t('cmdk_term_builds');
    case 'kits':
      return t('cmdk_term_kits');
    case 'creators':
      return t('cmdk_term_creators');
    case 'scout':
      return t('cmdk_scout_scope');
    default:
      return t('cmdk_group_actions');
  }
}

function groupLabel(id: GroupId): string {
  switch (id) {
    case 'recent':
      return t('cmdk_group_recent');
    case 'trending':
      return t('cmdk_group_trending');
    case 'mods':
      return t('cmdk_term_mods');
    case 'builds':
      return t('cmdk_term_builds');
    case 'kits':
      return t('cmdk_term_kits');
    case 'creators':
      return t('cmdk_term_creators');
    case 'categories':
      return t('cmdk_group_categories');
    case 'pages':
      return t('cmdk_group_pages');
    case 'actions':
      return t('cmdk_group_actions');
    case 'scout':
      return t('cmdk_scout_group');
    default:
      return t('cmdk_group_server');
  }
}

function pageLocale(): Locale {
  return matchLocale(document.documentElement.lang) ?? 'en';
}

function isApple(): boolean {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } };
  return /mac|iphone|ipad|ipod/i.test(nav.userAgentData?.platform ?? nav.platform ?? '');
}

const ENTITY_TYPES = new Set(['mod', 'build', 'kit', 'user', 'category']);

function entityOf(item: PaletteItem): {
  entityType?: 'mod' | 'build' | 'kit' | 'user' | 'category';
  entityId?: number;
} {
  if (item.type === 'action' || !ENTITY_TYPES.has(item.type) || typeof item.id !== 'number') return {};
  return { entityType: item.type as 'mod' | 'build' | 'kit' | 'user' | 'category', entityId: item.id };
}

/** Makes everything outside the palette inert while it is open; returns the undo. */
function isolate(host: HTMLElement): () => void {
  const touched: Element[] = [];
  for (const child of Array.from(document.body.children)) {
    if (child === host || child.contains(host) || child.hasAttribute('inert')) continue;
    if (child.tagName === 'SCRIPT' || child.tagName === 'TEMPLATE') continue;
    child.setAttribute('inert', '');
    touched.push(child);
  }
  const root = document.documentElement;
  const previousOverflow = root.style.overflow;
  root.style.overflow = 'hidden';
  return () => {
    for (const child of touched) child.removeAttribute('inert');
    root.style.overflow = previousOverflow;
  };
}

export interface PaletteProps {
  request: OpenRequest;
  host: HTMLElement;
  onClose: (restoreFocus: boolean) => void;
}

export function Palette({ request, host, onClose }: PaletteProps) {
  const locale = useMemo(pageLocale, []);
  const modKey = useMemo(() => (isApple() ? '⌘' : 'Ctrl'), []);
  const initial = useMemo(() => {
    const parsed = parseQuery(request.query);
    // Scout is offered only once the status call says so: until then its prefix is plain text.
    return parsed.scope === 'scout' ? { scope: null, text: request.query } : parsed;
  }, [request.query]);
  const [search, setSearch] = useState(initial.text);
  const [scope, setScope] = useState<Scope>(initial.scope ?? 'all');
  const [scoutAvailable, setScoutAvailable] = useState(false);
  const [scoutState, setScoutState] = useState<ScoutState | null>(null);
  const scoutRequest = useRef<AbortController | null>(null);
  const [indexState, setIndexState] = useState<IndexState>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);
  const [online, setOnline] = useState(() => navigator.onLine !== false);
  const [recents, setRecents] = useState<EntryItem[]>(readRecents);
  const [themeTick, setThemeTick] = useState(0);
  const [server, setServer] = useState<ServerState>(null);
  const [active, setActive] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const ids = useId().replace(/:/g, '');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const hrefOf = useCallback((path: string) => localizePath(path, locale), [locale]);
  const go = useCallback((url: string) => window.location.assign(url), []);
  const openInNewTab = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener');
  }, []);

  // Modal plumbing: inert background + scroll lock for the palette's lifetime.
  useLayoutEffect(() => isolate(host), [host]);

  // Scout: offered only while the API reports it available; a pending question dies with the palette.
  useEffect(() => {
    let alive = true;
    loadScoutAvailable().then((available) => {
      if (alive) setScoutAvailable(available);
    });
    return () => {
      alive = false;
      scoutRequest.current?.abort();
    };
  }, []);

  const scopes = useMemo(() => SCOPES.filter((value) => value !== 'scout' || scoutAvailable), [scoutAvailable]);

  useEffect(() => {
    track('cmdk_open', { props: { source: request.source } });
  }, [request.source]);

  // Index: fetched on open (never on page load), cached for the page, retryable.
  useEffect(() => {
    let alive = true;
    setIndexState({ status: 'loading' });
    loadIndex(locale).then(
      (index) => {
        if (alive) setIndexState({ status: 'ready', index });
      },
      (error: unknown) => {
        if (!alive) return;
        const failure = error instanceof IndexLoadError ? error : null;
        setIndexState({ status: 'error', ref: failure?.ref ?? null, offline: failure?.offline ?? !navigator.onLine });
      },
    );
    return () => {
      alive = false;
    };
  }, [locale, attempt]);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine !== false);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    const stopTheme = onThemeChange(() => setThemeTick((tick) => tick + 1));
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
      stopTheme();
    };
  }, []);

  // Coming back online after a failed load: try again by itself.
  useEffect(() => {
    if (online && indexState.status === 'error') setAttempt((value) => value + 1);
  }, [online]);

  const actions = useMemo(
    () =>
      buildActions({
        locale,
        go: (path) => go(localizePath(path, locale)),
        goTo: go,
      }),
    [locale, go, themeTick],
  );
  const actionSearch = useMemo(() => new ActionSearch(actions), [actions]);
  const index = indexState.status === 'ready' ? indexState.index : null;
  const text = search.trim();

  // ---------------------------------------------------------------------------------------------
  // Results
  // ---------------------------------------------------------------------------------------------
  const local = useMemo((): { groups: ResultGroup[]; contentHits: number } => {
    const wrap = (items: readonly PaletteItem[]): ResultItem[] => items.map((item) => ({ item, terms: [] }));
    if (text === '') {
      const groups: ResultGroup[] = [];
      if (scope === 'scout') return { groups, contentHits: 0 };
      if (scope === 'all') {
        if (recents.length > 0) groups.push({ id: 'recent', items: wrap(recents.slice(0, 5)) });
        if (index && index.trending.length > 0)
          groups.push({ id: 'trending', items: wrap(index.trending.slice(0, 6)) });
        const themeAction = actions.find((action) => action.id.startsWith('theme-') && !action.current);
        const quick = actions.filter((action) => QUICK_ACTIONS.includes(action.id));
        groups.push({ id: 'actions', items: wrap(themeAction ? [...quick, themeAction] : quick) });
      } else if (scope === 'actions') {
        groups.push({ id: 'actions', items: wrap(actions) });
      } else if (index) {
        const type = scope === 'mods' ? 'mod' : scope === 'builds' ? 'build' : scope === 'kits' ? 'kit' : 'user';
        const id: GroupId = scope;
        const items = index.top(type, SCOPED_LIMIT);
        if (items.length > 0) groups.push({ id, items: wrap(items) });
      }
      return { groups, contentHits: 0 };
    }
    if (scope === 'scout') return { groups: [], contentHits: 0 };
    const scored = index && scope !== 'actions' ? index.query(text, scope) : [];
    const actionHits = scope === 'all' || scope === 'actions' ? actionSearch.query(text) : [];
    return { groups: groupResults(scored, actionHits, scope), contentHits: scored.length };
  }, [text, scope, index, recents, actions, actionSearch]);

  // Server search when the local index has nothing (or failed): wider matching + query log.
  const serverKey = `${scope}\u0000${text}`;
  const wantsServer =
    text.length >= 2 &&
    scope !== 'actions' &&
    scope !== 'scout' &&
    online &&
    (indexState.status === 'error' || (indexState.status === 'ready' && local.contentHits === 0));
  useEffect(() => {
    if (!wantsServer) {
      setServer(null);
      return;
    }
    const controller = new AbortController();
    setServer({ key: serverKey, status: 'loading', items: [] });
    const timer = window.setTimeout(() => {
      serverSearch(text, scope, index, controller.signal).then((items) => {
        if (!controller.signal.aborted) setServer({ key: serverKey, status: 'done', items });
      });
    }, SERVER_DEBOUNCE_MS);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [wantsServer, serverKey, text, scope, index]);

  const serverItems = server?.key === serverKey && server.status === 'done' ? server.items : NO_ITEMS;
  const serverLoading = wantsServer && (server?.key !== serverKey || server.status === 'loading');

  // Scout's answer belongs to the question it was asked for; editing the text hides it.
  const scoutView = scope === 'scout' && scoutState?.question === text ? scoutState : null;
  const scoutItems = scoutView?.status === 'done' ? scoutView.items : NO_ENTRIES;

  const groups = useMemo(() => {
    const list = [...local.groups];
    if (serverItems.length > 0) list.push({ id: 'server', items: serverItems });
    if (scoutItems.length > 0) list.push({ id: 'scout', items: scoutItems.map((item) => ({ item, terms: [] })) });
    return list;
  }, [local.groups, serverItems, scoutItems]);

  const lookup = useMemo(() => {
    const map = new Map<string, PaletteItem>();
    for (const group of groups) for (const { item } of group.items) map.set(item.key, item);
    return map;
  }, [groups]);

  const resultCount = groups.reduce((sum, group) => sum + group.items.length, 0);
  const showSeeAll = text !== '' && scope !== 'actions' && scope !== 'scout';
  const indexLoading =
    indexState.status === 'loading' && scope !== 'actions' && scope !== 'scout' && (text !== '' || scope !== 'all');
  const busy = indexLoading || serverLoading || scoutView?.status === 'loading';
  const isEmpty = text !== '' && scope !== 'scout' && resultCount === 0 && !busy;

  // Every selectable row, in visual order (arrow keys, `aria-activedescendant`).
  const options = useMemo(() => {
    const list: string[] = [];
    for (const group of groups) {
      for (const { item } of group.items) list.push(item.key);
      if (group.id === 'recent') list.push(CLEAR_RECENT);
    }
    if (showSeeAll) list.push(SEE_ALL);
    return list;
  }, [groups, showSeeAll]);
  const optionIndex = useMemo(() => new Map(options.map((value, index) => [value, index])), [options]);

  // The first row is active after every change of the results (as in any combobox).
  const optionsKey = options.join('\n');
  useEffect(() => {
    // In Scout mode Enter asks: no row is active until the arrows pick a cited mod.
    setActive(scope === 'scout' ? '' : (options[0] ?? ''));
  }, [optionsKey, scope]);

  // Scroll back to the top when the query or scope changes.
  useEffect(() => {
    listRef.current?.scrollTo({ top: 0 });
  }, [text, scope]);

  const status = useMemo(() => {
    if (announcement) return announcement;
    if (scoutView?.status === 'loading') return t('cmdk_scout_thinking');
    if (scoutView?.status === 'done')
      return `${scoutView.answer} ${t('cmdk_results_count', { count: scoutView.items.length })}`;
    if (scoutView?.status === 'error') return t('cmdk_scout_error_title');
    if (scope === 'scout') return '';
    if (indexLoading) return t('cmdk_loading');
    if (serverLoading && resultCount === 0) return t('cmdk_searching');
    if (text === '') return '';
    return t('cmdk_results_count', { count: resultCount });
  }, [announcement, scoutView, scope, indexLoading, serverLoading, resultCount, text]);

  // ---------------------------------------------------------------------------------------------
  // Commands
  // ---------------------------------------------------------------------------------------------
  const close = useCallback((restoreFocus = true) => onClose(restoreFocus), [onClose]);

  const seeAllUrl = useCallback(() => {
    const params = new URLSearchParams({ q: text.slice(0, 100) });
    const type = SCOPE_TYPE_PARAM[scope];
    if (type) params.set('type', type);
    return hrefOf(`/search?${params}`);
  }, [text, scope, hrefOf]);

  const groupOf = useCallback(
    (key: string): GroupId | null =>
      groups.find((group) => group.items.some(({ item }) => item.key === key))?.id ?? null,
    [groups],
  );

  const select = useCallback(
    (value: string, newTab: boolean) => {
      if (value === CLEAR_RECENT) {
        clearRecents();
        setRecents([]);
        inputRef.current?.focus();
        return;
      }
      if (value === SEE_ALL) {
        track('cmdk_select', { props: { group: 'see_all', scope, newTab } });
        const url = seeAllUrl();
        if (newTab) openInNewTab(url);
        else {
          close(false);
          go(url);
        }
        return;
      }
      const item = lookup.get(value);
      if (!item) return;
      track('cmdk_select', {
        ...entityOf(item),
        props: { group: groupOf(value) ?? 'none', type: item.type, scope, newTab, queryLength: text.length },
      });
      if (item.type === 'action') {
        if (newTab && item.path) {
          openInNewTab(hrefOf(item.path));
          return;
        }
        close(!item.path && !item.id.startsWith('language-'));
        item.run();
        return;
      }
      setRecents(rememberRecent(item));
      const url = hrefOf(item.path);
      if (newTab) openInNewTab(url);
      else {
        close(false);
        go(url);
      }
    },
    [lookup, scope, text, seeAllUrl, groupOf, hrefOf, go, openInNewTab, close],
  );

  const ask = useCallback(() => {
    const question = text;
    if (question.length < SCOUT_MIN_LENGTH) return;
    scoutRequest.current?.abort();
    const controller = new AbortController();
    scoutRequest.current = controller;
    setScoutState({ status: 'loading', question });
    track('cmdk_select', { props: { group: 'scout_ask', scope: 'scout', queryLength: question.length } });
    askScout(question, locale, controller.signal).then((result: ScoutResult) => {
      if (controller.signal.aborted) return;
      setScoutState(
        result.ok
          ? { status: 'done', question, answer: result.answer, items: result.items }
          : { status: 'error', question, reason: result.reason },
      );
      if (!result.ok && result.reason === 'unavailable') {
        // The daily cap may be spent: the next open asks the status again.
        setScoutAvailable(false);
        setScope('all');
      }
    });
  }, [text, locale]);

  const download = useCallback((item: EntryItem) => {
    const path = latestDownloadPath(item);
    if (!path) return;
    track('download_click', { ...entityOf(item), props: { source: 'cmdk' } });
    setRecents(rememberRecent(item));
    // Same-tab navigation to a 302 → file: the browser downloads and the page stays.
    const link = document.createElement('a');
    link.href = path;
    link.rel = 'nofollow';
    document.body.append(link);
    link.click();
    link.remove();
    setAnnouncement(t('cmdk_download_started', { title: item.title }));
  }, []);

  useEffect(() => {
    if (!announcement) return;
    const timer = window.setTimeout(() => setAnnouncement(''), 4000);
    return () => window.clearTimeout(timer);
  }, [announcement]);

  const activeItem = lookup.get(active) ?? null;

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.nativeEvent.isComposing) return;
    const mod = event.metaKey || event.ctrlKey;
    const inInput = event.target === inputRef.current;
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        close(true);
        return;
      case 'Tab':
        event.preventDefault();
        if (!inInput) inputRef.current?.focus();
        else setScope((current) => cycleScope(current, event.shiftKey ? -1 : 1, scopes));
        return;
      case 'ArrowDown':
      case 'ArrowUp': {
        if (options.length === 0) return;
        event.preventDefault();
        const step = event.key === 'ArrowDown' ? 1 : -1;
        const index = options.indexOf(active);
        const next =
          index === -1 ? (step === 1 ? 0 : options.length - 1) : (index + step + options.length) % options.length;
        setActive(options[next] ?? '');
        if (!inInput) inputRef.current?.focus();
        return;
      }
      case 'PageDown':
      case 'PageUp': {
        if (options.length === 0) return;
        event.preventDefault();
        setActive(options[event.key === 'PageDown' ? options.length - 1 : 0] ?? '');
        return;
      }
      case 'Enter':
        if (!inInput) return;
        event.preventDefault();
        if (active) select(active, mod);
        else if (scope === 'scout') ask();
        return;
      case 'Backspace':
        if (inInput && search === '' && scope !== 'all') {
          event.preventDefault();
          setScope('all');
        }
        return;
      default:
        if (mod && !event.altKey && event.key.toLowerCase() === 'd') {
          event.preventDefault();
          if (activeItem && activeItem.type !== 'action') download(activeItem);
        }
    }
  };

  const onInput = (raw: string) => {
    const parsed = parseQuery(raw);
    if (parsed.scope && (parsed.scope !== 'scout' || scoutAvailable)) {
      setScope(parsed.scope);
      setSearch(parsed.text);
    } else {
      setSearch(raw);
    }
    if (scope === 'scout' || parsed.scope === 'scout') setActive('');
  };

  const pickScope = (next: Scope) => {
    setScope(next);
    setActive('');
    inputRef.current?.focus();
  };

  // Keep the active row visible.
  useEffect(() => {
    if (!active) return;
    const index = optionIndex.get(active);
    if (index === undefined) return;
    document.getElementById(`${ids}-o${index}`)?.scrollIntoView({ block: 'nearest' });
  }, [active, optionIndex, ids]);

  // ---------------------------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------------------------
  const optionProps = (value: string, extra = '') => {
    const index = optionIndex.get(value) ?? -1;
    const selected = value === active;
    return {
      id: `${ids}-o${index}`,
      role: 'option' as const,
      'aria-selected': selected,
      'data-selected': selected || undefined,
      onPointerMove: () => {
        if (!selected) setActive(value);
      },
      onMouseDown: (event: ReactMouseEvent) => event.preventDefault(),
      onClick: (event: ReactMouseEvent) => select(value, event.metaKey || event.ctrlKey),
      className: `flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-3 py-1.5 select-none data-selected:bg-fg/8 data-selected:shadow-[inset_2px_0_0_var(--color-primary)] md:min-h-10 ${extra}`,
    };
  };

  let body: ReactNode = null;
  if (indexState.status === 'error' && scope !== 'actions') {
    const offline = indexState.offline || !online;
    body = (
      <div role="alert" className="flex flex-col items-start gap-2 border-b border-border px-4 py-3 text-sm">
        <p className="flex items-center gap-2 font-medium text-fg">
          <span className="text-warning">
            <Glyph icon={offline ? WifiOff : RotateCw} size={16} />
          </span>
          {offline ? t('cmdk_offline') : t('cmdk_error_title')}
        </p>
        <p className="text-fg-muted">{t('cmdk_error_hint')}</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setAttempt((value) => value + 1);
              inputRef.current?.focus();
            }}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm font-medium text-link hover:bg-fg/8 md:min-h-8"
          >
            <Glyph icon={RotateCw} size={14} />
            {t('cmdk_retry')}
          </button>
          {indexState.ref ? (
            <span className="font-mono text-2xs text-fg-subtle">{t('cmdk_error_ref', { ref: indexState.ref })}</span>
          ) : null}
        </div>
      </div>
    );
  }

  const placeholder =
    scope === 'actions'
      ? t('cmdk_placeholder_actions')
      : scope === 'scout'
        ? t('cmdk_scout_placeholder')
        : t('cmdk_placeholder');
  const activeIndex = optionIndex.get(active);
  const listId = `${ids}-list`;
  const hasList = options.length > 0;

  return (
    <div className="fixed inset-0 z-(--z-modal)">
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-night-975/60 md:block"
        onMouseDown={() => close(true)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('cmdk_dialog_label')}
        // Focusable so a click on its background keeps focus (and Esc / Tab) inside the dialog.
        tabIndex={-1}
        onKeyDown={onKeyDown}
        className="absolute inset-0 flex flex-col outline-none overflow-hidden bg-overlay text-fg md:inset-x-4 md:top-[12vh] md:bottom-auto md:mx-auto md:max-h-[76vh] md:max-w-160 md:rounded-xl md:border md:border-border md:shadow-lg md:motion-safe:animate-rise lg:max-w-220"
      >
        <div className="flex items-center gap-2 border-b border-border px-3 md:px-4">
          <span className="relative flex size-5 shrink-0 items-center justify-center text-fg-subtle">
            {busy ? (
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-primary motion-safe:animate-ping-locator"
              />
            ) : null}
            <Glyph icon={Search} size={18} />
          </span>
          {scope !== 'all' ? (
            <button
              type="button"
              tabIndex={-1}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => pickScope('all')}
              aria-label={t('cmdk_scope_remove', { scope: scopeLabel(scope) })}
              className="inline-flex h-7 shrink-0 items-center gap-1 rounded-sm bg-primary-soft px-2 font-mono text-2xs text-primary"
            >
              {scopeLabel(scope)}
              <Glyph icon={X} size={12} />
            </button>
          ) : null}
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={hasList}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={activeIndex === undefined ? undefined : `${ids}-o${activeIndex}`}
            aria-label={t('cmdk_input_label')}
            aria-describedby={`${ids}-status`}
            value={search}
            onChange={(event) => onInput(event.target.value)}
            // biome-ignore lint/a11y/noAutofocus: the palette is a modal opened on purpose; its field takes focus
            autoFocus
            placeholder={placeholder}
            maxLength={scope === 'scout' ? SCOUT_MAX_LENGTH : 100}
            enterKeyHint="go"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            className="h-14 min-w-0 flex-1 bg-transparent text-base text-fg outline-none placeholder:text-fg-subtle md:h-13"
          />
          <button
            type="button"
            onClick={() => close(true)}
            tabIndex={-1}
            className="flex size-11 shrink-0 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg md:size-auto md:p-1"
            aria-label={t('cmdk_close')}
          >
            <span className="md:hidden">
              <Glyph icon={X} size={20} />
            </span>
            <span className="hidden md:inline-flex" aria-hidden="true">
              <Kbd>Esc</Kbd>
            </span>
          </button>
        </div>

        <fieldset className="flex min-w-0 shrink-0 gap-1 overflow-x-auto border-b border-border px-3 py-2 md:px-4">
          <legend className="sr-only">{t('cmdk_scope_label')}</legend>
          {scopes.map((value) => (
            <button
              key={value}
              type="button"
              tabIndex={-1}
              aria-pressed={scope === value}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => pickScope(value)}
              className="inline-flex min-h-9 shrink-0 items-center rounded-full border border-border px-3 text-xs font-medium text-fg-muted hover:text-fg aria-pressed:border-primary aria-pressed:bg-primary-soft aria-pressed:text-fg md:min-h-7"
            >
              {scopeLabel(value)}
            </button>
          ))}
        </fieldset>

        <div className="flex min-h-0 flex-1">
          <div ref={listRef} className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overscroll-contain">
            <p id={`${ids}-status`} role="status" aria-live="polite" className="sr-only">
              {status}
            </p>
            {!online && indexState.status !== 'error' ? (
              <p className="flex items-center gap-2 border-b border-border px-4 py-2 text-xs text-fg-muted">
                <Glyph icon={WifiOff} size={14} />
                {t('cmdk_offline')}
              </p>
            ) : null}
            {body}

            {indexLoading ? (
              <div
                aria-hidden="true"
                className="flex flex-col gap-1 p-2 opacity-0 animate-skeleton-in motion-reduce:opacity-100"
                style={SKELETON_DELAY}
              >
                {[0, 1, 2, 3, 4].map((row) => (
                  <div key={row} className="flex min-h-11 items-center gap-3 px-3 md:min-h-10">
                    <span className={`${SKELETON} size-8 rounded-sm`} />
                    <span className="flex flex-1 flex-col gap-1.5">
                      <span className={`${SKELETON} h-3.5 w-2/5`} />
                      <span className={`${SKELETON} h-3 w-3/5`} />
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            {scope === 'scout' ? (
              <ScoutPanel
                text={text}
                view={scoutView}
                onRetry={() => {
                  ask();
                  inputRef.current?.focus();
                }}
              />
            ) : null}

            {isEmpty ? (
              <div className="flex flex-col gap-1 px-4 py-6 text-center">
                <p className="text-sm font-medium text-fg">
                  {scope === 'actions'
                    ? t('cmdk_empty_actions', { query: text })
                    : t('cmdk_no_results', { query: text })}
                </p>
                {scope !== 'actions' ? <p className="text-xs text-fg-muted">{t('cmdk_empty_hint')}</p> : null}
              </div>
            ) : null}

            {text === '' && scope === 'all' && recents.length === 0 && indexState.status === 'ready' ? (
              <p className="px-4 pt-3 text-xs text-fg-subtle">{t('cmdk_start_hint')}</p>
            ) : null}

            <div id={listId} role="listbox" aria-label={t('cmdk_dialog_label')} className={hasList ? 'p-2' : 'hidden'}>
              {groups.map((group) => (
                // biome-ignore lint/a11y/useSemanticElements: an option group of a listbox (ARIA combobox pattern), not a form group
                <div key={group.id} role="group" aria-labelledby={`${ids}-g-${group.id}`} className="pb-1">
                  <div
                    id={`${ids}-g-${group.id}`}
                    role="presentation"
                    className="px-3 pt-2 pb-1 font-mono text-2xs tracking-wide text-fg-subtle uppercase"
                  >
                    {groupLabel(group.id)}
                  </div>
                  {group.items.map((result) => (
                    <div key={result.item.key} {...optionProps(result.item.key, 'text-sm text-fg')}>
                      <RowContent result={result} locale={locale} />
                    </div>
                  ))}
                  {group.id === 'recent' ? (
                    <div {...optionProps(CLEAR_RECENT, 'text-xs text-fg-muted md:min-h-8')}>
                      <span className="flex size-8 shrink-0 items-center justify-center">
                        <Glyph icon={Eraser} size={14} />
                      </span>
                      {t('cmdk_recent_clear')}
                    </div>
                  ) : null}
                </div>
              ))}
              {showSeeAll ? (
                <div {...optionProps(SEE_ALL, 'mt-1 border-t border-border text-sm text-link')}>
                  <span className="flex size-8 shrink-0 items-center justify-center">
                    <Glyph icon={Search} size={16} />
                  </span>
                  <span className="min-w-0 flex-1 truncate">{t('cmdk_see_all', { query: text })}</span>
                </div>
              ) : null}
            </div>
          </div>

          <aside
            aria-label={t('cmdk_preview_label')}
            className="hidden w-80 shrink-0 flex-col overflow-y-auto border-s border-border bg-surface/40 p-4 lg:flex"
          >
            <Preview
              item={activeItem}
              locale={locale}
              categoryName={(slug) => index?.categoryNames.get(slug) ?? null}
              hrefOf={hrefOf}
              onOpen={(item) => select(item.key, false)}
              onDownload={download}
              modKey={modKey}
            />
          </aside>
        </div>

        <div
          aria-hidden="true"
          className="hidden shrink-0 flex-wrap items-center gap-x-4 gap-y-1 border-t border-border px-4 py-2 text-2xs text-fg-subtle md:flex"
        >
          <Hint keys={['↑', '↓']} label={t('cmdk_hint_move')} />
          <Hint keys={['↵']} label={scope === 'scout' && !active ? t('cmdk_scout_hint_ask') : t('cmdk_hint_open')} />
          <Hint keys={[modKey, '↵']} label={t('cmdk_hint_new_tab')} />
          <Hint keys={[modKey, 'D']} label={t('cmdk_hint_download')} />
          <Hint keys={['Tab']} label={t('cmdk_hint_scope')} />
          <Hint keys={['Esc']} label={t('cmdk_hint_close')} />
        </div>
      </div>
    </div>
  );
}

function Hint({ keys, label }: { keys: readonly string[]; label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      {keys.map((key) => (
        <Kbd key={key}>{key}</Kbd>
      ))}
      <span>{label}</span>
    </span>
  );
}

function ScoutPanel({ text, view, onRetry }: { text: string; view: ScoutState | null; onRetry: () => void }) {
  if (view?.status === 'loading') {
    return (
      <div aria-hidden="true" className="flex flex-col gap-2 px-4 py-4">
        <p className="flex items-center gap-2 text-sm text-fg-muted">
          <span className="text-primary">
            <Glyph icon={Sparkles} size={16} />
          </span>
          {t('cmdk_scout_thinking')}
        </p>
        <span className={`${SKELETON} w-4/5`} />
        <span className={`${SKELETON} w-3/5`} />
      </div>
    );
  }
  if (view?.status === 'error') {
    return (
      <div role="alert" className="flex flex-col items-start gap-2 border-b border-border px-4 py-3 text-sm">
        <p className="font-medium text-fg">
          {view.reason === 'rate' ? t('cmdk_scout_error_rate') : t('cmdk_scout_error_title')}
        </p>
        <p className="text-fg-muted">
          {view.reason === 'rate' ? t('cmdk_scout_error_rate_hint') : t('cmdk_scout_error_hint')}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-md px-2 text-sm font-medium text-link hover:bg-fg/8 md:min-h-8"
        >
          <Glyph icon={RotateCw} size={14} />
          {t('cmdk_retry')}
        </button>
      </div>
    );
  }
  if (view?.status === 'done') {
    return (
      <div className="flex flex-col gap-1 border-b border-border px-4 py-3">
        <p className="flex items-center gap-1.5 font-mono text-2xs tracking-wide text-fg-subtle uppercase">
          <span className="text-primary">
            <Glyph icon={Sparkles} size={12} />
          </span>
          {t('cmdk_scout_answer_label')}
        </p>
        <p className="text-sm text-fg">{view.answer === '' ? t('cmdk_scout_no_picks') : view.answer}</p>
        <p className="text-2xs text-fg-subtle">{t('cmdk_scout_ai_note')}</p>
      </div>
    );
  }
  return (
    <p className="px-4 py-4 text-sm text-fg-muted">
      {text.length >= SCOUT_MIN_LENGTH ? t('cmdk_scout_press_enter') : t('cmdk_scout_intro')}
    </p>
  );
}
