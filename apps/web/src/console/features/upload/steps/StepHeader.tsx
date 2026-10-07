import type { ReactNode } from 'react';

/** Heading of a wizard step; focused on step change so screen readers land on it. */
export function StepHeader({ id, title, description }: { id: string; title: string; description?: ReactNode }) {
  return (
    <header className="flex flex-col gap-1">
      <h2 id={id} tabIndex={-1} className="font-display-caps text-xl text-fg outline-none sm:text-2xl">
        {title}
      </h2>
      {description ? <p className="max-w-prose text-sm text-fg-muted">{description}</p> : null}
    </header>
  );
}

/** A titled group of fields inside a step: a heading over a rule, no box around the fields. */
export function FieldGroup({
  title,
  description,
  children,
  id,
}: {
  title: string;
  description?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      aria-labelledby={id ? `${id}-title` : undefined}
      className="flex flex-col gap-4 border-t border-border pt-5"
    >
      <div className="flex flex-col gap-1">
        <h3 id={id ? `${id}-title` : undefined} className="text-base font-semibold text-fg">
          {title}
        </h3>
        {description ? <p className="text-xs text-fg-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
