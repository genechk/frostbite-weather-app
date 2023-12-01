<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import { TabList, TabEntry } from '@/components'

const { t } = useI18n()

const { path } = useRoute()
const selectedTab = ref(0)
if (path === '/favorites') {
  selectedTab.value = 1
}
</script>

<template>
  <div class="page-layout">
    <TabList
      v-model="selectedTab"
      active-class="selected-tab"
      class="tab-list"
    >
      <TabEntry
        class="tab-entry"
        to="/"
      >
        {{ t('ui.tabs.main') }}
      </TabEntry>
      <TabEntry
        class="tab-entry"
        to="/favorites"
      >
        {{ t('ui.tabs.favorites') }}
      </TabEntry>
    </TabList>
    <main class="tab-panel">
      <slot name="selectedTab"></slot>
    </main>
    <slot name="footer">
      <footer class="footer">© genek.tomashko@gmail.com, 2023</footer>
    </slot>
  </div>
</template>

<style scoped lang="postcss">
/** Page */
.page-layout {
  min-height: 100svh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/** Tabs */
.tab-list {
  background-color: #fefefe;
  min-height: 2.5rem;
}
.tab-entry {
  padding: 1rem;
}
.selected-tab {
  background-color: #efefef;
}
.tab-panel {
  flex: 1;
  padding: 1rem;
}

.footer {
  width: 100%;
  text-align: center;
  min-height: 2.5rem;
  padding: 1rem;
  background-color: #efefef;
}
</style>
