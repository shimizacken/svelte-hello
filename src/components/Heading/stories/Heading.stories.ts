import { HeadingType } from '../../../types/textTypes'
import Heading from '../Heading.svelte'

export default {
  title: 'Elements/Heading',
  component: Heading,
  argTypes: {
    text: { control: 'text' },
  },
}

const Template = ({ onClick, ...args }) => ({
  Component: Heading,
  props: args,
})

export const Primary = Template.bind({})
Primary.args = {
  text: 'H1',
  headingType: HeadingType.H1,
}
