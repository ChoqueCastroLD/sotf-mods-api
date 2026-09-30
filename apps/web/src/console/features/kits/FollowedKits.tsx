/**
 * «Kits I follow» on `/me/kits` (Kits T1-24): every kit I follow with the last revision, when I
 * started following it, a switch for its signals (`PUT /kits/:id/follow` with `notify`) and
 * «Unfollow» (`DELETE /kits/:id/follow`). Lives next to my own kits and loads on its own, so a slow
 * or failed list never blocks the screen.
 */
import type { KitFollowListDTO } from '@sotf/contracts/kit-social';
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Bell, BellOff, Heart, HeartOff } from 'lucide-react';
import { api } from '../../lib/api.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { followedKitsQuery, kitKeys } from './api.ts';
import { failureDetail, shortDate } from './shared.tsx';

type FollowItem = KitFollowListDTO['items'][number];

export function FollowedKits() {
  const queryClient = useQueryClient();
  const { data, isPending, isError, refetch } = useQuery(followedKitsQuery);

  const unfollow = useMutation({
    mutationFn: (item: FollowItem) => api.kitSocial.unfollow({ params: { id: item.kit.id } }),
    onSuccess: (_state, item) => {
      queryClient.setQueryData<FollowItem[]>(kitKeys.followed, (list) => list?.filter((e) => e.kit.id !== item.kit.id));
      notify.success(m.kitsocial_console_unfollowed({ name: item.kit.name }));
    },
    onError: (failure) => notify.error(m.kitsocial_console_failed(), { description: failureDetail(failure) }),
  });

  const setNotify = useMutation({
    mutationFn: (input: { item: FollowItem; notify: boolean }) =>
      api.kitSocial.follow({ params: { id: input.item.kit.id }, body: { notify: input.notify } }),
    onSuccess: (state, input) =>
      queryClient.setQueryData<FollowItem[]>(kitKeys.followed, (list) =>
        list?.map((e) => (e.kit.id === input.item.kit.id ? { ...e, notify: state.notify } : e)),
      ),
    onError: (failure) => notify.error(m.kitsocial_console_failed(), { description: failureDetail(failure) }),
  });

  if (isPending) return null;
  if (isError) {
    return (
      <section aria-labelledby="followed-kits-title" className="grid gap-3">
        <h2 id="followed-kits-title" className="font-semibold text-fg">
          {m.kitsocial_console_title()}
        </h2>
        <p className="text-sm text-fg-muted">
          {m.kitsocial_console_failed()}{' '}
          <Button variant="ghost" size="sm" onClick={() => void refetch()}>
            {m.kitsocial_retry()}
          </Button>
        </p>
      </section>
    );
  }

  const items = data ?? [];
  return (
    <section aria-labelledby="followed-kits-title" className="grid gap-3">
      <div className="grid gap-1">
        <h2 id="followed-kits-title" className="flex items-center gap-2 font-semibold text-fg">
          <Icon icon={Heart} size={18} />
          {m.kitsocial_console_title()}
        </h2>
        <p className="max-w-prose text-sm text-fg-muted">{m.kitsocial_console_description()}</p>
      </div>
      {items.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border-strong p-4 text-sm text-fg-muted">
          <span className="font-semibold text-fg">{m.kitsocial_console_empty_title()}</span>{' '}
          {m.kitsocial_console_empty_text()}{' '}
          <a className="font-semibold text-link hover:underline" href={localizePath('/kits', activeLocale())}>
            {m.kitsocial_console_browse()}
          </a>
        </p>
      ) : (
        <ul aria-label={m.kitsocial_console_list_label()} className="grid gap-2">
          {items.map((item) => (
            <li
              key={item.kit.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface p-3"
            >
              <div className="grid min-w-0 gap-0.5">
                <a
                  href={localizePath(item.kit.canonicalPath, activeLocale())}
                  className="truncate font-semibold text-fg hover:text-link"
                >
                  {item.kit.name}
                </a>
                <p className="text-xs text-fg-muted">
                  {item.kit.owner.displayName} · {m.kits_revision({ revision: item.kit.revision })} ·{' '}
                  {m.kitsocial_console_since({ date: shortDate(item.followedAt) })}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  aria-pressed={item.notify}
                  disabled={setNotify.isPending}
                  icon={<Icon icon={item.notify ? Bell : BellOff} size={16} />}
                  onClick={() => setNotify.mutate({ item, notify: !item.notify })}
                >
                  {m.kitsocial_console_notify()}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={unfollow.isPending}
                  icon={<Icon icon={HeartOff} size={16} />}
                  onClick={() => unfollow.mutate(item)}
                >
                  {m.kitsocial_console_unfollow()}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
