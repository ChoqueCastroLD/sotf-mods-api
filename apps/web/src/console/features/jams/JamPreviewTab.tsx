/**
 * Preview tab: the public page of the jam as visitors will see it (header, theme, schedule, texts,
 * categories), built from the form, so unsaved changes show too. A draft has no public page yet.
 */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { ProseLocator } from '@sotf/ui/domain/content';
import { useEffect, useMemo, useState } from 'react';
import { formatInstant } from '../admin/shared.tsx';
import { dateLabel, rowName } from './form.ts';
import type { TabProps } from './JamEditorScreen.tsx';
import { jamPhaseLabel, jamPhaseVariant } from './phase.ts';
import { timeline } from './schedule.ts';

/** Markdown → sanitized HTML with the same pipeline the API uses (loaded on demand). */
function useMarkdown(sources: readonly string[]): string[] {
  const [render, setRender] = useState<typeof import('@sotf/markdown/lite').renderMarkdown | null>(null);
  useEffect(() => {
    let alive = true;
    import('@sotf/markdown/lite').then(
      (mod) => {
        if (alive) setRender(() => mod.renderMarkdown);
      },
      () => {},
    );
    return () => {
      alive = false;
    };
  }, []);
  return useMemo(
    () =>
      sources.map((source) => {
        if (!render || !source.trim()) return '';
        try {
          return render(source.slice(0, 10_000), { profile: 'full', idPrefix: 'jam-preview-' }).html;
        } catch {
          return '';
        }
      }),
    [render, sources],
  );
}

export function JamPreviewTab({ jam, form }: TabProps) {
  const [description, rules, prizes] = useMarkdown(
    useMemo(() => [form.descriptionMd, form.rulesMd, form.prizesMd], [form.descriptionMd, form.rulesMd, form.prizesMd]),
  );
  const events = timeline(form.dates);
  const banner = form.bannerUrl.trim();
  const theme = form.theme.trim();
  return (
    <div className="grid max-w-3xl gap-6">
      <p className="text-sm text-fg-muted">{jam.phase === 'draft' ? m.jams_preview_draft() : m.jams_preview_note()}</p>
      <article className="grid gap-6 border-y border-border py-6">
        {/^https:\/\//i.test(banner) ? (
          <img
            src={banner}
            alt=""
            width={1600}
            height={600}
            decoding="async"
            className="aspect-[8/3] w-full rounded-md border border-border bg-raised object-cover"
          />
        ) : null}
        <header className="grid gap-2">
          <Badge variant={jamPhaseVariant(jam.phase)} size="sm" className="justify-self-start">
            {jamPhaseLabel(jam.phase)}
          </Badge>
          <h2 className="text-3xl font-bold break-words text-fg">{form.title || jam.title}</h2>
          {form.tagline.trim() ? <p className="text-lg text-fg-muted">{form.tagline}</p> : null}
        </header>
        <section className="grid gap-1">
          <h3 className="text-sm font-semibold text-fg">{m.jams_theme_heading()}</h3>
          <p className="text-fg-muted">
            {theme ? (form.themeHidden ? m.jams_theme_hidden() : theme) : m.jams_schedule_tba()}
          </p>
          {theme && form.themeHidden ? (
            <p className="text-xs text-fg-subtle">{m.jams_preview_theme_staff({ theme })}</p>
          ) : null}
        </section>
        <section className="grid gap-2">
          <h3 className="text-sm font-semibold text-fg">{m.jams_schedule_title()}</h3>
          {events.length > 0 ? (
            <ul className="grid gap-1 text-sm">
              {events.map((entry) => (
                <li key={entry.field} className="flex flex-wrap justify-between gap-x-4">
                  <span className="text-fg">{dateLabel(entry.field)}</span>
                  <span className="text-fg-muted tabular-nums">{formatInstant(entry.iso)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-fg-muted">{m.jams_schedule_tba()}</p>
          )}
        </section>
        {[
          { title: m.jams_about_title(), html: description },
          { title: m.jams_rules_title(), html: rules },
          { title: m.jams_prizes_title(), html: prizes },
        ].map((block) =>
          block.html ? (
            <section key={block.title} className="grid gap-2">
              <h3 className="text-sm font-semibold text-fg">{block.title}</h3>
              <ProseLocator html={block.html} size="sm" />
            </section>
          ) : null,
        )}
        <section className="grid gap-2">
          <h3 className="text-sm font-semibold text-fg">{m.jams_categories_title()}</h3>
          <ul className="flex flex-wrap gap-2">
            {form.categories.map((category, index) => (
              <li key={index}>
                <Badge variant="neutral" size="sm">
                  {rowName(category)}
                </Badge>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
