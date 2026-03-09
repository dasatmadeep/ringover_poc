<template>
  <div>
    <!-- Hero -->
    <section class="hero-onepager">
      <div class="hero-eyebrow">{{ t('hero.eyebrow') }}</div>
      <h1 v-html="t('hero.title')" />
      <p class="hero-sub">{{ t('hero.sub') }}</p>
      <div class="hero-stats">
        <div class="stat"><div class="stat-num">V1→V2</div><div class="stat-label">{{ t('hero.stat1') }}</div></div>
        <div class="stat"><div class="stat-num">1 call</div><div class="stat-label">{{ t('hero.stat2') }}</div></div>
        <div class="stat"><div class="stat-num">∞</div><div class="stat-label">{{ t('hero.stat3') }}</div></div>
        <div class="stat"><div class="stat-num">5</div><div class="stat-label">{{ t('hero.stat4') }}</div></div>
      </div>
    </section>

    <!-- Evolution -->
    <section id="evolution" class="section-wrap">
      <div class="section-label">{{ t('evo.label') }}</div>
      <h2 class="section-title">{{ t('evo.title') }}</h2>
      <p class="section-sub">{{ t('evo.sub') }}</p>
      <div class="evo-wrap">
        <div class="evo-grid">
          <div class="evo-card v1">
            <div class="evo-badge">{{ t('evo.v1.badge') }}</div>
            <div class="evo-title">{{ t('evo.v1.title') }}</div>
            <ul class="evo-list">
              <li v-for="i in 5" :key="i">{{ t(`evo.v1.li${i}`) }}</li>
            </ul>
          </div>
          <div class="evo-arrow">→</div>
          <div class="evo-card v2">
            <div class="evo-badge">{{ t('evo.v2.badge') }}</div>
            <div class="evo-title">{{ t('evo.v2.title') }}</div>
            <ul class="evo-list">
              <li v-for="i in 6" :key="i">{{ t(`evo.v2.li${i}`) }}</li>
            </ul>
          </div>
          <div class="evo-arrow">→</div>
          <div class="evo-card future">
            <div class="evo-badge">{{ t('evo.future.badge') }}</div>
            <div class="evo-title">{{ t('evo.future.title') }}</div>
            <ul class="evo-list">
              <li v-for="i in 6" :key="i">{{ t(`evo.future.li${i}`) }}</li>
            </ul>
          </div>
        </div>
        <div style="margin-top:28px">
          <div class="section-label" style="margin-bottom:12px">{{ t('evo.rmHeading') }}</div>
          <div class="rm-strip">
            <div class="rm-item">
              <div class="rm-dot done">✓</div>
              <div><div class="rm-label-title">{{ t('evo.rm1.title') }}</div><div class="rm-label-sub">{{ t('evo.rm1.sub') }}</div></div>
            </div>
            <div class="rm-line active" />
            <div class="rm-item">
              <div class="rm-dot now">2</div>
              <div><div class="rm-label-title">{{ t('evo.rm2.title') }}</div><div class="rm-label-sub">{{ t('evo.rm2.sub') }}</div></div>
            </div>
            <div class="rm-line upcoming" />
            <div class="rm-item">
              <div class="rm-dot soon">3</div>
              <div><div class="rm-label-title">{{ t('evo.rm3.title') }}</div><div class="rm-label-sub">{{ t('evo.rm3.sub') }}</div></div>
            </div>
            <div class="rm-line upcoming" />
            <div class="rm-item">
              <div class="rm-dot soon">4</div>
              <div><div class="rm-label-title">{{ t('evo.rm4.title') }}</div><div class="rm-label-sub">{{ t('evo.rm4.sub') }}</div></div>
            </div>
            <div class="rm-line upcoming" />
            <div class="rm-item">
              <div class="rm-dot next">5</div>
              <div><div class="rm-label-title">{{ t('evo.rm5.title') }}</div><div class="rm-label-sub">{{ t('evo.rm5.sub') }}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- Capabilities -->
    <section id="capabilities" class="section-wrap">
      <div class="section-label">{{ t('cap.label') }}</div>
      <h2 class="section-title">{{ t('cap.title') }}</h2>
      <p class="section-sub">{{ t('cap.sub') }}</p>
      <div class="caps-grid">
        <div v-for="n in 9" :key="n" class="cap-card">
          <div class="cap-icon">{{ capIcons[n - 1] }}</div>
          <div class="cap-title">{{ t(`cap.${n}.title`) }}</div>
          <div class="cap-desc">{{ t(`cap.${n}.desc`) }}</div>
          <span :class="['cap-tag', n === 7 ? 'april' : 'live']">{{ n === 7 ? t('cap.tagApril') : t('cap.tagLive') }}</span>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- Use cases -->
    <AskEmpowerUseCases />

    <div class="divider" />

    <!-- Industries -->
    <section id="industries" class="section-wrap">
      <div class="section-label">{{ t('ind.label') }}</div>
      <h2 class="section-title">{{ t('ind.title') }}</h2>
      <p class="section-sub">{{ t('ind.sub') }}</p>
      <div class="ind-grid">
        <div v-for="n in 3" :key="n" class="ind-card">
          <div class="ind-icon">{{ indIcons[n - 1] }}</div>
          <div class="ind-title">{{ t(`ind.${n}.title`) }}</div>
          <div class="ind-subtitle">{{ t(`ind.${n}.subtitle`) }}</div>
          <div class="ind-pitch">{{ t(`ind.${n}.pitch`) }}</div>
          <div class="ind-qs">
            <div v-for="q in 4" :key="q" class="ind-q">{{ t(`ind.${n}.q${q}`) }}</div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- Competitors -->
    <AskEmpowerCompetitors />

    <div class="divider" />

    <!-- Pitch -->
    <section id="pitch" class="section-wrap">
      <div class="section-label">{{ t('pitch.label') }}</div>
      <h2 class="section-title">{{ t('pitch.title') }}</h2>
      <p class="section-sub">{{ t('pitch.sub') }}</p>
      <div class="pitch-wrap">
        <div class="pitch-grid">
          <div>
            <div class="pitch-title">{{ t('pitch.30secTitle') }}</div>
            <div class="pitch-hero-box">
              <div class="pitch-hero-text" v-html="t('pitch.30secText')" />
            </div>
            <div class="pitch-title" style="font-size:15px; margin-bottom:12px">{{ t('pitch.hardTitle') }}</div>
            <div v-for="i in 7" :key="i" class="pitch-qa">
              <div class="pitch-qa-q" v-html="t(`pitch.qa${i}q`)" />
              <div class="pitch-qa-a" v-html="t(`pitch.qa${i}a`)" />
            </div>
          </div>
          <div>
            <div class="pitch-title">{{ t('pitch.discTitle') }}</div>
            <div v-for="i in 5" :key="i" class="disc-q">
              <div class="disc-q-label">{{ t(`pitch.disc${i}label`) }}</div>
              <div class="disc-q-text">{{ t(`pitch.disc${i}text`) }}</div>
            </div>
            <div class="warn-box">
              <div class="warn-title">{{ t('pitch.warnTitle') }}</div>
              <div class="warn-text" v-html="t('pitch.warnText')" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'onepager' })
const { t } = useI18n()

const capIcons = ['🌐', '📊', '🎯', '💬', '🏷️', '🔗', '⚡', '🧠', '✍️']
const indIcons = ['🏦', '🚀', '👔']
</script>
