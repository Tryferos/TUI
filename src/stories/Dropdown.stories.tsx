import type { Meta, StoryObj } from '@storybook/react';
import {  TUIDropdown } from '../index';
import React, { FC } from 'react';
import { ChipDeleteIcon } from './Chip.components';

const meta = {
  title: 'Basic/Dropdown',
  component: TUIDropdown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    
  },
  args: { //of the component

  },
} satisfies Meta<typeof TUIDropdown<string>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
        hint: 'Select an item',
        items: ['pezww mpala embappe','generali insurance', 'maxima', 'a2a standup', 'bonnie snikaros', 3, 1, 2, 'aa', 'aaa', 'aaaaa'],
        rounded: 12,
        scrollable: true,
        sort: 'alphabetic',
        outline: 'full',
        order: 'asc',
        maxHeight: '30vh',
        darkMode: false,
        search: true,
        animation: {
          enabled: true,
        },
        onItemSelect: (item: any) => console.log(item),
  },
};



