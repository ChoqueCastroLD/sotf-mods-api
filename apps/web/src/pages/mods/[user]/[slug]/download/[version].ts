/**
 * `GET|HEAD /mods/:user/:slug/download/:version` (WP-31, PLAN §2.8, T0-02): 302 to R2 through the
 * API's internal resolver (see `_proxy.ts`). Always server-rendered and never cached (the edge rule
 * bypasses the cache for this path so every request reaches the counter).
 *
 * The context is typed structurally (the subset of Astro's `APIContext` this route uses) so the
 * route does not depend on the web shell's helpers.
 */
import { downloadProxyEnv, proxyDownload } from './_proxy.ts';

export const prerender = false;

interface DownloadRouteContext {
  request: Request;
  params: Record<string, string | undefined>;
  readonly clientAddress?: string;
  locals?: Record<string, unknown>;
  rewrite?: (path: string) => Promise<Response>;
}

function decodeSegment(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/**
 * Route parameters from the raw path (`/mods/<user>/<slug>/download/<version>`), decoded once:
 * legacy slugs carry `'`, `(`, `)`, `+` and spaces, and the adapter's own decoding differs between
 * runtimes.
 */
export function downloadParams(context: DownloadRouteContext): { user: string; slug: string; version: string } {
  const segments = new URL(context.request.url).pathname.split('/').filter(Boolean);
  const at = segments.lastIndexOf('download');
  if (at >= 3 && segments[at - 3] === 'mods' && segments[at + 1] !== undefined) {
    return {
      user: decodeSegment(segments[at - 2] as string),
      slug: decodeSegment(segments[at - 1] as string),
      version: decodeSegment(segments.slice(at + 1).join('/')),
    };
  }
  return { user: context.params.user ?? '', slug: context.params.slug ?? '', version: context.params.version ?? '' };
}

function clientAddressOf(context: DownloadRouteContext): string | null {
  try {
    return context.clientAddress ?? null;
  } catch {
    // Astro throws when the adapter cannot provide the address.
    return null;
  }
}

/** Runtime environment of the Node adapter (private variables are read at request time). */
function runtimeEnv(): Readonly<Record<string, string | undefined>> {
  return (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env ?? {};
}

export async function GET(context: DownloadRouteContext): Promise<Response> {
  return proxyDownload({
    request: context.request,
    params: downloadParams(context),
    clientAddress: clientAddressOf(context),
    env: downloadProxyEnv(runtimeEnv()),
    ...(typeof context.rewrite === 'function'
      ? {
          renderErrorPage: async (status: 404 | 410) => {
            if (context.locals && status === 410) context.locals.errorKind = 'gone';
            return (context.rewrite as (path: string) => Promise<Response>).call(context, '/404');
          },
        }
      : {}),
  });
}

export const HEAD = GET;
