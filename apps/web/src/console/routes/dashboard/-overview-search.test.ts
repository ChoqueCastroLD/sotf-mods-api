import { describe, expect, it } from 'vitest';
import { Route } from './index.tsx';

const validate = Route.options.validateSearch as (search: Record<string, unknown>) => unknown;

describe('/dashboard search params', () => {
  it('keeps the chart range and the «Needs attention» filters', () => {
    expect(validate({ range: '7d', attention: 'missing_gallery', asort: 'count', apage: '2', dismissed: '1' })).toEqual(
      {
        range: '7d',
        attention: 'missing_gallery',
        asort: 'count',
        apage: 2,
        dismissed: 1,
      },
    );
  });

  it('drops defaults, retired kinds and malformed values', () => {
    expect(validate({ range: '30d', asort: 'urgency', apage: '1' })).toEqual({});
    expect(validate({ attention: 'broken_on_current', asort: 'x', apage: 'x', dismissed: '0' })).toEqual({});
  });
});
