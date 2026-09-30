/**
 * Automatic translation of a mod listing (PLAN §7.13 T1-25, extended: name, short description and
 * the full Markdown description).
 *
 * The `translation.mod` job translates the original text of a mod into the 12 non-English locales
 * when a mod is published or one of those fields changes. Authors may replace any machine
 * translation in Basecamp, field by field (`source: 'author'`: never overwritten by the job). The
 * public pages show the visitor's locale with the original title under the translated one and a
 * «Translated from … · Show original» toggle on the descriptions.
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

export const TRANSLATION_LIMITS = { nameMax: 120, shortDescriptionMax: 200, descriptionMax: 50_000 } as const;

/** The three translatable fields of a mod, in the order the editor lists them. */
export const TRANSLATION_FIELDS = ['name', 'shortDescription', 'description'] as const;
export const TranslationField = z.enum(TRANSLATION_FIELDS);
export type TranslationField = z.infer<typeof TranslationField>;

/** Most ids one batch lookup accepts (a page of cards is ≤ 50). */
export const TRANSLATION_BATCH_MAX = 100;

export const TranslationSource = z.enum(['machine', 'author']);
export type TranslationSource = z.infer<typeof TranslationSource>;

export const ModTranslationDTO = dto(
  'ModTranslationDTO',
  z.object({
    translation: z
      .object({
        locale: TranslationLocale,
        name: z.string().nullable().describe('Translated name (null: show the original name)'),
        shortDescription: z.string().nullable(),
        descriptionHtml: z
          .string()
          .nullable()
          .describe('Translated description rendered with the sanitised Markdown pipeline (null: show the original)'),
        source: TranslationSource.describe('Provenance of the short description (back-compat)'),
        sources: z
          .object({
            name: TranslationSource.nullable(),
            shortDescription: TranslationSource.nullable(),
            description: TranslationSource.nullable(),
          })
          .describe('Provenance of each field (null: no translation of that field)'),
      })
      .nullable()
      .describe('Null when the mod has no translation for the locale (show the original)'),
  }),
  {
    description: 'Translated name, short description and description of a mod in one locale (null when there is none).',
    examples: [
      {
        translation: {
          locale: 'es',
          name: 'Menú de mods de Axel',
          shortDescription: 'Un menú en el juego con noclip, modo dios y generadores.',
          descriptionHtml: '<h2 id="caracteristicas">Características</h2><ul><li>Noclip</li></ul>',
          source: 'machine',
          sources: { name: 'machine', shortDescription: 'machine', description: 'machine' },
        },
      },
      { translation: null },
    ],
  },
);
export type ModTranslationDTO = z.infer<typeof ModTranslationDTO>;

/** What a card needs: the translated name and short description of one mod (null: use the original). */
export const CardTranslationDTO = dto(
  'CardTranslationDTO',
  z.object({
    id: z.number().int().positive(),
    name: z.string().nullable(),
    shortDescription: z.string().nullable(),
  }),
  {
    description: 'Translated name and short description of one mod for the cards of a listing.',
    examples: [{ id: 20, name: 'Menú de mods de Axel', shortDescription: 'Un menú en el juego con noclip.' }],
  },
);
export type CardTranslationDTO = z.infer<typeof CardTranslationDTO>;

export const CardTranslationsDTO = dto(
  'CardTranslationsDTO',
  z.object({ locale: Locale, items: z.array(CardTranslationDTO) }),
  {
    description: 'Translations of the requested mods in a locale; mods without one are simply absent.',
    examples: [
      {
        locale: 'es',
        items: [{ id: 20, name: 'Menú de mods de Axel', shortDescription: 'Un menú en el juego con noclip.' }],
      },
    ],
  },
);
export type CardTranslationsDTO = z.infer<typeof CardTranslationsDTO>;

/** Translated fields attached to a card by the web before rendering (never stored in the catalog). */
export const CardLocalizedDTO = z.object({
  locale: Locale,
  name: z.string().nullable(),
  shortDescription: z.string().nullable(),
});
export type CardLocalizedDTO = z.infer<typeof CardLocalizedDTO>;

export const StudioTranslationFieldDTO = dto(
  'StudioTranslationFieldDTO',
  z.object({
    text: z.string().nullable().describe('Null until the job has translated this field'),
    source: TranslationSource.nullable(),
    stale: z.boolean().describe('A machine translation of an older original (it will be redone)'),
  }),
  {
    description: 'One translated field of one locale, as the author sees it.',
    examples: [{ text: 'Ein Spielmenü mit Noclip.', source: 'machine', stale: false }],
  },
);
export type StudioTranslationFieldDTO = z.infer<typeof StudioTranslationFieldDTO>;

export const StudioTranslationItemDTO = dto(
  'StudioTranslationItemDTO',
  z.object({
    locale: TranslationLocale,
    name: StudioTranslationFieldDTO,
    shortDescription: StudioTranslationFieldDTO,
    description: StudioTranslationFieldDTO,
  }),
  {
    description: 'One locale of the translations of a mod, as the author sees it.',
    examples: [
      {
        locale: 'de',
        name: { text: 'Axels Mod-Menü', source: 'machine', stale: false },
        shortDescription: { text: 'Ein Spielmenü mit Noclip.', source: 'machine', stale: false },
        description: { text: null, source: null, stale: false },
      },
    ],
  },
);
export type StudioTranslationItemDTO = z.infer<typeof StudioTranslationItemDTO>;

export const StudioTranslationsDTO = dto(
  'StudioTranslationsDTO',
  z.object({
    originals: z.object({ name: z.string(), shortDescription: z.string(), description: z.string() }),
    sourceLocale: z.string().describe('Language of the original text (`contentLang`, `en` by default)'),
    enabled: z.boolean().describe('False when the server has no translation model configured'),
    items: z.array(StudioTranslationItemDTO),
  }),
  {
    description: 'Translations of the name and descriptions of one of the author’s mods.',
    examples: [
      {
        originals: {
          name: "Axel's Mod Menu",
          shortDescription: 'In-game menu with noclip, god mode and spawners.',
          description: '## Features\n\n- Noclip',
        },
        sourceLocale: 'en',
        enabled: true,
        items: [
          {
            locale: 'de',
            name: { text: 'Axels Mod-Menü', source: 'machine', stale: false },
            shortDescription: { text: 'Ein Spielmenü mit Noclip.', source: 'machine', stale: false },
            description: { text: null, source: null, stale: false },
          },
        ],
      },
    ],
  },
);
export type StudioTranslationsDTO = z.infer<typeof StudioTranslationsDTO>;

/** `null` hands a field back to the automatic translation; a string is the author's own text. */
export const PutTranslationBody = dto(
  'PutTranslationBody',
  z
    .strictObject({
      name: z.string().trim().min(1).max(TRANSLATION_LIMITS.nameMax).nullable().optional(),
      shortDescription: z.string().trim().min(1).max(TRANSLATION_LIMITS.shortDescriptionMax).nullable().optional(),
      description: z.string().trim().min(1).max(TRANSLATION_LIMITS.descriptionMax).nullable().optional(),
    })
    .refine((body) => TRANSLATION_FIELDS.some((field) => body[field] !== undefined), {
      message: 'send at least one field',
    }),
  {
    description:
      'Replace the machine translation of the given fields of one locale with the author’s own text (`null` goes back to the automatic translation).',
    examples: [{ name: 'Menú de mods de Axel', shortDescription: 'Un menú en el juego con noclip y modo dios.' }],
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
    summary: 'Translated name, short description and description of a mod',
    auth: 'public',
    params: ModParams,
    query: z.object({ locale: Locale }),
    response: ModTranslationDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['mod:{id}'], 900),
    rateLimit: 'anonymousRead',
  }),
  forMods: defineEndpoint({
    id: 'translations.forMods',
    owner: 'WP-40',
    method: 'GET',
    path: `${API_V2_PREFIX}/translations/mods`,
    summary: 'Translated names and short descriptions of several mods (cards)',
    description: `Comma-separated ids (at most ${TRANSLATION_BATCH_MAX}). Only mods that have a translation in the locale are returned.`,
    auth: 'public',
    query: z.object({
      ids: z
        .string()
        .regex(/^[1-9]\d{0,15}(,[1-9]\d{0,15})*$/)
        .describe('Comma-separated mod ids'),
      locale: Locale,
    }),
    response: CardTranslationsDTO,
    cache: cache.publicApi(['locale:{locale}'], 300),
    rateLimit: 'anonymousRead',
  }),
  studioList: defineEndpoint({
    id: 'translations.studioList',
    owner: 'WP-40',
    method: 'GET',
    path: `${studio}/mods/:id/translations`,
    summary: 'Translations of the name and descriptions (author view)',
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
    summary: 'Replace translated fields with the author’s text',
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
