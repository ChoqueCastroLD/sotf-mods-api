#!/usr/bin/env node
// biome-ignore-all lint/suspicious/noConsole: command line tool
/**
 * Transfer budget per template: fetches the HTML of each public template from a running
 * production server and sums the brotli size of the HTML, the CSS and the JS it loads at start
 * (script tags, stylesheets, modulepreload hints). Usage:
 *
 *   node apps/web/scripts/page-weight.mjs [--base http://127.0.0.1:47399]
 *
 * Budgets (PLAN §8.2): JS <= 15 KB br on content pages, <= 90 KB br with a React island.
 */
import { brotliCompressSync } from 'node:zlib';

const args = process.argv.slice(2);
const baseIndex = args.indexOf('--base');
const BASE = (baseIndex >= 0 ? args[baseIndex + 1] : 'http://127.0.0.1:47399').replace(/\/+$/, '');

const br = (buffer) => brotliCompressSync(buffer).length;
const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

async function sample(type) {
  const res = await fetch(`${BASE}/sitemaps/${type}.xml`);
  const text = await res.text();
  const url = [...text.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => new URL(m[1]).pathname)[0];
  return url;
}

const mod = await sample('mods');
const build = await sample('builds');
const category = await sample('categories');
const profile = await sample('creators');
const jam = await sample('jams');
const request = await sample('requests');

const pages = [
  ['home', '/'],
  ['mods search', '/mods'],
  ['category', category],
  ['mod', mod],
  ['mod versions', mod && `${mod}/versions`],
  ['build', build],
  ['builds', '/builds'],
  ['profile', profile],
  ['jams', '/jams'],
  ['jam', jam],
  ['requests', '/requests'],
  ['request', request],
  ['install', '/install'],
  ['about', '/about'],
  ['logs', '/logs'],
  ['login', '/login'],
  ['404', '/nope-not-found'],
].filter(([, path]) => Boolean(path));

const cache = new Map();
async function asset(path) {
  if (!cache.has(path)) {
    const res = await fetch(new URL(path, BASE));
    cache.set(path, Buffer.from(await res.arrayBuffer()));
  }
  return cache.get(path);
}

const rows = [];
for (const [name, path] of pages) {
  const res = await fetch(`${BASE}${path}`);
  const html = Buffer.from(await res.arrayBuffer());
  const text = html.toString('utf8');
  const head = text.slice(0, text.indexOf('</head>') > 0 ? text.indexOf('</head>') : text.length);
  const scripts = new Set();
  const preloads = new Set();
  const styles = new Set();
  for (const m of text.matchAll(/<script[^>]*\ssrc="([^"]+\.js[^"]*)"/g)) scripts.add(m[1]);
  for (const m of text.matchAll(/<link[^>]*rel="modulepreload"[^>]*href="([^"]+)"/g)) preloads.add(m[1]);
  for (const m of text.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)) styles.add(m[1]);
  // Astro inlines some CSS: count style tags too.
  let inlineCss = 0;
  for (const m of text.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) inlineCss += Buffer.byteLength(m[1]);
  let jsBytes = 0;
  let cssBytes = 0;
  for (const src of new Set([...scripts, ...preloads])) jsBytes += br(await asset(src));
  for (const href of styles) cssBytes += br(await asset(href));
  const islands = (text.match(/<astro-island/g) ?? []).length;
  rows.push({
    page: name,
    status: res.status,
    html: br(html),
    js: jsBytes,
    css: cssBytes,
    inlineCss,
    jsFiles: new Set([...scripts, ...preloads]).size,
    islands,
    headBytes: head.length,
  });
}

console.log(
  'page'.padEnd(14),
  'status',
  'html br'.padStart(9),
  'js br'.padStart(9),
  'css br'.padStart(9),
  'js files',
  'islands',
);
for (const row of rows) {
  console.log(
    row.page.padEnd(14),
    String(row.status).padEnd(6),
    kb(row.html).padStart(9),
    kb(row.js).padStart(9),
    kb(row.css).padStart(9),
    String(row.jsFiles).padStart(8),
    String(row.islands).padStart(7),
  );
}
