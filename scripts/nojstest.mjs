import { chromium } from "playwright";
const URL = "http://localhost:3100";
const browser = await chromium.launch();
// JavaScript disabled — simulates a locked-down browser / JS failure.
const ctx = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto(URL, { waitUntil: "load" });
await p.waitForTimeout(500);
await p.screenshot({ path: "/tmp/nojs-full.png", fullPage: true });

// Assert the gated sections actually have content visible (non-zero box).
const checks = {};
for (const id of ["projects", "build", "stack"]) {
  const el = p.locator(`#${id}`);
  const box = await el.boundingBox().catch(() => null);
  // Check the heading text is present in DOM
  const heading = await el.locator("h2").first().textContent().catch(() => null);
  checks[id] = { hasBox: !!box && box.height > 50, heading: heading?.trim() };
}
console.log(JSON.stringify(checks, null, 2));
console.log("DONE");
await browser.close();
