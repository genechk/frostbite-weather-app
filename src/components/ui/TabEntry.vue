<script setup lang="ts">
import { computed, type Component } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

export type TabEntryProps = {
  activeClass?: string | (string | undefined)[]
  is?: 'button' | 'a' | Component
  onSelectTab?: (tab: number | undefined) => void
  selectedTab?: number
  to?: RouteLocationRaw
  tabNumber?: number
}

const props = defineProps<TabEntryProps>()

const isSelected = computed(
  () => props.tabNumber != null && props.tabNumber === props.selectedTab,
)

const tabEntry = props.is || props.to ? RouterLink : 'button'
</script>

<template>
  <component
    :is="tabEntry"
    :to="to"
    :class="isSelected && activeClass"
    @click="onSelectTab && onSelectTab(tabNumber)"
  >
    <slot :selected="isSelected"></slot>
  </component>
</template>
