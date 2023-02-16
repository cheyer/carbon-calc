import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
  title: 'Atoms/Select',
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select Car',
  options: [
    { value: 'volvo', name: 'Volvo' },
    { value: 'saab', name: 'Saab' },
    { value: 'mercedes', name: 'Mercedes' },
    { value: 'audi', name: 'Audi' }
  ]
};
