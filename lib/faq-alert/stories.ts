import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { FaqAlert } from './component';

const meta: Meta<typeof FaqAlert> = {
  title: 'Components/FaqAlert',
  component: FaqAlert,
  tags: ['autodocs'],
  argTypes: {
    showClose: { control: 'boolean' },
  },
  args: {
    title: 'Get up to 14.00% APR on your Spot balances',
    description: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        null,
        'Earn automatically for holding a spot balance in select assets. No',
      ),
      React.createElement('p', null, 'lock-up period.'),
    ),
    primaryButton: {
      text: 'Start earning now',
      onClick: () => {
        console.log('Primary button clicked');
      },
    },
    secondaryButton: {
      text: 'Button Text',
      onClick: () => {
        console.log('Secondary button clicked');
      },
    },
    showClose: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const PrimaryOnly: Story = {
  args: {
    secondaryButton: undefined,
  },
};

export const SecondaryOnly: Story = {
  args: {
    primaryButton: undefined,
  },
};

export const NoButtons: Story = {
  args: {
    primaryButton: undefined,
    secondaryButton: undefined,
  },
};

export const NoClose: Story = {
  args: {
    showClose: false,
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Custom Alert Title',
    description: 'This is a custom alert message with different content.',
    primaryButton: {
      text: 'Custom Action',
      onClick: () => {
        console.log('Custom action clicked');
      },
    },
  },
};
