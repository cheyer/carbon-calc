import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Click me' };

export const Outline = Template.bind({});
Outline.args = { children: 'Click me', variant: 'outline' };

export const Destructive = Template.bind({});
Destructive.args = { children: 'Click me', variant: 'destructive' };

export const Subtle = Template.bind({});
Subtle.args = { children: 'Click me', variant: 'subtle' };

export const Ghost = Template.bind({});
Ghost.args = { children: 'Click me', variant: 'ghost' };

export const Disabled = Template.bind({});
Disabled.args = { children: 'Click me', disabled: true };
