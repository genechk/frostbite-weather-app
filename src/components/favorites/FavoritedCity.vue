<script setup lang="ts">
defineProps<{
  cityName: string
  onDelete: (cityName: string) => void
}>()
</script>

<template>
  <div class="city">
    {{ cityName }}
    <button @click="onDelete(cityName)">×</button>
  </div>
</template>

<style scoped lang="postcss">
.city {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0.5rem;
  gap: 0.5rem;
}
</style>
