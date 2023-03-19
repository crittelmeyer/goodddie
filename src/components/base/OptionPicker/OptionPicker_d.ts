import type { ReactElement } from 'react'

export type OptionPickerMode = 'list' | 'grid' | 'dropdown'

export type Option = {
  disabled?: boolean
  image?: string
  key: string
  unavailable?: boolean
  value: any
}

export type OptionPickerProps = {
  className?: string
  id?: string
  initialOptions?: Option[]
  isMultiSelect?: boolean
  mode?: OptionPickerMode
  onSelectOption?: (args?: any) => void
  onUnSelectOption?: (args?: any) => void
  options: Option[]
  renderOption?: (renderOptionsProps?: any, onSelectOption?: (args?: any) => void) => ReactElement<any, any>
  title?: string | ReactElement
  subTitle?: string | ReactElement
}
