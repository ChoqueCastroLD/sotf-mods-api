/**
 * Shared handlers of the Markdown alternates (`.md`) of mods, builds and profiles (PLAN §8.7).
 * Cached 1 h at the edge with the entity's tags (`mod:{id}`/`user:{id}`), so edits purge them.
 * Pages that are `noindex` (pending, unlisted) keep that in `X-Robots-Tag`.
 */
import { cacheTag } from '@sotf/contracts/cache';
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { MAX_PAGE_SIZE } from '@sotf/contracts/pagination';
import { serverApi } from '../../../lib/api.ts';
import { loadEnv } from '../../../lib/env.ts';
import { apiStatus } from './data.ts';
import { handleOf, lookupMod, lookupProfile, rawSegments, stripSuffix } from './entities.ts';
import { modMarkdown, profileMarkdown } from './markdown.ts';
import {
  CONTENT_TYPES,
  type MachineContext,
  machineError,
  machineRedirect,
  machineResponse,
  machineUnavailable,
} from './respond.ts';

type Context = MachineContext & { url: URL };

async function guarded(context: Context, run: () => Promise<Response>): Promise<Response> {
  try {
    return await run();
  } catch (error) {
    const status = apiStatus(error);
    if (status) return machineError(context, status, status === 410 ? 'Gone.' : 'Not found.');
    console.error('[web] markdown alternate failed', error);
    return machineUnavailable();
  }
}

/** `GET /{mods|builds}/:user/:slug.md` */
export function modMarkdownRoute(context: Context, prefix: 'mods' | 'builds'): Promise<Response> {
  return guarded(context, async () => {
    const segments = rawSegments(context.url);
    const user = segments[1] ?? '';
    const slug = stripSuffix(segments[2] ?? '', '.md');
    const found = await lookupMod(prefix, user, slug);
    if (found.status === 404 || found.status === 410) {
      return machineError(context, found.status, found.status === 410 ? 'Gone.' : 'Not found.');
    }
    if (found.status === 301) return machineRedirect(`${found.canonicalPath}.md`);
    const mod = await serverApi().catalog.getMod({ params: { id: found.id } });
    const expectedPrefix = mod.kind === 'build' ? 'builds' : 'mods';
    if (expectedPrefix !== prefix) return machineRedirect(`${mod.canonicalPath}.md`);
    const body = modMarkdown(mod, loadEnv().siteUrl, new Date());
    return machineResponse(context, body, {
      contentType: CONTENT_TYPES.markdown,
      tags: [cacheTag.mod(mod.id), cacheTag.user(mod.userId)],
      headers: {
        link: `<${loadEnv().siteUrl}${mod.canonicalPath}>; rel="canonical"`,
        ...(mod.noindex ? { 'x-robots-tag': 'noindex' } : {}),
      },
    });
  });
}

async function userCards(handle: string, kind: 'mods' | 'builds'): Promise<ModCardDTO[]> {
  const api = serverApi();
  const query = { sort: 'updated' as const, page: 1, pageSize: MAX_PAGE_SIZE };
  const page =
    kind === 'mods'
      ? await api.catalog.userMods({ params: { handle }, query })
      : await api.catalog.userBuilds({ params: { handle }, query });
  return page.items;
}

/** `GET /profile/:handle.md` */
export function profileMarkdownRoute(context: Context): Promise<Response> {
  return guarded(context, async () => {
    const segments = rawSegments(context.url);
    const handle = stripSuffix(segments[1] ?? '', '.md');
    const found = await lookupProfile(handle);
    if (found.status === 404 || found.status === 410) {
      return machineError(context, found.status, found.status === 410 ? 'Gone.' : 'Not found.');
    }
    if (found.status === 301) return machineRedirect(`${found.canonicalPath}.md`);
    const canonicalHandle = handleOf(found.canonicalPath);
    const [user, mods, builds] = await Promise.all([
      serverApi().catalog.getUser({ params: { handle: canonicalHandle } }),
      userCards(canonicalHandle, 'mods'),
      userCards(canonicalHandle, 'builds'),
    ]);
    const body = profileMarkdown(user, { mods, builds }, loadEnv().siteUrl, new Date());
    return machineResponse(context, body, {
      contentType: CONTENT_TYPES.markdown,
      tags: [cacheTag.user(user.id)],
      headers: {
        link: `<${loadEnv().siteUrl}${user.canonicalPath}>; rel="canonical"`,
        ...(user.hasPublicContent ? {} : { 'x-robots-tag': 'noindex' }),
      },
    });
  });
}
