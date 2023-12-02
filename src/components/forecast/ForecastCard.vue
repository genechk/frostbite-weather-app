<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StarIcon from '@heroicons/vue/24/outline/StarIcon'
import { ref, useModel } from 'vue'

import type { City } from '@types'
import { BaseAutocomplete, BaseTabList, BaseTabEntry } from '../ui'

const props = defineProps<{
  modelValue: City
  disableDelete: boolean
}>()
const city = useModel(props, 'modelValue')

const citiesList = ref([
  { label: 'Харків' },
  { label: 'Херсон' },
  { label: 'Запоріжжя' },
])

const { t } = useI18n()
</script>

<template>
  <div>
    <BaseTabList>
      <BaseTabEntry>{{ t('weather.select.today') }}</BaseTabEntry>
      <BaseTabEntry>{{ t('weather.select.fiveDays') }}</BaseTabEntry>
    </BaseTabList>
    <button :disabled="disableDelete">×</button>
    <h1>{{ city.label }}</h1>
    <BaseAutocomplete
      v-model="city"
      :items="citiesList"
    />
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
