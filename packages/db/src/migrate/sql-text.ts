/**
 * Minimal PostgreSQL lexer used by the migration linter and runner: it understands comments
 * (`--`, nested block comments), string literals (`'…'`, `E'…'`), quoted identifiers and
 * dollar-quoted bodies well enough to split a file into statements and to hide literal text from
 * the lint rules. It is not a parser: the rules downstream match normalized statement text.
 */

export interface SqlStatement {
  /** Statement text as written (comments removed, trimmed, without the trailing `;`). */
  text: string;
  /**
   * Same statement with every string literal replaced by `''`, every dollar-quoted body by
   * `$$…$$` and whitespace collapsed: safe to match with regular expressions.
   */
  masked: string;
  /** 1-based line of the first character of the statement in the file. */
  line: number;
}

const DOLLAR_TAG = /^\$([A-Za-z_][A-Za-z0-9_]*)?\$/;

/** Splits SQL into statements at top-level semicolons. */
export function splitStatements(sql: string): SqlStatement[] {
  const statements: SqlStatement[] = [];
  let text = '';
  let masked = '';
  let startLine = 0;
  let line = 1;
  let i = 0;

  const flush = () => {
    const trimmed = text.trim();
    if (trimmed.length > 0) {
      statements.push({ text: trimmed, masked: masked.replace(/\s+/g, ' ').trim(), line: startLine || line });
    }
    text = '';
    masked = '';
    startLine = 0;
  };
  const markStart = () => {
    if (startLine === 0) startLine = line;
  };
  const advance = (chunk: string) => {
    for (const ch of chunk) if (ch === '\n') line += 1;
  };

  while (i < sql.length) {
    const ch = sql[i] as string;
    const next = sql[i + 1];

    // Line comment.
    if (ch === '-' && next === '-') {
      const end = sql.indexOf('\n', i);
      const stop = end === -1 ? sql.length : end;
      text += ' ';
      masked += ' ';
      i = stop;
      continue;
    }
    // Block comment (PostgreSQL allows nesting).
    if (ch === '/' && next === '*') {
      let depth = 1;
      let j = i + 2;
      while (j < sql.length && depth > 0) {
        if (sql[j] === '/' && sql[j + 1] === '*') {
          depth += 1;
          j += 2;
        } else if (sql[j] === '*' && sql[j + 1] === '/') {
          depth -= 1;
          j += 2;
        } else {
          j += 1;
        }
      }
      advance(sql.slice(i, j));
      text += ' ';
      masked += ' ';
      i = j;
      continue;
    }
    // String literal, optionally with the E prefix (backslash escapes).
    if (ch === "'" || ((ch === 'E' || ch === 'e') && next === "'" && !/[A-Za-z0-9_]/.test(sql[i - 1] ?? ''))) {
      markStart();
      const backslashEscapes = ch !== "'";
      let j = backslashEscapes ? i + 2 : i + 1;
      while (j < sql.length) {
        if (backslashEscapes && sql[j] === '\\') {
          j += 2;
          continue;
        }
        if (sql[j] === "'") {
          if (sql[j + 1] === "'") {
            j += 2;
            continue;
          }
          j += 1;
          break;
        }
        j += 1;
      }
      const literal = sql.slice(i, j);
      advance(literal);
      text += literal;
      masked += "''";
      i = j;
      continue;
    }
    // Quoted identifier: kept verbatim in the masked text (rules match table names).
    if (ch === '"') {
      markStart();
      let j = i + 1;
      while (j < sql.length) {
        if (sql[j] === '"') {
          if (sql[j + 1] === '"') {
            j += 2;
            continue;
          }
          j += 1;
          break;
        }
        j += 1;
      }
      const ident = sql.slice(i, j);
      advance(ident);
      text += ident;
      masked += ident;
      i = j;
      continue;
    }
    // Dollar-quoted body.
    if (ch === '$') {
      const tag = DOLLAR_TAG.exec(sql.slice(i));
      if (tag && !/[A-Za-z0-9_]/.test(sql[i - 1] ?? '')) {
        markStart();
        const open = tag[0];
        const close = sql.indexOf(open, i + open.length);
        const end = close === -1 ? sql.length : close + open.length;
        const body = sql.slice(i, end);
        advance(body);
        text += body;
        masked += '$$…$$';
        i = end;
        continue;
      }
    }
    if (ch === ';') {
      flush();
      i += 1;
      continue;
    }
    if (!/\s/.test(ch)) markStart();
    if (ch === '\n') line += 1;
    text += ch;
    masked += ch;
    i += 1;
  }
  flush();
  return statements;
}

/** Normalizes an identifier as PostgreSQL resolves it: quoted verbatim, unquoted lower-cased. */
export function normalizeIdentifier(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length >= 2) {
    return trimmed.slice(1, -1).replaceAll('""', '"');
  }
  return trimmed.toLowerCase();
}

/** Identifier token (quoted or bare), optionally schema-qualified: `public."Mod"`, `"Mod"`, `mod`. */
export const QUALIFIED_IDENT = String.raw`(?:(?:"(?:[^"]|"")+"|[A-Za-z_][A-Za-z0-9_$]*)\s*\.\s*)?(?:"(?:[^"]|"")+"|[A-Za-z_][A-Za-z0-9_$]*)`;

/** Returns the unqualified object name of a possibly schema-qualified identifier. */
export function objectName(qualified: string): string {
  const parts = splitQualified(qualified);
  return normalizeIdentifier(parts[parts.length - 1] ?? qualified);
}

/** Returns the schema of a qualified identifier (defaults to `public`). */
export function schemaName(qualified: string): string {
  const parts = splitQualified(qualified);
  return parts.length > 1 ? normalizeIdentifier(parts[0] as string) : 'public';
}

function splitQualified(qualified: string): string[] {
  const parts: string[] = [];
  let current = '';
  let quoted = false;
  for (let i = 0; i < qualified.length; i += 1) {
    const ch = qualified[i] as string;
    if (ch === '"') {
      if (quoted && qualified[i + 1] === '"') {
        current += '""';
        i += 1;
        continue;
      }
      quoted = !quoted;
      current += ch;
      continue;
    }
    if (ch === '.' && !quoted) {
      parts.push(current.trim());
      current = '';
      continue;
    }
    current += ch;
  }
  parts.push(current.trim());
  return parts;
}

/** Splits a list at top-level commas (ignores commas inside parentheses). */
export function splitTopLevel(list: string, separator = ','): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = '';
  let quoted = false;
  for (const ch of list) {
    if (ch === '"') quoted = !quoted;
    if (!quoted) {
      if (ch === '(' || ch === '[') depth += 1;
      else if (ch === ')' || ch === ']') depth -= 1;
      else if (ch === separator && depth === 0) {
        parts.push(current.trim());
        current = '';
        continue;
      }
    }
    current += ch;
  }
  if (current.trim().length > 0) parts.push(current.trim());
  return parts;
}

/** Converts a character offset (1-based, as reported by PostgreSQL errors) into a line number. */
export function lineAtPosition(sql: string, position: number): number {
  let line = 1;
  const stop = Math.min(position - 1, sql.length);
  for (let i = 0; i < stop; i += 1) if (sql[i] === '\n') line += 1;
  return line;
}
