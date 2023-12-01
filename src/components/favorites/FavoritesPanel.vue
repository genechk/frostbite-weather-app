<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import FavoritedCity from './FavoritedCity.vue'

const { t } = useI18n()
const favorited = ref(['Харків', 'Київ', 'Токіо'])
const onDeleteCity = (deletedCity: string) => {
  favorited.value = favorited.value.filter(city => city !== deletedCity)
}
</script>

<template>
  <div>
    <h1>{{ t('favorites.header') }}</h1>

    <FavoritedCity
      v-for="city in favorited"
      :key="city"
      :city-name="city"
      :on-delete="onDeleteCity"
    />
  </div>
</template>
