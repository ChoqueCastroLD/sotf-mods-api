import { describe, expect, it } from 'vitest';
import { trustedDomains } from './trusted-domains.ts';

describe('trustedDomains (security.allowedDomains)', () => {
  it('trusts https for the public site and its www alias by default', () => {
    expect(trustedDomains(undefined)).toEqual([
      { hostname: 'sotf-mods.com', protocol: 'https' },
      { hostname: 'www.sotf-mods.com', protocol: 'https' },
    ]);
    expect(trustedDomains('')).toEqual(trustedDomains(undefined));
  });

  it('follows PUBLIC_SITE_URL (staging, local development) and never lists another host', () => {
    expect(trustedDomains('https://beta.sotf-mods.com')).toEqual([
      { hostname: 'beta.sotf-mods.com', protocol: 'https' },
      { hostname: 'www.beta.sotf-mods.com', protocol: 'https' },
    ]);
    expect(trustedDomains('http://127.0.0.1:47321')[0]).toEqual({ hostname: '127.0.0.1', protocol: 'http' });
    expect(trustedDomains('https://www.sotf-mods.com')[0]).toEqual({ hostname: 'sotf-mods.com', protocol: 'https' });
  });
});
