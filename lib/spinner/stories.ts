import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from './component';
import { sizeOptions, typeOptions } from './cva';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: { control: 'select', options: typeOptions },
    size: { control: 'select', options: sizeOptions },
    supportingText: { control: 'boolean' },
  },
  args: {
    supportingText: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Line Simple - All Sizes
export const LineSimpleSmall: Story = {
  args: {
    type: 'line-simple',
    size: 'sm',
  },
};

export const LineSimpleMedium: Story = {
  args: {
    type: 'line-simple',
    size: 'md',
  },
};

export const LineSimpleLarge: Story = {
  args: {
    type: 'line-simple',
    size: 'lg',
  },
};

export const LineSimpleXLarge: Story = {
  args: {
    type: 'line-simple',
    size: 'xl',
  },
};

// Line Spinner - All Sizes
export const LineSpinnerSmall: Story = {
  args: {
    type: 'line-spinner',
    size: 'sm',
  },
};

export const LineSpinnerMedium: Story = {
  args: {
    type: 'line-spinner',
    size: 'md',
  },
};

export const LineSpinnerLarge: Story = {
  args: {
    type: 'line-spinner',
    size: 'lg',
  },
};

export const LineSpinnerXLarge: Story = {
  args: {
    type: 'line-spinner',
    size: 'xl',
  },
};

// Dot Circle - All Sizes
export const DotCircleSmall: Story = {
  args: {
    type: 'dot-circle',
    size: 'sm',
  },
};

export const DotCircleMedium: Story = {
  args: {
    type: 'dot-circle',
    size: 'md',
  },
};

export const DotCircleLarge: Story = {
  args: {
    type: 'dot-circle',
    size: 'lg',
  },
};

export const DotCircleXLarge: Story = {
  args: {
    type: 'dot-circle',
    size: 'xl',
  },
};

// Without Supporting Text
export const LineSimpleWithoutText: Story = {
  args: {
    type: 'line-simple',
    size: 'md',
    supportingText: false,
  },
};

export const LineSpinnerWithoutText: Story = {
  args: {
    type: 'line-spinner',
    size: 'md',
    supportingText: false,
  },
};

export const DotCircleWithoutText: Story = {
  args: {
    type: 'dot-circle',
    size: 'md',
    supportingText: false,
  },
};
