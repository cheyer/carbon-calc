import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { mockMenuGroup } from '../../../mock/mockData';
import Sidebar from './Sidebar';

export default {
  title: 'Molecules/Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <BrowserRouter>
    <Sidebar {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

Primary.args = {
  menuGroup: mockMenuGroup
};
