/**
 * `/me/downloads` (T0-17, PLAN §4.3): one row per mod I downloaded while signed in — the last
 * version I got and the current one, with «Update available». Actions: download, follow / unfollow
 * and remove from the list. The page can clear the
 * whole history and turn the history off (`settings.downloadHistory`).
 *
 * Removing one row detaches my downloads of that mod on the server (`DELETE /me/downloads/:modId`;
 * the row comes back with the next download). Rows an earlier version hid only in this browser
 * (`sotf_me_downloads_hidden`) are removed on the server once, then the local list is dropped.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Switch } from '@sotf/ui/switch';
import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { ArrowUpCircle, Download, Heart, HeartOff, History, Search, Trash2, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { track } from '../../../scripts/beacon.ts';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { useMe } from '../../hooks/use-me.ts';
import { notify } from '../../lib/notify.ts';
import { storage } from '../../lib/storage.ts';
import { failureDescription } from '../settings/errors.ts';
import {
  type DownloadHistory,
  type DownloadItem,
  downloadsQuery,
  followLookupQuery,
  meApi,
  meKeys,
  storeSettings,
} from './api.ts';
import { localDate, ModThumb, publicHref } from './shared.tsx';

/** Rows hidden in this browser by an earlier version (modId → `lastDownloaded.at`). */
const HIDDEN_KEY = 'sotf_me_downloads_hidden';

function readHidden(): Record<string, string> {
  try {
    const parsed = JSON.parse(storage.get(HIDDEN_KEY) ?? '{}') as unknown;
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? (parsed as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/** Mods of the legacy local list whose row is still the one that was hidden. */
export function legacyHiddenModIds(
  items: ReadonlyArray<{ mod: { id: number }; lastDownloaded: { at: string } }>,
  hidden: Readonly<Record<string, string>>,
): number[] {
  return items.filter((item) => hidden[String(item.mod.id)] === item.lastDownloaded.at).map((item) => item.mod.id);
}

function downloadHref(item: DownloadItem): string | null {
  const version = item.current?.version ?? item.mod.latestVersion;
  return version ? `${item.mod.canonicalPath}/download/${encodeURIComponent(version)}` : null;
}

export function DownloadsScreen() {
  const queryClient = useQueryClient();
  const me = useMe();
  const { data } = useSuspenseQuery(downloadsQuery);
  const [legacyHidden] = useState<Record<string, string>>(() => readHidden());
  const [confirmClear, setConfirmClear] = useState(false);
  const [toggling, setToggling] = useState(false);
  const [followBusy, setFollowBusy] = useState<ReadonlySet<number>>(new Set());
  useDocumentTitle(m.me_downloads_title());

  const items = useMemo(
    () => data.items.filter((item) => legacyHidden[String(item.mod.id)] !== item.lastDownloaded.at),
    [data.items, legacyHidden],
  );

  // One-time migration of the rows hidden locally by an earlier version.
  useEffect(() => {
    if (Object.keys(legacyHidden).length === 0) return;
    const modIds = legacyHiddenModIds(data.items, legacyHidden);
    void Promise.allSettled(modIds.map((modId) => meApi.removeDownload(modId))).then((results) => {
      if (results.every((result) => result.status === 'fulfilled')) storage.remove(HIDDEN_KEY);
    });
  }, [legacyHidden, data.items]);
  const ids = useMemo(() => items.map((item) => item.mod.id).sort((a, b) => a - b), [items]);
  const lookup = useQuery(followLookupQuery(ids));
  const followed = lookup.data;

  const remove = async (item: DownloadItem) => {
    const previous = queryClient.getQueryData<DownloadHistory>(meKeys.downloads);
    queryClient.setQueryData<DownloadHistory>(meKeys.downloads, (current) =>
      current ? { ...current, items: current.items.filter((entry) => entry.mod.id !== item.mod.id) } : current,
    );
    try {
      await meApi.removeDownload(item.mod.id);
      notify.success(m.me_downloads_removed({ mod: item.mod.name }));
      void queryClient.invalidateQueries({ queryKey: meKeys.downloads });
    } catch (failure) {
      if (previous) queryClient.setQueryData(meKeys.downloads, previous);
      notify.error(m.me_action_failed(), { description: failureDescription(failure) });
    }
  };

  const clearAll = async () => {
    try {
      await meApi.clearDownloads();
      queryClient.setQueryData<DownloadHistory>(meKeys.downloads, (current) =>
        current ? { ...current, items: [], updatesAvailable: 0 } : current,
      );
      storage.remove(HIDDEN_KEY);
      notify.success(m.me_downloads_cleared());
    } catch (failure) {
      notify.error(m.me_action_failed(), { description: failureDescription(failure) });
      throw failure;
    }
  };

  const setHistory = async (enabled: boolean) => {
    setToggling(true);
    try {
      const settings = await meApi.setDownloadHistory(enabled);
      storeSettings(queryClient, settings);
      queryClient.setQueryData<DownloadHistory>(meKeys.downloads, (current) =>
        current ? { ...current, enabled: settings.downloadHistory } : current,
      );
      notify.success(enabled ? m.me_downloads_history_on() : m.me_downloads_history_off());
    } catch (failure) {
      notify.error(m.me_action_failed(), { description: failureDescription(failure) });
    } finally {
      setToggling(false);
    }
  };

  const toggleFollow = async (item: DownloadItem, following: boolean) => {
    const id = item.mod.id;
    setFollowBusy((current) => new Set(current).add(id));
    const key = followLookupQuery(ids).queryKey;
    const apply = (on: boolean) =>
      queryClient.setQueryData<Set<number>>(key, (current) => {
        const next = new Set(current ?? []);
        if (on) next.add(id);
        else next.delete(id);
        return next;
      });
    apply(!following);
    try {
      if (following) {
        await meApi.unfollow(id);
        notify.success(m.me_unfollowed({ mod: item.mod.name }));
      } else {
        await meApi.follow(id, true);
        track('follow', { entityType: 'mod', entityId: id, props: { source: 'downloads' } });
        notify.success(m.me_followed({ mod: item.mod.name }));
      }
      void queryClient.invalidateQueries({ queryKey: meKeys.backpack });
    } catch (failure) {
      apply(following);
      notify.error(m.me_action_failed(), { description: failureDescription(failure) });
    } finally {
      setFollowBusy((current) => {
        const next = new Set(current);
        next.delete(id);
        return next;
      });
    }
  };

  const enabled = data.enabled && me.settings.downloadHistory;

  return (
    <DomainI18nBridge>
      <div className="grid gap-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div className="grid gap-1">
            <h1 className="font-display-caps text-display-xs text-fg">{m.me_downloads_title()}</h1>
            <p className="max-w-prose text-sm text-fg-muted">
              {items.length > 0
                ? m.me_downloads_summary({ count: items.length, updates: data.updatesAvailable })
                : m.me_downloads_description()}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Switch
              label={m.me_downloads_keep_history()}
              checked={enabled}
              disabled={toggling}
              onCheckedChange={(checked) => void setHistory(checked)}
            />
            {data.items.length > 0 ? (
              <Button
                variant="secondary"
                size="sm"
                icon={<Icon icon={Trash2} size={16} />}
                onClick={() => setConfirmClear(true)}
              >
                {m.me_downloads_clear()}
              </Button>
            ) : null}
          </div>
        </header>

        {!enabled ? (
          <Banner tone="info" title={m.me_downloads_off_title()}>
            {m.me_downloads_off_text()}
          </Banner>
        ) : null}

        {items.length === 0 ? (
          <EmptyState
            icon={<Icon icon={History} size={32} />}
            title={m.me_downloads_empty_title()}
            description={enabled ? m.me_downloads_empty_text() : m.me_downloads_empty_off_text()}
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
          <ul className="grid gap-2" aria-label={m.me_downloads_list_label()}>
            {items.map((item) => {
              const href = downloadHref(item);
              const following = followed?.has(item.mod.id) ?? null;
              return (
                <li
                  key={item.mod.id}
                  className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-3 lg:flex-row lg:items-center"
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
                      <p className="text-xs text-fg-muted">
                        {m.me_downloads_last({
                          version: item.lastDownloaded.version,
                          date: localDate(item.lastDownloaded.at),
                        })}
                        {item.downloadsCount > 1 ? ` · ${m.me_downloads_times({ count: item.downloadsCount })}` : null}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        {item.hasUpdate && item.current ? (
                          <Badge variant="signal" size="sm" icon={<Icon icon={ArrowUpCircle} size={12} />}>
                            {m.me_update_from_to({ from: item.lastDownloaded.version, to: item.current.version })}
                          </Badge>
                        ) : item.current ? (
                          <span className="text-fg-muted">{m.me_up_to_date({ version: item.current.version })}</span>
                        ) : (
                          <span className="text-fg-muted">{m.me_no_current_version()}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                    {href ? (
                      <a
                        href={href}
                        rel="nofollow"
                        onClick={() =>
                          track('download_click', {
                            entityType: 'mod',
                            entityId: item.mod.id,
                            props: { source: 'downloads' },
                          })
                        }
                        className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-3 text-sm font-semibold text-primary-fg hover:bg-primary/90 md:h-9"
                      >
                        <Icon icon={Download} size={16} />
                        {item.hasUpdate ? m.me_action_update() : m.me_action_download()}
                        <span className="sr-only"> · {item.mod.name}</span>
                      </a>
                    ) : null}
                    {following === null ? null : (
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-pressed={following}
                        disabled={followBusy.has(item.mod.id)}
                        icon={<Icon icon={following ? HeartOff : Heart} size={16} />}
                        onClick={() => void toggleFollow(item, following)}
                      >
                        {following ? m.me_unfollow() : m.me_follow()}
                        <span className="sr-only"> · {item.mod.name}</span>
                      </Button>
                    )}
                    <Button
                      variant="icon"
                      size="sm"
                      aria-label={m.me_downloads_remove_label({ mod: item.mod.name })}
                      title={m.me_downloads_remove()}
                      onClick={() => void remove(item)}
                    >
                      <Icon icon={X} size={16} />
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <ConfirmDialog
          open={confirmClear}
          onOpenChange={setConfirmClear}
          title={m.me_downloads_clear_title()}
          description={m.me_downloads_clear_text()}
          confirmLabel={m.me_downloads_clear_confirm()}
          tone="danger"
          onConfirm={clearAll}
        />
      </div>
    </DomainI18nBridge>
  );
}
