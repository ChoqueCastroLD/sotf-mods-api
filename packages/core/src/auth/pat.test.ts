import { describe, expect, it } from 'vitest';
import { looksLikePat, patAllows, patFromAuthorization, requiredPatScope } from './pat.ts';

const endpoint = (id: string, method: string, auth = 'session') => ({ id, method, auth }) as never;

describe('personal access token scopes', () => {
  it('maps reads, mod writes and social writes to their scope', () => {
    expect(requiredPatScope(endpoint('catalog.mods', 'GET', 'public'))).toBe('read');
    expect(requiredPatScope(endpoint('me.get', 'GET'))).toBe('read');
    expect(requiredPatScope(endpoint('studio.updateMod', 'PATCH'))).toBe('mods:write');
    expect(requiredPatScope(endpoint('uploads.create', 'POST'))).toBe('mods:write');
    expect(requiredPatScope(endpoint('comments.create', 'POST'))).toBe('social:write');
    expect(patAllows(endpoint('comments.create', 'POST'), ['read'])).toBe(false);
    expect(patAllows(endpoint('comments.create', 'POST'), ['read', 'social:write'])).toBe(true);
  });

  it('never lets a token reach account, auth, token, security, session or staff endpoints', () => {
    for (const [id, method] of [
      ['auth.login', 'POST'],
      ['auth.logout', 'POST'],
      ['me.changePassword', 'POST'],
      ['me.changeEmail', 'POST'],
      ['me.requestDeletion', 'POST'],
      ['me.sessions', 'GET'],
      ['me.revokeSession', 'DELETE'],
      ['me.getExport', 'GET'],
      ['tokens.list', 'GET'],
      ['tokens.create', 'POST'],
      ['security.overview', 'GET'],
      ['security.setupTotp', 'POST'],
      ['oauth.unlink', 'POST'],
    ] as const) {
      expect(patAllows(endpoint(id, method), ['read', 'mods:write', 'social:write']), id).toBe(false);
    }
    for (const auth of ['moderator', 'admin', 'internal']) {
      expect(patAllows(endpoint('studio.updateMod', 'PATCH', auth), ['read', 'mods:write', 'social:write'])).toBe(
        false,
      );
    }
  });

  it('recognises bearer tokens by shape', () => {
    const token = `sotfm_pat_${'a'.repeat(43)}`;
    expect(looksLikePat(token)).toBe(true);
    expect(looksLikePat(`${token}x`)).toBe(false);
    expect(looksLikePat(`sotfm_pat_${'a'.repeat(42)}!`)).toBe(false);
    expect(patFromAuthorization(`Bearer ${token}`)).toBe(token);
    expect(patFromAuthorization(`bearer   ${token}  `)).toBe(token);
    expect(patFromAuthorization('Bearer some-jwt')).toBeNull();
    expect(patFromAuthorization(undefined)).toBeNull();
  });
});
