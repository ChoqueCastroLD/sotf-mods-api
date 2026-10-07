/**
 * `/moderation/users` — find a user (PLAN §7.4 «Usuarios: buscar»): by handle, display name or email
 * (`?q=`), filtered by role, status and verified creator, sorted, and paged on the server. Each
 * row shows the role, flags, trust level and whether the account is suspended or banned; the card
 * (`/moderation/users/$userId`) holds history and sanctions.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { SearchX, UserX } from 'lucide-react';
import { type RangerUser, USERS_PAGE_SIZE, type UsersView, usersQuery } from './api.ts';
import { FilterBar, FilterSelect, PageNav, SearchField, SortSelect, useListSearch } from './controls.tsx';
import { roleLabel } from './labels.ts';
import { PAGE_SIZES, USER_ROLES, USER_SORTS, USER_STATUSES, USER_VERIFIED } from './search.ts';
import { dateTime, number, PanelError, ScreenHeader, UserChip } from './shared.tsx';

function sortLabel(sort: (typeof USER_SORTS)[number]): string {
  switch (sort) {
    case 'newest':
      return m.ranger_users_sort_newest();
    case 'oldest':
      return m.ranger_users_sort_oldest();
    case 'name':
      return m.ranger_users_sort_name();
    case 'reports':
      return m.ranger_users_sort_reports();
    case 'seen':
      return m.ranger_users_sort_seen();
  }
}

function statusLabel(status: (typeof USER_STATUSES)[number]): string {
  return status === 'active'
    ? m.ranger_users_status_active()
    : status === 'suspended'
      ? m.ranger_users_status_suspended()
      : m.ranger_users_status_banned();
}

export function UsersScreen({ view }: { view: UsersView }) {
  const patch = useListSearch('/moderation/users');
  const query = useQuery(usersQuery(view));
  const size = view.size ?? USERS_PAGE_SIZE;
  const filters = [view.q, view.role, view.status, view.verified].filter(Boolean).length;
  const clear = () => patch({ q: undefined, role: undefined, status: undefined, verified: undefined });
  const data = query.data;
  const fetching = query.isFetching && query.isPlaceholderData;

  return (
    <div className="grid gap-5">
      <ScreenHeader title={m.ranger_users_title()} description={m.ranger_users_description()} />

      <FilterBar
        search={
          <SearchField
            label={m.ranger_users_search_label()}
            placeholder={m.ranger_users_search_placeholder()}
            value={view.q ?? ''}
            onCommit={(value) => patch({ q: value || undefined })}
          />
        }
        sort={
          <SortSelect
            value={view.sort ?? 'newest'}
            onChange={(value) => patch({ sort: value === 'newest' ? undefined : value })}
            options={USER_SORTS.map((value) => ({ value, label: sortLabel(value) }))}
          />
        }
        activeCount={filters}
        onClear={clear}
      >
        <FilterSelect
          label={m.ranger_users_filter_role()}
          allLabel={m.ranger_users_filter_role_all()}
          value={view.role}
          onChange={(value) => patch({ role: value })}
          options={USER_ROLES.map((value) => ({ value, label: roleLabel(value) }))}
        />
        <FilterSelect
          label={m.ranger_users_filter_status()}
          allLabel={m.ranger_users_filter_status_all()}
          value={view.status}
          onChange={(value) => patch({ status: value })}
          options={USER_STATUSES.map((value) => ({ value, label: statusLabel(value) }))}
        />
        <FilterSelect
          label={m.ranger_users_filter_verified()}
          allLabel={m.ranger_users_filter_verified_all()}
          value={view.verified}
          onChange={(value) => patch({ verified: value })}
          options={USER_VERIFIED.map((value) => ({
            value,
            label: value === '1' ? m.ranger_users_verified_yes() : m.ranger_users_verified_no(),
          }))}
        />
      </FilterBar>

      {query.isPending ? (
        <SkeletonGroup label={m.ranger_loading()} className="grid gap-2">
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} className="h-16 w-full" />
          ))}
        </SkeletonGroup>
      ) : query.isError ? (
        <PanelError error={query.error} onRetry={() => void query.refetch()} />
      ) : !data || data.items.length === 0 ? (
        filters > 0 ? (
          <EmptyState
            icon={<Icon icon={SearchX} size={32} />}
            title={m.ranger_users_empty_title()}
            description={view.q ? m.ranger_users_empty_query({ query: view.q }) : m.ranger_users_empty_filtered()}
            action={
              <Button variant="secondary" onClick={clear}>
                {m.ranger_filters_clear()}
              </Button>
            }
          />
        ) : (
          <EmptyState
            icon={<Icon icon={UserX} size={32} />}
            title={m.ranger_users_empty_title()}
            description={m.ranger_users_empty_text()}
          />
        )
      ) : (
        <div className={cn('grid gap-4 transition-opacity duration-(--dur-fast)', fetching && 'opacity-60')}>
          <ul className="grid gap-2">
            {data.items.map((user) => (
              <UserRow key={user.user.id} user={user} />
            ))}
          </ul>
          <PageNav
            page={view.page ?? 1}
            totalPages={data.totalPages}
            total={data.total}
            pageSize={size}
            onPage={(page) => patch({ page: page > 1 ? page : undefined })}
            sizes={PAGE_SIZES}
            onPageSize={(next) => patch({ size: next === USERS_PAGE_SIZE ? undefined : next })}
          />
        </div>
      )}
    </div>
  );
}

function UserRow({ user }: { user: RangerUser }) {
  const suspended = user.suspendedUntil !== null && Date.parse(user.suspendedUntil) > Date.now();
  return (
    <li className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-md border border-border bg-surface p-3">
      <div className="grid min-w-0 flex-1 gap-0.5 max-sm:basis-full">
        <UserChip user={user.user} size={32} className="font-medium" />
        <span className="truncate text-xs text-fg-muted">
          @{user.user.handle} · {user.email}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs">
        {user.role !== 'user' ? (
          <Badge variant="blueprint" size="sm">
            {roleLabel(user.role)}
          </Badge>
        ) : null}
        {user.verifiedCreator ? (
          <Badge variant="signal" size="sm">
            {m.ranger_verified_creator()}
          </Badge>
        ) : null}
        {user.bannedAt ? (
          <Badge variant="danger" size="sm">
            {m.ranger_user_banned()}
          </Badge>
        ) : suspended && user.suspendedUntil ? (
          <Badge variant="warning" size="sm">
            {m.ranger_user_suspended_until({ date: dateTime(user.suspendedUntil) })}
          </Badge>
        ) : null}
        <span className="text-fg-muted">
          {m.ranger_history_trust()}: {user.trustLevel}
        </span>
        <span className="text-fg-muted">
          {m.ranger_users_row_stats({ mods: number(user.stats.mods), reports: number(user.stats.reportsAgainst) })}
        </span>
      </div>
    </li>
  );
}
