import { createCard } from './card';

export default {
  title: 'Design System/Atoms/Card',
}

const Template = ({ ...args }) => createCard({ ...args })

export const Default = Template.bind({});

Default.args = {
  description: 'Description',
  title: 'Title',
}