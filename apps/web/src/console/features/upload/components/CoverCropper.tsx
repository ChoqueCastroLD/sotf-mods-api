/**
 * Cover image with a client-side 16:9 crop (PLAN §7.5 step 4). The creator picks an image, moves
 * and resizes the frame (pointer drag, or arrow keys and +/− on the focused frame, or the size
 * slider), and only the cropped pixels are uploaded (WebP, ≤ 1920 px wide).
 */
import { Button } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { Icon } from '@sotf/ui/icons';
import { RadarSpinner } from '@sotf/ui/spinner';
import { ImagePlus, Trash2 } from 'lucide-react';
import { type KeyboardEvent, type PointerEvent, useEffect, useRef, useState } from 'react';
import { ut } from '../i18n.ts';
import { failureLabel } from '../labels.ts';
import { bytes, percent } from '../lib/format.ts';
import {
  COVER_ASPECT,
  type CropRect,
  centeredCrop,
  clampCrop,
  cropToBlob,
  decodeImage,
  generatedName,
} from '../lib/image.ts';
import { imageProblem, uploadImage } from '../lib/image-upload.ts';
import { loadPreview } from '../lib/preview-cache.ts';
import { UploadError } from '../lib/uploader.ts';
import { Callout } from './Callout.tsx';
import { Dropzone, ProgressBar } from './Dropzone.tsx';

export interface CoverValue {
  uploadId?: string | undefined;
  mediaId?: string | undefined;
}

export interface CoverCropperProps {
  id: string;
  value: CoverValue | undefined;
  onChange: (value: CoverValue | undefined) => void;
  /** Shown when no cover is chosen (the blueprint thumbnail of a build). */
  fallbackHint?: string;
}

interface Source {
  bitmap: ImageBitmap;
  url: string;
  name: string;
}

function useStoredPreview(value: CoverValue | undefined): string | null {
  const [url, setUrl] = useState<string | null>(null);
  const key = value?.uploadId ?? value?.mediaId ?? null;
  useEffect(() => {
    let alive = true;
    setUrl(null);
    if (!key) return;
    void loadPreview(key).then((found) => {
      if (alive) setUrl(found);
    });
    return () => {
      alive = false;
    };
  }, [key]);
  return url;
}

export function CoverCropper({ id, value, onChange, fallbackHint }: CoverCropperProps) {
  const stored = useStoredPreview(value);
  const [source, setSource] = useState<Source | null>(null);
  const [crop, setCrop] = useState<CropRect | null>(null);
  const [localPreview, setLocalPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'decoding' | 'uploading' | 'error'>('idle');
  const [progress, setProgress] = useState({ loaded: 0, total: 0 });
  const [error, setError] = useState<string | null>(null);
  const abort = useRef<AbortController | null>(null);
  const lastBlob = useRef<Blob | null>(null);

  useEffect(
    () => () => {
      abort.current?.abort();
    },
    [],
  );

  const closeSource = () => {
    if (source) {
      URL.revokeObjectURL(source.url);
      source.bitmap.close();
    }
    setSource(null);
    setCrop(null);
  };

  const pick = async (file: File) => {
    setError(null);
    const problem = imageProblem(file);
    if (problem) {
      setError(problem === 'type' ? ut('upload_image_wrong_type') : ut('upload_image_too_large'));
      return;
    }
    setStatus('decoding');
    try {
      const bitmap = await decodeImage(file);
      setSource({ bitmap, url: URL.createObjectURL(file), name: file.name });
      setCrop(centeredCrop(bitmap.width, bitmap.height));
      setStatus('idle');
    } catch {
      setStatus('idle');
      setError(ut('upload_image_unreadable'));
    }
  };

  const send = async (blob: Blob) => {
    abort.current?.abort();
    const controller = new AbortController();
    abort.current = controller;
    lastBlob.current = blob;
    setStatus('uploading');
    setError(null);
    setProgress({ loaded: 0, total: blob.size });
    try {
      const { upload, preview } = await uploadImage(
        blob,
        generatedName('cover', blob),
        controller.signal,
        (loaded, total) => setProgress({ loaded, total }),
      );
      setLocalPreview(preview);
      onChange({ uploadId: upload.id });
      setStatus('idle');
      lastBlob.current = null;
    } catch (caught) {
      if (controller.signal.aborted) return;
      setStatus('error');
      setError(caught instanceof UploadError ? failureLabel(caught.failure) : ut('upload_failure_network'));
    }
  };

  const confirmCrop = async () => {
    if (!source || !crop) return;
    try {
      const blob = await cropToBlob(source.bitmap, crop);
      closeSource();
      await send(blob);
    } catch {
      setError(ut('upload_image_unreadable'));
    }
  };

  const shown = localPreview ?? stored;
  const hasCover = Boolean(value?.uploadId || value?.mediaId);

  return (
    <div id={id} tabIndex={-1} className="flex flex-col gap-3 outline-none">
      {hasCover ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="aspect-video w-full overflow-hidden rounded-md border border-border bg-sunken sm:w-80">
            {shown ? (
              <img src={shown} alt={ut('upload_cover_preview_alt')} className="size-full object-cover" />
            ) : (
              <div className="flex size-full items-center justify-center p-3 text-center text-xs text-fg-muted">
                {ut('upload_image_no_preview')}
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <Dropzone
              accept="image/png,image/jpeg,image/webp,image/avif,image/gif"
              title={ut('upload_cover_replace')}
              buttonLabel={ut('upload_cover_choose')}
              onFiles={([file]) => {
                if (file) void pick(file);
              }}
              compact
              disabled={status === 'uploading' || status === 'decoding'}
            />
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon icon={Trash2} size={14} />}
              onClick={() => {
                setLocalPreview(null);
                onChange(undefined);
              }}
            >
              {ut('upload_cover_remove')}
            </Button>
          </div>
        </div>
      ) : (
        <Dropzone
          accept="image/png,image/jpeg,image/webp,image/avif,image/gif"
          title={ut('upload_cover_drop')}
          hint={fallbackHint ?? ut('upload_cover_hint')}
          buttonLabel={ut('upload_cover_choose')}
          onFiles={([file]) => {
            if (file) void pick(file);
          }}
          disabled={status === 'uploading' || status === 'decoding'}
        />
      )}

      <div aria-live="polite">
        {status === 'decoding' ? (
          <p className="flex items-center gap-2 text-sm text-fg-muted">
            <RadarSpinner size={16} /> {ut('upload_image_reading')}
          </p>
        ) : null}
        {status === 'uploading' ? (
          <ProgressBar
            label={ut('upload_cover_uploading')}
            value={progress.loaded}
            max={progress.total}
            valueText={ut('upload_progress_value', {
              percent: percent(progress.total ? progress.loaded / progress.total : 0),
              loaded: bytes(progress.loaded),
              total: bytes(progress.total),
            })}
          />
        ) : null}
        {error ? (
          <Callout
            tone="danger"
            title={ut('upload_cover_failed')}
            action={
              status === 'error' && lastBlob.current ? (
                <Button
                  size="sm"
                  onClick={() => {
                    if (lastBlob.current) void send(lastBlob.current);
                  }}
                >
                  {ut('upload_retry')}
                </Button>
              ) : undefined
            }
          >
            {error}
          </Callout>
        ) : null}
      </div>

      <Dialog
        open={source !== null}
        onOpenChange={(open) => {
          if (!open) closeSource();
        }}
        title={ut('upload_crop_title')}
        description={ut('upload_crop_description')}
        size="lg"
        sheetOnMobile={false}
        disablePointerDismissal
        footer={
          <>
            <Button variant="ghost" onClick={closeSource}>
              {ut('upload_cancel')}
            </Button>
            <Button icon={<Icon icon={ImagePlus} size={16} />} onClick={() => void confirmCrop()}>
              {ut('upload_crop_confirm')}
            </Button>
          </>
        }
      >
        {source && crop ? <CropArea source={source} crop={crop} onCrop={setCrop} /> : null}
      </Dialog>
    </div>
  );
}

function CropArea({ source, crop, onCrop }: { source: Source; crop: CropRect; onCrop: (crop: CropRect) => void }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const drag = useRef<{ x: number; y: number; start: CropRect } | null>(null);
  const { width, height } = source.bitmap;
  const maxWidth = Math.min(width, height * COVER_ASPECT);

  useEffect(() => {
    const element = box.current;
    if (!element) return;
    const measure = () => setScale(element.clientWidth / width);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [width]);

  const set = (next: CropRect) => onCrop(clampCrop(next, width, height));

  const resize = (newWidth: number) => {
    const cx = crop.x + crop.width / 2;
    const cy = crop.y + crop.height / 2;
    const w = Math.max(160, Math.min(maxWidth, newWidth));
    const h = w / COVER_ASPECT;
    set({ x: cx - w / 2, y: cy - h / 2, width: w, height: h });
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { x: event.clientX, y: event.clientY, start: crop };
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || scale <= 0) return;
    set({ ...d.start, x: d.start.x + (event.clientX - d.x) / scale, y: d.start.y + (event.clientY - d.y) / scale });
  };
  const onPointerUp = () => {
    drag.current = null;
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = (event.shiftKey ? 50 : 10) / Math.max(scale, 0.01);
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const move = moves[event.key];
    if (move) {
      event.preventDefault();
      set({ ...crop, x: crop.x + move[0], y: crop.y + move[1] });
    } else if (event.key === '+' || event.key === '=') {
      event.preventDefault();
      resize(crop.width * 1.1);
    } else if (event.key === '-' || event.key === '_') {
      event.preventDefault();
      resize(crop.width / 1.1);
    }
  };

  const zoom = Math.round((crop.width / maxWidth) * 100);

  return (
    <div className="flex flex-col gap-3">
      <div ref={box} className="relative w-full touch-none select-none overflow-hidden rounded-md bg-sunken">
        <img src={source.url} alt="" className="block h-auto w-full" draggable={false} />
        {scale > 0 ? (
          <div
            role="slider"
            tabIndex={0}
            aria-label={ut('upload_crop_frame')}
            aria-valuetext={ut('upload_crop_position', { x: Math.round(crop.x), y: Math.round(crop.y) })}
            aria-valuenow={Math.round(crop.x)}
            aria-valuemin={0}
            aria-valuemax={Math.round(width - crop.width)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onKeyDown={onKeyDown}
            className="absolute cursor-move border-2 border-primary shadow-[0_0_0_9999px_rgb(0_0_0/0.55)] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            style={{
              left: crop.x * scale,
              top: crop.y * scale,
              width: crop.width * scale,
              height: crop.height * scale,
            }}
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-3">
              {Array.from({ length: 9 }, (_, i) => (
                <span key={i} className="border border-white/15" />
              ))}
            </span>
          </div>
        ) : null}
      </div>
      <label className="flex flex-col gap-1 text-sm font-medium text-fg">
        {ut('upload_crop_size')}
        <input
          type="range"
          min={Math.round(Math.min(160, maxWidth))}
          max={Math.round(maxWidth)}
          step={1}
          value={Math.round(crop.width)}
          aria-valuetext={`${zoom}%`}
          onChange={(event) => resize(Number(event.currentTarget.value))}
          className="w-full accent-(--color-primary)"
        />
      </label>
      <p className="text-xs text-fg-muted">
        {ut('upload_crop_keyboard')} ·{' '}
        <span className="readout">
          {ut('upload_crop_output', {
            width: Math.round(Math.min(1920, crop.width)),
            height: Math.round(Math.min(1920, crop.width) / COVER_ASPECT),
          })}
        </span>
      </p>
    </div>
  );
}
