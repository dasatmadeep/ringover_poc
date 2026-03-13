<template>
  <div class="landing-page" style="min-height:100vh; display:flex; flex-direction:column;">
    <header class="empower-nav">
      <div class="nav-brand">
        <span class="nav-brand-dot" />
        <span>{{ brand }}</span>
      </div>
      <div class="nav-right">
        <select :value="locale" class="nav-lang" aria-label="Language" @change="setLocale(($event.target as HTMLSelectElement).value)">
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="es">ES</option>
        </select>
      </div>
    </header>
    <main style="flex:1;">
      <section class="hero-onepager" style="text-align: center;">
        <h1>Empower <span class="hl">One Pagers</span></h1>
        <p class="hero-sub">Product briefs and sales one pagers. Choose a document below.</p>
      </section>
      <section class="section-wrap">
        <div class="landing-cards" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
          <NuxtLink to="/ask-empower" class="landing-card">
            <div class="landing-card-icon" style="width:48px;height:48px;border-radius:12px;background:var(--accent-light);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;">💬</div>
            <h2 style="font-size:20px; font-weight:600; margin-bottom:8px;">Ask Empower - One Pager</h2>
            <p style="font-size:14px; color:var(--text-secondary); margin:0;">Conversational AI, Ask Empower V2 launch brief, capabilities and use cases.</p>
          </NuxtLink>
          <NuxtLink to="/empower-recruiter" class="landing-card">
            <div class="landing-card-icon" style="width:48px;height:48px;border-radius:12px;background:var(--accent-light);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;">📊</div>
            <h2 style="font-size:20px; font-weight:600; margin-bottom:8px;">Recruiter Revenue - One Pager</h2>
            <p style="font-size:14px; color:var(--text-secondary); margin:0;">Recruiter revenue: call intelligence, AIRO Coach, Bullhorn native.</p>
          </NuxtLink>
          <NuxtLink to="/empower-coaching" class="landing-card">
            <div class="landing-card-icon" style="width:48px;height:48px;border-radius:12px;background:var(--accent-light);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;">🧠</div>
            <h2 style="font-size:20px; font-weight:600; margin-bottom:8px;">Empower Coaching - One Pager</h2>
            <p style="font-size:14px; color:var(--text-secondary); margin:0;">AI coaching intelligence: 11 auto-defined skills, Pitchroom, AIRO Coach, team SWOT analysis.</p>
          </NuxtLink>
          <NuxtLink to="/how-to-pitch-ask-empower" class="landing-card landing-card-featured">
            <div class="landing-card-icon" style="width:48px;height:48px;border-radius:12px;background:rgba(78,110,193,0.12);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;">🎯</div>
            <h2 style="font-size:20px; font-weight:600; margin-bottom:8px;">How to Pitch Ask Empower</h2>
            <p style="font-size:14px; color:var(--text-secondary); margin:0;">A practical playbook to position Ask Empower, run strong demos, handle objections, and win against Gong, Modjo, Fathom and Fireflies. Available in EN · FR · ES.</p>
          </NuxtLink>
          <NuxtLink to="/call-score-v2" class="landing-card landing-card-callscore">
            <div class="landing-card-icon" style="width:48px;height:48px;border-radius:12px;background:rgba(78,110,193,0.1);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;">🛡️</div>
            <h2 style="font-size:20px; font-weight:600; margin-bottom:8px;">Call Score V2 — Quality & Compliance Scorecards</h2>
            <p style="font-size:14px; color:var(--text-secondary); margin:0;">Zero-math Pass/Fail scorecards, AI-evaluated with evidence. Built for Insurance, Recruitment and Support teams enforcing standards at scale.</p>
            <div style="margin-top:12px; display:inline-flex; align-items:center; gap:6px; background:rgba(78,110,193,0.1); color:var(--accent); font-size:11px; font-weight:700; padding:3px 9px; border-radius:20px; letter-spacing:0.08em;">🛡️ PRODUCT BRIEF</div>
          </NuxtLink>
          <NuxtLink to="/framework" class="landing-card landing-card-research">
            <div class="landing-card-icon" style="width:48px;height:48px;border-radius:12px;background:rgba(24,163,38,0.1);color:#18A326;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;">🔬</div>
            <h2 style="font-size:20px; font-weight:600; margin-bottom:8px;">Framework Analysis</h2>
            <p style="font-size:14px; color:var(--text-secondary); margin:0;">Competitive market research on MEDDPICC / BANT / SPICED. How Empower Framework V1 stacks up vs Gong, Modjo, Dialpad, Aircall & Fireflies — with battlecards and demo prompts.</p>
            <div style="margin-top:12px; display:inline-flex; align-items:center; gap:6px; background:rgba(24,163,38,0.1); color:#18A326; font-size:11px; font-weight:700; padding:3px 9px; border-radius:20px; letter-spacing:0.08em;">🔬 COMPETITIVE INTEL</div>
          </NuxtLink>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <p><strong>Empower</strong> by Ringover</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
const brand = computed(() => t('common.brand'))
</script>

<style scoped>
.landing-card {
  background: var(--bg-container);
  border: 1px solid var(--border-regular);
  border-radius: 16px;
  padding: 28px;
  text-decoration: none;
  color: var(--text-primary);
  display: block;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.landing-card:hover {
  border-color: var(--accent);
  box-shadow: 0 8px 24px rgba(78, 110, 193, 0.12);
  transform: translateY(-2px);
}
.landing-card-featured {
  border-color: var(--accent);
  background: linear-gradient(135deg, #fff, rgba(78, 110, 193, 0.04));
  box-shadow: 0 0 0 1px rgba(78, 110, 193, 0.08), 0 4px 20px rgba(78, 110, 193, 0.07);
}
.landing-card-featured:hover {
  box-shadow: 0 0 0 1px var(--accent), 0 8px 28px rgba(78, 110, 193, 0.16);
}
.landing-card-research {
  border-color: rgba(24, 163, 38, 0.3);
  background: linear-gradient(135deg, #fff, rgba(24, 163, 38, 0.03));
}
.landing-card-research:hover {
  border-color: #18A326;
  box-shadow: 0 8px 24px rgba(24, 163, 38, 0.12);
}
.landing-card-callscore {
  border-color: rgba(78, 110, 193, 0.3);
  background: linear-gradient(135deg, #fff, rgba(78, 110, 193, 0.04));
}
.landing-card-callscore:hover {
  border-color: var(--accent);
  box-shadow: 0 8px 24px rgba(78, 110, 193, 0.14);
}
</style>
