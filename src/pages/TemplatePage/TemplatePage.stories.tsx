import { ComponentMeta, ComponentStory } from '@storybook/react';
import TemplatePage from './TemplatePage';

export default {
  title: 'Pages/TemplatePage',
  component: TemplatePage
} as ComponentMeta<typeof TemplatePage>;

const Template: ComponentStory<typeof TemplatePage> = (args) => <TemplatePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
