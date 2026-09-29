// Runtime XSS checks for the patched legacy frontend.
// Run by ../../verify.sh with PATCHED_FRONTEND pointing to the patched tree
// (Node >= 24, dependencies installed from bun.lock):
//   PATCHED_FRONTEND=/path/to/frontend node --test xss.test.ts
// Loads the same DOMPurify (3.0.5) and showdown (2.1.0) builds the site loads
// from its CDNs, into a jsdom window, and evaluates the real scripts.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import { describe, test } from "node:test";
import { pathToFileURL } from "node:url";

import { JSDOM } from "jsdom";

const require = createRequire(import.meta.url);
const frontend = process.env.PATCHED_FRONTEND;
if (!frontend) throw new Error("PATCHED_FRONTEND is not set");

const scripts = join(frontend, "src/static/scripts");
const purifySource = readFileSync(require.resolve("dompurify/dist/purify.min.js"), "utf8");
const showdownSource = readFileSync(require.resolve("showdown/dist/showdown.min.js"), "utf8");
const sharedSource = readFileSync(join(scripts, "shared.js"), "utf8");

type SiteWindow = JSDOM["window"] & { markdownToHTML: (text: string) => string };

function siteWindow({ withPurify }: { withPurify: boolean }): SiteWindow {
  const dom = new JSDOM("<!doctype html><html><body></body></html>", {
    url: "https://sotf-mods.com/mods/regitoxic/example",
    runScripts: "outside-only",
  });
  const { window } = dom;
  if (withPurify) window.eval(purifySource);
  window.eval(showdownSource);
  window.eval(sharedSource);
  return window as SiteWindow;
}

const PAYLOADS = [
  "<img src=x onerror=alert(1)>",
  "<script>alert(1)</script>",
  "[click](javascript:alert(1))",
  '<a href="javascript:alert(1)">x</a>',
  "<svg><script>alert(1)</script></svg>",
  "<iframe src=\"https://evil.example\"></iframe>",
  '<div onmouseover="alert(1)">hover</div>',
  "<style>body{display:none}</style>",
  '<div style="position:fixed;inset:0">overlay</div>',
  '<form action="https://evil.example"><input name="password"></form>',
];

describe("markdownToHTML (shared.js)", () => {
  const window = siteWindow({ withPurify: true });

  test("still renders markdown", () => {
    const html = window.markdownToHTML("**Library** used by _other_ mods.\n\n- one\n- two");
    assert.ok(html.includes("<strong>Library</strong>"));
    assert.ok(html.includes("<em>other</em>"));
    assert.ok(html.includes("<li>one</li>"));
  });

  for (const payload of PAYLOADS) {
    test(`neutralises ${payload}`, () => {
      const container = window.document.createElement("div");
      container.innerHTML = window.markdownToHTML(`Intro\n\n${payload}`);
      assert.equal(container.querySelector("script, iframe, style, form, input"), null);
      for (const node of container.querySelectorAll("*")) {
        for (const attribute of node.getAttributeNames()) {
          assert.equal(attribute.startsWith("on"), false);
          assert.notEqual(attribute, "style");
        }
        const href = node.getAttribute("href") ?? "";
        assert.equal(href.toLowerCase().includes("javascript:"), false);
      }
    });
  }

  test("fails closed when DOMPurify is missing", () => {
    const bare = siteWindow({ withPurify: false });
    const html = bare.markdownToHTML("<img src=x onerror=alert(1)>");
    assert.equal(html, "&lt;img src=x onerror=alert(1)&gt;");
  });
});

// comments.js is an ES module that uses the `window` and `document` globals.
const commentsDom = new JSDOM("<!doctype html><html><body><div id=c></div></body></html>", {
  url: "https://sotf-mods.com/mods/regitoxic/example",
});
const g = globalThis as Record<string, unknown>;
g.window = commentsDom.window;
g.document = commentsDom.window.document;
const { renderComments } = await import(pathToFileURL(join(scripts, "comments.js")).href);

describe("renderComments (comments.js)", () => {
  const dom = commentsDom;

  const container = dom.window.document.getElementById("c") as HTMLElement;
  const replies: Array<[number, string]> = [];
  const opened: string[] = [];
  renderComments(
    container,
    [
      {
        id: 7,
        message: "<img src=x onerror=alert(1)> thanks @bob\nsecond line",
        imageUrl: "javascript:alert(1)",
        createdAt: "2026-09-26T21:33:31.396Z",
        user: { name: "<b>mallory</b>", slug: "mallory/../x", imageUrl: "javascript:alert(2)", isTrusted: true },
        replies: [
          {
            id: 8,
            message: "reply with image",
            imageUrl: "https://r2.sotf-mods.com/comment_8.png",
            createdAt: "2026-09-26T21:34:31.396Z",
            user: { name: "bob", slug: "bob", imageUrl: "", isTrusted: false },
          },
        ],
      },
    ],
    {
      canReply: true,
      onReply: (id: number, name: string) => replies.push([id, name]),
      onOpenImage: (url: string) => opened.push(url),
    },
  );

  test("renders user content as text", () => {
    assert.equal(container.querySelector("[onerror], [onclick], script, b"), null);
    const bubble = container.querySelector(".chat-bubble") as HTMLElement;
    assert.ok(bubble.textContent.includes("<img src=x onerror=alert(1)> thanks @bob"));
    assert.equal(bubble.querySelectorAll("br").length, 1);
    assert.equal(bubble.querySelector("span")?.textContent, "@bob");
    assert.equal(container.querySelector(".chat-header a")?.textContent, "<b>mallory</b>");
    assert.equal(container.querySelector(".chat-header a")?.getAttribute("href"), "/profile/mallory%2F..%2Fx");
  });

  test("drops non-http image URLs and keeps safe ones", () => {
    const images = [...container.querySelectorAll("img")].map((img) => img.getAttribute("src"));
    assert.deepEqual(images, ["https://r2.sotf-mods.com/comment_8.png"]);
    (container.querySelector(".chat-bubble img") as HTMLElement).click();
    assert.deepEqual(opened, ["https://r2.sotf-mods.com/comment_8.png"]);
  });

  test("reply button calls back without inline handlers", () => {
    const buttons = container.querySelectorAll("button");
    assert.equal(buttons.length, 1);
    (buttons[0] as HTMLElement).click();
    assert.deepEqual(replies, [[7, "<b>mallory</b>"]]);
  });
});
