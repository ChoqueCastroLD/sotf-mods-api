/**
 * Crop dialog of the avatar (1:1, round mask) and the profile banner (4:1) — T0-15 «recorte y
 * WebP». The picked image fills the frame; drag (mouse, touch or pen) or the arrow keys move it,
 * the slider or `+` / `-` zoom. «Use image» renders the visible area into a canvas at the output
 * size and encodes it as WebP (JPEG where the browser cannot encode WebP).
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Dialog } from '@sotf/ui/dialog';
import { Slider } from '@sotf/ui/slider';
import {
  type KeyboardEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { type ImagePurpose, OUTPUT_SIZE } from './upload.ts';

export interface CropResult {
  file: File;
  previewUrl: string;
}

export interface ImageCropDialogProps {
  file: File | null;
  purpose: ImagePurpose;
  onCancel: () => void;
  onCropped: (result: CropResult) => void;
}

const MAX_ZOOM = 4;
const KEY_STEP = 12;

interface Loaded {
  image: HTMLImageElement;
  url: string;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function encode(canvas: HTMLCanvasElement, type: string): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, 0.9));
}

export function ImageCropDialog({ file, purpose, onCancel, onCropped }: ImageCropDialogProps) {
  const output = OUTPUT_SIZE[purpose];
  const aspect = output.width / output.height;
  const [loaded, setLoaded] = useState<Loaded | null>(null);
  const [failed, setFailed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [frameWidth, setFrameWidth] = useState(0);
  const [busy, setBusy] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: number; x: number; y: number; ox: number; oy: number } | null>(null);

  // Load the picked file.
  useEffect(() => {
    if (!file) {
      setLoaded(null);
      return;
    }
    setFailed(false);
    setZoom(1);
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => setLoaded({ image, url });
    image.onerror = () => setFailed(true);
    image.src = url;
    return () => {
      image.onload = null;
      image.onerror = null;
      URL.revokeObjectURL(url);
    };
  }, [file]);

  // Frame size follows the dialog width.
  useLayoutEffect(() => {
    const element = container.current;
    if (!element || !loaded) return;
    const measure = () => {
      const available = element.clientWidth;
      setFrameWidth(Math.max(120, Math.min(available, purpose === 'avatar' ? 320 : 720)));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [loaded, purpose]);

  const frameHeight = frameWidth / aspect;
  const natural = loaded ? { w: loaded.image.naturalWidth, h: loaded.image.naturalHeight } : { w: 1, h: 1 };
  const baseScale = frameWidth > 0 ? Math.max(frameWidth / natural.w, frameHeight / natural.h) : 1;
  const scale = baseScale * zoom;
  const shown = { w: natural.w * scale, h: natural.h * scale };

  const bound = useCallback(
    (x: number, y: number) => ({
      x: clamp(x, frameWidth - shown.w, 0),
      y: clamp(y, frameHeight - shown.h, 0),
    }),
    [frameWidth, frameHeight, shown.w, shown.h],
  );

  // Centre the image when it (or the frame) changes size; keep it covering the frame on zoom.
  const centred = useRef<string>('');
  useEffect(() => {
    if (!loaded || frameWidth === 0) return;
    const key = `${loaded.url}|${frameWidth}`;
    if (centred.current !== key) {
      centred.current = key;
      setOffset(bound((frameWidth - shown.w) / 2, (frameHeight - shown.h) / 2));
    } else {
      setOffset((current) => bound(current.x, current.y));
    }
  }, [loaded, frameWidth, frameHeight, shown.w, shown.h, bound]);

  const zoomTo = (next: number) => {
    const value = clamp(next, 1, MAX_ZOOM);
    // Zoom around the frame centre.
    const cx = frameWidth / 2;
    const cy = frameHeight / 2;
    const ratio = value / zoom;
    setZoom(value);
    setOffset((current) => ({ x: cx - (cx - current.x) * ratio, y: cy - (cy - current.y) * ratio }));
  };

  const onPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, ox: offset.x, oy: offset.y };
  };
  const onPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    setOffset(bound(state.ox + event.clientX - state.x, state.oy + event.clientY - state.y));
  };
  const onPointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    if (drag.current?.id === event.pointerId) drag.current = null;
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [KEY_STEP, 0],
      ArrowRight: [-KEY_STEP, 0],
      ArrowUp: [0, KEY_STEP],
      ArrowDown: [0, -KEY_STEP],
    };
    const move = moves[event.key];
    if (move) {
      event.preventDefault();
      setOffset((current) => bound(current.x + move[0], current.y + move[1]));
    } else if (event.key === '+' || event.key === '=') {
      event.preventDefault();
      zoomTo(zoom + 0.1);
    } else if (event.key === '-' || event.key === '_') {
      event.preventDefault();
      zoomTo(zoom - 0.1);
    }
  };

  const confirm = async () => {
    if (!loaded || frameWidth === 0) return;
    setBusy(true);
    try {
      const canvas = document.createElement('canvas');
      canvas.width = output.width;
      canvas.height = output.height;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('canvas 2d unavailable');
      context.imageSmoothingQuality = 'high';
      const sx = -offset.x / scale;
      const sy = -offset.y / scale;
      const sw = frameWidth / scale;
      const sh = frameHeight / scale;
      context.drawImage(loaded.image, sx, sy, sw, sh, 0, 0, output.width, output.height);
      let blob = await encode(canvas, 'image/webp');
      if (blob?.type !== 'image/webp') blob = await encode(canvas, 'image/jpeg');
      if (!blob) throw new Error('encoding failed');
      const extension = blob.type === 'image/webp' ? 'webp' : 'jpg';
      const cropped = new File([blob], `${purpose}.${extension}`, { type: blob.type });
      onCropped({ file: cropped, previewUrl: URL.createObjectURL(cropped) });
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  };

  const title = purpose === 'avatar' ? m.settings_crop_avatar_title() : m.settings_crop_banner_title();

  return (
    <Dialog
      open={file !== null}
      onOpenChange={(open) => {
        if (!open) onCancel();
      }}
      title={title}
      description={m.settings_crop_help()}
      size="lg"
      footer={
        <>
          <Button variant="ghost" onClick={onCancel}>
            {m.settings_cancel()}
          </Button>
          <Button onClick={() => void confirm()} loading={busy} disabled={!loaded || failed}>
            {m.settings_crop_use()}
          </Button>
        </>
      }
    >
      <div ref={container} className="grid justify-items-center gap-4">
        {failed ? (
          <p role="alert" className="text-sm text-danger">
            {m.settings_crop_failed()}
          </p>
        ) : !loaded ? (
          <div className="h-40 w-full animate-pulse rounded-md bg-fg/8 motion-reduce:animate-none" />
        ) : (
          <>
            <button
              type="button"
              aria-roledescription={m.settings_crop_roledescription()}
              aria-label={m.settings_crop_label()}
              onKeyDown={onKeyDown}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className="relative cursor-grab touch-none select-none overflow-hidden rounded-md bg-sunken focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus active:cursor-grabbing"
              style={{ width: frameWidth, height: frameHeight }}
            >
              <img
                src={loaded.url}
                alt=""
                draggable={false}
                className="pointer-events-none absolute top-0 left-0 max-w-none origin-top-left"
                style={{ width: shown.w, height: shown.h, transform: `translate(${offset.x}px, ${offset.y}px)` }}
              />
              <span
                aria-hidden="true"
                className={cn(
                  'pointer-events-none absolute inset-0 ring-1 ring-fg/30 ring-inset',
                  purpose === 'avatar' && 'rounded-full shadow-[0_0_0_9999px_rgb(0_0_0/0.45)]',
                )}
              />
            </button>
            <Slider
              label={m.settings_crop_zoom()}
              value={zoom}
              min={1}
              max={MAX_ZOOM}
              step={0.05}
              format={{ style: 'percent', maximumFractionDigits: 0 }}
              onValueChange={(value) => zoomTo(value)}
              className="w-full max-w-sm"
            />
          </>
        )}
      </div>
    </Dialog>
  );
}
