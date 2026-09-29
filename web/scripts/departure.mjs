// Captures a series of frames while leaving a scene (default S5 -> S6).
// usage: node scripts/departure.mjs <url> <outDir> [fromIndex=5] [width height] [--reduced]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [url, out, from = '5', w = '1920', h = '1080', flag] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: +w, height: +h }, reducedMotion: flag === '--reduced' ? 'reduce' : 'no-preference' });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
for (let i = 0; i < +from; i++) { await page.keyboard.press('Space'); await page.waitForFunction(() => !window.__journey.busy); }
await page.waitForTimeout(900);
const times = flag === '--reduced' ? [80, 200, 350, 500] : [150, 450, 750, 900, 1100, 1400, 1800];
const t0 = Date.now();
await page.keyboard.press('Space');
for (const t of times) {
  await page.waitForTimeout(Math.max(0, t - (Date.now() - t0)));
  const info = await page.evaluate(() => [...document.querySelectorAll('.lbl')].filter((e) => getComputedStyle(e).visibility === 'visible' && +getComputedStyle(e).opacity > 0.05).map((e) => `${e.textContent.trim()}@${(+getComputedStyle(e).opacity).toFixed(2)}`));
  await page.screenshot({ path: `${out}/t${String(t).padStart(4, '0')}.png` });
  console.log(t, JSON.stringify(info));
}
await browser.close();
