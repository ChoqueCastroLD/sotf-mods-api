/**
 * Comment thread of a request (oldest first): the list with «Load more», the new-comment form and
 * the per-comment actions (edit and delete by the author, delete by staff, report by others).
 */
import { localizePath } from '@sotf/i18n';
import { Button } from '@sotf/ui/button';
import { type FormEvent, useState } from 'react';
import { Composer } from '../comments/Composer.tsx';
import { api, type Failure, get } from '../comments/lib/api.ts';
import { localized, pageLang } from '../comments/lib/i18n.tsx';
import { htmlToMarkdown } from '../comments/lib/markdown.ts';
import { ActionMenu, type MenuItem } from '../comments/lib/menu.tsx';
import { pageLocale, t } from '../comments/lib/messages.ts';
import type { MeSummary } from '../comments/lib/session.ts';
import { FailureNote, Modal, notify } from '../comments/lib/ui.tsx';
import { REQUEST_LIMITS } from './rules.ts';
import type { CursorPage, RequestCommentDTO } from './types.ts';

const PAGE_SIZE = 50;

const dateFormats = new Map<string, Intl.DateTimeFormat>();
function formatDay(iso: string): string {
  const lang = pageLang();
  let format = dateFormats.get(lang);
  if (!format) {
    format = new Intl.DateTimeFormat(lang, { dateStyle: 'medium', timeZone: 'UTC' });
    dateFormats.set(lang, format);
  }
  return format.format(new Date(iso));
}

function authorName(comment: RequestCommentDTO): string {
  return comment.author?.displayName || comment.author?.handle || t('social_deleted_user');
}

function CommentForm({
  requestId,
  editing,
  onDone,
  onCancel,
}: {
  requestId: number;
  editing?: RequestCommentDTO;
  onDone: (comment: RequestCommentDTO) => void;
  onCancel?: () => void;
}) {
  const [body, setBody] = useState(editing ? htmlToMarkdown(editing.bodyHtml) : '');
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);
  const [empty, setEmpty] = useState(false);

  const submit = async (event?: FormEvent) => {
    event?.preventDefault();
    if (busy) return;
    const text = body.normalize('NFC').trim();
    if (!text) {
      setEmpty(true);
      return;
    }
    setEmpty(false);
    setFailure(null);
    setBusy(true);
    const result = editing
      ? await api<RequestCommentDTO>('PATCH', `/api/v2/request-comments/${editing.id}`, { bodyMd: text })
      : await api<RequestCommentDTO>('POST', `/api/v2/requests/${requestId}/comments`, { bodyMd: text });
    setBusy(false);
    if (!result.ok) {
      setFailure(result);
      return;
    }
    if (!editing) setBody('');
    notify(editing ? t('social_comment_edited') : t('social_comment_posted'));
    onDone(result.data);
  };

  return (
    <form className="grid gap-3" onSubmit={submit} noValidate aria-busy={busy || undefined}>
      <Composer
        value={body}
        onChange={(value) => {
          setBody(value);
          setEmpty(false);
        }}
        maxLength={REQUEST_LIMITS.commentMax}
        label={editing ? t('requests_comment_edit_label') : t('requests_comment_label')}
        labelHidden={!editing}
        placeholder={editing ? undefined : t('requests_comment_placeholder')}
        autoFocus={editing !== undefined}
        disabled={busy}
        invalid={empty}
        searchMentions={false}
        onSubmitShortcut={() => void submit()}
      />
      {empty ? (
        <p role="alert" className="text-sm text-danger">
          {t('social_comment_empty')}
        </p>
      ) : null}
      {failure ? <FailureNote failure={failure} /> : null}
      <div className="flex flex-wrap items-center justify-end gap-2">
        {onCancel ? (
          <Button type="button" variant="ghost" onClick={onCancel} disabled={busy}>
            {t('social_action_cancel')}
          </Button>
        ) : null}
        <Button type="submit" variant="primary" loading={busy}>
          {editing ? t('social_action_save') : t('requests_comment_submit')}
        </Button>
      </div>
    </form>
  );
}

export interface ThreadProps {
  requestId: number;
  initial: CursorPage<RequestCommentDTO>;
  session: MeSummary;
  verifyHref: string;
  count: number;
  onCount: (count: number) => void;
  onReport: (commentId: number) => void;
}

export function Thread({ requestId, initial, session, verifyHref, count, onCount, onReport }: ThreadProps) {
  const [items, setItems] = useState(initial.items);
  const [cursor, setCursor] = useState(initial.nextCursor);
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [deleting, setDeleting] = useState<RequestCommentDTO | null>(null);
  const [deleteBusy, setDeleteBusy] = useState(false);
  const [deleteFailure, setDeleteFailure] = useState<Failure | null>(null);
  const isStaff = session.role === 'moderator' || session.role === 'admin';

  const loadMore = async () => {
    if (!cursor || loading) return;
    setLoading(true);
    setFailure(null);
    const result = await get<CursorPage<RequestCommentDTO>>(
      `/api/v2/requests/${requestId}/comments?limit=${PAGE_SIZE}&cursor=${encodeURIComponent(cursor)}`,
    );
    setLoading(false);
    if (!result.ok) {
      setFailure(result);
      return;
    }
    setItems((list) => [...list, ...result.data.items.filter((next) => !list.some((known) => known.id === next.id))]);
    setCursor(result.data.nextCursor);
  };

  const confirmDelete = async () => {
    if (!deleting || deleteBusy) return;
    setDeleteBusy(true);
    setDeleteFailure(null);
    const result = await api('DELETE', `/api/v2/request-comments/${deleting.id}`);
    setDeleteBusy(false);
    if (!result.ok) {
      setDeleteFailure(result);
      return;
    }
    setItems((list) => list.filter((comment) => comment.id !== deleting.id));
    onCount(Math.max(0, count - 1));
    setDeleting(null);
    notify(t('social_comment_deleted'));
  };

  return (
    <section aria-labelledby="request-comments-title" className="flex flex-col gap-4">
      <h2 id="request-comments-title" className="text-lg font-semibold text-fg">
        {t('requests_comments_title')}
        <span className="ms-1 font-mono text-sm font-normal text-fg-muted">{count}</span>
      </h2>

      {session.emailVerified ? (
        <CommentForm
          requestId={requestId}
          onDone={(comment) => {
            setItems((list) => [...list, comment]);
            onCount(count + 1);
          }}
        />
      ) : (
        <p className="flex flex-wrap items-center gap-2 text-sm text-fg-muted">
          {t('social_verify_to_comment')}
          <a href={verifyHref} className="font-semibold text-link underline underline-offset-3">
            {t('social_verify_action')}
          </a>
        </p>
      )}

      {items.length === 0 ? (
        <p className="text-sm text-fg-muted">{t('requests_comments_empty')}</p>
      ) : (
        <ol className="flex flex-col gap-3">
          {items.map((comment) => {
            const own = comment.author?.id === session.id;
            const menu: MenuItem[] = [];
            if (own)
              menu.push({ key: 'edit', label: t('social_action_edit'), onSelect: () => setEditingId(comment.id) });
            if (own || isStaff) {
              menu.push({
                key: 'delete',
                label: t('social_action_delete'),
                onSelect: () => setDeleting(comment),
                danger: true,
              });
            }
            if (!own) menu.push({ key: 'report', label: t('requests_report'), onSelect: () => onReport(comment.id) });
            return (
              <li
                key={comment.id}
                id={`c-${comment.id}`}
                className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-4 target:border-signal"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    {comment.author ? (
                      <a
                        href={localizePath(`/profile/${encodeURIComponent(comment.author.handle)}`, pageLocale())}
                        className="font-semibold text-fg hover:underline"
                      >
                        {authorName(comment)}
                      </a>
                    ) : (
                      <span className="font-semibold text-fg">{authorName(comment)}</span>
                    )}
                    {comment.isAdopter ? (
                      <span className="rounded-sm bg-warning-soft px-1.5 py-0.5 text-xs font-semibold text-warning">
                        {t('requests_badge_adopter')}
                      </span>
                    ) : null}
                    {comment.isRequestAuthor ? (
                      <span className="rounded-sm bg-fg/8 px-1.5 py-0.5 text-xs font-semibold text-fg-muted">
                        {t('requests_badge_author')}
                      </span>
                    ) : null}
                    <time dateTime={comment.createdAt} className="text-fg-muted">
                      {formatDay(comment.createdAt)}
                    </time>
                    {comment.editedAt ? <span className="text-fg-muted">({t('requests_edited')})</span> : null}
                  </p>
                  {editingId === comment.id ? null : <ActionMenu label={t('requests_more_actions')} items={menu} />}
                </div>
                {editingId === comment.id ? (
                  <CommentForm
                    requestId={requestId}
                    editing={comment}
                    onCancel={() => setEditingId(null)}
                    onDone={(updated) => {
                      setItems((list) => list.map((entry) => (entry.id === updated.id ? updated : entry)));
                      setEditingId(null);
                    }}
                  />
                ) : (
                  <div
                    className="prose-sm"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitised markdown-lite from the API
                    dangerouslySetInnerHTML={{ __html: localized(comment.bodyHtml) }}
                  />
                )}
              </li>
            );
          })}
        </ol>
      )}

      {failure ? <FailureNote failure={failure} onRetry={() => void loadMore()} /> : null}
      {cursor ? (
        <Button variant="secondary" loading={loading} onClick={() => void loadMore()} className="self-start">
          {t('social_action_load_more')}
        </Button>
      ) : null}

      <Modal
        open={deleting !== null}
        onClose={() => setDeleting(null)}
        title={t('requests_comment_delete_title')}
        description={t('requests_comment_delete_text')}
        size="sm"
      >
        <div className="grid gap-3">
          {deleteFailure ? <FailureNote failure={deleteFailure} /> : null}
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="ghost" onClick={() => setDeleting(null)} disabled={deleteBusy}>
              {t('social_action_cancel')}
            </Button>
            <Button variant="danger" loading={deleteBusy} onClick={() => void confirmDelete()}>
              {t('social_action_delete')}
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
