/**
 * Markdown field of the wizard (description, changelog). CodeMirror and the preview pipeline are
 * a separate chunk loaded when the field first renders; until then (or if the chunk fails, e.g.
 * offline) a plain textarea edits the same value, so typing never waits for the editor.
 */
import { cn } from '@sotf/ui/cn';
import { Textarea } from '@sotf/ui/textarea';
import { Component, lazy, type ReactNode, Suspense, useId, useState } from 'react';
import { ut } from '../i18n.ts';
import { number } from '../lib/format.ts';

const MarkdownEditor = lazy(() => import('./MarkdownEditor.tsx'));

export interface MarkdownFieldProps {
  id: string;
  label: string;
  description?: ReactNode;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
  optional?: boolean;
  minHeight?: string;
  idPrefix: string;
  /** Characters under which a hint is shown (description ≥ 300 for the quality score). */
  recommendedMin?: number;
  error?: ReactNode;
}

class EditorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  override state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  override render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export function MarkdownField({
  id,
  label,
  description,
  value,
  onChange,
  maxLength,
  placeholder,
  optional,
  minHeight = '14rem',
  idPrefix,
  recommendedMin,
  error,
}: MarkdownFieldProps) {
  const labelId = useId();
  const descriptionId = useId();
  const counterId = useId();
  const [view, setView] = useState<'write' | 'preview'>('write');
  const length = value.length;
  const describedBy = [description ? descriptionId : null, counterId].filter(Boolean).join(' ');

  const fallback = (
    <Textarea
      id={`${id}-fallback`}
      aria-labelledby={labelId}
      aria-describedby={describedBy}
      value={value}
      maxLength={maxLength}
      minRows={8}
      maxRows={24}
      onChange={(event) => onChange(event.currentTarget.value)}
      {...(placeholder ? { placeholder } : {})}
      className="font-mono"
    />
  );

  return (
    <div id={id} tabIndex={-1} className="flex flex-col gap-1.5 outline-none">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <span id={labelId} className="text-sm font-medium text-fg">
          {label}
          {optional ? <span className="ms-1.5 font-normal text-fg-subtle">({ut('upload_optional')})</span> : null}
        </span>
        <fieldset
          aria-label={ut('upload_markdown_view')}
          className="m-0 flex min-w-0 rounded-md border border-border p-0.5 lg:hidden"
        >
          {(['write', 'preview'] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={view === option}
              onClick={() => setView(option)}
              className={cn(
                'h-8 rounded-sm px-3 text-xs font-medium text-fg-muted',
                view === option && 'bg-primary-soft text-fg',
              )}
            >
              {option === 'write' ? ut('upload_markdown_write') : ut('upload_markdown_preview')}
            </button>
          ))}
        </fieldset>
      </div>
      {description ? (
        <p id={descriptionId} className="text-xs text-fg-muted">
          {description}
        </p>
      ) : null}
      <EditorBoundary fallback={fallback}>
        <Suspense fallback={fallback}>
          <MarkdownEditor
            value={value}
            onChange={onChange}
            labelId={labelId}
            describedBy={describedBy}
            maxLength={maxLength}
            view={view}
            minHeight={minHeight}
            idPrefix={idPrefix}
            {...(placeholder ? { placeholder } : {})}
          />
        </Suspense>
      </EditorBoundary>
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-fg-muted">{ut('upload_markdown_help')}</span>
        <span
          id={counterId}
          className={cn('readout tabular-nums', length >= maxLength ? 'text-danger' : 'text-fg-muted')}
        >
          {ut('upload_counter', { count: number(length), max: number(maxLength) })}
          {recommendedMin !== undefined && length < recommendedMin ? (
            <span className="ms-2 text-fg-subtle">
              {ut('upload_markdown_recommended', { min: number(recommendedMin) })}
            </span>
          ) : null}
        </span>
      </div>
      {error ? (
        <p role="alert" className="text-xs font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
