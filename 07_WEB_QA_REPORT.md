# 07 — Web QA report

**Result: QA_FAIL · QA-001 closed, QA-002 open · Next: Build · 29 September 2026 (Asia/Bangkok)**

## Target and method

| Item | Verified target |
|---|---|
| Branch | `agent-bot-ai-supply-chain-2026` |
| Public production URL | https://agent-task-cost-2026.vercel.app/ |
| Current Vercel deployment / deployed source | `dpl_GqwkRKjoN5FBN8WqNBCXz5z5CHTB` / [`c10af1f`](https://github.com/Akkhadat12/AI-Agent-Bot/commit/c10af1f) (per Build handoff; production bundle independently matched this checkout) |
| QA browser | Chrome 153.0.8010.53 on Windows, anonymous page; Playwright-core. Browser plugin was unavailable. |
| Viewports | 1920×1080 and 1280×720; `prefers-reduced-motion: no-preference` and `reduce` |
| Evidence | Initial production evidence and independent 29 September 2026 retest of `c10af1f` in [docs/qa-evidence/](docs/qa-evidence/). Raw PNGs are evidence; contact sheets are review aids. |
| Source / criteria | [05_QA.md](05_QA.md), [04_BUILD_WEB.md](04_BUILD_WEB.md), [03_STORY_STRUCTURE.md](03_STORY_STRUCTURE.md), [02 claim ledger](02_RESEARCH_AND_ANALYSIS.md), [BUILD_NOTES.md](BUILD_NOTES.md), [current 06_SCENE_RATIONALE](https://docs.google.com/document/d/1XW-nIOzjQMfFJXRVvyGaUOGbS5YXT0O1u3RhU6THfs4/edit) |

The **revised** production page returned HTTP 200 without a builder login. Its JS (`index-CAsXjNBF.js`), CSS, rack PNG and TPU JPEG all returned 200 and matched this checkout's clean production build byte-for-byte (SHA-256). This verifies the published assets against the checked-out `web/` source; Vercel's deployment-to-commit association is recorded by Build. `npm.cmd run build` passed with Vite's non-failing large-chunk warning. No page errors, material console warnings, or failed requests were observed. The page title was `The Cost of a Completed Agent Task`; no error overlay appeared. The first QA pass targeted `1d8c17c` / `dpl_2GKJ2FM93uUXZrrxK9at26w5UW6X`.

## Finding

### QA-001 — S5 chart loses its factual labels while still prominent during departure

| Field | Detail |
|---|---|
| Severity / owner | **Medium / Build** |
| Affected scene and perspective | S5→S6 transition; evidence integrity, motion, presenter recording |
| Expected | As the camera departs S5, the IEA bars remain identifiable as **global data centres · all workloads**, 2025 **485 TWh** and 2030 **950 TWh**, **IEA central case**, until the chart itself is no longer a readable subject. The [S5 acceptance row](05_QA.md) specifically calls for checking chart labels before and during departure. |
| Observed | At roughly 0.9 seconds into S5→S6, the chart and both bars remain large and central, but every chart label has disappeared. The frame can be read as an unlabeled numerical comparison. Reproduced at both capture sizes. The code calls `showLabels('__none__')` at transition start while retaining the chart meshes ([main.js](web/src/main.js)). |
| Production evidence | [1280×720 settled S5](docs/qa-evidence/1280x720/5-S5.png) → [1280×720 S5→S6 intermediate](docs/qa-evidence/1280x720/6-S6-mid.png); also [1920×1080 intermediate](docs/qa-evidence/1920x1080/6-S6-mid.png). Captured 29 September 2026, normal motion. |
| Requested correction | Keep the S5 scope, year, value, unit and scenario labels with the bars while the chart is in view, or fade/occlude the entire chart and its labels together before the camera leaves. Preserve the settled S5 chart and S6 arrival. Update production, Build notes and rationale screenshots if affected. |
| Retest | **PASS / closed on `c10af1f`, 29 September 2026.** Independently captured 150, 450, 750, 900, 1100, 1400 and 1800 ms at both sizes, plus 80, 200, 350 and 500 ms with reduced motion. All six chart labels shared the chart's fade; no prominent unlabeled bars remained. [1280 450 ms](docs/qa-evidence/retest-c10af1f/1280x720/t0450.png) · [1280 900 ms](docs/qa-evidence/retest-c10af1f/1280x720/t0900.png) · [1920 900 ms](docs/qa-evidence/retest-c10af1f/1920x1080/t0900.png) · [reduced 200 ms](docs/qa-evidence/retest-c10af1f/reduced/t0200.png). |

The original failure came from the first deployment; QA-001 no longer blocks sign-off. The settled S5 chart remains accurate against the [IEA primary source](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary).

### QA-002 — S5→S6 camera passes under the S6 platform and obscures the transition

| Field | Detail |
|---|---|
| Severity / owner | **Medium / Build** |
| Affected scene and perspective | S5→S6, normal and reduced motion; spatial continuity, recording polish, reduced-motion legibility |
| Expected | Travel from the power connection up to the permission/routing gate without the camera being occluded by geometry or a near-black flash. [05_QA.md](05_QA.md) requires inspecting transition frames for collision/occlusion, avoiding flashes, and preserving route legibility in reduced motion. |
| Observed | On the revised production deployment, the underside of the S6 platform fills nearly the whole frame at approximately 1.4 s into the normal 3 s S5→S6 move. The gate and TPU board are partially cut off along the top edge, then return to view. In reduced motion, the 350 ms frame is almost entirely dark before S6 appears by 500 ms. The new camera waypoints and platform glow did not remove this occlusion. |
| Production evidence | [1920×1080 1.4 s](docs/qa-evidence/retest-c10af1f/1920x1080/t1400.png) · [1280×720 1.4 s](docs/qa-evidence/retest-c10af1f/1280x720/t1400.png) · [1280×720 1.8 s recovery](docs/qa-evidence/retest-c10af1f/1280x720/t1800.png) · [reduced 350 ms](docs/qa-evidence/retest-c10af1f/reduced/t0350.png). Independently captured 29 September 2026. |
| Requested correction | Adjust the camera path or platform geometry so the camera stays in an unobstructed view during the ascent in both motion modes. Inspect intermediate frames across 1920×1080 and 1280×720, especially 1.1–1.8 s normal and 200–500 ms reduced, while preserving the fixed chart/label fade. Update the production deployment and any affected rationale/evidence. |
| Retest | **Pending Build fix.** QA will inspect the full transition, S5/S6 settled states, both motion modes and complete-route regression. |

QA-002 blocks `QA_PASS` under [05_QA.md](05_QA.md). Build notes say the platform underside flash was fixed, but the linked screenshots show it remains on the published version.

## Scene acceptance

Each observation below is from the revised public deployment `c10af1f` on 29 September 2026. Links point to raw **retest** screenshots; the same scene IDs were captured at both viewports. `PASS` covers the settled scene and specified action unless stated otherwise.

| Scene | Expected → observed | Result / evidence |
|---|---|---|
| C0 | Tangible request first, real rack secondary, completed-task question and visible docket action → all visible; rack is bounded and recognisable. | **PASS** · [1920](docs/qa-evidence/retest-c10af1f/route-1920x1080/0-C0.png) · [1280](docs/qa-evidence/retest-c10af1f/route-1280x720/0-C0.png) |
| S1 | Checked result separated from attempts and review boundary → delivered record, attempts and review pane remain legible. | **PASS** · [1920](docs/qa-evidence/retest-c10af1f/route-1920x1080/1-S1.png) · [1280](docs/qa-evidence/retest-c10af1f/route-1280x720/1-S1.png) |
| S2 | Branching model/tool/check and retry path without a numeric multiplier → distinct paths and repeated-call target visible. | **PASS** · [1920](docs/qa-evidence/retest-c10af1f/route-1920x1080/2-S2.png) · [1280](docs/qa-evidence/retest-c10af1f/route-1280x720/2-S2.png) |
| S3 | More work versus lower cost per task, unresolved net demand → different physical forms on a balance and `Net demand?` target. Geometry has no numeric scale. | **PASS** · [1920](docs/qa-evidence/retest-c10af1f/route-1920x1080/3-S3.png) · [1280](docs/qa-evidence/retest-c10af1f/route-1280x720/3-S3.png) |
| S4 | Real rack plus separate compute/HBM/network dependencies → source image is recognisable and aspect-correct; example label and memory target visible. | **PASS** · [1920](docs/qa-evidence/retest-c10af1f/route-1920x1080/4-S4.png) · [1280](docs/qa-evidence/retest-c10af1f/route-1280x720/4-S4.png) |
| S5 | IEA two-point chart, global data centres/all workloads, unit/year/central case, power path → settled chart matches 485 and 950 TWh and uses a shared zero baseline. Chart and labels now leave together. | **PASS (QA-001 closed)** · [settled](docs/qa-evidence/retest-c10af1f/route-1280x720/5-S5.png) · [departure 900 ms](docs/qa-evidence/retest-c10af1f/1280x720/t0900.png) |
| S6 | Permission and routing choices, named real TPU 8i alternate, no market-share sizing → settled gate/routes/board remain clear; arrival camera is occluded by the platform underside. | **PARTIAL (QA-002)** · [settled](docs/qa-evidence/retest-c10af1f/route-1280x720/6-S6.png) · [arrival 1.4 s](docs/qa-evidence/retest-c10af1f/1280x720/t1400.png) |
| E0 | Three conditional questions, stable final hold, Space stays and R resets → all three questions visible; screenshot stayed pixel-identical after 2.5 seconds once labels settled. | **PASS** · [1920](docs/qa-evidence/retest-c10af1f/route-1920x1080/7-E0.png) · [1280](docs/qa-evidence/retest-c10af1f/route-1280x720/7-E0.png) |

The revised deployment's seven transition captures are [C0→S1](docs/qa-evidence/retest-c10af1f/route-1920x1080/1-S1-mid.png), [S1→S2](docs/qa-evidence/retest-c10af1f/route-1920x1080/2-S2-mid.png), [S2→S3](docs/qa-evidence/retest-c10af1f/route-1920x1080/3-S3-mid.png), [S3→S4](docs/qa-evidence/retest-c10af1f/route-1920x1080/4-S4-mid.png), [S4→S5](docs/qa-evidence/retest-c10af1f/route-1920x1080/5-S5-mid.png), [S5→S6](docs/qa-evidence/retest-c10af1f/route-1920x1080/6-S6-mid.png), and [S6→E0](docs/qa-evidence/retest-c10af1f/route-1920x1080/7-E0-mid.png). A corresponding `*-mid.png` exists at 1280×720; [reduced-motion settled frames](docs/qa-evidence/retest-c10af1f/route-reduced/) cover the complete route. The separate [timed S5→S6 frames](docs/qa-evidence/retest-c10af1f/) reveal QA-002 beyond the single route-mid capture.

## Twelve review perspectives

| # | Perspective | Result and observation |
|---|---|---|
| 1 | Evidence and factual integrity | **PASS, QA-001 closed.** S5 settled values and scope match the [IEA primary source](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) and [source CSV](references/iea-data-centre-electricity-2025-2030.csv); labels now fade with the chart. No other on-stage numeric claim was found. |
| 2 | Story and thesis | **PASS.** C0→E0 follows outcome, workload, efficiency, physical stack, capacity, routing and a conditional answer. No vendor or investment winner is asserted. |
| 3 | Visual communication | **PASS.** Distinct physical objects carry each beat; [title-hidden production captures](docs/qa-evidence/title-hidden/) left recognisable docket, review gate, work path, balance, rack, grid and route. |
| 4 | Visual polish and composition | **FAIL, QA-002.** Primary settled compositions fit both 16:9 frames, but the S6 platform underside occludes most of the S5→S6 transition frame. |
| 5 | Real assets | **PASS.** Rack and TPU images render recognisably and at preserved proportions. `references/` files and `web/public/assets/` copies are SHA-256 identical; production files match too. Original roles are documented in [04](04_BUILD_WEB.md). |
| 6 | Presenter/recording use | **PASS.** Each settled state holds without autoplay; no fixed navigation, page dots, keyboard legend or advance bar appears. E0 remained pixel-still in a 2.5-second hold after settling. |
| 7 | Interaction and motion | **PARTIAL, QA-002.** All seven visible buttons reach their specified next state. Mouse clicked the C0 docket mesh. Space advances one state, rapid bursts do not skip, Tab/Enter work, R resets from every state and mid-transition. The S5→S6 camera crosses below the S6 platform. |
| 8 | Desktop and accessibility | **PARTIAL, QA-002.** Both capture sizes and resize during S3→S4 had no page overflow or lost target. Target buttons retain meaningful names, hover/focus and keyboard access. Reduced motion reaches all states but briefly becomes nearly blank during S5→S6. |
| 9 | Technical reliability | **PASS.** Clean Vite build, first load, two route cycles, refresh/capture, source assets, no observed page errors, console warnings or failed requests. The output bundle warning is non-failing. |
| 10 | Deployment and public access | **PASS.** Anonymous production URL returned 200; published JS/CSS/images were byte-identical to this checkout's clean build and reference assets. It was not the historical site or a preview URL. |
| 11 | Adversarial/regression | **PARTIAL, QA-002.** Repeated Space bursts, R from every state and mid-transition, E0 Space, second full cycle and transition resize passed. Timed transition frames exposed the platform occlusion missed by the single midpoint capture. |
| 12 | Owner scene rationale | **PASS for required content; update after QA-002 fix.** The rebuilt [Google Doc](https://docs.google.com/document/d/1XW-nIOzjQMfFJXRVvyGaUOGbS5YXT0O1u3RhU6THfs4/edit) is in the owner Drive folder, names `c10af1f` and the production URL, contains 11 embedded images (eight scenes, palette comparison, two QA-001 departure frames), and explains scene purpose, visual choice, caveats and deviations in Thai. |

## Source audit and exact checks

- [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) says global **data-centre** electricity rises from 485 TWh in 2025 to 950 TWh in 2030 in its central projection. The site says `Global data centres · all workloads`, `Electricity use, TWh · IEA central case`, and labels 2025/2030; the bar heights are proportional to 485:950. The site makes no agent-only allocation.
- [Anthropic](https://www.anthropic.com/research/economic-index-june-2026-report) reports `r = 0.68` for chat/Cowork artifact autonomy versus token use. This figure is not put on stage as a universal multiplier.
- [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027) reports $89.0B broad Data Center revenue, which the stage does not attribute to agents. The rack is explicitly marked as an example.
- [Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/) presents its 80% performance-per-dollar claim against the prior TPU generation. The stage shows TPU 8i as one route without the number, a GPU performance ranking, or a market-share claim.
- The real-image originals and intended roles are linked in [04_BUILD_WEB.md](04_BUILD_WEB.md); the production copies match `references/` byte-for-byte.

## Handoff

**QA-001 is closed. QA-002 remains open.** Build should correct the S5→S6 camera/platform occlusion on this branch, redeploy production, update `BUILD_NOTES.md` and any affected rationale/evidence, then set `READY_FOR_QA` with the new deployment/commit. QA will retest the repaired transition at both sizes and reduced motion, rerun the complete route and regression checks, then update this report and status.
