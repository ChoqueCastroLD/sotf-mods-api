/**
 * Renders an email element to the HTML and plain-text bodies sent by the `email.send` job.
 */
import { render } from '@react-email/components';
import type { ReactElement } from 'react';

export interface RenderedEmail {
  html: string;
  text: string;
}

export async function renderEmail(element: ReactElement): Promise<RenderedEmail> {
  const [html, text] = await Promise.all([render(element), render(element, { plainText: true })]);
  return { html, text };
}
