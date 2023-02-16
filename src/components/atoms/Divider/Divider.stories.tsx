import { ComponentMeta, ComponentStory } from '@storybook/react';
import Divider from './Divider';

export default {
  title: 'Atoms/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider />;

export const Primary = Template.bind({});
