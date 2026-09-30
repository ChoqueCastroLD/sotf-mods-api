/**
 * `/basecamp/inbox` — the creator inbox (PLAN §7.5 «Bandeja»): comments, bug reports (open or
 * resolved), reviews and field reports on my mods, newest first, with inline answers:
 *
 * - comment → reply in the thread;
 * - bug → reply, or mark it resolved in a version;
 * - review → the author's public reply (one per review; sending again replaces it);
 * - field report → acknowledge it, or mark it fixed in a version (the reporters are notified).
 *
 * `?type=` and `?state=` (open / all) keep the filters in the URL. Replying from a phone is a first
 * class flow: the composer is inline and full width.
 */
import { formatRelativeTime } from '@sotf/i18n/format';
import { Avatar } from '@sotf/ui/avatar';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { ProseLocator } from '@sotf/ui/domain';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Select } from '@sotf/ui/select';
import { Textarea } from '@sotf/ui/textarea';
import { type InfiniteData, useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { Bug, CheckCheck, ExternalLink, Inbox, MessageSquare, Radar, Reply, Star } from 'lucide-react';
import { type ReactNode, useEffect, useId, useRef, useState } from 'react';
import { useTurnstile } from '../../../islands/auth/turnstile.ts';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { problemCode } from '../../lib/errors.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import {
  basecampApi,
  basecampKeys,
  INBOX_KINDS,
  type InboxItem,
  type InboxPage,
  type InboxState,
  type InboxType,
  inboxQuery,
  LIMITS,
  refreshLists,
  studioModQuery,
} from './api.ts';
import { dateTime, number, publicHref } from './format.ts';
import { bt, useBasecampMessages } from './i18n.ts';
import { inboxStateLabel, inboxStateVariant, inboxTypeLabel } from './labels.ts';
import { PanelError, PanelSkeleton, reportFailure, ScreenHeader } from './shared.tsx';

function typeIcon(type: InboxType) {
  switch (type) {
    case 'comment':
      return MessageSquare;
    case 'bug':
      return Bug;
    case 'review':
      return Star;
    case 'compat':
      return Radar;
  }
}

type Pages = InfiniteData<InboxPage, string | null>;

/** Marks an item answered/resolved in every cached inbox page (the refetch confirms it). */
function setItemState(
  queryClient: ReturnType<typeof useQueryClient>,
  item: InboxItem,
  state: InboxItem['state'],
): void {
  queryClient.setQueriesData<Pages>({ queryKey: basecampKeys.inboxAll }, (data) =>
    data
      ? {
          ...data,
          pages: data.pages.map((page) => ({
            ...page,
            items: page.items.map((entry) =>
              entry.type === item.type && entry.id === item.id ? { ...entry, state } : entry,
            ),
          })),
        }
      : data,
  );
}

function Composer({
  label,
  submitLabel,
  onSubmit,
  onCancel,
  children,
}: {
  label: string;
  submitLabel: string;
  onSubmit: (body: string) => Promise<void>;
  onCancel: () => void;
  /** Extra content under the field (the Turnstile widget host of comment replies). */
  children?: ReactNode;
}) {
  const id = useId();
  const field = useRef<HTMLTextAreaElement>(null);
  const [body, setBody] = useState('');
  useEffect(() => field.current?.focus(), []);
  const [busy, setBusy] = useState(false);
  const length = body.trim().length;
  return (
    <form
      className="grid gap-2"
      onSubmit={async (event) => {
        event.preventDefault();
        if (length === 0 || busy) return;
        setBusy(true);
        try {
          await onSubmit(body);
          setBody('');
        } catch {
          // Reported by the caller; the text stays for another try.
        } finally {
          setBusy(false);
        }
      }}
    >
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
      </label>
      <Textarea
        id={id}
        ref={field}
        value={body}
        maxLength={LIMITS.replyMax}
        minRows={3}
        maxRows={10}
        onChange={(event) => setBody(event.currentTarget.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
          }
          if (event.key === 'Escape') onCancel();
        }}
      />
      {children}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs text-fg-subtle">
          {bt('basecamp_counter', { count: number(body.length), max: number(LIMITS.replyMax) })} ·{' '}
          {bt('basecamp_inbox_markdown_hint')}
        </span>
        <span className="flex gap-2">
          <Button type="button" variant="ghost" size="sm" onClick={onCancel}>
            {bt('basecamp_cancel')}
          </Button>
          <Button type="submit" size="sm" loading={busy} disabled={length === 0}>
            {submitLabel}
          </Button>
        </span>
      </div>
    </form>
  );
}

/** «Resolved in / fixed in version…»: a version picker of the item's mod. */
function VersionAction({
  modId,
  label,
  actionLabel,
  onPick,
}: {
  modId: number;
  label: string;
  actionLabel: string;
  onPick: (versionId: number) => Promise<void>;
}) {
  const versions = useQuery({
    ...studioModQuery(modId),
    select: (studio) => studio.versions.filter((version) => version.status === 'active'),
  });
  const [versionId, setVersionId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  if (versions.isPending) return <PanelSkeleton rows={1} />;
  if (versions.isError) return <PanelError error={versions.error} onRetry={() => void versions.refetch()} />;
  const options = versions.data.map((version) => ({ value: String(version.id), label: `v${version.version}` }));
  const chosen = versionId ?? options[0]?.value ?? null;
  if (options.length === 0) return <p className="text-sm text-fg-muted">{bt('basecamp_inbox_no_versions')}</p>;
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Select
        label={label}
        options={options}
        value={chosen}
        onValueChange={setVersionId}
        size="sm"
        className="min-w-40"
      />
      <Button
        size="sm"
        loading={busy}
        disabled={!chosen}
        onClick={async () => {
          if (!chosen) return;
          setBusy(true);
          try {
            await onPick(Number(chosen));
          } catch {
            // Reported by the caller.
          } finally {
            setBusy(false);
          }
        }}
      >
        {actionLabel}
      </Button>
    </div>
  );
}

type Mode = 'idle' | 'reply' | 'resolve' | 'fixed';

/** Build-time public site key (the same one the public comment form falls back to). */
const TURNSTILE_SITE_KEY =
  (import.meta.env as Record<string, string | undefined>).PUBLIC_TURNSTILE_SITE_KEY || undefined;

function InboxRow({ item, now }: { item: InboxItem; now: number }) {
  const queryClient = useQueryClient();
  const [mode, setMode] = useState<Mode>('idle');
  const [busy, setBusy] = useState(false);
  const locale = activeLocale();
  const TypeIcon = typeIcon(item.type);
  // Accounts younger than 24 h need a Turnstile token to comment (PLAN §9.1): the widget only
  // loads when the API answers TURNSTILE_REQUIRED, as on the public comment form.
  const turnstile = useTurnstile({ siteKey: TURNSTILE_SITE_KEY, action: 'comment', language: locale });

  const done = async (state: InboxItem['state'], message: string) => {
    setItemState(queryClient, item, state);
    setMode('idle');
    notify.success(message);
    await refreshLists(queryClient);
  };

  const reply = async (body: string) => {
    try {
      if (item.type === 'review') await basecampApi.replyToReview(item.id, body);
      else await replyToComment(body);
      await done('answered', bt('basecamp_inbox_replied'));
    } catch (error) {
      reportFailure(error, bt('basecamp_inbox_reply_failed'));
      throw error;
    }
  };

  const replyToComment = async (body: string) => {
    try {
      await basecampApi.replyToComment(item.mod.id, item.id, body);
    } catch (error) {
      if (problemCode(error) !== 'TURNSTILE_REQUIRED') throw error;
      const token = await turnstile.getToken().catch(() => {
        throw error;
      });
      try {
        await basecampApi.replyToComment(item.mod.id, item.id, body, token);
      } finally {
        // Tokens are single use.
        turnstile.reset();
      }
    }
  };

  const resolveBug = async (versionId: number) => {
    try {
      await basecampApi.resolveBug(item.id, versionId);
      await done('resolved', bt('basecamp_inbox_resolved'));
    } catch (error) {
      reportFailure(error, bt('basecamp_inbox_action_failed'));
      throw error;
    }
  };

  const acknowledge = async (fixedInVersionId?: number) => {
    setBusy(true);
    try {
      await basecampApi.acknowledgeCompat(item.id, fixedInVersionId);
      await done(
        fixedInVersionId ? 'resolved' : 'answered',
        fixedInVersionId ? bt('basecamp_inbox_fixed') : bt('basecamp_inbox_acknowledged'),
      );
    } catch (error) {
      reportFailure(error, bt('basecamp_inbox_action_failed'));
      throw error;
    } finally {
      setBusy(false);
    }
  };

  const author = item.author;
  let actions: ReactNode = null;
  if (mode === 'idle') {
    actions = (
      <div className="flex flex-wrap items-center gap-2">
        {item.type !== 'compat' ? (
          <Button variant="secondary" size="sm" icon={<Icon icon={Reply} size={16} />} onClick={() => setMode('reply')}>
            {item.type === 'review' && item.state === 'answered'
              ? bt('basecamp_inbox_edit_reply')
              : bt('basecamp_inbox_reply')}
          </Button>
        ) : null}
        {item.type === 'bug' && item.state !== 'resolved' ? (
          <Button
            variant="ghost"
            size="sm"
            icon={<Icon icon={CheckCheck} size={16} />}
            onClick={() => setMode('resolve')}
          >
            {bt('basecamp_inbox_mark_resolved')}
          </Button>
        ) : null}
        {item.type === 'compat' && item.state === 'open' ? (
          <Button
            variant="secondary"
            size="sm"
            loading={busy}
            onClick={() => void acknowledge().catch(() => undefined)}
          >
            {bt('basecamp_inbox_acknowledge')}
          </Button>
        ) : null}
        {item.type === 'compat' && item.state !== 'resolved' ? (
          <Button
            variant="ghost"
            size="sm"
            icon={<Icon icon={CheckCheck} size={16} />}
            onClick={() => setMode('fixed')}
          >
            {bt('basecamp_inbox_mark_fixed')}
          </Button>
        ) : null}
        <a
          href={publicHref(item.permalink)}
          target="_blank"
          rel="noopener"
          className="inline-flex h-8 items-center gap-1 px-2 text-sm text-link hover:underline"
        >
          {bt('basecamp_inbox_open')}
          <Icon icon={ExternalLink} size={14} />
          <span className="sr-only">{bt('basecamp_new_tab')}</span>
        </a>
      </div>
    );
  } else if (mode === 'reply') {
    actions = (
      <Composer
        label={item.type === 'review' ? bt('basecamp_inbox_review_reply_label') : bt('basecamp_inbox_reply_label')}
        submitLabel={bt('basecamp_inbox_send')}
        onSubmit={reply}
        onCancel={() => setMode('idle')}
      >
        {item.type === 'review' ? null : <div ref={turnstile.containerRef} />}
      </Composer>
    );
  } else {
    actions = (
      <div className="grid gap-2">
        <VersionAction
          modId={item.mod.id}
          label={mode === 'resolve' ? bt('basecamp_inbox_resolved_in') : bt('basecamp_inbox_fixed_in')}
          actionLabel={mode === 'resolve' ? bt('basecamp_inbox_mark_resolved') : bt('basecamp_inbox_mark_fixed')}
          onPick={mode === 'resolve' ? resolveBug : (versionId) => acknowledge(versionId)}
        />
        <Button variant="ghost" size="sm" className="justify-self-start" onClick={() => setMode('idle')}>
          {bt('basecamp_cancel')}
        </Button>
      </div>
    );
  }

  return (
    <li
      className={cn(
        'grid gap-3 rounded-lg border bg-surface p-4',
        item.state === 'open' ? 'border-border-strong' : 'border-border',
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex min-w-0 items-start gap-3">
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-fg/8 text-fg-muted"
          >
            <Icon icon={TypeIcon} size={18} />
          </span>
          <div className="grid min-w-0 gap-0.5">
            <p className="text-sm text-fg">
              {bt('basecamp_inbox_line', {
                type: inboxTypeLabel(item.type),
                author: author ? author.displayName || author.handle : bt('basecamp_inbox_deleted_user'),
                mod: item.mod.name,
              })}
            </p>
            <time dateTime={item.createdAt} title={dateTime(item.createdAt)} className="text-xs text-fg-subtle">
              {formatRelativeTime(locale, item.createdAt, { now })}
            </time>
          </div>
        </div>
        <span className="flex items-center gap-2">
          {author ? (
            <Avatar name={author.displayName || author.handle} id={author.id} src={author.avatarUrl} size={24} />
          ) : null}
          <Badge variant={inboxStateVariant(item.state)} size="sm">
            {inboxStateLabel(item.state)}
          </Badge>
        </span>
      </div>
      <ProseLocator html={item.excerptHtml} size="sm" className="line-clamp-6 text-fg-muted" />
      {actions}
    </li>
  );
}

function TypeFilter({ value, onChange }: { value: InboxType | null; onChange: (type: InboxType | null) => void }) {
  const options: Array<{ value: InboxType | null; label: string }> = [
    { value: null, label: bt('basecamp_inbox_type_all') },
    ...INBOX_KINDS.map((type) => ({ value: type, label: inboxTypeLabel(type) })),
  ];
  return (
    <fieldset className="flex flex-wrap gap-2">
      <legend className="sr-only">{bt('basecamp_inbox_filter_type')}</legend>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value ?? 'all'}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              'inline-flex h-9 items-center rounded-full border px-3 text-sm transition-colors',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
              active ? 'border-primary bg-primary-soft text-fg' : 'border-border text-fg-muted hover:text-fg',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </fieldset>
  );
}

export function InboxScreen({
  type,
  state,
  onFilters,
}: {
  type: InboxType | null;
  state: InboxState;
  onFilters: (next: { type?: InboxType | null; state?: InboxState }) => void;
}) {
  useBasecampMessages();
  const types = type ? [type] : [];
  const inbox = useInfiniteQuery(inboxQuery(types, state));
  const [now] = useState(() => Date.now());
  const items = inbox.data?.pages.flatMap((page) => page.items) ?? [];

  return (
    <DomainI18nBridge>
      <div className="grid gap-6">
        <ScreenHeader
          readout={bt('basecamp_readout')}
          title={bt('basecamp_inbox_title')}
          description={bt('basecamp_inbox_intro')}
        />
        <div className="flex flex-wrap items-end justify-between gap-3">
          <TypeFilter value={type} onChange={(next) => onFilters({ type: next })} />
          <Select<InboxState>
            label={bt('basecamp_inbox_filter_state')}
            options={[
              { value: 'open', label: bt('basecamp_inbox_state_filter_open') },
              { value: 'all', label: bt('basecamp_inbox_state_filter_all') },
            ]}
            value={state}
            onValueChange={(value) => onFilters({ state: value ?? 'open' })}
            size="sm"
            className="min-w-40"
          />
        </div>

        {inbox.isPending ? (
          <PanelSkeleton rows={4} className="[&>*]:h-28" />
        ) : inbox.isError ? (
          <PanelError error={inbox.error} onRetry={() => void inbox.refetch()} />
        ) : items.length === 0 ? (
          <EmptyState
            icon={<Icon icon={Inbox} size={32} />}
            title={state === 'open' ? bt('basecamp_inbox_empty_open_title') : bt('basecamp_inbox_empty_title')}
            description={state === 'open' ? bt('basecamp_inbox_empty_open_text') : bt('basecamp_inbox_empty_text')}
          />
        ) : (
          <>
            <ul className="grid gap-3" aria-label={bt('basecamp_inbox_title')}>
              {items.map((item) => (
                <InboxRow key={`${item.type}:${item.id}`} item={item} now={now} />
              ))}
            </ul>
            {inbox.hasNextPage ? (
              <Button
                variant="secondary"
                className="justify-self-center"
                loading={inbox.isFetchingNextPage}
                onClick={() => void inbox.fetchNextPage()}
              >
                {bt('basecamp_inbox_more')}
              </Button>
            ) : null}
          </>
        )}
      </div>
    </DomainI18nBridge>
  );
}
