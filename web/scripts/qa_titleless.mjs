// Visual QA aid: capture each production state with titles hidden.
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';

const [url, out] = process.argv.slice(2);
if (!url || !out) throw new Error('usage: node scripts/qa_titleless.mjs <url> <out-dir>');
mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.addStyleTag({ content: '.lbl.title { visibility: hidden !important; }' });
const ids = ['C0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'E0'];
for (let i = 0; i < ids.length; i++) {
  if (i) {
    await page.keyboard.press('Space');
    await page.waitForFunction(() => !window.__journey.busy, null, { timeout: 15000 });
  }
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${out}/${i}-${ids[i]}.png` });
}
console.log(`captured ${ids.length} title-hidden production states`);
await browser.close();
