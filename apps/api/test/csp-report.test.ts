import { describe, expect, it } from 'vitest';
import { parseCspReports } from '../src/plugins/security/csp-report.ts';

describe('parseCspReports', () => {
  it('keeps the path of the page without the id of a shared log', () => {
    const id = 'k3Jf9xQ0mZpT2vLwYb8RaHdE';
    const [violation] = parseCspReports({
      'csp-report': {
        'document-uri': `https://sotf-mods.com/logs/${id}?x=1#L2`,
        'blocked-uri': 'https://evil.example/t.png',
        'effective-directive': 'img-src',
      },
    });
    expect(violation?.documentPath).toBe('/logs/:id');
    expect(violation?.documentOrigin).toBe('https://sotf-mods.com');
  });

  it('keeps ordinary paths as they are', () => {
    const [violation] = parseCspReports([
      {
        type: 'csp-violation',
        body: {
          documentURL: 'https://sotf-mods.com/mods/imaxel/x?y=1',
          blockedURL: 'inline',
          effectiveDirective: 'script-src',
        },
      },
    ]);
    expect(violation?.documentPath).toBe('/mods/imaxel/x');
  });
});
