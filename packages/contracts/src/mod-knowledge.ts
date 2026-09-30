/**
 * Mod page knowledge (PLAN §7.13 T1-14, T1-17, T1-12): the author's known issues and FAQ per mod,
 * the public diff between two versions and co-authors (invite, accept, release versions).
 *
 * Known issues and FAQ are plain text: they are rendered on the mod page, in the Markdown
 * alternate and in the page's `FAQPage` JSON-LD, never as HTML. Both lists are replaced as a whole
 * by the editor (`PUT`): items with an `id` are updated, items without one are created and the
 * rows that are not sent are deleted.
 *
 * Co-authors: the owner invites a user by handle (`pending`), the invitee accepts (`accepted`) or
 * declines (the row disappears). An accepted co-author may release versions, edit versions and
 * maintain known issues and FAQ; only the owner edits the listing, the status and the team.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import {
  Count,
  EntityId,
  Handle,
  IdParam,
  IsoDateTime,
  ModRefDTO,
  SitePath,
  UserRefDTO,
  VersionString,
} from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const KNOWLEDGE_LIMITS = {
  issuesMax: 30,
  issueTitleMax: 140,
  issueBodyMax: 1500,
  issueVersionsMax: 80,
  faqMax: 20,
  questionMax: 160,
  answerMax: 1500,
  coAuthorsMax: 5,
  invitePendingMax: 10,
  diffFilesMax: 500,
  diffChangelogMax: 50,
} as const;

export const KNOWN_ISSUE_STATUSES = ['open', 'investigating', 'fixed'] as const;
export const KnownIssueStatus = z.enum(KNOWN_ISSUE_STATUSES);
export type KnownIssueStatus = z.infer<typeof KnownIssueStatus>;

// -----------------------------------------------------------------------------------------------
// Known issues and FAQ
// -----------------------------------------------------------------------------------------------

export const KnownIssueDTO = dto(
  'KnownIssueDTO',
  z.object({
    id: EntityId,
    title: z.string(),
    body: z.string(),
    status: KnownIssueStatus,
    affectedVersions: z.string().nullable().describe('Free text, e.g. `<= 1.2.0`'),
    fixedInVersion: z.string().nullable(),
    createdAt: IsoDateTime,
    updatedAt: IsoDateTime,
    resolvedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'A problem the author knows about (plain text).',
    examples: [
      {
        id: 4,
        title: 'Crash when opening the menu with a controller',
        body: 'Use the keyboard until the next release; the controller binding is being reworked.',
        status: 'investigating',
        affectedVersions: '1.4.0',
        fixedInVersion: null,
        createdAt: '2026-09-20T18:00:00.000Z',
        updatedAt: '2026-09-21T09:30:00.000Z',
        resolvedAt: null,
      },
    ],
  },
);
export type KnownIssueDTO = z.infer<typeof KnownIssueDTO>;

export const FaqEntryDTO = dto('FaqEntryDTO', z.object({ id: EntityId, question: z.string(), answer: z.string() }), {
  description: 'A question the author answers on the mod page (plain text).',
  examples: [
    { id: 2, question: 'Does it work with RedManager?', answer: 'Yes, install it from RedManager or by hand.' },
  ],
});
export type FaqEntryDTO = z.infer<typeof FaqEntryDTO>;

export const CoAuthorDTO = dto('CoAuthorDTO', z.object({ user: UserRefDTO, acceptedAt: IsoDateTime }), {
  description: 'An accepted co-author of a mod.',
  examples: [{ user: exampleOf(UserRefDTO), acceptedAt: '2026-09-18T10:00:00.000Z' }],
});
export type CoAuthorDTO = z.infer<typeof CoAuthorDTO>;

export const ModKnowledgeDTO = dto(
  'ModKnowledgeDTO',
  z.object({
    knownIssues: z.array(KnownIssueDTO).describe('Open and investigating first, then the ones fixed (newest first)'),
    faq: z.array(FaqEntryDTO),
    coAuthors: z.array(CoAuthorDTO),
  }),
  {
    description: 'Known issues, author FAQ and co-authors of a mod.',
    examples: [
      {
        knownIssues: [exampleOf(KnownIssueDTO)],
        faq: [exampleOf(FaqEntryDTO)],
        coAuthors: [exampleOf(CoAuthorDTO)],
      },
    ],
  },
);
export type ModKnowledgeDTO = z.infer<typeof ModKnowledgeDTO>;

const TrimmedText = (max: number) => z.string().trim().min(1).max(max);

export const KnownIssueInput = z.object({
  id: EntityId.optional().describe('Omit to create'),
  title: TrimmedText(KNOWLEDGE_LIMITS.issueTitleMax),
  body: z.string().trim().max(KNOWLEDGE_LIMITS.issueBodyMax).default(''),
  status: KnownIssueStatus,
  affectedVersions: z.string().trim().max(KNOWLEDGE_LIMITS.issueVersionsMax).nullish(),
  fixedInVersion: z.string().trim().max(KNOWLEDGE_LIMITS.issueVersionsMax).nullish(),
});
export type KnownIssueInput = z.input<typeof KnownIssueInput>;

export const PutKnownIssuesBody = dto(
  'PutKnownIssuesBody',
  z.object({ items: z.array(KnownIssueInput).max(KNOWLEDGE_LIMITS.issuesMax) }),
  {
    description: 'Replaces the known issues of a mod (order = position).',
    examples: [
      { items: [{ id: 4, title: 'Crash with a controller', body: '', status: 'fixed', fixedInVersion: '1.4.1' }] },
    ],
  },
);

export const FaqInput = z.object({
  id: EntityId.optional().describe('Omit to create'),
  question: TrimmedText(KNOWLEDGE_LIMITS.questionMax),
  answer: TrimmedText(KNOWLEDGE_LIMITS.answerMax),
});
export type FaqInput = z.input<typeof FaqInput>;

export const PutFaqBody = dto('PutFaqBody', z.object({ items: z.array(FaqInput).max(KNOWLEDGE_LIMITS.faqMax) }), {
  description: 'Replaces the FAQ of a mod (order = position).',
  examples: [{ items: [{ question: 'Does it work in multiplayer?', answer: 'Only the host needs it.' }] }],
});

export const KnownIssueListDTO = dto('KnownIssueListDTO', z.object({ items: z.array(KnownIssueDTO) }), {
  description: 'Known issues of a mod.',
  examples: [{ items: [exampleOf(KnownIssueDTO)] }],
});

export const FaqListDTO = dto('FaqListDTO', z.object({ items: z.array(FaqEntryDTO) }), {
  description: 'FAQ entries of a mod.',
  examples: [{ items: [exampleOf(FaqEntryDTO)] }],
});

// -----------------------------------------------------------------------------------------------
// Version diff
// -----------------------------------------------------------------------------------------------

export const DiffVersionDTO = dto(
  'DiffVersionDTO',
  z.object({
    id: EntityId,
    version: VersionString,
    publishedAt: IsoDateTime,
    fileSize: Count.nullable(),
    filesCount: Count.nullable().describe('null when the archive was never inspected'),
    path: SitePath.describe('Page of the version'),
  }),
  {
    description: 'One side of a version diff.',
    examples: [
      {
        id: 410,
        version: '1.4.0',
        publishedAt: '2026-09-01T12:00:00.000Z',
        fileSize: 184_320,
        filesCount: 12,
        path: '/mods/imaxel/axel-mod-menu/versions/1.4.0',
      },
    ],
  },
);

export const DiffFileDTO = dto('DiffFileDTO', z.object({ path: z.string(), size: Count }), {
  description: 'A file of a version archive.',
  examples: [{ path: 'Mods/AxelModMenu.dll', size: 51_200 }],
});

export const DiffChangedFileDTO = dto(
  'DiffChangedFileDTO',
  z.object({ path: z.string(), fromSize: Count, toSize: Count }),
  {
    description: 'A file present in both versions whose content changed (CRC-32 or size).',
    examples: [{ path: 'Mods/AxelModMenu.dll', fromSize: 51_200, toSize: 52_736 }],
  },
);

export const DiffManifestChangeDTO = dto(
  'DiffManifestChangeDTO',
  z.object({ field: z.string(), from: z.string().nullable(), to: z.string().nullable() }),
  {
    description: 'A manifest field that differs between the two versions (values rendered as text).',
    examples: [{ field: 'loaderVersion', from: '0.8.5', to: '0.8.6' }],
  },
);

export const DiffChangelogDTO = dto(
  'DiffChangelogDTO',
  z.object({
    versionId: EntityId,
    version: VersionString,
    publishedAt: IsoDateTime,
    changelogHtml: z.string(),
  }),
  {
    description: 'Changelog of a version inside the compared range.',
    examples: [
      {
        versionId: 410,
        version: '1.4.0',
        publishedAt: '2026-09-01T12:00:00.000Z',
        changelogHtml: '<ul><li>Fixed noclip</li></ul>',
      },
    ],
  },
);

export const VersionDiffDTO = dto(
  'VersionDiffDTO',
  z.object({
    modId: EntityId,
    from: DiffVersionDTO,
    to: DiffVersionDTO,
    filesAvailable: z.boolean().describe('false when one side has no archive listing (builds, legacy uploads)'),
    precise: z
      .boolean()
      .describe('true when both listings carry CRC-32 values, so a same-size change is detected; else sizes only'),
    sizeDelta: z.number().int().nullable().describe('`to.fileSize - from.fileSize` in bytes'),
    added: z.array(DiffFileDTO),
    removed: z.array(DiffFileDTO),
    changed: z.array(DiffChangedFileDTO),
    unchangedCount: Count,
    truncated: z.boolean().describe('The lists were cut at `KNOWLEDGE_LIMITS.diffFilesMax` entries each'),
    manifest: z.array(DiffManifestChangeDTO),
    changelog: z
      .array(DiffChangelogDTO)
      .describe(
        'Versions after `from` up to and including `to`, newest first (oldest first when downgrading is false)',
      ),
    changelogTruncated: z.boolean(),
  }),
  {
    description: 'Difference between two public versions of a mod: files, manifest and changelog range.',
    examples: [
      {
        modId: 20,
        from: exampleOf(DiffVersionDTO),
        to: {
          ...exampleOf(DiffVersionDTO),
          id: 415,
          version: '1.5.0',
          path: '/mods/imaxel/axel-mod-menu/versions/1.5.0',
        },
        filesAvailable: true,
        precise: true,
        sizeDelta: 1536,
        added: [exampleOf(DiffFileDTO)],
        removed: [],
        changed: [exampleOf(DiffChangedFileDTO)],
        unchangedCount: 10,
        truncated: false,
        manifest: [exampleOf(DiffManifestChangeDTO)],
        changelog: [exampleOf(DiffChangelogDTO)],
        changelogTruncated: false,
      },
    ],
  },
);
export type VersionDiffDTO = z.infer<typeof VersionDiffDTO>;

// -----------------------------------------------------------------------------------------------
// Team (co-authors)
// -----------------------------------------------------------------------------------------------

export const TEAM_ROLES = ['owner', 'coauthor', 'admin'] as const;
export const TeamRole = z.enum(TEAM_ROLES);

export const TeamMemberDTO = dto(
  'TeamMemberDTO',
  z.object({
    user: UserRefDTO,
    status: z.enum(['pending', 'accepted']),
    invitedAt: IsoDateTime,
    respondedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'A co-author or pending invitation of a mod.',
    examples: [
      { user: exampleOf(UserRefDTO), status: 'pending', invitedAt: '2026-09-28T10:00:00.000Z', respondedAt: null },
    ],
  },
);

export const ModTeamDTO = dto(
  'ModTeamDTO',
  z.object({
    viewerRole: TeamRole,
    owner: UserRefDTO,
    members: z.array(TeamMemberDTO),
  }),
  {
    description: 'The team of a mod as a manager sees it (pending invitations included).',
    examples: [{ viewerRole: 'owner', owner: exampleOf(UserRefDTO), members: [exampleOf(TeamMemberDTO)] }],
  },
);
export type ModTeamDTO = z.infer<typeof ModTeamDTO>;

export const InviteCoAuthorBody = dto(
  'InviteCoAuthorBody',
  z.object({ handle: Handle.describe('Handle of the user to invite (without `@`)') }),
  { description: 'Invites a user as co-author.', examples: [{ handle: 'toni' }] },
);

export const CoAuthorInviteDTO = dto(
  'CoAuthorInviteDTO',
  z.object({
    id: EntityId,
    mod: ModRefDTO,
    invitedBy: UserRefDTO.nullable(),
    invitedAt: IsoDateTime,
  }),
  {
    description: 'A pending invitation to co-author a mod.',
    examples: [
      {
        id: 7,
        mod: {
          id: 20,
          kind: 'mod',
          manifestId: 'AxelModMenu',
          name: "Axel's Mod Menu",
          slug: "axel's-mod-menu",
          userHandle: 'imaxel',
          canonicalPath: "/mods/imaxel/axel's-mod-menu",
          status: 'published',
          nsfw: false,
          thumbnailUrl: null,
        },
        invitedBy: exampleOf(UserRefDTO),
        invitedAt: '2026-09-28T10:00:00.000Z',
      },
    ],
  },
);

export type CoAuthorInviteDTO = z.infer<typeof CoAuthorInviteDTO>;

export const CoAuthorInviteListDTO = dto('CoAuthorInviteListDTO', z.object({ items: z.array(CoAuthorInviteDTO) }), {
  description: 'My pending co-author invitations.',
  examples: [{ items: [exampleOf(CoAuthorInviteDTO)] }],
});

export const CoAuthoredModDTO = dto(
  'CoAuthoredModDTO',
  z.object({
    mod: ModRefDTO,
    latestVersion: VersionString.nullable(),
    acceptedAt: IsoDateTime,
  }),
  {
    description: 'A mod the user co-authors.',
    examples: [
      { mod: exampleOf(CoAuthorInviteDTO).mod, latestVersion: '1.4.0', acceptedAt: '2026-09-18T10:00:00.000Z' },
    ],
  },
);

export type CoAuthoredModDTO = z.infer<typeof CoAuthoredModDTO>;

export const CoAuthoredModListDTO = dto('CoAuthoredModListDTO', z.object({ items: z.array(CoAuthoredModDTO) }), {
  description: 'Mods a user co-authors (public: only published mods).',
  examples: [{ items: [exampleOf(CoAuthoredModDTO)] }],
});

// -----------------------------------------------------------------------------------------------
// Endpoints
// -----------------------------------------------------------------------------------------------

const modsBase = `${API_V2_PREFIX}/mods`;
const studioBase = `${API_V2_PREFIX}/studio/mods`;

export const modKnowledgeEndpoints = {
  knowledge: defineEndpoint({
    id: 'modKnowledge.knowledge',
    owner: 'WP-T1h',
    method: 'GET',
    path: `${modsBase}/:id/knowledge`,
    summary: 'Known issues, author FAQ and co-authors of a mod',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: ModKnowledgeDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  diff: defineEndpoint({
    id: 'modKnowledge.diff',
    owner: 'WP-T1h',
    method: 'GET',
    path: `${modsBase}/:id/diff`,
    summary: 'Difference between two versions of a mod (files, manifest, changelog range)',
    auth: 'public',
    params: z.object({ id: IdParam }),
    query: z.object({ from: IdParam, to: IdParam }),
    response: VersionDiffDTO,
    errors: ['NOT_FOUND', 'VALIDATION_FAILED'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  studioKnowledge: defineEndpoint({
    id: 'modKnowledge.studioKnowledge',
    owner: 'WP-T1h',
    method: 'GET',
    path: `${studioBase}/:id/knowledge`,
    summary: 'Known issues and FAQ as the maintainers see them',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    response: ModKnowledgeDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'FORBIDDEN'],
    cache: cache.private,
  }),
  putKnownIssues: defineEndpoint({
    id: 'modKnowledge.putKnownIssues',
    owner: 'WP-T1h',
    method: 'PUT',
    path: `${studioBase}/:id/known-issues`,
    summary: 'Replace the known issues of a mod',
    auth: 'verified',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    body: PutKnownIssuesBody,
    response: KnownIssueListDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'FORBIDDEN', 'VALIDATION_FAILED'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  putFaq: defineEndpoint({
    id: 'modKnowledge.putFaq',
    owner: 'WP-T1h',
    method: 'PUT',
    path: `${studioBase}/:id/faq`,
    summary: 'Replace the author FAQ of a mod',
    auth: 'verified',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    body: PutFaqBody,
    response: FaqListDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'FORBIDDEN', 'VALIDATION_FAILED'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  team: defineEndpoint({
    id: 'modKnowledge.team',
    owner: 'WP-T1g',
    method: 'GET',
    path: `${studioBase}/:id/team`,
    summary: 'Owner, co-authors and pending invitations of a mod',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    response: ModTeamDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'FORBIDDEN'],
    cache: cache.private,
  }),
  invite: defineEndpoint({
    id: 'modKnowledge.invite',
    owner: 'WP-T1g',
    method: 'POST',
    path: `${studioBase}/:id/team`,
    summary: 'Invite a co-author',
    auth: 'verified',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam }),
    body: InviteCoAuthorBody,
    status: 201,
    response: ModTeamDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'FORBIDDEN', 'CONFLICT', 'VALIDATION_FAILED'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  removeMember: defineEndpoint({
    id: 'modKnowledge.removeMember',
    owner: 'WP-T1g',
    method: 'DELETE',
    path: `${studioBase}/:id/team/:userId`,
    summary: 'Remove a co-author or cancel an invitation (a co-author may remove themselves)',
    auth: 'session',
    requires: ['mod_owner'],
    params: z.object({ id: IdParam, userId: IdParam }),
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  myInvites: defineEndpoint({
    id: 'modKnowledge.myInvites',
    owner: 'WP-T1g',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/coauthor-invites`,
    summary: 'My pending co-author invitations',
    auth: 'session',
    response: CoAuthorInviteListDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  acceptInvite: defineEndpoint({
    id: 'modKnowledge.acceptInvite',
    owner: 'WP-T1g',
    method: 'POST',
    path: `${API_V2_PREFIX}/me/coauthor-invites/:id/accept`,
    summary: 'Accept a co-author invitation',
    auth: 'verified',
    params: z.object({ id: IdParam }),
    response: CoAuthoredModDTO,
    errors: ['UNAUTHENTICATED', 'NOT_FOUND', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  declineInvite: defineEndpoint({
    id: 'modKnowledge.declineInvite',
    owner: 'WP-T1g',
    method: 'POST',
    path: `${API_V2_PREFIX}/me/coauthor-invites/:id/decline`,
    summary: 'Decline a co-author invitation',
    auth: 'session',
    params: z.object({ id: IdParam }),
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  myCoAuthored: defineEndpoint({
    id: 'modKnowledge.myCoAuthored',
    owner: 'WP-T1g',
    method: 'GET',
    path: `${API_V2_PREFIX}/me/coauthored-mods`,
    summary: 'Mods I co-author (any status)',
    auth: 'session',
    response: CoAuthoredModListDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.private,
  }),
  userCoAuthored: defineEndpoint({
    id: 'modKnowledge.userCoAuthored',
    owner: 'WP-T1g',
    method: 'GET',
    path: `${API_V2_PREFIX}/users/:handle/coauthored`,
    summary: 'Published mods a user co-authors',
    auth: 'public',
    params: z.object({ handle: Handle }),
    response: CoAuthoredModListDTO,
    errors: ['NOT_FOUND'],
    cache: cache.publicApi(['user:{id}']),
    rateLimit: 'anonymousRead',
  }),
} as const;
