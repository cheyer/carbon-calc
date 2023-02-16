import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = { firstName: 'Chris', lastName: 'Heyer' };
