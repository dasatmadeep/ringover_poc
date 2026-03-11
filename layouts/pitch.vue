<template>
  <div>
    <header class="empower-nav">
      <div class="nav-brand">
        <NuxtLink to="/" class="nav-back">← All one pagers</NuxtLink>
        <span class="nav-brand-dot" />
        <span>{{ t('common.brand') }}</span>
      </div>
      <div class="nav-tabs">
        <a href="#core"        class="nav-tab" @click.prevent="scrollTo('core')">{{ t('htp.nav.core') }}</a>
        <a href="#what"        class="nav-tab" @click.prevent="scrollTo('what')">{{ t('htp.nav.what') }}</a>
        <a href="#strengths"   class="nav-tab" @click.prevent="scrollTo('strengths')">{{ t('htp.nav.strengths') }}</a>
        <a href="#usecases"    class="nav-tab" @click.prevent="scrollTo('usecases')">{{ t('htp.nav.usecases') }}</a>
        <a href="#discovery"   class="nav-tab" @click.prevent="scrollTo('discovery')">{{ t('htp.nav.discovery') }}</a>
        <a href="#competitors" class="nav-tab" @click.prevent="scrollTo('competitors')">{{ t('htp.nav.competitors') }}</a>
        <a href="#limits"      class="nav-tab" @click.prevent="scrollTo('limits')">{{ t('htp.nav.limits') }}</a>
        <a href="#demo"        class="nav-tab" @click.prevent="scrollTo('demo')">{{ t('htp.nav.demo') }}</a>
        <a href="#faq"         class="nav-tab" @click.prevent="scrollTo('faq')">{{ t('htp.nav.faq') }}</a>
        <a href="#roadmap"     class="nav-tab" @click.prevent="scrollTo('roadmap')">{{ t('htp.nav.roadmap') }}</a>
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
        <button type="button" class="btn-pdf" :class="{ 'btn-pdf--loading': isGenerating }" :disabled="isGenerating" @click="downloadPdf('how-to-pitch-ask-empower.pdf')">
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
      <p v-html="t('htp.footer.text')" />
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
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  margin-right: 8px;
}
.nav-back:hover { color: #fff; }
</style>
