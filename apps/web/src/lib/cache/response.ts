/**
 * Response hygiene applied by the middleware to every SSR response (PLAN §2.5, §2.7):
 *
 * - a page that called `setPageCache()` gets its edge headers even where Astro's cache handler
 *   does not run (dev server, 404/500 rendered through the error path);
 * - a response that sets a cookie is never shared: `private, no-store`, no edge headers (public
 *   HTML must be identical for everyone and never carry `Set-Cookie`);
 * - public HTML without an explicit policy is revalidated on every use and not edge-cached.
 */
import type { Locale } from '@sotf/i18n';
import {
  CDN_CACHE_CONTROL_HEADER,
  edgeCacheHeaders,
  HTML_BROWSER_CACHE_CONTROL,
  INTERNAL_TAGS_HEADER,
  type PageCachePolicy,
  withLocaleTag,
} from './policy.ts';

export interface FinalizeOptions {
  method: string;
  locale: Locale;
  policy: PageCachePolicy | false | undefined;
  /** Whether the render set a cookie through `Astro.cookies`. */
  setsCookies: boolean;
}

function mutable(response: Response): Response {
  try {
    response.headers.set('x-sotf-probe', '1');
    response.headers.delete('x-sotf-probe');
    return response;
  } catch {
    return new Response(response.body, response);
  }
}

function isHtml(response: Response): boolean {
  return (response.headers.get('content-type') ?? '').includes('text/html');
}

export function finalizePublicResponse(input: Response, options: FinalizeOptions): Response {
  const response = mutable(input);
  const { headers } = response;
  const readOnly = options.method === 'GET' || options.method === 'HEAD';

  if (options.setsCookies || headers.has('set-cookie') || !readOnly || options.policy === false) {
    if (options.setsCookies || headers.has('set-cookie') || options.policy === false) {
      headers.set('cache-control', 'private, no-store');
    }
    headers.delete(CDN_CACHE_CONTROL_HEADER);
    headers.delete(INTERNAL_TAGS_HEADER);
    return response;
  }

  if (options.policy && !headers.has(CDN_CACHE_CONTROL_HEADER) && response.status < 500) {
    const edge = edgeCacheHeaders({
      maxAge: options.policy.maxAge,
      swr: options.policy.swr,
      tags: withLocaleTag(options.policy.tags, options.locale),
    });
    edge.forEach((value, name) => {
      headers.set(name, value);
    });
  }

  if (response.status >= 500) {
    headers.set('cache-control', 'no-store');
    headers.delete(CDN_CACHE_CONTROL_HEADER);
    headers.delete(INTERNAL_TAGS_HEADER);
  } else if (isHtml(response) && !headers.has('cache-control')) {
    headers.set('cache-control', HTML_BROWSER_CACHE_CONTROL);
  }
  return response;
}
