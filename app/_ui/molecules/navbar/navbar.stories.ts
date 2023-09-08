import type { Meta, StoryObj } from '@storybook/react'
import Heading from "./NavBar";
import '../../../../styles/global.scss'

const meta: Meta<typeof Heading> = {
  title: 'Styles/Navbar',
  component: Heading,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Heading>

export const HeadingStory: Story = {
  args: {
    image: 'images/logo-mlp.svg',
    items: [
      {
        href: '#',
        name: 'item1'
      },
      {
        href: '#',
        name: 'item2'
      },
      {
        href: '#',
        name: 'item3'
      }
    ],
  },
}
