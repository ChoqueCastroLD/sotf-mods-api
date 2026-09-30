/**
 * The signed-in user (PLAN §5.2 "Cuenta", T0-13, T0-14, T0-15). Implemented by WP-30 (+ WP-81 UI).
 * Every response is `private, no-store`.
 */
import { z } from 'zod';
import { SelfUserDTO } from './auth.ts';
import { cache } from './cache.ts';
import { ModCardDTO, UserPublicDTO } from './catalog.ts';
import {
  Count,
  CurrentPassword,
  DisplayName,
  Email,
  EntityId,
  HttpUrl,
  IsoDateTime,
  LinkKind,
  Locale,
  ModLicense,
  NewPassword,
  Uuid,
  VersionString,
} from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { OnboardingDTO } from './gamification.ts';
import { KitCardDTO } from './kits.ts';

/** Permission keys computed by core `can()` for the UI (the server always re-checks). */
export const PERMISSIONS = [
  'mod.publish',
  'mod.publish_without_review',
  'comment.write',
  'review.write',
  'compat.report',
  'kit.write',
  'moderation.queue',
  'moderation.decide',
  'moderation.reports',
  'moderation.hide_content',
  'moderation.sanction',
  'moderation.verified_creator',
  'moderation.audit',
  'admin.roles',
  'admin.settings',
  'admin.taxonomy',
  'admin.game_builds',
  'admin.awards',
  'admin.announcements',
  'admin.kelvinseek',
  'admin.rum',
] as const;
export const Permission = z.enum(PERMISSIONS);
export type Permission = z.infer<typeof Permission>;

export const THEMES = ['system', 'dark', 'light'] as const;

/** Canned replies of creators (Basecamp inbox, PLAN §7.5): ≤ 10, name ≤ 40, text ≤ 1000. */
export const REPLY_TEMPLATE_LIMITS = { max: 10, nameMax: 40, textMax: 1000 } as const;
export const ReplyTemplate = z.object({
  name: z.string().trim().min(1).max(REPLY_TEMPLATE_LIMITS.nameMax),
  text: z.string().trim().min(1).max(REPLY_TEMPLATE_LIMITS.textMax),
});

export const UserSettingsDTO = dto(
  'UserSettingsDTO',
  z.object({
    locale: Locale.nullable(),
    theme: z.enum(THEMES),
    density: z.enum(['comfortable', 'compact']),
    reducedMotion: z.boolean().nullable().describe('null = follow the OS'),
    nsfwOptIn: z.boolean(),
    nsfwConfirmedAt: IsoDateTime.nullable(),
    downloadHistory: z.boolean(),
    compatPrompts: z.boolean().describe('Offer "Did it work?" after downloads'),
    numberFormat: z.enum(['compact', 'full']),
    keyboardShortcuts: z.boolean(),
    defaultLicense: ModLicense.nullable().describe('Creator default: preselected licence of new mods'),
    replyTemplates: z.array(ReplyTemplate).max(REPLY_TEMPLATE_LIMITS.max).describe('Creator canned replies'),
  }),
  {
    description: 'UI and privacy-light preferences (`User.settings`).',
    examples: [
      {
        locale: 'es',
        theme: 'system',
        density: 'comfortable',
        reducedMotion: null,
        nsfwOptIn: false,
        nsfwConfirmedAt: null,
        downloadHistory: true,
        compatPrompts: true,
        numberFormat: 'compact',
        keyboardShortcuts: true,
        defaultLicense: 'reupload-with-credit',
        replyTemplates: [{ name: 'Logs', text: 'Could you share your RedLoader log? It is in _RedLoader/Logs.' }],
      },
    ],
  },
);
export type UserSettingsDTO = z.infer<typeof UserSettingsDTO>;

export const UserPrivacyDTO = dto(
  'UserPrivacyDTO',
  z.object({
    hideActivity: z.boolean(),
    hideRank: z.boolean(),
    hideFromLeaderboards: z.boolean(),
    hideKits: z.boolean(),
  }),
  {
    description: 'Visibility settings (`User.privacy`).',
    examples: [{ hideActivity: false, hideRank: false, hideFromLeaderboards: false, hideKits: false }],
  },
);

export const MeDTO = dto(
  'MeDTO',
  z.object({
    user: SelfUserDTO,
    permissions: z.array(Permission),
    settings: UserSettingsDTO,
    privacy: UserPrivacyDTO,
    unreadNotifications: Count,
    flags: z.object({
      hasMods: z.boolean(),
      onboardingPending: z.boolean(),
      mustVerifyEmail: z.boolean().describe('Write actions need a verified email'),
    }),
  }),
  {
    description: 'Signed-in user with permissions, settings and counters.',
    examples: [
      {
        user: exampleOf(SelfUserDTO),
        permissions: [
          'mod.publish',
          'mod.publish_without_review',
          'comment.write',
          'review.write',
          'compat.report',
          'kit.write',
        ],
        settings: exampleOf(UserSettingsDTO),
        privacy: exampleOf(UserPrivacyDTO),
        unreadNotifications: 3,
        flags: { hasMods: true, onboardingPending: false, mustVerifyEmail: false },
      },
    ],
  },
);
export type MeDTO = z.infer<typeof MeDTO>;

export const MeSummaryDTO = dto(
  'MeSummaryDTO',
  z.object({
    id: EntityId,
    handle: z.string(),
    displayName: z.string(),
    avatarUrl: HttpUrl.nullable(),
    role: SelfUserDTO.shape.role,
    emailVerified: z.boolean(),
    unreadNotifications: Count,
  }),
  {
    description: 'Lightweight header data (called only when the `sotf_li` hint cookie exists).',
    examples: [
      {
        id: 12,
        handle: 'imaxel',
        displayName: 'ImAxel',
        avatarUrl: null,
        role: 'user',
        emailVerified: true,
        unreadNotifications: 3,
      },
    ],
  },
);

export const MeHomeDTO = dto(
  'MeHomeDTO',
  z.object({
    updates: z.array(z.object({ mod: ModCardDTO, fromVersion: VersionString.nullable(), toVersion: VersionString })),
    updatesCount: Count,
    onboarding: OnboardingDTO.nullable().describe('null once completed or dismissed'),
    recentKits: z.array(KitCardDTO),
  }),
  {
    description: 'Personal block of the landing (loaded by an island; the HTML stays identical for everyone).',
    examples: [
      {
        updates: [{ mod: exampleOf(ModCardDTO), fromVersion: '1.3.7', toVersion: '1.3.8' }],
        updatesCount: 1,
        onboarding: exampleOf(OnboardingDTO),
        recentKits: [exampleOf(KitCardDTO)],
      },
    ],
  },
);

export const SelfProfileDTO = dto('SelfProfileDTO', UserPublicDTO.extend({ bioMd: z.string().nullable() }), {
  description: 'Own profile with the markdown source of the bio.',
  examples: [{ ...exampleOf(UserPublicDTO), bioMd: 'Modding SOTF since 2023.' }],
});

export const PROFILE_LIMITS = { bioMax: 500, linksMax: 7, pinnedMax: 3 } as const;

export const UpdateProfileBody = dto(
  'UpdateProfileBody',
  z.strictObject({
    displayName: DisplayName.optional(),
    bioMd: z.string().max(PROFILE_LIMITS.bioMax).nullable().optional(),
    links: z
      .array(z.strictObject({ kind: LinkKind, url: HttpUrl, label: z.string().trim().max(60).nullable().optional() }))
      .max(PROFILE_LIMITS.linksMax)
      .optional(),
    avatarUploadId: Uuid.nullable().optional().describe('null removes the avatar'),
    bannerUploadId: Uuid.nullable().optional().describe('null returns to the generated banner'),
    bannerSeed: z.number().int().min(0).max(2_147_483_647).nullable().optional(),
    pinnedModIds: z.array(EntityId).max(PROFILE_LIMITS.pinnedMax).optional(),
  }),
  {
    description: 'Edit the public profile.',
    examples: [{ displayName: 'ImAxel', bioMd: 'Modding **SOTF** since 2023.', pinnedModIds: [20, 31] }],
  },
);

export const UpdateSettingsBody = dto(
  'UpdateSettingsBody',
  z
    .strictObject({
      locale: Locale.nullable().optional(),
      theme: z.enum(THEMES).optional(),
      density: z.enum(['comfortable', 'compact']).optional(),
      reducedMotion: z.boolean().nullable().optional(),
      nsfwOptIn: z.boolean().optional(),
      confirmAdult: z.literal(true).optional().describe('Required when turning `nsfwOptIn` on'),
      downloadHistory: z.boolean().optional(),
      compatPrompts: z.boolean().optional(),
      numberFormat: z.enum(['compact', 'full']).optional(),
      keyboardShortcuts: z.boolean().optional(),
      defaultLicense: ModLicense.nullable().optional(),
      replyTemplates: z.array(ReplyTemplate).max(REPLY_TEMPLATE_LIMITS.max).optional().describe('Replaces the list'),
    })
    .refine((body) => body.nsfwOptIn !== true || body.confirmAdult === true, {
      message: 'confirm you are an adult to enable NSFW content',
      path: ['confirmAdult'],
    }),
  { description: 'Edit preferences.', examples: [{ theme: 'dark', nsfwOptIn: true, confirmAdult: true }] },
);

export const UpdatePrivacyBody = dto(
  'UpdatePrivacyBody',
  z.strictObject({
    hideActivity: z.boolean().optional(),
    hideRank: z.boolean().optional(),
    hideFromLeaderboards: z.boolean().optional(),
    hideKits: z.boolean().optional(),
  }),
  { description: 'Edit privacy settings.', examples: [{ hideActivity: true }] },
);

export const ChangeEmailBody = dto('ChangeEmailBody', z.strictObject({ newEmail: Email, password: CurrentPassword }), {
  description: 'Change the email: the new address confirms, the old one is warned.',
  examples: [{ newEmail: 'new-address@example.test', password: 'correct horse battery staple' }],
});

export const ChangePasswordBody = dto(
  'ChangePasswordBody',
  z.strictObject({ current: CurrentPassword, next: NewPassword, revokeOthers: z.boolean().default(true) }),
  {
    description: 'Change the password (other sessions are revoked by default).',
    examples: [{ current: 'correct horse battery staple', next: 'an-even-longer-passphrase', revokeOthers: true }],
  },
);

export const SessionDTO = dto(
  'SessionDTO',
  z.object({
    id: Uuid,
    current: z.boolean(),
    deviceLabel: z.string().nullable().describe('e.g. "Firefox on Windows"'),
    country: z.string().length(2).nullable(),
    createdAt: IsoDateTime,
    lastSeenAt: IsoDateTime,
    expiresAt: IsoDateTime,
  }),
  {
    description: 'An active session.',
    examples: [
      {
        id: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
        current: true,
        deviceLabel: 'Firefox on Windows',
        country: 'ES',
        createdAt: '2026-09-20T10:00:00.000Z',
        lastSeenAt: '2026-09-29T09:30:00.000Z',
        expiresAt: '2026-10-29T09:30:00.000Z',
      },
    ],
  },
);

export const SessionListDTO = dto('SessionListDTO', z.object({ items: z.array(SessionDTO) }), {
  description: 'Active sessions of the signed-in user.',
  examples: [{ items: [exampleOf(SessionDTO)] }],
});

export const DataExportDTO = dto(
  'DataExportDTO',
  z.object({
    id: Uuid,
    status: z.enum(['queued', 'running', 'ready', 'failed', 'expired']),
    createdAt: IsoDateTime,
    expiresAt: IsoDateTime.nullable(),
    downloadUrl: HttpUrl.nullable().describe('Presigned GET (valid 24 h) once ready; also emailed'),
  }),
  {
    description: 'Asynchronous export of the personal data (ZIP of JSON files).',
    examples: [
      {
        id: '0192f3a6-2c3d-7e4f-9a51-6b7c8d9e0f1a',
        status: 'queued',
        createdAt: '2026-09-29T10:00:00.000Z',
        expiresAt: null,
        downloadUrl: null,
      },
    ],
  },
);

export const DELETION_MODES = ['archive_mods', 'keep_mods_anonymous'] as const;

export const RequestDeletionBody = dto(
  'RequestDeletionBody',
  z.strictObject({ password: CurrentPassword, mode: z.enum(DELETION_MODES).default('archive_mods') }),
  {
    description: 'Schedule the account deletion (14-day grace period).',
    examples: [{ password: 'correct horse battery staple', mode: 'archive_mods' }],
  },
);

export const AccountDeletionDTO = dto(
  'AccountDeletionDTO',
  z.object({ requestedAt: IsoDateTime, executeAfter: IsoDateTime, mode: z.enum(DELETION_MODES) }),
  {
    description: 'Scheduled account deletion.',
    examples: [
      { requestedAt: '2026-09-29T10:00:00.000Z', executeAfter: '2026-10-13T10:00:00.000Z', mode: 'archive_mods' },
    ],
  },
);

const base = `${API_V2_PREFIX}/me`;

export const meEndpoints = {
  get: defineEndpoint({
    id: 'me.get',
    owner: 'WP-30',
    method: 'GET',
    path: base,
    summary: 'Signed-in user, permissions, settings and counters',
    auth: 'session',
    response: MeDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  summary: defineEndpoint({
    id: 'me.summary',
    owner: 'WP-30',
    method: 'GET',
    path: `${base}/summary`,
    summary: 'Lightweight header data',
    auth: 'session',
    response: MeSummaryDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  home: defineEndpoint({
    id: 'me.home',
    owner: 'WP-30',
    method: 'GET',
    path: `${base}/home`,
    summary: 'Personal block of the landing (updates, Day 1 checklist, kits)',
    auth: 'session',
    response: MeHomeDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  getProfile: defineEndpoint({
    id: 'me.getProfile',
    owner: 'WP-30',
    method: 'GET',
    path: `${base}/profile`,
    summary: 'Own public profile with the Markdown source of the bio',
    auth: 'session',
    response: SelfProfileDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  updateProfile: defineEndpoint({
    id: 'me.updateProfile',
    owner: 'WP-30',
    method: 'PATCH',
    path: `${base}/profile`,
    summary: 'Edit the public profile',
    auth: 'session',
    body: UpdateProfileBody,
    response: SelfProfileDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  updateSettings: defineEndpoint({
    id: 'me.updateSettings',
    owner: 'WP-30',
    method: 'PATCH',
    path: `${base}/settings`,
    summary: 'Edit preferences',
    auth: 'session',
    body: UpdateSettingsBody,
    response: UserSettingsDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  updatePrivacy: defineEndpoint({
    id: 'me.updatePrivacy',
    owner: 'WP-30',
    method: 'PATCH',
    path: `${base}/privacy`,
    summary: 'Edit privacy settings',
    auth: 'session',
    body: UpdatePrivacyBody,
    response: UserPrivacyDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  changeEmail: defineEndpoint({
    id: 'me.changeEmail',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/email`,
    summary: 'Change the email address (confirmation required)',
    auth: 'session',
    requires: ['password_confirmation'],
    body: ChangeEmailBody,
    status: 202,
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'emailResend',
  }),
  changePassword: defineEndpoint({
    id: 'me.changePassword',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/password`,
    summary: 'Change the password',
    auth: 'session',
    requires: ['password_confirmation'],
    body: ChangePasswordBody,
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS'],
    cache: cache.noStore,
    rateLimit: 'login',
  }),
  sessions: defineEndpoint({
    id: 'me.sessions',
    owner: 'WP-30',
    method: 'GET',
    path: `${base}/sessions`,
    summary: 'Active sessions',
    auth: 'session',
    response: SessionListDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  revokeSession: defineEndpoint({
    id: 'me.revokeSession',
    owner: 'WP-30',
    method: 'DELETE',
    path: `${base}/sessions/:id`,
    summary: 'Revoke one session',
    auth: 'session',
    params: z.object({ id: Uuid }),
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'NOT_FOUND'],
    cache: cache.noStore,
  }),
  revokeOtherSessions: defineEndpoint({
    id: 'me.revokeOtherSessions',
    owner: 'WP-30',
    method: 'DELETE',
    path: `${base}/sessions`,
    summary: 'Revoke every other session',
    auth: 'session',
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
  requestExport: defineEndpoint({
    id: 'me.requestExport',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/export`,
    summary: 'Export my data (asynchronous; link by email)',
    auth: 'session',
    status: 202,
    response: DataExportDTO,
    errors: ['UNAUTHENTICATED', 'RATE_LIMITED'],
    cache: cache.noStore,
  }),
  getExport: defineEndpoint({
    id: 'me.getExport',
    owner: 'WP-30',
    method: 'GET',
    path: `${base}/exports/:id`,
    summary: 'Export status',
    auth: 'session',
    params: z.object({ id: Uuid }),
    response: DataExportDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND'],
    cache: cache.private,
  }),
  requestDeletion: defineEndpoint({
    id: 'me.requestDeletion',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/delete`,
    summary: 'Delete my account (14-day grace period)',
    auth: 'session',
    requires: ['password_confirmation'],
    body: RequestDeletionBody,
    status: 202,
    response: AccountDeletionDTO,
    errors: ['UNAUTHENTICATED', 'INVALID_CREDENTIALS', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'login',
  }),
  cancelDeletion: defineEndpoint({
    id: 'me.cancelDeletion',
    owner: 'WP-30',
    method: 'POST',
    path: `${base}/delete/cancel`,
    summary: 'Cancel a scheduled deletion',
    auth: 'session',
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'NOT_FOUND'],
    cache: cache.noStore,
  }),
} as const;
