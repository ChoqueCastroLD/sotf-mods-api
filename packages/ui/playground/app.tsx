/**
 * Playground shell. The top-level page shows the gallery twice, Night and Day side by side, each
 * in its own frame (themes are document-wide, see tokens.css), or once with the theme toggle.
 * `?frame=1&theme=light&locale=es` renders a single gallery (what each frame loads).
 */
import { type ComponentType, useMemo, useState } from 'react';
import {
  createUiTranslate,
  Select,
  Toaster,
  TooltipProvider,
  type UiMessageKey,
  UiTranslateProvider,
} from '../src/index.ts';
import { ThemeToggle } from '../src/theme-toggle.tsx';
import { Gallery } from './gallery.tsx';

type Catalog = Partial<Record<UiMessageKey, string>>;

/** The `ui` namespace lives in @sotf/i18n (`packages/i18n/messages/ui/<locale>.json`). */
const catalogs = import.meta.glob<Catalog>('../../i18n/messages/ui/*.json', { eager: true, import: 'default' });
const LOCALES = Object.keys(catalogs)
  .map((path) => path.replace(/^.*\/(.+)\.json$/, '$1'))
  .sort();

/** Demos contributed by WP-25 (`playground/domain/*.demo.tsx`, default export + `title`). */
const domainDemos = import.meta.glob<{ default: ComponentType; title?: string }>('./domain/**/*.demo.tsx', {
  eager: true,
});

const params = new URLSearchParams(location.search);

function frameUrl(theme: string, locale: string): string {
  const next = new URLSearchParams({ frame: '1', theme, locale });
  return `?${next.toString()}`;
}

function Frame({ locale }: { locale: string }) {
  const translate = useMemo(() => createUiTranslate(catalogs[`../../i18n/messages/ui/${locale}.json`] ?? {}), [locale]);
  const demos = Object.entries(domainDemos).map(([path, module]) => ({
    title: module.title ?? path.replace(/^.*\/(.+)\.demo\.tsx$/, '$1'),
    Component: module.default,
  }));
  return (
    <UiTranslateProvider value={translate}>
      <TooltipProvider>
        <main id="main" lang={locale} className="mx-auto flex max-w-content flex-col gap-12 px-4 py-8 md:px-8">
          <Gallery />
          {demos.length > 0 ? (
            <section className="flex flex-col gap-6">
              <h2 className="font-display-caps text-display-sm">Domain</h2>
              {demos.map(({ title, Component }) => (
                <div key={title} className="flex flex-col gap-3">
                  <h3 className="readout">{title}</h3>
                  <Component />
                </div>
              ))}
            </section>
          ) : null}
        </main>
        <Toaster />
      </TooltipProvider>
    </UiTranslateProvider>
  );
}

export function App() {
  const [locale, setLocale] = useState(params.get('locale') ?? 'en');
  const [mode, setMode] = useState<'split' | 'single'>('split');

  if (params.get('frame') === '1') return <Frame locale={locale} />;

  return (
    <div className="flex h-dvh flex-col">
      <header className="sticky top-0 z-(--z-sticky) flex flex-wrap items-center gap-4 border-b border-border bg-surface px-4 py-2">
        <h1 className="font-display-caps text-xl">
          SOTF <span className="text-primary">Mods</span> · @sotf/ui
        </h1>
        <div className="ms-auto flex flex-wrap items-center gap-3">
          <fieldset className="flex gap-1 text-sm">
            <legend className="sr-only">Layout</legend>
            {(['split', 'single'] as const).map((value) => (
              <label
                key={value}
                className="cursor-pointer rounded-sm px-2 py-1 text-fg-muted has-checked:bg-raised has-checked:text-fg"
              >
                <input
                  type="radio"
                  name="mode"
                  value={value}
                  checked={mode === value}
                  onChange={() => setMode(value)}
                  className="sr-only"
                />
                {value === 'split' ? 'Night | Day' : 'Single'}
              </label>
            ))}
          </fieldset>
          <Select
            label="Locale"
            hideLabel
            size="sm"
            className="w-32"
            options={LOCALES.map((code) => ({ value: code, label: code }))}
            value={locale}
            onValueChange={(next) => next && setLocale(next)}
          />
          {mode === 'single' ? <ThemeToggle /> : null}
        </div>
      </header>
      {mode === 'split' ? (
        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-2">
          <iframe
            title="Night"
            src={frameUrl('dark', locale)}
            className="h-full w-full border-0 lg:border-e lg:border-border"
          />
          <iframe title="Day" src={frameUrl('light', locale)} className="h-full w-full border-0" />
        </div>
      ) : (
        <div className="min-h-0 flex-1 overflow-y-auto">
          <Frame locale={locale} />
        </div>
      )}
    </div>
  );
}
