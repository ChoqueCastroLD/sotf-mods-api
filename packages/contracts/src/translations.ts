/**
 * Automatic translation of the mod short description (PLAN §7.13 T1-25).
 *
 * The `translation.mod` job translates the English `shortDescription` into the 12 non-English
 * locales when a mod is published or its short description changes. Authors may replace any
 * machine translation in Basecamp (`source: 'author'`: never overwritten by the job). The public
 * page shows the visitor's locale with a «translated» note and a toggle to the original.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { IdParam, Locale } from './common.ts';
import { dto } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

/** Locales the job translates into (every URL locale but English). */
export const TRANSLATION_LOCALES = ['es', 'de', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh', 'ja'] as const;
export const TranslationLocale = z.enum(TRANSLATION_LOCALES);
export type TranslationLocale = z.infer<typeof TranslationLocale>;

export const TRANSLATION_LIMITS = { shortDescriptionMax: 200 } as const;

export const TranslationSource = z.enum(['machine', 'author']);
export type TranslationSource = z.infer<typeof TranslationSource>;

export const ModTranslationDTO = dto(
  'ModTranslationDTO',
  z.object({
    translation: z
      .object({
        locale: TranslationLocale,
        shortDescription: z.string(),
        source: TranslationSource,
      })
      .nullable()
      .describe('Null when the mod has no translation for the locale (show the original)'),
  }),
  {
    description: 'Translated short description of a mod in one locale (null when there is none).',
    examples: [
      {
        translation: {
          locale: 'es',
          shortDescription: 'Un menú en el juego con noclip, modo dios y generadores.',
          source: 'machine',
        },
      },
      { translation: null },
    ],
  },
);
export type ModTranslationDTO = z.infer<typeof ModTranslationDTO>;

export const StudioTranslationItemDTO = dto(
  'StudioTranslationItemDTO',
  z.object({
    locale: TranslationLocale,
    shortDescription: z.string().nullable().describe('Null until the job has translated this locale'),
    source: TranslationSource.nullable(),
    stale: z.boolean().describe('A machine translation of an older original (it will be redone)'),
  }),
  {
    description: 'One locale of the translations of a mod, as the author sees it.',
    examples: [{ locale: 'de', shortDescription: 'Ein Spielmenü mit Noclip.', source: 'machine', stale: false }],
  },
);
export type StudioTranslationItemDTO = z.infer<typeof StudioTranslationItemDTO>;

export const StudioTranslationsDTO = dto(
  'StudioTranslationsDTO',
  z.object({
    original: z.string(),
    sourceLocale: z.string().describe('Language of the original text (`contentLang`, `en` by default)'),
    enabled: z.boolean().describe('False when the server has no translation model configured'),
    items: z.array(StudioTranslationItemDTO),
  }),
  {
    description: 'Translations of the short description of one of the author’s mods.',
    examples: [
      {
        original: 'In-game menu with noclip, god mode and spawners.',
        sourceLocale: 'en',
        enabled: true,
        items: [{ locale: 'de', shortDescription: 'Ein Spielmenü mit Noclip.', source: 'machine', stale: false }],
      },
    ],
  },
);
export type StudioTranslationsDTO = z.infer<typeof StudioTranslationsDTO>;

export const PutTranslationBody = dto(
  'PutTranslationBody',
  z.strictObject({ shortDescription: z.string().trim().min(1).max(TRANSLATION_LIMITS.shortDescriptionMax) }),
  {
    description: 'Replace the machine translation of one locale with the author’s own text.',
    examples: [{ shortDescription: 'Un menú en el juego con noclip y modo dios.' }],
  },
);
export type PutTranslationBody = z.infer<typeof PutTranslationBody>;

const studio = `${API_V2_PREFIX}/studio`;
const ModParams = z.object({ id: IdParam });
const ModLocaleParams = z.object({ id: IdParam, locale: TranslationLocale });

export const translationsEndpoints = {
  forMod: defineEndpoint({
    id: 'translations.forMod',
    owner: 'WP-40',
    method: 'GET',
    path: `${API_V2_PREFIX}/mods/:id/translation`,
    summary: 'Translated short description of a mod',
    auth: 'public',
    params: ModParams,
    query: z.object({ locale: Locale }),
    response: ModTranslationDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['mod:{id}'], 900),
    rateLimit: 'anonymousRead',
  }),
  studioList: defineEndpoint({
    id: 'translations.studioList',
    owner: 'WP-40',
    method: 'GET',
    path: `${studio}/mods/:id/translations`,
    summary: 'Translations of the short description (author view)',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModParams,
    response: StudioTranslationsDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.private,
  }),
  studioPut: defineEndpoint({
    id: 'translations.studioPut',
    owner: 'WP-40',
    method: 'PUT',
    path: `${studio}/mods/:id/translations/:locale`,
    summary: 'Replace a translation with the author’s text',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModLocaleParams,
    body: PutTranslationBody,
    response: StudioTranslationItemDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  studioRevert: defineEndpoint({
    id: 'translations.studioRevert',
    owner: 'WP-40',
    method: 'DELETE',
    path: `${studio}/mods/:id/translations/:locale`,
    summary: 'Drop the author’s text and translate again',
    description: 'Removes the stored translation of the locale and queues the automatic translation.',
    auth: 'session',
    requires: ['mod_owner'],
    params: ModLocaleParams,
    response: StudioTranslationItemDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
} as const;
