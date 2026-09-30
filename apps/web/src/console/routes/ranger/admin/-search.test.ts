import { describe, expect, it } from 'vitest';
import { Route as KelvinRoute } from './kelvinseek.tsx';
import { Route as PerformanceRoute } from './performance.tsx';
import { Route as RecategorizeRoute } from './recategorize.tsx';

type Validate = (search: Record<string, unknown>) => unknown;
const validate = (route: { options: { validateSearch?: unknown } }) => route.options.validateSearch as Validate;

describe('admin route search params', () => {
  it('/ranger/admin/kelvinseek keeps 7 or 90 days and drops the default 30', () => {
    const v = validate(KelvinRoute);
    expect(v({ days: '7' })).toEqual({ days: '7' });
    expect(v({ days: 90 })).toEqual({ days: '90' });
    expect(v({ days: '30' })).toEqual({});
    expect(v({ days: '365' })).toEqual({});
    expect(v({})).toEqual({});
  });

  it('/ranger/admin/performance keeps only 7d (28d is the default)', () => {
    const v = validate(PerformanceRoute);
    expect(v({ range: '7d' })).toEqual({ range: '7d' });
    expect(v({ range: '28d' })).toEqual({});
    expect(v({ range: '1y' })).toEqual({});
  });

  it('/ranger/admin/recategorize keeps a slug-like category and nothing else', () => {
    const v = validate(RecategorizeRoute);
    expect(v({ from: 'quality-of-life' })).toEqual({ from: 'quality-of-life' });
    expect(v({ from: 'Bad Slug!' })).toEqual({});
    expect(v({ from: 'a'.repeat(81) })).toEqual({});
    expect(v({ from: 3 })).toEqual({});
  });
});
