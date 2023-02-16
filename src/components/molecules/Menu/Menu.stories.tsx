import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { mockMenuGroup } from '../../../mock/mockData';
import Menu from './Menu';

export default {
  title: 'Molecules/Menu',
  component: Menu
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <BrowserRouter>
    {' '}
    <Menu {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

Primary.args = {
  menuGroup: mockMenuGroup
};
