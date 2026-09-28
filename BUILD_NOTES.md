# Build notes

Public visual aid for the narrated video. Visible copy is short English. Evidence limits stay in the research files, not on the stage.

Production URL, no login: https://bots-vs-agents-2026.vercel.app

Thai scene rationale: https://drive.google.com/file/d/1UFjSG2ywGIxevA5WIh585Tt95VAcRJ4M/view

The repository stylesheet is one file, `styles.css`. Production serves the same bytes as four imported parts, `p0.css`–`p3.css`, split only between complete rules. The phone query, including the rule that hides the desktop fork, sits entirely in `p3.css`. An earlier split cut that query in half, so the fork stayed hidden above 860px. Connectors are borders in the settled frame, so a missed animation cannot leave them blank.

## What shipped

Nine settled screens, in order: Cover, S1, S2, S3, S4, S5, S6, S7, Closing. The first view at the site root is the cover. Nothing advances on a timer.

| From | Click target | Lands on |
|---|---|---|
| Cover | Unfinished work request | S1 |
| S1 | Record labeled Action | S2 |
| S2 | Shared workplace tools | S3 |
| S3 | Work item in the center | S4 |
| S4 | Approve flag | S5 |
| S5 | Test result | S6 |
| S6 | Validated fields | S7 |
| S7 | Checked passing record | Closing |
| Closing | Work item | Cover |

Space moves one screen forward and does nothing on Closing. R returns to Cover from any later screen. A second click or Space during the short settle is ignored, so a scene cannot be skipped. Keyboard focus lands on the click target. Its name is the visible label, or “Unfinished work request”, “Work item”, or “Passing task” when the object has no words.

`prefers-reduced-motion` shows the same finished layout at once. Otherwise entry is a short fade and a line draw, then the frame holds.

## Color

Two directions were compared in Chrome at 1920×1080 on the cover and on S3.

| Role | Paper (chosen) | Harbor (not used) |
|---|---|---|
| Stage | `#E9E2D6` | `#E3E8EA` |
| Paper objects | `#F7F3EB` | `#F4F7F8` |
| Ink and type | `#1C1915` | `#162026` |
| Accent, clickable edge and flag | `#9A3412` | `#0F5E5C` |
| Review and check | `#1F4D3A` | `#8A3B16` |
| Quiet divider | `#6F675C` | `#5C6B72` |

Paper stays. The warm stage reads as a desk, so the black product plates sit on it as objects. Terracotta marks only the thing the presenter clicks. Harbor was readable, but the cool field made the same objects feel like another software panel.

Type is Fraunces for the two scene titles and Outfit for labels. Both are loaded from Google Fonts, with Palatino and system sans as fallbacks.

## Real images

Served files:

- `references/grok-bot-official-cover.webp` on Cover and S2. Original: https://x.ai/images/news/introducing-grok-bot-og-2.png
- `assets/openai-agents-api-excerpt.webp` on Cover and S2. Crop of https://images.ctfassets.net/kftzwdyauwt9/ncSx68jam4NH3CRibCtHk/9b2b8fa8ef9024a0e281814e5bb7a53c/agents-api_16x9_dark_1.png at pixels x 1640–2220, y 820–1040 of the 3840×2160 file. That region is the OpenAI column’s own “Agents API” label. An earlier crop (x 160–1200, y 720–900) sat below the headers and did not show the name. The full illustration remains at `references/openai-agents-api-official.webp`.
- `assets/grok-bot-support-excerpt.webp` on S4. Crop of https://media.x.ai/cdn-cgi/image/fit%3Dscale-down%2Conerror%3Dredirect%2Cf%3Dauto/v1/website/grok-bot-customer-support-incident-b3f2d249.webp at pixels x 180–1600, y 400–980 of the 2000×1413 file, then resized to 560×229. The excerpt keeps the alert title and the sentence that nobody is paged without approval. It is a vendor illustration, not proof of a rate. The full frame remains at `references/grok-bot-support-incident-reference.webp`.

No generated scene art, official marks, faces, or product screens were added.

## What is deliberately not on screen

99%, 14%, and 19% are not shown. They are different kinds of evidence and belong in the narration. S3 tiles are the same size so area is not a measured ratio. S5 shows a review loop, not a speed claim. S6 is an authored order and a separate merchant handoff, not a Choco interface.

## Departures from the cue table

Phone layouts stack. Cover, S1, and Closing use a short vertical stem instead of the desktop curve. S2 uses one left rail so both routes still meet Tools. S5 keeps the return line. S7 lists the four gates in the same order, with Hold beside Escalation and the checked record after the last gate. Entry motion is opacity plus a line draw, then still.
