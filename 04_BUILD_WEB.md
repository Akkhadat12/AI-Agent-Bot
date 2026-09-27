# Build Web brief — Agent bots: the race is real, the payoff is conditional

## Assignment and source of truth

Build an interactive 2D visual presentation for a narrated Thai YouTube video. The owner selected the thesis “Why build agent bots before every job pays off?” on 27 September 2026. The website uses **minimal English-only visible text**; the owner's spoken narration carries the Thai analysis. This is a research and build brief, not a finished design.

Work in the **same owner-supplied repository**, [Akkhadat12/AI-Agent-Bot](https://github.com/Akkhadat12/AI-Agent-Bot), on its existing **main** branch. Commit website source, local production assets and build notes there without replacing the seven research documents. An older commit, experiment or live website, if present, is not this assignment's finished brief. The canonical reading sources are [01_KNOWLEDGE_SUMMARY.md](01_KNOWLEDGE_SUMMARY.md) / [PDF](01_KNOWLEDGE_SUMMARY.pdf), [02_RESEARCH_AND_ANALYSIS.md](02_RESEARCH_AND_ANALYSIS.md) / [PDF](02_RESEARCH_AND_ANALYSIS.pdf), and [03_STORY_STRUCTURE.md](03_STORY_STRUCTURE.md). The owner-facing Drive folder is [AI Agent Bot — Why Now and Where It Works](https://drive.google.com/drive/folders/1lIkUlxdnk0A_xEKz5oYM5NfUfZWFSmV1).

**Owner requirements:** dedicated subject-specific cover at the public URL; one visual idea per scene; genuine real-world imagery where it matters; almost no on-screen prose; English-only site; 16:9 full-viewport capture; stable scenes for unscripted narration; meaningful visible click targets; Space advances one scene and R returns to cover; no page numbers, slide arrows, carousel dots or presentation rails; no AI-generated scene images or generic AI backdrops; accessible narrow-screen behavior. The owner will start the Web Build assignment separately.

**First-agent proposals:** the work item as an occasional visual object; a sequence of a task leaving chat, taking two product routes, meeting economics and evidence, then passing four task gates. These are narrative proposals, not a fixed template. Actual composition, palette and motion are builder decisions after browser review.

**Approved thesis:** Companies race to make AI act inside tools because useful execution could benefit customers and create recurring usage for providers. Some bounded, checkable workflows already show deployments and measured benefits, but evidence does not establish that autonomous agents pay off across all industries. Vendors' internal outcomes, independent human-assist studies, observational usage and randomized coding studies must remain distinct.

## Evidence boundaries that control the visuals

- Grok Bot: announced beta 11 Aug 2026 with a cloud computer, memory and multi-bot workflows [SpaceXAI](https://x.ai/news/introducing-grok-bot). Do not imply that every task succeeds unattended.
- Agents API: announced public beta 10 Sep 2026 as developer infrastructure with a managed harness and environment choices [OpenAI](https://openai.com/index/introducing-the-agents-api/). Do not portray it as the same consumer product as Grok Bot.
- Data agent: organization-facing analysis product [OpenAI](https://openai.com/index/put-data-to-work/). It is a third application surface, not a claimed autonomous teammate.
- SpaceXAI's reported 99% refund resolution is **its own support operation's vendor claim** without an independent control group [case](https://x.ai/news/grok-bot-customer-support). The NBER 14% average productivity gain concerns an AI assistant for 5,179 human support agents, **not Grok Bot** [paper](https://www.nber.org/papers/w31161). Never put these values in one comparative chart.
- Coding: Anthropic usage analysis of ~400,000 Claude Code sessions demonstrates observed use, while METR's early-2025 experiment estimated a 19% slowdown for experienced open-source developers on their own tasks; a later study has severe selection limits [Anthropic](https://www.anthropic.com/research/claude-code-expertise) · [METR](https://metr.org/blog/2026-02-24-uplift-update/). Do not claim a universal slowdown or current precise speedup.
- Choco's 8.8 million annual orders and “up to 50%” manual entry reduction are reported in a vendor/customer case [OpenAI/Choco](https://openai.com/index/choco/). OpenAI later changed its Instant Checkout approach toward merchant-controlled checkout and product discovery [commerce update](https://openai.com/index/powering-product-discovery-in-chatgpt/). This does not prove commerce agents have failed.
- Provider revenue, profit, lock-in and sector ranking are analysis or scenarios, not measured outcomes. Use unscaled relationships and verbal qualifiers; never turn a hypothetical balance into a quantitative chart.

Recheck time-sensitive product status and material data against original sources at publication. If a newer reliable source changes a claim, update the research MD and matching PDF first, replace the Drive PDF in place, then update the story/build/QA files as needed.

## Visual direction and motif

Aim for a calm, sharp editorial stage that can be held while someone explains an argument. Prioritize a recognizable work object, authentic product identity when relevant, and the exact relationships needed to understand the scene. Keep generous breathing room, strong foreground separation, legible type, and a clear focus at 16:9. The work item may return at the end to complete the argument; do not impose it in every scene. Use visual distinction for **announced product**, **vendor-reported outcome**, **independent evidence**, and **analytic condition** without making those categories look like measured ranking or a numerical scale. No factual color coding is required by the sources.

Do not set the website background color, named hue, light/dark preference or hex palette from this brief. Compare **at least two materially different viable color directions** on a representative composed scene in a real browser, then choose the one that best supports the subject and foreground readability. Document the final stage, type and accent hex values and reason in `BUILD_NOTES.md`. A source image's own colors do not dictate the entire stage.

Use the provided real source images as foreground components, carefully cropped or masked when needed; never paste a source illustration as full-screen wallpaper. An accurate replacement may be sourced later, saved and served locally, with its original URL and purpose documented. Preserve authentic proportions and identifying details. A source screenshot can be small and selectively framed, with its vendor-illustration status clear in notes. Do not generate an official mark, speculative product UI, face, workplace photograph, generic stock person, or invented customer incident. Do not use glowing node networks, interchangeable cards, fake browser windows, decorative particles or perpetual ambient motion as the main storytelling system.

## Sequence and narration budget

| Screen | Purpose and suggested visible copy | Spoken estimate | Mode |
|---|---|---:|---|
| Cover | “Why Agents, Why Now?” | 0:45 | mixed |
| S1 | “Answer” / “Action” | 1:10 | authored |
| S2 | “Bot” / “API” | 1:15 | mixed |
| S3 | “Value” / “Cost” | 1:15 | authored |
| S4 | “Support” / “Review” | 1:25 | mixed |
| S5 | “Use ≠ Speed” | 1:20 | authored |
| S6 | “Order” / “Checkout” | 1:15 | authored |
| S7 | “Data · Permission · Proof · Escalation” | 1:20 | authored |
| Closing | “Payoff Is Conditional” | 0:45 | authored |

**Total spoken target: 10:30** including explanations and pauses. The table's copy is a ceiling proposal, not a requirement to show every word. Prefer at most **12 visible words per scene** excluding indispensable units and numbers. No explanatory paragraphs or source URLs on the site; keep evidence and caveats in the MD/PDF and owner-facing notes. Do not shrink text to fit this budget; omit less important copy. The screenshot in S4 contains existing source text and should be positioned so it does not become a wall of unreadable site text; the builder can use a deliberate authentic crop without falsifying the depicted workflow.

## Asset inventory and composition and edge-safety requirements

All links below are repository-relative **actual source files**. The original source is recorded next to each. Selected essential assets must remain recognizably present unless replaced with a more accurate existing image of the same subject and documented. Optional assets can be omitted only after visual review with a reason. The builder may add or replace real assets and update this inventory and its build note. The first agent selected **three** viewable real files: [Grok Bot official image](references/grok-bot-official-cover.webp), [OpenAI official Agents API illustration](references/openai-agents-api-official.webp), [SpaceXAI support incident screenshot](references/grok-bot-support-incident-reference.webp). These are uncropped, accurately transcoded source references, not finished scene art. The original URLs identify the source files.

For every screen, inspect the composed **actual published page** at the intended 16:9 capture viewport and a narrow phone width. Keep essential subjects, labels, chart values, connectors and meaningful click targets inside visible safe margins. No accidental viewport/mask clipping, stretched image, cutout halo, collision, off-screen control, clipped headline, page-level horizontal overflow, or awkward near-edge tangency. A crop is acceptable only when deliberately noted, identifying and factual features remain visible, and it reads intentionally at both sizes. The phone view may recompose while preserving the critical relationship. The builder chooses coordinates in a browser, not from this prose.

### Cover — work waiting to be done (mixed)

- **Focal relationship:** An unfinished work item leads toward a completion record in an actual tool, creating the opening question. Brand anchors identify two actual launches without taking over the composition.
- **Real components, essential:** [Grok Bot official cover](references/grok-bot-official-cover.webp), original [SpaceXAI asset](https://x.ai/images/news/introducing-grok-bot-og-2.png), depicts the genuine Grok Bot mark/name; [OpenAI Agents API official illustration](references/openai-agents-api-official.webp), original [OpenAI asset](https://images.ctfassets.net/kftzwdyauwt9/ncSx68jam4NH3CRibCtHk/9b2b8fa8ef9024a0e281814e5bb7a53c/agents-api_16x9_dark_1.png), depicts the actual published Agents API component/label. Use a carefully prepared authentic excerpt of the latter if the full diagram overwhelms. Do not imply the API has a consumer app UI.
- **Authored component:** Work request and possible resulting record are clearly conceptual, not a fake official interface.
- **Hierarchy and edge safety:** The work object is first glance; both real identities stay readable but secondary. Leave space for a short question and a visible entry action attached to the unfinished item. No background image wallpaper; no crop through Grok name or Agents API label. On phone, stack or reposition while preserving task-to-record relation and entry target.
- **Click:** The visible unfinished work item opens S1. Stable until clicked or Space.

### S1 — answer versus action (authored)

- **Object / image need:** One request forks to a draft answer and to a changed, reviewable system record. No real image selected: showing a vendor product UI would falsely imply a specific product's success on a generic task.
- **Critical relationship:** The record exists only after tool action; human review remains legible. Both outcomes and the fork must survive phone rearrangement. The draft may simplify; the “action leads to record” line cannot disappear.
- **Hierarchy / edge:** Request and result are large enough to recognize; endpoints join the correct objects, never vanish under labels or viewport edges. No fake browser chrome. Click the visible completed record to open S2.

### S2 — two product routes (mixed)

- **Object / image need:** A person-to-bot route and a developer-to-API route reach workplace tools in different ways; published marks are identity anchors, not interchangeable product mockups.
- **Real components, essential:** The same [Grok Bot source](references/grok-bot-official-cover.webp), original [SpaceXAI](https://x.ai/images/news/introducing-grok-bot-og-2.png), and [Agents API source](references/openai-agents-api-official.webp), original [OpenAI](https://images.ctfassets.net/kftzwdyauwt9/ncSx68jam4NH3CRibCtHk/9b2b8fa8ef9024a0e281814e5bb7a53c/agents-api_16x9_dark_1.png). Reuse here advances the comparison; avoid a second identical cover composition.
- **Critical relationship:** Ready-to-use bot versus developer infrastructure, each with tools/context, not equal products or a causal arrow from one to the other. On phone, two routes may stack; route labels and destination remain associated. Do not invent a Grok/Agents API screen.
- **Hierarchy / edge:** The path distinction is first glance; authentic product labels remain legible without stretching or clipping, with breathing room between routes. Click the shared workplace tool to open S3.

### S3 — the value equation (authored)

- **Object / image need:** One job's useful outcome faces costs: compute, human review and errors. No real photo improves this conceptual accounting; a data center photo would imply a quantitative cost not measured here.
- **Critical relationship:** Both sides connect to **the same task**. Never scale area or thickness to imply a measured ratio. On phone, keep both sides and their shared task visible, even if stacked. Click the work item/balance point to open S4.
- **Hierarchy / edge:** The task and opposing forces are the focus; leave margins around cost items and labels. Avoid a chart axis or numeric “ROI” gauge.

### S4 — support in an actual tool (mixed)

- **Object / image need:** Queue → investigation → escalation/approval, with a selectively framed real vendor example.
- **Real component, optional:** [SpaceXAI support incident screenshot](references/grok-bot-support-incident-reference.webp), original [SpaceXAI media](https://media.x.ai/cdn-cgi/image/fit%3Dscale-down%2Conerror%3Dredirect%2Cf%3Dauto/v1/website/grok-bot-customer-support-incident-b3f2d249.webp), depicts an illustrated Slack incident alert in the company’s support case. It grounds the cross-tool workflow; it is a vendor illustration, not independent verification of a particular incident or its rate. If it makes the scene too text-heavy, retain a smaller authentic excerpt or omit with a documented reason and replace the workflow anchor with another accurate source.
- **Critical relationship:** An incoming customer issue moves through evidence and policy before a person approves an exceptional action. Preserve the review gate and distinguish a vendor-reported 99% refund claim from the separate NBER human-assist 14% study in narration/notes, not side-by-side measured bars.
- **Hierarchy / edge:** Workflow is first glance; optional screenshot does not become an illegible full-screen wallpaper. Do not crop it to imply that an alert automatically paged a human when its text says it did not. Keep identifying UI context if shown. Click the visible escalation flag to open S5.

### S5 — coding and verification (authored)

- **Object / image need:** A code change that appears finished loops through test and human review before it is accepted. No selected real image: a generic code screenshot would be decorative and might depict unrelated code.
- **Critical relationship:** Usage is observed, but speed is measured separately; apparent completion can loop back into work. On phone, preserve the review loop and the distinction between evidence types. Click the test result to open S6.
- **Hierarchy / edge:** Loop endpoints visibly return to the work item; do not clip a failing branch or overlay result labels. If displaying “19%” as supporting text, pair it with “early 2025 / experienced open-source tasks” at readable size or keep it only in narration.

### S6 — bounded order versus consumer checkout (authored)

- **Object / image need:** A clearly conceptual order slip or goods request becomes catalog fields and an ERP-ready order; a separate consumer shopping path hands checkout back to the merchant. No selected real image: the official Choco case cover uses decorative produce that would obscure the order-mapping mechanism, and an arbitrary product photo could falsely imply a particular SKU.
- **Critical relationship:** Structured order validation with a human exception path versus merchant-controlled checkout. Keep both destinations distinct; the physical goods/request stays recognizable on phone while less important catalog detail may compress. Click the validated order record to open S7.
- **Hierarchy / edge:** Place the order transformation at the focus, checkout as contrasting context. No invented Choco interface, cart screen or official product mark. No “8.8M means 50% for everyone” chart.

### S7 — four practical gates (authored)

- **Object / image need:** One work item passes data, permission, verification and escalation gates; one exception returns to a person. These are analytic conditions, not measured numerical thresholds. Real photography would add no necessary identity.
- **Critical relationship:** All four gates affect whether a task can safely reach a system record. On phone, gates may wrap into a compact vertical route but ordering, pass path and human exception remain unambiguous. Click the passing task to open Closing.
- **Hierarchy / edge:** Never let the pass path bypass a gate visually; labels remain attached and visible; connector endpoints land inside the proper gate.

### Closing — conditional payoff (authored)

- **Object / image need:** The cover's unfinished work item returns with a verified system result and a visible human exception route. No real image needed; this intentional return closes the argument, not a repeated cover page.
- **Critical relationship:** Some tasks finish in a tool when conditions fit; others remain under human judgment. On phone keep both outcomes and the condition visible. A meaningful visible work item can restart from the cover.
- **Hierarchy / edge:** The qualified conclusion is first glance. No giant “agents win” trophy, unconditional replacement image, clipped exception path or auto-reset.

## Presenter interaction, motion and access

The **first screen at the public URL is the dedicated cover**, not a menu or landing page. The cover stays still enough for an introduction and has a meaningful visible entry target. The click targets above are narrative proposals; if the builder changes one, document its visible affordance and update the QA interaction map. Spacebar advances exactly one screen from the cover through Closing; at Closing it should hold, not wrap without explicit user action. R returns to Cover from any scene. Do not use visible arrows, page numbers, dots or rails. Provide keyboard focus and accessible names for meaningful interactive targets. Avoid accidental double activation on rapid clicks/Space, and ensure a click during a transition cannot skip a screen.

Transitions, if used, should clarify the visual change and then settle completely. No auto-advance, perpetual float/pulse/zoom or ambient movement merely to seem advanced. Respect `prefers-reduced-motion`; keep the scene readable indefinitely for the presenter. Check the actual recorded 16:9 frame at a practical capture scale, including browser chrome/crop and safe area; do not rely only on CSS viewport math. On a narrow phone view, interaction and text must remain usable without horizontal scrolling or clipped targets.

## Build and post-build deliverables

1. Commit source, real served assets, `BUILD_NOTES.md` (including source URLs, visual changes, browser comparison of at least two color directions and chosen stage/type/accent hex values), and any necessary configuration to **this repository's main branch**. Maintain source-to-claim traceability and recheck facts before publication.
2. Publish the final Web App at a **public production URL anyone with the link can open without login**. Return the exact production URL, repository link and final build commit. A local build, private link, stale site or temporary preview is not delivery.
3. **After building the final public site**, create one Thai Word file named exactly **`06_SCENE_RATIONALE.docx`** in the matching [Drive folder](https://drive.google.com/drive/folders/1lIkUlxdnk0A_xEKz5oYM5NfUfZWFSmV1), and return its exact Drive link with the public URL. Start with thesis, date, final URL and navigation. In final on-screen order, cover every settled screen with a legible screenshot and short Thai explanation of what it means, why it appears here, the actual objects/composition/interaction, factual sources and conceptual limits, and material changes from this brief. Include original real-image/source URLs. One reading column, Thai-capable font, readable phone-width layout and working links. Open the saved `.docx` to check screenshots, Thai glyphs and links. It is not a full narration script.
4. Require final published-page QA, corrections and retesting. Store **`07_WEB_QA_REPORT.md`** in this same repository with exact public URL, date, each screen and tested viewport/state, expected versus observed result, PASS/FAIL/PARTIAL, actual screenshot links or precise browser observations, corrections and post-fix results. Keep final screenshot evidence at stable repository paths or durable owner-accessible links. The builder and reviewer may be one person or separate; do not call a build successful merely because it compiles.

Use [05_QA.md](05_QA.md) as the actual test plan. The owner initiates the build later; this handoff does not authorize a website deployment now.
