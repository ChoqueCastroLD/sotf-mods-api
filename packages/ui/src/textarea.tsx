/**
 * Multi-line text that grows with its content: CSS `field-sizing: content` where supported, a
 * scrollHeight fallback elsewhere. `minRows`/`maxRows` bound the height (then it scrolls).
 */
import { Field as BaseField } from '@base-ui/react/field';
import { type ComponentProps, type CSSProperties, type InputEvent, useCallback, useLayoutEffect, useRef } from 'react';
import { cn } from './cn.ts';
import { controlClasses } from './field.tsx';

export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'rows'> {
  /** Minimum visible rows. Default 3. */
  minRows?: number;
  /** Maximum rows before scrolling. Default 12. */
  maxRows?: number;
}

const LINE_HEIGHT_REM = 1.375;
const PADDING_REM = 1;

function supportsFieldSizing(): boolean {
  return typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('field-sizing', 'content');
}

export function Textarea({ minRows = 3, maxRows = 12, className, style, onInput, ref, ...rest }: TextareaProps) {
  const inner = useRef<HTMLTextAreaElement | null>(null);

  const resize = useCallback(() => {
    const element = inner.current;
    if (!element || supportsFieldSizing()) return;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight + 2}px`;
  }, []);

  useLayoutEffect(() => {
    resize();
  }, [resize]);

  const setRef = useCallback(
    (element: HTMLTextAreaElement | null) => {
      inner.current = element;
      if (typeof ref === 'function') ref(element);
      else if (ref) ref.current = element;
    },
    [ref],
  );

  const bounds: CSSProperties = {
    minHeight: `${minRows * LINE_HEIGHT_REM + PADDING_REM}rem`,
    maxHeight: `${maxRows * LINE_HEIGHT_REM + PADDING_REM}rem`,
    ...style,
  };

  return (
    <BaseField.Control
      render={
        <textarea
          ref={setRef}
          className={cn(controlClasses, 'field-sizing-content resize-y px-3 py-2 leading-[1.375rem]', className)}
          style={bounds}
          onInput={(event: InputEvent<HTMLTextAreaElement>) => {
            resize();
            onInput?.(event);
          }}
          {...rest}
        />
      }
    />
  );
}
