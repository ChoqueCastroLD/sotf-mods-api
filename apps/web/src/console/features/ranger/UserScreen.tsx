/**
 * `/moderation/users/$userId` — a user as seen by moderation (PLAN §7.4 «Usuarios»): account facts,
 * activity, trust, sanctions (active and past, revocable), the verified creator flag, the role
 * (admins only; admins are managed with `pnpm admin:grant`), «sign out everywhere» and the
 * audit trail of the account. Staff act only below their own role and never on themselves; the
 * API enforces it and the screen hides what cannot succeed.
 */
import { m } from '@sotf/i18n/messages';
import { Avatar } from '@sotf/ui/avatar';
import { Badge } from '@sotf/ui/badge';
import { Button } from '@sotf/ui/button';
import { ConfirmDialog, Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Select } from '@sotf/ui/select';
import { Switch } from '@sotf/ui/switch';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ExternalLink, Gavel, LogOut, ScrollText, ShieldOff } from 'lucide-react';
import { type FormEvent, useId, useState } from 'react';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { useMe } from '../../hooks/use-me.ts';
import { notify } from '../../lib/notify.ts';
import { ROLES, type Role, rangerApi, type Sanction, storeUser, userQuery } from './api.ts';
import { roleLabel, sanctionLabel } from './labels.ts';
import { SanctionDialog } from './SanctionDialog.tsx';
import { dateTime, number, profileHref, reportFailure, ScreenHeader, UserChip } from './shared.tsx';

const RANK: Record<Role, number> = { user: 0, moderator: 1, admin: 2 };

export function UserScreen({ userId }: { userId: number }) {
  const me = useMe();
  const queryClient = useQueryClient();
  const { data: user } = useSuspenseQuery(userQuery(userId));
  const [sanctioning, setSanctioning] = useState(false);
  const [revoking, setRevoking] = useState<Sanction | null>(null);
  const [signingOut, setSigningOut] = useState(false);
  const [verifying, setVerifying] = useState<boolean | null>(null);
  const [roleDraft, setRoleDraft] = useState<Role | null>(null);
  const name = user.user.displayName || user.user.handle;
  useDocumentTitle(m.ranger_user_document_title({ name }));

  const self = me.user.id === user.user.id;
  // Staff act only on accounts below their own role (moderators on users, admins on moderators too).
  const outranks = RANK[me.user.role] > RANK[user.role];
  const canAct = !self && outranks;
  const isAdmin = me.user.role === 'admin';
  const refresh = async () => {
    await queryClient.invalidateQueries({ queryKey: userQuery(userId).queryKey });
  };

  const now = Date.now();
  const active = user.sanctions.filter(
    (sanction) => sanction.revokedAt === null && (sanction.endsAt === null || Date.parse(sanction.endsAt) > now),
  );
  const past = user.sanctions.filter((sanction) => !active.includes(sanction));

  return (
    <div className="grid gap-6">
      <ScreenHeader
        readout={m.ranger_users_title()}
        title={name}
        actions={
          <>
            <a
              href={profileHref(user.user.handle)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm text-link hover:bg-fg/8"
            >
              {m.ranger_user_public_profile()}
              <Icon icon={ExternalLink} size={14} />
              <span className="sr-only">{m.ranger_new_tab()}</span>
            </a>
            <Link
              to="/moderation/audit"
              search={{ target: `user:${user.user.id}` }}
              className="inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm text-link hover:bg-fg/8"
            >
              <Icon icon={ScrollText} size={14} />
              {m.ranger_user_audit()}
            </Link>
          </>
        }
      />

      <section
        aria-labelledby="ranger-user-account"
        className="grid gap-4 rounded-lg border border-border bg-surface p-4 md:grid-cols-[auto_1fr]"
      >
        <Avatar name={name} id={user.user.id} src={user.user.avatarUrl} size={64} />
        <div className="grid gap-2">
          <h2 id="ranger-user-account" className="sr-only">
            {m.ranger_user_account()}
          </h2>
          <p className="text-sm text-fg">
            @{user.user.handle} · {user.email}{' '}
            <Badge variant={user.emailVerified ? 'success' : 'warning'} size="sm">
              {user.emailVerified ? m.ranger_user_email_verified() : m.ranger_user_email_unverified()}
            </Badge>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={user.role === 'user' ? 'neutral' : 'blueprint'} size="sm">
              {roleLabel(user.role)}
            </Badge>
            {user.verifiedCreator ? (
              <Badge variant="signal" size="sm">
                {m.ranger_verified_creator()}
              </Badge>
            ) : null}
            {user.legacyTrusted ? (
              <Badge variant="outline-mono" size="sm">
                {m.ranger_user_legacy_trusted()}
              </Badge>
            ) : null}
            {user.bannedAt ? (
              <Badge variant="danger" size="sm">
                {m.ranger_user_banned_on({ date: dateTime(user.bannedAt) })}
              </Badge>
            ) : null}
            {user.suspendedUntil && Date.parse(user.suspendedUntil) > now ? (
              <Badge variant="warning" size="sm">
                {m.ranger_user_suspended_until({ date: dateTime(user.suspendedUntil) })}
              </Badge>
            ) : null}
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-4">
            <Fact label={m.ranger_user_joined()} value={dateTime(user.createdAt)} />
            <Fact label={m.ranger_user_last_seen()} value={user.lastSeenAt ? dateTime(user.lastSeenAt) : '-'} />
            <Fact label={m.ranger_history_trust()} value={m.ranger_trust_level({ level: user.trustLevel })} />
            <Fact label={m.ranger_user_mods()} value={number(user.stats.mods)} />
            <Fact label={m.ranger_user_comments()} value={number(user.stats.comments)} />
            <Fact label={m.ranger_user_reviews()} value={number(user.stats.reviews)} />
            <Fact label={m.ranger_user_reports_against()} value={number(user.stats.reportsAgainst)} />
          </dl>
        </div>
      </section>

      <section aria-labelledby="ranger-user-actions" className="grid gap-4">
        <h2 id="ranger-user-actions" className="font-display text-lg text-fg">
          {m.ranger_user_actions()}
        </h2>
        {!canAct ? (
          <p className="text-sm text-fg-muted">{self ? m.ranger_user_self() : m.ranger_user_outranked()}</p>
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              <Button variant="danger" icon={<Icon icon={Gavel} size={16} />} onClick={() => setSanctioning(true)}>
                {m.ranger_sanction_open()}
              </Button>
              <Button variant="secondary" icon={<Icon icon={LogOut} size={16} />} onClick={() => setSigningOut(true)}>
                {m.ranger_user_revoke_sessions()}
              </Button>
            </div>
            <div className="grid max-w-xl gap-4 rounded-lg border border-border bg-surface p-4">
              <Switch
                label={m.ranger_verified_creator()}
                description={m.ranger_user_verified_hint()}
                checked={user.verifiedCreator}
                onCheckedChange={(value) => setVerifying(value)}
              />
              {isAdmin && user.role !== 'admin' ? (
                <div className="flex flex-wrap items-end gap-2">
                  <Select
                    label={m.ranger_user_role()}
                    value={roleDraft ?? user.role}
                    onValueChange={(value) => setRoleDraft(value)}
                    options={ROLES.filter((role) => role !== 'admin').map((role) => ({
                      value: role,
                      label: roleLabel(role),
                    }))}
                    description={m.ranger_user_role_hint()}
                    className="min-w-48"
                  />
                </div>
              ) : null}
            </div>
          </>
        )}
      </section>

      <section aria-labelledby="ranger-user-sanctions" className="grid gap-3">
        <h2 id="ranger-user-sanctions" className="font-display text-lg text-fg">
          {m.ranger_user_sanctions()}
        </h2>
        {user.sanctions.length === 0 ? (
          <p className="text-sm text-fg-muted">{m.ranger_user_no_sanctions()}</p>
        ) : (
          <ul className="grid gap-2">
            {[...active, ...past].map((sanction) => (
              <SanctionRow
                key={sanction.id}
                sanction={sanction}
                active={active.includes(sanction)}
                canRevoke={canAct}
                onRevoke={() => setRevoking(sanction)}
              />
            ))}
          </ul>
        )}
      </section>

      <SanctionDialog
        open={sanctioning}
        onOpenChange={setSanctioning}
        userId={user.user.id}
        userName={name}
        onDone={(sanction) => {
          notify.success(m.ranger_sanction_done({ kind: sanctionLabel(sanction.kind), name }));
          void refresh();
        }}
      />
      <ConfirmDialog
        open={revoking !== null}
        onOpenChange={(open) => {
          if (!open) setRevoking(null);
        }}
        title={m.ranger_sanction_revoke_title()}
        description={revoking ? `${sanctionLabel(revoking.kind)} · ${revoking.reason}` : ''}
        confirmLabel={m.ranger_sanction_revoke()}
        onConfirm={async () => {
          if (!revoking) return;
          try {
            await rangerApi.revokeSanction(revoking.id);
            notify.success(m.ranger_sanction_revoked());
            await refresh();
          } catch (error) {
            reportFailure(error, m.ranger_sanction_revoke_failed());
            throw error;
          }
        }}
      />
      <ConfirmDialog
        open={signingOut}
        onOpenChange={setSigningOut}
        title={m.ranger_user_revoke_sessions_title({ name })}
        description={m.ranger_user_revoke_sessions_text()}
        confirmLabel={m.ranger_user_revoke_sessions()}
        tone="danger"
        onConfirm={async () => {
          try {
            const result = await rangerApi.revokeSessions(user.user.id);
            notify.success(m.ranger_user_sessions_revoked({ count: result.revoked }));
          } catch (error) {
            reportFailure(error, m.ranger_user_action_failed());
            throw error;
          }
        }}
      />
      <ReasonConfirm
        open={verifying !== null}
        onOpenChange={(open) => {
          if (!open) setVerifying(null);
        }}
        title={verifying ? m.ranger_user_verify_title({ name }) : m.ranger_user_unverify_title({ name })}
        confirmLabel={verifying ? m.ranger_user_verify() : m.ranger_user_unverify()}
        onConfirm={async (reason) => {
          if (verifying === null) return;
          try {
            storeUser(queryClient, await rangerApi.setVerifiedCreator(user.user.id, verifying, reason));
            notify.success(verifying ? m.ranger_user_verified_done({ name }) : m.ranger_user_unverified_done({ name }));
          } catch (error) {
            reportFailure(error, m.ranger_user_action_failed());
            throw error;
          }
        }}
      />
      <ReasonConfirm
        open={roleDraft !== null && roleDraft !== user.role}
        onOpenChange={(open) => {
          if (!open) setRoleDraft(null);
        }}
        title={m.ranger_user_role_title({ name, role: roleLabel(roleDraft ?? user.role) })}
        confirmLabel={m.ranger_user_role_confirm()}
        onConfirm={async (reason) => {
          if (!roleDraft) return;
          try {
            storeUser(queryClient, await rangerApi.setRole(user.user.id, roleDraft, reason));
            notify.success(m.ranger_user_role_done({ name, role: roleLabel(roleDraft) }));
            setRoleDraft(null);
          } catch (error) {
            reportFailure(error, m.ranger_user_action_failed());
            throw error;
          }
        }}
      />
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-fg-muted">{label}</dt>
      <dd className="text-fg tabular-nums">{value}</dd>
    </div>
  );
}

function SanctionRow({
  sanction,
  active,
  canRevoke,
  onRevoke,
}: {
  sanction: Sanction;
  active: boolean;
  canRevoke: boolean;
  onRevoke: () => void;
}) {
  return (
    <li className="flex flex-wrap items-start justify-between gap-3 rounded-md border border-border bg-surface p-3">
      <div className="grid min-w-0 gap-1">
        <p className="flex flex-wrap items-center gap-2">
          <Badge variant={active ? 'danger' : 'neutral'} size="sm">
            {sanctionLabel(sanction.kind)}
          </Badge>
          <span className="text-xs text-fg-muted">
            {active
              ? sanction.endsAt
                ? m.ranger_sanction_until({ date: dateTime(sanction.endsAt) })
                : m.ranger_sanction_permanent()
              : sanction.revokedAt
                ? m.ranger_sanction_revoked_on({ date: dateTime(sanction.revokedAt) })
                : m.ranger_sanction_ended()}
          </span>
          {sanction.scopeMod ? (
            <span className="text-xs text-fg-muted">{m.ranger_sanction_scope_on({ mod: sanction.scopeMod.name })}</span>
          ) : null}
        </p>
        <p className="text-sm break-words text-fg">{sanction.reason}</p>
        <p className="flex flex-wrap items-center gap-1 text-xs text-fg-muted">
          {m.ranger_sanction_since({ date: dateTime(sanction.startsAt) })}
          {sanction.createdBy ? (
            <>
              {' · '}
              <UserChip user={sanction.createdBy} size={20} />
            </>
          ) : null}
        </p>
      </div>
      {active && canRevoke ? (
        <Button variant="secondary" size="sm" icon={<Icon icon={ShieldOff} size={16} />} onClick={onRevoke}>
          {m.ranger_sanction_revoke()}
        </Button>
      ) : null}
    </li>
  );
}

/** Confirmation with an optional reason (recorded in the audit log). */
function ReasonConfirm({
  open,
  onOpenChange,
  title,
  confirmLabel,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  confirmLabel: string;
  onConfirm: (reason: string | undefined) => Promise<void>;
}) {
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const formId = useId();
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      await onConfirm(reason.trim() || undefined);
      setReason('');
      onOpenChange(false);
    } catch {
      // Reported by the caller.
    } finally {
      setBusy(false);
    }
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) setReason('');
        onOpenChange(next);
      }}
      title={title}
      size="sm"
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {m.ranger_cancel()}
          </Button>
          <Button type="submit" form={formId} loading={busy}>
            {confirmLabel}
          </Button>
        </>
      }
    >
      <form id={formId} onSubmit={submit} noValidate>
        <Field label={m.ranger_audit_reason_label()} description={m.ranger_audit_reason_hint()} optional>
          <Textarea value={reason} maxLength={500} minRows={2} onChange={(event) => setReason(event.target.value)} />
        </Field>
      </form>
    </Dialog>
  );
}
