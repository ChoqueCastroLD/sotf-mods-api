/**
 * Gallery of up to 10 images (PLAN §7.5 step 4): several files at once, drag to reorder (or the
 * «move» buttons, for keyboards and touch), alt text per image and delete one by one. Images upload
 * in the background (two at a time) straight to R2; only uploaded ones reach the draft.
 */
import { STUDIO_LIMITS } from '@sotf/contracts/studio';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { ArrowLeft, ArrowRight, GripVertical, RotateCw, Trash2 } from 'lucide-react';
import { type DragEvent, useEffect, useRef, useState } from 'react';
import { ut } from '../i18n.ts';
import { failureLabel } from '../labels.ts';
import { bytes, number, percent } from '../lib/format.ts';
import { imageProblem, uploadImage } from '../lib/image-upload.ts';
import { loadPreview } from '../lib/preview-cache.ts';
import { UploadError } from '../lib/uploader.ts';
import type { GalleryRef } from '../types.ts';
import { Dropzone, ProgressBar } from './Dropzone.tsx';

interface Item {
  key: string;
  uploadId?: string | undefined;
  mediaId?: string | undefined;
  alt: string;
  preview: string | null;
  status: 'queued' | 'uploading' | 'ready' | 'error';
  loaded: number;
  total: number;
  error: string | null;
  file: File | null;
}

export interface GalleryEditorProps {
  id: string;
  value: readonly GalleryRef[];
  onChange: (value: GalleryRef[]) => void;
}

const CONCURRENCY = 2;
const ACCEPT = 'image/png,image/jpeg,image/webp,image/avif,image/gif';

let counter = 0;
const nextKey = () => `g${Date.now().toString(36)}${(counter++).toString(36)}`;

function toRefs(items: readonly Item[]): GalleryRef[] {
  return items
    .filter((item) => item.status === 'ready' && (item.uploadId || item.mediaId))
    .map((item) => ({
      ...(item.uploadId ? { uploadId: item.uploadId } : {}),
      ...(item.mediaId ? { mediaId: item.mediaId } : {}),
      ...(item.alt.trim() ? { alt: item.alt.trim() } : {}),
    }));
}

export function GalleryEditor({ id, value, onChange }: GalleryEditorProps) {
  const [items, setItems] = useState<Item[]>(() =>
    value.map((ref) => ({
      key: nextKey(),
      uploadId: ref.uploadId,
      mediaId: ref.mediaId,
      alt: ref.alt ?? '',
      preview: null,
      status: 'ready',
      loaded: 0,
      total: 0,
      error: null,
      file: null,
    })),
  );
  const itemsRef = useRef(items);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const controllers = useRef(new Map<string, AbortController>());
  const [announcement, setAnnouncement] = useState('');
  const [dragKey, setDragKey] = useState<string | null>(null);
  const [rejected, setRejected] = useState<string | null>(null);

  const commit = (update: (items: Item[]) => Item[], notify = true) => {
    const next = update(itemsRef.current);
    itemsRef.current = next;
    setItems(next);
    if (notify) onChangeRef.current(toRefs(next));
  };
  const patchItem = (key: string, patch: Partial<Item>, notify = false) =>
    commit((list) => list.map((item) => (item.key === key ? { ...item, ...patch } : item)), notify);

  // Previews of images uploaded earlier (resumed draft).
  useEffect(() => {
    for (const item of itemsRef.current) {
      const cacheKey = item.uploadId ?? item.mediaId;
      if (item.preview || !cacheKey) continue;
      void loadPreview(cacheKey).then((url) => {
        if (url) patchItem(item.key, { preview: url });
      });
    }
    return () => {
      for (const controller of controllers.current.values()) controller.abort();
    };
    // Mount only: later items carry their own preview.
  }, []);

  const pump = () => {
    const running = itemsRef.current.filter((item) => item.status === 'uploading').length;
    const queued = itemsRef.current
      .filter((item) => item.status === 'queued')
      .slice(0, Math.max(0, CONCURRENCY - running));
    for (const item of queued) void start(item.key);
  };

  const start = async (key: string) => {
    const item = itemsRef.current.find((i) => i.key === key);
    if (!item?.file) return;
    const controller = new AbortController();
    controllers.current.set(key, controller);
    patchItem(key, { status: 'uploading', loaded: 0, total: item.file.size, error: null });
    try {
      const { upload, preview } = await uploadImage(item.file, item.file.name, controller.signal, (loaded, total) =>
        patchItem(key, { loaded, total }),
      );
      const current = itemsRef.current.find((i) => i.key === key);
      if (current?.preview?.startsWith('blob:')) URL.revokeObjectURL(current.preview);
      patchItem(key, { status: 'ready', uploadId: upload.id, preview: preview ?? null, file: null }, true);
    } catch (error) {
      if (controller.signal.aborted) return;
      patchItem(key, {
        status: 'error',
        error: error instanceof UploadError ? failureLabel(error.failure) : ut('upload_failure_network'),
      });
    } finally {
      controllers.current.delete(key);
      pump();
    }
  };

  const addFiles = (files: File[]) => {
    setRejected(null);
    const room = STUDIO_LIMITS.galleryMax - itemsRef.current.length;
    const accepted: Item[] = [];
    let skipped = 0;
    for (const file of files) {
      if (accepted.length >= room) {
        skipped += 1;
        continue;
      }
      const problem = imageProblem(file);
      if (problem) {
        skipped += 1;
        continue;
      }
      accepted.push({
        key: nextKey(),
        alt: '',
        preview: URL.createObjectURL(file),
        status: 'queued',
        loaded: 0,
        total: file.size,
        error: null,
        file,
      });
    }
    if (skipped > 0) setRejected(ut('upload_gallery_skipped', { count: skipped }));
    if (accepted.length === 0) return;
    commit((list) => [...list, ...accepted], false);
    setAnnouncement(ut('upload_gallery_added', { count: accepted.length }));
    pump();
  };

  const remove = (key: string) => {
    controllers.current.get(key)?.abort();
    const item = itemsRef.current.find((i) => i.key === key);
    if (item?.preview?.startsWith('blob:')) URL.revokeObjectURL(item.preview);
    commit((list) => list.filter((i) => i.key !== key));
    setAnnouncement(ut('upload_gallery_removed'));
    pump();
  };

  const move = (key: string, to: number) => {
    const from = itemsRef.current.findIndex((i) => i.key === key);
    if (from < 0 || to < 0 || to >= itemsRef.current.length || from === to) return;
    commit((list) => {
      const next = [...list];
      const [moved] = next.splice(from, 1);
      if (moved) next.splice(to, 0, moved);
      return next;
    });
    setAnnouncement(ut('upload_gallery_moved', { position: to + 1, total: itemsRef.current.length }));
  };

  const onDragOver = (event: DragEvent<HTMLLIElement>, key: string) => {
    if (!dragKey || dragKey === key) return;
    event.preventDefault();
    const to = itemsRef.current.findIndex((i) => i.key === key);
    move(dragKey, to);
  };

  const full = items.length >= STUDIO_LIMITS.galleryMax;

  return (
    <div id={id} tabIndex={-1} className="flex flex-col gap-3 outline-none">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="readout text-fg-muted">
          {ut('upload_gallery_counter', { count: number(items.length), max: number(STUDIO_LIMITS.galleryMax) })}
        </span>
        {items.length > 1 ? <span className="text-xs text-fg-muted">{ut('upload_gallery_reorder_hint')}</span> : null}
      </div>
      {items.length > 0 ? (
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item.key}
              draggable={item.status === 'ready'}
              onDragStart={(event) => {
                setDragKey(item.key);
                event.dataTransfer.effectAllowed = 'move';
              }}
              onDragEnd={() => setDragKey(null)}
              onDragOver={(event) => onDragOver(event, item.key)}
              onDrop={(event) => event.preventDefault()}
              className={cn(
                'flex flex-col gap-2 rounded-lg border border-border bg-raised p-2',
                dragKey === item.key && 'opacity-60 ring-2 ring-primary',
              )}
            >
              <div className="relative aspect-video overflow-hidden rounded-md bg-sunken">
                {item.preview ? (
                  <img
                    src={item.preview}
                    alt={item.alt || ut('upload_gallery_image', { n: index + 1 })}
                    className="size-full object-cover"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center p-2 text-center text-xs text-fg-muted">
                    {ut('upload_image_no_preview')}
                  </div>
                )}
                <span className="readout absolute start-1.5 top-1.5 rounded-xs bg-black/60 px-1.5 py-0.5 text-white">
                  {index + 1}
                </span>
                {item.status === 'ready' ? (
                  <span
                    aria-hidden="true"
                    className="absolute end-1.5 top-1.5 cursor-grab rounded-xs bg-black/60 p-0.5 text-white"
                  >
                    <Icon icon={GripVertical} size={14} />
                  </span>
                ) : null}
              </div>
              {item.status === 'uploading' || item.status === 'queued' ? (
                <ProgressBar
                  label={ut('upload_gallery_uploading', { n: index + 1 })}
                  value={item.loaded}
                  max={item.total}
                  valueText={
                    item.status === 'queued'
                      ? ut('upload_gallery_queued')
                      : ut('upload_progress_value', {
                          percent: percent(item.total ? item.loaded / item.total : 0),
                          loaded: bytes(item.loaded),
                          total: bytes(item.total),
                        })
                  }
                />
              ) : null}
              {item.status === 'error' ? (
                <div role="alert" className="flex items-center justify-between gap-2 text-xs text-danger">
                  <span>{item.error}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Icon icon={RotateCw} size={12} />}
                    onClick={() => {
                      patchItem(item.key, { status: 'queued', error: null });
                      pump();
                    }}
                  >
                    {ut('upload_retry')}
                  </Button>
                </div>
              ) : null}
              <Input
                size="sm"
                value={item.alt}
                maxLength={STUDIO_LIMITS.altMax}
                placeholder={ut('upload_gallery_alt_placeholder')}
                aria-label={ut('upload_gallery_alt', { n: index + 1 })}
                onChange={(event) => {
                  const alt = event.currentTarget.value;
                  patchItem(item.key, { alt }, true);
                }}
              />
              <div className="flex items-center justify-between gap-1">
                <span className="flex gap-1">
                  <Button
                    variant="icon"
                    size="sm"
                    aria-label={ut('upload_gallery_move_before', { n: index + 1 })}
                    disabled={index === 0}
                    onClick={() => move(item.key, index - 1)}
                  >
                    <Icon icon={ArrowLeft} size={14} className="rtl:rotate-180" />
                  </Button>
                  <Button
                    variant="icon"
                    size="sm"
                    aria-label={ut('upload_gallery_move_after', { n: index + 1 })}
                    disabled={index === items.length - 1}
                    onClick={() => move(item.key, index + 1)}
                  >
                    <Icon icon={ArrowRight} size={14} className="rtl:rotate-180" />
                  </Button>
                </span>
                <Button
                  variant="icon"
                  size="sm"
                  aria-label={ut('upload_gallery_remove', { n: index + 1 })}
                  onClick={() => remove(item.key)}
                >
                  <Icon icon={Trash2} size={14} />
                </Button>
              </div>
            </li>
          ))}
        </ol>
      ) : null}
      {!full ? (
        <Dropzone
          accept={ACCEPT}
          multiple
          compact={items.length > 0}
          title={ut('upload_gallery_drop')}
          hint={ut('upload_gallery_hint', { max: number(STUDIO_LIMITS.galleryMax) })}
          buttonLabel={ut('upload_gallery_choose')}
          onFiles={addFiles}
        />
      ) : (
        <p className="text-xs text-fg-muted">{ut('upload_gallery_full', { max: number(STUDIO_LIMITS.galleryMax) })}</p>
      )}
      {rejected ? (
        <p role="alert" className="text-xs font-medium text-danger">
          {rejected}
        </p>
      ) : null}
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
