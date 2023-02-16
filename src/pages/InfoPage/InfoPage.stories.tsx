import { ComponentMeta, ComponentStory } from '@storybook/react';
import InfoPage from './InfoPage';

export default {
  title: 'Pages/InfoPage',
  component: InfoPage
} as ComponentMeta<typeof InfoPage>;

const Template: ComponentStory<typeof InfoPage> = (args) => <InfoPage />;

export const Primary = Template.bind({});
Primary.args = {};
