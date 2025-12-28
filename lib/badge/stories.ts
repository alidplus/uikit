import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Badge } from './component';
import { variantOptions } from './cva';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variantOptions },
    outline: { control: 'boolean' },
  },
  args: {
    variant: 'completed',
    children: 'Completed',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Completed: Story = {
  args: {
    variant: 'completed',
    children: 'Completed',
  },
};

export const CompletedOutlined: Story = {
  args: {
    variant: 'completed',
    outline: true,
    children: 'Completed',
  },
};

export const Pending: Story = {
  args: {
    variant: 'pending',
    children: 'Pending',
  },
};

export const PendingOutlined: Story = {
  args: {
    variant: 'pending',
    outline: true,
    children: 'Pending',
  },
};

export const Failed: Story = {
  args: {
    variant: 'failed',
    children: 'Failed',
  },
};

export const FailedOutlined: Story = {
  args: {
    variant: 'failed',
    outline: true,
    children: 'Failed',
  },
};

export const Brand: Story = {
  args: {
    variant: 'brand',
    children: 'Label',
  },
};

export const BrandOutlined: Story = {
  args: {
    variant: 'brand',
    outline: true,
    children: 'Label',
  },
};

export const CustomIcon: Story = {
  args: {
    variant: 'completed',
    children: 'Custom',
    icon: React.createElement(
      'svg',
      {
        width: '16',
        height: '16',
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      React.createElement('circle', {
        cx: '8',
        cy: '8',
        r: '7',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      React.createElement('path', {
        d: 'M8 4V8L10 10',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    ),
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'completed',
    children: undefined,
    icon: React.createElement(
      'svg',
      {
        width: '16',
        height: '16',
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      React.createElement('circle', {
        cx: '8',
        cy: '8',
        r: '7',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      React.createElement('path', {
        d: 'M5 8L7 10L11 6',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    ),
  },
};

export const TextOnly: Story = {
  args: {
    variant: 'completed',
    children: 'Text Only',
    icon: null,
  },
};
