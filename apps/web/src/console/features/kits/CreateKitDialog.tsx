/**
 * «New kit»: name, visibility and an optional short description; opens the editor on success. When
 * started from a mod page («+ Kit» → `/me/kits?add=<id>`), the mod becomes the first item.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Dialog } from '@sotf/ui/dialog';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { Textarea } from '@sotf/ui/textarea';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { type FormEvent, useId, useState } from 'react';
import { track } from '../../../scripts/beacon.ts';
import { notify } from '../../lib/notify.ts';
import { type KitVisibility, kitsApi, storeKit } from './api.ts';
import { KIT_LIMITS, KIT_VISIBILITIES, NAME_MIN } from './limits.ts';
import { failureDetail, VISIBILITY_ICONS, visibilityHint, visibilityLabel } from './shared.tsx';

export interface CreateKitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Mod to add as the first item (the «+ Kit» flow). */
  firstMod?: { id: number; name: string } | null;
}

export function CreateKitDialog({ open, onOpenChange, firstMod }: CreateKitDialogProps) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const formId = useId();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [visibility, setVisibility] = useState<KitVisibility>('public');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const trimmed = name.trim();
  const nameError =
    error ?? (trimmed.length > 0 && trimmed.length < NAME_MIN ? m.kits_name_too_short({ min: NAME_MIN }) : null);

  const reset = () => {
    setName('');
    setDescription('');
    setVisibility('public');
    setError(null);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (busy) return;
    if (trimmed.length < NAME_MIN) {
      setError(m.kits_name_too_short({ min: NAME_MIN }));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      let kit = await kitsApi.create({
        name: trimmed,
        visibility,
        ...(description.trim() ? { descriptionMd: description.trim() } : {}),
      });
      if (firstMod) {
        // The kit exists at this point: a failing first item must not lead to a duplicate kit.
        try {
          kit = await kitsApi.putItems(kit.id, [{ modId: firstMod.id }]);
        } catch (failure) {
          notify.warning(m.kits_add_failed({ name: firstMod.name }), { description: failureDetail(failure) });
        }
      }
      storeKit(queryClient, kit);
      track('kit_create', { entityType: 'kit', entityId: kit.id, props: { source: firstMod ? 'mod' : 'console' } });
      notify.success(m.kits_created({ name: kit.name }));
      onOpenChange(false);
      reset();
      await navigate({ to: '/me/kits/$kitId', params: { kitId: String(kit.id) } });
    } catch (failure) {
      setError(failureDetail(failure));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (busy) return;
        onOpenChange(next);
        if (!next) reset();
      }}
      title={m.kits_create_title()}
      description={firstMod ? m.kits_create_with_mod({ name: firstMod.name }) : m.kits_create_description()}
      disablePointerDismissal={trimmed.length > 0}
      footer={
        <>
          <Button variant="secondary" onClick={() => onOpenChange(false)} disabled={busy}>
            {m.common_action_cancel()}
          </Button>
          <Button type="submit" form={formId} loading={busy}>
            {m.kits_create_submit()}
          </Button>
        </>
      }
    >
      <form id={formId} onSubmit={submit} className="grid gap-4" noValidate>
        <Field label={m.kits_field_name()} error={nameError}>
          <Input
            value={name}
            onChange={(event) => {
              setName(event.currentTarget.value);
              setError(null);
            }}
            maxLength={KIT_LIMITS.nameMax}
            required
            autoFocus
            autoComplete="off"
            placeholder={m.kits_field_name_placeholder()}
          />
        </Field>
        <RadioCardGroup<KitVisibility>
          legend={m.kits_field_visibility()}
          value={visibility}
          onValueChange={setVisibility}
          columns={3}
          options={KIT_VISIBILITIES.map((value) => ({
            value,
            title: visibilityLabel(value),
            description: visibilityHint(value),
            icon: <Icon icon={VISIBILITY_ICONS[value]} size={18} />,
          }))}
        />
        <Field label={m.kits_field_description()} optional description={m.kits_field_description_hint()}>
          <Textarea
            value={description}
            onChange={(event) => setDescription(event.currentTarget.value)}
            maxLength={KIT_LIMITS.descriptionMax}
            minRows={3}
            maxRows={8}
          />
        </Field>
      </form>
    </Dialog>
  );
}
