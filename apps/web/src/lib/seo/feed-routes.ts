/**
 * Route handlers of the RSS feeds (PLAN §4.4, §8.6). See `feeds.ts` for the documents.
 */
import { cacheTag } from '@sotf/contracts/cache';
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { MAX_PAGE_SIZE } from '@sotf/contracts/pagination';
import { categoryPath } from '@sotf/contracts/seo';
import { m } from '@sotf/i18n/messages';
import { serverApi } from '../api.ts';
import { loadEnv } from '../env.ts';
import { allCategories, apiStatus, recentCards } from './data.ts';
import { handleOf, lookupMod, lookupProfile, rawSegments, underMods } from './entities.ts';
import { creatorFeed, FEED_SIZE, type FeedDocument, listingFeed, modFeed } from './feeds.ts';
import {
  CONTENT_TYPES,
  type MachineContext,
  machineError,
  machineRedirect,
  machineResponse,
  machineUnavailable,
} from './respond.ts';

type Context = MachineContext & { url: URL };

function samePath(a: string, b: string): boolean {
  const decode = (value: string) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  };
  return decode(a) === decode(b);
}

function send(context: Context, feed: FeedDocument): Response {
  return machineResponse(context, feed.body, { contentType: CONTENT_TYPES.rss, tags: feed.tags });
}

async function guarded(context: Context, run: () => Promise<Response>): Promise<Response> {
  try {
    return await run();
  } catch (error) {
    const status = apiStatus(error);
    if (status) return machineError(context, status, status === 410 ? 'Gone.' : 'Not found.');
    console.error('[web] feed failed', error);
    return machineUnavailable();
  }
}

/** `GET /feed.xml`: new and updated mods and libraries. */
export function globalFeedRoute(context: Context): Promise<Response> {
  return guarded(context, async () => {
    const [mods, libraries] = await Promise.all([
      recentCards({ type: 'mod', limit: FEED_SIZE }),
      recentCards({ type: 'library', limit: FEED_SIZE }),
    ]);
    const cards = [...mods, ...libraries].sort((a, b) => b.lastReleasedAt.localeCompare(a.lastReleasedAt));
    return send(
      context,
      listingFeed({
        cards,
        siteUrl: loadEnv().siteUrl,
        title: m.meta_feed_title({}, { locale: 'en' }),
        description: m.meta_feed_description({}, { locale: 'en' }),
        pagePath: '/mods',
        feedPath: '/feed.xml',
        tags: ['list:mods'],
      }),
    );
  });
}

/** `GET /builds/feed.xml`: new and updated builds. */
export function buildsFeedRoute(context: Context): Promise<Response> {
  return guarded(context, async () => {
    const cards = await recentCards({ type: 'build', limit: FEED_SIZE });
    return send(
      context,
      listingFeed({
        cards,
        siteUrl: loadEnv().siteUrl,
        title: 'SOTF Mods: new and updated builds',
        description: 'The latest Sons of the Forest builds (BuildShare blueprints) published on SOTF Mods.',
        pagePath: '/builds',
        feedPath: '/builds/feed.xml',
        tags: ['list:builds'],
      }),
    );
  });
}

/** `GET /categories/:slug/feed.xml` (legacy slugs 301 to the active category). */
export function categoryFeedRoute(context: Context): Promise<Response> {
  return guarded(context, async () => {
    const slug = (rawSegments(context.url)[1] ?? '').toLowerCase();
    const categories = await allCategories();
    const category =
      categories.find((candidate) => candidate.slug === slug) ??
      categories.find((candidate) => candidate.legacySlugs.includes(slug));
    if (!category) return machineError(context, 404, 'Unknown category.');
    if (category.slug !== slug) return machineRedirect(`${categoryPath(category.slug)}/feed.xml`);
    const cards = await recentCards({
      type: category.kind === 'build' ? 'build' : 'all',
      category: category.slug,
      limit: FEED_SIZE,
    });
    const noun = category.kind === 'build' ? 'builds' : 'mods';
    return send(
      context,
      listingFeed({
        cards,
        siteUrl: loadEnv().siteUrl,
        title: `SOTF Mods: ${category.name} ${noun}`,
        description: `New and updated Sons of the Forest ${category.name} ${noun} on SOTF Mods.`,
        pagePath: categoryPath(category.slug),
        feedPath: `${categoryPath(category.slug)}/feed.xml`,
        tags: [cacheTag.category(category.slug), category.kind === 'build' ? 'list:builds' : 'list:mods'],
      }),
    );
  });
}

async function creatorCards(handle: string): Promise<ModCardDTO[]> {
  const api = serverApi();
  const query = { sort: 'updated' as const, page: 1, pageSize: Math.min(MAX_PAGE_SIZE, FEED_SIZE) };
  const [mods, builds] = await Promise.all([
    api.catalog.userMods({ params: { handle }, query }),
    api.catalog.userBuilds({ params: { handle }, query }),
  ]);
  return [...mods.items, ...builds.items];
}

/** `GET /profile/:handle/feed.xml`: a creator's new and updated releases. */
export function profileFeedRoute(context: Context): Promise<Response> {
  return guarded(context, async () => {
    const handle = rawSegments(context.url)[1] ?? '';
    const found = await lookupProfile(handle);
    if (found.status === 404 || found.status === 410) {
      return machineError(context, found.status, found.status === 410 ? 'Gone.' : 'Not found.');
    }
    if (found.status === 301) return machineRedirect(`${found.canonicalPath}/feed.xml`);
    const canonicalHandle = handleOf(found.canonicalPath);
    const [user, cards] = await Promise.all([
      serverApi().catalog.getUser({ params: { handle: canonicalHandle } }),
      creatorCards(canonicalHandle),
    ]);
    return send(context, creatorFeed(user, cards, loadEnv().siteUrl));
  });
}

/** `GET /mods/:user/:slug/feed.xml`: every release of a mod (builds too) with its changelog. */
export function modFeedRoute(context: Context): Promise<Response> {
  return guarded(context, async () => {
    const segments = rawSegments(context.url);
    const found = await lookupMod('mods', segments[1] ?? '', segments[2] ?? '');
    if (found.status === 404 || found.status === 410) {
      return machineError(context, found.status, found.status === 410 ? 'Gone.' : 'Not found.');
    }
    let id: number | null = found.status === 200 ? found.id : null;
    if (found.status === 301) {
      const target = `${underMods(found.canonicalPath)}/feed.xml`;
      // A build requested under /mods resolves with a «kind mismatch» 301: its feed lives here.
      if (samePath(target, context.url.pathname) && found.id !== null) id = found.id;
      else return machineRedirect(target);
    }
    if (id === null) return machineError(context, 404, 'Not found.');
    const api = serverApi();
    const [mod, versions] = await Promise.all([
      api.catalog.getMod({ params: { id } }),
      api.versions.list({ params: { id } }),
    ]);
    return send(context, modFeed(mod, versions.items, loadEnv().siteUrl));
  });
}
