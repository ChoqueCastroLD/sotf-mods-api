/**
 * «Media» tab of the mod editor (PLAN §7.5): the cover (a new one is cropped 16:9 in the browser)
 * and the gallery of up to 10 images — reorder (drag, or the move buttons for keyboards and touch),
 * alt text, delete, add. Images already on the listing are never re-uploaded: the save sends their
 * media ids in the new order (`PUT /studio/mods/:id/media`).
 *
 * Legacy images that were not adopted as processed media yet have no id the API can reference;
 * they stay where they are (shown as «locked») until the media backfill processes them.
 */
import { isApiError } from '@sotf/contracts/client';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { useQueryClient } from '@tanstack/react-query';
import { ArrowDown, ArrowUp, GripVertical, Lock, Trash2 } from 'lucide-react';
import { type DragEvent, useEffect, useMemo, useRef, useState } from 'react';
import { notify } from '../../../lib/notify.ts';
import { CoverCropper, type CoverValue } from '../../upload/components/CoverCropper.tsx';
import { Dropzone, ProgressBar } from '../../upload/components/Dropzone.tsx';
import { failureLabel } from '../../upload/labels.ts';
import { imageProblem, uploadImage } from '../../upload/lib/image-upload.ts';
import { UploadError, waitForUpload } from '../../upload/lib/uploader.ts';
import { FieldGroup } from '../../upload/steps/StepHeader.tsx';
import { basecampApi, LIMITS, mediaIdOf, type StudioMod, storeStudioMod } from '../api.ts';
import { number, percent } from '../format.ts';
import { bt } from '../i18n.ts';
import { reportFailure } from '../shared.tsx';
import { SaveBar } from './ListingTab.tsx';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/avif,image/gif';
const UPLOAD_CONCURRENCY = 2;
/** Attempts of the save while freshly uploaded images are still being processed. */
const PROCESSING_RETRIES = 6;
const PROCESSING_DELAY_MS = 3_000;

interface GalleryItem {
  key: string;
  mediaId: string | null;
  url: string | null;
  alt: string;
  /** Legacy image without a media id (cannot be moved or removed yet). */
  locked: boolean;
  status: 'ready' | 'queued' | 'uploading' | 'processing' | 'error';
  loaded: number;
  total: number;
  error: string | null;
  file: File | null;
}

let counter = 0;
const nextKey = () => `m${Date.now().toString(36)}${(counter++).toString(36)}`;

function galleryOf(studio: StudioMod): GalleryItem[] {
  return studio.mod.gallery.map((image) => {
    const mediaId = mediaIdOf(image.url);
    return {
      key: mediaId ?? image.url,
      mediaId,
      url: image.url,
      alt: image.alt ?? '',
      locked: mediaId === null,
      status: 'ready',
      loaded: 0,
      total: 0,
      error: null,
      file: null,
    };
  });
}

function signatureOf(coverId: string | null, cover: CoverValue | undefined, items: readonly GalleryItem[]): string {
  return JSON.stringify({
    cover: cover ? (cover.uploadId ?? cover.mediaId ?? '') : coverId,
    gallery: items.map((item) => [item.mediaId ?? item.key, item.alt.trim()]),
  });
}

const sleep = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

/** Media id of a finished image upload (waits for its processing to assign one). */
async function mediaIdOfUpload(uploadId: string, signal: AbortSignal): Promise<string> {
  const upload = await waitForUpload(uploadId, signal, undefined, 2 * 60_000);
  if (upload.mediaId) return upload.mediaId;
  if (upload.status === 'rejected' || upload.status === 'expired') throw new UploadError('rejected', upload.status);
  throw new UploadError('api', 'image not processed yet');
}

function isProcessing(error: unknown): boolean {
  if (!isApiError(error) || error.status !== 422) return false;
  const problem = error.problem as { errors?: Array<{ code?: string }> };
  return Array.isArray(problem.errors) && problem.errors.some((entry) => entry.code === 'media_processing');
}

/** `PUT /media`, retried while freshly uploaded images are still being processed. */
async function putWithRetry(run: () => Promise<StudioMod>, onWait: () => void): Promise<StudioMod> {
  for (let attempt = 1; ; attempt += 1) {
    try {
      return await run();
    } catch (error) {
      if (!isProcessing(error) || attempt >= PROCESSING_RETRIES) throw error;
      onWait();
      await sleep(PROCESSING_DELAY_MS);
    }
  }
}

export function MediaTab({ studio, onDirty }: { studio: StudioMod; onDirty: (dirty: boolean) => void }) {
  const queryClient = useQueryClient();
  const currentCoverId = mediaIdOf(studio.mod.thumbnail?.url);
  const serverGallery = useMemo(() => galleryOf(studio), [studio]);
  const [items, setItems] = useState<GalleryItem[]>(serverGallery);
  const [cover, setCover] = useState<CoverValue | undefined>(undefined);
  const [coverRemoved, setCoverRemoved] = useState(false);
  const [baseline, setBaseline] = useState(() => signatureOf(currentCoverId, undefined, serverGallery));
  const [saving, setSaving] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [rejected, setRejected] = useState<string | null>(null);
  const [dragKey, setDragKey] = useState<string | null>(null);
  const controllers = useRef(new Map<string, AbortController>());
  const itemsRef = useRef(items);
  itemsRef.current = items;

  const coverId = coverRemoved ? null : currentCoverId;
  const signature = signatureOf(coverId, cover, items);
  const dirty = signature !== baseline;
  useEffect(() => onDirty(dirty), [dirty, onDirty]);

  // Server refresh while clean: adopt it.
  useEffect(() => {
    if (dirty) return;
    setItems(serverGallery);
    setBaseline(signatureOf(currentCoverId, undefined, serverGallery));
  }, [serverGallery, currentCoverId]);

  useEffect(
    () => () => {
      for (const controller of controllers.current.values()) controller.abort();
    },
    [],
  );

  const patchItem = (key: string, patch: Partial<GalleryItem>) =>
    setItems((current) => current.map((item) => (item.key === key ? { ...item, ...patch } : item)));

  // Upload queue: two images at a time.
  useEffect(() => {
    const running = items.filter((item) => item.status === 'uploading' || item.status === 'processing').length;
    const queued = items.filter((item) => item.status === 'queued' && item.file);
    for (const item of queued.slice(0, Math.max(0, UPLOAD_CONCURRENCY - running))) {
      const file = item.file as File;
      const controller = new AbortController();
      controllers.current.set(item.key, controller);
      patchItem(item.key, { status: 'uploading', loaded: 0, total: file.size, error: null });
      void (async () => {
        try {
          const { upload, preview } = await uploadImage(file, file.name, controller.signal, (loaded, total) =>
            patchItem(item.key, { loaded, total }),
          );
          patchItem(item.key, { status: 'processing', ...(preview ? { url: preview } : {}) });
          const mediaId = upload.mediaId ?? (await mediaIdOfUpload(upload.id, controller.signal));
          patchItem(item.key, { status: 'ready', mediaId, file: null });
          setAnnouncement(bt('basecamp_media_uploaded', { name: file.name }));
        } catch (error) {
          if (controller.signal.aborted) return;
          patchItem(item.key, {
            status: 'error',
            error: error instanceof UploadError ? failureLabel(error.failure) : bt('basecamp_media_upload_failed'),
          });
        } finally {
          controllers.current.delete(item.key);
        }
      })();
    }
  }, [items]);

  const addFiles = (files: File[]) => {
    setRejected(null);
    const room = LIMITS.galleryMax - itemsRef.current.length;
    if (room <= 0) {
      setRejected(bt('basecamp_media_full', { max: LIMITS.galleryMax }));
      return;
    }
    const accepted: GalleryItem[] = [];
    for (const file of files.slice(0, room)) {
      const problem = imageProblem(file);
      if (problem) {
        setRejected(problem === 'type' ? bt('basecamp_media_wrong_type') : bt('basecamp_media_too_large'));
        continue;
      }
      accepted.push({
        key: nextKey(),
        mediaId: null,
        url: null,
        alt: '',
        locked: false,
        status: 'queued',
        loaded: 0,
        total: file.size,
        error: null,
        file,
      });
    }
    if (files.length > room) setRejected(bt('basecamp_media_full', { max: LIMITS.galleryMax }));
    if (accepted.length > 0) setItems((current) => [...current, ...accepted]);
  };

  const move = (key: string, delta: -1 | 1) => {
    setItems((current) => {
      const index = current.findIndex((item) => item.key === key);
      const target = index + delta;
      if (index < 0 || target < 0 || target >= current.length) return current;
      const next = [...current];
      const [moved] = next.splice(index, 1);
      if (!moved) return current;
      next.splice(target, 0, moved);
      setAnnouncement(bt('basecamp_media_moved', { position: target + 1, total: next.length }));
      return next;
    });
  };

  const remove = (key: string) => {
    controllers.current.get(key)?.abort();
    setItems((current) => current.filter((item) => item.key !== key));
    setAnnouncement(bt('basecamp_media_removed'));
  };

  const onDrop = (event: DragEvent<HTMLLIElement>, targetKey: string) => {
    event.preventDefault();
    const sourceKey = dragKey;
    setDragKey(null);
    if (!sourceKey || sourceKey === targetKey) return;
    setItems((current) => {
      const from = current.findIndex((item) => item.key === sourceKey);
      const to = current.findIndex((item) => item.key === targetKey);
      if (from < 0 || to < 0) return current;
      const next = [...current];
      const [moved] = next.splice(from, 1);
      if (!moved) return current;
      next.splice(to, 0, moved);
      return next;
    });
  };

  const busy = items.some((item) => item.status !== 'ready' && item.status !== 'error');
  const failed = items.some((item) => item.status === 'error');

  const save = async () => {
    if (!dirty || busy) return;
    setSaving(true);
    const controller = new AbortController();
    try {
      let thumbnailMediaId = coverId;
      if (cover) {
        thumbnailMediaId =
          cover.mediaId ?? (cover.uploadId ? await mediaIdOfUpload(cover.uploadId, controller.signal) : null);
      }
      const gallery = items
        .map((item, position) => ({ item, position }))
        .filter(({ item }) => item.mediaId !== null && !item.locked && item.status === 'ready')
        .map(({ item, position }) => ({
          mediaId: item.mediaId as string,
          alt: item.alt.trim() ? item.alt.trim().slice(0, LIMITS.altMax) : null,
          position,
        }));
      const updated = await putWithRetry(
        () => basecampApi.putMedia(studio.mod.id, thumbnailMediaId, gallery),
        () => setAnnouncement(bt('basecamp_media_processing')),
      );
      storeStudioMod(queryClient, updated);
      const fresh = galleryOf(updated);
      setItems(fresh);
      setCover(undefined);
      setCoverRemoved(false);
      setBaseline(signatureOf(mediaIdOf(updated.mod.thumbnail?.url), undefined, fresh));
      notify.success(bt('basecamp_media_saved'));
    } catch (error) {
      if (error instanceof UploadError)
        notify.error(bt('basecamp_media_save_failed'), { description: failureLabel(error.failure) });
      else reportFailure(error, bt('basecamp_media_save_failed'));
    } finally {
      setSaving(false);
    }
  };

  const existingCover = studio.mod.thumbnail?.url ?? null;

  return (
    <div className="flex flex-col gap-5">
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>

      <FieldGroup
        id="basecamp-media-cover"
        title={bt('basecamp_media_cover')}
        description={bt('basecamp_media_cover_hint')}
      >
        {existingCover && !cover && !coverRemoved ? (
          <div className="grid gap-2 sm:grid-cols-[minmax(0,20rem)_1fr] sm:items-start">
            <img
              src={existingCover}
              alt={bt('basecamp_media_cover_current_alt')}
              className="aspect-video w-full rounded-md border border-border object-cover"
            />
            <div className="grid justify-items-start gap-2 text-sm text-fg-muted">
              <p>{bt('basecamp_media_cover_current')}</p>
              {currentCoverId ? (
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon icon={Trash2} size={16} />}
                  onClick={() => setCoverRemoved(true)}
                >
                  {bt('basecamp_media_cover_remove')}
                </Button>
              ) : (
                <p className="text-xs">{bt('basecamp_media_cover_legacy')}</p>
              )}
            </div>
          </div>
        ) : null}
        {coverRemoved && !cover ? (
          <div className="flex flex-wrap items-center gap-3 text-sm text-fg-muted">
            <p>{bt('basecamp_media_cover_removed')}</p>
            <Button variant="ghost" size="sm" onClick={() => setCoverRemoved(false)}>
              {bt('basecamp_media_undo')}
            </Button>
          </div>
        ) : null}
        <CoverCropper id="basecamp-cover" value={cover} onChange={setCover} />
      </FieldGroup>

      <FieldGroup
        id="basecamp-media-gallery"
        title={bt('basecamp_media_gallery', { count: items.length, max: LIMITS.galleryMax })}
        description={bt('basecamp_media_gallery_hint')}
      >
        {items.length === 0 ? <p className="text-sm text-fg-muted">{bt('basecamp_media_gallery_empty')}</p> : null}
        <ol className="grid gap-3">
          {items.map((item, index) => {
            const draggable = !item.locked && item.status === 'ready';
            return (
              <li
                key={item.key}
                draggable={draggable}
                onDragStart={() => setDragKey(item.key)}
                onDragEnd={() => setDragKey(null)}
                onDragOver={(event) => {
                  if (dragKey) event.preventDefault();
                }}
                onDrop={(event) => onDrop(event, item.key)}
                className={cn(
                  'grid gap-3 rounded-md border border-border bg-surface p-3 sm:grid-cols-[auto_10rem_1fr_auto] sm:items-center',
                  dragKey === item.key && 'opacity-60',
                )}
              >
                <span className="hidden text-fg-subtle sm:inline-flex" aria-hidden="true">
                  {item.locked ? <Icon icon={Lock} size={16} /> : <Icon icon={GripVertical} size={16} />}
                </span>
                <span className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-sunken sm:w-40">
                  {item.url ? (
                    <img src={item.url} alt="" className="absolute inset-0 size-full object-cover" loading="lazy" />
                  ) : null}
                </span>
                <div className="grid min-w-0 gap-2">
                  {item.status === 'uploading' || item.status === 'queued' ? (
                    <ProgressBar
                      value={item.loaded}
                      max={Math.max(1, item.total)}
                      label={bt('basecamp_media_uploading', { name: item.file?.name ?? '' })}
                      valueText={percent(item.total > 0 ? item.loaded / item.total : 0)}
                    />
                  ) : item.status === 'processing' ? (
                    <p className="text-sm text-fg-muted">{bt('basecamp_media_processing')}</p>
                  ) : item.status === 'error' ? (
                    <p className="text-sm text-danger" role="alert">
                      {item.error}
                    </p>
                  ) : null}
                  <div className="grid gap-1 text-sm">
                    <label htmlFor={`bc-alt-${item.key}`} className="font-medium text-fg">
                      {bt('basecamp_media_alt', { n: index + 1 })}
                    </label>
                    <Input
                      id={`bc-alt-${item.key}`}
                      value={item.alt}
                      maxLength={LIMITS.altMax}
                      disabled={item.locked}
                      placeholder={bt('basecamp_media_alt_placeholder')}
                      onChange={(event) => patchItem(item.key, { alt: event.currentTarget.value })}
                    />
                  </div>
                  {item.locked ? (
                    <Badge variant="neutral" size="sm" icon={<Icon icon={Lock} size={12} />}>
                      {bt('basecamp_media_locked')}
                    </Badge>
                  ) : null}
                </div>
                <div className="flex items-center gap-1 sm:flex-col">
                  <Button
                    variant="icon"
                    size="sm"
                    aria-label={bt('basecamp_media_move_up', { n: index + 1 })}
                    disabled={item.locked || index === 0}
                    onClick={() => move(item.key, -1)}
                  >
                    <Icon icon={ArrowUp} size={16} />
                  </Button>
                  <Button
                    variant="icon"
                    size="sm"
                    aria-label={bt('basecamp_media_move_down', { n: index + 1 })}
                    disabled={item.locked || index === items.length - 1}
                    onClick={() => move(item.key, 1)}
                  >
                    <Icon icon={ArrowDown} size={16} />
                  </Button>
                  <Button
                    variant="icon"
                    size="sm"
                    aria-label={bt('basecamp_media_remove', { n: index + 1 })}
                    disabled={item.locked}
                    onClick={() => remove(item.key)}
                  >
                    <Icon icon={Trash2} size={16} />
                  </Button>
                </div>
              </li>
            );
          })}
        </ol>
        {items.length < LIMITS.galleryMax ? (
          <Dropzone
            accept={ACCEPT}
            multiple
            compact
            title={bt('basecamp_media_add')}
            hint={bt('basecamp_media_add_hint', { left: number(LIMITS.galleryMax - items.length) })}
            buttonLabel={bt('basecamp_media_choose')}
            onFiles={addFiles}
          />
        ) : null}
        {rejected ? (
          <p className="text-sm text-danger" role="alert">
            {rejected}
          </p>
        ) : null}
        {failed ? <p className="text-sm text-fg-muted">{bt('basecamp_media_failed_hint')}</p> : null}
      </FieldGroup>

      <SaveBar
        dirty={dirty}
        saving={saving || busy}
        invalid={false}
        onSave={() => void save()}
        onReset={() => {
          for (const controller of controllers.current.values()) controller.abort();
          setItems(serverGallery);
          setCover(undefined);
          setCoverRemoved(false);
        }}
      />
    </div>
  );
}
