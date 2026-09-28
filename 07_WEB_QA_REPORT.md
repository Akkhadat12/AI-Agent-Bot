# Web QA report — published page

- Production URL: https://bots-vs-agents-2026.vercel.app
- Retest date: 28 Sep 2026
- Browser: Chrome headless, logged out, no Vercel login
- Viewports: 1363×936 (the size in the review), 1920×1080, 390×844, 320×700
- Commit: b882ac72af5e90543e91c64fbbcbbcdacfc099b2
- Deployment: dpl_7mHRK368C22Ek7zTMAXrQGfWZQyZ
- Evidence cutoff: 27 Sep 2026, same sources as `02_RESEARCH_AND_ANALYSIS.md`
- Screenshots: `qa-evidence/` captured from the production URL after this deploy

## What the review failed

The 27 Sep pass did not hold on the published page. The review at 1363×936 recorded four failures:

1. S1 and Closing lost their fork lines above 860px, and Closing objects overlapped.
2. The S5 return was broken into segments, and the S7 path appeared to run under all four gates.
3. The Cover and S2 crop did not show a readable “Agents API” name.
4. The Word file had bad CRC values on three Thai items, and one gate image was incomplete.

Phone width was not part of that review. This pass retested it.

## What changed

The fork, the S5 loop, and the S7 path are borders in the settled frame. They no longer depend on a stroke dash finishing its animation. S1 and Closing place the request and the two outcomes on a two-row grid so each branch meets the vertical center of its card. S7 draws the line through the open arches and then a short stub into the checked record. Hold stays under Escalation.

The Agents plate is a new crop of the official illustration, pixels x 1640–2220 and y 820–1040, which is the column label “Agents API”. The previous crop sat below the headers and did not include that label.

Production CSS is the repository `styles.css` split only between complete rules (`p0.css`–`p3.css`). The phone query that hides the desktop fork is wholly inside `p3.css`.

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

Titles compute as Fraunces. Harbor remains in the stylesheet and was not selected.

## Facts on screen

99%, 14%, and 19% are absent. S3 tiles are equal size. S5 shows a continuous review loop and the title “Use ≠ Speed”. S6 is an authored order, fields, an exception, and a separate merchant zone. S7 gates are Data, Permission, Proof, and Escalation. The line passes through those openings and into the checked record. Hold is a branch under Escalation.

## Scene results at 1363×936

This is the viewport the review used. Word counts are visible authored words. No page overflow. Forks computed as `display: block`. The S7 through-line computed as `display: block`.

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

Ink samples on the production screenshots: the S1 branches run to the Answer card and the Review/Action row; the Closing branches run to the checked record and to Hold; the S7 line is continuous across the arches and into the checked record. The Agents plate on Cover and S2 is the official “Agents API” label.

At 1920×1080 the S1 and Closing forks still compute as `display: block`. Wider-than-16:9 viewports letterbox. No page numbers, arrows, dots, rails, or source URLs on the stage.

## Phone

390×844: every scene, scroll width 390, no target or image box outside the viewport. Screenshots: `qa-evidence/m-cover.jpg` through `m-closing.jpg`.

320×700: Cover, S1, and S2 scroll width 320, no clipped targets. S1: `qa-evidence/w320-s1.jpg`. S2: `qa-evidence/w320-s2.jpg`.

On these widths the desktop fork is hidden and a vertical stem replaces it. S5 keeps a return loop. S7 lists the four gates, then Hold, then the checked record.

## Interaction

Click path on the published page: Cover → S1 → S2 → S3 → S4 → S5 → S6 → S7 → Closing. Space on Closing stays on Closing. R from Closing returns to Cover.

Reduced motion: S1 arm border is 2px, animation name `none`, and entered labels are opacity 1. Screenshot: `qa-evidence/reduced-s1c.jpg`.

## Assets

Live responses, no login, after dpl_7mHRK368C22Ek7zTMAXrQGfWZQyZ:

- `/` 200, cover is the first screen
- `/styles.css` imports `p0.css` through `p3.css` only
- `/assets/openai-agents-api-excerpt.webp` 4342 bytes
- `/assets/grok-bot-support-excerpt.webp` 12018 bytes
- `/references/grok-bot-official-cover.webp` 27946 bytes
- `/favicon.ico` 200, 124 bytes

## Scene rationale

Replacement file: [06_SCENE_RATIONALE.docx](https://drive.google.com/file/d/1UFjSG2ywGIxevA5WIh585Tt95VAcRJ4M/view) in the owner Drive folder. Saved size is 18667 bytes. The zip CRC of every part matches the bytes. After upload, the file was downloaded again and the size matched. It has Thai scene notes, screenshots of Cover through Closing, a close-up of the Agents API label, and the original image URLs. S5 and S7 are crops of the production screenshots so the return loop and the line through the four gates stay visible. The earlier file with bad CRC values is in trash.

## Verdict

The four review failures are fixed on the published page and retested at 1363×936, 1920×1080, 390×844, and 320×700. This report does not merge the pull request. A fresh review should confirm the page and the replacement Word file.
