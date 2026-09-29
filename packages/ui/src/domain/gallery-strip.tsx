/**
 * GalleryStrip (research/03 §5.8): the thumbnail strip of a mod's gallery. Horizontal scroll with
 * snap points (swipe on touch, arrow keys scroll the focused strip), fixed-size thumbnails (no
 * layout shift) and an optional video facade tile first (YouTube thumbnail + play icon; the
 * iframe is only loaded by the page on click).
 *
 * Link mode (default): each thumbnail links to the full image, so it works without JavaScript;
 * the page's lightbox (`<dialog>`, WP-62) intercepts clicks via `data-gallery-index`. Callback
 * mode (`onSelect`): buttons with `aria-pressed` for the selected item.
 */
import { Play } from 'lucide-react';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import type { ImageDTO } from './contracts.ts';
import { useDomainI18n } from './i18n.ts';

export interface GalleryVideo {
  /** YouTube id. */
  id: string;
  url: string;
}

export interface GalleryStripProps {
  images: readonly ImageDTO[];
  video?: GalleryVideo | null;
  /** Index of the selected item (video first when present). */
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  /** Accessible name of the strip. Default «Gallery». */
  label?: string;
  className?: string;
}

const THUMB =
  'relative block h-20 w-36 shrink-0 snap-start overflow-hidden rounded-md border border-border bg-raised ' +
  'transition-[border-color] duration-(--dur-fast) hover:border-border-strong ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ' +
  'aria-pressed:border-primary aria-[current=true]:border-primary';

export function GalleryStrip({ images, video, selectedIndex, onSelect, label, className }: GalleryStripProps) {
  const { t } = useDomainI18n();
  const total = images.length + (video ? 1 : 0);
  if (total === 0) return null;
  const items: Array<{ key: string; href: string; name: string; thumb: ImageDTO | null; isVideo: boolean }> = [];
  if (video) {
    items.push({
      key: `video:${video.id}`,
      href: video.url,
      name: t('ui_domain_gallery_video'),
      thumb: null,
      isVideo: true,
    });
  }
  images.forEach((image, index) => {
    items.push({
      key: image.url,
      href: image.url,
      name: image.alt || t('ui_domain_gallery_image', { index: index + 1, total: images.length }),
      thumb: image,
      isVideo: false,
    });
  });
  return (
    <ul
      aria-label={label ?? t('ui_domain_gallery_label')}
      className={cn(
        'flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:thin]',
        className,
      )}
    >
      {items.map((item, index) => {
        const selected = selectedIndex === index;
        const inner = item.isVideo ? (
          <>
            <img
              src={`https://i.ytimg.com/vi/${encodeURIComponent(video?.id ?? '')}/mqdefault.jpg`}
              alt=""
              width={144}
              height={80}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="size-full object-cover"
            />
            <span className="absolute inset-0 m-auto flex size-9 items-center justify-center rounded-full bg-night-975/75 text-white">
              <Icon icon={Play} size={18} className="fill-current" />
            </span>
            <span className="sr-only">{item.name}</span>
          </>
        ) : (
          <img
            src={item.thumb?.url}
            srcSet={item.thumb?.srcset ?? undefined}
            sizes="144px"
            alt={item.name}
            width={144}
            height={80}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
            style={{ backgroundColor: item.thumb?.dominantColor ?? undefined }}
          />
        );
        return (
          <li key={item.key} className="shrink-0">
            {onSelect ? (
              <button type="button" aria-pressed={selected} onClick={() => onSelect(index)} className={THUMB}>
                {inner}
              </button>
            ) : (
              <a
                href={item.href}
                data-gallery-index={index}
                data-gallery-kind={item.isVideo ? 'video' : 'image'}
                aria-current={selected ? 'true' : undefined}
                className={THUMB}
              >
                {inner}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
