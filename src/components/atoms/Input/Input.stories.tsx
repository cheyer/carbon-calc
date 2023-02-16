import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = { label: 'Some Label' };

export const WithError = Template.bind({});
WithError.args = { error: 'Some Error' };
