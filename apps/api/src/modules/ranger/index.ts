/**
 * Ranger Station module (WP-51, PLAN §5.2 "Moderación y administración", §7.4): `/api/v2/ranger/*`.
 *
 * - Queue lanes and the item view (inspection, file diff, scan, author history, the report), taking
 *   and escalating items, the reason templates in force and the review-time metrics.
 * - Decisions on mods and versions (held files are published from R2 `quarantine/` on approval,
 *   so the module needs R2; without it approving a held file answers 503).
 * - Reports, hiding comments and reviews, users and sanctions, roles (👑), the verified creator
 *   flag, signing a user out, scan overrides and the audit log.
 *
 * The platform checks the contract's role; core re-checks it against the account row and
 * requires a session younger than 12 h (`REAUTH_REQUIRED`). Every write lands in `AuditLog`.
 */
import { moderationEndpoints } from '@sotf/contracts/moderation';
import { listAudit } from '@sotf/core/audit/index';
import {
  assignQueueItem,
  decideMod,
  decideVersion,
  escalateQueueItem,
  getQueue,
  getQueueItem,
  listModerationTemplates,
  type ModerationDeps,
  reviewMetrics,
  setCommentHidden,
  setCommentsLocked,
  setReviewHidden,
} from '@sotf/core/moderation/index';
import { listReports, resolveReport } from '@sotf/core/reports/index';
import {
  createSanction,
  getRangerUser,
  revokeSanction,
  revokeUserSessionsByStaff,
  searchRangerUsers,
  setUserRole,
  setVerifiedCreator,
} from '@sotf/core/sanctions/index';
import { overrideScan } from '@sotf/core/security-scan/index';
import { createStorage, type ObjectStorage, storageConfigFromEnv } from '@sotf/core/storage/index';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'ranger',
  register(m) {
    const storageConfig = storageConfigFromEnv(m.platform.env);
    const storage: ObjectStorage | null = storageConfig ? createStorage(storageConfig) : null;
    m.app.addHook('onClose', async () => storage?.destroy());
    const config = catalogConfigOf(m.platform.env);
    const deps: ModerationDeps = { config, storage };

    // Queue.
    m.implement(moderationEndpoints.queue, async ({ query, ctx }) =>
      getQueue(ctx, deps, { lane: query.lane, cursor: query.cursor, limit: query.limit }),
    );
    m.implement(moderationEndpoints.item, async ({ params, ctx }) => getQueueItem(ctx, deps, params.id));
    m.implement(moderationEndpoints.assignItem, async ({ params, body, ctx }) =>
      assignQueueItem(ctx, deps, params.id, body),
    );
    m.implement(moderationEndpoints.escalateItem, async ({ params, body, ctx }) =>
      escalateQueueItem(ctx, deps, params.id, body),
    );
    m.implement(moderationEndpoints.templates, async ({ ctx }) => listModerationTemplates(ctx));
    m.implement(moderationEndpoints.metrics, async ({ query, ctx }) => reviewMetrics(ctx, { days: query.days }));

    // Decisions.
    m.implement(moderationEndpoints.decideMod, async ({ params, body, ctx }) => decideMod(ctx, deps, params.id, body));
    m.implement(moderationEndpoints.decideVersion, async ({ params, body, ctx }) =>
      decideVersion(ctx, deps, params.id, body),
    );

    // Reports.
    m.implement(moderationEndpoints.reports, async ({ query, ctx }) =>
      listReports(ctx, config, { status: query.status, cursor: query.cursor, limit: query.limit }),
    );
    m.implement(moderationEndpoints.resolveReport, async ({ params, body, ctx }) =>
      resolveReport(ctx, config, params.id, body),
    );

    // Community content.
    m.implement(moderationEndpoints.hideComment, async ({ params, body, ctx }) =>
      setCommentHidden(ctx, deps, params.id, true, body.reason),
    );
    m.implement(moderationEndpoints.unhideComment, async ({ params, ctx }) =>
      setCommentHidden(ctx, deps, params.id, false, null),
    );
    m.implement(moderationEndpoints.hideReview, async ({ params, body, ctx }) =>
      setReviewHidden(ctx, deps, params.id, true, body.reason),
    );
    m.implement(moderationEndpoints.unhideReview, async ({ params, ctx }) =>
      setReviewHidden(ctx, deps, params.id, false, null),
    );
    m.implement(moderationEndpoints.lockComments, async ({ params, body, ctx }) =>
      setCommentsLocked(ctx, params.id, body.locked, body.reason ?? null),
    );

    // Users and sanctions.
    m.implement(moderationEndpoints.users, async ({ query, ctx }) =>
      searchRangerUsers(ctx, config, { q: query.q, page: query.page, pageSize: query.pageSize }),
    );
    m.implement(moderationEndpoints.user, async ({ params, ctx }) => getRangerUser(ctx, config, params.id));
    m.implement(moderationEndpoints.sanction, async ({ params, body, ctx, reply }) => {
      const sanction = await createSanction(ctx, config, params.id, body);
      reply.header('location', `/api/v2/ranger/users/${params.id}`);
      return sanction;
    });
    m.implement(moderationEndpoints.revokeSanction, async ({ params, ctx }) => revokeSanction(ctx, config, params.id));
    m.implement(moderationEndpoints.setRole, async ({ params, body, ctx }) =>
      setUserRole(ctx, config, params.id, body),
    );
    m.implement(moderationEndpoints.setVerifiedCreator, async ({ params, body, ctx }) =>
      setVerifiedCreator(ctx, config, params.id, body),
    );
    m.implement(moderationEndpoints.revokeSessions, async ({ params, ctx }) =>
      revokeUserSessionsByStaff(ctx, params.id),
    );

    // Scans and audit.
    m.implement(moderationEndpoints.overrideScan, async ({ params, body, ctx }) => overrideScan(ctx, params.id, body));
    m.implement(moderationEndpoints.audit, async ({ query, ctx }) =>
      listAudit(ctx, config, {
        cursor: query.cursor,
        limit: query.limit,
        actor: query.actor,
        action: query.action,
        target: query.target,
      }),
    );
  },
});
