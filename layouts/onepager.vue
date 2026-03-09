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
        <button type="button" class="btn-pdf" @click="print">{{ t('common.downloadPdf') }}</button>
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
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  margin-right: 8px;
}
.nav-back:hover { color: #fff; }
</style>
