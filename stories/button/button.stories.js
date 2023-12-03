import { createButton } from './button'

export default {
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      }
    },
    style: {
      name: 'Style',
      options: ['filled', 'outlined'],
      control: {
        type: 'radio',
      }
    },
    size: {
      name: 'Size',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      }
    },
  },
  title: 'Design System/Atoms/Button',
}

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
}

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
  style: 'filled',
}
