/**
 * `/me/kits/$kitId` — the kit editor (WP-71, PLAN §7.8 «Crear y editar … Estética Blueprint»,
 * research/03 §6.5): header with the revision and the save state, the items (autosaved, with the
 * automatic dependencies and the conflict warning), the details (name, slug, description,
 * visibility, cover), sharing and the danger zone (fork a copy, delete).
 */
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Banner } from '@sotf/ui/banner';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog } from '@sotf/ui/dialog';
import { Icon } from '@sotf/ui/icons';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { ArrowLeft, ExternalLink, GitFork, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { track } from '../../../scripts/beacon.ts';
import { DomainI18nBridge } from '../../components/DomainI18nBridge.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import { type KitCardDTO, kitKeys, kitsApi, ownKitQuery, storeKit } from './api.ts';
import { DetailsForm } from './DetailsForm.tsx';
import { ItemsEditor, type SaveState } from './ItemsEditor.tsx';
import { SharePanel } from './SharePanel.tsx';
import { failureDetail, shortDate, VisibilityBadge } from './shared.tsx';

export interface KitEditorScreenProps {
  kitId: number;
  /** Arrived from «Fork» on a kit page. */
  forked: boolean;
}

export function KitEditorScreen({ kitId, forked }: KitEditorScreenProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: kit } = useSuspenseQuery(ownKitQuery(kitId));
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [detailsDirty, setDetailsDirty] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [forking, setForking] = useState(false);
  const [showForked, setShowForked] = useState(forked);
  useDocumentTitle(m.kits_editor_title({ name: kit.name }));

  const onSaveStateChange = useCallback((state: SaveState) => setSaveState(state), []);
  const onDirtyChange = useCallback((dirty: boolean) => setDetailsDirty(dirty), []);

  // Unsaved details (the items save themselves): ask before the tab closes.
  useEffect(() => {
    if (!detailsDirty) return;
    const onBeforeUnload = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [detailsDirty]);

  const remove = async () => {
    try {
      await kitsApi.remove(kit.id);
      queryClient.setQueryData<KitCardDTO[]>(kitKeys.mine, (list) => list?.filter((entry) => entry.id !== kit.id));
      queryClient.removeQueries({ queryKey: kitKeys.own(kit.id) });
      notify.success(m.kits_deleted({ name: kit.name }));
      await navigate({ to: '/me/kits', search: {} });
    } catch (failure) {
      notify.error(m.kits_delete_failed(), { description: failureDetail(failure) });
      throw failure;
    }
  };

  const duplicate = async () => {
    if (forking) return;
    setForking(true);
    try {
      const copy = await kitsApi.fork(kit.id, 'private');
      storeKit(queryClient, copy);
      track('kit_create', { entityType: 'kit', entityId: copy.id, props: { source: 'duplicate' } });
      notify.success(m.kits_duplicated({ name: copy.name }));
      await navigate({ to: '/me/kits/$kitId', params: { kitId: String(copy.id) }, search: {} });
    } catch (failure) {
      notify.error(m.kits_fork_failed(), { description: failureDetail(failure) });
    } finally {
      setForking(false);
    }
  };

  const publicHref = localizePath(kit.canonicalPath, activeLocale());

  return (
    <DomainI18nBridge>
      <div data-surface="blueprint" className="grid gap-6">
        <header className="texture-blueprint grid gap-3 rounded-xl border border-blueprint/40 p-4 md:p-5">
          <Link
            to="/me/kits"
            search={{}}
            className="inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-fg md:min-h-8"
          >
            <Icon icon={ArrowLeft} size={16} className="rtl:rotate-180" />
            {m.kits_back_to_list()}
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <p className="readout text-blueprint">{m.kits_editor_readout()}</p>
            <VisibilityBadge visibility={kit.visibility} />
            <span className="font-mono text-xs text-fg-muted">{kit.code}</span>
          </div>
          <h1 className="font-display-caps text-display-xs break-words text-fg">{kit.name}</h1>
          <p className="text-sm text-fg-muted">
            {m.kits_revision({ revision: kit.revision })} · {m.kits_updated_on({ date: shortDate(kit.updatedAt) })}
            {saveState === 'saving' ? ` · ${m.kits_saving()}` : null}
          </p>
          {kit.visibility !== 'private' ? (
            <a
              href={publicHref}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-semibold text-link hover:underline md:min-h-8"
            >
              <Icon icon={ExternalLink} size={16} />
              {m.kits_view_public()}
              <span className="sr-only">{m.common_new_tab()}</span>
            </a>
          ) : null}
        </header>

        {showForked ? (
          <Banner tone="signal" title={m.kits_forked_banner_title()} dismissible onDismiss={() => setShowForked(false)}>
            {m.kits_forked_banner_text()}
          </Banner>
        ) : null}

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="grid min-w-0 content-start gap-6">
            <ItemsEditor key={kit.id} kit={kit} onSaveStateChange={onSaveStateChange} />
          </div>
          <div className="grid min-w-0 content-start gap-6">
            <DetailsForm key={kit.id} kit={kit} onDirtyChange={onDirtyChange} />
            <SharePanel kit={kit} />
            <section
              aria-labelledby="kit-manage-title"
              className="grid gap-3 rounded-xl border border-border bg-surface p-4 md:p-5"
            >
              <h2 id="kit-manage-title" className="text-lg font-semibold text-fg">
                {m.kits_manage_title()}
              </h2>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="secondary"
                  icon={<Icon icon={GitFork} size={16} />}
                  loading={forking}
                  onClick={() => void duplicate()}
                >
                  {m.kits_duplicate()}
                </Button>
                <Button variant="danger" icon={<Icon icon={Trash2} size={16} />} onClick={() => setDeleteOpen(true)}>
                  {m.kits_delete()}
                </Button>
              </div>
              <p className="text-xs text-fg-muted">{m.kits_delete_hint()}</p>
            </section>
          </div>
        </div>

        <ConfirmDialog
          open={deleteOpen}
          onOpenChange={setDeleteOpen}
          title={m.kits_delete_title({ name: kit.name })}
          description={m.kits_delete_text()}
          confirmLabel={m.kits_delete_confirm()}
          tone="danger"
          requireText={kit.name}
          onConfirm={remove}
        />
      </div>
    </DomainI18nBridge>
  );
}
