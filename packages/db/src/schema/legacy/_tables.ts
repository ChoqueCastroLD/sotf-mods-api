/**
 * The 16 legacy tables (PLAN §6.2), in the order of the baseline. Not part of the generated
 * barrel (leading underscore): used by the guard and the tests.
 */
import type { PgTable } from 'drizzle-orm/pg-core';
import { loginAttempt, passwordResetToken, token } from './auth.ts';
import { comment, pendingMention } from './comment.ts';
import { modDownload, modFavorite, modReview } from './engagement.ts';
import { kelvinGptMessages } from './kelvin.ts';
import { mod } from './mod.ts';
import { modImage, modVersion } from './mod-version.ts';
import { category, modToTag, tag } from './taxonomy.ts';
import { user } from './user.ts';

export const legacyTables: readonly PgTable[] = [
  user,
  token,
  passwordResetToken,
  loginAttempt,
  mod,
  modImage,
  modVersion,
  tag,
  category,
  modDownload,
  modFavorite,
  modReview,
  kelvinGptMessages,
  comment,
  pendingMention,
  modToTag,
];
