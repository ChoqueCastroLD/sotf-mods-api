/**
 * Passkey sign-in from the browser (T1-26): asks the API for options, lets the authenticator sign
 * them and sends the result back. `@simplewebauthn/browser` is loaded on demand so the login page
 * only pays for it when somebody uses a passkey.
 */
import { type ApiResult, type AuthResult, authApi } from './api.ts';

/** `cancelled`: the user dismissed the prompt, or the device has no usable passkey. */
export type PasskeyOutcome = ApiResult<AuthResult> | { ok: false; kind: 'cancelled' };

export function passkeysSupported(): boolean {
  return typeof window !== 'undefined' && typeof window.PublicKeyCredential === 'function';
}

export async function signInWithPasskey(input: { challengeId?: string; remember: boolean }): Promise<PasskeyOutcome> {
  const started = await authApi.passkeyOptions(input.challengeId ? { challengeId: input.challengeId } : {});
  if (!started.ok) return started;
  let response: Record<string, unknown>;
  try {
    const { startAuthentication } = await import('@simplewebauthn/browser');
    response = (await startAuthentication({
      optionsJSON: started.data.options as unknown as Parameters<typeof startAuthentication>[0]['optionsJSON'],
    })) as unknown as Record<string, unknown>;
  } catch {
    return { ok: false, kind: 'cancelled' };
  }
  return authApi.passkeyVerify({ challengeId: started.data.challengeId, response, remember: input.remember });
}
