import { chromium } from "playwright";
const URL = "http://localhost:3100";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto(URL, { waitUntil: "networkidle" });

// Scroll down in steps so IntersectionObserver fires for each section.
const height = await p.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 700) {
  await p.evaluate((y) => window.scrollTo(0, y), y);
  await p.waitForTimeout(300);
}
await p.evaluate(() => window.scrollTo(0, 0));
await p.waitForTimeout(500);

// After scrolling through, capture the projects section specifically.
await p.evaluate(() => document.querySelector("#projects")?.scrollIntoView());
await p.waitForTimeout(1000);
await p.screenshot({ path: "/tmp/scroll-projects.png" });

await p.evaluate(() => document.querySelector("#stack")?.scrollIntoView());
await p.waitForTimeout(1000);
await p.screenshot({ path: "/tmp/scroll-stack.png" });
console.log("DONE");
await browser.close();
