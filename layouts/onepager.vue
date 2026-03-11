<template>
  <div>
    <header class="empower-nav">
      <div class="nav-brand">
        <NuxtLink to="/" class="nav-back">← All one pagers</NuxtLink>
        <span class="nav-brand-dot" />
        <span>{{ t('common.brand') }}</span>
      </div>
      <div class="nav-tabs" id="navTabs">
        <a href="#evolution" class="nav-tab" @click.prevent="scrollTo('evolution')">{{ t('nav.evolution') }}</a>
        <a href="#capabilities" class="nav-tab" @click.prevent="scrollTo('capabilities')">{{ t('nav.capabilities') }}</a>
        <a href="#usecases" class="nav-tab" @click.prevent="scrollTo('usecases')">{{ t('nav.usecases') }}</a>
        <a href="#industries" class="nav-tab" @click.prevent="scrollTo('industries')">{{ t('nav.industries') }}</a>
        <a href="#compete" class="nav-tab" @click.prevent="scrollTo('compete')">{{ t('nav.compete') }}</a>
        <a href="#pitch" class="nav-tab" @click.prevent="scrollTo('pitch')">{{ t('nav.pitch') }}</a>
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
        <span class="nav-badge">{{ t('nav.badge') }}</span>
        <button type="button" class="btn-pdf" :class="{ 'btn-pdf--loading': isGenerating }" :disabled="isGenerating" @click="downloadPdf('ask-empower.pdf')">
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
      <p v-html="t('footer.text')" />
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
