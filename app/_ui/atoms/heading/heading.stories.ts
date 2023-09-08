import type { Meta, StoryObj } from '@storybook/react'
import Heading from "./Heading";
import '../../../../styles/global.scss'

const meta: Meta<typeof Heading> = {
  title: 'Styles/Typography',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      name: 'text',
    },
    level: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      control: 'select',
    }
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const HeadingStory: Story = {
  args: {
    level: '1',
    children: 'Text',
  },
}
