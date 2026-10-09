/**
 * `db:revert-fix` for tables without an "id" (composite keys): the audit `rowId` is a JSON object of
 * the key columns (B22 rewrites `ModTranslation.description`, whose key is (modId, locale)). A value
 * changed after the fix is a conflict and stays as it is.
 */
import { BASELINE_NAME, migrateUp } from '@sotf/db';
import { stopTestServer } from '@sotf/db/testing';
import { afterAll, afterEach, beforeEach, describe, expect, it } from 'vitest';
import { revertFix, rowKeyOf } from '../src/fixes.ts';
import { legacy, type Scratch, scalar, scratch } from './_helpers.ts';

let db: Scratch;

beforeEach(async () => {
  db = await scratch({ migrate: true, target: BASELINE_NAME });
  await legacy.user(db.client, 1);
  await legacy.mod(db.client, 1, 1, { slug: 'a-mod' });
  await migrateUp(db.client, { pgBoss: false });
});
afterEach(async () => {
  await db.close();
});
afterAll(async () => {
  await stopTestServer();
});

const OLD = '![x](https://r2.sotf-mods.com/1_a b.png)';
const NEW = '![x](https://r2.sotf-mods.com/1_a b.webp)';

async function audit(rowId: string, table: string, column: string, oldValue: string, newValue: string) {
  await db.client.query(
    `INSERT INTO "DataFixAudit" ("fixId", "tableName", "rowId", "columnName", "oldValue", "newValue")
     VALUES ('B22', $1, $2, $3, $4::jsonb, $5::jsonb)`,
    [table, rowId, column, JSON.stringify(oldValue), JSON.stringify(newValue)],
  );
}

describe('rowKeyOf', () => {
  it('reads the JSON key of a composite-key row and nothing else', () => {
    expect(rowKeyOf('{"modId":"1","locale":"es"}')).toEqual({ modId: '1', locale: 'es' });
    expect(rowKeyOf('12')).toBeNull();
    expect(rowKeyOf('{"a":{"b":1}}')).toBeNull();
    expect(rowKeyOf('{}')).toBeNull();
    expect(rowKeyOf('{broken')).toBeNull();
  });
});

describe('revert of a table without "id"', () => {
  it('restores the value of the row named by its key columns', async () => {
    await db.client.query(
      `INSERT INTO "ModTranslation" ("modId", "locale", "description", "source") VALUES (1, 'es', $1, 'machine'), (1, 'fr', $1, 'machine')`,
      [NEW],
    );
    await audit('{"modId":"1","locale":"es"}', 'ModTranslation', 'description', OLD, NEW);
    const report = await revertFix(db.client, 'B22');
    expect(report).toMatchObject({ reverted: 1, conflicts: [] });
    expect(await scalar(db.client, `SELECT "description" FROM "ModTranslation" WHERE "locale" = 'es'`)).toBe(OLD);
    expect(await scalar(db.client, `SELECT "description" FROM "ModTranslation" WHERE "locale" = 'fr'`)).toBe(NEW);
  });

  it('leaves a row changed after the fix as a conflict', async () => {
    await db.client.query(
      `INSERT INTO "ModTranslation" ("modId", "locale", "description", "source") VALUES (1, 'es', 'edited later', 'machine')`,
    );
    await audit('{"modId":"1","locale":"es"}', 'ModTranslation', 'description', OLD, NEW);
    const report = await revertFix(db.client, 'B22');
    expect(report.reverted).toBe(0);
    expect(report.conflicts).toHaveLength(1);
    expect(await scalar(db.client, `SELECT "description" FROM "ModTranslation"`)).toBe('edited later');
  });

  it('still reverts rows with an id, integers and jsonb', async () => {
    await db.client.query(`UPDATE "Mod" SET "imageUrl" = $1 WHERE "id" = 1`, [NEW]);
    await audit('1', 'Mod', 'imageUrl', OLD, NEW);
    const report = await revertFix(db.client, 'B22');
    expect(report.reverted).toBe(1);
    expect(await scalar(db.client, `SELECT "imageUrl" FROM "Mod" WHERE "id" = 1`)).toBe(OLD);
  });
});
