import Link from './Link'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Link> = {
  title: 'Components/Buttons/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      name: 'text',
    },
    color: {
      options: ['black', 'white'],
      control: 'select',
      defaultValue: 'black',
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const LinkStory: Story = {
  args: {
    children: 'Link',
    href: '#',
  },
}
