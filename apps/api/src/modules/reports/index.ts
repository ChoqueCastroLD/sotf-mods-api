/**
 * Reports module (WP-51, PLAN §5.2 "Comunidad", §7.4 "Reportes"): `POST /api/v2/reports`.
 * Members with a verified email report content to the rangers (contract bucket `reports`); ≥ 3
 * reporters with trust level ≥ 1 hide the target until a ranger reviews it. Rules in
 * `@sotf/core/reports`.
 */
import { moderationEndpoints } from '@sotf/contracts/moderation';
import { createReport } from '@sotf/core/reports/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'reports',
  register(m) {
    m.implement(moderationEndpoints.report, async ({ body, ctx }) => createReport(ctx, body));
  },
});
