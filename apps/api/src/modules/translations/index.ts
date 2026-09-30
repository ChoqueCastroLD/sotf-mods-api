/**
 * Translations module (T1-25): the public translated short description of a mod
 * (`GET /api/v2/mods/:id/translation`) and the author's overrides in Basecamp
 * (`/api/v2/studio/mods/:id/translations`). The automatic translation itself runs in the worker
 * (`translation.mod`); rules live in `@sotf/core/translations`.
 */
import { translationsEndpoints } from '@sotf/contracts/translations';
import {
  getModTranslation,
  listStudioTranslations,
  putStudioTranslation,
  revertStudioTranslation,
} from '@sotf/core/translations/index';
import { defineModule } from '../../lib/define-module.ts';

export default defineModule({
  name: 'translations',
  register(m) {
    // Authors can always write their own text; `enabled` tells the editor whether the server also
    // translates automatically (an OpenAI key is configured).
    const automatic = Boolean(m.platform.env.OPENAI_API_KEY);

    m.implement(translationsEndpoints.forMod, async ({ params, query, ctx, cache }) => {
      cache({ id: params.id });
      return getModTranslation(ctx, params.id, query.locale);
    });

    m.implement(translationsEndpoints.studioList, async ({ params, ctx }) =>
      listStudioTranslations(ctx, params.id, automatic),
    );

    m.implement(translationsEndpoints.studioPut, async ({ params, body, ctx }) =>
      putStudioTranslation(ctx, params.id, params.locale, body.shortDescription),
    );

    m.implement(translationsEndpoints.studioRevert, async ({ params, ctx }) =>
      revertStudioTranslation(ctx, params.id, params.locale),
    );
  },
});
