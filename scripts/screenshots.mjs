// One-off script: capture project thumbnails from the live sites.
// Run with: node scripts/screenshots.mjs
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "public/projects";
mkdirSync(OUT, { recursive: true });

const sites = [
  { name: "proveo", url: "https://proveohq.com" },
  { name: "kocreit", url: "https://kocreit.com" },
  { name: "fleiko", url: "https://fleiko.com" },
  { name: "korent", url: "https://korent.app" },
  { name: "crecystudio", url: "https://crecystudio.com" },
];

const browser = await chromium.launch();
// 16:10 viewport to match the card aspect ratio; deviceScaleFactor 2 for crisp output.
const context = await browser.newContext({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
  // The sandbox routes egress through a TLS-intercepting proxy whose cert
  // Chromium doesn't trust; the sites themselves are valid.
  ignoreHTTPSErrors: true,
});

for (const site of sites) {
  const page = await context.newPage();
  let status = "ok";
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(2000);
    // Dismiss cookie/consent banners so they don't obscure the hero.
    const labels = ["Accept", "Accept all", "I agree", "Got it", "Allow", "OK", "Reject", "Decline"];
    for (const label of labels) {
      const btn = page.getByRole("button", { name: label, exact: false }).first();
      if (await btn.count().catch(() => 0)) {
        await btn.click({ timeout: 1500 }).catch(() => {});
        break;
      }
    }
    await page.waitForTimeout(1200); // let the banner animate out
    await page.screenshot({ path: `${OUT}/${site.name}.png` }); // viewport-only (above the fold)
  } catch (err) {
    status = `FAILED: ${err.message.split("\n")[0]}`;
    // Capture whatever rendered so we at least get something.
    try {
      await page.screenshot({ path: `${OUT}/${site.name}.png` });
      status += " (captured partial)";
    } catch {}
  }
  console.log(`${site.name.padEnd(12)} ${site.url.padEnd(28)} -> ${status}`);
  await page.close();
}

await browser.close();
console.log("DONE");
