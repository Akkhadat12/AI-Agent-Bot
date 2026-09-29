# Web Build brief — the cost of a completed agent task

## Assignment and source of truth

Build a new presenter-controlled, desktop 16:9 immersive 3D web story on the **same** [`agent-bot-ai-supply-chain-2026` branch](https://github.com/Akkhadat12/AI-Agent-Bot/tree/agent-bot-ai-supply-chain-2026). This is a later assignment. Read [README](README.md), [workflow status](WORKFLOW_STATUS.md), the approved [story structure](03_STORY_STRUCTURE.md), the Thai [knowledge summary](01_KNOWLEDGE_SUMMARY.md), the Thai [research and claim ledger](02_RESEARCH_AND_ANALYSIS.md), and [QA acceptance plan](05_QA.md) before implementation. Markdown is the content authority. Do not use the previous project's site or design as a topic template. Keep the research documents intact and add implementation files to this branch.

**Approved thesis:** Will the growth of verified completed agent tasks outrun the falling full cost per task? The supporting lens is who controls task intake, context, data, permissions, and model routing. The answer is conditional. The experience must not assert that an AI supplier, model vendor, or infrastructure company will win, or that all data-centre growth comes from agents.

**Outcome:** A public **Vercel production URL**, not a preview URL, suitable for a continuous 16:9 YouTube screen recording; a documented build in `BUILD_NOTES.md`; a Thai `06_SCENE_RATIONALE` Google Doc in the owner [Drive folder](https://drive.google.com/drive/folders/1CBG-OOusgdXWSvLjtT3cMSCJx0yCTYU9) or one current `06_SCENE_RATIONALE.docx` there, with actual final scene screenshots and reasoning; and an independent [QA process](05_QA.md) ending in `07_WEB_QA_REPORT.md`. Do not label the handoff complete at deployment alone.

## Presenter and capture behavior

- Stage: full viewport desktop at 16:9. Support the intended recording resolution and test at 1920×1080 and 1280×720. Phone layout and phone QA are outside this assignment.
- A real 3D scene with depth, occlusion, spatial transitions, and stable readable hold states. A stack of flat slides or a single backdrop with title changes fails. Each new scene must reveal a different causal relationship in the argument.
- **Spacebar** moves exactly one step forward along C0→S1→S2→S3→S4→S5→S6→E0. **R** resets to C0 from every state. A meaningful visible object or region in each nonfinal state follows the same main route. Block repeated inputs while a transition is running so a key press cannot skip beats. No automatic scene timer.
- At E0, Space holds E0; R returns to C0. If a visible reset object is used, it must be integral to the conclusion and explicitly labelled or visually unambiguous. Optional exploration must return to the current main-route state and must never be required for the spoken route.
- Default recording view: no persistent navigation rail, progress dots, page numbers, slide arrows, fixed advance button, keyboard legend, or shortcut instructions. The content object is the interaction target. Any presenter-only aid must be hidden from the capture state.
- Pointer targets must be visible and give restrained hover/focus feedback. Keyboard focus, meaningful target names, and reduced-motion behavior must remain usable. Reduced motion may shorten spatial travel while retaining scene order and legibility.
- Visible website copy is **English only**, short, and tied to evidence. Narration and detailed caveats belong in the reading packs, notes, and the Thai rationale, not paragraphs on stage. Target no more than 12 visible words per scene, excluding indispensable data units/labels. Do not shrink text just to meet a word count.

## Visual direction and asset authenticity

Motif: **a completed task travels through a physical production system and returns through a permission gate**. A task record acts as the through-line; spatial changes correspond to outcome verification, branching compute, opposing demand/efficiency forces, hardware dependencies, physical capacity, and allocation of future work. This is an editorial direction, not a demand for a particular visual style. Avoid decorative particle fields, generic glowing node webs, repeated interchangeable cards, fake software windows, and synthetic photorealistic substitutes for the real rack or chip board.

The builder must compare **two distinct color directions** in the browser on the cover, one content scene, and a transition, then record chosen palette hex values and reasons in `BUILD_NOTES.md`. This brief deliberately sets **no palette colors, background hue, light/dark mode, or hex values**. Color must support source-image visibility, hierarchy, chart accuracy, contrast, and the recording frame; it must not carry the whole story.

Build a small prototype of C0, S4, and their transition logic before filling every scene. Inspect both a settled frame and intermediate transition frames at 16:9. The later builder may research better authentic imagery if a supplied asset is inadequate, update the asset inventory, cite the original, and keep a viewable file in `references/`. Do not silently replace an essential real subject with an invented rendering.

### Selected source assets and exact role

| File | Original source | Use and boundary |
|---|---|---|
| [NVIDIA GB200 NVL72 rack PNG](references/nvidia-gb200-nvl72-rack.png), 1920×1080 | [NVIDIA Newsroom file page](https://nvidianews.nvidia.com/file/nvidia-gb200-nvl72-rack-press-graphic?action=); [original image download](https://nvidianews.nvidia.com/_gallery/get_file/?file_id=670e888c3d6332a54e481554) | A real rack example in C0 and S4. Retain recognisable cabinets/cabling and image proportions. Never imply the illustrative task ran on this rack or every agent uses this product. |
| [Google TPU 8i board JPEG](references/google-tpu-8i-board.jpg), 1999×1333 | [Google Cloud Next 2026 article](https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next26); [original image](https://storage.googleapis.com/gweb-cloudblog-publish/images/tpu.max-2000x2000.jpg) | Authentic alternate silicon in S6. Keep visible board/chip markings if possible; label it Google TPU 8i. Do not use it as evidence of share or superiority over GPUs. |
| [IEA two-point CSV](references/iea-data-centre-electricity-2025-2030.csv) | [IEA 2026 central case](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) | Source data for S5 chart: global data-centre electricity, **all workloads**, 485 TWh in 2025 and 950 TWh in 2030 central case. The chart must state scope, units, scenario, and years. No agent-only allocation. |

These two images were visually inspected at source resolution before handoff. They are examples of real physical components, while the causal mechanisms are authored. Do not turn either photograph into a generic full-screen wallpaper. Preserve aspect ratio, safe crop, attribution in notes, and recognisable identity. Do not invent vendor logos, UI, or product appearances.

## Scene specification and asset inventory

The table is the minimum factual and visual content. An authored object is explanatory, not a measurement; its size must not suggest an unlabelled numeric comparison. All content stays inside the 16:9 safe composition area with titles/data clear of crop and click zones. Hold states have no motion necessary to comprehend the claim. The words shown are a **maximum planned copy inventory**, not narration; adjust only for clarity while respecting evidence.

| Scene / target hold | Mode and assets | Composition, edge safety, and motion | Visible copy budget and factual boundary |
|---|---|---|---|
| **C0 — Question** | `mixed`: authored task docket and contained [real rack](references/nvidia-gb200-nvl72-rack.png) | Docket foreground, rack deeper and bounded within safe frame. Camera draws toward the docket, then holds. On click, travel through the task into S1; neither photo nor title may clip during approach. | “One task. What does completion cost?” Rack has no claim of direct attribution. |
| **S1 — Verified outcome** | `authored`: request, delivered record, review boundary; no fake enterprise UI | Make the delivered record the focal object. Show a visible boundary between attempted and checked result; camera pauses front-on. Click the completed record to reveal underlying work in S2. Keep the target and outcome readable. | “A completed task” / “Checked result”. Distinguish completion from token volume; review may be human. |
| **S2 — Workload path** | `authored`: branching path with model turns, tools, retry/check stages | Move into the underside of the record, with depth separating call paths. Repeated calls are a conceptual possibility, not a fixed multiplier. Settle with one call visible as the next target. | “Tasks × calls × compute” / “Tools” / “Checks”. No claim every task follows this exact path. |
| **S3 — Demand versus efficiency** | `authored`: opposing forces or converging trajectories, with physically distinct forms | Orbit, then hold at a readable intersection where task growth and falling cost/task can be understood together. Click the convergence point to enter S4's physical stack. Avoid an unlabelled bar chart or exact numeric geometry. | “More work” / “Less cost per task” / “Net demand?” It is an open comparison, not a forecast. |
| **S4 — Physical stack** | `mixed`: [real rack](references/nvidia-gb200-nvl72-rack.png) essential, authored HBM/network/packaging layers | Arrive on the actual rack image within a deliberate frame; layer explanatory geometry in depth beside it, never over identifying cables/cabinets. Camera move from rack to a visible memory path, then hold. Click that path to enter S5. | “Compute” / “HBM” / “Network”. Label rack as one example. No agent-only NVIDIA revenue label. |
| **S5 — Capacity** | `chart` plus authored rack-to-grid corridor: [IEA CSV](references/iea-data-centre-electricity-2025-2030.csv) | Travel from memory/network dependencies to power connection. Settle on a legible chart plane with years and scope, while connection remains visible. Click the connection to rise to S6. Chart and labels stay within safe frame in both capture sizes. | “Global data centres · all workloads” / “IEA central case” / “2025 485 TWh” / “2030 950 TWh”. Extra labels justified because scope prevents misattribution. |
| **S6 — Routing and rights** | `mixed`: authored permission gate and routing paths; [real TPU 8i board](references/google-tpu-8i-board.jpg) essential alternate-hardware example | Rise from grid to task owner's permission gate. Show multiple possible compute routes without equal-size implying equal shares; bounded TPU photo can occupy one clearly named path. Click approved task route to E0. | “Task” / “Permission” / “Route” / “Google TPU 8i”. Do not imply market share or that governance alone ensures ROI. |
| **E0 — Conditional answer** | `authored`: return of delivered record, task-cost/capacity paths as restrained physical traces | Camera returns to recognisable S1 outcome at a higher vantage. The result and three monitoring questions form a stable final tableau. R resets; no autoplay. | “Completed tasks?” / “Cost per task?” / “Who routes work?” No company ranking or stock call. |

## Interaction Map — main route

Each click target must be a meaningful **visible subject**, not an invisible full-screen hotspot. The same destination is reached with Space. State progression should be recoverable if a target is missed; R always resets.

| Current | Audience understands | Visible action target → exact destination | Why next / reveal during transition / settled hold |
|---|---|---|---|
| C0 | The unit of analysis is a completed work item. | Click task docket → **S1**. | Enter the work to define what completion means. Reveal request becoming delivered record; hold on verified outcome. |
| S1 | A checked result differs from attempted work. | Click completed record → **S2**. | Look beneath the outcome at the process cost. Reveal model/tool/review paths; hold on a single visible call. |
| S2 | One task can require several calls and tools. | Click visible repeated call → **S3**. | Ask whether more calls necessarily mean more total capacity. Reveal the opposing efficiency force; hold at convergence. |
| S3 | Demand growth and cost reduction compete. | Click convergence point → **S4**. | Follow the remaining compute need into tangible supply. Reveal real rack, memory, and network; hold on physical stack. |
| S4 | Hardware dependencies extend beyond the accelerator. | Click memory path → **S5**. | Follow a constraint into capacity and electricity. Reveal rack-to-grid path and IEA chart; hold at fully labelled chart. |
| S5 | Capacity and electricity are system-level constraints, with IEA data for all data centres. | Click power connection → **S6**. | Return upstream to the decision of where work goes. Reveal task/data permission gate and alternative compute route; hold with source board visible. |
| S6 | Control of task, rights, and routing may affect value capture. | Click approved task route → **E0**. | Return to the verified outcome and conditional test. Reveal three measures; hold indefinitely on conclusion. |
| E0 | The answer depends on outcomes, full cost, and routing. | R → **C0**; Space stays at E0. | A deliberate reset begins a new presentation. Final view remains readable until reset. |

## Delivery, status, and verification

1. Fetch the exact branch. Update `WORKFLOW_STATUS.md` to `BUILDING` with your actor, current commit, and next action. Preserve research files and source URLs. No force push.
2. Prototype C0/S4/transition; compare two palette directions in browser; then implement all eight hold states and transitions. Record render/camera choices and **actual selected palette hex values** in `BUILD_NOTES.md`. Record any source replacement with original URL, reason, and crop check.
3. Test locally at both desktop capture sizes: content safe area, still frames, intermediate transitions, click targets, Space/R, repeated inputs, reduced motion, keyboard focus, and render/load stability. Run a clean production build.
4. Deploy to a **public Vercel production URL** and inspect that exact published build. Save production URL, deployment date, branch/commit, implementation decisions, source assets, caveats, and screenshots in `BUILD_NOTES.md`. A preview or old reported site is insufficient. The prior site `https://bots-vs-agents-2026.vercel.app` belongs to a different assignment.
5. Create one current Thai `06_SCENE_RATIONALE` in the owner Drive folder: actual cover and scene screenshots, why each spatial choice explains its claim, source/crop decisions, exact production URL. No invented screenshots. Link it from `BUILD_NOTES.md` and status.
6. Set status to `READY_FOR_QA` and `Next: QA` with URL and exact commit. QA follows [05_QA.md](05_QA.md), writes `07_WEB_QA_REPORT.md` with evidence and finding IDs. Build fixes findings on the same branch; QA retests the published production build. Stop only after QA passes or an explicit unresolved blocker is recorded.

No source in this brief licenses invented performance, ROI, capacity share, or product identity. Recheck time-sensitive claims against their primary sources at build/publication time.
