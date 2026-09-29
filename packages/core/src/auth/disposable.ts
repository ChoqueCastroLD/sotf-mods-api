/**
 * Disposable email domains refused at registration and on email changes (T0-22). A curated list of
 * the most common throwaway providers; subdomains match too (`x.mailinator.com`). Existing legacy
 * accounts are never affected.
 */

export const DISPOSABLE_EMAIL_DOMAINS: ReadonlySet<string> = new Set([
  '10minutemail.com',
  '10minutemail.net',
  '20minutemail.com',
  '33mail.com',
  'anonbox.net',
  'burnermail.io',
  'byom.de',
  'cool.fr.nf',
  'crazymailing.com',
  'discard.email',
  'discardmail.com',
  'dispostable.com',
  'dropmail.me',
  'emailondeck.com',
  'emailfake.com',
  'fakeinbox.com',
  'fakemail.net',
  'filzmail.com',
  'getairmail.com',
  'getnada.com',
  'guerrillamail.biz',
  'guerrillamail.com',
  'guerrillamail.de',
  'guerrillamail.info',
  'guerrillamail.net',
  'guerrillamail.org',
  'guerrillamailblock.com',
  'harakirimail.com',
  'inboxbear.com',
  'incognitomail.org',
  'jetable.org',
  'kurzepost.de',
  'mail-temp.com',
  'mail.tm',
  'mailcatch.com',
  'maildrop.cc',
  'mailinator.com',
  'mailinator.net',
  'mailinator2.com',
  'mailnesia.com',
  'mailpoof.com',
  'mailsac.com',
  'mintemail.com',
  'moakt.com',
  'mohmal.com',
  'mytemp.email',
  'mytrashmail.com',
  'nada.email',
  'nowmymail.com',
  'one-time.email',
  'sharklasers.com',
  'spam4.me',
  'spambox.us',
  'spamgourmet.com',
  'spamex.com',
  'tempail.com',
  'tempinbox.com',
  'tempmail.com',
  'tempmail.dev',
  'tempmail.net',
  'tempmail.plus',
  'tempmailo.com',
  'temp-mail.io',
  'temp-mail.org',
  'tempr.email',
  'throwawaymail.com',
  'trash-mail.com',
  'trashmail.com',
  'trashmail.de',
  'trashmail.net',
  'wegwerfmail.de',
  'wegwerfmail.net',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
]);

/** Lower-case domain of an email address ('' when there is none). */
export function emailDomain(email: string): string {
  const at = email.lastIndexOf('@');
  return at < 0
    ? ''
    : email
        .slice(at + 1)
        .trim()
        .toLowerCase()
        .replace(/\.$/, '');
}

/** True when the address belongs to a known disposable provider (or one of its subdomains). */
export function isDisposableEmail(email: string): boolean {
  const domain = emailDomain(email);
  if (!domain) return false;
  const labels = domain.split('.');
  for (let i = 0; i < labels.length - 1; i += 1) {
    if (DISPOSABLE_EMAIL_DOMAINS.has(labels.slice(i).join('.'))) return true;
  }
  return false;
}

/** `lower(trim(email))`: the form stored in "User"."emailNormalized". */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}
