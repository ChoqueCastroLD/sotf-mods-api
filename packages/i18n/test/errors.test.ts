import { describe, expect, it } from 'vitest';
import { describeProblem, isProblemCode, PROBLEM_CODES } from '../src/errors.ts';
import { LOCALES } from '../src/locales.ts';

describe('describeProblem', () => {
  it('has a distinct title and detail for every API problem code in every locale', () => {
    for (const locale of LOCALES) {
      const titles = new Set<string>();
      for (const code of PROBLEM_CODES) {
        const { title, detail } = describeProblem(code, { locale });
        expect(title, `${locale} ${code}`).not.toBe('');
        expect(detail, `${locale} ${code}`).not.toBe('');
        titles.add(title);
      }
      expect(titles.size, locale).toBe(PROBLEM_CODES.length);
    }
  });

  it('translates by code', () => {
    expect(describeProblem('NOT_FOUND', { locale: 'es' }).title).toBe('No encontrado');
    expect(describeProblem('UNAUTHENTICATED', { locale: 'de' }).title).toBe('Melde dich an, um fortzufahren');
  });

  it('includes Retry-After for rate limits', () => {
    expect(describeProblem('RATE_LIMITED', { locale: 'es', retryAfterSeconds: 29.2 }).detail).toBe(
      'Demasiadas solicitudes. Vuelve a intentarlo en 30 s.',
    );
    expect(describeProblem('RATE_LIMITED', { locale: 'en', retryAfterSeconds: 0 }).detail).toBe(
      'Wait a moment and try again.',
    );
  });

  it('never shows a raw or unknown code', () => {
    for (const code of ['SOMETHING_NEW', '', null, undefined, 'toString']) {
      expect(isProblemCode(code)).toBe(false);
      expect(describeProblem(code, { locale: 'en' }).title).toBe('Something went wrong');
    }
  });
});
