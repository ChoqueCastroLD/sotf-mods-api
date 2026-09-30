/**
 * `/ranger/reports` — user reports (PLAN §7.4 «Reportes», research/03 §6.10): content, reason,
 * evidence and actions. Open reports are resolved (optionally hiding the content: mod/kit
 * unlisted, version held, comment/review/field report hidden) or dismissed; the reporters are
 * notified. Content auto-hidden by ≥ 3 trusted reporters is restored when the report is
 * dismissed. Filter by status; newest first, cursor pages.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Check, ExternalLink, EyeOff, Flag, Gavel, X } from 'lucide-react';
import { useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { REPORT_STATUSES, type Report, type ReportFilter, rangerApi, refreshModeration, reportsQuery } from './api.ts';
import { reportReasonLabel, reportStatusLabel, reportTargetLabel } from './labels.ts';
import { ReportDialog, type ReportResolution } from './ReportDialog.tsx';
import { dateTime, PanelError, publicHref, relative, reportFailure, ScreenHeader, UserChip } from './shared.tsx';

export function ReportsScreen({ status }: { status: ReportFilter }) {
  const queryClient = useQueryClient();
  const query = useInfiniteQuery(reportsQuery(status));
  const reports = query.data?.pages.flatMap((page) => page.items) ?? [];
  const [dialog, setDialog] = useState<{ report: Report; resolution: ReportResolution; hide: boolean } | null>(null);

  const close = async (report: Report, input: { action: ReportResolution; hideTarget: boolean; note?: string }) => {
    try {
      await rangerApi.resolveReport(report.id, input);
      notify.success(input.action === 'resolve' ? m.ranger_report_resolved() : m.ranger_report_dismissed());
      await refreshModeration(queryClient);
    } catch (error) {
      reportFailure(error, m.ranger_decision_failed());
      throw error;
    }
  };

  return (
    <div className="grid gap-5">
      <ScreenHeader
        readout={m.ranger_readout()}
        title={m.ranger_reports_title()}
        description={m.ranger_reports_description()}
      />

      <nav aria-label={m.ranger_reports_filter()}>
        <ul className="flex flex-wrap gap-2">
          {REPORT_STATUSES.map((entry) => (
            <li key={entry}>
              <Link
                to="/ranger/reports"
                search={entry === 'open' ? {} : { status: entry }}
                aria-current={entry === status ? 'page' : undefined}
                className={cn(
                  'inline-flex h-10 items-center rounded-md border px-3 text-sm font-medium transition-colors',
                  entry === status
                    ? 'border-primary bg-primary-soft text-fg'
                    : 'border-border bg-surface text-fg-muted hover:border-border-strong hover:text-fg',
                )}
              >
                {reportStatusLabel(entry)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {query.isPending ? (
        <SkeletonGroup label={m.ranger_loading()} className="grid gap-3">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="h-28 w-full" />
          ))}
        </SkeletonGroup>
      ) : query.isError ? (
        <PanelError error={query.error} onRetry={() => void query.refetch()} />
      ) : reports.length === 0 ? (
        <EmptyState
          icon={<Icon icon={Flag} size={32} />}
          title={status === 'open' ? m.ranger_reports_empty_open_title() : m.ranger_reports_empty_title()}
          description={status === 'open' ? m.ranger_reports_empty_open_text() : m.ranger_reports_empty_text()}
        />
      ) : (
        <ul className="grid gap-3">
          {reports.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
              onAction={(resolution, hide) => setDialog({ report, resolution, hide })}
            />
          ))}
        </ul>
      )}

      {query.hasNextPage ? (
        <div className="flex justify-center">
          <Button variant="secondary" loading={query.isFetchingNextPage} onClick={() => void query.fetchNextPage()}>
            {m.ranger_load_more()}
          </Button>
        </div>
      ) : null}

      {dialog ? (
        <ReportDialog
          open
          onOpenChange={(open) => {
            if (!open) setDialog(null);
          }}
          resolution={dialog.resolution}
          subject={subjectOf(dialog.report)}
          canHide={dialog.report.targetType !== 'user'}
          hideByDefault={dialog.hide}
          onSubmit={(input) => close(dialog.report, input)}
        />
      ) : null}
    </div>
  );
}

function subjectOf(report: Report): string {
  return (
    report.target?.title ??
    m.ranger_report_target_missing({ type: reportTargetLabel(report.targetType), id: report.targetId })
  );
}

function ReportCard({
  report,
  onAction,
}: {
  report: Report;
  onAction: (resolution: ReportResolution, hide: boolean) => void;
}) {
  const open = report.status === 'open';
  const severe = report.reason === 'malware' || report.reason === 'illegal';
  return (
    <li className="grid gap-3 rounded-lg border border-border bg-surface p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="grid min-w-0 gap-1">
          <p className="flex flex-wrap items-center gap-2 text-xs text-fg-muted">
            <Badge variant={severe ? 'danger' : 'neutral'} size="sm">
              {reportReasonLabel(report.reason)}
            </Badge>
            <span>{reportTargetLabel(report.targetType)}</span>
            <time dateTime={report.createdAt} title={dateTime(report.createdAt)}>
              {relative(report.createdAt)}
            </time>
            {!open ? (
              <Badge variant={report.status === 'resolved' ? 'success' : 'outline-mono'} size="sm">
                {reportStatusLabel(report.status)}
              </Badge>
            ) : null}
          </p>
          <h2 className="font-medium break-words text-fg">
            {report.target?.path ? (
              <a
                href={publicHref(report.target.path)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-link"
              >
                {subjectOf(report)}
                <Icon icon={ExternalLink} size={14} />
                <span className="sr-only">{m.ranger_new_tab()}</span>
              </a>
            ) : (
              subjectOf(report)
            )}
          </h2>
        </div>
        {report.targetType === 'user' ? (
          <Link
            to="/ranger/users/$userId"
            params={{ userId: String(report.targetId) }}
            className="inline-flex items-center gap-1 text-sm text-link hover:underline"
          >
            <Icon icon={Gavel} size={14} />
            {m.ranger_report_open_user()}
          </Link>
        ) : null}
      </div>

      {report.details ? (
        <blockquote className="border-s-2 border-border-strong ps-3 text-sm whitespace-pre-wrap break-words text-fg">
          {report.details}
        </blockquote>
      ) : (
        <p className="text-sm text-fg-subtle">{m.ranger_report_no_details()}</p>
      )}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fg-muted">
        {report.reporter ? (
          <span className="inline-flex items-center gap-1">
            {m.ranger_report_by()} <UserChip user={report.reporter} size={20} />
          </span>
        ) : (
          <span>{m.ranger_report_by_unknown()}</span>
        )}
        {report.assignee ? (
          <span className="inline-flex items-center gap-1">
            {m.ranger_assigned_to()} <UserChip user={report.assignee} size={20} />
          </span>
        ) : null}
        <Link
          to="/ranger/audit"
          search={{ target: `${report.targetType}:${report.targetId}` }}
          className="text-link hover:underline"
        >
          {m.ranger_report_history()}
        </Link>
      </div>

      {!open && report.resolution ? (
        <p className="text-sm text-fg-muted">
          {m.ranger_report_resolution({ note: report.resolution })}
          {report.resolvedAt ? ` · ${dateTime(report.resolvedAt)}` : ''}
        </p>
      ) : null}

      {open ? (
        <div className="flex flex-wrap gap-2">
          <Button size="sm" icon={<Icon icon={Check} size={16} />} onClick={() => onAction('resolve', false)}>
            {m.ranger_report_resolve()}
          </Button>
          {report.targetType !== 'user' ? (
            <Button
              size="sm"
              variant="danger"
              icon={<Icon icon={EyeOff} size={16} />}
              onClick={() => onAction('resolve', true)}
            >
              {m.ranger_report_resolve_hide()}
            </Button>
          ) : null}
          <Button
            size="sm"
            variant="secondary"
            icon={<Icon icon={X} size={16} />}
            onClick={() => onAction('dismiss', false)}
          >
            {m.ranger_report_dismiss()}
          </Button>
        </div>
      ) : null}
    </li>
  );
}
