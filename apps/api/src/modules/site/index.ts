/**
 * Site module (WP-33): public figures of PLAN §5.2: `GET /site/stats`, `GET /live/pulse`,
 * `GET /mods/:id/live` and `GET /mods/:id/stats/public` (edge 30–60 s, tag `stats`).
 */
import { sseChannel, statsEndpoints } from '@sotf/contracts';
import { getLivePulse, getModBadge, getModLive, getModPublicStats, getSiteStats } from '@sotf/core/catalog/index';
import { formatFrame } from '../../plugins/sse.ts';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';
import { encodedJson } from '../catalog/respond.ts';

export default defineModule({
  name: 'site',
  register(m) {
    const config = catalogConfigOf(m.platform.env);

    m.implement(statsEndpoints.site, async ({ ctx, request, reply }) =>
      encodedJson(statsEndpoints.site, request, reply, await getSiteStats(ctx, config)),
    );

    m.implement(statsEndpoints.livePulse, async ({ ctx, request, reply }) =>
      encodedJson(statsEndpoints.livePulse, request, reply, await getLivePulse(ctx, config)),
    );

    m.implement(statsEndpoints.modLive, async ({ params, ctx, cache, request, reply }) => {
      cache({ id: params.id });
      return encodedJson(statsEndpoints.modLive, request, reply, await getModLive(ctx, config, params.id));
    });

    // Public live stream of a mod page (`mod:{id}` channel). Streams are not contract handlers: the
    // route is registered here with the endpoint config so auth, CORS-free rate limits and docs apply.
    const liveStream = statsEndpoints.modLiveStream;
    let anonymousStreams = 0;
    m.app.route({
      method: liveStream.method,
      url: liveStream.path,
      config: { endpoint: liveStream },
      sse: { kind: 'manual', heartbeat: false },
      handler: async (request, reply) => {
        const params = liveStream.params.parse(request.params);
        const initial = await getModLive(request.ctx, config, params.id);
        const context = reply.sse;
        if (!context) throw new Error('@fastify/sse did not decorate the reply');
        reply.header('cache-control', 'no-store');
        reply.header('access-control-allow-origin', '*');
        reply.header('x-accel-buffering', 'no');
        context.keepAlive();
        context.sendHeaders(200);
        const raw = reply.raw;
        let open = true;
        const write = (chunk: string) => (open ? raw.write(chunk) : false);
        // Anonymous streams get a negative id: the hub's per-user cap never applies to them.
        anonymousStreams += 1;
        const unsubscribe = m.platform.hub.add(-anonymousStreams, [sseChannel.mod(params.id)], {
          write,
          close: () => {
            if (!open) return;
            open = false;
            unsubscribe();
            context.close();
            raw.end();
          },
        });
        context.onClose(() => {
          open = false;
          unsubscribe();
        });
        write(`retry: 10000\n: connected mod:${params.id}\n\n`);
        write(
          formatFrame({
            channel: sseChannel.mod(params.id),
            event: 'mod.live',
            id: `${params.id}.${initial.downloads}`,
            data: { modId: params.id, downloads: initial.downloads },
          }),
        );
      },
    });

    m.implement(statsEndpoints.modBadge, async ({ params, ctx, cache }) => {
      cache({ id: params.id });
      return { body: await getModBadge(ctx, config, params.id, params.kind), contentType: 'image/svg+xml; charset=utf-8' };
    });

    m.implement(statsEndpoints.modPublicStats, async ({ params, query, ctx, cache, request, reply }) => {
      cache({ id: params.id });
      const series = await getModPublicStats(ctx, config, params.id, query.range);
      return encodedJson(statsEndpoints.modPublicStats, request, reply, series);
    });
  },
});
