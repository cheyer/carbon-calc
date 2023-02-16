import { ComponentMeta, ComponentStory } from '@storybook/react';
import Headline from './Headline';

export default {
  title: 'Atoms/Headline',
  component: Headline
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<typeof Headline> = (args) => <Headline {...args} />;

export const Primary = Template.bind({});
Primary.args = { title: 'Listen Now', description: 'Top picks for you. Updated daily.' };
