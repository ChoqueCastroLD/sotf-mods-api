/**
 * `/me/backpack` (PLAN §4.3 «Me», §6.8 «Favoritos → Backpack», T0-16): the mods I follow with
 * their update and compatibility state. Filters: all · updates available · broken on the current
 * build. Per mod: download the latest version, turn update signals on/off and unfollow (optimistic,
 * with «Undo»). The «Day 1 on the island» checklist leads the page while it is pending.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { ArrowUpCircle, Backpack as BackpackIcon, Bell, BellOff, Download, HeartOff, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { track } from '../../../scripts/beacon.ts';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { notify } from '../../lib/notify.ts';
import { failureDescription } from '../settings/errors.ts';
import { type Backpack, type BackpackItem, backpackQuery, meApi, meKeys } from './api.ts';
import { OnboardingChecklist } from './OnboardingChecklist.tsx';
import { CompatLine, isBrokenNow, localDate, ModThumb, publicHref } from './shared.tsx';

type Filter = 'all' | 'updates' | 'broken';

function downloadHref(item: BackpackItem): string | null {
  const version = item.mod.latestVersion;
  return version ? `${item.mod.canonicalPath}/download/${encodeURIComponent(version)}` : null;
}

export function BackpackScreen() {
  const queryClient = useQueryClient();
  const { data } = useSuspenseQuery(backpackQuery);
  const [filter, setFilter] = useState<Filter>('all');
  const [busy, setBusy] = useState<ReadonlySet<number>>(new Set());
  useDocumentTitle(m.me_backpack_title());

  const brokenCount = useMemo(() => data.items.filter((item) => isBrokenNow(item.compat)).length, [data.items]);
  const visible = useMemo(
    () =>
      data.items.filter((item) =>
        filter === 'updates' ? item.hasUpdate : filter === 'broken' ? isBrokenNow(item.compat) : true,
      ),
    [data.items, filter],
  );

  const setItems = (update: (items: BackpackItem[]) => BackpackItem[]) =>
    queryClient.setQueryData<Backpack>(meKeys.backpack, (current) => {
      if (!current) return current;
      const items = update(current.items);
      return { items, updatesAvailable: items.filter((item) => item.hasUpdate).length };
    });

  const withBusy = async (modId: number, task: () => Promise<void>) => {
    setBusy((current) => new Set(current).add(modId));
    try {
      await task();
    } finally {
      setBusy((current) => {
        const next = new Set(current);
        next.delete(modId);
        return next;
      });
    }
  };

  const toggleNotify = (item: BackpackItem) =>
    withBusy(item.mod.id, async () => {
      const notifyOn = !item.notify;
      setItems((items) =>
        items.map((entry) => (entry.mod.id === item.mod.id ? { ...entry, notify: notifyOn } : entry)),
      );
      try {
        await meApi.follow(item.mod.id, notifyOn);
        notify.success(
          notifyOn ? m.me_backpack_notify_on({ mod: item.mod.name }) : m.me_backpack_notify_off({ mod: item.mod.name }),
        );
      } catch (failure) {
        setItems((items) =>
          items.map((entry) => (entry.mod.id === item.mod.id ? { ...entry, notify: item.notify } : entry)),
        );
        notify.error(m.me_action_failed(), { description: failureDescription(failure) });
      }
    });

  const restore = (item: BackpackItem, index: number) =>
    withBusy(item.mod.id, async () => {
      setItems((items) => {
        if (items.some((entry) => entry.mod.id === item.mod.id)) return items;
        const next = [...items];
        next.splice(Math.min(index, next.length), 0, item);
        return next;
      });
      try {
        await meApi.follow(item.mod.id, item.notify);
        track('follow', { entityType: 'mod', entityId: item.mod.id, props: { source: 'backpack_undo' } });
      } catch (failure) {
        setItems((items) => items.filter((entry) => entry.mod.id !== item.mod.id));
        notify.error(m.me_action_failed(), { description: failureDescription(failure) });
      }
    });

  const unfollow = (item: BackpackItem) =>
    withBusy(item.mod.id, async () => {
      const index = data.items.findIndex((entry) => entry.mod.id === item.mod.id);
      setItems((items) => items.filter((entry) => entry.mod.id !== item.mod.id));
      try {
        await meApi.unfollow(item.mod.id);
        notify.success(m.me_backpack_removed({ mod: item.mod.name }), {
          action: { label: m.me_undo(), onClick: () => void restore(item, index) },
        });
      } catch (failure) {
        setItems((items) => {
          const next = [...items];
          next.splice(Math.max(0, index), 0, item);
          return next;
        });
        notify.error(m.me_action_failed(), { description: failureDescription(failure) });
      }
    });

  const filters: { value: Filter; label: string; count: number }[] = [
    { value: 'all', label: m.me_filter_all(), count: data.items.length },
    { value: 'updates', label: m.me_filter_updates(), count: data.updatesAvailable },
    { value: 'broken', label: m.me_filter_broken(), count: brokenCount },
  ];

  return (
    <DomainI18nBridge>
      <div className="grid gap-6">
        <header className="grid gap-1">
          <p className="readout text-signal">{m.me_backpack_readout()}</p>
          <h1 className="font-display-caps text-display-xs text-fg">{m.me_backpack_title()}</h1>
          <p className="max-w-prose text-sm text-fg-muted">
            {data.items.length > 0
              ? m.me_backpack_summary({ count: data.items.length, updates: data.updatesAvailable })
              : m.me_backpack_description()}
          </p>
        </header>

        <OnboardingChecklist />

        {data.items.length === 0 ? (
          <EmptyState
            icon={<Icon icon={BackpackIcon} size={32} />}
            title={m.me_backpack_empty_title()}
            description={m.me_backpack_empty_text()}
            action={
              <a
                href={publicHref('/mods')}
                className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg hover:bg-primary/90"
              >
                <Icon icon={Search} size={18} />
                {m.me_browse_mods()}
              </a>
            }
          />
        ) : (
          <>
            <fieldset className="flex flex-wrap gap-2">
              <legend className="sr-only">{m.me_filter_label()}</legend>
              {filters.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={filter === option.value}
                  onClick={() => setFilter(option.value)}
                  className={cn(
                    'inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors md:h-9',
                    filter === option.value
                      ? 'border-primary bg-primary text-primary-fg'
                      : 'border-border-strong text-fg-muted hover:bg-fg/8 hover:text-fg',
                  )}
                >
                  {option.label}
                  <span className="tabular-nums opacity-80">{option.count}</span>
                </button>
              ))}
            </fieldset>

            {visible.length === 0 ? (
              <EmptyState
                headingLevel={2}
                icon={<Icon icon={BackpackIcon} size={28} />}
                title={filter === 'updates' ? m.me_backpack_no_updates_title() : m.me_backpack_no_broken_title()}
                description={filter === 'updates' ? m.me_backpack_no_updates_text() : m.me_backpack_no_broken_text()}
              />
            ) : (
              <ul className="grid gap-2" aria-label={m.me_backpack_list_label()}>
                {visible.map((item) => {
                  const href = downloadHref(item);
                  const pending = busy.has(item.mod.id);
                  return (
                    <li
                      key={item.mod.id}
                      className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-3 sm:flex-row sm:items-center"
                    >
                      <div className="flex min-w-0 flex-1 items-start gap-3">
                        <ModThumb mod={item.mod} className="h-14 w-24" />
                        <div className="grid min-w-0 gap-1">
                          <a
                            href={publicHref(item.mod.canonicalPath)}
                            className="truncate font-semibold text-fg hover:text-link"
                          >
                            {item.mod.name}
                          </a>
                          <p className="truncate text-xs text-fg-muted">
                            {m.me_by_author({ author: item.mod.userDisplayName })} ·{' '}
                            {m.me_followed_on({ date: localDate(item.followedAt) })}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            {item.hasUpdate ? (
                              <Badge variant="signal" size="sm" icon={<Icon icon={ArrowUpCircle} size={12} />}>
                                {item.lastDownloadedVersion && item.mod.latestVersion
                                  ? m.me_update_from_to({
                                      from: item.lastDownloadedVersion,
                                      to: item.mod.latestVersion,
                                    })
                                  : m.me_update_available()}
                              </Badge>
                            ) : item.mod.latestVersion ? (
                              <span className="text-fg-muted">
                                {m.me_latest_version({ version: item.mod.latestVersion })}
                              </span>
                            ) : null}
                            <CompatLine compat={item.compat} />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                        {href ? (
                          <a
                            href={href}
                            rel="nofollow"
                            onClick={() =>
                              track('download_click', {
                                entityType: 'mod',
                                entityId: item.mod.id,
                                props: { source: 'backpack' },
                              })
                            }
                            className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-3 text-sm font-semibold text-primary-fg hover:bg-primary/90 md:h-9"
                          >
                            <Icon icon={Download} size={16} />
                            {item.hasUpdate ? m.me_action_update() : m.me_action_download()}
                            <span className="sr-only"> · {item.mod.name}</span>
                          </a>
                        ) : null}
                        <Button
                          variant="secondary"
                          size="sm"
                          disabled={pending}
                          aria-pressed={item.notify}
                          icon={<Icon icon={item.notify ? Bell : BellOff} size={16} />}
                          onClick={() => void toggleNotify(item)}
                        >
                          {item.notify ? m.me_notify_on() : m.me_notify_off()}
                          <span className="sr-only"> · {item.mod.name}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          disabled={pending}
                          icon={<Icon icon={HeartOff} size={16} />}
                          onClick={() => void unfollow(item)}
                        >
                          {m.me_unfollow()}
                          <span className="sr-only"> · {item.mod.name}</span>
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </div>
    </DomainI18nBridge>
  );
}
