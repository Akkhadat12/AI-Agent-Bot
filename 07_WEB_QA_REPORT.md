# 07 — Web QA report

**Result: QA_FAIL · Next: Build · 29 September 2026 (Asia/Bangkok)**

## Target and method

| Item | Verified target |
|---|---|
| Branch | `agent-bot-ai-supply-chain-2026` |
| Public production URL | https://agent-task-cost-2026.vercel.app/ |
| Vercel deployment / deployed source | `dpl_2GKJ2FM93uUXZrrxK9at26w5UW6X` / [`1d8c17c`](https://github.com/Akkhadat12/AI-Agent-Bot/commit/1d8c17c01bb9e18cf5b19a14c8d8cc0c502df751) (per Build handoff) |
| QA browser | Chrome 153.0.8010.53 on Windows, anonymous page; Playwright-core. Browser plugin was unavailable. |
| Viewports | 1920×1080 and 1280×720; `prefers-reduced-motion: no-preference` and `reduce` |
| Evidence | Independently captured from the production URL on 29 September 2026 in [docs/qa-evidence/](docs/qa-evidence/). Raw PNGs are evidence; contact sheets are review aids. |
| Source / criteria | [05_QA.md](05_QA.md), [04_BUILD_WEB.md](04_BUILD_WEB.md), [03_STORY_STRUCTURE.md](03_STORY_STRUCTURE.md), [02 claim ledger](02_RESEARCH_AND_ANALYSIS.md), [BUILD_NOTES.md](BUILD_NOTES.md), [06_SCENE_RATIONALE](https://docs.google.com/document/d/1HQQOKQWECoc-VZYH8nzLLU8WS_5fMa12-6dbzdd6BFM/edit) |

The production page returned HTTP 200 without a builder login. Its JS, CSS, rack PNG and TPU JPEG all returned 200 and matched the files from a clean local production build byte-for-byte (SHA-256). This verifies the published assets against the checked-out `web/` source; Vercel's deployment-to-commit association is recorded by Build. `npm.cmd run build` passed with Vite's non-failing large-chunk warning. No page errors, material console warnings, or failed requests were observed. The page title was `The Cost of a Completed Agent Task`; no error overlay appeared.

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
| Retest | **Pending Build fix.** QA will inspect multiple S5→S6 frames at both sizes and reduced motion, then rerun the complete route and source/asset checks. |

This finding blocks `QA_PASS` under [05_QA.md](05_QA.md). It is a visual implication issue during a recorded transition; the settled S5 chart itself is accurate.

## Scene acceptance

Each observation below is from the public URL on 29 September 2026. Links point to raw QA screenshots; the same scene IDs were captured at both viewports. `PASS` covers the settled scene and specified action unless stated otherwise.

| Scene | Expected → observed | Result / evidence |
|---|---|---|
| C0 | Tangible request first, real rack secondary, completed-task question and visible docket action → all visible; rack is bounded and recognisable. | **PASS** · [1920](docs/qa-evidence/1920x1080/0-C0.png) · [1280](docs/qa-evidence/1280x720/0-C0.png) |
| S1 | Checked result separated from attempts and review boundary → delivered record, attempts and review pane remain legible. | **PASS** · [1920](docs/qa-evidence/1920x1080/1-S1.png) · [1280](docs/qa-evidence/1280x720/1-S1.png) |
| S2 | Branching model/tool/check and retry path without a numeric multiplier → distinct paths and repeated-call target visible. | **PASS** · [1920](docs/qa-evidence/1920x1080/2-S2.png) · [1280](docs/qa-evidence/1280x720/2-S2.png) |
| S3 | More work versus lower cost per task, unresolved net demand → different physical forms on a balance and `Net demand?` target. Geometry has no numeric scale. | **PASS** · [1920](docs/qa-evidence/1920x1080/3-S3.png) · [1280](docs/qa-evidence/1280x720/3-S3.png) |
| S4 | Real rack plus separate compute/HBM/network dependencies → source image is recognisable and aspect-correct; example label and memory target visible. | **PASS** · [1920](docs/qa-evidence/1920x1080/4-S4.png) · [1280](docs/qa-evidence/1280x720/4-S4.png) |
| S5 | IEA two-point chart, global data centres/all workloads, unit/year/central case, power path → settled chart matches 485 and 950 TWh and uses a shared zero baseline. Departure loses labels while bars remain visible. | **FAIL (QA-001)** · [settled](docs/qa-evidence/1280x720/5-S5.png) · [departure](docs/qa-evidence/1280x720/6-S6-mid.png) |
| S6 | Permission and routing choices, named real TPU 8i alternate, no market-share sizing → gate and three thin routes visible; board aspect preserved. | **PASS** · [1920](docs/qa-evidence/1920x1080/6-S6.png) · [1280](docs/qa-evidence/1280x720/6-S6.png) |
| E0 | Three conditional questions, stable final hold, Space stays and R resets → all three questions visible; screenshot stayed pixel-identical after 2.5 seconds once labels settled. | **PASS** · [1920](docs/qa-evidence/1920x1080/7-E0.png) · [1280](docs/qa-evidence/1280x720/7-E0.png) |

The seven transition captures are [C0→S1](docs/qa-evidence/1920x1080/1-S1-mid.png), [S1→S2](docs/qa-evidence/1920x1080/2-S2-mid.png), [S2→S3](docs/qa-evidence/1920x1080/3-S3-mid.png), [S3→S4](docs/qa-evidence/1920x1080/4-S4-mid.png), [S4→S5](docs/qa-evidence/1920x1080/5-S5-mid.png), [S5→S6](docs/qa-evidence/1920x1080/6-S6-mid.png), and [S6→E0](docs/qa-evidence/1920x1080/7-E0-mid.png). A corresponding `*-mid.png` exists for every transition at 1280×720. [Reduced-motion settled frames](docs/qa-evidence/reduced/) cover the complete route.

## Twelve review perspectives

| # | Perspective | Result and observation |
|---|---|---|
| 1 | Evidence and factual integrity | **FAIL, QA-001.** S5 settled values and scope match the [IEA primary source](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) and [source CSV](references/iea-data-centre-electricity-2025-2030.csv); labels vanish while the bars remain in the departure frame. No other on-stage numeric claim was found. |
| 2 | Story and thesis | **PASS.** C0→E0 follows outcome, workload, efficiency, physical stack, capacity, routing and a conditional answer. No vendor or investment winner is asserted. |
| 3 | Visual communication | **PASS.** Distinct physical objects carry each beat; [title-hidden production captures](docs/qa-evidence/title-hidden/) left recognisable docket, review gate, work path, balance, rack, grid and route. |
| 4 | Visual polish and composition | **PASS.** Primary focal subjects, labels and targets fit both 16:9 frames without visible overlap or clipping. S5 transition exception is reported separately. |
| 5 | Real assets | **PASS.** Rack and TPU images render recognisably and at preserved proportions. `references/` files and `web/public/assets/` copies are SHA-256 identical; production files match too. Original roles are documented in [04](04_BUILD_WEB.md). |
| 6 | Presenter/recording use | **PASS.** Each settled state holds without autoplay; no fixed navigation, page dots, keyboard legend or advance bar appears. E0 remained pixel-still in a 2.5-second hold after settling. |
| 7 | Interaction and motion | **PARTIAL, QA-001.** All seven visible buttons reach their specified next state. Mouse clicked the C0 docket mesh. Space advances one state, rapid bursts do not skip, Tab/Enter work, R resets from every state and mid-transition. S5→S6 drops labels prematurely. |
| 8 | Desktop and accessibility | **PASS.** 1920×1080, 1280×720 and resize during S3→S4 had no page overflow or lost target. Target buttons have meaningful accessible names, visibly change on hover and show a solid focus outline. Reduced motion reached all eight states with the same content. |
| 9 | Technical reliability | **PASS.** Clean Vite build, first load, two route cycles, refresh/capture, source assets, no observed page errors, console warnings or failed requests. The output bundle warning is non-failing. |
| 10 | Deployment and public access | **PASS.** Anonymous production URL returned 200; published JS/CSS/images were byte-identical to this checkout's clean build and reference assets. It was not the historical site or a preview URL. |
| 11 | Adversarial/regression | **PARTIAL, QA-001.** Repeated Space bursts, R from every state, R mid-transition, E0 Space, second full cycle and transition resize passed. The S5 label defect requires post-fix regression. |
| 12 | Owner scene rationale | **PASS.** The [Google Doc](https://docs.google.com/document/d/1HQQOKQWECoc-VZYH8nzLLU8WS_5fMa12-6dbzdd6BFM/edit) is in the owner Drive folder, names the production URL/commit, contains eight embedded scene images, and explains scene purpose, visual choice, caveats and deviations in Thai. Its S5 screenshot shows the settled frame; the transition defect needs a corrected rationale image only if that artifact changes. |

## Source audit and exact checks

- [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) says global **data-centre** electricity rises from 485 TWh in 2025 to 950 TWh in 2030 in its central projection. The site says `Global data centres · all workloads`, `Electricity use, TWh · IEA central case`, and labels 2025/2030; the bar heights are proportional to 485:950. The site makes no agent-only allocation.
- [Anthropic](https://www.anthropic.com/research/economic-index-june-2026-report) reports `r = 0.68` for chat/Cowork artifact autonomy versus token use. This figure is not put on stage as a universal multiplier.
- [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027) reports $89.0B broad Data Center revenue, which the stage does not attribute to agents. The rack is explicitly marked as an example.
- [Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/) presents its 80% performance-per-dollar claim against the prior TPU generation. The stage shows TPU 8i as one route without the number, a GPU performance ranking, or a market-share claim.
- The real-image originals and intended roles are linked in [04_BUILD_WEB.md](04_BUILD_WEB.md); the production copies match `references/` byte-for-byte.

## Handoff

Build should fix **QA-001** on this branch, redeploy production, update `BUILD_NOTES.md` with the new deployment/commit and set `READY_FOR_QA`. QA will retest the repaired departure at both sizes and in reduced motion, review any changed rationale screenshots, rerun interactions and source/asset checks, then update this report and status. No other blocking finding was observed in this pass.
