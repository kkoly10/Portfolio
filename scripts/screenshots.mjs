// One-off script: capture thumbnails for the projects featured on the current resume.
// Run with: node scripts/screenshots.mjs
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "public/projects";
mkdirSync(OUT, { recursive: true });

const sites = [
  { name: "korent", url: "https://korent.app" },
  { name: "couranr-market", url: "https://www.couranrmarket.com" },
  { name: "couranr-os", url: "https://www.couranr.com" },
  { name: "crecyos", url: "https://crecyos.com" },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
  ignoreHTTPSErrors: true,
});

for (const site of sites) {
  const page = await context.newPage();
  let status = "ok";
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(2000);
    const labels = ["Accept", "Accept all", "I agree", "Got it", "Allow", "OK", "Reject", "Decline"];
    for (const label of labels) {
      const btn = page.getByRole("button", { name: label, exact: false }).first();
      if (await btn.count().catch(() => 0)) {
        await btn.click({ timeout: 1500 }).catch(() => {});
        break;
      }
    }
    await page.waitForTimeout(1200);
    await page.screenshot({
      path: `${OUT}/${site.name}.jpg`,
      type: "jpeg",
      quality: 82,
    });
  } catch (err) {
    status = `FAILED: ${err.message.split("\n")[0]}`;
    try {
      await page.screenshot({
        path: `${OUT}/${site.name}.jpg`,
        type: "jpeg",
        quality: 82,
      });
      status += " (captured partial)";
    } catch {}
  }
  console.log(`${site.name.padEnd(16)} ${site.url.padEnd(42)} -> ${status}`);
  await page.close();
}

await browser.close();
console.log("DONE");
