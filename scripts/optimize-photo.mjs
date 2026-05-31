// One-off: downsize the hero portrait for web using Chromium (no native deps).
// Renders the source JPEG into a canvas at a capped width and re-encodes it.
import { chromium } from "playwright";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

const SRC = process.argv[2] || "IMG_4504.jpeg";
const OUT = process.argv[3] || "public/komlan.jpg";
const MAX_W = 900; // plenty for a portrait that renders ~320–480px on screen

mkdirSync("public", { recursive: true });
const b64 = readFileSync(SRC).toString("base64");

const browser = await chromium.launch();
const page = await browser.newPage();

const dataUrl = `data:image/jpeg;base64,${b64}`;
const out = await page.evaluate(async ({ dataUrl, MAX_W }) => {
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = rej;
    img.src = dataUrl;
  });
  const scale = Math.min(1, MAX_W / img.naturalWidth);
  const w = Math.round(img.naturalWidth * scale);
  const h = Math.round(img.naturalHeight * scale);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, w, h);
  return { dataUrl: canvas.toDataURL("image/jpeg", 0.86), w, h };
}, { dataUrl, MAX_W });

const base64 = out.dataUrl.split(",")[1];
writeFileSync(OUT, Buffer.from(base64, "base64"));
console.log(`Wrote ${OUT} at ${out.w}x${out.h}`);

await browser.close();
