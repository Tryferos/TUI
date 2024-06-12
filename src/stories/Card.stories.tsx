import type { Meta, StoryObj } from '@storybook/react';
import {  TUISimpleCard, TUIDetailedCard } from '../index';
import React, { FC } from 'react';

const meta = {
  title: 'Basic/Card',
  component: TUIDetailedCard,
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
    description: 'This is a cool description his is a cool description his is a cool description his is a cool description' ,
    label: 'Mpoukia Mpoukia Mpouki ladadika',
    image: '../../public/undraw_breakfast_psiw.svg',
    extraDetails: <div className='flex justify-between'><p>Price: 1000$</p><p>4.6 stars</p></div>,
    tags: [{label: '2$',},{label: 'Hot'}, {label: '1+1'},]
  },
};



