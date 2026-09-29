// Dense transition scan: screenshots every ~70 ms through every transition and
// flags near-blank frames (almost everything within a few levels of the background).
// usage: node scripts/scan.mjs <url> <outDir> [--reduced]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [url, out, flag] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 960, height: 540 }, reducedMotion: flag === '--reduced' ? 'reduce' : 'no-preference' });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
const ids = ['C0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'E0'];
let n = 0;
for (let i = 1; i < ids.length; i++) {
  await page.keyboard.press('Space');
  const t0 = Date.now();
  while (await page.evaluate(() => window.__journey.busy)) {
    await page.screenshot({ path: `${out}/${i}-${ids[i]}-${String(Date.now() - t0).padStart(4, '0')}.png` });
    n++;
  }
  await page.waitForTimeout(300);
}
console.log(`${n} frames`);
await browser.close();
