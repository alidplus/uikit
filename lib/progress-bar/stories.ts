import type { Meta, StoryObj } from '@storybook/react-vite';

import React from 'react';
import { ProgressBar } from './component';
import { labelOptions } from './cva';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: { control: 'number', min: 0, max: 100 },
    max: { control: 'number', min: 1 },
    label: { control: 'select', options: labelOptions },
  },
  args: {
    value: 50,
    max: 100,
    label: 'none',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// All progress increments for each type
const progressLevels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export const AllLevelsNone: Story = {
  render: () => {
    return React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' } },
      progressLevels.map((value) =>
        React.createElement(ProgressBar, {
          key: value,
          label: 'none',
          value,
        }),
      ),
    );
  },
};

export const AllLevelsRight: Story = {
  render: () => {
    return React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' } },
      progressLevels.map((value) =>
        React.createElement(ProgressBar, {
          key: value,
          label: 'right',
          value,
        }),
      ),
    );
  },
};

export const AllLevelsBottom: Story = {
  render: () => {
    return React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' } },
      progressLevels.map((value) =>
        React.createElement(ProgressBar, {
          key: value,
          label: 'bottom',
          value,
        }),
      ),
    );
  },
};

export const AllLevelsTopFloating: Story = {
  render: () => {
    return React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '48px', width: '320px' } },
      progressLevels.map((value) =>
        React.createElement(ProgressBar, {
          key: value,
          label: 'top-floating',
          value,
        }),
      ),
    );
  },
};

export const AllLevelsBottomFloating: Story = {
  render: () => {
    return React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '48px', width: '320px' } },
      progressLevels.map((value) =>
        React.createElement(ProgressBar, {
          key: value,
          label: 'bottom-floating',
          value,
        }),
      ),
    );
  },
};
