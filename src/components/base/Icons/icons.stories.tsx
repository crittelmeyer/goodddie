/* eslint-disable storybook/story-exports */
export default {
  title: 'Base/Icons',
  argTypes: {
    color: {
      name: 'color',
      description: 'Color of the icon',
      options: ['action', 'disabled', 'inherit', 'primary', 'secondary', 'error'],
      control: {
        type: 'select'
      }
    },
    fontSize: {
      name: 'fontSize',
      description: 'Font size of the icon',
      options: ['default', 'inherit', 'large', 'medium', 'small'],
      control: {
        type: 'select'
      }
    },
    htmlColor: {
      name: 'htmlColor',
      description: 'Html color to apply to the icon',
      control: {
        type: 'text'
      }
    },
    titleAccess: {
      name: 'titleAccess',
      description: 'Accessible title for icon',
      control: {
        type: 'text'
      }
    },
    viewBox: {
      name: 'viewBox',
      description: 'View box of the icon',
      control: {
        type: 'text'
      }
    }
  }
}

export * from './AlertInfoIcon/AlertInfoIcon.stories'
export * from './BoxIcon/BoxIcon.stories'
export * from './ChatIcon/ChatIcon.stories'
export * from './ChevronLeftIcon/ChevronLeftIcon.stories'
export * from './ChevronRightIcon/ChevronRightIcon.stories'
export * from './CircleCheckmarkIcon/CircleCheckmarkIcon.stories'
export * from './CircleIcon/CircleIcon.stories'
export * from './CircleOutlinedCheckmarkIcon/CircleOutlinedCheckmarkIcon.stories'
export * from './CrossIcon/CrossIcon.stories'
export * from './EmailIcon/EmailIcon.stories'
export * from './HelpIcon/HelpIcon.stories'
export * from './InfoIcon/InfoIcon.stories'
export * from './MinusIcon/MinusIcon.stories'
export * from './PlusIcon/PlusIcon.stories'
export * from './RedirectIcon/RedirectIcon.stories'
export * from './UserIcon/UserIcon.stories'
