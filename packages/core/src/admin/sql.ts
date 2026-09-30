/**
 * SQL helpers of the admin services.
 */
import { type SQL, sql } from 'drizzle-orm';

/**
 * A Postgres `text[]` literal as one bound parameter (`'{"a","b"}'::text[]`): every element is
 * quoted, with `\` and `"` escaped, so commas, braces and quotes in values are safe.
 */
export function textArray(values: Iterable<string>): SQL {
  const items = [...values].map((v) => `"${v.replaceAll('\\', '\\\\').replaceAll('"', '\\"')}"`);
  return sql`${`{${items.join(',')}}`}::text[]`;
}
