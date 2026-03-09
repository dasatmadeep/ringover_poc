<template>
  <div>
    <!-- Hero -->
    <section class="hero-onepager">
      <div class="hero-eyebrow">{{ t('coaching.heroEyebrow') }}</div>
      <h1 v-html="t('coaching.heroH1')" />
      <p class="hero-sub">{{ t('coaching.heroSub') }}</p>
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-num">{{ t('coaching.stat1Num') }}</div>
          <div class="stat-label">{{ t('coaching.stat1Label') }}</div>
        </div>
        <div class="stat">
          <div class="stat-num">{{ t('coaching.stat2Num') }}</div>
          <div class="stat-label">{{ t('coaching.stat2Label') }}</div>
        </div>
        <div class="stat">
          <div class="stat-num">{{ t('coaching.stat3Num') }}</div>
          <div class="stat-label">{{ t('coaching.stat3Label') }}</div>
        </div>
        <div class="stat">
          <div class="stat-num">{{ t('coaching.stat4Num') }}</div>
          <div class="stat-label">{{ t('coaching.stat4Label') }}</div>
        </div>
      </div>
    </section>

    <!-- The Problem -->
    <section id="problem" class="section-wrap">
      <div class="section-label">{{ t('coaching.problemLabel') }}</div>
      <h2 class="section-title">{{ t('coaching.problemTitle') }}</h2>
      <p class="section-sub">{{ t('coaching.problemSub') }}</p>
      <div class="feat-problem-grid">
        <article v-for="n in 4" :key="n" class="feat-problem-card">
          <div class="feat-problem-icon">{{ t(`coaching.problem${n}Icon`) }}</div>
          <div class="feat-problem-card-inner">
            <p class="feat-problem-card-title">{{ t(`coaching.problem${n}Title`) }}</p>
            <p class="feat-problem-card-desc">{{ t(`coaching.problem${n}Desc`) }}</p>
          </div>
        </article>
      </div>
    </section>

    <div class="divider" />

    <!-- 11 AI Coaching Skills -->
    <section id="skills" class="section-wrap">
      <div class="section-label">{{ t('coaching.skillsLabel') }}</div>
      <h2 class="section-title">{{ t('coaching.skillsTitle') }}</h2>
      <p class="section-sub">{{ t('coaching.skillsSub') }}</p>
      <div class="cch-skills-grid">
        <div v-for="n in 11" :key="n" class="cch-skill-pill">
          {{ t(`coaching.skill${n}`) }}
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- The Coaching Loop -->
    <section id="loop" class="section-wrap">
      <div class="section-label">{{ t('coaching.loopLabel') }}</div>
      <h2 class="section-title">{{ t('coaching.loopTitle') }}</h2>
      <p class="section-sub">{{ t('coaching.loopSub') }}</p>
      <div class="cch-loop-grid">
        <article class="cch-loop-card">
          <div class="cch-loop-phase">{{ t('coaching.loopBefore') }}</div>
          <div class="cch-loop-tool">{{ t('coaching.beforeTool') }}</div>
          <p class="cch-loop-desc">{{ t('coaching.beforeDesc') }}</p>
          <div class="feat-lever-outcome">{{ t('coaching.beforeBadge') }}</div>
        </article>
        <article class="cch-loop-card">
          <div class="cch-loop-phase">{{ t('coaching.loopDuring') }}</div>
          <div class="cch-loop-tool">{{ t('coaching.duringTool') }}</div>
          <p class="cch-loop-desc">{{ t('coaching.duringDesc') }}</p>
          <div class="feat-lever-outcome">{{ t('coaching.duringBadge') }}</div>
        </article>
        <article class="cch-loop-card">
          <div class="cch-loop-phase">{{ t('coaching.loopAfter') }}</div>
          <div class="cch-loop-tool">{{ t('coaching.afterTool') }}</div>
          <p class="cch-loop-desc">{{ t('coaching.afterDesc') }}</p>
          <div class="feat-lever-outcome">{{ t('coaching.afterBadge') }}</div>
        </article>
      </div>
      <div class="cch-swot-box">
        <div>
          <div class="cch-swot-phase">{{ t('coaching.loopSwot') }}</div>
          <div class="cch-swot-tool">{{ t('coaching.swotTool') }}</div>
          <p class="cch-swot-desc">{{ t('coaching.swotDesc') }}</p>
        </div>
        <div class="cch-swot-unique">{{ t('coaching.swotBadge') }}</div>
      </div>
    </section>

    <div class="divider" />

    <!-- Critical Differentiator: no recording needed -->
    <section class="section-wrap">
      <div class="cch-diff-box">
        <div class="cch-diff-icon">🛡️</div>
        <div>
          <div class="section-label" style="margin-bottom: 8px;">{{ t('coaching.diffLabel') }}</div>
          <h3 class="cch-diff-title">{{ t('coaching.diffTitle') }}</h3>
          <p class="cch-diff-sub">{{ t('coaching.diffSub') }}</p>
          <ul class="cch-diff-list">
            <li v-for="n in 4" :key="n">{{ t(`coaching.diff${n}`) }}</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- Industries -->
    <section id="industries" class="section-wrap">
      <div class="section-label">{{ t('coaching.indLabel') }}</div>
      <h2 class="section-title">{{ t('coaching.indTitle') }}</h2>
      <p class="section-sub">{{ t('coaching.indSub') }}</p>
      <div class="cch-ind-grid">
        <article v-for="n in 4" :key="n" class="cch-ind-card">
          <div class="cch-ind-icon">{{ t(`coaching.ind${n}Icon`) }}</div>
          <div class="cch-ind-title">{{ t(`coaching.ind${n}Title`) }}</div>
          <p class="cch-ind-desc">{{ t(`coaching.ind${n}Desc`) }}</p>
          <div class="cch-ind-result">→ {{ t(`coaching.ind${n}Result`) }}</div>
        </article>
      </div>
    </section>

    <div class="divider" />

    <!-- Competitive Battlecards -->
    <section id="compete" class="section-wrap">
      <div class="section-label">{{ t('coaching.compLabel') }}</div>
      <h2 class="section-title">{{ t('coaching.compTitle') }}</h2>
      <p class="section-sub">{{ t('coaching.compSub') }}</p>
      <div class="cch-comp-grid">
        <article v-for="n in 6" :key="n" class="cch-comp-card">
          <div class="cch-comp-name">{{ t(`coaching.comp${n}Name`) }}</div>
          <div class="cch-comp-cols">
            <div>
              <div class="cch-comp-col-label strongs">{{ t('coaching.compWhereStrong') }}</div>
              <ul class="cch-comp-list">
                <li v-for="s in 3" :key="s">{{ t(`coaching.comp${n}Strong${s}`) }}</li>
              </ul>
            </div>
            <div>
              <div class="cch-comp-col-label silvers">{{ t('coaching.compEmpowerWins') }}</div>
              <ul class="cch-comp-list silvers">
                <li v-for="s in 4" :key="s">{{ t(`coaching.comp${n}Silver${s}`) }}</li>
              </ul>
            </div>
          </div>
          <div class="cch-comp-pitch">{{ t(`coaching.comp${n}Pitch`) }}</div>
        </article>
      </div>
    </section>

    <div class="divider" />

    <!-- Positioning / Pitch -->
    <section id="pitch" class="section-wrap">
      <div class="section-label">{{ t('coaching.pitchLabel') }}</div>
      <h2 class="section-title">{{ t('coaching.pitchTitle') }}</h2>
      <p class="section-sub">{{ t('coaching.pitchSub') }}</p>

      <!-- 3 exclusive claims -->
      <div class="cch-claim-grid">
        <div v-for="n in 3" :key="n" class="cch-claim-card">
          <div class="cch-claim-num">{{ ['1️⃣', '2️⃣', '3️⃣'][n - 1] }}</div>
          <div class="cch-claim-title">{{ t(`coaching.claim${n}Title`) }}</div>
          <p class="cch-claim-desc">{{ t(`coaching.claim${n}Desc`) }}</p>
        </div>
      </div>

      <!-- Category comparison -->
      <div class="cch-cat-grid">
        <div class="cch-cat-card">
          <div class="cch-cat-label">{{ t('coaching.cat1Label') }}</div>
          <div class="cch-cat-name">{{ t('coaching.cat1Example') }}</div>
        </div>
        <div class="cch-cat-card empower">
          <div class="cch-cat-label">{{ t('coaching.catEmpowerLabel') }}</div>
          <div class="cch-cat-name">{{ t('coaching.catEmpowerDesc') }}</div>
        </div>
        <div class="cch-cat-card">
          <div class="cch-cat-label">{{ t('coaching.cat2Label') }}</div>
          <div class="cch-cat-name">{{ t('coaching.cat2Example') }}</div>
        </div>
      </div>

      <!-- Final pitch -->
      <div class="cch-final-pitch">
        <div class="cch-final-pitch-quote">{{ t('coaching.finalPitch') }}</div>
        <p class="cch-final-pitch-sub">{{ t('coaching.finalPitchSub') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'coaching' })
const { t } = useI18n()
</script>
