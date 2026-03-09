<template>
  <div>
    <header class="empower-nav">
      <div class="nav-brand">
        <NuxtLink to="/" class="nav-back">← All one pagers</NuxtLink>
        <span class="nav-brand-dot" />
        <span>{{ t('common.brand') }}</span>
      </div>
      <div class="nav-tabs">
        <a href="#overview" class="nav-tab" @click.prevent="scrollTo('overview')">{{ t('feature.navOverview') }}</a>
        <a href="#equation" class="nav-tab" @click.prevent="scrollTo('equation')">{{ t('feature.navEquation') }}</a>
        <a href="#problems" class="nav-tab" @click.prevent="scrollTo('problems')">{{ t('feature.navProblems') }}</a>
        <a href="#drivers" class="nav-tab" @click.prevent="scrollTo('drivers')">{{ t('feature.navDrivers') }}</a>
        <a href="#impact" class="nav-tab" @click.prevent="scrollTo('impact')">{{ t('feature.navImpact') }}</a>
        <a href="#features" class="nav-tab" @click.prevent="scrollTo('features')">{{ t('feature.navFeatures') }}</a>
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
        <button type="button" class="btn-pdf" @click="print">{{ t('common.downloadPdf') }}</button>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="site-footer">
      <p v-html="t('feature.footer')" />
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

function scrollTo (id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function print () {
  if (import.meta.client) window.print()
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
