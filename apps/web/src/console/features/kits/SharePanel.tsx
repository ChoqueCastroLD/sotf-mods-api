/**
 * Share a kit from the editor (PLAN §7.8): the code `KIT-XXXX-XX`, the short URL `/k/XXXXXX`, the
 * public page, and a QR code of the short URL (the page's QR encoder, loaded when shown). Private
 * kits cannot be opened by others: the panel says so instead of offering links.
 */
import { localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Copy, ExternalLink, Lock, QrCode } from 'lucide-react';
import { useEffect, useState } from 'react';
import { activeLocale } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';
import type { KitDTO } from './api.ts';
import { copyToClipboard } from './clipboard.ts';
import { kitShortPath } from './limits.ts';

function CopyRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1">
      <span className="text-xs font-medium text-fg-muted">{label}</span>
      <div className="flex items-center gap-2">
        <code className="min-w-0 flex-1 truncate rounded-md border border-border bg-raised px-2 py-1.5 font-mono text-xs text-fg">
          {value}
        </code>
        <Button
          variant="secondary"
          size="sm"
          icon={<Icon icon={Copy} size={14} />}
          onClick={() =>
            void copyToClipboard(value).then((ok) =>
              ok ? notify.success(m.common_action_copied()) : notify.error(m.kits_copy_failed()),
            )
          }
        >
          {m.common_action_copy()}
          <span className="sr-only">{label}</span>
        </Button>
      </div>
    </div>
  );
}

function QrCodeImage({ value, name }: { value: string; name: string }) {
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let cancelled = false;
    import('../../../scripts/mod/qr.ts')
      .then(({ qrSvg }) => {
        if (!cancelled) setSvg(qrSvg(value));
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [value]);
  if (failed) return <p className="text-sm text-danger">{m.kits_qr_failed()}</p>;
  return (
    <div
      role="img"
      aria-label={m.kits_share_qr_alt({ name })}
      className="size-48 rounded-md bg-white p-3"
      // The SVG is generated locally from the URL (no user HTML).
      // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted, locally generated SVG
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  );
}

export function SharePanel({ kit }: { kit: KitDTO }) {
  const [showQr, setShowQr] = useState(false);
  const origin = window.location.origin;
  const shortUrl = `${origin}${kitShortPath(kit.code)}`;
  const publicUrl = `${origin}${localizePath(kit.canonicalPath, activeLocale())}`;

  return (
    <section
      aria-labelledby="kit-share-title"
      className="grid gap-4 rounded-xl border border-border bg-surface p-4 md:p-5"
    >
      <h2 id="kit-share-title" className="text-lg font-semibold text-fg">
        {m.kits_share_title()}
      </h2>
      {kit.visibility === 'private' ? (
        <p className="flex items-start gap-2 text-sm text-fg-muted">
          <Icon icon={Lock} size={16} className="mt-0.5 shrink-0" />
          {m.kits_share_private()}
        </p>
      ) : (
        <>
          <CopyRow label={m.kits_share_code_label()} value={kit.code} />
          <CopyRow label={m.kits_share_short_label()} value={shortUrl} />
          <div className="flex flex-wrap gap-2">
            <a
              href={publicUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-link hover:underline md:min-h-9"
            >
              <Icon icon={ExternalLink} size={16} />
              {m.kits_view_public()}
              <span className="sr-only">{m.common_new_tab()}</span>
            </a>
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon icon={QrCode} size={16} />}
              aria-expanded={showQr}
              onClick={() => setShowQr((value) => !value)}
            >
              {m.kits_share_qr()}
            </Button>
          </div>
          {showQr ? (
            <div className="grid justify-items-center gap-2">
              <QrCodeImage value={shortUrl} name={kit.name} />
              <p className="font-mono text-sm text-fg">{kit.code}</p>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}
