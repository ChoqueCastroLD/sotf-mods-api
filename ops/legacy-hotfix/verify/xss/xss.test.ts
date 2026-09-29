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

// Mod cards: profile.js (lists the owner's unapproved mods too), featured.js
// and the build upload preview (upload-build.js) interpolate user fields into
// innerHTML templates. Every field must reach the DOM as text.
const EVIL_MOD = {
  id: 1,
  name: '"><svg onload=alert(1)>',
  slug: "evil",
  shortDescription: "<img src=x onerror=alert(1)>",
  latestVersion: "<b>1.0.0</b>",
  imageUrl: 'x" onerror="alert(2)',
  isNSFW: false,
  downloads: 3,
  lastReleasedAt: "2026-09-26T21:33:31.396Z",
  category_slug: '"><script>alert(3)</script>',
  category: { name: "<i>Tools</i>" },
  user: { name: "<script>alert(4)</script>", slug: "mallory" },
};

function assertInert(root: Element, forbidden = "script, svg, b, i, iframe, img:not([data-lazy-src], [src])") {
  assert.equal(root.querySelector(forbidden), null, root.innerHTML);
  for (const node of root.querySelectorAll("*")) {
    for (const attribute of node.getAttributeNames()) {
      assert.equal(attribute.startsWith("on"), false, `${node.tagName} has ${attribute}`);
    }
  }
}

function assertCardText(card: Element) {
  assertInert(card);
  assert.equal(card.querySelector("img")?.getAttribute("alt"), EVIL_MOD.name);
  assert.equal(card.querySelector("img")?.getAttribute("src") ?? card.querySelector("img")?.getAttribute("data-lazy-src"), EVIL_MOD.imageUrl);
  assert.equal(card.querySelector(".text-wrap-anywhere")?.textContent, EVIL_MOD.shortDescription);
  assert.equal(card.querySelector(".card-title")?.textContent, `${EVIL_MOD.name}${EVIL_MOD.latestVersion}`);
}

type Json = Record<string, unknown>;

// Evaluates shared.js and then a page script, answering its API calls with `respond`.
function pageWindow(body: string, respond: (url: string) => Json) {
  // #sotf-mods-l carries the page translations; an empty dictionary means English.
  const dom = new JSDOM(`<!doctype html><html><body><div id="sotf-mods-l" data-l="{}"></div>${body}</body></html>`, {
    url: "https://sotf-mods.com/profile/mallory",
    runScripts: "outside-only",
  });
  const { window } = dom;
  window.eval(purifySource);
  window.eval(sharedSource);
  const w = window as unknown as Json;
  w.PUBLIC_API_URL = "https://api.sotf-mods.com";
  w.fetch = async (url: string) => ({ ok: true, json: async () => respond(String(url)) });
  return window;
}

async function cardsIn(container: Element): Promise<Element[]> {
  for (let i = 0; i < 100; i++) {
    const cards = [...container.querySelectorAll(".card")];
    if (cards.length > 0) return cards;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  throw new Error(`no cards rendered: ${container.innerHTML}`);
}

describe("mod cards", () => {
  test("profile.js escapes an unapproved mod's fields", async () => {
    const window = pageWindow(
      `<div id="sotf-mods-p" data-p='{"slug":"mallory"}'></div><div id="mods-discover-container"></div>`,
      (url) => {
        if (url.includes("/stats")) return { status: false };
        return { status: true, data: url.includes("approved=false") ? [EVIL_MOD] : [] };
      },
    );
    window.eval(readFileSync(join(scripts, "profile.js"), "utf8"));
    const container = window.document.getElementById("mods-discover-container") as Element;
    const cards = await cardsIn(container);
    assert.equal(cards.length, 1);
    assertCardText(cards[0]);
    assert.equal(cards[0].querySelector(".badge-ghost")?.textContent, "<i>Tools</i>");
    assert.equal(cards[0].querySelector('a[href^="/profile/"]')?.textContent, EVIL_MOD.user.name);
    assert.equal(cards[0].querySelector(".mod-card-badges a")?.getAttribute("href"), `/mods?category=${EVIL_MOD.category_slug}`);
    window.close();
  });

  test("featured.js escapes every field", async () => {
    const window = pageWindow(`<div id="mods-featured-container"></div>`, () => ({ status: true, data: [EVIL_MOD] }));
    window.eval(readFileSync(join(scripts, "featured.js"), "utf8"));
    const cards = await cardsIn(window.document.getElementById("mods-featured-container") as Element);
    assert.equal(cards.length, 1);
    assertCardText(cards[0]);
    window.close();
  });

  test("upload-build.js preview escapes the typed fields", () => {
    const source = readFileSync(join(scripts, "upload-build.js"), "utf8");
    const match = source.match(/\nfunction getModTemplate\(mod\) \{[\s\S]*?\n\}\n/);
    assert.ok(match, "getModTemplate not found in upload-build.js");
    const window = pageWindow(`<select id="c"><option value="0">x</option></select>`, () => ({}));
    const w = window as unknown as Json;
    w.user = { name: "<script>alert(5)</script>" };
    w.modCategory = window.document.getElementById("c");
    window.eval(`window.getModTemplate = ${match[0].trim().replace(/^function getModTemplate/, "function")}`);
    const card = window.document.createElement("div");
    card.className = "card";
    card.innerHTML = (w.getModTemplate as (mod: Json) => string)({
      ...EVIL_MOD,
      latestVersion: { version: EVIL_MOD.latestVersion },
    });
    assertCardText(card);
    assert.equal(card.querySelector("p.text-left a")?.textContent, "<script>alert(5)</script>");
    window.close();
  });

  test("alerts show messages as text", () => {
    const window = pageWindow(`<div id="alert-wrapper"><div id="alerts"></div></div>`, () => ({}));
    const w = window as unknown as Json;
    (w.showError as (e: unknown) => void)({ message: "<img src=x onerror=alert(1)>" });
    const alerts = window.document.getElementById("alerts") as Element;
    // The alert icon is a static inline <svg>; the message must add no element.
    assertInert(alerts, "img, script");
    assert.ok(alerts.textContent?.includes("<img src=x onerror=alert(1)>"));
    (w.showSuccess as (m: string) => void)("<img src=x onerror=alert(2)>");
    assertInert(alerts, "img, script");
    assert.ok(alerts.textContent?.includes("<img src=x onerror=alert(2)>"));
    window.close();
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
