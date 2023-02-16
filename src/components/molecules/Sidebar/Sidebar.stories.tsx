import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockMenuGroup } from '../../../mock/menuData';
import Sidebar from './Sidebar';

export default {
  title: 'Molecules/Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  menuGroup: mockMenuGroup
};