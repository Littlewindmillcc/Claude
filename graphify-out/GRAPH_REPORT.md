# Graph Report - Claude  (2026-09-19)

## Corpus Check
- Corpus is ~7,070 words - fits in a single context window. You may not need a graph.

## Summary
- 33 nodes · 37 edges · 8 communities (6 shown, 1 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- World Clock Widget — Remove/State
- World Clock Widget — Add & Init
- World Clock Widget — Update Loop
- NPM Package Config
- Klaviyo Email Flow Templates
- Welcome Series Email Flow
- Graphify Skill Docs

## God Nodes (most connected - your core abstractions)
1. `Little Windmill Klaviyo Flow Templates Index` - 12 edges
2. `addClock()` - 4 edges
3. `updateClock()` - 4 edges
4. `Welcome Series Email 1 — Welcome + Brand Story` - 3 edges
5. `Graphify Knowledge Graph Tool` - 3 edges
6. `AGENTS.md — Graphify Project Rules` - 3 edges
7. `initializeClocks()` - 2 edges
8. `showZoneSelector()` - 2 edges
9. `populateZones()` - 2 edges
10. `updateAllClocks()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `.claude/CLAUDE.md — Graphify Trigger Config` --semantically_similar_to--> `AGENTS.md — Graphify Project Rules`  [INFERRED] [semantically similar]
  .claude/CLAUDE.md → AGENTS.md
- `AGENTS.md — Graphify Project Rules` --semantically_similar_to--> `CLAUDE.md — Graphify Project Rules`  [INFERRED] [semantically similar]
  AGENTS.md → CLAUDE.md
- `Little Windmill Klaviyo Flow Templates Index` --references--> `Welcome Series Email 2 — Bestsellers / Shop The Range`  [EXTRACTED]
  index.html → flows/01-welcome/email-2-bestsellers.html
- `Little Windmill Klaviyo Flow Templates Index` --references--> `Welcome Series Email 3 — Offer Reminder`  [EXTRACTED]
  index.html → flows/01-welcome/email-3-reminder.html
- `Abandoned Cart Email 1 — Gentle Reminder` --references--> `Little Windmill Klaviyo Flow Templates Index`  [EXTRACTED]
  flows/02-abandoned-cart/email-1-reminder.html → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Abandoned Cart Recovery Flow** — flows_02_abandoned_cart_email_1_reminder_email, flows_02_abandoned_cart_email_2_social_proof_email, flows_02_abandoned_cart_email_3_last_chance_email [INFERRED 0.85]
- **Welcome Series Email Flow** — flows_01_welcome_email_1_welcome_email, flows_01_welcome_email_2_bestsellers_email, flows_01_welcome_email_3_reminder_email [INFERRED 0.85]
- **Little Windmill Branded Klaviyo Email Template System** — flows_01_welcome_email_1_welcome_email, flows_01_welcome_email_2_bestsellers_email, flows_01_welcome_email_3_reminder_email, flows_02_abandoned_cart_email_1_reminder_email, flows_02_abandoned_cart_email_2_social_proof_email, flows_02_abandoned_cart_email_3_last_chance_email, flows_03_post_purchase_email_1_thank_you_email, flows_03_post_purchase_email_2_review_request_email, flows_04_win_back_email_1_we_missed_you_email, flows_04_win_back_email_2_final_offer_email, flows_05_vip_loyalty_email_1_thank_you_gift_email, flows_05_vip_loyalty_email_2_early_access_email [INFERRED 0.90]

## Communities (8 total, 1 thin omitted)

### Community 2 - "World Clock Widget — Add & Init"
Cohesion: 0.50
Nodes (4): addClock(), initializeClocks(), showZoneSelector(), populateZones()

### Community 4 - "World Clock Widget — Update Loop"
Cohesion: 0.67
Nodes (3): updateAllClocks(), updateClock(), updateUTCOffset()

### Community 6 - "NPM Package Config"
Cohesion: 0.50
Nodes (3): dependencies, @modelcontextprotocol/inspector, @modelcontextprotocol/inspector

### Community 0 - "Klaviyo Email Flow Templates"
Cohesion: 0.20
Nodes (10): Abandoned Cart Email 1 — Gentle Reminder, Abandoned Cart Email 2 — Social Proof, Abandoned Cart Email 3 — Last Chance + Discount, Post-Purchase Email 1 — Thank You / What To Expect, Post-Purchase Email 2 — Review Request, Win-Back Email 1 — We've Missed You, Win-Back Email 2 — Final Incentive, VIP/Loyalty Email 1 — VIP Thank-You Gift (+2 more)

### Community 3 - "Welcome Series Email Flow"
Cohesion: 0.67
Nodes (3): Welcome Series Email 1 — Welcome + Brand Story, Welcome Series Email 2 — Bestsellers / Shop The Range, Welcome Series Email 3 — Offer Reminder

### Community 5 - "Graphify Skill Docs"
Cohesion: 0.83
Nodes (4): Graphify Knowledge Graph Tool, .claude/CLAUDE.md — Graphify Trigger Config, AGENTS.md — Graphify Project Rules, CLAUDE.md — Graphify Project Rules

## Knowledge Gaps
- **13 isolated node(s):** `activeClock`, `timeZones`, `@modelcontextprotocol/inspector`, `@modelcontextprotocol/inspector`, `Abandoned Cart Email 1 — Gentle Reminder` (+8 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 15 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Little Windmill Klaviyo Flow Templates Index` connect `Klaviyo Email Flow Templates` to `Welcome Series Email Flow`?**
  _High betweenness centrality (0.128) - this node is a cross-community bridge._
- **Why does `addClock()` connect `World Clock Widget — Add & Init` to `World Clock Widget — Remove/State`, `World Clock Widget — Update Loop`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `showZoneSelector()` connect `World Clock Widget — Add & Init` to `World Clock Widget — Remove/State`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Welcome Series Email 1 — Welcome + Brand Story` (e.g. with `Welcome Series Email 2 — Bestsellers / Shop The Range` and `Welcome Series Email 3 — Offer Reminder`) actually correct?**
  _`Welcome Series Email 1 — Welcome + Brand Story` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `activeClock`, `timeZones`, `@modelcontextprotocol/inspector` to the rest of the system?**
  _13 weakly-connected nodes found - possible documentation gaps or missing edges._