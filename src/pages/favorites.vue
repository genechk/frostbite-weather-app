<script setup lang="ts">
import { BaseLayout } from '@/layouts'
import { FavoritesPanel } from '@/components/favorites'
</script>

<template>
  <BaseLayout>
    <template #selectedTab>
      <FavoritesPanel />
    </template>
  </BaseLayout>
</template>
