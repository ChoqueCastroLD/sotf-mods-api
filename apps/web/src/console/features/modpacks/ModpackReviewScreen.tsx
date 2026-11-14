/**
 * `/moderation/modpacks` — moderators approve modpacks (like mods: those of members who are not
 * verified creators wait here) and can send a published one back to pending. Each pending modpack
 * opens its mods and incompatible pairs before the decision.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AlertTriangle, ArrowUpRight, Check, Undo2 } from 'lucide-react';
import { useState } from 'react';
import { api } from '../../lib/api.ts';
import { notify } from '../../lib/notify.ts';
import { formatInstant, Panel } from '../admin/shared.tsx';
import { reportFailure } from '../basecamp/shared.tsx';
import { type ModpackCard, modpackKeys, reviewQuery } from './api.ts';

type Tab = 'pending' | 'published';

function PendingDetail({ id }: { id: number }) {
  const detail = useQuery({
    queryKey: ['modpacks', 'review-detail', id],
    queryFn: ({ signal }) => api.kits.getForReview({ params: { id } }, { signal }),
  });
  if (detail.isPending) return <p className="text-sm text-fg-muted">{m.modpacks_review_loading()}</p>;
  if (detail.isError) return <p className="text-sm text-danger">{m.modpacks_review_load_failed()}</p>;
  const pack = detail.data;
  return (
    <div className="grid gap-3">
      {pack.descriptionMd ? <p className="whitespace-pre-line text-sm text-fg">{pack.descriptionMd}</p> : null}
      {pack.conflictPairs.length > 0 ? (
        <p className="flex items-start gap-2 text-sm text-danger">
          <Icon icon={AlertTriangle} size={16} className="mt-0.5 shrink-0" />
          {pack.conflictPairs.map(([a, b]) => m.modpacks_conflict_pair({ a, b })).join(' · ')}
        </p>
      ) : null}
      <ol className="grid gap-1 text-sm">
        {pack.items.map((item) => (
          <li key={item.mod.id} className="flex flex-wrap items-center gap-2">
            <a href={item.mod.canonicalPath} className="font-medium text-fg hover:text-link">
              {item.mod.name}
            </a>
            <span className="readout text-fg-subtle">{item.mod.manifestId}</span>
            {item.isAutoDependency ? (
              <Badge variant="neutral" size="sm">
                {m.modpacks_dependency()}
              </Badge>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Row({ pack, tab, onDone }: { pack: ModpackCard; tab: Tab; onDone: () => void }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const decide = async (approved: boolean) => {
    setBusy(true);
    try {
      await api.kits.setApproval({ params: { id: pack.id }, body: { approved } });
      notify.success(
        approved ? m.modpacks_review_approved({ name: pack.name }) : m.modpacks_review_unapproved({ name: pack.name }),
      );
      onDone();
    } catch (error) {
      reportFailure(error, m.modpacks_review_failed());
    } finally {
      setBusy(false);
    }
  };
  return (
    <li className="grid gap-3 rounded-lg border border-border bg-surface p-3">
      <div className="flex flex-wrap items-center gap-4">
        <div className="grid min-w-0 flex-1 gap-0.5">
          <span className="truncate text-lg font-semibold text-fg">{pack.name}</span>
          <span className="text-xs text-fg-muted">
            @{pack.owner.handle} · {m.modpacks_mods_count({ count: pack.itemsCount })} ·{' '}
            {m.modpacks_created({ date: formatInstant(pack.createdAt) })}
          </span>
        </div>
        <span className="flex flex-wrap items-center gap-2">
          {tab === 'pending' ? (
            <>
              <Button variant="ghost" size="sm" onClick={() => setOpen(!open)} aria-expanded={open}>
                {open ? m.modpacks_review_hide() : m.modpacks_review_show()}
              </Button>
              <Button size="sm" loading={busy} icon={<Icon icon={Check} size={14} />} onClick={() => void decide(true)}>
                {m.modpacks_review_approve()}
              </Button>
            </>
          ) : (
            <>
              <a
                href={pack.canonicalPath}
                className="inline-flex items-center gap-1 text-sm font-semibold text-fg hover:text-link"
              >
                {m.modpacks_view_public()}
                <Icon icon={ArrowUpRight} size={14} />
              </a>
              <Button
                variant="outline"
                size="sm"
                loading={busy}
                icon={<Icon icon={Undo2} size={14} />}
                onClick={() => void decide(false)}
              >
                {m.modpacks_review_unapprove()}
              </Button>
            </>
          )}
        </span>
      </div>
      {open ? <PendingDetail id={pack.id} /> : null}
    </li>
  );
}

export function ModpackReviewScreen() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<Tab>('pending');
  const pending = useQuery(reviewQuery(1));
  const published = useQuery({
    queryKey: ['modpacks', 'published'],
    queryFn: ({ signal }) => api.kits.list({ query: { sort: 'new', page: 1, pageSize: 48 } }, { signal }),
    enabled: tab === 'published',
  });
  const refresh = () => void queryClient.invalidateQueries({ queryKey: modpackKeys.all });
  const list = tab === 'pending' ? pending : published;
  const items = list.data?.items ?? [];

  return (
    <div className="grid gap-6">
      <header className="grid gap-1">
        <h1 className="text-2xl font-bold text-fg">{m.modpacks_review_title()}</h1>
        <p className="max-w-prose text-sm text-fg-muted">{m.modpacks_review_description()}</p>
      </header>
      <div role="tablist" aria-label={m.modpacks_review_title()} className="flex gap-1 border-b border-border">
        {(['pending', 'published'] as const).map((value) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={tab === value}
            onClick={() => setTab(value)}
            className="-mb-px border-b-2 border-transparent px-3 py-2 text-sm font-medium text-fg-muted hover:text-fg aria-selected:border-primary aria-selected:text-fg"
          >
            {value === 'pending'
              ? m.modpacks_review_tab_pending({ count: pending.data?.total ?? 0 })
              : m.modpacks_review_tab_published()}
          </button>
        ))}
      </div>
      <Panel title={tab === 'pending' ? m.modpacks_review_pending_title() : m.modpacks_review_published_title()}>
        {list.isPending ? <p className="text-sm text-fg-muted">{m.modpacks_review_loading()}</p> : null}
        {list.isError ? <p className="text-sm text-danger">{m.modpacks_review_load_failed()}</p> : null}
        {list.isSuccess && items.length === 0 ? (
          <p className="text-sm text-fg-muted">
            {tab === 'pending' ? m.modpacks_review_empty() : m.modpacks_review_published_empty()}
          </p>
        ) : null}
        <ul className="grid gap-3">
          {items.map((pack) => (
            <Row key={pack.id} pack={pack} tab={tab} onDone={refresh} />
          ))}
        </ul>
      </Panel>
    </div>
  );
}
