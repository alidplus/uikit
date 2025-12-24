import type { Meta, StoryObj } from '@storybook/react-vite';

import { Pagination } from './component';
import { sizeOptions } from './cva';
import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: 'select', options: sizeOptions },
    previousTitle: { control: 'text' },
    nextTitle: { control: 'text' },
    previousDisabled: { control: 'boolean' },
    nextDisabled: { control: 'boolean' },
    onPrevious: { action: 'previous clicked' },
    onNext: { action: 'next clicked' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {
    previousTitle: 'Title',
    nextTitle: 'Title',
    onPrevious: fn(),
    onNext: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const WithoutTitles: Story = {
  args: {
    previousTitle: undefined,
    nextTitle: undefined,
  },
};

export const PreviousDisabled: Story = {
  args: {
    previousDisabled: true,
  },
};

export const NextDisabled: Story = {
  args: {
    nextDisabled: true,
  },
};

export const BothDisabled: Story = {
  args: {
    previousDisabled: true,
    nextDisabled: true,
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
