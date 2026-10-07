/**
 * Every primitive renders on the server (Astro renders them with `renderToString`, without
 * hydration). The table must cover every component exported by the barrel: adding a component
 * without an SSR case fails the coverage test below.
 */
import { Search } from 'lucide-react';
import type { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import * as ui from '../src/index.ts';

const {
  ActionSheet,
  Avatar,
  Badge,
  Banner,
  BottomSheet,
  Breadcrumbs,
  Button,
  ButtonLink,
  Checkbox,
  Combobox,
  ConfirmDialog,
  Dialog,
  DialogClose,
  EmptyState,
  ErrorState,
  Field,
  FieldKitIcon,
  Icon,
  Input,
  Kbd,
  LanguageSwitcher,
  LiveDot,
  Menu,
  Motif,
  OptionalHint,
  Pagination,
  PasswordField,
  Popover,
  PopoverClose,
  RadarSpinner,
  RadioCardGroup,
  Select,
  Skeleton,
  SkeletonGroup,
  SkeletonText,
  SkipLink,
  Slider,
  Stepper,
  Switch,
  Tabs,
  Textarea,
  ThemeToggle,
  ToastCard,
  Toaster,
  Tooltip,
  TooltipProvider,
  UiTranslateProvider,
} = ui;

const options = [
  { value: 'client', label: 'Client' },
  { value: 'server', label: 'Server' },
];

const cases: Record<string, () => ReactElement> = {
  ActionSheet: () => (
    <ActionSheet title="Actions" trigger={<Button>Open</Button>} items={[{ label: 'Share', onSelect: () => {} }]} />
  ),
  Avatar: () => <Avatar name="Kelvin Scout" id={42} />,
  Badge: () => <Badge variant="featured">Featured</Badge>,
  Banner: () => (
    <Banner tone="signal" title="Patch 1.0.4" dismissible persistId="patch-1.0.4">
      Check your mods
    </Banner>
  ),
  BottomSheet: () => (
    <BottomSheet title="Filters" snapPoints={[0.5, 1]} trigger={<Button>Open</Button>}>
      Content
    </BottomSheet>
  ),
  Breadcrumbs: () => <Breadcrumbs items={[{ label: 'Mods', href: '/mods' }, { label: 'Axel' }]} />,
  Button: () => <Button loading>Save</Button>,
  ButtonLink: () => <ButtonLink href="/install">Install</ButtonLink>,
  Checkbox: () => <Checkbox label="Safe to remove" defaultChecked />,
  Combobox: () => <Combobox label="Mod" options={options} defaultValue="server" />,
  ConfirmDialog: () => (
    <ConfirmDialog title="Delete" confirmLabel="Delete" onConfirm={() => {}} trigger={<Button>Open</Button>} />
  ),
  Dialog: () => <Dialog title="Hello" trigger={<Button>Open</Button>} />,
  DialogClose: () => (
    <Dialog title="Hello" trigger={<Button>Open</Button>} defaultOpen>
      <DialogClose render={<Button variant="secondary" />}>Close</DialogClose>
    </Dialog>
  ),
  EmptyState: () => <EmptyState title="All quiet in the woods." icon={<Icon icon={Search} />} />,
  ErrorState: () => <ErrorState title="Lost signal" reference="abc123" retryHref="/" />,
  Field: () => (
    <Field label="Email" description="We never share it" error="Required">
      <Input type="email" />
    </Field>
  ),
  FieldKitIcon: () => <FieldKitIcon name="campfire" mode="inline" />,
  Icon: () => <Icon icon={Search} label="Search" />,
  Input: () => <Input icon={<Icon icon={Search} size={16} />} placeholder="Search" />,
  Kbd: () => <Kbd>⌘K</Kbd>,
  LanguageSwitcher: () => (
    <LanguageSwitcher
      current="es"
      languages={[
        { code: 'en', nativeName: 'English', href: '/' },
        { code: 'es', nativeName: 'Español', href: '/es' },
      ]}
    />
  ),
  LiveDot: () => <LiveDot label="38 survivors exploring" />,
  Menu: () => (
    <Menu trigger={<Button>Actions</Button>} items={[{ label: 'Copy', onSelect: () => {} }, { type: 'separator' }]} />
  ),
  OptionalHint: () => <OptionalHint />,
  Motif: () => <Motif seed="ssr" fade="bottom" />,
  Pagination: () => <Pagination page={4} totalPages={20} hrefFor={(page) => `?page=${page}`} onLoadMore={() => {}} />,
  PasswordField: () => <PasswordField label="Password" meter defaultValue="correct horse" />,
  Popover: () => <Popover trigger={<Button>Share</Button>} title="Share" />,
  PopoverClose: () => (
    <Popover trigger={<Button>Share</Button>} defaultOpen>
      <PopoverClose render={<Button />}>Done</PopoverClose>
    </Popover>
  ),
  RadarSpinner: () => <RadarSpinner label="Searching" />,
  RadioCardGroup: () => (
    <RadioCardGroup legend="Multiplayer" options={[{ value: 'host', title: 'Host only' }]} defaultValue="host" />
  ),
  Select: () => <Select label="Sort" options={options} defaultValue="client" />,
  Skeleton: () => <Skeleton className="w-24" />,
  SkeletonGroup: () => (
    <SkeletonGroup>
      <SkeletonText />
    </SkeletonGroup>
  ),
  SkeletonText: () => <SkeletonText lines={2} />,
  SkipLink: () => <SkipLink />,
  Slider: () => <Slider label="Rating" defaultValue={3} min={1} max={5} />,
  Stepper: () => <Stepper steps={[{ label: 'Files' }, { label: 'Details' }, { label: 'Publish' }]} current={1} />,
  Switch: () => <Switch label="Email me" defaultChecked />,
  Tabs: () => (
    <Tabs
      label="Sections"
      tabs={[
        { value: 'a', label: 'Overview', content: 'A' },
        { value: 'b', label: 'Versions', content: 'B', badge: 3 },
      ]}
    />
  ),
  Textarea: () => <Textarea defaultValue="Field notes" />,
  ThemeToggle: () => <ThemeToggle />,
  ToastCard: () => <ToastCard id={1} kind="error" title="Upload failed" />,
  Toaster: () => <Toaster />,
  Tooltip: () => (
    <Tooltip content="Copy link">
      <Button variant="icon" aria-label="Copy link">
        <Icon icon={Search} />
      </Button>
    </Tooltip>
  ),
  TooltipProvider: () => (
    <TooltipProvider>
      <span>child</span>
    </TooltipProvider>
  ),
  UiTranslateProvider: () => (
    <UiTranslateProvider value={(key) => `[${key}]`}>
      <SkipLink />
    </UiTranslateProvider>
  ),
};

/** PascalCase function exports are components (hooks and helpers are camelCase). */
const componentExports = Object.entries(ui)
  .filter(([name, value]) => /^[A-Z][a-z]/.test(name) && typeof value === 'function')
  .map(([name]) => name)
  .sort();

describe('server rendering', () => {
  it('has an SSR case for every exported component', () => {
    expect(Object.keys(cases).sort()).toEqual(componentExports);
  });

  it.each(Object.entries(cases))('%s renders to a string', (_name, element) => {
    const html = renderToString(element());
    expect(html.length).toBeGreaterThan(0);
  });

  it('uses the translator in scope', () => {
    const html = renderToString(
      <UiTranslateProvider value={(key) => `[${key}]`}>
        <SkipLink />
      </UiTranslateProvider>,
    );
    expect(html).toContain('[ui_skip_to_content]');
  });

  it('renders accessible, no-JS markup for public-page primitives', () => {
    const pagination = renderToString(cases.Pagination?.() as ReactElement);
    expect(pagination).toContain('href="?page=3"');
    expect(pagination).toContain('aria-current="page"');
    expect(pagination).toContain('rel="next"');

    const toggle = renderToString(<ThemeToggle />);
    expect(toggle).toContain('data-theme-toggle');
    expect(toggle.match(/type="radio"/g)).toHaveLength(3);

    const languages = renderToString(cases.LanguageSwitcher?.() as ReactElement);
    expect(languages.toLowerCase()).toContain('hreflang="es"');
    expect(languages).toContain('aria-current="true"');

    const button = renderToString(<Button loading>Save</Button>);
    expect(button).toContain('aria-busy="true"');
    expect(button).toContain('type="button"');
  });
});
