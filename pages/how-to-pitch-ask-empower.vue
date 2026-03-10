<template>
  <div class="htp">

    <!-- ── HERO ── -->
    <header class="htp-hero">
      <div class="htp-container">
        <div class="htp-hero-content">
          <div class="htp-hero-eyebrow">{{ t('htp.hero.eyebrow') }}</div>
          <h1 class="htp-h1">{{ t('htp.hero.headline') }}</h1>
          <p class="htp-hero-sub">{{ t('htp.hero.sub') }}</p>
          <div class="htp-objective-grid">
            <div class="htp-obj-item" v-for="n in 6" :key="n">{{ t(`htp.hero.obj${n}`) }}</div>
          </div>
        </div>
      </div>
    </header>

    <!-- ── 1. CORE MESSAGE ── -->
    <section id="core" class="htp-section">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.core.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.core.title') }}</h2>
        </div>
        <div class="htp-quote">{{ t('htp.core.quote') }}</div>
      </div>
    </section>

    <!-- ── 2. WHAT IT IS ── -->
    <section id="what" class="htp-section htp-alt">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.what.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.what.title') }}</h2>
          <p class="htp-body-m">{{ t('htp.what.desc') }}</p>
        </div>
        <div class="htp-card" style="margin-bottom:24px;">
          <div class="htp-h4">{{ t('htp.what.canAnalyze') }}</div>
          <div class="htp-pill-list" style="margin-bottom:14px;">
            <span class="htp-pill htp-pill-accent" v-for="n in 5" :key="n">{{ t(`htp.what.pill${n}`) }}</span>
          </div>
          <p class="htp-body-s">{{ t('htp.what.caveat') }}</p>
        </div>
        <div class="htp-evo-wrap">
          <!-- V1 card -->
          <div class="htp-evo-card htp-evo-v1">
            <div class="htp-evo-badge htp-evo-badge-v1">V1 — Before</div>
            <div class="htp-h4" style="margin-top:12px; color:var(--text-secondary);">{{ t('htp.what.v1Title') }}</div>
            <ul class="htp-evo-list">
              <li v-for="n in 4" :key="n">
                <span class="htp-evo-icon htp-evo-icon-v1">✕</span>
                <span class="htp-body-s">{{ t(`htp.what.v1li${n}`) }}</span>
              </li>
            </ul>
          </div>

          <!-- Arrow -->
          <div class="htp-evo-arrow">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>

          <!-- V2 card -->
          <div class="htp-evo-card htp-evo-v2">
            <div class="htp-evo-badge htp-evo-badge-v2">V2 — Now ✦ Live</div>
            <div class="htp-h4" style="margin-top:12px; color:var(--accent);">{{ t('htp.what.v2Title') }}</div>
            <ul class="htp-evo-list">
              <li v-for="n in 5" :key="n">
                <span class="htp-evo-icon htp-evo-icon-v2">✓</span>
                <span class="htp-body-s">{{ t(`htp.what.v2li${n}`) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 3. SELL IT ACCURATELY ── -->
    <section id="how" class="htp-section">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.accurate.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.accurate.title') }}</h2>
          <p class="htp-body-m">{{ t('htp.accurate.desc') }}</p>
        </div>
        <div class="htp-grid-2" style="margin-bottom:20px;">
          <div class="htp-bad">
            <div class="htp-h4">{{ t('htp.accurate.doNotSay') }}</div>
            <p class="htp-body-m">{{ t('htp.accurate.doNotSayText') }}</p>
            <p class="htp-body-s">{{ t('htp.accurate.doNotSaySub') }}</p>
          </div>
          <div class="htp-good">
            <div class="htp-h4">{{ t('htp.accurate.sayThis') }}</div>
            <p class="htp-body-m">{{ t('htp.accurate.sayThisText') }}</p>
            <p class="htp-body-s">{{ t('htp.accurate.sayThisSub') }}</p>
          </div>
        </div>
        <div class="htp-card" style="margin-bottom:20px;">
          <div class="htp-h4">{{ t('htp.accurate.realityTitle') }}</div>
          <ul class="htp-list htp-body-s">
            <li v-for="n in 4" :key="n">{{ t(`htp.accurate.r${n}`) }}</li>
          </ul>
        </div>
        <div class="htp-warn">
          <div class="htp-h4">{{ t('htp.accurate.warnTitle') }}</div>
          <p class="htp-body-m">{{ t('htp.accurate.warnText') }}</p>
        </div>
      </div>
    </section>

    <!-- ── 4. PROMPTING RULES ── -->
    <section id="prompts" class="htp-section htp-alt">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.prompts.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.prompts.title') }}</h2>
          <p class="htp-body-m">{{ t('htp.prompts.desc') }}</p>
        </div>
        <div class="htp-grid-2" style="margin-bottom:20px;">
          <div class="htp-card">
            <div class="htp-h4">{{ t('htp.prompts.doTitle') }}</div>
            <ul class="htp-list htp-body-s">
              <li v-for="n in 5" :key="n">{{ t(`htp.prompts.doli${n}`) }}</li>
            </ul>
          </div>
          <div class="htp-card">
            <div class="htp-h4">{{ t('htp.prompts.avoidTitle') }}</div>
            <ul class="htp-list htp-body-s">
              <li v-for="n in 4" :key="n">{{ t(`htp.prompts.ali${n}`) }}</li>
            </ul>
          </div>
        </div>
        <div class="htp-grid-2" style="margin-bottom:20px;">
          <div class="htp-tip">
            <div class="htp-h4">{{ t('htp.prompts.badTitle') }}</div>
            <p class="htp-body-m">{{ t('htp.prompts.badText') }}</p>
            <p class="htp-body-s">{{ t('htp.prompts.badSub') }}</p>
          </div>
          <div class="htp-good">
            <div class="htp-h4">{{ t('htp.prompts.goodTitle') }}</div>
            <p class="htp-body-m">{{ t('htp.prompts.goodText') }}</p>
            <p class="htp-body-s">{{ t('htp.prompts.goodSub') }}</p>
          </div>
        </div>
        <div class="htp-card">
          <div class="htp-h4">{{ t('htp.prompts.transcriptTitle') }}</div>
          <p class="htp-body-m" style="margin-bottom:12px;">{{ t('htp.prompts.transcriptDesc') }}</p>
          <div class="htp-grid-2">
            <div class="htp-good"><p class="htp-body-m">{{ t('htp.prompts.transcriptWorks') }}</p></div>
            <div class="htp-bad"><p class="htp-body-m">{{ t('htp.prompts.transcriptFail') }}</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 5. STRENGTHS ── -->
    <section id="strengths" class="htp-section">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.strengths.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.strengths.title') }}</h2>
        </div>
        <div class="htp-grid-4">
          <div v-for="(s, i) in strengthColors" :key="i" class="htp-card htp-strength-card" :style="``">
            <div class="htp-strength-icon" :style="`background:${s.bg};color:${s.color};`">{{ s.icon }}</div>
            <div class="htp-h4">{{ t(`htp.strengths.s${i+1}Title`) }}</div>
            <p class="htp-body-s">{{ t(`htp.strengths.s${i+1}Desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 6. USE CASES ── -->
    <section id="usecases" class="htp-section htp-alt">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.usecases.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.usecases.title') }}</h2>
        </div>

        <div class="htp-uc-layout">
          <!-- Left: vertical persona list -->
          <div class="htp-uc-sidebar">
            <button
              v-for="(uc, i) in useCaseSlides"
              :key="i"
              :class="['htp-uc-tab', { active: ucSlide === i }]"
              @click="ucSlide = i"
            >
              <span class="htp-uc-tab-icon">{{ uc.icon }}</span>
              <span class="htp-uc-tab-label">{{ t(`htp.usecases.${uc.key}.title`) }}</span>
              <svg v-if="ucSlide === i" class="htp-uc-tab-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <!-- Right: content panel -->
          <div class="htp-uc-panel">
            <template v-for="(uc, i) in useCaseSlides" :key="i">
              <div v-if="ucSlide === i" class="htp-uc-content">
                <div class="htp-uc-panel-header">
                  <span class="htp-uc-panel-icon">{{ uc.icon }}</span>
                  <span class="htp-h3">{{ t(`htp.usecases.${uc.key}.title`) }}</span>
                </div>
                <ul class="htp-uc-questions">
                  <li v-for="n in uc.items" :key="n">
                    <span class="htp-uc-q-dot" />
                    <span class="htp-body-m">{{ t(`htp.usecases.${uc.key}.li${n}`) }}</span>
                  </li>
                </ul>
                <div class="htp-tip" style="margin-top:20px;">
                  <p class="htp-body-s"><strong>💡</strong> {{ t(`htp.usecases.${uc.key}.tip`) }}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 7. DISCOVERY TO DEMO ── -->
    <section id="discovery" class="htp-section">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.discovery.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.discovery.title') }}</h2>
        </div>
        <div class="htp-grid-2">
          <div class="htp-card">
            <div class="htp-h4">{{ t('htp.discovery.qTitle') }}</div>
            <ul class="htp-disc-list">
              <li v-for="n in 7" :key="n">
                <span class="htp-disc-num">{{ n }}</span>
                <span>{{ t(`htp.discovery.q${n}`) }}</span>
              </li>
            </ul>
          </div>
          <div class="htp-card">
            <div class="htp-h4">{{ t('htp.discovery.bridgeTitle') }}</div>
            <p class="htp-body-m" style="margin-bottom:12px;">{{ t('htp.discovery.bridgeUse') }}</p>
            <div class="htp-quote">{{ t('htp.discovery.bridgeQuote') }}</div>
            <p class="htp-body-s" style="margin-top:12px;">{{ t('htp.discovery.bridgeSub') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 8. COMPETITOR CAROUSEL ── -->
    <section id="competitors" class="htp-section htp-alt">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.comp.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.comp.title') }}</h2>
        </div>

        <!-- Desktop: 3-col grid -->
        <div class="htp-comp-grid htp-hide-mobile">
          <div class="htp-card">
            <div class="htp-comp-header">
              <div class="htp-h4">{{ t('htp.comp.notetakers.title') }}</div>
              <span class="htp-chip htp-chip-win">{{ t('htp.comp.notetakers.badge') }}</span>
            </div>
            <p class="htp-body-s htp-muted" style="margin-bottom:10px;">{{ t('htp.comp.notetakers.examples') }}</p>
            <ul class="htp-list htp-body-s" style="margin-bottom:14px;">
              <li v-for="n in 3" :key="n">{{ t(`htp.comp.notetakers.li${n}`) }}</li>
            </ul>
            <div class="htp-quote" style="font-size:13px;"><strong>Pitch:</strong> {{ t('htp.comp.notetakers.pitch') }}</div>
          </div>
          <div class="htp-card">
            <div class="htp-comp-header">
              <div class="htp-h4">{{ t('htp.comp.revenue.title') }}</div>
              <span class="htp-chip htp-chip-fight">{{ t('htp.comp.revenue.badge') }}</span>
            </div>
            <p class="htp-body-s htp-muted" style="margin-bottom:10px;">{{ t('htp.comp.revenue.examples') }}</p>
            <ul class="htp-list htp-body-s" style="margin-bottom:14px;">
              <li v-for="n in 3" :key="n">{{ t(`htp.comp.revenue.li${n}`) }}</li>
            </ul>
            <div class="htp-quote" style="font-size:13px;"><strong>Pitch:</strong> {{ t('htp.comp.revenue.pitch') }}</div>
          </div>
          <div class="htp-card htp-empower-card">
            <div class="htp-comp-header">
              <div class="htp-h4" style="color:var(--accent);">{{ t('htp.comp.empower.title') }}</div>
              <span class="htp-chip htp-chip-accent">{{ t('htp.comp.empower.badge') }}</span>
            </div>
            <ul class="htp-list htp-body-s">
              <li v-for="n in 5" :key="n">{{ t(`htp.comp.empower.li${n}`) }}</li>
            </ul>
          </div>
        </div>

        <!-- Mobile: carousel -->
        <div class="htp-show-mobile">
          <div class="htp-carousel-wrap">
            <div class="htp-carousel-track" :style="`transform: translateX(-${compSlide * 100}%)`">
              <div class="htp-carousel-slide">
                <div class="htp-card">
                  <div class="htp-comp-header">
                    <div class="htp-h4">{{ t('htp.comp.notetakers.title') }}</div>
                    <span class="htp-chip htp-chip-win">{{ t('htp.comp.notetakers.badge') }}</span>
                  </div>
                  <p class="htp-body-s htp-muted">{{ t('htp.comp.notetakers.examples') }}</p>
                  <ul class="htp-list htp-body-s" style="margin:10px 0;"><li v-for="n in 3" :key="n">{{ t(`htp.comp.notetakers.li${n}`) }}</li></ul>
                  <div class="htp-quote" style="font-size:13px;"><strong>Pitch:</strong> {{ t('htp.comp.notetakers.pitch') }}</div>
                </div>
              </div>
              <div class="htp-carousel-slide">
                <div class="htp-card">
                  <div class="htp-comp-header">
                    <div class="htp-h4">{{ t('htp.comp.revenue.title') }}</div>
                    <span class="htp-chip htp-chip-fight">{{ t('htp.comp.revenue.badge') }}</span>
                  </div>
                  <p class="htp-body-s htp-muted">{{ t('htp.comp.revenue.examples') }}</p>
                  <ul class="htp-list htp-body-s" style="margin:10px 0;"><li v-for="n in 3" :key="n">{{ t(`htp.comp.revenue.li${n}`) }}</li></ul>
                  <div class="htp-quote" style="font-size:13px;"><strong>Pitch:</strong> {{ t('htp.comp.revenue.pitch') }}</div>
                </div>
              </div>
              <div class="htp-carousel-slide">
                <div class="htp-card htp-empower-card">
                  <div class="htp-comp-header">
                    <div class="htp-h4" style="color:var(--accent);">{{ t('htp.comp.empower.title') }}</div>
                    <span class="htp-chip htp-chip-accent">{{ t('htp.comp.empower.badge') }}</span>
                  </div>
                  <ul class="htp-list htp-body-s"><li v-for="n in 5" :key="n">{{ t(`htp.comp.empower.li${n}`) }}</li></ul>
                </div>
              </div>
            </div>
          </div>
          <div class="htp-carousel-nav">
            <button class="htp-carousel-arrow" @click="compSlide = Math.max(0, compSlide - 1)" :disabled="compSlide === 0">‹</button>
            <div class="htp-dots">
              <button v-for="i in 3" :key="i" :class="['htp-dot', { active: compSlide === i - 1 }]" @click="compSlide = i - 1" />
            </div>
            <button class="htp-carousel-arrow" @click="compSlide = Math.min(2, compSlide + 1)" :disabled="compSlide === 2">›</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 9. LIMITATIONS ── -->
    <section id="limits" class="htp-section">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow" style="color:var(--danger);">{{ t('htp.limits.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.limits.title') }}</h2>
          <p class="htp-body-m">{{ t('htp.limits.desc') }}</p>
        </div>
        <div class="htp-grid-2" style="margin-bottom:24px;">
          <div class="htp-bad">
            <div class="htp-h4">{{ t('htp.limits.notYetTitle') }}</div>
            <ul class="htp-list htp-body-s">
              <li v-for="n in 5" :key="n">{{ t(`htp.limits.ny${n}`) }}</li>
            </ul>
          </div>
          <div class="htp-good">
            <div class="htp-h4">{{ t('htp.limits.strongTitle') }}</div>
            <ul class="htp-list htp-body-s">
              <li v-for="n in 5" :key="n">{{ t(`htp.limits.st${n}`) }}</li>
            </ul>
          </div>
        </div>
        <div class="htp-tip">
          <div class="htp-h4">{{ t('htp.limits.bestLine') }}</div>
          <p class="htp-body-m">{{ t('htp.limits.bestLineText') }}</p>
        </div>
      </div>
    </section>

    <!-- ── 10. DEMO TECHNIQUE (dark) ── -->
    <section id="demo" class="htp-section htp-dark">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow" style="color:rgba(127,163,254,.75);">{{ t('htp.demo.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.demo.title') }}</h2>
          <p class="htp-body-m">{{ t('htp.demo.desc') }}</p>
        </div>
        <div class="htp-dark-card" style="margin-bottom:20px;">
          <div class="htp-h4">{{ t('htp.demo.formulaTitle') }}</div>
          <p class="htp-body-m" style="font-weight:600;margin-bottom:8px;">{{ t('htp.demo.formulaText') }}</p>
          <p class="htp-body-s">{{ t('htp.demo.formulaEx') }}</p>
        </div>
        <div class="htp-grid-2">
          <div class="htp-dark-card">
            <div class="htp-h4">{{ t('htp.demo.mistakeTitle') }}</div>
            <p class="htp-body-m">{{ t('htp.demo.mistakeText') }}</p>
            <p class="htp-body-s">{{ t('htp.demo.mistakeSub') }}</p>
          </div>
          <div class="htp-dark-card">
            <div class="htp-h4">{{ t('htp.demo.betterTitle') }}</div>
            <p class="htp-body-m">{{ t('htp.demo.betterText') }}</p>
            <p class="htp-body-s">{{ t('htp.demo.betterSub') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 11. FAQ ── -->
    <section id="faq" class="htp-section htp-alt">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.faq.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.faq.title') }}</h2>
        </div>
        <div class="htp-grid-2">
          <div class="htp-card" v-for="n in 6" :key="n">
            <div class="htp-h4">{{ t(`htp.faq.q${n}`) }}</div>
            <p class="htp-body-s">{{ t(`htp.faq.a${n}`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 12. ROADMAP ── -->
    <section id="roadmap" class="htp-section">
      <div class="htp-container">
        <div class="htp-section-header">
          <span class="htp-eyebrow">{{ t('htp.roadmap.label') }}</span>
          <h2 class="htp-h2">{{ t('htp.roadmap.title') }}</h2>
        </div>

        <!-- Timeline track -->
        <div class="htp-rm-track">
          <!-- Connector line -->
          <div class="htp-rm-line">
            <div class="htp-rm-line-fill" />
          </div>

          <!-- Stage 1: Now -->
          <div class="htp-rm-stage">
            <div class="htp-rm-node htp-rm-node-done">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="htp-rm-card htp-rm-card-done">
              <div class="htp-rm-badge htp-rm-badge-done">{{ t('htp.roadmap.nowBadge') }}</div>
              <div class="htp-h4" style="margin-top:12px;">{{ t('htp.roadmap.nowTitle') }}</div>
              <p class="htp-body-m" style="margin-bottom:8px;">{{ t('htp.roadmap.nowText') }}</p>
              <p class="htp-body-s">{{ t('htp.roadmap.nowSub') }}</p>
            </div>
          </div>

          <!-- Stage 2: Next -->
          <div class="htp-rm-stage">
            <div class="htp-rm-node htp-rm-node-next">2</div>
            <div class="htp-rm-card htp-rm-card-next">
              <div class="htp-rm-badge htp-rm-badge-next">{{ t('htp.roadmap.nextBadge') }}</div>
              <div class="htp-h4" style="margin-top:12px;">{{ t('htp.roadmap.nextTitle') }}</div>
              <p class="htp-body-m" style="margin-bottom:8px;">{{ t('htp.roadmap.nextText') }}</p>
              <p class="htp-body-s">{{ t('htp.roadmap.nextSub') }}</p>
            </div>
          </div>

          <!-- Stage 3: Vision -->
          <div class="htp-rm-stage">
            <div class="htp-rm-node htp-rm-node-vision">3</div>
            <div class="htp-rm-card htp-rm-card-vision">
              <div class="htp-rm-badge htp-rm-badge-vision">{{ t('htp.roadmap.visionBadge') }}</div>
              <div class="htp-h4" style="margin-top:12px;">{{ t('htp.roadmap.visionTitle') }}</div>
              <p class="htp-body-m" style="margin-bottom:8px;font-weight:600;">{{ t('htp.roadmap.visionText') }}</p>
              <p class="htp-body-s">{{ t('htp.roadmap.visionSub') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'pitch' })

const { t } = useI18n()

useHead({ title: computed(() => t('htp.pageTitle')) })

const ucSlide = ref(0)
const compSlide = ref(0)

const strengthColors = [
  { color: 'var(--accent)',            bg: 'var(--accent-light)',          icon: '🏢' },
  { color: 'var(--dynamic-purple-fg)', bg: 'var(--dynamic-purple-bg)',     icon: '💬' },
  { color: 'var(--dynamic-teal-fg)',   bg: 'var(--dynamic-teal-bg)',       icon: '📡' },
  { color: 'var(--dynamic-orange-fg)', bg: 'var(--dynamic-orange-bg)',     icon: '🔒' },
]

const useCaseSlides = [
  { key: 'salesRep',  icon: '💼', items: 4, fg: 'var(--accent)',            bg: 'var(--accent-light)' },
  { key: 'manager',   icon: '📈', items: 8, fg: 'var(--dynamic-purple-fg)', bg: 'var(--dynamic-purple-bg)' },
  { key: 'support',   icon: '🎧', items: 1, fg: 'var(--dynamic-orange-fg)', bg: 'var(--dynamic-orange-bg)' },
  { key: 'recruiter', icon: '👥', items: 3, fg: 'var(--dynamic-green-fg)',  bg: 'var(--dynamic-green-bg)' },
  { key: 'coach',     icon: '🏆', items: 3, fg: 'var(--warning)',           bg: 'var(--warning-light)' },
]
</script>

<style>
/* ── Variables scoped to .htp ── */
.htp {
  --htp-dynamic-teal-bg: #C5F0F3;
  --htp-dynamic-teal-fg: #0E6E78;
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  color: var(--text-primary);
  background: var(--bg-grey-light);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

/* ── Container & base ── */
.htp-container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
.htp-section { padding: 72px 0; border-bottom: 1px solid var(--border-light); }
.htp-alt { background: var(--bg-container); }
.htp-section-header { max-width: 820px; margin-bottom: 36px; }

/* ── Typography ── */
.htp-h1 { font-size: 54px; line-height: 62px; font-weight: 800; letter-spacing: -0.03em; color: var(--text-inverted-primary); margin: 16px 0 24px; }
.htp-h2 { font-size: 34px; line-height: 42px; font-weight: 700; color: var(--text-primary); margin-bottom: 12px; }
.htp-h3 { font-size: 22px; line-height: 30px; font-weight: 700; margin-bottom: 10px; }
.htp-h4 { font-size: 18px; line-height: 26px; font-weight: 700; margin-bottom: 10px; }
.htp-body-m { font-size: 16px; line-height: 24px; color: var(--text-intermediate); }
.htp-body-s { font-size: 14px; line-height: 22px; color: var(--text-secondary); }
.htp-eyebrow { font-size: 12px; line-height: 16px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); display: inline-block; margin-bottom: 12px; }
.htp-muted { color: var(--text-secondary); }

/* ── Grids ── */
.htp-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.htp-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

/* ── NAV ── */
.htp-nav { position: sticky; top: 0; background: rgba(255,255,255,0.96); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-regular); z-index: 100; }
.htp-nav-inner { display: flex; align-items: center; height: 60px; gap: 16px; justify-content: space-between; }
.htp-nav-brand { display: flex; align-items: center; gap: 6px; text-decoration: none; flex-shrink: 0; }
.htp-brand-name { font-size: 16px; font-weight: 700; color: var(--accent); }
.htp-brand-sep { color: var(--border-accentued); }
.htp-brand-sub { font-size: 13px; color: var(--text-secondary); }
.htp-nav-links { display: flex; gap: 2px; align-items: center; flex: 1; justify-content: center; overflow-x: auto; scrollbar-width: none; }
.htp-nav-links::-webkit-scrollbar { display: none; }
.htp-nav-links a { text-decoration: none; color: var(--text-intermediate); font-size: 12px; font-weight: 500; padding: 5px 9px; border-radius: 6px; transition: color 0.15s, background 0.15s; white-space: nowrap; }
.htp-nav-links a:hover { color: var(--accent); background: var(--accent-light); }
.htp-nav-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.htp-lang { display: flex; border: 1px solid var(--border-regular); border-radius: 6px; overflow: hidden; }
.htp-lang button { background: none; border: none; padding: 5px 9px; font-size: 11px; font-weight: 700; color: var(--text-secondary); cursor: pointer; font-family: inherit; transition: all 0.15s; }
.htp-lang button:not(:last-child) { border-right: 1px solid var(--border-regular); }
.htp-lang button.active { background: var(--accent); color: #fff; }
.htp-lang button:hover:not(.active) { background: var(--bg-grey-regular); color: var(--text-primary); }
.htp-btn-pdf { display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px; background: var(--accent); color: #fff; border: none; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer; font-family: inherit; transition: background 0.15s; }
.htp-btn-pdf:hover { background: var(--accent-hover); }

/* ── HERO ── */
.htp-hero { background: var(--bg-inverted); padding: 96px 0 80px; position: relative; overflow: hidden; }
.htp-hero::before { content: ''; position: absolute; width: 900px; height: 900px; top: -340px; left: 50%; transform: translateX(-50%); background: radial-gradient(circle, rgba(127,163,254,.14) 0%, transparent 68%); pointer-events: none; }
.htp-hero-content { position: relative; z-index: 1; text-align: center; }
.htp-hero-eyebrow { display: inline-flex; padding: 7px 16px; border-radius: 999px; background: rgba(127,163,254,0.1); border: 1px solid rgba(127,163,254,0.25); font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--brand); margin-bottom: 24px; }
.htp-hero-sub { max-width: 760px; margin: 0 auto 40px; font-size: 17px; line-height: 27px; color: rgba(255,255,255,.68); }
.htp-objective-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; max-width: 980px; margin: 0 auto; }
.htp-obj-item { text-align: left; padding: 14px 16px; border-radius: 12px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.82); font-size: 13px; font-weight: 500; }

/* ── Cards ── */
.htp-card { background: var(--bg-container); border: 1px solid var(--border-regular); border-radius: 14px; padding: 24px; }
.htp-card-accent { border: 1px solid var(--accent); box-shadow: 0 0 0 1px rgba(78,110,193,.08); }
.htp-empower-card { border: 1px solid var(--accent); background: linear-gradient(135deg, #fff, rgba(78,110,193,.04)); }

/* ── V1 → V2 Evolution ── */
.htp-evo-wrap { display: grid; grid-template-columns: 1fr 40px 1fr; align-items: center; gap: 16px; }
.htp-evo-arrow { display: flex; align-items: center; justify-content: center; color: var(--accent); opacity: 0.5; flex-shrink: 0; }
.htp-evo-card { border-radius: 14px; padding: 24px; border: 1px solid var(--border-regular); height: 100%; }
.htp-evo-v1 { background: var(--bg-grey-regular); opacity: 0.72; }
.htp-evo-v2 { background: linear-gradient(135deg, #fff 60%, rgba(78,110,193,.05)); border-color: var(--accent); box-shadow: 0 0 0 1px rgba(78,110,193,.1), 0 8px 28px rgba(78,110,193,.1); }
.htp-evo-badge { display: inline-flex; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
.htp-evo-badge-v1 { background: var(--bg-container); color: var(--text-secondary); border: 1px solid var(--border-regular); }
.htp-evo-badge-v2 { background: var(--accent); color: #fff; }
.htp-evo-list { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 8px; }
.htp-evo-list li { display: flex; align-items: flex-start; gap: 8px; }
.htp-evo-icon { width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 900; flex-shrink: 0; margin-top: 2px; }
.htp-evo-icon-v1 { background: rgba(229,37,23,.1); color: var(--danger); }
.htp-evo-icon-v2 { background: rgba(24,163,38,.12); color: var(--success); }

/* ── Colored blocks ── */
.htp-good { border-radius: 12px; padding: 20px; border: 1px solid rgba(24,163,38,.15); background: var(--success-light); }
.htp-bad  { border-radius: 12px; padding: 20px; border: 1px solid rgba(229,37,23,.15); background: var(--danger-light); }
.htp-tip  { border-radius: 12px; padding: 20px; border: 1px solid rgba(78,110,193,.15); background: var(--accent-light); }
.htp-warn { border-radius: 12px; padding: 20px; border: 1px solid rgba(255,135,38,.15); background: var(--warning-light); }
.htp-good .htp-h4 { color: var(--success); }
.htp-bad  .htp-h4 { color: var(--danger); }
.htp-tip  .htp-h4 { color: var(--accent); }
.htp-warn .htp-h4 { color: var(--warning); }

/* ── Quote ── */
.htp-quote { padding: 18px 20px; border-left: 4px solid var(--accent); background: var(--accent-light); border-radius: 0 10px 10px 0; color: var(--accent-active); font-style: italic; font-weight: 500; font-size: 16px; line-height: 26px; }

/* ── Pills ── */
.htp-pill-list { display: flex; flex-wrap: wrap; gap: 8px; }
.htp-pill { display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 999px; background: var(--bg-grey-regular); border: 1px solid var(--border-regular); font-size: 13px; color: var(--text-intermediate); font-weight: 500; }
.htp-pill-accent { background: var(--accent-light); border-color: transparent; color: var(--accent); }

/* ── List ── */
.htp-list { padding-left: 20px; display: grid; gap: 6px; }
.htp-list li { font-size: 14px; }

/* ── Strengths ── */
.htp-strength-card { display: flex; flex-direction: column; gap: 10px; }
.htp-strength-icon { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 10px; font-size: 22px; margin-bottom: 4px; }

/* ── Use Cases vertical layout ── */
.htp-uc-layout { display: grid; grid-template-columns: 220px 1fr; gap: 24px; align-items: start; }
.htp-uc-sidebar { display: flex; flex-direction: column; gap: 4px; }
.htp-uc-tab {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; border-radius: 10px;
  border: 1px solid transparent;
  background: var(--bg-grey-regular); cursor: pointer; font-family: inherit;
  font-size: 14px; font-weight: 500; color: var(--text-intermediate);
  transition: all 0.18s; text-align: left; width: 100%;
}
.htp-uc-tab:hover { background: var(--bg-container); border-color: var(--border-regular); }
.htp-uc-tab.active { background: var(--bg-container); border-color: var(--border-regular); color: var(--text-primary); font-weight: 700; }
.htp-uc-tab-icon { font-size: 18px; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: var(--bg-grey-regular); flex-shrink: 0; }
.htp-uc-tab-label { flex: 1; }
.htp-uc-tab-arrow { flex-shrink: 0; opacity: 0.4; }
.htp-uc-panel { background: var(--bg-container); border-radius: 14px; min-height: 300px; box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04); }
.htp-uc-content { padding: 28px; border-radius: 14px; }
.htp-uc-panel-header { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.htp-uc-panel-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0; background: var(--bg-grey-regular); }
.htp-uc-questions { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.htp-uc-questions li { display: flex; align-items: flex-start; gap: 10px; }
.htp-uc-q-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 8px; background: var(--border-accentued); }

/* ── Carousel (competitor only) ── */
.htp-carousel-wrap { overflow: hidden; border-radius: 14px; }
.htp-carousel-track { display: flex; transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.htp-carousel-slide { flex: 0 0 100%; min-width: 0; }
.htp-carousel-nav { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 20px; }
.htp-carousel-arrow { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--border-regular); background: var(--bg-container); font-size: 20px; line-height: 1; cursor: pointer; color: var(--text-intermediate); transition: all 0.15s; display: flex; align-items: center; justify-content: center; }
.htp-carousel-arrow:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
.htp-carousel-arrow:disabled { opacity: 0.35; cursor: default; }
.htp-dots { display: flex; gap: 6px; align-items: center; }
.htp-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border-accentued); border: none; cursor: pointer; padding: 0; transition: all 0.15s; }
.htp-dot.active { background: var(--accent); width: 20px; border-radius: 4px; }

/* ── Competitors ── */
.htp-comp-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
.htp-comp-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 8px; }
.htp-chip { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; white-space: nowrap; flex-shrink: 0; }
.htp-chip-win   { background: var(--success-light); color: var(--success); }
.htp-chip-fight { background: var(--warning-light); color: var(--warning); }
.htp-chip-accent { background: var(--accent-light); color: var(--accent); }

/* ── Discovery list ── */
.htp-disc-list { list-style: none; padding: 0; display: grid; gap: 10px; margin-top: 12px; }
.htp-disc-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--text-intermediate); }
.htp-disc-num { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: var(--accent-light); color: var(--accent); font-size: 12px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }

/* ── Roadmap timeline ── */
.htp-rm-track { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding-top: 28px; }
.htp-rm-line { position: absolute; top: 44px; left: calc(16.66% + 12px); right: calc(16.66% + 12px); height: 3px; background: var(--border-regular); border-radius: 3px; z-index: 0; }
.htp-rm-line-fill { height: 100%; width: 33%; background: var(--success); border-radius: 3px; }
.htp-rm-stage { display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1; }
.htp-rm-node { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; margin-bottom: 20px; flex-shrink: 0; }
.htp-rm-node-done { background: var(--success); color: #fff; box-shadow: 0 0 0 5px rgba(24,163,38,.12); }
.htp-rm-node-next { background: var(--warning); color: #fff; box-shadow: 0 0 0 5px rgba(255,135,38,.12); }
.htp-rm-node-vision { background: var(--bg-grey-regular); color: var(--text-secondary); border: 2px dashed var(--border-accentued); }
.htp-rm-card { border-radius: 14px; padding: 20px; width: 100%; text-align: left; border: 1px solid var(--border-regular); }
.htp-rm-card-done { background: var(--bg-container); border-color: rgba(24,163,38,.25); box-shadow: 0 0 0 1px rgba(24,163,38,.06), 0 4px 16px rgba(24,163,38,.06); }
.htp-rm-card-next { background: var(--bg-container); border-color: rgba(255,135,38,.25); box-shadow: 0 0 0 1px rgba(255,135,38,.06), 0 4px 16px rgba(255,135,38,.06); }
.htp-rm-card-vision { background: var(--bg-grey-regular); border-style: dashed; }
.htp-rm-badge { display: inline-flex; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
.htp-rm-badge-done { background: rgba(24,163,38,.12); color: var(--success); }
.htp-rm-badge-next { background: rgba(255,135,38,.12); color: var(--warning); }
.htp-rm-badge-vision { background: var(--bg-container); color: var(--text-secondary); border: 1px solid var(--border-regular); }

/* ── Dark section ── */
.htp-dark { background: var(--accent-active); color: #fff; border-bottom: none; }
.htp-dark .htp-h2 { color: #fff; }
.htp-dark .htp-h4 { color: #fff; }
.htp-dark .htp-body-m { color: rgba(255,255,255,.75); }
.htp-dark .htp-body-s { color: rgba(255,255,255,.55); }
.htp-dark-card { padding: 20px 24px; border-radius: 12px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); }

/* ── Footer ── */
.htp-footer { background: var(--bg-inverted); padding: 48px 0; }
.htp-footer-badge { display: inline-flex; padding: 6px 14px; border-radius: 999px; background: rgba(229,37,23,.1); border: 1px solid rgba(229,37,23,.22); color: #FF8B7F; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }

/* ── Show/hide helpers ── */
.htp-hide-mobile { display: grid; }
.htp-show-mobile { display: none; }

/* ── Responsive ── */
@media (max-width: 960px) {
  .htp-h1 { font-size: 40px; line-height: 48px; }
  .htp-container { padding: 0 20px; }
  .htp-grid-2, .htp-grid-4, .htp-comp-grid, .htp-objective-grid { grid-template-columns: 1fr; }
  .htp-objective-grid { grid-template-columns: 1fr 1fr; }
  .htp-evo-wrap { grid-template-columns: 1fr; }
  .htp-evo-arrow { transform: rotate(90deg); }
  .htp-rm-track { grid-template-columns: 1fr; gap: 16px; padding-top: 0; }
  .htp-rm-line { display: none; }
  .htp-rm-stage { flex-direction: row; align-items: flex-start; gap: 16px; text-align: left; }
  .htp-rm-node { margin-bottom: 0; flex-shrink: 0; }
  .htp-rm-card { flex: 1; }
  .htp-hide-mobile { display: none; }
  .htp-show-mobile { display: block; }
  .htp-nav-links { display: none; }
  .htp-nav-inner { height: auto; padding: 10px 0; }
  .htp-uc-layout { grid-template-columns: 1fr; }
  .htp-uc-sidebar { flex-direction: row; flex-wrap: wrap; gap: 6px; }
  .htp-uc-tab { flex: 0 0 auto; width: auto; border-left-width: 1px; border-bottom: 3px solid transparent; border-radius: 8px; padding: 10px 14px; }
  .htp-uc-tab.active { border-bottom-color: inherit; }
  .htp-uc-tab-arrow { display: none; }
}
@media (max-width: 640px) {
  .htp-h1 { font-size: 32px; line-height: 40px; }
  .htp-h2 { font-size: 26px; line-height: 34px; }
  .htp-section { padding: 52px 0; }
  .htp-hero { padding: 64px 0 52px; }
  .htp-objective-grid { grid-template-columns: 1fr; }
  .htp-uc-tab-label { font-size: 12px; }
  .htp-uc-content { padding: 20px 16px; }
}
</style>
