import { ComponentMeta, ComponentStory } from '@storybook/react';
import NoDataContainer from './NoDataContainer';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/NoDataContainer',
  component: NoDataContainer
} as ComponentMeta<typeof NoDataContainer>;

const Template: ComponentStory<typeof NoDataContainer> = (args) => <NoDataContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onReset: action('reset'),
  onAddData: action('onAddData')
};
