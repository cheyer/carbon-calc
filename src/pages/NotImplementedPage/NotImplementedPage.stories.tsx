import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotImplementedPage from './NotImplementedPage';

export default {
  title: 'Pages/NotImplementedPage',
  component: NotImplementedPage
} as ComponentMeta<typeof NotImplementedPage>;

const Template: ComponentStory<typeof NotImplementedPage> = (args) => <NotImplementedPage />;

export const Primary = Template.bind({});
Primary.args = {};
