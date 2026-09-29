// Independent production QA probe. Run from web/: node scripts/qa_probe.mjs <production-url>
import { chromium } from 'playwright-core';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const url = process.argv[2];
if (!url) throw new Error('production URL required');
const ids = ['C0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'E0'];
const sha = (data) => createHash('sha256').update(data).digest('hex');
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errors = [];
const failedRequests = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`); });
page.on('requestfailed', (r) => failedRequests.push(`${r.url()}: ${r.failure()?.errorText}`));

const nav = await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
const index = await (await page.request.get(url)).body();
const bundle = (index.toString().match(/src="(\/assets\/index-[^"]+\.js)"/) || [])[1];
const css = (index.toString().match(/href="(\/assets\/index-[^"]+\.css)"/) || [])[1];
const files = [bundle, css, '/assets/nvidia-gb200-nvl72-rack.png', '/assets/google-tpu-8i-board.jpg'];
const checks = [];
for (const file of files) {
  if (!file) { checks.push({ file, match: false, reason: 'missing from index' }); continue; }
  const response = await page.request.get(new URL(file, url).href);
  const local = resolve('dist', file.slice(1));
  const productionHash = sha(await response.body());
  const localHash = sha(readFileSync(local));
  checks.push({ file, status: response.status(), match: productionHash === localHash, sha256: productionHash });
}

const states = [];
for (let i = 0; i < ids.length; i++) {
  if (i) {
    await page.keyboard.press('Space');
    if (i === 4) await page.setViewportSize({ width: 1280, height: 720 });
    await page.waitForFunction(() => !window.__journey.busy, null, { timeout: 15000 });
  }
  states.push(await page.evaluate(() => ({ state: window.__journey.state, buttons: [...document.querySelectorAll('button.lbl.target.on')].map(b => b.getAttribute('aria-label')), scrollWidth: document.documentElement.scrollWidth, innerWidth: innerWidth })));
}
await page.waitForTimeout(1000); // let CSS labels finish their settle transition
const before = sha(await page.screenshot());
await page.waitForTimeout(2500);
const after = sha(await page.screenshot());
await page.keyboard.press('Space');
const endAfterSpace = await page.evaluate(() => window.__journey.state);
await page.keyboard.press('KeyR');
await page.waitForFunction(() => !window.__journey.busy);
const reset = await page.evaluate(() => window.__journey.state);
for (let i = 1; i < ids.length; i++) {
  await page.keyboard.press('Space');
  await page.waitForFunction(() => !window.__journey.busy, null, { timeout: 15000 });
}
const secondCycle = await page.evaluate(() => window.__journey.state);
const result = { url: page.url(), title: await page.title(), httpStatus: nav.status(), files: checks, states, e0Still: before === after, endAfterSpace, reset, secondCycle, errors, failedRequests };
console.log(JSON.stringify(result, null, 2));
await browser.close();
