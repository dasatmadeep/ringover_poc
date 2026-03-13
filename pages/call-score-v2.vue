<template>
  <div>

    <!-- ═══════════════════════════════════════════════════
         HERO
    ════════════════════════════════════════════════════ -->
    <section class="hero-onepager">
      <div class="hero-eyebrow">🛡️ PRODUCT BRIEF · CALL SCORE V2</div>
      <h1>Quality & Compliance <span class="hl">Scorecards</span></h1>
      <p class="hero-sub">Zero-math, manager-defined yes/no checks — AI-evaluated with evidence — so teams can enforce standards at scale without building a scoring system.</p>
      <div class="hero-stats">
        <div class="stat"><div class="stat-num">Pass/Fail</div><div class="stat-label">Simple check logic</div></div>
        <div class="stat"><div class="stat-num">4</div><div class="stat-label">Call outcome levels</div></div>
        <div class="stat"><div class="stat-num">10</div><div class="stat-label">Max checks per card</div></div>
        <div class="stat"><div class="stat-num">0</div><div class="stat-label">Maths required</div></div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════
         EVOLUTION
    ════════════════════════════════════════════════════ -->
    <section id="evolution" class="section-wrap">
      <div class="section-label">THE SHIFT</div>
      <h2 class="section-title">From config-heavy scoring to mandatory checklists</h2>
      <p class="section-sub">Call Score V1 was powerful but complex — difficult to configure, on by default, and blurring the line between coaching and compliance enforcement. V2 fixes all of this.</p>

      <div class="evo-wrap">
        <div class="evo-grid">
          <div class="evo-card v1">
            <div class="evo-badge">Call Score V1</div>
            <div class="evo-title">Complex & Always-On</div>
            <ul class="evo-list">
              <li>Difficult configuration with weights and importance levels</li>
              <li>Enabled by default for all customers</li>
              <li>Coaching and scoring blurred together</li>
              <li>Percentage maths led to debates over averages</li>
              <li>Hard to understand what "a good score" means</li>
            </ul>
          </div>
          <div class="evo-arrow">→</div>
          <div class="evo-card v2">
            <div class="evo-badge">Call Score V2 · Now</div>
            <div class="evo-title">Simple Enforcement, Disabled by Default</div>
            <ul class="evo-list">
              <li>Disabled by default — admin activates only when needed</li>
              <li>No weights, no percentages — just mandatory yes/no checks</li>
              <li>Coaching & Scorecards fully separated (skills vs standards)</li>
              <li>AI evaluates every check with timestamps + evidence</li>
              <li>4 clear outcome labels: Strong · Acceptable · Needs Attention · Non-Compliant</li>
              <li>Predefined templates for fast setup (no blank-page problem)</li>
            </ul>
          </div>
          <div class="evo-arrow">→</div>
          <div class="evo-card future">
            <div class="evo-badge">Next · Roadmap</div>
            <div class="evo-title">CRM-Connected Scorecards</div>
            <ul class="evo-list">
              <li>Scorecard results linked to CRM deal / ticket / opportunity</li>
              <li>Quality trends tied to pipeline stage and account health</li>
              <li>Bi-directional CRM sync enables deal-level enforcement</li>
              <li>Note: forecasting remains out-of-scope until CRM grounding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- ═══════════════════════════════════════════════════
         HOW IT WORKS
    ════════════════════════════════════════════════════ -->
    <section id="how-it-works" class="section-wrap" style="background: var(--bg-grey-light);">
      <div class="section-label">HOW IT WORKS</div>
      <h2 class="section-title">Four steps from setup to insight</h2>
      <p class="section-sub">Scorecards are designed to be fast to enable and hard to misconfigure. The whole system fits in four steps.</p>

      <div class="cs-steps-flow">
        <div class="cs-step-item">
          <div class="cs-step-bubble">
            <span class="cs-step-bubble-icon">⚙️</span>
            <span class="cs-step-bubble-num">01</span>
          </div>
          <div class="cs-step-body">
            <div class="cs-step-title">Activate</div>
            <div class="cs-step-desc">Admin or Supervisor enables the module from <strong>Settings → Modules → Quality & Compliance Scorecards → Enable</strong>. Then assigns scorecards to specific groups or users. Nothing is on by default.</div>
          </div>
        </div>
        <div class="cs-step-arrow">
          <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 3L15 18L3 33" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="cs-step-item">
          <div class="cs-step-bubble">
            <span class="cs-step-bubble-icon">📋</span>
            <span class="cs-step-bubble-num">02</span>
          </div>
          <div class="cs-step-body">
            <div class="cs-step-title">Build Your Scorecard</div>
            <div class="cs-step-desc">Give it a name, assign it to groups/users, then add up to 10 checks. Each check is a <strong>Title + Prompt</strong>. Start from a predefined template or build from scratch — AI can suggest check types from your description.</div>
          </div>
        </div>
        <div class="cs-step-arrow">
          <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 3L15 18L3 33" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="cs-step-item">
          <div class="cs-step-bubble">
            <span class="cs-step-bubble-icon">🤖</span>
            <span class="cs-step-bubble-num">03</span>
          </div>
          <div class="cs-step-body">
            <div class="cs-step-title">AI Evaluates Every Call</div>
            <div class="cs-step-desc">After each call, AI determines Pass or Fail per check, provides <strong>transcript snippets + timestamps</strong> as evidence, assesses severity, and classifies the overall call outcome automatically.</div>
          </div>
        </div>
        <div class="cs-step-arrow">
          <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 3L15 18L3 33" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="cs-step-item">
          <div class="cs-step-bubble cs-step-bubble--final">
            <span class="cs-step-bubble-icon">📊</span>
            <span class="cs-step-bubble-num">04</span>
          </div>
          <div class="cs-step-body">
            <div class="cs-step-title">Act on the Dashboard</div>
            <div class="cs-step-desc">See the <strong>distribution across all 4 outcomes</strong>, the most failed check, and trendlines over time. Track repeated failures across an agent or team. Optimised for action, not arguments over averages.</div>
          </div>
        </div>
      </div>

      <!-- Outcome levels -->
      <div class="cs-outcomes-row">
        <div class="cs-outcome cs-outcome--strong">
          <div class="cs-outcome-icon">✅</div>
          <div class="cs-outcome-label">Strong</div>
          <div class="cs-outcome-desc">All checks passed</div>
        </div>
        <div class="cs-outcome-arrow">→</div>
        <div class="cs-outcome cs-outcome--acceptable">
          <div class="cs-outcome-icon">🟡</div>
          <div class="cs-outcome-label">Acceptable</div>
          <div class="cs-outcome-desc">Minor gaps, no critical fails</div>
        </div>
        <div class="cs-outcome-arrow">→</div>
        <div class="cs-outcome cs-outcome--attention">
          <div class="cs-outcome-icon">🟠</div>
          <div class="cs-outcome-label">Needs Attention</div>
          <div class="cs-outcome-desc">Notable failures, review needed</div>
        </div>
        <div class="cs-outcome-arrow">→</div>
        <div class="cs-outcome cs-outcome--noncompliant">
          <div class="cs-outcome-icon">🔴</div>
          <div class="cs-outcome-label">Non-Compliant</div>
          <div class="cs-outcome-desc">Critical failure, escalate now</div>
        </div>
      </div>

      <!-- Example checks -->
      <div style="margin-top: 32px;">
        <div class="section-label" style="margin-bottom: 14px;">EXAMPLE CHECK CARDS</div>
        <div class="cs-checks-grid">
          <div class="cs-check-card cs-check-pass">
            <div class="cs-check-status">✓ Pass</div>
            <div class="cs-check-title">Compliance disclosure mentioned</div>
            <div class="cs-check-evidence">"…and as required I must inform you that this call may be recorded for quality purposes." · 0:32</div>
          </div>
          <div class="cs-check-card cs-check-fail">
            <div class="cs-check-status">✗ Fail</div>
            <div class="cs-check-title">No guaranteed claims</div>
            <div class="cs-check-evidence">"…we can guarantee you'll be placed within 4 weeks." · 4:18 — Forbidden language detected</div>
          </div>
          <div class="cs-check-card cs-check-pass">
            <div class="cs-check-status">✓ Pass</div>
            <div class="cs-check-title">Salary expectations captured</div>
            <div class="cs-check-evidence">"You mentioned £55–60k. I've noted that down." · 2:51</div>
          </div>
          <div class="cs-check-card cs-check-pass">
            <div class="cs-check-status">✓ Pass</div>
            <div class="cs-check-title">Clear next step confirmed</div>
            <div class="cs-check-evidence">"So we'll speak again Thursday at 3pm — I'll send a calendar invite." · 11:04</div>
          </div>
        </div>
      </div>

      <!-- Predefined templates -->
      <div class="cs-templates-strip">
        <div class="cs-templates-label">📦 Predefined templates for fast setup</div>
        <div class="cs-templates-list">
          <span class="cs-template-pill">Script coverage</span>
          <span class="cs-template-pill">Required questions</span>
          <span class="cs-template-pill">Compliance disclosure</span>
          <span class="cs-template-pill">Forbidden language</span>
          <span class="cs-template-pill">Required fields captured</span>
          <span class="cs-template-pill">Framework questions covered</span>
          <span class="cs-template-pill">Clear next step</span>
          <span class="cs-template-pill">Professional tone</span>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- ═══════════════════════════════════════════════════
         BENEFITS BY INDUSTRY
    ════════════════════════════════════════════════════ -->
    <section id="benefits" class="section-wrap">
      <div class="section-label">BENEFITS BY INDUSTRY</div>
      <h2 class="section-title">Built for teams that can't afford inconsistency</h2>
      <p class="section-sub">Quality & Compliance Scorecards are especially compelling in regulated and high-volume environments where every call matters.</p>

      <div class="cs-industry-grid">
        <div class="cs-industry-card">
          <div class="cs-industry-icon">🏦</div>
          <div class="cs-industry-name">Insurance</div>
          <div class="cs-industry-sub">Quality + compliance at scale</div>
          <div class="cs-industry-pitch">"Automate disclosure checks, prevent prohibited claims, and surface Non-Compliant calls with evidence — without building a scoring spreadsheet."</div>
          <ul class="cs-industry-list">
            <li>Enforce mandatory disclosures and prohibited claims with evidence-based outcomes</li>
            <li>Reduce QA sampling bias: move from "listen to a few calls" to "check every call consistently"</li>
            <li>Faster escalations: Non-Compliant calls surface immediately for supervisor review</li>
          </ul>
          <div class="cs-industry-checks">
            <span class="cs-industry-check-pill">Compliance disclosure ✓</span>
            <span class="cs-industry-check-pill">No guaranteed claims ✗</span>
            <span class="cs-industry-check-pill">Policy explained clearly ✓</span>
          </div>
        </div>

        <div class="cs-industry-card">
          <div class="cs-industry-icon">👔</div>
          <div class="cs-industry-name">Recruitment</div>
          <div class="cs-industry-sub">Screening quality + legal guardrails</div>
          <div class="cs-industry-pitch">"Standardise screening: confirm salary / location / right-to-work every time; stop risky promises; track team quality week-on-week."</div>
          <ul class="cs-industry-list">
            <li>Ensure consistent intake: salary, location, right-to-work, role preference captured every call</li>
            <li>Prevent risky language ("guaranteed placement", misleading claims)</li>
            <li>Make team onboarding measurable: track "required questions asked" trend week-on-week</li>
          </ul>
          <div class="cs-industry-checks">
            <span class="cs-industry-check-pill">Salary captured ✓</span>
            <span class="cs-industry-check-pill">Right-to-work asked ✓</span>
            <span class="cs-industry-check-pill">No guaranteed claims ✗</span>
          </div>
        </div>

        <div class="cs-industry-card">
          <div class="cs-industry-icon">🎧</div>
          <div class="cs-industry-name">Support</div>
          <div class="cs-industry-sub">Service standards at every touchpoint</div>
          <div class="cs-industry-pitch">"Enforce troubleshooting protocols and next steps consistently — reduce escalations caused by missed mandatory steps."</div>
          <ul class="cs-industry-list">
            <li>Confirm required troubleshooting steps were completed on every support call</li>
            <li>Ensure proper next-step commitments — no calls closed without a follow-up</li>
            <li>Find systemic coaching needs without conflating with individual skill development</li>
          </ul>
          <div class="cs-industry-checks">
            <span class="cs-industry-check-pill">Troubleshooting steps ✓</span>
            <span class="cs-industry-check-pill">Next step confirmed ✓</span>
            <span class="cs-industry-check-pill">Professional tone ✓</span>
          </div>
        </div>
      </div>

      <!-- Key differentiator: Coaching vs Scorecards -->
      <div class="cs-separation-box">
        <div class="cs-separation-col cs-separation-col--coaching">
          <div class="cs-separation-icon">🧠</div>
          <div class="cs-separation-label">Empower Coaching</div>
          <div class="cs-separation-line">Improves performance</div>
          <div class="cs-separation-desc">11 auto-defined skills, personalised feedback, skill trends over time. Helps reps grow — not used to enforce standards.</div>
        </div>
        <div class="cs-separation-divider">≠</div>
        <div class="cs-separation-col cs-separation-col--scorecards">
          <div class="cs-separation-icon">🛡️</div>
          <div class="cs-separation-label">Quality & Compliance Scorecards</div>
          <div class="cs-separation-line">Enforces standards</div>
          <div class="cs-separation-desc">Mandatory checklist: did the rep do what was required? Pass/Fail with evidence. No ambiguity about what counts as compliant.</div>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- ═══════════════════════════════════════════════════
         COMPARISON TABLE
    ════════════════════════════════════════════════════ -->
    <section id="comparison" class="section-wrap" style="background: var(--bg-grey-light);">
      <div class="section-label">COMPETITIVE SNAPSHOT</div>
      <h2 class="section-title">How Empower Scorecards compare</h2>
      <p class="section-sub">✅ yes &nbsp;·&nbsp; ◑ partial &nbsp;·&nbsp; — no &nbsp;·&nbsp; ? unspecified</p>

      <div class="fw-table-wrap">
        <table class="fw-table">
          <thead>
            <tr>
              <th>Vendor</th>
              <th class="fw-th-empower">Setup ease</th>
              <th class="fw-th-empower">AI evaluation</th>
              <th class="fw-th-empower">Multi-call trend</th>
              <th>CRM grounded</th>
              <th>Real-time guidance</th>
              <th>Compliance focus</th>
              <th>Templates</th>
            </tr>
          </thead>
          <tbody>
            <tr class="cs-table-row-empower">
              <td><strong>Empower Scorecards V2</strong></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✅ Yes</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✅ Yes</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✅ Yes</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-roadmap">→ Roadmap</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-no">— No</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✅ Yes</span></td>
              <td class="fw-td-empower"><span class="fw-badge fw-badge-empower">✅ Yes</span></td>
            </tr>
            <tr>
              <td>Gong</td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
            </tr>
            <tr>
              <td>Modjo</td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
            </tr>
            <tr>
              <td>Aircall</td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
            </tr>
            <tr>
              <td>Dialpad</td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
            </tr>
            <tr>
              <td>CloudTalk</td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-no">? Unclear</span></td>
              <td><span class="fw-badge fw-badge-no">? Unclear</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
            </tr>
            <tr>
              <td>Fireflies</td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
            </tr>
            <tr>
              <td>Fathom</td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
            </tr>
            <tr>
              <td>Read.ai</td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-partial">◑ Partial</span></td>
              <td><span class="fw-badge fw-badge-yes">✅ Yes</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
              <td><span class="fw-badge fw-badge-no">— No</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="cs-table-note">Empower is the only platform combining <strong>simple setup</strong>, <strong>AI evaluation with compliance focus</strong>, and <strong>multi-call trends</strong> — without requiring CRM configuration or technical scoring logic.</div>
    </section>

    <div class="divider" />

    <!-- ═══════════════════════════════════════════════════
         BATTLECARDS
    ════════════════════════════════════════════════════ -->
    <section id="battlecards" class="section-wrap">
      <div class="section-label">BATTLECARDS · 6 FAST REBUTTALS</div>
      <h2 class="section-title">How to win by competitor</h2>
      <p class="section-sub">One-line rebuttals backed by the key differentiator for each competitor group.</p>

      <div class="cs-bc-grid">

        <div class="cs-bc-card">
          <div class="cs-bc-vs">vs</div>
          <div class="cs-bc-name">Gong</div>
          <div class="cs-bc-pitch">"Gong is a full enterprise suite; our scorecards are fast, non-technical enforcement — no maths, fewer debates, quicker rollout."</div>
          <div class="cs-bc-detail">Gong's AI Reviewer and playbooks require enterprise setup and CRM grounding to reach full value. Empower Scorecards are live in minutes with predefined templates — no implementation project needed. Win when speed to value and simplicity matter more than enterprise breadth.</div>
        </div>

        <div class="cs-bc-card">
          <div class="cs-bc-vs">vs</div>
          <div class="cs-bc-name">Modjo</div>
          <div class="cs-bc-pitch">"Modjo is great for sales methodology scoring; Empower V2 is for mandatory quality/compliance checks — clear pass/fail with evidence."</div>
          <div class="cs-bc-detail">Modjo's scoring is oriented around sales performance against methodology templates. Empower Scorecards are designed for mandatory compliance enforcement — not "how well did they sell?" but "did they do what was required?" Win in regulated environments where evidence and escalation matter.</div>
        </div>

        <div class="cs-bc-card">
          <div class="cs-bc-vs">vs</div>
          <div class="cs-bc-name">Aircall · Dialpad · CloudTalk</div>
          <div class="cs-bc-pitch">"They add QA overlays to telephony; Empower delivers a dedicated Quality & Compliance checklist model and keeps Coaching separate."</div>
          <div class="cs-bc-detail">Telephony vendors bolt QA features onto calling infrastructure. Empower's Scorecards are a dedicated enforcement module — fully decoupled from Coaching so reps and managers understand what's being measured and why. Key wedge: skills improve (Coaching), standards enforce (Scorecards) — two distinct and non-competing systems.</div>
        </div>

        <div class="cs-bc-card">
          <div class="cs-bc-vs">vs</div>
          <div class="cs-bc-name">Read.ai</div>
          <div class="cs-bc-pitch">"Read coaches communication style; Empower scorecards enforce business-critical standards — disclosures, forbidden language, required fields."</div>
          <div class="cs-bc-detail">Read.ai's coaching is centered on engagement, sentiment, and communication quality. It is not designed for compliance enforcement. Win when the prospect needs "did we follow our legal / regulatory requirements?" rather than "was the call engaging?"</div>
        </div>

        <div class="cs-bc-card">
          <div class="cs-bc-vs">vs</div>
          <div class="cs-bc-name">Fireflies · Fathom · Noota</div>
          <div class="cs-bc-pitch">"Meeting assistants summarise and extract; Empower scorecards create auditable standards and team-level quality distribution."</div>
          <div class="cs-bc-detail">Notetakers create summaries and extract data — but they don't tell managers whether a rep was compliant or not. Empower Scorecards produce a clear verdict (Strong → Non-Compliant) with evidence for every call, and surface the most failed checks across the team. That's a fundamentally different product for a different use case.</div>
        </div>

        <div class="cs-bc-card cs-bc-card--accent">
          <div class="cs-bc-vs">vs</div>
          <div class="cs-bc-name">Generic Notetakers</div>
          <div class="cs-bc-pitch">"Notes don't enforce compliance. Scorecards do — at scale."</div>
          <div class="cs-bc-detail">If a prospect is using basic AI notes to check compliance, they're doing it manually — reading transcripts, making judgment calls, logging issues in spreadsheets. Empower Scorecards automate this entirely: every call, every check, every outcome, with evidence. The ROI is in the QA hours recovered and the risk reduced.</div>
        </div>

      </div>
    </section>

    <div class="divider" />

    <!-- ═══════════════════════════════════════════════════
         DEMO PROMPTS + CTA
    ════════════════════════════════════════════════════ -->
    <section id="demo" class="fw-demo-section">
      <div class="section-wrap" style="padding-bottom: 0;">
        <div class="section-label" style="color: var(--brand);">DEMO PROMPTS</div>
        <h2 class="section-title" style="color: var(--text-inverted-primary);">Three prompts that show the value</h2>
        <p class="section-sub" style="color: rgba(255,255,255,0.6);">Use these inside Ask Empower V2 to demonstrate Scorecards in action. All three show real enforcement value without overpromising.</p>
      </div>

      <div class="section-wrap" style="padding-top: 24px; padding-bottom: 0;">
        <div class="cs-demo-prompts">
          <div class="cs-demo-prompt-card">
            <div class="cs-demo-prompt-num">01</div>
            <div class="cs-demo-prompt-text">"Show me the last 20 calls marked Non-Compliant and the failed checks with timestamps."</div>
            <div class="cs-demo-prompt-why">Shows: AI classification + evidence surfacing at scale — the core compliance use case</div>
          </div>
          <div class="cs-demo-prompt-card">
            <div class="cs-demo-prompt-num">02</div>
            <div class="cs-demo-prompt-text">"What is our most failed check this month for Recruitment screening calls, and which team needs attention?"</div>
            <div class="cs-demo-prompt-why">Shows: Team-level quality distribution + actionable coaching signal from the dashboard</div>
          </div>
          <div class="cs-demo-prompt-card">
            <div class="cs-demo-prompt-num">03</div>
            <div class="cs-demo-prompt-text">"Create a scorecard for Insurance renewals: disclosures + forbidden language + clear next step; generate checks from my description."</div>
            <div class="cs-demo-prompt-why">Shows: AI-assisted setup — the "fast to configure" advantage vs competitors</div>
          </div>
        </div>
      </div>

      <!-- Limitations -->
      <div class="section-wrap" style="padding-top: 24px; padding-bottom: 0;">
        <div class="fw-demo-avoid">
          <div class="fw-demo-avoid-title">🚫 Correct sales language — what NOT to say</div>
          <div class="fw-demo-avoid-items">
            <div class="fw-demo-avoid-item"><strong>Not Coaching:</strong> "Coaching improves skills; Scorecards enforce standards." Keep them clearly separate.</div>
            <div class="fw-demo-avoid-item"><strong>Not forecasting / not revenue intelligence:</strong> "Scorecards classify call quality — they do not forecast deal outcomes."</div>
            <div class="fw-demo-avoid-item"><strong>Not CRM-grounded yet:</strong> "Multi-call trends exist in Empower, but scorecards are not linked to CRM opportunities until future CRM connection."</div>
            <div class="fw-demo-avoid-item"><strong>Optional module:</strong> "Disabled by default — enable only if you need QA/compliance enforcement." Don't oversell it as always-on intelligence.</div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="section-wrap" style="padding-top: 28px;">
        <div class="cs-cta-box">
          <div class="cs-cta-left">
            <div class="cs-cta-eyebrow">🚀 OFFER</div>
            <div class="cs-cta-title">2-Week Quality Pilot</div>
            <div class="cs-cta-desc">Insurance or Recruitment team. Deploy 1 scorecard, 8–12 checks, weekly review, and a final quality report — in two weeks.</div>
          </div>
          <div class="cs-cta-right">
            <div class="cs-cta-eyebrow">📦 ENABLEMENT</div>
            <div class="cs-cta-title">3 Ready-Made Scorecards</div>
            <div class="cs-cta-desc">Insurance Disclosure · Recruitment Screening · Support QA — plus demo scripts and objection handling included.</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'callscore' })
useHead({ title: 'Call Score V2 — Quality & Compliance Scorecards · Empower by Ringover' })
</script>
