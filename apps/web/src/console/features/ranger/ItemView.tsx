/**
 * The item view of Ranger Station (research/03 §6.10, PLAN §7.4 «Vista de ítem»): what the item
 * is, automated checks and scan, then tabs — files diff, manifest diff, description, media,
 * changelog, author history — and the decision bar with its shortcuts:
 *
 *   a approve · c request changes (template) · r reject (template) · e escalate to the admins
 *
 * Any ranger can take the item («Assign to me», released by the same button) or escalate it with
 * a note; both update the row in the lane at once. Report items show what was reported (reason,
 * target, details, reporter), and users cannot be «hidden».
 * Comments held for review are published (approve) or hidden with a reason (reject). Reports are
 * resolved (optionally hiding the content) or dismissed. `triage` is the phone layout (research/03
 * §6.10 «Móvil: solo triaje»): summary, checks and description with approve/reject; the diffs need
 * a tablet or a desktop.
 */
import { isApiError } from '@sotf/contracts/client';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Kbd } from '@sotf/ui/kbd';
import { Menu, type MenuEntry } from '@sotf/ui/menu';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { type TabItem, Tabs } from '@sotf/ui/tabs';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import {
  ArrowLeft,
  Check,
  CheckCheck,
  ExternalLink,
  EyeOff,
  Flag,
  MessageSquareWarning,
  Monitor,
  MoreHorizontal,
  RotateCcw,
  Siren,
  Trash2,
  UserCheck,
  UserMinus,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { useMe } from '../../hooks/use-me.ts';
import { useShortcut } from '../../hooks/use-shortcuts.tsx';
import { problemCode } from '../../lib/errors.ts';
import { notify } from '../../lib/notify.ts';
import {
  dropFromLane,
  itemQuery,
  type ModerationAction,
  needsReason,
  type QueueItem,
  type QueueItemDetail,
  type ReasonAction,
  type Report,
  rangerApi,
  refreshModeration,
  storeQueueItem,
} from './api.ts';
import { DecisionDialog, type DecisionRequest } from './DecisionDialog.tsx';
import { EscalateDialog } from './EscalateDialog.tsx';
import {
  AuthorHistoryPanel,
  ChecksPanel,
  FileDiffPanel,
  HtmlPanel,
  ManifestDiffPanel,
  MediaPanel,
} from './ItemPanels.tsx';
import {
  actionLabel,
  approveLabel,
  decidedMessage,
  laneLabel,
  reportReasonLabel,
  reportTargetLabel,
} from './labels.ts';
import { ReportDialog, type ReportResolution } from './ReportDialog.tsx';
import { ScanOverrideDialog, scanIdOf } from './ScanOverrideDialog.tsx';
import { dateTime, PanelError, publicHref, RiskBadge, reportFailure, UserChip, WaitingBadge } from './shared.tsx';

type TabValue = 'files' | 'manifest' | 'description' | 'media' | 'changelog' | 'history';

export interface ItemViewProps {
  itemId: string;
  /** The list row, shown while the detail loads. */
  preview: QueueItem | null;
  /** Phone layout: triage only. */
  triage: boolean;
  /** The item left the lane (decided here): select the next one. */
  onDone: (itemId: string) => void;
  /** Phone layout: back to the list. */
  onBack?: () => void;
}

export function ItemView({ itemId, preview, triage, onDone, onBack }: ItemViewProps) {
  const query = useQuery(itemQuery(itemId));

  if (query.isPending) return <ItemSkeleton preview={preview} onBack={onBack} />;
  if (query.isError) {
    if (isApiError(query.error) && query.error.status === 404) {
      return (
        <EmptyState
          icon={<Icon icon={CheckCheck} size={32} />}
          title={m.ranger_item_gone_title()}
          description={m.ranger_item_gone_text()}
          action={
            <Button variant="secondary" onClick={() => onDone(itemId)}>
              {m.ranger_item_next()}
            </Button>
          }
        />
      );
    }
    return <PanelError error={query.error} onRetry={() => void query.refetch()} />;
  }
  return <ItemDetail detail={query.data} triage={triage} onDone={onDone} {...(onBack ? { onBack } : {})} />;
}

function ItemSkeleton({ preview, onBack }: { preview: QueueItem | null; onBack?: (() => void) | undefined }) {
  return (
    <div className="grid gap-4">
      {onBack ? <BackButton onBack={onBack} /> : null}
      {preview ? <h2 className="text-xl font-bold text-fg">{preview.title}</h2> : null}
      <SkeletonGroup label={m.ranger_loading()} className="grid gap-4">
        {preview ? null : <Skeleton className="h-8 w-72 max-w-full" />}
        <Skeleton className="h-5 w-96 max-w-full" />
        <Skeleton className="h-36 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-48 w-full" />
      </SkeletonGroup>
    </div>
  );
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      icon={<Icon icon={ArrowLeft} size={16} />}
      onClick={onBack}
      className="justify-self-start max-md:hidden"
    >
      {m.ranger_back_to_list()}
    </Button>
  );
}

type Dialog =
  | { kind: 'reason'; action: ReasonAction }
  | { kind: 'comment-reject' }
  | { kind: 'report'; resolution: ReportResolution; hide: boolean }
  | { kind: 'scan' }
  | { kind: 'escalate' }
  | null;

function ItemDetail({
  detail,
  triage,
  onDone,
  onBack,
}: {
  detail: QueueItemDetail;
  triage: boolean;
  onDone: (itemId: string) => void;
  onBack?: () => void;
}) {
  const queryClient = useQueryClient();
  const me = useMe();
  const { item } = detail;
  const [dialog, setDialog] = useState<Dialog>(null);
  const [busy, setBusy] = useState<ModerationAction | null>(null);
  const [working, setWorking] = useState<'assign' | 'escalate' | null>(null);
  const mine = item.assignee?.id === me.user.id;
  // Users can be reported but not hidden (sanctions live on the user card).
  const canHideReport = detail.report ? detail.report.targetType !== 'user' : true;
  const [tab, setTab] = useState<TabValue>(
    triage ? 'description' : item.targetType === 'comment' ? 'description' : 'files',
  );
  const postReview = item.lane === 'post_review';
  const isReport = item.targetType === 'report';
  const isComment = item.targetType === 'comment';
  const allowed = new Set(detail.allowedActions);
  const can = (action: ModerationAction) => !isReport && allowed.has(action);
  const scanId = scanIdOf(detail.scan);

  const finish = (message: string) => {
    notify.success(message);
    dropFromLane(queryClient, item.lane, item.id);
    queryClient.removeQueries({ queryKey: itemQuery(item.id).queryKey });
    onDone(item.id);
    void refreshModeration(queryClient);
  };

  /** Runs a decision; rethrows so the dialogs stay open on failure. */
  const decide = async (action: ModerationAction, request: Omit<DecisionRequest, 'action'> = {}) => {
    // One decision at a time (a double press must not send two).
    if (busy) throw new Error('ranger: a decision is already running');
    setBusy(action);
    try {
      if (item.targetType === 'mod') {
        await rangerApi.decideMod(item.targetId, { action, ...request });
      } else if (item.targetType === 'version') {
        await rangerApi.decideVersion(item.targetId, { action, ...request });
      } else if (item.targetType === 'comment') {
        if (action === 'approve') await rangerApi.unhideComment(item.targetId);
        else await rangerApi.hideComment(item.targetId, request.note ?? '');
      } else {
        return;
      }
      const verb =
        postReview && action === 'approve'
          ? m.ranger_decided_reviewed({ title: item.title })
          : decidedMessage(action, item.title);
      finish(isComment ? (action === 'approve' ? m.ranger_comment_published() : m.ranger_comment_hidden()) : verb);
    } catch (error) {
      reportFailure(error, m.ranger_decision_failed());
      throw error;
    } finally {
      setBusy(null);
    }
  };

  const resolveReport = async (input: { action: ReportResolution; hideTarget: boolean; note?: string }) => {
    try {
      await rangerApi.resolveReport(item.targetId, input);
      finish(input.action === 'resolve' ? m.ranger_report_resolved() : m.ranger_report_dismissed());
    } catch (error) {
      reportFailure(error, m.ranger_decision_failed());
      throw error;
    }
  };

  /** Takes the item, or releases it when it is already yours. */
  const toggleAssign = async () => {
    if (working) return;
    setWorking('assign');
    try {
      const updated = await rangerApi.assign(item.id, !mine);
      storeQueueItem(queryClient, updated);
      notify.success(mine ? m.ranger_assign_released() : m.ranger_assign_done());
    } catch (error) {
      if (problemCode(error) === 'CONFLICT') {
        notify.error(m.ranger_assign_conflict());
        void refreshModeration(queryClient);
      } else {
        reportFailure(error, m.ranger_assign_failed());
      }
    } finally {
      setWorking(null);
    }
  };

  /** Escalates with a note, or clears the escalation (`note = null`). Rethrows for the dialog. */
  const escalate = async (note: string | null) => {
    setWorking('escalate');
    try {
      const updated = await rangerApi.escalate(item.id, note !== null, note ?? undefined);
      storeQueueItem(queryClient, updated);
      notify.success(note !== null ? m.ranger_escalate_done() : m.ranger_escalate_cleared());
    } catch (error) {
      reportFailure(error, m.ranger_escalate_failed());
      throw error;
    } finally {
      setWorking(null);
    }
  };

  const approve = () => {
    if (!can('approve') || dialog) return;
    void decide('approve').catch(() => {});
  };
  const openReason = (action: ReasonAction) => {
    if (!can(action) || dialog) return;
    setDialog(isComment && action === 'reject' ? { kind: 'comment-reject' } : { kind: 'reason', action });
  };

  // Shortcuts (off while a dialog is open: its fields take the keys).
  const idle = dialog === null && busy === null;
  useShortcut('a', () => (isReport ? setDialog({ kind: 'report', resolution: 'resolve', hide: false }) : approve()), {
    description: () => (isReport ? m.ranger_report_resolve() : approveLabel(postReview)),
    enabled: idle && (isReport || can('approve')),
  });
  useShortcut('c', () => openReason('request_changes'), {
    description: () => actionLabel('request_changes'),
    enabled: idle && can('request_changes'),
  });
  useShortcut(
    'r',
    () => (isReport ? setDialog({ kind: 'report', resolution: 'dismiss', hide: false }) : openReason('reject')),
    {
      description: () => (isReport ? m.ranger_report_dismiss() : actionLabel('reject')),
      enabled: idle && (isReport || can('reject')),
    },
  );
  useShortcut('e', () => setDialog({ kind: 'escalate' }), {
    description: () => m.ranger_escalate(),
    enabled: idle && working === null && item.escalation === null,
  });

  const moreEntries: MenuEntry[] = [];
  if (can('unlist')) {
    moreEntries.push({
      type: 'item',
      label: actionLabel('unlist'),
      icon: <Icon icon={EyeOff} size={16} />,
      onSelect: () => void decide('unlist').catch(() => {}),
    });
  }
  if (can('restore')) {
    moreEntries.push({
      type: 'item',
      label: actionLabel('restore'),
      icon: <Icon icon={RotateCcw} size={16} />,
      onSelect: () => void decide('restore').catch(() => {}),
    });
  }
  if (can('remove')) {
    if (moreEntries.length > 0) moreEntries.push({ type: 'separator' });
    moreEntries.push({
      type: 'item',
      label: actionLabel('remove'),
      icon: <Icon icon={Trash2} size={16} />,
      danger: true,
      onSelect: () => openReason('remove'),
    });
  }

  const hasFiles = item.targetType === 'mod' || item.targetType === 'version';
  const tabs: TabItem<TabValue>[] = [];
  if (hasFiles && !triage) {
    tabs.push({
      value: 'files',
      label: m.ranger_tab_files(),
      content: <FileDiffPanel diff={detail.fileDiff} inspection={detail.inspection} />,
    });
    tabs.push({
      value: 'manifest',
      label: m.ranger_tab_manifest(),
      badge: detail.manifestDiff.length > 0 ? detail.manifestDiff.length : undefined,
      content: <ManifestDiffPanel diff={detail.manifestDiff} />,
    });
  }
  tabs.push({
    value: 'description',
    label: isComment || isReport ? m.ranger_tab_content() : m.ranger_tab_description(),
    content: <HtmlPanel html={detail.descriptionHtml} empty={m.ranger_description_none()} />,
  });
  if (hasFiles || detail.media.length > 0) {
    tabs.push({
      value: 'media',
      label: m.ranger_tab_media(),
      badge: detail.media.length > 0 ? detail.media.length : undefined,
      content: <MediaPanel media={detail.media} />,
    });
  }
  if (hasFiles || detail.changelogHtml) {
    tabs.push({
      value: 'changelog',
      label: m.ranger_tab_changelog(),
      content: <HtmlPanel html={detail.changelogHtml} empty={m.ranger_changelog_none()} />,
    });
  }
  tabs.push({
    value: 'history',
    label: m.ranger_tab_history(),
    content: <AuthorHistoryPanel history={detail.authorHistory} authorId={item.author?.id ?? null} />,
  });
  const activeTab = tabs.some((entry) => entry.value === tab) ? tab : (tabs[0]?.value ?? 'description');

  const noActions = !isReport && detail.allowedActions.length === 0;

  return (
    <article aria-labelledby="ranger-item-title" className="grid gap-4">
      {onBack ? <BackButton onBack={onBack} /> : null}

      <header className="grid gap-2">
        <p className="text-xs text-fg-muted">{laneLabel(item.lane)}</p>
        <h2 id="ranger-item-title" className="text-xl font-bold text-fg break-words">
          {item.title}
        </h2>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-fg-muted">
          {item.author ? <UserChip user={item.author} size={20} /> : <span>{m.ranger_author_unknown()}</span>}
          <span>{m.ranger_submitted({ when: dateTime(item.submittedAt) })}</span>
          <WaitingBadge hours={item.waitingHours} />
          <RiskBadge risk={item.risk} />
          {item.assignee ? (
            <span className="inline-flex items-center gap-1">
              {m.ranger_assigned_to()} <UserChip user={item.assignee} size={20} />
            </span>
          ) : null}
          {item.mod && item.mod.status !== 'removed' ? (
            <a
              href={publicHref(item.mod.canonicalPath)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-link hover:underline"
            >
              {m.ranger_open_page()}
              <Icon icon={ExternalLink} size={12} />
              <span className="sr-only">{m.ranger_new_tab()}</span>
            </a>
          ) : null}
          {item.mod?.nsfw ? (
            <Badge variant="warning" size="sm">
              {m.ranger_nsfw()}
            </Badge>
          ) : null}
          {isReport ? (
            <Link to="/moderation/reports" className="inline-flex items-center gap-1 text-link hover:underline">
              <Icon icon={Flag} size={12} />
              {m.ranger_open_reports()}
            </Link>
          ) : null}
        </div>
        {item.escalation ? (
          <div className="flex flex-wrap items-start gap-2 rounded-md border border-danger/40 bg-danger/5 p-3 text-sm">
            <Badge variant="danger" size="sm" icon={<Icon icon={Siren} size={12} />}>
              {m.ranger_escalated()}
            </Badge>
            <span className="min-w-0 flex-1 text-fg-muted">
              {item.escalation.by ? m.ranger_escalated_by({ name: item.escalation.by.displayName }) : null}
              {item.escalation.by ? ' · ' : null}
              {dateTime(item.escalation.at)}
              {item.escalation.note ? (
                <span className="mt-1 block whitespace-pre-wrap break-words text-fg">{item.escalation.note}</span>
              ) : null}
            </span>
          </div>
        ) : null}
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            loading={working === 'assign'}
            disabled={working !== null}
            icon={<Icon icon={mine ? UserMinus : UserCheck} size={16} />}
            onClick={() => void toggleAssign()}
          >
            {mine ? m.ranger_assign_release() : m.ranger_assign_me()}
          </Button>
          {item.escalation ? (
            <Button
              variant="ghost"
              size="sm"
              loading={working === 'escalate'}
              disabled={working !== null}
              onClick={() => void escalate(null).catch(() => {})}
            >
              {m.ranger_escalate_clear()}
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              disabled={working !== null}
              icon={<Icon icon={Siren} size={16} />}
              onClick={() => setDialog({ kind: 'escalate' })}
            >
              {m.ranger_escalate()}
              {triage ? null : <Kbd className="ms-1">E</Kbd>}
            </Button>
          )}
        </div>
      </header>

      {detail.report ? <ReportSummary report={detail.report} /> : null}

      {hasFiles ? (
        <ChecksPanel
          inspection={detail.inspection}
          flags={item.flags}
          scan={detail.scan}
          scanAction={
            scanId !== null ? (
              <Button variant="link" size="sm" onClick={() => setDialog({ kind: 'scan' })}>
                {m.ranger_scan_override_open()}
              </Button>
            ) : undefined
          }
        />
      ) : null}

      {triage && hasFiles ? (
        <p className="flex items-center gap-2 rounded-md border border-border bg-sunken p-3 text-xs text-fg-muted">
          <Icon icon={Monitor} size={16} />
          {m.ranger_triage_note()}
        </p>
      ) : null}

      <Tabs
        label={m.ranger_tabs_label()}
        tabs={tabs}
        value={activeTab}
        onValueChange={setTab}
        className="min-w-0"
        listClassName="mb-3"
      />

      <footer
        className={
          triage
            ? 'sticky bottom-0 -mx-4 grid gap-2 border-t border-border bg-bg/95 p-3 backdrop-blur'
            : 'sticky bottom-0 flex flex-wrap items-center gap-2 border-t border-border bg-bg/95 py-3 backdrop-blur'
        }
      >
        {noActions ? (
          <p className="text-sm text-fg-muted">{m.ranger_no_actions()}</p>
        ) : isReport ? (
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setDialog({ kind: 'report', resolution: 'resolve', hide: false })}
              icon={<Icon icon={Check} size={16} />}
            >
              {m.ranger_report_resolve()}
              {triage ? null : <Kbd className="ms-1">A</Kbd>}
            </Button>
            {canHideReport ? (
              <Button
                variant="danger"
                onClick={() => setDialog({ kind: 'report', resolution: 'resolve', hide: true })}
                icon={<Icon icon={EyeOff} size={16} />}
              >
                {m.ranger_report_resolve_hide()}
              </Button>
            ) : null}
            <Button
              variant="secondary"
              onClick={() => setDialog({ kind: 'report', resolution: 'dismiss', hide: false })}
              icon={<Icon icon={X} size={16} />}
            >
              {m.ranger_report_dismiss()}
              {triage ? null : <Kbd className="ms-1">R</Kbd>}
            </Button>
          </div>
        ) : (
          <div className={triage ? 'grid grid-cols-2 gap-2' : 'flex flex-wrap items-center gap-2'}>
            {can('approve') ? (
              <Button
                onClick={approve}
                loading={busy === 'approve'}
                icon={<Icon icon={Check} size={16} />}
                size={triage ? 'lg' : 'md'}
                block={triage}
              >
                {isComment ? m.ranger_comment_publish() : approveLabel(postReview)}
                {triage ? null : <Kbd className="ms-1">A</Kbd>}
              </Button>
            ) : null}
            {can('request_changes') && !triage ? (
              <Button
                variant="secondary"
                onClick={() => openReason('request_changes')}
                icon={<Icon icon={MessageSquareWarning} size={16} />}
              >
                {actionLabel('request_changes')}
                <Kbd className="ms-1">C</Kbd>
              </Button>
            ) : null}
            {can('reject') ? (
              <Button
                variant="danger"
                onClick={() => openReason('reject')}
                loading={busy === 'reject'}
                icon={<Icon icon={X} size={16} />}
                size={triage ? 'lg' : 'md'}
                block={triage}
              >
                {isComment ? m.ranger_comment_hide() : actionLabel('reject')}
                {triage ? null : <Kbd className="ms-1">R</Kbd>}
              </Button>
            ) : null}
            {moreEntries.length > 0 && !triage ? (
              <Menu
                align="end"
                side="top"
                trigger={
                  <Button variant="icon" aria-label={m.ranger_more_actions()}>
                    <Icon icon={MoreHorizontal} size={18} />
                  </Button>
                }
                items={moreEntries}
              />
            ) : null}
          </div>
        )}
      </footer>

      {dialog?.kind === 'reason' || dialog?.kind === 'comment-reject' ? (
        <DecisionDialog
          open
          onOpenChange={(open) => {
            if (!open) setDialog(null);
          }}
          itemTitle={item.title}
          action={dialog.kind === 'reason' ? dialog.action : 'reject'}
          mode={dialog.kind === 'comment-reject' ? 'comment' : 'decision'}
          onSubmit={async (request) => {
            if (!needsReason(request.action)) return;
            await decide(request.action, {
              ...(request.templateKey ? { templateKey: request.templateKey } : {}),
              ...(request.note ? { note: request.note } : {}),
            });
          }}
        />
      ) : null}
      {dialog?.kind === 'report' ? (
        <ReportDialog
          open
          onOpenChange={(open) => {
            if (!open) setDialog(null);
          }}
          resolution={dialog.resolution}
          subject={item.title}
          canHide={canHideReport}
          hideByDefault={dialog.hide && canHideReport}
          onSubmit={resolveReport}
        />
      ) : null}
      {dialog?.kind === 'escalate' ? (
        <EscalateDialog
          open
          onOpenChange={(open) => {
            if (!open) setDialog(null);
          }}
          subject={item.title}
          onSubmit={(note) => escalate(note)}
        />
      ) : null}
      {dialog?.kind === 'scan' && scanId !== null ? (
        <ScanOverrideDialog
          open
          onOpenChange={(open) => {
            if (!open) setDialog(null);
          }}
          scanId={scanId}
          subject={item.title}
        />
      ) : null}
    </article>
  );
}

/** What a report item is about: reason, target (linked), the reporter's words and who sent it. */
function ReportSummary({ report }: { report: Report }) {
  const severe = report.reason === 'malware' || report.reason === 'illegal';
  const subject =
    report.target?.title ??
    m.ranger_report_target_missing({ type: reportTargetLabel(report.targetType), id: report.targetId });
  return (
    <section className="grid gap-2 rounded-md border border-border bg-surface p-3 text-sm">
      <p className="flex flex-wrap items-center gap-2 text-xs text-fg-muted">
        <Badge variant={severe ? 'danger' : 'neutral'} size="sm">
          {reportReasonLabel(report.reason)}
        </Badge>
        <span>{reportTargetLabel(report.targetType)}</span>
        {report.targetType === 'user' ? (
          <Link
            to="/moderation/users/$userId"
            params={{ userId: String(report.targetId) }}
            className="text-link hover:underline"
          >
            {m.ranger_report_open_user()}
          </Link>
        ) : null}
      </p>
      <p className="font-medium break-words text-fg">
        {report.target?.path ? (
          <a
            href={publicHref(report.target.path)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-link"
          >
            {subject}
            <Icon icon={ExternalLink} size={14} />
            <span className="sr-only">{m.ranger_new_tab()}</span>
          </a>
        ) : (
          subject
        )}
      </p>
      {report.details ? (
        <blockquote className="border-s-2 border-border-strong ps-3 whitespace-pre-wrap break-words text-fg">
          {report.details}
        </blockquote>
      ) : (
        <p className="text-fg-subtle">{m.ranger_report_no_details()}</p>
      )}
      <p className="text-xs text-fg-muted">
        {report.reporter ? (
          <span className="inline-flex items-center gap-1">
            {m.ranger_report_by()} <UserChip user={report.reporter} size={20} />
          </span>
        ) : (
          m.ranger_report_by_unknown()
        )}
      </p>
    </section>
  );
}
