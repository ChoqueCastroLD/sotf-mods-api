/**
 * `/moderation/audit` — the immutable audit log (PLAN §7.4 «Auditoría»): every moderator and admin
 * action with actor, action, target, before/after, reason and time, filterable by actor handle,
 * action (`mod.approve`, `sanction.create`…) and target (`user:12`, `mod:312`). Newest first,
 * cursor pages. The filters live in the URL so a filtered view can be shared.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { ScrollText } from 'lucide-react';
import { type FormEvent, useEffect, useState } from 'react';
import { AUDIT_TARGET, type AuditEntry, type AuditFilters, auditQuery } from './api.ts';
import { dateTime, PanelError, relative, ScreenHeader, UserChip } from './shared.tsx';

export function AuditScreen({ filters }: { filters: AuditFilters }) {
  const navigate = useNavigate();
  const query = useInfiniteQuery(auditQuery(filters));
  const entries = query.data?.pages.flatMap((page) => page.items) ?? [];
  const [actor, setActor] = useState(filters.actor ?? '');
  const [action, setAction] = useState(filters.action ?? '');
  const [target, setTarget] = useState(filters.target ?? '');
  const [targetError, setTargetError] = useState<string | null>(null);
  useEffect(() => {
    setActor(filters.actor ?? '');
    setAction(filters.action ?? '');
    setTarget(filters.target ?? '');
  }, [filters.actor, filters.action, filters.target]);

  const filtered = Boolean(filters.actor || filters.action || filters.target);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const nextTarget = target.trim();
    if (nextTarget && !AUDIT_TARGET.test(nextTarget)) {
      setTargetError(m.ranger_audit_target_invalid());
      return;
    }
    setTargetError(null);
    const nextActor = actor.trim().replace(/^@/, '').slice(0, 64);
    const nextAction = action.trim().slice(0, 80);
    void navigate({
      to: '/moderation/audit',
      search: {
        ...(nextActor ? { actor: nextActor } : {}),
        ...(nextAction ? { action: nextAction } : {}),
        ...(nextTarget ? { target: nextTarget } : {}),
      },
    });
  };

  return (
    <div className="grid gap-5">
      <ScreenHeader
        readout={m.ranger_readout()}
        title={m.ranger_audit_title()}
        description={m.ranger_audit_description()}
      />

      <form
        onSubmit={submit}
        className="grid gap-3 rounded-lg border border-border bg-surface p-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end"
        noValidate
      >
        <Field label={m.ranger_audit_actor()} optional>
          <Input
            value={actor}
            maxLength={65}
            onChange={(event) => setActor(event.target.value)}
            placeholder="imaxel"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck={false}
          />
        </Field>
        <Field label={m.ranger_audit_action()} optional>
          <Input
            value={action}
            maxLength={80}
            onChange={(event) => setAction(event.target.value)}
            placeholder="mod.reject"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck={false}
          />
        </Field>
        <Field
          label={m.ranger_audit_target()}
          description={m.ranger_audit_target_hint()}
          error={targetError ?? undefined}
          optional
        >
          <Input
            value={target}
            maxLength={40}
            onChange={(event) => {
              setTarget(event.target.value);
              setTargetError(null);
            }}
            placeholder="user:12"
          />
        </Field>
        <div className="flex gap-2">
          <Button type="submit">{m.ranger_audit_apply()}</Button>
          {filtered ? (
            <Button variant="ghost" onClick={() => void navigate({ to: '/moderation/audit', search: {} })}>
              {m.ranger_audit_clear()}
            </Button>
          ) : null}
        </div>
      </form>

      {query.isPending ? (
        <SkeletonGroup label={m.ranger_loading()} className="grid gap-2">
          {Array.from({ length: 8 }, (_, index) => (
            <Skeleton key={index} className="h-14 w-full" />
          ))}
        </SkeletonGroup>
      ) : query.isError ? (
        <PanelError error={query.error} onRetry={() => void query.refetch()} />
      ) : entries.length === 0 ? (
        <EmptyState
          icon={<Icon icon={ScrollText} size={32} />}
          title={m.ranger_audit_empty_title()}
          description={filtered ? m.ranger_audit_empty_filtered() : m.ranger_audit_empty_text()}
        />
      ) : (
        <ol className="grid gap-2">
          {entries.map((entry) => (
            <AuditRow key={entry.id} entry={entry} />
          ))}
        </ol>
      )}

      {query.hasNextPage ? (
        <div className="flex justify-center">
          <Button variant="secondary" loading={query.isFetchingNextPage} onClick={() => void query.fetchNextPage()}>
            {m.ranger_load_more()}
          </Button>
        </div>
      ) : null}
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
