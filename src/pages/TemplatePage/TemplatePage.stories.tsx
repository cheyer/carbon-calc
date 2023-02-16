import { ComponentMeta, ComponentStory } from '@storybook/react';
import TemplatePage from './TemplatePage';

export default {
  title: 'Pages/TemplatePage',
  component: TemplatePage
} as ComponentMeta<typeof TemplatePage>;

// <TemplatePage {...args} />
const Template: ComponentStory<typeof TemplatePage> = (args) => <TemplatePage />;

export const Primary = Template.bind({});
Primary.args = {};
