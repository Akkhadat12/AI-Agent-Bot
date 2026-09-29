# Workflow status — Agent Bot × AI Supply Chain

- **Repository:** https://github.com/Akkhadat12/AI-Agent-Bot
- **Working branch:** [`agent-bot-ai-supply-chain-2026`](https://github.com/Akkhadat12/AI-Agent-Bot/tree/agent-bot-ai-supply-chain-2026)
- **Approved scope:** AI value chain and upstream infrastructure: chips, HBM, cloud, networks, data centres, and electricity.
- **Approved thesis:** Will verified completed agent work grow faster than full cost per task falls? Supporting lens: who controls task intake, data, permissions, and routing?
- **Stage:** `QA_FAIL` — independent production QA on 29 September 2026 found [QA-001](07_WEB_QA_REPORT.md#qa-001--s5-chart-loses-its-factual-labels-while-still-prominent-during-departure).
- **Research cut-off:** 29 September 2026.
- **Last verified handoff content commit:** research [`ffe39f7`](https://github.com/Akkhadat12/AI-Agent-Bot/commit/ffe39f7); build and docs [`563dd56`](https://github.com/Akkhadat12/AI-Agent-Bot/commit/563dd56); this status update is the Build → QA handoff marker.
- **Current public build URL:** https://agent-task-cost-2026.vercel.app (Vercel production `dpl_2GKJ2FM93uUXZrrxK9at26w5UW6X`, deployed from commit `1d8c17c`, `web/`).
- **Build record:** [BUILD_NOTES.md](BUILD_NOTES.md) · published screenshots in [docs/screenshots/](docs/screenshots/) · Thai scene rationale: [06_SCENE_RATIONALE (Google Doc)](https://docs.google.com/document/d/1HQQOKQWECoc-VZYH8nzLLU8WS_5fMa12-6dbzdd6BFM/edit).
- **QA report and independent production evidence:** [07_WEB_QA_REPORT.md](07_WEB_QA_REPORT.md) · [docs/qa-evidence/](docs/qa-evidence/).
- **Owner Drive folder:** [reading PDFs and future scene rationale](https://drive.google.com/drive/folders/1CBG-OOusgdXWSvLjtT3cMSCJx0yCTYU9).
- **Current planning package:** [01 MD](01_KNOWLEDGE_SUMMARY.md) · [01 PDF](01_KNOWLEDGE_SUMMARY.pdf) · [02 MD](02_RESEARCH_AND_ANALYSIS.md) · [02 PDF](02_RESEARCH_AND_ANALYSIS.pdf) · [03 story](03_STORY_STRUCTURE.md) · [04 build](04_BUILD_WEB.md) · [05 QA](05_QA.md) · [references](references/).
- **Next actor and exact action:** **Next: Build** (Claude Code). Fix QA-001 so the S5 IEA chart's factual labels remain with the visible bars during S5→S6, or the chart and labels leave together. Redeploy production, update `BUILD_NOTES.md` and any affected rationale evidence, then set `READY_FOR_QA` with the new URL/deployed commit. QA will retest the fix and regressions.
- **Open findings/blockers:** QA-001 (medium, S5→S6 chart labels disappear while the bars remain prominent). See [report and production screenshots](07_WEB_QA_REPORT.md#qa-001--s5-chart-loses-its-factual-labels-while-still-prominent-during-departure). Other scene and interaction checks passed in this QA pass; the Build self-check had 51/51 automated interaction checks pass.

## Old assignment boundary

This fresh branch was created from `main` for the new topic. The previous site's branch `cursor/agent-bot-web-7739` and reported URL `https://bots-vs-agents-2026.vercel.app` are historical and cannot be reused as the new production delivery. The new site, `BUILD_NOTES.md`, `06_SCENE_RATIONALE` and `07_WEB_QA_REPORT.md` now exist (see above).

## Committed-file protocol for later agents

1. **Build** fetches this branch, updates stage to `BUILDING`, implements the website, records the deployed commit/public Vercel production URL and decisions in `BUILD_NOTES.md`, delivers one current Thai `06_SCENE_RATIONALE` in the owner Drive folder, and sets `READY_FOR_QA` with `Next: QA`.
2. **QA** independently tests the published URL and exact commit against [05_QA.md](05_QA.md), writes `07_WEB_QA_REPORT.md` with stable finding IDs and actual evidence, and sets `QA_FAIL` with `Next: Build` or `QA_PASS` when all requirements pass.
3. **Build** fixes each finding on this branch and republishes; **QA** retests affected scenes and regressions. Both update this file and commit their handoff. Fetch before edits; do not force push. The owner need not relay finding details between agents.
