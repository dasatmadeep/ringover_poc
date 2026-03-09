<template>
  <section id="usecases" class="section-wrap">
    <div class="section-label">{{ t('uc.label') }}</div>
    <h2 class="section-title">{{ t('uc.title') }}</h2>
    <p class="section-sub">{{ t('uc.sub') }}</p>
    <div class="uc-box">
      <div class="uc-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="uc-tab"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ t(`uc.tab.${tab.id}`) }}
        </button>
      </div>
      <div v-for="tab in tabs" :key="'pane-' + tab.id" :id="'pane-' + tab.id" class="uc-pane" :class="{ active: activeTab === tab.id }">
        <div>
          <div class="persona-header">
            <div class="persona-avatar">{{ tab.icon }}</div>
            <div>
              <div class="persona-name">{{ t(`uc.${tab.id}.name`) }}</div>
              <div class="persona-role">{{ t(`uc.${tab.id}.role`) }}</div>
            </div>
          </div>
          <div class="q-list">
            <template v-for="(q, idx) in tab.questionsLeft" :key="'l-' + idx">
              <div :class="['q-item', q.hi ? 'hi' : '']">
                <div class="q-text">{{ t(`uc.${tab.id}.q${q.t}t`) }}</div>
                <div class="q-val">{{ t(`uc.${tab.id}.q${q.t}v`) }}</div>
              </div>
            </template>
          </div>
        </div>
        <div>
          <div class="value-box">
            <div class="value-box-label">{{ t('uc.valLabel') }}</div>
            <div class="value-box-text">{{ t(`uc.${tab.id}.val`) }}</div>
          </div>
          <div class="q-list">
            <template v-for="(q, idx) in tab.questionsRight" :key="'r-' + idx">
              <div :class="['q-item', q.hi ? 'hi' : '']">
                <div class="q-text">{{ t(`uc.${tab.id}.q${q.t}t`) }}</div>
                <div class="q-val">{{ t(`uc.${tab.id}.q${q.t}v`) }}</div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const activeTab = ref('rep')

const tabs = [
  { id: 'rep', icon: '💼', questionsLeft: [{ t: 1, hi: true }, { t: 2, hi: true }, { t: 3 }, { t: 4, hi: true }, { t: 5 }, { t: 6 }], questionsRight: [{ t: 7 }, { t: 8 }, { t: 9, hi: true }, { t: 10 }, { t: 11 }] },
  { id: 'mgr', icon: '📈', questionsLeft: [{ t: 1, hi: true }, { t: 2, hi: true }, { t: 3 }, { t: 4, hi: true }, { t: 5 }], questionsRight: [{ t: 6 }, { t: 7, hi: true }, { t: 8 }, { t: 9, hi: true }, { t: 10 }] },
  { id: 'support', icon: '🎧', questionsLeft: [{ t: 1, hi: true }, { t: 2, hi: true }, { t: 3 }, { t: 4, hi: true }, { t: 5 }], questionsRight: [{ t: 6 }, { t: 7, hi: true }, { t: 8 }, { t: 9 }] },
  { id: 'recruiter', icon: '👥', questionsLeft: [{ t: 1, hi: true }, { t: 2, hi: true }, { t: 3 }, { t: 4 }, { t: 5, hi: true }], questionsRight: [{ t: 6 }, { t: 7, hi: true }, { t: 8 }] },
  { id: 'coach', icon: '🏆', questionsLeft: [{ t: 1, hi: true }, { t: 2, hi: true }, { t: 3 }, { t: 4, hi: true }, { t: 5 }], questionsRight: [{ t: 6 }, { t: 7, hi: true }, { t: 8 }, { t: 9 }] },
]
</script>
