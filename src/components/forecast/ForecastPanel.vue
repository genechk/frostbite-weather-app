<script setup lang="ts">
import { computed, ref } from 'vue'

import { ForecastCard } from '@/components'

const selectedCities = ref([{ name: 'Київ' }])
const disableDelete = computed(() => selectedCities.value.length <= 1)
</script>

<template>
  <div
    v-for="(city, i) in selectedCities"
    :key="city.name"
  >
    <ForecastCard
      v-model="selectedCities[i]"
      :disable-delete="disableDelete"
    />
  </div>
</template>
