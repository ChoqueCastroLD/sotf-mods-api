/**
 * Slider (PLAN §3.9): a single value or a range (pass an array). The thumbs get the accessible
 * name from `label`; the current value is shown as a readout next to the label.
 */
import { Slider as BaseSlider } from '@base-ui/react/slider';
import { type ReactNode, useId } from 'react';
import { cn } from './cn.ts';
import { labelClasses } from './field.tsx';

type SliderValue = number | readonly number[];

export interface SliderProps<V extends SliderValue = number> {
  label: ReactNode;
  value?: V;
  defaultValue?: V;
  onValueChange?: (value: V) => void;
  /** Called once the user releases the thumb (use it to trigger requests). */
  onValueCommitted?: (value: V) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Formats the readout (`Intl.NumberFormat` options, e.g. `{ style: 'percent' }`). */
  format?: Intl.NumberFormatOptions;
  /** Locale of the readout. Defaults to the document language. */
  locale?: Intl.LocalesArgument;
  hideLabel?: boolean;
  name?: string;
  disabled?: boolean;
  className?: string;
}

export function Slider<V extends SliderValue = number>({
  label,
  value,
  defaultValue,
  onValueChange,
  onValueCommitted,
  min = 0,
  max = 100,
  step = 1,
  format,
  locale,
  hideLabel,
  name,
  disabled,
  className,
}: SliderProps<V>) {
  const labelId = useId();
  const initial: SliderValue | undefined = value ?? defaultValue;
  const thumbs = Array.isArray(initial) ? initial.length : 1;
  return (
    <BaseSlider.Root
      value={value as number | number[] | undefined}
      defaultValue={defaultValue as number | number[] | undefined}
      onValueChange={(next) => onValueChange?.(next as unknown as V)}
      onValueCommitted={(next) => onValueCommitted?.(next as unknown as V)}
      min={min}
      max={max}
      step={step}
      format={format}
      locale={locale}
      name={name}
      disabled={disabled}
      aria-labelledby={labelId}
      className={cn('flex flex-col gap-2 data-disabled:opacity-55', className)}
    >
      <div className={cn('flex items-center justify-between gap-4', hideLabel && 'sr-only')}>
        <span id={labelId} className={labelClasses}>
          {label}
        </span>
        <BaseSlider.Value className="readout tabular-nums" />
      </div>
      <BaseSlider.Control className="flex h-6 w-full touch-none items-center select-none">
        <BaseSlider.Track className="relative h-1.5 w-full rounded-full bg-sunken shadow-[inset_0_0_0_1px_var(--color-border-strong)]">
          <BaseSlider.Indicator className="rounded-full bg-primary" />
          {Array.from({ length: thumbs }, (_, index) => (
            <BaseSlider.Thumb
              // biome-ignore lint/suspicious/noArrayIndexKey: thumbs are positional by definition
              key={index}
              index={thumbs > 1 ? index : undefined}
              className={cn(
                'size-5 rounded-full border-2 border-primary bg-raised shadow-sm outline-none',
                'has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-focus',
                'transition-[scale] duration-(--dur-fast) data-dragging:scale-110',
              )}
            />
          ))}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
