import { describe, expect, it } from 'vitest';
import { cn } from '../src/cn.ts';

describe('cn', () => {
  it('joins strings, arrays and dictionaries and skips falsy values', () => {
    expect(cn('a', null, undefined, false, 0, '', 'b')).toBe('a b');
    expect(cn(['a', ['b', false && 'x']], { c: true, d: false, e: 1 })).toBe('a b c e');
    expect(cn()).toBe('');
  });
});
