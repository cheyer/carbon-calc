import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { menuConfig } from '../../config/menu';
import { mockUser } from '../../mock/mockData';
import TemplatePage from './TemplatePage';

export default {
  title: 'Pages/TemplatePage',
  component: TemplatePage
} as ComponentMeta<typeof TemplatePage>;

const Template: ComponentStory<typeof TemplatePage> = (args) => (
  <BrowserRouter>
    <TemplatePage {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  menuConfig: menuConfig,
  user: mockUser,
  children: <p>Some Content</p>
};
