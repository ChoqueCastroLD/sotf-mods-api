import { describe, expect, it } from 'vitest';
import { allowedRoles, changeWhere, impliedDedicated, normalizeWhere, type WhereAnswers } from './where.ts';

const empty: WhereAnswers = { platform: null, multiplayerRole: null, dedicatedServer: null, safeToRemove: null };

describe('normalizeWhere', () => {
  it('server: host only, dedicated yes, whatever was sent', () => {
    expect(
      normalizeWhere({ ...empty, platform: 'Server', multiplayerRole: 'singleplayer_only', dedicatedServer: 'no' }),
    ).toMatchObject({
      multiplayerRole: 'host_only',
      dedicatedServer: 'yes',
    });
    expect(normalizeWhere({ ...empty, platform: 'Server' })).toMatchObject({
      multiplayerRole: 'host_only',
      dedicatedServer: 'yes',
    });
    expect(normalizeWhere({ ...empty, platform: 'Server', multiplayerRole: 'unknown' }).multiplayerRole).toBe(
      'unknown',
    );
  });

  it('client, single player only and client side never run on a dedicated server', () => {
    expect(normalizeWhere({ ...empty, platform: 'Client', dedicatedServer: 'yes' }).dedicatedServer).toBe('no');
    expect(
      normalizeWhere({
        ...empty,
        platform: 'Universal',
        multiplayerRole: 'singleplayer_only',
        dedicatedServer: 'partial',
      }).dedicatedServer,
    ).toBe('no');
    expect(normalizeWhere({ ...empty, multiplayerRole: 'client_side', dedicatedServer: 'yes' }).dedicatedServer).toBe(
      'no',
    );
  });

  it('leaves open answers alone', () => {
    const input = {
      ...empty,
      platform: 'Universal' as const,
      multiplayerRole: 'all_players' as const,
      dedicatedServer: 'partial' as const,
      safeToRemove: 'yes' as const,
    };
    expect(normalizeWhere(input)).toEqual(input);
    expect(impliedDedicated('Universal', 'host_only')).toBeNull();
    expect(allowedRoles('Client')).toHaveLength(5);
  });
});

describe('changeWhere', () => {
  it('replaces a role the platform rules out and says so', () => {
    const start = { ...empty, platform: 'Universal' as const, multiplayerRole: 'all_players' as const };
    const out = changeWhere(start, { platform: 'Server' });
    expect(out.answers).toMatchObject({ platform: 'Server', multiplayerRole: 'host_only', dedicatedServer: 'yes' });
    expect(out.roleReplaced).toBe(true);
  });

  it('clears an implied dedicated answer when the implication lifts', () => {
    const client = changeWhere({ ...empty, platform: 'Universal' }, { platform: 'Client' }).answers;
    expect(client.dedicatedServer).toBe('no');
    const back = changeWhere(client, { platform: 'Universal' }).answers;
    expect(back.dedicatedServer).toBeNull();
  });

  it('drops the host only answer implied by the server platform when leaving it', () => {
    const server = changeWhere({ ...empty, platform: 'Universal' }, { platform: 'Server' }).answers;
    expect(server.multiplayerRole).toBe('host_only');
    expect(changeWhere(server, { platform: 'Client' }).answers.multiplayerRole).toBeNull();
    expect(changeWhere({ ...server, multiplayerRole: 'unknown' }, { platform: 'Client' }).answers.multiplayerRole).toBe(
      'unknown',
    );
  });

  it('keeps an explicit dedicated answer', () => {
    const out = changeWhere({ ...empty, platform: 'Universal' }, { dedicatedServer: 'partial' });
    expect(out.answers.dedicatedServer).toBe('partial');
    expect(out.roleReplaced).toBe(false);
  });
});
