/**
 * `/ranger/users` — find a user (PLAN §7.4 «Usuarios: buscar»): by handle, display name or email
 * (`?q=`), paged. Each row shows the role, flags, trust level and whether the account is
 * suspended or banned; the card (`/ranger/users/$userId`) holds history and sanctions.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { ChevronLeft, ChevronRight, Search, UserX } from 'lucide-react';
import { type FormEvent, useEffect, useState } from 'react';
import { type RangerUser, usersQuery } from './api.ts';
import { roleLabel } from './labels.ts';
import { dateTime, number, PanelError, ScreenHeader, UserChip } from './shared.tsx';

export function UsersScreen({ q, page }: { q: string; page: number }) {
  const navigate = useNavigate();
  const query = useQuery(usersQuery(q, page));
  const [draft, setDraft] = useState(q);
  useEffect(() => setDraft(q), [q]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next = draft.trim().slice(0, 100);
    void navigate({ to: '/ranger/users', search: next ? { q: next } : {} });
  };

  const data = query.data;
  return (
    <div className="grid gap-5">
      <ScreenHeader
        readout={m.ranger_readout()}
        title={m.ranger_users_title()}
        description={m.ranger_users_description()}
      />

      <form onSubmit={submit} className="flex flex-wrap items-end gap-2">
        <Field label={m.ranger_users_search_label()} className="min-w-0 flex-1">
          <Input
            type="search"
            value={draft}
            maxLength={100}
            onChange={(event) => setDraft(event.target.value)}
            placeholder={m.ranger_users_search_placeholder()}
            icon={<Icon icon={Search} size={16} />}
          />
        </Field>
        <Button type="submit">{m.ranger_users_search_submit()}</Button>
      </form>

      {query.isPending ? (
        <SkeletonGroup label={m.ranger_loading()} className="grid gap-2">
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} className="h-16 w-full" />
          ))}
        </SkeletonGroup>
      ) : query.isError ? (
        <PanelError error={query.error} onRetry={() => void query.refetch()} />
      ) : !data || data.items.length === 0 ? (
        <EmptyState
          icon={<Icon icon={UserX} size={32} />}
          title={m.ranger_users_empty_title()}
          description={q ? m.ranger_users_empty_query({ query: q }) : m.ranger_users_empty_text()}
        />
      ) : (
        <>
          <p className="text-sm text-fg-muted" aria-live="polite">
            {m.ranger_users_count({ count: data.total })}
          </p>
          <ul className="grid gap-2">
            {data.items.map((user) => (
              <UserRow key={user.user.id} user={user} />
            ))}
          </ul>
          {data.totalPages > 1 ? (
            <nav aria-label={m.ranger_pagination()} className="flex items-center justify-center gap-3">
              {page > 1 ? (
                <Link
                  to="/ranger/users"
                  search={{ ...(q ? { q } : {}), ...(page - 1 > 1 ? { page: page - 1 } : {}) }}
                  className="inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm text-fg hover:bg-fg/8"
                >
                  <Icon icon={ChevronLeft} size={16} />
                  {m.ranger_previous()}
                </Link>
              ) : null}
              <span className="text-sm text-fg-muted tabular-nums">
                {m.ranger_page_of({ page, total: data.totalPages })}
              </span>
              {page < data.totalPages ? (
                <Link
                  to="/ranger/users"
                  search={{ ...(q ? { q } : {}), page: page + 1 }}
                  className="inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm text-fg hover:bg-fg/8"
                >
                  {m.ranger_next()}
                  <Icon icon={ChevronRight} size={16} />
                </Link>
              ) : null}
            </nav>
          ) : null}
        </>
      )}
    </div>
  );
}

function UserRow({ user }: { user: RangerUser }) {
  const suspended = user.suspendedUntil !== null && Date.parse(user.suspendedUntil) > Date.now();
  return (
    <li className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-md border border-border bg-surface p-3">
      <div className="grid min-w-0 flex-1 gap-0.5">
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
        <span className="text-fg-muted">{m.ranger_trust_level({ level: user.trustLevel })}</span>
        <span className="text-fg-muted">
          {m.ranger_users_row_stats({ mods: number(user.stats.mods), reports: number(user.stats.reportsAgainst) })}
        </span>
      </div>
    </li>
  );
}
