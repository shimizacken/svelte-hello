import Heading from '../Heading.svelte'

export default {
  title: 'Elements/Heading',
  component: Heading,
  //   argTypes: {
  //     label: { control: "text" },
  //     primary: { control: "boolean" },
  //     backgroundColor: { control: "color" },
  //     size: {
  //       control: { type: "select", options: ["small", "medium", "large"] },
  //     },
  //     onClick: { action: "onClick" },
  //   },
}

const Template = ({ onClick, ...args }) => ({
  Component: Heading,
  props: args,
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
