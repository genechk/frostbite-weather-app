<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
})

useHead({
  title: `${t('app.name')} | ${t('app.description')}`,
  meta: [
    {
      name: 'description',
      content: t('app.slogan'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
