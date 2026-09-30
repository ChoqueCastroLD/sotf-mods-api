import { describe, expect, it } from 'vitest';
import { Route } from './inbox.tsx';

const validate = Route.options.validateSearch as (search: Record<string, unknown>) => unknown;

describe('/basecamp/inbox search params', () => {
  it('keeps a known kind, the «all» state and a positive mod id', () => {
    expect(validate({ type: 'comment', state: 'all', mod: '12' })).toEqual({ type: 'comment', state: 'all', mod: 12 });
  });

  it('drops unknown or malformed values', () => {
    expect(validate({ type: 'spam', state: 'open', mod: '-3' })).toEqual({});
    expect(validate({ mod: 'abc' })).toEqual({});
  });
});
