# Story structure — Why build agent bots before every job pays off?

**Approved thesis:** AI companies are racing to turn answer engines into systems that finish work inside real tools, because useful execution could create customer value and a durable business position. The evidence is uneven: bounded, checkable workflows show deployments and some measured benefits, while vendor case studies, older copilot experiments, and product launches cannot establish that autonomous agents are profitable across industries.

**Owner decision:** Thesis option 3, approved 27 September 2026. Research cutoff: 27 September 2026. Primary references: [knowledge summary](01_KNOWLEDGE_SUMMARY.md), [analysis and claim ledger](02_RESEARCH_AND_ANALYSIS.md). The accompanying [summary PDF](01_KNOWLEDGE_SUMMARY.pdf) and [analysis PDF](02_RESEARCH_AND_ANALYSIS.pdf) are reading copies.

**Audience:** A Thai-speaking general technology and business audience, including viewers who have used AI chat but have not built agents. The website is an English-only, low-text visual aid for the owner's Thai narration.

**Central question:** Why are OpenAI, SpaceXAI and others launching agent systems now, and what kinds of work have enough evidence to merit deployment?

**Human relevance:** A support worker, developer, operations analyst or order-desk colleague can spend less time copying and triaging information if an agent can act inside the actual system. They may instead spend time reviewing errors, managing access and escalating exceptions. The net result depends on the whole workflow, not the number of AI messages.

**Arc:** An unfinished chat answer → a job finished in a tool → the vendors' different routes to that job → value and costs → a support case with a measurement boundary → a coding counterexample → an order workflow and a commerce reversal → conditions that determine where agents help → a conditional answer.

**Duration:** Target 8–12 minutes; estimated **10:30** including the owner's spoken explanations and natural pauses. These are planning estimates, not automatic scene timers. Nine settled screens including cover and closing; do not add filler to reach the duration.

## Opening cover — The unfinished job (0:45)

- **Job:** Pose the puzzle: a chatbot can say what to do, while companies now sell bots that try to do it. Why the rush?
- **Evidence:** Grok Bot beta launched 11 August 2026; OpenAI Agents API public beta launched 10 September 2026. These are distinct product routes. [SpaceXAI](https://x.ai/news/introducing-grok-bot) · [OpenAI](https://openai.com/index/introducing-the-agents-api/)
- **Visual need:** A task visibly crosses from an unanswered work request toward a completed record in a real tool, with small authentic product identity anchors for Grok Bot and Agents API. The object relationship, not a title or brand collage, must carry the question.
- **Presenter points:** Identify two launches and ask whether doing more work always means producing more value.
- **Boundary:** Do not imply both products provide identical consumer bot functionality or that completion is guaranteed. This is a conceptual work object, not a screenshot of a real customer.
- **Link forward:** First establish what “done” means.

## S1 — Answer versus action (1:10)

- **Job:** Define an agent by its observable role: goal, tools, system output, review.
- **Evidence:** OpenAI describes hosted environments, tool calls, context management and subagents; SpaceXAI describes bots working across apps on a cloud computer. [Agents API](https://openai.com/index/introducing-the-agents-api/) · [Grok Bot](https://x.ai/news/introducing-grok-bot)
- **Visual need:** One work request yields a draft on one side and, on the other, a verifiable changed record plus a human review point. This is an authored comparison, not a product UI.
- **Presenter points:** Model capability is only one part; access, memory, workspace and permissions make execution possible. Bot is a product label, not a universal autonomy standard.
- **Boundary:** A conceptual completed record must not suggest that any named product always finishes every job.
- **Link forward:** If execution is possible, why do vendors want to own the route?

## S2 — Two paths into work (1:15)

- **Job:** Show that the competitive wave is real but product forms differ.
- **Evidence:** Grok Bot beta targets a persistent bot UX with a cloud computer; Agents API offers developers a managed harness and environment choices. Data agent provides a separate organization-facing surface. [Grok Bot](https://x.ai/news/introducing-grok-bot) · [Agents API](https://openai.com/index/introducing-the-agents-api/) · [Data agent](https://openai.com/index/put-data-to-work/)
- **Visual need:** Two distinct ways to reach the same workplace tool: a person hands a task to a Grok Bot-like teammate; a developer embeds an OpenAI API-based agent in an application. Authentic product anchors identify each route, with an authored bridge between them.
- **Presenter points:** One route sells a ready bot, another sells agent infrastructure; both need real context and tools. Data agent illustrates an application layer.
- **Boundary:** Do not redraw or invent official logos, show unreleased product UIs, or present two announcements as feature-for-feature competitors.
- **Link forward:** Different routes pursue the same prize: useful work and recurring usage.

## S3 — The value equation (1:15)

- **Job:** Explain incentives without claiming knowledge of internal company motives or profits.
- **Evidence:** OpenAI charges Agents API users for tokens and tools rather than an extra API fee; Grok Bot has separate usage; OpenAI says business value requires outcome measures, not usage alone. [Agents API](https://openai.com/index/introducing-the-agents-api/) · [Grok plans](https://x.ai/news/grok-bot-more-plans) · [business measurement](https://openai.com/index/how-to-connect-ai-usage-to-business-value/)
- **Visual need:** The same task has two opposing branches: time and quality gained by a customer, and compute, review, failures and permissions consumed. Make this an unscaled conceptual balance, not a measured chart.
- **Presenter points:** Vendors can seek paid compute and a place in the user's workflow; customers only benefit if total value exceeds total cost. Retention is an inference.
- **Boundary:** No profit margin, market share or savings percentage is established for the whole agent market.
- **Link forward:** Put the equation against a real task.

## S4 — Support: where a bot reaches the queue (1:25)

- **Job:** Show a concrete workflow and distinguish deployment from an independent impact estimate.
- **Evidence:** SpaceXAI says Grok Bot investigates tickets, connects issues and logs, handles refunds under instructions, and reports 99% of refund requests resolved without human intervention in its own operation. An NBER study of an AI assistant for 5,179 human support agents found 14% more issues resolved per hour on average; it did **not** test Grok Bot or a fully autonomous bot. [SpaceXAI case](https://x.ai/news/grok-bot-customer-support) · [NBER](https://www.nber.org/papers/w31161)
- **Visual need:** A real official support incident screenshot as a selective small anchor if it remains readable, with an authored queue → investigation → approval/escalation relationship. The screenshot is a vendor illustration, not proof of the depicted incident's prevalence.
- **Presenter points:** Two evidence levels: internal vendor outcome and older human-assist causal study. Work is easier to bound when there are policies, logs and a human exception route.
- **Boundary:** Do not put 99% and 14% in one comparative bar chart or claim either percentage describes the entire support industry.
- **Link forward:** What happens when a task is harder to evaluate?

## S5 — Coding: adoption is not the same as speed (1:20)

- **Job:** Introduce the strongest counterweight to universal productivity claims.
- **Evidence:** Anthropic classified roughly 400,000 Claude Code sessions from Oct 2025 to Apr 2026; the sample shows heavy practical use. METR's early-2025 randomized study estimated a 19% slowdown on experienced open-source developers' tasks, while its later experiment had selection and timing limitations that prevent a reliable current speedup estimate. [Anthropic](https://www.anthropic.com/research/claude-code-expertise) · [METR](https://metr.org/blog/2026-02-24-uplift-update/)
- **Visual need:** A developer's apparently finished code branch enters review and test, then loops back on defect or ambiguity. Distinguish usage evidence from measured time; avoid two unqualified headline numbers competing visually.
- **Presenter points:** Domain expertise shapes task selection and checking. The METR result is context-specific and older, but it falsifies “AI always makes developers faster.”
- **Boundary:** No claim that all coding agents now slow developers; the later study does not establish a precise current productivity figure.
- **Link forward:** Another task type has a more structured output.

## S6 — Orders can flow; shopping still has friction (1:15)

- **Job:** Compare a bounded B2B workflow with a consumer flow that needed redesign.
- **Evidence:** Choco reports OrderAgent converts emails, messages and images into ERP-ready orders with human review for exceptions; it reports 8.8 million orders per year and “up to” 50% less manual entry, a vendor/customer case. OpenAI says its initial Instant Checkout lacked desired flexibility and shifted toward merchant-controlled checkout and product discovery. [Choco](https://openai.com/index/choco/) · [OpenAI commerce update](https://openai.com/index/powering-product-discovery-in-chatgpt/)
- **Visual need:** A recognizable physical order slip or goods request maps into catalog/ERP fields with an exception gate; next to it, a shopping handoff returns to the merchant checkout. Authored representations should be explicitly conceptual.
- **Presenter points:** Ordered data with known fields is easier to validate; payment, returns and merchant control complicate consumer autonomy.
- **Boundary:** Do not treat Choco's volume as an industry average, imply a specific product image from an unsourced photo, or say commerce agents have failed entirely.
- **Link forward:** Extract the task traits that explain the difference.

## S7 — Where value can survive costs (1:20)

- **Job:** Give viewers a decision lens across industries rather than a false ranking of entire sectors.
- **Evidence:** The cited case studies and METR counterevidence support a conditional task-level assessment. OpenAI warns that actions on webpages and connected data create prompt-injection and data-exfiltration risks. [analysis ledger](02_RESEARCH_AND_ANALYSIS.md) · [link safety](https://openai.com/index/ai-agent-link-safety/)
- **Visual need:** A task travels through four gates—available data, bounded permissions, verifiable output, reversible action/human escalation—then emerges as “trial-worthy” or returns for human handling. The gates are an analytic framework, not measured thresholds.
- **Presenter points:** Software, support, operations and analytics each contain suitable and unsuitable tasks. Health, legal and finance applications may need stronger review for consequential decisions.
- **Boundary:** No sector-wide ROI score or made-up probability of success.
- **Link forward:** Answer the opening puzzle with its conditions.

## Closing — The race is real; the payoff is conditional (0:45)

- **Job:** Return to the unfinished task from the cover, now surrounded by the review and cost conditions learned along the way.
- **Evidence:** Cross-check the launches, cases, NBER study and METR counterpoint in [the research ledger](02_RESEARCH_AND_ANALYSIS.md).
- **Visual need:** The task reaches a real system record only after passing the relevant check, while an uncertain task remains with a person. One still frame should communicate “execution where conditions fit.”
- **Presenter points:** The race is to occupy the action layer. The plausible first beneficiaries are tasks with accessible context, measurable completion and manageable failure, not all jobs or all industries.
- **Boundary:** There is insufficient evidence to name a durable winner or quantify economy-wide ROI.

**Timing sum:** 0:45 + 1:10 + 1:15 + 1:15 + 1:25 + 1:20 + 1:15 + 1:20 + 0:45 = **10:30**. Natural pauses and the owner's explanation of evidence boundaries are included; no scene is timed to advance.
