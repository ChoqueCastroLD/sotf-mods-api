import { describe, expect, it } from 'vitest';
import { Route as AuditRoute } from './audit.tsx';
import { Route as CommentsRoute } from './comments.tsx';
import { Route as QueueRoute } from './index.tsx';
import { Route as ReportsRoute } from './reports.tsx';
import { Route as UsersRoute } from './users/index.tsx';

type Validate = (search: Record<string, unknown>) => unknown;
const validate = (route: { options: { validateSearch?: unknown } }) => route.options.validateSearch as Validate;

describe('ranger route search params', () => {
  it('/moderation keeps a known lane and a well-formed item', () => {
    const v = validate(QueueRoute);
    expect(v({ lane: 'versions', item: 'versions:version:3' })).toEqual({
      lane: 'versions',
      item: 'versions:version:3',
    });
    expect(v({ lane: 'nope', item: '<script>' })).toEqual({});
    expect(v({})).toEqual({});
  });

  it('/moderation keeps the page, a non-default sort and the filters, and drops defaults and junk', () => {
    const v = validate(QueueRoute);
    expect(
      v({
        page: '3',
        sort: 'risk',
        risk: 'high',
        age: '72h',
        assignee: 'me',
        escalated: '1',
        author: ' ana ',
        q: 'ui',
      }),
    ).toEqual({
      page: 3,
      sort: 'risk',
      risk: 'high',
      age: '72h',
      assignee: 'me',
      escalated: true,
      author: 'ana',
      q: 'ui',
    });
    expect(v({ page: 1, sort: 'oldest' })).toEqual({});
    expect(v({ page: 'x', sort: 'drop table', risk: 'critical', age: '1y', assignee: 'all', escalated: '0' })).toEqual(
      {},
    );
  });

  it('/moderation/comments keeps only the item', () => {
    const v = validate(CommentsRoute);
    expect(v({ item: 'comments:comment:9', lane: 'versions' })).toEqual({ item: 'comments:comment:9' });
    expect(v({ item: 42 })).toEqual({});
  });

  it('/moderation/reports drops the default status and unknown values', () => {
    const v = validate(ReportsRoute);
    expect(v({ status: 'resolved' })).toEqual({ status: 'resolved' });
    expect(v({ status: 'open' })).toEqual({});
    expect(v({ status: 'bogus' })).toEqual({});
  });

  it('/moderation/reports keeps filters and the sort that is not the default of its status', () => {
    const v = validate(ReportsRoute);
    expect(v({ reason: 'spam', targetType: 'comment', q: 'bot', page: 2 })).toEqual({
      reason: 'spam',
      targetType: 'comment',
      q: 'bot',
      page: 2,
    });
    expect(v({ sort: 'oldest' })).toEqual({});
    expect(v({ sort: 'newest' })).toEqual({ sort: 'newest' });
    expect(v({ status: 'resolved', sort: 'newest' })).toEqual({ status: 'resolved' });
    expect(v({ status: 'resolved', sort: 'oldest' })).toEqual({ status: 'resolved', sort: 'oldest' });
    expect(v({ reason: 'bogus', targetType: 'galaxy' })).toEqual({});
  });

  it('/moderation/users trims the query and bounds the page', () => {
    const v = validate(UsersRoute);
    expect(v({ q: '  ana  ', page: '3' })).toEqual({ q: 'ana', page: 3 });
    expect(v({ q: '   ', page: 1 })).toEqual({});
    expect(v({ page: 'x' })).toEqual({});
    expect(v({ page: 10_001 })).toEqual({});
    expect((v({ q: 'a'.repeat(300) }) as { q: string }).q).toHaveLength(100);
  });

  it('/moderation/users keeps role, status, verified, sort and page size', () => {
    const v = validate(UsersRoute);
    expect(v({ role: 'admin', status: 'banned', verified: '1', sort: 'reports', size: '50' })).toEqual({
      role: 'admin',
      status: 'banned',
      verified: '1',
      sort: 'reports',
      size: 50,
    });
    expect(v({ sort: 'newest', size: 25, role: 'root', status: 'gone', verified: 'yes' })).toEqual({});
  });

  it('/moderation/audit keeps dates, sort, page and page size, and drops bad dates', () => {
    const v = validate(AuditRoute);
    expect(v({ from: '2026-10-01', to: '2026-10-05', q: 'spam', sort: 'oldest', page: 2, size: 100 })).toEqual({
      from: '2026-10-01',
      to: '2026-10-05',
      q: 'spam',
      sort: 'oldest',
      page: 2,
      size: 100,
    });
    expect(v({ from: '01/10/2026', to: '2026-13-45', sort: 'newest', size: 50 })).toEqual({});
  });

  it('/moderation/audit keeps bounded text filters and a valid target', () => {
    const v = validate(AuditRoute);
    const result = v({ actor: 'ana', action: 'mod.approve', target: 'nope target!' }) as Record<string, unknown>;
    expect(result).toMatchObject({ actor: 'ana', action: 'mod.approve' });
    expect(result.target).toBeUndefined();
  });
});
