import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TUITooltip } from '../components';
import React, { FC } from 'react';
import { BtnTooltip } from './tooltip.components';

const meta = {
  title: 'Basic/Tooltip',
  component: TUITooltip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    
  },
  args: { //of the component

  },
} satisfies Meta<typeof TUITooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
   children: BtnTooltip({}, null),
   text: 'Tip 101 gia money marixuana sokolata doumani',
   topOffset: 40,
   darkMode: false,
   canCopyTip: true,
   animation: {
    enabled: true,
    duration: 350,
    properties: ['scale'],
   }

  },
};



