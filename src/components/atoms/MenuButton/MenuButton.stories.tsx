import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PlayCircle } from 'lucide-react';
import MenuButton from './MenuButton';

export default {
  title: 'Atoms/MenuButton',
  component: MenuButton
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => <MenuButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'Click Me' };

export const WithIcon = Template.bind({});
WithIcon.args = { text: 'Click Me', Icon: PlayCircle };

export const Selected = Template.bind({});
Selected.args = { text: 'Click Me - I am selected' };
