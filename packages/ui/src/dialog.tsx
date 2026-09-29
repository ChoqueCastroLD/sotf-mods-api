/**
 * Dialog (PLAN §3.9, research/03 §5.6) on Base UI: focus trap, `inert` background, Escape and
 * backdrop dismissal, focus returned to the trigger, scroll lock.
 *
 * Below the `md` breakpoint the same dialog renders as a **bottom sheet** (Base UI `Drawer`)
 * with a drag handle and swipe-down to dismiss. Sizes: `sm` 400 · `md` 560 · `lg` 720 · `full`.
 * `ConfirmDialog` covers confirmations, including destructive ones that require typing a name.
 */
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { Drawer } from '@base-ui/react/drawer';
import { X } from 'lucide-react';
import { type ReactElement, type ReactNode, useState } from 'react';
import { Button, type ButtonVariant } from './button.tsx';
import { cn } from './cn.ts';
import { Field } from './field.tsx';
import { Icon } from './icons.tsx';
import { Input } from './input.tsx';
import { useUiTranslate } from './labels.ts';
import { backdropClasses } from './surfaces.ts';
import { BELOW_MD_QUERY, useMediaQuery } from './use-media-query.ts';

export type DialogSize = 'sm' | 'md' | 'lg' | 'full';

const WIDTH: Record<DialogSize, string> = {
  sm: 'max-w-[25rem]',
  md: 'max-w-[35rem]',
  lg: 'max-w-[45rem]',
  full: 'h-[calc(100dvh-2rem)] max-w-none',
};

export interface DialogProps {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Actions row (right-aligned; stacked full-width in the sheet). */
  footer?: ReactNode;
  /** Element that opens the dialog (a `Button`); omit when controlling `open`. */
  trigger?: ReactElement;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: DialogSize;
  /** Render as a bottom sheet below `md`. Default `true`. */
  sheetOnMobile?: boolean;
  /** Hide the × button (e.g. when the footer already has a clear exit). */
  hideClose?: boolean;
  /** Keep the dialog open on outside clicks (unsaved input). Escape still closes. */
  disablePointerDismissal?: boolean;
  className?: string;
}

function CloseButton() {
  const t = useUiTranslate();
  return (
    <BaseDialog.Close
      render={<Button variant="icon" size="sm" aria-label={t('ui_close')} className="absolute end-3 top-3" />}
    >
      <Icon icon={X} size={18} />
    </BaseDialog.Close>
  );
}

export function Dialog({
  title,
  description,
  children,
  footer,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  size = 'md',
  sheetOnMobile = true,
  hideClose = false,
  disablePointerDismissal,
  className,
}: DialogProps) {
  const belowMd = useMediaQuery(BELOW_MD_QUERY);
  const handleOpenChange = (next: boolean) => onOpenChange?.(next);

  if (sheetOnMobile && belowMd) {
    return (
      <Drawer.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={handleOpenChange}
        disablePointerDismissal={disablePointerDismissal}
      >
        {trigger ? <Drawer.Trigger render={trigger} /> : null}
        <Drawer.Portal>
          <Drawer.Backdrop
            className={cn(backdropClasses, 'opacity-[calc(1-var(--drawer-swipe-progress))] data-swiping:duration-0')}
          />
          <Drawer.Viewport className="fixed inset-0 z-(--z-modal) flex items-end justify-center">
            <Drawer.Popup
              className={cn(
                'relative flex max-h-[90dvh] w-full flex-col rounded-t-xl border-t border-border bg-overlay text-fg shadow-lg inset-shadow-highlight outline-none',
                'translate-y-(--drawer-swipe-movement-y) transition-transform duration-(--dur-slow) ease-out',
                'data-starting-style:translate-y-full data-ending-style:translate-y-full data-ending-style:duration-(--dur-base) data-ending-style:ease-in',
                'data-swiping:select-none data-swiping:duration-0',
                className,
              )}
            >
              <div className="flex justify-center pt-2 pb-1" aria-hidden="true">
                <span className="h-1 w-10 rounded-full bg-border-strong" />
              </div>
              <Drawer.Content className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain px-5 pt-2 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <header className="flex flex-col gap-1 pe-10">
                  <Drawer.Title className="text-lg font-semibold text-fg">{title}</Drawer.Title>
                  {description ? (
                    <Drawer.Description className="text-sm text-fg-muted">{description}</Drawer.Description>
                  ) : null}
                </header>
                {children}
                {footer ? <footer className="flex flex-col-reverse gap-2 pt-2 *:w-full">{footer}</footer> : null}
              </Drawer.Content>
              {hideClose ? null : <CloseButton />}
            </Drawer.Popup>
          </Drawer.Viewport>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <BaseDialog.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={handleOpenChange}
      disablePointerDismissal={disablePointerDismissal}
    >
      {trigger ? <BaseDialog.Trigger render={trigger} /> : null}
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className={backdropClasses} />
        <BaseDialog.Popup
          className={cn(
            'fixed top-1/2 left-1/2 z-(--z-modal) flex max-h-[calc(100dvh-4rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-4',
            'overflow-y-auto overscroll-contain rounded-xl border border-border bg-overlay p-6 text-fg shadow-lg inset-shadow-highlight outline-none',
            'transition-[scale,opacity] duration-(--dur-base) ease-out data-starting-style:scale-98 data-starting-style:opacity-0',
            'data-ending-style:scale-98 data-ending-style:opacity-0 data-ending-style:duration-(--dur-fast)',
            WIDTH[size],
            className,
          )}
        >
          <header className="flex flex-col gap-1 pe-8">
            <BaseDialog.Title className="text-lg font-semibold text-fg">{title}</BaseDialog.Title>
            {description ? (
              <BaseDialog.Description className="text-sm text-fg-muted">{description}</BaseDialog.Description>
            ) : null}
          </header>
          {children}
          {footer ? <footer className="flex flex-wrap justify-end gap-2 pt-2">{footer}</footer> : null}
          {hideClose ? null : <CloseButton />}
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}

export interface DialogCloseProps {
  /** The element that closes the dialog (usually a `Button`). */
  render: ReactElement;
  children?: ReactNode;
}

/** Closes the enclosing `Dialog` (works in both the dialog and the bottom-sheet form). */
export function DialogClose({ render, children }: DialogCloseProps) {
  return <BaseDialog.Close render={render}>{children}</BaseDialog.Close>;
}

export interface ConfirmDialogProps extends Omit<DialogProps, 'footer' | 'children'> {
  /** Label of the confirming action («Delete mod»). */
  confirmLabel: ReactNode;
  /** Label of the dismissing action. Default: the localized «Cancel». */
  cancelLabel?: ReactNode;
  /**
   * Runs on confirm; a returned promise keeps the button busy and closes on success. A rejected
   * promise keeps the dialog open: report the error yourself (toast).
   */
  onConfirm: () => void | Promise<void>;
  /** `danger` for destructive actions. */
  tone?: Extract<ButtonVariant, 'primary' | 'danger'>;
  /** Destructive confirmations: the user must type this text (e.g. the mod name). */
  requireText?: string;
  /** Label of the confirmation input. Default: «Type {text} to confirm.». */
  requireTextLabel?: ReactNode;
  children?: ReactNode;
}

export function ConfirmDialog({
  confirmLabel,
  cancelLabel,
  onConfirm,
  tone = 'primary',
  requireText,
  requireTextLabel,
  children,
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...dialog
}: ConfirmDialogProps) {
  const t = useUiTranslate();
  const [openState, setOpenState] = useState(defaultOpen ?? false);
  const [typed, setTyped] = useState('');
  const [busy, setBusy] = useState(false);
  const open = openProp ?? openState;
  const setOpen = (next: boolean) => {
    if (busy && !next) return;
    if (openProp === undefined) setOpenState(next);
    if (!next) setTyped('');
    onOpenChange?.(next);
  };
  const matches = requireText === undefined || typed.trim() === requireText.trim();

  const confirm = async () => {
    if (!matches || busy) return;
    setBusy(true);
    try {
      await onConfirm();
      setBusy(false);
      setOpen(false);
    } catch {
      // onConfirm reports its own errors (toast/ErrorState); a rejection keeps the dialog open.
      setBusy(false);
    }
  };

  return (
    <Dialog
      {...dialog}
      open={open}
      onOpenChange={setOpen}
      size={dialog.size ?? 'sm'}
      disablePointerDismissal={dialog.disablePointerDismissal ?? requireText !== undefined}
      footer={
        <>
          <DialogClose render={<Button variant="secondary" disabled={busy} />}>
            {cancelLabel ?? t('ui_cancel')}
          </DialogClose>
          <Button variant={tone} loading={busy} disabled={!matches} onClick={() => void confirm()}>
            {confirmLabel}
          </Button>
        </>
      }
    >
      {children}
      {requireText !== undefined ? (
        <Field label={requireTextLabel ?? <TypeToConfirm text={requireText} />}>
          <Input
            value={typed}
            onValueChange={(next) => setTyped(next)}
            autoComplete="off"
            spellCheck={false}
            aria-invalid={typed.length > 0 && !matches ? true : undefined}
          />
        </Field>
      ) : null}
    </Dialog>
  );
}

/** «Type {text} to confirm.» with the text emphasised, in any language order. */
function TypeToConfirm({ text }: { text: string }) {
  const t = useUiTranslate();
  const marker = '\u0000';
  const [before = '', after = ''] = t('ui_type_to_confirm', { text: marker }).split(marker);
  return (
    <>
      {before}
      <strong className="font-mono text-fg">{text}</strong>
      {after}
    </>
  );
}
