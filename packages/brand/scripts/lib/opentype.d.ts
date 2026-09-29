// Minimal typings for the subset of opentype.js 2.0 used by the build scripts.
declare module 'opentype.js' {
  export interface PathCommand {
    readonly type: 'M' | 'L' | 'C' | 'Q' | 'Z';
    readonly x?: number;
    readonly y?: number;
    readonly x1?: number;
    readonly y1?: number;
    readonly x2?: number;
    readonly y2?: number;
  }
  export interface BoundingBox {
    readonly x1: number;
    readonly y1: number;
    readonly x2: number;
    readonly y2: number;
  }
  export interface Path {
    readonly commands: PathCommand[];
    getBoundingBox(): BoundingBox;
  }
  export interface Glyph {
    readonly index: number;
    readonly advanceWidth?: number;
    readonly unicode?: number;
    getPath(x: number, y: number, fontSize: number): Path;
  }
  export interface Font {
    readonly unitsPerEm: number;
    readonly ascender: number;
    readonly descender: number;
    readonly names: Record<string, Record<string, string> | undefined>;
    readonly tables: { readonly os2: { readonly sCapHeight: number; readonly sxHeight: number } };
    charToGlyph(char: string): Glyph;
    hasChar(char: string): boolean;
    getKerningValue(left: Glyph, right: Glyph): number;
  }
  export function parse(buffer: ArrayBuffer): Font;
  const opentype: { parse: typeof parse };
  export default opentype;
}
