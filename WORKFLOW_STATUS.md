# Workflow status — Agent Bot × AI Supply Chain

- **Repository:** https://github.com/Akkhadat12/AI-Agent-Bot
- **Working branch:** [`agent-bot-ai-supply-chain-2026`](https://github.com/Akkhadat12/AI-Agent-Bot/tree/agent-bot-ai-supply-chain-2026)
- **Approved scope:** AI value chain and upstream infrastructure: chips, HBM, cloud, networks, data centres, and electricity.
- **Approved thesis:** Will verified completed agent work grow faster than full cost per task falls? Supporting lens: who controls task intake, data, permissions, and routing?
- **Stage:** `READY_FOR_BUILD` — research, story, reference assets, and Build/QA handoff verified on 29 September 2026.
- **Research cut-off:** 29 September 2026.
- **Last verified handoff content commit:** [`ffe39f7`](https://github.com/Akkhadat12/AI-Agent-Bot/commit/ffe39f7); this status update is the final handoff marker.
- **Current public build URL:** none for this assignment.
- **Owner Drive folder:** [reading PDFs and future scene rationale](https://drive.google.com/drive/folders/1CBG-OOusgdXWSvLjtT3cMSCJx0yCTYU9).
- **Current planning package:** [01 MD](01_KNOWLEDGE_SUMMARY.md) · [01 PDF](01_KNOWLEDGE_SUMMARY.pdf) · [02 MD](02_RESEARCH_AND_ANALYSIS.md) · [02 PDF](02_RESEARCH_AND_ANALYSIS.pdf) · [03 story](03_STORY_STRUCTURE.md) · [04 build](04_BUILD_WEB.md) · [05 QA](05_QA.md) · [references](references/).
- **Next actor and exact action:** Web Build agent reads [README](README.md), [03](03_STORY_STRUCTURE.md), [04](04_BUILD_WEB.md), [05](05_QA.md), the two research packs, and `references/` in full; then implements on this branch.
- **Open findings/blockers:** none known. The final 02 MD/PDF, Drive replacement, reference file formats, repository-relative links, and Git diff were verified.

## Old assignment boundary

This fresh branch was created from `main` for the new topic. The previous site's branch `cursor/agent-bot-web-7739` and reported URL `https://bots-vs-agents-2026.vercel.app` are historical and cannot be reused as the new production delivery. The first agent's current assignment ends at research, story, assets, and build/QA handoff; there is no current new site, `BUILD_NOTES.md`, `06_SCENE_RATIONALE`, or `07_WEB_QA_REPORT.md` yet.

## Committed-file protocol for later agents

1. **Build** fetches this branch, updates stage to `BUILDING`, implements the website, records the deployed commit/public Vercel production URL and decisions in `BUILD_NOTES.md`, delivers one current Thai `06_SCENE_RATIONALE` in the owner Drive folder, and sets `READY_FOR_QA` with `Next: QA`.
2. **QA** independently tests the published URL and exact commit against [05_QA.md](05_QA.md), writes `07_WEB_QA_REPORT.md` with stable finding IDs and actual evidence, and sets `QA_FAIL` with `Next: Build` or `QA_PASS` when all requirements pass.
3. **Build** fixes each finding on this branch and republishes; **QA** retests affected scenes and regressions. Both update this file and commit their handoff. Fetch before edits; do not force push. The owner need not relay finding details between agents.
