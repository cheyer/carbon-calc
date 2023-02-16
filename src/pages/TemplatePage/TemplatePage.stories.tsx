import { ComponentMeta, ComponentStory } from '@storybook/react';
import { menuConfig } from '../../config/menu';
import { mockUser } from '../../mock/mockData';
import TemplatePage from './TemplatePage';

export default {
  title: 'Pages/TemplatePage',
  component: TemplatePage
} as ComponentMeta<typeof TemplatePage>;

const Template: ComponentStory<typeof TemplatePage> = (args) => <TemplatePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  menuConfig: menuConfig,
  user: mockUser,
  content: <p>Some Content</p>
};
