import { describe, expect, it } from 'vitest';
import { Route } from './analytics.tsx';

const validate = Route.options.validateSearch as (search: Record<string, unknown>) => unknown;

describe('/dashboard/analytics search params', () => {
  it('keeps the mod and a preset range, and drops the default one', () => {
    expect(validate({ mod: '12', range: '90d' })).toEqual({ mod: 12, range: '90d' });
    expect(validate({ range: '30d' })).toEqual({});
  });

  it('keeps a custom date range', () => {
    expect(validate({ range: 'custom', from: '2026-09-01', to: '2026-09-20' })).toEqual({
      range: 'custom',
      from: '2026-09-01',
      to: '2026-09-20',
    });
    expect(validate({ from: '2026-09-01', to: '2026-09-20' })).toEqual({
      range: 'custom',
      from: '2026-09-01',
      to: '2026-09-20',
    });
  });

  it('drops malformed days', () => {
    expect(validate({ range: 'custom', from: 'yesterday', to: '2026-13-45' })).toEqual({ range: 'custom' });
  });
});
