/**
 * Open Graph jobs (WP-61, PLAN §8.6 «OG por entidad»).
 *
 * - `og.render`: renders the card of an entity (satori → sharp, 1200 × 630, < 100 KB), stores it in
 *   the public bucket as `og/{type}/{id}-{hash}.png` and records the key (`Mod`, `User`, `Kit`),
 *   then purges the entity's pages. Content-addressed and idempotent: an unchanged card is a no-op.
 *   One render at a time per process (sharp already uses every core).
 * - `og-on-event`: events that change what a card shows enqueue `og.render` (one queued job per
 *   entity: `singletonKey`), so the image is regenerated when the entity is edited.
 *
 * Without R2 credentials the job logs and does nothing.
 */
import type { DomainEvent } from '@sotf/contracts/domain-events';
import type { JobPayload } from '@sotf/contracts/jobs';
import type { Ctx } from '@sotf/core';
import { renderEntityOg } from '@sotf/core/og/index';
import { defineJob, defineJobGroup, onEvent } from '../../define-job.ts';

type OgPayload = JobPayload<'og.render'>;

/** Cards affected by an event (exported for tests). */
export function ogTargetsOf(event: DomainEvent): OgPayload[] {
  switch (event.type) {
    case 'mod.published':
    case 'mod.updated':
    case 'mod.status_changed':
    case 'version.published':
    case 'version.status_changed': {
      const { modId, authorId, kind, categorySlug } = event.payload;
      const targets: OgPayload[] = [
        { entityType: kind === 'build' ? 'build' : 'mod', entityId: modId },
        { entityType: 'user', entityId: authorId },
      ];
      if (categorySlug && event.type !== 'mod.updated')
        targets.push({ entityType: 'category', entityId: categorySlug });
      return targets;
    }
    case 'review.created':
    case 'review.updated':
    case 'review.deleted':
    case 'review.visibility_changed':
    case 'compat.aggregate_changed':
      return [{ entityType: 'mod', entityId: event.payload.modId }];
    case 'user.profile_updated':
      return [{ entityType: 'user', entityId: event.payload.userId }];
    case 'jam.phase_changed':
    case 'jam.changed':
      return [{ entityType: 'jam', entityId: event.payload.jamId }];
    default:
      return [];
  }
}

async function enqueueRender(ctx: Ctx, target: OgPayload): Promise<void> {
  await ctx.jobs.enqueue('og.render', target, {
    // One pending render per entity: bursts of events coalesce, the render reads fresh data.
    singletonKey: `og:${target.entityType}:${String(target.entityId).toLowerCase()}`,
    startAfter: 5,
  });
}

export default defineJobGroup({
  name: 'og',
  jobs: [
    defineJob({
      queue: 'og.render',
      options: { localConcurrency: 1 },
      handler: async ({ entityType, entityId }, { ctx, services }) => {
        const storage = services.storage();
        if (!storage) {
          ctx.log.warn({ entityType, entityId }, 'og.render skipped: R2 is not configured');
          return { status: 'skipped', reason: 'no_storage' };
        }
        const { env } = services;
        return renderEntityOg(
          ctx,
          { storage, config: { mediaBaseUrl: env.R2_PUBLIC_BASE_URL, publicBucket: env.R2_BUCKET } },
          { entityType, entityId },
        );
      },
    }),
  ],
  subscribers: [
    onEvent({
      name: 'og-on-event',
      types: [
        'mod.published',
        'mod.updated',
        'mod.status_changed',
        'version.published',
        'version.status_changed',
        'review.created',
        'review.updated',
        'review.deleted',
        'review.visibility_changed',
        'compat.aggregate_changed',
        'user.profile_updated',
        'jam.phase_changed',
        'jam.changed',
      ],
      handler: async (event, { ctx }) => {
        for (const target of ogTargetsOf(event)) await enqueueRender(ctx, target);
      },
    }),
  ],
});
