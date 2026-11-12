import { describe, expect, it } from 'vitest';
import { networksOf } from './rate-limit.ts';

describe('networksOf', () => {
  it('groups IPv4 by /24 and /16, including IPv4-mapped IPv6', () => {
    expect(networksOf('120.241.208.111')).toEqual({ network: '120.241.208.0/24', wide: '120.241.0.0/16' });
    expect(networksOf('::ffff:10.1.2.3')).toEqual({ network: '10.1.2.0/24', wide: '10.1.0.0/16' });
  });

  it('groups IPv6 by /48 and /32', () => {
    expect(networksOf('2a03:2880:f804:23::')).toEqual({ network: '2a03:2880:f804::/48', wide: '2a03:2880::/32' });
    expect(networksOf('2001:db8::1')).toEqual({ network: '2001:db8:0::/48', wide: '2001:db8::/32' });
  });

  it('ignores anything that is not an address', () => {
    expect(networksOf('unknown')).toBeNull();
  });
});
