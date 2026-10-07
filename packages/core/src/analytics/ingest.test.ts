import { describe, expect, it } from 'vitest';
import { cleanPath } from './ingest.ts';

describe('cleanPath', () => {
  it('drops the query string and the fragment', () => {
    expect(cleanPath('/mods/imaxel/axel?utm=1#top')).toBe('/mods/imaxel/axel');
    expect(cleanPath('reset-password?token=abc')).toBe('/reset-password');
  });

  it('never keeps the id of a shared log (the link is the secret)', () => {
    const id = 'k3Jf9xQ0mZpT2vLwYb8RaHdE';
    expect(cleanPath(`/logs/${id}`)).toBe('/logs/:id');
    expect(cleanPath(`/es/logs/${id}?x=1#L10`)).toBe('/es/logs/:id');
    expect(cleanPath(`/logs/${id}/`)).toBe('/logs/:id/');
    // Other paths and the log tool itself are unchanged.
    expect(cleanPath('/logs')).toBe('/logs');
    expect(cleanPath('/blogs/k3Jf9xQ0mZpT2vLwYb8RaHdE')).toBe('/blogs/k3Jf9xQ0mZpT2vLwYb8RaHdE');
    expect(cleanPath('/logs/short')).toBe('/logs/short');
  });
});
