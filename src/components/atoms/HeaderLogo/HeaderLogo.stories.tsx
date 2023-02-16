import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderLogo from './HeaderLogo';

export default {
  title: 'Atoms/HeaderLogo',
  component: HeaderLogo
} as ComponentMeta<typeof HeaderLogo>;

const Template: ComponentStory<typeof HeaderLogo> = (args) => <HeaderLogo />;

export const Primary = Template.bind({});

Primary.args = {};
