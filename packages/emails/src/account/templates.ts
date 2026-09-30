/**
 * Account lifecycle emails (WP-30, T0-14): data export ready, deletion scheduled / cancelled /
 * completed. Payload shapes mirror `EMAIL_TEMPLATE_PAYLOADS` of @sotf/core.
 */
import { m } from '@sotf/i18n/messages';
import { createElement as h } from 'react';
import { ActionEmail, emailDateTime } from '../auth/action-email.ts';
import type { TemplateContext, TemplateOutput } from '../auth/templates.ts';

export interface ExportReadyPayload {
  displayName: string;
  url: string;
  expiresAt: string;
}

export function exportReady(p: ExportReadyPayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  return {
    subject: m.emails_auth_export_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_export_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_export_heading({}, o),
      paragraphs: [m.emails_auth_export_body({}, o)],
      action: { label: m.emails_auth_export_button({}, o), url: p.url },
      notes: [
        m.emails_auth_export_expiry({ when: emailDateTime(c.locale, p.expiresAt) }, o),
        m.emails_auth_ignore({}, o),
      ],
    }),
  };
}

export interface DeletionScheduledPayload {
  displayName: string;
  executeAfter: string;
  cancelUrl: string;
  mode: 'archive_mods' | 'keep_mods_anonymous';
}

export function deletionScheduled(p: DeletionScheduledPayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  return {
    subject: m.emails_auth_deletion_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_deletion_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_deletion_heading({}, o),
      paragraphs: [
        m.emails_auth_deletion_body({ when: emailDateTime(c.locale, p.executeAfter) }, o),
        p.mode === 'archive_mods'
          ? m.emails_auth_deletion_mode_archive({}, o)
          : m.emails_auth_deletion_mode_keep({}, o),
      ],
      action: { label: m.emails_auth_deletion_button({}, o), url: p.cancelUrl },
    }),
  };
}

export interface DeletionCancelledPayload {
  displayName: string;
  cancelledAt: string;
}

export function deletionCancelled(p: DeletionCancelledPayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  return {
    subject: m.emails_auth_deletion_cancelled_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_deletion_cancelled_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_deletion_cancelled_heading({}, o),
      paragraphs: [m.emails_auth_deletion_cancelled_body({ when: emailDateTime(c.locale, p.cancelledAt) }, o)],
    }),
  };
}

export interface DeletionCompletedPayload {
  displayName: string;
}

export function deletionCompleted(p: DeletionCompletedPayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  return {
    subject: m.emails_auth_deleted_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_deleted_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_deleted_heading({}, o),
      paragraphs: [m.emails_auth_deleted_body({}, o)],
    }),
  };
}

export interface OpsAlertPayload {
  key: 'dead_letter' | 'http_5xx' | 'invariants' | 'kelvinseek_budget';
  summary: string;
  details: string[];
  checkedAt: string;
  opsUrl: string;
}

/**
 * Operator alert of PLAN §10.3 (`ops.alerts` job). Written in English on purpose: it goes only to
 * the site admins and carries machine facts (queue names, counts), not user-facing copy.
 */
export function opsAlert(p: OpsAlertPayload, c: TemplateContext): TemplateOutput {
  return {
    subject: `[SOTF Mods ops] ${p.summary}`,
    element: h(ActionEmail, {
      ...c,
      preview: p.summary,
      name: 'admin',
      heading: p.summary,
      paragraphs: p.details.length > 0 ? p.details : ['No further details.'],
      action: { label: 'Open the operations readout', url: p.opsUrl },
      notes: [
        `Checked at ${emailDateTime(c.locale, p.checkedAt)} (alert: ${p.key}). The same alert is sent again at most every 6 hours while it lasts.`,
      ],
      reason: 'You receive this email because you are an administrator of SOTF Mods.',
    }),
  };
}
