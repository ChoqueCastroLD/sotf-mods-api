/**
 * Ranger Station: moderation (PLAN §7.4, T0-21) and user reports. Implemented by WP-51
 * (+ WP-82 UI). Moderator and admin actions require a session created < 12 h ago.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { LocalizedNames } from './catalog.ts';
import {
  Count,
  EntityId,
  IdParam,
  ImageDTO,
  IsoDateTime,
  ModRefDTO,
  type ModStatus,
  Role,
  SitePath,
  UserRefDTO,
} from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { InspectionFlagDTO } from './manifest.ts';
import { CursorQuery, cursorPageOf, PageQuery, pageOf } from './pagination.ts';
import { UploadInspectionDTO } from './uploads.ts';
import { ScanSummaryDTO, ScanVerdict } from './versions.ts';

// -----------------------------------------------------------------------------------------------
// Status machine (PLAN §7.4 "Transiciones de estado")
// -----------------------------------------------------------------------------------------------

export type TransitionActor = 'author' | 'moderator' | 'admin';

/** Allowed status transitions and who may trigger them. Drafts → `pending` happen on submit. */
export const MOD_STATUS_TRANSITIONS: ReadonlyArray<{
  from: ModStatus;
  to: ModStatus;
  actors: readonly TransitionActor[];
}> = [
  { from: 'pending', to: 'published', actors: ['moderator', 'admin'] },
  { from: 'pending', to: 'rejected', actors: ['moderator', 'admin'] },
  { from: 'published', to: 'unlisted', actors: ['author', 'moderator', 'admin'] },
  { from: 'published', to: 'archived', actors: ['author', 'moderator', 'admin'] },
  { from: 'unlisted', to: 'published', actors: ['author', 'moderator', 'admin'] },
  { from: 'archived', to: 'published', actors: ['author', 'moderator', 'admin'] },
  { from: 'unlisted', to: 'archived', actors: ['author', 'moderator', 'admin'] },
  { from: 'published', to: 'removed', actors: ['moderator', 'admin'] },
  { from: 'unlisted', to: 'removed', actors: ['moderator', 'admin'] },
  { from: 'archived', to: 'removed', actors: ['moderator', 'admin'] },
  { from: 'rejected', to: 'pending', actors: ['author'] },
  { from: 'removed', to: 'published', actors: ['admin'] },
];

/** Whether `actor` may move a mod from `from` to `to`. */
export function canTransition(from: ModStatus, to: ModStatus, actor: TransitionActor): boolean {
  return MOD_STATUS_TRANSITIONS.some((t) => t.from === from && t.to === to && t.actors.includes(actor));
}

/** Statuses reachable from `from` by `actor`. */
export function allowedTransitions(from: ModStatus, actor: TransitionActor): ModStatus[] {
  return MOD_STATUS_TRANSITIONS.filter((t) => t.from === from && t.actors.includes(actor)).map((t) => t.to);
}

// -----------------------------------------------------------------------------------------------
// Reports (users → moderation)
// -----------------------------------------------------------------------------------------------

export const REPORT_TARGET_TYPES = ['mod', 'version', 'comment', 'review', 'user', 'kit', 'compat_report'] as const;
export const ReportTargetType = z.enum(REPORT_TARGET_TYPES);

export const REPORT_REASONS = [
  'malware',
  'broken',
  'reupload',
  'nsfw_unmarked',
  'spam',
  'harassment',
  'illegal',
  'other',
] as const;
export const ReportReason = z.enum(REPORT_REASONS);

/** Auto-hide threshold: distinct reporters with trust level ≥ 1 (PLAN §7.4). */
export const REPORT_AUTO_HIDE_THRESHOLD = 3;

export const CreateReportBody = dto(
  'CreateReportBody',
  z.strictObject({
    targetType: ReportTargetType,
    targetId: EntityId,
    reason: ReportReason,
    details: z.string().trim().max(2000).optional(),
  }),
  {
    description: 'Report content to the rangers.',
    examples: [{ targetType: 'comment', targetId: 216, reason: 'spam' }],
  },
);

export const ReportDTO = dto(
  'ReportDTO',
  z.object({
    id: EntityId,
    targetType: ReportTargetType,
    targetId: EntityId,
    target: z.object({ title: z.string(), path: SitePath.nullable() }).nullable(),
    reason: ReportReason,
    details: z.string().nullable(),
    status: z.enum(['open', 'resolved', 'dismissed']),
    reporter: UserRefDTO.nullable(),
    assignee: UserRefDTO.nullable(),
    resolution: z.string().nullable(),
    resolvedAt: IsoDateTime.nullable(),
    createdAt: IsoDateTime,
  }),
  {
    description: 'A user report.',
    examples: [
      {
        id: 44,
        targetType: 'comment',
        targetId: 216,
        target: { title: 'Comment on AmmoUi', path: '/mods/someone/ammoui#c-216' },
        reason: 'spam',
        details: null,
        status: 'open',
        reporter: exampleOf(UserRefDTO),
        assignee: null,
        resolution: null,
        resolvedAt: null,
        createdAt: '2026-09-29T07:00:00.000Z',
      },
    ],
  },
);
// -----------------------------------------------------------------------------------------------
// Queue
// -----------------------------------------------------------------------------------------------

export const MODERATION_LANES = ['new_mods', 'versions', 'post_review', 'reports', 'comments', 'builds'] as const;
export const ModerationLane = z.enum(MODERATION_LANES);
export type ModerationLane = z.infer<typeof ModerationLane>;

/** Review SLA in hours (PLAN §7.4). */
export const MODERATION_SLA_HOURS = 72;
/** Moderator/admin actions need a session created less than this many hours ago. */
export const MODERATION_REAUTH_HOURS = 12;

export const MODERATION_ACTIONS = ['approve', 'reject', 'request_changes', 'unlist', 'remove', 'restore'] as const;
export const ModerationAction = z.enum(MODERATION_ACTIONS);

export const QueueEscalationDTO = dto(
  'QueueEscalationDTO',
  z.object({
    by: UserRefDTO.nullable(),
    at: IsoDateTime,
    note: z.string().nullable(),
  }),
  {
    description: 'A queue item escalated to the admins (PLAN §7.4, shortcut `e`).',
    examples: [
      {
        by: exampleOf(UserRefDTO),
        at: '2026-09-29T10:00:00.000Z',
        note: 'Possible reupload of a paid mod, needs the owner',
      },
    ],
  },
);

export const QueueItemDTO = dto(
  'QueueItemDTO',
  z.object({
    id: z.string().describe('`<lane>:<targetType>:<targetId>`'),
    lane: ModerationLane,
    targetType: z.enum(['mod', 'version', 'report', 'comment']),
    targetId: EntityId,
    mod: ModRefDTO.nullable(),
    title: z.string(),
    author: UserRefDTO.nullable(),
    submittedAt: IsoDateTime,
    waitingHours: z.number().nonnegative(),
    risk: z.enum(['low', 'medium', 'high']),
    flags: z.array(InspectionFlagDTO),
    assignee: UserRefDTO.nullable().describe('Ranger who took the item (`POST /ranger/items/:id/assign`)'),
    escalation: QueueEscalationDTO.nullable().describe(
      'Set by `POST /ranger/items/:id/escalate`; escalated items sort as high risk',
    ),
  }),
  {
    description: 'An item waiting in a Ranger Station lane.',
    examples: [
      {
        id: 'versions:version:640',
        lane: 'versions',
        targetType: 'version',
        targetId: 640,
        mod: exampleOf(ModRefDTO),
        title: "Axel's Mod Menu 1.3.9",
        author: exampleOf(UserRefDTO),
        submittedAt: '2026-09-29T08:00:00.000Z',
        waitingHours: 2.5,
        risk: 'low',
        flags: [],
        assignee: null,
        escalation: null,
      },
    ],
  },
);

export const QueuePageDTO = dto(
  'QueuePageDTO',
  z.object({
    lane: ModerationLane,
    counts: z.record(ModerationLane, Count),
    items: z.array(QueueItemDTO),
    nextCursor: z.string().nullable(),
  }),
  {
    description: 'One lane of the queue (oldest and riskiest first) with the counts of every lane.',
    examples: [
      {
        lane: 'versions',
        counts: { new_mods: 3, versions: 1, post_review: 12, reports: 2, comments: 0, builds: 1 },
        items: [exampleOf(QueueItemDTO)],
        nextCursor: null,
      },
    ],
  },
);

export const FileDiffDTO = dto(
  'FileDiffDTO',
  z.object({
    added: z.array(z.object({ path: z.string(), size: Count })),
    removed: z.array(z.object({ path: z.string(), size: Count })),
    changed: z.array(z.object({ path: z.string(), sizeBefore: Count, sizeAfter: Count, crcChanged: z.boolean() })),
  }),
  {
    description: 'Zip entries compared with the previous version.',
    examples: [
      {
        added: [{ path: 'AxelModMenu/icons.bundle', size: 80_122 }],
        removed: [],
        changed: [{ path: 'AxelModMenu.dll', sizeBefore: 401_000, sizeAfter: 402_944, crcChanged: true }],
      },
    ],
  },
);

export const QueueItemDetailDTO = dto(
  'QueueItemDetailDTO',
  z.object({
    item: QueueItemDTO,
    inspection: UploadInspectionDTO.nullable(),
    fileDiff: FileDiffDTO.nullable(),
    manifestDiff: z.array(z.object({ field: z.string(), before: z.unknown(), after: z.unknown() })),
    scan: ScanSummaryDTO.nullable(),
    descriptionHtml: z.string().nullable(),
    changelogHtml: z.string().nullable(),
    media: z.array(ImageDTO),
    authorHistory: z.object({
      accountAgeDays: Count,
      modsPublished: Count,
      modsRejected: Count,
      activeSanctions: Count,
      trustLevel: z.number().int().min(0).max(3),
    }),
    allowedActions: z.array(ModerationAction),
    report: ReportDTO.nullable().describe('The report itself when the item is a report (target, reason, reporter)'),
  }),
  {
    description: 'Everything a ranger needs to decide on an item.',
    examples: [
      {
        item: exampleOf(QueueItemDTO),
        inspection: exampleOf(UploadInspectionDTO),
        fileDiff: exampleOf(FileDiffDTO),
        manifestDiff: [{ field: 'version', before: '1.3.8', after: '1.3.9' }],
        scan: exampleOf(ScanSummaryDTO),
        descriptionHtml: null,
        changelogHtml: '<ul><li>Fixed zipline noclip</li></ul>',
        media: [],
        authorHistory: { accountAgeDays: 1103, modsPublished: 16, modsRejected: 0, activeSanctions: 0, trustLevel: 3 },
        allowedActions: ['approve', 'reject', 'request_changes'],
        report: null,
      },
    ],
  },
);

export const DecisionBody = dto(
  'DecisionBody',
  z
    .strictObject({
      action: ModerationAction,
      templateKey: z.string().max(80).optional().describe('Key of `SiteSetting.moderationTemplates`'),
      note: z.string().trim().max(2000).optional(),
      successorModId: EntityId.optional(),
    })
    .refine((body) => !['reject', 'request_changes', 'remove'].includes(body.action) || body.templateKey || body.note, {
      message: 'a template or a note is required for this action',
      path: ['note'],
    }),
  {
    description: 'Moderation decision on a mod or version.',
    examples: [{ action: 'reject', templateKey: 'reupload_without_permission' }],
  },
);

export const DecisionResultDTO = dto(
  'DecisionResultDTO',
  z.object({
    targetType: z.enum(['mod', 'version']),
    targetId: EntityId,
    status: z.string(),
    statusReason: z.string().nullable(),
    auditId: EntityId,
  }),
  {
    description: 'Resulting status and audit entry.',
    examples: [
      {
        targetType: 'mod',
        targetId: 312,
        status: 'rejected',
        statusReason: 'Reupload without permission',
        auditId: 7001,
      },
    ],
  },
);

export const ReportPageDTO = cursorPageOf('ReportPageDTO', ReportDTO, 'Cursor page of reports.');

export const ReportCreatedDTO = dto('ReportCreatedDTO', z.object({ id: EntityId, status: z.literal('open') }), {
  description: 'Acknowledgement of a new report.',
  examples: [{ id: 44, status: 'open' }],
});

export const ResolveReportBody = dto(
  'ResolveReportBody',
  z.strictObject({
    action: z.enum(['resolve', 'dismiss']),
    note: z.string().trim().max(2000).optional(),
    hideTarget: z.boolean().default(false),
  }),
  {
    description: 'Close a report (the reporter is notified).',
    examples: [{ action: 'resolve', note: 'Comment hidden', hideTarget: true }],
  },
);

export const HideContentBody = dto('HideContentBody', z.strictObject({ reason: z.string().trim().min(3).max(500) }), {
  description: 'Hide a comment or review with a reason.',
  examples: [{ reason: 'Spam link' }],
});

export const CommentsLockBody = dto(
  'CommentsLockBody',
  z
    .strictObject({
      locked: z.boolean(),
      reason: z.string().trim().max(500).optional(),
    })
    .refine((body) => !body.locked || (body.reason?.length ?? 0) >= 3, {
      message: 'a reason of at least 3 characters is required to lock a thread',
      path: ['reason'],
    }),
  {
    description: 'Lock (with a reason) or unlock the comment thread of a mod (PLAN §7.6 «bloquear el hilo»).',
    examples: [{ locked: true, reason: 'Heated off-topic argument' }],
  },
);

export const CommentsLockDTO = dto(
  'CommentsLockDTO',
  z.object({
    modId: EntityId,
    locked: z.boolean(),
    lockedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'Comment thread lock state of a mod after the change.',
    examples: [{ modId: 20, locked: true, lockedAt: '2026-09-30T12:00:00.000Z' }],
  },
);

export const HiddenStateDTO = dto(
  'HiddenStateDTO',
  z.object({
    targetType: z.enum(['comment', 'review']),
    targetId: EntityId,
    status: z.string(),
    hiddenReason: z.string().nullable(),
  }),
  {
    description: 'Visibility after hide/unhide.',
    examples: [{ targetType: 'comment', targetId: 216, status: 'hidden', hiddenReason: 'Spam link' }],
  },
);

// -----------------------------------------------------------------------------------------------
// Users and sanctions
// -----------------------------------------------------------------------------------------------

export const SANCTION_KINDS = ['suspend', 'ban', 'comment_mute', 'upload_mute'] as const;
export const SanctionKind = z.enum(SANCTION_KINDS);

export const SanctionDTO = dto(
  'SanctionDTO',
  z.object({
    id: EntityId,
    kind: SanctionKind,
    scopeMod: ModRefDTO.nullable(),
    reason: z.string(),
    startsAt: IsoDateTime,
    endsAt: IsoDateTime.nullable(),
    createdBy: UserRefDTO.nullable(),
    revokedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'A sanction applied to a user.',
    examples: [
      {
        id: 3,
        kind: 'comment_mute',
        scopeMod: null,
        reason: 'Repeated spam',
        startsAt: '2026-09-29T08:00:00.000Z',
        endsAt: '2026-10-06T08:00:00.000Z',
        createdBy: exampleOf(UserRefDTO),
        revokedAt: null,
      },
    ],
  },
);

export const CreateSanctionBody = dto(
  'CreateSanctionBody',
  z.strictObject({
    kind: SanctionKind,
    reason: z.string().trim().min(3).max(1000),
    endsAt: IsoDateTime.optional().describe('Omit for permanent (ban)'),
    scopeModId: EntityId.optional().describe('comment_mute only: limit to one mod'),
  }),
  {
    description: 'Sanction a user.',
    examples: [{ kind: 'suspend', reason: 'Harassment', endsAt: '2026-10-06T08:00:00.000Z' }],
  },
);

export const RangerUserDTO = dto(
  'RangerUserDTO',
  z.object({
    user: UserRefDTO,
    email: z.string(),
    emailVerified: z.boolean(),
    role: Role,
    verifiedCreator: z.boolean(),
    legacyTrusted: z.boolean().nullable(),
    trustLevel: z.number().int().min(0).max(3),
    createdAt: IsoDateTime,
    lastSeenAt: IsoDateTime.nullable(),
    suspendedUntil: IsoDateTime.nullable(),
    bannedAt: IsoDateTime.nullable(),
    stats: z.object({ mods: Count, comments: Count, reviews: Count, reportsAgainst: Count }),
    sanctions: z.array(SanctionDTO),
  }),
  {
    description: 'User as seen by moderation.',
    examples: [
      {
        user: exampleOf(UserRefDTO),
        email: 'imaxel@example.test',
        emailVerified: true,
        role: 'user',
        verifiedCreator: true,
        legacyTrusted: true,
        trustLevel: 3,
        createdAt: '2023-09-22T06:13:49.867Z',
        lastSeenAt: '2026-09-29T09:30:00.000Z',
        suspendedUntil: null,
        bannedAt: null,
        stats: { mods: 16, comments: 40, reviews: 3, reportsAgainst: 0 },
        sanctions: [],
      },
    ],
  },
);
export const RangerUserPageDTO = pageOf('RangerUserPageDTO', RangerUserDTO, 'Page of users (moderation search).');

export const UpdateRoleBody = dto(
  'UpdateRoleBody',
  z.strictObject({ role: Role, reason: z.string().trim().max(500).optional() }),
  {
    description: 'Change the role (admin only).',
    examples: [{ role: 'moderator', reason: 'New ranger' }],
  },
);

export const SetVerifiedCreatorBody = dto(
  'SetVerifiedCreatorBody',
  z.strictObject({ value: z.boolean(), reason: z.string().trim().max(500).optional() }),
  {
    description: 'Grant or remove the verified creator flag.',
    examples: [{ value: true }],
  },
);

export const ScanOverrideBody = dto(
  'ScanOverrideBody',
  z.strictObject({ verdict: z.enum(['false_positive', 'malicious']), note: z.string().trim().min(3).max(1000) }),
  {
    description: 'Override a security scan verdict.',
    examples: [{ verdict: 'false_positive', note: 'Il2Cpp interop DLLs trip heuristics' }],
  },
);

export const ScanOverrideResultDTO = dto(
  'ScanOverrideResultDTO',
  z.object({ scanId: EntityId, verdict: ScanVerdict }),
  {
    description: 'Verdict after the override.',
    examples: [{ scanId: 18, verdict: 'false_positive' }],
  },
);

export const AuditEntryDTO = dto(
  'AuditEntryDTO',
  z.object({
    id: EntityId,
    actor: UserRefDTO.nullable(),
    action: z.string(),
    targetType: z.string().nullable(),
    targetId: EntityId.nullable(),
    before: z.unknown(),
    after: z.unknown(),
    reason: z.string().nullable(),
    createdAt: IsoDateTime,
  }),
  {
    description: 'Immutable audit log entry.',
    examples: [
      {
        id: 7001,
        actor: exampleOf(UserRefDTO),
        action: 'mod.reject',
        targetType: 'mod',
        targetId: 312,
        before: { status: 'pending' },
        after: { status: 'rejected' },
        reason: 'Reupload without permission',
        createdAt: '2026-09-29T09:00:00.000Z',
      },
    ],
  },
);
export const AuditPageDTO = cursorPageOf('AuditPageDTO', AuditEntryDTO, 'Cursor page of the audit log.');

export const RevokedSessionsDTO = dto('RevokedSessionsDTO', z.object({ revoked: Count }), {
  description: 'Number of sessions revoked.',
  examples: [{ revoked: 2 }],
});

// -----------------------------------------------------------------------------------------------
// Assignment, escalation, templates and review metrics (PLAN §7.4)
// -----------------------------------------------------------------------------------------------

/** Id of a queue item: `<lane>:<targetType>:<targetId>`. */
export const QueueItemIdParams = z.object({ id: z.string().regex(/^[a-z_]+:[a-z_]+:\d+$/) });

export const AssignItemBody = dto(
  'AssignItemBody',
  z.strictObject({ assign: z.boolean().default(true).describe('`false` releases the item') }),
  {
    description: 'Take a queue item ("assign to me") or release it.',
    examples: [{ assign: true }],
  },
);

export const EscalateItemBody = dto(
  'EscalateItemBody',
  z
    .strictObject({
      escalate: z.boolean().default(true).describe('`false` clears the escalation'),
      note: z.string().trim().max(1000).optional(),
    })
    .refine((body) => !body.escalate || (body.note !== undefined && body.note.length >= 3), {
      message: 'a note of at least 3 characters is required to escalate',
      path: ['note'],
    }),
  {
    description: 'Escalate a queue item to the admins (or clear the escalation).',
    examples: [{ escalate: true, note: 'Possible reupload of a paid mod, needs the owner' }],
  },
);

export const ModerationTemplateDTO = dto(
  'ModerationTemplateDTO',
  z.object({
    key: z.string(),
    action: ModerationAction,
    messages: LocalizedNames.describe('Wording per locale (`en` is the stored `statusReason`)'),
  }),
  {
    description: 'A reason template of `SiteSetting.moderationTemplates` (or the built-in list).',
    examples: [
      {
        key: 'missing_screenshots',
        action: 'request_changes',
        messages: {
          en: 'Please add at least one screenshot that shows the mod in game.',
          es: 'Añade al menos una captura que muestre el mod en el juego.',
        },
      },
    ],
  },
);

export const ModerationTemplateListDTO = dto(
  'ModerationTemplateListDTO',
  z.object({
    items: z.array(ModerationTemplateDTO),
    source: z.enum(['setting', 'built_in']).describe('`built_in` until an admin saves the setting'),
  }),
  {
    description: 'The reason templates in force.',
    examples: [{ items: [exampleOf(ModerationTemplateDTO)], source: 'built_in' }],
  },
);

export const ReviewMetricsQuery = z.object({
  days: z.coerce.number().int().min(1).max(365).default(30).describe('Decisions of the last N days'),
});

const ReviewTimeStats = z.object({
  reviewed: Count.describe('Submissions decided in the window'),
  meanHours: z.number().nonnegative().nullable(),
  medianHours: z.number().nonnegative().nullable(),
  p90Hours: z.number().nonnegative().nullable(),
  withinSla: Count.describe('Decided within `slaHours`'),
});

export const ReviewMetricsDTO = dto(
  'ReviewMetricsDTO',
  z.object({
    windowDays: z.number().int().positive(),
    slaHours: z.number().int().positive(),
    overall: ReviewTimeStats,
    byTarget: z.object({ mod: ReviewTimeStats, version: ReviewTimeStats }),
    openOverSla: Count.describe('Items waiting in the review lanes (new mods, versions, builds) for more than the SLA'),
  }),
  {
    description:
      'Review time from submission to the first decision (`AuditLog` `*.submit` → approve/reject/request changes).',
    examples: [
      {
        windowDays: 30,
        slaHours: 72,
        overall: { reviewed: 42, meanHours: 9.4, medianHours: 5.1, p90Hours: 30.2, withinSla: 41 },
        byTarget: {
          mod: { reviewed: 12, meanHours: 14.2, medianHours: 8, p90Hours: 40.5, withinSla: 11 },
          version: { reviewed: 30, meanHours: 7.5, medianHours: 4.2, p90Hours: 20.1, withinSla: 30 },
        },
        openOverSla: 1,
      },
    ],
  },
);

// -----------------------------------------------------------------------------------------------
// Endpoints
// -----------------------------------------------------------------------------------------------

const ranger = `${API_V2_PREFIX}/ranger`;
const IdParams = z.object({ id: IdParam });

export const moderationEndpoints = {
  report: defineEndpoint({
    id: 'moderation.report',
    owner: 'WP-51',
    method: 'POST',
    path: `${API_V2_PREFIX}/reports`,
    summary: 'Report content',
    auth: 'verified',
    body: CreateReportBody,
    status: 201,
    response: ReportCreatedDTO,
    errors: ['NOT_FOUND', 'CONFLICT', 'EMAIL_NOT_VERIFIED'],
    cache: cache.noStore,
    rateLimit: 'reports',
  }),
  queue: defineEndpoint({
    id: 'moderation.queue',
    owner: 'WP-51',
    method: 'GET',
    path: `${ranger}/queue`,
    summary: 'Queue lane',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    query: CursorQuery.extend({ lane: ModerationLane.default('new_mods') }),
    response: QueuePageDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.private,
  }),
  item: defineEndpoint({
    id: 'moderation.item',
    owner: 'WP-51',
    method: 'GET',
    path: `${ranger}/items/:id`,
    summary: 'Queue item with inspection, file diff, scan and author history',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: QueueItemIdParams,
    response: QueueItemDetailDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.private,
  }),
  assignItem: defineEndpoint({
    id: 'moderation.assignItem',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/items/:id/assign`,
    summary: 'Assign a queue item to yourself (or release it)',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: QueueItemIdParams,
    body: AssignItemBody,
    response: QueueItemDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  escalateItem: defineEndpoint({
    id: 'moderation.escalateItem',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/items/:id/escalate`,
    summary: 'Escalate a queue item to the admins (or clear the escalation)',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: QueueItemIdParams,
    body: EscalateItemBody,
    response: QueueItemDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  templates: defineEndpoint({
    id: 'moderation.templates',
    owner: 'WP-51',
    method: 'GET',
    path: `${ranger}/templates`,
    summary: 'Reason templates in force',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    response: ModerationTemplateListDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.private,
  }),
  metrics: defineEndpoint({
    id: 'moderation.metrics',
    owner: 'WP-51',
    method: 'GET',
    path: `${ranger}/metrics`,
    summary: 'Review time and SLA metrics',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    query: ReviewMetricsQuery,
    response: ReviewMetricsDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.private,
  }),
  decideMod: defineEndpoint({
    id: 'moderation.decideMod',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/mods/:id/decision`,
    summary: 'Decide on a mod',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: DecisionBody,
    response: DecisionResultDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  decideVersion: defineEndpoint({
    id: 'moderation.decideVersion',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/versions/:id/decision`,
    summary: 'Decide on a version',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: DecisionBody,
    response: DecisionResultDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  reports: defineEndpoint({
    id: 'moderation.reports',
    owner: 'WP-51',
    method: 'GET',
    path: `${ranger}/reports`,
    summary: 'Reports',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    query: CursorQuery.extend({ status: z.enum(['open', 'resolved', 'dismissed', 'all']).default('open') }),
    response: ReportPageDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.private,
  }),
  resolveReport: defineEndpoint({
    id: 'moderation.resolveReport',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/reports/:id/resolve`,
    summary: 'Resolve or dismiss a report',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: ResolveReportBody,
    response: ReportDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'CONFLICT', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  hideComment: defineEndpoint({
    id: 'moderation.hideComment',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/comments/:id/hide`,
    summary: 'Hide a comment',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: HideContentBody,
    response: HiddenStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  unhideComment: defineEndpoint({
    id: 'moderation.unhideComment',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/comments/:id/unhide`,
    summary: 'Unhide a comment',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    response: HiddenStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  lockComments: defineEndpoint({
    id: 'moderation.lockComments',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/mods/:id/comments-lock`,
    summary: 'Lock or unlock the comment thread of a mod',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: CommentsLockBody,
    response: CommentsLockDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  hideReview: defineEndpoint({
    id: 'moderation.hideReview',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/reviews/:id/hide`,
    summary: 'Hide a review',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: HideContentBody,
    response: HiddenStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  unhideReview: defineEndpoint({
    id: 'moderation.unhideReview',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/reviews/:id/unhide`,
    summary: 'Unhide a review',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    response: HiddenStateDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  users: defineEndpoint({
    id: 'moderation.users',
    owner: 'WP-51',
    method: 'GET',
    path: `${ranger}/users`,
    summary: 'Search users',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    query: PageQuery.extend({ q: z.string().trim().max(100).optional() }),
    response: RangerUserPageDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.private,
  }),
  user: defineEndpoint({
    id: 'moderation.user',
    owner: 'WP-51',
    method: 'GET',
    path: `${ranger}/users/:id`,
    summary: 'User detail with history and sanctions',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    response: RangerUserDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.private,
  }),
  sanction: defineEndpoint({
    id: 'moderation.sanction',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/users/:id/sanctions`,
    summary: 'Sanction a user',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: CreateSanctionBody,
    status: 201,
    response: SanctionDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  revokeSanction: defineEndpoint({
    id: 'moderation.revokeSanction',
    owner: 'WP-51',
    method: 'DELETE',
    path: `${ranger}/sanctions/:id`,
    summary: 'Revoke a sanction',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    response: SanctionDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  setRole: defineEndpoint({
    id: 'moderation.setRole',
    owner: 'WP-51',
    method: 'PATCH',
    path: `${ranger}/users/:id/role`,
    summary: 'Change the role of a user',
    auth: 'admin',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: UpdateRoleBody,
    response: RangerUserDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  setVerifiedCreator: defineEndpoint({
    id: 'moderation.setVerifiedCreator',
    owner: 'WP-51',
    method: 'PATCH',
    path: `${ranger}/users/:id/verified-creator`,
    summary: 'Grant or remove the verified creator flag',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: SetVerifiedCreatorBody,
    response: RangerUserDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  revokeSessions: defineEndpoint({
    id: 'moderation.revokeSessions',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/users/:id/revoke-sessions`,
    summary: 'Sign a user out everywhere',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    response: RevokedSessionsDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  overrideScan: defineEndpoint({
    id: 'moderation.overrideScan',
    owner: 'WP-51',
    method: 'POST',
    path: `${ranger}/scans/:id/override`,
    summary: 'Override a security scan verdict',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    params: IdParams,
    body: ScanOverrideBody,
    response: ScanOverrideResultDTO,
    errors: ['NOT_FOUND', 'FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.noStore,
  }),
  audit: defineEndpoint({
    id: 'moderation.audit',
    owner: 'WP-51',
    method: 'GET',
    path: `${ranger}/audit`,
    summary: 'Audit log',
    auth: 'moderator',
    requires: ['recent_auth_12h'],
    query: CursorQuery.extend({
      actor: z.string().max(64).optional().describe('Actor handle'),
      action: z.string().max(80).optional(),
      target: z
        .string()
        .regex(/^[a-z_]+:\d+$/)
        .optional()
        .describe('`<targetType>:<id>`'),
    }),
    response: AuditPageDTO,
    errors: ['FORBIDDEN', 'REAUTH_REQUIRED'],
    cache: cache.private,
  }),
} as const;
