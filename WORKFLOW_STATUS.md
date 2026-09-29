# Workflow status — Agent Bot × AI Supply Chain

- **Repository:** https://github.com/Akkhadat12/AI-Agent-Bot
- **Working branch:** [`agent-bot-ai-supply-chain-2026`](https://github.com/Akkhadat12/AI-Agent-Bot/tree/agent-bot-ai-supply-chain-2026)
- **Approved scope:** AI value chain and upstream infrastructure: chips, HBM, cloud, networks, data centres, and electricity.
- **Approved thesis:** Will verified completed agent work grow faster than full cost per task falls? Supporting lens: who controls task intake, data, permissions, and routing?
- **Stage:** `QA_FAIL` (retest) — QA-001 passed on the revised production deployment, but QA found new [QA-002](07_WEB_QA_REPORT.md#qa-002--s5s6-camera-passes-under-the-s6-platform-and-obscures-the-transition) on 29 September 2026.
- **Research cut-off:** 29 September 2026.
- **Last verified handoff content commit:** research [`ffe39f7`](https://github.com/Akkhadat12/AI-Agent-Bot/commit/ffe39f7); build and docs [`1020f38`](https://github.com/Akkhadat12/AI-Agent-Bot/commit/1020f38); this status update is the Build → QA handoff marker.
- **Current public build URL:** https://agent-task-cost-2026.vercel.app (Vercel production `dpl_GqwkRKjoN5FBN8WqNBCXz5z5CHTB`, deployed from commit `c10af1f`, `web/`).
- **Build record:** [BUILD_NOTES.md](BUILD_NOTES.md) · published screenshots in [docs/screenshots/](docs/screenshots/) · Thai scene rationale: [06_SCENE_RATIONALE (Google Doc)](https://docs.google.com/document/d/1XW-nIOzjQMfFJXRVvyGaUOGbS5YXT0O1u3RhU6THfs4/edit).
- **QA report and independent production evidence:** [07_WEB_QA_REPORT.md](07_WEB_QA_REPORT.md) · [docs/qa-evidence/](docs/qa-evidence/).
- **Owner Drive folder:** [reading PDFs and future scene rationale](https://drive.google.com/drive/folders/1CBG-OOusgdXWSvLjtT3cMSCJx0yCTYU9).
- **Current planning package:** [01 MD](01_KNOWLEDGE_SUMMARY.md) · [01 PDF](01_KNOWLEDGE_SUMMARY.pdf) · [02 MD](02_RESEARCH_AND_ANALYSIS.md) · [02 PDF](02_RESEARCH_AND_ANALYSIS.pdf) · [03 story](03_STORY_STRUCTURE.md) · [04 build](04_BUILD_WEB.md) · [05 QA](05_QA.md) · [references](references/).
- **Next actor and exact action:** **Next: Build** (Claude Code). Fix QA-002: the S5→S6 camera goes below the S6 platform, causing a near-black occluded frame in normal and reduced motion. Keep the verified QA-001 chart/label fade. Redeploy production, update `BUILD_NOTES.md` and affected rationale/evidence, then set `READY_FOR_QA` with the new URL/deployed commit. QA will retest the transition and full route.
- **Open findings/blockers:** **QA-002** (medium, S5→S6 camera/platform occlusion) is open; [independent production frames and requested correction](07_WEB_QA_REPORT.md#qa-002--s5s6-camera-passes-under-the-s6-platform-and-obscures-the-transition). **QA-001 closed** after retest at 1920×1080, 1280×720 and reduced motion. Interaction regression passed 51/51 checks.

## Old assignment boundary

This fresh branch was created from `main` for the new topic. The previous site's branch `cursor/agent-bot-web-7739` and reported URL `https://bots-vs-agents-2026.vercel.app` are historical and cannot be reused as the new production delivery. The new site, `BUILD_NOTES.md`, `06_SCENE_RATIONALE` and `07_WEB_QA_REPORT.md` now exist (see above).

## Committed-file protocol for later agents

1. **Build** fetches this branch, updates stage to `BUILDING`, implements the website, records the deployed commit/public Vercel production URL and decisions in `BUILD_NOTES.md`, delivers one current Thai `06_SCENE_RATIONALE` in the owner Drive folder, and sets `READY_FOR_QA` with `Next: QA`.
2. **QA** independently tests the published URL and exact commit against [05_QA.md](05_QA.md), writes `07_WEB_QA_REPORT.md` with stable finding IDs and actual evidence, and sets `QA_FAIL` with `Next: Build` or `QA_PASS` when all requirements pass.
3. **Build** fixes each finding on this branch and republishes; **QA** retests affected scenes and regressions. Both update this file and commit their handoff. Fetch before edits; do not force push. The owner need not relay finding details between agents.
