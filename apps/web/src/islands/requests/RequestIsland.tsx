/**
 * Interactive part of `/requests/:id` for signed-in members: vote, «I'm working on it», link the
 * mod that fulfils it, close / reopen, edit, delete, report, and the comment thread.
 *
 * Who can do what (the API enforces every rule again):
 * - verified members vote (not on their own request, only while it is open or in progress);
 * - creators adopt an open request and give it back; the adopter links a published mod of theirs;
 * - the author and staff close, reopen and delete; the author edits until it is fulfilled;
 * - everybody else can report.
 * Actions that change what the server-rendered article shows (status, title, body) reload the page
 * with a cache-busting parameter, so the edge cache never serves the old version back.
 */
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { api, type Failure } from '../comments/lib/api.ts';
import { formatNumber } from '../comments/lib/i18n.tsx';
import { htmlToMarkdown } from '../comments/lib/markdown.ts';
import { ActionMenu, type MenuItem } from '../comments/lib/menu.tsx';
import { t } from '../comments/lib/messages.ts';
import type { MeSummary } from '../comments/lib/session.ts';
import { FailureNote, Modal, notify, ReportDialog, type ReportDialogProps } from '../comments/lib/ui.tsx';
import { FulfillDialog } from './FulfillDialog.tsx';
import { RequestForm } from './RequestForm.tsx';
import { Thread } from './Thread.tsx';
import type { CursorPage, RequestCommentDTO, RequestDTO, VoteResult } from './types.ts';

export interface RequestIslandProps {
  request: RequestDTO;
  comments: CursorPage<RequestCommentDTO>;
  voted: boolean;
  session: MeSummary;
  loginHref: string;
  verifyHref: string;
  listHref: string;
}

/** Reloads the page bypassing the edge copy (`?v=` is a different cache key). */
function reloadFresh(): void {
  const url = new URL(location.href);
  url.searchParams.set('v', Date.now().toString(36));
  url.hash = '';
  location.replace(url);
}

export function RequestIsland({
  request: initial,
  comments,
  voted: initialVoted,
  session,
  verifyHref,
  listHref,
}: RequestIslandProps) {
  const [request, setRequest] = useState(initial);
  const [voted, setVoted] = useState(initialVoted);
  const [busy, setBusy] = useState<string | null>(null);
  const [failure, setFailure] = useState<Failure | null>(null);
  const [dialog, setDialog] = useState<'edit' | 'fulfill' | 'delete' | null>(null);
  const [report, setReport] = useState<ReportDialogProps['target']>(null);

  const isStaff = session.role === 'moderator' || session.role === 'admin';
  const isAuthor = request.author?.id === session.id;
  const isAdopter = request.adopter?.id === session.id;
  const active = request.status === 'open' || request.status === 'adopted';
  const verified = session.emailVerified;
  const base = `/api/v2/requests/${request.id}`;

  const run = async (key: string, call: () => Promise<{ ok: true } | Failure>, done: () => void) => {
    if (busy) return;
    setBusy(key);
    setFailure(null);
    const result = await call();
    setBusy(null);
    if (result.ok) done();
    else setFailure(result);
  };

  const vote = () =>
    run(
      'vote',
      async () => {
        const result = await api<VoteResult>(voted ? 'DELETE' : 'PUT', `${base}/vote`);
        if (!result.ok) return result;
        setVoted(result.data.voted);
        setRequest((current) => ({ ...current, voteCount: result.data.voteCount }));
        return { ok: true };
      },
      () => {},
    );

  const change = (key: string, method: 'PUT' | 'DELETE' | 'POST', path: string) =>
    run(
      key,
      async () => {
        const result = await api<RequestDTO>(method, `${base}${path}`);
        return result.ok ? { ok: true } : result;
      },
      reloadFresh,
    );

  const items: MenuItem[] = [];
  if (request.status !== 'fulfilled') {
    if (isAuthor) items.push({ key: 'edit', label: t('requests_edit'), onSelect: () => setDialog('edit') });
    if (isAuthor || isStaff) {
      items.push(
        request.status === 'closed'
          ? { key: 'reopen', label: t('requests_reopen'), onSelect: () => void change('reopen', 'POST', '/reopen') }
          : { key: 'close', label: t('requests_close'), onSelect: () => void change('close', 'POST', '/close') },
      );
    }
  }
  if (isAuthor || isStaff) {
    items.push({ key: 'delete', label: t('requests_delete'), onSelect: () => setDialog('delete'), danger: true });
  }
  if (!isAuthor) {
    items.push({
      key: 'report',
      label: t('requests_report'),
      onSelect: () => setReport({ type: 'request', id: request.id }),
    });
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-surface p-3">
          <span className="inline-flex items-center gap-1 rounded-md bg-raised px-3 py-2 font-mono font-semibold text-fg tabular-nums">
            <Icon icon={ChevronUp} size={18} className="text-signal" />
            {formatNumber(request.voteCount)}
          </span>
          <span className="text-sm text-fg-muted">{t('requests_votes', { count: request.voteCount })}</span>

          {active && !isAuthor && verified ? (
            <Button
              variant={voted ? 'secondary' : 'primary'}
              loading={busy === 'vote'}
              aria-pressed={voted}
              aria-label={voted ? t('requests_vote_aria_remove') : t('requests_vote_aria_add')}
              onClick={vote}
            >
              {voted ? t('requests_voted') : t('requests_vote')}
            </Button>
          ) : null}

          {request.status === 'open' && verified ? (
            <Button
              variant="secondary"
              loading={busy === 'adopt'}
              onClick={() => void change('adopt', 'PUT', '/adopt')}
            >
              {t('requests_adopt')}
            </Button>
          ) : null}
          {request.status === 'adopted' && (isAdopter || isStaff) ? (
            <Button
              variant="outline"
              loading={busy === 'release'}
              onClick={() => void change('release', 'DELETE', '/adopt')}
            >
              {t('requests_release')}
            </Button>
          ) : null}
          {active && verified && (isAdopter || request.status === 'open') ? (
            <Button variant="secondary" onClick={() => setDialog('fulfill')}>
              {t('requests_fulfill')}
            </Button>
          ) : null}

          <div className="ms-auto">
            <ActionMenu label={t('requests_more_actions')} items={items} />
          </div>

          {isAuthor && active ? <p className="w-full text-xs text-fg-muted">{t('requests_vote_own')}</p> : null}
          {!verified ? (
            <p className="flex w-full flex-wrap items-center gap-2 text-sm text-fg-muted">
              {t('requests_verify_hint')}
              <a href={verifyHref} className="font-semibold text-link underline underline-offset-3">
                {t('social_verify_action')}
              </a>
            </p>
          ) : null}
          {failure ? (
            <div className="w-full">
              <FailureNote failure={failure} />
            </div>
          ) : null}
        </div>

        <Thread
          requestId={request.id}
          initial={comments}
          session={session}
          verifyHref={verifyHref}
          onCount={(count) => setRequest((current) => ({ ...current, commentCount: count }))}
          onReport={(id) => setReport({ type: 'request_comment', id })}
          count={request.commentCount}
        />
      </div>

      <Modal open={dialog === 'edit'} onClose={() => setDialog(null)} title={t('requests_edit')}>
        <RequestForm
          autoFocus
          initialTitle={request.title}
          initialBody={request.bodyHtml ? htmlToMarkdown(request.bodyHtml) : ''}
          submitLabel={t('social_action_save')}
          onCancel={() => setDialog(null)}
          onSubmit={async ({ title, bodyMd }) => {
            const result = await api<RequestDTO>('PATCH', base, { title, bodyMd: bodyMd || null });
            if (!result.ok) return result;
            notify(t('requests_saved'));
            reloadFresh();
            return null;
          }}
        />
      </Modal>
      <FulfillDialog
        open={dialog === 'fulfill'}
        handle={session.handle}
        requestId={request.id}
        onClose={() => setDialog(null)}
        onDone={reloadFresh}
      />
      <Modal
        open={dialog === 'delete'}
        onClose={() => setDialog(null)}
        title={t('requests_delete_title')}
        description={t('requests_delete_text')}
        size="sm"
      >
        <div className="flex flex-wrap justify-end gap-2">
          <Button variant="ghost" onClick={() => setDialog(null)}>
            {t('social_action_cancel')}
          </Button>
          <Button
            variant="danger"
            loading={busy === 'delete'}
            onClick={() =>
              void run(
                'delete',
                async () => {
                  const result = await api('DELETE', base);
                  return result.ok ? { ok: true } : result;
                },
                () => {
                  notify(t('requests_deleted_done'));
                  location.assign(listHref);
                },
              )
            }
          >
            {t('social_action_delete')}
          </Button>
        </div>
      </Modal>
      <ReportDialog target={report} onClose={() => setReport(null)} />
    </>
  );
}
