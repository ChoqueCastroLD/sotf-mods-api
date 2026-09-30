/**
 * Minimal VirusTotal API v3 client (PLAN §7.4 "security.scan"): look a file up by SHA-256 and,
 * when VirusTotal does not know it, upload it (streamed from R2, never buffered whole).
 *
 * - `GET /files/{sha256}` → the last analysis stats, or `null` (404: unknown file).
 * - Files ≤ 32 MB go to `POST /files`; bigger ones (≤ 650 MB) to the one-off URL of
 *   `GET /files/upload_url`. The multipart body is built around the object stream with an exact
 *   `Content-Length`.
 * - `429` → `VirusTotalRateLimited` (the job reschedules itself); other non-2xx → `VirusTotalError`.
 *
 * The API key only travels in the `x-apikey` header and never reaches logs.
 */
import { randomBytes } from 'node:crypto';
import type { Readable } from 'node:stream';

export const VIRUSTOTAL_API = 'https://www.virustotal.com/api/v3';
/** Direct upload limit of `POST /files`. */
export const VT_DIRECT_UPLOAD_MAX = 32 * 1024 * 1024;
/** Limit of the large-file upload URL. */
export const VT_UPLOAD_MAX = 650 * 1024 * 1024;

export class VirusTotalError extends Error {
  override name: string = 'VirusTotalError';
  readonly status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export class VirusTotalRateLimited extends VirusTotalError {
  override name = 'VirusTotalRateLimited';
}

export interface AnalysisStats {
  malicious: number;
  suspicious: number;
  undetected: number;
  harmless: number;
  timeout: number;
  failure: number;
  typeUnsupported: number;
}

export interface FileReport {
  sha256: string;
  /** Null while VirusTotal has not finished a first analysis of the file. */
  stats: AnalysisStats | null;
  lastAnalysisAt: Date | null;
  /** Engines that flagged it (name → category), for the ranger's view. */
  detections: Record<string, string>;
}

export interface VirusTotalClient {
  lookup(sha256: string): Promise<FileReport | null>;
  /** Uploads a file; returns the analysis id. */
  upload(file: { body: Readable; size: number; filename: string }): Promise<string>;
}

export interface VirusTotalOptions {
  apiKey: string;
  baseUrl?: string;
  fetch?: typeof fetch;
  /** Lookup timeout (ms), default 30 s. Uploads get 10 min. */
  timeoutMs?: number;
  /** Called before every API request (the quota throttle). */
  beforeRequest?: () => Promise<void>;
}

function num(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

/** Parses the `data.attributes` of a file object. */
export function parseFileReport(sha256: string, body: unknown): FileReport {
  const attributes = ((body as { data?: { attributes?: Record<string, unknown> } })?.data?.attributes ?? {}) as Record<
    string,
    unknown
  >;
  const rawStats = attributes.last_analysis_stats as Record<string, unknown> | undefined;
  const date =
    typeof attributes.last_analysis_date === 'number' ? new Date(attributes.last_analysis_date * 1000) : null;
  const results = (attributes.last_analysis_results ?? {}) as Record<string, { category?: unknown }>;
  const detections: Record<string, string> = {};
  for (const [engine, result] of Object.entries(results)) {
    const category = typeof result?.category === 'string' ? result.category : '';
    if (category === 'malicious' || category === 'suspicious') detections[engine.slice(0, 60)] = category;
  }
  const stats: AnalysisStats | null =
    rawStats && date
      ? {
          malicious: num(rawStats.malicious),
          suspicious: num(rawStats.suspicious),
          undetected: num(rawStats.undetected),
          harmless: num(rawStats.harmless),
          timeout: num(rawStats.timeout),
          failure: num(rawStats.failure),
          typeUnsupported: num(rawStats['type-unsupported']),
        }
      : null;
  return { sha256, stats, lastAnalysisAt: date, detections };
}

async function errorOf(response: Response, what: string): Promise<VirusTotalError> {
  let code = '';
  try {
    const body = (await response.json()) as { error?: { code?: string } };
    code = body.error?.code ?? '';
  } catch {
    code = '';
  }
  const message = `VirusTotal ${what} failed: ${response.status}${code ? ` ${code}` : ''}`;
  return response.status === 429
    ? new VirusTotalRateLimited(429, message)
    : new VirusTotalError(response.status, message);
}

export function createVirusTotalClient(options: VirusTotalOptions): VirusTotalClient {
  const base = (options.baseUrl ?? VIRUSTOTAL_API).replace(/\/+$/, '');
  const doFetch = options.fetch ?? fetch;
  const timeoutMs = options.timeoutMs ?? 30_000;
  const headers = { 'x-apikey': options.apiKey, accept: 'application/json' };
  const before = options.beforeRequest ?? (async () => {});

  async function json(url: string, what: string): Promise<unknown> {
    await before();
    const response = await doFetch(url, { headers, signal: AbortSignal.timeout(timeoutMs) });
    if (!response.ok) throw await errorOf(response, what);
    return response.json();
  }

  return {
    async lookup(sha256) {
      await before();
      const response = await doFetch(`${base}/files/${sha256}`, { headers, signal: AbortSignal.timeout(timeoutMs) });
      if (response.status === 404) {
        await response.body?.cancel();
        return null;
      }
      if (!response.ok) throw await errorOf(response, 'lookup');
      return parseFileReport(sha256, await response.json());
    },

    async upload(file) {
      if (file.size > VT_UPLOAD_MAX) throw new VirusTotalError(413, 'File too large for VirusTotal');
      let url = `${base}/files`;
      if (file.size > VT_DIRECT_UPLOAD_MAX) {
        const body = (await json(`${base}/files/upload_url`, 'upload URL')) as { data?: unknown };
        if (typeof body.data !== 'string' || !/^https:\/\//.test(body.data)) {
          throw new VirusTotalError(502, 'VirusTotal returned no upload URL');
        }
        url = body.data;
      }
      const boundary = `----sotf${randomBytes(12).toString('hex')}`;
      const safeName = file.filename.replace(/["\r\n\\]/g, '_').slice(0, 200) || 'file.bin';
      const head = Buffer.from(
        `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${safeName}"\r\n` +
          'Content-Type: application/octet-stream\r\n\r\n',
      );
      const tail = Buffer.from(`\r\n--${boundary}--\r\n`);
      const source = file.body;
      // Pull-based: one chunk per read, so the file is never buffered whole (backpressure).
      const iterator = source[Symbol.asyncIterator]() as AsyncIterator<Buffer | string>;
      let phase: 'head' | 'body' | 'done' = 'head';
      const stream = new ReadableStream<Uint8Array>({
        async pull(controller) {
          try {
            if (phase === 'head') {
              phase = 'body';
              controller.enqueue(new Uint8Array(head));
              return;
            }
            if (phase === 'done') return;
            const next = await iterator.next();
            if (next.done) {
              phase = 'done';
              controller.enqueue(new Uint8Array(tail));
              controller.close();
              return;
            }
            const chunk = next.value;
            controller.enqueue(typeof chunk === 'string' ? new TextEncoder().encode(chunk) : new Uint8Array(chunk));
          } catch (error) {
            controller.error(error);
          }
        },
        cancel() {
          source.destroy();
        },
      });
      await before();
      const response = await doFetch(url, {
        method: 'POST',
        headers: {
          ...headers,
          'content-type': `multipart/form-data; boundary=${boundary}`,
          'content-length': String(head.length + file.size + tail.length),
        },
        body: stream,
        signal: AbortSignal.timeout(10 * 60_000),
        // Node's fetch needs this to send a stream body.
        duplex: 'half',
      } as RequestInit & { duplex: 'half' });
      if (!response.ok) throw await errorOf(response, 'upload');
      const body = (await response.json()) as { data?: { id?: unknown } };
      const id = body.data?.id;
      if (typeof id !== 'string' || id === '') throw new VirusTotalError(502, 'VirusTotal returned no analysis id');
      return id;
    },
  };
}
