<script
  setup
  lang="ts"
  generic="TItem extends BaseAutocompleteItem = BaseAutocompleteItem"
>
import { computed, ref, useModel, type Ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import type { BaseAutocompleteItem } from '@types'

const props = defineProps<{
  modelValue?: TItem
  items: TItem[]
  searchTerm?: string
  disabled?: boolean
  open?: boolean
  caption?: string
}>()

const selectedItem = useModel(props, 'modelValue', { local: true })
const searchTerm = useModel(props, 'searchTerm', { local: true })
const open = useModel(props, 'open', { local: true })

// Filter suggestions
const filterItems = (items: TItem[]) => {
  return items.filter(item => getItemLabel(item).match(searchTerm.value))
}

const suggestions = computed(() => filterItems(props.items))

// Set keyboard interactions
const focusedItem = ref<TItem | null>(null) as Ref<TItem | null>
const focusedItemIndex = computed(() =>
  suggestions.value.indexOf(focusedItem.value as TItem),
)
const onArrowUp = () => {
  if (focusedItemIndex.value > 0) {
    const prev = focusedItemIndex.value - 1
    focusedItem.value = suggestions.value[prev] || null

    return
  }

  // Loop from the last item
  const last = suggestions.value.length - 1
  focusedItem.value = suggestions.value[last]
}

const onArrowDown = () => {
  if (focusedItemIndex.value < suggestions.value.length - 1) {
    const next = focusedItemIndex.value + 1
    focusedItem.value = suggestions.value[next] || null

    return
  }

  // Loop from the first item
  focusedItem.value = suggestions.value[0]
}

// Set mouse interactions
const getItemLabel = (item: TItem) =>
  typeof item === 'string' ? item : item.label

const selectItem = (item: TItem | null) => {
  if (!item) return

  selectedItem.value = item as TItem & true
  searchTerm.value = getItemLabel(item) as string & true
  open.value = false
  focusedItem.value = null
}

// Set click-away listener
const element = ref<HTMLDivElement | null>(null)
onClickOutside(element, () => (open.value = false))
</script>

<template>
  <div ref="element">
    <input
      v-model="searchTerm"
      :disabled="!!disabled"
      @input="open = true"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="selectItem(focusedItem)"
      @keydown.esc="open = false"
    />
    <ul v-if="open">
      <li
        v-for="(suggestion, i) in suggestions"
        :key="getItemLabel(suggestion)"
        :class="i === focusedItemIndex && 'selected-item'"
      >
        <a @click.prevent="selectItem(suggestion)">
          {{ getItemLabel(suggestion) }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
.selected-item {
  background: #efefef;
}
</style>
