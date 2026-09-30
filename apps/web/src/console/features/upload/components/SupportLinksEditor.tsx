/** Support links of the listing (Ko-fi, Patreon, Discord…), up to 5. */
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Select } from '@sotf/ui/select';
import { Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ut } from '../i18n.ts';
import { LINK_KIND_LABELS } from '../labels.ts';
import { isHttpUrl } from '../lib/validate.ts';
import { LINK_KINDS, type LinkKind, type SupportLink } from '../types.ts';

export interface SupportLinksEditorProps {
  value: readonly SupportLink[];
  onChange: (value: SupportLink[]) => void;
  max: number;
}

export function SupportLinksEditor({ value, onChange, max }: SupportLinksEditorProps) {
  const [touched, setTouched] = useState<ReadonlySet<number>>(new Set());
  const options = LINK_KINDS.map((kind) => ({ value: kind, label: LINK_KIND_LABELS[kind]() }));

  const update = (index: number, patch: Partial<SupportLink>) =>
    onChange(value.map((link, i) => (i === index ? { ...link, ...patch } : link)));

  return (
    <div className="flex flex-col gap-3">
      {value.length === 0 ? <p className="text-sm text-fg-muted">{ut('upload_links_empty')}</p> : null}
      <ul className="flex flex-col gap-3">
        {value.map((link, index) => {
          const invalid = touched.has(index) && link.url.trim() !== '' && !isHttpUrl(link.url);
          return (
            <li key={index} className="grid grid-cols-1 items-start gap-2 sm:grid-cols-[10rem_1fr_auto]">
              <Select<LinkKind>
                label={ut('upload_links_kind', { n: index + 1 })}
                hideLabel
                options={options}
                value={link.kind}
                onValueChange={(kind) => {
                  if (kind) update(index, { kind });
                }}
              />
              <div className="flex flex-col gap-1">
                <Input
                  type="url"
                  inputMode="url"
                  aria-label={ut('upload_links_url', { n: index + 1 })}
                  aria-invalid={invalid || undefined}
                  placeholder="https://"
                  value={link.url}
                  onChange={(event) => update(index, { url: event.currentTarget.value })}
                  onBlur={() => setTouched((set) => new Set(set).add(index))}
                />
                {invalid ? <p className="text-xs font-medium text-danger">{ut('upload_error_url')}</p> : null}
              </div>
              <Button
                variant="icon"
                size="md"
                aria-label={ut('upload_links_remove', { n: index + 1 })}
                onClick={() => onChange(value.filter((_, i) => i !== index))}
              >
                <Icon icon={Trash2} size={16} />
              </Button>
            </li>
          );
        })}
      </ul>
      {value.length < max ? (
        <div>
          <Button
            variant="outline"
            size="sm"
            icon={<Icon icon={Plus} size={14} />}
            onClick={() => onChange([...value, { kind: 'kofi', url: '' }])}
          >
            {ut('upload_links_add')}
          </Button>
        </div>
      ) : (
        <p className="text-xs text-fg-muted">{ut('upload_links_full', { max })}</p>
      )}
    </div>
  );
}
