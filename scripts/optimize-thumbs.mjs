// One-off: downsize captured thumbnails to a web-appropriate width.
// Cards render at most ~800px wide; 1600px @ quality is plenty. Re-encode as JPEG
// for big savings on photographic heroes, keeping the same .png filename is NOT
// done — we keep PNG to preserve crisp UI text, just smaller.
import { chromium } from "playwright";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const DIR = "public/projects";
const MAX_W = 1600;

const browser = await chromium.launch();
const page = await browser.newPage();

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".png"))) {
  const path = `${DIR}/${file}`;
  const b64 = readFileSync(path).toString("base64");
  const out = await page.evaluate(
    async ({ dataUrl, MAX_W }) => {
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
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      return { dataUrl: canvas.toDataURL("image/png"), w, h };
    },
    { dataUrl: `data:image/png;base64,${b64}`, MAX_W }
  );
  const before = (readFileSync(path).length / 1024).toFixed(0);
  writeFileSync(path, Buffer.from(out.dataUrl.split(",")[1], "base64"));
  const after = (readFileSync(path).length / 1024).toFixed(0);
  console.log(`${file.padEnd(18)} ${out.w}x${out.h}  ${before}KB -> ${after}KB`);
}

await browser.close();
console.log("DONE");
