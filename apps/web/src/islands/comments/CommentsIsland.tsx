/**
 * Comments island (WP-70, PLAN §7.6, research/03 §5.8), mounted on `[data-island="comments"]` of
 * the mod page. It takes over the server-rendered first page (same endpoint, same order, edge
 * cached) once its data is in, so nothing jumps; until then, and when the API fails, the SSR list
 * stays readable.
 *
 * - Sort Top / New, «Load more» (cursor), «View N more replies» (the permalink thread).
 * - Permalinks `#comment-{id}`: a comment outside the first page is loaded and shown first.
 * - Signed in: editor, replies, reactions, edit/delete, report and the mod author's controls.
 *   Unverified e-mail: a clear note instead of a form that would fail. Guests: «Sign in to
 *   comment» (never a broken form).
 */
import { Button } from '@sotf/ui/button';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CommentForm } from './CommentForm.tsx';
import { Thread } from './CommentView.tsx';
import { StickyComposer } from './StickyComposer.tsx';
import type { MentionCandidate } from './Composer.tsx';
import { CommentsContext, type CommentsContextValue } from './context.ts';
import { type Failure, get } from './lib/api.ts';
import { SocialI18n } from './lib/i18n.tsx';
import { emitCount } from './lib/live-count.ts';
import { t } from './lib/messages.ts';
import type { MeSummary } from './lib/session.ts';
import { FailureNote, LiveRegion, ReportDialog } from './lib/ui.tsx';
import type { AnyComment, Comment, CommentPage, CommentSort, CommentThread, VersionOption } from './types.ts';

export const COMMENTS_PAGE_SIZE = 10;

export interface CommentsIslandProps {
  modId: number;
  modAuthorId: number;
  session: MeSummary | null;
  loginHref: string;
  verifyHref: string;
  turnstileSiteKey: string | undefined;
  /** Called once the island's list replaced the server-rendered one. */
  onTakeOver: () => void;
  /** `#comment-{id}` of the URL, if any. */
  focusId: number | null;
  /** `sheet`: inside the bottom sheet of phones, with the composer docked at the bottom. */
  layout?: 'inline' | 'sheet';
  /** The mount point (the page can ask a sheet's composer to open on it). */
  host?: HTMLElement | null;
}

function merge<T extends AnyComment>(current: T, fresh: Partial<AnyComment>): T {
  const next = { ...current, ...fresh } as T;
  if ('replies' in current) {
    // Writes answer with the comment alone; keep the loaded replies.
    (next as Comment).replies = (current as Comment).replies;
    (next as Comment).repliesCount = Math.max(
      (current as Comment).repliesCount,
      (fresh as Partial<Comment>).repliesCount ?? 0,
    );
  } else {
    delete (next as Partial<Comment>).replies;
    delete (next as Partial<Comment>).repliesCount;
  }
  return next;
}

function participantsOf(items: readonly Comment[], session: MeSummary | null): MentionCandidate[] {
  const seen = new Set<string>();
  const out: MentionCandidate[] = [];
  const add = (comment: AnyComment) => {
    const author = comment.author;
    if (!author || comment.status === 'deleted') return;
    const key = author.handle.toLowerCase();
    if (seen.has(key) || author.id === session?.id) return;
    seen.add(key);
    out.push({ handle: author.handle, displayName: author.displayName || author.handle });
  };
  for (const comment of items) {
    add(comment);
    for (const reply of comment.replies) add(reply);
  }
  return out;
}

export function CommentsIsland(props: CommentsIslandProps) {
  const { modId, modAuthorId, session, loginHref, verifyHref, turnstileSiteKey, onTakeOver, focusId } = props;
  const sheet = props.layout === 'sheet';
  const [composing, setComposing] = useState(props.host?.dataset.compose === '1');
  const [sort, setSort] = useState<CommentSort>('top');
  const [items, setItems] = useState<Comment[] | null>(null);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState<'initial' | 'sort' | 'more' | null>('initial');
  const [failure, setFailure] = useState<Failure | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const [reportId, setReportId] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const tookOver = useRef(false);
  const versions = useRef<Promise<VersionOption[]> | null>(null);
  const request = useRef<AbortController | null>(null);
  const lastAttempt = useRef<[CommentSort, string | null, 'initial' | 'sort' | 'more']>(['top', null, 'initial']);

  const announce = useCallback((message: string) => {
    // Re-announce identical messages.
    setAnnouncement('');
    window.setTimeout(() => setAnnouncement(message), 50);
  }, []);

  const load = useCallback(
    async (nextSort: CommentSort, after: string | null, kind: 'initial' | 'sort' | 'more') => {
      request.current?.abort();
      lastAttempt.current = [nextSort, after, kind];
      const controller = new AbortController();
      request.current = controller;
      setLoading(kind);
      setFailure(null);
      const params = new URLSearchParams({ sort: nextSort, limit: String(COMMENTS_PAGE_SIZE) });
      if (after) params.set('cursor', after);
      const result = await get<CommentPage>(`/api/v2/mods/${modId}/comments?${params.toString()}`, controller.signal);
      if (controller.signal.aborted) return;
      setLoading(null);
      if (!result.ok) {
        setFailure(result);
        return;
      }
      let page = result.data.items;
      // Permalink outside the first page: load its thread and show it first.
      if (kind === 'initial' && focusId !== null) {
        const present = page.some((item) => item.id === focusId || item.replies.some((reply) => reply.id === focusId));
        if (!present) {
          const thread = await get<CommentThread>(`/api/v2/comments/${focusId}`, controller.signal);
          if (thread.ok && thread.data.comment.modId === modId) {
            page = [thread.data.comment, ...page.filter((item) => item.id !== thread.data.comment.id)];
          }
        }
        setFocused(focusId);
      }
      setItems((current) =>
        kind === 'more' && current
          ? [...current, ...page.filter((item) => !current.some((c) => c.id === item.id))]
          : page,
      );
      setCursor(result.data.nextCursor);
      if (kind !== 'initial') {
        announce(kind === 'more' ? t('social_comments_loaded', { count: page.length }) : t('social_comments_sorted'));
      }
      if (!tookOver.current) {
        tookOver.current = true;
        onTakeOver();
      }
    },
    [modId, focusId, announce, onTakeOver],
  );

  useEffect(() => {
    void load('top', null, 'initial');
    return () => request.current?.abort();
  }, [load]);

  const changeSort = (next: CommentSort) => {
    if (next === sort) return;
    setSort(next);
    setFocused(null);
    void load(next, null, 'sort');
  };

  const patch = useCallback((id: number, fresh: Partial<AnyComment>) => {
    setItems(
      (current) =>
        current?.map((item) => {
          if (item.id === id) return merge(item, fresh);
          if (!item.replies.some((reply) => reply.id === id)) return item;
          return { ...item, replies: item.replies.map((reply) => (reply.id === id ? merge(reply, fresh) : reply)) };
        }) ?? current,
    );
  }, []);

  const addReply = useCallback((rootId: number, reply: Comment) => {
    const { replies: _replies, repliesCount: _count, ...fields } = reply;
    emitCount('comments', 1);
    setItems(
      (current) =>
        current?.map((item) =>
          item.id === rootId
            ? { ...item, replies: [...item.replies, fields], repliesCount: item.repliesCount + 1 }
            : item,
        ) ?? current,
    );
  }, []);

  const remove = useCallback((id: number) => {
    let snapshot: Comment[] | null = null;
    emitCount('comments', -1);
    setItems((current) => {
      snapshot = current;
      if (!current) return current;
      const out: Comment[] = [];
      for (const item of current) {
        if (item.id === id) {
          // Soft delete keeps the place of a comment that has replies.
          if (item.repliesCount > 0) out.push({ ...item, status: 'deleted', bodyHtml: '', images: [] });
          continue;
        }
        const replies = item.replies.filter((reply) => reply.id !== id);
        out.push(
          replies.length === item.replies.length
            ? item
            : { ...item, replies, repliesCount: Math.max(0, item.repliesCount - 1) },
        );
      }
      return out;
    });
    return () => {
      emitCount('comments', 1);
      if (snapshot) setItems(snapshot);
    };
  }, []);

  const expand = useCallback(async (rootId: number) => {
    const result = await get<CommentThread>(`/api/v2/comments/${rootId}`);
    if (!result.ok) return false;
    setItems((current) => current?.map((item) => (item.id === rootId ? result.data.comment : item)) ?? current);
    return true;
  }, []);

  const loadVersions = useCallback(() => {
    versions.current ??= get<{ items: Array<{ id: number; version: string; status: string }> }>(
      `/api/v2/mods/${modId}/versions`,
    ).then((result) => {
      if (!result.ok) {
        versions.current = null;
        return [];
      }
      return result.data.items
        .filter((item) => item.status === 'active' || item.status === 'yanked')
        .map((item) => ({ id: item.id, version: item.version }));
    });
    return versions.current;
  }, [modId]);

  const participants = useMemo(() => participantsOf(items ?? [], session), [items, session]);

  const context = useMemo<CommentsContextValue>(
    () => ({
      modId,
      modAuthorId,
      session,
      loginHref,
      turnstileSiteKey,
      participants,
      loadVersions,
      report: setReportId,
      patch,
      addReply,
      remove,
      expand,
      announce,
    }),
    [
      modId,
      modAuthorId,
      session,
      loginHref,
      turnstileSiteKey,
      participants,
      loadVersions,
      patch,
      addReply,
      remove,
      expand,
      announce,
    ],
  );

  const writer = session ? (
    session.emailVerified ? (
      <CommentForm
        mode={{ kind: 'new' }}
        {...(sheet ? { autoFocus: true } : {})}
        onDone={(created) => {
          emitCount('comments', 1);
          setItems((current) => [created, ...(current ?? [])]);
          setFocused(created.id);
          setComposing(false);
        }}
      />
    ) : (
      <p className="rounded-md border border-border bg-surface p-3 text-sm">
        {t('social_verify_to_comment')}{' '}
        <a href={verifyHref} className="font-semibold text-link underline underline-offset-3">
          {t('social_verify_action')}
        </a>
      </p>
    )
  ) : sheet ? (
    <a
      href={loginHref}
      className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-5 font-semibold text-primary-fg active:bg-primary-hover"
    >
      {t('social_comment_sign_in')}
    </a>
  ) : (
    <p className="text-sm text-fg-muted">
      <a
        href={loginHref}
        className="inline-flex min-h-11 items-center font-semibold text-link underline underline-offset-3"
      >
        {t('social_comment_sign_in')}
      </a>
    </p>
  );

  const sorts: CommentSort[] = ['top', 'new'];

  return (
    <SocialI18n>
      <CommentsContext.Provider value={context}>
        <div className="grid gap-5">
          {sheet ? null : writer}
          {items && (items.length > 0 || sort === 'new') ? (
            <fieldset
              className="m-0 flex min-w-0 flex-wrap items-center gap-2 border-0 p-0"
              aria-label={t('social_comments_sort')}
            >
              {sorts.map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={sort === value}
                  onClick={() => changeSort(value)}
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium text-fg-muted hover:border-border-strong hover:text-fg aria-pressed:border-primary aria-pressed:text-fg md:min-h-9"
                >
                  {value === 'top' ? t('social_comments_sort_top') : t('social_comments_sort_new')}
                </button>
              ))}
            </fieldset>
          ) : null}
          {failure && loading === null ? (
            <FailureNote failure={failure} onRetry={() => void load(...lastAttempt.current)} />
          ) : null}
          {items ? (
            items.length > 0 ? (
              <ol
                className={`grid gap-6 transition-opacity ${loading === 'sort' ? 'opacity-60' : ''}`}
                aria-busy={loading === 'sort' || undefined}
                data-comment-list
              >
                {items.map((comment) => (
                  <Thread key={comment.id} comment={comment} focusId={focused} />
                ))}
              </ol>
            ) : sheet ? (
              <div className="grid justify-items-center gap-3 py-4 text-center">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/art/entity/empty-320.avif 320w, /art/entity/empty-640.avif 640w"
                    sizes="160px"
                  />
                  <img
                    src="/art/entity/empty-320.webp"
                    alt=""
                    width={160}
                    height={160}
                    loading="lazy"
                    decoding="async"
                    className="size-40 rounded-2xl border border-border object-cover"
                  />
                </picture>
                <p className="text-fg-muted">{t('social_comments_empty')}</p>
              </div>
            ) : (
              <p className="text-fg-muted">{t('social_comments_empty')}</p>
            )
          ) : null}
          {items && cursor ? (
            <Button
              variant="secondary"
              onClick={() => void load(sort, cursor, 'more')}
              loading={loading === 'more'}
              className="justify-self-start"
            >
              {t('social_action_load_more')}
            </Button>
          ) : null}
        </div>
        {sheet ? (
          <StickyComposer
            canWrite={Boolean(session?.emailVerified)}
            open={composing}
            onOpenChange={setComposing}
            host={props.host ?? null}
          >
            {writer}
          </StickyComposer>
        ) : null}
        <ReportDialog
          target={reportId === null ? null : { type: 'comment', id: reportId }}
          onClose={() => setReportId(null)}
        />
        <LiveRegion message={announcement} />
      </CommentsContext.Provider>
    </SocialI18n>
  );
}
