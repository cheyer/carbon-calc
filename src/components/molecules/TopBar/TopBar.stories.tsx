import { ComponentMeta, ComponentStory } from '@storybook/react';
import TopBar from './TopBar';

export default {
  title: 'Molecules/TopBar',
  component: TopBar
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />;

export const Primary = Template.bind({});
Primary.args = { user: { firstName: 'Chris', lastName: 'Heyer' } };
