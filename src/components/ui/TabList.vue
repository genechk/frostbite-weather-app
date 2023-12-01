<script setup lang="ts">
import { ref } from 'vue'
import { useSlots, onMounted, useModel } from 'vue'

import { logger } from '@/utils'

export type TabListProps = {
  activeClass?: string | (string | undefined)[]
  defaultTab?: number
  modelValue?: number
  singleTabClass?: string
}

const props = defineProps<TabListProps>()

const totalTabs = ref(0)
const slots = useSlots()
const tabs = slots.default
const selectedTab = useModel(props, 'modelValue', {
  local: true,
})

// Set default tab
if (selectedTab.value === undefined) {
  selectedTab.value = props.defaultTab ?? 0
}

const onSelectTab = (tab: number | undefined) => {
  if (tab == null) return

  selectedTab.value = tab
}

onMounted(() => {
  totalTabs.value = tabs ? tabs()?.length : 0

  if (totalTabs.value === 0) {
    return logger.warn('[TabList.vue] Add Tabs to use TabList')
  }
})

const TabEntries = () => {
  const tabEntries = tabs && tabs()
  if (!tabEntries) return null

  return tabEntries.map((vnode, index) => {
    return {
      ...vnode,
      props: {
        activeClass: props.activeClass,
        tabNumber: index,
        selectedTab: selectedTab.value,
        singleTabClass: props.singleTabClass,
        onSelectTab,
        ...vnode.props,
      },
    }
  })
}
</script>

<template>
  <div>
    <TabEntries />
  </div>
</template>
