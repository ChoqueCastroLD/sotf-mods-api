/**
 * `/requests/new` for members: the request form, posting to `POST /api/v2/requests` and going to
 * the new request. Members without a verified e-mail see why they cannot post (the API also
 * enforces the rule, the 24 h account age and the per-member limits).
 */
import { ButtonLink } from '@sotf/ui/button';
import { api } from '../comments/lib/api.ts';
import { t } from '../comments/lib/messages.ts';
import { notify } from '../comments/lib/ui.tsx';
import { RequestForm } from './RequestForm.tsx';
import { REQUEST_LIMITS } from './rules.ts';
import type { RequestDTO } from './types.ts';

export interface NewRequestIslandProps {
  session: { emailVerified: boolean };
  verifyHref: string;
  listHref: string;
}

export function NewRequestIsland({ session, verifyHref, listHref }: NewRequestIslandProps) {
  if (!session.emailVerified) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-border py-4">
        <p className="text-sm text-fg">{t('requests_verify_hint')}</p>
        <ButtonLink href={verifyHref} variant="secondary">
          {t('social_verify_action')}
        </ButtonLink>
      </div>
    );
  }
  return (
    <div className="grid gap-3">
      <p className="text-sm text-fg-muted">
        {t('requests_limits', { open: REQUEST_LIMITS.maxOpenPerUser, perDay: REQUEST_LIMITS.perDay })}
      </p>
      <RequestForm
        autoFocus
        submitLabel={t('requests_submit_create')}
        onSubmit={async ({ title, bodyMd }) => {
          const result = await api<RequestDTO>('POST', '/api/v2/requests', {
            title,
            ...(bodyMd ? { bodyMd } : {}),
          });
          if (!result.ok) return result;
          notify(t('requests_created_done'));
          location.assign(`${listHref}/${result.data.id}`);
          return null;
        }}
      />
    </div>
  );
}
