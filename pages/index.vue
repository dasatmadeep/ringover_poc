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
</style>
