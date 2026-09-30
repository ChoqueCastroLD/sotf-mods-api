/**
 * «Add to a kit» (the «+ Kit» button of a mod page → `/me/kits?add=<modId>`): the mod, then my
 * kits with one «Add» each (or «Already in this kit»), and «New kit with this mod». Adding is a
 * `PUT /kits/:id/items` with the kit's explicit items plus the mod at the end; the toast offers to
 * undo (puts the previous list back) or to open the editor.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Skeleton } from '@sotf/ui/skeleton';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Check, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { notify } from '../../lib/notify.ts';
import { explicitItemsOf, type KitCardDTO, kitsApi, modQuery, ownKitQuery, storeKit } from './api.ts';
import { KIT_LIMITS } from './limits.ts';
import { failureDetail, MiniKnolling, VisibilityBadge } from './shared.tsx';

export interface AddToKitProps {
  modId: number;
  kits: KitCardDTO[];
  onCreate: (mod: { id: number; name: string }) => void;
  onDismiss: () => void;
}

export function AddToKit({ modId, kits, onCreate, onDismiss }: AddToKitProps) {
  const queryClient = useQueryClient();
  const mod = useQuery(modQuery(modId));
  const [busyKit, setBusyKit] = useState<number | null>(null);
  const [added, setAdded] = useState<ReadonlySet<number>>(new Set());

  const add = async (card: KitCardDTO) => {
    if (busyKit !== null || !mod.data) return;
    const name = mod.data.name;
    setBusyKit(card.id);
    try {
      const kit = await queryClient.fetchQuery(ownKitQuery(card.id));
      const previous = explicitItemsOf(kit);
      if (kit.items.some((item) => item.mod.id === modId)) {
        setAdded((set) => new Set(set).add(card.id));
        notify.info(m.kits_add_already({ name, kit: kit.name }));
        return;
      }
      if (previous.length + 1 > KIT_LIMITS.maxItems) {
        notify.error(m.kits_items_limit({ max: KIT_LIMITS.maxItems }));
        return;
      }
      const next = await kitsApi.putItems(card.id, [...previous, { modId }]);
      storeKit(queryClient, next);
      setAdded((set) => new Set(set).add(card.id));
      notify.success(m.kits_add_done({ name, kit: next.name }), {
        action: {
          label: m.common_action_undo(),
          onClick: () => {
            void kitsApi
              .putItems(card.id, previous)
              .then((restored) => {
                storeKit(queryClient, restored);
                setAdded((set) => {
                  const copy = new Set(set);
                  copy.delete(card.id);
                  return copy;
                });
              })
              .catch((failure: unknown) => notify.error(m.kits_undo_failed(), { description: failureDetail(failure) }));
          },
        },
      });
    } catch (failure) {
      notify.error(m.kits_add_failed({ name }), { description: failureDetail(failure) });
    } finally {
      setBusyKit(null);
    }
  };

  return (
    <section
      aria-labelledby="add-to-kit-title"
      data-surface="blueprint"
      className="grid gap-4 rounded-xl border border-blueprint/40 bg-blueprint-surface p-4 md:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="grid min-w-0 gap-1">
          <h2 id="add-to-kit-title" className="text-lg font-semibold text-fg">
            {mod.data ? m.kits_add_title({ name: mod.data.name }) : m.kits_add_title_loading()}
          </h2>
          <p className="text-sm text-fg-muted">{m.kits_add_description()}</p>
        </div>
        <Button variant="icon" size="sm" aria-label={m.kits_add_dismiss()} onClick={onDismiss}>
          <Icon icon={X} size={18} />
        </Button>
      </div>

      {mod.isPending ? (
        <Skeleton className="h-16 w-full rounded-lg" />
      ) : mod.isError ? (
        <p role="alert" className="text-sm text-danger">
          {m.kits_add_mod_missing()}
        </p>
      ) : (
        <>
          {kits.length > 0 ? (
            <ul className="grid gap-2">
              {kits.map((card) => {
                const done = added.has(card.id);
                return (
                  <li
                    key={card.id}
                    className="flex items-center gap-3 rounded-lg border border-border bg-surface p-2 pe-3"
                  >
                    <MiniKnolling kit={card} className="h-12 w-18 shrink-0" />
                    <div className="grid min-w-0 flex-1 gap-0.5">
                      <span className="truncate font-medium text-fg">{card.name}</span>
                      <span className="flex items-center gap-2 text-xs text-fg-muted">
                        {m.kits_items_count({ count: card.itemsCount })}
                        <VisibilityBadge visibility={card.visibility} />
                      </span>
                    </div>
                    {done ? (
                      <Link
                        to="/me/kits/$kitId"
                        params={{ kitId: String(card.id) }}
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-success md:min-h-9"
                      >
                        <Icon icon={Check} size={16} />
                        {m.kits_add_in_kit()}
                      </Link>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={<Icon icon={Plus} size={16} />}
                        loading={busyKit === card.id}
                        disabled={busyKit !== null && busyKit !== card.id}
                        onClick={() => void add(card)}
                        aria-label={m.kits_add_to_named({ kit: card.name })}
                      >
                        {m.kits_add_button()}
                      </Button>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
          <div className="flex flex-wrap gap-2">
            <Button
              icon={<Icon icon={Plus} size={16} />}
              onClick={() => mod.data && onCreate({ id: mod.data.id, name: mod.data.name })}
            >
              {m.kits_add_new_kit()}
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
