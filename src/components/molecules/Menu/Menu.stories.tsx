import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockMenuGroup } from '../../../mock/mockData';
import Menu from './Menu';

export default {
  title: 'Molecules/Menu',
  component: Menu
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  menuGroup: mockMenuGroup
};
