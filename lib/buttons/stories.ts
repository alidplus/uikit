import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './component';
import { sizeOptions, variantOptions } from './cva';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: variantOptions,
    },
    size: { control: 'select', options: sizeOptions },
    block: { control: 'boolean' },
    className: { control: 'text' },
    loading: { control: 'boolean' },
    icStart: { control: 'text' },
    icEnd: { control: 'text' },
    disabled: { control: 'boolean' },
    outline: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn(), variant: 'primary', children: 'Button Text' },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const PrimaryWithIcons: Story = {
  args: {
    icStart: 'bi-plus',
    icEnd: 'bi-arrow-right',
  },
};

export const PrimaryOutline: Story = {
  args: {
    outline: true,
  },
};

export const PrimaryOutlineWithIcons: Story = {
  args: {
    outline: true,
    icStart: 'bi-plus',
    icEnd: 'bi-arrow-right',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const SecondaryWithIcons: Story = {
  args: {
    variant: 'secondary',
    icStart: 'bi-plus',
    icEnd: 'bi-arrow-right',
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: 'secondary',
    outline: true,
  },
};

export const SecondaryOutlineWithIcons: Story = {
  args: {
    variant: 'secondary',
    outline: true,
    icStart: 'bi-plus',
    icEnd: 'bi-arrow-right',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const TertiaryWithIcons: Story = {
  args: {
    variant: 'tertiary',
    icStart: 'bi-plus',
    icEnd: 'bi-arrow-right',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const DestructiveWithIcons: Story = {
  args: {
    variant: 'destructive',
    icStart: 'bi-plus',
    icEnd: 'bi-arrow-right',
  },
};

export const DestructiveOutline: Story = {
  args: {
    variant: 'destructive',
    outline: true,
  },
};

export const DestructiveOutlineWithIcons: Story = {
  args: {
    variant: 'destructive',
    outline: true,
    icStart: 'bi-plus',
    icEnd: 'bi-arrow-right',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Block: Story = {
  args: {
    block: true,
  },
};
