/**
 * «Config files» of the modpack editor: one zip of mod settings (paths from the game folder, for
 * example `UserData/AxelsModMenu.cfg`). The server checks every file and repacks the valid ones;
 * SotF Mods Manager copies them into the game when someone installs the modpack.
 *
 * - Upload: the button shows its progress; errors appear in a line reserved under the button
 *   (with the offending path when the server names one), success is a toast.
 * - Remove: the list hides at once and a toast offers Undo; the request is sent only when the
 *   toast closes without Undo (no confirmation dialog).
 * - New modpacks have no id yet: the panel asks to save first.
 */
import { MODPACK_CONFIG_RULES } from '@sotf/contracts/kits';
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { useQueryClient } from '@tanstack/react-query';
import { FileArchive, Trash2, Upload } from 'lucide-react';
import { type ChangeEvent, useRef, useState } from 'react';
import { api } from '../../lib/api.ts';
import { notify } from '../../lib/notify.ts';
import { formatInstant, Panel } from '../admin/shared.tsx';
import { type Modpack, modpackKeys } from './api.ts';

const UNDO_MS = 10_000;

function messageOf(code: string): string {
  switch (code) {
    case 'too_big':
      return m.modpacks_configs_err_too_big();
    case 'not_zip':
      return m.modpacks_configs_err_not_zip();
    case 'too_many_files':
      return m.modpacks_configs_err_too_many();
    case 'unsafe_path':
    case 'outside_roots':
      return m.modpacks_configs_err_outside();
    case 'extension':
      return m.modpacks_configs_err_extension();
    case 'duplicate':
      return m.modpacks_configs_err_duplicate();
    case 'file_too_big':
      return m.modpacks_configs_err_file_too_big();
    case 'binary':
      return m.modpacks_configs_err_binary();
    case 'empty':
      return m.modpacks_configs_err_empty();
    default:
      return m.modpacks_configs_err_generic();
  }
}

/** The offending path that the server appends to its field message: `… (UserData/x.dll)`. */
function pathOf(message: string | undefined): string | null {
  const match = /\(([^()]+)\)$/.exec(message ?? '');
  return match?.[1] ?? null;
}

function readBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).replace(/^data:[^,]*,/, ''));
    reader.onerror = () => reject(reader.error ?? new Error('read failed'));
    reader.readAsDataURL(file);
  });
}

export function ConfigFilesPanel({ modpack }: { modpack: Modpack | null }) {
  const queryClient = useQueryClient();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<{ text: string; path: string | null } | null>(null);
  const [hidden, setHidden] = useState(false);
  const configs = modpack?.configs ?? null;

  const store = (next: Modpack) => {
    queryClient.setQueryData(modpackKeys.own(next.id), next);
    void queryClient.invalidateQueries({ queryKey: modpackKeys.mine });
  };

  const pick = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file || !modpack) return;
    if (file.size > MODPACK_CONFIG_RULES.maxZipBytes) {
      setError({ text: m.modpacks_configs_err_too_big(), path: null });
      return;
    }
    setError(null);
    setBusy(true);
    try {
      const saved = await api.kits.putConfigs({
        params: { id: modpack.id },
        body: { dataBase64: await readBase64(file) },
      });
      store(saved);
      setHidden(false);
      notify.success(m.modpacks_configs_saved({ count: saved.configs?.files.length ?? 0 }));
    } catch (failure) {
      const problem = (failure as { problem?: { errors?: Array<{ code: string; message?: string }> } }).problem;
      const field = problem?.errors?.[0];
      setError(
        field
          ? { text: messageOf(field.code), path: pathOf(field.message) }
          : { text: m.modpacks_configs_err_generic(), path: null },
      );
    } finally {
      setBusy(false);
    }
  };

  const remove = () => {
    if (!modpack) return;
    setHidden(true);
    let undone = false;
    notify.success(m.modpacks_configs_removed(), {
      action: {
        label: m.modpacks_undo(),
        onClick: () => {
          undone = true;
          setHidden(false);
        },
      },
      duration: UNDO_MS,
    });
    window.setTimeout(async () => {
      if (undone) return;
      try {
        store(await api.kits.deleteConfigs({ params: { id: modpack.id } }));
        setHidden(false);
      } catch {
        setHidden(false);
        notify.error(m.modpacks_configs_err_generic(), { action: { label: m.modpacks_retry(), onClick: remove } });
      }
    }, UNDO_MS);
  };

  const shown = configs && !hidden ? configs : null;

  return (
    <Panel title={m.modpacks_configs_title()} description={m.modpacks_configs_description()}>
      {modpack === null ? (
        <p className="text-sm text-fg-muted">{m.modpacks_configs_save_first()}</p>
      ) : (
        <div className="grid gap-3">
          {shown ? (
            <div className="grid gap-2">
              <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-fg-muted">
                <span className="inline-flex items-center gap-1.5 font-medium text-fg">
                  <Icon icon={FileArchive} size={16} />
                  {m.modpacks_configs_count({ count: shown.files.length })}
                </span>
                <span>{m.modpacks_updated({ date: formatInstant(shown.updatedAt) })}</span>
              </p>
              <ul className="grid max-h-56 gap-0.5 overflow-auto rounded-md border border-border bg-sunken p-2">
                {shown.files.map((file) => (
                  <li key={file.path} className="truncate font-mono text-xs text-fg-muted">
                    {file.path}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="secondary"
              loading={busy}
              icon={<Icon icon={Upload} size={16} />}
              onClick={() => input.current?.click()}
            >
              {shown ? m.modpacks_configs_replace() : m.modpacks_configs_upload()}
            </Button>
            {shown ? (
              <Button variant="ghost" icon={<Icon icon={Trash2} size={16} />} onClick={remove}>
                {m.modpacks_configs_remove()}
              </Button>
            ) : null}
            <input
              ref={input}
              type="file"
              accept=".zip,application/zip"
              hidden
              onChange={(event) => void pick(event)}
            />
          </div>
          {/* Reserved lines: an error never pushes the panel. */}
          <div className="min-h-10 text-sm text-danger" aria-live="polite">
            {error ? (
              <>
                <p>{error.text}</p>
                {error.path ? <p className="truncate font-mono text-xs">{error.path}</p> : null}
              </>
            ) : null}
          </div>
        </div>
      )}
    </Panel>
  );
}
