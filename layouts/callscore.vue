<template>
  <div>
    <header class="empower-nav">
      <div class="nav-brand">
        <NuxtLink to="/" class="nav-back">← All one pagers</NuxtLink>
        <span class="nav-brand-dot" />
        <span>{{ t('common.brand') }}</span>
      </div>
      <div class="nav-tabs">
        <a href="#evolution"   class="nav-tab" @click.prevent="scrollTo('evolution')">Evolution</a>
        <a href="#how-it-works" class="nav-tab" @click.prevent="scrollTo('how-it-works')">How it Works</a>
        <a href="#automation"  class="nav-tab" @click.prevent="scrollTo('automation')">Automation</a>
        <a href="#benefits"    class="nav-tab" @click.prevent="scrollTo('benefits')">Benefits</a>
        <a href="#comparison"  class="nav-tab" @click.prevent="scrollTo('comparison')">Comparison</a>
        <a href="#battlecards" class="nav-tab" @click.prevent="scrollTo('battlecards')">Battlecards</a>
        <a href="#demo"        class="nav-tab" @click.prevent="scrollTo('demo')">Demo</a>
        <a href="#offer"       class="nav-tab" @click.prevent="scrollTo('offer')">Offer</a>
      </div>
      <div class="nav-right">
        <select
          :value="locale"
          class="nav-lang"
          aria-label="Language"
          @change="setLocale(($event.target as HTMLSelectElement).value)"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="es">ES</option>
        </select>
        <button type="button" class="btn-pdf" :class="{ 'btn-pdf--loading': isGenerating }" :disabled="isGenerating" @click="downloadPdf('call-score-v2.pdf')">
          <svg v-if="isGenerating" class="btn-pdf-spinner" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="40" stroke-dashoffset="15" />
          </svg>
          {{ isGenerating ? t('common.generatingPdf') : t('common.downloadPdf') }}
        </button>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="site-footer">
      <p><strong>Call Score V2</strong> &nbsp;·&nbsp; Quality & Compliance Scorecards &nbsp;·&nbsp; <strong>Empower by Ringover</strong> &nbsp;·&nbsp; Internal use only</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
const { isGenerating, downloadPdf } = usePdfExport()

function scrollTo (id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.nav-back {
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  margin-right: 8px;
}
.nav-back:hover { color: #fff; }
</style>
