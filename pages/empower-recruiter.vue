<template>
  <div>
    <!-- Hero -->
    <section id="overview" class="hero-onepager">
      <div class="hero-eyebrow">{{ t('feature.heroEyebrow') }}</div>
      <h1 v-html="t('feature.heroH1')" />
      <p class="hero-sub" v-html="t('feature.heroP')" />
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-num">{{ t('feature.stat1Num') }}</div>
          <div class="stat-label">{{ t('feature.stat1Label') }}</div>
        </div>
        <div class="stat">
          <div class="stat-num">{{ t('feature.stat2Num') }}</div>
          <div class="stat-label">{{ t('feature.stat2Label') }}</div>
        </div>
        <div class="stat">
          <div class="stat-num">{{ t('feature.stat3Num') }}</div>
          <div class="stat-label">{{ t('feature.stat3Label') }}</div>
        </div>
      </div>
    </section>

    <!-- Revenue Equation -->
    <section id="equation" class="section-wrap">
      <div class="section-label">{{ t('feature.eqLabel') }}</div>
      <h2 class="section-title">{{ t('feature.eqTitle') }}</h2>
      <p class="section-sub">{{ t('feature.eqSub') }}</p>
      <div class="feat-formula-wrap">
        <div class="feat-formula">
          <div class="feat-formula-card">
            <div class="feat-formula-num">{{ t('feature.eqCard1Title') }}</div>
            <div class="feat-formula-label">{{ t('feature.eqCard1P') }}</div>
          </div>
          <div class="feat-operator">×</div>
          <div class="feat-formula-card">
            <div class="feat-formula-num">{{ t('feature.eqCard2Title') }}</div>
            <div class="feat-formula-label">{{ t('feature.eqCard2P') }}</div>
          </div>
          <div class="feat-operator">×</div>
          <div class="feat-formula-card">
            <div class="feat-formula-num">{{ t('feature.eqCard3Title') }}</div>
            <div class="feat-formula-label">{{ t('feature.eqCard3P') }}</div>
          </div>
        </div>
        <div class="feat-result">
          <div class="feat-result-inner">
            <div class="feat-result-strong">{{ t('feature.eqResultStrong') }}</div>
            <div class="feat-result-span">{{ t('feature.eqResultSpan') }}</div>
          </div>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- Problems -->
    <section id="problems" class="section-wrap">
      <div class="section-label">{{ t('feature.problemsLabel') }}</div>
      <h2 class="section-title">{{ t('feature.problemsTitle') }}</h2>
      <p class="section-sub">{{ t('feature.problemsSub') }}</p>
      <div class="feat-problem-grid">
        <article class="feat-problem-card">
          <div class="feat-problem-icon">{{ t('feature.problem1Icon') }}</div>
          <div class="feat-problem-card-inner">
            <p class="feat-problem-card-title">{{ t('feature.problem1Title') }}</p>
            <p class="feat-problem-card-desc">{{ t('feature.problem1Desc') }}</p>
          </div>
        </article>
        <article class="feat-problem-card">
          <div class="feat-problem-icon">{{ t('feature.problem2Icon') }}</div>
          <div class="feat-problem-card-inner">
            <p class="feat-problem-card-title">{{ t('feature.problem2Title') }}</p>
            <p class="feat-problem-card-desc">{{ t('feature.problem2Desc') }}</p>
          </div>
        </article>
        <article class="feat-problem-card">
          <div class="feat-problem-icon">{{ t('feature.problem3Icon') }}</div>
          <div class="feat-problem-card-inner">
            <p class="feat-problem-card-title">{{ t('feature.problem3Title') }}</p>
            <p class="feat-problem-card-desc">{{ t('feature.problem3Desc') }}</p>
          </div>
        </article>
        <article class="feat-problem-card">
          <div class="feat-problem-icon">{{ t('feature.problem4Icon') }}</div>
          <div class="feat-problem-card-inner">
            <p class="feat-problem-card-title">{{ t('feature.problem4Title') }}</p>
            <p class="feat-problem-card-desc">{{ t('feature.problem4Desc') }}</p>
          </div>
        </article>
      </div>
    </section>

    <div class="divider" />

    <!-- Three Levers -->
    <section id="drivers" class="section-wrap">
      <div class="section-label">{{ t('feature.driversLabel') }}</div>
      <h2 class="section-title">{{ t('feature.driversTitle') }}</h2>
      <p class="section-sub">{{ t('feature.driversSub') }}</p>
      <div class="feat-lever-grid">
        <article class="feat-lever-card">
          <div class="feat-lever-icon">📊</div>
          <h3 class="feat-lever-title">{{ t('feature.lever1Title') }}</h3>
          <p class="feat-lever-desc">{{ t('feature.lever1P') }}</p>
          <div class="feat-lever-outcome">{{ t('feature.lever1Outcome') }}</div>
        </article>
        <article class="feat-lever-card">
          <div class="feat-lever-icon">💬</div>
          <h3 class="feat-lever-title">{{ t('feature.lever2Title') }}</h3>
          <p class="feat-lever-desc">{{ t('feature.lever2P') }}</p>
          <div class="feat-lever-outcome">{{ t('feature.lever2Outcome') }}</div>
        </article>
        <article class="feat-lever-card">
          <div class="feat-lever-icon">⚡</div>
          <h3 class="feat-lever-title">{{ t('feature.lever3Title') }}</h3>
          <p class="feat-lever-desc">{{ t('feature.lever3P') }}</p>
          <div class="feat-lever-outcome">{{ t('feature.lever3Outcome') }}</div>
        </article>
      </div>
    </section>

    <div class="divider" />

    <!-- Measurable Impact -->
    <section id="impact" class="section-wrap">
      <div class="section-label">{{ t('feature.impactLabel') }}</div>
      <h2 class="section-title">{{ t('feature.impactTitle') }}</h2>
      <p class="section-sub">{{ t('feature.impactSub') }}</p>
      <div class="feat-impact-grid">
        <div class="feat-impact-card">
          <div class="feat-impact-stat">
            <div class="feat-impact-stat-num">{{ t('feature.impact1Stat') }}</div>
            <div class="feat-impact-stat-label">{{ t('feature.impact1Label') }}</div>
          </div>
          <div class="feat-impact-text">
            <h4>{{ t('feature.impact1Title') }}</h4>
            <p>{{ t('feature.impact1Desc') }}</p>
          </div>
        </div>
        <div class="feat-impact-card">
          <div class="feat-impact-stat">
            <div class="feat-impact-stat-num">{{ t('feature.impact2Stat') }}</div>
            <div class="feat-impact-stat-label">{{ t('feature.impact2Label') }}</div>
          </div>
          <div class="feat-impact-text">
            <h4>{{ t('feature.impact2Title') }}</h4>
            <p>{{ t('feature.impact2Desc') }}</p>
          </div>
        </div>
        <div class="feat-impact-card">
          <div class="feat-impact-stat">
            <div class="feat-impact-stat-num">{{ t('feature.impact3Stat') }}</div>
            <div class="feat-impact-stat-label">{{ t('feature.impact3Label') }}</div>
          </div>
          <div class="feat-impact-text">
            <h4>{{ t('feature.impact3Title') }}</h4>
            <p>{{ t('feature.impact3Desc') }}</p>
          </div>
        </div>
        <div class="feat-impact-card">
          <div class="feat-impact-stat">
            <div class="feat-impact-stat-num">{{ t('feature.impact4Stat') }}</div>
            <div class="feat-impact-stat-label">{{ t('feature.impact4Label') }}</div>
          </div>
          <div class="feat-impact-text">
            <h4>{{ t('feature.impact4Title') }}</h4>
            <p>{{ t('feature.impact4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="divider" />

    <!-- Product Features -->
    <section id="features" class="section-wrap">
      <div class="section-label">{{ t('feature.featuresLabel') }}</div>
      <h2 class="section-title">{{ t('feature.featuresTitle') }}</h2>
      <p class="section-sub">{{ t('feature.featuresSub') }}</p>
      <div class="feat-features-grid">
        <div class="feat-feature-box dark">
          <div class="feat-feature-box-title">{{ t('feature.feat1Title') }}</div>
          <ul class="feat-feature-list">
            <li>{{ t('feature.feat1Li1') }}</li>
            <li>{{ t('feature.feat1Li2') }}</li>
            <li>{{ t('feature.feat1Li3') }}</li>
            <li>{{ t('feature.feat1Li4') }}</li>
            <li>{{ t('feature.feat1Li5') }}</li>
            <li>{{ t('feature.feat1Li6') }}</li>
          </ul>
        </div>
        <div class="feat-feature-box light">
          <div class="feat-feature-box-title">
            <span class="feat-feature-bh-badge">BH</span>
            {{ t('feature.feat2Title') }}
          </div>
          <ul class="feat-feature-list">
            <li>{{ t('feature.feat2Li1') }}</li>
            <li>{{ t('feature.feat2Li2') }}</li>
            <li>{{ t('feature.feat2Li3') }}</li>
            <li>{{ t('feature.feat2Li4') }}</li>
            <li>{{ t('feature.feat2Li5') }}</li>
            <li>{{ t('feature.feat2Li6') }}</li>
            <li>{{ t('feature.feat2Li7') }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="section-wrap">
      <div class="feat-testimonial-wrap">
        <div class="feat-testimonial-quote-icon">"</div>
        <div>
          <p class="feat-testimonial-text">{{ t('feature.testimonialQuote') }}</p>
          <strong class="feat-testimonial-name">{{ t('feature.testimonialName') }}</strong>
          <span class="feat-testimonial-company"> — {{ t('feature.testimonialCompany') }}</span>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section-wrap">
      <div class="section-label">{{ t('feature.pricingLabel') }}</div>
      <div class="feat-pricing-layout">
        <div class="feat-pricing-text">
          <h3>{{ t('feature.pricingTitle') }}</h3>
          <p>{{ t('feature.pricingSub') }}</p>
        </div>
        <div class="feat-pricing-cards">
          <div class="feat-price-card">
            <div class="feat-price-amount">{{ t('feature.price1Amount') }}</div>
            <span class="feat-price-period">{{ t('feature.price1Period') }}</span>
            <div class="feat-price-name">{{ t('feature.price1Name') }}</div>
            <p class="feat-price-desc">{{ t('feature.price1Desc') }}</p>
          </div>
          <div class="feat-price-card popular">
            <div class="feat-price-popular-tag">{{ t('feature.price2Popular') }}</div>
            <div class="feat-price-amount">{{ t('feature.price2Amount') }}</div>
            <span class="feat-price-period">{{ t('feature.price2Period') }}</span>
            <div class="feat-price-name">{{ t('feature.price2Name') }}</div>
            <p class="feat-price-desc">{{ t('feature.price2Desc') }}</p>
          </div>
          <div class="feat-price-card">
            <div class="feat-price-amount">{{ t('feature.price3Amount') }}</div>
            <span class="feat-price-period">{{ t('feature.price3Period') }}</span>
            <div class="feat-price-name">{{ t('feature.price3Name') }}</div>
            <p class="feat-price-desc">{{ t('feature.price3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'feature' })
const { t } = useI18n()
</script>
