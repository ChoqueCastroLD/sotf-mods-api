/**
 * Drop area + file button (keyboard and screen readers use the button; drag & drop is a shortcut,
 * never the only way). Accepts one or several files.
 */
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Camera, Upload } from 'lucide-react';
import { type DragEvent, type ReactNode, useId, useRef, useState } from 'react';

export interface DropzoneProps {
  id?: string;
  /** `accept` of the file input (`.zip`, `image/*`…). */
  accept: string;
  multiple?: boolean;
  disabled?: boolean;
  title: ReactNode;
  hint?: ReactNode;
  buttonLabel: string;
  onFiles: (files: File[]) => void;
  className?: string;
  compact?: boolean;
  /** Adds «Take a photo» (touch screens only): opens the camera through `capture`. */
  cameraLabel?: string;
}

export function Dropzone({
  id,
  accept,
  multiple = false,
  disabled = false,
  title,
  hint,
  buttonLabel,
  onFiles,
  className,
  compact = false,
  cameraLabel,
}: DropzoneProps) {
  const input = useRef<HTMLInputElement>(null);
  const camera = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const hintId = useId();

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOver(false);
    if (disabled) return;
    const files = [...event.dataTransfer.files];
    if (files.length > 0) onFiles(multiple ? files : files.slice(0, 1));
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: drop target only; the button inside is the accessible control
    <div
      id={id}
      tabIndex={-1}
      onDragOver={(event) => {
        if (disabled) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={onDrop}
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border-strong bg-sunken text-center outline-none',
        'transition-[border-color,background-color] duration-(--dur-fast) motion-reduce:transition-none',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
        compact ? 'p-4' : 'p-8 sm:p-10 pointer-coarse:px-5 pointer-coarse:py-7',
        over && 'border-primary bg-primary-soft',
        disabled && 'opacity-55',
        className,
      )}
    >
      <Icon icon={Upload} size={compact ? 20 : 28} className="text-fg-muted" />
      {/* Dragging a file onto a touch screen is not a thing: the title gives way to the button. */}
      <p className={cn('text-sm font-medium text-fg', !compact && 'pointer-coarse:sr-only')}>{title}</p>
      {hint ? (
        <p id={hintId} className="text-xs text-fg-muted">
          {hint}
        </p>
      ) : null}
      <input
        ref={input}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
        onChange={(event) => {
          const files = [...(event.currentTarget.files ?? [])];
          event.currentTarget.value = '';
          if (files.length > 0) onFiles(files);
        }}
      />
      {cameraLabel ? (
        <input
          ref={camera}
          type="file"
          accept="image/*"
          capture="environment"
          disabled={disabled}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
          onChange={(event) => {
            const files = [...(event.currentTarget.files ?? [])];
            event.currentTarget.value = '';
            if (files.length > 0) onFiles(files);
          }}
        />
      ) : null}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          disabled={disabled}
          aria-describedby={hint ? hintId : undefined}
          onClick={() => input.current?.click()}
          className="inline-flex h-10 items-center justify-center rounded-md border border-border-strong bg-raised px-4 text-sm font-medium text-fg hover:bg-fg/6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed pointer-coarse:h-12 pointer-coarse:px-5 pointer-coarse:text-base"
        >
          {buttonLabel}
        </button>
        {cameraLabel ? (
          <button
            type="button"
            disabled={disabled}
            onClick={() => camera.current?.click()}
            className="hidden h-12 items-center justify-center gap-2 rounded-md border border-border-strong bg-raised px-5 text-base font-medium text-fg active:bg-fg/6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed pointer-coarse:inline-flex"
          >
            <Icon icon={Camera} size={18} />
            {cameraLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export interface ProgressBarProps {
  value: number;
  max: number;
  label: string;
  /** Text shown next to the bar (percentage, bytes). */
  valueText: string;
  tone?: 'primary' | 'success' | 'danger';
  className?: string;
}

/** Determinate progress bar (`role="progressbar"` with a readable value text). */
export function ProgressBar({ value, max, label, valueText, tone = 'primary', className }: ProgressBarProps) {
  const ratio = max > 0 ? Math.min(1, Math.max(0, value / max)) : 0;
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(ratio * 100)}
        aria-valuetext={valueText}
        className="h-2 flex-1 overflow-hidden rounded-full bg-fg/10"
      >
        <div
          className={cn(
            'h-full rounded-full transition-[width] duration-(--dur-fast) motion-reduce:transition-none',
            tone === 'primary' && 'bg-primary',
            tone === 'success' && 'bg-success',
            tone === 'danger' && 'bg-danger',
          )}
          style={{ width: `${ratio * 100}%` }}
        />
      </div>
      <span className="readout shrink-0 tabular-nums text-fg-muted">{valueText}</span>
    </div>
  );
}
