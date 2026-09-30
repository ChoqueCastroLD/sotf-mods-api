/**
 * Star rating input (PLAN §7.7: 1–5, required): a native radio group inside a fieldset, so the
 * arrow keys, the single tab stop and the announcements («4 stars, radio, 4 of 5») come from the
 * platform. The stars are the visual labels; hover previews the value.
 */

import { Icon } from '@sotf/ui/icons';
import { Star } from 'lucide-react';
import { useId, useState } from 'react';
import { t } from '../comments/lib/messages.ts';

/** Short meaning of each star value (hover and selection hint). */
export function starMeaning(value: number): string {
  switch (value) {
    case 1:
      return t('social_review_star_1');
    case 2:
      return t('social_review_star_2');
    case 3:
      return t('social_review_star_3');
    case 4:
      return t('social_review_star_4');
    default:
      return t('social_review_star_5');
  }
}

export interface StarInputProps {
  value: number;
  onChange: (value: number) => void;
  invalid?: boolean;
  errorId?: string;
  disabled?: boolean;
}

export function StarInput({ value, onChange, invalid = false, errorId, disabled = false }: StarInputProps) {
  const name = useId();
  const [hover, setHover] = useState(0);
  const shown = hover || value;
  return (
    <fieldset
      className="grid gap-1"
      aria-describedby={invalid && errorId ? errorId : undefined}
      aria-invalid={invalid || undefined}
      disabled={disabled}
    >
      <legend className="mb-1 text-sm font-semibold">{t('social_review_rating_label')}</legend>
      <div className="flex items-center gap-1" onPointerLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((star) => (
          <label
            key={star}
            onPointerEnter={() => setHover(star)}
            className="relative inline-flex size-11 cursor-pointer items-center justify-center rounded-md has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-focus md:size-9"
          >
            <input
              type="radio"
              name={name}
              value={star}
              checked={value === star}
              onChange={() => onChange(star)}
              required
              className="sr-only"
            />
            <Icon
              icon={Star}
              size={24}
              className={star <= shown ? 'fill-current text-featured' : 'text-border-strong'}
            />
            <span className="sr-only">{t('social_review_stars', { count: star })}</span>
          </label>
        ))}
        <span className="ms-2 min-w-24 text-sm text-fg-muted" aria-hidden="true">
          {shown ? starMeaning(shown) : ''}
        </span>
      </div>
    </fieldset>
  );
}
