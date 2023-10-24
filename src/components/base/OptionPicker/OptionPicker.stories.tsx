import { PhoenixLogo, PhoenixLogoColorMode } from 'components/base'

import OptionPicker from './OptionPicker'

import type { Story } from '@storybook/react/types-6-0'
import type { ComponentProps } from 'react'
import type { Option } from './OptionPicker_d'

type Props = ComponentProps<typeof OptionPicker>

const argTypes = {
  label: {
    name: 'label',
    description: 'Description here',
    control: {
      type: 'text'
    }
  }
}

export default {
  title: 'Base/OptionPicker',
  argTypes
}

const Template: Story<Props> = args => <OptionPicker {...args} />

export const Basic = Template.bind({})
Basic.args = {
  isMultiSelect: false,
  options: [
    { key: '5XL', value: '5XL', disabled: true },
    { key: '4XL', value: '4XL' },
    { key: '3XL', value: '3XL', disabled: true },
    { key: '2XL', value: '2XL', disabled: true },
    { key: 'XL', value: 'XL' },
    { key: 'L', value: 'L', unavailable: true },
    { key: 'M', value: 'M' },
    { key: 'XS', value: 'XS' }
  ],
  onSelectOption: () => null,
  onUnSelectOption: () => null
}

const TEST_DATE = '02-14-2022'
const TEST_IMAGE = 'https://i.picsum.photos/id/347/300/200.jpg?hmac=osf3Iz6aJgegjJYL1XPeMAGGeb9sYsPJUJ1rEBugrXk'
const TEST_IMAGE_2 = 'https://i.picsum.photos/id/6/200/300.jpg?hmac=a4Gfsl7hyAvOnmQtzoEkQmbiLJFl7otISIdoYQWqJCo'

const defaultArgs = {
  isMultiSelect: false,
  onSelectOption: (): Option => null,
  onUnSelectOption: (): Option => null
}
const imagesOptions = [
  {
    key: '1',
    value: TEST_DATE,
    image: TEST_IMAGE
  },
  {
    key: '2',
    value: TEST_DATE,
    image: TEST_IMAGE_2
  },
  {
    key: '3',
    value: TEST_DATE,
    image: TEST_IMAGE_2
  },
  {
    key: '4',
    value: TEST_DATE,
    image: TEST_IMAGE_2,
    unavailable: true
  },
  {
    key: '5',
    value: TEST_DATE,
    image: TEST_IMAGE_2,
    disabled: true
  }
]

export const WithImages = Template.bind({})
WithImages.args = { ...defaultArgs, options: imagesOptions }

export const ListWithImages = Template.bind({})
ListWithImages.args = {
  ...defaultArgs,
  subTitle: '',
  mode: 'list',
  options: imagesOptions
}

export const GridWithVaryingNames = Template.bind({})
GridWithVaryingNames.args = {
  ...defaultArgs,
  options: [
    { key: '5 Extra Large', value: '5 Extra Large', disabled: true },
    { key: '4 Extra Large', value: '4 Extra Large', disabled: true },
    { key: '3 Extra Large', value: '3 Extra Large' },
    { key: '2 Extra Large', value: '2 Extra Large', disabled: true },
    { key: 'Extra Large', value: 'Extra Large' },
    { key: 'Large', value: 'Large', disabled: true },
    { key: 'Medium', value: 'Medium', unavailable: true },
    { key: 'Small', value: 'Small' },
    { key: 'Extra Small', value: 'Extra Small' }
  ]
}

const TEST_DATES = ['Tomorrow, March 4', 'Saturday, March 5', 'Monday, March 7', 'Tuesday, March 8']

export const BasicList = Template.bind({})
BasicList.args = {
  ...defaultArgs,
  subTitle: '',
  mode: 'list',
  options: [
    { key: TEST_DATES[0], value: TEST_DATES[0] },
    { key: TEST_DATES[1], value: TEST_DATES[1] },
    { key: TEST_DATES[2], value: TEST_DATES[2], unavailable: true },
    { key: TEST_DATES[3], value: TEST_DATES[3], disabled: true }
  ]
}

export const RenderOptionList = Template.bind({})
RenderOptionList.args = {
  ...defaultArgs,
  subTitle: '',
  mode: 'list',
  options: [
    { key: '1', value: { mode: PhoenixLogoColorMode.grey } },
    { key: '2', value: { mode: PhoenixLogoColorMode.primary } },
    { key: '3', value: { mode: PhoenixLogoColorMode.light }, unavailable: true },
    { key: '4', value: { mode: PhoenixLogoColorMode.primary }, disabled: true }
  ],
  renderOption: option => (
    <div style={{ backgroundColor: option.disabled ? 'red' : '' }}>
      <PhoenixLogo mode={option.value.mode} />
    </div>
  )
}

export const DropDownList = Template.bind({})
DropDownList.args = {
  ...defaultArgs,
  mode: 'dropdown',
  title: 'Select Date',
  options: [
    { key: TEST_DATES[0], value: TEST_DATES[0] },
    { key: TEST_DATES[1], value: TEST_DATES[1] },
    { key: TEST_DATES[2], value: TEST_DATES[2], unavailable: true },
    { key: TEST_DATES[3], value: TEST_DATES[3], disabled: true }
  ]
}
