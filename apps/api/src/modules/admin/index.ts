/**
 * Admin module (WP-51, PLAN §5.2 "Moderación y administración", §7.4 "Admin"): `/api/v2/admin/*`
 * except game builds and the ecosystem (WP-50, `ecosystem` module) and announcements
 * (`announcements` module).
 *
 * - Taxonomy: categories (create, replace, retire) and tags (create, replace, delete) plus the
 *   bulk recategorisation with keyword-rule suggestions (`dryRun` by default).
 * - Awards (Mod of the Week overrides, staff picks, Build/Mod of the Month).
 * - Site settings (`GET|PUT /admin/settings/:key`, validated per key).
 * - KelvinSeek usage and budget, RUM p75 per template and country.
 *
 * Every endpoint is 👑 with a session younger than 12 h (checked in core); writes are audited.
 */
import { adminEndpoints } from '@sotf/contracts/admin';
import {
  createAward,
  createCategory,
  createTag,
  deleteAward,
  deleteTag,
  getAdminRum,
  getKelvinSeekUsage,
  listAdminCategories,
  listAdminTags,
  listAwards,
  recategorize,
  retireCategory,
  updateCategory,
  updateTag,
} from '@sotf/core/admin/index';
import type { KelvinSeekConfig } from '@sotf/core/kelvinseek/index';
import { getSiteSetting, putSiteSetting, type SettingDefaults } from '@sotf/core/settings/index';
import { KELVINSEEK_TIMEOUT_MS } from '../../legacy/kelvinseek.ts';
import { defineModule } from '../../lib/define-module.ts';
import { catalogConfigOf } from '../catalog/index.ts';

export default defineModule({
  name: 'admin',
  register(m) {
    const env = m.platform.env;
    const config = catalogConfigOf(env);
    const kelvinseek: KelvinSeekConfig = {
      enabled: true,
      model: env.KELVINSEEK_MODEL,
      dailyBudgetUsd: env.KELVINSEEK_DAILY_BUDGET_USD,
      timeoutMs: KELVINSEEK_TIMEOUT_MS,
    };
    const settingDefaults: SettingDefaults = { kelvinseek };

    // Categories.
    m.implement(adminEndpoints.listCategories, async ({ ctx }) => listAdminCategories(ctx));
    m.implement(adminEndpoints.createCategory, async ({ body, ctx, reply }) => {
      const created = await createCategory(ctx, body);
      reply.header('location', `/api/v2/admin/categories/${created.id}`);
      return created;
    });
    m.implement(adminEndpoints.updateCategory, async ({ params, body, ctx }) => updateCategory(ctx, params.id, body));
    m.implement(adminEndpoints.retireCategory, async ({ params, ctx }) => {
      await retireCategory(ctx, params.id);
    });

    // Tags.
    m.implement(adminEndpoints.listTags, async ({ ctx }) => listAdminTags(ctx));
    m.implement(adminEndpoints.createTag, async ({ body, ctx, reply }) => {
      const created = await createTag(ctx, body);
      reply.header('location', `/api/v2/admin/tags/${created.id}`);
      return created;
    });
    m.implement(adminEndpoints.updateTag, async ({ params, body, ctx }) => updateTag(ctx, params.id, body));
    m.implement(adminEndpoints.deleteTag, async ({ params, ctx }) => {
      await deleteTag(ctx, params.id);
    });

    // Bulk recategorisation.
    m.implement(adminEndpoints.recategorize, async ({ body, ctx }) => recategorize(ctx, config, body), {
      bodyLimit: 512 * 1024,
    });

    // Awards.
    m.implement(adminEndpoints.listAwards, async ({ ctx }) => listAwards(ctx, config));
    m.implement(adminEndpoints.createAward, async ({ body, ctx }) => createAward(ctx, config, body));
    m.implement(adminEndpoints.deleteAward, async ({ params, ctx }) => {
      await deleteAward(ctx, params.id);
    });

    // Settings.
    m.implement(adminEndpoints.getSetting, async ({ params, ctx }) => getSiteSetting(ctx, settingDefaults, params.key));
    m.implement(adminEndpoints.putSetting, async ({ params, body, ctx }) =>
      putSiteSetting(ctx, params.key, body.value),
    );

    // Dashboards.
    m.implement(adminEndpoints.kelvinseekUsage, async ({ query, ctx }) =>
      getKelvinSeekUsage(ctx, kelvinseek, Number(query.days) as 7 | 30 | 90),
    );
    m.implement(adminEndpoints.rum, async ({ query, ctx }) => getAdminRum(ctx, query.range));
  },
});
