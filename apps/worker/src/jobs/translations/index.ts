/**
 * Translation jobs (T1-25, PLAN §7.13): automatic translation of the mod name, short description and
 * full description into the 12 non-English locales with the configured model.
 *
 * - `translation.mod`: translates the missing or stale locales of one published mod (one model call,
 *   cached by the hash of the original, never over an author's text, charged to the daily budget).
 * - `translation-on-event`: a mod published, or whose short description / language changed, queues
 *   `translation.mod` (edits in quick succession coalesce: one pending job per mod).
 * - `translation.sweep` (every 30 min): queues mods that still lack translations (older mods, runs
 *   that failed or hit the budget); a no-op without `OPENAI_API_KEY` or once the budget is spent.
 */
import { openAiModel } from '@sotf/core/kelvinseek/index';
import {
  DEFAULT_TRANSLATION_TIMEOUT_MS,
  queueModTranslation,
  sweepTranslations,
  translateMod,
} from '@sotf/core/translations/index';
import { defineJob, defineJobGroup, onEvent } from '../../define-job.ts';
import type { WorkerEnv } from '../../env.ts';

function translationDeps(env: WorkerEnv) {
  return {
    model: env.OPENAI_API_KEY
      ? openAiModel({ apiKey: env.OPENAI_API_KEY, baseUrl: env.LLM_BASE_URL || undefined })
      : null,
    config: {
      model: env.TRANSLATION_MODEL,
      dailyBudgetUsd: env.TRANSLATION_DAILY_BUDGET_USD,
      timeoutMs: DEFAULT_TRANSLATION_TIMEOUT_MS,
    },
  };
}

export default defineJobGroup({
  name: 'translations',
  jobs: [
    defineJob({
      queue: 'translation.mod',
      options: { localConcurrency: 1 },
      handler: async ({ modId, locales }, { ctx, services }) =>
        translateMod(ctx, translationDeps(services.env), { modId, locales }),
    }),
    defineJob({
      queue: 'translation.sweep',
      handler: async ({ batchSize }, { ctx, services }) => {
        const result = await sweepTranslations(ctx, translationDeps(services.env), batchSize);
        ctx.log.info(result, 'translation sweep done');
        return result;
      },
    }),
  ],
  subscribers: [
    onEvent({
      name: 'translation-on-event',
      types: ['mod.published', 'mod.updated'],
      handler: async (event, { ctx }) => {
        if (
          event.type === 'mod.updated' &&
          !event.payload.fields.some(
            (f) => f === 'name' || f === 'shortDescription' || f === 'descriptionMd' || f === 'contentLang',
          )
        ) {
          return;
        }
        await queueModTranslation(ctx, event.payload.modId);
      },
    }),
  ],
});
