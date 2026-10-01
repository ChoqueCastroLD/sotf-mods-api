/**
 * Data-access policy per table (PLAN §9.2 "revisión de permisos por tabla", §9.3 inventory and
 * retention; WP-93).
 *
 * Every table of the database (legacy and v2) is classified here: who may read it through the
 * API, who writes it, which columns are **private** (personal or moderation data that must never
 * appear in a publicly cached response or in cached HTML) and which are **secret** (credentials:
 * they never leave the server in any response, log or export). {@link reviewTablePolicies} compares
 * this list with the live Drizzle schema, so a new table or a renamed column cannot ship without
 * being reviewed, and {@link PRIVATE_RESPONSE_KEYS} feeds the API guard that refuses to cache a
 * public response carrying one of those fields (`apps/api/src/plugins/security`).
 */
import { getTableColumns, getTableName, is } from 'drizzle-orm';
import { PgTable } from 'drizzle-orm/pg-core';

/**
 * - `public`: anyone reads every row (taxonomy, stats, redirects).
 * - `public_filtered`: public rows only through the visibility rules of the domain (status,
 *   hidden/deleted flags, the owner's privacy settings); the rest is owner/staff only.
 * - `owner`: only the owning user (and staff where a moderation screen needs it).
 * - `staff`: moderators/admins through the console (audited where PLAN §9.2 says so).
 * - `internal`: never exposed row by row (workers, security, migrations); aggregates at most.
 */
export type Exposure = 'public' | 'public_filtered' | 'owner' | 'staff' | 'internal';

/** Who writes the table. `system` = API/worker code on behalf of the platform; `legacy` = the Bun API during coexistence. */
export type Writer = 'owner' | 'staff' | 'admin' | 'system' | 'legacy';

export interface TablePolicy {
  exposure: Exposure;
  writers: readonly Writer[];
  /** Never in a publicly cached response or cached HTML (owner/staff-only responses may carry them). */
  privateColumns?: readonly string[];
  /** Never in any response, log line, export or analytics event. */
  secretColumns?: readonly string[];
  /** Retention rule of PLAN §9.3 (absent = kept while the owning entity exists). */
  retention?: string;
  note: string;
}

const TIMESTAMPS_ONLY: readonly string[] = [];

export const TABLE_POLICIES = {
  // ── Accounts and authentication ────────────────────────────────────────────────────────────
  User: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff', 'admin', 'system', 'legacy'],
    privateColumns: [
      'email',
      'emailNormalized',
      'emailVerifiedAt',
      'settings',
      'privacy',
      'onboarding',
      'passwordUpdatedAt',
      'lastLoginAt',
      'lastSeenAt',
      'suspendedUntil',
      'bannedAt',
      'banReason',
      'deletedAt',
      'trustLevel',
    ],
    secretColumns: ['password'],
    retention: 'account lifetime; deleted accounts anonymised after 14 days',
    note: 'Public profile fields only through the profile DTO, filtered by `privacy`. Staff see the email only on the user card (audited).',
  },
  Session: {
    exposure: 'owner',
    writers: ['system'],
    privateColumns: ['ipHash', 'userAgent', 'deviceLabel', 'lastSeenAt', 'country'],
    secretColumns: ['tokenHash', 'pwdFingerprint'],
    retention: 'until expiry + 30 days',
    note: 'The owner lists and revokes their sessions; the cookie value is never stored in clear.',
  },
  AuthToken: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['payload'],
    secretColumns: ['tokenHash'],
    retention: 'until used or expired',
    note: 'Single-use email tokens (verify, reset, email change); only the hash is stored.',
  },
  AuthEvent: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['ipHash', 'userAgent'],
    retention: '90 days',
    note: 'Security log of sign-ins and credential changes; feeds rate limits and alerts.',
  },
  AccountDeletion: {
    exposure: 'owner',
    writers: ['owner', 'system'],
    privateColumns: ['requestedAt', 'executeAfter', 'mode', 'cancelledAt', 'executedAt'],
    note: 'Self-service deletion requests (14-day grace).',
  },
  DataExport: {
    exposure: 'owner',
    writers: ['owner', 'system'],
    secretColumns: ['key'],
    retention: '24 hours',
    note: 'The object key stays private; the owner gets a presigned GET.',
  },
  Token: {
    exposure: 'internal',
    writers: ['legacy'],
    secretColumns: ['token'],
    note: 'Legacy session tokens (Bun API). v2 never reads them for authentication.',
  },
  PasswordResetToken: {
    exposure: 'internal',
    writers: ['legacy', 'system'],
    secretColumns: ['token'],
    note: 'Legacy reset tokens, accepted for 24 h after the cut-over and then ignored.',
  },
  LoginAttempt: {
    exposure: 'internal',
    writers: ['legacy'],
    privateColumns: ['ip', 'userAgent', 'email'],
    note: 'Legacy login log with IPs in clear: pseudonymised in the contract phase (with approval).',
  },
  UserSlugHistory: {
    exposure: 'public',
    writers: ['system'],
    note: 'Old handles, used for 301s to the current profile.',
  },
  UserSanction: {
    exposure: 'staff',
    writers: ['staff', 'admin'],
    privateColumns: ['reason', 'createdById'],
    note: 'The sanctioned user sees their active sanction and its reason; nobody else.',
  },
  NotificationPreference: {
    exposure: 'owner',
    writers: ['owner'],
    note: 'Per-type notification switches.',
  },
  Notification: {
    exposure: 'owner',
    writers: ['system'],
    privateColumns: ['data', 'readAt', 'emailedAt'],
    note: 'Inbox of one user; never cached publicly.',
  },
  EmailOutbox: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['toEmail', 'payload', 'error', 'providerId'],
    note: 'Transactional email queue (worker).',
  },
  PendingMention: {
    exposure: 'internal',
    writers: ['legacy', 'system'],
    privateColumns: ['commentMessage'],
    note: 'Legacy mention queue, drained into notifications.',
  },

  // ── Catalogue ─────────────────────────────────────────────────────────────────────────────
  Mod: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff', 'admin', 'system', 'legacy'],
    privateColumns: ['statusReason', 'approvedById'],
    note: 'Public when published/unlisted/archived; pending/rejected/removed only to the author and staff. `statusReason` is shown to the author, never publicly.',
  },
  ModVersion: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff', 'system', 'legacy'],
    privateColumns: ['publishedById'],
    note: 'Active versions are public; pending ones only to the author and staff. The yank reason (`statusReason` of a yanked version) is public by design; a rejection reason is only returned to the author and staff.',
  },
  ModImage: {
    exposure: 'public_filtered',
    writers: ['owner', 'system', 'legacy'],
    note: 'Gallery of a visible mod.',
  },
  ModDependency: {
    exposure: 'public_filtered',
    writers: ['owner', 'system'],
    note: 'Dependencies of visible versions.',
  },
  ModSlugHistory: { exposure: 'public', writers: ['system'], note: 'Old slugs, used for 301s.' },
  ModDraft: {
    exposure: 'owner',
    writers: ['owner'],
    privateColumns: ['data', 'uploadIds'],
    note: 'Unpublished wizard state of one author.',
  },
  ModMilestone: { exposure: 'public', writers: ['system'], note: 'Download milestones reached.' },
  Category: { exposure: 'public', writers: ['admin', 'legacy'], note: 'Taxonomy (admin.taxonomy).' },
  Tag: { exposure: 'public', writers: ['admin', 'system'], note: 'Taxonomy (admin.taxonomy); free tags are curated.' },
  _ModToTag: { exposure: 'public_filtered', writers: ['owner', 'system', 'legacy'], note: 'Tags of visible mods.' },
  GameBuild: { exposure: 'public', writers: ['admin'], note: 'Game builds (admin.game_builds).' },
  LoaderRelease: { exposure: 'public', writers: ['admin', 'system'], note: 'RedLoader releases.' },
  EcosystemStatus: {
    exposure: 'public',
    writers: ['admin'],
    privateColumns: ['updatedById'],
    note: 'Game build × loader status (Patch Radar).',
  },
  Media: {
    exposure: 'public_filtered',
    writers: ['owner', 'system'],
    privateColumns: ['sourceBucket', 'sourceKey', 'error'],
    note: 'Ready variants are public through R2; originals stay in the private bucket.',
  },
  Upload: {
    exposure: 'owner',
    writers: ['owner', 'system'],
    privateColumns: ['bucket', 'key', 'filename', 'error'],
    retention: 'expired uploads are swept by the worker',
    note: 'Presigned upload sessions (15 min, single use) to the private bucket.',
  },
  VersionInspection: {
    exposure: 'staff',
    writers: ['system'],
    privateColumns: ['entries', 'flags', 'error'],
    note: 'Zip inspection report: the author sees the preflight summary, staff the details.',
  },
  SecurityScan: {
    exposure: 'staff',
    writers: ['system', 'staff'],
    privateColumns: ['raw', 'overrideById', 'overrideNote', 'permalink'],
    note: 'VirusTotal verdicts; the public page only shows the derived badge.',
  },
  Redirect: { exposure: 'public', writers: ['system', 'admin'], note: 'Served as 301/308.' },
  Tombstone: { exposure: 'public', writers: ['system', 'admin'], note: 'Served as 410.' },

  // ── Community ─────────────────────────────────────────────────────────────────────────────
  Comment: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff', 'system', 'legacy'],
    privateColumns: ['ip', 'ipHash', 'hiddenReason', 'deletedById', 'isHidden'],
    note: 'Visible comments are public; hidden/deleted ones only to staff. The legacy `ip` column is never exposed.',
  },
  CommentEdit: { exposure: 'staff', writers: ['system'], note: 'Edit history (moderation).' },
  CommentImage: { exposure: 'public_filtered', writers: ['owner', 'system'], note: 'Images of visible comments.' },
  CommentReaction: {
    exposure: 'public_filtered',
    writers: ['owner'],
    note: 'Counts are public (denormalised); who reacted is only returned to that user.',
  },
  ModReview: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff', 'system', 'legacy'],
    privateColumns: ['isHidden'],
    note: 'Visible reviews are public; hidden ones only to staff.',
  },
  ReviewEdit: { exposure: 'staff', writers: ['system'], note: 'Edit history (moderation).' },
  ReviewVote: {
    exposure: 'owner',
    writers: ['owner'],
    note: 'Helpful votes: counts are public (denormalised), the vote itself only to its author.',
  },
  CompatReport: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff'],
    privateColumns: ['weight', 'status'],
    note: 'Aggregated into ModVersionCompat; individual reports visible with the author handle.',
  },
  ModVersionCompat: { exposure: 'public', writers: ['system'], note: 'Aggregated compatibility.' },
  Kit: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff'],
    note: 'Public/unlisted kits by link; private kits only to the owner.',
  },
  KitItem: { exposure: 'public_filtered', writers: ['owner'], note: 'Items of visible kits.' },
  KitRevision: { exposure: 'public_filtered', writers: ['system'], note: 'Change log of visible kits.' },
  ModFavorite: {
    exposure: 'owner',
    writers: ['owner', 'legacy'],
    note: 'Follows of mods: counts are public, the list only to the owner (or per privacy settings).',
  },
  ModFavoriteArchive: {
    exposure: 'internal',
    writers: ['system'],
    note: 'Duplicate legacy favourites moved aside by the backfill (never deleted, PLAN §14.5).',
  },
  UserFollow: {
    exposure: 'public_filtered',
    writers: ['owner'],
    note: 'Followers/following lists respect the privacy settings.',
  },
  Report: {
    exposure: 'staff',
    writers: ['owner', 'staff'],
    privateColumns: ['reporterId', 'details', 'resolution', 'assignedToId', 'resolvedById'],
    note: 'The reporter is never revealed to the reported user.',
  },
  ModerationAssignment: {
    exposure: 'staff',
    writers: ['staff'],
    privateColumns: ['assigneeId', 'escalatedById', 'escalationReason'],
    note: 'Queue assignee and escalation per target (Ranger Station); every change is also audited.',
  },
  AuditLog: {
    exposure: 'staff',
    writers: ['system'],
    privateColumns: ['before', 'after', 'reason', 'ipHash'],
    note: 'Append-only (REVOKE for the app role plus the immutability trigger of migration 2005); read with moderation.audit.',
  },
  Announcement: { exposure: 'public', writers: ['admin'], privateColumns: ['createdById'], note: 'Site banner.' },
  Award: { exposure: 'public', writers: ['admin'], privateColumns: ['createdById'], note: 'Awards (admin.awards).' },
  Badge: {
    exposure: 'public_filtered',
    writers: ['admin', 'system'],
    privateColumns: ['criteria'],
    note: 'Secret badges are only revealed once earned.',
  },
  UserBadge: { exposure: 'public_filtered', writers: ['system'], note: 'Earned badges (profile, privacy-aware).' },
  XpEvent: { exposure: 'owner', writers: ['system'], note: 'XP ledger of one user.' },

  // ── Stats and analytics ───────────────────────────────────────────────────────────────────
  ModStats: { exposure: 'public', writers: ['system'], note: 'Denormalised public counters.' },
  UserStats: { exposure: 'public_filtered', writers: ['system'], note: 'Profile counters (privacy-aware).' },
  ModStatsDaily: {
    exposure: 'owner',
    writers: ['system'],
    privateColumns: ['byReferrer', 'byCountry', 'bySource', 'byLocale'],
    note: 'Author analytics of their own mods (and staff).',
  },
  ModVersionDownloadDaily: { exposure: 'owner', writers: ['system'], note: 'Author analytics.' },
  SiteDownloadDaily: { exposure: 'staff', writers: ['system'], note: 'Site analytics.' },
  SiteStat: { exposure: 'public', writers: ['system', 'legacy'], note: 'Public site counters.' },
  UserActivityDaily: {
    exposure: 'public_filtered',
    writers: ['system'],
    note: 'Profile activity heatmap (privacy-aware).',
  },
  SearchQueryDaily: {
    exposure: 'staff',
    writers: ['system'],
    privateColumns: ['qNorm'],
    note: 'Aggregated search terms (no user, no IP).',
  },
  AnalyticsEvent: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['visitorHash', 'path', 'referrerDomain', 'country', 'device', 'props'],
    retention: '90 days',
    note: 'Cookie-less first-party analytics; only aggregates leave the table.',
  },
  ModDownload: {
    exposure: 'internal',
    writers: ['system', 'legacy'],
    privateColumns: ['ip', 'userAgent', 'ipHash', 'userId', 'country'],
    retention: 'permanent (hash only); legacy clear IPs pseudonymised in the contract phase',
    note: 'Download log; the IP in clear is never written by v2.',
  },
  DownloadUnique: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['ipHash'],
    retention: 'rolling window used for unique counts',
    note: 'Unique-download dedupe keys.',
  },
  KelvinGPTMessages: {
    exposure: 'internal',
    writers: ['legacy', 'system'],
    privateColumns: ['chatId', 'messageId', 'prompt', 'message', 'who'],
    retention: '30 days (hashed chat id)',
    note: 'KelvinSeek history; only the chat text goes to OpenAI.',
  },
  KelvinUsageDaily: { exposure: 'staff', writers: ['system'], note: 'KelvinSeek budget (admin.kelvinseek).' },

  // ── Platform ──────────────────────────────────────────────────────────────────────────────
  SiteSetting: {
    exposure: 'staff',
    writers: ['admin'],
    privateColumns: ['updatedById'],
    note: 'Admin settings; the public subset is served through dedicated endpoints.',
  },
  MigrationRun: { exposure: 'internal', writers: ['system'], note: 'Backfill runs.' },
  DataFixAudit: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['oldValue', 'newValue'],
    note: 'Data-fix audit trail (revertible).',
  },
  _v2_migrations: { exposure: 'internal', writers: ['system'], note: 'Applied schema migrations.' },

  // ── Sign-in methods and tokens ─────────────────────────────────────────────────────────────
  AuthChallenge: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['payload'],
    secretColumns: ['challenge'],
    retention: 'until expiry + 1 day',
    note: 'Pending passkey / second-factor challenges; single use, never returned.',
  },
  OAuthIdentity: {
    exposure: 'owner',
    writers: ['owner', 'system'],
    privateColumns: ['providerUserId', 'providerUsername', 'lastLoginAt'],
    retention: 'until the owner unlinks the provider or deletes the account',
    note: 'Linked Discord / GitHub identities; the owner lists and unlinks theirs in the account settings.',
  },
  OAuthLinkTicket: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['providerUserId', 'providerUsername'],
    secretColumns: ['tokenHash'],
    retention: 'until expiry + 1 day',
    note: 'One-time ticket that links a provider identity to a signed-in account.',
  },
  PersonalAccessToken: {
    exposure: 'owner',
    writers: ['owner'],
    privateColumns: ['tokenPrefix', 'lastUsedAt', 'scopes'],
    secretColumns: ['tokenHash'],
    retention: 'until revoked or expired + 90 days',
    note: 'API tokens: the owner lists name, prefix and scopes; the token itself is shown once at creation.',
  },
  UserPasskey: {
    exposure: 'owner',
    writers: ['owner', 'system'],
    privateColumns: ['name', 'deviceType', 'backedUp', 'transports', 'lastUsedAt'],
    secretColumns: ['credentialId', 'publicKey', 'counter'],
    retention: 'until the owner removes it or deletes the account',
    note: 'WebAuthn credentials; the owner lists and removes their passkeys.',
  },
  UserRecoveryCode: {
    exposure: 'internal',
    writers: ['system'],
    secretColumns: ['codeHash'],
    retention: 'until regenerated or the account is deleted',
    note: 'Hashed single-use recovery codes; only the count of unused codes is shown to the owner.',
  },
  UserTotp: {
    exposure: 'internal',
    writers: ['owner', 'system'],
    secretColumns: ['secret'],
    retention: 'until the owner disables it or deletes the account',
    note: 'Authenticator secret; only whether it is enabled is shown to the owner.',
  },
  UserLoginSignal: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['kind', 'value', 'firstSeenAt', 'lastSeenAt'],
    retention: 'account lifetime',
    note: 'Hashed device and network signals to spot suspicious sign-ins; never exposed row by row.',
  },

  // ── Catalog extensions (v2) ────────────────────────────────────────────────────────────────
  ModCoAuthor: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff'],
    privateColumns: ['invitedById', 'invitedAt', 'respondedAt'],
    note: 'Accepted co-authors are public on the mod page; pending invitations only to the two users involved and staff.',
  },
  ModFaqEntry: { exposure: 'public_filtered', writers: ['owner', 'staff'], note: 'FAQ of published mods.' },
  ModKnownIssue: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff'],
    privateColumns: ['createdById'],
    note: 'Known issues of published mods, written by their authors.',
  },
  ModRecommendation: { exposure: 'public', writers: ['system'], note: 'Computed "players also use" links.' },
  ModBundle: {
    exposure: 'public_filtered',
    writers: ['owner', 'system'],
    privateColumns: ['createdById', 'statusReason', 'storageKey'],
    note: 'Kit download bundles; ready ones are public through the kit page, the storage key never leaves the server.',
  },
  BuildGeometry: {
    exposure: 'public_filtered',
    writers: ['system'],
    note: 'Derived geometry and preview of published builds.',
  },
  CompatUptimeSample: {
    exposure: 'public',
    writers: ['system'],
    retention: '90 days',
    note: 'Compatibility checker uptime samples (status page).',
  },
  KitComment: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff'],
    privateColumns: ['deletedById'],
    note: 'Visible comments on public kits; deleted ones only to staff.',
  },
  KitFollow: {
    exposure: 'owner',
    writers: ['owner'],
    note: 'Follows of kits: counts are public (denormalised), who follows only to that user.',
  },

  // ── Mod requests ───────────────────────────────────────────────────────────────────────────
  ModRequest: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff', 'system'],
    privateColumns: ['hiddenReason', 'hiddenAt'],
    note: 'Public wishlist of mods; hidden and deleted requests only to the author and staff.',
  },
  ModRequestComment: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff'],
    note: 'Visible comments on public requests; deleted ones only to staff.',
  },
  ModRequestVote: {
    exposure: 'owner',
    writers: ['owner'],
    note: 'Votes on requests: the count is public (denormalised), the vote itself only to its author.',
  },

  // ── Translations and Scout ─────────────────────────────────────────────────────────────────
  ModTranslation: {
    exposure: 'public_filtered',
    writers: ['owner', 'system'],
    privateColumns: ['model', 'sourceHash', 'nameHash', 'descriptionHash'],
    note: 'Translated name, short description and description of published mods (machine or author text).',
  },
  TranslationUsageDaily: { exposure: 'staff', writers: ['system'], note: 'Translation budget (admin.translations).' },
  ScoutCache: {
    exposure: 'internal',
    writers: ['system'],
    privateColumns: ['question', 'answer'],
    retention: '30 days',
    note: 'Cached Scout answers; served as an answer, never listed row by row.',
  },
  ScoutUsageDaily: { exposure: 'staff', writers: ['system'], note: 'Scout budget (admin.kelvinseek).' },

  // ── Mod Jams ───────────────────────────────────────────────────────────────────────────────
  Jam: {
    exposure: 'public_filtered',
    writers: ['staff', 'admin', 'system'],
    privateColumns: ['createdById', 'themeHidden', 'phaseLocked'],
    note: 'Jams are public from their announcement; the theme stays hidden until the jam reveals it.',
  },
  JamCategory: { exposure: 'public_filtered', writers: ['staff', 'admin'], note: 'Voting categories of visible jams.' },
  JamEntry: {
    exposure: 'public_filtered',
    writers: ['owner', 'staff', 'system'],
    privateColumns: ['statusReason'],
    note: 'Approved entries are public; pending and rejected ones only to their authors and staff.',
  },
  JamEntryAuthor: { exposure: 'public_filtered', writers: ['owner', 'system'], note: 'Authors of visible entries.' },
  JamFollow: {
    exposure: 'owner',
    writers: ['owner'],
    note: 'Jam follows (notifications): who follows only to that user.',
  },
  JamVote: {
    exposure: 'internal',
    writers: ['owner', 'system'],
    privateColumns: ['ipHash', 'excludedReason', 'voterId'],
    retention: 'kept with the jam',
    note: 'Individual votes are never public (anti-abuse data); a voter reads only their own, everyone else gets the results.',
  },
  JamResult: {
    exposure: 'public_filtered',
    writers: ['system'],
    note: 'Computed scores and ranks, public once the results are published.',
  },
} as const satisfies Record<string, TablePolicy>;

export type ReviewedTable = keyof typeof TABLE_POLICIES;

/**
 * JSON keys that must never appear in a v2 response the CDN may cache (`cache.kind: 'public'`).
 * Distinctive names only (a generic `name` or `status` would be noise); derived from the private
 * and secret columns above plus the API-level names of the same data. Moderation fields that public
 * DTOs carry as `null` (`hiddenReason`) or that are public by design (a version's yank reason,
 * `statusReason`) are deliberately absent: the DTO mappers decide their value per viewer.
 */
export const PRIVATE_RESPONSE_KEYS: readonly string[] = [
  'email',
  'emailNormalized',
  'toEmail',
  'newEmail',
  'password',
  'passwordHash',
  'tokenHash',
  'sessionToken',
  'resetToken',
  'pwdFingerprint',
  'ip',
  'ipHash',
  'visitorHash',
  'userAgent',
  'chatId',
  'sessionId',
  'apiKey',
  'totpSecret',
  'banReason',
  'reporterId',
];

export interface SchemaTable {
  name: string;
  columns: readonly string[];
}

/** Tables and column names of a Drizzle schema module (`schema` of `@sotf/db`). */
export function tablesFromSchema(schema: Record<string, unknown>): SchemaTable[] {
  const tables = new Map<string, SchemaTable>();
  for (const value of Object.values(schema)) {
    if (!is(value, PgTable)) continue;
    const name = getTableName(value);
    const columns = Object.values(getTableColumns(value)).map((column) => column.name);
    tables.set(name, { name, columns });
  }
  return [...tables.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export interface TablePolicyReview {
  /** Tables in the schema without a reviewed policy. */
  unclassified: string[];
  /** Policies for tables that no longer exist. */
  stale: string[];
  /** Private/secret columns listed in a policy that the table does not have. */
  unknownColumns: Array<{ table: string; column: string }>;
  /** Columns classified both private and secret. */
  conflicting: Array<{ table: string; column: string }>;
  /** Secret columns of tables exposed publicly (a secret must live in an owner/staff/internal table or be excluded by the DTO). */
  publicSecrets: Array<{ table: string; column: string }>;
}

/** Compares {@link TABLE_POLICIES} with the tables of the schema. Empty lists = fully reviewed. */
export function reviewTablePolicies(
  tables: readonly SchemaTable[],
  policies: Readonly<Record<string, TablePolicy>> = TABLE_POLICIES,
): TablePolicyReview {
  const review: TablePolicyReview = {
    unclassified: [],
    stale: [],
    unknownColumns: [],
    conflicting: [],
    publicSecrets: [],
  };
  const byName = new Map(tables.map((table) => [table.name, table]));
  for (const table of tables) if (!policies[table.name]) review.unclassified.push(table.name);
  for (const [name, policy] of Object.entries(policies)) {
    const table = byName.get(name);
    if (!table) {
      review.stale.push(name);
      continue;
    }
    const columns = new Set(table.columns);
    const privateColumns = policy.privateColumns ?? TIMESTAMPS_ONLY;
    const secretColumns = policy.secretColumns ?? TIMESTAMPS_ONLY;
    for (const column of [...privateColumns, ...secretColumns]) {
      if (!columns.has(column)) review.unknownColumns.push({ table: name, column });
    }
    for (const column of secretColumns) {
      if (privateColumns.includes(column)) review.conflicting.push({ table: name, column });
    }
    // `public` tables have no row filter at all: a secret there would be one DTO bug away from a leak.
    if (policy.exposure === 'public') {
      for (const column of secretColumns) review.publicSecrets.push({ table: name, column });
    }
  }
  return review;
}

export function isReviewClean(review: TablePolicyReview): boolean {
  return (
    review.unclassified.length === 0 &&
    review.stale.length === 0 &&
    review.unknownColumns.length === 0 &&
    review.conflicting.length === 0 &&
    review.publicSecrets.length === 0
  );
}

/**
 * Keys of {@link PRIVATE_RESPONSE_KEYS} present as object keys in a serialized JSON body. Matches
 * `{"key":` / `,"key":` only, so escaped text inside string values (`\"email\":`) never matches.
 */
export function findPrivateKeys(json: string, keys: readonly string[] = PRIVATE_RESPONSE_KEYS): string[] {
  const found = new Set<string>();
  const pattern = privateKeyPattern(keys);
  for (const match of json.matchAll(pattern)) if (match[1]) found.add(match[1]);
  return [...found];
}

const patternCache = new WeakMap<readonly string[], RegExp>();

function privateKeyPattern(keys: readonly string[]): RegExp {
  let pattern = patternCache.get(keys);
  if (!pattern) {
    const alternatives = keys.map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    pattern = new RegExp(`[{,]\\s*"(${alternatives})"\\s*:`, 'g');
    patternCache.set(keys, pattern);
  }
  return pattern;
}
