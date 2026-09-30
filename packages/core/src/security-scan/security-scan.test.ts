import { describe, expect, it } from 'vitest';
import { MALICIOUS_THRESHOLD, shouldHold, verdictOf } from './service.ts';
import { parseFileReport } from './virustotal.ts';

describe('scan verdicts (PLAN §9.1 VirusTotal)', () => {
  it('maps detections to a verdict', () => {
    expect(verdictOf(0)).toBe('clean');
    expect(verdictOf(1)).toBe('suspicious');
    expect(verdictOf(MALICIOUS_THRESHOLD - 1)).toBe('suspicious');
    expect(verdictOf(MALICIOUS_THRESHOLD)).toBe('malicious');
  });

  it('holds malicious files always, and suspicious or unknown ones of untrusted authors', () => {
    expect(shouldHold('malicious', true)).toBe(true);
    expect(shouldHold('suspicious', false)).toBe(true);
    expect(shouldHold('suspicious', true)).toBe(false);
    expect(shouldHold('unknown', false)).toBe(true);
    expect(shouldHold('unknown', true)).toBe(false);
    expect(shouldHold('clean', false)).toBe(false);
  });
});

describe('VirusTotal file report', () => {
  const sha = 'a'.repeat(64);

  it('reads the analysis stats, date and the engines that detected something', () => {
    const report = parseFileReport(sha, {
      data: {
        attributes: {
          last_analysis_date: 1_727_600_000,
          last_analysis_stats: {
            malicious: 2,
            suspicious: 1,
            undetected: 60,
            harmless: 0,
            timeout: 1,
            failure: 0,
            'type-unsupported': 4,
          },
          last_analysis_results: {
            EngineA: { category: 'malicious' },
            EngineB: { category: 'suspicious' },
            EngineC: { category: 'undetected' },
            [`E${'x'.repeat(100)}`]: { category: 'malicious' },
          },
        },
      },
    });
    expect(report.sha256).toBe(sha);
    expect(report.lastAnalysisAt?.toISOString()).toBe('2024-09-29T08:53:20.000Z');
    expect(report.stats).toEqual({
      malicious: 2,
      suspicious: 1,
      undetected: 60,
      harmless: 0,
      timeout: 1,
      failure: 0,
      typeUnsupported: 4,
    });
    expect(Object.keys(report.detections)).toHaveLength(3);
    expect(report.detections.EngineA).toBe('malicious');
    expect(report.detections.EngineC).toBeUndefined();
    expect(Object.keys(report.detections).every((k) => k.length <= 60)).toBe(true);
  });

  it('has no stats while the file was never analysed, and tolerates junk', () => {
    expect(parseFileReport(sha, { data: { attributes: { last_analysis_stats: { malicious: 1 } } } }).stats).toBeNull();
    expect(parseFileReport(sha, null)).toEqual({ sha256: sha, stats: null, lastAnalysisAt: null, detections: {} });
    const odd = parseFileReport(sha, {
      data: { attributes: { last_analysis_date: 1, last_analysis_stats: { malicious: 'x', suspicious: Number.NaN } } },
    });
    expect(odd.stats?.malicious).toBe(0);
    expect(odd.stats?.suspicious).toBe(0);
  });
});
