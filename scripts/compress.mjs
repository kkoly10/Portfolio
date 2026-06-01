// Compress oversized thumbnails by re-encoding as JPEG (great for photographic
// heroes). Converts .png -> .jpg, returns the rename map so we can update refs.
import { chromium } from "playwright";
import { readFileSync, writeFileSync, unlinkSync, readdirSync, statSync } from "node:fs";

const DIR = "public/projects";
const THRESHOLD = 250 * 1024; // only convert files larger than 250KB
const QUALITY = 0.82;

const browser = await chromium.launch();
const page = await browser.newPage();

const renames = [];
for (const file of readdirSync(DIR).filter((f) => f.endsWith(".png"))) {
  const path = `${DIR}/${file}`;
  const size = statSync(path).size;
  if (size < THRESHOLD) {
    console.log(`${file.padEnd(18)} ${(size / 1024).toFixed(0)}KB  (kept as PNG)`);
    continue;
  }
  const b64 = readFileSync(path).toString("base64");
  const out = await page.evaluate(
    async ({ dataUrl, QUALITY }) => {
      const img = new Image();
      await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = dataUrl; });
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      // White matte in case of any transparency (these are opaque screenshots).
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      return canvas.toDataURL("image/jpeg", QUALITY);
    },
    { dataUrl: `data:image/png;base64,${b64}`, QUALITY }
  );
  const jpgName = file.replace(/\.png$/, ".jpg");
  const jpgPath = `${DIR}/${jpgName}`;
  writeFileSync(jpgPath, Buffer.from(out.split(",")[1], "base64"));
  unlinkSync(path);
  const newSize = statSync(jpgPath).size;
  renames.push([file, jpgName]);
  console.log(`${file.padEnd(18)} ${(size / 1024).toFixed(0)}KB -> ${jpgName} ${(newSize / 1024).toFixed(0)}KB`);
}

await browser.close();
console.log("RENAMES=" + JSON.stringify(renames));
console.log("DONE");
