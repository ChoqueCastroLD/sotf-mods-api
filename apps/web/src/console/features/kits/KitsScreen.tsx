/**
 * `/me/kits` — my kits (WP-71, PLAN §4.3 «Me», §7.8): every kit I own with its visibility, items,
 * revision and last change; open the editor, view the public page, copy the share code or delete
 * (confirmed; soft delete on the server). «New kit» opens the create dialog (`?new=1` opens it on
 * arrival: the «Create a kit» link of `/kits`); `?add=<modId>` shows «Add to a kit» (the «+ Kit»
 * button of a mod page).
 */
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { EmptyState } from '@sotf/ui/empty-state';
import { Icon } from '@sotf/ui/icons';
import { Menu } from '@sotf/ui/menu';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { Copy, ExternalLink, Layers, MoreHorizontal, Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { AddToKit } from './AddToKit.tsx';
import { type KitCardDTO, kitKeys, kitsApi, myKitsQuery } from './api.ts';
import { CreateKitDialog } from './CreateKitDialog.tsx';
import { copyToClipboard } from './clipboard.ts';
import { failureDetail, MiniKnolling, shortDate, VisibilityBadge } from './shared.tsx';

export interface KitsScreenProps {
  openCreate: boolean;
  addModId: number | null;
}

export function KitsScreen({ openCreate, addModId }: KitsScreenProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: kits } = useSuspenseQuery(myKitsQuery);
  const [createOpen, setCreateOpen] = useState(openCreate);
  const [firstMod, setFirstMod] = useState<{ id: number; name: string } | null>(null);
  const [deleting, setDeleting] = useState<KitCardDTO | null>(null);
  useDocumentTitle(m.kits_console_title());

  const clearSearch = () => void navigate({ to: '/me/kits', search: {}, replace: true });

  const remove = async (kit: KitCardDTO) => {
    try {
      await kitsApi.remove(kit.id);
      queryClient.setQueryData<KitCardDTO[]>(kitKeys.mine, (list) => list?.filter((entry) => entry.id !== kit.id));
      queryClient.removeQueries({ queryKey: kitKeys.own(kit.id) });
      notify.success(m.kits_deleted({ name: kit.name }));
    } catch (failure) {
      notify.error(m.kits_delete_failed(), { description: failureDetail(failure) });
      throw failure;
    }
  };

  const copyCode = (kit: KitCardDTO) => {
    void copyToClipboard(kit.code).then((ok) =>
      ok ? notify.success(m.kits_code_copied({ code: kit.code })) : notify.error(m.kits_copy_failed()),
    );
  };

  return (
    <div className="grid gap-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="grid gap-1">
          <p className="readout text-signal">{m.kits_console_readout()}</p>
          <h1 className="font-display-caps text-display-xs text-fg">{m.kits_console_title()}</h1>
          <p className="max-w-prose text-sm text-fg-muted">{m.kits_console_description()}</p>
        </div>
        <Button
          icon={<Icon icon={Plus} size={18} />}
          onClick={() => {
            setFirstMod(null);
            setCreateOpen(true);
          }}
        >
          {m.kits_action_create()}
        </Button>
      </header>

      {addModId !== null ? (
        <AddToKit
          modId={addModId}
          kits={kits}
          onDismiss={clearSearch}
          onCreate={(mod) => {
            setFirstMod(mod);
            setCreateOpen(true);
          }}
        />
      ) : null}

      {kits.length === 0 ? (
        addModId === null ? (
          <EmptyState
            icon={<Icon icon={Layers} size={32} />}
            title={m.kits_console_empty_title()}
            description={m.kits_console_empty_text()}
            action={
              <Button icon={<Icon icon={Plus} size={18} />} onClick={() => setCreateOpen(true)}>
                {m.kits_action_create()}
              </Button>
            }
          />
        ) : null
      ) : (
        <section aria-labelledby="my-kits-title" className="grid gap-3">
          <h2 id="my-kits-title" className="sr-only">
            {m.kits_console_list_label()}
          </h2>
          <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {kits.map((kit) => (
              <li
                key={kit.id}
                className="relative flex gap-3 rounded-lg border border-border bg-surface p-3 transition-colors hover:border-border-strong"
              >
                <MiniKnolling kit={kit} className="h-20 w-28 shrink-0" />
                <div className="grid min-w-0 flex-1 content-start gap-1">
                  <Link
                    to="/me/kits/$kitId"
                    params={{ kitId: String(kit.id) }}
                    className="truncate font-semibold text-fg after:absolute after:inset-0 after:content-[''] hover:text-link"
                  >
                    {kit.name}
                  </Link>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-fg-muted">
                    <VisibilityBadge visibility={kit.visibility} />
                    <span>{m.kits_items_count({ count: kit.itemsCount })}</span>
                  </div>
                  <p className="text-xs text-fg-muted">
                    {m.kits_revision({ revision: kit.revision })} · {shortDate(kit.updatedAt)}
                  </p>
                  <p className="font-mono text-2xs text-fg-subtle">{kit.code}</p>
                </div>
                <div className="relative z-10 self-start">
                  <Menu
                    align="end"
                    trigger={
                      <Button variant="icon" size="sm" aria-label={m.kits_actions_for({ name: kit.name })}>
                        <Icon icon={MoreHorizontal} size={18} />
                      </Button>
                    }
                    items={[
                      {
                        type: 'item',
                        label: m.kits_edit(),
                        icon: <Icon icon={Pencil} size={16} />,
                        onSelect: () => void navigate({ to: '/me/kits/$kitId', params: { kitId: String(kit.id) } }),
                      },
                      ...(kit.visibility !== 'private'
                        ? [
                            {
                              type: 'link' as const,
                              label: m.kits_view_public(),
                              icon: <Icon icon={ExternalLink} size={16} />,
                              href: localizePath(kit.canonicalPath, activeLocale()),
                            },
                          ]
                        : []),
                      {
                        type: 'item',
                        label: m.kits_copy_code(),
                        icon: <Icon icon={Copy} size={16} />,
                        onSelect: () => copyCode(kit),
                      },
                      { type: 'separator' },
                      {
                        type: 'item',
                        label: m.common_action_delete(),
                        icon: <Icon icon={Trash2} size={16} />,
                        danger: true,
                        onSelect: () => setDeleting(kit),
                      },
                    ]}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <CreateKitDialog
        open={createOpen}
        firstMod={firstMod}
        onOpenChange={(open) => {
          setCreateOpen(open);
          if (!open && openCreate) clearSearch();
        }}
      />
      <ConfirmDialog
        open={deleting !== null}
        onOpenChange={(open) => {
          if (!open) setDeleting(null);
        }}
        title={m.kits_delete_title({ name: deleting?.name ?? '' })}
        description={m.kits_delete_text()}
        confirmLabel={m.kits_delete_confirm()}
        tone="danger"
        onConfirm={() => (deleting ? remove(deleting) : undefined)}
      />
    </div>
  );
}
