/**
 * Downloads service (PLAN §2.8, T0-02): resolve (cached up to 60 s, invalidated by `mod:{id}`
 * tags), decide whether the request counts and buffer the event. The caller answers the 302/404/410
 * right away; the counter writes asynchronously.
 */
import type { DownloadResolveDTO } from '@sotf/contracts/downloads';
import type { Ctx } from '../kernel/context.ts';
import type { CacheRegistry, TaggedCache } from '../kernel/lru.ts';
import {
  type CountDecision,
  countDecision,
  type DownloadSurface,
  downloadSource,
  normalizeUserAgent,
} from './classify.ts';
import type { DownloadCounter } from './counter.ts';
import { type DownloadResolveOptions, type DownloadTarget, type ResolvedDownload, resolveDownload } from './resolve.ts';

export interface DownloadRequestInfo {
  surface: DownloadSurface;
  method: string;
  range?: string | null | undefined;
  secPurpose?: string | null | undefined;
  /** The per-IP soft limit was exceeded (redirect, but do not count). */
  overLimit: boolean;
}

export interface DownloadOutcome extends ResolvedDownload {
  counted: boolean;
  decision: CountDecision | 'not_found';
}

export interface DownloadsServiceOptions extends DownloadResolveOptions {
  counter: DownloadCounter;
  caches?: CacheRegistry | null;
  /** TTL of cached resolutions (default 60 s, tag-invalidated). */
  cacheTtlMs?: number;
}

function cacheKey(target: DownloadTarget): string {
  switch (target.by) {
    case 'slug':
      return `s|${target.user}|${target.slug}|${target.version}`;
    case 'manifest':
      return `m|${target.manifestId}|${target.version}`;
    case 'version':
      return `v|${target.versionId}`;
  }
}

export class DownloadsService {
  readonly #options: DownloadsServiceOptions;
  readonly #cache: TaggedCache<ResolvedDownload> | null;

  constructor(options: DownloadsServiceOptions) {
    this.#options = options;
    this.#cache =
      options.caches?.create<ResolvedDownload>({
        name: 'downloads.resolve',
        max: 5_000,
        ttlMs: options.cacheTtlMs ?? 60_000,
      }) ?? null;
  }

  get counter(): DownloadCounter {
    return this.#options.counter;
  }

  /** Resolution only (cached). */
  async resolve(ctx: Ctx, target: DownloadTarget): Promise<ResolvedDownload> {
    const load = async () => {
      const value = await resolveDownload(ctx.db, target, this.#options);
      const tags = [
        value.modId === null ? null : `mod:${value.modId}`,
        value.versionId === null ? null : `version:${value.versionId}`,
      ];
      return { value, tags: tags.filter((t): t is string => t !== null) };
    };
    if (!this.#cache) return (await load()).value;
    return this.#cache.getOrLoad(cacheKey(target), load);
  }

  /** Resolves and, when the request qualifies, buffers one counted download. */
  async handle(ctx: Ctx, target: DownloadTarget, request: DownloadRequestInfo): Promise<DownloadOutcome> {
    const resolved = await this.resolve(ctx, target);
    if (resolved.status !== 302 || resolved.versionId === null || resolved.modId === null) {
      return { ...resolved, counted: false, decision: 'not_found' };
    }
    const decision = countDecision({
      method: request.method,
      range: request.range,
      secPurpose: request.secPurpose,
      userAgent: ctx.userAgent,
      overLimit: request.overLimit,
    });
    const counted = decision === 'count';
    if (counted) {
      this.#options.counter.record({
        modVersionId: resolved.versionId,
        modId: resolved.modId,
        at: ctx.clock.now(),
        ipHash: ctx.ipHash ?? 'unknown',
        userAgent: normalizeUserAgent(ctx.userAgent),
        country: ctx.country,
        source: downloadSource(request.surface, ctx.userAgent),
        userId: ctx.actor?.userId ?? null,
      });
    }
    ctx.log.debug(
      { modId: resolved.modId, versionId: resolved.versionId, decision, surface: request.surface },
      'download resolved',
    );
    return { ...resolved, counted, decision };
  }
}

/** Internal DTO of `GET /internal/downloads/resolve`. */
export function toResolveDTO(outcome: DownloadOutcome): DownloadResolveDTO {
  return {
    status: outcome.status,
    location: outcome.location,
    reason: outcome.reason,
    counted: outcome.counted,
    modId: outcome.modId,
    versionId: outcome.versionId,
  };
}
