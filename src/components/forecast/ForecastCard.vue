<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StarIcon from '@heroicons/vue/24/outline/StarIcon'
import { useModel } from 'vue'

import type { City } from '@types'
import { TabList, TabEntry } from '../ui'

const props = defineProps<{
  modelValue: City
  disableDelete: boolean
}>()
const city = useModel(props, 'modelValue')

const { t } = useI18n()
</script>

<template>
  <div>
    <TabList>
      <TabEntry>{{ t('weather.select.today') }}</TabEntry>
      <TabEntry>{{ t('weather.select.fiveDays') }}</TabEntry>
    </TabList>
    <button :disabled="disableDelete">×</button>
    <h1>{{ city.name }}</h1>
    <p>{{ t('weather.today') }}</p>
    <button class="icon-button">
      <StarIcon class="star-icon" />
      {{ t('ui.actions.addToFavorites') }}
    </button>
  </div>
</template>

<style scoped lang="postcss">
.star-icon {
  width: 1.5rem;
}

.icon-button {
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  gap: 0.75rem;
}
</style>
