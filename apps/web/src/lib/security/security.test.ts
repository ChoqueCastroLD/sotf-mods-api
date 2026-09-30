import { describe, expect, it } from 'vitest';
import { cspModeFor, parsePolicy } from './csp.ts';
import { applySecurityHeaders } from './headers.ts';

const RENDERED = "default-src 'self'; script-src 'self'; connect-src 'self' https://*.r2.cloudflarestorage.com";

function htmlHeaders(): Headers {
  return new Headers({ 'content-type': 'text/html; charset=utf-8', 'content-security-policy': RENDERED });
}

function directive(policy: string | null, name: string): string[] {
  return parsePolicy(policy ?? '').find(([key]) => key === name)?.[1] ?? [];
}

describe('security headers (WP-93)', () => {
  it('adds the S3 upload endpoint to connect-src only (WP-70, WP-74)', () => {
    const headers = applySecurityHeaders(
      htmlHeaders(),
      {
        siteEnv: 'production',
        siteUrl: 'https://sotf-mods.com',
        r2PublicBaseUrl: 'https://r2.sotf-mods.com',
        storageUploadOrigin: 'https://s3.staging.example',
        cspMode: 'enforce',
      },
      '/',
    );
    const policy = headers.get('content-security-policy');
    expect(directive(policy, 'connect-src')).toContain('https://s3.staging.example');
    expect(directive(policy, 'img-src')).not.toContain('https://s3.staging.example');
    expect(directive(policy, 'frame-ancestors')).toEqual(["'none'"]);
    expect(policy).toContain('upgrade-insecure-requests');
  });

  it('leaves connect-src alone without an upload endpoint in production', () => {
    const headers = applySecurityHeaders(
      htmlHeaders(),
      {
        siteEnv: 'production',
        siteUrl: 'https://sotf-mods.com',
        r2PublicBaseUrl: 'https://r2.sotf-mods.com',
        storageUploadOrigin: '',
        cspMode: 'enforce',
      },
      '/',
    );
    expect(directive(headers.get('content-security-policy'), 'connect-src')).toEqual([
      "'self'",
      'https://*.r2.cloudflarestorage.com',
    ]);
  });

  it('chooses the delivery mode per environment unless overridden', () => {
    expect(cspModeFor('staging')).toBe('report-only');
    expect(cspModeFor('production')).toBe('enforce');
    expect(cspModeFor('staging', 'enforce')).toBe('enforce');
    expect(cspModeFor('production', 'report-only')).toBe('report-only');
  });
});
