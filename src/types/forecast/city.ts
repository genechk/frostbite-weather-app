import type { BaseAutocompleteItem } from '../ui'

export type City = BaseAutocompleteItem & {
  name: string
  label: string
}
