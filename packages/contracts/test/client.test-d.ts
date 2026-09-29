/**
 * Type-level tests of the typed client (PLAN §12.3 WP-11 "pruebas de tipos del cliente").
 * Checked by `vitest --typecheck` (pnpm test) and by `tsc -p tsconfig.test.json` (pnpm typecheck).
 */
import { describe, expectTypeOf, it } from 'vitest';
import type { z } from 'zod';
import type { ApiClient, EndpointInput, EndpointOutput, RedirectResult } from '../src/client.ts';
import type {
  AuthResultDTO,
  apiContracts,
  CommentPageDTO,
  DownloadResolveDTO,
  LegacyModListResponse,
  ModDetailDTO,
  ModListQuery,
  RegisterBody,
  SseEvent,
} from '../src/index.ts';

declare const api: ApiClient;
type C = typeof apiContracts;

describe('typed client', () => {
  it('infers response types from the contracts', () => {
    expectTypeOf(api.catalog.getMod).returns.resolves.toEqualTypeOf<z.output<typeof ModDetailDTO>>();
    expectTypeOf(api.auth.login).returns.resolves.toEqualTypeOf<z.output<typeof AuthResultDTO>>();
    expectTypeOf(api.comments.list).returns.resolves.toEqualTypeOf<z.output<typeof CommentPageDTO>>();
    expectTypeOf(api.legacy.listMods).returns.resolves.toEqualTypeOf<z.output<typeof LegacyModListResponse>>();
    expectTypeOf(api.internal.healthz).returns.resolves.toHaveProperty('status');
    expectTypeOf(api.downloads.resolve).returns.resolves.toEqualTypeOf<z.output<typeof DownloadResolveDTO>>();
  });

  it('maps response kinds to their JS values', () => {
    expectTypeOf(api.auth.logout).returns.resolves.toEqualTypeOf<undefined>();
    expectTypeOf(api.downloads.versionDownload).returns.resolves.toEqualTypeOf<RedirectResult>();
    expectTypeOf(api.legacy.kelvinseekPrompt).returns.resolves.toEqualTypeOf<string>();
    expectTypeOf(api.studio.analyticsCsv).returns.resolves.toEqualTypeOf<string>();
    expectTypeOf<EndpointOutput<C['events']['stream']>>().toEqualTypeOf<never>();
  });

  it('requires path params and accepts numbers or digit strings for ids', () => {
    expectTypeOf(api.catalog.getMod).parameter(0).toEqualTypeOf<{ params: { id: string | number } }>();
    expectTypeOf<EndpointInput<C['catalog']['getModBySlug']>>().toEqualTypeOf<{
      params: { user: string; slug: string };
    }>();
    // @ts-expect-error the id is required
    void api.catalog.getMod({ params: {} });
    // @ts-expect-error params are required
    void api.catalog.getMod();
  });

  it('makes the input optional when nothing is required', () => {
    expectTypeOf(api.catalog.listMods)
      .parameter(0)
      .toEqualTypeOf<{ query?: z.input<typeof ModListQuery> } | undefined>();
    // biome-ignore lint/complexity/noBannedTypes: the input of an endpoint without params, query or body is `{}`
    expectTypeOf(api.me.get).parameter(0).toEqualTypeOf<{} | undefined>();
    void api.catalog.listMods();
    void api.catalog.listMods({ query: { sort: 'downloads', tag: 'inventory', nsfw: true, page: '2' } });
    // @ts-expect-error unknown sort
    void api.catalog.listMods({ query: { sort: 'random' } });
  });

  it('types request bodies from the DTOs', () => {
    expectTypeOf<EndpointInput<C['auth']['register']>>().toEqualTypeOf<{ body: z.input<typeof RegisterBody> }>();
    // Bodies whose fields are all optional may be omitted.
    void api.follows.followMod({ params: { id: 20 } });
    void api.follows.followMod({ params: { id: 20 }, body: { notify: false } });
    // @ts-expect-error register needs a body
    void api.auth.register({});
    void api.auth.register({
      body: {
        email: 'a@b.co',
        handle: 'abc',
        password: '1234567890',
        locale: 'en',
        // @ts-expect-error acceptTerms must be the literal true
        acceptTerms: false,
        turnstileToken: 't',
      },
    });
  });

  it('exposes request() and url() for any contract', () => {
    expectTypeOf(api.request).toBeFunction();
    expectTypeOf(api.url).returns.toEqualTypeOf<string>();
    expectTypeOf<SseEvent['event']>().toEqualTypeOf<'notification' | 'mod.updated' | 'moderation.queue'>();
  });
});
