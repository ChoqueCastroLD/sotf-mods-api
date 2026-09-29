/**
 * Minimal hast helpers (no extra dependencies, iterative where depth is user-controlled).
 */
import type { Element, ElementContent, Nodes, Parents, Properties, Root, Text } from 'hast';

export type Parent = Root | Element;

export function isElement(node: Nodes | undefined, tagName?: string | readonly string[]): node is Element {
  if (node?.type !== 'element') return false;
  if (tagName === undefined) return true;
  return typeof tagName === 'string' ? node.tagName === tagName : tagName.includes(node.tagName);
}

export function isText(node: Nodes | undefined): node is Text {
  return node?.type === 'text';
}

export function isWhitespaceText(node: Nodes | undefined): boolean {
  return isText(node) && /^[\t\n\f\r ]*$/.test(node.value);
}

export function element(tagName: string, properties: Properties = {}, children: ElementContent[] = []): Element {
  return { type: 'element', tagName, properties, children };
}

export function text(value: string): Text {
  return { type: 'text', value };
}

/** Class list of an element as an array of strings. */
export function classList(node: Element): string[] {
  const value: unknown = node.properties.className;
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === 'string') return value.split(/\s+/).filter(Boolean);
  return [];
}

export function hasClass(node: Element, name: string): boolean {
  return classList(node).includes(name);
}

/** Text content of a node (iterative: safe on deeply nested trees). */
export function textContent(node: Nodes): string {
  let out = '';
  const stack: Nodes[] = [node];
  while (stack.length > 0) {
    const current = stack.pop() as Nodes;
    if (current.type === 'text') {
      out += current.value;
    } else if ('children' in current) {
      for (let i = current.children.length - 1; i >= 0; i--) stack.push(current.children[i] as Nodes);
    }
  }
  return out;
}

/**
 * Depth-first pre-order walk over elements. The callback may return `'skip'` to not descend into
 * the element. Iterative, so deeply nested input cannot overflow the call stack.
 */
export function visitElements(tree: Root, visitor: (node: Element) => 'skip' | undefined): void {
  const stack: Element[] = [];
  const pushChildren = (node: Parents) => {
    for (let i = node.children.length - 1; i >= 0; i--) {
      const child = node.children[i] as Nodes;
      if (child.type === 'element') stack.push(child);
    }
  };
  pushChildren(tree);
  while (stack.length > 0) {
    const node = stack.pop() as Element;
    if (visitor(node) !== 'skip') pushChildren(node);
  }
}

/** Every parent node (root and elements), iteratively, in pre-order. */
export function collectParents(tree: Root, skip?: (node: Element) => boolean): Parent[] {
  const out: Parent[] = [tree];
  visitElements(tree, (node) => {
    if (skip?.(node)) return 'skip';
    out.push(node);
    return undefined;
  });
  return out;
}

/** Maximum element nesting depth of a tree (iterative). */
export function maxDepth(tree: Root): number {
  let max = 0;
  const stack: Array<{ node: Parents; depth: number }> = [{ node: tree, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop() as { node: Parents; depth: number };
    if (depth > max) max = depth;
    for (const child of node.children) {
      if (child.type === 'element') stack.push({ node: child, depth: depth + 1 });
    }
  }
  return max;
}
