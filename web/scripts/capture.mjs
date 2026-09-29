// Local capture: walks C0→E0 and saves settled + mid-transition frames.
// usage: node scripts/capture.mjs <url> <outDir> [width height] [--reduced]
import { chromium } from 'playwright-core';
import fs from 'node:fs';
const [url, out, w = '1920', h = '1080', flag] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', args: ['--use-angle=d3d11', '--enable-gpu'] });
const page = await browser.newPage({ viewport: { width: +w, height: +h }, reducedMotion: flag === '--reduced' ? 'reduce' : 'no-preference' });
const errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
const ids = ['C0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'E0'];
await page.screenshot({ path: `${out}/0-C0.png` });
for (let i = 1; i < ids.length; i++) {
  await page.keyboard.press('Space');
  if (flag !== '--reduced') {
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${out}/${i}-${ids[i]}-mid.png` });
  }
  await page.waitForFunction(() => !window.__journey.busy, null, { timeout: 10000 });
  await page.waitForTimeout(900);
  const s = await page.evaluate(() => window.__journey.state);
  await page.screenshot({ path: `${out}/${i}-${ids[i]}.png` });
  if (s !== ids[i]) errors.push(`expected ${ids[i]} got ${s}`);
}
console.log(JSON.stringify({ errors }));
await browser.close();
