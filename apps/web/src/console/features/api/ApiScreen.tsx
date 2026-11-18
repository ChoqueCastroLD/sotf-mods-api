/**
 * `/dashboard/api`: everything a creator needs to work without the website. API keys (create,
 * revoke), the first call to test a key, the links people and AI agents read (guide, reference,
 * OpenAPI), and a prompt to paste into an AI coding assistant. The guide and the prompt come from
 * `lib/api-guide.ts`, the same source as `/developers/api.md`, and stay in English like the API.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { agentPrompt } from '../../../lib/api-guide.ts';
import { notify } from '../../lib/notify.ts';
import { Panel } from '../admin/shared.tsx';
import { TokensPanel } from '../settings/TokensScreen.tsx';

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      variant="secondary"
      size="sm"
      icon={<Icon icon={copied ? Check : Copy} size={14} />}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          notify.error(m.api_copy_failed());
        }
      }}
    >
      {copied ? m.api_copied() : label}
    </Button>
  );
}

export function ApiScreen() {
  const site = window.location.origin;
  const prompt = agentPrompt(site);
  const check = `curl -s ${site}/api/v2/me -H "Authorization: Bearer $SOTF_API_KEY"`;
  const links = [
    { href: `${site}/developers/api.md`, label: m.api_link_guide(), hint: m.api_link_guide_hint() },
    { href: `${site}/api/docs`, label: m.api_link_reference(), hint: m.api_link_reference_hint() },
    { href: `${site}/api/v2/openapi.json`, label: m.api_link_openapi(), hint: m.api_link_openapi_hint() },
  ];

  return (
    <div className="grid gap-8">
      <header className="grid gap-1">
        <h1 className="text-2xl font-bold text-fg">{m.api_title()}</h1>
        <p className="max-w-prose text-sm text-pretty text-fg-muted">{m.api_description()}</p>
      </header>

      <TokensPanel />

      <Panel title={m.api_start_title()} description={m.api_start_description()}>
        <div className="grid gap-2">
          <pre className="overflow-x-auto rounded-md border border-border bg-sunken p-3 font-mono text-xs leading-5 text-fg">
            {check}
          </pre>
          <div>
            <CopyButton text={check} label={m.api_copy_command()} />
          </div>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
          {links.map((link) => (
            <li key={link.href} className="bg-surface">
              <a
                href={link.href}
                target="_blank"
                rel="noopener"
                className="grid h-full gap-1 p-3 hover:bg-raised focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
              >
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-fg">
                  {link.label}
                  <Icon icon={ExternalLink} size={14} className="text-fg-subtle" />
                </span>
                <span className="text-xs text-fg-muted">{link.hint}</span>
              </a>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title={m.api_ai_title()} description={m.api_ai_description()}>
        <pre className="max-h-80 overflow-auto rounded-md border border-border bg-sunken p-3 font-mono text-xs leading-5 whitespace-pre-wrap text-fg">
          {prompt}
        </pre>
        <div>
          <CopyButton text={prompt} label={m.api_copy_prompt()} />
        </div>
      </Panel>
    </div>
  );
}
