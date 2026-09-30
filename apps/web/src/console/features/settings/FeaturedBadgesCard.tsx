/**
 * Settings → Profile «Featured badges» (PLAN §7.2, docs/backlog/WP-64.md): up to
 * `FEATURED_BADGES_MAX` earned badges for the profile header, saved with
 * `PATCH /me/badges/featured` (the list replaces the current choice; `[]` features none).
 */
import { m } from '@sotf/i18n/messages';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Skeleton } from '@sotf/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { badgeName } from '../../../components/profile/i18n.ts';
import { api } from '../../lib/api.ts';
import { notify } from '../../lib/notify.ts';
import { userBadgesQuery } from '../basecamp/api.ts';
import { failureDescription } from './errors.ts';
import { SettingsCard } from './layout.tsx';

/** `FEATURED_BADGES_MAX` of `@sotf/contracts/gamification` (mirrored: no Zod in the chunk). */
export const FEATURED_MAX = 6;

/** Toggles `key` in the selection, keeping the order and the limit. */
export function toggleFeatured(selection: readonly string[], key: string, max = FEATURED_MAX): string[] {
  if (selection.includes(key)) return selection.filter((entry) => entry !== key);
  return selection.length >= max ? [...selection] : [...selection, key];
}

export function FeaturedBadgesCard({
  handle,
  featured,
  onSaved,
}: {
  handle: string;
  featured: readonly string[];
  onSaved: (keys: string[]) => void;
}) {
  const badges = useQuery(userBadgesQuery(handle));
  const [selection, setSelection] = useState<string[]>(() => [...featured]);
  const [saving, setSaving] = useState(false);
  const earned = [...new Set((badges.data?.earned ?? []).map((badge) => badge.key))];
  const dirty = selection.join(',') !== featured.join(',');

  const submit = async () => {
    setSaving(true);
    try {
      const result = await api.gamification.setFeaturedBadges({ body: { keys: selection } });
      onSaved(result.featuredBadgeKeys);
      setSelection(result.featuredBadgeKeys);
      notify.success(m.settings_featured_badges_saved());
    } catch (failure) {
      notify.error(m.settings_save_failed(), { description: failureDescription(failure) });
    } finally {
      setSaving(false);
    }
  };

  return (
    <SettingsCard
      id="profile-badges"
      title={m.settings_featured_badges_title()}
      description={m.settings_featured_badges_text({ max: FEATURED_MAX })}
      onSubmit={submit}
      dirty={dirty}
      saving={saving}
      onReset={() => setSelection([...featured])}
    >
      {badges.isPending ? (
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="h-9 w-32 rounded-full" />
          ))}
        </div>
      ) : earned.length === 0 ? (
        <p className="text-sm text-fg-muted">{m.settings_featured_badges_empty()}</p>
      ) : (
        <>
          <ul className="flex flex-wrap gap-2">
            {earned.map((key) => {
              const on = selection.includes(key);
              const full = !on && selection.length >= FEATURED_MAX;
              return (
                <li key={key}>
                  <button
                    type="button"
                    aria-pressed={on}
                    disabled={full}
                    onClick={() => setSelection((current) => toggleFeatured(current, key))}
                    className={cn(
                      'inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm transition-colors',
                      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
                      'disabled:cursor-not-allowed disabled:opacity-50',
                      on ? 'border-primary bg-primary-soft text-fg' : 'border-border text-fg-muted hover:text-fg',
                    )}
                  >
                    <Icon icon={Star} size={14} className={on ? 'text-featured' : undefined} />
                    {badgeName(key)}
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="text-xs text-fg-subtle" aria-live="polite">
            {m.settings_featured_badges_count({ count: selection.length, max: FEATURED_MAX })}
          </p>
        </>
      )}
    </SettingsCard>
  );
}
