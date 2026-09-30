import { describe, expect, it } from 'vitest';
import { DEFAULT_MODERATION_TEMPLATES, resolveReason } from '../settings/templates.ts';
import { modAllowedActions, modTarget, versionAllowedActions } from './decisions.ts';
import { fileDiff, manifestDiff } from './item.ts';
import { reportRisk, riskOf } from './shared.ts';

const facts = (over: Partial<Parameters<typeof riskOf>[0]> = {}) => ({
  flags: [],
  checksStatus: 'passed',
  scanVerdict: 'clean',
  scanPositives: 0,
  verifiedAuthor: true,
  ...over,
});

describe('queue risk (PLAN §7.4)', () => {
  it('is high for malware verdicts, ≥ 3 detections, failed checks and flagged executables', () => {
    expect(riskOf(facts({ scanVerdict: 'malicious' }))).toBe('high');
    expect(riskOf(facts({ scanVerdict: 'suspicious', scanPositives: 3 }))).toBe('high');
    expect(riskOf(facts({ checksStatus: 'failed' }))).toBe('high');
    expect(riskOf(facts({ flags: [{ code: 'extension_flagged', severity: 'warning' } as never] }))).toBe('high');
    expect(riskOf(facts({ flags: [{ code: 'manifest_invalid', severity: 'error' } as never] }))).toBe('high');
  });

  it('is medium for 1–2 detections, other flags, and unscanned files of unverified authors', () => {
    expect(riskOf(facts({ scanVerdict: 'suspicious', scanPositives: 1 }))).toBe('medium');
    expect(riskOf(facts({ scanPositives: 2 }))).toBe('medium');
    expect(riskOf(facts({ flags: [{ code: 'large_file', severity: 'info' } as never] }))).toBe('medium');
    for (const verdict of [null, 'pending', 'unknown']) {
      expect(riskOf(facts({ scanVerdict: verdict, verifiedAuthor: false }))).toBe('medium');
      expect(riskOf(facts({ scanVerdict: verdict, verifiedAuthor: true }))).toBe('low');
    }
    expect(riskOf(facts())).toBe('low');
  });

  it('rates reports by reason and by the reports already open on the target', () => {
    expect(reportRisk('malware', 0)).toBe('high');
    expect(reportRisk('illegal', 0)).toBe('high');
    expect(reportRisk('broken', 3)).toBe('high');
    expect(reportRisk('harassment', 0)).toBe('medium');
    expect(reportRisk('nsfw_unmarked', 0)).toBe('medium');
    expect(reportRisk('reupload', 0)).toBe('medium');
    expect(reportRisk('broken', 2)).toBe('medium');
    expect(reportRisk('broken', 1)).toBe('low');
  });
});

describe('file and manifest diffs', () => {
  const e = (path: string, size: number, crc32 = 1) => ({ path, size, compressed: size, crc32 });

  it('lists added, removed and changed files, ignoring directories and unknown CRCs', () => {
    const before = [e('Mod/', 0), e('Mod/a.dll', 10, 5), e('Mod/b.txt', 3), e('Mod/c.json', 4, 0)];
    const after = [e('Mod/', 0), e('Mod/a.dll', 10, 6), e('Mod/c.json', 4, 9), e('Mod/d.png', 7)];
    expect(fileDiff(before, after)).toEqual({
      added: [{ path: 'Mod/d.png', size: 7 }],
      removed: [{ path: 'Mod/b.txt', size: 3 }],
      changed: [{ path: 'Mod/a.dll', sizeBefore: 10, sizeAfter: 10, crcChanged: true }],
    });
  });

  it('reports size changes even when the CRC is unknown, sorted by path', () => {
    const diff = fileDiff([e('z', 1, 0), e('a', 1, 0)], [e('z', 2, 0), e('a', 3, 0)]);
    expect(diff.changed.map((c) => [c.path, c.crcChanged])).toEqual([
      ['a', false],
      ['z', false],
    ]);
  });

  it('compares the manifest by top-level field', () => {
    expect(
      manifestDiff({ id: 'X', version: '1.0.0', deps: ['A'] }, { id: 'X', version: '1.1.0', deps: ['A', 'B'] }),
    ).toEqual([
      { field: 'deps', before: ['A'], after: ['A', 'B'] },
      { field: 'version', before: '1.0.0', after: '1.1.0' },
    ]);
    expect(manifestDiff(null, { id: 'X' })).toEqual([{ field: 'id', before: null, after: 'X' }]);
    expect(manifestDiff({ id: 'X' }, null)).toEqual([]);
  });
});

describe('allowed decisions', () => {
  it('follows the status machine per role', () => {
    expect(modAllowedActions('pending', 'moderator')).toEqual(['approve', 'reject', 'request_changes']);
    expect(modAllowedActions('published', 'moderator')).toEqual(['unlist', 'remove']);
    expect(modAllowedActions('unlisted', 'moderator')).toEqual(['approve', 'remove']);
    expect(modAllowedActions('archived', 'moderator')).toEqual(['remove']);
    // Restoring a removed mod is an admin action.
    expect(modAllowedActions('removed', 'moderator')).toEqual([]);
    expect(modAllowedActions('removed', 'admin')).toEqual(['restore']);
    expect(modAllowedActions('rejected', 'admin')).toEqual([]);
    expect(modTarget('request_changes', 'pending')).toBe('pending');
    expect(modTarget('approve', 'published')).toBeNull();
  });

  it('allows version decisions only on visible mods; restoring a rejected published version is admin-only', () => {
    const published = new Date('2026-09-01T00:00:00Z');
    expect(versionAllowedActions({ status: 'pending', publishedAt: null }, 'published', 'moderator')).toEqual([
      'approve',
      'reject',
      'request_changes',
    ]);
    expect(versionAllowedActions({ status: 'active', publishedAt: published }, 'published', 'moderator')).toEqual([
      'approve',
      'reject',
      'remove',
    ]);
    expect(versionAllowedActions({ status: 'rejected', publishedAt: published }, 'published', 'moderator')).toEqual([]);
    expect(versionAllowedActions({ status: 'rejected', publishedAt: published }, 'published', 'admin')).toEqual([
      'restore',
    ]);
    expect(versionAllowedActions({ status: 'rejected', publishedAt: null }, 'published', 'admin')).toEqual([]);
    for (const status of ['pending', 'removed', 'rejected'] as const) {
      expect(versionAllowedActions({ status: 'pending', publishedAt: null }, status, 'admin')).toEqual([]);
    }
    expect(versionAllowedActions({ status: 'yanked', publishedAt: published }, 'published', 'admin')).toEqual([]);
  });
});

describe('decision reasons', () => {
  it('uses the English template text plus the note', () => {
    expect(resolveReason(DEFAULT_MODERATION_TEMPLATES, 'reject', 'spam', '  see the links ')).toEqual({
      text: 'Spam or advertising.\n\nsee the links',
      templateKey: 'spam',
    });
    expect(resolveReason(DEFAULT_MODERATION_TEMPLATES, 'reject', undefined, '  just a note ')).toEqual({
      text: 'just a note',
      templateKey: null,
    });
    expect(resolveReason(DEFAULT_MODERATION_TEMPLATES, 'reject', undefined, '   ')).toEqual({
      text: null,
      templateKey: null,
    });
  });

  it('refuses unknown templates and templates of another action', () => {
    expect(() => resolveReason(DEFAULT_MODERATION_TEMPLATES, 'reject', 'nope', undefined)).toThrow(
      /Unknown reason template/,
    );
    expect(() => resolveReason(DEFAULT_MODERATION_TEMPLATES, 'remove', 'spam', undefined)).toThrow(/another action/);
  });

  it('falls back to any locale when the template has no English text and caps the length', () => {
    const templates = [{ key: 'x', action: 'reject', messages: { es: 'Solo español' } }] as never;
    expect(resolveReason(templates, 'reject', 'x', undefined).text).toBe('Solo español');
    const long = resolveReason(templates, 'reject', 'x', 'n'.repeat(5000)).text ?? '';
    expect(long.length).toBe(2000);
  });
});
