// Interaction checks: target clicks, repeated input, R from each state, reduced motion.
import { chromium } from 'playwright-core';
const url = process.argv[2];
const ids = ['C0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'E0'];
const browser = await chromium.launch({ channel: 'chrome' });
const out = [];
const ok = (c, m) => { const l = `${c ? 'PASS' : 'FAIL'} ${m}`; out.push(l); console.error(l); };
async function fresh(opts = {}) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, ...opts });
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e)));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  return { page, errs };
}
const idle = (p) => p.waitForFunction(() => !window.__journey.busy, null, { timeout: 15000 });
const state = (p) => p.evaluate(() => window.__journey.state);

// 1. Click the visible target button in each state
let { page, errs } = await fresh();
for (let i = 0; i < 7; i++) {
  const btn = page.locator('button.lbl.target.on');
  ok((await btn.count()) === 1, `${ids[i]} has exactly one visible target: ${await btn.first().getAttribute('aria-label')}`);
  await btn.click();
  await idle(page);
  ok((await state(page)) === ids[i + 1], `click ${ids[i]} -> ${ids[i + 1]}`);
}
ok((await page.locator('button.lbl.target.on').count()) === 0, 'E0 has no advance target');
await page.keyboard.press('Space'); await page.waitForTimeout(400);
ok((await state(page)) === 'E0', 'Space holds E0');
await page.waitForTimeout(3000);
await page.keyboard.press('KeyR'); await idle(page);
ok((await state(page)) === 'C0', 'R after long hold returns C0');

// 2. Mesh click (raycast) on the docket in C0
const box = await page.locator('#gl').boundingBox();
await page.mouse.click(box.x + box.width * 0.2, box.y + box.height * 0.35);
await idle(page);
ok((await state(page)) === 'S1', 'clicking the docket object advances C0 -> S1');
await page.keyboard.press('KeyR'); await idle(page);

// 3. Rapid Space presses never skip a scene
for (let i = 1; i < 8; i++) {
  for (let k = 0; k < 6; k++) { await page.keyboard.press('Space'); await page.waitForTimeout(40); }
  await idle(page);
  ok((await state(page)) === ids[i], `burst of 6 Space presses lands on ${ids[i]} only`);
}
// 4. R from every settled state and mid-transition
for (let i = 1; i < 8; i++) {
  await page.keyboard.press('KeyR'); await idle(page);
  for (let k = 0; k < i; k++) { await page.keyboard.press('Space'); await idle(page); }
  await page.keyboard.press('KeyR'); await idle(page);
  ok((await state(page)) === 'C0', `R from settled ${ids[i]} -> C0`);
  await page.keyboard.press('Space'); await page.waitForTimeout(500);
  await page.keyboard.press('KeyR'); await idle(page);
  ok((await state(page)) === 'C0', `R mid-transition C0->S1 -> C0`);
}
// 5. Keyboard: Tab focuses the target, Enter advances once, Space on focused button advances once
await page.keyboard.press('Tab');
ok(await page.evaluate(() => document.activeElement?.classList.contains('target')), 'Tab focuses the visible target');
await page.keyboard.press('Space'); await idle(page); await page.waitForTimeout(300);
ok((await state(page)) === 'S1', 'Space with focused button advances exactly one step');
await page.keyboard.press('Tab'); await page.keyboard.press('Enter'); await idle(page);
ok((await state(page)) === 'S2', 'Enter on focused target advances');
ok(errs.length === 0, `no page errors (${errs.join('; ')})`);
await page.close();

// 6. Reduced motion
({ page, errs } = await fresh({ reducedMotion: 'reduce' }));
const t0 = Date.now();
for (let i = 1; i < 8; i++) { await page.keyboard.press('Space'); await idle(page); ok((await state(page)) === ids[i], `reduced motion reaches ${ids[i]}`); }
ok(Date.now() - t0 < 12000, `reduced-motion route is short (${Date.now() - t0} ms)`);
await page.close();
console.log(out.join('\n'));
await browser.close();
