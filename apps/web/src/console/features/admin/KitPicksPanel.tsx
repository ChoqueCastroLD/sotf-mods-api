/**
 * Kit staff picks (`PUT /admin/kits/:id/staff-pick`, docs/backlog/WP-42.md): the public kits, most
 * followed first (or only the current picks), with a switch per kit. Picks feed the landing
 * «Essentials to get started» and the starter kit of `/install`.
 *
 * The public list is edge-cached, so the switch trusts the write response and patches every cached
 * page instead of refetching.
 */
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Skeleton } from '@sotf/ui/skeleton';
import { Switch } from '@sotf/ui/switch';
import { type QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { adminApi, type KitCard, kitPicksQuery } from './api.ts';
import {
  formatCount,
  locale,
  Panel,
  PanelError,
  reportFailure,
  TableScroller,
  tdClasses,
  thClasses,
} from './shared.tsx';

type KitPage = { items: KitCard[]; page: number; totalPages: number };

/** Writes the new staff-pick state into every cached page of kits. */
export function patchKitPicks(queryClient: QueryClient, kitId: number, isStaffPick: boolean): void {
  queryClient.setQueriesData<KitPage>({ queryKey: ['admin', 'kit-picks'] }, (data) =>
    data ? { ...data, items: data.items.map((kit) => (kit.id === kitId ? { ...kit, isStaffPick } : kit)) } : data,
  );
}

export function KitPicksPanel() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [onlyPicks, setOnlyPicks] = useState(false);
  const [pending, setPending] = useState<number | null>(null);
  const query = useQuery(kitPicksQuery(page, onlyPicks));

  const toggle = async (kit: KitCard, next: boolean) => {
    setPending(kit.id);
    try {
      const result = await adminApi.setKitStaffPick(kit.id, next);
      patchKitPicks(queryClient, result.kitId, result.isStaffPick);
      notify.success(
        result.isStaffPick ? m.admin_kit_picks_on({ name: kit.name }) : m.admin_kit_picks_off({ name: kit.name }),
      );
    } catch (error) {
      reportFailure(error, m.admin_kit_picks_failed());
    } finally {
      setPending(null);
    }
  };

  const data = query.data;
  const totalPages = Math.max(1, data?.totalPages ?? 1);

  return (
    <Panel
      title={m.admin_kit_picks_title()}
      description={m.admin_kit_picks_text()}
      actions={
        <Switch
          label={m.admin_kit_picks_only()}
          checked={onlyPicks}
          onCheckedChange={(checked) => {
            setOnlyPicks(checked);
            setPage(1);
          }}
        />
      }
    >
      {query.isPending ? (
        <div className="grid gap-2">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="h-10 w-full" />
          ))}
        </div>
      ) : query.isError ? (
        <PanelError error={query.error} onRetry={() => void query.refetch()} />
      ) : data && data.items.length === 0 ? (
        <p className="text-sm text-fg-muted">{m.admin_kit_picks_empty()}</p>
      ) : data ? (
        <>
          <TableScroller label={m.admin_kit_picks_title()}>
            <table className="w-full min-w-[32rem] text-sm">
              <thead className="border-b border-border bg-sunken">
                <tr>
                  <th scope="col" className={thClasses}>
                    {m.admin_kit_picks_col_kit()}
                  </th>
                  <th scope="col" className={`${thClasses} text-end`}>
                    {m.admin_kit_picks_col_items()}
                  </th>
                  <th scope="col" className={`${thClasses} text-end`}>
                    {m.admin_kit_picks_col_followers()}
                  </th>
                  <th scope="col" className={thClasses}>
                    {m.admin_kit_picks_col_pick()}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((kit) => (
                  <tr key={kit.id} className="border-b border-border last:border-0">
                    <td className={tdClasses}>
                      <a
                        href={localizePath(kit.canonicalPath, locale())}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 font-medium text-fg hover:text-link"
                      >
                        {kit.name}
                        <Icon icon={ExternalLink} size={12} />
                      </a>
                      <span className="block text-xs text-fg-muted">@{kit.owner.handle}</span>
                    </td>
                    <td className={`${tdClasses} text-end tabular-nums`}>{formatCount(kit.itemsCount)}</td>
                    <td className={`${tdClasses} text-end tabular-nums`}>{formatCount(kit.followersCount)}</td>
                    <td className={tdClasses}>
                      <Switch
                        label={<span className="sr-only">{m.admin_kit_picks_toggle({ name: kit.name })}</span>}
                        checked={kit.isStaffPick}
                        disabled={pending === kit.id}
                        onCheckedChange={(checked) => void toggle(kit, checked)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroller>
          {totalPages > 1 ? (
            <div className="flex items-center justify-end gap-2 text-sm text-fg-muted">
              <Button
                variant="icon"
                size="sm"
                aria-label={m.admin_kit_picks_previous()}
                disabled={page <= 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
              >
                <Icon icon={ChevronLeft} size={16} />
              </Button>
              <span className="tabular-nums">{m.admin_kit_picks_page({ page, pages: totalPages })}</span>
              <Button
                variant="icon"
                size="sm"
                aria-label={m.admin_kit_picks_next()}
                disabled={page >= totalPages}
                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
              >
                <Icon icon={ChevronRight} size={16} />
              </Button>
            </div>
          ) : null}
        </>
      ) : null}
    </Panel>
  );
}
