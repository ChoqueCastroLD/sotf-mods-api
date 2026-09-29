/**
 * Loads a {@link Dataset} into the **legacy** tables of an empty database that only has the
 * baseline (`0000_legacy_baseline`), exactly like production looks before the v2 migrations: the
 * v2 columns are then added by `db:migrate` with their defaults and filled by the backfills.
 *
 * Only legacy columns are written, with explicit ids, and every serial sequence is moved past the
 * highest id afterwards (so `0025_seed_taxonomy` and later INSERTs never collide).
 */
import type pg from 'pg';
import { insertRows, inTransaction, syncSequences } from '../db.ts';
import type { Dataset } from './dataset.ts';
import { copyDownloads, planDownloads } from './downloads.ts';

export interface LoadReport {
  rows: Record<string, number>;
  ms: Record<string, number>;
}

const SEQUENCED_TABLES = [
  'Category',
  'User',
  'Mod',
  'ModImage',
  'ModVersion',
  'Comment',
  'ModFavorite',
  'Token',
  'PasswordResetToken',
  'ModDownload',
] as const;

export async function loadDataset(
  client: pg.ClientBase,
  data: Dataset,
  log: (message: string) => void = () => {},
): Promise<LoadReport> {
  const report: LoadReport = { rows: {}, ms: {} };
  const step = async (name: string, fn: () => Promise<number>) => {
    const start = performance.now();
    report.rows[name] = await fn();
    report.ms[name] = Math.round(performance.now() - start);
    log(`loaded ${String(report.rows[name]).padStart(9)} ${name} (${report.ms[name]} ms)`);
  };

  await inTransaction(
    client,
    async () => {
      await step('Category', () =>
        insertRows(
          client,
          'Category',
          ['id', 'name', 'slug', 'description', 'type', 'createdAt', 'updatedAt'],
          data.categories.map((c) => [
            c.id,
            c.name,
            c.slug,
            '',
            c.type,
            '2023-09-01T00:00:00.000Z',
            '2023-09-01T00:00:00.000Z',
          ]),
        ),
      );
      await step('User', () =>
        insertRows(
          client,
          'User',
          ['id', 'email', 'password', 'name', 'imageUrl', 'slug', 'isTrusted', 'createdAt', 'updatedAt'],
          data.users.map((u) => [
            u.id,
            u.email,
            u.password,
            u.name,
            u.imageUrl,
            u.slug,
            u.isTrusted,
            u.createdAt,
            u.createdAt,
          ]),
        ),
      );
      await step('Mod', () =>
        insertRows(
          client,
          'Mod',
          [
            'id',
            'name',
            'slug',
            'mod_id',
            'shortDescription',
            'description',
            'dependencies',
            'type',
            'modSide',
            'isNSFW',
            'isApproved',
            'isFeatured',
            'isMultiplayerCompatible',
            'requiresAllPlayers',
            'lastWeekDownloads',
            'downloads',
            'latestVersion',
            'latestVersionSize',
            'averageRating',
            'reviewsCount',
            'favoritesCount',
            'commentsCount',
            'sourceUrl',
            'imageUrl',
            'buildGuid',
            'buildShareVersion',
            'numberOfElements',
            'lastReleasedAt',
            'createdAt',
            'updatedAt',
            'userId',
            'categoryId',
          ],
          data.mods.map((m) => [
            m.id,
            m.name,
            m.slug,
            m.mod_id,
            m.shortDescription,
            m.description,
            m.dependencies,
            m.type,
            m.modSide,
            m.isNSFW,
            m.isApproved,
            m.isFeatured,
            m.isMultiplayerCompatible,
            m.requiresAllPlayers,
            m.lastWeekDownloads,
            m.downloads,
            m.latestVersion,
            m.latestVersionSize,
            m.averageRating,
            m.reviewsCount,
            m.favoritesCount,
            m.commentsCount,
            m.sourceUrl,
            m.imageUrl,
            m.buildGuid,
            m.buildShareVersion,
            m.numberOfElements,
            m.lastReleasedAt,
            m.createdAt,
            m.updatedAt,
            m.userId,
            m.categoryId,
          ]),
        ),
      );
      await step('ModImage', () =>
        insertRows(
          client,
          'ModImage',
          ['id', 'url', 'isPrimary', 'isThumbnail', 'createdAt', 'updatedAt', 'modId'],
          data.images.map((i) => [i.id, i.url, i.isPrimary, i.isThumbnail, i.createdAt, i.createdAt, i.modId]),
        ),
      );
      await step('ModVersion', () =>
        insertRows(
          client,
          'ModVersion',
          [
            'id',
            'version',
            'isLatest',
            'changelog',
            'downloadUrl',
            'extension',
            'filename',
            'createdAt',
            'updatedAt',
            'modId',
          ],
          data.versions.map((v) => [
            v.id,
            v.version,
            v.isLatest,
            v.changelog,
            v.downloadUrl,
            v.extension,
            v.filename,
            v.createdAt,
            v.updatedAt,
            v.modId,
          ]),
        ),
      );
      // Parents before replies (replyId references a lower id in the legacy data).
      await step('Comment', () =>
        insertRows(
          client,
          'Comment',
          ['id', 'createdAt', 'updatedAt', 'message', 'imageUrl', 'isHidden', 'ip', 'userId', 'modId', 'replyId'],
          [...data.comments]
            .sort((a, b) => Number(a.replyId !== null) - Number(b.replyId !== null) || a.id - b.id)
            .map((c) => [
              c.id,
              c.createdAt,
              c.createdAt,
              c.message,
              c.imageUrl,
              c.isHidden,
              'undefined',
              c.userId,
              c.modId,
              c.replyId,
            ]),
        ),
      );
      await step('ModFavorite', () =>
        insertRows(
          client,
          'ModFavorite',
          ['id', 'createdAt', 'updatedAt', 'userId', 'modId'],
          data.favorites.map((f) => [f.id, f.createdAt, f.createdAt, f.userId, f.modId]),
        ),
      );
      await step('Token', () =>
        insertRows(
          client,
          'Token',
          ['id', 'token', 'expiresAt', 'userId', 'createdAt', 'updatedAt'],
          data.tokens.map((t) => [t.id, t.token, t.expiresAt, t.userId, t.createdAt, t.createdAt]),
        ),
      );
      await step('PasswordResetToken', () =>
        insertRows(
          client,
          'PasswordResetToken',
          ['id', 'token', 'expiresAt', 'userId', 'createdAt', 'updatedAt'],
          data.resetTokens.map((t) => [t.id, t.token, t.expiresAt, t.userId, t.createdAt, t.createdAt]),
        ),
      );
    },
    { statementTimeout: '0' },
  );

  // Downloads go in their own transaction: COPY of ~2 M rows.
  await inTransaction(
    client,
    async () => {
      const plan = planDownloads(data.downloads);
      await step('ModDownload', () => copyDownloads(client, plan));
    },
    { statementTimeout: '0' },
  );
  await syncSequences(client, SEQUENCED_TABLES);
  await client.query('ANALYZE');
  return report;
}
