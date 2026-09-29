import { describe, expect, it } from 'vitest';
import {
  lineAtPosition,
  normalizeIdentifier,
  objectName,
  splitStatements,
  splitTopLevel,
} from '../src/migrate/sql-text.ts';

describe('splitStatements', () => {
  it('splits at top-level semicolons and ignores comments', () => {
    const sql = `-- header; not a statement\nCREATE TABLE "A" (id int);\n/* block; /* nested; */ still */\nSELECT 1;`;
    const statements = splitStatements(sql);
    expect(statements.map((s) => s.text)).toEqual(['CREATE TABLE "A" (id int)', 'SELECT 1']);
    expect(statements.map((s) => s.line)).toEqual([2, 4]);
  });

  it('keeps semicolons inside strings, identifiers and dollar-quoted bodies', () => {
    const sql = `INSERT INTO t VALUES ('a;b', E'c\\';d');\nCREATE FUNCTION f() RETURNS void LANGUAGE plpgsql AS $body$ BEGIN PERFORM 1; END; $body$;\nSELECT "we;ird";`;
    const statements = splitStatements(sql);
    expect(statements).toHaveLength(3);
    expect(statements[0]?.masked).toBe("INSERT INTO t VALUES ('', '')");
    expect(statements[1]?.masked).toBe('CREATE FUNCTION f() RETURNS void LANGUAGE plpgsql AS $$…$$');
    expect(statements[2]?.masked).toBe('SELECT "we;ird"');
  });

  it('masks literals so rules never match text inside strings', () => {
    const [statement] = splitStatements(`SELECT 'DROP TABLE "Mod"' AS x`);
    expect(statement?.masked).toBe(`SELECT '' AS x`);
  });

  it('returns nothing for comment-only input', () => {
    expect(splitStatements('-- only a comment\n\n/* and a block */')).toEqual([]);
  });
});

describe('identifiers', () => {
  it('normalizes quoted and bare identifiers like PostgreSQL', () => {
    expect(normalizeIdentifier('"Mod"')).toBe('Mod');
    expect(normalizeIdentifier('Mod')).toBe('mod');
    expect(normalizeIdentifier('"we""ird"')).toBe('we"ird');
    expect(objectName('public."ModVersion"')).toBe('ModVersion');
    expect(objectName('"public" . "User"')).toBe('User');
  });

  it('splits lists at top-level commas only', () => {
    expect(splitTopLevel('a, b(c, d), "e,f"')).toEqual(['a', 'b(c, d)', '"e,f"']);
  });

  it('maps an error position to its line', () => {
    expect(lineAtPosition('a\nb\nc', 5)).toBe(3);
    expect(lineAtPosition('abc', 1)).toBe(1);
  });
});
