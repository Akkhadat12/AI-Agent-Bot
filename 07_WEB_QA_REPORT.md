# Web QA report — published page

- Production URL: https://bots-vs-agents-2026.vercel.app
- Date: 27 Sep 2026
- Browser: Chrome headless, logged out, no Vercel login
- Viewports: 1920×1080, 1280×720, 390×844, 320×700
- Commit: eceef94bad52b29e4d3f54bb7353a7ccde40f549
- Evidence cutoff: 27 Sep 2026, same sources as `02_RESEARCH_AND_ANALYSIS.md`
- Screenshots: `qa-evidence/` in this repository, captured from the production URL

## Palette

Chosen paper direction, read from the live computed style:

| Role | Hex |
|---|---|
| Stage | `#E9E2D6` |
| Paper | `#F7F3EB` |
| Ink / type | `#1C1915` |
| Accent | `#9A3412` |
| Review | `#1F4D3A` |
| Quiet | `#6F675C` |

Titles compute as Fraunces. Harbor (`#E3E8EA` / `#0F5E5C`) remains in the stylesheet and was not selected. Comparison notes are in `BUILD_NOTES.md`.

## Corrections before this pass

1. The first production upload served only the opening of `styles.css` (410 bytes). Replaced by a full cascade.
2. Splitting that cascade across imported files dropped `prefers-reduced-motion`, because the query began after a brace that belonged to the previous file. Retest after moving those rules into the parent `styles.css`: stroke dash offset `0px`, animation `none`, label opacity `1` on S1 within 40ms of the click. Screenshot: `qa-evidence/reduced-s1c.jpg`.
3. S4 support crop is served at 560×229 so the non-paging sentence stays readable. Screenshot: `qa-evidence/d-s4.jpg`, `qa-evidence/m-s4.jpg`.

## Facts on screen

99%, 14%, and 19% are absent. S3 tiles are equal size. S5 shows a review loop and the title “Use ≠ Speed”, not a speed claim. S6 is an authored order, fields, an exception, and a separate merchant zone. S7 gates are Data, Permission, Proof, Escalation, then Hold beside the last gate. PASS.

## Scene results at 1920×1080

Word counts are visible authored words. No page overflow. Click targets stay inside the viewport. Focus moved to the target after each click.

| Screen | Words | Accessible name | Result | Evidence |
|---|---|---|---|---|
| Cover | 4 — Why Agents, Why Now? | Unfinished work request | PASS | `qa-evidence/d-cover.jpg` |
| S1 | 3 — Answer Review Action | Action | PASS | `qa-evidence/d-s1.jpg` |
| S2 | 3 — Bot API Tools | Tools | PASS | `qa-evidence/d-s2.jpg` |
| S3 | 4 — Value Compute Review Errors | Work item | PASS | `qa-evidence/d-s3.jpg` |
| S4 | 3 — Queue Investigate Approve | Approve | PASS | `qa-evidence/d-s4.jpg` |
| S5 | 4 — Use ≠ Speed Test | Test | PASS | `qa-evidence/d-s5.jpg` |
| S6 | 4 — Order Fields Exception Merchant | Fields | PASS | `qa-evidence/d-s6.jpg` |
| S7 | 5 — Data Permission Proof Escalation Hold | Passing task | PASS | `qa-evidence/d-s7.jpg` |
| Closing | 4 — Payoff Is Conditional Hold | Work item | PASS | `qa-evidence/d-closing.jpg` |

The 1920×1080 frame fills the viewport. Wider-than-16:9 viewports letterbox inside the stage rule. No page numbers, arrows, dots, rails, or source URLs on the stage.

## Phone

390×844 screenshots: `qa-evidence/m-cover.jpg` through `m-closing.jpg`. 320×700 S1: `qa-evidence/w320-s1.jpg`.

Word counts match the desktop table. Document scroll width equals the viewport on a repeat of S4 after the parent-sheet width rule. An earlier single sample reported scroll width 408 against a 390 client width and did not repeat; no element box crossed the viewport on the follow-up probe. PASS.

Phone keeps the same order. Cover, S1, and Closing use a vertical stem. S2 meets Tools on one rail. S7 lists the four gates then Hold and the checked record.

## Interaction

Click path Cover → S1 → S2 → S3 → S4 → S5 → S6 → S7 → Closing, each focus check true. Space on Closing stays on Closing. R from Closing returns to Cover. Two Space presses during the settle land on S1, not S2. PASS.

Entry is a short fade and line draw, then still. Reduced motion shows the finished S1 immediately. PASS after the correction above.

## Assets

Live responses, no login:

- `/` 11377 bytes, cover is the first screen
- `/app.js` 1889 bytes
- `/styles.css` import sheet plus the reduced-motion and phone overrides
- `/c0.css` 3767, `/c1.css` 3787, `/c2.css` 3765, `/c3.css` 3786, `/c4.css` 686
- `/references/grok-bot-official-cover.webp` 27946
- `/assets/openai-agents-api-excerpt.webp` 2060
- `/assets/grok-bot-support-excerpt.webp` 12018

Grok Bot and Agents API plates are the official images. The S4 excerpt still shows the alert title and “I'm not paging anyone or creating an incident without approval.”

## Console

`/favicon.ico` returns 200 (124 bytes) on the final production deploy. No page JavaScript exceptions were recorded on the story pass. An earlier load, before the icon existed, logged one 404 for that file.

## Scene rationale

Thai Word file, nine screenshots and source links: https://drive.google.com/file/d/1HahjYMY40tjJM_Enw7evfq1qj3V2EYm5/view

## Verdict

PASS for the published story, interaction, 16:9 frame, phone layout, and reduced motion, after the stylesheet and support-image corrections above.
