# Build notes: the cost of a completed agent task

## Delivery record

| Item | Value |
|---|---|
| Public production URL | **https://agent-task-cost-2026.vercel.app** |
| Deployment | Vercel production `dpl_2GKJ2FM93uUXZrrxK9at26w5UW6X`, READY, 29 September 2026 |
| Source branch / deployed commit | `agent-bot-ai-supply-chain-2026` @ `1d8c17c` (the `web/` app was deployed from this commit with `vercel deploy --prod`; later commits change docs only) |
| Vercel project | `agent-task-cost-2026` (CLI deploy, not Git-linked; redeploy from `web/` with `npx vercel deploy --prod`) |
| Builder | Claude Code (Build agent) |
| Scene rationale (Thai) | [`06_SCENE_RATIONALE` Google Doc](https://docs.google.com/document/d/1HQQOKQWECoc-VZYH8nzLLU8WS_5fMa12-6dbzdd6BFM/edit) in the owner Drive folder. It has 8 published scene screenshots and the palette comparison embedded |
| Published screenshots | [docs/screenshots/](docs/screenshots/): settled `n-ID.jpg` and mid-transition `n-ID-mid.jpg`, 1920×1080, captured from the production URL |

## Implementation

- **Stack:** Vite 7 + Three.js 0.180 (`web/`). One continuous WebGL world with CSS2D labels. There are no slides and no scene swaps: every state is a camera position in the same space.
- **Stage:** fixed 16:9, letterboxed to any window. Label size scales with stage height (`--u` = 1% of height), so 1920×1080 and 1280×720 keep the same composition.
- **Route:** C0 → S1 → S2 → S3 → S4 → S5 → S6 → E0.
  - Space advances exactly one state. Input is blocked while a transition runs, and key repeat is ignored.
  - R resets from any state, including mid-transition (veil fade, then cut to C0).
  - At E0, Space holds. There is no timer or autoplay.
- **Click targets:** each non-final state has one visible, named `<button>` attached to the scene object, plus the object itself (raycast).
  - C0 docket · S1 checked record · S2 model call · S3 pivot "Net demand?" · S4 memory path · S5 grid connection · S6 approved route.
  - The buttons have `aria-label`s, keyboard focus (Tab, Enter) and restrained hover/focus states. A polite live region announces the scene name.
- **Rendering:** frames render only while something changes, so hold states are completely still.
  - Photos are unlit (`toneMapped: false`, no fog) in a dark mat frame at their true aspect ratio.
  - Each photo is full strength in the scenes it carries (rack: C0 and S4; TPU: S6) and dimmed elsewhere, so it never competes with other scenes.
- **Camera:** eased Catmull-Rom paths through authored waypoints.
  - S2 → S3 orbits the balance before settling.
  - S5 → S6 rises from the grid to the gate.
  - S6 → E0 lifts over the whole route and returns to the record.
- **Reduced motion:** `prefers-reduced-motion` gives a 0.65 s direct move with reveals already settled. Scene order and all content are unchanged.
- **Presenter capture:** no navigation rail, dots, page numbers, arrows, legend, or fixed button. The `window.__journey` test hook has no visible UI.

### Scene objects, and why they are shaped this way

| ID | Authored objects | Real asset | Visible copy |
|---|---|---|---|
| C0 | Task docket on its stand in the foreground | NVIDIA rack photo, bounded, deeper in space | One task. What does completion cost? · Open the task |
| S1 | The docket gains a check stamp. Outlined attempts slide out behind a translucent review boundary | — | A completed task · Attempts · Review · Checked result |
| S2 | Path from under the record to plan, three model calls, four tools, a check gate, and a retry return. The loop over one call marks repetition, not a count | — | Tasks × calls × compute · Tools · Checks · Model call |
| S3 | Balance beam. Left pan: rising stack of task sheets. Right pan: narrowing cost tokens. The beam swings, then settles level: the net is open | — | More work · Less cost per task · Net demand? |
| S4 | Compute, HBM and network layers slide out beside the rack at separate depths. The memory path leads on | NVIDIA GB200 NVL72 rack | Example: NVIDIA GB200 NVL72 rack · Compute · HBM · Network · Memory path |
| S5 | Conduit along the corridor to a transformer, grid connection and pylon. Two-bar chart on a shared zero baseline | IEA CSV (exact values) | Global data centres · all workloads · Electricity use, TWh · IEA central case · 485 TWh · 950 TWh · 2025 · 2030 · central case · Grid connection |
| S6 | Task token, permission gate with lock, approved segment to a route junction, and three thin, equal-weight branches | Google TPU 8i board | Task · Permission · Route · Google TPU 8i · GPU · Other · Approved route |
| E0 | Same checked record from a higher vantage. The attempts step away. A thin trace runs through every zone of the route | Rack visible in distance | Completed tasks? · Cost per task? · Who routes work? |

## Evidence boundaries kept on stage

- **Numbers:** the only numbers shown are the IEA 485 TWh (2025) and 950 TWh (2030).
  - Rechecked on 29 September 2026 against the [IEA executive summary](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary): "from 485 TWh in 2025 to 950 TWh in 2030".
  - Bars are exact to scale (950 → 4.6 units, 485 → 2.35) on a zero baseline, with no interpolated midpoint.
  - The labels state the scope (global data centres, all workloads), the unit and the scenario.
- **Claims not shown on stage:** NVIDIA's revenue, Google's 80% claim, and Anthropic's r = 0.68 are not displayed. They belong to the narration, with the caveats in 03.
- **Rack:** labelled "Example". Nothing ties the illustrative task to that machine.
- **TPU:** shown only as a named alternative route. Branches are equal-width lines, not sized volumes, and no branch is highlighted. The GPU and Other destinations are generic, unbranded blocks.
- **No winner:** the balance settles level. E0 poses questions only: no ranking, forecast or stock call.

## Source assets

| File in `web/public/assets/` | Original | Handling |
|---|---|---|
| `nvidia-gb200-nvl72-rack.png` (1920×1080) | [NVIDIA Newsroom file page](https://nvidianews.nvidia.com/file/nvidia-gb200-nvl72-rack-press-graphic?action=) | Unchanged copy of `references/`. Full frame, no crop, 16:9 plane |
| `google-tpu-8i-board.jpg` (1999×1333) | [Google Cloud Next 2026](https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next26) | Unchanged copy of `references/`. Full frame, no crop, 3:2 plane; "TPU 8i" chip markings remain legible in S6 |

No asset was replaced or edited.

## Palette decision

Two directions were compared in the browser on C0, S4, the S4→S5 transition and S6. Evidence: [docs/palette-compare.jpg](docs/palette-compare.jpg), with plant on the left and paper on the right. Either can still be forced with `?palette=plant` or `?palette=paper`.

- **Chosen: "plant"** (dark plant room).
  - Both source photographs are studio shots on black. On this stage they sit as lit objects in the same space.
  - Under "paper" they read as pasted black rectangles, and the rack's cabinet edges were lost against the frame.
  - Amber carries the main route and the targets. Teal marks the opposing or verification forces: review boundary, checks and retry, cost tokens, HBM.
- **Rejected: "paper"** (warm drafting table). Higher contrast for the authored shapes, but it fought both photos, and the red accent read as a warning.

| Token | Hex |
|---|---|
| Background / fog | `#0E1116` |
| Letterbox | `#07090C` |
| Platform | `#1C232C` |
| Structure | `#4A5566` |
| Paper | `#E9E4D8` |
| Ink | `#2C333D` |
| Rule lines | `#B9B2A4` |
| Accent (main route, targets) | `#F2A33A` |
| Cool (review, checks, cost, HBM) | `#5FB3A8` |
| Connector lines | `#5D6978` |
| Photo mat | `#05070A` |
| Chart panel | `#1B212A` |
| 2025 bar | `#C9CED6` |
| Text | `#E8EAED` |
| Muted text | `#98A2B0` |

## Verification (29 September 2026, Chrome via Playwright on Windows)

- **Build:** `npm run build` is clean. The only warning is Three.js chunk size.
- **Local 1920×1080 and 1280×720:** settled and mid-transition frames inspected in every scene. Titles, targets and chart stay inside the frame at both sizes.
- **Interaction:** `node web/scripts/interact.mjs https://agent-task-cost-2026.vercel.app/` gives **51 PASS, 0 FAIL** on production. It covers:
  - each target click → next state;
  - a docket mesh click;
  - Space holding at E0;
  - R after a long hold;
  - bursts of six Space presses (no skips);
  - R from every settled state and mid-transition;
  - Tab focus, and Space/Enter on a focused button (one step only);
  - the full reduced-motion route;
  - no page errors.
- **Capture:** `node web/scripts/capture.mjs <url> <dir>` walks the route and saves settled and mid-transition frames. Production run: no console errors. Assets are served at their original byte sizes (rack 2,926,028 B; TPU 298,785 B).
- **Public access:** anonymous `curl` of the production URL returns 200.

### Bug found and fixed during the build

A mouse click could start a transition with a `requestAnimationFrame` timestamp earlier than the click. That gave a negative progress value and stopped the camera curve. Progress is now clamped to [0, 1]. The capture and interaction checks cover this case.

## Known limits

- Desktop only, as briefed. Phone layout was not attempted.
- Fonts load from Google Fonts. If they are blocked, system sans/mono fallbacks keep the layout.
