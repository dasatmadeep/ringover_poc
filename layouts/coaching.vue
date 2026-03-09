<template>
  <div>
    <header class="empower-nav">
      <div class="nav-brand">
        <NuxtLink to="/" class="nav-back">← All one pagers</NuxtLink>
        <span class="nav-brand-dot" />
        <span>{{ t('common.brand') }}</span>
      </div>
      <div class="nav-tabs">
        <a href="#problem"    class="nav-tab" @click.prevent="scrollTo('problem')">{{ t('coaching.navProblem') }}</a>
        <a href="#skills"     class="nav-tab" @click.prevent="scrollTo('skills')">{{ t('coaching.navSkills') }}</a>
        <a href="#loop"       class="nav-tab" @click.prevent="scrollTo('loop')">{{ t('coaching.navLoop') }}</a>
        <a href="#industries" class="nav-tab" @click.prevent="scrollTo('industries')">{{ t('coaching.navIndustries') }}</a>
        <a href="#compete"    class="nav-tab" @click.prevent="scrollTo('compete')">{{ t('coaching.navCompete') }}</a>
        <a href="#pitch"      class="nav-tab" @click.prevent="scrollTo('pitch')">{{ t('coaching.navPitch') }}</a>
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
      <p v-html="t('coaching.footer')" />
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
