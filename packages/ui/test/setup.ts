import { afterEach } from 'vitest';

// Testing Library cleanup (only when a DOM is present: node-environment tests skip it).
afterEach(async () => {
  if (typeof document === 'undefined') return;
  const { cleanup } = await import('@testing-library/react');
  cleanup();
});
