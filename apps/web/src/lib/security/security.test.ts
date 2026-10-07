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

  it('finalizes the policy of a 304 that revalidates a document (no Content-Type) like the 200', () => {
    const options = {
      siteEnv: 'production',
      siteUrl: 'https://sotf-mods.com',
      r2PublicBaseUrl: 'https://media.example',
      storageUploadOrigin: '',
      cspMode: 'enforce' as const,
    };
    // What the origin cache sends back: the stored (unfinalized) policy, no Content-Type.
    const revalidation = new Headers({ 'content-security-policy': RENDERED });
    const headers = applySecurityHeaders(revalidation, { ...options, status: 304 }, '/mods/a/b');
    const policy = headers.get('content-security-policy');
    expect(directive(policy, 'frame-ancestors')).toEqual(["'none'"]);
    expect(directive(policy, 'img-src')).toContain('https://media.example');
    expect(policy).toContain('upgrade-insecure-requests');
    expect(policy).toContain('report-uri');
    // A 304 without a rendered document policy (assets, JSON) keeps the strict non-document one.
    const asset = applySecurityHeaders(new Headers(), { ...options, status: 304 }, '/_astro/a.js');
    expect(asset.get('content-security-policy')).toContain("default-src 'none'");
  });

  it('keeps a revalidated document report-only in report-only mode', () => {
    const headers = applySecurityHeaders(
      new Headers({ 'content-security-policy': RENDERED }),
      {
        siteEnv: 'staging',
        siteUrl: 'https://staging.sotf-mods.com',
        r2PublicBaseUrl: 'https://r2.sotf-mods.com',
        storageUploadOrigin: '',
        cspMode: 'report-only',
        status: 304,
      },
      '/',
    );
    expect(headers.get('content-security-policy')).toBe("frame-ancestors 'none'");
    expect(headers.get('content-security-policy-report-only')).toContain("script-src 'self'");
  });

  it('chooses the delivery mode per environment unless overridden', () => {
    expect(cspModeFor('staging')).toBe('report-only');
    expect(cspModeFor('production')).toBe('enforce');
    expect(cspModeFor('staging', 'enforce')).toBe('enforce');
    expect(cspModeFor('production', 'report-only')).toBe('report-only');
  });
});
