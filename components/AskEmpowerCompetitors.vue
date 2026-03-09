<template>
  <section id="compete" class="section-wrap">
    <div class="section-label">{{ t('comp.label') }}</div>
    <h2 class="section-title">{{ t('comp.title') }}</h2>
    <p class="section-sub">{{ t('comp.sub') }}</p>
    <div class="comp-slider-wrap">
      <button type="button" class="comp-arrow" aria-label="Previous" :disabled="scrollLeft <= 0" @click="scroll(-1)">‹</button>
      <div ref="sliderRef" class="comp-slider" role="region" aria-label="Competitor cards">
        <div
          v-for="c in cards"
          :key="c.id"
          class="comp-card"
          :class="c.type"
        >
          <div class="comp-name">{{ t(`comp.${c.id}.name`) }}</div>
          <div class="comp-tag-badge">{{ t(`comp.${c.id}.badge`) }}</div>
          <div class="comp-desc">{{ t(`comp.${c.id}.desc`) }}</div>
          <div class="comp-where-head">{{ t('comp.whereHead') }}</div>
          <ul class="comp-where-pts">
            <li v-for="w in c.whereCount" :key="w">{{ t(`comp.${c.id}.where${w}`) }}</li>
          </ul>
          <div class="comp-bullets-head">{{ t('comp.bulletsHead') }}</div>
          <ul class="comp-pts">
            <li v-for="l in c.liCount" :key="l">{{ t(`comp.${c.id}.li${l}`) }}</li>
          </ul>
          <div class="comp-pitch-line">{{ t(`comp.${c.id}.pitch`) }}</div>
        </div>
      </div>
      <button type="button" class="comp-arrow" aria-label="Next" :disabled="scrollRight <= 0" @click="scroll(1)">›</button>
    </div>
    <div class="comp-strategic-box" style="margin-top:16px; background:linear-gradient(135deg, rgba(127,163,254,0.08) 0%, rgba(78,110,193,0.06) 100%); border:1px solid rgba(78,110,193,0.2); border-radius:14px; padding:18px 22px;">
      <div class="comp-strategic-title" style="font-size:12px; font-weight:700; color:var(--accent); margin-bottom:8px;">{{ t('comp.strategicTitle') }}</div>
      <div class="comp-strategic-text" style="font-size:13px; color:var(--text-primary); line-height:1.6;" v-html="t('comp.strategicText')" />
      <div class="comp-norecord-text" style="font-size:12px; color:var(--text-intermediate); margin-top:10px; padding-top:10px; border-top:1px solid rgba(78,110,193,0.15);">{{ t('comp.norecordText') }}</div>
    </div>
    <div style="margin-top:16px; background:var(--white); border-radius:14px; padding:22px; border:1px solid var(--border-light);">
      <div class="moat-heading" style="font-size:13px; font-weight:700; color:var(--text-primary); margin-bottom:14px;">{{ t('comp.moatHeading') }}</div>
      <div class="moat-grid">
        <div v-for="m in 4" :key="m" class="moat-item">
          <div class="moat-icon">{{ moatIcons[m - 1] }}</div>
          <div class="moat-title">{{ t(`comp.moat${m}.title`) }}</div>
          <div class="moat-desc">{{ t(`comp.moat${m}.desc`) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const sliderRef = ref<HTMLElement | null>(null)
const scrollLeft = ref(0)
const scrollRight = ref(999)

const cards = [
  { id: 1, type: 'fight', whereCount: 4, liCount: 6 },
  { id: 2, type: 'win', whereCount: 4, liCount: 5 },
  { id: 3, type: 'mid', whereCount: 4, liCount: 6 },
  { id: 4, type: 'win', whereCount: 5, liCount: 5 },
  { id: 5, type: 'win', whereCount: 4, liCount: 5 },
  { id: 6, type: 'benchmark', whereCount: 5, liCount: 6 },
  { id: 7, type: 'mid', whereCount: 5, liCount: 5 },
]
const moatIcons = ['📞', '🌍', '🔀', '💰']

function updateArrows () {
  if (!sliderRef.value) return
  const sl = sliderRef.value
  scrollLeft.value = sl.scrollLeft
  scrollRight.value = sl.scrollWidth - sl.clientWidth - sl.scrollLeft
}

function scroll (dir: number) {
  if (!sliderRef.value) return
  const card = sliderRef.value.querySelector('.comp-card') as HTMLElement
  const step = card ? card.offsetWidth + 14 : 320
  sliderRef.value.scrollBy({ left: dir * step, behavior: 'smooth' })
}

onMounted(() => {
  if (sliderRef.value) {
    sliderRef.value.addEventListener('scroll', updateArrows)
    updateArrows()
  }
})
onUnmounted(() => {
  sliderRef.value?.removeEventListener('scroll', updateArrows)
})
</script>
