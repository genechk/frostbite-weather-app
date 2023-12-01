<script setup lang="ts">
import { ForecastPanel } from '@/components'
import { BaseLayout } from '@/layouts'
</script>

<template>
  <BaseLayout>
    <template #selectedTab>
      <ForecastPanel />
    </template>
  </BaseLayout>
</template>
