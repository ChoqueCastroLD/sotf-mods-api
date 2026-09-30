import { schema } from '@sotf/db';
import { describe, expect, it } from 'vitest';
import { findPrivateKeys, isReviewClean, reviewTablePolicies, TABLE_POLICIES, tablesFromSchema } from './policy.ts';

describe('table policies (PLAN §9.2 «permisos por tabla»)', () => {
  const tables = tablesFromSchema(schema as Record<string, unknown>);

  it('classifies every table of the Drizzle schema and only existing columns', () => {
    const review = reviewTablePolicies(tables);
    expect(review).toEqual({ unclassified: [], stale: [], unknownColumns: [], conflicting: [], publicSecrets: [] });
    expect(isReviewClean(review)).toBe(true);
  });

  it('keeps the session country and the queue assignment out of public responses', () => {
    expect(TABLE_POLICIES.Session?.privateColumns).toContain('country');
    expect(TABLE_POLICIES.ModerationAssignment?.exposure).toBe('staff');
  });

  it('reports unclassified tables, stale policies and unknown columns', () => {
    const review = reviewTablePolicies([{ name: 'Brand', columns: ['id'] }], {
      Gone: { exposure: 'public', writers: ['admin'], note: 'gone' },
      Brand: { exposure: 'public', writers: ['admin'], privateColumns: ['missing'], secretColumns: ['id'], note: 'x' },
    });
    expect(review.unclassified).toEqual([]);
    expect(review.stale).toEqual(['Gone']);
    expect(review.unknownColumns).toEqual([{ table: 'Brand', column: 'missing' }]);
    expect(review.publicSecrets).toEqual([{ table: 'Brand', column: 'id' }]);
    expect(reviewTablePolicies([{ name: 'New', columns: [] }], {}).unclassified).toEqual(['New']);
  });

  it('finds private keys only as object keys of a JSON body', () => {
    expect(findPrivateKeys('{"id":1,"email":"a@b.c"}')).toContain('email');
    expect(findPrivateKeys('{"text":"\\"email\\": not a key"}')).toEqual([]);
  });
});
