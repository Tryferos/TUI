import type { Meta, StoryObj } from '@storybook/react';
import {  TUISimpleCard } from '../index';
import React, { FC } from 'react';

const meta = {
  title: 'Basic/Card',
  component: TUISimpleCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    
  },
  args: { //of the component

  },
} satisfies Meta<typeof TUISimpleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    description: 'This is a cool description',
    label: 'Mpoukia Mpoukia',
    image: '../../public/undraw_breakfast_psiw.svg',
  },
};



