/**
 * `/logs`: paste or drop a log, optional title, Turnstile for guests, then the private result with
 * the share link, what was hidden and the private delete link. Posts to `POST /api/v2/logs`.
 */
import type { LogCreatedDTO } from '@sotf/contracts/logs';
import { Button, ButtonLink } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Check, Copy, FileUp, Link2, Trash2, X } from 'lucide-react';
import { type DragEvent, type FormEvent, useEffect, useId, useRef, useState } from 'react';
import { useTurnstile } from '../auth/turnstile.ts';
import { API_LOGS, fill, formatBytes, type LogLabels, MAX_LOG_BYTES } from './labels.ts';
import { ReadFileFailure, readLogFile } from './read-file.ts';

export interface CreateLogProps {
  labels: LogLabels;
  lang: string;
  /** Localised `/logs` path. */
  basePath: string;
  turnstileSiteKey: string | undefined;
}

const STORAGE_PREFIX = 'sotf.logs.del.';
const REDACTION_KEYS = ['paths', 'steamIds', 'ips', 'emails', 'secrets'] as const;
const RED_LABEL = {
  paths: 'red_paths',
  steamIds: 'red_steam_ids',
  ips: 'red_ips',
  emails: 'red_emails',
  secrets: 'red_secrets',
} as const;

function byteLength(text: string): number {
  return new TextEncoder().encode(text).length;
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export default function CreateLogIsland({ labels, lang, basePath, turnstileSiteKey }: CreateLogProps) {
  const ids = useId();
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [result, setResult] = useState<LogCreatedDTO | null>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const turnstile = useTurnstile({ siteKey: turnstileSiteKey, action: 'share-log', language: lang });
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    // Members skip Turnstile on the server; here it only decides whether to fetch a token.
    let alive = true;
    fetch('/api/v2/me/summary', { credentials: 'same-origin', headers: { accept: 'application/json' } })
      .then((response) => {
        if (alive) setSignedIn(response.ok);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const failureText = (kind: ReadFileFailure['kind']): string =>
    kind === 'too_large'
      ? fill(labels.err_too_large, { max: formatBytes(MAX_LOG_BYTES) })
      : kind === 'binary'
        ? labels.err_binary
        : kind === 'archive'
          ? labels.err_archive
          : labels.err_file_type;

  const loadFile = async (file: File | undefined): Promise<void> => {
    if (!file) return;
    setError(null);
    try {
      const content = await readLogFile(file);
      setText(content);
      if (!title) setTitle(file.name.replace(/\.(?:gz|gzip|zip|log|txt)$/i, '').slice(0, 80));
    } catch (failure) {
      setError(failure instanceof ReadFileFailure ? failureText(failure.kind) : labels.err_file_type);
    }
  };

  const onDrop = (event: DragEvent): void => {
    event.preventDefault();
    setDragging(false);
    void loadFile(event.dataTransfer.files[0]);
  };

  const submit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (busy) return;
    if (text.trim() === '') {
      setError(labels.err_empty);
      return;
    }
    if (byteLength(text) > MAX_LOG_BYTES) {
      setError(fill(labels.err_too_large, { max: formatBytes(MAX_LOG_BYTES) }));
      return;
    }
    setError(null);
    setBusy(true);
    try {
      let token: string | undefined;
      if (!signedIn) {
        try {
          token = await turnstile.getToken();
        } catch {
          setError(labels.err_turnstile);
          return;
        }
      }
      let response: Response;
      try {
        response = await fetch(API_LOGS, {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'content-type': 'application/json', accept: 'application/json' },
          body: JSON.stringify({
            text,
            ...(title.trim() ? { title: title.trim() } : {}),
            ...(token ? { turnstileToken: token } : {}),
          }),
        });
      } catch {
        setError(labels.err_network);
        return;
      }
      if (!response.ok) {
        const problem = (await response.json().catch(() => ({}))) as { code?: string; retryAfter?: number };
        const retry = Number(problem.retryAfter ?? response.headers.get('retry-after') ?? 0);
        setError(
          problem.code === 'RATE_LIMITED' || response.status === 429
            ? fill(labels.err_rate, { seconds: Math.max(1, Math.ceil(retry)) })
            : problem.code === 'TURNSTILE_REQUIRED'
              ? labels.err_turnstile
              : problem.code === 'PAYLOAD_TOO_LARGE' || response.status === 413
                ? fill(labels.err_too_large, { max: formatBytes(MAX_LOG_BYTES) })
                : problem.code === 'UNAVAILABLE'
                  ? labels.err_busy
                  : problem.code === 'VALIDATION_FAILED'
                    ? labels.err_binary
                    : labels.err_generic,
        );
        return;
      }
      const created = (await response.json()) as LogCreatedDTO;
      try {
        localStorage.setItem(`${STORAGE_PREFIX}${created.id}`, created.deleteToken);
      } catch {
        // Private mode: the delete link of the result screen still works.
      }
      setResult(created);
    } finally {
      turnstile.reset();
      setBusy(false);
    }
  };

  if (result)
    return (
      <Result
        result={result}
        labels={labels}
        basePath={basePath}
        onAnother={() => {
          setResult(null);
          setText('');
          setTitle('');
        }}
      />
    );

  const size = byteLength(text);
  const sizeId = `${ids}-size`;
  const errorId = `${ids}-error`;
  return (
    <form
      className="grid gap-4"
      onSubmit={submit}
      noValidate
      aria-busy={busy || undefined}
      onFocusCapture={turnstile.prepare}
      onPointerEnter={turnstile.prepare}
    >
      {/* biome-ignore lint/a11y/noStaticElementInteractions: drop zone; the file picker button is the keyboard path */}
      <div
        className={`grid gap-2 rounded-lg border-2 border-dashed p-3 transition-colors md:p-4 ${dragging ? 'border-focus bg-surface' : 'border-border-strong bg-surface'}`}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor={`${ids}-text`} className="text-sm font-semibold text-fg">
            {labels.field_text}
          </label>
          <div className="flex items-center gap-2">
            <input
              ref={fileInput}
              type="file"
              accept=".log,.txt,.gz,.zip,text/plain"
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
              onChange={(event) => {
                void loadFile(event.target.files?.[0]);
                event.target.value = '';
              }}
            />
            <Button
              type="button"
              variant="secondary"
              size="sm"
              icon={<Icon icon={FileUp} size={16} />}
              className="max-md:min-h-11"
              onClick={() => fileInput.current?.click()}
            >
              {labels.choose_file}
            </Button>
            {text ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                icon={<Icon icon={X} size={16} />}
                className="max-md:min-h-11"
                onClick={() => setText('')}
              >
                {labels.clear}
              </Button>
            ) : null}
          </div>
        </div>
        <textarea
          id={`${ids}-text`}
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            if (error) setError(null);
          }}
          disabled={busy}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          rows={8}
          placeholder={dragging ? labels.drop_active : labels.field_text_placeholder}
          aria-describedby={error ? `${sizeId} ${errorId}` : sizeId}
          aria-invalid={error ? true : undefined}
          className="min-h-44 w-full resize-y rounded-md border border-border-strong bg-raised p-3 font-mono text-[13px] leading-5 text-fg placeholder:text-fg-subtle md:min-h-72"
          wrap="off"
        />
        <p id={sizeId} className="text-xs text-fg-muted">
          {labels.drop_hint} · {fill(labels.size_info, { size: formatBytes(size), max: formatBytes(MAX_LOG_BYTES) })}
        </p>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor={`${ids}-title`} className="text-sm font-semibold text-fg">
          {labels.field_title}
        </label>
        <input
          id={`${ids}-title`}
          type="text"
          value={title}
          maxLength={80}
          disabled={busy}
          placeholder={labels.field_title_placeholder}
          onChange={(event) => setTitle(event.target.value)}
          className="h-11 rounded-md border border-border-strong bg-raised px-3 text-base text-fg placeholder:text-fg-subtle md:h-10 md:text-sm"
        />
      </div>
      <div ref={turnstile.containerRef} />
      {error ? (
        <p id={errorId} role="alert" className="rounded-md border border-danger/50 bg-danger-soft p-3 text-sm text-fg">
          {error}
        </p>
      ) : null}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-(--container-prose) text-sm text-fg-muted">{labels.expiry_notice}</p>
        <Button type="submit" variant="primary" loading={busy} className="max-md:w-full">
          {busy ? labels.submitting : labels.submit}
        </Button>
      </div>
    </form>
  );
}

function Result({
  result,
  labels,
  basePath,
  onAnother,
}: {
  result: LogCreatedDTO;
  labels: LogLabels;
  basePath: string;
  onAnother: () => void;
}) {
  const origin = typeof location === 'undefined' ? '' : location.origin;
  const link = `${origin}${basePath}/${result.id}`;
  const deleteLink = `${link}#del=${result.deleteToken}`;
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (which: string, value: string): Promise<void> => {
    if (await copyText(value)) {
      setCopied(which);
      setTimeout(() => setCopied((current) => (current === which ? null : current)), 2000);
    }
  };
  const hidden = REDACTION_KEYS.filter((key) => result.redactions[key] > 0);
  return (
    <section
      className="grid gap-5 rounded-lg border border-border bg-surface p-4 md:p-6"
      aria-labelledby="log-done-title"
    >
      <header className="flex items-center gap-2">
        <Icon icon={Check} size={20} className="text-success" />
        <h2 id="log-done-title" className="font-display-caps text-lg text-fg">
          {labels.done_title}
        </h2>
      </header>
      <div className="grid gap-1.5">
        <span className="text-sm font-semibold text-fg">{labels.done_link}</span>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            readOnly
            value={link}
            aria-label={labels.done_link}
            onFocus={(event) => event.currentTarget.select()}
            className="h-11 min-w-0 flex-1 rounded-md border border-border-strong bg-raised px-3 font-mono text-sm text-fg md:h-10"
          />
          <Button
            type="button"
            variant="primary"
            icon={<Icon icon={copied === 'link' ? Check : Copy} size={16} />}
            onClick={() => void copy('link', link)}
          >
            {copied === 'link' ? labels.copied : labels.copy_link}
          </Button>
        </div>
        <p className="text-xs text-fg-muted">{labels.expiry_notice}</p>
      </div>
      <div className="grid gap-2">
        <p className="text-sm font-semibold text-fg">
          {fill(labels.done_redactions, { count: result.redactions.total })}
        </p>
        {hidden.length === 0 ? (
          <p className="text-sm text-fg-muted">{labels.done_none}</p>
        ) : (
          <ul className="flex flex-wrap gap-2">
            {hidden.map((key) => (
              <li key={key} className="rounded-sm border border-border-strong px-2 py-1 text-xs text-fg">
                {labels[RED_LABEL[key]]}: <strong>{result.redactions[key]}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="grid gap-1.5 rounded-md border border-border bg-raised p-3">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-fg">
          <Icon icon={Trash2} size={16} />
          {labels.done_delete_link}
        </span>
        <p className="text-xs text-fg-muted">{labels.done_delete_hint}</p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            readOnly
            value={deleteLink}
            aria-label={labels.done_delete_link}
            onFocus={(event) => event.currentTarget.select()}
            className="h-11 min-w-0 flex-1 rounded-md border border-border-strong bg-bg px-3 font-mono text-xs text-fg md:h-9"
          />
          <Button
            type="button"
            variant="secondary"
            size="sm"
            icon={<Icon icon={copied === 'del' ? Check : Link2} size={16} />}
            onClick={() => void copy('del', deleteLink)}
          >
            {copied === 'del' ? labels.copied : labels.copy_link}
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <ButtonLink href={`${basePath}/${result.id}`} variant="primary">
          {labels.done_open}
        </ButtonLink>
        <Button type="button" variant="ghost" onClick={onAnother}>
          {labels.done_another}
        </Button>
      </div>
    </section>
  );
}
