/**
 * `/moderation/audit` — the immutable audit log (PLAN §7.4 «Auditoría»): every moderator and admin
 * action with actor, action, target, before/after, reason and time, filterable by actor handle,
 * action (`mod.approve`, `mod.*`), target (`user:12`, `mod:312`), reason text and date range.
 * Newest first by default, paged on the server. The filters live in the URL so a filtered view
 * can be shared.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ScrollText, SearchX } from 'lucide-react';
import { AUDIT_PAGE_SIZE, AUDIT_TARGET, type AuditEntry, type AuditFilters, auditQuery } from './api.ts';
import { FilterBar, PageNav, SearchField, SortSelect, useListSearch } from './controls.tsx';
import { PAGE_SIZES } from './search.ts';
import { dateTime, PanelError, relative, ScreenHeader, UserChip } from './shared.tsx';

const isTarget = (value: string) => AUDIT_TARGET.test(value);

export function AuditScreen({ filters }: { filters: AuditFilters }) {
  const patch = useListSearch('/moderation/audit');
  const query = useQuery(auditQuery(filters));
  const data = query.data;
  const entries = data?.items ?? [];
  const size = filters.size ?? AUDIT_PAGE_SIZE;
  const active = [filters.actor, filters.action, filters.target, filters.q, filters.from, filters.to].filter(
    Boolean,
  ).length;
  const clear = () =>
    patch({
      actor: undefined,
      action: undefined,
      target: undefined,
      q: undefined,
      from: undefined,
      to: undefined,
    });
  const fetching = query.isFetching && query.isPlaceholderData;

  return (
    <div className="grid gap-5">
      <ScreenHeader title={m.ranger_audit_title()} description={m.ranger_audit_description()} />

      <FilterBar
        search={
          <SearchField
            label={m.ranger_audit_reason_search()}
            placeholder={m.ranger_audit_reason_search()}
            value={filters.q ?? ''}
            onCommit={(value) => patch({ q: value || undefined })}
          />
        }
        sort={
          <SortSelect
            value={filters.sort ?? 'newest'}
            onChange={(value) => patch({ sort: value === 'newest' ? undefined : value })}
            options={[
              { value: 'newest', label: m.ranger_sort_newest() },
              { value: 'oldest', label: m.ranger_sort_oldest() },
            ]}
          />
        }
        activeCount={active}
        onClear={clear}
      >
        <SearchField
          label={m.ranger_audit_actor()}
          placeholder={m.ranger_audit_actor()}
          value={filters.actor ?? ''}
          maxLength={64}
          onCommit={(value) => patch({ actor: value.replace(/^@/, '') || undefined })}
          className="w-full md:w-40"
        />
        <SearchField
          label={m.ranger_audit_action()}
          placeholder="mod.*"
          value={filters.action ?? ''}
          maxLength={80}
          onCommit={(value) => patch({ action: value || undefined })}
          className="w-full md:w-40"
        />
        <SearchField
          label={m.ranger_audit_target()}
          placeholder="user:12"
          value={filters.target ?? ''}
          maxLength={40}
          isValid={isTarget}
          hint={m.ranger_audit_target_invalid()}
          onCommit={(value) => patch({ target: value || undefined })}
          className="w-full md:w-32"
        />
        <label className="flex items-center gap-2 text-xs text-fg-muted max-md:w-full">
          <span className="shrink-0">{m.ranger_audit_from()}</span>
          <Input
            type="date"
            size="sm"
            title={m.ranger_audit_from()}
            value={filters.from ?? ''}
            max={filters.to}
            onChange={(event) => patch({ from: event.target.value || undefined })}
            className="w-full md:w-40"
          />
        </label>
        <label className="flex items-center gap-2 text-xs text-fg-muted max-md:w-full">
          <span className="shrink-0">{m.ranger_audit_to()}</span>
          <Input
            type="date"
            size="sm"
            title={m.ranger_audit_to()}
            value={filters.to ?? ''}
            min={filters.from}
            onChange={(event) => patch({ to: event.target.value || undefined })}
            className="w-full md:w-40"
          />
        </label>
      </FilterBar>

      {query.isPending ? (
        <SkeletonGroup label={m.ranger_loading()} className="grid gap-2">
          {Array.from({ length: 8 }, (_, index) => (
            <Skeleton key={index} className="h-14 w-full" />
          ))}
        </SkeletonGroup>
      ) : query.isError ? (
        <PanelError error={query.error} onRetry={() => void query.refetch()} />
      ) : entries.length === 0 ? (
        active > 0 ? (
          <EmptyState
            icon={<Icon icon={SearchX} size={32} />}
            title={m.ranger_audit_empty_title()}
            description={m.ranger_audit_empty_filtered()}
            action={
              <Button variant="secondary" onClick={clear}>
                {m.ranger_filters_clear()}
              </Button>
            }
          />
        ) : (
          <EmptyState
            icon={<Icon icon={ScrollText} size={32} />}
            title={m.ranger_audit_empty_title()}
            description={m.ranger_audit_empty_text()}
          />
        )
      ) : (
        <div className={cn('grid gap-4 transition-opacity duration-(--dur-fast)', fetching && 'opacity-60')}>
          <ol className="grid gap-2">
            {entries.map((entry) => (
              <AuditRow key={entry.id} entry={entry} />
            ))}
          </ol>
          <PageNav
            page={filters.page ?? 1}
            totalPages={data?.totalPages ?? 0}
            total={data?.total ?? entries.length}
            pageSize={size}
            onPage={(page) => patch({ page: page > 1 ? page : undefined })}
            sizes={PAGE_SIZES}
            onPageSize={(next) => patch({ size: next === AUDIT_PAGE_SIZE ? undefined : next })}
          />
        </div>
      )}
    </div>
  );
}

function json(value: unknown): string {
  if (value === undefined || value === null) return '-';
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}

function AuditRow({ entry }: { entry: AuditEntry }) {
  const target = entry.targetType && entry.targetId !== null ? `${entry.targetType}:${entry.targetId}` : null;
  const hasChange =
    (entry.before !== null && entry.before !== undefined) || (entry.after !== null && entry.after !== undefined);
  return (
    <li className="grid gap-2 rounded-md border border-border bg-surface p-3 text-sm">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <time
          dateTime={entry.createdAt}
          title={dateTime(entry.createdAt)}
          className="text-2xs text-fg-muted tabular-nums"
        >
          {relative(entry.createdAt)}
        </time>
        {entry.actor ? (
          <UserChip user={entry.actor} size={20} />
        ) : (
          <span className="text-fg-muted">{m.ranger_audit_system()}</span>
        )}
        <Link
          to="/moderation/audit"
          search={{ action: entry.action }}
          className="font-mono text-xs text-fg hover:text-link"
        >
          {entry.action}
        </Link>
        {target ? (
          entry.targetType === 'user' && entry.targetId !== null ? (
            <Link
              to="/moderation/users/$userId"
              params={{ userId: String(entry.targetId) }}
              className="font-mono text-xs text-link hover:underline"
            >
              {target}
            </Link>
          ) : (
            <Link
              to="/moderation/audit"
              search={{ target }}
              className="font-mono text-xs text-fg-muted hover:text-link"
            >
              {target}
            </Link>
          )
        ) : null}
      </div>
      {entry.reason ? <p className="break-words text-fg">{entry.reason}</p> : null}
      {hasChange ? (
        <details className="text-xs">
          <summary className="cursor-pointer text-fg-muted">{m.ranger_audit_changes()}</summary>
          <div className="mt-2 grid gap-2 md:grid-cols-2">
            <div>
              <p className="mb-1 text-fg-muted">{m.ranger_manifest_before()}</p>
              <pre className="overflow-x-auto rounded bg-sunken p-2 font-mono text-2xs whitespace-pre-wrap break-all">
                {json(entry.before)}
              </pre>
            </div>
            <div>
              <p className="mb-1 text-fg-muted">{m.ranger_manifest_after()}</p>
              <pre className="overflow-x-auto rounded bg-sunken p-2 font-mono text-2xs whitespace-pre-wrap break-all">
                {json(entry.after)}
              </pre>
            </div>
          </div>
        </details>
      ) : null}
    </li>
  );
}
