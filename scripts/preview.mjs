// One-off: render the local site and capture desktop + mobile screenshots for review.
import { chromium } from "playwright";

const URL = process.env.URL || "http://localhost:3100";
const browser = await chromium.launch();

// Wait for the server to be ready.
for (let i = 0; i < 30; i++) {
  try {
    const p = await browser.newPage();
    const r = await p.goto(URL, { timeout: 3000 });
    if (r && r.ok()) { await p.close(); break; }
    await p.close();
  } catch {}
  await new Promise((r) => setTimeout(r, 1000));
}

// Desktop full page
const desk = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const dp = await desk.newPage();
await dp.goto(URL, { waitUntil: "networkidle" });
await dp.waitForTimeout(1500);
await dp.screenshot({ path: "/tmp/preview-desktop.png", fullPage: true });
console.log("desktop captured");

// Mobile 375px
const mob = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
const mp = await mob.newPage();
await mp.goto(URL, { waitUntil: "networkidle" });
await mp.waitForTimeout(1500);
await mp.screenshot({ path: "/tmp/preview-mobile.png", fullPage: true });
console.log("mobile captured");

await browser.close();
console.log("DONE");
