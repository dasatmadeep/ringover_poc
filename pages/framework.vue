<template>
  <div>

    <!-- ═══════════════════════════════════════════════════
         HERO
    ════════════════════════════════════════════════════ -->
    <section class="hero-onepager">
      <div class="hero-eyebrow">🔬 COMPETITIVE INTELLIGENCE · MARCH 2026</div>
      <h1>Empower <span class="hl">Framework</span> Analysis</h1>
      <p class="hero-sub">MEDDPICC, BANT & SPICED methodology intelligence across every conversation. How to win, when to position, and what to avoid.</p>
      <div class="hero-stats">
        <div class="stat"><div class="stat-num">V1</div><div class="stat-label">Live now</div></div>
        <div class="stat"><div class="stat-num">3+</div><div class="stat-label">Built-in methodologies</div></div>
        <div class="stat"><div class="stat-num">∞</div><div class="stat-label">Multi-call history</div></div>
        <div class="stat"><div class="stat-num">V2</div><div class="stat-label">Ask Empower access</div></div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════
         OVERVIEW
    ════════════════════════════════════════════════════ -->
    <section id="overview" class="section-wrap">
      <div class="section-label">WHAT IT DOES</div>
      <h2 class="section-title">Framework turns conversations into methodology evidence</h2>
      <p class="section-sub">Available inside Ask Empower V2, the Framework feature supports out-of-box and custom methodologies with per-call scoring, evidence, and a multi-call history across all channels.</p>

      <div class="fw-caps-grid">
        <div class="fw-cap-card">
          <div class="fw-cap-icon">🎯</div>
          <div>
            <div class="fw-cap-title">Out-of-box Methodologies</div>
            <div class="fw-cap-desc">MEDDPICC, BANT and SPICED are available out of the box. Admins can also define fully custom frameworks with their own checkpoints, generated or configured from scratch via "Generate with AI".</div>
          </div>
        </div>
        <div class="fw-cap-card">
          <div class="fw-cap-icon">✅</div>
          <div>
            <div class="fw-cap-title">Per-call Scoring & Evidence</div>
            <div class="fw-cap-desc">After every call or meeting, each methodology element is scored (e.g., "Decision Criteria: Partially Fulfilled") with timestamped evidence, checklist items, and "what went well / what went wrong" blocks.</div>
          </div>
        </div>
        <div class="fw-cap-card">
          <div class="fw-cap-icon">📋</div>
          <div>
            <div class="fw-cap-title">Multi-call History</div>
            <div class="fw-cap-desc">Framework results accumulate across all touchpoints for the same prospect or account — calls, video, emails — giving reps and managers a longitudinal view of methodology completion over time.</div>
          </div>
        </div>
        <div class="fw-cap-card">
          <div class="fw-cap-icon">💬</div>
          <div>
            <div class="fw-cap-title">Ask Empower V2 Access</div>
            <div class="fw-cap-desc">Reps and managers can query framework gaps conversationally: "Show MEDDPICC gaps across the last 5 touchpoints with Account X" or "What evidence supports Decision Criteria?" — no manual navigation needed.</div>
          </div>
        </div>
      </div>

      <!-- V1 Limitation Warning -->
      <div class="fw-limit-box">
        <div class="fw-limit-header">
          <span class="fw-limit-icon">⚠️</span>
          <span class="fw-limit-title">V1 Positioning Boundary — Read Before Pitching</span>
        </div>
        <div class="fw-limit-body">
          <div class="fw-limit-col">
            <div class="fw-limit-col-label fw-limit-col-label--no">❌ Do NOT say today</div>
            <ul class="fw-limit-list fw-limit-list--no">
              <li>"It's connected to your CRM opportunities"</li>
              <li>"It predicts close date or forecast confidence"</li>
              <li>"It gives deal health signals from CRM fields"</li>
            </ul>
          </div>
          <div class="fw-limit-col">
            <div class="fw-limit-col-label fw-limit-col-label--yes">✅ Position as</div>
            <ul class="fw-limit-list fw-limit-list--yes">
              <li>"Methodology evidence from every conversation — now"</li>
              <li>"Multi-call framework tracking across all channels"</li>
              <li>"CRM grounding is the next step on the roadmap"</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- ═══════════════════════════════════════════════════
         MARKET
    ════════════════════════════════════════════════════ -->
    <section id="market" class="section-wrap" style="background: var(--bg-grey-light);">
      <div class="section-label">MARKET CONTEXT</div>
      <h2 class="section-title">How the market implements frameworks</h2>
      <p class="section-sub">Competitors answer one of two questions: "Did we follow the methodology?" (call-level coaching) or "Is this deal progressing?" (deal-level forecasting). They do it through four distinct primitives.</p>

      <div class="fw-market-grid">
        <div class="fw-market-card fw-market-card--crm">
          <div class="fw-market-badge">Tier 1 · Deal-centric</div>
          <div class="fw-market-icon">🏗️</div>
          <div class="fw-market-title">CRM-grounded Deal Boards + AI Playbooks</div>
          <div class="fw-market-vendor">Gong</div>
          <div class="fw-market-desc">Playbooks are published into deal boards that combine AI insights with CRM fields. AI Deal Reviewer explicitly assesses whether reps are sticking to a methodology to better qualify the pipeline. Pre-built templates for MEDDICC, BANT, SPIN, SPICED, Sandler.</div>
          <div class="fw-market-tag fw-market-tag--danger">Empower's primary gap vs this tier: no CRM grounding yet</div>
        </div>

        <div class="fw-market-card fw-market-card--scoring">
          <div class="fw-market-badge">Tier 2 · Sales + Coaching</div>
          <div class="fw-market-icon">📊</div>
          <div class="fw-market-title">Conversation Intelligence + Pipeline Tooling</div>
          <div class="fw-market-vendor">Modjo</div>
          <div class="fw-market-desc">AI Call Scoring templates verify performance against a methodology and identify coaching opportunities. Modjo Deals is CRM-connected to prioritise pipeline, surface objections, and provide deal-level AI insights. Supports "Ask Anything about your deal."</div>
          <div class="fw-market-tag fw-market-tag--warning">Empower wedge: telephony-native + less vendor sprawl</div>
        </div>

        <div class="fw-market-card fw-market-card--playbook">
          <div class="fw-market-badge">Tier 3 · Telephony-native</div>
          <div class="fw-market-icon">📞</div>
          <div class="fw-market-title">Telephony Playbooks + QA Scorecards</div>
          <div class="fw-market-vendor">Dialpad · Aircall · CloudTalk · Kixie</div>
          <div class="fw-market-desc">Dialpad AI Playbooks support BANT/MEDDIC/SPICED with real-time adherence tracking via Coaching Hub. Aircall and CloudTalk add automated call scoring. Kixie focuses on live listen/whisper/barge coaching — not methodology scoring.</div>
          <div class="fw-market-tag fw-market-tag--success">Empower wedge: multi-channel + cross-call history + Ask layer</div>
        </div>

        <div class="fw-market-card fw-market-card--notetaker">
          <div class="fw-market-badge">Tier 4 · Meeting extraction</div>
          <div class="fw-market-icon">📝</div>
          <div class="fw-market-title">Meeting AI Apps & Templates</div>
          <div class="fw-market-vendor">Fireflies · Fathom · Read.ai · Noota</div>
          <div class="fw-market-desc">Fireflies BANT and MEDDIC AI Apps extract methodology signals from individual meetings. Fathom provides deal summary templates (SPICED/MEDDPICC/BANT) and claims multi-interaction SPICED monitoring. Read.ai focuses on communication coaching, not methodology.</div>
          <div class="fw-market-tag fw-market-tag--success">Empower wedge: structured scoring + manager visibility + operational tracking</div>
        </div>
      </div>

      <div class="fw-position-note">
        <div class="fw-position-note-label">🧭 Positioning anchor</div>
        <div class="fw-position-note-text">Empower Framework V1 sits between Tier 2 and Tier 3 — stronger than telephony playbooks on conversation coverage, not yet at Gong/Modjo on CRM-deal grounding. The core pitch is: <strong>"Methodology evidence from every conversation now — CRM deal health is next."</strong></div>
      </div>
    </section>

    <div class="divider" />

    <!-- ═══════════════════════════════════════════════════
         COMPARISON TABLE
    ════════════════════════════════════════════════════ -->
    <section id="comparison" class="section-wrap">
      <div class="section-label">COMPETITIVE MATRIX</div>
      <h2 class="section-title">Feature by feature</h2>
      <p class="section-sub">"Yes" = clearly documented. "Partial" = adjacent capability, not deal-centric or multi-call. "—" = not confirmed or not core.</p>

      <div class="fw-table-wrap">
        <table class="fw-table">
          <thead>
            <tr>
              <th>Capability</th>
              <th class="fw-th-empower">Empower V1</th>
              <th>Gong</th>
              <th>Modjo</th>
              <th>Dialpad</th>
              <th>Aircall</th>
              <th>Fireflies</th>
              <th>Fathom</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Built-in methodologies<br><span class="fw-table-sub">MEDDPICC / BANT / SPICED</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
            </tr>
            <tr>
              <td>Custom frameworks<br><span class="fw-table-sub">Admin-defined criteria</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-no">— Unclear</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
            </tr>
            <tr>
              <td>Per-call evidence + timestamps<br><span class="fw-table-sub">Scored checklist with quotes</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
            </tr>
            <tr>
              <td>Multi-call history<br><span class="fw-table-sub">Same account across touchpoints</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
            </tr>
            <tr>
              <td>Multi-channel data<br><span class="fw-table-sub">Calls + meetings + emails</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
              <td><span class="fw-badge fw-badge-no">Calls only</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
              <td><span class="fw-badge fw-badge-partial">Meetings</span></td>
            </tr>
            <tr>
              <td>CRM-opportunity grounding<br><span class="fw-table-sub">Linked to deal objects</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-roadmap">→ Roadmap</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-no">— Unclear</span></td>
              <td><span class="fw-badge fw-badge-no">— Unclear</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
              <td><span class="fw-badge fw-badge-partial">~ Partial</span></td>
            </tr>
            <tr>
              <td>Ask / Chat access<br><span class="fw-table-sub">Conversational methodology queries</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✓ Yes (V2)</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-no">— Unclear</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
            </tr>
            <tr>
              <td>Forecasting / pipeline intelligence<br><span class="fw-table-sub">Deal health from CRM + calls</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-roadmap">→ Roadmap</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✓ Yes</span></td>
              <td><span class="fw-badge fw-badge-no">Not core</span></td>
              <td><span class="fw-badge fw-badge-no">Not core</span></td>
              <td><span class="fw-badge fw-badge-no">Not core</span></td>
              <td><span class="fw-badge fw-badge-no">Not core</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="divider" />

    <!-- ═══════════════════════════════════════════════════
         BATTLECARDS
    ════════════════════════════════════════════════════ -->
    <section id="battlecards" class="section-wrap" style="background: var(--bg-grey-light);">
      <div class="section-label">BATTLECARDS</div>
      <h2 class="section-title">How to win by competitor</h2>
      <p class="section-sub">Proactively address gaps before prospects raise them. Lead with Empower's unique wedges, land the pitch line, and never misrepresent the roadmap.</p>

      <div class="fw-bc-grid">

        <!-- vs Gong -->
        <div class="fw-bc-card">
          <div class="fw-bc-vs">vs</div>
          <div class="fw-bc-name">Gong</div>
          <div class="fw-bc-cols">
            <div>
              <div class="fw-bc-section-label fw-bc-section-label--strong">Where Gong is strong</div>
              <div class="fw-bc-text">Best-in-class CRM-connected deal boards combining CRM fields with AI insights. Methodology playbooks can be published directly into deal boards. AI Deal Reviewer assesses rep adherence to better qualify pipeline.</div>
              <div class="fw-bc-section-label fw-bc-section-label--win" style="margin-top:14px">Empower silver bullets</div>
              <div class="fw-bc-text">Win when the buyer's pain is tool sprawl and adoption cost. Empower is one platform for calling + intelligence without the Gong procurement cycle. For regulated orgs, lead with "analysis without requiring call recording." Proactively frame the CRM roadmap to prevent Gong's wedge.</div>
            </div>
          </div>
          <div class="fw-bc-pitch">"Start with methodology evidence from every conversation now — then connect it to CRM for deal health and forecasting as the next step."</div>
        </div>

        <!-- vs Modjo -->
        <div class="fw-bc-card">
          <div class="fw-bc-vs">vs</div>
          <div class="fw-bc-name">Modjo</div>
          <div class="fw-bc-cols">
            <div>
              <div class="fw-bc-section-label fw-bc-section-label--strong">Where Modjo is strong</div>
              <div class="fw-bc-text">AI Call Scoring templates explicitly designed to score calls against a methodology and surface coaching opportunities. Modjo Deals is CRM-connected and positions around pipeline reviews, stalled deals, and deal-level AI insights. "Ask Anything about your deal" is a direct Ask Empower competitor.</div>
              <div class="fw-bc-section-label fw-bc-section-label--win" style="margin-top:14px">Empower silver bullets</div>
              <div class="fw-bc-text">If the prospect uses Ringover or is telephony-heavy, lead with "one platform for calling + intelligence." Position Framework as a standardised methodology layer inside Ask Empower. Anchor to the CRM grounding roadmap. Do <strong>not</strong> claim Modjo lacks deal intelligence — Modjo Deals explicitly exists.</div>
            </div>
          </div>
          <div class="fw-bc-pitch">"Modjo makes you build methodology templates. Empower gives you a methodology layer across every conversation — inside your communications stack."</div>
          <div class="fw-bc-landmine">⚡ Landmine: Don't claim "Modjo does not do deal intelligence." Modjo Deals exists and is explicitly positioned for pipeline reviews and deal insights.</div>
        </div>

        <!-- vs Dialpad -->
        <div class="fw-bc-card">
          <div class="fw-bc-vs">vs</div>
          <div class="fw-bc-name">Dialpad</div>
          <div class="fw-bc-cols">
            <div>
              <div class="fw-bc-section-label fw-bc-section-label--strong">Where Dialpad is strong</div>
              <div class="fw-bc-text">AI Playbooks have pre-built templates for BANT, MEDDIC, and SPICED with real-time adherence prompts. Coaching Hub provides visibility and leaderboards. AI Scorecards support QA-style scoring across the team.</div>
              <div class="fw-bc-section-label fw-bc-section-label--win" style="margin-top:14px">Empower silver bullets</div>
              <div class="fw-bc-text">Dialpad's strength is real-time single-call guidance. Empower's strongest wedge is multi-channel cross-call history + Ask Empower: "Ask for methodology gaps and evidence across all conversations from one interface." Add compliance differentiator: no-recording analysis capability for regulated environments.</div>
            </div>
          </div>
          <div class="fw-bc-pitch">"Dialpad guides a call. Empower proves methodology across the whole account journey."</div>
        </div>

        <!-- vs Aircall / CloudTalk -->
        <div class="fw-bc-card">
          <div class="fw-bc-vs">vs</div>
          <div class="fw-bc-name">Aircall & CloudTalk</div>
          <div class="fw-bc-cols">
            <div>
              <div class="fw-bc-section-label fw-bc-section-label--strong">Where they are strong</div>
              <div class="fw-bc-text">Aircall offers custom scorecards with AI- and human-evaluated criteria and automated call scoring with automation rules. CloudTalk markets AI Call Scoring across skills, playbook alignment, and compliance — "any criteria you choose." Both are rapidly increasing scoring capabilities.</div>
              <div class="fw-bc-section-label fw-bc-section-label--win" style="margin-top:14px">Empower silver bullets</div>
              <div class="fw-bc-text">Win when the customer needs actual sales methodology structure (MEDDPICC/BANT/SPICED) rather than generic QA scoring. Displace when video meetings matter — both are voice-only platforms. Add Ask Empower as a differentiator for manager-level querying across accounts.</div>
            </div>
          </div>
          <div class="fw-bc-pitch">"QA scorecards grade calls. Frameworks qualify deals. Empower does frameworks — and brings it into Ask Empower."</div>
        </div>

        <!-- vs Fireflies / Fathom / Notetakers (full-width last card) -->
        <div class="fw-bc-card fw-bc-card--full">
          <div class="fw-bc-vs">vs</div>
          <div class="fw-bc-name">Fireflies, Fathom & Basic Notetakers</div>
          <div class="fw-bc-two-col">
            <div>
              <div class="fw-bc-section-label fw-bc-section-label--strong">Where they are strong</div>
              <div class="fw-bc-text">Fireflies BANT and MEDDIC AI Apps extract methodology signals from individual meetings. Fathom offers SPICED/MEDDPICC/BANT deal summary templates and markets multi-interaction SPICED monitoring. Read.ai focuses on communication effectiveness coaching, not methodology completion. Noota emphasises structured templates — first-class MEDDPICC scoring unspecified.</div>
            </div>
            <div>
              <div class="fw-bc-section-label fw-bc-section-label--win">Empower silver bullets</div>
              <div class="fw-bc-text">Win when the customer needs manager-grade, repeatable methodology scoring with evidence and history — not just a formatted call summary. Your strongest path is "from notes to operational methodology tracking," with Ask Empower as the interface for managers to query gaps across the team. Prospects already using Fireflies/Fathom are easiest to upgrade when they feel blind on methodology compliance.</div>
              <div class="fw-bc-pitch" style="margin-top:12px">"They summarise frameworks. Empower operationalises them."</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div class="divider" />

    <!-- ═══════════════════════════════════════════════════
         DEMO PROMPTS
    ════════════════════════════════════════════════════ -->
    <section id="demo" class="fw-demo-section">
      <div class="section-wrap" style="padding-bottom: 0;">
        <div class="section-label" style="color: var(--brand);">DEMO PROMPTS</div>
        <h2 class="section-title" style="color: var(--text-inverted-primary);">Prompts that create a "wow" moment</h2>
        <p class="section-sub" style="color: rgba(255,255,255,0.6);">Designed to stay honest about V1 limitations while demonstrating the methodology intelligence layer inside Ask Empower.</p>
      </div>

      <div class="section-wrap" style="padding-top: 24px;">
        <div class="fw-demo-grid">
          <div class="fw-demo-col">
            <div class="fw-demo-col-title">🧑‍💼 Sales Rep</div>
            <div class="fw-demo-prompt">Show the MEDDPICC summary for the last conversation with [Account] and highlight what's missing.</div>
            <div class="fw-demo-prompt">Across the last 5 touchpoints with [Prospect], which MEDDPICC elements are still red, and what should I ask next?</div>
            <div class="fw-demo-prompt">In "Decision Criteria", show the evidence in the call — timestamps and quotes — that supports the score.</div>
          </div>
          <div class="fw-demo-col">
            <div class="fw-demo-col-title">👩‍💼 Sales Manager</div>
            <div class="fw-demo-prompt">For my team's last 30 demo calls, which MEDDPICC element is most often incomplete?</div>
            <div class="fw-demo-prompt">Compare two reps on "Opening Strategy" completion rate and show examples of the best openings.</div>
            <div class="fw-demo-prompt">Which accounts have repeated touchpoints but still show low "Decision Process" and "Paper Process" coverage?</div>
          </div>
          <div class="fw-demo-col">
            <div class="fw-demo-col-title">🏦 Insurance & Compliance</div>
            <div class="fw-demo-prompt">Show "Call Flow & Structure" checkpoints completion for regulated disclosures (custom framework) without needing recordings.</div>
            <div class="fw-demo-prompt">List the top recurring objections in claims or renewal calls and map them back to framework checkpoints.</div>
            <div class="fw-demo-prompt">Use a "Candidate Qualification" framework and show missing stakeholder alignment across the last 3 interviews for the same role.</div>
          </div>
        </div>

        <div class="fw-demo-avoid">
          <div class="fw-demo-avoid-title">🚫 Do NOT demo these — V1 can't do it yet</div>
          <div class="fw-demo-avoid-items">
            <div class="fw-demo-avoid-item">"What is the deal stage in CRM and forecast confidence?" — requires CRM grounding and bi-directional sync (V2/V3 outcome)</div>
            <div class="fw-demo-avoid-item">"Predict close date or commit probability based on CRM fields." — requires CRM data pull (not in V1)</div>
            <div class="fw-demo-avoid-item">Any question that implies framework data is tied to a named CRM opportunity — it is not yet.</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'framework' })
useHead({ title: 'Framework Analysis — Empower by Ringover' })
</script>
