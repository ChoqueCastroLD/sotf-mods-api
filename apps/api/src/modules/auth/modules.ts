/**
 * The account modules with shared options (tests inject fakes for Turnstile, HIBP and the
 * export storage through here).
 */

import type { ApiModule } from '../../lib/define-module.ts';
import { createAccountModule } from '../account/module.ts';
import { createMeModule } from '../me/module.ts';
import { createSecurityModule } from '../security/module.ts';
import { createOAuthModule } from '../oauth/module.ts';
import { createTokensModule } from '../tokens/module.ts';
import { createAuthModule } from './module.ts';
import type { AccountServicesOptions } from './services.ts';

export function createAccountModules(options: AccountServicesOptions = {}): ApiModule[] {
  return [
    createAuthModule(options),
    createMeModule(options),
    createAccountModule(options),
    createSecurityModule(options),
    createTokensModule(options),
    createOAuthModule(options),
  ];
}
