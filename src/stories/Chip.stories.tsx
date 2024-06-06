import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TUIChip } from '../components';
import React, { FC } from 'react';
import { ChipDeleteIcon } from './Chip.components';

const meta = {
  title: 'Basic/Chip',
  component: TUIChip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    
  },
  args: { //of the component

  },
} satisfies Meta<typeof TUIChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Movies',
    // color: "#444444",
    enabled: true,
    onClick: () => {},
    onIconClick: () => {console.log('icon')},
    icon: <ChipDeleteIcon/>,
    selected: true,
    darkMode: false,
  },
};



