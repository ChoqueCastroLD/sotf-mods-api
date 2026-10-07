/**
 * Details tab: the texts people read (title, tagline, theme, description, rules, prizes) and the
 * banner. The theme switch only appears once there is a theme to hide. Markdown fields show a live
 * preview of what the public page renders.
 */
import { JAM_RULES } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { Switch } from '@sotf/ui/switch';
import { MarkdownField } from '../upload/components/MarkdownField.tsx';
import type { TabProps } from './JamEditorScreen.tsx';

export function JamDetailsTab({ form, update, errors }: TabProps) {
  const banner = form.bannerUrl.trim();
  return (
    <div className="grid max-w-3xl gap-6">
      <Field label={m.jams_admin_field_title()} error={errors.title}>
        <Input
          value={form.title}
          maxLength={JAM_RULES.titleMax}
          onChange={(event) => update({ title: event.currentTarget.value })}
        />
      </Field>
      <Field label={m.jams_editor_tagline()} description={m.jams_editor_tagline_hint()} optional>
        <Input
          value={form.tagline}
          maxLength={JAM_RULES.taglineMax}
          onChange={(event) => update({ tagline: event.currentTarget.value })}
        />
      </Field>
      <div className="grid gap-3">
        <Field label={m.jams_editor_theme()} description={m.jams_editor_theme_hint()} optional>
          <Input
            value={form.theme}
            maxLength={JAM_RULES.themeMax}
            onChange={(event) => update({ theme: event.currentTarget.value })}
          />
        </Field>
        {form.theme.trim() ? (
          <Switch
            label={m.jams_editor_theme_hidden()}
            checked={form.themeHidden}
            onCheckedChange={(themeHidden) => update({ themeHidden })}
          />
        ) : null}
      </div>
      <MarkdownField
        id="jam-description"
        label={m.jams_editor_description()}
        description={m.jams_editor_description_hint()}
        value={form.descriptionMd}
        maxLength={JAM_RULES.mdMax}
        idPrefix="jam-desc-"
        minHeight="10rem"
        optional
        onChange={(descriptionMd) => update({ descriptionMd })}
      />
      <MarkdownField
        id="jam-rules"
        label={m.jams_editor_rules()}
        description={m.jams_editor_rules_hint()}
        value={form.rulesMd}
        maxLength={JAM_RULES.mdMax}
        idPrefix="jam-rules-"
        minHeight="8rem"
        optional
        onChange={(rulesMd) => update({ rulesMd })}
      />
      <MarkdownField
        id="jam-prizes"
        label={m.jams_editor_prizes()}
        description={m.jams_editor_prizes_hint()}
        value={form.prizesMd}
        maxLength={JAM_RULES.mdMax}
        idPrefix="jam-prizes-"
        minHeight="6rem"
        optional
        onChange={(prizesMd) => update({ prizesMd })}
      />
      <div className="grid gap-3">
        <Field label={m.jams_editor_banner()} description={m.jams_editor_banner_hint()} error={errors.banner} optional>
          <Input
            type="url"
            inputMode="url"
            value={form.bannerUrl}
            placeholder="https://"
            onChange={(event) => update({ bannerUrl: event.currentTarget.value })}
          />
        </Field>
        {banner && !errors.banner ? (
          <img
            src={banner}
            alt=""
            width={1600}
            height={600}
            loading="lazy"
            decoding="async"
            className="aspect-[8/3] w-full max-w-xl rounded-md border border-border bg-raised object-cover"
          />
        ) : null}
      </div>
    </div>
  );
}
