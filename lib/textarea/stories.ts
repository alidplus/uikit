import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Textarea } from './component';
import { sizeOptions } from './cva';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: sizeOptions },
    showLabel: { control: 'boolean' },
    showHint: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    placeholder: 'Input',
    hint: 'this is a message',
    showLabel: true,
    showHint: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Hover: Story = {
  args: {},
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Focus: Story = {
  args: {},
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export const Active: Story = {
  args: {
    defaultValue: 'Input',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    error: 'this is an error message',
  },
};

export const WithIcon: Story = {
  args: {
    iconStart: React.createElement(
      'svg',
      {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      React.createElement('path', {
        d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      React.createElement('circle', {
        cx: '12',
        cy: '7',
        r: '4',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    ),
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
  },
};

export const WithoutHint: Story = {
  args: {
    showHint: false,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
