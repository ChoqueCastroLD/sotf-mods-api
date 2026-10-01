import { ApiError } from '@sotf/contracts/client';
import { describe, expect, it } from 'vitest';
import { isTransientUpstreamError, retryAfterSeconds } from './upstream.ts';

function apiError(status: number, code: string, detail = 'x'): ApiError {
  return new ApiError('seo.resolve', {
    type: 'about:blank',
    title: 't',
    status,
    detail,
    code,
    requestId: 'r',
    instance: '/',
  } as never);
}

describe('transient upstream errors', () => {
  it('flags rate limiting and unavailable APIs', () => {
    expect(isTransientUpstreamError(apiError(429, 'RATE_LIMITED'))).toBe(true);
    expect(isTransientUpstreamError(apiError(503, 'UNAVAILABLE'))).toBe(true);
    expect(isTransientUpstreamError(apiError(502, 'INTERNAL'))).toBe(true);
  });
  it('leaves real bugs and non-API errors as 500s', () => {
    expect(isTransientUpstreamError(apiError(500, 'INTERNAL'))).toBe(false);
    expect(isTransientUpstreamError(apiError(404, 'NOT_FOUND'))).toBe(false);
    expect(isTransientUpstreamError(new TypeError('boom'))).toBe(false);
  });
  it('reads the retry hint of the limiter', () => {
    expect(retryAfterSeconds(apiError(429, 'RATE_LIMITED', 'Kelvin needs a break: try again in 7 s'))).toBe(7);
    expect(retryAfterSeconds(new Error('x'))).toBe(30);
  });
});
