import { describe, expect, it } from 'vitest';
import { Route as AuditRoute } from './audit.tsx';
import { Route as CommentsRoute } from './comments.tsx';
import { Route as QueueRoute } from './index.tsx';
import { Route as ReportsRoute } from './reports.tsx';
import { Route as UsersRoute } from './users/index.tsx';

type Validate = (search: Record<string, unknown>) => unknown;
const validate = (route: { options: { validateSearch?: unknown } }) => route.options.validateSearch as Validate;

describe('ranger route search params', () => {
  it('/ranger keeps a known lane and a well-formed item', () => {
    const v = validate(QueueRoute);
    expect(v({ lane: 'versions', item: 'versions:version:3' })).toEqual({
      lane: 'versions',
      item: 'versions:version:3',
    });
    expect(v({ lane: 'nope', item: '<script>' })).toEqual({});
    expect(v({})).toEqual({});
  });

  it('/ranger/comments keeps only the item', () => {
    const v = validate(CommentsRoute);
    expect(v({ item: 'comments:comment:9', lane: 'versions' })).toEqual({ item: 'comments:comment:9' });
    expect(v({ item: 42 })).toEqual({});
  });

  it('/ranger/reports drops the default status and unknown values', () => {
    const v = validate(ReportsRoute);
    expect(v({ status: 'resolved' })).toEqual({ status: 'resolved' });
    expect(v({ status: 'open' })).toEqual({});
    expect(v({ status: 'bogus' })).toEqual({});
  });

  it('/ranger/users trims the query and bounds the page', () => {
    const v = validate(UsersRoute);
    expect(v({ q: '  ana  ', page: '3' })).toEqual({ q: 'ana', page: 3 });
    expect(v({ q: '   ', page: 1 })).toEqual({});
    expect(v({ page: 'x' })).toEqual({});
    expect(v({ page: 10_001 })).toEqual({});
    expect((v({ q: 'a'.repeat(300) }) as { q: string }).q).toHaveLength(100);
  });

  it('/ranger/audit keeps bounded text filters and a valid target', () => {
    const v = validate(AuditRoute);
    const result = v({ actor: 'ana', action: 'mod.approve', target: 'nope target!' }) as Record<string, unknown>;
    expect(result).toMatchObject({ actor: 'ana', action: 'mod.approve' });
    expect(result.target).toBeUndefined();
  });
});
