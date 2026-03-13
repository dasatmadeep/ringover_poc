Quality & Compliance Scorecards
One-line positioning: Zero‑math, manager-defined yes/no quality and compliance checks—AI‑evaluated with evidence—so teams can enforce standards at scale without building a scoring system.

Executive summary
Call Score V2 replaces “config-heavy call scoring” with a simple philosophy: a scorecard is a mandatory checklist. Managers define what must happen, AI evaluates each check as Pass/Fail, then classifies the call outcome (Strong → Acceptable → Needs Attention → Non‑Compliant) with timestamps and explanations. Scorecards are disabled by default, admin-controlled, capped at 10 checks, and fully separated from Coaching/Skills (Coaching improves; Scorecards enforce). This makes Empower especially compelling for Insurance and Recruitment teams needing consistent standards, rapid QA scaling, and clear compliance evidence—without debates over weights and percentages.

mermaid
Copy
flowchart LR
  A[Call Score V1<br/>Complex setup + default-on] --> B[Call Score V2<br/>Quality & Compliance Scorecards<br/>Disabled-by-default, yes/no checks, AI evidence]
  B --> C[Next: CRM-connected Scorecards<br/>(deal/ticket/opportunity grounding)<br/>Forecasting remains out-of-scope until bidirectional CRM]
V1 → V2 evolution
V1 pain: difficult configuration, default-on for customers who don’t need it, and blurred lines between “coaching” vs “scoring”.
V2 shift: optional enforcement module that’s fast to enable and hard to misconfigure:

Disabled by default; admin/supervisor activation (Settings → Modules → Quality & Compliance Scorecards → Enable).
No weights, no importance levels, no percentage maths—just mandatory checks.
Coaching & Skills are separate: Coaching = performance improvement; Scorecards = standards/compliance enforcement.
How Scorecards work
Activation & access: Admin/Supervisor enables; then assigns scorecards to groups/users.

Scorecard structure (simple): Name + Assigned groups/users + Checks only.

Check structure (simple): Title + Prompt + AI-suggested evaluation type. Example checks:

“Compliance disclosure mentioned”
“No guaranteed claims”
“Salary expectations captured”
“Clear next step confirmed”
Predefined templates (fast setup): Managers choose prebuilt checks (script coverage, required questions, compliance disclosure, forbidden language, required fields captured, framework questions covered, clear next step, professional tone), then optionally edit.

AI evaluation & outcome logic: Every check is Pass/Fail; AI determines severity and classifies overall call (Strong/Acceptable/Needs Attention/Non‑Compliant) with transcript snippets + timestamps.

Dashboard: Distribution (e.g., Strong/Acceptable/Needs Attention/Non‑Compliant), “most failed check”, and trendline over time—optimised for action, not arguing over averages.

Multi‑call history: Managers can track repeated failed checks across an agent/team over time (and across related interactions inside Empower), even though it is not CRM-opportunity grounded yet.

Benefits and impact
Insurance (quality + compliance at scale):

Enforce mandatory disclosures and prohibited claims with evidence-based outcomes.
Reduce QA sampling bias: move from “listen to a few calls” to “check every call consistently.”
Faster escalations: Non‑Compliant calls surface immediately for supervisor review.
Recruitment (screening quality + legal guardrails):

Ensure consistent intake: salary, location, right-to-work, role preference captured.
Prevent risky language (“guaranteed placement”, misleading claims).
Make team onboarding measurable: track “required questions asked” trend week-on-week.
Support (service standards):

Confirm required troubleshooting steps and proper next-step commitments.
Find systemic coaching needs without conflating with individual skill development.
Competitive comparison snapshot
(✅ yes | ◑ partial | — no | ? unspecified)

Vendor	Setup ease	AI evaluation	Multi‑call trend	CRM grounded	Real‑time guidance	Compliance focus	Templates	Roleplay
Empower Scorecards V2	✅	✅	✅	— (not yet)	—	✅	✅	—
Gong	◑	✅	✅	✅	—	◑	✅	✅
Modjo	◑	✅	✅	✅	—	◑	✅	—
Aircall	◑	✅	✅	◑	✅	◑	✅	—
Dialpad	◑	✅	✅	◑	✅	◑	✅	—
CloudTalk	◑	✅	✅	?	?	◑	✅	—
Fireflies	✅	◑	◑	◑	✅	—	✅	—
Fathom	✅	◑	◑	◑	—	—	◑	—
Noota	✅	?	?	◑	?	—	◑	—
Read.ai	✅	◑	✅	◑	✅	—	—	—
Note‑takers (generic)	✅	—	◑	◑	◑	—	◑	—

Competitor evidence (primary sources): Gong scorecards + AI Call Reviewer + AI Trainer. 
 Modjo AI call scoring templates + CRM pipeline stages. 
 Aircall call scoring + real-time playbooks/live prompts. 
 Dialpad AI Scorecards + Coaching Hub + Live Coach Cards. 
 CloudTalk call scoring. 
 Fireflies BANT/MEDDIC apps + Live Assist. 
 Fathom coaching tab + AI scorecards. 
 Leexi structured feedback/scorecard (Enterprise). 
 Read.ai coaching metrics. 
 Noota: “Sales Coaching Tab / Interview Scorecard” pricing signals. 

Sales battlecard: six fast rebuttals
Vs Gong: “Gong is a full enterprise suite; our scorecards are fast, non-technical enforcement—no maths, fewer debates, quicker rollout.” 
Vs Modjo: “Modjo is great for sales methodology scoring; Empower V2 is for mandatory quality/compliance checks across teams—clear pass/fail with evidence.” 
Vs Aircall/Dialpad/CloudTalk: “They add QA overlays to telephony; Empower delivers a dedicated Quality & Compliance checklist model and keeps Coaching separate (skills improve, scorecards enforce).” 
Vs Read.ai: “Read coaches communication style; Empower scorecards enforce business-critical standards (disclosures, forbidden language, required fields).” 
Vs Fireflies/Fathom/Noota: “Meeting assistants summarise and extract; Empower scorecards create auditable standards and team-level quality distribution.” 
Vs generic note‑takers: “Notes don’t enforce compliance. Scorecards do—at scale.”
Industry messaging snippets
Insurance: “Automate disclosure checks, prevent prohibited claims, and surface Non‑Compliant calls with evidence—without building a scoring spreadsheet.”
Recruitment: “Standardise screening: confirm salary/location/right‑to‑work every time; stop risky promises; track team quality week‑on‑week.”
Support: “Enforce troubleshooting protocols and next steps consistently—reduce escalations caused by missed mandatory steps.”
Three demo prompts
“Show me the last 20 calls marked Non‑Compliant and the failed checks with timestamps.”
“What is our most failed check this month for Recruitment screening calls, and which team needs attention?”
“Create a scorecard for Insurance renewals: disclosures + forbidden language + clear next step; generate checks from my description.”
Limitations and correct sales language
Optional module: “Disabled by default—enable only if you need QA/compliance enforcement.”
Not forecasting / not revenue intelligence: “Scorecards classify call quality; they do not forecast deal outcomes.”
Not Coaching: “Coaching improves skills; Scorecards enforce standards.”
Not CRM-grounded yet: “Multi-call trends exist in Empower, but scorecards are not linked to CRM opportunities until future CRM connection.”
CTA and next steps
Offer: 2‑week “Quality Pilot” (Insurance or Recruitment): deploy 1 scorecard, 8–12 checks, weekly review, and a final quality report.
Enablement: Provide 3 ready-made scorecards (Insurance Disclosure, Recruitment Screening, Support QA) + demo scripts + objection handling.