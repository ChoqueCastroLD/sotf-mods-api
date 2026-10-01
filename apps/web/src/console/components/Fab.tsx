/**
 * Floating action button of phone screens (native «compose» pattern): the one primary action of a
 * list, above the bottom tabs and the safe area. Hidden from `md` up, where the header carries
 * the same action as a regular button.
 */
import { Icon } from '@sotf/ui/icons';
import { Link, type LinkProps } from '@tanstack/react-router';
import type { LucideIcon } from 'lucide-react';

export function Fab({ to, label, icon }: { to: string; label: string; icon: LucideIcon }) {
  return (
    <Link
      to={to as LinkProps['to']}
      aria-label={label}
      title={label}
      className="fixed end-4 bottom-[calc(var(--tabbar-h,0px)+1rem)] z-(--z-raised) flex size-14 items-center justify-center rounded-full bg-primary text-primary-fg shadow-glow transition-transform duration-(--dur-fast) active:scale-95 md:hidden"
    >
      <Icon icon={icon} size={26} strokeWidth={2.4} />
    </Link>
  );
}
