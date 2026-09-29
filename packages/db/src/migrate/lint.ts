/**
 * SQL linter for migrations (PLAN §6.1, §6.2 and §14.5). It rejects anything that could break the
 * legacy application or lose legacy data:
 *
 * - DROP / RENAME / TRUNCATE of legacy tables, columns, constraints, indexes, triggers, sequences;
 * - ALTER COLUMN … TYPE, SET/DROP NOT NULL on legacy columns, and DROP DEFAULT on them (a down
 *   file may only remove a default that the legacy schema did not have);
 * - new legacy-table columns that are NOT NULL without DEFAULT, carry inline constraints or have a
 *   volatile default; CHECK/FOREIGN KEY on legacy tables without NOT VALID; UNIQUE/PRIMARY KEY
 *   constraints on legacy tables (use CREATE UNIQUE INDEX CONCURRENTLY);
 * - UPDATE of legacy columns, DELETE and MERGE on legacy tables (down files may DELETE with
 *   `-- sotf:allow-legacy-delete: <reason>`);
 * - statements that hide other statements from these rules: DO blocks and rules (CREATE RULE)
 *   are rejected outright; function/procedure bodies must be dollar-quoted, may not run DDL or
 *   dynamic SQL (EXECUTE) and are linted with the same DML rules as top-level statements;
 * - CREATE INDEX on an existing table without CONCURRENTLY, CONCURRENTLY inside a transaction,
 *   no-transaction files with more than one statement, CASCADE, transaction control, GRANT/REVOKE
 *   and other operations that do not belong in a migration;
 * - a migration without its down file.
 *
 * "Legacy" means present in the frozen legacy catalog (src/guard/legacy-catalog.json).
 */
import type { Catalog } from '../guard/catalog.ts';
import type { Migration, SqlFile } from './files.ts';
import {
  normalizeIdentifier,
  objectName,
  QUALIFIED_IDENT,
  type SqlStatement,
  splitStatements,
  splitTopLevel,
} from './sql-text.ts';

export interface LintIssue {
  file: string;
  line: number;
  rule: string;
  message: string;
}

export interface LegacyObjects {
  tables: ReadonlySet<string>;
  columns: ReadonlyMap<string, ReadonlyMap<string, { default: string | null }>>;
  constraints: ReadonlySet<string>;
  indexes: ReadonlySet<string>;
  triggers: ReadonlySet<string>;
  sequences: ReadonlySet<string>;
}

export function legacyObjectsFrom(catalog: Catalog): LegacyObjects {
  const tables = new Set<string>();
  const columns = new Map<string, Map<string, { default: string | null }>>();
  const constraints = new Set<string>();
  const indexes = new Set<string>();
  const triggers = new Set<string>();
  const sequences = new Set<string>();
  for (const [table, info] of Object.entries(catalog.tables)) {
    tables.add(table);
    const cols = new Map<string, { default: string | null }>();
    for (const [name, col] of Object.entries(info.columns)) {
      cols.set(name, { default: col.default });
      const seq = /^nextval\('(.+)'::regclass\)$/.exec(col.default ?? '');
      if (seq) sequences.add(objectName(seq[1] as string));
    }
    columns.set(table, cols);
    for (const name of Object.keys(info.constraints)) constraints.add(name);
    for (const name of Object.keys(info.indexes)) indexes.add(name);
    for (const name of Object.keys(info.triggers)) triggers.add(name);
  }
  return { tables, columns, constraints, indexes, triggers, sequences };
}

const ID = QUALIFIED_IDENT;
const ADD_COLUMN = new RegExp(`^ADD\\s+(?:COLUMN\\s+)?(?:IF\\s+NOT\\s+EXISTS\\s+)?(${ID})\\s*(.*)$`, 'i');
const DROP_COLUMN = new RegExp(
  `^DROP\\s+(?:COLUMN\\s+)?(?:IF\\s+EXISTS\\s+)?(${ID})(?:\\s+(?:CASCADE|RESTRICT))?$`,
  'i',
);
const DROP_CONSTRAINT = new RegExp(`^DROP\\s+CONSTRAINT\\s+(?:IF\\s+EXISTS\\s+)?(${ID})`, 'i');
const ALTER_COLUMN = new RegExp(`^ALTER\\s+(?:COLUMN\\s+)?(${ID})\\s+(.*)$`, 'i');
const CREATE_TABLE = new RegExp(`^CREATE\\s+(?:UNLOGGED\\s+)?TABLE\\s+(?:IF\\s+NOT\\s+EXISTS\\s+)?(${ID})`, 'i');
const VOLATILE_DEFAULT =
  /\b(random|gen_random_uuid|uuid_generate_v\d|clock_timestamp|timeofday|nextval|txid_current)\s*\(/i;
const FORBIDDEN_STATEMENTS: ReadonlyArray<readonly [RegExp, string]> = [
  [
    /^(BEGIN|START\s+TRANSACTION|COMMIT|ROLLBACK|END|SAVEPOINT|RELEASE|ABORT)\b/i,
    'transaction control is handled by the runner',
  ],
  [/^(GRANT|REVOKE)\b/i, 'privileges are managed in ops/sql/roles.sql, not in migrations'],
  [/^DROP\s+(SCHEMA|DATABASE|OWNED|EXTENSION|ROLE|USER)\b/i, 'this DROP is not allowed in a migration'],
  [
    /^(REASSIGN\s+OWNED|ALTER\s+(DATABASE|SYSTEM|SCHEMA|ROLE|USER|EXTENSION)|CREATE\s+(ROLE|USER|DATABASE))\b/i,
    'not allowed in a migration',
  ],
  [/^(VACUUM|CLUSTER|LOCK|COPY|LISTEN|NOTIFY|DISCARD)\b/i, 'not allowed in a migration'],
  [
    /^DO\b/i,
    'DO blocks hide their statements from the linter: write plain SQL, use -- sotf:precondition for conditions or split the migration',
  ],
  [
    /^CREATE\s+(?:OR\s+REPLACE\s+)?RULE\b/i,
    'rules silently rewrite queries (legacy ones included): use a trigger function instead',
  ],
  [
    /^REINDEX\b(?!.*\bCONCURRENTLY\b)/i,
    'REINDEX blocks writes: use REINDEX … CONCURRENTLY in a -- sotf:no-transaction file',
  ],
];

interface Context {
  file: SqlFile;
  kind: 'up' | 'down';
  legacy: LegacyObjects;
  createdTables: Set<string>;
  issues: LintIssue[];
}

function report(ctx: Context, stmt: SqlStatement | null, rule: string, message: string): void {
  ctx.issues.push({ file: ctx.file.file, line: stmt?.line ?? 1, rule, message });
}

/** Lints every migration (up and down files) of a directory listing. */
export function lintMigrations(migrations: readonly Migration[], legacyCatalog: Catalog): LintIssue[] {
  const legacy = legacyObjectsFrom(legacyCatalog);
  const issues: LintIssue[] = [];
  for (const migration of migrations) {
    if (migration.directives.baseline) continue;
    lintFile(migration, 'up', legacy, issues);
    if (migration.down) lintFile(migration.down, 'down', legacy, issues);
    else {
      issues.push({
        file: migration.file,
        line: 1,
        rule: 'missing-down',
        message: `every migration needs a tested down file (${migration.name}.down.sql, PLAN §14.5)`,
      });
    }
  }
  return issues;
}

/** Lints one file. Exposed for tests and for the runner's pre-flight check. */
export function lintFile(
  file: SqlFile,
  kind: 'up' | 'down',
  legacy: LegacyObjects,
  issues: LintIssue[] = [],
): LintIssue[] {
  const ctx: Context = { file, kind, legacy, createdTables: new Set(), issues };
  const statements = splitStatements(file.sql);

  if (statements.length === 0) report(ctx, null, 'empty', 'the file has no statement');
  if (file.directives.noTransaction && statements.length !== 1) {
    report(
      ctx,
      statements[1] ?? null,
      'no-transaction-single',
      'a -- sotf:no-transaction file must contain exactly one statement',
    );
  }
  if (file.directives.precondition) lintPrecondition(ctx, file.directives.precondition);

  for (const stmt of statements) {
    const created = CREATE_TABLE.exec(stmt.masked);
    if (created) ctx.createdTables.add(objectName(created[1] as string));
  }
  for (const stmt of statements) lintStatement(ctx, stmt);
  return issues;
}

function lintPrecondition(ctx: Context, expression: string): void {
  if (
    /;/.test(expression) ||
    /\b(INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|GRANT|REVOKE|COPY)\b/i.test(expression)
  ) {
    report(ctx, null, 'precondition-read-only', 'sotf:precondition must be a single read-only boolean expression');
  }
}

const isLegacyTable = (ctx: Context, ident: string) => ctx.legacy.tables.has(objectName(ident));

function lintStatement(ctx: Context, stmt: SqlStatement): void {
  const s = stmt.masked;

  for (const [pattern, message] of FORBIDDEN_STATEMENTS) {
    if (pattern.test(s)) report(ctx, stmt, 'forbidden-statement', `${message}: ${preview(s)}`);
  }
  if (/^DROP\b/i.test(s) && /\bCASCADE\b/i.test(s)) {
    report(ctx, stmt, 'no-cascade', 'DROP … CASCADE is not allowed: drop dependent objects explicitly');
  }
  if (/\bCONCURRENTLY\b/i.test(s) && !ctx.file.directives.noTransaction) {
    report(
      ctx,
      stmt,
      'concurrently-needs-no-transaction',
      'CONCURRENTLY cannot run in a transaction: mark the file -- sotf:no-transaction',
    );
  }

  lintCreateTable(ctx, stmt);
  lintDropTable(ctx, stmt);
  lintTruncate(ctx, stmt);
  lintDeletes(ctx, stmt);
  lintUpdates(ctx, stmt);
  lintMerge(ctx, stmt);
  lintRoutineBodies(ctx, stmt);
  lintAlterTable(ctx, stmt);
  lintIndexes(ctx, stmt);
  lintTriggersAndSequences(ctx, stmt);
}

function lintCreateTable(ctx: Context, stmt: SqlStatement): void {
  const m = CREATE_TABLE.exec(stmt.masked);
  if (m && isLegacyTable(ctx, m[1] as string)) {
    report(
      ctx,
      stmt,
      'legacy-table-create',
      `"${objectName(m[1] as string)}" is a legacy table: only the baseline creates it`,
    );
  }
}

function lintDropTable(ctx: Context, stmt: SqlStatement): void {
  const m = /^DROP\s+(?:FOREIGN\s+)?TABLE\s+(?:IF\s+EXISTS\s+)?(.+?)(?:\s+(?:CASCADE|RESTRICT))?$/i.exec(stmt.masked);
  if (!m) return;
  for (const ident of splitTopLevel(m[1] as string)) {
    if (isLegacyTable(ctx, ident)) {
      report(ctx, stmt, 'legacy-drop', `DROP TABLE of legacy table "${objectName(ident)}" is forbidden`);
    }
  }
}

function lintTruncate(ctx: Context, stmt: SqlStatement): void {
  const m =
    /^TRUNCATE\s+(?:TABLE\s+)?(?:ONLY\s+)?(.+?)(?:\s+(?:RESTART|CONTINUE)\s+IDENTITY)?(?:\s+(?:CASCADE|RESTRICT))?$/i.exec(
      stmt.masked,
    );
  if (!m) return;
  for (const ident of splitTopLevel(m[1] as string)) {
    if (isLegacyTable(ctx, ident))
      report(ctx, stmt, 'legacy-dml', `TRUNCATE of legacy table "${objectName(ident)}" is forbidden`);
  }
}

function lintDeletes(ctx: Context, stmt: SqlStatement): void {
  const re = new RegExp(`\\bDELETE\\s+FROM\\s+(?:ONLY\\s+)?(${ID})`, 'gi');
  for (const m of stmt.masked.matchAll(re)) {
    const table = objectName(m[1] as string);
    if (!ctx.legacy.tables.has(table)) continue;
    if (ctx.kind === 'down' && ctx.file.directives.allowLegacyDelete) continue;
    report(
      ctx,
      stmt,
      'legacy-dml',
      ctx.kind === 'down'
        ? `DELETE on legacy table "${table}" needs -- sotf:allow-legacy-delete: <reason> in the down file`
        : `DELETE on legacy table "${table}" is forbidden in migrations (PLAN §14.5)`,
    );
  }
}

function lintMerge(ctx: Context, stmt: SqlStatement): void {
  const re = new RegExp(`\\bMERGE\\s+INTO\\s+(?:ONLY\\s+)?(${ID})`, 'gi');
  for (const m of stmt.masked.matchAll(re)) {
    const table = objectName(m[1] as string);
    if (!ctx.legacy.tables.has(table)) continue;
    report(
      ctx,
      stmt,
      'legacy-dml',
      `MERGE into legacy table "${table}" is forbidden: use INSERT … ON CONFLICT or UPDATE of v2 columns`,
    );
  }
}

const CREATE_ROUTINE = /^CREATE\s+(?:OR\s+REPLACE\s+)?(?:FUNCTION|PROCEDURE)\b/i;
const ROUTINE_DDL = /\b(DROP|ALTER|TRUNCATE|CREATE|GRANT|REVOKE|RENAME|COMMIT|ROLLBACK|COPY|LOCK)\b/i;

/**
 * Function and procedure bodies run later (triggers, CALL, SELECT f()), so whatever they contain
 * must pass the same rules. Bodies are lexed again; string literals inside them stay masked.
 */
function lintRoutineBodies(ctx: Context, stmt: SqlStatement): void {
  if (!CREATE_ROUTINE.test(stmt.masked)) return;
  if (/\bAS\s+''/i.test(stmt.masked)) {
    report(
      ctx,
      stmt,
      'routine-body',
      'function/procedure bodies must be dollar-quoted ($$…$$) or SQL-standard so the linter can read them',
    );
  }
  // A DELETE inside a body is never covered by -- sotf:allow-legacy-delete.
  const bodyCtx: Context = { ...ctx, kind: 'up' };
  const visit = (bodies: readonly string[]) => {
    for (const body of bodies) {
      for (const inner of splitStatements(body)) {
        const at: SqlStatement = { ...inner, line: stmt.line };
        if (/\bEXECUTE\b/i.test(inner.masked)) {
          report(
            ctx,
            at,
            'routine-dynamic-sql',
            `dynamic SQL (EXECUTE) is not allowed in a routine body: ${preview(inner.masked)}`,
          );
        }
        const ddl = ROUTINE_DDL.exec(inner.masked);
        if (ddl) {
          report(
            ctx,
            at,
            'routine-ddl',
            `${(ddl[1] as string).toUpperCase()} is not allowed in a routine body: ${preview(inner.masked)}`,
          );
        }
        lintTruncate(bodyCtx, at);
        lintDeletes(bodyCtx, at);
        lintUpdates(bodyCtx, at);
        lintMerge(bodyCtx, at);
        visit(inner.bodies);
      }
    }
  };
  visit(stmt.bodies);
}

/** Extracts the assignment list that follows `SET` until a top-level terminator. */
function assignmentList(s: string, from: number): string {
  let depth = 0;
  let quoted = false;
  let i = from;
  for (; i < s.length; i += 1) {
    const ch = s[i] as string;
    if (ch === '"') quoted = !quoted;
    if (quoted) continue;
    if (ch === '(') depth += 1;
    else if (ch === ')') {
      if (depth === 0) break;
      depth -= 1;
    } else if (depth === 0 && /\s/.test(ch)) {
      const rest = s.slice(i + 1);
      if (/^(WHERE|FROM|RETURNING|ON\s+CONFLICT)\b/i.test(rest)) break;
    }
  }
  return s.slice(from, i);
}

function assignedColumns(list: string): string[] {
  const targets: string[] = [];
  for (const assignment of splitTopLevel(list)) {
    const tuple = /^\(([^)]*)\)\s*=/.exec(assignment);
    if (tuple) {
      for (const col of splitTopLevel(tuple[1] as string)) targets.push(normalizeIdentifier(col));
      continue;
    }
    const single = new RegExp(`^(${ID})\\s*(?:\\[[^\\]]*\\])?\\s*=`).exec(assignment);
    if (single) targets.push(objectName(single[1] as string));
  }
  return targets;
}

function checkAssignments(ctx: Context, stmt: SqlStatement, table: string, list: string): void {
  const legacyColumns = ctx.legacy.columns.get(table);
  if (!legacyColumns) return;
  for (const column of assignedColumns(list)) {
    if (legacyColumns.has(column)) {
      report(
        ctx,
        stmt,
        'legacy-dml',
        `UPDATE of legacy column "${table}"."${column}" is forbidden: migrations only fill v2 columns (PLAN §14.5)`,
      );
    }
  }
}

function lintUpdates(ctx: Context, stmt: SqlStatement): void {
  const s = stmt.masked;
  const update = new RegExp(
    `\\bUPDATE\\s+(?:ONLY\\s+)?(${ID})(?:\\s+(?:AS\\s+)?(?!SET\\b)[A-Za-z_][A-Za-z0-9_]*)?\\s+SET\\s+`,
    'gi',
  );
  for (const m of s.matchAll(update)) {
    const table = objectName(m[1] as string);
    if (!ctx.legacy.tables.has(table)) continue;
    checkAssignments(ctx, stmt, table, assignmentList(s, (m.index ?? 0) + m[0].length));
  }
  const insert = new RegExp(`\\bINSERT\\s+INTO\\s+(${ID})`, 'gi');
  const inserts = [...s.matchAll(insert)];
  inserts.forEach((m, index) => {
    const table = objectName(m[1] as string);
    if (!ctx.legacy.tables.has(table)) return;
    const start = m.index ?? 0;
    const end = inserts[index + 1]?.index ?? s.length;
    const segment = s.slice(start, end);
    const doUpdate = /\bDO\s+UPDATE\s+SET\s+/i.exec(segment);
    if (doUpdate) checkAssignments(ctx, stmt, table, assignmentList(segment, doUpdate.index + doUpdate[0].length));
  });
}

function lintAlterTable(ctx: Context, stmt: SqlStatement): void {
  const m = new RegExp(`^ALTER\\s+TABLE\\s+(?:IF\\s+EXISTS\\s+)?(?:ONLY\\s+)?(${ID})\\s+(.*)$`, 'i').exec(stmt.masked);
  if (!m) return;
  const table = objectName(m[1] as string);
  const legacyColumns = ctx.legacy.columns.get(table);
  if (!legacyColumns) return; // v2 table: free to evolve
  const actions = m[2] as string;

  if (/^RENAME\b/i.test(actions) || /^SET\s+SCHEMA\b/i.test(actions)) {
    report(
      ctx,
      stmt,
      'legacy-rename',
      `renaming or moving legacy table "${table}" (or its columns/constraints) is forbidden`,
    );
    return;
  }

  for (const action of splitTopLevel(actions)) {
    lintLegacyAction(ctx, stmt, table, legacyColumns, action);
  }
}

function lintLegacyAction(
  ctx: Context,
  stmt: SqlStatement,
  table: string,
  legacyColumns: ReadonlyMap<string, { default: string | null }>,
  action: string,
): void {
  const at = `"${table}"`;

  if (/^ADD\s+(CONSTRAINT\b|PRIMARY\s+KEY\b|UNIQUE\b|CHECK\b|FOREIGN\s+KEY\b|EXCLUDE\b)/i.test(action)) {
    const named = /^ADD\s+CONSTRAINT\s+/i.test(action);
    if (!named)
      report(ctx, stmt, 'constraint-name', `name constraints on legacy table ${at} explicitly (ADD CONSTRAINT "…")`);
    if (
      /\b(PRIMARY\s+KEY|UNIQUE|EXCLUDE)\b/i.test(action) &&
      !/\bFOREIGN\s+KEY\b/i.test(action) &&
      !/\bCHECK\b/i.test(action)
    ) {
      report(
        ctx,
        stmt,
        'legacy-unique-constraint',
        `UNIQUE/PRIMARY KEY/EXCLUDE on legacy table ${at} locks writes while it builds: use CREATE UNIQUE INDEX CONCURRENTLY`,
      );
    } else if (!/\bNOT\s+VALID\s*$/i.test(action)) {
      report(
        ctx,
        stmt,
        'not-valid',
        `CHECK/FOREIGN KEY on legacy table ${at} must be added NOT VALID and validated later`,
      );
    }
    return;
  }

  const m = ADD_COLUMN.exec(action);
  if (m) {
    const column = objectName(m[1] as string);
    const definition = m[2] as string;
    if (legacyColumns.has(column)) {
      report(ctx, stmt, 'legacy-column-clash', `${at}."${column}" is a legacy column`);
    }
    const generated = /\bGENERATED\b/i.test(definition);
    if (/\bNOT\s+NULL\b/i.test(definition) && !/\bDEFAULT\b/i.test(definition) && !generated) {
      report(
        ctx,
        stmt,
        'not-null-without-default',
        `${at}."${column}" is NOT NULL without DEFAULT: legacy INSERTs would fail`,
      );
    }
    if (VOLATILE_DEFAULT.test(definition)) {
      report(ctx, stmt, 'volatile-default', `${at}."${column}" has a volatile default: it rewrites the table`);
    }
    if (/\b(REFERENCES|CHECK|UNIQUE|PRIMARY\s+KEY)\b/i.test(definition)) {
      report(
        ctx,
        stmt,
        'inline-constraint',
        `${at}."${column}": add constraints separately with ADD CONSTRAINT … NOT VALID`,
      );
    }
    return;
  }

  const dropColumn = /^DROP\s+CONSTRAINT\b/i.test(action) ? null : DROP_COLUMN.exec(action);
  if (dropColumn) {
    const column = objectName(dropColumn[1] as string);
    if (legacyColumns.has(column)) {
      report(ctx, stmt, 'legacy-drop', `DROP COLUMN of legacy column ${at}."${column}" is forbidden`);
    }
    return;
  }

  const dropConstraint = DROP_CONSTRAINT.exec(action);
  if (dropConstraint) {
    const name = objectName(dropConstraint[1] as string);
    if (ctx.legacy.constraints.has(name))
      report(ctx, stmt, 'legacy-drop', `DROP CONSTRAINT of legacy constraint "${name}" is forbidden`);
    return;
  }

  const alterColumn = ALTER_COLUMN.exec(action);
  if (alterColumn) {
    const column = objectName(alterColumn[1] as string);
    const sub = alterColumn[2] as string;
    const legacy = legacyColumns.get(column);
    if (!legacy) return; // v2 column on a legacy table
    if (/^SET\s+DEFAULT\b/i.test(sub)) {
      if (legacy.default !== null) {
        report(
          ctx,
          stmt,
          'legacy-default',
          `${at}."${column}" already has a legacy default: changing it alters legacy behavior`,
        );
      }
      return;
    }
    if (/^DROP\s+DEFAULT\b/i.test(sub)) {
      if (ctx.kind === 'up' || legacy.default !== null) {
        report(ctx, stmt, 'legacy-default', `DROP DEFAULT on legacy column ${at}."${column}" is forbidden`);
      }
      return;
    }
    if (/^(SET\s+DATA\s+)?TYPE\b/i.test(sub)) {
      report(ctx, stmt, 'legacy-type', `changing the type of legacy column ${at}."${column}" is forbidden`);
      return;
    }
    if (/^(SET|DROP)\s+NOT\s+NULL\b/i.test(sub)) {
      report(
        ctx,
        stmt,
        'legacy-nullability',
        `changing the nullability of legacy column ${at}."${column}" is forbidden`,
      );
      return;
    }
    report(ctx, stmt, 'legacy-alter', `unsupported change to legacy column ${at}."${column}": ${preview(sub)}`);
    return;
  }

  if (/^VALIDATE\s+CONSTRAINT\b/i.test(action) || /^(ENABLE|DISABLE)\s+(ALWAYS\s+|REPLICA\s+)?TRIGGER\b/i.test(action))
    return;

  report(ctx, stmt, 'legacy-alter', `unsupported ALTER TABLE action on legacy table ${at}: ${preview(action)}`);
}

function lintIndexes(ctx: Context, stmt: SqlStatement): void {
  const s = stmt.masked;
  const create = new RegExp(
    `^CREATE\\s+(?:UNIQUE\\s+)?INDEX\\s+(CONCURRENTLY\\s+)?(IF\\s+NOT\\s+EXISTS\\s+)?(${ID}\\s+)?ON\\s+(?:ONLY\\s+)?(${ID})`,
    'i',
  ).exec(s);
  if (create) {
    const concurrently = Boolean(create[1]);
    const name = create[3]?.trim();
    const table = objectName(create[4] as string);
    if (!name) report(ctx, stmt, 'index-name', 'name every index explicitly');
    if (name && ctx.legacy.indexes.has(objectName(name))) {
      report(ctx, stmt, 'legacy-index', `"${objectName(name)}" is a legacy index name`);
    }
    if (!concurrently && !ctx.createdTables.has(table)) {
      report(
        ctx,
        stmt,
        'index-concurrently',
        `CREATE INDEX on existing table "${table}" must be CONCURRENTLY, alone in a -- sotf:no-transaction file`,
      );
    }
    if (concurrently && !create[2]) {
      report(ctx, stmt, 'index-if-not-exists', 'CREATE INDEX CONCURRENTLY must use IF NOT EXISTS (safe re-runs)');
    }
    return;
  }
  const drop = /^DROP\s+INDEX\s+(?:CONCURRENTLY\s+)?(?:IF\s+EXISTS\s+)?(.+?)(?:\s+(?:CASCADE|RESTRICT))?$/i.exec(s);
  if (drop) {
    for (const ident of splitTopLevel(drop[1] as string)) {
      const name = objectName(ident);
      if (ctx.legacy.indexes.has(name))
        report(ctx, stmt, 'legacy-drop', `DROP INDEX of legacy index "${name}" is forbidden`);
    }
    return;
  }
  const alter = new RegExp(`^ALTER\\s+INDEX\\s+(?:IF\\s+EXISTS\\s+)?(${ID})`, 'i').exec(s);
  if (alter && ctx.legacy.indexes.has(objectName(alter[1] as string))) {
    report(ctx, stmt, 'legacy-alter', `ALTER INDEX on legacy index "${objectName(alter[1] as string)}" is forbidden`);
  }
}

function lintTriggersAndSequences(ctx: Context, stmt: SqlStatement): void {
  const s = stmt.masked;
  const dropTrigger = new RegExp(`^(?:DROP|ALTER)\\s+TRIGGER\\s+(?:IF\\s+EXISTS\\s+)?(${ID})`, 'i').exec(s);
  if (dropTrigger && ctx.legacy.triggers.has(objectName(dropTrigger[1] as string))) {
    report(ctx, stmt, 'legacy-drop', `changing legacy trigger "${objectName(dropTrigger[1] as string)}" is forbidden`);
  }
  const seq = new RegExp(`^(?:DROP|ALTER)\\s+SEQUENCE\\s+(?:IF\\s+EXISTS\\s+)?(${ID})`, 'i').exec(s);
  if (seq && ctx.legacy.sequences.has(objectName(seq[1] as string))) {
    report(ctx, stmt, 'legacy-sequence', `changing legacy sequence "${objectName(seq[1] as string)}" is forbidden`);
  }
}

function preview(text: string): string {
  return text.length > 80 ? `${text.slice(0, 77)}…` : text;
}

export function formatLintIssues(issues: readonly LintIssue[]): string {
  return issues.map((i) => `  ✘ ${i.file}:${i.line} [${i.rule}] ${i.message}`).join('\n');
}
