/**
 * Every primitive of @sotf/ui with its variants and states. Demo copy is English on purpose:
 * this is developer tooling, not product UI (product strings come from @sotf/i18n).
 */
import { FIELD_KIT_NAMES } from '@sotf/brand/field-kit';
import { Copy, Download, Heart, Search, Share2, Trash2, Upload } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import {
  ActionSheet,
  Avatar,
  BADGE_VARIANTS,
  Badge,
  Banner,
  BottomSheet,
  Breadcrumbs,
  BUTTON_SIZES,
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
  icons,
  Kbd,
  LanguageSwitcher,
  LiveDot,
  Menu,
  Pagination,
  PasswordField,
  Popover,
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
  Tooltip,
  toast,
} from '../src/index.ts';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display-caps text-display-sm">{title}</h2>
      {children}
    </section>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="readout">{label}</p>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

const SWATCHES = [
  'bg',
  'surface',
  'raised',
  'sunken',
  'border',
  'border-strong',
  'fg',
  'fg-muted',
  'fg-subtle',
  'primary',
  'signal',
  'success',
  'warning',
  'danger',
  'featured',
  'blueprint',
  'focus',
];

const MODS = [
  { value: 'redloader', label: 'RedLoader', hint: 'ToniMacaroni' },
  { value: 'sotfedit', label: 'SOTFEdit', hint: 'codengine' },
  { value: 'kelvinseek', label: 'KelvinSeek', hint: 'ShokoCC' },
  { value: 'buildshare', label: 'BuildShare', hint: 'Smokyace' },
  { value: 'axel-menu', label: "Axel's Mod Menu", hint: 'imaxel' },
];

function Tokens() {
  return (
    <Section title="Tokens">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
        {SWATCHES.map((name) => (
          <div key={name} className="flex items-center gap-2 rounded-md border border-border bg-surface p-2">
            <span className="size-8 rounded-sm border border-border" style={{ background: `var(--color-${name})` }} />
            <code className="font-mono text-2xs">{name}</code>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: 8 }, (_, index) => (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed chart slots
            key={index}
            className="h-6 w-10 rounded-xs"
            style={{ background: `var(--color-chart-${index + 1})` }}
            title={`chart-${index + 1}`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-display-caps text-display-lg">Mods for the island.</p>
        <p className="font-display-caps text-display-sm text-primary">Field-tested.</p>
        <p className="max-w-prose text-base text-fg-muted">
          Onest body text. Numbers stay tabular: <span className="tabular-nums">1,982,114 downloads</span>.
        </p>
        <p className="readout">Readout · build 1.0.4 · RedLoader 0.8.6+</p>
      </div>
    </Section>
  );
}

function Actions() {
  const [loading, setLoading] = useState(false);
  return (
    <Section title="Actions">
      {BUTTON_SIZES.map((size) => (
        <Row key={size} label={`Button · ${size}`}>
          <Button size={size} glow icon={<Icon icon={Download} size={16} />}>
            Download v2.4.1 · 1.2 MB
          </Button>
          <Button size={size} variant="secondary">
            Secondary
          </Button>
          <Button size={size} variant="outline">
            Outline
          </Button>
          <Button size={size} variant="ghost">
            Ghost
          </Button>
          <Button size={size} variant="danger" icon={<Icon icon={Trash2} size={16} />}>
            Delete
          </Button>
          <Button size={size} variant="link">
            Link
          </Button>
          <Tooltip content="Follow">
            <Button size={size} variant="icon" aria-label="Follow">
              <Icon icon={Heart} size={18} />
            </Button>
          </Tooltip>
        </Row>
      ))}
      <Row label="States">
        <Button
          loading={loading}
          icon={<Icon icon={Upload} size={16} />}
          onClick={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 1500);
          }}
        >
          Upload (click)
        </Button>
        <Button loading variant="secondary">
          Saving draft
        </Button>
        <Button disabled>Disabled</Button>
        <ButtonLink href="#install" variant="secondary">
          How to install (3 min)
        </ButtonLink>
        <RadarSpinner label="Searching" size={20} />
      </Row>
    </Section>
  );
}

function Forms() {
  const [mod, setMod] = useState<string | null>(null);
  return (
    <Section title="Forms">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Email" description="Used for sign-in and Signals digests.">
          <Input type="email" placeholder="you@example.com" autoComplete="email" />
        </Field>
        <Field label="Display name" error="Pick at least 3 characters.">
          <Input defaultValue="K" />
        </Field>
        <Field label="Search" hideLabel>
          <Input icon={<Icon icon={Search} size={16} />} placeholder="Search mods, builds, creators…" />
        </Field>
        <Field label="Short description" optional>
          <Textarea placeholder="What does it do, in one breath?" />
        </Field>
        <Select
          label="Sort by"
          options={[
            { value: 'trending', label: 'Trending' },
            { value: 'downloads', label: 'Most downloaded' },
            { value: 'updated', label: 'Recently updated' },
            { value: 'retired', label: 'Oldest (disabled)', disabled: true },
          ]}
          defaultValue="trending"
        />
        <Combobox
          label="Requires"
          description={mod ? `Selected: ${mod}` : 'Type to filter.'}
          options={MODS}
          value={mod}
          onValueChange={setMod}
          placeholder="e.g. RedLoader"
        />
        <PasswordField label="New password" meter description="At least 10 characters. No symbols required." />
        <PasswordField label="Current password" />
        <div className="flex flex-col gap-3">
          <Switch label="Email me when a followed mod updates" defaultChecked />
          <Switch label="Show sensitive content" description="You confirm you are 18 or older." />
          <Switch label="Disabled" disabled />
        </div>
        <div className="flex flex-col gap-3">
          <Checkbox label="Safe to remove mid-save" defaultChecked />
          <Checkbox label="Select all versions" indeterminate />
          <Checkbox label="I accept the rules" required error="You need to accept the rules to publish." />
        </div>
        <RadioCardGroup
          legend="Multiplayer"
          defaultValue="host"
          options={[
            {
              value: 'host',
              title: 'Host only',
              description: 'Only the host installs it.',
              icon: <Icon icon={icons.locate} />,
            },
            {
              value: 'everyone',
              title: 'Everyone needs it',
              description: 'All players install it.',
              icon: <Icon icon={icons.kits} />,
            },
            {
              value: 'solo',
              title: 'Solo only',
              description: 'Breaks multiplayer.',
              icon: <Icon icon={icons.night} />,
            },
          ]}
          columns={3}
          className="md:col-span-2"
        />
        <Slider label="Minimum rating" defaultValue={3} min={1} max={5} step={0.5} />
        <Slider label="Size (MB)" defaultValue={[5, 60] as readonly number[]} min={0} max={200} />
      </div>
    </Section>
  );
}

const SHEET_CATEGORIES = [
  'Quality of Life',
  'Gameplay',
  'Building',
  'Companions',
  'Weapons & Gear',
  'Vehicles',
  'Model Swap',
  'UI & HUD',
  'Libraries',
  'Multiplayer',
  'Cheats',
  'Maps',
];

function Surfaces() {
  const [menuValue, setMenuValue] = useState('trending');
  const [compact, setCompact] = useState(false);
  return (
    <Section title="Surfaces">
      <Row label="BottomSheet (snap points: half / full) and ActionSheet">
        <BottomSheet
          title="Filters"
          description="Drag the handle: it rests at half or full height."
          snapPoints={[0.5, 1]}
          trigger={<Button variant="secondary">Open sheet</Button>}
          footer={<Button>Show 189 mods</Button>}
        >
          {SHEET_CATEGORIES.map((name) => (
            <Switch key={name} label={name} />
          ))}
        </BottomSheet>
        <ActionSheet
          title="Mod actions"
          menuOnDesktop
          trigger={<Button variant="secondary">Action sheet</Button>}
          items={[
            [
              { label: 'Share', icon: <Share2 size={20} />, onSelect: () => toast.success('Link copied') },
              {
                label: 'Copy link',
                icon: <Copy size={20} />,
                description: 'sotf-mods.com/mods/axel',
                onSelect: () => {},
              },
            ],
            [{ label: 'Delete mod', icon: <Trash2 size={20} />, danger: true, onSelect: () => {} }],
          ]}
        />
      </Row>
      <Row label="Dialog (bottom sheet below md)">
        <Dialog
          title="Report a problem"
          description="Tell the creator what broke. Screenshots help."
          trigger={<Button variant="secondary">Open dialog</Button>}
          footer={
            <>
              <DialogClose render={<Button variant="secondary" />}>Cancel</DialogClose>
              <DialogClose render={<Button />}>Send report</DialogClose>
            </>
          }
        >
          <Field label="What happened?">
            <Textarea placeholder="The menu does not open after patch 1.0.4…" />
          </Field>
        </Dialog>
        <ConfirmDialog
          title="Delete «Axel's Mod Menu»?"
          description="Downloads history is kept for stats."
          tone="danger"
          confirmLabel="Delete forever"
          requireText="Axel's Mod Menu"
          onConfirm={() => new Promise((resolve) => setTimeout(resolve, 800))}
          trigger={<Button variant="danger">Delete mod</Button>}
        />
        <Popover
          trigger={
            <Button variant="secondary" icon={<Icon icon={Share2} size={16} />}>
              Share
            </Button>
          }
          title="Share"
        >
          <Input readOnly defaultValue="https://sotf-mods.com/mods/imaxel/axels-mod-menu" />
          <Button size="sm" icon={<Icon icon={Copy} size={14} />}>
            Copy link
          </Button>
        </Popover>
        <Menu
          trigger={<Button variant="secondary">Menu</Button>}
          items={[
            {
              label: 'Copy link',
              icon: <Icon icon={Copy} size={16} />,
              shortcut: '⌘C',
              onSelect: () => toast.success('Link copied'),
            },
            { type: 'link', label: 'Open Basecamp', href: '#basecamp' },
            { type: 'separator' },
            { type: 'checkbox', label: 'Compact cards', checked: compact, onCheckedChange: setCompact },
            {
              type: 'radio',
              label: 'Sort',
              value: menuValue,
              onValueChange: setMenuValue,
              options: [
                { value: 'trending', label: 'Trending' },
                { value: 'new', label: 'Newest' },
              ],
            },
            { type: 'separator' },
            {
              label: 'Delete',
              danger: true,
              icon: <Icon icon={Trash2} size={16} />,
              onSelect: () => toast.error('Deleted'),
            },
          ]}
        />
      </Row>
      <Tabs
        label="Mod sections"
        tabs={[
          { value: 'overview', label: 'Overview', content: <SkeletonText lines={3} /> },
          {
            value: 'versions',
            label: 'Versions',
            badge: 12,
            content: <p className="text-sm">12 versions, semver order.</p>,
          },
          { value: 'reviews', label: 'Reviews', badge: 48, content: <p className="text-sm">4.8 ★ from 48 reviews.</p> },
          { value: 'locked', label: 'Disabled', content: null, disabled: true },
        ]}
      />
    </Section>
  );
}

function Navigation() {
  const [step, setStep] = useState(1);
  return (
    <Section title="Navigation">
      <Breadcrumbs
        items={[
          { label: 'Mods', href: '#mods' },
          { label: 'Quality of Life', href: '#qol' },
          { label: "Axel's Mod Menu" },
        ]}
      />
      <Pagination
        page={7}
        totalPages={24}
        hrefFor={(page) => `#page-${page}`}
        onLoadMore={() => toast.info('Loaded page 8')}
      />
      <Stepper
        current={step}
        steps={[
          { label: 'Files', description: 'Zip + manifest' },
          { label: 'Details', description: 'Name, category' },
          { label: 'Media', description: 'Cover, gallery' },
          { label: 'Publish', description: 'Ranger review' },
        ]}
      />
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" onClick={() => setStep((value) => Math.max(0, value - 1))}>
          Back
        </Button>
        <Button size="sm" onClick={() => setStep((value) => Math.min(3, value + 1))}>
          Next step
        </Button>
      </div>
    </Section>
  );
}

function Feedback() {
  return (
    <Section title="Feedback">
      <Row label="Toasts">
        <Button
          variant="secondary"
          onClick={() =>
            toast.success('Added to your backpack', { action: { label: 'Undo', onClick: () => toast.info('Removed') } })
          }
        >
          Success + undo
        </Button>
        <Button variant="secondary" onClick={() => toast.info('Patch 1.0.4 detected')}>
          Info
        </Button>
        <Button variant="secondary" onClick={() => toast.warning('Not verified on the latest patch yet.')}>
          Warning
        </Button>
        <Button
          variant="secondary"
          onClick={() => toast.error('Lost signal. Retrying…', { description: 'Ref: 8c1f0e' })}
        >
          Error
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast.progress(new Promise((resolve) => setTimeout(resolve, 2000)), {
              loading: 'Uploading axels-mod-menu.zip…',
              success: 'Uploaded. Sent to the Ranger Station.',
              error: 'Upload failed',
            })
          }
        >
          Progress
        </Button>
      </Row>
      <Banner
        tone="signal"
        title="Patch 1.0.4 is out."
        dismissible
        persistId="playground-patch"
        action={
          <ButtonLink size="sm" variant="secondary" href="#radar">
            Patch Radar
          </ButtonLink>
        }
      >
        Check your mods before you launch.
      </Banner>
      <Banner tone="warning" title="Maintenance" dismissible>
        Uploads pause tonight at 02:00 UTC for 10 minutes.
      </Banner>
      <Banner tone="danger">Reported broken on 1.0.3. The creator has been pinged.</Banner>
      <Banner tone="winter">Snow is falling on the island. Toggle it in settings.</Banner>
      <div className="grid gap-4 md:grid-cols-2">
        <EmptyState
          icon={<Icon icon={icons.kits} />}
          title="Your backpack is empty"
          description="Tap ♥ on a mod to stash it here."
          action={<ButtonLink href="#explore">Explore mods</ButtonLink>}
          className="rounded-lg border border-border"
        />
        <ErrorState
          title="Something broke at base camp."
          description="We're on it. Try again in a minute."
          onRetry={() => toast.info('Retrying…')}
          reference="cf-8c1f0e2a"
          className="rounded-lg border border-border"
        />
      </div>
      <SkeletonGroup delayMs={0} className="grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((key) => (
          <div key={key} className="flex flex-col gap-3 rounded-lg border border-border p-4">
            <Skeleton className="aspect-video h-auto w-full rounded-md" />
            <Skeleton className="h-5 w-2/3" />
            <SkeletonText lines={2} />
          </div>
        ))}
      </SkeletonGroup>
    </Section>
  );
}

function Others() {
  return (
    <Section title="Other">
      <Row label="Badges">
        {BADGE_VARIANTS.map((variant) => (
          <Badge
            key={variant}
            variant={variant}
            icon={variant === 'success' ? <Icon icon={icons.compatibility} /> : undefined}
          >
            {variant === 'outline-mono' ? 'RL 0.9+' : variant}
          </Badge>
        ))}
      </Row>
      <Row label="Avatars">
        {(['Kelvin Scout', 'Virginia', 'ñandú', '小明', 'Timmy'] as const).map((name, index) => (
          <Avatar key={name} name={name} id={index * 97 + 3} size={48} />
        ))}
        <Avatar name="Brand" id={1} src="/brand/icon-192.png" size={48} alt="Brand icon" />
      </Row>
      <Row label="Keys, live, skip link">
        <span className="flex items-center gap-1 text-sm text-fg-muted">
          Press <Kbd>⌘</Kbd>
          <Kbd>K</Kbd> or <Kbd>/</Kbd> to search
        </span>
        <LiveDot label="38 survivors exploring" />
        <SkipLink target="main" />
        <span className="text-xs text-fg-subtle">(focus the page and press Tab to see the skip link)</span>
      </Row>
      <Row label="Theme and language">
        <ThemeToggle />
        <ThemeToggle showLabels />
        <LanguageSwitcher
          current="en"
          languages={[
            { code: 'en', nativeName: 'English', href: '?locale=en' },
            { code: 'es', nativeName: 'Español', href: '?locale=es' },
            { code: 'de', nativeName: 'Deutsch', href: '?locale=de' },
            { code: 'ja', nativeName: '日本語', href: '?locale=ja' },
            { code: 'zh-Hans', nativeName: '简体中文', href: '?locale=zh-Hans' },
          ]}
        />
      </Row>
    </Section>
  );
}

function Icons() {
  return (
    <Section title="Icons">
      <Row label="Semantic (Lucide, 1.75 px)">
        {Object.entries(icons).map(([name, glyph]) => (
          <Tooltip key={name} content={name}>
            <button type="button" className="flex size-10 items-center justify-center rounded-md border border-border">
              <Icon icon={glyph} label={name} />
            </button>
          </Tooltip>
        ))}
      </Row>
      <Row label="Field kit (sprite)">
        {FIELD_KIT_NAMES.map((name) => (
          <span
            key={name}
            title={name}
            className="flex size-10 items-center justify-center rounded-md border border-border text-fg-muted"
          >
            <FieldKitIcon name={name} />
          </span>
        ))}
      </Row>
    </Section>
  );
}

export function Gallery() {
  return (
    <>
      <Tokens />
      <Actions />
      <Forms />
      <Surfaces />
      <Navigation />
      <Feedback />
      <Others />
      <Icons />
    </>
  );
}
