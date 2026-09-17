# Graph Report - Claude  (2026-09-16)

## Corpus Check
- Corpus is ~8,197 words - fits in a single context window. You may not need a graph.

## Summary
- 57 nodes · 97 edges · 10 communities (4 shown, 2 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Klaviyo Email Flow Templates
- World Clock Widget
- Fake Login Mockup — Core Actions
- Graphify Skill Docs
- NPM Package Config
- Fake Login Mockup — Page

## God Nodes (most connected - your core abstractions)
1. `TerminalLogin` - 22 edges
2. `Little Windmill Klaviyo Flow Templates Index` - 12 edges
3. `addClock()` - 4 edges
4. `updateClock()` - 4 edges
5. `Graphify Knowledge Graph Tool` - 3 edges
6. `AGENTS.md — Graphify Project Rules` - 3 edges
7. `Welcome Series Email 1 — Welcome + Brand Story` - 3 edges
8. `initializeClocks()` - 2 edges
9. `updateUTCOffset()` - 2 edges
10. `showZoneSelector()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `.claude/CLAUDE.md — Graphify Trigger Config` --semantically_similar_to--> `AGENTS.md — Graphify Project Rules`  [INFERRED] [semantically similar]
  .claude/CLAUDE.md → AGENTS.md
- `CLAUDE.md — Graphify Project Rules` --semantically_similar_to--> `AGENTS.md — Graphify Project Rules`  [INFERRED] [semantically similar]
  CLAUDE.md → AGENTS.md
- `Little Windmill Klaviyo Flow Templates Index` --references--> `Welcome Series Email 2 — Bestsellers / Shop The Range`  [EXTRACTED]
  index.html → flows/01-welcome/email-2-bestsellers.html
- `Little Windmill Klaviyo Flow Templates Index` --references--> `Welcome Series Email 3 — Offer Reminder`  [EXTRACTED]
  index.html → flows/01-welcome/email-3-reminder.html
- `Little Windmill Klaviyo Flow Templates Index` --references--> `Abandoned Cart Email 1 — Gentle Reminder`  [EXTRACTED]
  index.html → flows/02-abandoned-cart/email-1-reminder.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Little Windmill Branded Klaviyo Email Template System** — flows_01_welcome_email_1_welcome_email, flows_01_welcome_email_2_bestsellers_email, flows_01_welcome_email_3_reminder_email, flows_02_abandoned_cart_email_1_reminder_email, flows_02_abandoned_cart_email_2_social_proof_email, flows_02_abandoned_cart_email_3_last_chance_email, flows_03_post_purchase_email_1_thank_you_email, flows_03_post_purchase_email_2_review_request_email, flows_04_win_back_email_1_we_missed_you_email, flows_04_win_back_email_2_final_offer_email, flows_05_vip_loyalty_email_1_thank_you_gift_email, flows_05_vip_loyalty_email_2_early_access_email [INFERRED 0.90]
- **Welcome Series Email Flow** — flows_01_welcome_email_1_welcome_email, flows_01_welcome_email_2_bestsellers_email, flows_01_welcome_email_3_reminder_email [INFERRED 0.85]
- **Abandoned Cart Recovery Flow** — flows_02_abandoned_cart_email_1_reminder_email, flows_02_abandoned_cart_email_2_social_proof_email, flows_02_abandoned_cart_email_3_last_chance_email [INFERRED 0.85]

## Communities (10 total, 2 thin omitted)

### Community 0 - "Klaviyo Email Flow Templates"
Cohesion: 0.18
Nodes (13): Welcome Series Email 1 — Welcome + Brand Story, Welcome Series Email 2 — Bestsellers / Shop The Range, Welcome Series Email 3 — Offer Reminder, Abandoned Cart Email 1 — Gentle Reminder, Abandoned Cart Email 2 — Social Proof, Abandoned Cart Email 3 — Last Chance + Discount, Post-Purchase Email 1 — Thank You / What To Expect, Post-Purchase Email 2 — Review Request (+5 more)

### Community 1 - "World Clock Widget"
Cohesion: 0.27
Nodes (9): activeClock, addClock(), initializeClocks(), showZoneSelector(), populateZones(), timeZones, updateAllClocks(), updateClock() (+1 more)

### Community 5 - "Graphify Skill Docs"
Cohesion: 0.83
Nodes (4): .claude/CLAUDE.md — Graphify Trigger Config, AGENTS.md — Graphify Project Rules, Graphify Knowledge Graph Tool, CLAUDE.md — Graphify Project Rules

### Community 6 - "NPM Package Config"
Cohesion: 0.50
Nodes (3): dependencies, @modelcontextprotocol/inspector, @modelcontextprotocol/inspector

## Knowledge Gaps
- **14 isolated node(s):** `@modelcontextprotocol/inspector`, `@modelcontextprotocol/inspector`, `timeZones`, `activeClock`, `Claude Terminal Design-System Login Page` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 17 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `TerminalLogin` connect `Fake Login Mockup — Core Actions` to `Fake Login Mockup — Terminal UI`, `Fake Login Mockup — Auth Steps`, `Fake Login Mockup — Email Validation`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **What connects `@modelcontextprotocol/inspector`, `@modelcontextprotocol/inspector`, `timeZones` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._