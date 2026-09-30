import { ApiError } from '@sotf/contracts/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const api = vi.hoisted(() => ({
  uploads: { create: vi.fn(), complete: vi.fn(), get: vi.fn() },
}));
vi.mock('../../../lib/api.ts', () => ({ api }));

const { runUpload, UploadError } = await import('./uploader.ts');

type XhrScript = (xhr: FakeXhr) => void;

/** Minimal XMLHttpRequest: each `send` runs the next scripted outcome. */
class FakeXhr {
  static script: XhrScript[] = [];
  static sent: Array<{ url: string; size: number; headers: Record<string, string> }> = [];
  status = 0;
  responseText = '';
  url = '';
  headers: Record<string, string> = {};
  responseHeaders: Record<string, string> = {};
  upload: { onprogress: ((event: { lengthComputable: boolean; loaded: number }) => void) | null } = {
    onprogress: null,
  };
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  ontimeout: (() => void) | null = null;
  onabort: (() => void) | null = null;

  open(_method: string, url: string) {
    this.url = url;
  }
  setRequestHeader(name: string, value: string) {
    this.headers[name] = value;
  }
  getResponseHeader(name: string) {
    return this.responseHeaders[name] ?? null;
  }
  abort() {
    this.onabort?.();
  }
  send(body: Blob) {
    FakeXhr.sent.push({ url: this.url, size: body.size, headers: this.headers });
    const next = FakeXhr.script.shift();
    if (!next) throw new Error('unexpected request');
    queueMicrotask(() => next(this));
  }
}

const ok =
  (etag = '"etag"'): XhrScript =>
  (xhr) => {
    xhr.status = 200;
    xhr.responseHeaders.ETag = etag;
    xhr.upload.onprogress?.({ lengthComputable: true, loaded: 1 });
    xhr.onload?.();
  };
const networkError: XhrScript = (xhr) => xhr.onerror?.();
const status =
  (code: number): XhrScript =>
  (xhr) => {
    xhr.status = code;
    xhr.responseText = 'AccessDenied';
    xhr.onload?.();
  };

const future = () => new Date(Date.now() + 3_600_000).toISOString();
const UPLOAD = { id: 'up_1', status: 'inspecting' };

function single() {
  return {
    upload: { id: 'up_1' },
    url: 'https://r2.test/put',
    headers: { 'content-type': 'application/zip' },
    multipart: null,
    expiresAt: future(),
  };
}

function multipart(parts: number) {
  return {
    upload: { id: 'up_1' },
    url: null,
    headers: {},
    multipart: {
      partBytes: 4,
      parts: Array.from({ length: parts }, (_, i) => ({ partNumber: i + 1, url: `https://r2.test/part/${i + 1}` })),
    },
    expiresAt: future(),
  };
}

function request(size: number, extra: Record<string, unknown> = {}) {
  return {
    file: new Blob([new Uint8Array(size)]),
    filename: 'mod.zip',
    purpose: 'mod_file' as const,
    contentType: 'application/zip',
    signal: new AbortController().signal,
    ...extra,
  };
}

beforeEach(() => {
  FakeXhr.script = [];
  FakeXhr.sent = [];
  vi.stubGlobal('XMLHttpRequest', FakeXhr);
  vi.spyOn(Math, 'random').mockReturnValue(0);
  vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
  api.uploads.create.mockReset();
  api.uploads.complete.mockReset();
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

async function settle<T>(promise: Promise<T>): Promise<T> {
  const result = promise.then(
    (value) => ({ value }),
    (error: unknown) => ({ error }),
  );
  await vi.runAllTimersAsync();
  const outcome = (await result) as { value?: T; error?: unknown };
  if ('error' in outcome) throw outcome.error;
  return outcome.value as T;
}

describe('runUpload', () => {
  it('creates, PUTs with the presigned headers and completes', async () => {
    api.uploads.create.mockResolvedValue(single());
    api.uploads.complete.mockResolvedValue(UPLOAD);
    FakeXhr.script = [ok()];
    const progress: number[] = [];
    const result = await settle(runUpload(request(10, { onProgress: (loaded: number) => progress.push(loaded) })));
    expect(result).toEqual(UPLOAD);
    expect(FakeXhr.sent).toEqual([
      { url: 'https://r2.test/put', size: 10, headers: { 'content-type': 'application/zip' } },
    ]);
    expect(api.uploads.complete).toHaveBeenCalledWith({ params: { id: 'up_1' }, body: {} }, expect.anything());
    expect(progress.at(-1)).toBe(10);
  });

  it('retries transient network errors of the transfer', async () => {
    api.uploads.create.mockResolvedValue(single());
    api.uploads.complete.mockResolvedValue(UPLOAD);
    FakeXhr.script = [networkError, networkError, ok()];
    await expect(settle(runUpload(request(10)))).resolves.toEqual(UPLOAD);
    expect(FakeXhr.sent).toHaveLength(3);
  });

  it('gives up after four attempts with a resumable network failure', async () => {
    api.uploads.create.mockResolvedValue(single());
    FakeXhr.script = [networkError, networkError, networkError, networkError];
    const error = await settle(runUpload(request(10))).catch((e: unknown) => e);
    expect(error).toBeInstanceOf(UploadError);
    expect(error).toMatchObject({ failure: 'network', resumable: true });
    expect(api.uploads.complete).not.toHaveBeenCalled();
  });

  it('treats a 403 from storage as an expired signature', async () => {
    api.uploads.create.mockResolvedValue(single());
    FakeXhr.script = [status(403)];
    await expect(settle(runUpload(request(10)))).rejects.toMatchObject({ failure: 'expired', resumable: true });
  });

  it('resumes a multipart session: only the missing parts are sent, ETags in order', async () => {
    api.uploads.create.mockResolvedValue(multipart(3));
    api.uploads.complete.mockResolvedValue(UPLOAD);
    let session: unknown = null;
    // Part 1 succeeds, parts 2 and 3 fail for good.
    FakeXhr.script = [ok('"e1"'), ...Array.from({ length: 8 }, () => networkError)];
    const failed = await settle(runUpload(request(12, { onSession: (value: unknown) => (session = value) }))).catch(
      (e: unknown) => e,
    );
    expect(failed).toMatchObject({ failure: 'network', resumable: true });
    expect(api.uploads.create).toHaveBeenCalledTimes(1);

    FakeXhr.sent = [];
    FakeXhr.script = [ok('"e2"'), ok('"e3"')];
    await expect(settle(runUpload(request(12, { session })))).resolves.toEqual(UPLOAD);
    expect(api.uploads.create).toHaveBeenCalledTimes(1);
    expect(FakeXhr.sent.map((sent) => sent.url).sort()).toEqual(['https://r2.test/part/2', 'https://r2.test/part/3']);
    expect(api.uploads.complete).toHaveBeenCalledWith(
      {
        params: { id: 'up_1' },
        body: {
          parts: [
            { partNumber: 1, etag: '"e1"' },
            { partNumber: 2, etag: '"e2"' },
            { partNumber: 3, etag: '"e3"' },
          ],
        },
      },
      expect.anything(),
    );
  });

  it('starts a new upload when the stored session expired before the transfer', async () => {
    api.uploads.create.mockResolvedValue(single());
    api.uploads.complete.mockResolvedValue(UPLOAD);
    FakeXhr.script = [ok()];
    const stale = {
      presigned: { ...single(), expiresAt: new Date(Date.now() + 10_000).toISOString() },
      etags: new Map(),
      sentBytes: 0,
      transferred: false,
      completed: null,
    };
    await settle(runUpload(request(10, { session: stale })));
    expect(api.uploads.create).toHaveBeenCalledTimes(1);
  });

  it('maps API refusals of create to typed failures', async () => {
    api.uploads.create.mockRejectedValue(
      new ApiError('uploads.create', {
        type: 'about:blank',
        title: 'Too large',
        status: 413,
        code: 'PAYLOAD_TOO_LARGE',
        detail: 'too large',
        requestId: 'req-1',
        errors: [],
      } as never),
    );
    await expect(settle(runUpload(request(10)))).rejects.toMatchObject({
      failure: 'too_large',
      problemCode: 'PAYLOAD_TOO_LARGE',
      reference: 'req-1',
      resumable: false,
    });
  });
});
