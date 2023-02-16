import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddData from './AddDataPage';

export default {
  title: 'Pages/AddData',
  component: AddData
} as ComponentMeta<typeof AddData>;

// <AddData {...args} />
const Template: ComponentStory<typeof AddData> = (args) => <AddData />;

export const Primary = Template.bind({});
Primary.args = {};
